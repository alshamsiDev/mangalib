import React, { Component } from 'react'
import AnimeShelf from './AnimeShelf'
export default class AnimeList extends Component {
    render() {
        const allAnimes = this.props.topAnimes.map((anime, index) => {
            return <AnimeShelf anime={anime} key={index} addNewAnime={this.props.addNewAnime} counter={this.props.counter}/>
        })
        return (
            <div>
                {allAnimes}
            </div>
        )
    }
}
