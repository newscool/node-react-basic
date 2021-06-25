import User from "../models/User";
import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET_KEY;

const auth = async (req, res, next) => {
  const token = req.cookies.x_auth;

  const decoded = await jwt.verify(token, SECRET);
  const user = await User.findOne({ _id: decoded, token: token });
  if (!user) {
    return res.status(400).json({ isAuth: false, errorMessage: "회원정보가 존재하지 않습니다." });
  }
  req.token = token;
  req.user = user;

  next();
};

export default auth;
