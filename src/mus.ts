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
  private currentState: T

  constructor (startState: T) {
    this.currentState = startState
  }

  create (dslObject: any): object {
    let func: LooseObject = {}
    for (let obj in dslObject) {
      func[obj] = dslObject[obj]
    }

    return func
  }
}
