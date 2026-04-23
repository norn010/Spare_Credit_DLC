const sql = require('mssql');

// ตั้งค่า Database Connection
const config = {
    user: 'sa', // TODO: เปลี่ยนเป็น username ปัจจุบัน (เช่น sa)
    password: 'PswPGe48', // TODO: เปลี่ยนเป็นรหัสผ่าน
    server: 'localhost', 
    database: 'Spare_Credit',
    options: {
        encrypt: false, 
        trustServerCertificate: true 
    }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL Database: Spare_Credit');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};
