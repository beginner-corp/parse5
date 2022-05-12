import test from 'tape'
import { parse, fragment, serialize } from './parse5.mjs'

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
