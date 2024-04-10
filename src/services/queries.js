const getdata = "SELECT * FROM datasets";
const getDataById = "SELECT * FROM datasets WHERE ID=$1";
const checkIdExists = "SELECT s FROM datasets s WHERE s.id=$1";
const addData = "INSERT INTO datasets(id, dataset_id,type, name, validation_config, extraction_config, dedup_config, data_schema, denorm_config, router_config, dataset_config, tags, data_version, status, created_by, updated_by, created_date, updated_date, published_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19)";

const removeData ="DELETE FROM datasets WHERE id=$1";
const updateData = "UPDATE datasets SET sem=$1,name=$2 WHERE id=$3";
module.exports = {
    getdata,
    getDataById,
    checkIdExists,
    addData,
    removeData,
    updateData,
};