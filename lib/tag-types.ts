export const TagType = {
  BYTE_ARRAY: { value: 1 },
  ASCII: { value: 2 },
  UINT16: { value: 3 },
  UINT32: { value: 4 },
  UINT64: { value: 5 },
  FLOAT32: { value: 6 },
  FLOAT64: { value: 7 },
} as const

export type TagTypeKeys = keyof typeof TagType

export type TagTypeMap = {
  BYTE_ARRAY: Uint8Array
  ASCII: string
  UINT16: number
  UINT32: number
  UINT64: number
  FLOAT32: number
  FLOAT64: number
}

export type ReturnTypeForTag<T extends TagTypeKeys> = T extends keyof TagTypeMap
  ? TagTypeMap[T]
  : never
