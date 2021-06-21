import User from "../models/User";

export const join = async (req, res) => {
  const { name, email, password, password2 } = req.body;
  const exists = await User.exists({ email });

  if (exists) {
    return res.status(400).json({ errorMessage: "이메일 주소가 이미 존재합니다." });
  }

  if (password !== password2) {
    return res.status(400).json({ errorMessage: "비밀번호가 일치하지 않습니다." });
  }

  try {
    await User.create({
      name,
      email,
      password,
    });

    return res.status(200).json({ success: "유저 생성 완료!" });
  } catch (error) {
    return res.status(400).json({ errorMessage: error._message });
  }
};
