import React from 'react'

class Selector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {xAxisValue: '', yAxisValue: ''}
    }

    render() {
        return(
         <form> Graph: 
             <select className = "yAxis" name="Y-Axis">
                 <option value = "vertical" disabled="disabled">Vertical Feet</option>
                 <option value = "price">Price</option>
                 <option value = "time">Travel Time</option>
             </select>
                versus 
            <select className = "xAxis" name="X-Axis">
                <option value = "vertical">Vertical Feet</option>
                <option value = "price">Price</option>
                <option value = "time">Travel Time</option>
             </select>
         </form>
        )
    }
}

export default Selector;