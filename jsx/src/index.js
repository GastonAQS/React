// Import the React and React DOM libraries
import  React  from 'react';
import  ReactDOM  from 'react-dom';



// Create a React component
const App = () => {
    const buttonText = {text: 'Click Me'}
    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id='name' type='text'></input>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

