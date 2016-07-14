// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    '@ngrx': 'vendor/@ngrx',
    'ngrx-store-logger': 'vendor/ngrx-store-logger/dist',
    '@angular2-material': 'vendor/@angular2-material'
};
/** User packages configuration. */
var packages = {
    '@ngrx/core': {
        main: 'index.js',
        format: 'cjs'
    },
    '@ngrx/store': {
        main: 'index.js',
        format: 'cjs'
    },
    '@ngrx/effects': {
        main: 'index.js',
        format: 'cjs'
    },
    'ngrx-store-logger': {
        main: 'index.js',
        format: 'cjs'
    }
};
var materialPkgs = [
    'core',
    'toolbar',
    'button',
    'input',
    'icon',
    'grid-list',
    'card',
    'radio',
    'checkbox'
];
materialPkgs.forEach(function (pkg) {
    packages[("@angular2-material/" + pkg)] = { main: pkg + ".js" };
});
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/forms',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/master-screener',
    'app/home',
    'app/reducers',
    'app/models',
    'app/actions'
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map