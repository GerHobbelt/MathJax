/*
 *  ../../../..//extensions/TeX/mediawiki-texvc.js
 *
 *  Copyright (c) 2009-2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/extensions/TeX/mediawiki-texvc.js
 *  
 *  Implements macros used by mediawiki with their texvc preprocessor.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2018 The MathJax Consortium
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * From https://en.wikipedia.org/wiki/User:Nageh/mathJax/config/TeX-AMS-texvc_HTML.js
 */
/* global MathJax:true */

MathJax.Extension["TeX/mediawiki-texvc"] = {
  version: "2.7.3"
};

MathJax.Hub.Register.StartupHook("TeX Jax Ready", function () {

  var MML = MathJax.ElementJax.mml;

  // MathJax.Hub.Insert(MathJax.InputJax.TeX.Definitions,{
  MathJax.InputJax.TeX.Definitions.Add({
    mathchar0mi: {
      // Lowercase Greek letters
      coppa:        '03D9',  // archaic koppa
      koppa:        '03DF',
      stigma:       '03DB',
      thetasym:     '03B8',  // theta

      // Ord symbols
      AA:           ['00C5',{mathvariant: MML.VARIANT.NORMAL}],  // Å, used for Angstrom
      alef:         ['2135',{mathvariant: MML.VARIANT.NORMAL}],  // aleph
      alefsym:      ['2135',{mathvariant: MML.VARIANT.NORMAL}],  // aleph
      ang:          ['2220',{mathvariant: MML.VARIANT.NORMAL}],  // angle
      C:            ['0043',{mathvariant: MML.VARIANT.DOUBLESTRUCK}],
      clubs:        ['2663',{mathvariant: MML.VARIANT.NORMAL}],  // clubsuit
      cnums:        ['0043',{mathvariant: MML.VARIANT.DOUBLESTRUCK}],
      Complex:      ['0043',{mathvariant: MML.VARIANT.DOUBLESTRUCK}],
      diamonds:     ['2662',{mathvariant: MML.VARIANT.NORMAL}],  // diamondsuit
      empty:        ['2205',{mathvariant: MML.VARIANT.NORMAL}],  // emptyset
      exist:        ['2203',{mathvariant: MML.VARIANT.NORMAL}],  // exists
      H:            ['210D',{mathvariant: MML.VARIANT.DOUBLESTRUCK}],
      hearts:       ['2661',{mathvariant: MML.VARIANT.NORMAL}],  // heartsuit
      infin:        ['221E',{mathvariant: MML.VARIANT.NORMAL}],  // infty
      N:            ['004E',{mathvariant: MML.VARIANT.DOUBLESTRUCK}],
      natnums:      ['004E',{mathvariant: MML.VARIANT.DOUBLESTRUCK}],
      O:            ['2205',{mathvariant: MML.VARIANT.NORMAL}],  // emptyset (but should probably be Swedish O)
      P:            '00B6',
      part:         ['2202',{mathvariant: MML.VARIANT.NORMAL}],  // partial
      Q:            ['0051',{mathvariant: MML.VARIANT.DOUBLESTRUCK}],
      R:            ['0052',{mathvariant: MML.VARIANT.DOUBLESTRUCK}],
      real:         ['211C',{mathvariant: MML.VARIANT.NORMAL}],  // Re
      reals:        ['0052',{mathvariant: MML.VARIANT.DOUBLESTRUCK}],
      Reals:        ['0052',{mathvariant: MML.VARIANT.DOUBLESTRUCK}],
      sect:         '00A7',  // S
      spades:       ['2660',{mathvariant: MML.VARIANT.NORMAL}],  // spadesuit
      textvisiblespace: '2423',
      weierp:       ['2118',{mathvariant: MML.VARIANT.NORMAL}],  // wp
      Z:            ['005A',{mathvariant: MML.VARIANT.DOUBLESTRUCK}],
    },

    mathchar0mo: {
      // Binary operators
      and:          '2227',  // land
      bull:         '2219',  // bullet
      or:           '2228',  // lor
      plusmn:       '00B1',  // pm
      sdot:         '22C5',  // cdot

      // Binary relations
      isin:         '2208',  // in
      sub:          '2282',  // subset
      sube:         '2286',  // subseteq
      sup:          '2283',  // supset
      supe:         '2287',  // supseteq

      gets:               '2190',  // leftarrow
      hAar:               '21D4',  // Leftrightarrow [sic]
      harr:               '2194',  // leftrightarrow
      hArr:               '21D4',  // Leftrightarrow
      Harr:               '21D4',  // Leftrightarrow
      larr:               '2190',  // leftarrow
      lArr:               '21D0',  // Leftarrow
      Larr:               '21D0',  // Leftarrow
      lrarr:              '2194',  // leftrightarrow
      Lrarr:              '21D4',  // Leftrightarrow
      lrArr:              '21D4',  // Leftrightarrow
      rarr:               '2192',  // rightarrow
      rArr:               '21D2',  // Rightarrow
      Rarr:               '21D2',  // Rightarrow

      // big ops
      oiint:              ['222F',{texClass: MML.TEXCLASS.OP}],  // not part of texvc but nice to have
      oiiint:             ['2230',{texClass: MML.TEXCLASS.OP}],
    },

    mathchar7: {
      // Uppercase Greek letters
      Alpha:        '0391',
      Beta:         '0392',
      Chi:          '03A7',
      Epsilon:      '0395',
      Eta:          '0397',
      Iota:         '0399',
      Kappa:        '039A',
      Mu:           '039C',
      Nu:           '039D',
      Omicron:      '039F',
      Rho:          '03A1',
      Tau:          '03A4',
      Zeta:         '0396',

      Coppa:        '03D8',  // archaic Koppa
      Koppa:        '03DE',
      Stigma:       '03DA',
    },

    delimiter: {
      '\\darr':           '2193',  // downarrow
      '\\Darr':           '21D3',  // Downarrow
      '\\dArr':           '21D3',  // Downarrow
      '\\lang':           '27E8',  // langle
      '\\rang':           '27E9',  // rangle
      '\\uarr':           '2191',  // uparrow
      '\\Uarr':           '21D1',  // Uparrow
      '\\uArr':           '21D1',  // Uparrow
    },

    macros: {
      AA: ["Macro", "\u00c5"],
      alef: ["Macro", "\\aleph"],
      alefsym: ["Macro", "\\aleph"],
      Alpha: ["Macro", "\\mathrm{A}"],
      and: ["Macro", "\\land"],
      ang: ["Macro", "\\angle"],

      arccot:             'NamedFn',
      arccsc:             'NamedFn',
      arcsec:             'NamedFn',

      Bbb: ["Macro", "\\mathbb"],
      Beta: ["Macro", "\\mathrm{B}"],

      bold:               ['Macro','\\mathbf{#1}',1],  // boldsymbol

      bull: ["Macro", "\\bullet"],
      C: ["Macro", "\\mathbb{C}"],
      Chi: ["Macro", "\\mathrm{X}"],
      clubs: ["Macro", "\\clubsuit"],
      cnums: ["Macro", "\\mathbb{C}"],
      Complex: ["Macro", "\\mathbb{C}"],
      coppa: ["Macro", "\u03D9"],
      Coppa: ["Macro", "\u03D8"],
      Dagger: ["Macro", "\\ddagger"],
      Digamma: ["Macro", "\u03DC"],
      darr: ["Macro", "\\downarrow"],
      dArr: ["Macro", "\\Downarrow"],
      Darr: ["Macro", "\\Downarrow"],
      dashint: ["Macro", "\\unicodeInt{x2A0D}"],
      ddashint: ["Macro", "\\unicodeInt{x2A0E}"],
      diamonds: ["Macro", "\\diamondsuit"],
			dim: ["Macro", "\\mmlToken{mo}{dim}"],
      empty: ["Macro", "\\emptyset"],
      Epsilon: ["Macro", "\\mathrm{E}"],
      Eta: ["Macro", "\\mathrm{H}"],
      euro: ["Macro", "\u20AC"],
      exist: ["Macro", "\\exists"],
      geneuro: ["Macro", "\u20AC"],
      geneuronarrow: ["Macro", "\u20AC"],
      geneurowide: ["Macro", "\u20AC"],
      H: ["Macro", "\\mathbb{H}"],
      hAar: ["Macro", "\\Leftrightarrow"],
      harr: ["Macro", "\\leftrightarrow"],
      Harr: ["Macro", "\\Leftrightarrow"],
      hearts: ["Macro", "\\heartsuit"],

      href:               'NamedFn', // disable dangerous command

      image:              ['Macro','\\Im'],

      infin: ["Macro", "\\infty"],
      Iota: ["Macro", "\\mathrm{I}"],
      isin: ["Macro", "\\in"],
      Kappa: ["Macro", "\\mathrm{K}"],
      koppa: ["Macro", "\u03DF"],
      Koppa: ["Macro", "\u03DE"],
      lang: ["Macro", "\\langle"],
      larr: ["Macro", "\\leftarrow"],
      Larr: ["Macro", "\\Leftarrow"],
      lArr: ["Macro", "\\Leftarrow"],
      lrarr: ["Macro", "\\leftrightarrow"],
      Lrarr: ["Macro", "\\Leftrightarrow"],
      lrArr: ["Macro", "\\Leftrightarrow"],
      Mu: ["Macro", "\\mathrm{M}"],
      N: ["Macro", "\\mathbb{N}"],
      natnums: ["Macro", "\\mathbb{N}"],
      Nu: ["Macro", "\\mathrm{N}"],
      O: ["Macro", "\\emptyset"],
      oint: ["Macro", "\\unicodeInt{x222E}"],
      oiint: ["Macro", "\\unicodeInt{x222F}"],
      oiiint: ["Macro", "\\unicodeInt{x2230}"],
      ointctrclockwise: ["Macro", "\\unicodeInt{x2233}"],
      officialeuro: ["Macro", "\u20AC"],
      Omicron: ["Macro", "\\mathrm{O}"],
      or: ["Macro", "\\lor"],
      P: ["Macro", "\u00B6"],

      pagecolor:          ['Macro','',1],  // ignore \pagecolor{}

      part: ["Macro", "\\partial"],
      plusmn: ["Macro", "\\pm"],
      Q: ["Macro", "\\mathbb{Q}"],
      R: ["Macro", "\\mathbb{R}"],
      rang: ["Macro", "\\rangle"],
      rarr: ["Macro", "\\rightarrow"],
      Rarr: ["Macro", "\\Rightarrow"],
      rArr: ["Macro", "\\Rightarrow"],
      real: ["Macro", "\\Re"],
      reals: ["Macro", "\\mathbb{R}"],
      Reals: ["Macro", "\\mathbb{R}"],
      Rho: ["Macro", "\\mathrm{P}"],
      sdot: ["Macro", "\\cdot"],
      sampi: ["Macro", "\u03E1"],
      Sampi: ["Macro", "\u03E0"],
      sect: ["Macro", "\\S"],

      sgn:                'NamedFn',

      spades: ["Macro", "\\spadesuit"],
      stigma: ["Macro", "\u03DB"],
      Stigma: ["Macro", "\u03DA"],

      style:              'NamedFn', // disable dangerous command

      sub: ["Macro", "\\subset"],
      sube: ["Macro", "\\subseteq"],
      supe: ["Macro", "\\supseteq"],
      Tau: ["Macro", "\\mathrm{T}"],
      textvisiblespace: ["Macro", "\u2423"],
      thetasym: ["Macro", "\\vartheta"],
      uarr: ["Macro", "\\uparrow"],
      uArr: ["Macro", "\\Uparrow"],
      Uarr: ["Macro", "\\Uparrow"],
      unicodeInt: ["Macro", "\\mathop{\\vcenter{\\mathchoice{\\huge\\unicode{#1}\\,}{\\unicode{#1}}{\\unicode{#1}}{\\unicode{#1}}}\\,}\\nolimits", 1],
      varcoppa: ["Macro", "\u03D9"],
      varstigma: ["Macro", "\u03DB"],
      varointclockwise: ["Macro", "\\unicodeInt{x2232}"],

      vline:              ['Macro','\\smash{\\large\\lvert}',0],

      weierp: ["Macro", "\\wp"],
      Z: ["Macro", "\\mathbb{Z}"],
      Zeta: ["Macro", "\\mathrm{Z}"],
    }
  });
});

MathJax.Hub.Startup.signal.Post('TeX MediaWiki TeXVC Ready');

MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/mediawiki-texvc.js");

