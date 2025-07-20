import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ShowMessageButton from '@/components/ShowMessageButton.vue';

describe('DivideInput.vueのテスト', () => {
  test('初期状態（隠し領域非表示）テスト', () => {
    const wrapper = mount(ShowMessageButton);
    expect(wrapper.find('p[data-testid="invisible"]').exists()).toBe(false);
  });
  test('表示ボタンをクリックした場合のテスト', async () => {
    const wrapper = mount(ShowMessageButton);
    await wrapper.get('button[data-testid="showButton"]').trigger('click');
    expect(wrapper.find('p[data-testid="invisible"]').exists()).toBe(true);
  });
});
