let sinon = require('sinon')

import { test } from 'ava'
import { Mus, Transition } from 'mus'

test('basic', t => {
  t.deepEqual(1, 1)
})

test('basic', t => {
  enum ArticleState {
    NEW,
    PUBLISHED,
    DESTROYED,
    REJECTED
  }

  let mus = new Mus<ArticleState>(ArticleState.NEW)
  t.deepEqual(typeof mus, 'object')
})

test('basic', t => {
  let consoleSpy = sinon.stub(console, 'log')
  let classDecorator = Transition('source', 'target', 'conditions');
  classDecorator.apply('')
  t.deepEqual(consoleSpy.calledWith('source'), true)
  consoleSpy.restore()
})
