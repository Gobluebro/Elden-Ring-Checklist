export interface ListType {
  id: number;
  name: string;
  requirements: Array<Requirement>;
}

export interface Requirement {
  id: number;
  description: string;
}
