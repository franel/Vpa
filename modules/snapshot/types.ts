export type Snapshot<T> = {
  data: T;
  timestamp: number;
};

export type SnapshotState<T> = {
  history: Snapshot<T>[];
  index: number;
  limit?: number;
};
