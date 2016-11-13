## Navbar
A simple but extendable Navbar component.

### Example

```js
const links = [
  {
    url: '/',
    name: 'Home',
  },
];
const logo = 'https://github.com/RyanCCollins/cdn/blob/master/misc/logo_placeholder.png?raw=true';
<Navbar links={links} logo={logo} isResponsive />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **links**    | Array   |        | An array of objects containing a name and url key.
| **logo**    | String   |        | A string to a url to show as the logo component.
| **isResponsive**    | Boolean   | True        | Whether the navbar should show a mobile menu when responsive.

### Other Information
Please ensure that you pass in at least one link with the proper keys and a logo string.
