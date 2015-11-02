'use strict';

const React = require('react');
const Category = require('./CategoryComponent');
const mui = require('material-ui');
import connectToStores from 'alt/utils/connectToStores';
// const connectToStore = require('alt/utils/connectToStore');
const TodoStore = require('../stores/TodoStore');

require('styles//CategoryList.css');

class CategoryListComponent extends React.Component {
    constructor(props) {
        super(props);
        TodoStore.getCategories();
    }

    static getStores() {
        return [TodoStore];
    }

    static getPropsFromStores() {
        return TodoStore.getState();
    }

  render() {
      if(!this.props.categories){
        return (
          <Card style={{
            flexGrow: 1
          }}>
            <CircularProgress
              mode="indeterminate"
              style={{
                paddingTop: '20px',
                paddingBottom: '20px',
                margin: '0 auto',
                display: 'block',
                width: '60px'
              }}
            />
          </Card>
        );
      }


      var categoryNodes = _(this.props.categories)
        .keys()
        .map((k)=> {
          let category = this.props.categories[k];
          return (
            <Category category={category} />
          );
        })
        .value();

      return (
        <Card style={{
          flexGrow: 1
        }}>
          <List>
            {channelNodes}
          </List>
        </Card>
      );
  }
}

CategoryListComponent.displayName = 'CategoryListComponent';

// Uncomment properties you need
// CategoryListComponent.propTypes = {};
// CategoryListComponent.defaultProps = {};

export default CategoryListComponent;
