/**
 * https://github.com/redux-utilities/flux-standard-action
 * Flux式action推荐写法
 */

export default interface IAction<T> {
  type: string;
  payload?: T;
  error?: boolean;
  meta?: any;
}
