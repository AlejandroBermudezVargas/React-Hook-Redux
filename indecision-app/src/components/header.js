var React = require('react');

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h5>{props.subtitle}</h5>}
    </div>
);


Header.defaultProps = {
    title: 'Indecision App'
}


export default Header;