function convertDataType(str) {
   // values wrapped in double or single quotes will always returned as strings
   var strRegex = /(^".*"$)|(^'.*'$)/;
   if (str === "") return "";
   if (str === "null") return null;
   if (str === "undefined") return undefined;
   if (str === "true") return true;
   if (str === "false") return false;
   if (strRegex.test(str)) return trimStr(str);
   if (str == Number(str)) return Number(str); // using type coercion
   if (isArray(jsonParse(str))) return JSON.parse(str);
   if (isObject(jsonParse(str))) return JSON.parse(str);
   return str;
}

function jsonParse(str) {
   // https://stackoverflow.com/a/3710226/6305196
   // if this is a valid JSON object, parse it
   // else, just return the string
   try {
      JSON.parse(str);
   } catch (err) {
      return str;
   }
   return JSON.parse(str);
}

function trimStr(str) {
   // remove single or double quotes
   var slicedStr = str.slice(1, -1);
   return slicedStr;
}

function isObject(value) {
   // https://webbjocke.com/javascript-check-data-types/#javascript-object
   return value && typeof value === "object" && value.constructor === Object;
}

function isArray(value) {
   // https://webbjocke.com/javascript-check-data-types/#javascript-array
   return value && typeof value === "object" && value.constructor === Array;
}
