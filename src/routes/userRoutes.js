// quản lý API
// quản lý chức năng của đối tượng

import express from "express";

const userRoute = express.Router();

import { getUser, getLikes } from "../controllers/userController.js";

// ORM: sequelize, prisma
userRoute.get("/get-user", getUser);
userRoute.get("/get-likes/:userId", getLikes);
// videoRoute.post("/create-video", createVideo);

// // API trả về danh sách video type
// videoRoute.get("/get-video-type", getVideoType);

// // API trả về danh sách video theo type_id
// // localhost:8080/api/video/get-video-typeid/{params.id}
// videoRoute.get("/get-video-typeid/:typeId", getVideoTypeId);

// // localhost:8080/api/video/get-video-id/{videoId}
// videoRoute.get("/get-video-id/:videoId", getVideoId);
export default userRoute;
