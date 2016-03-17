import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      stories: this.store.findAll('story'),
      contributions: this.store.findAll('contribution')
    });
  }
});
