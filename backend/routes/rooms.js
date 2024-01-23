const express = require("express");
const {
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/rooms");

const router = express.Router();

// GET All Hotels
router.get("/", getRooms);

// GET Room
router.get("/:id", getRoom);

// Create Room
router.post("/:hotelid", createRoom);

// Update Room
router.put("/:id", updateRoom);

// DELETE Room
router.delete("/:id/:hotelid", deleteRoom);

module.exports = router;
