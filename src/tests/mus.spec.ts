let sinon = require('sinon')

import { test } from 'ava'
import { Mus, Transition, Flow } from 'mus'

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

  let musFunc = mus.create({
    create: (flow) => {
      flow.start(ArticleState.CREATE)
    },
    publish: (flow) => {
      flow.transition(ArticleState.PUBLISHED)
    },
    destroy: (flow) => {
      flow.transition(ArticleState.DESTROYED)
    },
    reject: (flow) => {
      flow.transition(ArticleState.REJECTED)
    }
  })
  musFunc.publish(mus.flow)
  console.log(mus.flow.state)
})

test('basic', t => {
  let consoleSpy = sinon.stub(console, 'log')
  let classDecorator = Transition('source', 'target', 'conditions')
  classDecorator.apply('')
  t.deepEqual(consoleSpy.calledWith('source'), true)
  consoleSpy.restore()
})
