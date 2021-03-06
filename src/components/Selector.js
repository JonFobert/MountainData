import React from 'react'
import CustomDropdown from './CustomDropdown.js'

class Selector extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className = "selectorDiv">
                Show me: <CustomDropdown
                    label = {'Y'}
                    items = {this.props.dropdownItems}
                    otherSelectedItem = {this.props.xAxisValue}
                    currentSelectedItem = {this.props.yAxisValue}
                    handleItemClick = {this.props.handleItemClickY}
            >
                </CustomDropdown>
                versus
                <CustomDropdown
                    label = {'X'}
                    items = {this.props.dropdownItems}
                    otherSelectedItem = {this.props.yAxisValue}
                    currentSelectedItem = {this.props.xAxisValue}
                    handleItemClick = {this.props.handleItemClickX}
                >
                </CustomDropdown>
            </div>
        )
    }
}

export default Selector;