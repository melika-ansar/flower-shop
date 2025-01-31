import './Item.css'

function Items({src,title}) {
    return(
        <div className='item'>
            <img className='proof-icon' src={src} />
            <h4 className='proof-text'>{title}</h4>
        </div>
    )
}

export default Items;