# strapiCleaner

Used to remove the data and attributes property from strapi queries and responses.

To use import the library and use the .response(query) to clean a strapi response and .query(query) to clean a strapi query before sending the query.

The response function will return an object that is the same as the object you passed except without the data and attributes properties.

The query function will return a string that is the same as the query you passed except with data and attributes properties added.
If you use the query function DO NOT include any data or attribute properties or the query will be invalid and strapi will return
an error. The query passed should be exactly the same as a regular strapi query just without the data and attributes properties.