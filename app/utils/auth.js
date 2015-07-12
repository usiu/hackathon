import request from "superagent";
import $ from "jquery";
import API_CONFIG from "./../../api-config";

export default {

    login: function(identifier, password, remember, callback) {
      request
        .post(API_CONFIG.baseUrl + '/local-login')
        .set('Content-Type', 'application/json')
        .withCredentials()
        .send({
          email: identifier,
          password: password,
          remember: remember
        })
        .end(function(err, res) {
        if (err || res.statusType > 2) {
          callback(false, res);
        } else {
          return callback(true, res);
        }
        });
    },

    logout: function(callback) {
      request
        .get(API_CONFIG.baseUrl + '/api/logout')
        .set('Content-Type', 'application/json')
        .withCredentials()
        .end(function(err, res) {
          if (err || res.statusType > 2) {
              callback(false, res);
          } else {
              callback(true, res);
          }
        });
    },

    isLoggedIn: function(callback) {
      var loggedIn;
      $.ajax({
        url: API_CONFIG.baseUrl + '/api/auth-status',
        crossDomain: true,
        xhrFields: { withCredentials: true },
        cache: false,
        async: false,
      })
      .success(function(response) {
        if (response.message === 'Authorized') {
          loggedIn = true;
        } else {
          loggedIn = false;
        }
      });
      return loggedIn;
    },

    getProfile: function() {
      request
        .get(API_CONFIG.baseUrl + '/api/v1/users/me')
        .set('Content-Type', 'application/json')
        .withCredentials()
        .end(function(err, res) {
            if (err || res.statusType > 2) {
              return false;
            } else {
              return res;
            }
        });
    },

    signup: function(data, context, callback) {
      request
        .post(API_CONFIG.baseUrl + '/local-signup')
        .send(data)
        .end(function(err, res) {
            if (err || res.statusType > 2) {
                callback(false, res);
            } else {
                return callback(true, res);
            }
        });
    }
}
