Source Code for [briankintz.com](http://briankintz.com)

---

Grunt Tasks
=

`grunt`
-
Watches `index.html` and the `src/*` directories for changes and runs Sass compilation and JS minification tasks on changes.  Also starts the `browserSync` plugin.

Output files land in the `res/` directory.

`grunt build`
-
Runs JS minification, Sass compilation, and CSS minification tasks.  Output files land in the `res/` directory.