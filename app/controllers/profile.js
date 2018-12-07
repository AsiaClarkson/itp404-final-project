import Controller from "@ember/controller";
import window from 'ember-window-mock';

export default Controller.extend({
  actions: {
    deleteUser(model) {
      let confirmed = window.confirm(
        "Why would you delete your genre homepage? Did I hurt you? Nevertheless are you sure you know what you're doing?"
      );
      if (confirmed) {
        model.destroyRecord().then(() => {
          this.transitionToRoute("index");
        });
      }
    }
  }
});
