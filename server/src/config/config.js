module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'nvWebblogDb', //ไฟล์ชื่อ
        user: process.env.DB_User || 'root', 
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite', 
            storage: './nvwebblog-db.sqlite' //ฐานที่เก็บไฟล์ อยู่ใน src
        },
    }
}