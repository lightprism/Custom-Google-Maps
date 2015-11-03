(function() {
    /*** 1 ***/
    // using the filter function
    // we have an array
    var arr = [
        {"name": "apple", "count": 2},
        {"name": "orange", "count": 5},
        {"name": "pear", "count": 3},
        {"name": "orange", "count": 16}
    ];
    // pass our array through a filter
    // filter: will return only the oranges
    var newArr = arr.filter(function(value) {
        return value.name === "orange";
    });



}());