export interface IIpcExternal {
    invoke<TData, TResult>(channel: string, data: TData): Promise<TResult>;
    whenReady(context?: string): Promise<void>;
}
