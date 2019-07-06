export const authMiddleware = store => next => action => {
  let result = next(action);
  return result;
};
