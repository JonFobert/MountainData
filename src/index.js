import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Graph from './components/Graph.js';
import Selector from './components/Selector.js';


class App extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return(
            <div>
                <Selector />
                <Graph />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
