import React from 'react'

class MovieRow extends React.Component {

	viewMovie(){
		const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
		window.open(url, '_blank');
	}

	render(){
		const overview = this.props.movie.overview;
		const slicedOverview = overview.slice(0, 100);
 		return <div key={this.props.movie.id} className="movie">
		  <img key={this.props.movie.poster_path} className="movie-poster" alt="poster" src={this.props.movie.poster_src}/>
		  <div className="movie-content">
		    <h3 key={this.props.movie.title} className="movie-title">{this.props.movie.title}</h3>
		    <p className="movie-overview">{slicedOverview}...</p>
		    <input type="button" className="view-btn" onClick={this.viewMovie.bind(this)} value="View"/>
		  </div>
		</div>
	}
}

export default MovieRow
