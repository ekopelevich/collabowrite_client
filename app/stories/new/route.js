import Ember from 'ember';

export default Ember.Route.extend({
  // actions: {
  //   createStory(){
  //     var newStory = store.createRecord('story', {
  //       ownerId: newStory.ownerId,
  //       title: newStory.title,
  //       summary: newStory.summary,
  //       editLock: 0,
  //       genreId: newStory.ownerId,
  //       stateId: 1
  //     });
  //     console.log(newStory);
  //     this.get('store').saveStory(newStory);
  //     this.transitionTo('stories.story', newStory);
  //   },
  //   saveStory(newStory){
  //     newStory.save();
  //   }
  // },
  model(){
    return 'newStory';
  }
});
