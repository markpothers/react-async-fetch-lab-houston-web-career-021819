// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        inSpace: {}
    }

    render() {
        console.log(this.state)
        return (
            <div>
            </div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(returnedData => {
                this.setState({inSpace: returnedData})
            })
    }

}