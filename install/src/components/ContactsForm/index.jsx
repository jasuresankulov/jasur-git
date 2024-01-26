import EmailImg from '../../assets/images/emailImg.png';
import './style.scss'
function ContactsForm() {
    return (
        <div className="contacts-form-wrapper">
            <form >
                <input type="text" placeholder='Имя' />
               
                <input type="number" placeholder='Номер телефона' />
              
                <input type="email" placeholder='Почта' />
               
            </form>
        </div>
    );
}

export default ContactsForm;