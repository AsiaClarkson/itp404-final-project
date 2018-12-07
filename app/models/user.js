import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  location: DS.attr("string"),
  genre1: DS.attr("string"),
  genre2: DS.attr("string"),
  genre3: DS.attr("string")
});
