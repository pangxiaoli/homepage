/* eslint-disable no-undef */
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'react/react-in-jsx-scope': 'off',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-extra-parens': [
			'error',
			'all'
		],
		'eqeqeq': [
			'error',
			'always'
		],
		'no-else-return': [
			'error',
			{
				'allowElseIf': false
			}
		],
		'no-eval': [
			'error'
		],
		'no-var': [
			'error'
		],
		'brace-style': [
			'error',
			'1tbs',
			{
				'allowSingleLine': false
			}
		],
		'no-plusplus': [
			'error'
		],
		'no-unused-vars': [
			'error'
		],
		'keyword-spacing': [
			'error'
		],
		'object-curly-spacing': [
			'error', 
			'always', 
			{ 
				'arraysInObjects': true,
				'objectsInObjects': true
			}
		],
		'space-in-parens': [
			'error', 
			'always',
			{ 
				'exceptions': ['empty', '{}'] 
			}
		],
		'space-infix-ops': [
			'error',
			{ 
				'int32Hint': false 
			}
		],
		'arrow-spacing': [ 
			'error'
		],
		'comma-spacing': [
			'error',
			{ 
				'before': false,
				'after': true 
			}
		],
		'key-spacing': [
			'error', 
			{ 
				'afterColon': true 
			}
		]
	}
};
