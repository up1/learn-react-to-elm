import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import View from './View';
import { INCREMENT, DECREMENT } from './actions'

chai.use(chaiEnzyme())

describe('View', () => {
  it('ต้องมีสองปุ่มในหน้านี้', () => {
    const component = shallow(<View counter={0} onAction={() => {}}/>)
    expect(component.find('button')).to.have.length(2)
  })

  it('ค่าเริ่มต้นต้องเป็น 0', () => {
    const component = shallow(<View counter={0} onAction={() => {}}/>)
    expect(component.find('.result')).to.have.text('0')
  })

  it('แสดงข้อมูลที่ต้องการคือ 10', () => {
    const component = shallow(<View counter={10} onAction={() => {}}/>)
    expect(component.find('.result')).to.have.text('10')
  })

  it('ทำการเพิ่มค่าขึ้นต้องมี state เป็น INCREASE', () => {
    let calledWith = [];
    const onAction = message => () => calledWith.push(message);
    const component = shallow(<View counter={0} onAction={onAction}/>)
    component.find('button.add').simulate('click')
    expect(calledWith).to.contain(INCREMENT);
  })

  it('ทำการลบค่าลงต้องมี state เป็น DECREASE', () => {
    let calledWith = [];
    const onAction = message => () => calledWith.push(message);
    const component = shallow(<View counter={0} onAction={onAction}/>)
    component.find('button.minus').simulate('click')
    expect(calledWith).to.contain(DECREMENT);
  })

})
