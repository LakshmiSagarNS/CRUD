const pool = require('../config/db.js');
const queries = require('./queries');
const getData = (req, res)=> {
    pool.query(queries.getdata, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}
const getDataById = (req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(queries.getDataById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};
const addData = (req,res)=>{
    const data = req.body;
    // check if id exist
    pool.query(queries.checkIdExists,parseInt([data.id]),(error,results)=>{
        if(results.rows.length){
            res.status(200).send("id already exist");
        }
    pool.query(queries.addData,[parseInt(data.id), data.dataset_id,data.type,data.name,data.validation_config,data.extraction_config,data.dedup_config,data.data_schema, data.denorm_config, data.router_config, data.dataset_config, data.tags, data.data_version, data.status,data.created_by, data.updated_by,data.created_date,data.updated_date,data.published_date],(error,results)=>{
        if(error) throw error;
        res.status(201).send("data created successfully");
    }
    );
    });
};

const removeData = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.checkIdExists,[id],(error,results)=>{
        const noDataFound = !results.rows.length;
        if(noDataFound){
        res.status(204).send("data does not exist in the database");
        }
        
    pool.query(queries.removeData,[id],(error,results)=>{
        if(error) throw error;
        res.status(204).send("data removed sucessfully");
    })
    });
};
const updateData = (req,res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.checkIdExists,[id],(error,results)=>{
        const noDataFound = !results.rows.length;
        if(noDataFound){
        res.status(200).send("data does not exist in the database");
        }
    
        const update_data = req.body;
    pool.query(queries.updateData,[ update_data.dataset_id,update_data.type,update_data.name,update_data.validation_config,update_data.extraction_config,update_data.dedup_config,update_data.data_schema,update_data.denorm_config,update_data.router_config,update_data.dataset_config,update_data.tags,update_data.data_version,update_data.status,update_data.created_by,update_data.updated_by,update_data.created_date,update_data.updated_date,update_data.published_date,id],(error,results)=>{
        if(error) throw error;
        res.status(200).send("data updated sucessfully");
    })
});
}



module.exports = {
    getData,
    getDataById,
    addData,
    removeData,
    updateData,
};
