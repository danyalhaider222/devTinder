const express = require("express");
const app = express();

// app.use("/", (req, res) => {
//     res.send("Namaste");
// })


// Will work for all type of http routes
app.use("/test", (req, res) => {
    res.send("Hello from the server!");
});

app.get("/ab*c", (req, res) => {
    res.send("Testing routing");
})
app.get(/a/, (req, res) => {
    res.send("Testing Regex in routing");
})

app.get("/user", (req, res) => {
    res.send({ first_name: "Danyal", last_name: "Haider" });
});

app.post("/user", (req, res) => {
    res.send("Data is saved on the database");
})

app.put("/user", (req, res) => {
    res.send("User's data is updated.");
});
app.delete("/user", (req, res) => {
    res.send("User's data is deleted");
})
// app.use("/hello", (req, res) => {
//     res.send("hello, hello");
// });

app.use("/testingroute", (req, res) => {
    //route handler
});

app.use("/testingnext",
    [(req, res, next) => {
        console.log("Handling the first route")
        next();

    },
    (req, res, next) => {
        console.log("Handling the second route");
      res.send("2nd Route is executed");
        next();

    },
    (req, res, next) => {
        console.log("Handling the third route");
        res.send("3rd Route is executed");
        next();
    }]
)

app.listen(3000, () => {
    console.log("Server is running on port 3000 ")
});