**Check [MBAS](http://mbas.diegodiazweb.com/) alpha in action!**

# MBAS - Middleman 4 + Bootstrap 4 + Angular + Sass

#### Middleman environment with Bootstrap 4 Alpha for layout, Angular to handle the data binding, routing and general UX, and Sass to enhance the developer experience at the moment of coding.

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
related with Mac OSX "El Capitan"

## Sections within the project starter:
* Welcome/Intro page
* Sass documentation
* Form elements (Angular custom directives)
* Environment (OS/Browser) detection
* Parallax layouts
* Securebox modules (sensitive content to be loaded only on demand)

## Build the project will generate just 19 files (plus same amount of **gzipped** files):
- 6 HTML files (views)
- 1 CSS file (minified)
- 1 JS file (minified)
- 5 Font Awesome fonts
- 5 Images
- 1 .htaccess (to serve gzipped files in Apache)

## TO DO <small>2016/04/12</small>:
* Build process: fix and test output | DONE
* Add multiple sort of transitions in between loading views | DONE
* Serve files gzipped on build | DONE
* Added .htaccess to serve gzipped files on Apache | DONE
* Minify HTML too (already done on CSS and JS) | Partially DONE to be improved on Angular templates scripting
* Parsing ERB code before Angular template scripting injection | DONE
* Facebook OG and Twitter card meta information | DONE
* Favicon generator
* Finish internal documentation
* Minor other fixes
* Extend project starter beyond!