import React from 'react';
  

  
class DerivedState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        name: "Adrian"
        };
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props.name)
        if(props.name !== state.name){
            //Change in props
            return{
                name: props.name
            };
        }
        return null; // No change to state
    }
    /* if props changes then after getDerivedStateFromProps
       method, state will look something like 
  
    {
        name: props.name
    }
    */
    render(){
       return (
        <div> My name is {this.state.name }</div>
       )
    }
}
                      
export default DerivedState;