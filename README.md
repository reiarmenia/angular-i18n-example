# Ng18nExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

This application is currentlty deployed at [https://i18n-poc.web.app/en-US/](https://i18n-poc.web.app/en-US/).

## Internationalization With Angular & @angular/localize

@angular/localize is a first party internationalization system for providing easy to implement translations in .xlf translation standard. In order to properly use it, you must keep in mind the following patterns.

### 1.) Tagging elements for translation.

All translated text must be tagged with the i18n html attribute.

The attribute allows you to set a translation code and a context message. Separated by the `"|"` symbol. Any matching attribute will use the same translation across the entire application.

Example:
```html
<h1 i18n="siteWelcome | The welcome message for the landing page.">Welcome to the website!</h1>

```


### 2.) Language Switching

In this application there is a build in lanaguage switching component, which can be used to easily create a reusable pattern. Any language you would like to include in your application must be defined in your this application.

```ts
  languages: {value: string, display: string}[] = [
    {value: 'en-US', display: 'English'},
    {value: 'fr', display: 'Français'},
    {value: 'ja', display: '日本語'}
  ];
```
It is important to note that:
 - The value corrosponds directly to the language's locale code.
 - The display value is in the language that you will switch to.



### 3. Persisting Data through laguage transfers.

The nature of this pattern means we have to explicitly mark application data to persist throughout the language switch. This can be done in many ways, two ways to do this are:

  - Explitly Saving any data in browser session storage before navigating and loading it back in on arrival.
  - Using authentication and api calls to load any necesssary data in on page load.

This Application shows an example of using the Browser's Local Storage to accomplish this, you can find this example in the ```data.service.ts``` file.


## Extra Notes for Build Managers or Repository Owners.

The build process for internationalize applications is a bit different than normal angular applications. For help creating build configurations, please look at the ```angular.json``` file, or go to  [https://angular.io/guide/i18n#merge-translations-into-the-app](https://angular.io/guide/i18n#merge-translations-into-the-app)
