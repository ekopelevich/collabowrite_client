import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return an array of contributions
    return this.store.findAll('contribution');
  }
});
