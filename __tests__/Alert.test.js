import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Alert from '../src';

describe('<Alert /> component', function() {

  it('should alert exist', function() {
    let _instance = ReactTestUtils.renderIntoDocument(<Alert />);
    expect(ReactTestUtils.isCompositeComponent(_instance)).toBeTruthy();
  });

});
