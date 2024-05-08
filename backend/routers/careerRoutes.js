const express = require("express");
const {
  createJobs,
  getAllJobs,
  deleteJob,
} = require("../controller/careerController");

const router = express.Router();

router.post("/", createJobs);
router.get("/get-jobs", getAllJobs);
router.delete("/delete-job/:id", deleteJob);

module.exports = router;
