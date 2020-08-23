import React, {Component} from 'react';
import FirstComponent from "./components/learning-examples/FirstComponent";
import SecondComponent from "./components/learning-examples/SecondComponent";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                hello react
                <FirstComponent></FirstComponent>
                <SecondComponent></SecondComponent>
            </div>
        );
    }
}

export default App;
