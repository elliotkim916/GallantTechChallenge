import {ALL_BREEDS_API_URL, BREED_API_URL} from './config';
import axios from 'axios';

export const getAllBreeds = () => {
  return axios.get(`${ALL_BREEDS_API_URL}`);
};

export const getBreedImage = breedName => {
  return axios.get(`${BREED_API_URL}${breedName}/images`);
};