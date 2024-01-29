module.exports = (sequelize, Sequelize) => {
    const usersCodes = sequelize.define("usersCodes", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
  
      usercode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    return usersCodes;
  };
  