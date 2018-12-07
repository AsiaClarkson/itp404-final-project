import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import window, { reset } from 'ember-window-mock';


module('Acceptance | users', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  hooks.afterEach(function() {
    reset();
  });


  test('checking for all pop user', async function(assert){
    server.create('user',{
      name: 'Han Solo',
      location: 'Corellia',
      genre1: 'pop',
      genre2: 'pop',
      genre3:'pop'
    });
    await visit('/');
    assert.dom('[data-test="genre1"]').hasText('pop');
    assert.dom('[data-test="genre2"]').hasText('pop');  
    assert.dom('[data-test="genre3"]').hasText('pop');    
  });

  test('deleting a user', async function(assert) {
    server.createList('user', 1);
    window.confirm = () => true;

    await visit('/user/1');
    await click('[data-test="delete-user"]');
    assert.dom('[data-test="user"]').exists({ count: 0 });
  });

  test('creating an user', async function(assert){
    await visit('/create');
    await fillIn('#name','Finn Todd');
    await fillIn('#genre1','indie');
    await fillIn('#genre2','vaporwave');
    await click('[data-test="create"] button');

    assert.equal(currentURL(), '/user/1');

    assert.dom('[data-test="name"]').hasText('Finn Todd');
    assert.dom('[data-test="genre-1"]').hasText('indie');
    assert.dom('[data-test="genre-2"]').hasText('vaporwave');
  });

  test('editing a user', async function(assert){
    server.create('user',{
      name: 'Han Solo',
      location: 'Corellia',
      genre1: 'pop',
      genre2: 'pop',
      genre3:'pop'
    });
    await visit('/user/1');
    await click('[data-test="edit-user"]');
    await fillIn('#name','Finn Todd');
    await fillIn('#genre1','indie');
    await fillIn('#genre2','vaporwave');
    await click('[data-test="update"] button');
    assert.equal(currentURL(), '/user/1');
    assert.dom('[data-edit="name1"]').hasText('Finn Todd');
    assert.dom('[data-edit="genre1"]').hasText('indie');  
    assert.dom('[data-edit="genre2"]').hasText('vaporwave');    
  });

  test('viewing a user', async function(assert) {
    server.create('user', {
      name: 'test 1',
      location: 'test 1',
      genre1: 'test 1',
      genre2: 'test 1',
      genre3: 'test 1',

    });
    await visit('/user/1');

    assert.dom('[data-view="name"]').hasText('test 1');    
    assert.dom('[data-view="genre1"]').hasText('test 1');
    assert.dom('[data-view="genre2"]').hasText('test 1');
    assert.dom('[data-view="genre3"]').hasText('test 1');

  });


});
