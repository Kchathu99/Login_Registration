const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
    try {
        console.log("Received request:", req.body);

        // Validate the request body
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        // Find user by email
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password" });

        // Compare provided password with hashed password in the database
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" });

        // Generate authentication token
        const token = user.generateAuthToken();

        // Send token and success message
        res.status(200).send({ data: token, message: "Logged in successfully" });

        console.log("Response sent successfully");
    } catch (error) {
        // Log the error and send a 500 Internal Server Error response
        console.error("Error in authentication route:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

// Validation function using Joi
const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password"),
    });
    return schema.validate(data);
};

module.exports = router;
