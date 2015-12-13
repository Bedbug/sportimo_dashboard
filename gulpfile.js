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


    var watcher = gulp.watch( [ '../sportimo_gameserver/sportimo-_modules/**/*.js' ], gameserver.restart );
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });


    //exec('node ../sportimo_gameserver/server.js', function (err, stdout, stderr) {
    //    console.log(stdout);
    //    console.log(stderr);
    //    cb(err);
    //});

    exec('node ../sportimo_socketinstance_scaleable/app.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

