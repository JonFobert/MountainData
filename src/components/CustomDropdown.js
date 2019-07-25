import React from 'react';

class CustomDropdownItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <li className="dropdownItem">{this.props.item.name}</li>
        )
    }
}

class CustomDropdownItems extends React.Component {
    constructor(props) {
        super(props)
    }   

    render() {
        let dropdownItems;
        if(this.props.dropdownActivated) {
            dropdownItems = 
                <ul className="dropdownItems">
                    {this.props.items.map((item) => {
                        return <CustomDropdownItem key = {item.id.toString()} item = {item}></CustomDropdownItem>
                    })}
                </ul>
        } else {
            dropdownItems = null
        }



        return dropdownItems
    }
}

class CustomDropdownHeader extends React.Component {
    constructor(props) {
        super(props)
    }   

    onHeaderClick = () => {
        this.props.onHeaderClick()
    }

    render() {
        return(
            <h1 className="dropdownHeading" onClick = {this.onHeaderClick}>{this.props.currentSelectedItem}</h1>

        );
    }
}

class CustomDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {dropdownActivated: false}
    }   

    onHeaderClick = () => {
        this.setState(state => ({
            dropdownActivated: !state.dropdownActivated
        }))
    }

    render() {
        return(
            <div className = "dropdownDiv">
                <CustomDropdownHeader
                    currentSelectedItem={this.props.currentSelectedItem}
                    onHeaderClick = {this.onHeaderClick}
                /> 
                
                <CustomDropdownItems
                    label = {this.props.label}
                    items = {this.props.items}
                    dropdownActivated = {this.state.dropdownActivated}
                />
            </div>
        )
    }
}

export default CustomDropdown