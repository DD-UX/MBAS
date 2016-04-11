# MBAS - Middleman 4 + Bootstrap 4 + Angular + Sass
**Middleman environment with Bootstrap 4 Alpha to test and plan a new project starter**

Dependencies:
* [Middleman 4](https://middlemanapp.com/advanced/asset_pipeline/)
* [Bootstrap 4 Alpha](http://v4-alpha.getbootstrap.com/)
* [AngularJS](http://v4-alpha.getbootstrap.com/)
* [Sass](http://v4-alpha.getbootstrap.com/)


## Installing process

Download the repository and execute:
```
$ gem install middleman
$ bower install
$ bundle install
$ bundle exec middleman
```

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

## Bootstrap 4 Alpha ([documentation](http://v4-alpha.getbootstrap.com/))