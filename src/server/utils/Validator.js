"use-strict"

export const Validator = {

  /**
   * Control if the input is a string and if is match with a REGEX
   * Return Boolean
   * @param  { String } name String to control
   */

  name: (name) => {
    if (!name || typeof name != "string") return false
    return /^[^'][\w#+~&|_-\s]{2,20}$/.test(name)
  },

  /**
   * Control if the input is a integer
   * Return Boolean
   * @param  { Integer } num The input to control
   */

  num: (num) => {
    if (typeof num != "number" && !parseInt(num)) return false
    return true
  },

  /**
   * Control if the input is a valid text
   * Return Boolean
   * @param  { String } text The input to control
   */

  text: (text) => {
    if (typeof text != "string") return false
    return /^[\w\sÜ-ü'"]{2,256}$/.test(text)
  },

  /**
   * Control if the input is a valid date
   * Return Boolean
   * @param  { String } date The input to control
   */

  date: (date) => {
    if (typeof url != "string") return false
    return /^([\d]{2,4}[\/]){1,2}([\d]{2,4})$/.test(date)
  },

  /**
   * Control if the input is a valid note between 0-5
   * Return boolean
   * @param  { Integer } note The input to control
   */

  note: (note) => {
    if (!parseInt(note)) return false
    return /^[0-5]$/.test(note)
  },

  /**
   * Control if the languages is an array and if each elements is an integer
   * Return boolean
   * @param  { Array } languages The array to control
   */

  languages: (languages) => {
    if (!Array.isArray(languages)) return false
    let invalid = languages.filter(v => { if (!Validator.num(v)) return v })[0]

    if (invalid) return false
    return true
  },


  /**
   * Control if the input is an integer between 0-100
   * Return Boolean
   * @param  { Integer } number The input to control
   */

  percentage: (number) => {
    if (!Validator.num(number)) return false
    return /^([0]?[0-9]?[0-9]|(100))$/.test(number)
  },

  /**
   * Control if the input is an username valid
   * Return Boolean
   * @param  { String } username The input to control
   */

  username: (username) => {
    if (typeof username != "string") return false
    return /^[\w\sÜü_-]{2,60}$/.test(username)
  },

  /**
   * Control if the input is an email valid 
   * Return Boolean
   * @param  { String } email The input to control
   */

  email: (email) => {
    if (typeof email != "string") return false
    return /^[\w\.\-]+@([\w\-]+\.)+[\w\-]{2,4}$/.test(email)
  }
}