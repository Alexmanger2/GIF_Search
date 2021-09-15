import React, { Component } from 'react';
//import './SearchField.css';
import axios from 'axios'
//import 'bootstrap/dist/css/bootstrap.min.css'


class SearchField extends Component {
    
    constructor(){
        super();
        this.state={
            search:[],
            searchInput: "",
            show : false

        }
        
      }
    
    onChange = (event) => {
        this.setState({
          searchInput: event.target.value
         });
      }


    handleSearch = (event) =>{
        event.preventDefault();
        const searchInput = this.state.searchInput;
        const API_KEY = "HJ7Y0riiQ86ysZe4Vh0Qq8uNClbRBAJS";
        const url = "http://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=" + API_KEY;
        axios
          .get(url)
          .then((response) =>{
           this.setState({search: response.data.data});
           this.setState({show : true});
          })
          .catch((err) => {
            this.setState({show : false});
            console.log(err);
          });
          //this.setState({show : true});
      }


       render(){
    
        let display;

        if(this.state.show === true){

              display =  
                    <div>
                {this.state.search.map(data => {
                    return (
                    <div className="gif-images">
                    <img src = {data.images.original.url}/> 
                     </div>)
                })}
                    </div>

        }
        if(this.state.show === false){
            
            display = null;

        }
        

        return (
            
          <div className="container"> 
        
            <form onChange= {this.onChange}>
            <input type="text"/>
          <button id="searchButton" type="submit" value = {this.handleSearch} onClick={this.handleSearch}>Search</button>
          
          </form>
            
            
            <div>
                {display}
            </div>

        </div>
        ); 
      } 
    }
export default SearchField;


