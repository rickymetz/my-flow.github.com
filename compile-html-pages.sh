#!/bin/bash
# Compile all jade files to HTML pages
# Copyright (C) 2014 by Florian J. Breunig

BASEDIR=$(dirname $0)

jade -O $BASEDIR/locals.json --pretty < $BASEDIR/sitemap.jade > $BASEDIR/sitemap.xml
jade -O $BASEDIR/locals.json $BASEDIR/node/*.jade $BASEDIR/weblog/*.jade
jade -O $BASEDIR/locals.json $BASEDIR/404.jade $BASEDIR/index.jade
