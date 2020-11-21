( function() {
		var query = document.location.search;

		if ( query && query.indexOf( 'preview=true' ) !== -1 ) {
			window.name = 'wp-preview-18';
		}

		if ( window.addEventListener ) {
			window.addEventListener( 'unload', function() { window.name = ''; }, false );
		}
	}());