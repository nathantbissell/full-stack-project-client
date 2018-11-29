'use strict'
const store = require('./store.js')

const signUpSuccess = data => {
    store.user = data.user
    $('#smallMessage').html('Signed up Successfully')
    $('#smallMessage').show()
    $('#signUpFormModal').trigger("reset")
    console.log('signUpSuccess ran: the data is ', data)

}

const signInSuccess = data => {
    store.user = data.user
    console.log('logged in successfully')
    console.log(store.user)
    $('#smallMessage').html('Signed in Successfully')
    $('#smallMessage').show()
    $('#signInFormModal').trigger("reset")
    console.log('signInSuccess ran, the data is ', data)
}

const signUpFailure = data => {
    store.user = data.user

}

const signInFailure = data => {
    store.user = data.user

}

const changePasswordSuccess = data => {

}

const changePasswordFailure = data => {

}

const signOutFailure = data => {

}

const signOutSuccess = data => {
    store.user = null

}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
}