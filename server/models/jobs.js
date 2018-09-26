module.exports = function(sequelize, DataTypes) {
  let Job = sequelize.define("Job", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    applied: {
      type: DataTypes.BOOLEAN,
      defaultValue: null
    }
  });
  return Job;
};
  