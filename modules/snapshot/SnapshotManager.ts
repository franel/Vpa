import { SnapshotState, Snapshot } from './types';
import { deepClone } from './utils';

export class SnapshotManager<T> {
  private state: SnapshotState<T>;

  constructor(initial: T, limit = 50) {
    this.state = {
      history: [{ data: deepClone(initial), timestamp: Date.now() }],
      index: 0,
      limit,
    };
  }

  add(snapshot: T) {
    const sliced = this.state.history.slice(0, this.state.index + 1);
    sliced.push({ data: deepClone(snapshot), timestamp: Date.now() });

    if (sliced.length > this.state.limit!) {
      sliced.shift(); // remove oldest
    }

    this.state.history = sliced;
    this.state.index = this.state.history.length - 1;
  }

  undo(): T | null {
    if (this.state.index > 0) {
      this.state.index--;
      return deepClone(this.state.history[this.state.index].data);
    }
    return null;
  }

  redo(): T | null {
    if (this.state.index < this.state.history.length - 1) {
      this.state.index++;
      return deepClone(this.state.history[this.state.index].data);
    }
    return null;
  }

  current(): T {
    return deepClone(this.state.history[this.state.index].data);
  }

  getState(): SnapshotState<T> {
    return this.state;
  }
}
