# How to connect to Neon 

Add the following to your files (explanation of where to find this info below)

### *.gitignore* 
    .env

### .env 
    ### Go to neon to find your version ###
    PGHOST='ep-red-bush-123456-pooler.us-east-2.aws.neon.tech'
    PGDATABASE='database_name'
    PGUSER='UserName'
    PGPASSWORD='<% PASSWORD %>'
    ENDPOINT_ID='ep-red-bush-32467650-pooler'


### server.js
    require("dotenv").config();

### Pool.js
    const pg = require("pg");
    let pool;
    const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
    if (process.env.DATABASE_URL) {
      pool = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
      });
    } else {
      pool = new pg.Pool({
        host: PGHOST,
        port: 5432,
        database: PGDATABASE,
        user: PGUSER,
        password: PGPASSWORD,
        ssl: {
          rejectUnauthorized: false,
        },
      });
    }

    module.exports = pool;

### Finally on Neon select 'SQL Editor' and add initialize your table.

# You're done! Your project can now connect directly to neon



<br>
<br>
<br>
<br>
<br>
<br>
<br>

# Where to find the information?
Walkthrough how to find the information



## go to [neon](neon.tech) add a new database: 


Select Databases, click 'New Database', create a database_name, click create.

![On the dashboard select the correct database, Node.js, and check the pooled connection box.](images/create_db.png)

![Copy the information pool information from Connection Details on the Dashboard](images/pool_info.png)

![The password can be found by selecting 'psql' instead of Node.js, then simply click on the greyed out box and select just the password portion to fill in on the .env file](images/password_location.png)
