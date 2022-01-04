import express from "express";
import { postUsers } from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.route("/").post(postUsers);
userRouter.route("/login").post((req, res) => res.send("여기는 로컬 로그인"));

/* 
  로그아웃은 프론트엔드에서 localStorage 토큰 삭제로 구현 예정
*/
export default userRouter;
