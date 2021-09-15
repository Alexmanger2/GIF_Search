import React, { Component } from 'react'
import axios from 'axios'

class GifCard extends Component {
    constructor(){
        super();
        this.state = {
            random: [],
            show: false
        }
    }

   handleRandom = () =>{
    const API_KEY = "HJ7Y0riiQ86ysZe4Vh0Qq8uNClbRBAJS";
    const url = "http://api.giphy.com/v1/gifs/random?api_key=" + API_KEY;
     axios
       .get(url)
       .then((response) =>{
         this.setState({show: true})
         this.setState({random: response.data.data});
         
       })
       .catch((err) => {
        this.setState({show: false})
         console.log(err);
       });
      // this.setState({show: true})
   }

    render(){
    
    let display;
        
    if(this.state.show === true ){
        display = <img className='gifDisplay' src ={this.state.random.image_url}/>
    }
    if(this.state.show === false){
        display = null
        
    }

        return (
        <div className="random">
           
            <button onClick={this.handleRandom}>Random</button>
           
                <div>
                    {display}
                </div>
           
        </div>
    )
}
}
export default GifCard