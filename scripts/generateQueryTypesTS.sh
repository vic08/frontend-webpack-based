#!/bin/bash

GRAPHQL_ENDPOINT=$1
TYPES_PACKAGE_DIR='node_modules/@@types'

echo 'starting query types typescirpt generation';

mkdir $TYPES_PACKAGE_DIR;

apollo-codegen introspect-schema $GRAPHQL_ENDPOINT --output "${TYPES_PACKAGE_DIR}/schema.json";
apollo-codegen generate ./**/*/*.tsx --schema "${TYPES_PACKAGE_DIR}/schema.json" --target typescript --output "${TYPES_PACKAGE_DIR}/index.ts";

echo 'finished';
