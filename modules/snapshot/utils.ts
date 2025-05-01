import jsondiffpatch from 'jsondiffpatch';

export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function diffSnapshots<T>(prev: T, next: T) {
  const delta = jsondiffpatch.diff(prev, next);
  return delta;
}
