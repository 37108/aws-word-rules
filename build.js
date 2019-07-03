const path = require('path')
const fs = require('fs').promises
const prh = require('prh')

const build = () => {
  const file = path.resolve(__dirname, 'prh.yml')
  const config = prh.fromYAMLFilePath(file)
  const results = config.rules.map(rule => {
    const flag = rule.pattern.flags || rule.pattern.toString().match(/[gimuy]*$/)[0]

    const result = {
      pattern: rule.pattern.source,
      expected: rule.expected,
      flag: rule.pattern.flags !== null ? rule.pattern.flags : rule.pattern.toString().match(/[gimuy]*$/)[0]
    }
    return result
  })
  fs.writeFile('all.json', JSON.stringify(results), err => {
    console.log(err)
  })
}

build()
