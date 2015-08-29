Package.describe({
  name: 'mbanting:reactive-ibeacons',
  summary: "Turns iBeacons into reactive data sources in your Meteor Cordova apps.",
  version: '0.9.0',
  git: "https://github.com/mbanting/meteor-reactive-ibeacons"
});


/**
 * Cordova plugin dependencies
 */
Cordova.depends({
  'com.unarin.cordova.beacon': '3.3.0'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.3');
    api.use(['tracker', 'underscore']);
    api.addFiles('lib/reactive-ibeacons.js', ["web.cordova"]);
    api.export('ReactiveBeaconRegion', 'web.cordova');

});

Package.onTest(function(api) {
    api.use(['tinytest', 'mbanting:reactive-ibeacons']);
    api.addFiles('tests/client/reactive-ibeacons-tests.js', 'web.cordova');
    api.export('ReactiveBeaconRegion', 'web.cordova');

});