const Room = require("../models/rooms");
const Hotel = require("../models/hotels");

const createRoom = async (req, res) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      res.status(400).json(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    res.status(400).json(error);
  }
};

// UPDATE Room
const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE Room
const deleteRoom = async (req, res) => {
  const hotelId = req.params.hotelid;

  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      res.status(400).json(error);
    }
    res.status(200).json({ mssg: "Room has been deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET Rooms
const getRooms = async (req, res) => {
  const rooms = await Room.find({}).sort({ createdAt: -1 });
  res.status(200).json(rooms);
};

// GET Room
const getRoom = async (req, res) => {
  try {
    const room = await r.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { createRoom, updateRoom, deleteRoom, getRoom, getRooms };
