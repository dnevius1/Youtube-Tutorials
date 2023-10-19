import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
import MemoComp from './MemoComp';

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Daniel'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Daniel'
            });
    }, 2000);
}
    

  render() {
    console.log('******************Parent Comp Render**************')
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}/>
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}

        </div>
    )
  }
}

export default ParentComp