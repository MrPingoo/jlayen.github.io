'use strict';

var items = [
    {'name' : 'AAA', 'category_id' : 1},
    {'name' : 'BBB', 'category_id' : 1}
];

app.service('itemProvider', function () {
    this.getItems = function () {
        return items;
    }

    this.create = function (item) {
        items.push(item);

        return items;
    }
});