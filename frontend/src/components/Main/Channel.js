import React, { useState, useEffect } from 'react';
import styles from './Channel.module.css'
import axios from "axios";

function Channel({channel,index}) {

    return (
            <div className={styles.channel}>
                   <a href={channel["stream"]} name={channel["name"]}>
                         <img src={channel["icon"]} alt="logo.icon" width="150px"/>
                         <div className={styles.name}> {index+1}. {channel["name"]} </div>
                   </a>
            </div>
    )
}

export default Channel;