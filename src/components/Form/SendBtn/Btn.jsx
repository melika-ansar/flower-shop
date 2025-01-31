import './Btn.css'
import { useState } from 'react'

function SendBtn() {
    const [message, setMessage] = useState(false)

    function HandleBtn() {
        setMessage(true)
    }

    return (
        <div>
        <button
            type='submit'
            className='submit'
            onClick={HandleBtn}>
            Submit
        </button>
        { message && <p className="message">Data registration was successful🌸</p> }
        </div>
    )
}
export default SendBtn;