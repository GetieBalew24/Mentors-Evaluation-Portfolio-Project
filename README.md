# Webstack - Portfolio Project 
## Github link:(https://github.com/GetieBalew24).
## Author:
+ Getie Balew
+ Habtamu Ararsie
## Seting up React Project 
* install react packages on the folder frontend i.e
+ npx create-react-app frontend
## Configure Tailwind css with React
+ vist this site to configure Tailwind css (https://tailwindcss.com/docs/installation)
1. Create your project
+ Start by creating a new React project with Create React App v5.0+ if you don't have one already set up
+ `npx create-react-app front-end`
+ cd frontend
2. Install Tailwind CSS
+ Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.
+ `npm install -D tailwindcss postcss autoprefixer`
+ `npx tailwindcss init -p`
3. Configure your template paths
+ Add the paths to all of your template files in your tailwind.config.js file i.e.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
4. Add the Tailwind directives to your CSS
+ Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
@tailwind base;
@tailwind components;
@tailwind utilities;
5. Start your build process
+ Run your build process with npm run start.
+ `npm run start`
6. Start using Tailwind in your project
+ Start using Tailwind’s utility classes to style your content.
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
##  Creating the app component
+ here create various web pages on the pages folder
## navigate pages
+ first install the pakage i.e. `npm install --save react-router-dom`
+to navigate between the pages
## creating NavBar Components
+ create home.js contact.js contactlist.js about.js and login.js
# Create a node Back end
## prepareing the backend dependences 
+ `npm init -y`
+ `npm install express`
+ `npm install -D concurrently nodemon` concurrently- to run both frontend and backend at the same time
+ nodemon- monitors for changes and restart the server
## Creating our express app `Server.js`
+ write some backend code and run it `npm run server`
## Testing an Express server with Postman
+ start postman and send a get request by writing `http://localhost:800`
+ post request is used to modify on the server, such as if you want to add a new user to an users collection
# MongoDB creating
## Installing MongoDB and creating database
+ install mongodb compass vist`www.mongodb.com`
+ create database AMPES by writing a script `use AMPES_DB` and add collections
## adding mongoDB to express
+ in the backend directory `npm install --save mongodb`allows to connect to and modify our local database from express server code
# Connecting frontend and backend
+ there are different libraries to make request from frontend to backend
## in this project our team decide to use Fetch APP
+ fetch is simply a synchronized function that we can use for front end.
+ so fetches is a built in API and the first argument will be the URL which tells the user which endpoint to hit and second argument is optional that can use to specify details about the request we want to send(get,post).
+ `npm install --save whatwg-fetch` install the package to do on the internet exploreer. then go on the frontend directory i.e frontend/src/index.js and include by writing  `import whatwg-fetc`
## Adding React hooks to fetch data
+ first import in contact.js `{useState}`
+ to make a request to the backend to load out contact info, we need to use effect
+ add scripts on json.js on the root directory like the following
`"scripts": {
    "server": "nodemon server --prefix backend",
    "client":"npm start --prefix frontend",
    "dev":"concurrently \"npm run server\" \"npm run frontend\""
  },`
  + then add proxy json.js on the frontend directory like `"proxy":"http://localhost:8000",`

### on the root directory run `npm run dev`

Launches the server runner in the interactive watch mode.
