import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Counter from './Counter';
import View from './View';

chai.use(chaiEnzyme())

describe('<Counter/>', () => {
  it('ต้องมีสองปุ่มในหน้านี้', () => {
    const component = shallow(<Counter />);
    expect(component.find('View')).to.have.length(1);
  })
})
