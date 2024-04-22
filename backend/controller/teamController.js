const asyncHandler = require("express-async-handler");
const Team = require("../model/teamModel");
const { cloudinaryUploadImg } = require("../utils/Cloudynary");

// add leader
const addTeam = asyncHandler(async (req, res) => {
  const { name, part, about } = req.body;
  try {
    const findTeam = await Team.findOne({ name });
    console.log("uuuuuuuuuuuu", findTeam);
    if (!findTeam) {
      const uploader = await cloudinaryUploadImg(req.file.path);
      //   console.log(uploader);
      const image = req.file;
      //   console.log("iii", image);

      const newTeam = await Team.create({
        name,
        part,
        about,
        image,
      });
      res.status(201).json(newTeam);
    } else {
      res.status(400).json({ message: "Leader allredy exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal server error", error });
  }
});

const getAllTeam = asyncHandler(async (req, res) => {
  try {
    // Retrieve all users from the database
    const team = await Team.find();

    // Send the users as a response
    res.json(team);
  } catch (error) {
    console.error("Error fetching Leader:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const getTeam = asyncHandler(async (req, res) => {
  const teamId = req.params.id;
  try {
    // Retrieve all users from the database
    const team = await Team.findById(teamId);

    // Send the users as a response
    res.json(team);
  } catch (error) {
    console.error("Error fetching leader:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const updateTeam = asyncHandler(async (req, res) => {
  const teamId = req.params.id;
  const updateData = req.body;
  try {
    const uploader = await cloudinaryUploadImg(req.file.path);
    //   console.log(uploader);
    const image = req.file;
    const updatedTeam = await Team.findByIdAndUpdate(
      teamId,
      updateData,
      image,
      {
        new: true,
      }
    );

    if (!updatedTeam) {
      // If Leader not found, return 404 Not Found
      return res.status(404).json({ message: "Leader not found" });
    }
    res.json({ updateTeam });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const deleteTeam = asyncHandler(async (req, res) => {
  const teamId = req.params.id;
  try {
    const deletedTeam = await Team.findByIdAndDelete(teamId);

    if (!deletedTeam) {
      // If Leader not found, return 404 Not Found
      return res.status(404).json({ message: "Team not found" });
    }

    // If Leader found and deleted, return it
    res.status(200).json({
      message: "Leader deleted successfully",
      Leader: deletedTeam,
    });
  } catch (error) {
    console.error("Error deleting Team:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = {
  addTeam,
  getTeam,
  getAllTeam,
  updateTeam,
  deleteTeam,
};
