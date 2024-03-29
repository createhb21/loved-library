export const zIndex = {
  HEADER: 1000,
  NAV: 100,
  DIALOG: 1000,
  MODAL: 10000,
  TOAST: 10000,
} as const

export type ZIndexType = typeof zIndex
