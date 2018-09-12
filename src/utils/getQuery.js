function getQueryString(name) {
  if (!location.href.includes('?')) return null;
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
  const r = window.location.href.split('?')[1].match(reg);
  if (r != null) return unescape(r[2]);
  return null; 
}

export default getQueryString;