import React from 'react';
import ReactDOM from 'react-dom';
import MountainsData from './mountains.json'

class Mountains extends React.Component {
    constructor(props) {
        super(props)
    }

    getMountainName = (Mountains) => {
        Mountains.map((mountain) => {
            
        })
    }

    render() {
        return (
            <div>
                {MountainsData.map((mountain, index) => {
                    return <p>{mountain}</p>
                })}
            </div>
        )
    }
}

export default Mountains