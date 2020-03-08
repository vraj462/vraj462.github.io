import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

  const api_key = 'exLNVGnqiMyV-imtzPmVg8V8Ze-UE3lKiaMM9yePApUuiBhG5EMS09DC_0nt6_iDgeUgJjMYWB1IlkZJOerPYP_BFd_HU54pGu9LYhjewmTWYQmemfuhAizhUNlZXnYx';


const config = {
  headers: {'Authorization': api_key},
  params: {
    term: 'tacos',
    location: 'main 123st'
  }
};

export default class App extends Component {

  componentWillMount() {
    axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => console.log(response));
    }
  
  render(){
    return (
      <View>
        <text> My first yelp authentication request </text>
      </View>
    );
  }
}
