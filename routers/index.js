const express = require("express");
const router = express.Router();

const TasksController = require('../controllers/task.controller');
router.post('/tasks', TasksController.createTasks);
router.get('/tasks',TasksController.findAllTasks);
router.get('/task/:id',TasksController.findTaskbyId);
router.put('/task/:id',TasksController.updateTask);
router.delete('/task/:id',TasksController.deleteTask);
// router.get("/", (req, res) => {
//   res.send("ok from router");
// });

// router.get("/users/:id", (req, res, next) => {
//   const {
//     params: { id },
//   } = req;
//   res.send(id);
// });

// router.post("/users", (req, res, next) => {
//   const { body } = req;
//   res.send(body);
// });
module.exports = router;
