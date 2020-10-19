/* global it, expect */

import Vue from "vue";
import { WithPinnedTasks } from "./PureTaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  // render WithPinnedTasks story
  const Constructor = Vue.extend(WithPinnedTasks);
  const vm = new Constructor({
    propsData: WithPinnedTasks.args
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );

  // We expect the pinned task to be rendered first, not at the end
  expect(firstTaskPinned).not.toBe(null);
});
