function processValue(value: unknown): string | number {
  if (typeof value === "string") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  if (typeof value === "number") {
    return value + 21;
  }

  return "Invalid type";
}


console.log(processValue("ankit"));
console.log(processValue(10));       