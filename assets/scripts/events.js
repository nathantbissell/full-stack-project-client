const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')

const signupButton = function () {
    console.log('in signupButton')
    $('.sign-up').show();
    $(".log-in").hide();
}

const loginButton = function() {
    $(".log-in").show();
    $('.sign-up').hide();
}

const onSignUp = event => {
event.preventDefault()
const data = getFormFields(event.target)
console.log(data)
api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
event.preventDefault()
console.log("getting into onSignIn")
const data = getFormFields(event.target)
console.log(data)
api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
event.preventDefault()
const data = getFormFields(event.target)
api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)

}

const onSignOut = event => {
event.preventDefault()
api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
onSignUp,
onSignIn,
onChangePassword,
onSignOut,
loginButton,
signupButton
}