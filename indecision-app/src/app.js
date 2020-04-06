var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of'
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var user = {
    name: 'Alejandro Bermúdez Vargas',
    age: 22,
    location: 'Alajuela, Costa Rica'
}



var templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);