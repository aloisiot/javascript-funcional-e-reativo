export default function deepCopy(obj) {
  if (typeof obj !== "object") return obj;
  const copy = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      copy[key] = deepCopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
}
