interface LooseObject {
  [key: string]: any
}

export class Flow<T> {
  start (state: T) {
    //
  }

  transition (state: T) {
    //
  }

  end () {
    //
  }
}

export class Mus<T> {
  public flow: Flow<T>
  private currentState: T

  constructor (startState: T) {
    this.currentState = startState
    this.flow = new Flow<T>()
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
