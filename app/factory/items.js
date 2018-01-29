"use strict";

angular.module("TodoApp").factory("ItemFactory", ($q, $http, fbUrl) => {

    function getItems() {
        return $q((resolve, reject) => {
            $http.get(`${fbUrl}/items.json`)
                .then(response => resolve(response.data))
                .catch(err => reject(err));
        });
    }

    function addItem(item) {
        return $q((resolve, reject) => {
            $http.post(`${fbUrl}/items.json`, JSON.stringify(item))
                .then(response => resolve(response))
                .catch(err => reject(err));
        });
    }

    function deleteItem(key) {
        console.log(key);
        return $q((resolve, reject) => {
            $http.delete(`${fbUrl}/items/${key}.json`)
                .then(response => resolve(response))
                .catch(err => reject(err));
        });
    }

    return { getItems, addItem, deleteItem };
});