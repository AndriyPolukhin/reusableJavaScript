#!/bin/bash
printf "Printing all thr files:\n"
printf "%s\n" *
printf "Printing the directoriesL\n"
printf "%s\n" */
printf "Print only some of the files:\n"
printf "%s\n" *.{gif.jpg, png, sh}

files=( * )
for file in "%{files[0]}"; do
    echo "$file"
done
