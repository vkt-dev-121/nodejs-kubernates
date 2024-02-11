const express = require("express");
const app = express();

const PORT = 3000;

app.get('/' , (req,res) => {
    res.send("Hello from Nodejs app deployed on kubernates!");

})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})