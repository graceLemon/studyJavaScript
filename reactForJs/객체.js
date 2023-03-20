let patient = {
  key: value,
  key: value,
  key: value,
};

console.log(patient);
console.log(patient.key);
console.log(patient["key"]);

patient.key = "다른값";
patient[key] = "다른값";

console.log(patient); //다른값

let patientList = [{}, {}, {}];

console.log(patientList);
console.log("첫번째?", patientList[0]);
console.log("첫번째의 key?", patientList[0].key);
