import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

export function getCategoryByType(type: FilterType) {
  if (type == FilterType.PROGRAMMING) return 'PROGRAMMING';
  if (type == FilterType.DESIGN) return 'DESIGN';
  return "";
}

export function getFieldByPriority(priority: PriorityTypes) {
  if (priority === PriorityTypes.NEWS)
    return { field: "created_at", order: "ASC" };
  if (priority === PriorityTypes.BIGGEST_PRICE)
    return { field: "price", order: "DESC" };
  if (priority === PriorityTypes.MINOR_PRICE)
    return { field: "price", order: "ASC" };
  return { field: "created_at", order: "ASC" };
}

export const mountQuery = (type: FilterType, priority: PriorityTypes) => {
  const category = getCategoryByType(type);
  const field = getFieldByPriority(priority);
  return `?category=${category}&orderBy=${field.field}&order=${field.order}`;
};
