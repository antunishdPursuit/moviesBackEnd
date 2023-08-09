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
When creating new databases make sure to use the below commands 

```
psql -U postgres -f db/schema.sql
psql -U postgres -f db/seed.sql
```
10. In order to shorten the above commands follow the below steps
- Add the below commands to the scripts key within package.json

```
    "dbinit": "psql -U postgres -f db/schema.sql",
    "dbseed": "psql -U postgres -f db/seed.sql"
```

-After this is done you can use the below commonds to run the above commands

```
npm run dbinit 
npm run dbseed
```
