import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('dashboard', function(){
    this.route('profile', {path: '/profile'});
    this.route('stories', {path: '/stories'});
    this.route('contributions', {path: '/contributions'});
    this.route('pending', {path: '/pending'});
    this.route('starred', {path: '/starred'});
  });
  this.route('stories', function(){
    this.route('new');
    this.route('edit');
  });
  this.route('story', {path: 'stories/:id'});

  this.route('contributions', function(){
    this.route('new');
    this.route('edit');
    this.route('contribution', {path: '/contributions/:id'});
  });


});

export default Router;
