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
};

AreaPicker.prototype.create = function() {
    if ( !this.isCreated_ ) {
        this.rectangle_ = new google.maps.Rectangle( {
            bounds: this.bounds_,
            editable: true,
            draggable: true,
            zIndex: 10
        } );
        this.isCreated_ = true;
    }
};

AreaPicker.prototype.show = function() {
    if ( !this.isCreated_ ) {
        this.create();
    }
    this.rectangle_.setMap( this.map );
};

AreaPicker.prototype.hide = function() {
    if ( this.isCreated_ ) {
        this.rectangle_.setMap( null );
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
