import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Graph from './components/Graph.js';
import Selector from './components/Selector.js';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {xAxisValue: '', yAxisValue: ''}
    }

    handleXAxisSelected = (e) => {
        this.setState({xAxisValue: e.target.value})
    }

    handleYAxisSelected = (e) => {
        this.setState({yAxisValue: e.target.value})
    }

    render() {
        let graph;
        if(this.state.xAxisValue && this.state.yAxisValue) {
            graph = <Graph xAxisValue = {this.state.xAxisValue}
                    yAxisValue = {this.state.yAxisValue} />
        }

        return(
            <div>
                <Selector 
                    xAxisValue = {this.state.xAxisValue}
                    yAxisValue = {this.state.yAxisValue}
                    handleXAxisSelected = {this.handleXAxisSelected}
                    handleYAxisSelected = {this.handleYAxisSelected} 
                />
                {graph}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
