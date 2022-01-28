module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    'plugins': ["@typescript-eslint"],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    "overrides": [
        {
            env: {
                jest: true
            },
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ]
        },
        {
            // enable the rule specifically for TypeScript files
            "files": ["*.ts", "*.tsx"],
            "rules": {
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/ban-types': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/indent': ['error', 4, {
                    ignoredNodes: ['TSTypeParameterInstantiation'],
                    'SwitchCase': 0
                }],
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
                '@typescript-eslint/no-this-alias': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/semi': ['error', 'never'],
                '@typescript-eslint/space-infix-ops': 'error',
                '@typescript-eslint/type-annotation-spacing': ['error', {
                    'after': true,
                    'before': false
                }]
            }
        }
    ],
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': ['error', '1tbs', {
            'allowSingleLine': true
        }],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', {
            after: true,
            before: false
        }],
        'eol-last': ['error', 'always'],
        indent: ['error', 4],
        'key-spacing': ['error', {
            'mode': 'strict'
        }],
        'no-async-promise-executor': 'off',
        'no-console': 'off',
        'no-debugger': 'off',
        'no-dupe-else-if': 'off',
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'off',
        'object-curly-spacing': ['error', 'always'],
        'prefer-const': 'off',
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'spaced-comment': ['error', 'always'],
        'vue/attribute-hyphenation': 'off',
        'vue/attributes-order': 'off',
        'vue/component-definition-name-casing': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/name-property-casing': ['error', 'PascalCase'],
        // https://eslint.vuejs.org/rules/html-indent.html
        'vue/html-indent': ['error', 4, {
            alignAttributesVertically: true,
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            ignores: []
        }],
        'vue/html-self-closing': ['error', {
            html: {
                component: 'any',
                normal: 'any',
                void: 'any'
            },
            math: 'any',
            svg: 'any'
        }],
        'vue/no-lone-template': 'off',
        'vue/no-template-shadow': 'off',
        'vue/no-use-v-if-with-v-for': 2,
        'vue/no-v-html': 'off',
        'vue/order-in-components': 'off',
        'vue/require-default-prop': 0,
        'vue/require-prop-types': 0,
        'vue/this-in-template': 'off',
        'vue/v-bind-style': 'off'
    }
}
