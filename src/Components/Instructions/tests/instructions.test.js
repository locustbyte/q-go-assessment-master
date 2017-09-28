import React from 'react';
import { shallow } from 'enzyme';
import Instructions from '../index';

describe('Instructions', () => {
  it('renders without crashing', () => {
    shallow(<Instructions />);
  });
});
