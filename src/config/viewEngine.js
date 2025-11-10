import express from "express";

const configViewEngine = (app) => {
  app.use(express.static("./src/public")); // Thư mục chứa file tĩnh (CSS, JS, hình)
  app.set("view engine", "ejs"); // Sử dụng EJS
  app.set("views", "./src/views"); // Thư mục chứa file .ejs
};


export default configViewEngine;

