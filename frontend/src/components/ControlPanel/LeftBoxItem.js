import styles from './LeftBoxItem.module.css'

function LeftBoxItem({index, name, active, setLeftBoxActiveItemState}){
    let style = styles.LeftBoxItemDefaultStyle;
    if (active) {
        style = styles.LeftBoxItemActiveStyle;
    }
    return (
        <div className={style} onClick={() => {setLeftBoxActiveItemState(index)}}>
            {name}
        </div>
    )
}

export default LeftBoxItem;