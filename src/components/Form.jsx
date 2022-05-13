import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = (props) => {

    const [category, setCategory] = useState("people");
    const [number, setNumber] = useState(1);

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${category}/${number}`);
    }



  return (
    <div>
        <form onSubmit={ submitHandler }>
          <div>
            <label>Search For: </label> 
            <select name="category" onChange={ (e) => setCategory(e.target.value) } value={category}>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="species">Species</option>
            </select>
            <label>ID Number: </label> 
            <input name="number" type="number" onChange={ (e) => setNumber(e.target.value) } value={number}/>
          </div>
          <input type="submit" value="Search" />
        </form>
    </div>
  )
}

export default Form