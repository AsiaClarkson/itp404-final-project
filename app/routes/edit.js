import Route from "@ember/routing/route";

export default Route.extend({
  model(params) {
    return this.store.findRecord("user", params.id);
  },
  setupController(controller, model) {
    this._super(...arguments);
    controller.setProperties({
      name: model.name,
      location: model.location,
      genre1: model.genre1,
      genre2: model.genre2,
      genre3: model.genre3
    });
  }
});
