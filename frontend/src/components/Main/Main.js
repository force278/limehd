import React, { useState, useEffect } from 'react';
import styles from './Main.module.css'
import Channel from './Channel.js';
import Header from './Header.js';
import axios from "axios";

function Main(props) {
    const [channel, setStateChannel] = useState(null)

    useEffect(() => {
        // Update the document title using the browser API
         axios.get(`http://localhost:8000/api/channel/`).
         then(response => {
                setStateChannel(response.data)
            })
         }, []
    );

    return (
        <div>
            <Header setStateChannel={setStateChannel} channels={channel}/>
            <div >
                <div className={styles.channels}>
                    {channel ?
                        channel.map((channel, index)=>{
                            return(
                                <Channel channel={channel} index={index}/>
                            )
                        })
                    :null}
                </div>
            </div>
        </div>
    )
}

export default Main;