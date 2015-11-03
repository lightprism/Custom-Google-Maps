// api key
// AIzaSyB-I3EB_c_f_bHhE1YTMmhLuz1Gum5J8g0

(function(window, google, mapster) {
    // map options
    var options = mapster.MAP_OPTIONS,
    // create element
    element = document.getElementById('map-canvas'),
    // actual map
    map = mapster.create(element, options);

    var marker = map.addMarker({
        lat: 37.791350,
        lng: -122.435883,
        content: '<div style="color:#f00;">I love google</div>'
    });

    var marker2 = map.addMarker({
        lat: 37.761350,
        lng: -122.485883,
        content: 'I like rice'
    });


    // create random markers
    for(var i = 0, l = 40; i < l; i++) {
        map.addMarker({
            id: 2,
            lat: 37.781350 + Math.random(),
            lng: -122.485883 + Math.random(),
            content: "I'm a random marker! :)"
        });
    }

}(window, google, window.Mapster));