const express = require("express");
const Hotel = require("../models/hotels");
const {
  getHotels,
  getHotel,
  createHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotels");

const router = express.Router();

// GET All Hotels
router.get("/", getHotels);

// GET Hotel
router.get("/:id", getHotel);

// Create Hotel
router.post("/", createHotel);

// Update Hotel
router.put("/:id", updateHotel);

// DELETE Hotel
router.delete("/:id", deleteHotel);

module.exports = router;
