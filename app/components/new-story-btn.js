import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newStory: function(name) {
      console.log('Creating a new story!');
    }
  }
});
