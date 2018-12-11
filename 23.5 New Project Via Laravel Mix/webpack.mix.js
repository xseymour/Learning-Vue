const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 */

// Use mix.js to join files together. Allows for ES2015 syntax / Vue Components within js files without issue.
// mix.scripts /mix.combine (alias for scripts) are used for legacy code combination, and does not use special webpack magic behind the scenes for babel/vue recognition
mix.js('resources/js/app.js', 'public/js')
	.js(['resources/js/messages/one_message.js', 'resources/js/messages/two_message.js'], 'public/js/one_plus_two.js')
	.sass('resources/sass/app.scss', 'public/css')
    .extract(['vue', 'axios', 'lodash', 'popper.js'])
    ;

 if (!mix.inProduction()) {
    mix.sourceMaps(); // Though it comes with a compile/performance cost, this will provide extra debugging information to your browser's developer tools when using compiled assets.
} else {
    mix.version();
}




