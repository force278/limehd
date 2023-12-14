import styles from './AdminItem.module.css';

function AdminItem({index, item, active, setActiveAdminState, setModalAdminState}) {
    let style = styles.AdminItemDefaultStyle;
    if (active) {
        style = styles.AdminItemActiveStyle;
    }
    return (
        <div className={style}>
            <p className={styles.textStyle}>{item.username}</p>
            <img className={styles.editLogoStyle} src='editLogo.png' alt='editLogo' onClick={()=>{
            setModalAdminState(true)
            setActiveAdminState(index)
            }}></img>
        </div>
    )
}

export default AdminItem;