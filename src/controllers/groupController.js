const Group = require("../models/Group");
const Message = require("../models/Message");

exports.createGroup = async (req, res) => {
  try {
    const { name, members } = req.body;
    const group = new Group({ name, members: [req.user.id, ...members] });
    await group.save();
    res.status(201).json(group);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.sendGroupMessage = async (req, res) => {
  try {
    const { groupId } = req.params;
    const { content } = req.body;
    const senderId = req.user.id;

    const group = await Group.findById(groupId);
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    if (!group.members.includes(senderId)) {
      return res
        .status(403)
        .json({ error: "You are not a member of this group" });
    }

    const message = new Message({
      sender: senderId,
      group: groupId,
      content,
    });

    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
