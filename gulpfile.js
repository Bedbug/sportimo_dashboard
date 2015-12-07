var gulp = require('gulp');
var server = require('gulp-server-livereload');

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