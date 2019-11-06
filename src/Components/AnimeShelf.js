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
                <div className="card">
                        <div className="card-body">
                        <img src={this.props.anime.image_url} className="card-img-top" alt={this.props.anime.title}/>
                            <h5 className="card-title">{this.props.anime.title}</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a className="btn btn-primary" onClick={this.handleClick} >add to cart</a>
                            <a className="btn btn-primary" onClick={() => this.showDetails(this.props.anime)}>more details</a>
                        </div>
                    </div>

            // <div className="card" style={{maxWidth: '500px'}}>
            //     <img src={this.props.anime.image_url} className="card-img-top" alt="fhd"/>
            //         <div class="card-body">
            //             <h5 className="card-title">{this.props.anime.title}</h5>
            //             {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            //             <a className="btn btn-primary">quick add to cart</a>

            //             <a className="btn btn-primary">Show more details</a>
            //         </div>
            //         {/* <div>
            //         <img src={this.props.anime.image_url} alt={this.props.anime.title} />
            //         <span>{counter.length}</span>
            //         <div>
            //             <h1>{this.props.anime.title}</h1>
            //         </div>
            //         <button onClick={this.handleClick}>Quick add to scarts</button>
            //         <button onClick={() => this.showDetails(this.props.anime)}>More details</button>
            //         {this.state.details}
            //     </div> */}
            // </div>
        )
    }
}
