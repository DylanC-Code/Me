"use-strict"

export const Validator = {
  /**
   * Control if the input is a string and if is match with a REGEX
   * Return Boolean
   * @param  { String } name String to control
   */
  name: (name) => {
    if (!name || typeof name != "string") return false
    return /^[^'][\w#+~&|_-]{2,20}$/.test(name)
  },

  /**
   * Control if the input is an integer
   * Return Boolean
   * @param  { Integer } num The input to control
   */
  num: (num) => {
    if (!parseInt(num) || typeof num != "number") return false
    return true
  }
}