import _Promise from './bluebird/index'

namespace WeappTs {
  function init() {
    // @ts-ignore:
    Promise = _Promise
  }
}

export default WeappTs