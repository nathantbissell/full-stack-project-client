'use strict'

const events = require('./events.js')

$(() => {
  $('#signUpFormModal').on('submit', events.onSignUp)
  $('#signInFormModal').on('submit', events.onSignIn)
  $('#btn-signup').on('click', events.signupButton)
  $('#btn-login').on('click', events.loginButton)
  // $('sign-out').on('submit', events.onSignOut)
  // $('change-password').on('submit', events.onChangePassword)
  $('#shoes-create').on('submit', events.onShoeCreate)
  $('#shoes-edit').on('submit', events.onShoeEdit)
  $('#shoes-all').on('submit', events.onShoeGet)
  $('#shoes-show').on('submit', events.onShoeShow)
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
