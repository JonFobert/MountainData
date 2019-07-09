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
            return 'Price ($)';
        } else if (label === 'vertical') {
            return 'Vertical Feet';
        } else if (label === 'time') {
            return 'Travel Time from Boston (Minutes)'
        }
    };

    calculateColor = (state) => {
        if (state === 'VT') {
            return '#24492D';
        } else if (state === 'NH') {
            return '#2F2504';
        } else if (state === 'MA') {
            return '#5B99E5'
        } else if (state === 'ME') {
            return '#565656'
        }
    };
    

    render() {

        const x = this.props.xAxisValue;
        const y = this.props.yAxisValue;
        const other = this.calculateUnusedSelection(x, y)
        const calculateColor = this.calculateColor;
        let mountainData = MountainsData.map((mountain) => {
            return {x: mountain[x],
                    y: mountain[y],
                    size: mountain[other],
                    name: mountain.name,
                    color: calculateColor(mountain.statename)
                    }
        })
        return(
            <div className="graph">
                <XYPlot height={500} width = {700} margin = {{left: 80, right: 30, top: 30, bottom: 30}} colorType ="literal" onMouseLeave={this.onMouseLeave}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis title={this.formatLabelTitle(x)} style={{fontSize: 14}}/>
                    <YAxis title={this.formatLabelTitle(y)} style={{fontSize: 14}}/>
                    <MarkSeries onNearestXY={this.onNearestXY}
                        className="mark-series-example"
                        strokeWidth={2}
                        opacity="0.8"
                        sizeRange={[5,25]}
                        data ={mountainData}
                        
                    />
                    <Hint className = "hint" value = {this.state.hintValue}>
                        <div>
                            <h3>{this.state.hintValue.name}</h3>
                                <p>{this.formatLabelTitle(x)}: {this.state.hintValue.x}</p>
                                <p>{this.formatLabelTitle(y)}: {this.state.hintValue.y}</p>
                        </div>
                    </Hint>
                </XYPlot>
            </div>
        )    
    }
}

export default Graph