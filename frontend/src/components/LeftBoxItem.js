import './LeftBoxItem.css'

function LeftBoxItem({name, active}){
    let style = 'LeftBoxItemDefaultStyle';
    if (active) {
        style = 'LeftBoxItemActiveStyle';
    }
    return (
        <div className={style}>
            {name}
        </div>
    )
}

export default LeftBoxItem;