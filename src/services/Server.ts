import express from "express";
import app from "./App";
import mainRoute from "../routes/main";

const PORT = process.env.PORT || 4000;

app.use(mainRoute);
app.listen(PORT, () =>
  console.log(`Server Running and Listen to PORT ${PORT}`)
);
