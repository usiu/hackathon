export default function(action, data, collection, context, transitionTo, transitionToSegment) {

    var cb = {
        success: function(model, response, options) {
            console.log(action + ' successful');
            //Redirect here
			transitionTo =  transitionToSegment ? transitionTo + '/' + response.id + '/' + transitionToSegment : transitionTo;
            context.context.router.transitionTo(transitionTo);
        },
        error: function(model, xhr, options) {
            context.setState({
                error: true,
                message: xhr.responseJSON.error.message
            });
        }
    };

    if (action === 'sync' || action === 'update') {

        data.url = collection.url + '/' + data.id;
        return collection.sync('update', data, cb);		

    } else {
		
		if(action === 'remove') {
			data.url = collection.url + '/' + data.id;
			return collection.sync('delete', data, cb);
		}

        return collection[action](data, cb);
		
	}

}