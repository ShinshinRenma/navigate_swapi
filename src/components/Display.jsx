import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Display = (props) => {

    const {category, number} = useParams();
    const [swData, setSWData] = useState({});
    const [homeworldData, setHomeworldData] = useState("");
    const [errorBool, setErrorBool] = useState(false)
    
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${number}`)
            .then(response => {
                console.log(response.data);
                setSWData(response.data);
                setErrorBool(false);
            }).catch(err=>{
                console.log(err);
                setErrorBool(true);
            })
    },[category,number])

  return (
        <div>
        {
          errorBool === true ? (
            <div>
                <h4>404: These aren't the droids you're looking for.</h4>
                <img src="https://preview.redd.it/6o6blcul5n841.jpg?width=300&auto=webp&s=f6b902c71a33389e28be0b54e01c6ef4fae8f186" alt="OWK" />
            </div>
          ) : ("")
        }
        {
          (category === "people" && !errorBool) ? (
            <div>
                <h2>Name: {swData.name}</h2>
                <h6>Height: {swData.height}</h6>
                <h6>Mass: {swData.mass}</h6>
                <h6>Hair Color: {swData.hair_color}</h6>
                <h6>Homeworld: {swData.homeworld}</h6>
            </div>
          ) : ("")
        }
        {
          (category === "planets" && !errorBool) ? (
            <div>
                <h2>Name: {swData.name}</h2>
                <h6>Population: {swData.population}</h6>
                <h6>Climate: {swData.climate}</h6>
                <h6>Terrain: {swData.terrain}</h6>
            </div>
          ) : ("")
        }
        {
          (category === "vehicles" && !errorBool) ? (
            <div>
                <h2>Name: {swData.name}</h2>
                <h6>Model: {swData.model}</h6>
                <h6>Manufacturer: {swData.manufacturer}</h6>
                <h6>Passengers: {swData.passengers}</h6>
            </div>
          ) : ("")
        }
        {
          (category === "starships" && !errorBool)? (
            <div>
                <h2>Name: {swData.name}</h2>
                <h6>Model: {swData.model}</h6>
                <h6>Manufacturer: {swData.manufacturer}</h6>
                <h6>Crew: {swData.crew}</h6>
            </div>
          ) : ("")
        }
        {
          (category === "species" && !errorBool)? (
            <div>
                <h2>Name: {swData.name}</h2>
                <h6>Classification: {swData.classification}</h6>
                <h6>Language: {swData.language}</h6>
                <h6>Designation: {swData.designation}</h6>
            </div>
          ) : ("")
        }
        {
        (category === "films" && !errorBool) ? (
            <div>
                <h2>Title: {swData.title}</h2>
                <h6>Opening: {swData.opening_crawl}</h6>
                <h6>Producer(s): {swData.producer}</h6>
                <h6>Release Date: {swData.release_date}</h6>
            </div>
          ) : ("")
        }
      </div>
    
  )
}

export default Display