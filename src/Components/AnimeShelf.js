import React, { Component } from 'react'
export default class AnimeShelf extends Component {
    constructor(props) {
        super(props);
        this.state=({
            count : 0
        })
    }
    handleClick = (e) => {
        let  count = this.state.count;
        count ++;
        e.preventDefault();
        this.props.addNewAnime(this.props.anime);
        this.setState({count});
    }
    handleRemoveAnime = (e) => {
        e.preventDefault();
        this.props.removeAnime(this.props.anime);
    }
    showDetails = (anime) => {
        return (
        <div>
            <h1>{anime.title}</h1>
            <h2>{anime.episodes}</h2>
        </div>)

    }
    render() {
        return (
            <div>
                <img src={this.props.anime.image_url} alt={this.props.anime.title} />
                <span>{this.state.count}</span>
                <div>
                    <h1>{this.props.anime.title}</h1>
                </div>
                <button onClick={this.handleClick}>Quick add to scarts</button>
                <button onClick={() => this.showDetails(this.props.anime)}>More details</button>
            </div>
        )
    }
}
