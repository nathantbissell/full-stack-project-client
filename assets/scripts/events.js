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

const signoutButton = function () {
    // delete token, hide all menus
    $('.shoes').hide();
    }

const addButton = function() {
    $('.shoes').hide();
    $('#shoes-create').show();
    $('#smallMessage').hide();
}

const showButton = function () {
    $('.shoes').hide();
    $('#shoes-show').show();
    $('#smallMessage').html('');
}

const showAllShoesButton = function () {
    $('.shoes').hide();
    $('#shoes-all').show();
    $('#smallMessage').html('');
}

const deleteButton = function () {
    $('.shoes').hide();
    $('#shoes-remove').show();
}

const settingsClick = function () {
    // $('.signout').show()
    // $('.change-password').show()
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

const onShoeCreate = event => {
    event.preventDefault()
    const data = getFormFields(event.target)
    console.log(data)
    api.createShoe(data)
        .then(ui.shoeCreateSuccess)
        .catch(ui.shoeCreateFailure)
}

const onShoeEdit = event => {
    event.preventDefault()
    const data = getFormFields(event.target)
    console.log(data)
    api.editShoe(data)
        .then(ui.shoeEditSuccess)
        .catch(ui.shoeEditFailure)
}

const onShoeGet = event => {
    event.preventDefault()
    const data = getFormFields(event.target)
    api.getShoe(data)
        .then(ui.shoeGetSuccess)
        .catch(ui.shoeGetFailure)
}

const onShoeShow = event => {
    event.preventDefault()
    // const data = getFormFields(event.target)
    api.showAllShoes()
        .then(ui.shoeShowSuccess)
        .catch(ui.shoeShowFailure)
}

const onShoeRemove = event => {
    event.preventDefault()
    const data = getFormFields(event.target)
    console.log(data)
    api.removeShoe(data)
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
settingsClick
}