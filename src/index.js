import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Mountains from './mountains.js';
import '../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    MarkSeries
  } from 'react-vis';


class App extends React.Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        const data = [
            {x: 1, y: 10, size: 30},
            {x: 1.7, y: 12, size: 10},
            {x: 2, y: 5, size: 1},
            {x: 3, y: 15, size: 12},
            {x: 2.5, y: 7, size: 4}
          ]
        return(
            <div>
                <div className="App">
                    <XYPlot height={400} width = {600} >
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis title="Distance"/>
                        <YAxis title= "Vertical"/>
                        <MarkSeries 
                            className="mark-series-example"
                            strokeWidth={2}
                            opacity="0.8"
                            sizeRange={[5,15]}
                            data ={data} />
                    </XYPlot>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
