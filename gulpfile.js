var gulp = require('gulp');
var server = require('gulp-server-livereload');
var exec = require('child_process').exec;
var gameserver = require( 'gulp-develop-server' );

gulp.task('webserver', function () {
    gulp.src('')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function (filePath, cb) {

                    //console.log(filePath.indexOf(".css"));
                if(filePath.indexOf(".css")>0)
                    cb(true);
                    else
                if(filePath.indexOf(".html")>0)
                    cb(true);
                else
                if(filePath.indexOf(".js")>0)
                    cb(true);

                }
            },
            directoryListing: true,
            open: true
        }));
});

gulp.task('icon',function(){
    // Replace Electron icon for your own.
    var rcedit = require('rcedit');
    
    rcedit('./public/Sportimo-win32-x64/Sportimo.exe', {icon: './public/app-icon.ico'}, function (err) {
        if (!err) {
           console.log(err);
        } });
    
});

gulp.task('all', function (cb) {

    gulp.src('')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function (filePath, cb) {

                    //console.log(filePath.indexOf(".css"));
                    if(filePath.indexOf(".css")>0)
                        cb(true);
                    else
                    if(filePath.indexOf(".html")>0)
                        cb(true);
                    else
                    if(filePath.indexOf(".js")>0)
                        cb(true);

                }
            },
            directoryListing: true,
            open: true
        }));


    gameserver.listen( { path: '../sportimo_gameserver/server.js' } );

    var watcher = gulp.watch( [ '../sportimo_gameserver/sportimo_modules/**/*.js' ], gameserver.restart );
    watcher.on('change', function(event) {

        console.log('File ' + event + ' was ' + event.type + ', Reloading Game_server.');
    });


    exec('node ../sportimo_socketinstance_scaleable/app.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

//// run server
//gulp.task( 'server:start', function() {
//    gameserver.listen( { path: '../sportimo_gameserver/server.js' } );
//});
//
//// restart server if app.js changed
//gulp.task( 'server:restart', function() {
//    var watcher =  gulp.watch( [ '../sportimo_gameserver/sportimo_modules/**/*.js' ], gameserver.restart );
//});