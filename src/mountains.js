import React from 'react';
import ReactDOM from 'react-dom';
import MountainsData from './mountains.json'

class Mountains extends React.Component {
    render() {
        return (
            <div>{MountainsData.map((mountain, index) => {
                return <p>{mountain.name}</p>
            })}</div>
        )
    }
}

export default Mountains