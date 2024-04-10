
1.create user obsrv_user with password ‘obsrv123’.
postgres=# CREATE USER obsrv_user WITH PASSWORD 'obsrv123';
CREATE ROLE

2.create database obsrv.
postgres=# CREATE DATABASE obsrv;
CREATE DATABASE

3.GRANT ALL ACCESS TO THE DATABASE obsrv for the user
obsrv_user.
postgres=# GRANT CONNECT ON DATABASE obsrv TO obsrv_user;
GRANT

postgres=# GRANT CREATE ON DATABASE obsrv TO obsrv_user;
GRANT
postgres=# \c obsrv;
psql (16.2 (Ubuntu 16.2-1.pgdg22.04+1), server 14.11 (Ubuntu
14.11-0ubuntu0.22.04.1))
You are now connected to database "obsrv" as user "postgres".
obsrv=#

4.create table datasets in the obsrv database.
postgres=> \c obsrv;

psql (16.2 (Ubuntu 16.2-1.pgdg22.04+1), server 14.11 (Ubuntu
14.11-0ubuntu0.22.04.1))
You are now connected to database "obsrv" as user "postgres".

obsrv=# CREATE TABLE IF NOT EXISTS datasets (
id TEXT PRIMARY KEY,
dataset_id TEXT,
type TEXT NOT NULL,
name TEXT,
validation_config JSON,
extraction_config JSON,
dedup_config JSON,
data_schema JSON,
denorm_config JSON,
router_config JSON,
dataset_config JSON,
status TEXT,
tags TEXT[],
data_version INT,
created_by TEXT,
updated_by TEXT,
created_date TIMESTAMP NOT NULL DEFAULT now(),
updated_date TIMESTAMP NOT NULL,
published_date TIMESTAMP NOT NULL DEFAULT now()
);
CREATE TABLE

5.Sample INSERT statement for inserting a record into the datasets
table.

obsrv=# INSERT INTO public.datasets
(id, dataset_id, "type", "name", validation_config, extraction_config,
dedup_config, data_schema, denorm_config, router_config, dataset_config, tags,
data_version, status, created_by, updated_by, created_date, updated_date,
published_date)
VALUES('1', '100', 'dataset', 'raju', '{"validate": true, "mode": "Strict",
"validation_mode": "Strict"}'::json, '{"is_batch_event": true, "extraction_key":
"events", "dedup_config": {"drop_duplicates": true, "dedup_key": "id",
"dedup_period": 720}, "batch_id": "id"}'::json, '{"drop_duplicates": true,
"dedup_key": "id", "dedup_period": 720}'::json, '{"$schema":
"https://json-schema.org/draft/2020-12/schema", "title": "Canonical
Observations", "description": "A canonical observation ", "type": "object",
"properties": {"obsCode": {"type": "string"}, "codeComponents": {"type":
"array", "items": {"type": "object", "properties": {"componentCode": {"type":
"string"}, "componentType": {"type": "string", "enum": ["AGG_TIME_WINDOW",
"AGG_METHOD", "PARAMETER", "FEATURE_OF_INTEREST",
"OBS_PROPERTY", "SAMPLING_STRATEGY", "OBS_METHOD", "METADATA",
"METADATA_DEVICE", "DATA_QUALITY", "EVENT", "FOI_CONTEXT"]},
"selector": {"type": "string"}, "value": {"type": "string"}, "valueUoM": {"type":
"string"}}}}, "valueUoM": {"type": "string"}, "value": {"type": "string"}, "id":
{"type": "string"}, "parentCollectionRef": {"type": "string"},
"integrationAccountRef": {"type": "string"}, "assetRef": {"type": "string"}, "xMin":
{"type": "number"}, "xMax": {"type": "number"}, "yMin": {"type": "number"},
"yMax": {"type": "number"}, "phenTime": {"type": "string", "format": "date-time",
"suggestions": [{"message": "The Property ''phenTime'' appears to be
''date-time'' format type.", "advice": "The System can index all data on this
column", "resolutionType": "INDEX", "severity": "LOW"}]}, "phenEndTime":
{"type": "string", "format": "date-time", "suggestions": [{"message": "The
Property ''phenEndTime'' appears to be ''date-time'' format type.", "advice": "The
System can index all data on this column", "resolutionType": "INDEX", "severity":
"LOW"}]}, "spatialExtent": {"type": "string"}, "modified": {"type": "number"}},
"required": ["id", "parentCollectionRef", "integrationAccountRef", "obsCode",
"phenTime", "value"]}'::json, '{"redis_db_host": "192.168.106.2", "redis_db_port":
6379, "denorm_fields": [{"denorm_key": "assetRef", "redis_db": 3,
"denorm_out_field": "assetMeta"}, {"denorm_key": "integrationAccountRef",
"redis_db": 4, "denorm_out_field": "providerMeta"}]}'::json, '{"topic":
"observations-transformed"}'::json, '{"data_key": "", "timestamp_key":
"phenTime", "exclude_fields": [], "entry_topic": "local.ingest", "redis_db_host":
"192.168.106.2", "redis_db_port": 6379, "index_data": true, "redis_db": 0}'::json,
'{}', 1, 'Live', 'SYSTEM', 'SYSTEM', '2023-04-24 10:30:47.263', '2023-04-24
10:30:47.263', '2023-04-24 10:30:47.263');

6.SELECT statement for accessing the records stored in datasets table. 

obsrv=# SELECT * FROM datasets;

7.DELETE statement for removing the records stored in datasets table based on primaryKey.

obsrv=# DELETE FROM datasets WHERE ID=$1;

8.UPDATE statement for updating the records stored in datasets table.

obsrv=# UPDATE  datasets  SET dataset_id= $1,  type= $2,  name= $3,  validation_config= $4,  extraction_config= $5,  dedup_config= $6,  data_schema= $7,  denorm_config= $8,  router_config= $9,  dataset_config= $10,  tags= $11,  data_version= $12,  status= $13,  created_by= $14,  updated_by= $15,  created_date= $16,  updated_date= $17,  published_date= $18 WHERE id = $19;


