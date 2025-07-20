import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MemberList from '@/components/MemberList.vue';
import OneMember from '@/components/OneMember.vue';
import { nextTick } from 'vue';

describe('MemberList.vueのテスト', () => {
  test('合計点数表示のテスト', () => {
    const wrapper = mount(MemberList, {
      global: {
        stubs: {
          OneMember: true,
        },
      },
    });
    expect(wrapper.text()).toContain('全会員の保有ポイントの合計: 88');
  });
  test('Emitメソッドのテスト', async () => {
    const wrapper = mount(MemberList, {
      global: {
        stubs: {
          OneMember: true,
        },
      },
    });
    const oneMember = wrapper.findComponent(OneMember);
    oneMember.vm.$emit('pointUp', 33456);
    oneMember.vm.$emit('pointUp', 33457);
    await nextTick();
    expect(wrapper.text()).toContain('全会員の保有ポイントの合計: 90');
  });
});
