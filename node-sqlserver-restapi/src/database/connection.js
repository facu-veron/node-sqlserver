import sql from 'mssql';

const dbSettings = {
    user: "sa",
    password: "yourStrong#Password",
    server: "localhost",
    database: "webstore",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}
export const getConnection = async() => {
    try {
        const pool = await sql.connect(dbSettings);
   
        return pool;

    }catch(e) {
        console.log(e)
    }
}