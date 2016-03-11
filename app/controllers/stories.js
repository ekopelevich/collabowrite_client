import Ember from 'ember';

export default Ember.Controller.extend({
  stories: 'blarg',
  getAllStories: function(){
    console.log('getAllStories');
  }
});
