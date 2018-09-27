module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140],
        }
        },
        password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[1, 30],
        }
        },
        image: {
        type: DataTypes.STRING,
        allowNull: true
        }
    });
    return User;
};