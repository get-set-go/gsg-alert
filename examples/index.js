import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Alert from '../dist/index.min';

class Page extends React.Component {
  render() {
    const _isDismissible = true;

    return (
      <div className="alert-eg-container">
        <h1>Get-Set-Go Alert Component</h1>

        <p className="alert-eg-group">
          <h4>Alert Styles</h4>

          <Alert>Success Alert (Default)</Alert>
          <Alert bStyle="info">Info Alert</Alert>
          <Alert bStyle="warning">Warning Alert</Alert>
          <Alert bStyle="danger">Danger Alert</Alert>
        </p>

        <p className="alert-eg-group">
          <h4>Alert with dismissible</h4>

          <Alert isDismissible={_isDismissible}>Dismissible Alert (Default)</Alert>
        </p>

      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
