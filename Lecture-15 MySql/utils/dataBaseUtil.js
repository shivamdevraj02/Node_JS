const  mysql =require('mysql2');

const pool = mysql.createPool({

    host : 'localhost',
    user : 'root',
    password : 'Devraj@1372',
    database : 'airbnb'
}); 


module.exports = pool.promise();
