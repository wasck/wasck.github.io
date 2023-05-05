export type DevStackType = 'svg' | 'png' | string;

export interface DevStack {
  name: string,
  label: string,
  size: number,
  link: string,
  type?: DevStackType
};