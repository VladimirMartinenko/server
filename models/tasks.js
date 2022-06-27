"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tasks.init(
    {
      body: {
        allowNull: false,
        type: DataTypes.STRING(600),
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      isDone: { field: "is_done", type: DataTypes.BOOLEAN },
      deadline: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Tasks",
      underscored: true,
      tableName: "tasks",
    }
  );
  return Tasks;
};
