let sinon = require('sinon')

import { test } from 'ava'
import { Mus, Transition } from 'mus'

test('basic', t => {
  t.deepEqual(1, 1)
})

test('basic', t => {
  enum ArticleState {
    CREATE,
    PUBLISHED,
    DESTROYED,
    REJECTED
  }

  let mus = new Mus<ArticleState>(ArticleState.CREATE)
  t.deepEqual(typeof mus, 'object')

  mus.create({
    create: () => {
      mus.flow.start(ArticleState.CREATE)
    },
    publish: () => {
      mus.flow.transition(ArticleState.PUBLISHED)
    },
    destory: () => {
      mus.flow.transition(ArticleState.DESTROYED)
    },
    reject: () => {
      mus.flow.transition(ArticleState.REJECTED)
    }
  })
})

test('basic', t => {
  let consoleSpy = sinon.stub(console, 'log')
  let classDecorator = Transition('source', 'target', 'conditions')
  classDecorator.apply('')
  t.deepEqual(consoleSpy.calledWith('source'), true)
  consoleSpy.restore()
})
