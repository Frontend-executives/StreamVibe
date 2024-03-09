import _ from 'lodash'

type NestedObject = Record<string | number | symbol, unknown>
type NestedArray = unknown[]

const isNestedArray = (value: unknown): value is NestedArray => _.isArray(value)
const isNestedObject = (value: unknown): value is NestedObject => _.isPlainObject(value)

export const keysToCamel = <T>(input: unknown): T => {
  if (isNestedArray(input)) {
    return input.map((item) => keysToCamel(item)) as unknown as T
  } else if (isNestedObject(input)) {
    return Object.entries(input).reduce((acc: NestedObject, [key, value]) => {
      const camelKey = _.camelCase(key)
      acc[camelKey] = keysToCamel(value)
      return acc
    }, {}) as T
  }
  return input as T
}
