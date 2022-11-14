const CalculateAge = (age) => {
  age = age.replace("/", "-");
  let new_age = new Date(age);
  let month_diff = Date.now() - new_age.getTime();
  let age_temp = new Date(month_diff);
  let year = age_temp.getUTCFullYear();
  let final_age = Math.abs(year - 1970);
  return final_age;
};

export default CalculateAge;
