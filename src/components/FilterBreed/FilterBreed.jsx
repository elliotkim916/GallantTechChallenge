import React from 'react';
import './FilterBreed.css';

class FilterBreed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const {breed} = this.state;
    this.props.filterBreeds(breed);
  }

  clearFilter() {
    this.props.fetchAllBreeds();
    this.setState({breed: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <input 
            type="text" 
            placeholder="Enter breed to filter"
            onChange={e => this.setState({breed: e.target.value.toLowerCase()})}  
            value={this.state.breed}
            className="filterInput"
          /><br/>
          <button 
            type="submit"
            className="button"
          >
            Submit
          </button>
          <button 
            type="button"
            className="button"
            onClick={() => this.clearFilter()}
          >
            Clear Filter
          </button>
        </form>
      </div>
    )
  }
}

export default FilterBreed;