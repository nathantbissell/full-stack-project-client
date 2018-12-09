'use strict'
const store = require('./store.js')
const shoeHandlebar = require('./templates/shoe-list.handlebars')

const signUpSuccess = data => {
    store.user = data.user
    $('#smallMessage').html('Signed up Successfully')
    $('#smallMessage').show()
    $('#signUpFormModal').trigger("reset")
    console.log('signUpSuccess ran: the data is ', data)

}

const signInSuccess = data => {
    store.user = data.user
    $(".log-in").hide();
    $('#smallMessage').html('Signed in Successfully')
    $('#smallMessage').show()
    $('#signInFormModal').trigger("reset")
    $('#second').show()
    console.log('signInSuccess ran, the data is ', data)
}

const signUpFailure = data => {
    store.user = data.user
    console.log('store.user = ', store.user)
    $('#smallMessage').html('Sign Up Failure')
    $('#smallMessage').show()
    $('#signUpFormModal').trigger("reset")
    console.log('signUpFailure ran, the data is ', data)
}

const signInFailure = data => {
    store.user = data.user
    console.log('store.user = ', store.user)
    $('#smallMessage').html('Sign In Failure')
    $('#smallMessage').show()
    $('#signInFormModal').trigger("reset")
    console.log('signInFailure ran, the data is ', data)
}

const changePasswordSuccess = function () {
    // we want to kick out to the add shoe delete shoe screen
    // settings.hide, etc
    $('#settingsChange').html('Password Changed Successfully')
    $('.reset').trigger("reset")
}

const changePasswordFailure = function () {
    $('#settingsChange').html('Password Change Failed. Please make sure old and new password are different.')
    $('.reset').trigger("reset")
}

const signOutFailure = data => {
    $('#settingsChange').html('Unable to Sign Out, sorry we are experiencing technical difficulties.')
} 

const signOutSuccess = data => {
    store.user = null
    $('#second').hide()
    $('#settingsChange').html('Signed Out Successfully.')
}

const shoeCreateSuccess = data => {
    $('#settingsChange').html('Created shoe successfully')
    $('#shoes-create').trigger("reset")
}

const shoeCreateFailure = data => {
    $('#settingsChange').html('Failed to create shoe. Insufficient data')
    $('#shoes-create').trigger("reset")
}

const shoeEditSuccess = data => {
    $('#settingsChange').html('Altered shoe successfully')
    $('#shoes-edit').trigger("reset")
}

const shoeEditFailure = data => {
    $('#settingsChange').html('Unable to alter shoe. Please check your parameters')
    $('#shoes-edit').trigger("reset")
}

const shoeGetSuccess = data => {
    $('#settingsChange').html('Listing all shoes')
}

const shoeGetFailure = data => {
    $('#settingsChange').html('Unable to list all shoes...technical difficulties')
}

const shoeShowSuccess= data => {
    $('#settingsChange').html('Shoe listed')
    $('#shoes-show').trigger("reset")
    const showShoesHtml = shoeHandlebar({ shoes: data.shoes })
    $('.content').html(showShoesHtml)
}

const shoeShowFailure = data => {
    $('#settingsChange').html('Unable to find shoe...')
    $('#shoes-show').trigger("reset")
}

const shoeRemoveSuccess = data => {
    $('#settingsChange').html('Removed shoe successfully')
    $('#shoes-remove').trigger("reset")
}

const shoeRemoveFailure = data => {
    $('#settingsChange').html('Unable to remove shoe, are you sure it exists?')
    $('#shoes-remove').trigger("reset")
}

// const getDataSuccess = (data) => {
//     console.log('getDataSuccess running, here is your data' + data)
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