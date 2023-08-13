# Steps used to created this app

### git status to make sure you are not already in a git repository

1. mkdir **Name of folder**
2. cd **Name of folder**
3. touch .gitignore
### Within .gitignore should be 

```
node_modules
.env
.DS_Store
.gitignore
```

4. git init
5. touch server.js app.js .env

### Within .env should be the below
```
PORT=3003
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=movies_dev
PG_USER=postgres
```

6. npm init -y (this will automatically say yes to all the npm default settings - this is fine for tutorials, small test builds, etc.)p
7. npm install express dotenv cors pg-promise
8. git add server.js app.js
9. git commit -m 'first commit'
## In a normal setting .gitignore should not be pushed to the repository
When creating new databases in psql make sure to use the below commands 

```
psql -U postgres -f db/schema.sql
psql -U postgres -f db/seed.sql
```

- In order to shorten the above commands follow the below steps
- Add the below commands to scripts within package.json

```
    "dbinit": "psql -U postgres -f db/schema.sql",
    "dbseed": "psql -U postgres -f db/seed.sql"
```

-After this is done you can use the below commonds to run the above

```
npm run dbinit 
npm run dbseed
```
10. In order to depoly on render, add the below to .env

```
PG_PASSWORD=postgres
```
11. Then add the below to the cn object within the file dbConfig.js

```
password: process.env.PG_PASSWORD,
```

12. Follow the steps outlined on render to depoly the backend and make sure that start command is node server.js
13. Follow the steps outlined to create a postgres database 
14. Go to the top right and click on command. Click on external command and copy the psql command. Then paste and run the command in your terminal.
15. Add this command above your table in schema.sql

```
Drop TABLE IF EXISTS name Of Table
```

16. Run your sql commands from schem.sql and seed.sql so that the table is created and has data within the table 
17. After this you will need to add enviroment varibles to the depolyed backend and use the values that are found within the database you created.Remeber the depolyed website and database are seprate and we doing this step to connect them to each other. PG_HOST, PG_DATABASE, PG_USER, and PG_PASSWORD are the names of the envirnoment variables.
18. Depoly the backend again and make to choose clear build cache & depoly. Afterwards, verify if the website depolyed 
