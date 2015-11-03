// api key
//

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
        draggable: true,
        content: '<div style="color:#f00;">I love google</div>',
        events: [{
            name: 'click',
            callback: function(e) {
                console.log(e);
            }
        }, {
            name: 'dragend',
            callback: function() {
                alert('dragged');
            }
        }]
    });

    // var marker2 = map.addMarker({
    //     lat: 37.761350,
    //     lng: -122.485883,
    //     content: 'I like rice'
    // });


    // create random markers
    // for(var i = 0, l = 40; i < l; i++) {
    //     map.addMarker({
    //         id: 2,
    //         lat: 37.781350 + Math.random(),
    //         lng: -122.485883 + Math.random(),
    //         content: "I'm a random marker! :)"
    //     });
    // }

    // map.removeBy(function(marker) {
    //     if(marker.id === 2) {

    //     }
    //     return marker.id === 2;
    // });

}(window, google, window.Mapster));