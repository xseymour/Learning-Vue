const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .extract(['axios', 'bootstrap', 'jquery', 'lodash', 'popper.js', 'vue', 'bulma'])
   ;

 if (!mix.inProduction()) {
    mix.sourceMaps(); // Though it comes with a compile/performance cost, this will provide extra debugging information to your browser's developer tools when using compiled assets.
} else {
    mix.version();
}
