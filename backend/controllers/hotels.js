const Hotel = require("../models/hotels");

// CREATE Hotel
const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE Hotel
const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE Hotel
const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ mssg: "Hotel has been deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET Hotels
const getHotels = async (req, res) => {
  const hotels = await Hotel.find({}).sort({ createdAt: -1 });
  res.status(200).json(hotels);
};

// GET Hotel
const getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { getHotels, getHotel, createHotel, updateHotel, deleteHotel };
