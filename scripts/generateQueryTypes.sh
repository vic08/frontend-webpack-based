#!/bin/bash

GRAPHQL_ENDPOINT=$1
TYPES_PACKAGE_DIR='node_modules/@@types'
NETWORK_QUERIES_DIR='./src/state/queries'

echo 'starting query types typescirpt generation';

mkdir $TYPES_PACKAGE_DIR;

apollo-codegen introspect-schema $GRAPHQL_ENDPOINT --output "${TYPES_PACKAGE_DIR}/schema.json";
apollo-codegen generate "${NETWORK_QUERIES_DIR}/**/*.ts" --schema "${TYPES_PACKAGE_DIR}/schema.json" --target typescript --output "${TYPES_PACKAGE_DIR}/index.ts";

echo 'finished';
