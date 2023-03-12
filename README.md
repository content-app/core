<h1 align="center">content-app/core</h1>

<p align="center"><img src="logo.svg" alt="Logo" width="200" /></p>

<p align="center"><strong>Build your website with contentful.</strong></p>

---

# Install 

`npm i @content-app/core`

# Model

<img src="model.jpg" alt="Content model" />

# API

## createCoreModels(client: ClientAPI, options: Options)

This function creates the content types in your space.

```
import contentful from 'contentful-management';

(async () => { 
const client = contentful.createClient({
    accessToken: 'YOUR_ACCESS_TOKEN',
})

await createCoreModels(client, {
    spaceId: 'YOUR_SPACE_ID',
    environment: 'YOUR_ENVIRONMENT',
});
})();
```


