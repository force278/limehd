import React, { useState, useEffect } from 'react';
import styles from './Search.module.css'

function Search({channel,index, channels, setStateChannel}) {

    function searchChannel(e) {
        setStateChannel(channels.filter((elem)=>{
            return !elem.name.localeCompare(e.target.value)
        }))
    }

    return (
            <div>
                <input type="text" onChange={(e)=>searchChannel(e)}/>
            </div>
    )
}

export default Search;