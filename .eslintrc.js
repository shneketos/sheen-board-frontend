module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: "@typescript-eslint/parser",
    extends: ["standard-with-typescript", "plugin:react/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}", "**/src/**/*.test.{ts,tsx}"],
            parserOptions: {
                sourceType: "script",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "@typescript-eslint/quotes": [2, "double"],
        "@typescript-eslint/indent": [2, 4],
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "multiline-ternary": "off",
        "react/display-name": "off",
        "react/prop-types": "off",
        "@typescript-eslint/no-confusing-void-expression": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/space-before-function-paren": "off",
    },
};
