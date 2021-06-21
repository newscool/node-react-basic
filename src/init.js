import "dotenv/config";
import express from "express";
import "./db";
import app from "./server";

const PORT = 5000;
const handleListen = () => console.log(`🚀 Server Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListen);
