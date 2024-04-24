export const API_KEY = import.meta.env.VITE_API_KEY
export const BASE_URL = import.meta.env.VITE_BASE_URL

export const value_converter = (value: string) => {
  const c_value = Number(value);
  if (c_value >= 1000000) {
    return Math.floor(c_value / 1000000) + "M";
  } else if (c_value >= 1000) {
    return Math.floor(c_value / 1000) + "K";
  } else {
    return value;
  }
}
