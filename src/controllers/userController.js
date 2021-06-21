import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET_KEY;

export const join = async (req, res) => {
  const { name, email, password, password2 } = req.body;
  const exists = await User.exists({ email });

  if (exists) {
    return res.status(400).json({ success: false, errorMessage: "이메일 주소가 이미 존재합니다." });
  }

  if (password !== password2) {
    return res.status(400).json({ success: false, errorMessage: "비밀번호가 일치하지 않습니다." });
  }

  try {
    await User.create({
      name,
      email,
      password,
    });

    return res.status(201).json({ success: true, successMessage: "유저 생성 완료!" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, errorMessage: error._message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ loginSuccess: false, errorMessage: "아이디 정보가 없습니다." });
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    return res.status(400).json({ loginSuccess: false, errorMessage: "비밀번호가 틀렸습니다." });
  }

  // 토큰 생성 & 저장
  const token = jwt.sign(user._id.toString(), SECRET);
  user.token = token;
  await user.save();
  return res.cookie("_auth", token).status(200).json({ loginSuccess: true, userId: user._id });
};
