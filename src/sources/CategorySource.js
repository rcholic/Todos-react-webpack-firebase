'use strict';

const Actions = require('../actions');
const Firebase = require('firebase');

let firebaseRef = new Firebase('https://todos-react.firebaseio.com/categories');

let CategorySource = {
    getCategories: {
        remote(state) {
            return new Promise((resolve, reject) => {
                firebaseRef.once("value", (dataSnapshot) => {
                    var categories = dataSnapshot.val();
                    resolve(categories);
                });
            });
        },
        success: Actions.categoriesReceived,
        error: Actions.categoriesFailed
    }
}

export default CategorySource;
