module.exports = (sequelize, Sequelize) => {
  const userRegister = sequelize.define("RegisterUser", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ref_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_code: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return userRegister;
};
