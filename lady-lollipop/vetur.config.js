// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
    // **optional** default: `{}`
    // override vscode settings
    // Notice: It only affects the settings used by Vetur.
    settings: {
      "vetur.useWorkspaceDependencies": true,
      "vetur.experimental.templateInterpolationService": true
    },
    // **optional** default: `[{ root: './' }]`
    // support monorepos
    projects: [
      './lady-lollipop', // Shorthand for specifying only the project root location
      {
        // **required**
        // Where is your project?
        // It is relative to `vetur.config.js`.
        root: './lady-lollipop',
        // **optional** default: `'package.json'`
        // Where is `package.json` in the project?
        // We use it to determine the version of vue.
        // It is relative to root property.
        package: './lady-lollipop/package.json',
        // **optional**
        // Where is TypeScript config file in the project?
        tsconfig: './tsconfig.json',
        // **optional** default: `'./.vscode/vetur/snippets'`
        // Where is vetur custom snippets folders?
        globalComponents: [
          './src/components/**/*.vue'
        ]
      }
    ]
  }
  