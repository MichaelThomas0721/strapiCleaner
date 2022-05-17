let response = function(query) {
  if (query.hasOwnProperty("data")) {
    return response(query.data);
  }
  if (Array.isArray(query)) {
    let obj = [];
    for (let i = 0; i < query.length; i++) {
      obj.push(response(query[i]));
    }
    return obj
  }
  if (query.hasOwnProperty("attributes")) {
    return response(query.attributes);
  }

  let obj = {};
  for (const prop in query) {
    if (!(typeof query[prop] == "object")) {
      obj[prop] = query[prop];
    } else {
      obj[prop] = response(query[prop]);
    }
  }
  return obj;
}

let query = function(query) {
  let splitted = query.split(/\{$/gm) //Split the end '{' into an array}
  const splitter = splitted.slice(0,2).join('{'); //Join the first two elements of the array with '{' because it was removed
  splitted = splitted.slice(2); //Remove the first two elements of the array
  splitted.unshift(splitter); //Add the first two elements back to the array
  splitted = splitted.join('{data {attributes {').replace(/(\})$(?=.*[}])/gms, '}}}').replace(/(\},)$(?=.*[},])/gms, '}}},'); //Join the array back together an add 'data {attributes {' at join points and replace '}' at the end of lines with '}}}' (closing tags)
  return splitted
}

module.exports = {response: response, query: query};