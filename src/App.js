// import logo from './logo.svg';
import './App.css';
import React from "react";
import Questions from "./Questions";
class App extends React.Component{

  constructor(props){
    super(props);
    this.state={showQuestions:false,array:[],ansArray:[]};
    this.getQuestions= this.getQuestions.bind(this);
    this.renderQ=this.renderQ.bind(this);
    this.setState=this.setState.bind(this);
    this.shuffle= this.shuffle.bind(this);
    this.myRef = React.createRef();
    this.storeAns= this.storeAns.bind(this);
    this.evaluate=this.evaluate.bind(this);
    
  };
   temp=[0,0,0,0,0,0,0,0,0,0];
  shuffle(arra1) {
   var ctr = arra1.length, temp, index;
   // console.log("work here")
  // While there are elements in the array
    while (ctr > 0) {
  // Pick a random index
        index = Math.floor(Math.random() * ctr);
  // Decrease ctr by 1
        ctr--;
  // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    
    return arra1;
    
}

  async getQuestions(){
    const url =
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
    async function api() {
      const  result =  await fetch(url);
      const data =  await  result.json();
      // console.log(data); 
      return data.results; 
    }
    const x= await api();
    x.map((ques,idx)=>(ques.incorrect_answers.push(ques.correct_answer)));
  //  console.log(x);
    this.setState({showQuestions:true,array:x});

  }
  // stroing ans coming from child
  storeAns(idx,value){
     //console.log(typeof idx)
    
     const index = (idx);
    this.temp[index]= value;
    
    // this.setState({storeAns:temp})
    // console.log(this.state.storedAns);
    // console.log(this.temp);
  }
  evaluate(){
    console.log(this.state.array);
    const ansArray = this.temp;
    let count=0;
    for(let i=0;i<10;i++){
      if(ansArray[i]===this.state.array[i].correct_answer){
        count++;
      }
    }
    alert(`Your Score is: ${count}/10`);
    this.setState({showQuestions:false,array:[],ansArray:[]});
    this.temp=[0,0,0,0,0,0,0,0,0,0];
   // console.log(this.temp);
  }
  renderQ(){
    if(this.state.showQuestions){
      const array1 = [...this.state.array];

      return (<div><div className="Questions">{ array1.map((ques,idx)=>
        ( <Questions ques={ques.question} key={idx} idx={idx} ref={this.myRef} storeAns={this.storeAns} ans={this.shuffle([...ques.incorrect_answers])}/>
          ))
        }<div id="but"> <button type="submit" id="button" onClick={this.evaluate}>Submit test</button></div></div></div>) 
    }
    else
      return null;
  }
  render(){
    return (<>
    <button onClick={this.getQuestions}>Get Questions</button>
    {this.renderQ()}
    
    </>)
  }
}
export default App;
