# Mus - FSM in TypeScript

> finite-state machine in TypeScript for Angular


Goal

 - basic state 
 - annotation support
 
**Draft**

1. Annotation

```
@transition(field='state', source='new', target='published', conditions=[can_publish])
```

2. Simple DSL Support

```
@transition(
    field='state',
    source='for_moderators',
    target=GET_STATE(
        lambda self, allowed: 'published' if allowed else 'rejected',
        states=['published', 'rejected']))
```

3. Self Usage

e.x. Transit Status

 - beginTransit
 - endTransit
 - failTransit
 - doTransit

References
---

 - [https://github.com/jakesgordon/javascript-state-machine](https://github.com/jakesgordon/javascript-state-machine)
 - [https://github.com/eonarheim/TypeState](https://github.com/eonarheim/TypeState)
 - [https://github.com/kmmbvnr/django-fsm](https://github.com/kmmbvnr/django-fsm)
 - [https://github.com/hekailiang/squirrel](https://github.com/hekailiang/squirrel)
 
JavaScript Example:

```
var fsm = new StateMachine({
  init: 'solid',
  transitions: [
    { name: 'melt',     from: 'solid',  to: 'liquid' },
    { name: 'freeze',   from: 'liquid', to: 'solid'  },
    { name: 'vaporize', from: 'liquid', to: 'gas'    },
    { name: 'condense', from: 'gas',    to: 'liquid' }
  ],
  methods: {
    onMelt:     function() { console.log('I melted')    },
    onFreeze:   function() { console.log('I froze')     },
    onVaporize: function() { console.log('I vaporized') },
    onCondense: function() { console.log('I condensed') }
  }
});
```

License
---

[![Phodal's Idea](http://brand.phodal.com/shields/idea-small.svg)](http://ideas.phodal.com/)

@ 2018 A [Phodal Huang](https://www.phodal.com)'s [Idea](http://github.com/phodal/ideas).  This code is distributed under the MIT license. See `LICENSE` in this directory.
