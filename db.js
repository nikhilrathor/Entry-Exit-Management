const Sequelize = require('sequelize')

const db = new Sequelize('innovaccer', 'innovaccer', 'innovaccer', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const Visitor = db.define('visitors', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phoneno: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    host: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const Host = db.define('host', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phoneno: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    Visitor, Host
}