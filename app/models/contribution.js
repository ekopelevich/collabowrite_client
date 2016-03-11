import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  authorId: DS.attr(),
  storyId: DS.attr(),
  title: DS.attr(),
  startTime: DS.attr(),
  status: DS.attr()
});
