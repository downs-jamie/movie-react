import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from'jquery';
import Poster from './poster';


// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentWillMount(){
    console.log("the component is about to mount");
  }

  componentDidMount(){
    console.log("the component mounted");
    var url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
    $.getJSON(url,(movieData)=>{
      console.log(movieData);
      // this.state = dont ever do this
      this.setState({
        movies: movieData.results
      })
    });
  }

  // jamiesMethod(){
  //   console.log("my method ran?")
  // }

  handleSubmit(event){
    event.preventDefault();
    var value = document.getElementById('searchTerm').value;
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query='+value;
    $.getJSON(url,(movieSearchData)=>{
      this.setState({
        movies: movieSearchData.results
      })
    })
    // console.log('searching......................')
  }

  render() {
    var postersArray = [];
    this.state.movies.map((movie,index)=>{
      postersArray.push(<Poster id={movie.id} key={index} poster={movie.poster_path} name={movie.title} overview={movie.overview} vote={movie.vote_average}/>)
    });
    return (
      <div className="App">
        <h1>this is the movie app....</h1>
        <form onSubmit={this.handleSubmit}>
          <input id="searchTerm" type="text" placeholder="movie title" />
          <button type="submit" className="btn btn-danger">search</button>
        </form>
        {postersArray}
      </div>
    );
  }
}

export default App;
