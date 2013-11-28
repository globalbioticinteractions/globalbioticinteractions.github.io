var AreaPicker = function( map ) {
    var testCoords = { "nw_lat": 41.574361, "nw_lng": -125.533448, "se_lat": 32.750323, "se_lng": -114.744873 };

    this.bounds_ = new google.maps.LatLngBounds(
        new google.maps.LatLng( testCoords.se_lat, testCoords.nw_lng ), // California
        new google.maps.LatLng( testCoords.nw_lat, testCoords.se_lng )
    );

    this.rectangle_ = null;
    this.map = map;
    this.isCreated_ = false;

    this.control_ = new AreaPickerControl( this );
    this.info_ = new AreaPickerInfo( this );
};

AreaPicker.prototype.create = function() {
    var me = this;
    if ( !me.isCreated_ ) {
        me.rectangle_ = new google.maps.Rectangle( {
            bounds: me.bounds_,
            editable: true,
            draggable: true,
            zIndex: 10
        } );

        google.maps.event.addListener( me.rectangle_, 'bounds_changed', function() {
            me.bounds_ = me.rectangle_.getBounds();

            me.info_.show( me.bounds_ );
        } );

        me.isCreated_ = true;
    }
};

AreaPicker.prototype.show = function() {
    if ( !this.isCreated_ ) {
        this.create();
    }
    this.rectangle_.setMap( this.map );
    this.info_.show( this.bounds_ );
};

AreaPicker.prototype.hide = function() {
    if ( this.isCreated_ ) {
        this.rectangle_.setMap( null );
        this.info_.hide();
    }
};



function AreaPickerControl( associatedPicker ) {
    this.associatedPicker_ = associatedPicker;
    this.isActive_ = false;
    this.container_ = null;

    this.create();
}

AreaPickerControl.prototype.create = function() {
    var me = this;
    me.container_ = document.createElement( 'div' );
    me.container_.title = 'Toggle Area Picker';
    me.container_.index = 1;

    me.applyStyles();

    google.maps.event.addDomListener( me.container_, 'click', function( event ) {
        me.isActive_ = !me.isActive_;
        if ( me.isActive_ ) {
            me.container_.style.backgroundColor = '#aaa';
            me.associatedPicker_.show();
        }
        else {
            me.container_.style.backgroundColor = '#fff';
            me.associatedPicker_.hide();
        }
    } );

    this.associatedPicker_.map.controls[ google.maps.ControlPosition.RIGHT_CENTER ].push( me.container_ );
};

AreaPickerControl.prototype.applyStyles = function() {
    this.container_.style.margin = '3px';
    this.container_.style.paddingLeft = '5px';
    this.container_.style.paddingTop = '3px';
    this.container_.style.paddingBottom = '3px';
    this.container_.style.backgroundColor = '#fff';
    this.container_.style.border = '1px solid #000';
    this.container_.style.width = '35px';
    this.container_.style.height = '21px';
    this.container_.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.4)';
    this.container_.style.cursor = 'pointer';
    this.container_.innerHTML = '<img src="icon_area.png" />';
};

function AreaPickerInfo( associatedPicker ) {
    this.infoWindow = null;
    this.associatedPicker_ = associatedPicker;

    this.create();
}

AreaPickerInfo.prototype.create = function() {
    this.infoWindow = new google.maps.InfoWindow( { content: '' } );
};

AreaPickerInfo.prototype.show = function( bounds ) {
    this.hide();
    this.setContent( bounds );
    this.infoWindow.setPosition( bounds.getCenter() );
    this.infoWindow.open( this.associatedPicker_.map );
};

AreaPickerInfo.prototype.hide = function() {
    this.infoWindow.close();
};

AreaPickerInfo.prototype.setContent = function( bounds ) {
    var contentString = this.createContent_( bounds );
    this.infoWindow.setContent( contentString );
};

AreaPickerInfo.prototype.createContent_ = function( bounds ) {
    var eolBounds ={
        nw_lat: bounds.getNorthEast().lat(),
        nw_lng: bounds.getSouthWest().lng(),
        se_lat: bounds.getSouthWest().lat(),
        se_lng: bounds.getNorthEast().lng()
    };
    return [
        '<div>',
            '<a href="#?',
                'nw_lat=' + eolBounds.nw_lat,
                '&nw_lng=' + eolBounds.nw_lng,
                '&se_lat=' + eolBounds.se_lat,
                '&se_lng=' + eolBounds.se_lng,
            '">',
            '<span>show interactions</span>',
            '</a>',
            '<br />',
        '</div>'
    ].join( '' );
};