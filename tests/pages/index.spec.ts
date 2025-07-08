import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Index from '../../pages/index.vue';

describe('Index.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Index);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Index');
  });
});
