'use strict';

const alt = require('../alt');
const Actions = require('../actions');
import {decorate, bind, datasource} from 'alt/utils/decorators';
import CategorySource from '../sources/CategorySource';
import _ from 'lodash';

@datasource(CategorySource)
@decorate(alt)
class TodoStore {
    constructor() {
        this.state = {
            user: null,
            todos: null,
            todosLoading: true
        };
    }

    @bind(Actions.todosLoading)
    todosLoading() {
        this.setState({
            todosLoading: true
        });
    }

    @bind(Actions.todosReceived)
    receivedTodos(todos) {
        _(todos)
        .keys()
        .each((k) => {
            todos[k].key = k;
        })
        .value();

        this.setState({todos, todosLoading: false});
    }

    @bind(Actions.categoriesReceived)
    receivedCategories(categories) {
        let selectedCategory;
        _(categories)
        .keys()
        .each((key, index) => {
            categories[key].key = key;
            if (index == 0) {
                categories[key].selected = true;
                selectedCategory = categories[key];
            }
        })
        .value();

        this.setState({categories, selectedCategory, todosDirty: true});
    }

    @bind(Actions.login)
    login(user) {
        this.setState({user: user});
    }

    @bind(Actions.categoryOpenned)
    categoryOpenned(selectedCategory) {
        _(this.state.categories)
        .values()
        .each((category) => {
            category.selected = false;
        })
        .value();

        console.log('triggered categoryOpenned!');
        selectedCategory.selected = true;
        this.setState({
            selectedCategory,
            categories: this.state.categories,
            todosDirty: true
        });
        // setTimeout(this.getInstance().getTodos, 100);
    }
}

export default alt.createStore(TodoStore);
