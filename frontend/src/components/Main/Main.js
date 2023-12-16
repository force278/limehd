import React, { useState, useEffect } from 'react';
import styles from './Main.module.css'
import Channel from './Channel.js';
import Header from './Header.js';
import axios from "axios";

function Main() {
    const [channel, setStateChannel] = useState(null)
    const [value, setValueSearch] = useState('');

    useEffect(() => {
         axios.get(`http://localhost:8000/api/channel/`)
         .then(response => {
                setStateChannel(response.data)
            })
         }, []
    );


    const filterChannels = channel?
        channel.filter((elem) =>
            elem.name.toLowerCase().includes(value.toLowerCase())
        )
        : [];
    return (
        <div>
            {channel ? <Header setValueSearch={setValueSearch}/>: null}
            <div >
                <div className={styles.channels}>
                    {channel ?
                        filterChannels.map((channel, index)=>{
                            return(
                                <Channel key={index} channel={channel} index={index}/>
                            )
                        })
                    :null}
                </div>
            </div>
        </div>
    )
}

export default Main;