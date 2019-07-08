import React from 'react';
import ReactDOM from 'react-dom';
import MountainsData from '../mountains.json'
import '../../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    MarkSeries,
    Hint

  } from 'react-vis';

class Graph extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hintValue: {}};
    }

    onNearestXY = (value, {index}) => {
        this.setState({hintValue: value})
        console.log(value)
    };

    onMouseLeave = () => {
        this.setState({hintValue: {}})
        console.log("Left!")
    };

    calculateUnusedSelection = (x, y) => {
        let selections = ["vertical", "price", "time"];
        let xIndex = selections.indexOf(x)
        if (xIndex !== -1) selections.splice(xIndex, 1)
        let yIndex = selections.indexOf(y)
        if (yIndex !== -1) selections.splice(yIndex, 1)
        return selections[0]
    };

    formatLabelTitle = (label) => {
        if (label === 'price') {
            return 'Price';
        } else if (label === 'vertical') {
            return 'Vertical Feet';
        } else if (label === 'time') {
            return 'Travel Time from Boston (Minutes)'
        }
    };

    render() {

        const x = this.props.xAxisValue;
        const y = this.props.yAxisValue;
        const other = this.calculateUnusedSelection(x, y)
        let mountainData = MountainsData.map((mountain) => {
            return {x: mountain[x],
                    y: mountain[y],
                    size: mountain[other],
                    name: mountain.name
                    }
        })
        return(
            <div>
                <div className="graph">
                    <XYPlot height={600} width = {800} onMouseLeave={this.onMouseLeave}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis title={this.formatLabelTitle(x)} />
                        <YAxis title={this.formatLabelTitle(y)} />
                        <MarkSeries onNearestXY={this.onNearestXY}
                            className="mark-series-example"
                            strokeWidth={2}
                            opacity="0.8"
                            sizeRange={[5,15]}
                            data ={mountainData}
                        />
                        <Hint value = {this.state.hintValue}>
                            <div style = {{background: 'gray'}}>
                                <h3>{this.state.hintValue.name}</h3>
                                    <p>{this.formatLabelTitle(x)}: {this.state.hintValue.x}</p>
                                    <p>{this.formatLabelTitle(y)}: {this.state.hintValue.y}</p>
                            </div>
                        </Hint>
                    </XYPlot>
                </div>
            </div>
        )    
    }
}

export default Graph