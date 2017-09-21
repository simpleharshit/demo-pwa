module.exports = {
    navigateFallback: './src/index.html',
    stripPrefix: 'dist',
    root: 'dist/',
    staticFileGlobs: [
        'dist/index.html',
        'dist/**.js',
        'dist/**.css',
        'dist/**.ttf',
        'dist/assets/fonts/**/*.ttf',
        'dist/assets/images/**/*.*',
        'dist/assets/js/**/*.js',
        'dist/assets/static/**.*',
        'dist/bower_components/**/*.html',
        'dist/bower_components/**/*.js',
        'dist/bower_components/**/*.css',
        'dist/custom_components/**/*.html',
        'dist/custom_components/**/*.js',
        'dist/custom_components/**/*.css',
    ]
};