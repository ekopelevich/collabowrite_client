import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // return an array of stories
    return this.store.findAll('story');
  }
});
