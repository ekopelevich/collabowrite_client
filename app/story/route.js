import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      // user: this.store.findRecord('user'),
      story: this.store.findRecord('story', params.story_id),
      contributions: this.store.findAll('contribution')
    });
  }
});
