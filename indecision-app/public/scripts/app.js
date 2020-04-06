"use strict";

console.log("Does this change?!");

// JSX  - Javascript XML

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "This is JAX from app.js"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Alejandro Berm\xFAdez Vargas"
    ),
    React.createElement(
        "p",
        null,
        "Age: 22"
    ),
    React.createElement(
        "p",
        null,
        "Location: Alajuela, Costa Rica"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
