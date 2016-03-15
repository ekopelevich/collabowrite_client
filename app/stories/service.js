import Ember from 'ember';

export default Ember.Service.extend({
  getStories() {
    return this.store.findAll('story');
  };
});
