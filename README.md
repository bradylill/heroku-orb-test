# heroku-orb-test
Test usage of the circleci heroku orb.

## What?
A test repo to drive out the development of an orb using live build ingestion.

## Steps
The current nonideal workflow is:
* Make changes under `.circleci.src`
* Run `circleci-cli collapse -r .circleci.src > .circleci/build.yml`
* Commit and push