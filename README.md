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
6. npm init -y (this will automatically say yes to all the npm default settings - this is fine for tutorials, small test builds, etc.)p
7. npm install express dotenv cors pg-promise
8. git add server.js app.js
9. git commit -m 'first commit'
## In a normal setting .gitignore should not be pushed to the repository 