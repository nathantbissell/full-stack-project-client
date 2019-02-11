const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')

const signupButton = function() {
  $('.sign-up').show()
  $('.log-in').hide()
}

const loginButton = function() {
  $('.log-in').show()
  $('.sign-up').hide()
}
const showSettingsPage = function() {
  $('.shoes, #smallMessage, #shoes-show, #shoes-all, #shoes-remove').hide()
  $('#settingsPage').show()
}

const reset = function() {
  $('.reset, #reset').show()
}

const signoutButton = function() {
  $('.shoes').hide()
}

const addButton = function() {
  $('#smallMessage, #settingsPage, #shoes-show, #shoes-all').hide()
  $('#shoes-create').show()
}

const showButton = function() {
  $('.shoes, #settingsPage').hide()
  $('#shoes-show').show()
  $('#smallMessage').html('')
}

const showAllShoesButton = function() {
  $('.shoes, #settingsPage').hide()
  $('#shoes-all').show()
  $('#smallMessage').html('')
}

const deleteButton = function() {
  $('.shoes').hide()
  $('#smallMessage').html('')
  $('#shoes-remove').show()
}

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  $('#settingsPage').hide()
  api
    .signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onShoeCreate = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .createShoe(data)
    .then(ui.shoeCreateSuccess)
    .catch(ui.shoeCreateFailure)
}

const onShoeEdit = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .editShoe(data)
    .then(ui.shoeEditSuccess)
    .catch(ui.shoeEditFailure)
}

const onShoeGet = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .getShoe(data)
    .then(ui.shoeGetSuccess)
    .catch(ui.shoeGetFailure)
}

const onShoeShow = event => {
  event.preventDefault()
  api
    .showAllShoes()
    .then(ui.shoeShowSuccess)
    .catch(ui.shoeShowFailure)
}

const onShoeRemove = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api
    .removeShoe(data)
    .then(ui.shoeRemoveSuccess)
    .catch(ui.shoeRemoveFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  loginButton,
  signupButton,
  signoutButton,
  onShoeCreate,
  onShoeEdit,
  onShoeGet,
  onShoeRemove,
  onShoeShow,
  store,
  addButton,
  showButton,
  showAllShoesButton,
  deleteButton,
  showSettingsPage,
  reset
}
