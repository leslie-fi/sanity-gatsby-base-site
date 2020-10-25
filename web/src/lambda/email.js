require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV || 'development'}`
})

const GoogleRecaptcha = require('google-recaptcha')
const googleRecaptcha = new GoogleRecaptcha({secret: process.env.GATSBY_GOOGLE_RECAPTCHA_SECRET})
const querystring = require('querystring')
const mailgunSdk = require('mailgun-js')
const DOMAIN = process.env.GATSBY_DOMAIN
const mg = ({apiKey: process.env.GATSBY_MAILGUN_API, domain: DOMAIN})
const mailgun = mailgunSdk(mg)

const formattedDateTime = new Date(Date.now()).toLocaleString()

exports.handler = async (event, context, callback) => {
  const data = querystring.parse(event.body)
  // console.log({data})

  // If no data or email
  if (!data && !data.email) {
    callback(null, {
      statusCode: 422,
      body: JSON.stringify({status: 'Unprocessable Entity'})
    })
    return
  }

  // Google Recaptcha Test
  const recaptchaResponse = data['recaptcha']
  console.log({recaptchaResponse})
  googleRecaptcha.verify({response: recaptchaResponse}, (error) => {
    if (error) {
      // ERROR
      console.log({isHuman: false})
      console.log({error})
      return {
        statusCode: error.statusCode || 500,
        body: JSON.stringify({
          error: error.message
        })
      }
    } else {
      // SUCCESS
      console.log({isHuman: true})

      // Sent Email
    }
  })

  if (!data) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'no data'
      })
    }
  }

  let message = ''
  for (var param in data) {
    if (param === 'recaptcha' || param === 'to' || param === 'from' || param === 'subject') {
    } else {
      // console.log('label: ', param, 'val: ', data[param])
      message += param + `: ` + (param, data[param]) + `\n`
    }
  }

  let response
  try {
    /* Send email to recicipent */
    response = await mailgun.messages().send({
      to: data.to,
      from: data.from,
      subject: `${data.subject} ${formattedDateTime}`,
      text: message.replace(/undefined/g, ''),
      'h:Reply-To': data.email
    })
  } catch (e) {
    console.log('Err', e)
    return {
      statusCode: e.statusCode || 500,
      body: JSON.stringify({
        error: e.message
      })
    }
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      result: response.message
    })
  }
}
