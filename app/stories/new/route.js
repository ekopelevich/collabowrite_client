import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createStory(storyData){
      const newStory = this.store.createRecord('story', storyData);
      console.log(newStory);
      newStory.save().then(()=>{
        this.transitionTo('stories');
      });
    }
  },

  model(){
    return {
      ownerId: 1,
      title: '',
      summary: '',
      editLock: 0,
      genreId: 1,
      stateId: 1
    };
  }
});
