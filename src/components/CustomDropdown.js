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


    render() {
        let dropdownItems;
        if(this.props.dropdownActivated) {
            dropdownItems = 
                <ul className="dropdownItems">
                    {this.props.items.map((item) => {
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
        if (this.props.currentSelectedItem==='') {
            dropdownHeading = 
                <h1 className="dropdownHeading" onClick = {this.onHeaderClick}>Sup</h1>
        } else {
            dropdownHeading = 
                <h1 className="dropdownHeading" onClick = {this.onHeaderClick}>{this.props.currentSelectedItem}</h1>
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
                />
            </div>
        )
    }
}

export default CustomDropdown