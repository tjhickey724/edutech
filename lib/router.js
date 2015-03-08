Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', {name: 'welcome'});
Router.route('/about', {name: 'about'});
Router.route('/projects', {name: 'projects'});