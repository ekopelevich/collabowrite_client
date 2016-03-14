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
  this.route('new-stories', {path: 'stories/new'});
  this.route('edit', {path: 'stories/edit'} );
  this.route('stories');
  this.route('story', {path: 'stories/:story_id'});

  this.route('contributions', function(){
    this.route('new');
    this.route('edit');
    this.route('contribution', {path: 'contributions/:contribution_id'});
  });
});

export default Router;
