import { expect } from 'chai'
import * as State from './state'

describe('Counter state', () => {
  describe('#init state', () => {
    it('ค่าเริ่มต้นของ counter ต้องมีค่าเป็น 0', () => {
      expect(State.init()).to.eql({ counter: 0 })
    })
  })

  describe('#update state', () => {
    it('ทำการ return สถานะที่เป็น default กลับมา', () => {
      const state = State.init()
      expect(State.update('NONSENSE_ACTION', state)).to.eql(state)
    })
  })
})
