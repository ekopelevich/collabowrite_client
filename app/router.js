import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('dashboard', function(){
    this.route('myStories', {path: '/dashboard/my-stories'});
    this.route('myContributions', {path: '/dashboard/my-contributions'});
    this.route('myPending', {path: '/dashboard/my-pending'});
    this.route('myStarred', {path: '/dashboard/my-starred'});
  });
  this.route('stories', function(){
    this.route('story', {path: '/:story_id'});
  });
  this.route('contributions', function(){
    this.route('contribution', {path: '/:contribution_id'});
  });
  this.route('newStory');
});

export default Router;
