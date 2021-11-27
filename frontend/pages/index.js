import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Button from "../components/Button"
import InputField from "../components/InputField"

export default function Home() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    domain: ''
  });

  const [showAnswer, setShowAnswer] = useState(false);
  const [userEmail, setUserEmail] = useState(undefined);
  const [responseSuccess, setResponseSuccess] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const registerUser = async (event) => {
    event.preventDefault()
    setShowAnswer(true);
    try {
      const res = await fetch("http://localhost:5000/convert", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userData: state }),
      })

      const result = await res.json()
      setUserEmail(result.mail);
      setResponseSuccess(result.success);
      setTimeout(() => setShowAnswer(false), 20000);
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Email Guesser</title>
        <meta name="description" content="Email Guesser" />
      </Head>

      <main className={styles.main}>
        <div className={styles.form_box}>
          <div className={styles.card_image}></div>
          <form className={styles.form_card} onSubmit={registerUser}>
            <div>
              <p className={styles.text}>Hi!</p>
              <p className={styles.text}>Introduce your first name, last name and domain and the app will guess your email address</p>
            </div>
            <div>
              <InputField required={true} handleInput={handleChange} name="firstName" type="text" label="First Name" />
              <InputField required={true} handleInput={handleChange} name="lastName" type="text" label="Last Name" />
              <InputField required={true} handleInput={handleChange} name="domain" type="text" label="Domain" />
            </div>
            <div className={styles.answer_box}>
              {showAnswer && responseSuccess ? <p>Congrats your email is: {userEmail}</p> : null}
              {showAnswer && !responseSuccess? <p>{userEmail}</p> : null}
            </div>
            <div className={styles.button_box}>
              <Button type="reset" value="Reset" style="primary" />
              <Button type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

