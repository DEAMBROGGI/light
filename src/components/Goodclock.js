import React from 'react'

export default class GoodClock extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
      
      componentDidMount() {
        var intervalId = setInterval(
          () => this.setState({ date: new Date() }),
          1000
        );
        this.setState({ intervalId });
      }
      
      componentWillUnmount() {
        clearInterval(this.state.intervalId);
      }
      
      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
      }