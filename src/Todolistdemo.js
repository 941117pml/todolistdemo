import React, { Component } from 'react';
import List from './List';
import './style.css'

class Todolistdemo extends Component {
  constructor(props){
    super(props);
    this.state={
      list:['今日任务：'],
      inputValue:''
    }
  }
  handleBtn(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  handleIpt(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  handleLi(index){
    const list=this.state.list;
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
  render() {
    return (
     <div>
      <div>
        <input onChange={this.handleIpt.bind(this)} value={this.state.inputValue}></input>
        <button onClick={this.handleBtn.bind(this)} className='btn-style'>add</button>
      </div>
      <ul>
        {
          this.state.list.map((item,index)=>{
            return <List content={item} key={index} index={index} delete={this.handleLi.bind(this)}/>
            return <li key={index} onClick={this.handleLi.bind(this,index)}>{item}</li>
          })
        }
      </ul>
     </div>
    );
  }
}

export default Todolistdemo;
