
// If moment isn't installed, Meteor will tell the user to `meteor npm install
// moment`. Rather than using the wrapped moment that is shipped to Atmosphere,
// it's better to just let the use install it from NPM so that other code in
// the app can share the same instance.

// if meteor 1.3+, use moment from NPM,
if (Package['modules-runtime']) {
    var require = Package['modules-runtime'].meteorInstall();
    moment = require('moment'); // from NPM.

// otherwise export the wrapped version.
} else {

    // moment.js makes `moment` global on the window (or global) object, while Meteor expects a file-scoped global variable
    moment = this.moment;
    try {
        delete this.moment;
    } catch (e) {
    }

}
