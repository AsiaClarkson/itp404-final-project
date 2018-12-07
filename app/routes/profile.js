import Route from "@ember/routing/route";

export default Route.extend({
  titleToken: function(model) {
    return model.get("name");
  },
  model(params) {
    return this.store.findRecord("user", params.id);
  }
  // ,
  // title: 'Welcome, user!'
});
