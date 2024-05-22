#!/bin/bash

# Update the packages
npm update

# List the updated packages
npm outdated

# Ask the user if they want to initialize eslint
read -p "Do you want to initialize ESLint right away? (y/n) " answer
case ${answer:0:1} in
    y|Y )
        npm init @eslint/config
    ;;
    * )
        echo "Skipping ESLint initialization."
    ;;
esac
