import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MemberList from '@/components/MemberList.vue';

describe('MemberList.vueのテスト', () => {
  test('初期状態テスト', () => {
    const wrapper = mount(MemberList);
    expect(wrapper.text()).toContain('全会員の保有ポイントの合計: 88');
  });
});
