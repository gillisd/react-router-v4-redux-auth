# react-router-v4-redux-auth

This is an application that models the implementation of JWT with the following:
 
frontend:
* react-router v4
* react
* redux
* redux-form v6.7
* material-ui
 
 backend:
 * express.js
 * MongoDB
 * passport.js
 
 
 
 ## Usage:
 
 1. Start a MongoDB server running on port `27017`
 
 1. In `/server`, create a new file called `config.js` to hold your JWT `secretOrKey`. Here is an example:
 
     ```javascript
     /*
     /server/config.js
     */
     
     module.exports = {
       secret: 'sdajkljdsalkj8932904ujaskfs'
     }
    ```

1. Navigate to `/server` in your terminal
    1. run `npm install`.
    1. run `npm run dev` to start the server
    
1. Navigate to `/client` in a new terminal window
    1. run `yarn install`
    1. run `yarn start` to start the webpack dev server

1. Navigate to `localhost:3000` in your browser

 
