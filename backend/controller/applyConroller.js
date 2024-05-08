const asyncHandler = require("express-async-handler");
const Apply = require("../model/applyModel");

// const addLreader = asyncHandler(async (req, res) => {
//     const { name, } =
//       req.body;
//     try {
//       const findApplyUser = await Apply.findOne({ status });
//       console.log("uuuuuuuuuuuu", findLeader);
//       if (!findLeader) {
//         // const uploader = await cloudinaryUploadImg(req.file.path);
//         //   console.log(uploader);
//         const image = req.file;
//         //   console.log("iii", image);

//         const newLeader = await Leader.create({
//           name,
//           status,
//           exp,
//           part1,
//           part2,
//           part3,
//           part4,
//           part5,
//           about,
//           image,
//         });
//         res.status(201).json(newLeader);
//       } else {
//         res.status(400).json({ message: "Leader allredy exist" });
//       }
//     } catch (error) {
//       console.log(error);
//       res.status(400).json({ message: "Internal server error", error });
//     }
//   });
