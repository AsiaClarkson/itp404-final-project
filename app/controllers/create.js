import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    createUser(event) {
      event.preventDefault();

      let user = this.store.createRecord("user", {
        name: this.name,
        location: this.location,
        genre1: this.genre1,
        genre2: this.genre2,
        genre3: this.genre3
      });
      user.save().then(() => {
        this.transitionToRoute("profile", user.id);
      });
    }
  }
});
