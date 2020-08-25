// import { mount } from '@vue/test-utils'
// this mounts the component for you - and child components.

// { shallowMount}
// // mounts only the main component - not child components. 
// // Shallow mount stubs out any child components - isolated testing.

import CreateComponent from '../../src/components/CreateComponent.vue'

describe('CreateComponent', () => {
 // Inspect the raw component options
 it('has data', () => {
   expect(typeof CreateComponent.data).toBe('function')
 })

 it('has methods', () => {
  expect(typeof CreateComponent.methods).toBe('object')
})

 

})


