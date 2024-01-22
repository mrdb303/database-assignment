import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";


dotenv.config(); // allow us to use the environment variables (like the DATABASE_URL)

const PORT = 10000;
const app = express();
app.use(cors());

// connect to database
const dbConnectionString = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectionString });

// Endpoints
app.get("/", (request, response) => {
  response.json("This is my root route.");
});


app.get("/posts", async (request, response) => {
  const result = await db.query('SELECT gb_users.name AS user, gb_categories.name AS category, gb_posts.title, gb_posts.content, gb_posts.post_date, gb_posts.id FROM gb_users INNER JOIN gb_posts ON gb_users.id = gb_posts.user_id INNER JOIN gb_categories ON gb_categories.cat_id = gb_posts.cat_id ORDER BY gb_posts.post_date DESC');
  response.json(result.rows);
});


app.get("/listposts", async (request, response) => {
  const result = await db.query('SELECT gb_users.name AS user, gb_posts.title, gb_posts.post_date, gb_posts.id FROM gb_users INNER JOIN gb_posts ON gb_users.id = gb_posts.user_id INNER JOIN gb_categories ON gb_categories.cat_id = gb_posts.cat_id ORDER BY gb_posts.post_date DESC');
  response.json(result.rows);
});


app.get("/categories", async (request, response) => {
  const result = await db.query('SELECT * FROM gb_categories ORDER BY name ASC');
  response.json(result.rows);
});

/*
app.get("/indivpost", async (request, response) => {
  //const req = request.request;
  console.log(request)
  //console.log(request);
  const result = await db.query('SELECT * FROM gb_categories ORDER BY name ASC');
  response.json(result.rows);
});
*/

app.get('/indivpost/:id', async (request, response)=>{
  const result = await db.query(`SELECT * FROM gb_posts WHERE id=${request.params.id}`);
  //console.log(result);
  response.json(result.rows);
  });


// start the server
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));


/*
app.post("/indivpost", function (request, response) {
  //console.log("Made it here");
  //console.log(request);
  //console.log(request.body);

  let result = [];

  async function dataFromQuery() {
    result = await db.prepare('SELECT gb_users.name AS user, gb_posts.title, gb_posts.post_date, gb_posts.id FROM gb_users INNER JOIN gb_posts ON gb_users.id = gb_posts.user_id INNER JOIN gb_categories ON gb_categories.cat_id = gb_posts.cat_id WHERE gb_posts.id = ?').run(5);
    return result;
  }
  
  return dataFromQuery(result.rows);
});
*/






