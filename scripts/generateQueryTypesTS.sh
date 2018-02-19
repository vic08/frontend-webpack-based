#!/bin/bash

GRAPHQL_ENDPOINT=$1

echo 'starting query types typescirpt generation';

mkdir node_modules/@@graphql-schema-typescript-types;

apollo-codegen introspect-schema $GRAPHQL_ENDPOINT --output node_modules/@@graphql-schema-typescript-types/schema.json;
apollo-codegen generate ./**/*/*.tsx --schema node_modules/@@graphql-schema-typescript-types/schema.json --target typescript --output node_modules/@@graphql-schema-typescript-types/index.ts;

echo 'finished';
