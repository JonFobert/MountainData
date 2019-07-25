import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Graph from './components/Graph.js';
import Selector from './components/Selector.js';
import { CSSTransition } from "react-transition-group";

//https://coolors.co/f4f4f4-5b99e5-e52d5e-24492d-2f2504
//To Do: Add legend for colors
//       Adjust help text css
//       Checkbox to show name labels

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {xAxisValue: '', yAxisValue: '', selectionChanged: false}
    }

    handleItemClickX = (item) => {
        this.setState({xAxisValue: item.name})
        this.setState({selectionChanged: true})
    }

    handleItemClickY = (item) => {
        this.setState({yAxisValue: item.name})
        this.setState({selectionChanged: true})
    }

    render() {
        let graph;
        //if both x axis and Y axis are selected then create the graph
        if(this.state.xAxisValue && this.state.yAxisValue) {
            graph = 
            <CSSTransition
                //if the selection for the x or y axis changed recently than animate the graph appearing or entering
                in={this.state.selectionChanged}
                appear={true}
                timeout = {{
                    appear: 800,
                    enter: 300
                }}
                //Once the graph has appeared consider the selection unchanged
                onEntered = {() => this.setState({selectionChanged: false})}
                classNames="graphFade">
               <Graph xAxisValue = {this.state.xAxisValue}
                      yAxisValue = {this.state.yAxisValue} />
            </CSSTransition>
        }

        return(
            <div className = "containter">
                <h1 className = "heading">New England Ski Visualizer</h1>
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout = {300}
                    classNames="selectorFade">
                    <Selector
                        dropdownItems = {DROPDOWNITEMS}
                        xAxisValue = {this.state.xAxisValue}
                        yAxisValue = {this.state.yAxisValue}
                        handleItemClickX = {this.handleItemClickX}
                        handleItemClickY = {this.handleItemClickY}
                        
                        //xAxisValue = {this.state.xAxisValue}
                        //yAxisValue = {this.state.yAxisValue}
                        //handleXAxisSelected = {this.handleXAxisSelected}
                        //handleYAxisSelected = {this.handleYAxisSelected} 
                    />
                </CSSTransition>
                
                {graph}
            </div> 
        )
    }
}

const DROPDOWNITEMS = [ 
    {id: 0, name: 'vertical'},
    {id: 1, name: 'price'},
    {id: 2, name: 'time'}
]

ReactDOM.render(<App />, document.getElementById('root'));
