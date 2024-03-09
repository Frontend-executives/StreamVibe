import _ from 'lodash'

type NestedObject = Record<string | number | symbol, unknown>
type NestedArray = unknown[]

const isNestedArray = (value: unknown): value is NestedArray => _.isArray(value)
const isNestedObject = (value: unknown): value is NestedObject => _.isPlainObject(value)

export const keysToSnake = <T>(input: unknown): T => {
  if (isNestedArray(input)) {
    return input.map(keysToSnake) as unknown as T
  } else if (isNestedObject(input)) {
    return _.reduce(
      input,
      (acc: NestedObject, value, key) => {
        const snakeKey = _.snakeCase(key)
        acc[snakeKey] = keysToSnake(value)
        return acc
      },
      {},
    ) as T
  }
  return input as T
}
