import Vuex from "vuex"
import CompositionApi from '@vue/composition-api';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue";
import store from "@/store"

const vuetify = new Vuetify();

const localVue = createLocalVue()
localVue.use(CompositionApi);
localVue.use(Vuex);
localVue.use(Vuetify);


describe("App.vue", () => {
  it("renders correct content on button", async () => {
    const wrapper = mount(App, { 
      store, 
      localVue,
      vuetify,
    })

    expect(wrapper.find("button").text()).toBe("JuniorSTOP");
    await wrapper.find('button').trigger('click');

    expect(wrapper.find("button").text()).toBe("JuniorSTART");
  })
})