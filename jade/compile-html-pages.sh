#!/bin/bash
# Compile all jade files to HTML pages
# Copyright (C) 2014 by Florian J. Breunig

JADEDIR=$(dirname $0)
BASEDIR=$JADEDIR/..

lessc -x $BASEDIR/css/style.less > $BASEDIR/css/style.css
jade -O $JADEDIR/locals.json --pretty < $JADEDIR/sitemap.jade > $BASEDIR/sitemap.xml
jade -O $JADEDIR/locals.json $BASEDIR/node/*.jade $BASEDIR/weblog/*.jade
jade -w -O $JADEDIR/locals.json -o $BASEDIR $JADEDIR/index.jade $JADEDIR/contact.jade $JADEDIR/thanks.jade $JADEDIR/404.jade 
