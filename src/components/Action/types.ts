export enum Category {
  Football = 'Футбол',
  Football8 = 'Футбол 8x8',
  Football7 = 'Футбол 7x7',
  Football6 = 'Футбол 6x6',
  Football5 = 'Футзал',
  Volleyball = 'Волейбол',
  RWAction = 'RW активность',
}
export type CategoryKey = keyof typeof Category;
export const CategoryMap = Object.keys(Category).map((view) => ({
  key: view,
  value: Category[view as CategoryKey],
}));

export enum Status {
  Active = 'идет',
  Target = 'планируется',
  Archive = 'завершена',
}
export type StatusKey = keyof typeof Status;
export const StatusMap = Object.keys(Status).map((view) => ({
  key: view,
  value: Status[view as StatusKey],
}));
