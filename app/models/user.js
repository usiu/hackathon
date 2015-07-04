import Backbone from "backbone";

export default Backbone.Model.extend({
    defaults: {
        gender: '',
        verification: '',
        primary_email: '',
        name: '',
        phone_number: '',
        profile_url: '',
        date_registered: '',
        university: '',
        hacking_what: '',
        favourite_os: '',
        age: ''
    }
});
