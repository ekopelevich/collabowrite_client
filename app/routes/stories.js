import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    console.log(this.store.findAll('stories'));
    return this.store.findAll('stories');
  }
});
