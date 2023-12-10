import './TableItem.css';

function TableItem({item}) {
    return (
        <div className='TableItemStyle'>
            <img className='logoChannelStyle' src={item.icon} alt='logo'></img>
            <p className='textStyle'>{item.name}</p>
            <img className='editLogoStyle' src='editLogo.png' alt='editLogo'></img>
            <img className='deleteLogoStyle' src='deleteLogo.png' alt='deleteLogo'></img>
        </div>
    )
}

export default TableItem;