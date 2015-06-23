#!/bin/bash
# Compile all jade files to HTML pages
# Copyright (C) 2014-2015 by Florian J. Breunig

set -o nounset
set -o errexit
set -o pipefail

readonly JADEDIR=${JADEDIR:-$(dirname $0)}
readonly BASEDIR=$JADEDIR/..

lessc -x $BASEDIR/css/style.less > $BASEDIR/css/style.css
lessc -x $BASEDIR/css/coverr.less > $BASEDIR/css/coverr.css
jade -O $JADEDIR/locals.json --pretty < $JADEDIR/sitemap.jade > $BASEDIR/sitemap.xml
jade -O $JADEDIR/locals.json $BASEDIR/node/*.jade $BASEDIR/weblog/*.jade
jade -w -O $JADEDIR/locals.json -o $BASEDIR $JADEDIR/index.jade $JADEDIR/contact.jade $JADEDIR/thanks.jade $JADEDIR/404.jade 
