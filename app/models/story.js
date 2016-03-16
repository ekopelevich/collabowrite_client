import DS from 'ember-data';

export default DS.Model.extend({
  ownerId: DS.attr(),
  title: DS.attr(),
  startDate: DS.attr(),
  summary: DS.attr(),
  editLock: DS.attr(),
  genreId: DS.attr(),
  checkoutTime: DS.attr(),
  stateId: DS.attr(),
  owner: DS.belongsTo('user', {async: true}),
  contributions: DS.hasMany('contributions', {async: true})
});
