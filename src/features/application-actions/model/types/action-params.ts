export interface IAction {
  name?: string;
  key?: string;
}

export interface IActionParams {
  actions: IAction[];
}
