(function(window, mapster) {

    $.widget("mapster.mapster", {
      // default options
      options: { },

      // the constructor
      _create: function() {
        //console.log("created");
        var element = this.element[0],
            options = this.options;
        this.map = Mapster.create(element, options);
      },

      // called when created, and later when changing options
      _refresh: function() {

      },

      // Add a marker onto the map
      addMarker: function( options ) {
        this.map.addMarker(options);
      },

      findMarkers: function(callback) {
        return this.map.findBy(callback);
      },

      removeMarkers: function(callback) {
        this.map.removeBy(callback);
      },

      markers: function() {
        return this.map.markers.items;
      },

      // events bound via _on are removed automatically
      // revert other modifications here
      _destroy: function() {

      },

      // _setOptions is called with a hash of all options that are changing
      // always refresh when changing options
      _setOptions: function() {
        // _super and _superApply handle keeping the right this-context
        this._superApply( arguments );
        this._refresh();
      },

      // _setOption is called for each individual option that is changing
      _setOption: function( key, value ) {
        this._super( key, value );
      }
    });

}(window, window.Mapster));