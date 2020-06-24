module.exports = {
  parser: "babel-eslint",
  plugins: ["react"],
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    node: true
  },
  rules: {
    quotes: ["error", "single", { avoidEscape: true }],
    "comma-dangle": ["error", "always-multiline"]
  },
  settings: {
    react: {
      pragma: "React",
      version: "0.14.8"
    }
  }
};
