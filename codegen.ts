import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
	documents: './gql/**/*.gql',
	generates: {
		'./gql/generated/': {
			preset: 'client',
			plugins: [],
		},
		'./gql/graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
};

export default config;
