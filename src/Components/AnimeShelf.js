import React, { Component } from 'react'
export default class AnimeShelf extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            details: null
        })
    }
    handleClick = (e) => {
        e.preventDefault();
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
                <h3>Type : {anime.type}</h3>
                <h3>Episode : {anime.episodes}</h3>
                <h3>Release date : {anime.start_date}</h3>
                <h3>Final episode date : {anime.end_date}</h3>
                <h3>Score : {anime.score}</h3>
            </div>
        })
    }
    render() {
        const counter = this.props.counter.filter(item => {
            return item.title === this.props.anime.title;
        })
        return (
            <div className="card text-white bg-secondary border-info rounded " style={{ width: '18rem' }}>
                <div className="card-body">
                    <img src={this.props.anime.image_url} className="card-img-top rounded" alt={this.props.anime.title} />
                    <h5 className="card-title">{this.props.anime.title}</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis exercitationem cum eligendi voluptatum harum fugit perspiciatis deserunt doloribus deleniti labore perferendis et fugiat, laboriosam reiciendis dolor aut! Illo, aliquid beatae!</p>
                    <button type="button" className="btn btn-warning" style={{ marginRight: '10px' }} onClick={this.handleClick} > <li className="material-icons">add_shopping_cart </li><span className="badge badge-info">{counter.length === 0 ? "" : counter.length}</span>
                    </button>
                    <button className="btn btn-info" onClick={() => this.showDetails(this.props.anime)}><i className="material-icons">more_horiz</i></button>
                </div>
                

                {this.state.details}
            </div>
        )
    }
}
