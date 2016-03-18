import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr(),
  storyId: DS.attr(),
  title: DS.attr(),
  body: DS.attr(),
  startTime: DS.attr(),
  status: DS.attr(),
  user: DS.belongsTo('user'),
  story: DS.belongsTo('story')
});
