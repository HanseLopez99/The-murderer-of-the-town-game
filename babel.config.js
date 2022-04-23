const presets = [
  [
    "@babel/preset-env",
    {
      corejs: 3,
      useBuiltIns: "usage",
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      },
      debug: false
    },
  ]
]

const plugins = [
  "@babel/plugin-transform-arrow-functions",
  "@babel/plugin-transform-literals",
  "@babel/plugin-transform-parameters"
];

module.exports = { presets, plugins };