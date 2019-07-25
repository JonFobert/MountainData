import React from 'react';

class CustomDropdownItem extends React.Component {
    constructor(props) {
        super(props)
    }

    onItemClick = () => {
        this.props.handleItemClick(this.props.item)
    }

    render() {
        return(
            <li className="dropdownItem" onClick = {this.onItemClick}>{this.props.item.name}</li>
        )
    }
}

class CustomDropdownItems extends React.Component {
    constructor(props) {
        super(props)
    }   

    handleItemClick = (item) => {
        this.props.handleItemClick(item)
    }

    filterItems = (items) => {
        //let index = items.indexOf(this.props.currentSelectedItem)
    }

    render() {
        let dropdownItems;
        let itemsDisplay = this.props.items
        if(this.props.dropdownActivated) {
            dropdownItems = 
                <ul className="dropdownItems">
                    {itemsDisplay.map((item) => {
                        return <CustomDropdownItem key = {item.id.toString()} item = {item} handleItemClick = {this.handleItemClick}></CustomDropdownItem>
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
        let dropdownHeading;
        if (Object.keys(this.props.currentSelectedItem).length == 0) {
            dropdownHeading = 
                <h1 className="dropdownHeading" onClick = {this.onHeaderClick}>Sup</h1>
        } else {
            dropdownHeading = 
                <h1 className="dropdownHeading" onClick = {this.onHeaderClick}>{this.props.currentSelectedItem.name}</h1>
        }
        return dropdownHeading;
    }
}



class CustomDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {dropdownActivated: false, test: true}
    }   

    onHeaderClick = () => {
        this.setState(state => ({
            dropdownActivated: !state.dropdownActivated
        }))
    }


    handleItemClick = (item) => {
        this.props.handleItemClick(item)
    }

    render() {
        return(
            <div className = "dropdownDiv">
                <CustomDropdownHeader
                    currentSelectedItem={this.props.currentSelectedItem}
                    onHeaderClick = {this.onHeaderClick}
                    label = {this.props.label}
                /> 
                
                <CustomDropdownItems
                    items = {this.props.items}
                    dropdownActivated = {this.state.dropdownActivated}
                    handleItemClick = {this.handleItemClick}
                    currentSelectedItem={this.props.currentSelectedItem}
                />
            </div>
        )
    }
}

export default CustomDropdown