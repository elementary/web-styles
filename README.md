# web-styles

WIP stylesheet(s) for elementary web projects. Not currently used by any projects, as it's more a proof-of-concept for now.

## Usage

To use the elementary web styles in your project, simply include this in your `<head>`:

```html
<link rel="stylesheet" type="text/css" media="all" href="https://styles.elementary.io/main.css" />
```

See `_sass/_colors.scss` for public color variables. See "Open questions" below for thoughts on versioning, variables, etc.

## Open questions

Things we should think through:

- [ ] Versioning? Could have `main.css` always be the latest, and then "version" snapshots as `1.0.0.css` or something, that way sites could have some stability guarantees if they want/need them.
- [ ] Public vs. private variables: I think this will be fine and end up being similar to the distinction between private and public in the greenfield GTK stylesheet. Sass vars are private, CSS vars are public.
- [ ] Is this sane? I _think_ it makes sense as we are tending to spin up mini-sites for things, oftentimes using Jekyll. We really want to keep the development experience there as straightforward as possible (avoiding frameworks and package managers and that whole mess). So just keep common styles as their own project… it should work, right?

## Building

You'll need the following dependencies:
```
ruby-full
build-essential
zlib1g-dev
```

We recommend installing gems to a (hidden) directory in your home folder:
```bash
echo '' >> ~/.bashrc
echo '# Install Ruby Gems to ~/.gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/.gems"' >> ~/.bashrc
echo 'export PATH="$HOME/.gems/bin:$PATH"' >> ~/.bashrc
echo '' >> ~/.bashrc
source ~/.bashrc
```

Install jekyll and bundler:
```bash
gem install jekyll bundler
```

Install gems:
```bash
bundle install
```

Build and serve locally with:
```bash
bundle exec jekyll serve --host 0.0.0.0
```

The site should now be available at http://0.0.0.0:4000/ on your local machine, and your local machine's IP address on your network—great for testing on mobile OSes.
