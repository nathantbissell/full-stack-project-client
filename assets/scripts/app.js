'use strict'

const events = require('./events.js')

$(() => {
  // initial welcome screen
  $('#signUpFormModal').on('submit', events.onSignUp)
  $('#signInFormModal').on('submit', events.onSignIn)
  $('#btn-signup').on('click', events.signupButton)
  $('#btn-login').on('click', events.loginButton)
 

  // settings page
  $('#settings').on('click', events.showSettingsPage)
  $('#sign-out').on('click', events.onSignOut)

  // change password
  $('#btn-changepw').on('click', events.reset)
  $('.reset').on('submit', events.onChangePassword)

  // crud
  $('#shoes-create').on('submit', events.onShoeCreate)
  $('#shoes-edit').on('submit', events.onShoeEdit)
  $('#shoes-all').on('submit', events.onShoeGet)
  $('#shoes-show').on('submit', events.onShoeShow)
  // needs work going off showallshoes function -- need to separate the two
  $('#shoes-remove').on('submit', events.onShoeRemove)

  // crud buttons
  $('#btn-add').on('click', events.addButton)
  $('#btn-remove').on('click', events.deleteButton)
  $('#btn-show').on('click', events.showButton)
  $('#btn-showall').on('click', events.showAllShoesButton)
  $('#btn-showall').on('click', events.onShoeShow)
  // have to create content class / button
  // $('.content').on('click', 'button', onDelete)
})
