let isCollect = false;

export function useCollectMapBlock() {
  function start() {
    isCollect = true;
  }

  function stop() {
    isCollect = false;
  }

  function collect(fn: () => void) {
    if (!isCollect) return;
    fn && fn();
  }

  return {
    start,
    stop,
    collect,
  };
}
