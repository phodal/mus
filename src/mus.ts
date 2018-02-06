export default class Mus<T> {
  private currentState: T

  constructor (startState: T) {
    this.currentState = startState
  }
}
