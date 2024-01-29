import EmailImg from '../../assets/images/emailImg.png';
import './style.scss'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../Footer';



function ContactsForm() {

    const [form, setForm] = useState({
        name: "",
        number: '',
        email: '',
    })

    const templateParams = {
        from_name: form.name,
        email: form.email,
        number: form.number
    }

    function fireSetForm(e) {
        let key = e.target.name
        let val = e.target.value
        setForm({ ...form, [key]: val })
    }

    function submit(e) {
        e.preventDefault()
        emailjs.send('service_mjuduv5', 'template_0k60e0q', templateParams, 'IHmX8BsOVzk2nabjB')
            .then((response) => {
                toast.success(`Успешно отправлено!`, {
                    theme: 'dark'
                })
            }, (err) => {
                toast.error(`Ooops!  Something went wrong. Tyr again!`, {
                    theme: 'dark'
                })
            })
        e.target.reset()
    }



    return (
        <div className="contacts-form-wrapper">
            <form onSubmit={submit}>
                <h3>Остались вопросы?</h3>
                <span>Оставь заявку и мы ответим</span>
                <div className="div">
                    <div className="hr">
                        <input type="text" placeholder='Имя'
                            onChange={fireSetForm} required name='name'
                        />

                    </div>
                    <div className="hr">
                        <input type="text" placeholder='Номер Телефона'
                            onChange={fireSetForm} required name='number'
                        />

                    </div>
                    <div className="hr">
                        <input type="text" placeholder='Почта'
                            onChange={fireSetForm} required name='email'
                        />

                    </div>

                </div>
                <button className='info-btn'>Подать Заявку</button>
                <ToastContainer />
            </form>
            <div className="footer-about">
                <Footer />
            </div>

        </div>
    );
}

export default ContactsForm;