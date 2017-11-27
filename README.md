# Calculadora


app creada con create-react-app

para correr lint: npm run lint

reglas modificadas de lint:

// only .jsx files may have JSX
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }]

//No .bind() or Arrow Functions in JSX Props (react/jsx-no-bind)
"react/jsx-no-bind": [{
  ...
  "allowBind": true 
  ...
}]
