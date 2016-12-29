import '../node_modules/gsg-common-style/less/alert/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class GSGAlert extends React.Component {
  constructor(props) {
    super(props);

    this.dismiss = this.dismiss.bind(this);
  }

  dismiss() {
    let _alertDOM = ReactDOM.findDOMNode(this);
    _alertDOM.remove();
  }

  render() {
    let _bClass = {
      'alert': true,
      [`alert-${this.props.bStyle}`]: true
    };

    _bClass = classNames(_bClass);

    return(
      <div className={_bClass}>
        {this.props.isDismissible &&
          <button type="button" className="close" onClick={this.dismiss}>&times;</button>
        }
        {this.props.children}
      </div>
    );
  }
};

GSGAlert.propTypes = {
  bStyle: PropTypes.string,
  isDismissible: PropTypes.bool
};

GSGAlert.defaultProps = {
  bStyle: 'success',
  isDismissible: false
};
