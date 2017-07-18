import React from 'react';
import styles from './App.css';

//  extends 继承React.PureComponent 所有属性和方法
export default class App extends React.PureComponent {
    constructor(props) {
        // super 子类继承父类this对象
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timeID = setInterval(() => {
            return this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    render() {
        return (
            <div className={styles.app}>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                <a href="#" onClick={this.handleClick.bind(this)}>Click me!</a>
            </div>
        );
    }
}
