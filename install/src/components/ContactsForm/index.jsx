import EmailImg from '../../assets/images/emailImg.png';
import './style.scss'
function ContactsForm() {
    return (
        <div className="contacts-form-wrapper">
            <form >
                <h3>Остались вопросы?</h3>
                <span>Оставь заявку и мы ответим</span>
                <div className="div">
                    <div className="hr">
                        <input type="text" placeholder='Имя' />
                     </div>
                     <div className="hr">
                        <input type="text" placeholder='Номер Телефона' />
                     </div>
                     <div className="hr">
                        <input type="text" placeholder='Почта' />
                     </div>
                        
                </div>
                <button className='info-btn'>Подать Заявку</button>
            </form>
        </div>
    );
}

export default ContactsForm;