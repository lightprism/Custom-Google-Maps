// api key
//

(function(window, $) {
    var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);

    $mapster.mapster('addMarker', {
        lat: 37.791350,
        lng: -122.435883,
        content: '<div style="color:#f00;">I love maps</div>',
        id: 1
    });

    $mapster.mapster('addMarker', {
        lat: 37.751350,
        lng: -122.485883,
        content: '<div style="color:#f00;">I love maps</div>',
        id: 2
    });

    var matches = $mapster.mapster('findMarkers', function(marker) {
        return marker.id === 1;
    });

    $mapster.mapster('removeMarkers', function(marker) {
        return marker.id === 2;
    });
    console.log(matches);

}(window, jQuery));