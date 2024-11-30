# Swiss Jekyll Theme

[![Gem Version](https://badge.fury.io/rb/jekyll-swiss.svg)](https://badge.fury.io/rb/jekyll-swiss)

Swiss is a bold Jekyll theme inspired by Swiss design and the works of Massimo Vignelli. This theme lends itself well to sites heavy on written content.

Forked from https://github.com/broccolini/swiss

### Changes from Original
- Added green theme.
- Added LinkedIn social.
- Allowed multiple socials.
- Tweaked homepage style.

## Installation

1. Add `remote_theme: willlumm/swiss` to `_config.yml`.

## Development

### Install Jekyll
https://jekyllrb.com/docs/installation/windows/
1. Download `Ruby+Devkit` from https://rubyinstaller.org/downloads/ and install.
1. Run `ridk install` on last step of installation and select `MSYS2 and MINGW development toolchain`.
1. Run `gem install jekyll bundler`.

### Build Site Locally
https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll
1. Run `bundle install`.
1. Run `bundle exec jekyll serve`.

When your theme is released, only the files in `_layouts`, `_includes`, and `_sass` tracked with Git will be released.

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
