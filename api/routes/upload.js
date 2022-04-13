const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
const test = require('child_process').exec
const fs = require('fs');

const videoStorage = multer.diskStorage({
  destination: "./temp",
  filename: (req, file, cb) => {
    if (req.body.fileName) {
      cb(
        null,
        req.body.fileName + "_" + Date.now() + path.extname(file.originalname)
      );
    } else {
      const newName = file.originalname.replace(/\..*/, "");
      cb(null, newName + "_" + Date.now() + path.extname(file.originalname));
    }
  }
});

const videoUpload = multer({
  storage: videoStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(mp4|MPEG-4|mkv)$/)) {
      return cb(new Error("Please upload a video"));
    }
    cb(undefined, true);
  }
});

router.post("/add-file", videoUpload.single("file"), (req, res, next) => {
  ffmpeg()
    .addInput(req.file.path)
    //.inputOption('flags:v+ildct')
    .videoCodec('libx264')
    .audioCodec('aac')
    .on("start", function(ffmpegCommand) {
      console.log(ffmpegCommand)
    })
    .on("progress", function(data) {
      console.log(data)
    })
    .on("end", function() {
      console.log("end of transcoded")
      fs.unlink("./temp/" + req.file.filename, function (err) {
        if (err) throw err;
       });
       res.send(req.file);
    })
    .on("error", function(error) {
      console.log("error",error)
      fs.unlink("./temp/" + req.file.filename, function (err) {
        if (err) throw err;
       });
    }) 
    .save(`video/${req.file.filename}`);
});

module.exports = router;
