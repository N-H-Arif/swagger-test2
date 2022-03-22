const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load("./api.yaml");
const app = express();
app.use(express.json())
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

let users = [
    {
        name: "Md Shamsuddoha Russel",
        username: "Russel767",
        password: "123456",
        passwordConfirmation: "123456",
        currentInstitute: "Kernel",
        currentPosition: "Worker",
        phone: ["01762694455"]  
    },
];

let otpuser = [
    {
        userId: "62115a7cd7fd542eadc2a88a"
    },
];

let otpverify = [
    { 
        otp: "985823",
        userId: "62115a7cd7fd542eadc2a88a"
    },
];

let userlogin = [
    { 
        userId: "62115a7cd7fd542eadc2a88a",
        password: "123456"
    },
];

let createquiz = [
    {
        title: "Model test 1",
        type: "model-test",
        status: "upcomming",
        intervalType: "one-time",
        description: "This is description for model test",
        instruction: "Follow all the rules",
        slug: "model1",
        tags: ["model1", "ssc"],
        category: "ssc",
        totalQuestion: 10,
        totalMarks: 10,
        totalTimeInMinutes: 10,
        startTime: "2020-05-15",
        endTime: "2024-05-15"
      },
]

app.get("/users/:id", (req, res) => {
    const obj = users.find((x) => x.id === parseInt(req.params.id));
    res.status(200).send(obj);
});


app.post("/createuser", (req, res) => {
    users = [req.body, ...users];
    res.send(users);
});

app.post("/createotp", (req, res) => {
    otpuser = [req.body, ...otpuser];
    res.send(otpuser);
});

app.post("/otpverify", (req, res) => {
    otpverify = [req.body, ...otpverify];
    res.send(otpverify);
});

app.post("/userlogin", (req, res) => {
    userlogin = [req.body, ...userlogin];
    res.send(userlogin);
});

app.post("/createquiz", (req, res) => {
    createquiz = [req.body, ...createquiz];
    res.send(createquiz);
});

app.get("/usersQuery", (req, res) => {
    const obj = users.find((x) => x.id === parseInt(req.query.id));
    res.status(200).send(obj);
});

app.listen(4000, () => console.log("Running"));