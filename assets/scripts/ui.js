'use strict'
const store = require('./store.js')
const shoeHandlebar = require('./templates/shoe-list.handlebars')

const signUpSuccess = data => {
  store.user = data.user
  $('#smallMessage').html('Signed up Successfully')
  $('#smallMessage').show()
  $('#signUpFormModal').trigger('reset')
}

const signInSuccess = data => {
  store.user = data.user
  $('.log-in, .home').hide()
  $('#smallMessage').html('Signed in Successfully')
  $('#smallMessage, #second').show()
  $('#signInFormModal').trigger('reset')
}

const signUpFailure = data => {
  store.user = data.user
  $('#smallMessage').html('Sign Up Failure')
  $('#smallMessage').show()
  $('#signUpFormModal').trigger('reset')
}

const signInFailure = data => {
  store.user = data.user
  $('#smallMessage').html('Sign In Failure')
  $('#smallMessage').show()
  $('#signInFormModal').trigger('reset')
}

const changePasswordSuccess = function() {
  // we want to kick out to the add shoe delete shoe screen
  // settings.hide, etc
  $('#smallMessage').html('Password Changed Successfully')
  $('.reset').trigger('reset')
}

const changePasswordFailure = function() {
  $('#smallMessage').html(
    'Password Change Failed. Please make sure old and new password are different.'
  )
  $('.reset').trigger('reset')
}

const signOutFailure = data => {
  $('#smallMessage').html(
    'Unable to Sign Out, sorry we are experiencing technical difficulties.'
  )
}

const signOutSuccess = data => {
  store.user = null
  $('#second').hide()
  $('#smallMessage').html('Signed Out Successfully.')
}

const shoeCreateSuccess = data => {
  $('#smallMessage').html('Created shoe successfully')
  $('#shoes-create').trigger('reset')
}

const shoeCreateFailure = data => {
  $('#smallMessage').html('Failed to create shoe. Insufficient data')
  $('#shoes-create').trigger('reset')
}

const shoeEditSuccess = data => {
  $('#smallMessage').html('Altered shoe successfully')
  $('#shoes-edit').trigger('reset')
}

const shoeEditFailure = data => {
  $('#smallMessage').html('Unable to alter shoe. Please check your parameters')
  $('#shoes-edit').trigger('reset')
}

const shoeGetSuccess = data => {
  // showing one shoe
  $('#smallMessage').html('Listing your shoe')
  const showShoesHtml = shoeHandlebar({ shoes: data.shoes })
  // console.log(showShoesHtml)
  // // left this console log cause I wanted to be able
  // // to display one shoe, however was unable to get working before deadline.
  $('.content').html(showShoesHtml)
}

const shoeGetFailure = data => {
  $('#smallMessage').html('Unable to list your shoe...technical difficulties')
}

const shoeShowSuccess = data => {
  $('#smallMessage').html('Shoe listed')
  $('#shoes-show').trigger('reset')
  const showShoesHtml = shoeHandlebar({ shoes: data.shoes })
  $('.content').html(showShoesHtml)
}

const shoeShowFailure = data => {
  $('#smallMessage').html('Unable to find shoe...')
  $('#shoes-show').trigger('reset')
}

const shoeRemoveSuccess = data => {
  $('#smallMessage').html('Removed shoe successfully')
  $('#shoes-remove').trigger('reset')
}

const shoeRemoveFailure = data => {
  $('#smallMessage').html('Unable to remove shoe, are you sure it exists?')
  $('#shoes-remove').trigger('reset')
}

// const getDataSuccess = (data) => {
//     const showDataHtml = handlebar({ shoes: data.shoes })
//     $('.content').html(showDataHtml)
// }

// const clearData = () => {
//     $('.content').empty()
// }

module.exports = {
  signUpSuccess,
  signInSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  shoeCreateSuccess,
  shoeCreateFailure,
  shoeEditSuccess,
  shoeEditFailure,
  shoeGetSuccess,
  shoeGetFailure,
  shoeShowSuccess,
  shoeShowFailure,
  shoeRemoveSuccess,
  shoeRemoveFailure,
  shoeHandlebar
}
