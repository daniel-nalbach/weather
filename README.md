# Weather App

This project is a small example web application built with **Node.js** and the
**Express** framework using **Handlebars** for templating. It was generated with
the Express generator and demonstrates how to serve static assets and render
simple views.

## Overview

Dependencies are listed in `package.json` and include Express, the
`express-handlebars` view engine, and `node-sass-middleware` for compiling SCSS.
Running the app is done with:

```bash
npm start
```

which executes `node ./bin/www` to start the server (port 7500 by default).

## Structure

```
app.js            Express app configuration
bin/www           HTTP server startup script
routes/           Route handlers
views/            Handlebars templates
public/           Compiled CSS, JavaScript, images, sample data
sampleData/       Additional sample weather JSON
```

### Application Setup (`app.js`)

- Configures Handlebars (`views/layouts/main.handlebars` as the default layout).
- Registers middleware such as `logger`, `bodyParser`, and `node-sass-middleware`.
- Serves compiled assets from `public/` and sets up the main routes.

### Routes (`routes/`)

`routes/index.js` renders the home page with `res.render('index')`. Another
example route file, `routes/users.js`, is included from the generator template.

### Templates (`views/`)

`views/layouts/main.handlebars` loads jQuery, the sample weather JSON, and the
main client script:

```html
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="../sampleData/denverSample.json"></script>
<script src="../javascripts/main.js"></script>
<link rel="stylesheet" href="/public/stylesheets/style.css">
```

The layout also includes the placeholder for rendered views using `{{{body}}}`.

### Client Code (`public/javascripts/main.js`)

When the page loads, jQuery reads the `Weather` object from the sample JSON and
populates various parts of the DOM. For example, it converts Kelvin to
Fahrenheit and updates the temperature on the page.

### Styles (`public/stylesheets/style.scss`)

SCSS files are compiled at runtime by `node-sass-middleware`. The generated CSS
is served from `public/public/stylesheets/style.css`.

### Sample Data

`public/sampleData/denverSample.json` defines a `window.Weather` object with data
for Denver. This is loaded in the layout to simulate real API data.

## Key Points

- Run the app with `npm start`.
- SCSS is automatically compiled to CSS via middleware.
- Handlebars provides the templating for views.
- Weather data is currently static; enhancing the app to fetch real data from an
  API would be a natural next step.

## Learning More

If you are new to this project, you may want to explore:

1. **Express routing and middleware** – examine `app.js` and files in `routes/`.
2. **Handlebars templating** – check the files under `views/`.
3. **SCSS workflow** – see how `node-sass-middleware` compiles the styles.
4. **Integrating a weather API** – replace the sample JSON with dynamic data.

This README should give you a solid starting point for navigating the codebase
and extending it further.
