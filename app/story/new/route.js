import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      stories: this.store.findAll('story'),
      contributions: this.store.findAll('contribution')
    }).then(function(data){
      return data;
    })
  }
});
