console.log("Does this change?!")

// JSX  - Javascript XML

var template = (
    <div>
        <h1>This is JAX from app.js</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Alejandro Bermúdez Vargas</h1>
        <p>Age: 22</p>
        <p>Location: Alajuela, Costa Rica</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);