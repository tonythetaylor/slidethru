import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";
import db from "../models/index.js";

const messageList = [];

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    if (!receiverId)
      return res.status(400).json({ message: "Please select a user!" });

    let conversation = await Conversation.findOne({
      where: {
        participants: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = Message.build({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      messageList.push(newMessage._id);
    }
    conversation = await Conversation.update(
      {
        messages: messageList,
      },
      { where: { _id: conversation._id } }
    );
    console.log(conversation.messages);
    // await conversation.save();
    await Promise.all([conversation, newMessage.save()]);

    res.status(201).json("Message sent succesfully ");
  } catch (error) {
    console.log("Create chatroom error:", error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      where: {
        participants: [senderId, userToChatId],
      },
    })

    if(!conversation) return res.status(200).json([])


    const messages = await Message.findAll({
      where: { _id : conversation.messages}
    })
 
    res.status(200).json(messages);
  } catch (error) {
    console.log(
      `\n \x1b[31m ERROR : Error in getMessages controller ${error.message} \x1b[0m \n`
    );
    res.status(500).json({ err: "Internal Server Error" });
  }
};
