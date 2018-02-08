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
  }

  create (dsl: any) {
    //
  }
}
