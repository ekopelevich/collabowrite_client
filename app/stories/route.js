import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // const stories = this.get('stories');
    // return stories.getStories();
    return this.store.findAll('story');
  }
  // ,
  // stories: Ember.inject.service()
});
