import React from 'react';

class CustomDropdownItem extends React.Component {
    constructor(props) {
        super(props)
    }

    onItemClick = () => {
        this.props.handleItemClick(this.props.item)
    }

    render() {
        let item
        if (this.props.item.name === this.props.currentSelectedItem.name) {
            item = <li className="dropdownItem selectedDropdownItem" onClick = {this.onItemClick}>{this.props.item.name}</li>
        } else {
            item = <li className="dropdownItem" onClick = {this.onItemClick}>{this.props.item.name}</li>
        }
        return item;
    }
}

class CustomDropdownItems extends React.Component {
    constructor(props) {
        super(props)
    } 

    filterItems = (items) => {
        return items.filter(item => item !== this.props.otherSelectedItem )
    }

    render() {
        let dropdownItems;
        let displayedItems = this.filterItems(this.props.items);
        if(this.props.dropdownActivated) {
            dropdownItems = 
                <ul className="dropdownItems">
                    {displayedItems.map((item) => {
                        return <CustomDropdownItem key = {item.id.toString()} currentSelectedItem = {this.props.currentSelectedItem} item = {item} handleItemClick = {this.props.handleItemClick}></CustomDropdownItem>
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
                <h1 className="dropdownHeading" onClick = {this.onHeaderClick}>{this.props.label + ' Axis'}</h1>
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
                    label = {this.props.label}
                /> 
                
                <CustomDropdownItems
                    items = {this.props.items}
                    dropdownActivated = {this.state.dropdownActivated}
                    handleItemClick = {this.handleItemClick}
                    currentSelectedItem={this.props.currentSelectedItem}
                    otherSelectedItem = {this.props.otherSelectedItem}
                />
            </div>
        )
    }
}

export default CustomDropdown