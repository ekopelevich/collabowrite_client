import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createStory(story){
      console.log(story);
      var newStory = this.store.createRecord('story'); //optional obj as second parameter
      newStory.set('title', story.title);
      newStory.set('summary', story.summary);
      this.get('store').saveStory(story);
      this.transitionTo('stories.story', story);
    },
    saveStory(story){
      console.log(story);
    }
  },
  model(){
    return story;
  }
});
