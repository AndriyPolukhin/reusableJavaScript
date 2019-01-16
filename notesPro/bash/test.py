#!/bin/bash

if [[ ! -e /tmp/test.py.pid ]]; then # Check if the file already exists
     python test.py &
     echo $! > /tmp/test.py.pid
else
    echo -n "ERROR: The process is already running with pid "
    cat /tmp/test.py.pid
    echo
fi
