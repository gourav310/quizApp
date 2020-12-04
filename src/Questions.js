import React from "react";

export default class Questions extends  React.Component{
    constructor(props){
        super(props);
        this.pushAns= this.pushAns.bind(this);
    }
    pushAns(idx,value){
        // console.log(value);
        // console.log(idx)
        this.props.storeAns(idx,value);
    }
    
    render(){
    return (<form className="demoForm" id="demoForm">
    <div>{this.props.idx+1}. {this.props.ques}</div>
    <input type="radio"  name={`age${this.props.idx}`} onClick={() => this.pushAns(this.props.idx,this.props.ans[0])} value={this.props.ans[0]}></input>
    <label >{this.props.ans[0]}</label>
    <input type="radio" name={`age${this.props.idx}`}  onClick={() => this.pushAns(this.props.idx,this.props.ans[1])} value={this.props.ans[1]}></input>
    <label >{this.props.ans[1]}</label><br></br>
    <input type="radio" name={`age${this.props.idx}`} onClick={() => this.pushAns(this.props.idx,this.props.ans[2])}  value= {this.props.ans[2]}></input>
    <label >{this.props.ans[2]}</label>
    <input type="radio" name={`age${this.props.idx}`} onClick={() => this.pushAns(this.props.idx,this.props.ans[3])} value={this.props.ans[3]}></input>
    <label >{this.props.ans[3]}</label>
    {/* {console.log(this.props.ref)} */}
    {/* <div>{()=>this.getRadioVal('demoform',`age${this.props.idx}`)}</div> */}
    </form>);
    }
}