const alt = require('../alt');
const Firebase = require('firebase');

class Actions {
    constructor() {
        this.generateActions(
            'categoriesReceived',
            'categoriesFailed',
            'categoryOpenned',
            'todosLoading',
            'todosReceived',
            'todosFailed'
        );
    }

    login(args) {
        return (dispatch) => {
            var firebaseRef = new Firebase('https://todos-react.firebaseio.com');
            firebaseRef.authWithOAuthPopup('google', (error, user) => {
                if (error) {
                    console.log('error logging in user thru Google!')
                    return;
                }
                console.log('dispatching user sign in thru Google...');
                dispatch(user);
            });
        }
    }
}

export default alt.createActions(Actions);
