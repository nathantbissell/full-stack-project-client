const config = require('./config.js')
const store = require('./store.js')
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
    data: data
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

const signOut = function () {
return $.ajax({
    url: baseUrl + '/sign-out',
    method: 'DELETE',
    headers: {
    Authorization: 'Token token=' + store.user.token
    }
})
}

const createShoe = function (data) {
return $.ajax({
    url: baseUrl + '/shoes',
    method: 'POST',
    headers: {
    Authorization: 'Token token=' + store.user.token
    },
    data: data
})
}

const editShoe = function (data) {
return $.ajax({
    url: baseUrl + '/shoes/' + data.id,
    method: 'PATCH',
    headers: {
    Authorization: 'Token token=' + store.user.token
    },
    data: data
})
}

const getShoe = function (data) {
return $.ajax({
    url: baseUrl + '/shoes' + data.id ,
    method: 'GET',
    headers: {
    Authorization: 'Token token=' + store.user.token
    },
    data
})
}

const showAllShoes = function () {
return $.ajax({
    url: baseUrl + '/shoes',
    method: 'GET',
    data
})
}

const removeShoe = function (data) {
return $.ajax({
    url: baseUrl + '/shoes/' + data.id,
    method: 'DELETE',
    headers: {
    Authorization: 'Token token=' + store.user.token
    },
    data
})
}

module.exports = {
signUp,
signIn,
signOut,
changePassword,
createShoe,
editShoe,
getShoe,
showAllShoes,
removeShoe
}