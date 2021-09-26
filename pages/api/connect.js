import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
// Import the Google Cloud client library using default credentials

export default async function query() {
  // Queries the U.S. given names dataset for the state of Texas.
  const {BigQuery} = require('@google-cloud/bigquery');
  const bigquery = new BigQuery();
  const query = `SELECT emit_id FROM \`arquivei-hackathon.main.sample_dw_nfe\` where dest_id = '35489633' LIMIT 100`;

  // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
  const options = {
    query: query,
    // Location must match that of the dataset(s) referenced in the query.
    location: 'US',
  };

  // Run the query as a job
  const [job] = await bigquery.createQueryJob(options);
  console.log(`Job ${job.id} started.`);

  // Wait for the query to finish
  const [rows] = await job.getQueryResults();

  // Print the results
  console.log('Rows:');
  rows.forEach(row => console.log(row));
}