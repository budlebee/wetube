/* eslint-disable indent */
import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo
  } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();


// upload video
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

// edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// delete video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
