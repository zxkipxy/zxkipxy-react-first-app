import qs from "qs";
import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (param) => {
  let result = { ...param };
  for (let key in result) {
    if (param.hasOwnProperty(key)) {
      if (isFalsy(result[key])) {
        delete result[key];
      }
    }
  }
  return qs.stringify(result);
};

export const debounce = (callback) => {
  let timer;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      callback();
    }, 3000);
  };
};

// 自定义hook：
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};
