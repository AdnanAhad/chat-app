const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {
  try {
    const { receiverId, groupId, content } = req.body;
    const senderId = req.user.id;

    const message = new Message({
      sender: senderId,
      receiver: receiverId,
      group: groupId,
      content,
    });

    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getMessageHistory = async (req, res) => {
  try {
    const { withUserId, groupId } = req.query;
    const userId = req.user.id;
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 20;

    let query;
    if (groupId) {
      query = { group: groupId };
    } else {
      query = {
        $or: [
          { sender: userId, receiver: withUserId },
          { sender: withUserId, receiver: userId },
        ],
      };
    }

    const messages = await Message.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .populate("sender", "username")
      .populate("receiver", "username");

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
