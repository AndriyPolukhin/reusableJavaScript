// GULP STYLE CONFIGURATION v1.
“
use strict”;

var gulp = require(“gulp”);
var sass = require(“gulp - sass”);
var plumber = require(“gulp - plumber”);
var postcss = require(“gulp - postcss”);
var autoprefixer = require(“autoprefixer”);
var server = require(“browser - sync”);
var mqpacker = require(“css - mqpacker”);
var minify = require(“gulp - csso”);
var rename = require(“gulp - rename”);
var imagein = require(“gulp - imagemin”);
var svgstore = require(“gulp - svgstore”);
var svgmin = require(“gulp - svgmin”);
var del = require(“del”);

gulp.task(“style”, function () {
    gulp.src(“sass / style.scss”)
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
	 autoprefixer({
                browsers: [
		“last 1 version”,
		“last 2 Chrome versions”,
		“last 2 Firefox versions”,
		“last 2 Opera versions”,
		“last 2 Edge versions”
		]
            }),
	 mqpacker({
                sort: true
            })
	]))
        .pipe(gulp.dest(“build / css”))
        .pipe(minify())
        .pipe(rename(“style.min.css”))
        .pipe(gulp.dest(“build / css”));
    or the next one
        .pipe(server.reload({
            stream: true
        }));
});

gulp.task(“serve”, function () {
    server.init({
        server: “build”
    });

    gulp.watch(“sass /**/ * .scss”, [“style”]);
    gulp.watch(“ * .html”)
        .on(“change”, server.reload);
});

gulp.task(“images”, function () {
    return gulp.src(“build / img /**/ * . {
            png,
            jpg,
            gif
        }”)
        .pipe(imagemin([
	  imagemin.optipng({
                optimizationLevel: 3
            }),
	 imagemin.jpegtran({
                progressive: true
            })
	]))
        .pipe(gulp.dest(“build / img”));
});

gulp.task(“symbols”, function () {
            return gulp.src(“build / img / icons
                    /*.svg”)
                    	.pipe(svgmin())
                    	.pipe(svgstore({
                    		inlineSvg: true
                    	   }))
                    	.pipe(rename(“symbols.svg”))
                    	.pipe(gulp.dest(“build/img”));
                    });

                    gulp.task(“clean”, function() {
                    	return del(“build”);
                    });

                    gulp.task(“copy”, function() {
                    	return gulp.src([
                    	 “fonts/**/
                    *
                    . {
                        woff,
                        woff2
                    }”, “img
                    /**”,
                    	 “js/**”,
                      	 “*.html”
                    	], {
                    	  Base: “.”
                    	})
                    	.pipe(gulp.dest(“build”));
                    });


                    gulp.task(“build”, function(fn) {
                       run(
                    	“clean”,
                    	“copy”,
                    	“style”, 
                    	“images”, 
                    	“symbols”, 
                    	Fn
                        );
                    });
