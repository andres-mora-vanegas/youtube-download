const fs = require("fs");
const ytdl = require("ytdl-core");
const ffmpeg = require("ffmpeg");
let videoStitch = require("video-stitch");

let videoCut = videoStitch.cut;

// const url = "https://www.youtube.com/watch?v=XR3w7Lyx1Yo&t=504s";
const url = "https://www.youtube.com/watch?v=a3ICNMQW7Ok";

options = { begin: "20s" };

ytdl.getInfo(url, options, processFile);

function processFile(err, info) {
  if (err) {
    console.log(`err`, err);
  } else {
    try {
      let filename = "ouput/" + info.title + ".mp4";
      fs.writeFileSync("response.json", JSON.stringify(info));

      ytdl(url, options)
        .pipe(fs.createWriteStream(filename))
        .on("finish", a => {
          console.log(`a`, a);
          //   var process = new ffmpeg(filename);
          //   process
          //     .then(
          //       function(video) {
          //         console.log(`video`, video);
          //         console.log("The video is ready to be processed");
          //         video
          //           .setVideoStartTime("00:00:05")
          //           .setVideoDuration(10)
          //           //   .output("public/videos/techyhunger/videofile.mp4")
          //           .save("/path/to/save/your_movie.mp4", function(error, file) {
          //             if (error) {
          //               console.log(`error`, error);
          //             } else {
          //               console.log("Video file: " + file);
          //             }
          //           });
          //       },
          //       function(err) {
          //         console.log("Error: " + err);
          //       }
          //     )
          //     .catch(error => {
          //       console.log(`error`, error);
          //     });
        });
    } catch (error) {
      console.log(`error`, error);
    }
  }
}
