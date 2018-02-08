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
    let statesLength
    for (let enumMember in this.states) {
      let isValueProperty = parseInt(enumMember, 10) >= 0
      if (isValueProperty) {
        statesLength = parseInt(enumMember, 10)
      }
    }
    this.currentState = statesLength
  }

  get state () {
    return this.states[this.currentState]
  }
}

export class Mus<T> {
  public flow: Flow<T>
  public transitions: any[]
  private currentState: T

  constructor (states: any, startState: T) {
    this.currentState = startState
    this.flow = new Flow<T>(states)
    this.flow.start(this.currentState)
    this.transitions = []
  }

  create (dslObjects: any): object {
    let func: LooseObject = {}
    for (let obj in dslObjects) {
      this.transitions.push(obj)
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
