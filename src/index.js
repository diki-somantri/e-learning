const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const express = require("express");
const { cors } = require("./middlewares/app");
const authRouter = require("./routes/auth.router");
const userRouter = require("./routes/user.router");
const profileRouter = require("./routes/profile.router");
const kelasRouter = require("./routes/kelas.router");
const mataPelajaranRouter = require("./routes/mataPelajaran.router");
const babRouter = require("./routes/bab.router");
const subBabRouter = require("./routes/subBab.router");
const materiRouter = require("./routes/materi.router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors);

if (!process.env.JWT_SECRET) {
  console.error(
    "JWT_SECRET is not provided, fill it with random string or generate it using 'openssl rand -hex 32'"
  );
  process.exit(1);
}

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/profile", profileRouter);
app.use("/api/kelas", kelasRouter);
app.use("/api/matapelajaran", mataPelajaranRouter);
app.use("/api/bab", babRouter);
app.use("/api/subbab", subBabRouter);
app.use("/api/materi", materiRouter);
app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server Running");
});
