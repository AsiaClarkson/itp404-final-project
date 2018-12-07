import Component from "@ember/component";

export default Component.extend({
  tagName: "save",
  attributeBindings: ["isPending:disabled"],

  isPending: false,

  init() {
    this._super(...arguments); // spread operator
    this.set("saveButtonText", this.defaultText);
  },

  click() {
    this.set("isPending", true);
    this.set("saveButtonText", this.pendingText);
    this.onClick().then(() => {
      this.set("saveButtonText", this.defaultText);
      this.set("isPending", false);
    });
  }
});
