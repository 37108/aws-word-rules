# aws-word-rules
[textlint-rule-aws-spellcheck](https://github.com/37108/textlint-rule-aws-spellcheck)用のリポジトリ。  
[phr.yml](phr.yml)にAWSの表記揺れしそうな用語一覧が辞書として登録してある。  
それをtextlint用にjson形式で出力するためのライブラリ。  

## Usage
```
$ npm install aws-word-rules
```

```
const awsJson = require('aws-word-rules')
console.log(awsJson)
```
