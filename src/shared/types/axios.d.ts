import 'axios';

declare module 'axios' {
  // Type parameters must match the original declaration exactly.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  export interface AxiosRequestConfig<D = any, P = any> {
    skipAuthRedirect?: boolean;
  }
}
