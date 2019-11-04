import React, { Component } from 'react'
import Axios from 'axios'
import AnimeList from './Components/AnimeList'
import AnimeInfo from './Components/animeInfo'
import Navbar from './Components/Navbar';
import CartPage from './Components/CartPage'
import Error from './Components/Error'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [],
      carts : [],
    }
  }

  addNewAnime = (anime) => {
    console.log('is anime clicked');
    this.setState({
      carts : [anime, ...this.state.carts]
    })

  }
  removeAnime = (anime) => {
    const carts = [...this.state.carts]
    console.log('is anime clicked');
    const indexAnime = carts.indexOf(anime);
    carts.splice(indexAnime, 1);
    this.setState({carts});
  }

  componentDidMount() {
    Axios.get('https://api.jikan.moe/v3/top/anime')
      .then((result) => {
        const animeData = result.data.top;
        this.setState({
          animes: animeData
        });
      }).catch((err) => {
        console.error('thi is error', err);
      });
  }

  render() {
    console.log(this.state.carts);
    return (
      <Router>
        <>
          <Navbar />
        </>
        <>
          <Switch>
            <Route exact path='/' component={() => <AnimeList topAnimes={this.state.animes} addNewAnime={this.addNewAnime}/>} removeAnime={this.removeAnime}/>
            {/* in order to send data from App to another link Using the route.. we pass it using function. the next line will do it*/}
            <Route path='/animeinfor' component={() => <AnimeInfo />} />
            <Route path='/CartPage' component={() => <CartPage  removeAnime={this.removeAnime} carts={this.state.carts}/>} />
            <Route component={Error} />
          </Switch>
        </>
      </Router>

    )
  }
}
export default App;