module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 1,
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 1,
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'max-len': ['error', { ignoreComments: true }],
    },
    globals: {
        __IS_DEV__: true,
    },
};
