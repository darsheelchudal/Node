import express from "express";
import users from "./MOCK_DATA.json" assert { type: "json" };

const app = express();
const PORT = 8000;

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("Hello from middleware 1");
  req.myUsername = "Darsheel";
  next();
});
app.use((req, res, next) => {
  console.log("Hello from middleware 2", req.myUsername);
  next();
});
//Routes
//html  render
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
 `;
  res.send(html);
});
//REST API
app.get("/api/users", (req, res) => {
  console.log("I am in get route", req.myUsername);
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

//Post
app.post("/api/users", (req, res) => {
  const body = req.body;

  return res.json({ status: "pending" });
});
app.patch("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});
app.delete("/api/users/:id", (req, res) => {
  return res.json({ status: "pending" });
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
