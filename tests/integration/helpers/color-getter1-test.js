import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module('Integration | Helper | color-getter1', function(hooks) {
  setupRenderingTest(hooks);

  test('color appears', async function(assert){
    this.set('genre', 'pop');

    await render(hbs `{{color-getter1 genre}}`);

    assert.equal(this.element.textContent.trim(), 'rgba(34,193,195,1)');
  });
});
