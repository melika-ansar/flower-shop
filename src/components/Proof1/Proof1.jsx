import './Proof1.css'
import Items from './Item/Item'

function Proof1() {
    return(
        <div className='proof-container'>
            <p className='p-proof'>Why choose us?</p>
        <div className='proof'>
            <Items src="https://img.icons8.com/?size=100&id=R2gcTwjhPr7W&format=png&color=000000" title="Easy payment" />
            <Items src="https://img.icons8.com/?size=100&id=22655&format=png&color=000000" title="Delivery on time" />
            <Items src="https://img.icons8.com/?size=100&id=11741&format=png&color=000000" title="Real photo" />
            <Items src="https://img.icons8.com/?size=100&id=146&format=png&color=000000" title="Help with the selection" />
            <Items src="https://img.icons8.com/?size=100&id=YxCw7An8DYqf&format=png&color=000000" title="Customized solutions" />
        </div>
        </div>
    )
}

export default Proof1;