import styles from './ChannelItem.module.css';

function ChannelItem({index, item, active, setActiveTableItemState, setModalState}) {
    let style = styles.ChannelItemDefaultStyle;
    if (active) {
        style = styles.ChannelItemActiveStyle;
    }
    return (
        <div className={style}>
            <img className={styles.logoChannelStyle} src={item.icon} alt='logo'></img>
            <p className={styles.textStyle}>{item.name}</p>
            <img className={styles.editLogoStyle} src='editLogo.png' alt='editLogo' onClick={()=>{
            setModalState(true)
            setActiveTableItemState(index)
            }}></img>
        </div>
    )
}

export default ChannelItem;