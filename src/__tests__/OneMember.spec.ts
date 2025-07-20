import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import OneMember from '@/components/OneMember.vue';

describe('OneMember.vueのテスト', () => {
  test('備考データがある場合のPropsのテスト', () => {
    const props = {
      id: 22458,
      name: '中野三郎',
      email: 'mue@wow.com',
      points: 200,
      note: '素晴らしい！',
    };
    const wrapper = mount(OneMember, {
      props,
    });
    expect(wrapper.text()).toContain(props.id);
    expect(wrapper.text()).toContain(props.name);
    expect(wrapper.text()).toContain(props.email);
    expect(wrapper.text()).toContain(props.points);
    expect(wrapper.text()).toContain(props.note);
  });
  test('備考データがない場合のPropsのテスト', () => {
    const props = {
      id: 55148,
      name: '江口四郎',
      email: 'egu@wow.com',
      points: 300,
    };
    const wrapper = mount(OneMember, {
      props,
    });

    expect(wrapper.text()).toContain(props.id);
    expect(wrapper.text()).toContain(props.name);
    expect(wrapper.text()).toContain(props.email);
    expect(wrapper.text()).toContain(props.points);
    expect(wrapper.text()).toContain('--');
  });
  test('[ポイント加算]ボタンクリックテスト（emitのテスト）', async () => {
    const props = {
      id: 55148,
      name: '江口四郎',
      email: 'egu@wow.com',
      points: 300,
    };
    const wrapper = mount(OneMember, {
      props,
    });
    await wrapper.get('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('pointUp');
    expect(wrapper.emitted('pointUp')).toHaveLength(1);
    expect(wrapper.emitted('pointUp')).toEqual([[props.id]]);
  });
});
