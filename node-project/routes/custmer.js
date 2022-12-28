import { Router } from "express";
const custmer = Router();

custmer
  .get("/", (req, res) => {
    res.send("custmer get");
  })
  .post("/", (req, res) => {
    res.send("custmer post");
  })
  .put("/", (req, res) => {
    res.send("custmer put");
  })
  .delete("/", (req, res) => {
    res.send("custmer delete");
  });

export default custmer;
