import React, { useState } from 'react';
import styles from './Search.module.css'

function Search({setValueSearch}) {
    return (
         <div>
            <input type="text" onChange={(e)=>setValueSearch(e.target.value)}/>
         </div>
    )
}

export default Search;