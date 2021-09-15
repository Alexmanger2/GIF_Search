import './Trending.css';
import React, { Component } from 'react'
import axios from 'axios'

class Trending extends Component{
  constructor(){
    super();
    this.state={
        trending:[],
        show: false
    } 
  } 
  
  handleTrending = () =>{
    const API_KEY = "HJ7Y0riiQ86ysZe4Vh0Qq8uNClbRBAJS";
    const url = "http://api.giphy.com/v1/gifs/trending?api_key=" + API_KEY;
     axios
       .get(url)
       .then((response) =>{
         this.setState({show: true})
         this.setState({trending: response.data.data});
         
       })
       .catch((err) => {
        this.setState({show: false})
         console.log(err);
       });
      // this.setState({show: true})
   }



  render(){
    
    let display;

    if(this.state.show === true){
      display = <div className="gif-container"> 
      {this.state.trending.map(element=>{
        console.log(element.url);
        return <div className="gif-img"><img src={element.images.original.url}/></div>
      })}
      
      </div> 
    }

    if(this.state.show === false){

        display = null;

    }

    return (


      <div className="trend">
      <button onClick={this.handleTrending}>Trending</button>
      
          <div>
            
              {display}
              
          </div>
     
  </div>
  
    );
  }
}
export default Trending;
