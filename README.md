<div align="center">
  <h1 align="center"><center>web-styles</center></h1>
  <h3 align="center"><center>Standard elementary web stylesheets</center></h3>
  <br>
  <br>
</div>

<p align="center">
  <img src="https://github.com/elementary/web-styles/workflows/CI/badge.svg" alt="CI">
</p>

---

## Usage

To use the elementary web styles in your project, simply include this in your `<head>`:

```html
<link rel="stylesheet" type="text/css" media="all" href="https://styles.elementary.io/main.css" />
```

See `styles/colors.css` for all the colors available to you.

## Open questions

Things we should think through:

- [ ] Versioning? Could have `main.css` always be the latest, and then "version"
  snapshots as `1.0.0.css` or something, that way sites could have some
  stability guarantees if they want/need them.

- [ ] Is this sane? I _think_ it makes sense as we are tending to spin up
  mini-sites for things, oftentimes using Jekyll. We really want to keep the
  development experience there as straightforward as possible (avoiding
  frameworks and package managers and that whole mess). So just keep common
  styles as their own project… it should work, right?

## Building

You'll need to install Node.JS to build this. If you are running elementary OS,
or another Ubuntu derivative, you can simply run:

```bash
sudo apt install nodejs
```

Then install the `npm` packages by running:

```bash
npm i
```

And lastly, start the project with:

```bash
npm start
```

The site should now be available at http://0.0.0.0:3001/ on your local machine,
and your local machine's IP address on your network—great for testing on mobile
OSes.
