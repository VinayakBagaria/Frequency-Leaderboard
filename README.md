![Image](/main.png)
<h1 align="center"> Frequency Leaderboard </h1>

Web app for a technical task for TTT which gets k most frequent words from a text file

 How does it work?
================  
 A `Node.js` backend server fetches k most frequent words from a text file. The JSON object is sent to `React JS` frontend which renders it in a paginated table fashion. Run it [here](https://freq-leader.herokuapp.com/)

Installation
===============

 - `git clone https://github.com/VinayakBagaria/Frequency-Leaderboard`
 - `npm install` - installs dependencies for backend server and ESLint configurations
 - `cd client && npm install` - installs dependencies for frontend server
 This would assure that your keys are secured and index.js file is untouched.
 - `npm start` - run the app, both server and client.

Get a beautiful frontend like the above screenshot at:

     GET http://localhost:3000

Backend is at:

     GET http://localhost:3001
     
Edit server and client, hot reloading happens automatically at both ends. No need to touch command-line to re-start the app.

Deploy to Heroku
================

 - `cd client && npm run build` - Builds frontend dependencies to generate static files
 - `heroku login` - login with heroku credentials
 - `heroku create <app_name>` - add Heroku to project with a custom app name
 - `git push heroku master` - Deploy to Heroku with the frontend build files rendered by server

 Heroku will generate a url for you

      http://<app_name>.herokuapp.com

Dependencies/ Libraries
=======================

 - React JS - frontend renderer, initiated through Create-React-App
 - Express - backend server
 - nodemon - watches for changes in server and re-starts the application automatically
 - axios - Promise-based client for API calls
 - ESLint - code analyser for maintaining code quality
 - Material UI (beta/ next) - Google's Material Design for React
 - Prettier - code formatter
 
 Components
 ===========
 - Header - custom CSS via FlexBox
 - Loader - circular progress bar of Material UI
 - Form - much more a TextField for number input, with restrictions mentioned, from Material UI
 - Table - various files for it to implemented the paginated action, from Material UI
 
 ## TODO
- [ ] Docker integration
- [ ] Testing implementation
