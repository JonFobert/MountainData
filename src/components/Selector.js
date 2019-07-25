import React from 'react'
import CustomDropdown from './CustomDropdown.js'

class Selector extends React.Component {
    constructor(props) {
        super(props)
    }

    handleItemClickX = (item) => {
        this.props.handleItemClickX(item)
    }

    handleItemClickY = (item) => {
        this.props.handleItemClickY(item)
    }


    render() {
        return(
        <div className = "selectorDiv">
        Show me<CustomDropdown
            label = {'Y'}
            items = {this.props.dropdownItems}
            otherSelectedItem = {this.props.xAxisValue}
            currentSelectedItem = {this.props.yAxisValue}
            handleItemClick = {this.handleItemClickY}
        >
        </CustomDropdown>
        versus
        <CustomDropdown
            label = {'X'}
            items = {this.props.dropdownItems}
            otherSelectedItem = {this.props.yAxisValue}
            currentSelectedItem = {this.props.xAxisValue}
            handleItemClick = {this.handleItemClickX}
        >
        </CustomDropdown>
        </div>
        
         /*<form className = "selector"> Show me 
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
         </form>*/
        )
    }
}

export default Selector;