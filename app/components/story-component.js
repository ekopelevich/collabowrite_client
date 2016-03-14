import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    hello: function(name) {
      console.log("Hello", this.name);
    }
  },
  name: "Elana"
});
