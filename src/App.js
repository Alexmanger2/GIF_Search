import logo from './logo.svg';
import './App.css';
import SearchField from './components/SearchField';
import GifCard from './components/GifCard';
import Trending from './components/Trending';
import { Component } from 'react';


function App() {
  return (
    <div className="App">
      
      <h1>Image Search</h1>
      <div>

      <GifCard />
      <Trending />
      <SearchField /> 
      
      </div>
    </div>
  ); 
}
export default App;
