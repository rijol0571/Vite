import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import MyForm from './MyForm.vue';

describe('MyForm.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(MyForm);
    expect(wrapper.findAll('input').length).toBe(3); // Check for 3 input fields
    expect(wrapper.find('button').exists()).toBe(true); // Check for submit button
  });

  it('captures input and emits submitted event', async () => {
    const wrapper = mount(MyForm);
    
    await wrapper.find('input[type="text"]').setValue('John Doe'); // Simulate name input
    await wrapper.find('input[type="email"]').setValue('john@example.com'); // Simulate email input
    await wrapper.find('input[type="password"]').setValue('password123'); // Simulate password input

    await wrapper.find('form').trigger('submit.prevent'); // Simulate form submission

    expect(wrapper.emitted().submitted).toBeTruthy(); // Check if event was emitted
    expect(wrapper.emitted().submitted[0]).toEqual([{
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    }]); // Check emitted value

    expect(wrapper.vm.name).toBe(''); // Check if input is cleared after submission
    expect(wrapper.vm.email).toBe(''); // Check if input is cleared after submission
    expect(wrapper.vm.password).toBe(''); // Check if input is cleared after submission
  });
});
