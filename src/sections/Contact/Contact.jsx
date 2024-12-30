import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>

        <form action="https://formspree.io/f/xvggqqry" method='post'>
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id="name" placeholder='Name' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>
                    E-mail
                </label>
                <input type="text" name="email" id="email" placeholder='E-Mail' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="Message" hidden>
                    Message
                </label>
                <textarea type="text" name="Message" id="Message" placeholder='Message' required></textarea>
            </div>
            <input className='hover btn' type="submit" value='Submit'/>
        </form>
    </section>
  )
}

export default Contact