import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newStory: function() {
      console.log('Creating a new story!');
    }
  }
});
