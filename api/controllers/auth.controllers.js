export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    const newUser = new User({
        username,
        email,
        password,
    });

    await newUser.save();
    res.json('Signup successful');
};

