export function Transition (source: any, target: any, conditions: any): ClassDecorator {
  return function (constructor: any) {
    console.log(source)
  }
}
