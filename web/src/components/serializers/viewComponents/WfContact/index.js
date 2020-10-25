import React, {useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {navigate} from 'gatsby-link'
import Helmet from 'react-helmet'
import Recaptcha from 'react-recaptcha'
// import PortableText from '../serializers/portableText'
import ContentComponents from '../../contentComponents/index'

import styles from '../../../Page/page.module.css'

const Page = ({title, content, thankYou, emailto, subject}) => {
  const data = useStaticQuery(graphql`
    {
      sanityWebform(_id: {eq: "b4d5e39a-d2d7-4818-91b4-fe0e0f337309"}) {
        id
        title
        formSettings {
          thankyou
          emailto
          subject
        }
      }
    }
  `)

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

    if (isVerified && formValues.first_name && formValues.last_name && formValues.email && formValues.message) {
      // console.log('valid form')
      // console.log({formValues})
      setFormErrors(false)

      const form = e.target
      fetch('/.netlify/functions/email', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: encode({
          'to': data.sanityWebform.formSettings.emailto,
          'from': 'no-reply@voyagerinstruments.com',
          'subject': data.sanityWebform.formSettings.subject,
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

      <form
        name={'voyagerinstruments.com Contact Form'}
        method='post'
        action={data.sanityWebform.formSettings.thankyou}
        onSubmit={handleSubmit}
      >

        <div hidden>
          <label>
            Don’t fill this out:{' '}
            <input name={'bot-field'} onChange={handleChange} />
          </label>
        </div>

        <div className={styles.fieldWrapper}>

          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'first_name'}>
              First Name *
            </label>
            <div className='control'>
              <input
                className={styles.customInput}
                type={'text'}
                name={'first_name'}
                onChange={handleChange}
                id={'first_name'}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.customLabel} htmlFor={'last_name'}>
              Last Name *
            </label>
            <div className='control'>
              <input
                className={styles.customInput}
                type={'text'}
                name={'last_name'}
                onChange={handleChange}
                id={'last_name'}
                required
              />
            </div>
          </div>
        </div>

        <div className={styles.fieldWrapper}>
          <div className='field'>
            <label className={styles.customLabel} htmlFor={'email'}>
              Email *
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
        </div>

        <div className='field'>
          <label className={styles.customLabel} htmlFor={'message'}>
            Message
          </label>
          <div className='control'>
            <textarea
              className={styles.customTextarea}
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
          <button disabled={formValues.first_name &&
       formValues.last_name &&
       formValues.email &&
       formValues.message ? false : 'disabled'} className={styles.customButton} type='submit'>
            Send
          </button>
        </div>
        {formErrors && (
          <div className={styles.errors}><p>Unable to submit form. Please make sure all of your fields are filled out.</p></div>
        )}

      </form>

    </>
  )
}
export default Page
