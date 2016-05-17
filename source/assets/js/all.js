/**
 * You can include libraries from Bower, 
 * the js files within 'assets/js' 
 * and all the js files within the app folder
 */

/* Super core files (jQuery, Angular, Bootstrap and dependencies)
-- */
//= require jquery/dist/jquery

//= require lodash/dist/lodash.min

//= require angular/angular
//= require angular-animate/angular-animate
//= require angular-cookies/angular-cookies
//= require angular-sanitize/angular-sanitize
//= require angular-ui-router/release/angular-ui-router
//= require angular-scroll/angular-scroll
//= require tether/dist/js/tether.min

/* Bootstrap library
-- */
//= require bootstrap
//= require angular-bootstrap/ui-bootstrap.min
//= require angular-bootstrap/ui-bootstrap-tpls.min

/* Parallax library
-- */
//= require skrollr/dist/skrollr.min
//= require angular-skrollr/dist/angular-skrollr

/* Browser/Platform/Stuff detection
-- */
//= require pgwbrowser/_pgwbrowser.min

/* Init Angular App
-- */
//= require _app

/* App Partials
-- */
//= require partials/_conf.partials
//= require partials/header/_header

/* App Components
-- */
//= require components/_conf.home
//= require components/home/_home

//= require components/_conf.environment-detection
//= require components/environment-detection/_environment-detection

//= require components/_conf.form-elements
//= require components/form-elements/_form-elements

//= require components/_conf.sass-documentation
//= require components/sass-documentation/_sass-documentation

//= require components/_conf.securebox
//= require components/securebox/_securebox

//= require components/_conf.parallax
//= require components/parallax/_parallax

/* App Directives (within 'common' folder)
-- */
//= require _conf.common
//= require directives/_body
//= require directives/securebox-directive/_securebox
//= require directives/form-elements-custom-directives/_form-elements-custom-directives


