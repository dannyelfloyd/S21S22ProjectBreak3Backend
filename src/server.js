import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001


app.use(cors(
    {origin: "https://s21s22projectbreak3frontend.netlify.app"},
));
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    app.listen(PORT, ()=>{console.log(`Server started on http://localhost:${PORT}`)});
});