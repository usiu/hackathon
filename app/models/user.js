import Backbone from "backbone";

export default Backbone.Model.extend({
    defaults: {
        email: '',
        gender: '',
        verification: '',
        primary_email: '',
        name: '',
        phone_number: '',
        profile_url: '',
        date_registered: ''
    }
});