import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module('Integration | Helper | genre-gradient', function(hooks) {
  setupRenderingTest(hooks);

  test('gradient appears', async function(assert){
    this.set('genre1', 'rgba(34,193,195,1)');
    this.set('genre2', 'rgba(0,212,255,1)');
    this.set('genre3', 'rgba(253,187,45,1)');
    await render(hbs `{{genre-gradient genre1 genre2 genre3}}`);
    assert.equal(this.element.textContent.trim(), "background-image: linear-gradient(24deg, rgba(34,193,195,1) 0%,rgba(0,212,255,1) 40%,rgba(253,187,45,1) 100%);");
  });
});
