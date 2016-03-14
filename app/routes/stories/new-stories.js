import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createStory(story){
      console.log(story);
      // this.get('store').saveStory(story);
      // this.transitionTo('stories.story', story);
    },
    saveStory(story){
      console.log(story);
    }
  },
  model(){
    return 'Please work.';
  }
});
