#!/bin/bash
MODES=("develop" "staging" "prod")

Help()
{
   # Display Help
   echo "Script to build the nextt project for deployment."
   echo
   echo "Syntax: build.sh [-m|h]"
   echo "options:"
   echo "m     Mode to build the project in (develop, staging, prod)."
   echo "h     Print this Help."
   echo
}

trap "exit" INT TERM ERR
trap "kill 0" EXIT

(( $# )) || { Help; exit 1; }

while getopts m: flag
do
    case "${flag}" in
        h) #Displaying Help
            Help
            exit;;
        m) mode=${OPTARG};;
        \?) echo "No mode was provided"
            Help
            exit;;
    esac
done

if [[ ! " ${MODES[@]} " =~ " ${mode} " ]]; then
    echo "No mode was provided"
    Help
    exit
fi

# have to use build_env instead of mode cause mode is different than the build scripts
BUILD_ENV=$mode
if [[ " develop " =~ " ${mode} " ]]; then
  BUILD_ENV=dev
fi

DATE_VALUE=`date +'%Y-%m-%d_%H%M%S'`
ROOT_DIR=`pwd`
cd widget && yarn build:$BUILD_ENV
mkdir ../public/widget
cp -rf dist/* ../public/widget
cd $ROOT_DIR && yarn build:$BUILD_ENV

# first we remove the directory and then make it so we can copy the stuff in
cd $ROOT_DIR && rm -rf deploy && mkdir -p deploy
cp -rf dist/* deploy/

wait
echo 'exiting...'
