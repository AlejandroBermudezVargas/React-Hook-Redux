const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
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

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

const templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        {user.location ? <p>Location: {user.location}</p> : undefined}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);