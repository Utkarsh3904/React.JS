import React from 'react';
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

const anotherElement= (
    <a href="https://google.com"target='_blank'> Visit Google</a>
)

const anotherUser = 'chai aur react'

const reactElement = React.createElement (
    'a',
    {href:'https://google.com',target:"_/blank"},
    'click me to visit google',
    anotherElement   //thias is to show that how to inject variable now --> it will create a link of "click me to visit googlechai aur react"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement  // its an object not a method so no ()
)