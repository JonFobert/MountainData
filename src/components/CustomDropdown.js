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
        return(
            <ul className="dropdownItems">
                {this.props.items.map((item) => {
                    return <CustomDropdownItem key = {item.id.toString()} item = {item}></CustomDropdownItem>
                })}
            </ul>
        );
    }
}

class CustomDropdownHeader extends React.Component {
    constructor(props) {
        super(props)
    }   

    render() {
        return(
            <h1>{this.props.currentSelectedItem}</h1>
        );
    }
}

class CustomDropdown extends React.Component {
    constructor(props) {
        super(props)
    }   


    render() {
        return(
            <div>
                <CustomDropdownHeader
                    currentSelectedItem={this.props.currentSelectedItem}
                > 
                </CustomDropdownHeader>
                
                <CustomDropdownItems
                    label = {this.props.label}
                    items = {this.props.items}
                >
                </CustomDropdownItems>
            </div>
        )
    }
}

export default CustomDropdown