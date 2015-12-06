var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function () {
    gulp.src('')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function (filePath, cb) {

                    //console.log(cb( !(/.git/.test(filePath)) ));
                    if (filePath.match(/.css$/))
                        return false;
                    else {
                        return true;
                    }
                }
            },
            directoryListing: true,
            open: true
        }));
});