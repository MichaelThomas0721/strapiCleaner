# strapiCleaner

Used to remove the data and attributes property from strapi queries and responses.

To use import the library and use the .response(query) to clean a strapi response and .query(query) to clean a strapi query before sending the query.

The response function will return an object that is the same as the object you passed except without the data and attributes properties.

The query function will return a string that is the same as the query you passed except with data and attributes properties added.
If you use the query function DO NOT include any data or attribute properties or the query will be invalid and strapi will return
an error. The query passed should be exactly the same as a regular strapi query just without the data and attributes properties.

## Installation

```bash
npm i strapi-cleaner
```

## Usage

```js
import strapiCleaner from "strapi-cleaner";

const query = `
    {
        team {
            name
            location {
                city
                country
            }
        }
    }
`;

const strapiQuery = strapi - cleaner.query(query);

/* returns :
{
        team {data {attributes {
            name
            location {data {attributes {
                city
                country
            }}}
        }}}
    }
*/

const reponse = {
    "data": [
        {
            "attributes": {
                "name": "kraken",
                "location": {
                    "data": {
                        "attributes": {
                            "city": "Seattle",
                            "country": "US"
                        }
                    }
                }
            }
        }
    ]
}
// returns { name: 'kraken', location: { city: 'Seattle', country: 'US' } }
```

## Contributing
If you would like to see this package improved or if there are any bugs feel free to message me!

## License
[MIT](https://choosealicense.com/licenses/mit/)
