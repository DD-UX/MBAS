# Bootstrap 4 Test
**Middleman environment with Bootstrap 4 Alpha to test and plan a new project starter**

Dependencies:
* [Middleman](https://middlemanapp.com/advanced/asset_pipeline/)
* [Bootstrap 4 Alpha](https://github.com/twbs/bootstrap-rubygem)

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