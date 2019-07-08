import React from 'react'

class Selector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {xAxisValue: '', yAxisValue: ''}
    }

    handleXAxisSelected = e => {
        this.setState({xAxisValue: e.target.value})
    }

    handleYAxisSelected = e => {
        this.setState({yAxisValue: e.target.value})
    }

    render() {
        //Disabled settings for dropdown menus
        let verticalXDisabled = false;
        let priceXDisabled = false;
        let timeXDisabled = false;
        if(this.state.yAxisValue === 'vertical') {
            verticalXDisabled = true;
        } else if (this.state.yAxisValue === 'price') {
            priceXDisabled = true;
        } else if (this.state.yAxisValue === 'time') {
            timeXDisabled = true;
        }

        let verticalYDisabled = false;
        let priceYDisabled = false;
        let timeYDisabled = false;
        if(this.state.xAxisValue === 'vertical') {
            verticalYDisabled = true;
        } else if (this.state.xAxisValue === 'price') {
            priceYDisabled = true;
        } else if (this.state.xAxisValue === 'time') {
            timeYDisabled = true;
        }
        return(
         <form> Graph: 
             <select className = "yAxis" name="Y-Axis" onChange={this.handleYAxisSelected}>
                 <option value = "yAxis" >---Y Axis</option>
                 <option value = "vertical" disabled={verticalYDisabled}>Vertical Feet</option>
                 <option value = "price" disabled ={priceYDisabled}>Price</option>
                 <option value = "time" disabled ={timeYDisabled}>Travel Time</option>
             </select>
                versus 
            <select className = "xAxis" name="X-Axis" onChange = {this.handleXAxisSelected}>
                <option value = "xAxis">---X Axis</option>
                <option value = "vertical" disabled ={verticalXDisabled}>Vertical Feet</option>
                <option value = "price" disabled ={priceXDisabled}>Price</option>
                <option value = "time" disabled ={timeXDisabled}>Travel Time</option>
             </select>
         </form>
        )
    }
}

export default Selector;