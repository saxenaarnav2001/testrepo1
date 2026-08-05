# Benchmark Repository 1: Web API Service

This is Benchmark Repository 1 designed to evaluate software composition analysis (SCA), LLM reachability analysis, and VEX statement parsing.

## Dependency Breakdown (Total: 38 Packages)

### 🔴 Reachable Vulnerabilities (13 Packages)
- `axios@0.21.1` - `mergeConfig` invoked in `index.js`
- `lodash@4.17.15` - `template` invoked in `index.js`
- `qs@6.7.0` - `parse` invoked in `index.js`
- `fast-xml-parser@4.2.4` - `XMLParser` invoked in `index.js`
- `minimist@1.2.0` - `minimist()` invoked in `index.js`
- `json5@2.2.1` - `parse` invoked in `index.js`
- `semver@7.5.1` - `valid` invoked in `index.js`
- `async@2.6.3` - `each` invoked in `index.js`
- `moment@2.29.1` - `moment()` invoked in `index.js`
- `serialize-javascript@3.0.0` - `serialize()` invoked in `index.js`
- `netmask@1.0.5` - `Netmask()` invoked in `index.js`
- `xml2js@0.4.22` - `parseString()` invoked in `index.js`
- `shell-quote@1.7.2` - `parse()` invoked in `index.js`

### 🟡 Unreachable Vulnerabilities (12 Packages)
- `got@11.8.2` - Not imported or called in code
- `ansi-regex@5.0.0` - Not imported or called in code
- `path-parse@1.0.6` - Not imported or called in code
- `validator@13.6.0` - Not imported or called in code
- `decode-uri-component@0.2.0` - Not imported or called in code
- `formidable@1.2.1` - Not imported or called in code
- `node-forge@0.10.0` - Not imported or called in code
- `ip@1.1.8` - Not imported or called in code
- `express@4.16.0` - Not imported or called in code
- `kind-of@6.0.2` - Not imported or called in code
- `tar@6.1.0` - Not imported or called in code
- `glob-parent@5.1.1` - Not imported or called in code

### 🟢 Clean Dependencies (13 Packages)
- `chalk@4.1.2`, `commander@11.1.0`, `cors@2.8.5`, `dotenv@16.4.5`, `uuid@9.0.1`, `debug@4.3.4`, `ms@2.1.3`, `mime@3.0.0`, `ws@8.16.0`, `winston@3.11.0`, `morgan@1.10.0`, `helmet@7.1.0`, `bytes@3.1.2`

### 📋 VEX Statements (`vex.json`)
Contains 2 OpenVEX statements marking `got@11.8.2` and `axios@0.21.1` as `not_affected`.
