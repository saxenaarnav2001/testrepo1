// Benchmark Repo 1 - Web API Service
// Reachable Vulnerabilities: 13 packages invoked
// Unreachable Vulnerabilities: 12 packages listed in package.json but not called

const axios = require('axios');
const lodash = require('lodash');
const qs = require('qs');
const { XMLParser } = require('fast-xml-parser');
const minimist = require('minimist');
const json5 = require('json5');
const semver = require('semver');
const asyncPkg = require('async');
const moment = require('moment');
const serialize = require('serialize-javascript');
const { Netmask } = require('netmask');
const xml2js = require('xml2js');
const shellQuote = require('shell-quote');

// 1. Axios - SSRF / Header leak (mergeConfig called)
axios.mergeConfig({ url: 'http://example.com' }, { headers: { 'Authorization': 'Bearer test' } });

// 2. Lodash - Prototype Pollution / Template Injection (template called)
const compiled = lodash.template('hello <%= user %>!');
compiled({ user: 'world' });

// 3. Qs - DoS / Prototype Pollution (parse called)
qs.parse('a[b]=c', { allowPrototypes: true });

// 4. Fast-XML-Parser - DoS / ReDoS (XMLParser called)
const parser = new XMLParser();
parser.parse('<root>test</root>');

// 5. Minimist - Prototype Pollution (minimist called)
minimist(process.argv.slice(2));

// 6. JSON5 - Prototype Pollution (json5.parse called)
json5.parse('{ "test": 123 }');

// 7. Semver - ReDoS (semver.valid called)
semver.valid('1.2.3');

// 8. Async - Prototype Pollution (async.each called)
asyncPkg.each([1, 2, 3], (item, cb) => cb());

// 9. Moment - ReDoS (moment called)
moment('2026-08-05').format('YYYY-MM-DD');

// 10. Serialize-Javascript - XSS (serialize called)
serialize({ str: '<script>alert(1)</script>' });

// 11. Netmask - SSRF / IP Parsing (Netmask called)
new Netmask('127.0.0.1/32');

// 12. Xml2js - Prototype Pollution (parseString called)
xml2js.parseString('<test>hello</test>', () => {});

// 13. Shell-quote - Command Injection (shellQuote.parse called)
shellQuote.parse('echo hello');

console.log("Benchmark Repo 1 Initialized.");
