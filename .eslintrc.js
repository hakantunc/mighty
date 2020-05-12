module.exports = {
  extends: [
    'airbnb-typescript',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/destructuring-assignment': 'off',
    'max-len': ['error', {
      code: 80,
      ignoreUrls: true,
    }],
  }
};
