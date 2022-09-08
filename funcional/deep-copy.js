export default function deepCopy(obj) {
  if (typeof obj !== "object") return obj;
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
