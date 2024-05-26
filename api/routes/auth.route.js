import express from 'express';

const router = express.Router();

// Assuming you've imported necessary modules and set up your User model

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Validate input fields (similar to your existing validation)
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }

        // Check if the user already exists (based on email)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already exists' });
        }

        // Create a new user
        const newUser = new User({
            username,
            email,
            password, // You'll hash the password later
        });

        // Save the user to the database (you need to implement this part)
        // Example using Mongoose:
        await newUser.save();

        // Respond with success message
        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export default router;