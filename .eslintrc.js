module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  extends: ["plugin:@stencil/recommended", "prettier"]
};
