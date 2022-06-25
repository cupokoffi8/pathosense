import React, { Component } from "react"; 
import Sentiment from 'sentiment'; 

const sentiment = new Sentiment(); 

class Features extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            sentimentScore: null, 
            generalSentiment: null 
        }; 
        this.findSentiment = this.findSentiment.bind(this); 
    } 

findSentiment(event) {
    const result = sentiment.analyze(event.target.value) 
    this.setState({
        sentimentScore: result.score 
    }) 
    if (result.score < 0) {
        this.setState({
            generalSentiment: 'Negative' 
        })
    } 
    else if (result.score > 0) {
        this.setState({
            generalSentiment: 'Positive' 
        })
    } 
    else { 
        this.setState({
            generalSentiment: 'Neutral'  
        })
    }
}

render() {
    return(
        <div id="features"> 
        <div className='features-text'>
           
           <h2>Pathosense Sentiment Analysis</h2> 
           <p>Enter text for real-time analysis: </p> 
           <textarea onChange={this.findSentiment} /><br /> 
            <p>Sentiment: {this.state.generalSentiment} </p>
            </div> 
        </div> 
        )
    } 
}

export default Features; 