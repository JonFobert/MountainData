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
    MarkSeries
  } from 'react-vis';

class Graph extends React.Component {
    constructor(props) {
        super(props)
    }

    calculateUnusedSelection = (x, y) => {
        let selections = ["vertical", "price", "time"];
        let xIndex = selections.indexOf(x)
        if (xIndex !== -1) selections.splice(xIndex, 1)
        let yIndex = selections.indexOf(y)
        if (yIndex !== -1) selections.splice(yIndex, 1)
        return selections[0]
    }

    formatLabelTitle = (label) => {
        if (label === 'price') {
            return 'Price';
        } else if (label === 'vertical') {
            return 'Vertical Feet';
        } else if (label === 'time') {
            return 'Travel Time from Boston (Minutes)'
        }
    }

    render() {

        const x = this.props.xAxisValue;
        const y = this.props.yAxisValue;
        const other = this.calculateUnusedSelection(x, y)
        let mountainData = MountainsData.map((mountain) => {
            return {x: mountain[x],
                    y: mountain[y],
                    size: mountain[other]}
        })
        return(
            <div>
                <div className="graph">
                    <XYPlot height={600} width = {800} >
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis title={this.formatLabelTitle(x)} />
                        <YAxis title={this.formatLabelTitle(y)} />
                        <MarkSeries 
                            className="mark-series-example"
                            strokeWidth={2}
                            opacity="0.8"
                            sizeRange={[5,15]}
                            data ={mountainData} />
                    </XYPlot>
                </div>
            </div>
        )    
    }
}

export default Graph