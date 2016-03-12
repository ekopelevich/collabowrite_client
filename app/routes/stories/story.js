import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findAll('story')
      .findBy('id', params.story_id);
  }
});
