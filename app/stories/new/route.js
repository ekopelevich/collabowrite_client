import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createStory(storyData){
      // console.log('storyData', data);
      const newStory = this.store.createRecord('story', storyData);
      console.log(newStory);
      newStory.save();
      this.transitionTo('stories');
    }
  },

  model(){
    return {
      ownerId: 1,
      title: '',
      summary: '',
      editLock: 0,
      genreId: 3,
      stateId: 1
    };
  }
});
