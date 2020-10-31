export const sleep = (time: number) => new Promise(acc => setTimeout(acc, time));

export const lowerCaseRegex = /(?=.*[a-z])/;
export const upperCaseRegex = /(?=.*[A-Z])/;
export const numericRegex = /(?=.*[0-9])/;