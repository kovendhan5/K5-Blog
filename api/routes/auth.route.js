import express from 'express';
import { signup } from '../controllers/auth.controllers.js';

const router = express.Router();

// Assuming you've imported necessary modules and set up your User model

router.post('/signup', signup);


export default router;