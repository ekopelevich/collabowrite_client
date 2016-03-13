import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', function(){
    this.route('myStories', {path: '/dashboard/myStories'});
    this.route('myContributions', {path: '/dashboard/myContributions'});
    this.route('myPending', {path: '/dashboard/myPending'});
    this.route('myStarred', {path: '/dashboard/myStarred'});
  });
  this.route('stories', function(){
    this.route('story', {path: '/:story_id'});
  });
  this.route('login');
  this.route('logout');
});

export default Router;
