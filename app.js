const express = require("express");

const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send(`
        <h1>🚀 Welcome to My Node.js Project , This is created from AI</h1>
        <p>This application is deployed on AWS EC2.r</p>
        <hr>
        <h3>Features</h3>
        <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>AWS EC2</li>
        </ul>
    `);
});

// About Route
app.get("/about", (req, res) => {
    res.send("<h2>This is the About Page.</h2>");
});

// Contact Route
app.get("/contact", (req, res) => {
    res.send("<h2>Email: demo@example.com</h2>");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
