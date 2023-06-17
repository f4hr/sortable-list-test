export const getNextId = (() => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
})();
