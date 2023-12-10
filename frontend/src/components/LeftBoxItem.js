import './LeftBoxItem.css'

function LeftBoxItem({index, name, active, setLeftBoxActiveItemState}){
    let style = 'LeftBoxItemDefaultStyle';
    if (active) {
        style = 'LeftBoxItemActiveStyle';
    }
    return (
        <div className={style} onClick={() => {setLeftBoxActiveItemState(index)}}>
            {name}
        </div>
    )
}

export default LeftBoxItem;