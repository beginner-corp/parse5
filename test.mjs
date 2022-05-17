import test from 'tape'
import { parse, fragment, serialize, serializeOuter } from './parse5.mjs'

test('parse should exist', t => {
  t.ok(parse)
  t.end()
})

test('fragment should exist', t => {
  t.ok(fragment)
  t.end()
})

test('serialize should exist', t => {
  t.ok(serialize)
  t.end()
})

test('serializeOuter should exist', t => {
  t.ok(serializeOuter)
  t.end()
})

test('parse to serialize. End to end', t => {
  const input = '<div>Hi there!</div>'
  const document = parse(input)
  const outer = serializeOuter(document.childNodes[0])
  const actual = serialize(document)
  const expected = '<html><head></head><body><div>Hi there!</div></body></html>'
  t.equal(actual, expected)
  t.equal(outer, expected)
  t.end()
})
