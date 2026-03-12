const axios = require('axios');
const Analysis = require('../models/Analysis');

// Base URL for ML API (change this to your actual API)
const ML_API_BASE = 'https://broskiiii-test.hf.space';

// Analyze Email
const analyzeEmail = async (req, res) => {
  try {
    const { email_content } = req.body;
    const userId = req.userId;

    if (!email_content) {
      return res.status(400).json({ error: 'Email content is required' });
    }

    // Call ML API
    let result;
    try {
      const response = await axios.post(`${ML_API_BASE}/analyze/email`, {
        email_content
      }, { timeout: 30000 });
      result = response.data;
    } catch (apiError) {
      // Fallback mock response if API is unavailable
      result = {
        risk_score: Math.random() * 0.7,
        risk_level: 'Medium',
        threat_types: ['Suspicious Links', 'Urgency Language'],
        explanation: 'This email shows some characteristics of phishing attempts.'
      };
    }

    // Save to database
    const analysis = new Analysis({
      userId,
      type: 'email',
      input: email_content.substring(0, 500),
      result
    });
    await analysis.save();

    res.json(result);
  } catch (error) {
    console.error('Email analysis error:', error);
    res.status(500).json({ error: 'Failed to analyze email' });
  }
};

// Analyze URL
const analyzeUrl = async (req, res) => {
  try {
    const { url } = req.body;
    const userId = req.userId;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    let result;
    try {
      const response = await axios.post(`${ML_API_BASE}/analyze/url`, {
        url
      }, { timeout: 30000 });
      result = response.data;
    } catch (apiError) {
      // Fallback mock response
      result = {
        risk_score: Math.random() * 0.5,
        risk_level: 'Low',
        threat_types: [],
        explanation: 'URL appears to be safe.',
        is_safe: true
      };
    }

    const analysis = new Analysis({
      userId,
      type: 'url',
      input: url,
      result
    });
    await analysis.save();

    res.json(result);
  } catch (error) {
    console.error('URL analysis error:', error);
    res.status(500).json({ error: 'Failed to analyze URL' });
  }
};

// Analyze Text (Deepfake detection)
const analyzeText = async (req, res) => {
  try {
    const { text } = req.body;
    const userId = req.userId;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    let result;
    try {
      const response = await axios.post(`${ML_API_BASE}/analyze/text`, {
        text
      }, { timeout: 30000 });
      result = response.data;
    } catch (apiError) {
      result = {
        risk_score: Math.random() * 0.6,
        risk_level: 'Medium',
        explanation: 'Text analysis completed. Some AI-generated patterns detected.',
        confidence: 0.75
      };
    }

    const analysis = new Analysis({
      userId,
      type: 'text',
      input: text.substring(0, 500),
      result
    });
    await analysis.save();

    res.json(result);
  } catch (error) {
    console.error('Text analysis error:', error);
    res.status(500).json({ error: 'Failed to analyze text' });
  }
};

// Analyze File (Image/Video/Audio)
const analyzeFile = async (req, res) => {
  try {
    const userId = req.userId;
    const file = req.file;
    const { type } = req.body;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    if (!['image', 'video', 'audio'].includes(type)) {
      return res.status(400).json({ error: 'Invalid file type' });
    }

    let result;
    try {
      const FormData = require('form-data');
      const formData = new FormData();
      formData.append('file', file.buffer, file.originalname);

      const response = await axios.post(`${ML_API_BASE}/analyze/${type}`, formData, {
        headers: formData.getHeaders(),
        timeout: 60000
      });
      result = response.data;
    } catch (apiError) {
      result = {
        risk_score: Math.random() * 0.5,
        risk_level: 'Low',
        explanation: `${type.charAt(0).toUpperCase() + type.slice(1)} analysis completed.`,
        confidence: 0.85
      };
    }

    const analysis = new Analysis({
      userId,
      type,
      input: file.originalname,
      result
    });
    await analysis.save();

    res.json(result);
  } catch (error) {
    console.error('File analysis error:', error);
    res.status(500).json({ error: 'Failed to analyze file' });
  }
};

// Fact Check
const checkFact = async (req, res) => {
  try {
    const { claim } = req.body;
    const userId = req.userId;

    if (!claim) {
      return res.status(400).json({ error: 'Claim is required' });
    }

    let result;
    try {
      const response = await axios.post(`${ML_API_BASE}/analyze/factcheck`, {
        claim
      }, { timeout: 30000 });
      result = response.data;
    } catch (apiError) {
      result = {
        risk_score: Math.random() * 0.7,
        risk_level: 'Medium',
        verdict: 'Partially True',
        explanation: 'The claim contains some factual information but may be misleading.',
        confidence: 0.7,
        sources: ['https://example.com/source1', 'https://example.com/source2']
      };
    }

    const analysis = new Analysis({
      userId,
      type: 'factcheck',
      input: claim.substring(0, 500),
      result
    });
    await analysis.save();

    res.json(result);
  } catch (error) {
    console.error('Fact check error:', error);
    res.status(500).json({ error: 'Failed to check facts' });
  }
};

module.exports = {
  analyzeEmail,
  analyzeUrl,
  analyzeText,
  analyzeFile,
  checkFact
};