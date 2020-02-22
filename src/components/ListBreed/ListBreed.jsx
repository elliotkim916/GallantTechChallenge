import React, {useState, useEffect} from 'react';
import {getBreedImage} from '../../api';
import './ListBreed.css';

const ListBreed = props => {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    if (props.breed) {
      getBreedImage(props.breed)
        .then(({data}) => {
          if (data.message) {
            setImgUrl(data.message[0]);
          }
        });
    }
  }, [props.breed]);

  return (
    <div className="breedContainer">
      <h3 className="breedHeader">{props.breed}</h3>
      <img src={imgUrl} alt="Dog Breed" className="breedImage" />
    </div>
  );
};

export default ListBreed;