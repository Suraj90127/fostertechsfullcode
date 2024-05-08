const asyncHandler = require("express-async-handler");
const Career = require("../model/careerModel");

const createJobs = asyncHandler(async (req, res) => {
  const { title, skills, exp, qua, des } = req.body;
  try {
    const career = await Career.create({ title, skills, exp, qua, des });
    res.status(200).json({
      success: true,
      message: "Jobs Created successfully",
      career,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in contact form",
      error,
    });
  }
});

const getAllJobs = asyncHandler(async (req, res) => {
  try {
    const jobs = await Career.find();
    res.status(200).json({
      success: true,
      message: "Jobs retrieved successfully",
      jobs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error retrieving jobs",
      error,
    });
  }
});

const deleteJob = asyncHandler(async (req, res) => {
  const jobId = req.params.id; // Assuming you're passing job ID as a parameter
  try {
    // Assuming your Career model has a method to find and delete by ID
    const deletedJob = await Career.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
      deletedJob,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in deleting job",
      error: error.message, // Sending error message for better understanding
    });
  }
});

module.exports = { createJobs, getAllJobs, deleteJob };
