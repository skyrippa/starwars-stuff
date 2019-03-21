import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    for (let i = 1;i <= 88; ++i){
      try {
        fetch('https://swapi.co/api/people/'+i.toString())
        .then(resp => {
          // treating if the fetch was successfull or not
          if (resp.status >= 200 && resp.status < 300) {
            return resp.json();
          } else {
              let error = new Error(resp.statusText || resp.status);
              error.resp = resp;
              return Promise.reject(error);
            }
        })
        .then(async value => {
          // fetching character specie and homeworld
          let resp = await fetch(value.species.join());
          let data = await resp.json();
          value.species = data.name;
          let resp2 = await fetch(value.homeworld);
          let data2 = await resp2.json();
          value.homeworld = data2.name;

          // inserting data on state property
          this.setState({ characters: this.state.characters.concat(value)});
        })
        .catch(console.log); // handling http error
      } catch (err) {
        break;
      }
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { characters, searchfield } = this.state;
    const filteredCharacters = characters.filter(character => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1 className='bb b--yellow bw2 br-pill'>Star Wars Stuff</h1>
        <div>
          <SearchBox searchChange={this.onSearchChange}/>
          <h2 className='tl bb white subtitle'>Characters</h2>
          <CardList characters= {filteredCharacters}/>
        </div>
        
        <h4 className='bg-near-black white-80'>made by iagobm @ 2019</h4>
      </div>
    );
  }
}

export default App;
