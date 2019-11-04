import React, { Component } from 'react'
export default class AnimeShelf extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.addNewAnime(this.props.anime);
    }
    handleRemoveAnime =(e) => {
        e.preventDefault();
        this.props.removeAnime(this.props.anime);
    }
    render() {
        return (
            <div>
            <img src={this.props.anime.image_url} alt={this.props.anime.title}/>
            <div>
                <h1>{this.props.anime.title}</h1>
            </div>
            <button onClick={this.handleClick} >add new carts</button>
            
        </div>
        )
    }
}
