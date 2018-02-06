export function Transition (source: string, target: string, conditions: any): ClassDecorator {
  return function (constructor: any) {
    console.log(source)
  }
}
