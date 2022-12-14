export const getDateHour = (value: any) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getSeconds()).padStart(2, "0");
  return `${yyyy}-${MM}-${dd}    ${hh}:${mm} `;
};
