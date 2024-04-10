const pool =require('../config/db.js');
const queries = require('./queries');
const getdata=(req, res)=> {
    pool.query(queries.getdata, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}
const getDataById =(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(queries.getDataById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};
const addData=(req,res)=>{
    const data=req.body;
    // check if id exist
    pool.query(queries.checkIdExists,parseInt([data.id]),(error,results)=>{
        if(results.rows.length){
            res.send("id already exist");
        }
    pool.query(queries.addData,[parseInt(data.id), data.dataset_id,data.type,data.name,data.validation_config,data.extraction_config,data.dedup_config,data.data_schema, data.denorm_config, data.router_config, data.dataset_config, data.tags, data.data_version, data.status,data.created_by, data.updated_by,data.created_date,data.updated_date,data.published_date],(error,results)=>{
        if(error) throw error;
        res.status(201).send("data created successfully");
    }
    );
    });
};

const removeData = (req,res)=>{
    const id= parseInt(req.params.id);
    pool.query(queries.checkIdExists,[id],(error,results)=>{
        const noDataFound =!results.rows.length;
        if(noDataFound){
        res.send("data does not exist in the database");
        }
        
    pool.query(queries.removeData,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("data removed sucessfully");
    })
    });
};
const updateData = (req,res)=>{
    
        const{sem,name,id}=req.body;
    pool.query(queries.updateData,[sem,name,id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("data updated sucessfully");
    })
    };


module.exports = {
    getdata,
    getDataById,
    addData,
    removeData,
    updateData,
};
