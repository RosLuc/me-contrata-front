import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

export function getCategoryByType(type: FilterType) {

  switch (type) {
    case FilterType.PROGRAMMING:
      return 'PROGRAMMING';
    case FilterType.DESIGN:
      return 'DESIGN';
    default:
      return "";
  }
}

export function getFieldByPriority(priority: PriorityTypes) {

  switch (priority) {

    case PriorityTypes.NEWS:
      return { field: "created_at", order: "ASC" };
    case PriorityTypes.BIGGEST_PRICE:
      return { field: "price", order: "DESC" };
    case PriorityTypes.MINOR_PRICE:
      return { field: "price", order: "ASC" };
    default:
      return { field: "created_at", order: "ASC" };
  }
}

export const mountQuery = (type: FilterType, priority: PriorityTypes) => {

  const category = getCategoryByType(type);
  const field = getFieldByPriority(priority);

  return `?category=${category}&orderBy=${field.field}&order=${field.order}`;
};
