const asyncHandler = require("express-async-handler");
const Leader = require("../model/leaderModel");
const { cloudinaryUploadImg } = require("../utils/Cloudynary");

// add leader
const addLreader = asyncHandler(async (req, res) => {
  const { name, status, exp, part1, part2, part3, part4, part5, about, image } =
    req.body;
  try {
    const findLeader = await Leader.findOne({ status });
    console.log("uuuuuuuuuuuu", findLeader);
    if (!findLeader) {
      // const uploader = await cloudinaryUploadImg(req.file.path);
      //   console.log(uploader);
      const image = req.file;
      //   console.log("iii", image);

      const newLeader = await Leader.create({
        name,
        status,
        exp,
        part1,
        part2,
        part3,
        part4,
        part5,
        about,
        image,
      });
      res.status(201).json(newLeader);
    } else {
      res.status(400).json({ message: "Leader allredy exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal server error", error });
  }
});

const getAllleader = asyncHandler(async (req, res) => {
  try {
    // Retrieve all users from the database
    const leader = await Leader.find();

    // Send the users as a response
    res.json(leader);
  } catch (error) {
    console.error("Error fetching Leader:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const getLeader = asyncHandler(async (req, res) => {
  const leaderId = req.params.id;
  try {
    // Retrieve all users from the database
    const leader = await Leader.findById(leaderId);

    // Send the users as a response
    res.json(leader);
  } catch (error) {
    console.error("Error fetching leader:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const updateLeader = asyncHandler(async (req, res) => {
  const leaderId = req.params.id;
  const updateData = req.body;
  try {
    const updatedLeader = await Leader.findByIdAndUpdate(leaderId, updateData, {
      new: true,
    });

    if (!updatedLeader) {
      // If Leader not found, return 404 Not Found
      return res.status(404).json({ message: "Leader not found" });
    }
    res.json({ updateLeader });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const deleteLeader = asyncHandler(async (req, res) => {
  const leaderId = req.params.id;
  try {
    const deletedLeader = await Leader.findByIdAndDelete(leaderId);

    if (!deletedLeader) {
      // If Leader not found, return 404 Not Found
      return res.status(404).json({ message: "Leader not found" });
    }

    // If Leader found and deleted, return it
    res.status(200).json({
      message: "Leader deleted successfully",
      Leader: deletedLeader,
    });
  } catch (error) {
    console.error("Error deleting Leader:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = {
  addLreader,
  getLeader,
  getAllleader,
  updateLeader,
  deleteLeader,
};
