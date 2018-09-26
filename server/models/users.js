module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
        name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 50],
            msg: 'Name can be no longer than 50 characters.'
        }
        },
        email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140],
            msg: "Email can be no longer than 140 characters."
        }
        },
        password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[1, 30],
            msg: 'Password can be no longer than 30 characters.'
        }
        },
        image: {
        type: DataTypes.STRING,
        allowNull: true
        }
    });
    return User;
};