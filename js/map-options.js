(function(window, mapper) {

    mapper.MAP_OPTIONS = {
        center: {
            lat: 37.791359,
            lng: -122.435883
        },
        zoom: 10,
        animation: google.maps.Animation.DROP,
        disableDefaultUI: false,
        scrollwheel: true,
        // maxZoom: 11,
        // minZoom: 9,
        zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT,
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        panControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_RIGHT

        },
        cluster: {
            options: {
                styles: [{
                    height: 56,
                    width: 55,
                    url: 'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m2.png',
                    textColor: '#f0f',
                    textSize: 18,
                }, {
                    url: 'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m1.png',
                    height: 56,
                    width: 55
                }]
            }
        }
    };

}(window, window.Mapster || (window.Mapster = {})));