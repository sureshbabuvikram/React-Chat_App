// const express = require("express");
// const cors = require("cors");
// const { default: axios } = require("axios");
import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express();
app.use(express.json());
app.use(cors());

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const result = await axios.put("https://api.chatengine.io/users/",
            {
                "username": username,
                "secret": username,
                "first_name":username
            },
            {
                headers:{"private-key":"354cde1a-7bf8-475c-95d0-8b8ce96917d7"}
            })
        return res.status(result.status).json(result.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)

    }


    return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);