<h1 align="center"> Cleansify </h1>

<hr/>

- Replace special characters within a string with a given character
- Convert a string to kebab case (i.e. "Winter Weather" becomes "winter-weather")
- Set a maximum length for a converted string

<h3> Installation </h3>

```shell
$ npm i cleansify
```

<h3> Usage </h3>

```node
const { cleansify } = require('cleansify');

console.log(cleansify('winter_(weather)')); // prints "winter__weather_"
console.log(cleansify('winter_(weather)', { maxLength: 8 })); // prints "winter__"
console.log(cleansify('winter_(weather)', { replacement: '-' })); // prints "winter--weather-"
console.log(cleansify('winter_(weather)', { replacement: '-', case: 'upper' })); // prints "WINTER--WEATHER-"
```

Option | Default | Description
--- | --- | ---
maxLength | `100` | The maximum length of the returned clean string
replacement | `"null"` | The value to replace the special characters with.
case | `"default"` | The case of the string returned (i.e. Uppercase, Lowercase). Allowed values: `"lower"`, `"upper"`, `"kebab"`, `"default"`. `"default"` will return the string as is without changing its case. `"kebab"` will replace special characters and spaces with a `"-"` (this will ignore `"replacement"` configuration).

<h3>Contributing</h3>
Keep it simple. Keep it minimal. Don't put every single feature just because you can.

<h3>Authors</h3>
<ul>
  <li>Travis Knight</li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License
