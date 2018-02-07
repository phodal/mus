export class Flow {
  start () {
    //
  }

  end () {
    //
  }
}

export class Mus<T> {
  public flow: Flow
  private currentState: T

  constructor (startState: T) {
    this.currentState = startState
  }

  create (dsl: any) {
    //
  }
}
