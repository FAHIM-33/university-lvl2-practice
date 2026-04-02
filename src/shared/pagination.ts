import type { SortOrder } from "mongoose"

export type IPaginationOptions = {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: SortOrder
}

export const paginationFields = ['page', 'limit', 'sortBy', 'sortOrder']

const pick = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[],
): Partial<T> => {
  const finalObj: Partial<T> = {}

  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key]
    }
  }

  return finalObj
}

export default pick

export type IPaginationCalculationOptions = {
  page: number
  limit: number
  skip: number
  sortBy: string
  sortOrder: SortOrder
}

export const calculatePagination = (
  paginationOptions: IPaginationOptions,
): IPaginationCalculationOptions => {
  const { sortBy = 'createdAt', sortOrder = 'desc' } = paginationOptions

  const page = Number(paginationOptions.page) || 1
  const limit = Number(paginationOptions.limit) || 10

  const skip = (page - 1) * limit
  return {
    page,
    limit,
    sortBy,
    sortOrder,
    skip,
  }
}
