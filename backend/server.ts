import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@projects.w9tgi77.mongodb.net/?retryWrites=true&w=majority&appName=PROJECTS`)

