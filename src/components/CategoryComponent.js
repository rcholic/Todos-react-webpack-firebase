'use strict';

require('styles//Category.css');

import mui from 'material-ui';
import ListItem from 'material-ui';
import React from 'react';
import Actions from '../actions';

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
