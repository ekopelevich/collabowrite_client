import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  location: DS.attr(),
  genderId: DS.attr(),
  tagLine: DS.attr(),
  bio: DS.attr(),
  memberSince: DS.attr(),
  avatar: DS.attr(),
  banned: DS.attr(),
  stories: DS.hasMany('story', {async: true}),
  contributions: DS.hasMany('contribution', {async: true})
});
