export const blob2base64 = (blob: Blob, cb: (data: any) => void) => {
  const fr = new FileReader();
  fr.onload = (e) => {
    cb(e.target?.result);
  };
  fr.onerror = () => {
    cb(new Error('blob2convert: can not convert'));
  };
  fr.readAsDataURL(blob);
};