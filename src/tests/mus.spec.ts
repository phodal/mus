import { test } from 'ava'
import Mus from 'mus'

test('basic', t => {
  t.deepEqual(1, 1);
});

test('basic', t => {
  enum ArticleState {
    NEW,
    PUBLISHED,
    DESTROYED,
    REJECTED
  }

  let mus = new Mus<ArticleState>(ArticleState.NEW);
  t.deepEqual(typeof mus, 'object')
});
