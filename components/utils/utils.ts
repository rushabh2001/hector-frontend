import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import CryptoJS from "crypto-js";

dayjs.extend(duration);

export const animationCreate = (): void => {
  if (typeof window !== "undefined") {
    (window as any).WOW = require("wowjs");
  }
  new (window as any).WOW.WOW({ live: false }).init();
};

export const formatDate = (date: string | null | undefined, format: string) => {
  return dayjs(date).format(format);
};

export const timeAgo = (time: string) => {
  const date = new Date(time);
  const diff = (new Date().getTime() - date.getTime()) / 1000;
  const dayDiff = Math.floor(diff / 86400);

  if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
    return dayjs(time).format("MMMM DD, YYYY");
  }

  return (
    (dayDiff === 0 &&
      ((diff < 60 && "just now") ||
        (diff < 120 && "1 minute ago") ||
        (diff < 3600 && Math.floor(diff / 60) + " minutes ago") ||
        (diff < 7200 && "1 hour ago") ||
        (diff < 86400 && Math.floor(diff / 3600) + " hours ago"))) ||
    (dayDiff === 1 && "Yesterday") ||
    (dayDiff < 7 && dayDiff + " days ago") ||
    (dayDiff < 31 && Math.ceil(dayDiff / 7) + " weeks ago")
  );
};

export const encryptData = (data: string) => {
  let secretKey = process.env.NEXT_PUBLIC_CRYPTO_KEY;
  let iv = process.env.NEXT_PUBLIC_CRYPTO_IV;

  var parsedKey = CryptoJS.enc.Base64.parse(secretKey);
  var parsedIV = CryptoJS.enc.Base64.parse(iv);

  var encrypted = CryptoJS.AES.encrypt(data, parsedKey, {
    iv: parsedIV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted
    .toString()
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
};

export const decryptedData = (encryptedStr: string) => {
  const restoredEncrypted = encryptedStr.replace(/-/g, "+").replace(/_/g, "/");
  let secretKey = process.env.NEXT_PUBLIC_CRYPTO_KEY;
  let iv = process.env.NEXT_PUBLIC_CRYPTO_IV;

  var parsedKey = CryptoJS.enc.Base64.parse(secretKey);
  var parsedIV = CryptoJS.enc.Base64.parse(iv);

  var decrypted = CryptoJS.AES.decrypt(restoredEncrypted, parsedKey, {
    iv: parsedIV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
};

export const getInitails = (name: string) => {
  const [first_name, last_name] = name.split(" ");

  const firstInitial = first_name?.charAt(0).toUpperCase();
  const lastInitial = last_name?.charAt(0).toUpperCase();

  const initials = `${firstInitial || ""}${lastInitial || ""}`;

  return initials;
};
