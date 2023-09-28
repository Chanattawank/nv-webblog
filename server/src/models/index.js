const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const config = require('../config/config') //.. คือ ออกจากโฟลเดอร์ปัจจุบัน ไป 1 เลเวล
const db = {}

const sequelize = new Sequelize( //สร้างดาต้าเบส ประกาศตัวแปล
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs.readdirSync(__dirname) //เข้าไปอ่านไฟล์ มองว่าตัวไฟล์ต่างๆที่อยู่ใน Models มองเป็น list ทั้งหมด
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db