import React from "react";

class BackboneMixin extends React.Component {
	componentDidMount() {
		// Whenever there may be a change in the Backbone data, trigger a
		// reconcile.
		this.getBackboneCollections().forEach(function (collection) {
			// explicitly bind `null` to `forceUpdate`, as it demands a callback and
			// React validates that it's a function. `collection` events passes
			// additional arguments that are not functions
			collection.on('add remove change', this.forceUpdate.bind(this, null));
		}, this);
	}

	componentWillUnmount() {
		// Ensure that we clean up any dangling references when the component is
		// destroyed.
		this.getBackboneCollections().forEach(function (collection) {
			collection.off(null, null, this);
		}, this);
	}
};

export default BackboneMixin;