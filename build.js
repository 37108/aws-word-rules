const path = require('path')
const fs = require('fs').promises
const prh = require('prh')

const build = () => {
  const file = path.resolve(__dirname, 'prh.yml')
  const config = prh.fromYAMLFilePath(file)
  const results = config.rules.map(rule => {
    return {
      pattern: rule.pattern.source,
      expected: rule.expected,
    }
  })
  fs.writeFile('all.json', JSON.stringify(results), err => {
    console.log(err)
  })
}

build()
