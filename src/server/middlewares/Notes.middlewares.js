"use-strict";

import Concept from "../models/Concept.model.js";
import Language from "../models/Language.model.js";
import Language_Concept from "../models/Language_Concept.model.js";
import Note from "../models/Note.model.js";

//* Get the last note and its date for each language
//* Return map object with [id_language => date]
export async function getDate() {
  //~ Request for get all id_language
  let languages = await Language.findAll({
    attributes: ["id_language"],
    raw: true,
  });

  //~ Create Map with association [id_lanuage => last_date]
  let dates = new Map();
  for (const l of languages) {
    let date = await Note.findOne({
      where: { id_language: l.id_language },
      order: [["date", "DESC"]],
      limit: 1,
      attributes: ["date"],
      raw: true,
    });

    date ? dates.set(l.id_language, date.date) : dates.set(l.id_language, date);
  }
  return dates;
}

//* Check if the note isn't more than 3 months old
//* Return true or false
//* @params (date) = la date à comparer
export function checkDate(date) {
  //~ Define 3 months milliseconds and get the date of the day
  let three_months = 7889400000;
  let today = new Date().toISOString().split("T")[0];

  today = new Date(today);
  date = new Date(date);

  //~ Substract the date from today's date
  date = today.getTime() - date.getTime();

  //~ If the date is superior than 3 months return false
  return date > three_months ? false : true;
}

//* Calcul the average of all concepts values of the language
//* Return nothing
//* @params (pk) = primaryKey of the language
async function calculNotes(pk) {
  //~ Get all id_concept in the table jointure "Language_concept"
  let concepts = await Language_Concept.findAll({
    where: { id_language: pk },
    attributes: ["id_concept"],
    raw: true,
  });

  //~ Get value for each concept
  if (concepts[0]) {
    let values = [];
    for (const c of concepts) {
      let value = await Concept.findByPk(c.id_concept, {
        attributes: ["value"],
        raw: true,
      });
      values.push(value.value);
    }

    //~ Calcul average of values
    let average = 0;
    for (const v of values) average += v;
    average = (average / values.length) * 10;

    //~ Create new instance with the average and the primaryKey
    Note.create({ percentage: average, id_language: pk });
  }
}

//* Middleware to update or add a note if its date is too old or null
//* Return next()
//* @params (res,res,next)
export default async function UpdateOrAddDates(req, res, next) {
  //~ Function for get last date of each and its primaryKey
  let dates = await getDate();

  //~ Check the older of the dates
  for (const [k, v] of dates) checkDate(v) ? dates.delete(k) : null;
  //~ Calcul and create new instance(s)
  for (const [k, v] of dates) calculNotes(k);

  next();
}
