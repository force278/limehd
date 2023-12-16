import styles from './Search.module.css'

function Search({setValueSearch}) {
    return (
         <div>
            <input className={styles.input} type="text" onChange={(e)=>setValueSearch(e.target.value)}/>
         </div>
    )
}

export default Search;