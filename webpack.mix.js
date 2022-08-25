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
    .sourceMaps();
// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         require('tailwindcss'),
//     ]);
// mix.js(["resources/js/app.js", "resources/js/functions.js"], "public/js/app.js").vue()
//     .sass("resources/sass/app.scss", "public/css")
//     .css("resources/css/default.css", "public/css");
// mix.js(['resources/js/app.js', 'resources/js/functions.js'], 'public/js')
//     .sass("resources/sass/app.scss", "public/css/");

mix.css('resources/css/app.css', 'public/css');
mix.css('resources/css/sidebar.css', 'public/css');
