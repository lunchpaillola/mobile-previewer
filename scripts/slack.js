#!/usr/bin/env node

const path = require('path')
const axios = require('axios')

const token = process.env.FOUNDRY_SLACK_TOKEN

console.log('SENDING SLACK MESSAGE...')

const filePath = process.argv[2]
const filename = path.basename(filePath)
const url = `https://s3-us-west-1.amazonaws.com/proton-android-releases/${filename}`

const message = `New android build available:\n\n${url}`

axios.post('https://slack.com/api/chat.postMessage', {
  channel: 'android-builds',
  text: message,
}, { headers: { Authorization: `Bearer ${token}` } })
  .then(resp => {
    console.log(resp.data)
  })
  .catch(err => console.log('ERROR SENDING!', err))

