myNamespace.services.toTheBackend = {
	doGet: function(url, fnDone, fnError, fnAlways){
		$.get(url)
		.done(fnDone)
		.fail(fnError)
		.always(fnAlways);
	}
};
