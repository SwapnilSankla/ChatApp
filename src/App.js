import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super()
        console.log(Date.now + " Constructor called")
    }

    componentWillMount() {
        console.log(Date.now + " Component will mount")
    }

    render() {
        console.log(Date.now + " render")

        return React.createElement(
            "div",
            { "className": "App" },
            React.createElement(
                "header",
                { "className": "App-header" },
                React.createElement(
                    "img",
                    {
                        "className": "App-logo",
                        "src": "favicon.ico",
                        "atl": ""
                    },
                    null),
                React.createElement(
                    "h1", { "className": "App-title" }, "Welcome to the Unique Chatting App"
                )
            ),
            React.createElement(
                "p",
                { "className": "App-intro" },
                "To get started, edit src/App.js and save to reload."),
            React.createElement(
                "h1",
                null,
                "Created by: Swapnil Sankla"
            )
        )




        // return (
        //     <div className="App">
        //         <div className="App">
        //             <header className="App-header">
        //                 <img src={logo} className="App-logo" alt=""/>
        //                 <h1>Welcome to the Unique Chatting App</h1>
        //             </header>
        //             <p className="App-Intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
        //         </div>
        //         <div className="App">
        //             <h1>Created by: Swapnil Sankla</h1>
        //         </div>
        //     </div>
        // );
    }

    componentDidMount() {
        console.log(Date.now + " Component did mount")
    }
}

export default App;
