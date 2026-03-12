const Analysis = require('../models/Analysis');

// Get analysis history
const getHistory = async (req, res) => {
  try {
    const userId = req.userId;
    const { type, limit = 50, page = 1 } = req.query;

    const query = { userId };
    if (type) query.type = type;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const analyses = await Analysis.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Analysis.countDocuments(query);

    res.json({
      analyses,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('Get history error:', error);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
};

// Get user stats
const getStats = async (req, res) => {
  try {
    const userId = req.userId;

    const totalScans = await Analysis.countDocuments({ userId });

    const riskDistribution = await Analysis.aggregate([
      { $match: { userId: require('mongoose').Types.ObjectId(userId) } },
      { $group: { _id: '$result.risk_level', count: { $sum: 1 } } }
    ]);

    const typeDistribution = await Analysis.aggregate([
      { $match: { userId: require('mongoose').Types.ObjectId(userId) } },
      { $group: { _id: '$type', count: { $sum: 1 } } }
    ]);

    const recentScans = await Analysis.find({ userId })
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      totalScans,
      riskDistribution,
      typeDistribution,
      recentScans
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};

// Delete analysis
const deleteAnalysis = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const analysis = await Analysis.findOneAndDelete({ _id: id, userId });

    if (!analysis) {
      return res.status(404).json({ error: 'Analysis not found' });
    }

    res.json({ message: 'Analysis deleted successfully' });
  } catch (error) {
    console.error('Delete analysis error:', error);
    res.status(500).json({ error: 'Failed to delete analysis' });
  }
};

module.exports = {
  getHistory,
  getStats,
  deleteAnalysis
};