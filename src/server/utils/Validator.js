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
    if (typeof parseInt(num) != "number") return false
    return true
  },

  /**
   * Control if the input is an valid text
   * Return Boolean
   * @param  { String } text The input to control
   */

  text: (text) => {
    if (typeof text != "string") return false
    return /^[\w\sÜ-ü'"]{2,256}$/.test(text)
  },

  /**
   * Control if the input is an valid date
   * Return Boolean
   * @param  { String } date The input to control
   */

  date: (date) => {
    if (typeof url != "string") return false
    return /^([\d]{2,4}[\/]){1,2}([\d]{2,4})$/.test(date)
  }
}