const app = require('express');
const parse = require('body-parser')
const path = require('path')

// @Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {sendFile, isValid} = require('./helpers')

// @Boilerplate
const app = express()
const PORT = 8000

// @Database (Mock)
const tables = []
const waitlist = []

// @Middleware
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
