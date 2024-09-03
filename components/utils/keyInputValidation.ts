const regexPatterns: { [key: string]: RegExp } = {
  name: /[^a-zA-Z]/g,
  username: /[^\w]/gi,
  text: /[\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF]/g,
  number: /[^\d]/g,
  phone_number: /[^\d]/g,
};

export const handleInput = (
  e: React.FormEvent<HTMLInputElement>,
  fieldName: string
): string => {
  const regex = regexPatterns[fieldName];
  if (regex) {
    if (fieldName == "number") {
      let value = e.currentTarget.value.replace(/,/g, "");
      value = value.replace(regex, "");
      if (value !== "") {
        value = new Intl.NumberFormat().format(Number(value));
      }
      return (e.currentTarget.value = value);
    }
    return (e.currentTarget.value = e.currentTarget.value.replace(regex, ""));
  }

  return e.currentTarget.value;
};
