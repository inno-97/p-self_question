module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:react/jsx-runtime',

		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',

		'prettier/@typescript-eslint',
		'prettier/react',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		project: ['./tsconfig.json'],
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			tsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	ignorePatterns: ['node_modules/'],
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/prefer-stateless-function': 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-one-expression-per-line': 0,
		'no-nested-ternary': 0,
		'no-unused-vars': 'off',
		'no-undef': 'off',
		'/no-useless-escape': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
				useTabs: true,
			},
		],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'@typescript-eslint/no-empty-interface': 'off',
		'no-empty-interface': 'off',
	},
	globals: {
		React: 'writable',
	},
	overrides: [
		{
			files: ['*.js', '*.jsx'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'@typescript-eslint/no-empty-interface': 'off',
			},
		},
	],
};
