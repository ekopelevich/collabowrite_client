import Ember from 'ember';

export default Ember.Component.extend({
  action: {
    addStory(){
      console.log('Clicked create story button');
      var storyTitle = this.get('storyTitle');
      this.sendAction('createStory', storyTitle);
      //TODO: add a transitionTo in createStory in route
    }
  }
});
