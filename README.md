Create a project in either node.js or python with clear separation of the code interacting with the database and the code which is exposed as the REST endpoints.
Create the following APIs
CREATE a record in the datasets table using the API. The API should take a JSON body as input.
POST /v1/dataset
READ a record from the database table datasets using the primary key id. No inputs are required for the API except the dataset_id in the end point url.
GET /v1/dataset/<dataset_id>
UPDATE specific fields in the dataset record using this API. The API should take a JSON body as input.
PATCH /v1/dataset/<dataset_id>
DELETE a specific record in the datasets table using this API. No inputs are required for the API except the dataset_id in the end point url.
DELETE /v1/dataset/<dataset_id>
