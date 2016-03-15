import DS from 'ember-data';
// import Story from '../models/story';
// import Contribution from '../models/contribution';

// const stories = this.store.findAll();

export default DS.Store.extend({
  getSomething(){
    return [
      {id: 1, thing: 'one'},
      {id: 2, thing: 'two'}
    ];
  }
  // ,
  // getStories() { return stories }
});
