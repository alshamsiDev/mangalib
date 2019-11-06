import React, { Component } from 'react'
import Axios from 'axios'
import AnimeList from './Components/AnimeList'
import AnimeInfo from './Components/animeInfo'
import Navs from './Components/Navs';
import CartPage from './Components/CartPage'
import Error from './Components/Error'
import { BrowserRouter as HashRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [],
      carts : [],
    }
  }

  addNewAnime = (anime) => {
    this.setState({
      carts : [anime, ...this.state.carts] //edit the orginial list and add new item to the original list
    })
  }
  removeAnime = (anime) => {
    const carts = [...this.state.carts] //copy of the orginial array
    const indexAnime = carts.indexOf(anime); //get the index
    carts.splice(indexAnime, 1); // remove the item
    this.setState({carts}); //assign it to the original array
  }
  clearAllAnime = () => {
    this.setState({
      carts : []
    })
  }
  componentDidMount() {
    Axios.get('https://api.jikan.moe/v3/top/anime')
      .then((result) => {
        const animeData = result.data.top; // assign the data from API to the animeDate variable
        this.setState({
          animes: animeData //add these list to the animes props
        });
      }).catch((err) => {
        console.error('thi is error', err);
      });
  }

  render() {
    console.log(this.state.carts);
    return (
      <HashRouter basename="/">
        <div>
          <Navs />
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={() => <AnimeList counter={this.state.carts} topAnimes={this.state.animes} addNewAnime={this.addNewAnime}/>} removeAnime={this.removeAnime}/>
            {/* in order to send data from App to another link Using the route.. we pass it using function. the next line will do it*/}
            <Route path='/animeinfor' component={() => <AnimeInfo />} />
            <Route path='/CartPage' component={() => <CartPage  removeAnime={this.removeAnime} carts={this.state.carts} clearAllAnime={this.clearAllAnime}/>} />
            <Route component={Error} />
          </Switch>
        </div>
      </HashRouter>

    )
  }
}
export default App;