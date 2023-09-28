module.exports = (sequelize, DataTypes) => { //สร้างตาราง
    const User = sequelize.define('User', { //ตั้งชื่อไฟล์ให้ตรงกัน
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        status: DataTypes.STRING,
        type: DataTypes.STRING
    })
    return User
}