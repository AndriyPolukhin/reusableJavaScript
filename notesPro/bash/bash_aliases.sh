#!/bin/bash -li
# note the -li above! -1 make this behave like a login shell
# -i makes it behave like an interactive shell
#
# shopt -s expand_aliases will not work in most cases

echo There are ${#BASH_ALIASES[*]} aliases defined

for ali in "${!BASH_ALIASES[@]}"; do
    printf "alias: %-10s triggers: %s\n" "$ali" "${BASH_ALIASES[$ali]}"
done


