import './Stisfaction.css'
import rating from './../../../atsses/image/rating.png'


function Item({src, model, paragraph}) {
    return(
        <div className='slid'>

            <img className='profile' src={src} />
            
            <div className='box'>
                <div className='five-star'>
                <img className='star' src="https://img.icons8.com/?size=100&id=7856&format=png&color=dcc604"/>
                <img className='star' src="https://img.icons8.com/?size=100&id=7856&format=png&color=dcc604"/>
                <img className='star' src="https://img.icons8.com/?size=100&id=7856&format=png&color=dcc604"/>
                <img className='star' src="https://img.icons8.com/?size=100&id=7856&format=png&color=dcc604"/>
                <img className='star' src="https://img.icons8.com/?size=100&id=7856&format=png&color=dcc604"/>
                </div>
                <p className='model'>{model}</p>
                <p className='detail'>{paragraph}</p> 
            </div>

        </div>
    )
}

export default Item; 