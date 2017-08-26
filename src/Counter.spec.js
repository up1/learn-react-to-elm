import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Counter from './Counter';

chai.use(chaiEnzyme())

describe('<Counter/>', () => {
  it('ต้องมีสองปุ่มในหน้านี้', () => {
    const component = shallow(<Counter/>)
    expect(component.find('button')).to.have.length(2)
  })

  it('ค่าเริ่มต้นต้องเป็น 0', () => {
    const component = shallow(<Counter/>)
    expect(component.find('.result')).to.have.text('0')
  })

  it('ทำการเพิ่มค่าขึ้น 1', () => {
    const component = shallow(<Counter/>)
    component.find('button.add').simulate('click')
    expect(component.find('.result')).to.have.text('1')
  })

  it('ทำการเพิ่มค่าขึ้น 2', () => {
    const component = shallow(<Counter/>)
    component.find('button.add').simulate('click')
    component.find('button.add').simulate('click')
    expect(component.find('.result')).to.have.text('2')
  })

  it('ทำการลบค่าลง 1', () => {
    const component = shallow(<Counter/>)
    component.find('button.minus').simulate('click')
    expect(component.find('.result')).to.have.text('-1')
  })

  it('ทำการลบค่าลง 2', () => {
    const component = shallow(<Counter/>)
    component.find('button.minus').simulate('click')
    component.find('button.minus').simulate('click')
    expect(component.find('.result')).to.have.text('-2')
  })

  it('ทำการเพิ่มค่า 5 ครั้งและลบค่าสองครั้ง ต้องได้ค่า 3', () => {
    const component = shallow(<Counter/>)
    component.find('button.add').simulate('click')
    component.find('button.add').simulate('click')
    component.find('button.add').simulate('click')
    component.find('button.add').simulate('click')
    component.find('button.add').simulate('click')
    component.find('button.minus').simulate('click')
    component.find('button.minus').simulate('click')
    expect(component.find('.result')).to.have.text('3')
  })

})
