export const classRegex = /^[א-ת]{1}\d{1,2}$/;
export const idRegex = /^\d{9}$/;


export function normalizeClassName(value: string): string {
  return value
    .replace(/\s+/g, '')
    .replace(/['׳]/g, '')
    .toUpperCase();
}


export function validateClass(value: string): string | null {
  if (!value) return "שדה חובה";

  const normalized = normalizeClassName(value);

  if (!classRegex.test(normalized)) {
    return "פורמט כיתה לא תקין (לדוגמה: ו1, ז3)";
  }

  return null;
}

export function validateId(id: string): string | null {
  if (!id) return "שדה חובה";

  if (!idRegex.test(id)) {
    return "מספר זהות חייב להכיל 9 ספרות";
  }

  return null;
}

export function validateRequired(value: string): string | null {
  if (!value) return "שדה חובה";
  return null;
}