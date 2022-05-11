let response = function(query) {
  if (query.hasOwnProperty("data")) {
    return response(query.data);
  }
  if (Array.isArray(query)) {
    return response(query[0]);
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
    return query.replace(/\{/g, (c, i, text) => text.indexOf(c) === i ? c : '{data {attributes {').replace(/[}](?=.*[}])/gs, '}}}');
}

module.exports = {response: response, query: query};