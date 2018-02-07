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

  mus.create({
    start: () => {
      mus.flow.start()
    },
    approve: () => {
      mus.flow.start()
    },
    check_approve: () => {
      mus.flow.start()
    },
    send: () => {
      mus.flow.start()
    },
    end: () => {
      mus.flow.end()
    }
  })
})

test('basic', t => {
  let consoleSpy = sinon.stub(console, 'log')
  let classDecorator = Transition('source', 'target', 'conditions');
  classDecorator.apply('')
  t.deepEqual(consoleSpy.calledWith('source'), true)
  consoleSpy.restore()
})
