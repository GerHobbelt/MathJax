# MathJax

A fork of [MathJax](https://github.com/mathjax/MathJax) providing a packed
distribution with support for only TeX input and HTML-CSS output. Further all
fonts and formats are removed except for the
[MathJax TeX](http://docs.mathjax.org/en/latest/font-support.html#mathjax-font-support)
font in the `.woff` and `.otf` formats.

The motivation for these choices was to provide a minimal distribution for use
in [Electron](https://github.com/atom/electron) apps and by extension
[Atom](https://github.com/atom/atom) packages that provides the best single
output MathJax can produce (HTML-CSS) while removing all files purely supporting
legacy browsers.

The result is a lean distribution with less than 300 files and a footprint of
approximately 1.5MB.
