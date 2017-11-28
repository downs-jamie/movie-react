import React, { Component } from 'react';

class Poster extends Component{

	render(){
		var imagePath =  `http://image.tmdb.org/t/p/w300${this.props.poster}`;
		var moviePath = `http://www.themoviedb.org/movie/${this.props.id}`;
		var search = `http://www.themoviedb.org/movie/${this.props.name}`;
		return(
			<div className="col-sm-3">
				<h2>{this.props.name}</h2>
				<p>{this.props.vote}</p>
				<a href={moviePath}><img src={imagePath} /></a>
				<p>{this.props.overview}</p>
			</div>
		)
	}
}

export default Poster;