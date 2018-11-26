const config = require('config.js')
const store = require('../store.js')
const baseUrl = config.apiUrl

const signUp = data => {
    return $.ajax({
      url: baseUrl + '/sign-up',
      method: 'POST',
      data: data
    })
  }

const signIn = data => {
return $.ajax({
    url: baseUrl + '/sign-in',
    method: 'POST',
    data
})
}

const changePassword = function (data) {
return $.ajax({
    url: baseUrl + '/change-password',
    method: 'PATCH',
    headers: {
    Authorization: 'Token token=' + store.user.token
    },
    data: data
})
}

const createGame = function () {
return $.ajax({
    url: baseUrl + '/games',
    method: 'POST',
    headers: {
    Authorization: 'Token token=' + store.user.token
    },
    data: {}
})
}

const signOut = function () {
return $.ajax({
    url: baseUrl + '/sign-out',
    method: 'DELETE',
    headers: {
    Authorization: 'Token token=' + store.user.token
    }
})
}

module.exports = {
signUp,
signIn,
signOut,
changePassword
}