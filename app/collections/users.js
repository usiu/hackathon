import Backbone from "backbone";
import _ from "lodash";
import $ from "jquery";
	
import User from "./../models/user";

import API_CONFIG from "../../api-config";
const API_URL = API_CONFIG.url;

var Users = Backbone.Collection.extend({
	model: User,
	url: API_URL + '/users',
	initialize: function() {
		var self = this;
		$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
			options.xhrFields = {
				withCredentials: true
			};
		})
	}
});

Users.getInstance = _.memoize(function(url) {
	var users = new Users();
	users.url = url || users.url;
	return users;
})

export default Users;