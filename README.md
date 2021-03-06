# This project is **closed** for the moment.
When closed this project, testing Bootstrap 4 I've realized their [flex](http://v4-alpha.getbootstrap.com/getting-started/flexbox/) implementation was very poor, full of flaws and they rely on a [post processor](https://github.com/luisrudge/postcss-flexbugs-fixes) to "solve" those issues. 

I've created a brand new boilerplate in Node with a newer Bootstrap 4 where Flexbox issues got solved. I will resume MBAS when have time to update multiple elements. 

In the meantime you awesomely work with [Gulp MEAN](https://github.com/DD-UX/gulp-mean).

Cheers!

DD

# MBAS - Middleman 4 + Bootstrap 4 + Angular + Sass

#### Middleman environment with Bootstrap 4 Alpha for layout, Angular to handle the data binding, routing and general UX, and Sass to enhance the developer experience at the moment of coding.

**[MBAS](http://mbas.diegodiazweb.com/) alpha in action!**

![MBAS - Middleman 4 + Bootstrap 4 + Angular + Sass](/source/assets/images/mbas-og.jpg?raw=true "MBAS")

Main components:
* [Middleman 4](https://middlemanapp.com/)
* [Bootstrap 4 Alpha](http://v4-alpha.getbootstrap.com/)
* [AngularJS](https://angularjs.org/)
* [Sass](http://sass-lang.com/)

**Important:** Make sure you have installed:
* [Ruby](https://www.ruby-lang.org/en/documentation/installation/#package-management-systems)
* [Node](https://nodejs.org/en/)
* [Middleman](https://middlemanapp.com/)
* [Bundler](http://bundler.io/)
* [Bower](http://bower.io/)
* [Sass](http://sass-lang.com/install)

## Installing process

Download the repository and execute:

```
$ bower install
$ bundle install
$ bundle exec middleman
```

If you can't `$ bower install` try running:

```
$ sudo bower update -a
```

In case you run `bundle update` make sure you after edit Gemfile.lock with Sprockets 4.0.0.rc.1 and run:
```
$ gem install middleman-sprockets -v 4.0.0.rc.1
```

**Once you run the project you will have access to an environment with multiple assets from Sass, Bootstrap 4, custom Angular components and more. Get into it to read the full documentation**

If you have this error while installing Middleman:

```
make "DESTDIR=" clean

make "DESTDIR="
compiling binder.cpp
In file included from binder.cpp:20:
./project.h:116:10: fatal error: 'openssl/ssl.h' file not found
#include <openssl/ssl.h>
         ^
1 error generated.
make: *** [binder.o] Error 1

make failed, exit code 2
```

just execute `bundle config build.eventmachine --with-cppflags=-I/usr/local/opt/openssl/include`. The issue is 
related with Mac OSX "El Capitan".

## Sections within the project starter:
* Welcome/Intro page
* Sass documentation
* Form elements (Angular custom directives)
* Environment (OS/Browser) detection
* Parallax layouts
* Securebox modules (sensitive content to be loaded only on demand)

## Build the project will generate just 19 files (plus **gzipped** files):
- 6 HTML files (views)
- 1 CSS file (minified)
- 1 JS file (minified)
- 5 Font Awesome fonts
- 5 Images
- 1 .htaccess (to serve gzipped files in Apache)

## TO DO <small>2016/07/07</small>:
* Build process: fix and test output | DONE
* Add multiple sort of transitions in between loading views | DONE
* Serve files gzipped on build | DONE
* Added .htaccess to serve gzipped files on Apache | DONE
* Parsing ERB into Angular templates for scripting injection plus Ruby helper methods compatibility | DONE
* Minify HTML too (already done on CSS and JS) | DONE to be improved on Angular templates scripting
* Facebook OG and Twitter card meta information | DONE
* [Middleman deploy tool](https://github.com/middleman-contrib/middleman-deploy) | DONE with FTP sample integration
* Super responsive navbar feature | DONE
* Favicon generator
* Update internal documentation
* Extend project starter beyond!
