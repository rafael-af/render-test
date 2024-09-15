
// React Snippest
notes = notes.filter(note => note.id !== id) // filter out


// Node.JS / EXPRESS
"npm init" // Starts empty project with packages.json

node // Starts node - repl, useful for troubleshooting and writing apps

"npm install--save - dev nodemon" // important to save it to dev-dependencies


// JSON SERVER
// ------------------------------------------------------------------------------------------------
"npm install - g json - server"
"npm install json - server--save - dev"

"json-server -p3001 --watch db.json"


// AXIOS LIBRARY
"npm install axios"


// Weather API key: 
"0477393df404f53e3e3c89793eab96ef" // raf
"b6efdf4a11a05d359080b6f45491e815" // lb

    //Run this entire code for server to run properly with api key
    `VITE_SOME_KEY = "b6efdf4a11a05d359080b6f45491e815" npm run dev`



// TERMINAL

// Create Vite React Template
// --------------------------

"npm create vite @latest project-name-- --template react"


// REACT

// Main.js file
// --------------------------

import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)



// App.js file
// --------------------------

const App = () =>
{
    return (
        <div>
            <p>Hello world</p>
        </div>
    )
}

export default App