import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      story: this.store.findRecord('story', params.story_id),
      contributions: this.store.findAll('contribution')
    });
  }
});
