'use strict';

require('styles//Category.css');

const React = require('react');
const mui = require('material-ui');
const Actions = require('../actions');

const {ListItem} = mui;

class CategoryComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick() {
        Actions.categoryOpenned(this.props.category);
    }


  render() {
      let style = {};
      if (this.props.category.selected) {
          style.backgroundColor = '#f0f0f0';
      }
      return (
        <ListItem
            onClick={this.onClick.bind(this)}
            style={style} key={this.props.category.key}>
            {this.props.category.name}</ListItem>
      );
  }
  
}

CategoryComponent.displayName = 'CategoryComponent';

// Uncomment properties you need
// CategoryComponent.propTypes = {};
// CategoryComponent.defaultProps = {};

export default CategoryComponent;
