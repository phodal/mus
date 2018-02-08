interface LooseObject {
  [key: string]: any
}

export class Flow<T> {
  public currentState: T

  start (state: T) {
    this.currentState = state
  }

  transition (state: T) {
    this.currentState = state
  }

  end () {
    //
  }

  get state () {
    return this.currentState
  }
}

export class Mus<T> {
  public flow: Flow<T>
  private currentState: T

  constructor (startState: T) {
    this.currentState = startState
    this.flow = new Flow<T>()
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
