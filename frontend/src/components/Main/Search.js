import styles from './Search.module.css'

function Search({setValueSearch}) {
    return (
         <>
            <input className={styles.input} type="text" placeholder='Поиск телеканалов' onChange={(e)=>setValueSearch(e.target.value)}/>
         </>
    )
}

export default Search;