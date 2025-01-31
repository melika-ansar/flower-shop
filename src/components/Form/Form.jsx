import './Form.css';
import Inputs from './../Form/Inputs/Inputs';
import SendBtn from './SendBtn/Btn';

function Counsultant() {
    return (
        <div className='form-container'>
            <p className='paragraph'>Please fill out the form to
                <br />contact us. We will contact you.
            </p>
            <Inputs type="text" placeholder="type your name" />
            <Inputs type="tel" placeholder="type ypur phone number" />
            <SendBtn />
        </div>
    )
}

export default Counsultant;