import React, {useState} from 'react'
import {navigate} from 'gatsby-link'
import Helmet from 'react-helmet'
import Recaptcha from 'react-recaptcha'
// import PortableText from '../serializers/portableText'
import ContentComponents from '../serializers/contentComponents/index'

import styles from '../Page/page.module.css'

const Page = ({title, content, thankYou, emailto, subject}) => {
  function encode (data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  // State
  const [formValues, setFormValues] = useState([])
  const [isVerified, setIsVerified] = useState(false)
  const [formErrors, setFormErrors] = useState(false)
  const [recaptchaResponse, setRecaptchaResponse] = useState(null)

  // Google Recaptcha
  let recaptchaLoaded = function () {
    // console.log('Loaded')
  }
  let expiredCallback = function () {
    // console.log('expired')
    setIsVerified(false)
    setRecaptchaResponse(null)
  }
  let verifyCallback = function (response) {
    // console.log(response)
    if (response) {
      setIsVerified(true)
      setRecaptchaResponse(response)
    } else {
      setIsVerified(false)
      setRecaptchaResponse(null)
    }
  }

  const handleChange = e => {
    setFormValues({...formValues, [e.target.name]: e.target.value})
  }
  const handleSubmit = e => {
    e.preventDefault()
    // console.log({e})

    if (isVerified && formValues.name && formValues.email && formValues.message) {
      // console.log('valid form')
      // console.log({formValues})
      setFormErrors(false)

      const form = e.target
      fetch('/.netlify/functions/email', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: encode({
          'to': emailto,
          'from': 'no-reply@voyagerinstruments.com',
          'subject': subject,
          ...formValues,
          recaptcha: recaptchaResponse
        })
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => console.error(error))
    } else {
      // console.log('invalid form')
      setFormErrors(true)
    }
  }

  return (
    <>
      <Helmet>
        <script key={`recaptcha`} src='https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit' async defer />
      </Helmet>

      {content && <ContentComponents blocks={content} />}

      <article className={styles.root} >

        <div className={styles.pageTitleWrapper}>
          <h1 className={styles.pageTitle}>{title}</h1>
        </div>
        <div>
          <div className={styles.mainContent}>
            <div>

              <div>
                <form
                  name={'voyagerinstruments.com Contact Form'}
                  method='post'
                  action={thankYou}
                  onSubmit={handleSubmit}
                >

                  <div hidden>
                    <label>
                      Don’t fill this out:{' '}
                      <input name={'bot-field'} onChange={handleChange} />
                    </label>
                  </div>

                  <div className='field'>
                    <label className={styles.customLabel} htmlFor={'name'}>
                      Your name
                    </label>
                    <div className='control'>
                      <input
                        className={styles.customInput}
                        type={'text'}
                        name={'name'}
                        onChange={handleChange}
                        id={'name'}
                        required
                      />
                    </div>
                  </div>

                  <div className='field'>
                    <label className={styles.customLabel} htmlFor={'email'}>
                      Email
                    </label>
                    <div className='control'>
                      <input
                        className={styles.customInput}
                        type={'email'}
                        name={'email'}
                        onChange={handleChange}
                        id={'email'}
                        required
                      />
                    </div>
                  </div>

                  <div className='field'>
                    <label className={styles.customLabel} htmlFor={'phone'}>
                      Phone
                    </label>
                    <div className='control'>
                      <input
                        className={styles.customInput}
                        type={'text'}
                        name={'phone'}
                        onChange={handleChange}
                        id={'phone'}

                      />
                    </div>
                  </div>

                  <div className='field'>
                    <label className={styles.customLabel} htmlFor={'message'}>
                      Message
                    </label>
                    <div className='control'>
                      <textarea
                        className={styles.customInput}
                        name={'message'}
                        onChange={handleChange}
                        id={'message'}
                        required
                        rows='4'
                      />
                    </div>
                  </div>

                  <div>
                    <br />

                    <Recaptcha
                      sitekey={process.env.GATSBY_GOOGLE_RECAPTCHA_PUBLIC}
                      render='explicit'
                      verifyCallback={verifyCallback}
                      onloadCallback={recaptchaLoaded}
                      expiredCallback={expiredCallback}
                    />
                  </div>

                  <div className='field'>
                    <button disabled={formValues.name && formValues.email && formValues.message ? false : 'disabled'} className={styles.customButton} type='submit'>
                      Send
                    </button>
                  </div>
                  {formErrors && (
                    <div className={styles.errors}><p>Unable to submit form. Please make sure all of your fields are filled out.</p></div>
                  )}

                </form>
              </div>
            </div>

          </div>
        </div>

      </article>
    </>
  )
}
export default Page
