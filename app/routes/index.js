import Route from "@ember/routing/route";

export default Route.extend({
  title: "Welcome!",
  model() {
    return this.store.findAll("user");
  }
});
