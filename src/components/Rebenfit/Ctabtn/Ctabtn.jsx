import './Ctabtn.css'

function Cta() {

    const HandleClick = () => {
        window.location.href = "/Form.jsx"
    }
    return (
        <div className='btn-container'>
            <button
                className='ctabtn'
                onClick={HandleClick}>
                registration form
            </button>
        </div>
    )
}

export default Cta;