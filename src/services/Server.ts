import express from "express";
import app from "./App";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server Running and Listen to PORT ${PORT}`)
);
