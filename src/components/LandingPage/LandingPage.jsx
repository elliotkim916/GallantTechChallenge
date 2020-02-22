import React from 'react';
import {getAllBreeds} from '../../api';
import ListBreed from '../ListBreed/ListBreed';
import FilterBreed from '../FilterBreed/FilterBreed';
import './LandingPage.css';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allDogBreeds: []
    }

    this.filterBreeds = this.filterBreeds.bind(this);
    this.fetchAllBreeds = this.fetchAllBreeds.bind(this);
  }

  componentDidMount() {
    if (this.state.allDogBreeds.length < 1) {
      this.fetchAllBreeds();
    }
  }

  fetchAllBreeds() {
    getAllBreeds()
      .then(({data}) => {
        const breedsArray = Object.keys(data.message);
        this.setState({allDogBreeds: [...breedsArray]});
      });
  }

  filterBreeds(filterValue) {
    const {allDogBreeds} = this.state;
    const filteredBreeds = [];

    if (filterValue.includes(',')) {
      let filterValuesArray = filterValue.split(',');

      filterValuesArray.forEach(value => {
        filteredBreeds.push(allDogBreeds.filter(breed => breed === value));
      });

      this.setState({allDogBreeds: filteredBreeds.flat()});
    } else {
      this.setState({allDogBreeds: allDogBreeds.filter(breed => breed === filterValue)});
    }
  }

  render() {
    let dogBreeds;

    if (this.state.allDogBreeds.length > 0) {
      dogBreeds = this.state.allDogBreeds.map(breed => {
        return <ListBreed breed={breed} key={breed}/>;
      });
    } else {
      dogBreeds = null;
    }
    
    return (
      <div>
        <FilterBreed filterBreeds={this.filterBreeds} fetchAllBreeds={this.fetchAllBreeds}/>
        <br/><br/>
        <div className="dogBreedsContainer">
          {dogBreeds}
        </div>
      </div>
    );
  }
};

export default LandingPage;