"use-strict"

export const Utils = {
  getWidth: function () {
    let s = screen.width
    let w = window.innerWidth
    if (s <= w) return s
    return w
  },
}