'use strict'

const events = require('./events.js')

$(() => {
  $('#signUpFormModal').on('submit', events.onSignUp)
  $('#signInFormModal').on('submit', events.onSignIn)
  $('#btn-signup').on('click', events.signupButton)
  $('#btn-login').on('click', events.loginButton)
  // $('sign-out').on('submit', events.onSignOut)
  // $('change-password').on('submit', events.onChangePassword)
})
