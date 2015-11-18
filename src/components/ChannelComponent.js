'use strict';

const React = require('react');
const mui = require('material-ui');

require('styles//Channel.css');

class ChannelComponent extends React.Component {
  render() {
    return (
      <div className="channel-component">
        <strong>Place holder for channels </strong>
      </div>
    );
  }
}

ChannelComponent.displayName = 'ChannelComponent';

// Uncomment properties you need
// ChannelComponent.propTypes = {};
// ChannelComponent.defaultProps = {};

export default ChannelComponent;
