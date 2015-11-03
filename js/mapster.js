(function(window, google, List) {
    var Mapster = (function() {
        function Mapster(element, options) {
            this.gMap = new google.maps.Map(element, options);
            this.markers = List.create();
            if(options.cluster) {
                this.markerClusterer = new MarkerClusterer(this.gMap, [], options.cluster.options);
            }
        }
        Mapster.prototype = {
            zoom: function(level) {
                if(level) {
                    this.gMap.setZoom(level);
                } else {
                    this.gMap.getZoom();
                }
            },

            _on: function(options) {
                var self = this;
                google.maps.event.addListener(options.obj, options.event, function(e) {
                    options.callback.call(self, e);
                });
            },

            addMarker: function(options) {
                var marker;
                options.position = {
                    lat: options.lat,
                    lng: options.lng
                };
                marker = this._createMarker(options);
                if(this.markerClusterer) {
                    this.markerClusterer.addMarker(marker);
                }
                this._addMarker(marker);
                if(options.event) {
                    this._on({
                        obj: marker,
                        event: options.event.name,
                        callback: options.event.callback
                    });
                }
                if(options.content) {
                    this._on({
                        obj: marker,
                        event: 'click',
                        callback: function() {
                            var infoWindow = new google.maps.InfoWindow({
                                content: options.content
                            });

                            infoWindow.open(this.gMap, marker);
                        }
                    });
                }
                return marker;
            },

            _addMarker: function(marker) {
                this.markers.add(marker);
            },

            findBy: function(callback) {
                this.markers.find(callback);
            },

            removeBy: function(callback) {
                this.markers.find(callback, function(markers) {
                    markers.forEach(function(marker) {
                        marker.setMap(null);
                    });
                });
            },

            _createMarker: function(options) {
                options.map = this.gMap;
                return new google.maps.Marker(options);
            }
        };
        return Mapster;
    }());

    Mapster.create = function(element, options) {
        return new Mapster(element, options);
    };

    window.Mapster = Mapster;

}(window, google, window.List));