import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props);
    }
    handleDiv(){
        this.props.delete(this.props.index)
    }
    render(){
        return(
            <div onClick={this.handleDiv.bind(this)}>{this.props.content}</div>
        )
    }
}
export default List