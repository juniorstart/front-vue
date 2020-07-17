import Vuex from "vuex"
import CompositionApi from '@vue/composition-api';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from "@vue/test-utils"
import Register from "@/views/Register.vue";
import store from "@/store"

const vuetify = new Vuetify();

const localVue = createLocalVue()
localVue.use(CompositionApi);
localVue.use(Vuex);
localVue.use(Vuetify);

jest.mock('vue-toastification/composition');

describe("Register.vue", () => {
  it("renders component with disabled button", async () => {
    const wrapper = mount(Register, { 
      store, 
      localVue,
      vuetify,
    });

    expect(wrapper.find("button").attributes('disabled')).toBe('disabled');
  });

  // waiting for vue-testing-library with composition api support
})