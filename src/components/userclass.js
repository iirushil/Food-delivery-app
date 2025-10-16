import React from 'react';

class userclass extends React.Component{

    constructor (props) {
    super(props);
    this.state = {
        count : 0
    };  
    }

    render() {
        const {name , location} = this.props;
        const {count } = this.state;

        return (
      <div className="user-card">
        <h1>count : {count}</h1>
        <button onClick={() =>{
            this.setState({
                count:this.state.count + 1,
                
            });
        }
        }></button>
        <h2>name : {name}</h2>
        <h3>Location : Noida</h3>
        <h4>contact : 9818823695</h4>
      </div>
    )

    }
}

export default about;