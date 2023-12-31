import React from 'react';
import styles from './Header.module.css'
import Search from './Search.js'

function Header({setValueSearch}) {
    return (
            <div className={styles.header}>
                <img src="LogoMain.png" alt='LogoMain' width="100px" height="100px"/>
                <Search setValueSearch={setValueSearch}/>
                <a href='/panel' className={styles.a}>Вход</a>
            </div>
    )
}

export default Header;