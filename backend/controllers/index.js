const {config} = require('../config')
const sql = require('mssql')

const getsData = async (req, res) =>{
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .query('select * from t_downtime where no_incident = 12 and week_no = 12 and no_seq= 15 and cntr =1')
        res.status(200).json(result1)
    
    } catch (err) {
        console.log(err)
    }
}
  
module.exports = {
    getsData
}