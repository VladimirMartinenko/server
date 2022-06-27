const { Tasks } = require("../models");

module.exports.createTasks = async (req, res, next) => {
  try {
    const { body } = req;
    const tasks = await Tasks.create(body);
    res.send({ data: tasks });
  } catch (error) {
    next(error);
  }
};

module.exports.findAllTasks = async (req, res, next) => {
  try {
    const tasks = await Tasks.findAll();
    res.send({ data: tasks });
  } catch (error) {
    next(error);
  }
};

module.exports.findTaskbyId = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const task = await Tasks.findByPk(id);
    res.send({ data: task });
  } catch (error) {
    next(error);
  }
};
module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const [rowsUpdatet,[updateTask]] = await Tasks.update(body, { where: { id },returning:true });
    if(rowsUpdatet!=1){
      throw new ('cant update task')
    }
    
    res.send({ data: updateTask });
  } catch (error) {
    next(error);
  }
};


module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const deleteRows = await Tasks.destroy({ where: { id }});
    if(deleteRows!=1){
      throw new ('cant delete task')
    }
    
    res.send({ data:{id} });
  } catch (error) {
    next(error);
  }
};
