import express from "express";

const PORT = 5000;
const app = express();
const handleListen = () => console.log(`Server Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListen);
