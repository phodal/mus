import Mus from './mus';

export default {
  Mus: Mus,
  Transition: function (source: string, target: string, conditions: any) {
    return {
      source
    };
  }
}
