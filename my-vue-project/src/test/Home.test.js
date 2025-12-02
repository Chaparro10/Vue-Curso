import { mount } from "@vue/test-utils";
import { describe, expect } from "vitest";
import Home from "../views/Home.vue";


describe("Home",()=>{
    it("render component correctly",()=>{
        const wrapper= mount(Home);
        expect(wrapper.find("h1").text()).toBe("Welcome to home page");
    })

    it("increment count when button is clicked",async ()=>{
        const wrapper= mount(Home);
       expect(wrapper.find("#counter").text()).toContain("Counter: 1");
     
       await wrapper.find('#counter-btn').trigger('click');

        expect(wrapper.find("#counter").text()).toContain("Counter: 2");
    })
})