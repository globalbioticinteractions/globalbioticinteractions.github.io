( function( $ ) {

    var maximized = {
        'width': '100%',
        'height': '100%'
    };

    var normalized = {
        'width': '50%',
        'height': '50%'
    };

    var isMaximized = false;

    $( function() {
        $( '.btn').on( 'click', function( event ) {
            var $panel = $( event.target).parent( '.panel' );

            if ( isMaximized ) {
                $panel.animate( normalized, function() {
                    $panel.css( {
                        'zIndex': 1
                    } );
                } );
                isMaximized = false;
            }
            else {
                $panel.css( {
                        'zIndex': 2
                    } );
                $panel.animate( maximized, function() {
                    isMaximized = true;
                } );
            }
        } );
    } );
} )( jQuery );