import React from 'react'

const PersonForm = ({submitEvent, nameValue, nameChange, valueNumber, numberChange }) => {

    return <form onSubmit = {submitEvent}>
    <h2>Add a new</h2>
    <div>
      name: <input 
        value = {nameValue}
        onChange= {nameChange}  />
    </div>
    
    <div>
      number: <input
          value = {valueNumber}
          onChange = {numberChange} /></div>
    <div>
    
      <button type="submit">add</button>
    </div>
    </form>
}

export default PersonForm


