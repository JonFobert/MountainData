import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mountains from './mountains.js'

class App extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return(
            <Mountains />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
