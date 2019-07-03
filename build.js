const path = require('path')
const fs = require('fs').promises
const prh = require('prh')

const build = () => {
  const file = path.resolve(__dirname, 'phr.yml')
  const config = prh.fromYAMLFilePath(file)
  const results = config.rules.map(rule => {
    const result = {
      pattern: rule.pattern.source,
      expected: rule.expected,
    }
    return result
  })
  fs.writeFile('all.json', JSON.stringify(results), err => {
    console.log(err)
  })
}

build()
