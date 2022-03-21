Package.describe({
  "summary": "Subscriptions Manager for Meteor",
  "version": "2.0.0",
  "git": "https://github.com/meteorsphere/subs-manager.git",
  "name": "meteorsphere:subs-manager"
});

Package.onUse(function(api) {

  api.use(['deps', 'underscore', 'ejson'], ['client', 'server']);
  api.use('meteorhacks:fast-render@2.7.0', 'client', {weak: true});
  
  api.addFiles([
    'lib/sub_manager.js',
  ]);

  api.export('SubsManager');
});
