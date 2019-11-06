import React, { Component } from 'react'
export default class AnimeShelf extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            count: 0,
            details: null
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            count: prevState.count++
        });
        // count = count++;
        this.props.addNewAnime(this.props.anime);
    }
    handleRemoveAnime = (e) => {
        e.preventDefault();
        this.props.removeAnime(this.props.anime);
    }
    showDetails = (anime) => {
        this.setState({
            details: <div>
                <h1>{anime.title}</h1>
                <h2>{anime.episodes}</h2>
            </div>
        })


    }
    render() {
        const counter = this.props.counter.filter(item => {
            return item.title === this.props.anime.title;
        })

        return (
            <div>
                <img src={this.props.anime.image_url} alt={this.props.anime.title} />
                <span>{counter.length}</span>
                <div>
                    <h1>{this.props.anime.title}</h1>
                </div>
                <button onClick={this.handleClick}>Quick add to scarts</button>
                <button onClick={() => this.showDetails(this.props.anime)}>More details</button>
                {this.state.details}
            </div>
        )
    }
}
