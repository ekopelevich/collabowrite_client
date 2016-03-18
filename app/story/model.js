import DS from 'ember-data';
// import userModel from '../users/model';

export default DS.Model.extend({
  userId: DS.attr(),
  title: DS.attr(),
  startDate: DS.attr(),
  summary: DS.attr(),
  editLock: DS.attr(),
  genreId: DS.attr(),
  checkoutTime: DS.attr(),
  stateId: DS.attr(),
  user: DS.belongsTo('user'),
  contributions: DS.hasMany('contribution', {async: true})
  // userFirstName: userModel.firstName,
  // userLastName: userModel.lastName
  // userName: Ember.computed('userFirstName', 'userLastName', function(){
  //   return this.get('userFirstName' + ' ' + 'userLastName').property();
  // })
});
