import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('story', params.story_id);

    // Ember.RSVP.hash({
    //   users: this.store.findAll('user'),
    //   stories: this.store.findAll('story'),
    //   contributions: this.store.findAll('contribution')
    // });
  }
});
