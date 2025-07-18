const Newsletter = require('../models/Newsletter');

exports.subscribeEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const subscriber = new Newsletter({ email });
    await subscriber.save();
    res.status(201).json(subscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find();
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
