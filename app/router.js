import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('dashboard', function(){
    this.route('profile');
    this.route('stories');
    this.route('contributions');
    this.route('pending');
    this.route('starred');
  });
  this.route('stories', function(){
    this.route('new');
    this.route('edit');
  });
  this.route('story', {path: 'stories/:story_id'}, function(){
    this.route('contributions', {path: 'contributions'}, function(){
      this.route('new', {path: 'new'}); //new contribution
      this.route('edit'); //edit contribution
    }); //contributions for story
    this.route('view', {path: 'stories/:story_id/contributions/:contribution_id'}); //view contribution
    this.route('edit');

  });
  this.route('users');
  this.route('contribution');
});

export default Router;
