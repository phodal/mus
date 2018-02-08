interface LooseObject {
  [key: string]: any
}

export class Flow<T> {
  public currentState: T
  private states: any

  constructor (states: any) {
    this.states = states
  }

  start (currentState: T) {
    this.currentState = currentState
  }

  transition (nextState: T) {
    this.currentState = nextState
  }

  end () {
    //
  }

  get state () {
    return this.states[this.currentState]
  }
}

export class Mus<T> {
  public flow: Flow<T>
  private currentState: T

  constructor (states: any, startState: T) {
    this.currentState = startState
    this.flow = new Flow<T>(states)
    this.flow.start(this.currentState)
  }

  create (dslObjects: any): object {
    let func: LooseObject = {}
    for (let obj in dslObjects) {
      Object.defineProperty(func, obj, {
        value: dslObjects[obj],
        writable: true,
        enumerable: true,
        configurable: true
      })
    }

    return func
  }
}
