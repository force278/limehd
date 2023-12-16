import React, { useState, useEffect } from 'react';
import styles from './Header.module.css'
import Search from './Search.js'

function Header({setValueSearch}) {
    return (
            <div className={styles.header}>
                <img src="LogoMain.png" width="100px" height="100px"/>
                <Search setValueSearch={setValueSearch}/>
            </div>
    )
}

export default Header;