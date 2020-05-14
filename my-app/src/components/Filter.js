import React, { useState } from 'react'

const Filter = ({value, changeEvent}) => {
    return (
        <div>
           Filter <input value = {value}
                         onChange = {changeEvent}> 
                 </input>
        </div>
    )    
};

export default Filter;