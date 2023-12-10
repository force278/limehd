import './TableItem.css';

function TableItem({index, item, active, setActiveTableItemState, setModalState}) {
    let style = 'TableItemDefaultStyle';
    if (active) {
        style = 'TableItemActiveStyle'
    }
    return (
        <div className={style}>
            <img className='logoChannelStyle' src={item.icon} alt='logo'></img>
            <p className='textStyle'>{item.name}</p>
            <img className='editLogoStyle' src='editLogo.png' alt='editLogo' onClick={()=>{
            setModalState(true)
            setActiveTableItemState(index)
            }}></img>
        </div>
    )
}

export default TableItem;