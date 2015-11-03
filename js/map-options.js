(function(window, mapper) {

    // remove labels
    // water - 3498db
    // landscape - 4CD685
    // poi - 27ae60
    // transit - 27ae60
    // highways - 34495e
    // main roads - ecf0f1

    var styles = [{
        featureType: 'all',
        elementType: 'labels',
        stylers: [
            { visibility: 'off'}
        ]
    }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            {
                color: '#3498db'
            }
        ]
    }, {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
            {
                color: '#4CD685'
            }
        ]
    }, {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
            {
                color: '#4CD685'
            }
        ]
    }, {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
            {
                color: '#ecf0f1'
            }
        ]
    }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
            {
                color: '#34495e'
            }
        ]
    }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{
            color: '#ecf0f1'
        }]
    }];

    mapper.MAP_OPTIONS = {
        center: {
            lat: 37.791359,
            lng: -122.435883
        },
        zoom: 10,
        animation: google.maps.Animation.DROP,
        disableDefaultUI: false,
        scrollwheel: true,
        draggable: true,
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
        },
        styles: styles
    };

}(window, window.Mapster || (window.Mapster = {})));