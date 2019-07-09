import React from 'react'

class Selector extends React.Component {
    constructor(props) {
        super(props)
    }

    handleXAxisSelected = (e) => {
        this.props.handleXAxisSelected(e)
    }

    handleYAxisSelected = (e) => {
        this.props.handleYAxisSelected(e)
    }


    render() {
        //Disabled settings for dropdown menus
        let verticalXDisabled = false;
        let priceXDisabled = false;
        let timeXDisabled = false;
        if(this.props.yAxisValue === 'vertical') {
            verticalXDisabled = true;
        } else if (this.props.yAxisValue === 'price') {
            priceXDisabled = true;
        } else if (this.props.yAxisValue === 'time') {
            timeXDisabled = true;
        }

        let verticalYDisabled = false;
        let priceYDisabled = false;
        let timeYDisabled = false;
        if(this.props.xAxisValue === 'vertical') {
            verticalYDisabled = true;
        } else if (this.props.xAxisValue === 'price') {
            priceYDisabled = true;
        } else if (this.props.xAxisValue === 'time') {
            timeYDisabled = true;
        }
        return(
         <form className = "selector"> Show me 
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