function deepCopy(obj) {
  if (typeof obj !== "object") {
    throw Error("O parametro deve ser um objeto.");
  }
  const result = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      result[key] = deepCopy(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

module.exports = deepCopy;
