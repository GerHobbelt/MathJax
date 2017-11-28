/*
 *  /MathJax/config/TeX-AMS_HTML-full.js
 *  
 *  Copyright (c) 2010-2017 The MathJax Consortium
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Ajax.Preloading(
  "[MathJax]/jax/input/TeX/config.js",
  "[MathJax]/jax/output/HTML-CSS/config.js",
  "[MathJax]/jax/output/PreviewHTML/config.js",
  "[MathJax]/extensions/tex2jax.js",
  "[MathJax]/extensions/MathEvents.js",
  "[MathJax]/extensions/MathZoom.js",
  "[MathJax]/extensions/MathMenu.js",
  "[MathJax]/jax/element/mml/jax.js",
  "[MathJax]/extensions/toMathML.js",
  "[MathJax]/extensions/TeX/noErrors.js",
  "[MathJax]/extensions/TeX/noUndefined.js",
  "[MathJax]/jax/input/TeX/jax.js",
  "[MathJax]/extensions/TeX/AMSmath.js",
  "[MathJax]/extensions/TeX/AMSsymbols.js",
  "[MathJax]/jax/output/HTML-CSS/jax.js",
  "[MathJax]/jax/output/HTML-CSS/autoload/mtable.js",
  "[MathJax]/jax/output/PreviewHTML/jax.js",
  "[MathJax]/extensions/fast-preview.js",
  "[MathJax]/extensions/AssistiveMML.js",
  "[MathJax]/extensions/a11y/accessibility-menu.js"
);

MathJax.Hub.Config({
  extensions: ['[a11y]/accessibility-menu.js']
});

/*************************************************************
 *
 *  MathJax/jax/input/TeX/config.js
 *
 *  Initializes the TeX InputJax (the main definition is in
 *  MathJax/jax/input/TeX/jax.js, which is loaded when needed).
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2017 The MathJax Consortium
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

MathJax.InputJax.TeX = MathJax.InputJax({
  id: "TeX",
  version: "2.7.2",
  directory: MathJax.InputJax.directory + "/TeX",
  extensionDir: MathJax.InputJax.extensionDir + "/TeX",
  
  config: {
    TagSide:       "right",
    TagIndent:     "0.8em",
    MultLineWidth: "85%",
    
    equationNumbers: {
      autoNumber: "none",  // "AMS" for standard AMS environment numbering,
                           //  or "all" to number all displayed equations
      formatNumber: function (n) {return n},                // format for equation number n
      formatTag:    function (n) {return '('+n+')'},        // format for \tag and \eqref
      formatID:     function (n) {return 'mjx-eqn-'+String(n).replace(/[:"'<>&]/g,"")},
                                                            // element ID to use for reference
      formatURL:    function (id,base) {return base+'#'+escape(id)},
                                                            // URL to use for references
      useLabelIds:  true,    // make element ID's use \label name rather than equation number
      //outputLabels: true,
    }
  },
  
  resetEquationNumbers: function () {}  // filled in by AMSmath extension
});
MathJax.InputJax.TeX.Register("math/tex");

MathJax.InputJax.TeX.loadComplete("config.js");

/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/config.js
 *  
 *  Initializes the HTML-CCS OutputJax  (the main definition is in
 *  MathJax/jax/input/HTML-CSS/jax.js, which is loaded when needed).
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2017 The MathJax Consortium
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

MathJax.OutputJax["HTML-CSS"] = MathJax.OutputJax({
  id: "HTML-CSS",
  version: "2.7.2",
  directory: MathJax.OutputJax.directory + "/HTML-CSS",
  extensionDir: MathJax.OutputJax.extensionDir + "/HTML-CSS",
  autoloadDir: MathJax.OutputJax.directory + "/HTML-CSS/autoload",
  fontDir: MathJax.OutputJax.directory + "/HTML-CSS/fonts", // font name added later
  webfontDir: MathJax.OutputJax.fontDir + "/HTML-CSS",      // font name added later
  
  config: {
    noReflows: true,                // true uses internal measurements to avoid browser reflows
    matchFontHeight: true,          // try to match math font height to surrounding font?
    scale: 100, minScaleAdjust: 50, // global math scaling factor, and minimum adjusted scale factor
    availableFonts: ["STIX","TeX"], // list of local fonts to check for
    preferredFont: "TeX",           // preferred local font (TeX or STIX)
    webFont: "TeX",                 // web-based font to use when no local fonts found (TeX is only choice)
    imageFont: "TeX",               // font to use for image fallback mode (TeX is only choice)
    undefinedFamily: "STIXGeneral,'Arial Unicode MS',serif", // fonts to use for unknown unicode characters
    mtextFontInherit: false,        // to make <mtext> be in page font rather than MathJax font

    EqnChunk: (MathJax.Hub.Browser.isMobile ? 10: 50),
                                    // number of equations to process before showing them
    EqnChunkFactor: 1.5,            // chunk size is multiplied by this after each chunk
    EqnChunkDelay: 100,             // milliseconds to delay between chunks (to let browser
                                    //   respond to other events)

    linebreaks: {
      automatic: false,   // when false, only process linebreak="newline",
                          // when true, insert line breaks automatically in long expressions.

      width: "container" // maximum width of a line for automatic line breaks (e.g. "30em").
                         // use "container" to compute size from containing element,
                         // use "nn% container" for a portion of the container,
                         // use "nn%" for a portion of the window size
    },
    
    styles: {
      ".MathJax_Display": {
        "text-align": "center",
        margin:       "1em 0em"
      },
      
      ".MathJax .merror": {
        "background-color": "#FFFF88",
        color:   "#CC0000",
        border:  "1px solid #CC0000",
        padding: "1px 3px",
        "font-style": "normal",
        "font-size":  "90%"
      },
      
      //
      //  For mtextFontInherit version of \texttt{}
      //
      ".MathJax .MJX-monospace": {
        "font-family": "monospace"
      },
      
      //
      //  For mtextFontInherit version of \textsf{}
      //
      ".MathJax .MJX-sans-serif": {
        "font-family": "sans-serif"
      },
      
      "#MathJax_Tooltip": {
        "background-color": "InfoBackground", color: "InfoText",
        border: "1px solid black",
        "box-shadow": "2px 2px 5px #AAAAAA",         // Opera 10.5
        "-webkit-box-shadow": "2px 2px 5px #AAAAAA", // Safari 3 and Chrome
        "-moz-box-shadow": "2px 2px 5px #AAAAAA",    // Forefox 3.5
        "-khtml-box-shadow": "2px 2px 5px #AAAAAA",  // Konqueror
        filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')", // IE
        padding: "3px 4px",
        "z-index": 401
      }
    }
    
  }
});
if (MathJax.Hub.Browser.isMSIE && document.documentMode >= 9)
  {delete MathJax.OutputJax["HTML-CSS"].config.styles["#MathJax_Tooltip"].filter}

if (!MathJax.Hub.config.delayJaxRegistration)
  {MathJax.OutputJax["HTML-CSS"].Register("jax/mml")}

MathJax.Hub.Register.StartupHook("End Config",[function (HUB,HTMLCSS) {
  var CONFIG = HUB.Insert({

    //
    //  The minimum versions that HTML-CSS supports
    //
    minBrowserVersion: {
      Firefox: 3.0,
      Opera: 9.52,
      MSIE: 6.0,
      Chrome: 0.3,
      Safari: 2.0,
      Konqueror: 4.0
    },
    
    //
    //  For unsupported browsers, put back these delimiters for the preview
    //
    inlineMathDelimiters:  ['$','$'],    // or ["",""] or ["\\(","\\)"]
    displayMathDelimiters: ['$$','$$'],  // or ["",""] or ["\\[","\\]"]
    //
    //  For displayed math, insert <BR> for \n?
    //
    multilineDisplay: true,

    //
    //  The function to call to display the math for unsupported browsers
    //
    minBrowserTranslate: function (script) {
      var MJ = HUB.getJaxFor(script), text = ["[Math]"], delim;
      var span = document.createElement("span",{className: "MathJax_Preview"});
      if (MJ.inputJax === "TeX") {
        if (MJ.root.Get("displaystyle")) {
          delim = CONFIG.displayMathDelimiters;
          text = [delim[0]+MJ.originalText+delim[1]];
          if (CONFIG.multilineDisplay) text = text[0].split(/\n/);
        } else {
          delim = CONFIG.inlineMathDelimiters;
          text = [delim[0]+MJ.originalText.replace(/^\s+/,"").replace(/\s+$/,"")+delim[1]];
        }
      }
      for (var i = 0, m = text.length; i < m; i++) {
        span.appendChild(document.createTextNode(text[i]));
        if (i < m-1) {span.appendChild(document.createElement("br"))}
      }
      script.parentNode.insertBefore(span,script);
    }

  },(HUB.config["HTML-CSS"]||{}));

  if (HUB.Browser.version !== "0.0" &&
     !HUB.Browser.versionAtLeast(CONFIG.minBrowserVersion[HUB.Browser]||0.0)) {
       HTMLCSS.Translate = CONFIG.minBrowserTranslate;
       HUB.Config({showProcessingMessages: false});
       MathJax.Message.Set(["MathJaxNotSupported",
                            "Your browser does not support MathJax"],null,4000);
       HUB.Startup.signal.Post("MathJax not supported");
  }

},MathJax.Hub,MathJax.OutputJax["HTML-CSS"]]);


MathJax.OutputJax["HTML-CSS"].loadComplete("config.js");

/*************************************************************
 *
 *  MathJax/jax/output/PreviewHTML/config.js
 *  
 *  Initializes the PreviewHTML OutputJax  (the main definition is in
 *  MathJax/jax/input/PreviewHTML/jax.js, which is loaded when needed).
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2013-2017 The MathJax Consortium
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

MathJax.OutputJax.PreviewHTML = MathJax.OutputJax({
  id: "PreviewHTML",
  version: "2.7.2",
  directory: MathJax.OutputJax.directory + "/PreviewHTML",
  extensionDir: MathJax.OutputJax.extensionDir + "/PreviewHTML",
  noFastPreview: true,  // don't do fast preview for this output jax
  
  config: {
    scale: 100, minScaleAdjust: 50, // global math scaling factor, and minimum adjusted scale factor
    mtextFontInherit: false,        // to make <mtext> be in page font rather than MathJax font

    linebreaks: {
      automatic: false,   // when false, only process linebreak="newline",
                          // when true, insert line breaks automatically in long expressions.

      width: "container" // maximum width of a line for automatic line breaks (e.g. "30em").
                         // use "container" to compute size from containing element,
                         // use "nn% container" for a portion of the container,
                         // use "nn%" for a portion of the window size
    }
    
  }
});

if (!MathJax.Hub.config.delayJaxRegistration) {MathJax.OutputJax.PreviewHTML.Register("jax/mml")}

MathJax.OutputJax.PreviewHTML.loadComplete("config.js");

/*************************************************************
 *
 *  MathJax/extensions/tex2jax.js
 *  
 *  Implements the TeX to Jax preprocessor that locates TeX code
 *  within the text of a document and replaces it with SCRIPT tags
 *  for processing by MathJax.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2017 The MathJax Consortium
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

MathJax.Extension.tex2jax = {
  version: "2.7.2",
  config: {
    inlineMath: [              // The start/stop pairs for in-line math
//    ['$','$'],               //  (comment out any you don't want, or add your own, but
      ['\\(','\\)']            //  be sure that you don't have an extra comma at the end)
    ],

    displayMath: [             // The start/stop pairs for display math
      ['$$','$$'],             //  (comment out any you don't want, or add your own, but
      ['\\[','\\]']            //  be sure that you don't have an extra comma at the end)
    ],

    balanceBraces: true,       // determines whether tex2jax requires braces to be
                               // balanced within math delimiters (allows for nested
                               // dollar signs).  Set to false to get pre-v2.0 compatibility.

    skipTags: ["script","noscript","style","textarea","pre","code","annotation","annotation-xml"],
                               // The names of the tags whose contents will not be
                               // scanned for math delimiters

    ignoreClass: "tex2jax_ignore",    // the class name of elements whose contents should
                                      // NOT be processed by tex2jax.  Note that this
                                      // is a regular expression, so be sure to quote any
                                      // regexp special characters

    processClass: "tex2jax_process",  // the class name of elements whose contents SHOULD
                                      // be processed when they appear inside ones that
                                      // are ignored.  Note that this is a regular expression,
                                      // so be sure to quote any regexp special characters

    processEscapes: false,     // set to true to allow \$ to produce a dollar without
                               //   starting in-line math mode

    processEnvironments: true, // set to true to process \begin{xxx}...\end{xxx} outside
                               //   of math mode, false to prevent that

    processRefs: true,         // set to true to process \ref{...} outside of math mode


    preview: "TeX"             // set to "none" to not insert MathJax_Preview spans
                               //   or set to an array specifying an HTML snippet
                               //   to use the same preview for every equation.

  },
  
  //
  //  Tags to ignore when searching for TeX in the page
  //
  ignoreTags: {
    br: (MathJax.Hub.Browser.isMSIE && document.documentMode < 9 ? "\n" : " "),
    wbr: "",
    "#comment": ""
  },
  
  PreProcess: function (element) {
    if (!this.configured) {
      this.config = MathJax.Hub.CombineConfig("tex2jax",this.config);
      if (this.config.Augment) {MathJax.Hub.Insert(this,this.config.Augment)}
      if (typeof(this.config.previewTeX) !== "undefined" && !this.config.previewTeX)
        {this.config.preview = "none"} // backward compatibility for previewTeX parameter
      this.configured = true;
    }
    if (typeof(element) === "string") {element = document.getElementById(element)}
    if (!element) {element = document.body}
    if (this.createPatterns()) {this.scanElement(element,element.nextSibling)}
  },
  
  createPatterns: function () {
    var starts = [], parts = [], i, m, config = this.config;
    this.match = {};
    for (i = 0, m = config.inlineMath.length; i < m; i++) {
      starts.push(this.patternQuote(config.inlineMath[i][0]));
      this.match[config.inlineMath[i][0]] = {
        mode: "",
        end: config.inlineMath[i][1],
        pattern: this.endPattern(config.inlineMath[i][1])
      };
    }
    for (i = 0, m = config.displayMath.length; i < m; i++) {
      starts.push(this.patternQuote(config.displayMath[i][0]));
      this.match[config.displayMath[i][0]] = {
        mode: "; mode=display",
        end: config.displayMath[i][1],
        pattern: this.endPattern(config.displayMath[i][1])
      };
    }
    if (starts.length) {parts.push(starts.sort(this.sortLength).join("|"))}
    if (config.processEnvironments) {parts.push("\\\\begin\\{([^}]*)\\}")}
    if (config.processEscapes)      {parts.push("\\\\*\\\\\\\$")}
    if (config.processRefs)         {parts.push("\\\\(eq)?ref\\{[^}]*\\}")}
    this.start = new RegExp(parts.join("|"),"g");
    this.skipTags = new RegExp("^("+config.skipTags.join("|")+")$","i");
    var ignore = [];
    if (MathJax.Hub.config.preRemoveClass) {ignore.push(MathJax.Hub.config.preRemoveClass)};
    if (config.ignoreClass) {ignore.push(config.ignoreClass)}
    this.ignoreClass = (ignore.length ? new RegExp("(^| )("+ignore.join("|")+")( |$)") : /^$/);
    this.processClass = new RegExp("(^| )("+config.processClass+")( |$)");
    return (parts.length > 0);
  },
  
  patternQuote: function (s) {return s.replace(/([\^$(){}+*?\-|\[\]\:\\])/g,'\\$1')},
  
  endPattern: function (end) {
    return new RegExp(this.patternQuote(end)+"|\\\\.|[{}]","g");
  },
  
  sortLength: function (a,b) {
    if (a.length !== b.length) {return b.length - a.length}
    return (a == b ? 0 : (a < b ? -1 : 1));
  },
  
  scanElement: function (element,stop,ignore) {
    var cname, tname, ignoreChild, process;
    while (element && element != stop) {
      if (element.nodeName.toLowerCase() === '#text') {
        if (!ignore) {element = this.scanText(element)}
      } else {
        cname = (typeof(element.className) === "undefined" ? "" : element.className);
        tname = (typeof(element.tagName)   === "undefined" ? "" : element.tagName);
        if (typeof(cname) !== "string") {cname = String(cname)} // jsxgraph uses non-string class names!
        process = this.processClass.exec(cname);
        if (element.firstChild && !cname.match(/(^| )MathJax/) &&
             (process || !this.skipTags.exec(tname))) {
          ignoreChild = (ignore || this.ignoreClass.exec(cname)) && !process;
          this.scanElement(element.firstChild,stop,ignoreChild);
        }
      }
      if (element) {element = element.nextSibling}
    }
  },
  
  scanText: function (element) {
    if (element.nodeValue.replace(/\s+/,'') == '') {return element}
    var match, prev;
    this.search = {start: true};
    this.pattern = this.start;
    while (element) {
      this.pattern.lastIndex = 0;
      while (element && element.nodeName.toLowerCase() === '#text' &&
            (match = this.pattern.exec(element.nodeValue))) {
        if (this.search.start) {element = this.startMatch(match,element)}
                          else {element = this.endMatch(match,element)}
      }
      if (this.search.matched) {element = this.encloseMath(element)}
      if (element) {
        do {prev = element; element = element.nextSibling}
          while (element && this.ignoreTags[element.nodeName.toLowerCase()] != null);
        if (!element || element.nodeName !== '#text')
          {return (this.search.close ? this.prevEndMatch() : prev)}
      }
    }
    return element;
  },
  
  startMatch: function (match,element) {
    var delim = this.match[match[0]];
    if (delim != null) {                              // a start delimiter
      this.search = {
        end: delim.end, mode: delim.mode, pcount: 0,
        open: element, olen: match[0].length, opos: this.pattern.lastIndex - match[0].length
      };
      this.switchPattern(delim.pattern);
    } else if (match[0].substr(0,6) === "\\begin") {  // \begin{...}
      this.search = {
        end: "\\end{"+match[1]+"}", mode: "; mode=display", pcount: 0,
        open: element, olen: 0, opos: this.pattern.lastIndex - match[0].length,
        isBeginEnd: true
      };
      this.switchPattern(this.endPattern(this.search.end));
    } else if (match[0].substr(0,4) === "\\ref" || match[0].substr(0,6) === "\\eqref") {
      this.search = {
        mode: "", end: "", open: element, pcount: 0,
        olen: 0, opos: this.pattern.lastIndex - match[0].length
      }
      return this.endMatch([""],element);
    } else {                                         // escaped dollar signs
      // put $ in a span so it doesn't get processed again
      // split off backslashes so they don't get removed later
      var slashes = match[0].substr(0,match[0].length-1), n, span;
      if (slashes.length % 2 === 0) {span = [slashes.replace(/\\\\/g,"\\")]; n = 1}
        else {span = [slashes.substr(1).replace(/\\\\/g,"\\"),"$"]; n = 0}
      span = MathJax.HTML.Element("span",null,span);
      var text = MathJax.HTML.TextNode(element.nodeValue.substr(0,match.index));
      element.nodeValue = element.nodeValue.substr(match.index + match[0].length - n);
      element.parentNode.insertBefore(span,element);
      element.parentNode.insertBefore(text,span);
      this.pattern.lastIndex = n;
    }
    return element;
  },
  
  endMatch: function (match,element) {
    var search = this.search;
    if (match[0] == search.end) {
      if (!search.close || search.pcount === 0) {
        search.close = element;
        search.cpos = this.pattern.lastIndex;
        search.clen = (search.isBeginEnd ? 0 : match[0].length);
      }
      if (search.pcount === 0) {
        search.matched = true;
        element = this.encloseMath(element);
        this.switchPattern(this.start);
      }
    }
    else if (match[0] === "{") {search.pcount++}
    else if (match[0] === "}" && search.pcount) {search.pcount--}
    return element;
  },
  prevEndMatch: function () {
    this.search.matched = true;
    var element = this.encloseMath(this.search.close);
    this.switchPattern(this.start);
    return element;
  },
  
  switchPattern: function (pattern) {
    pattern.lastIndex = this.pattern.lastIndex;
    this.pattern = pattern;
    this.search.start = (pattern === this.start);
  },
  
  encloseMath: function (element) {
    var search = this.search, close = search.close, CLOSE, math, next;
    if (search.cpos === close.length) {close = close.nextSibling}
       else {close = close.splitText(search.cpos)}
    if (!close) {CLOSE = close = MathJax.HTML.addText(search.close.parentNode,"")}
    search.close = close;
    math = (search.opos ? search.open.splitText(search.opos) : search.open);
    while ((next = math.nextSibling) && next !== close) {
      if (next.nodeValue !== null) {
        if (next.nodeName === "#comment") {
          math.nodeValue += next.nodeValue.replace(/^\[CDATA\[((.|\n|\r)*)\]\]$/,"$1");
        } else {
          math.nodeValue += next.nodeValue;
        }
      } else {
        var ignore = this.ignoreTags[next.nodeName.toLowerCase()];
        math.nodeValue += (ignore == null ? " " : ignore);
      }
      math.parentNode.removeChild(next);
    }
    var TeX = math.nodeValue.substr(search.olen,math.nodeValue.length-search.olen-search.clen);
    math.parentNode.removeChild(math);
    if (this.config.preview !== "none") {this.createPreview(search.mode,TeX)}
    math = this.createMathTag(search.mode,TeX);
    this.search = {}; this.pattern.lastIndex = 0;
    if (CLOSE) {CLOSE.parentNode.removeChild(CLOSE)}
    return math;
  },
  
  insertNode: function (node) {
    var search = this.search;
    search.close.parentNode.insertBefore(node,search.close);
  },
  
  createPreview: function (mode,tex) {
    var previewClass = MathJax.Hub.config.preRemoveClass;
    var preview = this.config.preview;
    if (preview === "none") return;
    if ((this.search.close.previousSibling||{}).className === previewClass) return;
    if (preview === "TeX") {preview = [this.filterPreview(tex)]}
    if (preview) {
      preview = MathJax.HTML.Element("span",{className:previewClass},preview);
      this.insertNode(preview);
    }
  },
  
  createMathTag: function (mode,tex) {
    var script = document.createElement("script");
    script.type = "math/tex" + mode;
    MathJax.HTML.setScript(script,tex);
    this.insertNode(script);
    return script;
  },
  
  filterPreview: function (tex) {return tex}

};

// We register the preprocessors with the following priorities:
// - mml2jax.js: 5
// - jsMath2jax.js: 8
// - asciimath2jax.js, tex2jax.js: 10 (default)
// See issues 18 and 484 and the other *2jax.js files.
MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax.Extension.tex2jax]);
MathJax.Ajax.loadComplete("[MathJax]/extensions/tex2jax.js");

/*************************************************************
 *
 *  MathJax/extensions/MathEvents.js
 *
 *  Implements the event handlers needed by the output jax to perform
 *  menu, hover, and other events.
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright (c) 2011-2017 The MathJax Consortium
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

(function (HUB,HTML,AJAX,CALLBACK,LOCALE,OUTPUT,INPUT) {
  var VERSION = "2.7.2";

  var EXTENSION = MathJax.Extension;
  var ME = EXTENSION.MathEvents = {version: VERSION};

  var SETTINGS = HUB.config.menuSettings;

  var CONFIG = {
    hover: 500,              // time required to be considered a hover
    frame: {
      x: 3.5, y: 5,          // frame padding and
      bwidth: 1,             // frame border width (in pixels)
      bcolor: "#A6D",        // frame border color
      hwidth: "15px",        // haze width
      hcolor: "#83A"         // haze color
    },
    button: {
      x: -6, y: -3,          // menu button offsets
      wx: -2                 // button offset for full-width equations
    },
    fadeinInc: .2,           // increment for fade-in
    fadeoutInc: .05,         // increment for fade-out
    fadeDelay: 50,           // delay between fade-in or fade-out steps
    fadeoutStart: 400,       // delay before fade-out after mouseout
    fadeoutDelay: 15*1000,   // delay before automatic fade-out

    styles: {
      ".MathJax_Hover_Frame": {
        "border-radius": ".25em",                   // Opera 10.5 and IE9
        "-webkit-border-radius": ".25em",           // Safari and Chrome
        "-moz-border-radius": ".25em",              // Firefox
        "-khtml-border-radius": ".25em",            // Konqueror

        "box-shadow": "0px 0px 15px #83A",          // Opera 10.5 and IE9
        "-webkit-box-shadow": "0px 0px 15px #83A",  // Safari and Chrome
        "-moz-box-shadow": "0px 0px 15px #83A",     // Forefox
        "-khtml-box-shadow": "0px 0px 15px #83A",   // Konqueror

        border: "1px solid #A6D ! important",
        display: "inline-block", position:"absolute"
      },

      ".MathJax_Menu_Button .MathJax_Hover_Arrow": {
        position:"absolute",
        cursor:"pointer",
        display:"inline-block",
        border:"2px solid #AAA",
        "border-radius":"4px",
        "-webkit-border-radius": "4px",           // Safari and Chrome
        "-moz-border-radius": "4px",              // Firefox
        "-khtml-border-radius": "4px",            // Konqueror
        "font-family":"'Courier New',Courier",
        "font-size":"9px",
        color:"#F0F0F0"
      },
      ".MathJax_Menu_Button .MathJax_Hover_Arrow span": {
        display:"block",
        "background-color":"#AAA",
        border:"1px solid",
        "border-radius":"3px",
        "line-height":0,
        padding:"4px"
      },
      ".MathJax_Hover_Arrow:hover": {
        color:"white!important",
        border:"2px solid #CCC!important"
      },
      ".MathJax_Hover_Arrow:hover span": {
        "background-color":"#CCC!important"
      }
    }
  };


  //
  //  Common event-handling code
  //
  var EVENT = ME.Event = {

    LEFTBUTTON: 0,           // the event.button value for left button
    RIGHTBUTTON: 2,          // the event.button value for right button
    MENUKEY: "altKey",       // the event value for alternate context menu

    /*************************************************************/
    /*
     *  Enum element for key codes.
     */
    KEY: {
      RETURN: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    },

    Mousedown: function (event) {return EVENT.Handler(event,"Mousedown",this)},
    Mouseup:   function (event) {return EVENT.Handler(event,"Mouseup",this)},
    Mousemove: function (event) {return EVENT.Handler(event,"Mousemove",this)},
    Mouseover: function (event) {return EVENT.Handler(event,"Mouseover",this)},
    Mouseout:  function (event) {return EVENT.Handler(event,"Mouseout",this)},
    Click:     function (event) {return EVENT.Handler(event,"Click",this)},
    DblClick:  function (event) {return EVENT.Handler(event,"DblClick",this)},
    Menu:      function (event) {return EVENT.Handler(event,"ContextMenu",this)},

    //
    //  Call the output jax's event handler or the zoom handler
    //
    Handler: function (event,type,math) {
      if (AJAX.loadingMathMenu) {return EVENT.False(event)}
      var jax = OUTPUT[math.jaxID];
      if (!event) {event = window.event}
      event.isContextMenu = (type === "ContextMenu");
      if (jax[type]) {return jax[type](event,math)}
      if (EXTENSION.MathZoom) {return EXTENSION.MathZoom.HandleEvent(event,type,math)}
    },

    //
    //  Try to cancel the event in every way we can
    //
    False: function (event) {
      if (!event) {event = window.event}
      if (event) {
        if (event.preventDefault) {event.preventDefault()} else {event.returnValue = false}
        if (event.stopPropagation) {event.stopPropagation()}
        event.cancelBubble = true;
      }
      return false;
    },

    //
    // Keydown event handler. Should only fire on Space key.
    //
    Keydown: function (event, math) {
      if (!event) event = window.event;
      if (event.keyCode === EVENT.KEY.SPACE) {
        EVENT.ContextMenu(event, this);
      };
    },

    //
    //  Load the contextual menu code, if needed, and post the menu
    //
    ContextMenu: function (event,math,force) {
      //
      //  Check if we are showing menus
      //
      var JAX = OUTPUT[math.jaxID], jax = JAX.getJaxFromMath(math);
      var show = (JAX.config.showMathMenu != null ? JAX : HUB).config.showMathMenu;
      if (!show || (SETTINGS.context !== "MathJax" && !force)) return;

      //
      //  Remove selections, remove hover fades
      //
      if (ME.msieEventBug) {event = window.event || event}
      EVENT.ClearSelection(); HOVER.ClearHoverTimer();
      if (jax.hover) {
        if (jax.hover.remove) {clearTimeout(jax.hover.remove); delete jax.hover.remove}
        jax.hover.nofade = true;
      }

      //
      //  If the menu code is loaded,
      //    Check if localization needs loading;
      //    If not, post the menu, and return.
      //    Otherwise wait for the localization to load
      //  Otherwse load the menu code.
      //  Try again after the file is loaded.
      //
      var MENU = MathJax.Menu; var load, fn;
      if (MENU) {
        if (MENU.loadingDomain) {return EVENT.False(event)}
        load = LOCALE.loadDomain("MathMenu");
        if (!load) {
          MENU.jax = jax;
          var source = MENU.menu.Find("Show Math As").submenu;
          source.items[0].name = jax.sourceMenuTitle;
          source.items[0].format = (jax.sourceMenuFormat||"MathML");
          source.items[1].name = INPUT[jax.inputJax].sourceMenuTitle;
          source.items[5].disabled = !INPUT[jax.inputJax].annotationEncoding;

          //
          // Try and find each known annotation format and enable the menu
          // items accordingly.
          //
          var annotations = source.items[2]; annotations.disabled = true;
          var annotationItems = annotations.submenu.items;
          annotationList = MathJax.Hub.Config.semanticsAnnotations;
          for (var i = 0, m = annotationItems.length; i < m; i++) {
            var name = annotationItems[i].name[1]
            if (jax.root && jax.root.getAnnotation(name) !== null) {
              annotations.disabled = false;
              annotationItems[i].hidden = false;
            } else {
              annotationItems[i].hidden = true;
            }
          }

          var MathPlayer = MENU.menu.Find("Math Settings","MathPlayer");
          MathPlayer.hidden = !(jax.outputJax === "NativeMML" && HUB.Browser.hasMathPlayer);
          return MENU.menu.Post(event);
        }
        MENU.loadingDomain = true;
        fn = function () {delete MENU.loadingDomain};
      } else {
        if (AJAX.loadingMathMenu) {return EVENT.False(event)}
        AJAX.loadingMathMenu = true;
        load = AJAX.Require("[MathJax]/extensions/MathMenu.js");
        fn = function () {
          delete AJAX.loadingMathMenu;
          if (!MathJax.Menu) {MathJax.Menu = {}}
        }
      }
      var ev = {
        pageX:event.pageX, pageY:event.pageY,
        clientX:event.clientX, clientY:event.clientY
      };
      CALLBACK.Queue(
        load, fn, // load the file and delete the marker when done
        ["ContextMenu",EVENT,ev,math,force]  // call this function again
      );
      return EVENT.False(event);
    },

    //
    //  Mousedown handler for alternate means of accessing menu
    //
    AltContextMenu: function (event,math) {
      var JAX = OUTPUT[math.jaxID];
      var show = (JAX.config.showMathMenu != null ? JAX : HUB).config.showMathMenu;
      if (show) {
        show = (JAX.config.showMathMenuMSIE != null ? JAX : HUB).config.showMathMenuMSIE;
        if (SETTINGS.context === "MathJax" && !SETTINGS.mpContext && show) {
          if (!ME.noContextMenuBug || event.button !== EVENT.RIGHTBUTTON) return;
        } else {
          if (!event[EVENT.MENUKEY] || event.button !== EVENT.LEFTBUTTON) return;
        }
        return JAX.ContextMenu(event,math,true);
      }
    },

    ClearSelection: function () {
      if (ME.safariContextMenuBug) {
        setTimeout(function () {
          window.getSelection().empty();
        },0);
      }
      if (document.selection) {
        setTimeout(function () {
          document.selection.empty();
        },0);
      }
    },

    getBBox: function (span) {
      span.appendChild(ME.topImg);
      var h = ME.topImg.offsetTop, d = span.offsetHeight-h, w = span.offsetWidth;
      span.removeChild(ME.topImg);
      return {w:w, h:h, d:d};
    }

  };

  //
  //  Handle hover "discoverability"
  //
  var HOVER = ME.Hover = {

    //
    //  Check if we are moving from a non-MathJax element to a MathJax one
    //  and either start fading in again (if it is fading out) or start the
    //  timer for the hover
    //
    Mouseover: function (event,math) {
      if (SETTINGS.discoverable || SETTINGS.zoom === "Hover") {
        var from = event.fromElement || event.relatedTarget,
            to   = event.toElement   || event.target;
        if (from && to && (HUB.isMathJaxNode(from) !== HUB.isMathJaxNode(to) ||
                           HUB.getJaxFor(from) !== HUB.getJaxFor(to))) {
          var jax = this.getJaxFromMath(math);
          if (jax.hover) {HOVER.ReHover(jax)} else {HOVER.HoverTimer(jax,math)}
          return EVENT.False(event);
        }
      }
    },
    //
    //  Check if we are moving from a MathJax element to a non-MathJax one
    //  and either start fading out, or clear the timer if we haven't
    //  hovered yet
    //
    Mouseout: function (event,math) {
      if (SETTINGS.discoverable || SETTINGS.zoom === "Hover") {
        var from = event.fromElement || event.relatedTarget,
            to   = event.toElement   || event.target;
        if (from && to && (HUB.isMathJaxNode(from) !== HUB.isMathJaxNode(to) ||
                           HUB.getJaxFor(from) !== HUB.getJaxFor(to))) {
          var jax = this.getJaxFromMath(math);
          if (jax.hover) {HOVER.UnHover(jax)} else {HOVER.ClearHoverTimer()}
          return EVENT.False(event);
        }
      }
    },
    //
    //  Restart hover timer if the mouse moves
    //
    Mousemove: function (event,math) {
      if (SETTINGS.discoverable || SETTINGS.zoom === "Hover") {
        var jax = this.getJaxFromMath(math); if (jax.hover) return;
        if (HOVER.lastX == event.clientX && HOVER.lastY == event.clientY) return;
        HOVER.lastX = event.clientX; HOVER.lastY = event.clientY;
        HOVER.HoverTimer(jax,math);
        return EVENT.False(event);
      }
    },

    //
    //  Clear the old timer and start a new one
    //
    HoverTimer: function (jax,math) {
      this.ClearHoverTimer();
      this.hoverTimer = setTimeout(CALLBACK(["Hover",this,jax,math]),CONFIG.hover);
    },
    ClearHoverTimer: function () {
      if (this.hoverTimer) {
        clearTimeout(this.hoverTimer); 
        delete this.hoverTimer;
      }
    },

    //
    //  Handle putting up the hover frame
    //
    Hover: function (jax,math) {
      //
      //  Check if Zoom handles the hover event
      //
      if (EXTENSION.MathZoom && EXTENSION.MathZoom.Hover({},math)) return;
      //
      //  Get the hover data
      //
      var JAX = OUTPUT[jax.outputJax],
          span = JAX.getHoverSpan(jax,math),
          bbox = JAX.getHoverBBox(jax,span,math),
          show = (JAX.config.showMathMenu != null ? JAX : HUB).config.showMathMenu;
      var dx = CONFIG.frame.x, dy = CONFIG.frame.y, dd = CONFIG.frame.bwidth;  // frame size
      if (ME.msieBorderWidthBug) {dd = 0}
      jax.hover = {opacity:0, id:jax.inputID+"-Hover"};
      //
      //  The frame and menu button
      //
      var frame = HTML.Element("span",{
         id:jax.hover.id, isMathJax: true,
         style:{display:"inline-block", width:0, height:0, position:"relative"}
        },[["span",{
          className:"MathJax_Hover_Frame", isMathJax: true,
          style:{
            display:"inline-block", position:"absolute",
            top:this.Px(-bbox.h-dy-dd-(bbox.y||0)), left:this.Px(-dx-dd+(bbox.x||0)),
            width:this.Px(bbox.w+2*dx), height:this.Px(bbox.h+bbox.d+2*dy),
            opacity:0, filter:"alpha(opacity=0)"
          }}
        ]]
      );
      var button = HTML.Element("span",{
         isMathJax: true, id:jax.hover.id+"Menu", className:"MathJax_Menu_Button",
         style:{display:"inline-block", "z-index": 1, width:0, height:0, position:"relative"}
        },[["span",{
            className: "MathJax_Hover_Arrow", isMathJax: true, math: math,
            onclick: this.HoverMenu, jax:JAX.id,
            style: {
              left:this.Px(bbox.w+dx+dd+(bbox.x||0)+CONFIG.button.x),
              top:this.Px(-bbox.h-dy-dd-(bbox.y||0)-CONFIG.button.y),
              opacity:0, filter:"alpha(opacity=0)"
            }
          },[["span",{isMathJax:true},"\u25BC"]]]]
      );
      if (bbox.width) {
        frame.style.width = button.style.width = bbox.width;
        frame.style.marginRight = button.style.marginRight = "-"+bbox.width;
        frame.firstChild.style.width = bbox.width;
        button.firstChild.style.left = "";
        button.firstChild.style.right = this.Px(CONFIG.button.wx);
      }
      //
      //  Add the frame and button
      //
      span.parentNode.insertBefore(frame,span);
      if (show) {span.parentNode.insertBefore(button,span)}
      if (span.style) {span.style.position = "relative"} // so math is on top of hover frame
      //
      //  Start the hover fade-in
      //
      this.ReHover(jax);
    },
    //
    //  Restart the hover fade in and fade-out timers
    //
    ReHover: function (jax) {
      if (jax.hover.remove) {
        clearTimeout(jax.hover.remove);
      }
      jax.hover.remove = setTimeout(CALLBACK(["UnHover",this,jax]),CONFIG.fadeoutDelay);
      this.HoverFadeTimer(jax,CONFIG.fadeinInc);
    },
    //
    //  Start the fade-out
    //
    UnHover: function (jax) {
      if (!jax.hover.nofade) {this.HoverFadeTimer(jax,-CONFIG.fadeoutInc,CONFIG.fadeoutStart)}
    },
    //
    //  Handle the fade-in and fade-out
    //
    HoverFade: function (jax) {
      delete jax.hover.timer;
      jax.hover.opacity = Math.max(0,Math.min(1,jax.hover.opacity + jax.hover.inc));
      jax.hover.opacity = Math.floor(1000*jax.hover.opacity)/1000;
      var frame = document.getElementById(jax.hover.id),
          button = document.getElementById(jax.hover.id+"Menu");
      frame.firstChild.style.opacity = jax.hover.opacity;
      frame.firstChild.style.filter = "alpha(opacity="+Math.floor(100*jax.hover.opacity)+")";
      if (button) {
        button.firstChild.style.opacity = jax.hover.opacity;
        button.firstChild.style.filter = frame.style.filter;
      }
      if (jax.hover.opacity === 1) {return}
      if (jax.hover.opacity > 0) {this.HoverFadeTimer(jax,jax.hover.inc); return}
      frame.parentNode.removeChild(frame);
      if (button) {button.parentNode.removeChild(button)}
      if (jax.hover.remove) {clearTimeout(jax.hover.remove)}
      delete jax.hover;
    },
    //
    //  Set the fade to in or out (via inc) and start the timer, if needed
    //
    HoverFadeTimer: function (jax,inc,delay) {
      jax.hover.inc = inc;
      if (!jax.hover.timer) {
        jax.hover.timer = setTimeout(CALLBACK(["HoverFade",this,jax]),(delay||CONFIG.fadeDelay));
      }
    },

    //
    //  Handle a click on the menu button
    //
    HoverMenu: function (event) {
      if (!event) {event = window.event}
      return OUTPUT[this.jax].ContextMenu(event,this.math,true);
    },

    //
    //  Clear all hover timers
    //
    ClearHover: function (jax) {
      if (jax.hover.remove) {
        clearTimeout(jax.hover.remove);
      }
      if (jax.hover.timer)  {
        clearTimeout(jax.hover.timer);
      }
      HOVER.ClearHoverTimer();
      delete jax.hover;
    },

    //
    //  Make a measurement in pixels
    //
    Px: function (m) {
      if (Math.abs(m) < .006) {return "0px"}
      return m.toFixed(2).replace(/\.?0+$/,"") + "px";
    },

    //
    //  Preload images so they show up with the menu
    //
    getImages: function () {
      if (SETTINGS.discoverable) {
        var menu = new Image();
        menu.src = CONFIG.button.src;
      }
    }

  };

  //
  //  Handle touch events.
  //
  //  Use double-tap-and-hold as a replacement for context menu event.
  //  Use double-tap as a replacement for double click.
  //
  var TOUCH = ME.Touch = {

    last: 0,          // time of last tap event
    delay: 500,       // delay time for double-click

    //
    //  Check if this is a double-tap, and if so, start the timer
    //  for the double-tap and hold (to trigger the contextual menu)
    //
    start: function (event) {
      var now = new Date().getTime();
      var dblTap = (now - TOUCH.last < TOUCH.delay && TOUCH.up);
      TOUCH.last = now; TOUCH.up = false;
      if (dblTap) {
        TOUCH.timeout = setTimeout(TOUCH.menu,TOUCH.delay,event,this);
        event.preventDefault();
      }
    },

    //
    //  Check if there is a timeout pending, i.e., we have a
    //  double-tap and were waiting to see if it is held long
    //  enough for the menu.  Since we got the end before the
    //  timeout, it is a double-click, not a double-tap-and-hold.
    //  Prevent the default action and issue a double click.
    //
    end: function (event) {
      var now = new Date().getTime();
      TOUCH.up = (now - TOUCH.last < TOUCH.delay);
      if (TOUCH.timeout) {
        clearTimeout(TOUCH.timeout);
        delete TOUCH.timeout; TOUCH.last = 0; TOUCH.up = false;
        event.preventDefault();
        return EVENT.Handler((event.touches[0]||event.touch),"DblClick",this);
      }
    },

    //
    //  If the timeout passes without an end event, we issue
    //  the contextual menu event.
    //
    menu: function (event,math) {
      delete TOUCH.timeout; TOUCH.last = 0; TOUCH.up = false;
      return EVENT.Handler((event.touches[0]||event.touch),"ContextMenu",math);
    }

  };

  /*
   * //
   * //  Mobile screens are small, so use larger version of arrow
   * //
   * if (HUB.Browser.isMobile) {
   *   var arrow = CONFIG.styles[".MathJax_Hover_Arrow"];
   *   arrow.width = "25px"; arrow.height = "18px";
   *   CONFIG.button.x = -6;
   * }
   */

  //
  //  Set up browser-specific values
  //
  HUB.Browser.Select({
    MSIE: function (browser) {
      var mode = (document.documentMode || 0);
      var isIE8 = browser.versionAtLeast("8.0");
      ME.msieBorderWidthBug = (document.compatMode === "BackCompat");  // borders are inside offsetWidth/Height
      ME.msieEventBug = browser.isIE9;           // must get event from window even though event is passed
      ME.msieAlignBug = (!isIE8 || mode < 8);    // inline-block spans don't rest on baseline
      if (mode < 9) {EVENT.LEFTBUTTON = 1}       // IE < 9 has wrong event.button values
    },
    Safari: function (browser) {
      ME.safariContextMenuBug = true;  // selection can be started by contextmenu event
    },
    Opera: function (browser) {
      ME.operaPositionBug = true;      // position is wrong unless border is used
    },
    Konqueror: function (browser) {
      ME.noContextMenuBug = true;      // doesn't produce contextmenu event
    }
  });

  //
  //  Used in measuring zoom and hover positions
  //
  ME.topImg = (ME.msieAlignBug ?
    HTML.Element("img",{style:{width:0,height:0,position:"relative"},src:"about:blank"}) :
    HTML.Element("span",{style:{width:0,height:0,display:"inline-block"}})
  );
  if (ME.operaPositionBug) {ME.topImg.style.border="1px solid"}

  //
  //  Get configuration from user
  //
  ME.config = CONFIG = HUB.CombineConfig("MathEvents",CONFIG);
  var SETFRAME = function () {
    var haze = CONFIG.styles[".MathJax_Hover_Frame"];
    haze.border = CONFIG.frame.bwidth+"px solid "+CONFIG.frame.bcolor+" ! important";
    haze["box-shadow"] = haze["-webkit-box-shadow"] =
      haze["-moz-box-shadow"] = haze["-khtml-box-shadow"] =
        "0px 0px "+CONFIG.frame.hwidth+" "+CONFIG.frame.hcolor;
  };

  //
  //  Queue the events needed for startup
  //
  CALLBACK.Queue(
    HUB.Register.StartupHook("End Config",{}), // wait until config is complete
    [SETFRAME],
    ["getImages",HOVER],
    ["Styles",AJAX,CONFIG.styles],
    ["Post",HUB.Startup.signal,"MathEvents Ready"],
    ["loadComplete",AJAX,"[MathJax]/extensions/MathEvents.js"]
  );

})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.Callback,
   MathJax.Localization,MathJax.OutputJax,MathJax.InputJax);

/*************************************************************
 *
 *  MathJax/extensions/MathZoom.js
 *  
 *  Implements the zoom feature for enlarging math expressions.  It is
 *  loaded automatically when the Zoom menu selection changes from "None".
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2010-2017 The MathJax Consortium
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

(function (HUB,HTML,AJAX,HTMLCSS,nMML) {
  var VERSION = "2.7.2";
  
  var CONFIG = HUB.CombineConfig("MathZoom",{
    styles: {
      //
      //  The styles for the MathZoom display box
      //
      "#MathJax_Zoom": {
        position:"absolute", "background-color":"#F0F0F0", overflow:"auto",
        display:"block", "z-index":301, padding:".5em", border:"1px solid black", margin:0,
        "font-weight":"normal", "font-style":"normal",
        "text-align":"left", "text-indent":0, "text-transform":"none",
        "line-height":"normal", "letter-spacing":"normal", "word-spacing":"normal",
        "word-wrap":"normal", "white-space":"nowrap", "float":"none",
        "-webkit-box-sizing":"content-box",          // Android ≤ 2.3, iOS ≤ 4
        "-moz-box-sizing":"content-box",             // Firefox ≤ 28
        "box-sizing":"content-box",                  // Chrome, Firefox 29+, IE 8+, Opera, Safari 5.1
        "box-shadow":"5px 5px 15px #AAAAAA",         // Opera 10.5 and IE9
        "-webkit-box-shadow":"5px 5px 15px #AAAAAA", // Safari 3 and Chrome
        "-moz-box-shadow":"5px 5px 15px #AAAAAA",    // Forefox 3.5
        "-khtml-box-shadow":"5px 5px 15px #AAAAAA",  // Konqueror
        filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')" // IE
      },
      
      //
      //  The styles for the hidden overlay (should not need to be adjusted by the page author)
      //
      "#MathJax_ZoomOverlay": {
        position:"absolute", left:0, top:0, "z-index":300, display:"inline-block",
        width:"100%", height:"100%", border:0, padding:0, margin:0,
        "background-color":"white", opacity:0, filter:"alpha(opacity=0)"
      },
      
      "#MathJax_ZoomFrame": {
        position:"relative", display:"inline-block",
        height:0, width:0
      },
      
      "#MathJax_ZoomEventTrap": {
        position:"absolute", left:0, top:0, "z-index":302,
        display:"inline-block", border:0, padding:0, margin:0,
        "background-color":"white", opacity:0, filter:"alpha(opacity=0)"
      }
    }
  });
  
  var FALSE, HOVER, EVENT;
  MathJax.Hub.Register.StartupHook("MathEvents Ready",function () {
    EVENT = MathJax.Extension.MathEvents.Event;
    FALSE = MathJax.Extension.MathEvents.Event.False;
    HOVER = MathJax.Extension.MathEvents.Hover;
  });

  /*************************************************************/

  var ZOOM = MathJax.Extension.MathZoom = {
    version: VERSION,
    settings: HUB.config.menuSettings,
    scrollSize: 18,    // width of scrool bars

    //
    //  Process events passed from output jax
    //
    HandleEvent: function (event,type,math) {
      if (ZOOM.settings.CTRL  && !event.ctrlKey)  return true;
      if (ZOOM.settings.ALT   && !event.altKey)   return true;
      if (ZOOM.settings.CMD   && !event.metaKey)  return true;
      if (ZOOM.settings.Shift && !event.shiftKey) return true;
      if (!ZOOM[type]) return true;
      return ZOOM[type](event,math);
    },
    
    //
    //  Zoom on click
    //
    Click: function (event,math) {
      if (this.settings.zoom === "Click") {return this.Zoom(event,math)}
    },
    
    //
    //  Zoom on double click
    //
    DblClick: function (event,math) {
      if (this.settings.zoom === "Double-Click" || this.settings.zoom === "DoubleClick") {return this.Zoom(event,math)}
    },
    
    //
    //  Zoom on hover (called by MathEvents.Hover)
    //
    Hover: function (event,math) {
      if (this.settings.zoom === "Hover") {this.Zoom(event,math); return true}
      return false;
    },
    
    
    //
    //  Handle the actual zooming
    //
    Zoom: function (event,math) {
      //
      //  Remove any other zoom and clear timers
      //
      this.Remove(); HOVER.ClearHoverTimer(); EVENT.ClearSelection();

      //
      //  Find the jax
      //
      var JAX = MathJax.OutputJax[math.jaxID];
      var jax = JAX.getJaxFromMath(math);
      if (jax.hover) {HOVER.UnHover(jax)}

      //
      //  Create the DOM elements for the zoom box
      //
      var container = this.findContainer(math);
      var Mw = Math.floor(.85*container.clientWidth),
          Mh = Math.max(document.body.clientHeight,document.documentElement.clientHeight);
      if (this.getOverflow(container) !== "visible") {Mh = Math.min(container.clientHeight,Mh)}
      Mh = Math.floor(.85*Mh);
      var div = HTML.Element(
        "span",{id:"MathJax_ZoomFrame"},[
          ["span",{id:"MathJax_ZoomOverlay", onmousedown:this.Remove}],
          ["span",{
            id:"MathJax_Zoom", onclick:this.Remove,
            style:{visibility:"hidden", fontSize:this.settings.zscale}
          },[["span",{style:{display:"inline-block", "white-space":"nowrap"}}]]
        ]]
      );
      var zoom = div.lastChild, span = zoom.firstChild, overlay = div.firstChild;
      math.parentNode.insertBefore(div,math); math.parentNode.insertBefore(math,div); // put div after math
      if (span.addEventListener) {span.addEventListener("mousedown",this.Remove,true)}
      var eW = zoom.offsetWidth || zoom.clientWidth; Mw -= eW; Mh -= eW;
      zoom.style.maxWidth = Mw+"px"; zoom.style.maxHeight = Mh+"px";

      if (this.msieTrapEventBug) {
        var trap = HTML.Element("span",{id:"MathJax_ZoomEventTrap", onmousedown:this.Remove});
        div.insertBefore(trap,zoom);
      }

      //
      //  Display the zoomed math
      //
      if (this.msieZIndexBug) {
        //  MSIE doesn't do z-index properly, so move the div to the document.body,
        //  and use an image as a tracker for the usual position
        var tracker = HTML.addElement(document.body,"img",{
          src:"about:blank", id:"MathJax_ZoomTracker", width:0, height:0,
          style:{width:0, height:0, position:"relative"}
        });
        div.style.position = "relative";
        div.style.zIndex = CONFIG.styles["#MathJax_ZoomOverlay"]["z-index"];
        div = tracker;
      }

      var bbox = JAX.Zoom(jax,span,math,Mw,Mh);
      
      //
      //  Fix up size and position for browsers with bugs (IE)
      //
      if (this.msiePositionBug) {
        if (this.msieSizeBug) 
          {zoom.style.height = bbox.zH+"px"; zoom.style.width = bbox.zW+"px"} // IE8 gets the dimensions completely wrong
        if (zoom.offsetHeight > Mh) {zoom.style.height = Mh+"px"; zoom.style.width = (bbox.zW+this.scrollSize)+"px"}  // IE doesn't do max-height?
        if (zoom.offsetWidth  > Mw) {zoom.style.width  = Mw+"px"; zoom.style.height = (bbox.zH+this.scrollSize)+"px"}
      }
      if (this.operaPositionBug) {zoom.style.width = Math.min(Mw,bbox.zW)+"px"}  // Opera gets width as 0?
      if (zoom.offsetWidth > eW && zoom.offsetWidth-eW < Mw && zoom.offsetHeight-eW < Mh)
         {zoom.style.overflow = "visible"}  // don't show scroll bars if we don't need to
      this.Position(zoom,bbox);
      if (this.msieTrapEventBug) {
        trap.style.height = zoom.clientHeight+"px"; trap.style.width = zoom.clientWidth+"px";
        trap.style.left = (parseFloat(zoom.style.left)+zoom.clientLeft)+"px";
        trap.style.top = (parseFloat(zoom.style.top)+zoom.clientTop)+"px";
      }
      zoom.style.visibility = "";

      //
      //  Add event handlers
      //
      if (this.settings.zoom === "Hover") {overlay.onmouseover = this.Remove}
      if (window.addEventListener) {addEventListener("resize",this.Resize,false)}
      else if (window.attachEvent) {attachEvent("onresize",this.Resize)}
      else {this.onresize = window.onresize; window.onresize = this.Resize}
      
      //
      //  Let others know about the zoomed math
      //
      HUB.signal.Post(["math zoomed",jax]);
      
      //
      //  Canel further actions
      //
      return FALSE(event);
    },
    
    //
    //  Set the position of the zoom box and overlay
    //
    Position: function (zoom,bbox) {
      zoom.style.display = "none"; // avoids getting excessive width in Resize()
      var XY = this.Resize(), x = XY.x, y = XY.y, W = bbox.mW;
      zoom.style.display = "";
      var dx = -W-Math.floor((zoom.offsetWidth-W)/2), dy = bbox.Y;
      zoom.style.left = Math.max(dx,10-x)+"px"; zoom.style.top = Math.max(dy,10-y)+"px";
      if (!ZOOM.msiePositionBug) {ZOOM.SetWH()} // refigure overlay width/height
    },
    
    //
    //  Handle resizing of overlay while zoom is displayed
    //
    Resize: function (event) {
      if (ZOOM.onresize) {ZOOM.onresize(event)}
      var div = document.getElementById("MathJax_ZoomFrame"),
          overlay = document.getElementById("MathJax_ZoomOverlay");
      var xy = ZOOM.getXY(div), obj = ZOOM.findContainer(div);
      if (ZOOM.getOverflow(obj) !== "visible") {
        overlay.scroll_parent = obj;  // Save this for future reference.
        var XY = ZOOM.getXY(obj);     // Remove container position
        xy.x -= XY.x; xy.y -= XY.y;
        XY = ZOOM.getBorder(obj);     // Remove container border
        xy.x -= XY.x; xy.y -= XY.y;
      }
      overlay.style.left = (-xy.x)+"px"; overlay.style.top = (-xy.y)+"px";
      if (ZOOM.msiePositionBug) {
        setTimeout(ZOOM.SetWH,0);
      } else {
        ZOOM.SetWH();
      }
      return xy;
    },
    SetWH: function () {
      var overlay = document.getElementById("MathJax_ZoomOverlay");
      if (!overlay) return;
      overlay.style.display = "none"; // so scrollWidth/Height will be right below
      var doc = overlay.scroll_parent || document.documentElement || document.body;
      overlay.style.width = doc.scrollWidth + "px";
      overlay.style.height = Math.max(doc.clientHeight,doc.scrollHeight) + "px";
      overlay.style.display = "";
    },
    findContainer: function (obj) {
      obj = obj.parentNode;
      while (obj.parentNode && obj !== document.body && ZOOM.getOverflow(obj) === "visible")
        {obj = obj.parentNode}
      return obj;
    },
    //
    //  Look up CSS properties (use getComputeStyle if available, or currentStyle if not)
    //
    getOverflow: (window.getComputedStyle ?
      function (obj) {return getComputedStyle(obj).overflow} :
      function (obj) {return (obj.currentStyle||{overflow:"visible"}).overflow}),
    getBorder: function (obj) {
      var size = {thin: 1, medium: 2, thick: 3};
      var style = (window.getComputedStyle ? getComputedStyle(obj) : 
                     (obj.currentStyle || {borderLeftWidth:0,borderTopWidth:0}));
      var x = style.borderLeftWidth, y = style.borderTopWidth;
      if (size[x]) {x = size[x]} else {x = parseInt(x)}
      if (size[y]) {y = size[y]} else {y = parseInt(y)}
      return {x:x, y:y};
    },
    //
    //  Get the position of an element on the page
    //
    getXY: function (div) {
      var x = 0, y = 0, obj;
      obj = div; while (obj.offsetParent) {x += obj.offsetLeft; obj = obj.offsetParent}
      if (ZOOM.operaPositionBug) {div.style.border = "1px solid"}  // to get vertical position right
      obj = div; while (obj.offsetParent) {y += obj.offsetTop; obj = obj.offsetParent}
      if (ZOOM.operaPositionBug) {div.style.border = ""}
      return {x:x, y:y};
    },
    
    //
    //  Remove zoom display and event handlers
    //
    Remove: function (event) {
      var div = document.getElementById("MathJax_ZoomFrame");
      if (div) {
        var JAX = MathJax.OutputJax[div.previousSibling.jaxID];
        var jax = JAX.getJaxFromMath(div.previousSibling);
        HUB.signal.Post(["math unzoomed",jax]);
        div.parentNode.removeChild(div);
        div = document.getElementById("MathJax_ZoomTracker");
        if (div) {div.parentNode.removeChild(div)}
        if (ZOOM.operaRefreshBug) {
	  // force a redisplay of the page
	  // (Opera doesn't refresh properly after the zoom is removed)
          var overlay = HTML.addElement(document.body,"div",{
            style:{position:"fixed", left:0, top:0, width:"100%", height:"100%",
                   backgroundColor:"white", opacity:0},
            id: "MathJax_OperaDiv"
          });
          document.body.removeChild(overlay);
        }
        if (window.removeEventListener) {removeEventListener("resize",ZOOM.Resize,false)}
        else if (window.detachEvent) {detachEvent("onresize",ZOOM.Resize)}
        else {window.onresize = ZOOM.onresize; delete ZOOM.onresize}
      }
      return FALSE(event);
    }
    
  };
  
  
  /*************************************************************/

  HUB.Browser.Select({
    MSIE: function (browser) {
      var mode  = (document.documentMode || 0);
      var isIE9 = (mode >= 9);
      ZOOM.msiePositionBug = !isIE9;
      ZOOM.msieSizeBug = browser.versionAtLeast("7.0") &&
        (!document.documentMode || mode === 7 || mode === 8);
      ZOOM.msieZIndexBug = (mode <= 7);
      ZOOM.msieInlineBlockAlignBug = (mode <= 7);
      ZOOM.msieTrapEventBug = !window.addEventListener;
      if (document.compatMode === "BackCompat") {ZOOM.scrollSize = 52} // don't know why this is so far off
      if (isIE9) {delete CONFIG.styles["#MathJax_Zoom"].filter}
    },
    
    Opera: function (browser) {
      ZOOM.operaPositionBug = true;
      ZOOM.operaRefreshBug = true;
    }
  });
  
  ZOOM.topImg = (ZOOM.msieInlineBlockAlignBug ?
    HTML.Element("img",{style:{width:0,height:0,position:"relative"},src:"about:blank"}) :
    HTML.Element("span",{style:{width:0,height:0,display:"inline-block"}})
  );
  if (ZOOM.operaPositionBug || ZOOM.msieTopBug) {ZOOM.topImg.style.border="1px solid"}

  /*************************************************************/

  MathJax.Callback.Queue(
    ["StartupHook",MathJax.Hub.Register,"Begin Styles",{}],
    ["Styles",AJAX,CONFIG.styles],
    ["Post",HUB.Startup.signal,"MathZoom Ready"],
    ["loadComplete",AJAX,"[MathJax]/extensions/MathZoom.js"]
  );

})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.OutputJax["HTML-CSS"],MathJax.OutputJax.NativeMML);

/*************************************************************
 *
 *  MathJax/extensions/MathMenu.js
 *
 *  Implements a right-mouse (or CTRL-click) menu over mathematics
 *  elements that gives the user the ability to copy the source,
 *  change the math size, and zoom settings.
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright (c) 2010-2017 The MathJax Consortium
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

(function (HUB,HTML,AJAX,CALLBACK,OUTPUT) {
  var VERSION = "2.7.2";

  var SIGNAL = MathJax.Callback.Signal("menu");  // signal for menu events

  MathJax.Extension.MathMenu = {
    version: VERSION,
    signal: SIGNAL
  };

  var _ = function (id) {
    return MathJax.Localization._.apply(
      MathJax.Localization,
      [["MathMenu",id]].concat([].slice.call(arguments,1))
    );
  };
  
  var isArray = MathJax.Object.isArray;

  var isPC = HUB.Browser.isPC, isMSIE = HUB.Browser.isMSIE, isIE9 = ((document.documentMode||0) > 8);
  var ROUND = (isPC ? null : "5px");

  var CONFIG = HUB.CombineConfig("MathMenu",{
    delay: 150,                                    // the delay for submenus

    showRenderer: true,                            //  show the "Math Renderer" menu?
    showMathPlayer: true,                          //  show the "MathPlayer" menu?
    showFontMenu: false,                           //  show the "Font Preference" menu?
    showContext:  false,                           //  show the "Context Menu" menu?
    showDiscoverable: false,                       //  show the "Discoverable" menu?
    showLocale: true,                              //  show the "Locale" menu?
    showLocaleURL: false,                          //  show the "Load from URL" menu?

    semanticsAnnotations: {
      "TeX": ["TeX", "LaTeX", "application/x-tex"],
      "StarMath": ["StarMath 5.0"],
      "Maple": ["Maple"],
      "ContentMathML": ["MathML-Content", "application/mathml-content+xml"],
      "OpenMath": ["OpenMath"]
    },

    windowSettings: {                              // for source window
      status: "no", toolbar: "no", locationbar: "no", menubar: "no",
      directories: "no", personalbar: "no", resizable: "yes", scrollbars: "yes",
      width: 400, height: 300,
      left: Math.round((screen.width - 400)/2),
      top:  Math.round((screen.height - 300)/3)
    },

    styles: {
      "#MathJax_About": {
        position:"fixed", left:"50%", width:"auto", "text-align":"center",
        border:"3px outset", padding:"1em 2em", "background-color":"#DDDDDD", color:"black",
        cursor: "default", "font-family":"message-box", "font-size":"120%",
        "font-style":"normal", "text-indent":0, "text-transform":"none",
        "line-height":"normal", "letter-spacing":"normal", "word-spacing":"normal",
        "word-wrap":"normal", "white-space":"nowrap", "float":"none", "z-index":201,

        "border-radius": "15px",                     // Opera 10.5 and IE9
        "-webkit-border-radius": "15px",             // Safari and Chrome
        "-moz-border-radius": "15px",                // Firefox
        "-khtml-border-radius": "15px",              // Konqueror

        "box-shadow":"0px 10px 20px #808080",         // Opera 10.5 and IE9
        "-webkit-box-shadow":"0px 10px 20px #808080", // Safari 3 and Chrome
        "-moz-box-shadow":"0px 10px 20px #808080",    // Forefox 3.5
        "-khtml-box-shadow":"0px 10px 20px #808080",  // Konqueror
        filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')" // IE
      },
      "#MathJax_About.MathJax_MousePost": {
        outline:"none"
      },

      ".MathJax_Menu": {
        position:"absolute", "background-color":"white", color:"black",
        width:"auto", padding:(isPC ? "2px" : "5px 0px"),
        border:"1px solid #CCCCCC", margin:0, cursor:"default",
        font: "menu", "text-align":"left", "text-indent":0, "text-transform":"none",
        "line-height":"normal", "letter-spacing":"normal", "word-spacing":"normal",
        "word-wrap":"normal", "white-space":"nowrap", "float":"none", "z-index":201,

        "border-radius": ROUND,                     // Opera 10.5 and IE9
        "-webkit-border-radius": ROUND,             // Safari and Chrome
        "-moz-border-radius": ROUND,                // Firefox
        "-khtml-border-radius": ROUND,              // Konqueror

        "box-shadow":"0px 10px 20px #808080",         // Opera 10.5 and IE9
        "-webkit-box-shadow":"0px 10px 20px #808080", // Safari 3 and Chrome
        "-moz-box-shadow":"0px 10px 20px #808080",    // Forefox 3.5
        "-khtml-box-shadow":"0px 10px 20px #808080",  // Konqueror
        filter: "progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')" // IE
      },

      ".MathJax_MenuItem": {
        padding: (isPC ? "2px 2em" : "1px 2em"),
        background:"transparent"
      },

      ".MathJax_MenuArrow": {
        position:"absolute", right:".5em", "padding-top":".25em", color:"#666666",
        "font-family": (isMSIE ? "'Arial unicode MS'" : null), "font-size": ".75em"
      },
      ".MathJax_MenuActive .MathJax_MenuArrow": {color:"white"},
      ".MathJax_MenuArrow.RTL": {left:".5em", right:"auto"},

      ".MathJax_MenuCheck": {
        position:"absolute", left:".7em",
        "font-family": (isMSIE ? "'Arial unicode MS'" : null)
      },
      ".MathJax_MenuCheck.RTL": {right:".7em", left:"auto"},

      ".MathJax_MenuRadioCheck": {
        position:"absolute", left: (isPC ? "1em" : ".7em")
      },
      ".MathJax_MenuRadioCheck.RTL": {
        right: (isPC ? "1em" : ".7em"), left:"auto"
      },

      ".MathJax_MenuLabel": {
        padding: (isPC ? "2px 2em 4px 1.33em" : "1px 2em 3px 1.33em"),
        "font-style":"italic"
      },

      ".MathJax_MenuRule": {
        "border-top": (isPC ? "1px solid #CCCCCC" : "1px solid #DDDDDD"),
        margin: (isPC ? "4px 1px 0px" : "4px 3px")
      },

      ".MathJax_MenuDisabled": {
        color:"GrayText"
      },
      ".MathJax_MenuActive": {
        "background-color": (isPC ? "Highlight" : "#606872"),
        color: (isPC ? "HighlightText" : "white")
      },

      ".MathJax_MenuDisabled:focus, .MathJax_MenuLabel:focus": {
        "background-color": "#E8E8E8"
      },
      ".MathJax_ContextMenu:focus": {
        outline:"none"
      },
      ".MathJax_ContextMenu .MathJax_MenuItem:focus": {
        outline:"none"
      },

      "#MathJax_AboutClose": {
        top:".2em", right:".2em"
      },
      ".MathJax_Menu .MathJax_MenuClose": {
        top:"-10px", left:"-10px"
      },

      ".MathJax_MenuClose": {
        position:"absolute",
        cursor:"pointer",
        display:"inline-block",
        border:"2px solid #AAA",
        "border-radius":"18px",
        "-webkit-border-radius": "18px",             // Safari and Chrome
        "-moz-border-radius": "18px",                // Firefox
        "-khtml-border-radius": "18px",              // Konqueror
        "font-family":"'Courier New',Courier",
        "font-size":"24px",
        color:"#F0F0F0"
      },
      ".MathJax_MenuClose span": {
        display:"block", "background-color":"#AAA", border:"1.5px solid",
        "border-radius":"18px",
        "-webkit-border-radius": "18px",             // Safari and Chrome
        "-moz-border-radius": "18px",                // Firefox
        "-khtml-border-radius": "18px",              // Konqueror
        "line-height":0,
        padding:"8px 0 6px"     // may need to be browser-specific
      },
      ".MathJax_MenuClose:hover": {
        color:"white!important",
        border:"2px solid #CCC!important"
      },
      ".MathJax_MenuClose:hover span": {
        "background-color":"#CCC!important"
      },
      ".MathJax_MenuClose:hover:focus": {
        outline:"none"
      }
    }
  });

  var FALSE, HOVER, KEY;
  HUB.Register.StartupHook("MathEvents Ready",function () {
    FALSE = MathJax.Extension.MathEvents.Event.False;
    HOVER = MathJax.Extension.MathEvents.Hover;
    KEY = MathJax.Extension.MathEvents.Event.KEY;
  });


  /*************************************************************/
  /*
   *  Abstract class of all keyboard navigatable objects.
   */
  var NAV = MathJax.Object.Subclass({
    /*
     * Moving in the list of items.
     */
    Keydown: function(event, menu) {
      switch (event.keyCode) {
      case KEY.ESCAPE:
        this.Remove(event, menu);
        break;
      case KEY.RIGHT:
        this.Right(event, menu);
        break;
      case KEY.LEFT:
        this.Left(event, menu);
        break;
      case KEY.UP:
        this.Up(event, menu);
        break;
      case KEY.DOWN:
        this.Down(event, menu);
        break;
      case KEY.RETURN:
      case KEY.SPACE:
        this.Space(event, menu);
        break;
      default:
        return;
        break;
      }
      return FALSE(event);
    },
    Escape: function(event, menu) { },
    Right: function(event, menu) { },
    Left: function(event, menu) { },
    Up: function(event, menu) { },
    Down: function(event, menu) { },
    Space: function(event, menu) { }
  }, {});


  /*************************************************************/
  /*
   *  The main menu class
   */
  var MENU = MathJax.Menu = NAV.Subclass({
    version: VERSION,
    items: [],
    posted: false,
    title: null,
    margin: 5,

    Init: function (def) {this.items = [].slice.call(arguments,0)},
    With: function (def) {if (def) {HUB.Insert(this,def)}; return this},

    /*
     *  Display the menu
     */
    Post: function (event,parent,forceLTR) {
      if (!event) {event = window.event||{}}
      var div = document.getElementById("MathJax_MenuFrame");
      if (!div) {
        div = MENU.Background(this);
        delete ITEM.lastItem; delete ITEM.lastMenu;
        delete MENU.skipUp;
        SIGNAL.Post(["post",MENU.jax]);
        MENU.isRTL = (MathJax.Localization.fontDirection() === "rtl");
      }
      var menu = HTML.Element("div",{
        onmouseup: MENU.Mouseup, ondblclick: FALSE,
        ondragstart: FALSE, onselectstart: FALSE, oncontextmenu: FALSE,
        menuItem: this, className: "MathJax_Menu", onkeydown: MENU.Keydown,
        role: "menu"
      });
      if (event.type === "contextmenu" || event.type === "mouseover")
        menu.className += " MathJax_ContextMenu";
      if (!forceLTR) {MathJax.Localization.setCSS(menu)}

      for (var i = 0, m = this.items.length; i < m; i++) {this.items[i].Create(menu)}
      if (MENU.isMobile) {
        HTML.addElement(menu,"span",{
          className: "MathJax_MenuClose", menu: parent,
          ontouchstart: MENU.Close, ontouchend: FALSE, onmousedown: MENU.Close, onmouseup: FALSE
        },[["span",{},"\u00D7"]]);
      }

      div.appendChild(menu);
      this.posted = true;
      if (menu.offsetWidth) menu.style.width = (menu.offsetWidth+2) + "px";
      var x = event.pageX, y = event.pageY;
      var bbox = document.body.getBoundingClientRect();
      var styles = (window.getComputedStyle ? window.getComputedStyle(document.body) : {marginLeft: "0px"});
      var bodyRight = bbox.right - Math.min(0,bbox.left) + parseFloat(styles.marginLeft);
      if (!x && !y && "clientX" in event) {
        x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop  + document.documentElement.scrollTop;
      }
      if (!parent) {
        var node = MENU.CurrentNode() || event.target;
        if ((event.type === "keydown" || (!x && !y)) && node) {
          var offsetX = window.pageXOffset || document.documentElement.scrollLeft;
          var offsetY = window.pageYOffset || document.documentElement.scrollTop;
          var rect = node.getBoundingClientRect();
          x = (rect.right + rect.left) / 2 + offsetX;
          y = (rect.bottom + rect.top) / 2 + offsetY;
        }
        if (x + menu.offsetWidth > bodyRight - this.margin)
          {x = bodyRight - menu.offsetWidth - this.margin}
        if (MENU.isMobile) {x = Math.max(5,x-Math.floor(menu.offsetWidth/2)); y -= 20}
        MENU.skipUp = event.isContextMenu;
      } else {
        var side = "left", mw = parent.offsetWidth;
        x = (MENU.isMobile ? 30 : mw - 2); y = 0;
        while (parent && parent !== div) {
          x += parent.offsetLeft; y += parent.offsetTop;
          parent = parent.parentNode;
        }
        if (!MENU.isMobile) {
          if ((MENU.isRTL && x - mw - menu.offsetWidth > this.margin) ||
              (!MENU.isRTL && x + menu.offsetWidth > bodyRight - this.margin))
            {side = "right"; x = Math.max(this.margin,x - mw - menu.offsetWidth + 6)}
        }
        if (!isPC) {
          // in case these ever get implemented
          menu.style["borderRadiusTop"+side] = 0;       // Opera 10.5
          menu.style["WebkitBorderRadiusTop"+side] = 0; // Safari and Chrome
          menu.style["MozBorderRadiusTop"+side] = 0;    // Firefox
          menu.style["KhtmlBorderRadiusTop"+side] = 0;  // Konqueror
        }
      }

      menu.style.left = x+"px"; menu.style.top = y+"px";
      if (document.selection && document.selection.empty) {document.selection.empty()}

      // Focusing while keeping the scroll position.
      var oldX = window.pageXOffset || document.documentElement.scrollLeft;
      var oldY = window.pageYOffset || document.documentElement.scrollTop;
      MENU.Focus(menu);
      if (event.type === "keydown") {
        MENU.skipMouseoverFromKey = true;
        setTimeout(function() {
          delete MENU.skipMouseoverFromKey;
        }, CONFIG.delay);
      }
      window.scrollTo(oldX, oldY);
      return FALSE(event);
    },

    /*
     *  Remove the menu from the screen
     */
    Remove: function (event,menu) {
      SIGNAL.Post(["unpost",MENU.jax]);
      var div = document.getElementById("MathJax_MenuFrame");
      if (div) {
        div.parentNode.removeChild(div);
        if (this.msieFixedPositionBug) {detachEvent("onresize",MENU.Resize)}
      }
      if (MENU.jax.hover) {
        delete MENU.jax.hover.nofade;
        HOVER.UnHover(MENU.jax);
      }
      MENU.Unfocus(menu);
      if (event.type === "mousedown") MENU.CurrentNode().blur();
      return FALSE(event);
    },

    /*
     *  Find an item in a menu (or submenu) by name (Find) or ID (FindID).
     *  A list of names or IDs means descend into submenus.
     */
    Find: function (name) {return this.FindN(1,name,[].slice.call(arguments,1))},
    FindId: function (name) {return this.FindN(0,name,[].slice.call(arguments,1))},
    FindN: function (n,name,names) {
      for (var i = 0, m = this.items.length; i < m; i++) {
        if (this.items[i].name[n] === name) {
          if (names.length) {
            if (!this.items[i].submenu) {return null}
            return this.items[i].submenu.FindN(n,names[0],names.slice(1));
          }
          return this.items[i];
        }
      }
      return null;
    },

    /*
     *  Find the index of a menu item (so we can insert before or after it)
     */
    IndexOf: function (name) {return this.IndexOfN(1,name)},
    IndexOfId: function (name) {return this.IndexOfN(0,name)},
    IndexOfN: function (n,name) {
      for (var i = 0, m = this.items.length; i < m; i++)
        {if (this.items[i].name[n] === name) {return i}}
      return null;
    },

    Right: function(event, menu) {
      MENU.Right(event, menu);
    },
    Left: function(event, menu) {
      MENU.Left(event, menu);
    },
    Up: function(event, menu) {
      var node = menu.lastChild;
      node.menuItem.Activate(event, node);
    },
    Down: function(event, menu) {
      var node = menu.firstChild;
      node.menuItem.Activate(event, node);
    },
    Space: function(event, menu) {
      this.Remove(event, menu);
    }
  },{

    config: CONFIG,

    Remove:     function (event) {return MENU.Event(event,this,"Remove")},
    Mouseover:  function (event) {return MENU.Event(event,this,"Mouseover")},
    Mouseout:   function (event) {return MENU.Event(event,this,"Mouseout")},
    Mousedown:  function (event) {return MENU.Event(event,this,"Mousedown")},
    Mouseup:    function (event) {return MENU.Event(event,this,"Mouseup")},
    Keydown:    function (event) {return MENU.Event(event,this,"Keydown")},
    /*
     *  Events for mobile devices.
     */
    Touchstart: function (event) {return MENU.Event(event,this,"Touchstart")},
    Touchend:   function (event) {return MENU.Event(event,this,"Touchend")},
    Close:      function (event) {
      return MENU.Event(event,this.menu||this.parentNode,(this.menu?"Touchend":"Remove"));
    },
    Event: function (event,menu,type,force) {
      if (MENU.skipMouseover && type === "Mouseover" && !force) {return FALSE(event)}
      if (MENU.skipMouseoverFromKey && type === "Mouseover") {
        delete MENU.skipMouseoverFromKey;
        return FALSE(event);
      }
      if (MENU.skipUp) {
        if (type.match(/Mouseup|Touchend/)) {delete MENU.skipUp; return FALSE(event)}
        if (type === "Touchstart" ||
           (type === "Mousedown" && !MENU.skipMousedown)) {delete MENU.skipUp}
      }
      if (!event) {event = window.event}
      var item = menu.menuItem;
      if (item && item[type]) {return item[type](event,menu)}
      return null;
    },
    /*
     *  Style for the background DIV
     */
    BGSTYLE: {
      position:"absolute", left:0, top:0, "z-index":200,
      width:"100%", height:"100%", border:0, padding:0, margin:0
    },

    Background: function (menu) {
      var div = HTML.addElement(document.body,"div",
                    {style:this.BGSTYLE, id:"MathJax_MenuFrame"},
                    [["div",{style: this.BGSTYLE, menuItem: menu, onmousedown: this.Remove}]]);
      var bg = div.firstChild;
      if (MENU.msieBackgroundBug) {
        //  MSIE doesn't allow transparent background to be hit boxes, so
        //  fake it using opacity with solid background color
        bg.style.backgroundColor = "white"; bg.style.filter = "alpha(opacity=0)";
      }
      if (MENU.msieFixedPositionBug) {
        //  MSIE can't do fixed position, so use a full-sized background
        //  and an onresize handler to update it (stupid, but necessary)
        div.width = div.height = 0; this.Resize();
        attachEvent("onresize",this.Resize);
      } else {
        // otherwise, use a fixed position DIV to cover the viewport
        bg.style.position = "fixed";
      }
      return div;
    },
    Resize: function () {
      setTimeout(MENU.SetWH,0);
    },
    SetWH: function () {
      var bg = document.getElementById("MathJax_MenuFrame");
      if (bg) {
        bg = bg.firstChild;
        bg.style.width = bg.style.height = "1px"; // so scrollWidth/Height will be right below
        bg.style.width = document.body.scrollWidth + "px";
        bg.style.height = document.body.scrollHeight + "px";
      }
    },

    /*************************************************************/
    /*
     *  Keyboard navigation of menu.
     */
    posted: false,  // Is a menu open?
    active: null,   // The focused in HTML node in the menu.

    GetNode: function(jax) {
      var node = document.getElementById(jax.inputID + "-Frame");
      return node.isMathJax ? node : node.firstChild;
    },
    CurrentNode: function() {
      return MENU.GetNode(MENU.jax);
    },
    AllNodes: function() {
      var jaxs = MathJax.Hub.getAllJax();
      var nodes = [];
      for (var i = 0, jax; jax = jaxs[i]; i++) {
        nodes.push(MENU.GetNode(jax));
      }
      return nodes;
    },
    ActiveNode: function() {
      return MENU.active;
    },
    FocusNode: function(node) {
      MENU.active = node;
      node.focus();
    },
    //
    // Focus is a global affair, since we only ever want a single focused item.
    //
    Focus: function(menu) {
      !MENU.posted ? MENU.Activate(menu) : MENU.ActiveNode().tabIndex = -1;
      menu.tabIndex = 0;
      MENU.FocusNode(menu);
    },
    Activate: function(event, menu) {
      MENU.UnsetTabIndex();
      MENU.posted = true;
    },
    Unfocus: function() {
      MENU.ActiveNode().tabIndex = -1;
      MENU.SetTabIndex();
      MENU.FocusNode(MENU.CurrentNode());
      MENU.posted = false;
    },
    MoveHorizontal: function(event, menu, move) {
      if (!event.shiftKey) return;
      var jaxs = MENU.AllNodes();
      var len = jaxs.length;
      if (len === 0) return;
      var next = jaxs[MENU.Mod(move(MENU.IndexOf(jaxs, MENU.CurrentNode())), len)];
      if (next === MENU.CurrentNode()) return;
      MENU.menu.Remove(event, menu);
      MENU.jax = MathJax.Hub.getJaxFor(next);
      MENU.FocusNode(next);
      MENU.menu.Post(null);
    },
    Right: function(event, menu) {
      MENU.MoveHorizontal(event, menu, function(x) {return x + 1;});
    },
    Left: function(event, menu) {
      MENU.MoveHorizontal(event, menu, function(x) {return x - 1;});
    },
    UnsetTabIndex: function () {
      var jaxs = MENU.AllNodes();
      for (var j = 0, jax; jax = jaxs[j]; j++) {
        if (jax.tabIndex > 0) {
          jax.oldTabIndex = jax.tabIndex;
        }
        jax.tabIndex = -1;
      }
    },
    SetTabIndex: function () {
      var jaxs = MENU.AllNodes();
      for (var j = 0, jax; jax = jaxs[j]; j++) {
        if (jax.oldTabIndex !== undefined) {
          jax.tabIndex = jax.oldTabIndex
          delete jax.oldTabIndex;
        } else {
          jax.tabIndex = HUB.getTabOrder(jax);
        }
      }
    },

    //TODO: Move to utility class.
    // Computes a mod n.
    Mod: function(a, n) {
      return ((a % n) + n) % n;
    },
    IndexOf: (Array.prototype.indexOf ?
              function (A, item, start) {return A.indexOf(item, start);} :
              function (A, item, start) {
                for (var i = (start || 0), j = A.length; i < j; i++) {
                  if (item === A[i]) return i;
                }
                return -1;
              }),

    saveCookie: function () {HTML.Cookie.Set("menu",this.cookie)},
    getCookie: function () {this.cookie = HTML.Cookie.Get("menu")}

  });

  MathJax.Menu.NAV = NAV;

  /*************************************************************/
  /*
   *  Abstract class of menu items.
   */
  var ITEM = MENU.ITEM = NAV.Subclass({

    name: "", // The menu item's label as [id,label] pair.
    node: null,  // The HTML node of the item.
    menu: null,  // The parent menu containing that item. HTML node.

    Attributes: function(def) {
      return HUB.Insert(
        {onmouseup: MENU.Mouseup,
         ondragstart: FALSE, onselectstart: FALSE, onselectend: FALSE,
         ontouchstart: MENU.Touchstart, ontouchend: MENU.Touchend,
         className: "MathJax_MenuItem", role: this.role,
         menuItem: this},
        def);
    },

    Create: function (menu) {
      if (!this.hidden) {
        var def = this.Attributes();
        var label = this.Label(def,menu);
        HTML.addElement(menu, "div", def, label);
      }
    },
    Name: function () {return _(this.name[0],this.name[1])},

    Mouseover: function (event,menu) {
      if (menu.parentNode === MENU.ActiveNode().parentNode) {
       this.Deactivate(MENU.ActiveNode());
      }
      this.Activate(event, menu);
    },
    Mouseout: function (event,menu) {
      this.Deactivate(menu);
    },
    Mouseup: function (event,menu) {return this.Remove(event,menu)},


    DeactivateSubmenus: function(menu) {
      var menus = document.getElementById("MathJax_MenuFrame").childNodes,
          items = ITEM.GetMenuNode(menu).childNodes;
      for (var i = 0, m = items.length; i < m; i++) {
        var item = items[i].menuItem;
        // Deactivates submenu items.
        if (item && item.submenu && item.submenu.posted &&
            item !== menu.menuItem) {
          item.Deactivate(items[i]);
        }
      }
      this.RemoveSubmenus(menu, menus);
    },
    RemoveSubmenus: function(menu, menus) {
      menus = menus || document.getElementById("MathJax_MenuFrame").childNodes;
      var m = menus.length-1;
      while (m >= 0 && ITEM.GetMenuNode(menu).menuItem !== menus[m].menuItem) {
        menus[m].menuItem.posted = false;
        menus[m].parentNode.removeChild(menus[m]);
        m--;
      }
    },

    Touchstart: function (event,menu) {return this.TouchEvent(event,menu,"Mousedown")},
    Touchend: function (event,menu)   {return this.TouchEvent(event,menu,"Mouseup")},
    TouchEvent: function (event,menu,type) {
      if (this !== ITEM.lastItem) {
        if (ITEM.lastMenu) {MENU.Event(event,ITEM.lastMenu,"Mouseout")}
        MENU.Event(event,menu,"Mouseover",true);
        ITEM.lastItem = this; ITEM.lastMenu = menu;
      }
      if (this.nativeTouch) {return null}
      MENU.Event(event,menu,type);
      return false;
    },

    Remove: function (event,menu) {
      menu = menu.parentNode.menuItem;
      return menu.Remove(event,menu);
    },

    With: function (def) {if (def) {HUB.Insert(this,def)}; return this},

    isRTL: function () {return MENU.isRTL},
    rtlClass: function () {return (this.isRTL() ? " RTL" : "")}
  }, {
    GetMenuNode: function(item) {
      return item.parentNode;
    }
  });

  /*************************************************************/
  /*
   *  Abstract class of menu items that are focusable and perform some action
   */
  MENU.ENTRY = MENU.ITEM.Subclass({
    role: "menuitem",  // Aria role.

    Attributes: function(def) {
      def = HUB.Insert(
        {onmouseover: MENU.Mouseover, onmouseout: MENU.Mouseout,
         onmousedown: MENU.Mousedown, onkeydown: MENU.Keydown,
         "aria-disabled": !!this.disabled},
        def);
      def = this.SUPER(arguments).Attributes.call(this, def);
      if (this.disabled) {
        def.className += " MathJax_MenuDisabled";
      }
      return def;
    },
    MoveVertical: function(event, item, move) {
      var menuNode = ITEM.GetMenuNode(item);
      var items = [];
      for (var i = 0, allItems = menuNode.menuItem.items, it;
           it = allItems[i]; i++) {
        if (!it.hidden) {
          items.push(it);
        }
      }
      var index = MENU.IndexOf(items, this);
      if (index === -1) return;
      var len = items.length;
      var children = menuNode.childNodes;
      do {
        index = MENU.Mod(move(index), len);
      } while (items[index].hidden || !children[index].role ||
               children[index].role === "separator");
      this.Deactivate(item);
      items[index].Activate(event, children[index]);
    },
    Up: function(event, item) {
      this.MoveVertical(event, item, function(x) { return x - 1; });
    },
    Down: function(event, item) {
      this.MoveVertical(event, item, function(x) { return x + 1; });
    },
    Right: function(event, item) {
      this.MoveHorizontal(event, item, MENU.Right, !this.isRTL());
    },
    Left: function(event, item) {
      this.MoveHorizontal(event, item, MENU.Left, this.isRTL());
    },
    MoveHorizontal: function(event, item, move, rtl) {
      var menuNode = ITEM.GetMenuNode(item);
      if (menuNode.menuItem === MENU.menu && event.shiftKey) {
        move(event, item);
      }
      if (rtl) return;
      if (menuNode.menuItem !== MENU.menu) {
        this.Deactivate(item);
      }
      var parentNodes = menuNode.previousSibling.childNodes;
      var length = parentNodes.length;
      while (length--) {
        var parent = parentNodes[length];
        if (parent.menuItem.submenu &&
            parent.menuItem.submenu === menuNode.menuItem) {
          MENU.Focus(parent);
          break;
        }
      }
      this.RemoveSubmenus(item);
    },
    Space: function (event, menu) {
      this.Mouseup(event, menu);
    },

    Activate: function (event, menu) {
      this.Deactivate(menu);
      if (!this.disabled) {
        menu.className += " MathJax_MenuActive";
      }
      this.DeactivateSubmenus(menu);
      MENU.Focus(menu);
    },
    Deactivate: function (menu) {
      menu.className = menu.className.replace(/ MathJax_MenuActive/,"");
    }

  });

  /*************************************************************/
  /*
   *  A menu item that performs a command when selected
   */
  MENU.ITEM.COMMAND = MENU.ENTRY.Subclass({
    action: function () {},

    Init: function (name,action,def) {
      if (!isArray(name)) {name = [name,name]}  // make [id,label] pair
      this.name = name; this.action = action;
      this.With(def);
    },

    Label: function (def,menu) {return [this.Name()]},
    Mouseup: function (event,menu) {
      if (!this.disabled) {
        this.Remove(event,menu);
        SIGNAL.Post(["command",this]);
        this.action.call(this,event);
      }
      return FALSE(event);
    }
  });

  /*************************************************************/
  /*
   *  A menu item that posts a submenu
   */
  MENU.ITEM.SUBMENU = MENU.ENTRY.Subclass({
    submenu: null,        // the submenu
    marker: "\u25BA",  // the submenu arrow
    markerRTL: "\u25C4", // the submenu arrow for RTL

    Attributes: function(def) {
      def = HUB.Insert({"aria-haspopup": "true"}, def);
      def = this.SUPER(arguments).Attributes.call(this, def);
      return def;
    },
    Init: function (name,def) {
      if (!isArray(name)) {name = [name,name]}  // make [id,label] pair
      this.name = name; var i = 1;
      if (!(def instanceof MENU.ITEM)) {this.With(def), i++}
      this.submenu = MENU.apply(MENU,[].slice.call(arguments,i));
    },
    Label: function (def,menu) {
      this.submenu.posted = false;
      return [this.Name()+" ",["span",{
        className:"MathJax_MenuArrow" + this.rtlClass()
      },[this.isRTL() ? this.markerRTL : this.marker]]];
    },
    Timer: function (event,menu) {
      this.ClearTimer();
      event = {type: event.type,
               clientX: event.clientX, clientY: event.clientY}; // MSIE can't pass the event below
      this.timer = setTimeout(CALLBACK(["Mouseup",this,event,menu]),CONFIG.delay);
    },
    ClearTimer: function() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    Touchend: function (event,menu) {
      var forceout = this.submenu.posted;
      var result = this.SUPER(arguments).Touchend.apply(this,arguments);
      if (forceout) {this.Deactivate(menu); delete ITEM.lastItem; delete ITEM.lastMenu}
      return result;
    },
    Mouseout: function(event, menu) {
      if (!this.submenu.posted) {
        this.Deactivate(menu);
      }
      this.ClearTimer();
    },
    Mouseover: function(event, menu) {
      this.Activate(event, menu);
    },
    Mouseup: function (event,menu) {
      if (!this.disabled) {
        if (!this.submenu.posted) {
          this.ClearTimer();
          this.submenu.Post(event, menu, this.ltr);
          MENU.Focus(menu);
        } else {
          this.DeactivateSubmenus(menu);
        }
      }
      return FALSE(event);
    },
    Activate: function (event, menu) {
      if (!this.disabled) {
        this.Deactivate(menu);
        menu.className += " MathJax_MenuActive";
      }
      if (!this.submenu.posted) {
        this.DeactivateSubmenus(menu);
        if (!MENU.isMobile) {
          this.Timer(event,menu);
        }
      }
      MENU.Focus(menu);
    },
    MoveVertical: function(event, item, move) {
      this.ClearTimer();
      this.SUPER(arguments).MoveVertical.apply(this, arguments);
    },
    MoveHorizontal: function(event, menu, move, rtl) {
      if (!rtl) {
        this.SUPER(arguments).MoveHorizontal.apply(this, arguments);
        return;
      }
      if (this.disabled) return;
      if (!this.submenu.posted) {
        this.Activate(event, menu);
        return;
      }
      var submenuNodes = ITEM.GetMenuNode(menu).nextSibling.childNodes;
      if (submenuNodes.length > 0) {
        this.submenu.items[0].Activate(event, submenuNodes[0]);
      }
    }
  });

  /*************************************************************/
  /*
   *  A menu item that is one of several radio buttons
   */
  MENU.ITEM.RADIO = MENU.ENTRY.Subclass({
    variable: null,     // the variable name
    marker: (isPC ? "\u25CF" : "\u2713"),   // the checkmark
    role: "menuitemradio",

    Attributes: function(def) {
      var checked = CONFIG.settings[this.variable] === this.value ? "true" : "false";
      def = HUB.Insert({"aria-checked": checked}, def);
      def = this.SUPER(arguments).Attributes.call(this, def);
      return def;
    },
    Init: function (name,variable,def) {
      if (!isArray(name)) {name = [name,name]}  // make [id,label] pair
      this.name = name; this.variable = variable; this.With(def);
      if (this.value == null) {this.value = this.name[0]}
    },
    Label: function (def,menu) {
      var span = {className:"MathJax_MenuRadioCheck" + this.rtlClass()};
      if (CONFIG.settings[this.variable] !== this.value) {
        span = {style:{display:"none"}};
      }
      return [["span",span,[this.marker]]," "+this.Name()];
    },
    Mouseup: function (event,menu) {
      if (!this.disabled) {
        var child = menu.parentNode.childNodes;
        for (var i = 0, m = child.length; i < m; i++) {
          var item = child[i].menuItem;
          if (item && item.variable === this.variable) {
            child[i].firstChild.style.display = "none";
          }
        }
        menu.firstChild.display = "";
        CONFIG.settings[this.variable] = this.value;
        MENU.cookie[this.variable] = CONFIG.settings[this.variable]; MENU.saveCookie();
        SIGNAL.Post(["radio button",this]);
      }
      this.Remove(event,menu);
      if (this.action && !this.disabled) {this.action.call(MENU,this)}
      return FALSE(event);
    }
  });

  /*************************************************************/
  /*
   *  A menu item that is checkable
   */
  MENU.ITEM.CHECKBOX = MENU.ENTRY.Subclass({
    variable: null,     // the variable name
    marker: "\u2713",   // the checkmark
    role: "menuitemcheckbox",

    Attributes: function(def) {
      var checked = CONFIG.settings[this.variable] ? "true" : "false";
      def = HUB.Insert({"aria-checked": checked}, def);
      def = this.SUPER(arguments).Attributes.call(this, def);
      return def;
    },
    Init: function (name,variable,def) {
      if (!isArray(name)) {name = [name,name]}  // make [id,label] pair
      this.name = name; this.variable = variable; this.With(def);
    },
    Label: function (def,menu) {
      var span = {className:"MathJax_MenuCheck" + this.rtlClass()};
      if (!CONFIG.settings[this.variable]) {span = {style:{display:"none"}}}
      return [["span",span,[this.marker]]," "+this.Name()];
    },
    Mouseup: function (event,menu) {
      if (!this.disabled) {
        menu.firstChild.display = (CONFIG.settings[this.variable] ? "none" : "");
        CONFIG.settings[this.variable] = !CONFIG.settings[this.variable];
        MENU.cookie[this.variable] = CONFIG.settings[this.variable]; MENU.saveCookie();
        SIGNAL.Post(["checkbox",this]);
      }
      this.Remove(event,menu);
      if (this.action && !this.disabled) {this.action.call(MENU,this)}
      return FALSE(event);
    }
  });

  /*************************************************************/
  /*
   *  A menu item that is a label
   */
  MENU.ITEM.LABEL = MENU.ENTRY.Subclass({
    role: "menuitem",  // Aria role.

    Init: function (name,def) {
      if (!isArray(name)) {name = [name,name]}  // make [id,label] pair
      this.name = name; this.With(def);
    },
    Label: function (def,menu) {
      def.className += " MathJax_MenuLabel";
      return [this.Name()];
    },
    Activate: function(event, menu) {
      this.Deactivate(menu);
      MENU.Focus(menu);
    },
    Mouseup: function (event,menu) { }
  });

  /*************************************************************/
  /*
   *  A rule in a menu
   */
  MENU.ITEM.RULE = MENU.ITEM.Subclass({
    role: "separator",

    Attributes: function(def) {
      def = HUB.Insert({"aria-orientation": "vertical"}, def);
      def = this.SUPER(arguments).Attributes.call(this, def);
      return def;
    },
    Label: function (def,menu) {
      def.className += " MathJax_MenuRule";
      return null;
    }
  });

  /*************************************************************/
  /*************************************************************/

  /*
   *  Handle the ABOUT box
   */
  MENU.About = function (event) {
    var font = MENU.About.GetFont();
    var format = MENU.About.GetFormat();
    var jax = ["MathJax.js v"+MathJax.fileversion,["br"]];
    jax.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);
    MENU.About.GetJax(jax,MathJax.InputJax,["InputJax","%1 Input Jax v%2"]);
    MENU.About.GetJax(jax,MathJax.OutputJax,["OutputJax","%1 Output Jax v%2"]);
    MENU.About.GetJax(jax,MathJax.ElementJax,["ElementJax","%1 Element Jax v%2"]);
    jax.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);
    MENU.About.GetJax(jax,MathJax.Extension,["Extension","%1 Extension v%2"],true);
    jax.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}],["center",{},[
      HUB.Browser + " v"+HUB.Browser.version + (format ?
        " \u2014 " + _(format.replace(/ /g,""),format) : "")
    ]]);
    MENU.About.div = MENU.Background(MENU.About);
    var about = HTML.addElement(MENU.About.div,"div",{
      id: "MathJax_About", tabIndex: 0, onkeydown: MENU.About.Keydown
    },[
      ["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+MathJax.version,["br"],
      _(font.replace(/ /g,""),"using "+font),["br"],["br"],
      ["span",{style:{
        display:"inline-block", "text-align":"left", "font-size":"80%",
        "max-height":"20em", overflow:"auto",
        "background-color":"#E4E4E4", padding:".4em .6em", border:"1px inset"
      }, tabIndex: 0},jax],["br"],["br"],
      ["a",{href:"http://www.mathjax.org/"},["www.mathjax.org"]],
      ["span",{className:"MathJax_MenuClose",id:"MathJax_AboutClose",
               onclick:MENU.About.Remove,
               onkeydown: MENU.About.Keydown, tabIndex: 0, role: "button",
               "aria-label": _("CloseAboutDialog","Close about MathJax dialog")},
        [["span",{},"\u00D7"]]]
    ]);
    if (event.type === "mouseup") about.className += " MathJax_MousePost";
    about.focus();
    MathJax.Localization.setCSS(about);
    var doc = (document.documentElement||{});
    var H = window.innerHeight || doc.clientHeight || doc.scrollHeight || 0;
    if (MENU.prototype.msieAboutBug) {
      about.style.width = "20em"; about.style.position = "absolute";
      about.style.left = Math.floor((document.documentElement.scrollWidth - about.offsetWidth)/2)+"px";
      about.style.top = (Math.floor((H-about.offsetHeight)/3)+document.body.scrollTop)+"px";
    } else {
      about.style.marginLeft = Math.floor(-about.offsetWidth/2)+"px";
      about.style.top = Math.floor((H-about.offsetHeight)/3)+"px";
    }
  };
  MENU.About.Remove = function (event) {
    if (MENU.About.div) {document.body.removeChild(MENU.About.div); delete MENU.About.div}
  };
  MENU.About.Keydown = function(event) {
    if (event.keyCode === KEY.ESCAPE ||
        (this.id === "MathJax_AboutClose" &&
         (event.keyCode === KEY.SPACE || event.keyCode === KEY.RETURN))) {
      MENU.About.Remove(event);
      MENU.CurrentNode().focus();
      FALSE(event);
    }
  },
  MENU.About.GetJax = function (jax,JAX,type,noTypeCheck) {
    var info = [];
    for (var id in JAX) {if (JAX.hasOwnProperty(id) && JAX[id]) {
      if ((noTypeCheck && JAX[id].version) || (JAX[id].isa && JAX[id].isa(JAX)))
        {info.push(_(type[0],type[1],(JAX[id].id||id),JAX[id].version))}
    }}
    info.sort();
    for (var i = 0, m = info.length; i < m; i++) {jax.push(info[i],["br"])}
    return jax;
  };
  MENU.About.GetFont = function () {
    var jax = MathJax.Hub.outputJax["jax/mml"][0] || {};
    var font = {
      SVG: "web SVG",
      CommonHTML: "web TeX",
      "HTML-CSS": (jax.imgFonts ? "image" : (jax.webFonts ? "web" : "local")+" "+jax.fontInUse)
    }[jax.id] || "generic";
    return font + " fonts";
  };
  MENU.About.GetFormat = function () {
    var jax = MathJax.Hub.outputJax["jax/mml"][0] || {};
    if (jax.id !== "HTML-CSS"|| !jax.webFonts || jax.imgFonts) return;
    return jax.allowWebFonts.replace(/otf/,"woff or otf") + " fonts";
  };


  /*
   *  Handle the MathJax HELP menu
   */
  MENU.Help = function (event) {
    AJAX.Require("[MathJax]/extensions/HelpDialog.js",
                 function () {MathJax.Extension.Help.Dialog({type:event.type})});
  };

  /*
   *  Handle showing of element's source
   */
  MENU.ShowSource = function (event) {
    if (!event) {event = window.event}
    var EVENT = {screenX:event.screenX, screenY:event.screenY};
    if (!MENU.jax) return;
    if (this.format === "MathML") {
      var MML = MathJax.ElementJax.mml;
      if (MML && typeof(MML.mbase.prototype.toMathML) !== "undefined") {
        // toMathML() can call MathJax.Hub.RestartAfter, so trap errors and check
        try {MENU.ShowSource.Text(MENU.jax.root.toMathML("",MENU.jax),event)} catch (err) {
          if (!err.restart) {throw err}
          CALLBACK.After([this,MENU.ShowSource,EVENT],err.restart);
        }
      } else if (!AJAX.loadingToMathML) {
        AJAX.loadingToMathML = true;
        MENU.ShowSource.Window(event); // WeBKit needs to open window on click event
        CALLBACK.Queue(
          AJAX.Require("[MathJax]/extensions/toMathML.js"),
          function () {
            delete AJAX.loadingToMathML;
            if (!MML.mbase.prototype.toMathML) {MML.mbase.prototype.toMathML = function () {}}
          },
          [this,MENU.ShowSource,EVENT]  // call this function again
        );
        return;
      }
    } else if (this.format === "Error") {
      MENU.ShowSource.Text(MENU.jax.errorText,event);
    } else if (CONFIG.semanticsAnnotations[this.format]) {
      var annotation = MENU.jax.root.getAnnotation(this.format);
      if (annotation.data[0]) MENU.ShowSource.Text(annotation.data[0].toString());
    } else {
      if (MENU.jax.originalText == null) {
        alert(_("NoOriginalForm","No original form available"));
        return;
      }
      MENU.ShowSource.Text(MENU.jax.originalText,event);
    }
  };
  MENU.ShowSource.Window = function (event) {
    if (!MENU.ShowSource.w) {
      var def = [], DEF = CONFIG.windowSettings;
      for (var id in DEF) {if (DEF.hasOwnProperty(id)) {def.push(id+"="+DEF[id])}}
      MENU.ShowSource.w = window.open("","_blank",def.join(","));
    }
    return MENU.ShowSource.w;
  };
  MENU.ShowSource.Text = function (text,event) {
    var w = MENU.ShowSource.Window(event); delete MENU.ShowSource.w;
    text = text.replace(/^\s*/,"").replace(/\s*$/,"");
    text = text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    var title = _("EqSource","MathJax Equation Source");
    if (MENU.isMobile) {
      w.document.open();
      w.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>"+title+"</title></head><body style='font-size:85%'>");
      w.document.write("<pre>"+text+"</pre>");
      w.document.write("<hr><input type='button' value='"+_("Close","Close")+"' onclick='window.close()' />");
      w.document.write("</body></html>");
      w.document.close();
    } else {
      w.document.open();
      w.document.write("<html><head><title>"+title+"</title></head><body style='font-size:85%'>");
      w.document.write("<table><tr><td><pre>"+text+"</pre></td></tr></table>");
      w.document.write("</body></html>");
      w.document.close();
      var table = w.document.body.firstChild;
      setTimeout(function () {
        var H = (w.outerHeight-w.innerHeight)||30, W = (w.outerWidth-w.innerWidth)||30, x, y;
        W = Math.max(140,Math.min(Math.floor(.5*screen.width),table.offsetWidth+W+25));
        H = Math.max(40,Math.min(Math.floor(.5*screen.height),table.offsetHeight+H+25));
        if (MENU.prototype.msieHeightBug) {H += 35}; // for title bar in XP
        w.resizeTo(W,H);
        var X; try {X = event.screenX} catch (e) {}; // IE8 throws an error accessing screenX
        if (event && X != null) {
          x = Math.max(0,Math.min(event.screenX-Math.floor(W/2), screen.width-W-20));
          y = Math.max(0,Math.min(event.screenY-Math.floor(H/2), screen.height-H-20));
          w.moveTo(x,y);
        }
      },50);
    }
  };

  /*
   *  Handle rescaling all the math
   */
  MENU.Scale = function () {
    var JAX = ["CommonHTML","HTML-CSS","SVG","NativeMML","PreviewHTML"], m = JAX.length,
        SCALE = 100, i, jax;
    for (i = 0; i < m; i++) {
      jax = OUTPUT[JAX[i]];
      if (jax) {SCALE = jax.config.scale; break}
    }
    var scale = prompt(_("ScaleMath","Scale all mathematics (compared to surrounding text) by"),SCALE+"%");
    if (scale) {
      if (scale.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)) {
        scale = parseFloat(scale);
        if (scale) {
          if (scale !== SCALE) {
            for (i = 0; i < m; i++) {
              jax = OUTPUT[JAX[i]];
              if (jax) jax.config.scale = scale;
            }
            MENU.cookie.scale = HUB.config.scale = scale;
            MENU.saveCookie(); 
            HUB.Queue(["Rerender",HUB]);
          }
        } else {alert(_("NonZeroScale","The scale should not be zero"))}
      } else {alert(_("PercentScale",
                      "The scale should be a percentage (e.g., 120%%)"))}
    }
  };

  /*
   *  Handle loading the zoom code
   */
  MENU.Zoom = function () {
    if (!MathJax.Extension.MathZoom) {AJAX.Require("[MathJax]/extensions/MathZoom.js")}
  };

  /*
   *  Handle changing the renderer
   */
  MENU.Renderer = function () {
    var jax = HUB.outputJax["jax/mml"];
    if (jax[0] !== CONFIG.settings.renderer) {
      var BROWSER = HUB.Browser, message, MESSAGE = MENU.Renderer.Messages, warned;
      //
      //  Check that the new renderer is appropriate for the browser
      //
      switch (CONFIG.settings.renderer) {
        case "NativeMML":
          if (!CONFIG.settings.warnedMML) {
            if (BROWSER.isChrome && BROWSER.version.substr(0,3) !== "24.") {message = MESSAGE.MML.WebKit}
            else if (BROWSER.isSafari && !BROWSER.versionAtLeast("5.0")) {message = MESSAGE.MML.WebKit}
            else if (BROWSER.isMSIE) {if (!BROWSER.hasMathPlayer) {message = MESSAGE.MML.MSIE}}
            else if (BROWSER.isEdge) {message = MESSAGE.MML.WebKit}
            else {message = MESSAGE.MML[BROWSER]}
            warned = "warnedMML";
          }
          break;

        case "SVG":
          if (!CONFIG.settings.warnedSVG) {
            if (BROWSER.isMSIE && !isIE9) {message = MESSAGE.SVG.MSIE}
          }
          break;
      }
      if (message) {
        message = _(message[0],message[1]);
        message += "\n\n";
        message += _("SwitchAnyway",
                     "Switch the renderer anyway?\n\n" +
                     "(Press OK to switch, CANCEL to continue with the current renderer)");
        MENU.cookie.renderer = jax[0].id; MENU.saveCookie();
        if (!confirm(message)) {
          MENU.cookie.renderer = CONFIG.settings.renderer = HTML.Cookie.Get("menu").renderer;
          MENU.saveCookie();
          return;
        }
        if (warned) {MENU.cookie.warned  = CONFIG.settings.warned = true}
        MENU.cookie.renderer = CONFIG.settings.renderer; MENU.saveCookie();
      }
      HUB.Queue(
        ["setRenderer",HUB,CONFIG.settings.renderer,"jax/mml"],
        ["Rerender",HUB]
      );
    }
  };
  MENU.Renderer.Messages = {
    MML: {
      WebKit:  ["WebkitNativeMMLWarning",
                 "Your browser doesn't seem to support MathML natively, " +
                 "so switching to MathML output may cause the mathematics " +
                 "on the page to become unreadable."],

      MSIE:    ["MSIENativeMMLWarning",
                 "Internet Explorer requires the MathPlayer plugin " +
                 "in order to process MathML output."],

      Opera:   ["OperaNativeMMLWarning",
                 "Opera's support for MathML is limited, so switching to " +
                 "MathML output may cause some expressions to render poorly."],

      Safari:  ["SafariNativeMMLWarning",
                 "Your browser's native MathML does not implement all the features " +
                 "used by MathJax, so some expressions may not render properly."],

      Firefox: ["FirefoxNativeMMLWarning",
                 "Your browser's native MathML does not implement all the features " +
                 "used by MathJax, so some expressions may not render properly."]
    },

    SVG: {
      MSIE:    ["MSIESVGWarning",
                 "SVG is not implemented in Internet Explorer prior to " +
                 "IE9 or when it is emulating IE8 or below. " +
                 "Switching to SVG output will cause the mathematics to " +
                 "not display properly."]
    }
  };
  
  /*
   *  Toggle assistive MML settings
   */
  MENU.AssistiveMML = function (item,restart) {
    var AMML = MathJax.Extension.AssistiveMML;
    if (!AMML) {
      //  Try to load the extension, but only try once.
      if (!restart)
        AJAX.Require("[MathJax]/extensions/AssistiveMML.js",["AssistiveMML",MENU,item,true]);
      return;
    }
    MathJax.Hub.Queue([(CONFIG.settings.assistiveMML ? "Add" : "Remove")+"AssistiveMathML",AMML]);
  };

  /*
   *  Handle setting the HTMLCSS fonts
   */
  MENU.Font = function () {
    var HTMLCSS = OUTPUT["HTML-CSS"]; if (!HTMLCSS) return;
    document.location.reload();
  };

  /*
   *  Handle selection of locale and rerender the page
   */
  MENU.Locale = function () {
    MathJax.Localization.setLocale(CONFIG.settings.locale);
    MathJax.Hub.Queue(["Reprocess",MathJax.Hub]); // FIXME: Just reprocess error messages?
  };
  MENU.LoadLocale = function () {
    var url = prompt(_("LoadURL","Load translation data from this URL:"));
    if (url) {
      if (!url.match(/\.js$/)) {
        alert(_("BadURL",
          "The URL should be for a javascript file that defines MathJax translation data.  " +
          "Javascript file names should end with '.js'"
        ));
      }
      AJAX.Require(url,function (status) {
        if (status != AJAX.STATUS.OK) {alert(_("BadData","Failed to load translation data from %1",url))}
      });
    }
  };

  /*
   *  Handle setting MathPlayer events
   */
  MENU.MPEvents = function (item) {
    var discoverable = CONFIG.settings.discoverable,
        MESSAGE = MENU.MPEvents.Messages;
    if (!isIE9) {
      if (CONFIG.settings.mpMouse && !confirm(_.apply(_,MESSAGE.IE8warning))) {
        delete MENU.cookie.mpContext; delete CONFIG.settings.mpContext;
        delete MENU.cookie.mpMouse; delete CONFIG.settings.mpMouse;
        MENU.saveCookie();
        return;
      }
      CONFIG.settings.mpContext = CONFIG.settings.mpMouse;
      MENU.cookie.mpContext = MENU.cookie.mpMouse = CONFIG.settings.mpMouse;
      MENU.saveCookie();
      MathJax.Hub.Queue(["Rerender",MathJax.Hub])
    } else if (!discoverable && item.name[1] === "Menu Events" && CONFIG.settings.mpContext) {
      alert(_.apply(_,MESSAGE.IE9warning));
    }
  };

  MENU.MPEvents.Messages = {
    IE8warning: ["IE8warning",
      "This will disable the MathJax menu and zoom features, " +
      "but you can Alt-Click on an expression to obtain the MathJax " +
      "menu instead.\n\nReally change the MathPlayer settings?"],

    IE9warning: ["IE9warning",
      "The MathJax contextual menu will be disabled, but you can " +
      "Alt-Click on an expression to obtain the MathJax menu instead."]
  };

  /*************************************************************/
  /*************************************************************/

  HUB.Browser.Select({
    MSIE: function (browser) {
      var quirks = (document.compatMode === "BackCompat");
      var isIE8 = browser.versionAtLeast("8.0") && document.documentMode > 7;
      MENU.Augment({
        margin: 20,
        msieBackgroundBug: ((document.documentMode||0) < 9),
        msieFixedPositionBug: (quirks || !isIE8),
        msieAboutBug: quirks,
        msieHeightBug: ((document.documentMode||0) < 9)
           // height of window doesn't include title bar in XP
      });
      if (isIE9) {
        delete CONFIG.styles["#MathJax_About"].filter;
        delete CONFIG.styles[".MathJax_Menu"].filter;
      }
    },
    Firefox: function (browser) {
      MENU.skipMouseover = browser.isMobile && browser.versionAtLeast("6.0");
      MENU.skipMousedown = browser.isMobile;
    }
  });
  MENU.isMobile      = HUB.Browser.isMobile;
  MENU.noContextMenu = HUB.Browser.noContextMenu;

  /*************************************************************/

  //
  //  Creates the locale menu from the list of locales in MathJax.Localization.strings
  //
  MENU.CreateLocaleMenu = function () {
    if (!MENU.menu) return;
    var menu = MENU.menu.Find("Language").submenu, items = menu.items;
    //
    //  Get the names of the languages and sort them
    //
    var locales = [], LOCALE = MathJax.Localization.strings;
    for (var id in LOCALE) {if (LOCALE.hasOwnProperty(id)) {locales.push(id)}}
    locales = locales.sort(); menu.items = [];
    //
    //  Add a menu item for each
    //
    for (var i = 0, m = locales.length; i < m; i++) {
      var title = LOCALE[locales[i]].menuTitle;
      if (title) {title += " ("+locales[i]+")"} else {title = locales[i]}
      menu.items.push(ITEM.RADIO([locales[i],title],"locale",{action:MENU.Locale}));
    }
    //
    //  Add the rule and "Load from URL" items
    //
    menu.items.push(items[items.length-2],items[items.length-1]);
  };

  //
  // Create the annotation menu from MathJax.Hub.config.semanticsAnnotations
  //
  MENU.CreateAnnotationMenu = function () {
    if (!MENU.menu) return;
    var menu = MENU.menu.Find("Show Math As","Annotation").submenu;
    var annotations = CONFIG.semanticsAnnotations;
    for (var a in annotations) {
      if (annotations.hasOwnProperty(a)) {
        menu.items.push(ITEM.COMMAND([a,a], MENU.ShowSource, {hidden: true, nativeTouch: true, format: a}));
      }
    }
  };

  /*************************************************************/

  HUB.Register.StartupHook("End Config",function () {

    /*
     *  Get the menu settings from the HUB (which includes the
     *  data from the cookie already), and add the format, if
     *  it wasn't set in the cookie.
     */
    CONFIG.settings = HUB.config.menuSettings;
    if (typeof(CONFIG.settings.showRenderer) !== "undefined") {CONFIG.showRenderer = CONFIG.settings.showRenderer}
    if (typeof(CONFIG.settings.showFontMenu) !== "undefined") {CONFIG.showFontMenu = CONFIG.settings.showFontMenu}
    if (typeof(CONFIG.settings.showContext)  !== "undefined") {CONFIG.showContext  = CONFIG.settings.showContext}
    MENU.getCookie();

    /*
     *  The main menu
     */
    // Localization: items used as key, should be refactored.
    MENU.menu = MENU(
      ITEM.SUBMENU(["Show","Show Math As"],
        ITEM.COMMAND(["MathMLcode","MathML Code"],  MENU.ShowSource, {nativeTouch: true, format: "MathML"}),
        ITEM.COMMAND(["Original","Original Form"],  MENU.ShowSource, {nativeTouch: true}),
        ITEM.SUBMENU(["Annotation","Annotation"], {disabled:true}),
        ITEM.RULE(),
        ITEM.CHECKBOX(["texHints","Show TeX hints in MathML"], "texHints"),
        ITEM.CHECKBOX(["semantics","Add original form as annotation"], "semantics")
      ),
      ITEM.RULE(),
      ITEM.SUBMENU(["Settings","Math Settings"],
        ITEM.SUBMENU(["ZoomTrigger","Zoom Trigger"],
          ITEM.RADIO(["Hover","Hover"],               "zoom", {action: MENU.Zoom}),
          ITEM.RADIO(["Click","Click"],               "zoom", {action: MENU.Zoom}),
          ITEM.RADIO(["DoubleClick","Double-Click"],  "zoom", {action: MENU.Zoom}),
          ITEM.RADIO(["NoZoom","No Zoom"],            "zoom", {value: "None"}),
          ITEM.RULE(),
          ITEM.LABEL(["TriggerRequires","Trigger Requires:"]),
          ITEM.CHECKBOX((HUB.Browser.isMac ? ["Option","Option"] : ["Alt","Alt"]), "ALT"),
          ITEM.CHECKBOX(["Command","Command"],    "CMD",  {hidden: !HUB.Browser.isMac}),
          ITEM.CHECKBOX(["Control","Control"],    "CTRL", {hidden:  HUB.Browser.isMac}),
          ITEM.CHECKBOX(["Shift","Shift"],        "Shift")
        ),
        ITEM.SUBMENU(["ZoomFactor","Zoom Factor"],
          ITEM.RADIO("125%", "zscale"),
          ITEM.RADIO("133%", "zscale"),
          ITEM.RADIO("150%", "zscale"),
          ITEM.RADIO("175%", "zscale"),
          ITEM.RADIO("200%", "zscale"),
          ITEM.RADIO("250%", "zscale"),
          ITEM.RADIO("300%", "zscale"),
          ITEM.RADIO("400%", "zscale")
        ),
        ITEM.RULE(),
        ITEM.SUBMENU(["Renderer","Math Renderer"],    {hidden:!CONFIG.showRenderer},
          ITEM.RADIO(["HTML-CSS","HTML-CSS"],       "renderer", {action: MENU.Renderer}),
          ITEM.RADIO(["CommonHTML","Common HTML"],  "renderer", {action: MENU.Renderer, value:"CommonHTML"}),
          ITEM.RADIO(["PreviewHTML","Preview HTML"],"renderer", {action: MENU.Renderer, value:"PreviewHTML"}),
          ITEM.RADIO(["MathML","MathML"],           "renderer", {action: MENU.Renderer, value:"NativeMML"}),
          ITEM.RADIO(["SVG","SVG"],                 "renderer", {action: MENU.Renderer}),
          ITEM.RADIO(["PlainSource","Plain Source"],"renderer", {action: MENU.Renderer, value:"PlainSource"}),
          ITEM.RULE(),
          ITEM.CHECKBOX(["FastPreview","Fast Preview"], "FastPreview")
        ),
        ITEM.SUBMENU("MathPlayer",  {hidden:!HUB.Browser.isMSIE || !CONFIG.showMathPlayer,
                                                    disabled:!HUB.Browser.hasMathPlayer},
          ITEM.LABEL(["MPHandles","Let MathPlayer Handle:"]),
          ITEM.CHECKBOX(["MenuEvents","Menu Events"],             "mpContext", {action: MENU.MPEvents, hidden:!isIE9}),
          ITEM.CHECKBOX(["MouseEvents","Mouse Events"],           "mpMouse",   {action: MENU.MPEvents, hidden:!isIE9}),
          ITEM.CHECKBOX(["MenuAndMouse","Mouse and Menu Events"], "mpMouse",   {action: MENU.MPEvents, hidden:isIE9})
        ),
        ITEM.SUBMENU(["FontPrefs","Font Preference"],       {hidden:!CONFIG.showFontMenu},
          ITEM.LABEL(["ForHTMLCSS","For HTML-CSS:"]),
          ITEM.RADIO(["Auto","Auto"],          "font", {action: MENU.Font}),
          ITEM.RULE(),
          ITEM.RADIO(["TeXLocal","TeX (local)"],   "font", {action: MENU.Font}),
          ITEM.RADIO(["TeXWeb","TeX (web)"],       "font", {action: MENU.Font}),
          ITEM.RADIO(["TeXImage","TeX (image)"],   "font", {action: MENU.Font}),
          ITEM.RULE(),
          ITEM.RADIO(["STIXLocal","STIX (local)"], "font", {action: MENU.Font}),
          ITEM.RADIO(["STIXWeb","STIX (web)"], "font", {action: MENU.Font}),
          ITEM.RULE(),
          ITEM.RADIO(["AsanaMathWeb","Asana Math (web)"], "font", {action: MENU.Font}),
          ITEM.RADIO(["GyrePagellaWeb","Gyre Pagella (web)"], "font", {action: MENU.Font}),
          ITEM.RADIO(["GyreTermesWeb","Gyre Termes (web)"], "font", {action: MENU.Font}),
          ITEM.RADIO(["LatinModernWeb","Latin Modern (web)"], "font", {action: MENU.Font}),
          ITEM.RADIO(["NeoEulerWeb","Neo Euler (web)"], "font", {action: MENU.Font})
        ),
        ITEM.SUBMENU(["ContextMenu","Contextual Menu"],    {hidden:!CONFIG.showContext},
          ITEM.RADIO(["MathJax","MathJax"], "context"),
          ITEM.RADIO(["Browser","Browser"], "context")
        ),
        ITEM.COMMAND(["Scale","Scale All Math ..."],MENU.Scale),
        ITEM.RULE().With({hidden:!CONFIG.showDiscoverable, name:["","discover_rule"]}),
        ITEM.CHECKBOX(["Discoverable","Highlight on Hover"], "discoverable", {hidden:!CONFIG.showDiscoverable})
      ),
      ITEM.SUBMENU(["Accessibility","Accessibility"],
        ITEM.CHECKBOX(["AssistiveMML","Assistive MathML"], "assistiveMML", {action:MENU.AssistiveMML}),
        ITEM.CHECKBOX(["InTabOrder","Include in Tab Order"], "inTabOrder")
      ),
      ITEM.SUBMENU(["Locale","Language"],                  {hidden:!CONFIG.showLocale, ltr:true},
        ITEM.RADIO("en", "locale",  {action: MENU.Locale}),
        ITEM.RULE().With({hidden:!CONFIG.showLocaleURL, name:["","localURL_rule"]}),
        ITEM.COMMAND(["LoadLocale","Load from URL ..."], MENU.LoadLocale, {hidden:!CONFIG.showLocaleURL})
      ),
      ITEM.RULE(),
      ITEM.COMMAND(["About","About MathJax"],MENU.About),
      ITEM.COMMAND(["Help","MathJax Help"],MENU.Help)
    );

    if (MENU.isMobile) {
      (function () {
        var settings = CONFIG.settings;
        var trigger = MENU.menu.Find("Math Settings","Zoom Trigger").submenu;
        trigger.items[0].disabled = trigger.items[1].disabled = true;
        if (settings.zoom === "Hover" || settings.zoom == "Click") {settings.zoom = "None"}
        trigger.items = trigger.items.slice(0,4);

        if (navigator.appVersion.match(/[ (]Android[) ]/)) {
          MENU.ITEM.SUBMENU.Augment({marker: "\u00BB"});
        }
      })();
    }

    MENU.CreateLocaleMenu();
    MENU.CreateAnnotationMenu();
  });

  MENU.showRenderer = function (show) {
    MENU.cookie.showRenderer = CONFIG.showRenderer = show; MENU.saveCookie();
    MENU.menu.Find("Math Settings","Math Renderer").hidden = !show;
  };
  MENU.showMathPlayer = function (show) {
    MENU.cookie.showMathPlayer = CONFIG.showMathPlayer = show; MENU.saveCookie();
    MENU.menu.Find("Math Settings","MathPlayer").hidden = !show;
  };
  MENU.showFontMenu = function (show) {
    MENU.cookie.showFontMenu = CONFIG.showFontMenu = show; MENU.saveCookie();
    MENU.menu.Find("Math Settings","Font Preference").hidden = !show;
  };
  MENU.showContext = function (show) {
    MENU.cookie.showContext = CONFIG.showContext = show; MENU.saveCookie();
    MENU.menu.Find("Math Settings","Contextual Menu").hidden = !show;
  };
  MENU.showDiscoverable = function (show) {
    MENU.cookie.showDiscoverable = CONFIG.showDiscoverable = show; MENU.saveCookie();
    MENU.menu.Find("Math Settings","Highlight on Hover").hidden = !show;
    MENU.menu.Find("Math Settings","discover_rule").hidden = !show;
  };
  MENU.showLocale = function (show) {
    MENU.cookie.showLocale = CONFIG.showLocale = show; MENU.saveCookie();
    MENU.menu.Find("Language").hidden = !show;
  };

  MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function () {
    if (!MathJax.OutputJax["HTML-CSS"].config.imageFont)
      {MENU.menu.Find("Math Settings","Font Preference","TeX (image)").disabled = true}
  });

  /*************************************************************/

  CALLBACK.Queue(
    HUB.Register.StartupHook("End Config",{}), // wait until config is complete
    ["Styles",AJAX,CONFIG.styles],
    ["Post",HUB.Startup.signal,"MathMenu Ready"],
    ["loadComplete",AJAX,"[MathJax]/extensions/MathMenu.js"]
  );

})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);

/*************************************************************
 *
 *  MathJax/jax/element/mml/jax.js
 *  
 *  Implements the MML ElementJax that holds the internal represetation
 *  of the mathematics on the page.  Various InputJax will produce this
 *  format, and the OutputJax will display it in various formats.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2017 The MathJax Consortium
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

MathJax.ElementJax.mml = MathJax.ElementJax({
  mimeType: "jax/mml"
},{
  id: "mml",
  version: "2.7.2",
  directory: MathJax.ElementJax.directory + "/mml",
  extensionDir: MathJax.ElementJax.extensionDir + "/mml",
  optableDir: MathJax.ElementJax.directory + "/mml/optable"
});

MathJax.ElementJax.mml.Augment({
  Init: function () {
    if (arguments.length === 1 && arguments[0].type === "math") {this.root = arguments[0]}
      else {this.root = MathJax.ElementJax.mml.math.apply(this,arguments)}
    if (this.root.attr && this.root.attr.mode) {
      if (!this.root.display && this.root.attr.mode === "display") {
        this.root.display = "block";
        this.root.attrNames.push("display");
      }
      delete this.root.attr.mode;
      for (var i = 0, m = this.root.attrNames.length; i < m; i++) {
        if (this.root.attrNames[i] === "mode") {this.root.attrNames.splice(i,1); break}
      }
    }
  }
},{
  INHERIT: "_inherit_",
  AUTO: "_auto_",
  SIZE: {
    INFINITY: "infinity",
    SMALL: "small",
    NORMAL: "normal",
    BIG: "big"
  },
  COLOR: {
    TRANSPARENT: "transparent"
  },
  VARIANT: {
    NORMAL: "normal",
    BOLD: "bold",
    ITALIC: "italic",
    BOLDITALIC: "bold-italic",
    DOUBLESTRUCK: "double-struck",
    FRAKTUR: "fraktur",
    BOLDFRAKTUR: "bold-fraktur",
    SCRIPT: "script",
    BOLDSCRIPT: "bold-script",
    SANSSERIF: "sans-serif",
    BOLDSANSSERIF: "bold-sans-serif",
    SANSSERIFITALIC: "sans-serif-italic",
    SANSSERIFBOLDITALIC: "sans-serif-bold-italic",
    MONOSPACE: "monospace",
    INITIAL: "inital",
    TAILED: "tailed",
    LOOPED: "looped",
    STRETCHED: "stretched",
    CALIGRAPHIC: "-tex-caligraphic",
    OLDSTYLE: "-tex-oldstyle"
  },
  FORM: {
    PREFIX: "prefix",
    INFIX: "infix",
    POSTFIX: "postfix"
  },
  LINEBREAK: {
    AUTO: "auto",
    NEWLINE: "newline",
    NOBREAK: "nobreak",
    GOODBREAK: "goodbreak",
    BADBREAK: "badbreak"
  },
  LINEBREAKSTYLE: {
    BEFORE: "before",
    AFTER: "after",
    DUPLICATE: "duplicate",
    INFIXLINBREAKSTYLE: "infixlinebreakstyle"
  },
  INDENTALIGN: {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right",
    AUTO: "auto",
    ID: "id",
    INDENTALIGN: "indentalign"
  },
  INDENTSHIFT: {
    INDENTSHIFT: "indentshift"
  },
  LINETHICKNESS: {
    THIN: "thin",
    MEDIUM: "medium",
    THICK: "thick"
  },
  NOTATION: {
    LONGDIV: "longdiv",
    ACTUARIAL: "actuarial",
    RADICAL: "radical",
    BOX: "box",
    ROUNDEDBOX: "roundedbox",
    CIRCLE: "circle",
    LEFT: "left",
    RIGHT: "right",
    TOP: "top",
    BOTTOM: "bottom",
    UPDIAGONALSTRIKE: "updiagonalstrike",
    DOWNDIAGONALSTRIKE: "downdiagonalstrike",
    UPDIAGONALARROW: "updiagonalarrow",
    VERTICALSTRIKE: "verticalstrike",
    HORIZONTALSTRIKE: "horizontalstrike",
    PHASORANGLE: "phasorangle",
    MADRUWB: "madruwb"
  },
  ALIGN: {
    TOP: "top",
    BOTTOM: "bottom",
    CENTER: "center",
    BASELINE: "baseline",
    AXIS: "axis",
    LEFT: "left",
    RIGHT: "right"
  },
  LINES: {
    NONE: "none",
    SOLID: "solid",
    DASHED: "dashed"
  },
  SIDE: {
    LEFT: "left",
    RIGHT: "right",
    LEFTOVERLAP: "leftoverlap",
    RIGHTOVERLAP: "rightoverlap"
  },
  WIDTH: {
    AUTO: "auto",
    FIT: "fit"
  },
  ACTIONTYPE: {
    TOGGLE: "toggle",
    STATUSLINE: "statusline",
    TOOLTIP: "tooltip",
    INPUT: "input"
  },
  LENGTH: {
    VERYVERYTHINMATHSPACE: "veryverythinmathspace",
    VERYTHINMATHSPACE: "verythinmathspace",
    THINMATHSPACE: "thinmathspace",
    MEDIUMMATHSPACE: "mediummathspace",
    THICKMATHSPACE: "thickmathspace",
    VERYTHICKMATHSPACE: "verythickmathspace",
    VERYVERYTHICKMATHSPACE: "veryverythickmathspace",
    NEGATIVEVERYVERYTHINMATHSPACE: "negativeveryverythinmathspace",
    NEGATIVEVERYTHINMATHSPACE: "negativeverythinmathspace",
    NEGATIVETHINMATHSPACE: "negativethinmathspace",
    NEGATIVEMEDIUMMATHSPACE: "negativemediummathspace",
    NEGATIVETHICKMATHSPACE: "negativethickmathspace",
    NEGATIVEVERYTHICKMATHSPACE: "negativeverythickmathspace",
    NEGATIVEVERYVERYTHICKMATHSPACE: "negativeveryverythickmathspace"
  },
  OVERFLOW: {
    LINBREAK: "linebreak",
    SCROLL: "scroll",
    ELIDE: "elide",
    TRUNCATE: "truncate",
    SCALE: "scale"
  },
  UNIT: {
    EM: "em",
    EX: "ex",
    PX: "px",
    IN: "in",
    CM: "cm",
    MM: "mm",
    PT: "pt",
    PC: "pc"
  },
  TEXCLASS: {
    ORD:   0,
    OP:    1,
    BIN:   2,
    REL:   3,
    OPEN:  4,
    CLOSE: 5,
    PUNCT: 6,
    INNER: 7,
    VCENTER: 8,
    NONE:   -1
  },
  TEXCLASSNAMES: ["ORD", "OP", "BIN", "REL", "OPEN", "CLOSE", "PUNCT", "INNER", "VCENTER"],
  skipAttributes: {
    texClass:true, useHeight:true, texprimestyle:true
  },
  copyAttributes: {
    displaystyle:1, scriptlevel:1, open:1, close:1, form:1,
    actiontype: 1,
    fontfamily:true, fontsize:true, fontweight:true, fontstyle:true,
    color:true, background:true,
    id:true, "class":1, href:true, style:true
  },
  copyAttributeNames: [
    "displaystyle", "scriptlevel", "open", "close", "form",  // force these to be copied
    "actiontype",
    "fontfamily", "fontsize", "fontweight", "fontstyle",
    "color", "background",
    "id", "class", "href", "style"
  ],
  nocopyAttributes: {
    fontfamily: true, fontsize: true, fontweight: true, fontstyle: true,
    color: true, background: true,
    id: true, 'class': true, href: true, style: true,
    xmlns: true
  },
  Error: function (message,def) {
    var mml = this.merror(message),
        dir = MathJax.Localization.fontDirection(),
        font = MathJax.Localization.fontFamily();
    if (def) {mml = mml.With(def)}
    if (dir || font) {
      mml = this.mstyle(mml);
      if (dir) {mml.dir = dir}
      if (font) {mml.style.fontFamily = "font-family: "+font}
    }
    return mml;
  }
});

(function (MML) {

  MML.mbase = MathJax.Object.Subclass({
    type: "base", isToken: false,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT
    },
    noInherit: {},
    noInheritAttribute: {
      texClass: true
    },
    getRemoved: {},
    linebreakContainer: false,
    
    Init: function () {
      this.data = [];
      if (this.inferRow && !(arguments.length === 1 && arguments[0].inferred))
        {this.Append(MML.mrow().With({inferred: true, notParent: true}))}
      this.Append.apply(this,arguments);
    },
    With: function (def) {
      for (var id in def) {if (def.hasOwnProperty(id)) {this[id] = def[id]}}
      return this;
    },
    Append: function () {
      if (this.inferRow && this.data.length) {
        this.data[0].Append.apply(this.data[0],arguments);
      } else {
        for (var i = 0, m = arguments.length; i < m; i++)
          {this.SetData(this.data.length,arguments[i])}
      }
    },
    SetData: function (i,item) {
      if (item != null) {
        if (!(item instanceof MML.mbase))
          {item = (this.isToken || this.isChars ? MML.chars(item) : MML.mtext(item))}
        item.parent = this;
        item.setInherit(this.inheritFromMe ? this : this.inherit);
      }
      this.data[i] = item;
    },
    Parent: function () {
      var parent = this.parent;
      while (parent && parent.notParent) {parent = parent.parent}
      return parent;
    },
    Get: function (name,nodefault,noself) {
      if (!noself) {
        if (this[name] != null) {return this[name]}
        if (this.attr && this.attr[name] != null) {return this.attr[name]}
      }
      // FIXME: should cache these values and get from cache
      // (clear cache when appended to a new object?)
      var parent = this.Parent();
      if (parent && parent["adjustChild_"+name] != null) {
        return (parent["adjustChild_"+name])(this.childPosition(),nodefault);
      }
      var obj = this.inherit; var root = obj;
      while (obj) {
        var value = obj[name]; if (value == null && obj.attr) {value = obj.attr[name]}
        if (obj.removedStyles && obj.getRemoved[name] && value == null) value = obj.removedStyles[obj.getRemoved[name]];
        if (value != null && obj.noInheritAttribute && !obj.noInheritAttribute[name]) {
          var noInherit = obj.noInherit[this.type];
          if (!(noInherit && noInherit[name])) {return value}
        }
        root = obj; obj = obj.inherit;
      }
      if (!nodefault) {
        if (this.defaults[name] === MML.AUTO) {return this.autoDefault(name)}
        if (this.defaults[name] !== MML.INHERIT && this.defaults[name] != null)
          {return this.defaults[name]}
        if (root) {return root.defaults[name]}
      }
      return null;
    },
    hasValue: function (name) {return (this.Get(name,true) != null)},
    getValues: function () {
      var values = {};
      for (var i = 0, m = arguments.length; i < m; i++)
        {values[arguments[i]] = this.Get(arguments[i])}
      return values;
    },
    adjustChild_scriptlevel:   function (i,nodef) {return this.Get("scriptlevel",nodef)},   // always inherit from parent
    adjustChild_displaystyle:  function (i,nodef) {return this.Get("displaystyle",nodef)},  // always inherit from parent
    adjustChild_texprimestyle: function (i,nodef) {return this.Get("texprimestyle",nodef)}, // always inherit from parent
    childPosition: function () {
      var child = this, parent = child.parent;
      while (parent.notParent) {child = parent; parent = child.parent}
      for (var i = 0, m = parent.data.length; i < m; i++) {if (parent.data[i] === child) {return i}}
      return null;
    },
    setInherit: function (obj) {
      if (obj !== this.inherit && this.inherit == null) {
        this.inherit = obj;
        for (var i = 0, m = this.data.length; i < m; i++) {
          if (this.data[i] && this.data[i].setInherit) {this.data[i].setInherit(obj)}
        }
      }
    },
    setTeXclass: function (prev) {
      this.getPrevClass(prev);
      return (typeof(this.texClass) !== "undefined" ? this : prev);
    },
    getPrevClass: function (prev) {
      if (prev) {
        this.prevClass = prev.Get("texClass");
        this.prevLevel = prev.Get("scriptlevel");
      }
    },
    updateTeXclass: function (core) {
      if (core) {
        this.prevClass = core.prevClass; delete core.prevClass;
        this.prevLevel = core.prevLevel; delete core.prevLevel;
        this.texClass = core.Get("texClass");
      }
    },
    texSpacing: function () {
      var prev = (this.prevClass != null ? this.prevClass : MML.TEXCLASS.NONE);
      var tex = (this.Get("texClass") || MML.TEXCLASS.ORD);
      if (prev === MML.TEXCLASS.NONE || tex === MML.TEXCLASS.NONE) {return ""}
      if (prev === MML.TEXCLASS.VCENTER) {prev = MML.TEXCLASS.ORD}
      if (tex  === MML.TEXCLASS.VCENTER) {tex  = MML.TEXCLASS.ORD}
      var space = this.TEXSPACE[prev][tex];
      if ((this.prevLevel > 0 || this.Get("scriptlevel") > 0) && space >= 0) {return ""}
      return this.TEXSPACELENGTH[Math.abs(space)];
    },
    TEXSPACELENGTH:[
      "",
      MML.LENGTH.THINMATHSPACE,
      MML.LENGTH.MEDIUMMATHSPACE,
      MML.LENGTH.THICKMATHSPACE
    ],
    // See TeXBook Chapter 18 (p. 170)
    TEXSPACE: [
      [ 0,-1, 2, 3, 0, 0, 0, 1], // ORD
      [-1,-1, 0, 3, 0, 0, 0, 1], // OP
      [ 2, 2, 0, 0, 2, 0, 0, 2], // BIN
      [ 3, 3, 0, 0, 3, 0, 0, 3], // REL
      [ 0, 0, 0, 0, 0, 0, 0, 0], // OPEN
      [ 0,-1, 2, 3, 0, 0, 0, 1], // CLOSE
      [ 1, 1, 0, 1, 1, 1, 1, 1], // PUNCT
      [ 1,-1, 2, 3, 1, 0, 1, 1]  // INNER
    ],
    autoDefault: function (name) {return ""},
    isSpacelike: function () {return false},
    isEmbellished: function () {return false},
    Core: function () {return this},
    CoreMO: function () {return this},
    childIndex: function(child) {
      if (child == null) return;
      for (var i = 0, m = this.data.length; i < m; i++) if (child === this.data[i]) return i;
    },
    CoreIndex: function () {
      return (this.inferRow ? this.data[0]||this : this).childIndex(this.Core());
    },
    hasNewline: function () {
      if (this.isEmbellished()) {return this.CoreMO().hasNewline()}
      if (this.isToken || this.linebreakContainer) {return false}
      for (var i = 0, m = this.data.length; i < m; i++) {
        if (this.data[i] && this.data[i].hasNewline()) {return true}
      }
      return false;
    },
    array: function () {if (this.inferred) {return this.data} else {return [this]}},
    toString: function () {return this.type+"("+this.data.join(",")+")"},
    getAnnotation: function () {return null}
  },{
    childrenSpacelike: function () {
      for (var i = 0, m = this.data.length; i < m; i++)
        {if (!this.data[i].isSpacelike()) {return false}}
      return true;
    },
    childEmbellished: function () {
      return (this.data[0] && this.data[0].isEmbellished());
    },
    childCore: function () {return (this.inferRow && this.data[0] ? this.data[0].Core() : this.data[0])},
    childCoreMO: function () {return (this.data[0] ? this.data[0].CoreMO() : null)},
    setChildTeXclass: function (prev) {
      if (this.data[0]) {
        prev = this.data[0].setTeXclass(prev);
        this.updateTeXclass(this.data[0]);
      }
      return prev;
    },
    setBaseTeXclasses: function (prev) {
      this.getPrevClass(prev); this.texClass = null;
      if (this.data[0]) {
        if (this.isEmbellished() || this.data[0].isa(MML.mi)) {
          prev = this.data[0].setTeXclass(prev);
          this.updateTeXclass(this.Core());
        } else {this.data[0].setTeXclass(); prev = this}
      } else {prev = this}
      for (var i = 1, m = this.data.length; i < m; i++)
        {if (this.data[i]) {this.data[i].setTeXclass()}}
      return prev;
    },
    setSeparateTeXclasses: function (prev) {
      this.getPrevClass(prev);
      for (var i = 0, m = this.data.length; i < m; i++)
        {if (this.data[i]) {this.data[i].setTeXclass()}}
      if (this.isEmbellished()) {this.updateTeXclass(this.Core())}
      return this;
    }
  });
  
  MML.mi = MML.mbase.Subclass({
    type: "mi", isToken: true,
    texClass: MML.TEXCLASS.ORD,
    defaults: {
      mathvariant: MML.AUTO,
      mathsize: MML.INHERIT,
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT
    },
    autoDefault: function (name) {
      if (name === "mathvariant") {
        var mi = (this.data[0]||"").toString();
        /// PORTED FROM v8.1 ELS-7866 exclude currency symbols (0x24 === $, 0x20A? are foreign currency symbols) from being italicized.
        return ((mi.length === 1 && mi.charCodeAt(0) !== 0x24 && mi.charCodeAt(0) !== 0x20A3 && mi.charCodeAt(0) !== 0x20a4 && mi.charCodeAt(0) !== 0x20a7 && mi.charCodeAt(0) !== 0x20ac) ||
               (mi.length === 2 && mi.charCodeAt(0) >= 0xD800 && mi.charCodeAt(0) < 0xDC00) ?
                  MML.VARIANT.ITALIC : MML.VARIANT.NORMAL);
      }
      return "";
    },
    setTeXclass: function (prev) {
      this.getPrevClass(prev);
      var name = this.data.join("");
      if (name.length > 1 && name.match(/^[a-z][a-z0-9]*$/i) &&
          this.texClass === MML.TEXCLASS.ORD) {
        this.texClass = MML.TEXCLASS.OP;
        this.autoOP = true;
      }
      return this;
    }
  });
  
  MML.mn = MML.mbase.Subclass({
    type: "mn", isToken: true,
    texClass: MML.TEXCLASS.ORD,
    defaults: {
      mathvariant: MML.INHERIT,
      mathsize: MML.INHERIT,
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT
    }
  });
  
  MML.mo = MML.mbase.Subclass({
    type: "mo", isToken: true,
    defaults: {
      mathvariant: MML.INHERIT,
      mathsize: MML.INHERIT,
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT,
      form: MML.AUTO,
      fence: MML.AUTO,
      separator: MML.AUTO,
      lspace: MML.AUTO,
      rspace: MML.AUTO,
      stretchy: MML.AUTO,
      symmetric: MML.AUTO,
      maxsize: MML.AUTO,
      minsize: MML.AUTO,
      largeop: MML.AUTO,
      movablelimits: MML.AUTO,
      accent: MML.AUTO,
      linebreak: MML.LINEBREAK.AUTO,
      lineleading: MML.INHERIT,
      linebreakstyle: MML.AUTO,
      linebreakmultchar: MML.INHERIT,
      indentalign: MML.INHERIT,
      indentshift: MML.INHERIT,
      indenttarget: MML.INHERIT,
      indentalignfirst: MML.INHERIT,
      indentshiftfirst: MML.INHERIT,
      indentalignlast: MML.INHERIT,
      indentshiftlast: MML.INHERIT,
      texClass: MML.AUTO
    },
    defaultDef: {
      form: MML.FORM.INFIX,
      fence: false,
      separator: false,
      lspace: MML.LENGTH.THICKMATHSPACE,
      rspace: MML.LENGTH.THICKMATHSPACE,
      stretchy: false,
      symmetric: false,
      maxsize: MML.SIZE.INFINITY,
      minsize: '0em', //'1em',
      largeop: false,
      movablelimits: false,
      accent: false,
      linebreak: MML.LINEBREAK.AUTO,
      lineleading: "1ex",
      linebreakstyle: "before",
      indentalign: MML.INDENTALIGN.AUTO,
      indentshift: "0",
      indenttarget: "",
      indentalignfirst: MML.INDENTALIGN.INDENTALIGN,
      indentshiftfirst: MML.INDENTSHIFT.INDENTSHIFT,
      indentalignlast: MML.INDENTALIGN.INDENTALIGN,
      indentshiftlast: MML.INDENTSHIFT.INDENTSHIFT,
      texClass: MML.TEXCLASS.REL // for MML, but TeX sets ORD explicitly
    },
    SPACE_ATTR: {lspace: 0x01, rspace: 0x02, form: 0x04},
    useMMLspacing: 0x07,
    autoDefault: function (name,nodefault) {
      var def = this.def;
      if (!def) {
        if (name === "form") {this.useMMLspacing &= ~this.SPACE_ATTR.form; return this.getForm()}
        var mo = this.data.join("");
        var forms = [this.Get("form"),MML.FORM.INFIX,MML.FORM.POSTFIX,MML.FORM.PREFIX];
        for (var i = 0, m = forms.length; i < m; i++) {
          var data = this.OPTABLE[forms[i]][mo];
          if (data) {def = this.makeDef(data); break}
        }
        if (!def) {def = this.CheckRange(mo)}
        if (!def && nodefault) {def = {}} else {
          if (!def) {def = MathJax.Hub.Insert({},this.defaultDef)}
          if (this.parent) {this.def = def} else {def = MathJax.Hub.Insert({},def)}
          def.form = forms[0];
        }
      }
      this.useMMLspacing &= ~(this.SPACE_ATTR[name] || 0);
      if (def[name] != null) {return def[name]}
      else if (!nodefault) {return this.defaultDef[name]}
      return "";
    },
    CheckRange: function (mo) {
      var n = mo.charCodeAt(0);
      if (n >= 0xD800 && n < 0xDC00) {n = (((n-0xD800)<<10)+(mo.charCodeAt(1)-0xDC00))+0x10000}
      for (var i = 0, m = this.RANGES.length; i < m && this.RANGES[i][0] <= n; i++) {
        if (n <= this.RANGES[i][1]) {
          if (this.RANGES[i][3]) {
            var file = MML.optableDir+"/"+this.RANGES[i][3]+".js";
            this.RANGES[i][3] = null;
            MathJax.Hub.RestartAfter(MathJax.Ajax.Require(file));
          }
          var data = MML.TEXCLASSNAMES[this.RANGES[i][2]];
          data = this.OPTABLE.infix[mo] = MML.mo.OPTYPES[data === "BIN" ? "BIN3" : data];
          return this.makeDef(data);
        }
      }
      return null;
    },
    makeDef: function (data) {
      if (data[2] == null) {data[2] = this.defaultDef.texClass}
      if (!data[3]) {data[3] = {}}
      var def = MathJax.Hub.Insert({},data[3]);
      def.lspace = this.SPACE[data[0]]; def.rspace = this.SPACE[data[1]];
      def.texClass = data[2];
      if (def.texClass === MML.TEXCLASS.REL &&
         (this.movablelimits || this.data.join("").match(/^[a-z]+$/i)))
             {def.texClass = MML.TEXCLASS.OP} // mark named operators as OP
      return def;
    },
    getForm: function () {
      var core = this, parent = this.parent, Parent = this.Parent();
      while (Parent && Parent.isEmbellished())
        {core = parent; parent = Parent.parent; Parent = Parent.Parent()}
      if (parent && parent.type === "mrow" && parent.NonSpaceLength() !== 1) {
        if (parent.FirstNonSpace() === core) {return MML.FORM.PREFIX}
        if (parent.LastNonSpace() === core) {return MML.FORM.POSTFIX}
      }
      return MML.FORM.INFIX;
    },
    isEmbellished: function () {return true},
    hasNewline: function () {return (this.Get("linebreak") === MML.LINEBREAK.NEWLINE)},
    CoreParent: function () {
      var parent = this;
      while (parent && parent.isEmbellished() &&
             parent.CoreMO() === this && !parent.isa(MML.math)) {parent = parent.Parent()}
      return parent;
    },
    CoreText: function (parent) {
      if (!parent) {return ""}
      if (parent.isEmbellished()) {return parent.CoreMO().data.join("")}
      while ((((parent.isa(MML.mrow) || parent.isa(MML.TeXAtom) ||
                parent.isa(MML.mstyle) || parent.isa(MML.mphantom)) &&
                parent.data.length === 1) || parent.isa(MML.munderover)) &&
                parent.data[0]) {parent = parent.data[0]}
      if (!parent.isToken) {return ""} else {return parent.data.join("")}
    },
    remapChars: {
      '*':"\u2217",
      '"':"\u2033",
      "\u00B0":"\u2218",
      "\u00B2":"2",
      "\u00B3":"3",
      "\u00B4":"\u2032",
      "\u00B9":"1"
    },
    remap: function (text,map) {
      text = text.replace(/-/g,"\u2212");
      if (map) {
        text = text.replace(/'/g,"\u2032").replace(/`/g,"\u2035");
        if (text.length === 1) {text = map[text]||text}
      }
      return text;
    },
    setTeXclass: function (prev) {
      var values = this.getValues("form","lspace","rspace","fence"); // sets useMMLspacing
      if (this.useMMLspacing) {this.texClass = MML.TEXCLASS.NONE; return this}
      if (values.fence && !this.texClass) {
        if (values.form === MML.FORM.PREFIX) {this.texClass = MML.TEXCLASS.OPEN}
        if (values.form === MML.FORM.POSTFIX) {this.texClass = MML.TEXCLASS.CLOSE}
      }
      this.texClass = this.Get("texClass");
      if (this.data.join("") === "\u2061") {
        // force previous node to be texClass OP, and skip this node
        if (prev) {prev.texClass = MML.TEXCLASS.OP; prev.fnOP = true}
        this.texClass = this.prevClass = MML.TEXCLASS.NONE;
        return prev;
      }
      return this.adjustTeXclass(prev);
    },
    adjustTeXclass: function (prev) {
      if (this.texClass === MML.TEXCLASS.NONE) {return prev}
      if (prev) {
        if (prev.autoOP && (this.texClass === MML.TEXCLASS.BIN ||
                            this.texClass === MML.TEXCLASS.REL))
          {prev.texClass = MML.TEXCLASS.ORD}
        this.prevClass = prev.texClass || MML.TEXCLASS.ORD;
        this.prevLevel = prev.Get("scriptlevel")
      } else {this.prevClass = MML.TEXCLASS.NONE}
      if (this.texClass === MML.TEXCLASS.BIN &&
            (this.prevClass === MML.TEXCLASS.NONE ||
             this.prevClass === MML.TEXCLASS.BIN ||
             this.prevClass === MML.TEXCLASS.OP ||
             this.prevClass === MML.TEXCLASS.REL ||
             this.prevClass === MML.TEXCLASS.OPEN ||
             this.prevClass === MML.TEXCLASS.PUNCT)) {
        this.texClass = MML.TEXCLASS.ORD;
      } else if (this.prevClass === MML.TEXCLASS.BIN &&
                   (this.texClass === MML.TEXCLASS.REL ||
                    this.texClass === MML.TEXCLASS.CLOSE ||
                    this.texClass === MML.TEXCLASS.PUNCT)) {
        prev.texClass = this.prevClass = MML.TEXCLASS.ORD;
      } else if (this.texClass === MML.TEXCLASS.BIN) {
        //
        // Check if node is the last one in its container since the rule
        // above only takes effect if there is a node that follows.
        //
        var child = this, parent = this.parent;
        while (parent && parent.parent && parent.isEmbellished() &&
              (parent.data.length === 1 ||
              (parent.type !== "mrow" && parent.Core() === child))) // handles msubsup and munderover
                 {child = parent; parent = parent.parent}
        if (parent.data[parent.data.length-1] === child) this.texClass = MML.TEXCLASS.ORD;
      }
      return this;
    }
  });
  
  MML.mtext = MML.mbase.Subclass({
    type: "mtext", isToken: true,
    isSpacelike: function () {return true},
    texClass: MML.TEXCLASS.ORD,
    defaults: {
      mathvariant: MML.INHERIT,
      mathsize: MML.INHERIT,
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT
    }
  });

  MML.mspace = MML.mbase.Subclass({
    type: "mspace", isToken: true,
    isSpacelike: function () {return true},
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      width: "0em",
      height: "0ex",
      depth: "0ex",
      linebreak: MML.LINEBREAK.AUTO
    },
    hasDimAttr: function () {
      return (this.hasValue("width") || this.hasValue("height") ||
              this.hasValue("depth"));
    },
    hasNewline: function () {
      // The MathML spec says that the linebreak attribute should be ignored
      // if any dimensional attribute is set.
      return (!this.hasDimAttr() &&
              this.Get("linebreak") === MML.LINEBREAK.NEWLINE);
    }
  });

  MML.ms = MML.mbase.Subclass({
    type: "ms", isToken: true,
    texClass: MML.TEXCLASS.ORD,
    defaults: {
      mathvariant: MML.INHERIT,
      mathsize: MML.INHERIT,
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT,
      lquote: '"',
      rquote: '"'
    }
  });

  MML.mglyph = MML.mbase.Subclass({
    type: "mglyph", isToken: true,
    texClass: MML.TEXCLASS.ORD,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      alt: "",
      src: "",
      width: MML.AUTO,
      height: MML.AUTO,
      valign: "0em"
    }
  });

  MML.mrow = MML.mbase.Subclass({
    type: "mrow",
    isSpacelike: MML.mbase.childrenSpacelike,
    inferred: false, notParent: false,
    isEmbellished: function () {
      var isEmbellished = false;
      for (var i = 0, m = this.data.length; i < m; i++) {
        if (this.data[i] == null) continue;
        if (this.data[i].isEmbellished()) {
          if (isEmbellished) {return false}
          isEmbellished = true; this.core = i;
        } else if (!this.data[i].isSpacelike()) {return false}
      }
      return isEmbellished;
    },
    NonSpaceLength: function () {
      var n = 0;
      for (var i = 0, m = this.data.length; i < m; i++)
        {if (this.data[i] && !this.data[i].isSpacelike()) {n++}}
      return n;
    },
    FirstNonSpace: function () {
      for (var i = 0, m = this.data.length; i < m; i++)
        {if (this.data[i] && !this.data[i].isSpacelike()) {return this.data[i]}}
      return null;
    },
    LastNonSpace: function () {
      for (var i = this.data.length-1; i >= 0; i--)
        {if (this.data[0] && !this.data[i].isSpacelike()) {return this.data[i]}}
      return null;
    },
    Core: function () {
      if (!(this.isEmbellished()) || typeof(this.core) === "undefined") {return this}
      return this.data[this.core];
    },
    CoreMO: function () {
      if (!(this.isEmbellished()) || typeof(this.core) === "undefined") {return this}
      return this.data[this.core].CoreMO();
    },
    toString: function () {
      if (this.inferred) {return '[' + this.data.join(',') + ']'}
      return this.SUPER(arguments).toString.call(this);
    },
    setTeXclass: function (prev) {
      var i, m = this.data.length;
      if ((this.open || this.close) && (!prev || !prev.fnOP)) {
        //
        // <mrow> came from \left...\right
        // so treat as subexpression (tex class INNER)
        //
        this.getPrevClass(prev); prev = null;
        for (i = 0; i < m; i++)
          {if (this.data[i]) {prev = this.data[i].setTeXclass(prev)}}
        if (!this.hasOwnProperty("texClass")) this.texClass = MML.TEXCLASS.INNER;
        return this;
      } else {
        //
        //  Normal <mrow>, so treat as
        //  thorugh mrow is not there
        //
        for (i = 0; i < m; i++)
          {if (this.data[i]) {prev = this.data[i].setTeXclass(prev)}}
        if (this.data[0]) {this.updateTeXclass(this.data[0])}
        return prev;
      }
    },
    getAnnotation: function (name) {
      if (this.data.length != 1) return null;
      return this.data[0].getAnnotation(name);
    }
  });

  MML.mfrac = MML.mbase.Subclass({
    type: "mfrac", num: 0, den: 1,
    linebreakContainer: true,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      linethickness: MML.LINETHICKNESS.MEDIUM,
      numalign: MML.ALIGN.CENTER,
      denomalign: MML.ALIGN.CENTER,
      bevelled: false
    },
    adjustChild_displaystyle: function (n) {return false},
    adjustChild_scriptlevel: function (n) {
      var level = this.Get("scriptlevel");
      if (!this.Get("displaystyle") || level > 0) {level++}
      return level;
    },
    adjustChild_texprimestyle: function (n) {
      if (n == this.den) {return true}
      return this.Get("texprimestyle");
    },
    setTeXclass: MML.mbase.setSeparateTeXclasses
  });

  MML.msqrt = MML.mbase.Subclass({
    type: "msqrt",
    inferRow: true,
    linebreakContainer: true,
    texClass: MML.TEXCLASS.ORD,
    setTeXclass: MML.mbase.setSeparateTeXclasses,
    adjustChild_texprimestyle: function (n) {return true}
  });

  MML.mroot = MML.mbase.Subclass({
    type: "mroot",
    linebreakContainer: true,
    texClass: MML.TEXCLASS.ORD,
    adjustChild_displaystyle: function (n) {
      if (n === 1) {return false}
      return this.Get("displaystyle");
    },
    adjustChild_scriptlevel: function (n) {
      var level = this.Get("scriptlevel");
      if (n === 1) {level += 2}
      return level;
    },
    adjustChild_texprimestyle: function (n) {
      if (n === 0) {return true};
      return this.Get("texprimestyle");
    },
    setTeXclass: MML.mbase.setSeparateTeXclasses
  });

  MML.mstyle = MML.mbase.Subclass({
    type: "mstyle",
    isSpacelike: MML.mbase.childrenSpacelike,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    inferRow: true,
    defaults: {
      scriptlevel: MML.INHERIT,
      displaystyle: MML.INHERIT,
      scriptsizemultiplier: Math.sqrt(1/2),
      scriptminsize: "8pt",
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT,
      infixlinebreakstyle: MML.LINEBREAKSTYLE.BEFORE,
      decimalseparator: "."
    },
    adjustChild_scriptlevel: function (n) {
      var level = this.scriptlevel;
      if (level == null) {
        level = this.Get("scriptlevel");
      } else if (String(level).match(/^ *[-+]/)) {
        var LEVEL = this.Get("scriptlevel",null,true);
        level = LEVEL + parseInt(level);
      }
      return level;
    },
    inheritFromMe: true,
    noInherit: {
      mpadded: {width: true, height: true, depth: true, lspace: true, voffset: true},
      mtable:  {width: true, height: true, depth: true, align: true}
    },
    getRemoved: {fontfamily:"fontFamily", fontweight:"fontWeight", fontstyle:"fontStyle", fontsize:"fontSize"},
    setTeXclass: MML.mbase.setChildTeXclass
  });

  MML.merror = MML.mbase.Subclass({
    type: "merror",
    inferRow: true,
    linebreakContainer: true,
    texClass: MML.TEXCLASS.ORD
  });

  MML.mpadded = MML.mbase.Subclass({
    type: "mpadded",
    inferRow: true,
    isSpacelike: MML.mbase.childrenSpacelike,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      width: "",
      height: "",
      depth: "",
      lspace: 0,
      voffset: 0
    },
    setTeXclass: MML.mbase.setChildTeXclass
  });

  MML.mphantom = MML.mbase.Subclass({
    type: "mphantom",
    texClass: MML.TEXCLASS.ORD,
    inferRow: true,
    isSpacelike: MML.mbase.childrenSpacelike,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    setTeXclass: MML.mbase.setChildTeXclass
  });

  MML.mfenced = MML.mbase.Subclass({
    type: "mfenced",
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      open: '(',
      close: ')',
      separators: ','
    },
    addFakeNodes: function () {
      var values = this.getValues("open","close","separators");
      values.open = values.open.replace(/[ \t\n\r]/g,"");
      values.close = values.close.replace(/[ \t\n\r]/g,"");
      values.separators = values.separators.replace(/[ \t\n\r]/g,"");
      //
      //  Create a fake node for the open item
      //
      if (values.open !== "") {
        this.SetData("open",MML.mo(values.open).With({
          fence:true, form:MML.FORM.PREFIX, texClass:MML.TEXCLASS.OPEN
        }));
        //
        //  Clear flag for using MML spacing even though form is specified
        //
        this.data.open.useMMLspacing = 0;
      }
      //
      //  Create fake nodes for the separators
      //
      if (values.separators !== "") {
        while (values.separators.length < this.data.length)
          {values.separators += values.separators.charAt(values.separators.length-1)}
        for (var i = 1, m = this.data.length; i < m; i++) {
          if (this.data[i]) {
            this.SetData("sep"+i,MML.mo(values.separators.charAt(i-1)).With({separator:true}))
            this.data["sep"+i].useMMLspacing = 0;
          }
        }
      }
      //
      //  Create fake node for the close item
      //
      if (values.close !== "") {
        this.SetData("close",MML.mo(values.close).With({
          fence:true, form:MML.FORM.POSTFIX, texClass:MML.TEXCLASS.CLOSE
        }));
        //
        //  Clear flag for using MML spacing even though form is specified
        //
        this.data.close.useMMLspacing = 0;
      }
    },
    texClass: MML.TEXCLASS.OPEN,
    setTeXclass: function (prev) {
      this.addFakeNodes();
      this.getPrevClass(prev);
      if (this.data.open) {prev = this.data.open.setTeXclass(prev)}
      if (this.data[0]) {prev = this.data[0].setTeXclass(prev)}
      for (var i = 1, m = this.data.length; i < m; i++) {
        if (this.data["sep"+i]) {prev = this.data["sep"+i].setTeXclass(prev)}
        if (this.data[i]) {prev = this.data[i].setTeXclass(prev)}
      }
      if (this.data.close) {prev = this.data.close.setTeXclass(prev)}
      this.updateTeXclass(this.data.open);
      this.texClass = MML.TEXCLASS.INNER;
      return prev;
    }
  });

  MML.menclose = MML.mbase.Subclass({
    type: "menclose",
    inferRow: true,
    linebreakContainer: true,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      notation: MML.NOTATION.LONGDIV,
      texClass: MML.TEXCLASS.ORD
    },
    setTeXclass: MML.mbase.setSeparateTeXclasses
  });

  MML.msubsup = MML.mbase.Subclass({
    type: "msubsup", base: 0, sub: 1, sup: 2,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      subscriptshift: "",
      superscriptshift: "",
      texClass: MML.AUTO
    },
    autoDefault: function (name) {
      if (name === "texClass")
        {return (this.isEmbellished() ? this.CoreMO().Get(name) : MML.TEXCLASS.ORD)}
      return 0;
    },
    adjustChild_displaystyle: function (n) {
      if (n > 0) {return false}
      return this.Get("displaystyle");
    },
    adjustChild_scriptlevel: function (n) {
      var level = this.Get("scriptlevel");
      if (n > 0) {level++}
      return level;
    },
    adjustChild_texprimestyle: function (n) {
      if (n === this.sub) {return true}
      return this.Get("texprimestyle");
    },
    setTeXclass: MML.mbase.setBaseTeXclasses
  });
  
  MML.msub = MML.msubsup.Subclass({type: "msub"});
  MML.msup = MML.msubsup.Subclass({type: "msup", sub:2, sup:1});
  MML.mmultiscripts = MML.msubsup.Subclass({
    type: "mmultiscripts",
    adjustChild_texprimestyle: function (n) {
      if (n % 2 === 1) {return true}
      return this.Get("texprimestyle");
    }
  });
  MML.mprescripts = MML.mbase.Subclass({type: "mprescripts"});
  MML.none = MML.mbase.Subclass({type: "none"});
  
  MML.munderover = MML.mbase.Subclass({
    type: "munderover",
    base: 0, under: 1, over: 2, sub: 1, sup: 2,
    ACCENTS: ["", "accentunder", "accent"],
    linebreakContainer: true,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      accent: MML.AUTO,
      accentunder: MML.AUTO,
      align: MML.ALIGN.CENTER,
      texClass: MML.AUTO,
      subscriptshift: "",  // when converted to msubsup by moveablelimits
      superscriptshift: "" // when converted to msubsup by moveablelimits
    },
    autoDefault: function (name) {
      if (name === "texClass")
        {return (this.isEmbellished() ? this.CoreMO().Get(name) : MML.TEXCLASS.ORD)}
      if (name === "accent" && this.data[this.over]) {return this.data[this.over].CoreMO().Get("accent")}
      if (name === "accentunder" && this.data[this.under]) {return this.data[this.under].CoreMO().Get("accent")}
      return false;
    },
    adjustChild_displaystyle: function (n) {
      if (n > 0) {return false}
      return this.Get("displaystyle");
    },
    adjustChild_scriptlevel: function (n) {
      var level = this.Get("scriptlevel");
      var force = (this.data[this.base] && !this.Get("displaystyle") &&
                   this.data[this.base].CoreMO().Get("movablelimits"));
      if (n == this.under && (force || !this.Get("accentunder"))) {level++}
      if (n == this.over  && (force || !this.Get("accent"))) {level++}
      return level;
    },
    adjustChild_texprimestyle: function (n) {
      if (n === this.base && this.data[this.over]) {return true}
      return this.Get("texprimestyle");
    },
    setTeXclass: MML.mbase.setBaseTeXclasses
  });
  
  MML.munder = MML.munderover.Subclass({type: "munder"});
  MML.mover = MML.munderover.Subclass({
    type: "mover", over: 1, under: 2, sup: 1, sub: 2,
    ACCENTS: ["", "accent", "accentunder"]
  });

  MML.mtable = MML.mbase.Subclass({
    type: "mtable",
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      align: MML.ALIGN.AXIS,
      rowalign: MML.ALIGN.BASELINE,
      columnalign: MML.ALIGN.CENTER,
      groupalign: "{left}",
      alignmentscope: true,
      columnwidth: MML.WIDTH.AUTO,
      width: MML.WIDTH.AUTO,
      rowspacing: "1ex",
      columnspacing: ".8em",
      rowlines: MML.LINES.NONE,
      columnlines: MML.LINES.NONE,
      frame: MML.LINES.NONE,
      framespacing: "0.4em 0.5ex",
      equalrows: false,
      equalcolumns: false,
      displaystyle: false,
      side: MML.SIDE.RIGHT,
      minlabelspacing: "0.8em",
      texClass: MML.TEXCLASS.ORD,
      useHeight: 1
    },
    adjustChild_displaystyle: function () {
      return (this.displaystyle != null ? this.displaystyle : this.defaults.displaystyle);
    },
    inheritFromMe: true,
    noInherit: {
      mover: {align: true},
      munder: {align: true},
      munderover: {align: true},
      mtable: {
        align: true, rowalign: true, columnalign: true, groupalign: true,
        alignmentscope: true, columnwidth: true, width: true, rowspacing: true,
        columnspacing: true, rowlines: true, columnlines: true, frame: true,
        framespacing: true, equalrows: true, equalcolumns: true, displaystyle: true,
        side: true, minlabelspacing: true, texClass: true, useHeight: 1
      }
    },
    linebreakContainer: true,
    Append: function () {
      for (var i = 0, m = arguments.length; i < m; i++) {
        if (!((arguments[i] instanceof MML.mtr) ||
              (arguments[i] instanceof MML.mlabeledtr))) {arguments[i] = MML.mtr(arguments[i])}
      }
      this.SUPER(arguments).Append.apply(this,arguments);
    },
    setTeXclass: MML.mbase.setSeparateTeXclasses
  });

  MML.mtr = MML.mbase.Subclass({
    type: "mtr",
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      rowalign: MML.INHERIT,
      columnalign: MML.INHERIT,
      groupalign: MML.INHERIT
    },
    inheritFromMe: true,
    noInherit: {
      mrow: {rowalign: true, columnalign: true, groupalign: true},
      mtable: {rowalign: true, columnalign: true, groupalign: true}
    },
    linebreakContainer: true,
    Append: function () {
      for (var i = 0, m = arguments.length; i < m; i++) {
        if (!(arguments[i] instanceof MML.mtd)) {arguments[i] = MML.mtd(arguments[i])}
      }
      this.SUPER(arguments).Append.apply(this,arguments);
    },
    setTeXclass: MML.mbase.setSeparateTeXclasses
  });

  MML.mtd = MML.mbase.Subclass({
    type: "mtd",
    inferRow: true,
    linebreakContainer: true,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      rowspan: 1,
      columnspan: 1,
      rowalign: MML.INHERIT,
      columnalign: MML.INHERIT,
      groupalign: MML.INHERIT
    },
    setTeXclass: MML.mbase.setSeparateTeXclasses
  });

  MML.maligngroup = MML.mbase.Subclass({
    type: "maligngroup",
    isSpacelike: function () {return true},
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      groupalign: MML.INHERIT
    },
    inheritFromMe: true,
    noInherit: {
      mrow: {groupalign: true},
      mtable: {groupalign: true}
    }
  });

  MML.malignmark = MML.mbase.Subclass({
    type: "malignmark",
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      edge: MML.SIDE.LEFT
    },
    isSpacelike: function () {return true}
  });

  MML.mlabeledtr = MML.mtr.Subclass({
    type: "mlabeledtr"
  });
  
  MML.maction = MML.mbase.Subclass({
    type: "maction",
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      actiontype: MML.ACTIONTYPE.TOGGLE,
      selection: 1
    },
    selected: function () {return this.data[this.Get("selection")-1] || MML.NULL},
    isEmbellished: function () {return this.selected().isEmbellished()},
    isSpacelike: function () {return this.selected().isSpacelike()},
    Core: function () {return this.selected().Core()},
    CoreMO: function () {return this.selected().CoreMO()},
    setTeXclass: function (prev) {
      if (this.Get("actiontype") === MML.ACTIONTYPE.TOOLTIP && this.data[1]) {
        // Make sure tooltip has proper spacing when typeset (see issue #412)
        this.data[1].setTeXclass();
      }
      var selected = this.selected();
      prev = selected.setTeXclass(prev);
      this.updateTeXclass(selected);
      return prev;
    }
  });
  
  MML.semantics = MML.mbase.Subclass({
    type: "semantics", notParent: true,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    defaults: {
      definitionURL: null,
      encoding: null
    },
    setTeXclass: MML.mbase.setChildTeXclass,
    getAnnotation: function (name) {
      var encodingList = MathJax.Hub.config.MathMenu.semanticsAnnotations[name];
      if (encodingList) {
        for (var i = 0, m = this.data.length; i < m; i++) {
          var encoding = this.data[i].Get("encoding");
          if (encoding) {
            for (var j = 0, n = encodingList.length; j < n; j++) {
              if (encodingList[j] === encoding) return this.data[i];
            }
          }
        }
      }
      return null;
    }
  });
  MML.annotation = MML.mbase.Subclass({
    type: "annotation", isChars: true,
    linebreakContainer: true,
    defaults: {
      definitionURL: null,
      encoding: null,
      cd: "mathmlkeys",
      name: "",
      src: null
    }
  });
  MML["annotation-xml"] = MML.mbase.Subclass({
    type: "annotation-xml",
    linebreakContainer: true,
    defaults: {
      definitionURL: null,
      encoding: null,
      cd: "mathmlkeys",
      name: "",
      src: null
    }
  });

  MML.math = MML.mstyle.Subclass({
    type: "math",
    defaults: {
      mathvariant: MML.VARIANT.NORMAL,
      mathsize: MML.SIZE.NORMAL,
      mathcolor: "", // should be "black", but allow it to inherit from surrounding text
      mathbackground: MML.COLOR.TRANSPARENT,
      dir: "ltr",
      scriptlevel: 0,
      displaystyle: MML.AUTO,
      display: "inline",
      maxwidth: "",
      overflow: MML.OVERFLOW.LINEBREAK,
      altimg: "",
      'altimg-width': "",
      'altimg-height': "",
      'altimg-valign': "",
      alttext: "",
      cdgroup: "",
      scriptsizemultiplier: Math.sqrt(1/2),
      scriptminsize: "8px",    // should be 8pt, but that's too big
      infixlinebreakstyle: MML.LINEBREAKSTYLE.BEFORE,
      lineleading: "1ex",
      indentshift: "auto",     // use user configuration
      indentalign: MML.INDENTALIGN.AUTO,
      indentalignfirst: MML.INDENTALIGN.INDENTALIGN,
      indentshiftfirst: MML.INDENTSHIFT.INDENTSHIFT,
      indentalignlast:  MML.INDENTALIGN.INDENTALIGN,
      indentshiftlast:  MML.INDENTSHIFT.INDENTSHIFT,
      decimalseparator: ".",
      texprimestyle: false     // is it in TeX's C' style?
    },
    autoDefault: function (name) {
      if (name === "displaystyle") {return this.Get("display") === "block"}
      return "";
    },
    linebreakContainer: true,
    setTeXclass: MML.mbase.setChildTeXclass,
    getAnnotation: function (name) {
      if (this.data.length != 1) return null;
      return this.data[0].getAnnotation(name);
    }
  });
  
  MML.chars = MML.mbase.Subclass({
    type: "chars",
    Append: function () {this.data.push.apply(this.data,arguments)},
    value: function () {return this.data.join("")},
    toString: function () {return this.data.join("")}
  });
  
  MML.entity = MML.mbase.Subclass({
    type: "entity",
    Append: function () {this.data.push.apply(this.data,arguments)},
    value: function () {
      if (this.data[0].substr(0,2) === "#x") {return parseInt(this.data[0].substr(2),16)}
      else if (this.data[0].substr(0,1) === "#") {return parseInt(this.data[0].substr(1))}
      else {return 0}  // FIXME: look up named entities from table
    },
    toString: function () {
      var n = this.value();
      if (n <= 0xFFFF) {return String.fromCharCode(n)}
      n -= 0x10000;
      return String.fromCharCode((n>>10)+0xD800)
           + String.fromCharCode((n&0x3FF)+0xDC00);
    }
  });
  
  MML.xml = MML.mbase.Subclass({
    type: "xml",
    Init: function () {
      this.div = document.createElement("div");
      return this.SUPER(arguments).Init.apply(this,arguments);
    },
    Append: function () {
      for (var i = 0, m = arguments.length; i < m; i++) {
        var node = this.Import(arguments[i]);
        this.data.push(node);
        this.div.appendChild(node);
      }
    },
    Import: function (node) {
      if (document.importNode) {return document.importNode(node,true)}
      //
      //  IE < 9 doesn't have importNode, so fake it.
      //
      var nNode, i, m;
      if (node.nodeType === 1) { // ELEMENT_NODE
        nNode = document.createElement(node.nodeName);
        for (i = 0, m = node.attributes.length; i < m; i++) {
          var attribute = node.attributes[i];
          if (attribute.specified && attribute.nodeValue != null && attribute.nodeValue != '')
            {nNode.setAttribute(attribute.nodeName,attribute.nodeValue)}
          if (attribute.nodeName === "style") {nNode.style.cssText = attribute.nodeValue}
        }
        if (node.className) {nNode.className = node.className}
      } else if (node.nodeType === 3 || node.nodeType === 4) { // TEXT_NODE or CDATA_SECTION_NODE
        nNode = document.createTextNode(node.nodeValue);
      } else if (node.nodeType === 8) { // COMMENT_NODE
        nNode = document.createComment(node.nodeValue);
      } else {
        return document.createTextNode('');
      }
      for (i = 0, m = node.childNodes.length; i < m; i++)
        {nNode.appendChild(this.Import(node.childNodes[i]))}
      return nNode;
    },
    value: function () {return this.div},
    toString: function () {return this.div.innerHTML}
  });
  
  MML.TeXAtom = MML.mbase.Subclass({
    type: "texatom",
    linebreakContainer: true,
    inferRow: true, notParent: true,
    texClass: MML.TEXCLASS.ORD,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    isEmbellished: MML.mbase.childEmbellished,
    setTeXclass: function (prev) {
      this.data[0].setTeXclass();
      return this.adjustTeXclass(prev);
    },
    adjustTeXclass: MML.mo.prototype.adjustTeXclass
  });
  
  MML.NULL = MML.mbase().With({type:"null"});

  var TEXCLASS = MML.TEXCLASS;
  
  var MO = {
    ORD:        [0,0,TEXCLASS.ORD],
    ORD11:      [1,1,TEXCLASS.ORD],
    ORD21:      [2,1,TEXCLASS.ORD],
    ORD02:      [0,2,TEXCLASS.ORD],
    ORD55:      [5,5,TEXCLASS.ORD],
    OP:         [1,2,TEXCLASS.OP,{largeop: true, movablelimits: true, symmetric: true}],
    OPFIXED:    [1,2,TEXCLASS.OP,{largeop: true, movablelimits: true}],
    INTEGRAL:   [0,1,TEXCLASS.OP,{largeop: true, symmetric: true}],
    INTEGRAL2:  [1,2,TEXCLASS.OP,{largeop: true, symmetric: true}],
    BIN3:       [3,3,TEXCLASS.BIN],
    BIN4:       [4,4,TEXCLASS.BIN],
    BIN01:      [0,1,TEXCLASS.BIN],
    BIN5:       [5,5,TEXCLASS.BIN],
    TALLBIN:    [4,4,TEXCLASS.BIN,{stretchy: true}],
    BINOP:      [4,4,TEXCLASS.BIN,{largeop: true, movablelimits: true}],
    REL:        [5,5,TEXCLASS.REL],
    REL1:       [1,1,TEXCLASS.REL,{stretchy: true}],
    REL4:       [4,4,TEXCLASS.REL],
    RELSTRETCH: [5,5,TEXCLASS.REL,{stretchy: true}],
    RELACCENT:  [5,5,TEXCLASS.REL,{accent: true}],
    WIDEREL:    [5,5,TEXCLASS.REL,{accent: true, stretchy: true}],
    OPEN:       [0,0,TEXCLASS.OPEN,{fence: true, stretchy: true, symmetric: true}],
    CLOSE:      [0,0,TEXCLASS.CLOSE,{fence: true, stretchy: true, symmetric: true}],
    INNER:      [0,0,TEXCLASS.INNER],
    PUNCT:      [0,3,TEXCLASS.PUNCT],
    ACCENT:     [0,0,TEXCLASS.ORD,{accent: true}],
    WIDEACCENT: [0,0,TEXCLASS.ORD,{accent: true, stretchy: true}]
  };

  MML.mo.Augment({
    SPACE: [
      '0em',
      '0.1111em',
      '0.1667em',
      '0.2222em',
      '0.2667em',
      '0.3333em'
    ],
    RANGES: [
      [0x20,0x7F,TEXCLASS.REL,"BasicLatin"],
      [0xA0,0xFF,TEXCLASS.ORD,"Latin1Supplement"],
      [0x100,0x17F,TEXCLASS.ORD],
      [0x180,0x24F,TEXCLASS.ORD],
      [0x2B0,0x2FF,TEXCLASS.ORD,"SpacingModLetters"],
      [0x300,0x36F,TEXCLASS.ORD,"CombDiacritMarks"],
      [0x370,0x3FF,TEXCLASS.ORD,"GreekAndCoptic"],
      [0x1E00,0x1EFF,TEXCLASS.ORD],
      [0x2000,0x206F,TEXCLASS.PUNCT,"GeneralPunctuation"],
      [0x2070,0x209F,TEXCLASS.ORD],
      [0x20A0,0x20CF,TEXCLASS.ORD],
      [0x20D0,0x20FF,TEXCLASS.ORD,"CombDiactForSymbols"],
      [0x2100,0x214F,TEXCLASS.ORD,"LetterlikeSymbols"],
      [0x2150,0x218F,TEXCLASS.ORD],
      [0x2190,0x21FF,TEXCLASS.REL,"Arrows"],
      [0x2200,0x22FF,TEXCLASS.BIN,"MathOperators"],
      [0x2300,0x23FF,TEXCLASS.ORD,"MiscTechnical"],
      [0x2460,0x24FF,TEXCLASS.ORD],
      [0x2500,0x259F,TEXCLASS.ORD],
      [0x25A0,0x25FF,TEXCLASS.ORD,"GeometricShapes"],
      [0x2700,0x27BF,TEXCLASS.ORD,"Dingbats"],
      [0x27C0,0x27EF,TEXCLASS.ORD,"MiscMathSymbolsA"],
      [0x27F0,0x27FF,TEXCLASS.REL,"SupplementalArrowsA"],
      [0x2900,0x297F,TEXCLASS.REL,"SupplementalArrowsB"],
      [0x2980,0x29FF,TEXCLASS.ORD,"MiscMathSymbolsB"],
      [0x2A00,0x2AFF,TEXCLASS.BIN,"SuppMathOperators"],
      [0x2B00,0x2BFF,TEXCLASS.ORD,"MiscSymbolsAndArrows"],
      [0x1D400,0x1D7FF,TEXCLASS.ORD]
    ],
    OPTABLE: {
      prefix: {
        '\u2200': MO.ORD21,    // for all
        '\u2202': MO.ORD21,    // partial differential
        '\u2203': MO.ORD21,    // there exists
        '\u2207': MO.ORD21,    // nabla
        '\u220F': MO.OP,       // n-ary product
        '\u2210': MO.OP,       // n-ary coproduct
        '\u2211': MO.OP,       // n-ary summation
        '\u2212': MO.BIN01,    // minus sign
        '\u2213': MO.BIN01,    // minus-or-plus sign
        '\u221A': [1,1,TEXCLASS.ORD,{stretchy: true}], // square root
        '\u2220': MO.ORD,      // angle
        '\u222B': MO.INTEGRAL, // integral
        '\u222E': MO.INTEGRAL, // contour integral
        '\u22C0': MO.OP,       // n-ary logical and
        '\u22C1': MO.OP,       // n-ary logical or
        '\u22C2': MO.OP,       // n-ary intersection
        '\u22C3': MO.OP,       // n-ary union
        '\u2308': MO.OPEN,     // left ceiling
        '\u230A': MO.OPEN,     // left floor
        '\u27E8': MO.OPEN,     // mathematical left angle bracket
        '\u27EE': MO.OPEN,     // mathematical left flattened parenthesis
        '\u2A00': MO.OP,       // n-ary circled dot operator
        '\u2A01': MO.OP,       // n-ary circled plus operator
        '\u2A02': MO.OP,       // n-ary circled times operator
        '\u2A04': MO.OP,       // n-ary union operator with plus
        '\u2A06': MO.OP,       // n-ary square union operator
        '\u00AC': MO.ORD21,    // not sign
        '\u00B1': MO.BIN01,    // plus-minus sign
        '(': MO.OPEN,          // left parenthesis
        '+': MO.BIN01,         // plus sign
        '-': MO.BIN01,         // hyphen-minus
        '[': MO.OPEN,          // left square bracket
        '{': MO.OPEN,          // left curly bracket
        '|': MO.OPEN           // vertical line
      },
      postfix: {
        '!': [1,0,TEXCLASS.CLOSE], // exclamation mark
        '&': MO.ORD,           // ampersand
        '\u2032': MO.ORD02,    // prime
        '\u203E': MO.WIDEACCENT, // overline
        '\u2309': MO.CLOSE,    // right ceiling
        '\u230B': MO.CLOSE,    // right floor
        '\u23DE': MO.WIDEACCENT, // top curly bracket
        '\u23DF': MO.WIDEACCENT, // bottom curly bracket
        '\u266D': MO.ORD02,    // music flat sign
        '\u266E': MO.ORD02,    // music natural sign
        '\u266F': MO.ORD02,    // music sharp sign
        '\u27E9': MO.CLOSE,    // mathematical right angle bracket
        '\u27EF': MO.CLOSE,    // mathematical right flattened parenthesis
        '\u02C6': MO.WIDEACCENT, // modifier letter circumflex accent
        '\u02C7': MO.WIDEACCENT, // caron
        '\u02C9': MO.WIDEACCENT, // modifier letter macron
        '\u02CA': MO.ACCENT,   // modifier letter acute accent
        '\u02CB': MO.ACCENT,   // modifier letter grave accent
        '\u02D8': MO.ACCENT,   // breve
        '\u02D9': MO.ACCENT,   // dot above
        '\u02DC': MO.WIDEACCENT, // small tilde
        '\u0302': MO.WIDEACCENT, // combining circumflex accent
        '\u00A8': MO.ACCENT,   // diaeresis
        '\u00AF': MO.WIDEACCENT, // macron
        ')': MO.CLOSE,         // right parenthesis
        ']': MO.CLOSE,         // right square bracket
        '^': MO.WIDEACCENT,    // circumflex accent
        '_': MO.WIDEACCENT,    // low line
        '`': MO.ACCENT,        // grave accent
        '|': MO.CLOSE,         // vertical line
        '}': MO.CLOSE,         // right curly bracket
        '~': MO.WIDEACCENT     // tilde
      },
      infix: {
        '': MO.ORD,            // empty <mo>
        '%': [3,3,TEXCLASS.ORD], // percent sign
        '\u2022': MO.BIN4,     // bullet
        '\u2026': MO.INNER,    // horizontal ellipsis
        '\u2044': MO.TALLBIN,  // fraction slash
        '\u2061': MO.ORD,      // function application
        '\u2062': MO.ORD,      // invisible times
        '\u2063': [0,0,TEXCLASS.ORD,{linebreakstyle:"after", separator: true}], // invisible separator
        '\u2064': MO.ORD,      // invisible plus
        '\u2190': MO.WIDEREL,  // leftwards arrow
        '\u2191': MO.RELSTRETCH, // upwards arrow
        '\u2192': MO.WIDEREL,  // rightwards arrow
        '\u2193': MO.RELSTRETCH, // downwards arrow
        '\u2194': MO.WIDEREL,  // left right arrow
        '\u2195': MO.RELSTRETCH, // up down arrow
        '\u2196': MO.RELSTRETCH, // north west arrow
        '\u2197': MO.RELSTRETCH, // north east arrow
        '\u2198': MO.RELSTRETCH, // south east arrow
        '\u2199': MO.RELSTRETCH, // south west arrow
        '\u21A6': MO.WIDEREL,  // rightwards arrow from bar
        '\u21A9': MO.WIDEREL,  // leftwards arrow with hook
        '\u21AA': MO.WIDEREL,  // rightwards arrow with hook
        '\u21BC': MO.WIDEREL,  // leftwards harpoon with barb upwards
        '\u21BD': MO.WIDEREL,  // leftwards harpoon with barb downwards
        '\u21C0': MO.WIDEREL,  // rightwards harpoon with barb upwards
        '\u21C1': MO.WIDEREL,  // rightwards harpoon with barb downwards
        '\u21CC': MO.WIDEREL,  // rightwards harpoon over leftwards harpoon
        '\u21D0': MO.WIDEREL,  // leftwards double arrow
        '\u21D1': MO.RELSTRETCH, // upwards double arrow
        '\u21D2': MO.WIDEREL,  // rightwards double arrow
        '\u21D3': MO.RELSTRETCH, // downwards double arrow
        '\u21D4': MO.WIDEREL,  // left right double arrow
        '\u21D5': MO.RELSTRETCH, // up down double arrow
        '\u2208': MO.REL,      // element of
        '\u2209': MO.REL,      // not an element of
        '\u220B': MO.REL,      // contains as member
        '\u2212': MO.BIN4,     // minus sign
        '\u2213': MO.BIN4,     // minus-or-plus sign
        '\u2215': MO.TALLBIN,  // division slash
        '\u2216': MO.BIN4,     // set minus
        '\u2217': MO.BIN4,     // asterisk operator
        '\u2218': MO.BIN4,     // ring operator
        '\u2219': MO.BIN4,     // bullet operator
        '\u221D': MO.REL,      // proportional to
        '\u2223': MO.REL,      // divides
        '\u2225': MO.REL,      // parallel to
        '\u2227': MO.BIN4,     // logical and
        '\u2228': MO.BIN4,     // logical or
        '\u2229': MO.BIN4,     // intersection
        '\u222A': MO.BIN4,     // union
        '\u223C': MO.REL,      // tilde operator
        '\u2240': MO.BIN4,     // wreath product
        '\u2243': MO.REL,      // asymptotically equal to
        '\u2245': MO.REL,      // approximately equal to
        '\u2248': MO.REL,      // almost equal to
        '\u224D': MO.REL,      // equivalent to
        '\u2250': MO.REL,      // approaches the limit
        '\u2260': MO.REL,      // not equal to
        '\u2261': MO.REL,      // identical to
        '\u2264': MO.REL,      // less-than or equal to
        '\u2265': MO.REL,      // greater-than or equal to
        '\u226A': MO.REL,      // much less-than
        '\u226B': MO.REL,      // much greater-than
        '\u227A': MO.REL,      // precedes
        '\u227B': MO.REL,      // succeeds
        '\u2282': MO.REL,      // subset of
        '\u2283': MO.REL,      // superset of
        '\u2286': MO.REL,      // subset of or equal to
        '\u2287': MO.REL,      // superset of or equal to
        '\u228E': MO.BIN4,     // multiset union
        '\u2291': MO.REL,      // square image of or equal to
        '\u2292': MO.REL,      // square original of or equal to
        '\u2293': MO.BIN4,     // square cap
        '\u2294': MO.BIN4,     // square cup
        '\u2295': MO.BIN4,     // circled plus
        '\u2296': MO.BIN4,     // circled minus
        '\u2297': MO.BIN4,     // circled times
        '\u2298': MO.BIN4,     // circled division slash
        '\u2299': MO.BIN4,     // circled dot operator
        '\u22A2': MO.REL,      // right tack
        '\u22A3': MO.REL,      // left tack
        '\u22A4': MO.ORD55,    // down tack
        '\u22A5': MO.REL,      // up tack
        '\u22A8': MO.REL,      // true
        '\u22C4': MO.BIN4,     // diamond operator
        '\u22C5': MO.BIN4,     // dot operator
        '\u22C6': MO.BIN4,     // star operator
        '\u22C8': MO.REL,      // bowtie
        '\u22EE': MO.ORD55,    // vertical ellipsis
        '\u22EF': MO.INNER,    // midline horizontal ellipsis
        '\u22F1': [5,5,TEXCLASS.INNER], // down right diagonal ellipsis
        '\u25B3': MO.BIN4,     // white up-pointing triangle
        '\u25B5': MO.BIN4,     // white up-pointing small triangle
        '\u25B9': MO.BIN4,     // white right-pointing small triangle
        '\u25BD': MO.BIN4,     // white down-pointing triangle
        '\u25BF': MO.BIN4,     // white down-pointing small triangle
        '\u25C3': MO.BIN4,     // white left-pointing small triangle
        '\u2758': MO.REL,      // light vertical bar
        '\u27F5': MO.WIDEREL,  // long leftwards arrow
        '\u27F6': MO.WIDEREL,  // long rightwards arrow
        '\u27F7': MO.WIDEREL,  // long left right arrow
        '\u27F8': MO.WIDEREL,  // long leftwards double arrow
        '\u27F9': MO.WIDEREL,  // long rightwards double arrow
        '\u27FA': MO.WIDEREL,  // long left right double arrow
        '\u27FC': MO.WIDEREL,  // long rightwards arrow from bar
        '\u2A2F': MO.BIN4,     // vector or cross product
        '\u2A3F': MO.BIN4,     // amalgamation or coproduct
        '\u2AAF': MO.REL,      // precedes above single-line equals sign
        '\u2AB0': MO.REL,      // succeeds above single-line equals sign
        '\u00B1': MO.BIN4,     // plus-minus sign
        '\u00B7': MO.BIN4,     // middle dot
        '\u00D7': MO.BIN4,     // multiplication sign
        '\u00F7': MO.BIN4,     // division sign
        '*': MO.BIN3,          // asterisk
        '+': MO.BIN4,          // plus sign
        ',': [0,3,TEXCLASS.PUNCT,{linebreakstyle:"after", separator: true}], // comma
        '-': MO.BIN4,          // hyphen-minus
        '.': [3,3,TEXCLASS.ORD], // full stop
        '/': MO.ORD11,         // solidus
        ':': [1,2,TEXCLASS.REL], // colon
        ';': [0,3,TEXCLASS.PUNCT,{linebreakstyle:"after", separator: true}], // semicolon
        '<': MO.REL,           // less-than sign
        '=': MO.REL,           // equals sign
        '>': MO.REL,           // greater-than sign
        '?': [1,1,TEXCLASS.CLOSE], // question mark
        '\\': MO.ORD,          // reverse solidus
        '^': MO.ORD11,         // circumflex accent
        '_': MO.ORD11,         // low line
        '|': [2,2,TEXCLASS.ORD,{fence: true, stretchy: true, symmetric: true}], // vertical line
        '#': MO.ORD,           // #
        '$': MO.ORD,           // $
        '\u002E': [0,3,TEXCLASS.PUNCT,{separator: true}], // \ldotp
        '\u02B9': MO.ORD,      // prime
        '\u0300': MO.ACCENT,   // \grave
        '\u0301': MO.ACCENT,   // \acute
        '\u0303': MO.WIDEACCENT, // \tilde
        '\u0304': MO.ACCENT,   // \bar
        '\u0306': MO.ACCENT,   // \breve
        '\u0307': MO.ACCENT,   // \dot
        '\u0308': MO.ACCENT,   // \ddot
        '\u030C': MO.ACCENT,   // \check
        '\u0332': MO.WIDEACCENT, // horizontal line
        '\u0338': MO.REL4,     // \not
        '\u2015': [0,0,TEXCLASS.ORD,{stretchy: true}], // horizontal line
        '\u2017': [0,0,TEXCLASS.ORD,{stretchy: true}], // horizontal line
        '\u2020': MO.BIN3,     // \dagger
        '\u2021': MO.BIN3,     // \ddagger
        '\u20D7': MO.ACCENT,   // \vec
        '\u2111': MO.ORD,      // \Im
        '\u2113': MO.ORD,      // \ell
        '\u2118': MO.ORD,      // \wp
        '\u211C': MO.ORD,      // \Re
        '\u2205': MO.ORD,      // \emptyset
        '\u221E': MO.ORD,      // \infty
        '\u2305': MO.BIN3,     // barwedge
        '\u2306': MO.BIN3,     // doublebarwedge
        '\u2322': MO.REL4,     // \frown
        '\u2323': MO.REL4,     // \smile
        '\u2329': MO.OPEN,     // langle
        '\u232A': MO.CLOSE,    // rangle
        '\u23AA': MO.ORD,      // \bracevert
        '\u23AF': [0,0,TEXCLASS.ORD,{stretchy: true}], // \underline
        '\u23B0': MO.OPEN,     // \lmoustache
        '\u23B1': MO.CLOSE,    // \rmoustache
        '\u2500': MO.ORD,      // horizontal line
        '\u25EF': MO.BIN3,     // \bigcirc
        '\u2660': MO.ORD,      // \spadesuit
        '\u2661': MO.ORD,      // \heartsuit
        '\u2662': MO.ORD,      // \diamondsuit
        '\u2663': MO.ORD,      // \clubsuit
        '\u3008': MO.OPEN,     // langle
        '\u3009': MO.CLOSE,    // rangle
        '\uFE37': MO.WIDEACCENT, // horizontal brace down
        '\uFE38': MO.WIDEACCENT  // horizontal brace up
      }
    }
  },{
    OPTYPES: MO
  });
  
  //
  //  These are not in the W3C table, but FF works this way,
  //  and it makes sense, so add it here
  //
  var OPTABLE = MML.mo.prototype.OPTABLE;
  OPTABLE.infix["^"] = MO.WIDEREL;
  OPTABLE.infix["_"] = MO.WIDEREL;
  OPTABLE.prefix["\u2223"] = MO.OPEN;
  OPTABLE.prefix["\u2225"] = MO.OPEN;
  OPTABLE.postfix["\u2223"] = MO.CLOSE;
  OPTABLE.postfix["\u2225"] = MO.CLOSE;
  
})(MathJax.ElementJax.mml);

MathJax.ElementJax.mml.loadComplete("jax.js");

/*************************************************************
 *
 *  MathJax/extensions/toMathML.js
 *  
 *  Implements a toMathML() method for the mml Element Jax that returns
 *  a MathML string from a given math expression.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2010-2017 The MathJax Consortium
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

MathJax.Hub.Register.LoadHook("[MathJax]/jax/element/mml/jax.js",function () {
  var VERSION = "2.7.2";
  
  var MML = MathJax.ElementJax.mml,
      SETTINGS = MathJax.Hub.config.menuSettings;
  
  MML.mbase.Augment({

    toMathML: function (space) {
      var inferred = (this.inferred && this.parent.inferRow);
      if (space == null) {space = ""}
      var tag = this.type, attr = this.toMathMLattributes();
      if (tag === "mspace") {return space + "<"+tag+attr+" />"}
      var data = [], SPACE = (this.isToken ? "" : space+(inferred ? "" : "  "));
      for (var i = 0, m = this.data.length; i < m; i++) {
        if (this.data[i]) {data.push(this.data[i].toMathML(SPACE))}
          else if (!this.isToken && !this.isChars) {data.push(SPACE+"<mrow />")}
      }
      if (this.isToken || this.isChars) {return space + "<"+tag+attr+">"+data.join("")+"</"+tag+">"}
      if (inferred) {return data.join("\n")}
      if (data.length === 0 || (data.length === 1 && data[0] === ""))
        {return space + "<"+tag+attr+" />"}
      return space + "<"+tag+attr+">\n"+data.join("\n")+"\n"+ space +"</"+tag+">";
    },

    toMathMLattributes: function () {
      var defaults = (this.type === "mstyle" ? MML.math.prototype.defaults : this.defaults);
      var names = (this.attrNames||MML.copyAttributeNames),
          skip = MML.skipAttributes, copy = MML.copyAttributes;
      var attr = [];

      if (this.type === "math" && (!this.attr || !('xmlns' in this.attr)))
        {attr.push('xmlns="http://www.w3.org/1998/Math/MathML"')}
      if (!this.attrNames) {
        for (var id in defaults) {if (!skip[id] && !copy[id] && defaults.hasOwnProperty(id)) {
          if (this[id] != null && this[id] !== defaults[id]) {
            if (this.Get(id,null,1) !== this[id])
              attr.push(id+'="'+this.toMathMLattribute(this[id])+'"');
          }
        }}
      }
      for (var i = 0, m = names.length; i < m; i++) {
        if (copy[names[i]] === 1 && !defaults.hasOwnProperty(names[i])) continue;
        value = (this.attr||{})[names[i]]; if (value == null) {value = this[names[i]]}
        if (value != null) {attr.push(names[i]+'="'+this.toMathMLquote(value)+'"')}
      }
      this.toMathMLclass(attr);
      if (attr.length) {return " "+attr.join(" ")} else {return ""}
    },
    toMathMLclass: function (attr) {
      var CLASS = []; if (this["class"]) {CLASS.push(this["class"])}
      if (this.isa(MML.TeXAtom) && SETTINGS.texHints) {
        var TEXCLASS = ["ORD","OP","BIN","REL","OPEN","CLOSE","PUNCT","INNER","VCENTER"][this.texClass];
        if (TEXCLASS) {
          CLASS.push("MJX-TeXAtom-"+TEXCLASS)
          if (TEXCLASS === "OP" && !this.movablelimits) CLASS.push("MJX-fixedlimits");
        }
      }
      if (this.mathvariant && this.toMathMLvariants[this.mathvariant])
        {CLASS.push("MJX"+this.mathvariant)}
      if (this.variantForm) {CLASS.push("MJX-variant")}
      if (CLASS.length) {attr.unshift('class="'+CLASS.join(" ")+'"')}
    },
    toMathMLattribute: function (value) {
      if (typeof(value) === "string" &&
          value.replace(/ /g,"").match(/^(([-+])?(\d+(\.\d*)?|\.\d+))mu$/)) {
        // FIXME:  should take scriptlevel into account
        return (RegExp.$2||"")+((1/18)*RegExp.$3).toFixed(3).replace(/\.?0+$/,"")+"em";
      }
      else if (this.toMathMLvariants[value]) {return this.toMathMLvariants[value]}
      return this.toMathMLquote(value);
    },
    toMathMLvariants: {
      "-tex-caligraphic":      MML.VARIANT.SCRIPT,
      "-tex-caligraphic-bold": MML.VARIANT.BOLDSCRIPT,
      "-tex-oldstyle":         MML.VARIANT.NORMAL,
      "-tex-oldstyle-bold":    MML.VARIANT.BOLD,
      "-tex-mathit":           MML.VARIANT.ITALIC
    },
    
    toMathMLquote: function (string) {
      string = String(string).split("");
      for (var i = 0, m = string.length; i < m; i++) {
        var n = string[i].charCodeAt(0);
        if (n <= 0xD7FF || 0xE000 <= n) {
          // Code points U+0000 to U+D7FF and U+E000 to U+FFFF.
          // They are directly represented by n.
          if (n > 0x7E || (n < 0x20 && n !== 0x0A && n !== 0x0D && n !== 0x09)) {
            string[i] = "&#x"+n.toString(16).toUpperCase()+";";
          } else {
            var c =
              {'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;'}[string[i]];
            if (c) {string[i] = c}
          }
        } else if (i+1 < m) {
          // Code points U+10000 to U+10FFFF.
          // n is the lead surrogate, let's read the trail surrogate.
          var trailSurrogate = string[i+1].charCodeAt(0);
          var codePoint = (((n-0xD800)<<10)+(trailSurrogate-0xDC00)+0x10000);
          string[i] = "&#x"+codePoint.toString(16).toUpperCase()+";";
          string[i+1] = "";
          i++;
        } else {
          // n is a lead surrogate without corresponding trail surrogate:
          // remove that character.
          string[i] = "";
        }
      }
      return string.join("");
    }
  });
  
  //
  //  Override math.toMathML in order to add semantics tag
  //  for the input format, if the user requests that in the
  //  Show As menu.
  //
  MML.math.Augment({
    toMathML: function (space,jax) {
      var annotation;
      if (space == null) {space = ""}
      if (jax && jax.originalText && SETTINGS.semantics)
        {annotation = MathJax.InputJax[jax.inputJax].annotationEncoding}
      var nested = (this.data[0] && this.data[0].data.length > 1);
      var tag = this.type, attr = this.toMathMLattributes();
      var data = [], SPACE = space + (annotation ? "  " + (nested ? "  " : "") : "") + "  ";
      for (var i = 0, m = this.data.length; i < m; i++) {
        if (this.data[i]) {data.push(this.data[i].toMathML(SPACE))}
          else {data.push(SPACE+"<mrow />")}
      }
      if (data.length === 0 || (data.length === 1 && data[0] === "")) {
        if (!annotation) {return "<"+tag+attr+" />"}
        data.push(SPACE+"<mrow />");
      }
      if (annotation) {
        if (nested) {data.unshift(space+"    <mrow>"); data.push(space+"    </mrow>")}
        data.unshift(space+"  <semantics>");
        var xmlEscapedTex = jax.originalText.replace(/[&<>]/g, function(item) {
            return { '>': '&gt;', '<': '&lt;','&': '&amp;' }[item]
        });
        data.push(space+'    <annotation encoding="'+annotation+'">'+xmlEscapedTex+"</annotation>");
        data.push(space+"  </semantics>");
      }
      return space+"<"+tag+attr+">\n"+data.join("\n")+"\n"+space+"</"+tag+">";
    }
  });
  
  MML.msubsup.Augment({
    toMathML: function (space) {
      var tag = this.type;
      if (this.data[this.sup] == null) {tag = "msub"}
      if (this.data[this.sub] == null) {tag = "msup"}
      var attr = this.toMathMLattributes();
      delete this.data[0].inferred;
      var data = [];
      for (var i = 0, m = this.data.length; i < m; i++)
        {if (this.data[i]) {data.push(this.data[i].toMathML(space+"  "))}}
      return space + "<"+tag+attr+">\n" + data.join("\n") + "\n" + space + "</"+tag+">";
    }
  });
  
  MML.munderover.Augment({
    toMathML: function (space) {
      var tag = this.type;
      var base = this.data[this.base];
      if (base && base.isa(MML.TeXAtom) && base.movablelimits && !base.Get("displaystyle")) {
        type = "msubsup";
        if (this.data[this.under] == null) {tag = "msup"}
        if (this.data[this.over] == null)  {tag = "msub"}
      } else {
        if (this.data[this.under] == null) {tag = "mover"}
        if (this.data[this.over] == null)  {tag = "munder"}
      }
      var attr = this.toMathMLattributes();
      delete this.data[0].inferred;
      var data = [];
      for (var i = 0, m = this.data.length; i < m; i++)
        {if (this.data[i]) {data.push(this.data[i].toMathML(space+"  "))}}
      return space + "<"+tag+attr+">\n" + data.join("\n") + "\n" + space + "</"+tag+">";
    }
  });
  
  MML.TeXAtom.Augment({
    toMathML: function (space) {
      // FIXME:  Handle spacing using mpadded?
      var attr = this.toMathMLattributes();
      if (!attr && this.data[0].data.length === 1) {return space.substr(2) + this.data[0].toMathML(space)}
      return space+"<mrow"+attr+">\n" + this.data[0].toMathML(space+"  ")+"\n"+space+"</mrow>";
    }
  });
  
  MML.chars.Augment({
    toMathML: function (space) {return (space||"") + this.toMathMLquote(this.toString())}
  });
  
  MML.entity.Augment({
    toMathML: function (space) {return (space||"") + "&"+this.data[0]+";<!-- "+this.toString()+" -->"}
  });
  
  MML.xml.Augment({
   toMathML: function (space) {return (space||"") + this.toString()}
  });
  
  MathJax.Hub.Register.StartupHook("TeX mathchoice Ready",function () {
    MML.TeXmathchoice.Augment({
      toMathML: function (space) {return this.Core().toMathML(space)}
    });
  });
  
  MathJax.Hub.Startup.signal.Post("toMathML Ready");
  
});

MathJax.Ajax.loadComplete("[MathJax]/extensions/toMathML.js");

/*************************************************************
 *
 *  MathJax/extensions/TeX/noErrors.js
 *  
 *  Prevents the TeX error messages from being displayed and shows the
 *  original TeX code instead.  You can configure whether the dollar signs
 *  are shown or not for in-line math, and whether to put all the TeX on
 *  one line or use multiple-lines.
 *  
 *  To configure this extension, use
 *  
 *      MathJax.Hub.Config({
 *        TeX: {
 *          noErrors: {
 *            inlineDelimiters: ["",""],   // or ["$","$"] or ["\\(","\\)"]
 *            multiLine: true,             // false for TeX on all one line
 *            style: {
 *              "font-size":   "90%",
 *              "text-align":  "left",
 *              "color":       "black",
 *              "padding":     "1px 3px",
 *              "border":      "1px solid"
 *                // add any additional CSS styles that you want
 *                //  (be sure there is no extra comma at the end of the last item)
 *            }
 *          }
 *        }
 *      });
 *  
 *  Display-style math is always shown in multi-line format, and without
 *  delimiters, as it will already be set off in its own centered
 *  paragraph, like standard display mathematics.
 *  
 *  The default settings place the invalid TeX in a multi-line box with a
 *  black border.  If you want it to look as though the TeX is just part of
 *  the paragraph, use
 *
 *      MathJax.Hub.Config({
 *        TeX: {
 *          noErrors: {
 *            inlineDelimiters: ["$","$"],   // or ["",""] or ["\\(","\\)"]
 *            multiLine: false,
 *            style: {
 *              "font-size": "normal",
 *              "border": ""
 *            }
 *          }
 *        }
 *      });
 *  
 *  You may also wish to set the font family, as the default is "serif"
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2017 The MathJax Consortium
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

(function (HUB,HTML) {
  var VERSION = "2.7.2";
  
  var CONFIG = HUB.CombineConfig("TeX.noErrors",{
    disabled: false,               // set to true to return to original error messages
    multiLine: true,
    inlineDelimiters: ["",""],     // or use ["$","$"] or ["\\(","\\)"]
    style: {
      "font-size":   "90%",
      "text-align":  "left",
      "color":       "black",
      "padding":     "1px 3px",
      "border":      "1px solid"
    }
  });
  
  var NBSP = "\u00A0";

  //
  //  The configuration defaults, augmented by the user settings
  //  
  MathJax.Extension["TeX/noErrors"] = {
    version: VERSION,
    config: CONFIG
  };
  
  HUB.Register.StartupHook("TeX Jax Ready",function () {
    var FORMAT = MathJax.InputJax.TeX.formatError;
    
    MathJax.InputJax.TeX.Augment({
      //
      //  Make error messages be the original TeX code
      //  Mark them as errors and multi-line or not, and for
      //  multi-line TeX, make spaces non-breakable (to get formatting right)
      //
      formatError: function (err,math,displaystyle,script) {
        if (CONFIG.disabled) {return FORMAT.apply(this,arguments)}
        var message = err.message.replace(/\n.*/,"");
        HUB.signal.Post(["TeX Jax - parse error",message,math,displaystyle,script]);
        var delim = CONFIG.inlineDelimiters;
        var multiLine = (displaystyle || CONFIG.multiLine);
        if (!displaystyle) {math = delim[0] + math + delim[1]}
        if (multiLine) {math = math.replace(/ /g,NBSP)} else {math = math.replace(/\n/g," ")}
        return MathJax.ElementJax.mml.merror(math).With({isError:true, multiLine: multiLine});
      }
    });
  });
  
  /*******************************************************************
   *
   *   Fix HTML-CSS output
   */

  HUB.Register.StartupHook("HTML-CSS Jax Config",function () {
    HUB.Config({
      "HTML-CSS": {
        styles: {
          ".MathJax .noError": HUB.Insert({
            "vertical-align": (HUB.Browser.isMSIE && CONFIG.multiLine ? "-2px" : "")
          },CONFIG.style)
        }
      }
    });
  });
    
  HUB.Register.StartupHook("HTML-CSS Jax Ready",function () {
    var MML = MathJax.ElementJax.mml;
    var HTMLCSS = MathJax.OutputJax["HTML-CSS"];
    
    var MATH   = MML.math.prototype.toHTML,
        MERROR = MML.merror.prototype.toHTML;
        
    //
    // Override math toHTML routine so that error messages
    //   don't have the clipping and other unneeded overhead
    //
    MML.math.Augment({
      toHTML: function (span,node) {
        var data = this.data[0];
        if (data && data.data[0] && data.data[0].isError) {
          span.style.fontSize = "";
          span = this.HTMLcreateSpan(span);
          span.bbox = data.data[0].toHTML(span).bbox;
        } else {
          span = MATH.apply(this,arguments);
        }
        return span;
      }
    });
    
    //
    //  Override merror toHTML routine so that it puts out the
    //    TeX code in an inline-block with line breaks as in the original
    //
    MML.merror.Augment({
      toHTML: function (span) {
        if (!this.isError) {return MERROR.apply(this,arguments)}
        span = this.HTMLcreateSpan(span); span.className = "noError"
        if (this.multiLine) {span.style.display = "inline-block"}
        var text = this.data[0].data[0].data.join("").split(/\n/);
        for (var i = 0, m = text.length; i < m; i++) {
          HTMLCSS.addText(span,text[i]);
          if (i !== m-1) {HTMLCSS.addElement(span,"br",{isMathJax:true})}
        }
        var HD = HTMLCSS.getHD(span.parentNode), W = HTMLCSS.getW(span.parentNode);
        if (m > 1) {
          var H = (HD.h + HD.d)/2, x = HTMLCSS.TeX.x_height/2;
          span.parentNode.style.verticalAlign = HTMLCSS.Em(HD.d+(x-H));
          HD.h = x + H; HD.d = H - x;
        }
        span.bbox = {h: HD.h, d: HD.d, w: W, lw: 0, rw: W};
        return span;
      }
    });

  });
  
  /*******************************************************************
   *
   *   Fix SVG output
   */

  HUB.Register.StartupHook("SVG Jax Config",function () {
    HUB.Config({
      "SVG": {
        styles: {
          ".MathJax_SVG .noError": HUB.Insert({
            "vertical-align": (HUB.Browser.isMSIE && CONFIG.multiLine ? "-2px" : "")
          },CONFIG.style)
        }
      }
    });
  });

  HUB.Register.StartupHook("SVG Jax Ready",function () {
    var MML = MathJax.ElementJax.mml;
    
    var MATH   = MML.math.prototype.toSVG,
        MERROR = MML.merror.prototype.toSVG;
        
    //
    // Override math toSVG routine so that error messages
    //   don't have the clipping and other unneeded overhead
    //
    MML.math.Augment({
      toSVG: function (span,node) {
        var data = this.data[0];
        if (data && data.data[0] && data.data[0].isError)
          {span = data.data[0].toSVG(span)} else {span = MATH.apply(this,arguments)}
        return span;
      }
    });
    
    //
    //  Override merror toSVG routine so that it puts out the
    //    TeX code in an inline-block with line breaks as in the original
    //
    MML.merror.Augment({
      toSVG: function (span) {
        if (!this.isError || this.Parent().type !== "math") {return MERROR.apply(this,arguments)}
        span = HTML.addElement(span,"span",{className: "noError", isMathJax:true});
        if (this.multiLine) {span.style.display = "inline-block"}
        var text = this.data[0].data[0].data.join("").split(/\n/);
        for (var i = 0, m = text.length; i < m; i++) {
          HTML.addText(span,text[i]);
          if (i !== m-1) {HTML.addElement(span,"br",{isMathJax:true})}
        }
        if (m > 1) {
          var H = span.offsetHeight/2;
          span.style.verticalAlign = (-H+(H/m))+"px";
        }
        return span;
      }
    });

  });
  
  /*******************************************************************
   *
   *   Fix NativeMML output
   */

  HUB.Register.StartupHook("NativeMML Jax Ready",function () {
    var MML = MathJax.ElementJax.mml;
    var CONFIG = MathJax.Extension["TeX/noErrors"].config;
    
    var MATH   = MML.math.prototype.toNativeMML,
        MERROR = MML.merror.prototype.toNativeMML;

    //
    // Override math toNativeMML routine so that error messages
    //   don't get placed inside math tags.
    //
    MML.math.Augment({
      toNativeMML: function (span) {
        var data = this.data[0];
        if (data && data.data[0] && data.data[0].isError)
          {span = data.data[0].toNativeMML(span)} else {span = MATH.apply(this,arguments)}
        return span;
      }
    });
    
    //
    //  Override merror toNativeMML routine so that it puts out the
    //    TeX code in an inline-block with line breaks as in the original
    //
    MML.merror.Augment({
      toNativeMML: function (span) {
        if (!this.isError) {return MERROR.apply(this,arguments)}
        span = span.appendChild(document.createElement("span"));
        var text = this.data[0].data[0].data.join("").split(/\n/);
        for (var i = 0, m = text.length; i < m; i++) {
          span.appendChild(document.createTextNode(text[i]));
          if (i !== m-1) {span.appendChild(document.createElement("br"))}
        }
        if (this.multiLine) {
          span.style.display = "inline-block";
          if (m > 1) {span.style.verticalAlign = "middle"}
        }
        for (var id in CONFIG.style) {if (CONFIG.style.hasOwnProperty(id)) {
          var ID = id.replace(/-./g,function (c) {return c.charAt(1).toUpperCase()});
          span.style[ID] = CONFIG.style[id];
        }}
        return span;
      }
    });
    
  });

  /*******************************************************************
   *
   *   Fix PreviewHTML output
   */

  HUB.Register.StartupHook("PreviewHTML Jax Config",function () {
    HUB.Config({
      PreviewHTML: {
        styles: {
          ".MathJax_PHTML .noError": HUB.Insert({
            "vertical-align": (HUB.Browser.isMSIE && CONFIG.multiLine ? "-2px" : "")
          },CONFIG.style)
        }
      }
    });
  });
    
  HUB.Register.StartupHook("PreviewHTML Jax Ready",function () {
    var MML = MathJax.ElementJax.mml;
    var HTML = MathJax.HTML;
    
    var MERROR = MML.merror.prototype.toPreviewHTML;
        
    //
    //  Override merror toPreviewHTML routine so that it puts out the
    //    TeX code in an inline-block with line breaks as in the original
    //
    MML.merror.Augment({
      toPreviewHTML: function (span) {
        if (!this.isError) return MERROR.apply(this,arguments);
        span = this.PHTMLcreateSpan(span); span.className = "noError"
        if (this.multiLine) span.style.display = "inline-block";
        var text = this.data[0].data[0].data.join("").split(/\n/);
        for (var i = 0, m = text.length; i < m; i++) {
          HTML.addText(span,text[i]);
          if (i !== m-1) {HTML.addElement(span,"br",{isMathJax:true})}
        }
        return span;
      }
    });

  });
  
  /*******************************************************************
   *
   *   Fix CommonHTML output
   */

  HUB.Register.StartupHook("CommonHTML Jax Config",function () {
    HUB.Config({
      CommonHTML: {
        styles: {
          ".mjx-chtml .mjx-noError": HUB.Insert({
            "line-height": 1.2,
            "vertical-align": (HUB.Browser.isMSIE && CONFIG.multiLine ? "-2px" : "")
          },CONFIG.style)
        }
      }
    });
  });
    
  HUB.Register.StartupHook("CommonHTML Jax Ready",function () {
    var MML = MathJax.ElementJax.mml;
    var CHTML = MathJax.OutputJax.CommonHTML;
    var HTML = MathJax.HTML;
    
    var MERROR = MML.merror.prototype.toCommonHTML;
        
    //
    //  Override merror toCommonHTML routine so that it puts out the
    //    TeX code in an inline-block with line breaks as in the original
    //
    MML.merror.Augment({
      toCommonHTML: function (node) {
        if (!this.isError) return MERROR.apply(this,arguments);
        node = CHTML.addElement(node,"mjx-noError");
        var text = this.data[0].data[0].data.join("").split(/\n/);
        for (var i = 0, m = text.length; i < m; i++) {
          HTML.addText(node,text[i]);
          if (i !== m-1) {CHTML.addElement(node,"br",{isMathJax:true})}
        }
        var bbox = this.CHTML = CHTML.BBOX.zero();
        bbox.w = (node.offsetWidth)/CHTML.em;
        if (m > 1) {
          var H2 = 1.2*m/2;
          bbox.h = H2+.25; bbox.d = H2-.25;
          node.style.verticalAlign = CHTML.Em(.45-H2);
        } else {
          bbox.h = 1; bbox.d = .2 + 2/CHTML.em;
        }
        return node;
      }
    });

  });
  
  /*******************************************************************/
  
  HUB.Startup.signal.Post("TeX noErrors Ready");

})(MathJax.Hub,MathJax.HTML);
  

MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noErrors.js");

/*************************************************************
 *
 *  MathJax/extensions/TeX/noUndefined.js
 *  
 *  This causes undefined control sequences to be shown as their macro
 *  names rather than producing an error message.  So $X_{\xxx}$ would
 *  display as an X with a subscript consiting of the text "\xxx".
 *  
 *  To configure this extension, use for example
 *  
 *      MathJax.Hub.Config({
 *        TeX: {
 *          noUndefined: {
 *            attributes: {
 *              mathcolor: "red",
 *              mathbackground: "#FFEEEE",
 *              mathsize: "90%"
 *            }
 *          }
 *        }
 *      });
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2010-2017 The MathJax Consortium
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

//
//  The configuration defaults, augmented by the user settings
//
MathJax.Extension["TeX/noUndefined"] = {
  version: "2.7.2",
  config: MathJax.Hub.CombineConfig("TeX.noUndefined",{
    disabled: false,      // set to true to return to original error messages
    attributes: {
      mathcolor: "red"
    }
  })
};

MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  var CONFIG = MathJax.Extension["TeX/noUndefined"].config;
  var MML = MathJax.ElementJax.mml;
  var UNDEFINED = MathJax.InputJax.TeX.Parse.prototype.csUndefined;

  MathJax.InputJax.TeX.Parse.Augment({
    csUndefined: function (name) {
      if (CONFIG.disabled) {return UNDEFINED.apply(this,arguments)}
      MathJax.Hub.signal.Post(["TeX Jax - undefined control sequence",name]);
      this.Push(MML.mtext(name).With(CONFIG.attributes));
    }
  });

  MathJax.Hub.Startup.signal.Post("TeX noUndefined Ready");
});

MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/noUndefined.js");

/*************************************************************
 *
 *  MathJax/jax/input/TeX/jax.js
 *  
 *  Implements the TeX InputJax that reads mathematics in
 *  TeX and LaTeX format and converts it to the MML ElementJax
 *  internal format.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2017 The MathJax Consortium
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

(function (TEX,HUB,AJAX) {
  var MML, NBSP = "\u00A0"; 
  
  var _ = function (id) {
    return MathJax.Localization._.apply(MathJax.Localization,
      [["TeX", id]].concat([].slice.call(arguments,1)));
  };
  
  var isArray = MathJax.Object.isArray;

  var STACK = MathJax.Object.Subclass({
    Init: function (env,inner) {
      this.global = {isInner: inner};
      this.data = [STACKITEM.start(this.global)];
      if (env) {this.data[0].env = env}
      this.env = this.data[0].env;
    },
    Push: function () {
      var i, m, item, top;
      for (i = 0, m = arguments.length; i < m; i++) {
        item = arguments[i]; if (!item) continue;
        if (item instanceof MML.mbase) {item = STACKITEM.mml(item)}
        item.global = this.global;
        top = (this.data.length ? this.Top().checkItem(item) : true);
        if (top instanceof Array) {this.Pop(); this.Push.apply(this,top)}
        else if (top instanceof STACKITEM) {this.Pop(); this.Push(top)}
        else if (top) {
          this.data.push(item);
          if (item.env) {
            if (item.copyEnv !== false) {
              for (var id in this.env)
                {if (this.env.hasOwnProperty(id)) {item.env[id] = this.env[id]}}
            }
            this.env = item.env;
          } else {item.env = this.env}
        }
      }
    },
    Pop: function () {
      var item = this.data.pop(); if (!item.isOpen) {delete item.env}
      this.env = (this.data.length ? this.Top().env : {});
      return item;
    },
    Top: function (n) {
      if (n == null) {n = 1}
      if (this.data.length < n) {return null}
      return this.data[this.data.length-n];
    },
    Prev: function (noPop) {
      var top = this.Top();
      if (noPop) {return top.data[top.data.length-1]}
            else {return top.Pop()}
    },
    toString: function () {return "stack[\n  "+this.data.join("\n  ")+"\n]"}
  });
  
  var STACKITEM = STACK.Item = MathJax.Object.Subclass({
    type: "base",
    endError:   /*_()*/ ["ExtraOpenMissingClose","Extra open brace or missing close brace"],
    closeError: /*_()*/ ["ExtraCloseMissingOpen","Extra close brace or missing open brace"],
    rightError: /*_()*/ ["MissingLeftExtraRight","Missing \\left or extra \\right"],
    Init: function () {
      if (this.isOpen) {this.env = {}}
      this.data = [];
      this.Push.apply(this,arguments);
    },
    Push: function () {this.data.push.apply(this.data,arguments)},
    Pop: function () {return this.data.pop()},
    mmlData: function (inferred,forceRow) {
      if (inferred == null) {inferred = true}
      if (this.data.length === 1 && !forceRow) {return this.data[0]}
      return MML.mrow.apply(MML,this.data).With((inferred ? {inferred: true}: {}));
    },
    checkItem: function (item) {
      if (item.type === "over" && this.isOpen) {item.num = this.mmlData(false); this.data = []}
      if (item.type === "cell" && this.isOpen) {
        if (item.linebreak) {return false}
        TEX.Error(["Misplaced","Misplaced %1",item.name]);
      }
      if (item.isClose && this[item.type+"Error"]) {TEX.Error(this[item.type+"Error"])}
      if (!item.isNotStack) {return true}
      this.Push(item.data[0]); return false;
    },
    With: function (def) {
      for (var id in def) {if (def.hasOwnProperty(id)) {this[id] = def[id]}}
      return this;
    },
    toString: function () {return this.type+"["+this.data.join("; ")+"]"}
  });

  STACKITEM.start = STACKITEM.Subclass({
    type: "start", isOpen: true,
    Init: function (global) {
      this.SUPER(arguments).Init.call(this);
      this.global = global;
    },
    checkItem: function (item) {
      if (item.type === "stop") {return STACKITEM.mml(this.mmlData())}
      return this.SUPER(arguments).checkItem.call(this,item);
    }
  });

  STACKITEM.stop = STACKITEM.Subclass({
    type: "stop", isClose: true
  });

  STACKITEM.open = STACKITEM.Subclass({
    type: "open", isOpen: true,
    stopError: /*_()*/ ["ExtraOpenMissingClose","Extra open brace or missing close brace"],
    checkItem: function (item) {
      if (item.type === "close") {
        var mml = this.mmlData();
        return STACKITEM.mml(MML.TeXAtom(mml)); // TeXAtom make it an ORD to prevent spacing (FIXME: should be another way)
      }
      return this.SUPER(arguments).checkItem.call(this,item);
    }
  });

  STACKITEM.close = STACKITEM.Subclass({
    type: "close", isClose: true
  });

  STACKITEM.prime = STACKITEM.Subclass({
    type: "prime",
    checkItem: function (item) {
      if (this.data[0].type !== "msubsup") 
        {return [MML.msup(this.data[0],this.data[1]),item]}
      this.data[0].SetData(this.data[0].sup,this.data[1]);
      return [this.data[0],item];
    }
  });
  
  STACKITEM.subsup = STACKITEM.Subclass({
    type: "subsup",
    stopError: /*_()*/ ["MissingScript","Missing superscript or subscript argument"],
    supError:  /*_()*/ ["MissingOpenForSup","Missing open brace for superscript"],
    subError:  /*_()*/ ["MissingOpenForSub","Missing open brace for subscript"],
    checkItem: function (item) {
      if (item.type === "open" || item.type === "left") {return true}
      if (item.type === "mml") {
        if (this.primes) {
          if (this.position !== 2) {this.data[0].SetData(2,this.primes)}
            else {item.data[0] = MML.mrow(this.primes.With({variantForm:true}),item.data[0])}
        }
        this.data[0].SetData(this.position,item.data[0]);
        if (this.movesupsub != null) {this.data[0].movesupsub = this.movesupsub}
        return STACKITEM.mml(this.data[0]);
      }
      if (this.SUPER(arguments).checkItem.call(this,item))
        {TEX.Error(this[["","subError","supError"][this.position]])}
    },
    Pop: function () {}
  });

  STACKITEM.over = STACKITEM.Subclass({
    type: "over", isClose: true, name: "\\over",
    checkItem: function (item,stack) {
      if (item.type === "over")
        {TEX.Error(["AmbiguousUseOf","Ambiguous use of %1",item.name])}
      if (item.isClose) {
        var mml = MML.mfrac(this.num,this.mmlData(false));
        if (this.thickness != null) {mml.linethickness = this.thickness}
        if (this.open || this.close) {
          mml.texWithDelims = true;
          mml = TEX.fixedFence(this.open,mml,this.close);
        }
        return [STACKITEM.mml(mml), item];
      }
      return this.SUPER(arguments).checkItem.call(this,item);
    },
    toString: function () {return "over["+this.num+" / "+this.data.join("; ")+"]"}
  });

  STACKITEM.left = STACKITEM.Subclass({
    type: "left", isOpen: true, delim: '(',
    stopError: /*_()*/ ["ExtraLeftMissingRight", "Extra \\left or missing \\right"],
    checkItem: function (item) {
      if (item.type === "right")
        {return STACKITEM.mml(TEX.fenced(this.delim,this.mmlData(),item.delim))}
      return this.SUPER(arguments).checkItem.call(this,item);
    }
  });

  STACKITEM.right = STACKITEM.Subclass({
    type: "right", isClose: true, delim: ')'
  });

  STACKITEM.begin = STACKITEM.Subclass({
    type: "begin", isOpen: true,
    checkItem: function (item) {
      if (item.type === "end") {
        if (item.name !== this.name)
          {TEX.Error(["EnvBadEnd","\\begin{%1} ended with \\end{%2}",this.name,item.name])}
        if (!this.end) {return STACKITEM.mml(this.mmlData())}
        return this.parse[this.end].call(this.parse,this,this.data);
      }
      if (item.type === "stop")
        {TEX.Error(["EnvMissingEnd","Missing \\end{%1}",this.name])}
      return this.SUPER(arguments).checkItem.call(this,item);
    }
  });
  
  STACKITEM.end = STACKITEM.Subclass({
    type: "end", isClose: true
  });

  STACKITEM.style = STACKITEM.Subclass({
    type: "style",
    checkItem: function (item) {
      if (!item.isClose) {return this.SUPER(arguments).checkItem.call(this,item)}
      var mml = MML.mstyle.apply(MML,this.data).With(this.styles);
      return [STACKITEM.mml(mml),item];
    }
  });
  
  STACKITEM.position = STACKITEM.Subclass({
    type: "position",
    checkItem: function (item) {
      if (item.isClose) {TEX.Error(["MissingBoxFor","Missing box for %1",this.name])}
      if (item.isNotStack) {
        var mml = item.mmlData();
        switch (this.move) {
         case 'vertical':
          mml = MML.mpadded(mml).With({height: this.dh, depth: this.dd, voffset: this.dh});
          return [STACKITEM.mml(mml)];
         case 'horizontal':
          return [STACKITEM.mml(this.left),item,STACKITEM.mml(this.right)];
        }
      }
      return this.SUPER(arguments).checkItem.call(this,item);
    }
  });
  
  STACKITEM.array = STACKITEM.Subclass({
    type: "array", isOpen: true, copyEnv: false, arraydef: {},
    Init: function () {
      this.table = []; this.row = []; this.frame = []; this.hfill = [];
      this.SUPER(arguments).Init.apply(this,arguments);
    },
    checkItem: function (item) {
      if (item.isClose && item.type !== "over") {
        if (item.isEntry) {this.EndEntry(); this.clearEnv(); return false}
        if (item.isCR)    {this.EndEntry(); this.EndRow(); this.clearEnv(); return false}
        this.EndTable(); this.clearEnv();
        var scriptlevel = this.arraydef.scriptlevel; delete this.arraydef.scriptlevel;
        var mml = MML.mtable.apply(MML,this.table).With(this.arraydef);
        if (this.frame.length === 4) {
          mml.frame = (this.frame.dashed ? "dashed" : "solid");
        } else if (this.frame.length) {
          mml.hasFrame = true;
          if (this.arraydef.rowlines) {this.arraydef.rowlines = this.arraydef.rowlines.replace(/none( none)+$/,"none")}
          mml = MML.menclose(mml).With({notation: this.frame.join(" "), isFrame: true});
          if ((this.arraydef.columnlines||"none") != "none" ||
              (this.arraydef.rowlines||"none") != "none") {mml.padding = 0} // HTML-CSS jax implements this
        }
        if (scriptlevel) {mml = MML.mstyle(mml).With({scriptlevel: scriptlevel})}
        if (this.open || this.close) {mml = TEX.fenced(this.open,mml,this.close)}
        mml = STACKITEM.mml(mml);
        if (this.requireClose) {
          if (item.type === 'close') {return mml}
          TEX.Error(["MissingCloseBrace","Missing close brace"]);
        }
        return [mml,item];
      }
      return this.SUPER(arguments).checkItem.call(this,item);
    },
    EndEntry: function () {
      var mtd = MML.mtd.apply(MML,this.data);
      if (this.hfill.length) {
        if (this.hfill[0] === 0) mtd.columnalign = "right";
        if (this.hfill[this.hfill.length-1] === this.data.length)
          mtd.columnalign = (mtd.columnalign ? "center" : "left");
      }
      this.row.push(mtd); this.data = []; this.hfill = [];
    },
    EndRow:   function () {
      var mtr = MML.mtr;
      if (this.isNumbered && this.row.length === 3) {
        this.row.unshift(this.row.pop());  // move equation number to first position
        mtr = MML.mlabeledtr;
      }
      this.table.push(mtr.apply(MML,this.row)); this.row = [];
    },
    EndTable: function () {
      if (this.data.length || this.row.length) {this.EndEntry(); this.EndRow()}
      this.checkLines();
    },
    checkLines: function () {
      if (this.arraydef.rowlines) {
        var lines = this.arraydef.rowlines.split(/ /);
        if (lines.length === this.table.length) {
          this.frame.push("bottom"); lines.pop();
          this.arraydef.rowlines = lines.join(' ');
        } else if (lines.length < this.table.length-1) {
          this.arraydef.rowlines += " none";
        }
      }
      if (this.rowspacing) {
        var rows = this.arraydef.rowspacing.split(/ /);
        while (rows.length < this.table.length) {rows.push(this.rowspacing+"em")}
        this.arraydef.rowspacing = rows.join(' ');
      }
    },
    clearEnv: function () {
      for (var id in this.env) {if (this.env.hasOwnProperty(id)) {delete this.env[id]}}
    }
  });
  
  STACKITEM.cell = STACKITEM.Subclass({
    type: "cell", isClose: true
  });

  STACKITEM.mml = STACKITEM.Subclass({
    type: "mml", isNotStack: true,
    Add: function () {this.data.push.apply(this.data,arguments); return this}
  });
  
  STACKITEM.fn = STACKITEM.Subclass({
    type: "fn",
    checkItem: function (item) {
      if (this.data[0]) {
        if (item.isOpen) {return true}
        if (item.type !== "fn") {
          if (item.type !== "mml" || !item.data[0]) {return [this.data[0],item]}
          if (item.data[0].isa(MML.mspace)) {return [this.data[0],item]}
          var mml = item.data[0]; if (mml.isEmbellished()) {mml = mml.CoreMO()}
          if ([0,0,1,1,0,1,1,0,0,0][mml.Get("texClass")]) {return [this.data[0],item]}
        }
        return [this.data[0],MML.mo(MML.entity("#x2061")).With({texClass:MML.TEXCLASS.NONE}),item];
      }
      return this.SUPER(arguments).checkItem.apply(this,arguments);
    }
  });
  
  STACKITEM.not = STACKITEM.Subclass({
    type: "not",
    checkItem: function (item) {
      var mml, c;
      if (item.type === "open" || item.type === "left") {return true}
      if (item.type === "mml" && item.data[0].type.match(/^(mo|mi|mtext)$/)) {
        mml = item.data[0], c = mml.data.join("");
        if (c.length === 1 && !mml.movesupsub && mml.data.length === 1) {
          c = STACKITEM.not.remap[c.charCodeAt(0)];
          if (c) {mml.SetData(0,MML.chars(String.fromCharCode(c)))}
            else {mml.Append(MML.chars("\u0338"))}
          return item;
        }
      }
      //  \mathrel{\rlap{\notChar}}
      mml = MML.mpadded(MML.mtext("\u29F8")).With({width:0});
      mml = MML.TeXAtom(mml).With({texClass:MML.TEXCLASS.REL});
      return [mml,item];
    }
  });
  STACKITEM.not.remap = {
    0x2190:0x219A, 0x2192:0x219B, 0x2194:0x21AE,
    0x21D0:0x21CD, 0x21D2:0x21CF, 0x21D4:0x21CE,
    0x2208:0x2209, 0x220B:0x220C, 0x2223:0x2224, 0x2225:0x2226,
    0x223C:0x2241, 0x007E:0x2241, 0x2243:0x2244, 0x2245:0x2247,
    0x2248:0x2249, 0x224D:0x226D, 0x003D:0x2260, 0x2261:0x2262,
    0x003C:0x226E, 0x003E:0x226F, 0x2264:0x2270, 0x2265:0x2271,
    0x2272:0x2274, 0x2273:0x2275, 0x2276:0x2278, 0x2277:0x2279,
    0x227A:0x2280, 0x227B:0x2281, 0x2282:0x2284, 0x2283:0x2285,
    0x2286:0x2288, 0x2287:0x2289, 0x22A2:0x22AC, 0x22A8:0x22AD,
    0x22A9:0x22AE, 0x22AB:0x22AF, 0x227C:0x22E0, 0x227D:0x22E1,
    0x2291:0x22E2, 0x2292:0x22E3, 0x22B2:0x22EA, 0x22B3:0x22EB,
    0x22B4:0x22EC, 0x22B5:0x22ED, 0x2203:0x2204
  };
  
  STACKITEM.dots = STACKITEM.Subclass({
    type: "dots",
    checkItem: function (item) {
      if (item.type === "open" || item.type === "left") {return true}
      var dots = this.ldots;
      if (item.type === "mml" && item.data[0].isEmbellished()) {
        var tclass = item.data[0].CoreMO().Get("texClass");
        if (tclass === MML.TEXCLASS.BIN || tclass === MML.TEXCLASS.REL) {dots = this.cdots}
      }
      return [dots,item];
    }
  });
  

  var TEXDEF = {
    //
    //  Add new definitions without overriding user-defined ones
    //
    Add: function (src,dst,nouser) {
      if (!dst) {dst = this}
      for (var id in src) {if (src.hasOwnProperty(id)) {
        if (typeof src[id] === 'object' && !isArray(src[id]) &&
           (typeof dst[id] === 'object' || typeof dst[id] === 'function')) 
             {this.Add(src[id],dst[id],src[id],nouser)}
          else if (!dst[id] || !dst[id].isUser || !nouser) {dst[id] = src[id]}
      }}
      return dst;
    }
  };
  var STARTUP = function () {
    MML = MathJax.ElementJax.mml;
    HUB.Insert(TEXDEF,{
  
      // patterns for letters and numbers
      letter:  /[a-z]/i,
      digit:   /[0-9.]/,
      number:  /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)*|\.[0-9]+)/,
    
      special: {
        '\\':  'ControlSequence',
        '{':   'Open',
        '}':   'Close',
        '~':   'Tilde',
        '^':   'Superscript',
        '_':   'Subscript',
        ' ':   'Space',
        "\t":  'Space',
        "\r":  'Space',
        "\n":  'Space',
        "'":   'Prime',
        '%':   'Comment',
        '&':   'Entry',
        '#':   'Hash',
        '\u00A0': 'Space',
        '\u2019': 'Prime'
      },
      
      remap: {
        '-':   '2212',
        '*':   '2217',
        '`':   '2018'   // map ` to back quote
      },
    
      mathchar0mi: {
        // Lower-case greek
        alpha:        '03B1',
        beta:         '03B2',
        gamma:        '03B3',
        delta:        '03B4',
        epsilon:      '03F5',
        zeta:         '03B6',
        eta:          '03B7',
        theta:        '03B8',
        iota:         '03B9',
        kappa:        '03BA',
        lambda:       '03BB',
        mu:           '03BC',
        nu:           '03BD',
        xi:           '03BE',
        omicron:      '03BF', // added for completeness
        pi:           '03C0',
        rho:          '03C1',
        sigma:        '03C3',
        tau:          '03C4',
        upsilon:      '03C5',
        phi:          '03D5',
        chi:          '03C7',
        psi:          '03C8',
        omega:        '03C9',
        varepsilon:   '03B5',
        vartheta:     '03D1',
        varpi:        '03D6',
        varrho:       '03F1',
        varsigma:     '03C2',
        varphi:       '03C6',
        
        // Ord symbols
        S:            ['00A7',{mathvariant: MML.VARIANT.NORMAL}],
        aleph:        ['2135',{mathvariant: MML.VARIANT.NORMAL}],
        hbar:         ['210F',{variantForm:true}],
        imath:        '0131',
        jmath:        '0237',
        ell:          '2113',
        wp:           ['2118',{mathvariant: MML.VARIANT.NORMAL}],
        Re:           ['211C',{mathvariant: MML.VARIANT.NORMAL}],
        Im:           ['2111',{mathvariant: MML.VARIANT.NORMAL}],
        partial:      ['2202',{mathvariant: MML.VARIANT.NORMAL}],
        infty:        ['221E',{mathvariant: MML.VARIANT.NORMAL}],
        prime:        ['2032',{mathvariant: MML.VARIANT.NORMAL, variantForm:true}],
        emptyset:     ['2205',{mathvariant: MML.VARIANT.NORMAL}],
        nabla:        ['2207',{mathvariant: MML.VARIANT.NORMAL}],
        top:          ['22A4',{mathvariant: MML.VARIANT.NORMAL}],
        bot:          ['22A5',{mathvariant: MML.VARIANT.NORMAL}],
        angle:        ['2220',{mathvariant: MML.VARIANT.NORMAL}],
        triangle:     ['25B3',{mathvariant: MML.VARIANT.NORMAL}],
        backslash:    ['2216',{mathvariant: MML.VARIANT.NORMAL, variantForm:true}],
        forall:       ['2200',{mathvariant: MML.VARIANT.NORMAL}],
        exists:       ['2203',{mathvariant: MML.VARIANT.NORMAL}],
        neg:          ['00AC',{mathvariant: MML.VARIANT.NORMAL}],
        lnot:         ['00AC',{mathvariant: MML.VARIANT.NORMAL}],
        flat:         ['266D',{mathvariant: MML.VARIANT.NORMAL}],
        natural:      ['266E',{mathvariant: MML.VARIANT.NORMAL}],
        sharp:        ['266F',{mathvariant: MML.VARIANT.NORMAL}],
        clubsuit:     ['2663',{mathvariant: MML.VARIANT.NORMAL}],
        diamondsuit:  ['2662',{mathvariant: MML.VARIANT.NORMAL}],
        heartsuit:    ['2661',{mathvariant: MML.VARIANT.NORMAL}],
        spadesuit:    ['2660',{mathvariant: MML.VARIANT.NORMAL}]
      },
        
      mathchar0mo: {
        surd:         '221A',

        // big ops
        coprod:       ['2210',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigvee:       ['22C1',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigwedge:     ['22C0',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        biguplus:     ['2A04',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigcap:       ['22C2',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigcup:       ['22C3',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        'int':        ['222B',{texClass: MML.TEXCLASS.OP}],
        intop:        ['222B',{texClass: MML.TEXCLASS.OP, movesupsub:true, movablelimits:true}],
        iint:         ['222C',{texClass: MML.TEXCLASS.OP}],
        iiint:        ['222D',{texClass: MML.TEXCLASS.OP}],
        prod:         ['220F',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        sum:          ['2211',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigotimes:    ['2A02',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigoplus:     ['2A01',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        bigodot:      ['2A00',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        oint:         ['222E',{texClass: MML.TEXCLASS.OP}],
        bigsqcup:     ['2A06',{texClass: MML.TEXCLASS.OP, movesupsub:true}],
        smallint:     ['222B',{largeop:false}],
        
        // binary operations
        triangleleft:      '25C3',
        triangleright:     '25B9',
        bigtriangleup:     '25B3',
        bigtriangledown:   '25BD',
        wedge:        '2227',
        land:         '2227',
        vee:          '2228',
        lor:          '2228',
        cap:          '2229',
        cup:          '222A',
        ddagger:      '2021',
        dagger:       '2020',
        sqcap:        '2293',
        sqcup:        '2294',
        uplus:        '228E',
        amalg:        '2A3F',
        diamond:      '22C4',
        bullet:       '2219',
        wr:           '2240',
        div:          '00F7',
        odot:         ['2299',{largeop: false}],
        oslash:       ['2298',{largeop: false}],
        otimes:       ['2297',{largeop: false}],
        ominus:       ['2296',{largeop: false}],
        oplus:        ['2295',{largeop: false}],
        mp:           '2213',
        pm:           '00B1',
        circ:         '2218',
        bigcirc:      '25EF',
        setminus:     ['2216',{variantForm:true}],
        cdot:         '22C5',
        ast:          '2217',
        times:        '00D7',
        star:         '22C6',
        
        // Relations
        propto:       '221D',
        sqsubseteq:   '2291',
        sqsupseteq:   '2292',
        parallel:     '2225',
        mid:          '2223',
        dashv:        '22A3',
        vdash:        '22A2',
        leq:          '2264',
        le:           '2264',
        geq:          '2265',
        ge:           '2265',
        lt:           '003C',
        gt:           '003E',
        succ:         '227B',
        prec:         '227A',
        approx:       '2248',
        succeq:       '2AB0',  // or '227C',
        preceq:       '2AAF',  // or '227D',
        supset:       '2283',
        subset:       '2282',
        supseteq:     '2287',
        subseteq:     '2286',
        'in':         '2208',
        ni:           '220B',
        notin:        '2209',
        owns:         '220B',
        gg:           '226B',
        ll:           '226A',
        sim:          '223C',
        simeq:        '2243',
        perp:         '22A5',
        equiv:        '2261',
        asymp:        '224D',
        smile:        '2323',
        frown:        '2322',
        ne:           '2260',
        neq:          '2260',
        cong:         '2245',
        doteq:        '2250',
        bowtie:       '22C8',
        models:       '22A8',
        
        notChar:      '29F8',
        
        
        // Arrows
        Leftrightarrow:     '21D4',
        Leftarrow:          '21D0',
        Rightarrow:         '21D2',
        leftrightarrow:     '2194',
        leftarrow:          '2190',
        gets:               '2190',
        rightarrow:         '2192',
        to:                 '2192',
        mapsto:             '21A6',
        leftharpoonup:      '21BC',
        leftharpoondown:    '21BD',
        rightharpoonup:     '21C0',
        rightharpoondown:   '21C1',
        nearrow:            '2197',
        searrow:            '2198',
        nwarrow:            '2196',
        swarrow:            '2199',
        rightleftharpoons:  '21CC',
        hookrightarrow:     '21AA',
        hookleftarrow:      '21A9',
        longleftarrow:      '27F5',
        Longleftarrow:      '27F8',
        longrightarrow:     '27F6',
        Longrightarrow:     '27F9',
        Longleftrightarrow: '27FA',
        longleftrightarrow: '27F7',
        longmapsto:         '27FC',
        
        
        // Misc.
        ldots:            '2026',
        cdots:            '22EF',
        vdots:            '22EE',
        ddots:            '22F1',
        dotsc:            '2026',  // dots with commas
        dotsb:            '22EF',  // dots with binary ops and relations
        dotsm:            '22EF',  // dots with multiplication
        dotsi:            '22EF',  // dots with integrals
        dotso:            '2026',  // other dots
        
        ldotp:            ['002E', {texClass: MML.TEXCLASS.PUNCT}],
        cdotp:            ['22C5', {texClass: MML.TEXCLASS.PUNCT}],
        colon:            ['003A', {texClass: MML.TEXCLASS.PUNCT}]
      },
      
      mathchar7: {
        Gamma:        '0393',
        Delta:        '0394',
        Theta:        '0398',
        Lambda:       '039B',
        Xi:           '039E',
        Pi:           '03A0',
        Sigma:        '03A3',
        Upsilon:      '03A5',
        Phi:          '03A6',
        Psi:          '03A8',
        Omega:        '03A9',
        
        '_':          '005F',
        '#':          '0023',
        '$':          '0024',
        '%':          '0025',
        '&':          '0026',
        And:          '0026'
      },
      
      delimiter: {
        '(':                '(',
        ')':                ')',
        '[':                '[',
        ']':                ']',
        '<':                '27E8',
        '>':                '27E9',
        '\\lt':             '27E8',
        '\\gt':             '27E9',
        '/':                '/',
        '|':                ['|',{texClass:MML.TEXCLASS.ORD}],
        '.':                '',
        '\\\\':             '\\',
        '\\lmoustache':     '23B0',  // non-standard
        '\\rmoustache':     '23B1',  // non-standard
        '\\lgroup':         '27EE',  // non-standard
        '\\rgroup':         '27EF',  // non-standard
        '\\arrowvert':      '23D0',
        '\\Arrowvert':      '2016',
        '\\bracevert':      '23AA',  // non-standard
        '\\Vert':           ['2016',{texClass:MML.TEXCLASS.ORD}],
        '\\|':              ['2016',{texClass:MML.TEXCLASS.ORD}],
        '\\vert':           ['|',{texClass:MML.TEXCLASS.ORD}],
        '\\uparrow':        '2191',
        '\\downarrow':      '2193',
        '\\updownarrow':    '2195',
        '\\Uparrow':        '21D1',
        '\\Downarrow':      '21D3',
        '\\Updownarrow':    '21D5',
        '\\backslash':      '\\',
        '\\rangle':         '27E9',
        '\\langle':         '27E8',
        '\\rbrace':         '}',
        '\\lbrace':         '{',
        '\\}':              '}',
        '\\{':              '{',
        '\\rceil':          '2309',
        '\\lceil':          '2308',
        '\\rfloor':         '230B',
        '\\lfloor':         '230A',
        '\\lbrack':         '[',
        '\\rbrack':         ']'
      },
      
      macros: {
        displaystyle:      ['SetStyle','D',true,0],
        textstyle:         ['SetStyle','T',false,0],
        scriptstyle:       ['SetStyle','S',false,1],
        scriptscriptstyle: ['SetStyle','SS',false,2],
        
        rm:                ['SetFont',MML.VARIANT.NORMAL],
        mit:               ['SetFont',MML.VARIANT.ITALIC],
        oldstyle:          ['SetFont',MML.VARIANT.OLDSTYLE],
        cal:               ['SetFont',MML.VARIANT.CALIGRAPHIC],
        it:                ['SetFont',"-tex-mathit"], // needs special handling
        bf:                ['SetFont',MML.VARIANT.BOLD],
        bbFont:            ['SetFont',MML.VARIANT.DOUBLESTRUCK],
        scr:               ['SetFont',MML.VARIANT.SCRIPT],
        frak:              ['SetFont',MML.VARIANT.FRAKTUR],
        sf:                ['SetFont',MML.VARIANT.SANSSERIF],
        tt:                ['SetFont',MML.VARIANT.MONOSPACE],

//      font:
        
        tiny:              ['SetSize',0.5],
        Tiny:              ['SetSize',0.6],  // non-standard
        scriptsize:        ['SetSize',0.7],
        small:             ['SetSize',0.85],
        normalsize:        ['SetSize',1.0],
        large:             ['SetSize',1.2],
        Large:             ['SetSize',1.44],
        LARGE:             ['SetSize',1.73],
        huge:              ['SetSize',2.07],
        Huge:              ['SetSize',2.49],
        
        arcsin:            ['NamedFn'],
        arccos:            ['NamedFn'],
        arctan:            ['NamedFn'],
        arg:               ['NamedFn'],
        cos:               ['NamedFn'],
        cosh:              ['NamedFn'],
        cot:               ['NamedFn'],
        coth:              ['NamedFn'],
        csc:               ['NamedFn'],
        deg:               ['NamedFn'],
        det:                'NamedOp',
        dim:               ['NamedFn'],
        exp:               ['NamedFn'],
        gcd:                'NamedOp',
        hom:               ['NamedFn'],
        inf:                'NamedOp',
        ker:               ['NamedFn'],
        lg:                ['NamedFn'],
        lim:                'NamedOp',
        liminf:            ['NamedOp','lim&thinsp;inf'],
        limsup:            ['NamedOp','lim&thinsp;sup'],
        ln:                ['NamedFn'],
        log:               ['NamedFn'],
        max:                'NamedOp',
        min:                'NamedOp',
        Pr:                 'NamedOp',
        sec:               ['NamedFn'],
        sin:               ['NamedFn'],
        sinh:              ['NamedFn'],
        sup:                'NamedOp',
        tan:               ['NamedFn'],
        tanh:              ['NamedFn'],
        
        limits:            ['Limits',1],
        nolimits:          ['Limits',0],

        overline:            ['UnderOver','00AF',null,1],
        underline:           ['UnderOver','005F'],
        overbrace:           ['UnderOver','23DE',1],
        underbrace:          ['UnderOver','23DF',1],
        overparen:           ['UnderOver','23DC'],
        underparen:          ['UnderOver','23DD'],
        overrightarrow:      ['UnderOver','2192'],
        underrightarrow:     ['UnderOver','2192'],
        overleftarrow:       ['UnderOver','2190'],
        underleftarrow:      ['UnderOver','2190'],
        overleftrightarrow:  ['UnderOver','2194'],
        underleftrightarrow: ['UnderOver','2194'],

        overset:            'Overset',
        underset:           'Underset',
        stackrel:           ['Macro','\\mathrel{\\mathop{#2}\\limits^{#1}}',2],
          
        over:               'Over',
        overwithdelims:     'Over',
        atop:               'Over',
        atopwithdelims:     'Over',
        above:              'Over',
        abovewithdelims:    'Over',
        brace:             ['Over','{','}'],
        brack:             ['Over','[',']'],
        choose:            ['Over','(',')'],
        
        frac:               'Frac',
        sqrt:               'Sqrt',
        root:               'Root',
        uproot:            ['MoveRoot','upRoot'],
        leftroot:          ['MoveRoot','leftRoot'],
        
        left:               'LeftRight',
        right:              'LeftRight',
        middle:             'Middle',

        llap:               'Lap',
        rlap:               'Lap',
        raise:              'RaiseLower',
        lower:              'RaiseLower',
        moveleft:           'MoveLeftRight',
        moveright:          'MoveLeftRight',

        ',':               ['Spacer',MML.LENGTH.THINMATHSPACE],
        ':':               ['Spacer',MML.LENGTH.MEDIUMMATHSPACE],  // for LaTeX
        '>':               ['Spacer',MML.LENGTH.MEDIUMMATHSPACE],
        ';':               ['Spacer',MML.LENGTH.THICKMATHSPACE],
        '!':               ['Spacer',MML.LENGTH.NEGATIVETHINMATHSPACE],
        enspace:           ['Spacer',".5em"],
        quad:              ['Spacer',"1em"],
        qquad:             ['Spacer',"2em"],
        thinspace:         ['Spacer',MML.LENGTH.THINMATHSPACE],
        negthinspace:      ['Spacer',MML.LENGTH.NEGATIVETHINMATHSPACE],
    
        hskip:              'Hskip',
        hspace:             'Hskip',
        kern:               'Hskip',
        mskip:              'Hskip',
        mspace:             'Hskip',
        mkern:              'Hskip',
        rule:               'rule',
        Rule:              ['Rule'],
        Space:             ['Rule','blank'],
    
        big:               ['MakeBig',MML.TEXCLASS.ORD,0.85],
        Big:               ['MakeBig',MML.TEXCLASS.ORD,1.15],
        bigg:              ['MakeBig',MML.TEXCLASS.ORD,1.45],
        Bigg:              ['MakeBig',MML.TEXCLASS.ORD,1.75],
        bigl:              ['MakeBig',MML.TEXCLASS.OPEN,0.85],
        Bigl:              ['MakeBig',MML.TEXCLASS.OPEN,1.15],
        biggl:             ['MakeBig',MML.TEXCLASS.OPEN,1.45],
        Biggl:             ['MakeBig',MML.TEXCLASS.OPEN,1.75],
        bigr:              ['MakeBig',MML.TEXCLASS.CLOSE,0.85],
        Bigr:              ['MakeBig',MML.TEXCLASS.CLOSE,1.15],
        biggr:             ['MakeBig',MML.TEXCLASS.CLOSE,1.45],
        Biggr:             ['MakeBig',MML.TEXCLASS.CLOSE,1.75],
        bigm:              ['MakeBig',MML.TEXCLASS.REL,0.85],
        Bigm:              ['MakeBig',MML.TEXCLASS.REL,1.15],
        biggm:             ['MakeBig',MML.TEXCLASS.REL,1.45],
        Biggm:             ['MakeBig',MML.TEXCLASS.REL,1.75],

        mathord:           ['TeXAtom',MML.TEXCLASS.ORD],
        mathop:            ['TeXAtom',MML.TEXCLASS.OP],
        mathopen:          ['TeXAtom',MML.TEXCLASS.OPEN],
        mathclose:         ['TeXAtom',MML.TEXCLASS.CLOSE],
        mathbin:           ['TeXAtom',MML.TEXCLASS.BIN],
        mathrel:           ['TeXAtom',MML.TEXCLASS.REL],
        mathpunct:         ['TeXAtom',MML.TEXCLASS.PUNCT],
        mathinner:         ['TeXAtom',MML.TEXCLASS.INNER],

        vcenter:           ['TeXAtom',MML.TEXCLASS.VCENTER],

        mathchoice:        ['Extension','mathchoice'],
        buildrel:           'BuildRel',
    
        hbox:               ['HBox',0],
        text:               'HBox',
        mbox:               ['HBox',0],
        fbox:               'FBox',

        strut:              'Strut',
        mathstrut:         ['Macro','\\vphantom{(}'],
        phantom:            'Phantom',
        vphantom:          ['Phantom',1,0],
        hphantom:          ['Phantom',0,1],
        smash:              'Smash',
    
        acute:             ['Accent', "00B4"],  // or 0301 or 02CA
        grave:             ['Accent', "0060"],  // or 0300 or 02CB
        ddot:              ['Accent', "00A8"],  // or 0308
        tilde:             ['Accent', "007E"],  // or 0303 or 02DC
        bar:               ['Accent', "00AF"],  // or 0304 or 02C9
        breve:             ['Accent', "02D8"],  // or 0306
        check:             ['Accent', "02C7"],  // or 030C
        hat:               ['Accent', "005E"],  // or 0302 or 02C6
        vec:               ['Accent', "2192"],  // or 20D7
        dot:               ['Accent', "02D9"],  // or 0307
        widetilde:         ['Accent', "007E",1], // or 0303 or 02DC
        widehat:           ['Accent', "005E",1], // or 0302 or 02C6

        matrix:             'Matrix',
        array:              'Matrix',
        pmatrix:           ['Matrix','(',')'],
        cases:             ['Matrix','{','',"left left",null,".1em",null,true],
        eqalign:           ['Matrix',null,null,"right left",MML.LENGTH.THICKMATHSPACE,".5em",'D'],
        displaylines:      ['Matrix',null,null,"center",null,".5em",'D'],
        cr:                 'Cr',
        '\\':               'CrLaTeX',
        newline:            'Cr',
        hline:             ['HLine','solid'],
        hdashline:         ['HLine','dashed'],
//      noalign:            'HandleNoAlign',
        eqalignno:         ['Matrix',null,null,"right left",MML.LENGTH.THICKMATHSPACE,".5em",'D',null,"right"],
        leqalignno:        ['Matrix',null,null,"right left",MML.LENGTH.THICKMATHSPACE,".5em",'D',null,"left"],
        hfill:              'HFill',
        hfil:               'HFill',   // \hfil treated as \hfill for now
        hfilll:             'HFill',   // \hfilll treated as \hfill for now

        //  TeX substitution macros
        bmod:              ['Macro','\\mmlToken{mo}[lspace="thickmathspace" rspace="thickmathspace"]{mod}'],
        pmod:              ['Macro','\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}',1],
        mod:               ['Macro','\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1',1],
        pod:               ['Macro','\\mathchoice{\\kern18mu}{\\kern8mu}{\\kern8mu}{\\kern8mu}(#1)',1],
        iff:               ['Macro','\\;\\Longleftrightarrow\\;'],
        skew:              ['Macro','{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}',3],
        mathcal:           ['Macro','{\\cal #1}',1],
        mathscr:           ['Macro','{\\scr #1}',1],
        mathrm:            ['Macro','{\\rm #1}',1],
        mathbf:            ['Macro','{\\bf #1}',1],
        mathbb:            ['Macro','{\\bbFont #1}',1],
        Bbb:               ['Macro','{\\bbFont #1}',1],
        mathit:            ['Macro','{\\it #1}',1],
        mathfrak:          ['Macro','{\\frak #1}',1],
        mathsf:            ['Macro','{\\sf #1}',1],
        mathtt:            ['Macro','{\\tt #1}',1],
        textrm:            ['Macro','\\mathord{\\rm\\text{#1}}',1],
        textit:            ['Macro','\\mathord{\\it\\text{#1}}',1],
        textbf:            ['Macro','\\mathord{\\bf\\text{#1}}',1],
        textsf:            ['Macro','\\mathord{\\sf\\text{#1}}',1],
        texttt:            ['Macro','\\mathord{\\tt\\text{#1}}',1],
        pmb:               ['Macro','\\rlap{#1}\\kern1px{#1}',1],
        TeX:               ['Macro','T\\kern-.14em\\lower.5ex{E}\\kern-.115em X'],
        LaTeX:             ['Macro','L\\kern-.325em\\raise.21em{\\scriptstyle{A}}\\kern-.17em\\TeX'],
        ' ':               ['Macro','\\text{ }'],

        //  Specially handled
        not:                'Not',
        dots:               'Dots',
        space:              'Tilde',
        '\u00A0':           'Tilde',
        

        //  LaTeX
        begin:              'BeginEnd',
        end:                'BeginEnd',

        newcommand:        ['Extension','newcommand'],
        renewcommand:      ['Extension','newcommand'],
        newenvironment:    ['Extension','newcommand'],
        renewenvironment:  ['Extension','newcommand'],
        def:               ['Extension','newcommand'],
        let:               ['Extension','newcommand'],
        
        verb:              ['Extension','verb'],
        
        boldsymbol:        ['Extension','boldsymbol'],
        
        tag:               ['Extension','AMSmath'],
        notag:             ['Extension','AMSmath'],
        label:             ['Extension','AMSmath'],
        ref:               ['Extension','AMSmath'],
        eqref:             ['Extension','AMSmath'],
        nonumber:          ['Macro','\\notag'],

        //  Extensions to TeX
        unicode:           ['Extension','unicode'],
        color:              'Color',
        
        href:              ['Extension','HTML'],
        'class':           ['Extension','HTML'],
        style:             ['Extension','HTML'],
        cssId:             ['Extension','HTML'],
        bbox:              ['Extension','bbox'],
    
        mmlToken:           'MmlToken',

        require:            'Require'

      },
      
      environment: {
        array:        ['AlignedArray'],
        matrix:       ['Array',null,null,null,'c'],
        pmatrix:      ['Array',null,'(',')','c'],
        bmatrix:      ['Array',null,'[',']','c'],
        Bmatrix:      ['Array',null,'\\{','\\}','c'],
        vmatrix:      ['Array',null,'\\vert','\\vert','c'],
        Vmatrix:      ['Array',null,'\\Vert','\\Vert','c'],
        cases:        ['Array',null,'\\{','.','ll',null,".2em",'T'],

        equation:     [null,'Equation'],
        'equation*':  [null,'Equation'],

        eqnarray:     ['ExtensionEnv',null,'AMSmath'],
        'eqnarray*':  ['ExtensionEnv',null,'AMSmath'],

        align:        ['ExtensionEnv',null,'AMSmath'],
        'align*':     ['ExtensionEnv',null,'AMSmath'],
        aligned:      ['ExtensionEnv',null,'AMSmath'],
        multline:     ['ExtensionEnv',null,'AMSmath'],
        'multline*':  ['ExtensionEnv',null,'AMSmath'],
        split:        ['ExtensionEnv',null,'AMSmath'],
        gather:       ['ExtensionEnv',null,'AMSmath'],
        'gather*':    ['ExtensionEnv',null,'AMSmath'],
        gathered:     ['ExtensionEnv',null,'AMSmath'],
        alignat:      ['ExtensionEnv',null,'AMSmath'],
        'alignat*':   ['ExtensionEnv',null,'AMSmath'],
        alignedat:    ['ExtensionEnv',null,'AMSmath']
      },
      
      p_height: 1.2 / .85   // cmex10 height plus depth over .85

    });
    
    //
    //  Add macros defined in the configuration
    //
    if (this.config.Macros) {
      var MACROS = this.config.Macros;
      for (var id in MACROS) {if (MACROS.hasOwnProperty(id)) {
        if (typeof(MACROS[id]) === "string") {TEXDEF.macros[id] = ['Macro',MACROS[id]]}
        else {TEXDEF.macros[id] = ["Macro"].concat(MACROS[id])}
        TEXDEF.macros[id].isUser = true;
      }}
    }
  };
  
  /************************************************************************/
  /*
   *   The TeX Parser
   */

  var PARSE = MathJax.Object.Subclass({
    Init: function (string,env) {
      this.string = string; this.i = 0; this.macroCount = 0;
      var ENV; if (env) {ENV = {}; for (var id in env) {if (env.hasOwnProperty(id)) {ENV[id] = env[id]}}}
      this.stack = TEX.Stack(ENV,!!env);
      this.Parse(); this.Push(STACKITEM.stop());
    },
    Parse: function () {
      var c, n;
      while (this.i < this.string.length) {
        c = this.string.charAt(this.i++); n = c.charCodeAt(0);
        if (n >= 0xD800 && n < 0xDC00) {c += this.string.charAt(this.i++)}
        if (TEXDEF.special[c]) {this[TEXDEF.special[c]](c)}
        else if (TEXDEF.letter.test(c)) {this.Variable(c)}
        else if (TEXDEF.digit.test(c)) {this.Number(c)}
        else {this.Other(c)}
      }
    },
    Push: function () {this.stack.Push.apply(this.stack,arguments)},
    mml: function () {
      if (this.stack.Top().type !== "mml") {return null}
      return this.stack.Top().data[0];
    },
    mmlToken: function (token) {return token}, // used by boldsymbol extension

    /************************************************************************/
    /*
     *   Handle various token classes
     */

    /*
     *  Lookup a control-sequence and process it
     */
    ControlSequence: function (c) {
      var name = this.GetCS(), macro = this.csFindMacro(name);
      if (macro) {
        if (!isArray(macro)) {macro = [macro]}
        var fn = macro[0]; if (!(fn instanceof Function)) {fn = this[fn]}
        fn.apply(this,[c+name].concat(macro.slice(1)));
      } else if (TEXDEF.mathchar0mi[name])            {this.csMathchar0mi(name,TEXDEF.mathchar0mi[name])}
        else if (TEXDEF.mathchar0mo[name])            {this.csMathchar0mo(name,TEXDEF.mathchar0mo[name])}
        else if (TEXDEF.mathchar7[name])              {this.csMathchar7(name,TEXDEF.mathchar7[name])}
        else if (TEXDEF.delimiter["\\"+name] != null) {this.csDelimiter(name,TEXDEF.delimiter["\\"+name])}
        else                                          {this.csUndefined(c+name)}
    },
    //
    //  Look up a macro in the macros list
    //  (overridden in begingroup extension)
    //
    csFindMacro: function (name) {return TEXDEF.macros[name]},
    //
    //  Handle normal mathchar (as an mi)
    //
    csMathchar0mi: function (name,mchar) {
      var def = {mathvariant: MML.VARIANT.ITALIC};
      if (isArray(mchar)) {def = mchar[1]; mchar = mchar[0]}
      this.Push(this.mmlToken(MML.mi(MML.entity("#x"+mchar)).With(def)));
    },
    //
    //  Handle normal mathchar (as an mo)
    //
    csMathchar0mo: function (name,mchar) {
      var def = {stretchy: false};
      if (isArray(mchar)) {def = mchar[1]; def.stretchy = false; mchar = mchar[0]}
      this.Push(this.mmlToken(MML.mo(MML.entity("#x"+mchar)).With(def)));
    },
    //
    //  Handle mathchar in current family
    //
    csMathchar7: function (name,mchar) {
      var def = {mathvariant: MML.VARIANT.NORMAL};
      if (isArray(mchar)) {def = mchar[1]; mchar = mchar[0]}
      if (this.stack.env.font) {def.mathvariant = this.stack.env.font}
      this.Push(this.mmlToken(MML.mi(MML.entity("#x"+mchar)).With(def)));
    },
    //
    //  Handle delimiter
    //
    csDelimiter: function (name,delim) {
      var def = {};
      if (isArray(delim)) {def = delim[1]; delim = delim[0]}
      if (delim.length === 4) {delim = MML.entity('#x'+delim)} else {delim = MML.chars(delim)}
      this.Push(this.mmlToken(MML.mo(delim).With({fence: false, stretchy: false}).With(def)));
    },
    //
    //  Handle undefined control sequence
    //  (overridden in noUndefined extension)
    //
    csUndefined: function (name) {
      TEX.Error(["UndefinedControlSequence","Undefined control sequence %1",name]);
    },

    /*
     *  Handle a variable (a single letter)
     */
    Variable: function (c) {
      var def = {}; if (this.stack.env.font) {def.mathvariant = this.stack.env.font}
      this.Push(this.mmlToken(MML.mi(MML.chars(c)).With(def)));
    },

    /*
     *  Determine the extent of a number (pattern may need work)
     */
    Number: function (c) {
      var mml, n = this.string.slice(this.i-1).match(TEXDEF.number);
      if (n) {mml = MML.mn(n[0].replace(/[{}]/g,"")); this.i += n[0].length - 1}
        else {mml = MML.mo(MML.chars(c))}
      if (this.stack.env.font) {mml.mathvariant = this.stack.env.font}
      this.Push(this.mmlToken(mml));
    },
    
    /*
     *  Handle { and }
     */
    Open: function (c) {this.Push(STACKITEM.open())},
    Close: function (c) {this.Push(STACKITEM.close())},
    
    /*
     *  Handle tilde and spaces
     */
    Tilde: function (c) {this.Push(MML.mtext(MML.chars(NBSP)))},
    Space: function (c) {},
    
    /*
     *  Handle ^, _, and '
     */
    Superscript: function (c) {
      if (this.GetNext().match(/\d/)) // don't treat numbers as a unit
        {this.string = this.string.substr(0,this.i+1)+" "+this.string.substr(this.i+1)}
      var primes, base, top = this.stack.Top();
      if (top.type === "prime") {base = top.data[0]; primes = top.data[1]; this.stack.Pop()}
        else {base = this.stack.Prev(); if (!base) {base = MML.mi("")}}
      if (base.isEmbellishedWrapper) {base = base.data[0].data[0]}
      var movesupsub = base.movesupsub, position = base.sup;
      if ((base.type === "msubsup" && base.data[base.sup]) ||
          (base.type === "munderover" && base.data[base.over] && !base.subsupOK))
           {TEX.Error(["DoubleExponent","Double exponent: use braces to clarify"])}
      if (base.type !== "msubsup") {
        if (movesupsub) {
          if (base.type !== "munderover" || base.data[base.over]) {
            if (base.movablelimits && base.isa(MML.mi)) {base = this.mi2mo(base)}
            base = MML.munderover(base,null,null).With({movesupsub:true})
          }
          position = base.over;
        } else {
          base = MML.msubsup(base,null,null);
          position = base.sup;
        }
      }
      this.Push(STACKITEM.subsup(base).With({
        position: position, primes: primes, movesupsub: movesupsub
      }));
    },
    Subscript: function (c) {
      if (this.GetNext().match(/\d/)) // don't treat numbers as a unit
        {this.string = this.string.substr(0,this.i+1)+" "+this.string.substr(this.i+1)}
      var primes, base, top = this.stack.Top();
      if (top.type === "prime") {base = top.data[0]; primes = top.data[1]; this.stack.Pop()}
        else {base = this.stack.Prev(); if (!base) {base = MML.mi("")}}
      if (base.isEmbellishedWrapper) {base = base.data[0].data[0]}
      var movesupsub = base.movesupsub, position = base.sub;
      if ((base.type === "msubsup" && base.data[base.sub]) ||
          (base.type === "munderover" && base.data[base.under] && !base.subsupOK))
           {TEX.Error(["DoubleSubscripts","Double subscripts: use braces to clarify"])}
      if (base.type !== "msubsup") {
        if (movesupsub) {
          if (base.type !== "munderover" || base.data[base.under]) {
            if (base.movablelimits && base.isa(MML.mi)) {base = this.mi2mo(base)}
            base = MML.munderover(base,null,null).With({movesupsub:true})
          }
          position = base.under;
        } else {
          base = MML.msubsup(base,null,null);
          position = base.sub;
        }
      }
      this.Push(STACKITEM.subsup(base).With({
        position: position, primes: primes, movesupsub: movesupsub
      }));
    },
    PRIME: "\u2032", SMARTQUOTE: "\u2019",
    Prime: function (c) {
      var base = this.stack.Prev(); if (!base) {base = MML.mi()}
      if (base.type === "msubsup" && base.data[base.sup]) {
        TEX.Error(["DoubleExponentPrime",
                   "Prime causes double exponent: use braces to clarify"]);
      }
      var sup = ""; this.i--;
      do {sup += this.PRIME; this.i++, c = this.GetNext()}
        while (c === "'" || c === this.SMARTQUOTE);
      sup = ["","\u2032","\u2033","\u2034","\u2057"][sup.length] || sup;
      this.Push(STACKITEM.prime(base,this.mmlToken(MML.mo(sup))));
    },
    mi2mo: function (mi) {
      var mo = MML.mo();  mo.Append.apply(mo,mi.data); var id;
      for (id in mo.defaults)
        {if (mo.defaults.hasOwnProperty(id) && mi[id] != null) {mo[id] = mi[id]}}
      for (id in MML.copyAttributes)
        {if (MML.copyAttributes.hasOwnProperty(id) && mi[id] != null) {mo[id] = mi[id]}}
      mo.lspace = mo.rspace = "0";  // prevent mo from having space in NativeMML
      mo.useMMLspacing &= ~(mo.SPACE_ATTR.lspace | mo.SPACE_ATTR.rspace);  // don't count these explicit settings
      return mo;
    },
    
    /*
     *  Handle comments
     */
    Comment: function (c) {
      while (this.i < this.string.length && this.string.charAt(this.i) != "\n") {this.i++}
    },
    
    /*
     *  Handle hash marks outside of definitions
     */
    Hash: function (c) {
      TEX.Error(["CantUseHash1",
                 "You can't use 'macro parameter character #' in math mode"]);
    },
    
    /*
     *  Handle other characters (as <mo> elements)
     */
    Other: function (c) {
      var def, mo;
      if (this.stack.env.font) {def = {mathvariant: this.stack.env.font}}
      if (TEXDEF.remap[c]) {
        c = TEXDEF.remap[c];
        if (isArray(c)) {def = c[1]; c = c[0]}
        mo = MML.mo(MML.entity('#x'+c)).With(def);
      } else {
        mo = MML.mo(c).With(def);
      }
      if (mo.autoDefault("stretchy",true)) {mo.stretchy = false}
      if (mo.autoDefault("texClass",true) == "") {mo = MML.TeXAtom(mo)}
      this.Push(this.mmlToken(mo));
    },
    
    /************************************************************************/
    /*
     *   Macros
     */
    
    SetFont: function (name,font) {this.stack.env.font = font},
    SetStyle: function (name,texStyle,style,level) {
      this.stack.env.style = texStyle; this.stack.env.level = level;
      this.Push(STACKITEM.style().With({styles: {displaystyle: style, scriptlevel: level}}));
    },
    SetSize: function (name,size) {
      this.stack.env.size = size;
      this.Push(STACKITEM.style().With({styles: {mathsize: size+"em"}})); // convert to absolute?
    },

    Color: function (name) {
      var color = this.GetArgument(name);
      var old = this.stack.env.color; this.stack.env.color = color;
      var math = this.ParseArg(name);
      if (old) {this.stack.env.color} else {delete this.stack.env.color}
      this.Push(MML.mstyle(math).With({mathcolor: color}));
    },
    
    Spacer: function (name,space) {
      this.Push(MML.mspace().With({width: space, mathsize: MML.SIZE.NORMAL, scriptlevel:0}));
    },
    
    LeftRight: function (name) {
      this.Push(STACKITEM[name.substr(1)]().With({delim: this.GetDelimiter(name)}));
    },
    
    Middle: function (name) {
      var delim = this.GetDelimiter(name);
      this.Push(MML.TeXAtom().With({texClass:MML.TEXCLASS.CLOSE}));
      if (this.stack.Top().type !== "left")
        {TEX.Error(["MisplacedMiddle","%1 must be within \\left and \\right",name])}
      this.Push(MML.mo(delim).With({stretchy:true}));
      this.Push(MML.TeXAtom().With({texClass:MML.TEXCLASS.OPEN}));
    },
    
    NamedFn: function (name,id) {
      if (!id) {id = name.substr(1)};
      var mml = MML.mi(id).With({texClass: MML.TEXCLASS.OP});
      this.Push(STACKITEM.fn(this.mmlToken(mml)));
    },
    NamedOp: function (name,id) {
      if (!id) {id = name.substr(1)};
      id = id.replace(/&thinsp;/,"\u2006");
      var mml = MML.mo(id).With({
        movablelimits: true,
        movesupsub: true,
        form: MML.FORM.PREFIX,
        texClass: MML.TEXCLASS.OP
      });
      mml.useMMLspacing &= ~mml.SPACE_ATTR.form;  // don't count this explicit form setting
      this.Push(this.mmlToken(mml));
    },
    Limits: function (name,limits) {
      var op = this.stack.Prev("nopop");
      if (!op || (op.Get("texClass") !== MML.TEXCLASS.OP && op.movesupsub == null))
        {TEX.Error(["MisplacedLimits","%1 is allowed only on operators",name])}
      var top = this.stack.Top();
      if (op.type === "munderover" && !limits) {
        op = top.data[top.data.length-1] = MML.msubsup.apply(MML.subsup,op.data);
      } else if (op.type === "msubsup" && limits) {
        op = top.data[top.data.length-1] = MML.munderover.apply(MML.underover,op.data);
      }
      op.movesupsub = (limits ? true : false);
      op.Core().movablelimits = false;
      if (op.movablelimits) op.movablelimits = false;
    },
    
    Over: function (name,open,close) {
      var mml = STACKITEM.over().With({name: name});
      if (open || close) {
        mml.open = open; mml.close = close;
      } else if (name.match(/withdelims$/)) {
        mml.open  = this.GetDelimiter(name);
        mml.close = this.GetDelimiter(name);
      }
      if (name.match(/^\\above/)) {mml.thickness = this.GetDimen(name)}
      else if (name.match(/^\\atop/) || open || close) {mml.thickness = 0}
      this.Push(mml);
    },

    Frac: function (name) {
      var num = this.ParseArg(name);
      var den = this.ParseArg(name);
      this.Push(MML.mfrac(num,den));
    },

    Sqrt: function (name) {
      var n = this.GetBrackets(name), arg = this.GetArgument(name);
      if (arg === "\\frac") {arg += "{"+this.GetArgument(arg)+"}{"+this.GetArgument(arg)+"}"}
      var mml = TEX.Parse(arg,this.stack.env).mml();
      if (!n) {mml = MML.msqrt.apply(MML,mml.array())}
         else {mml = MML.mroot(mml,this.parseRoot(n))}
      this.Push(mml);
    },
    Root: function (name) {
      var n = this.GetUpTo(name,"\\of");
      var arg = this.ParseArg(name);
      this.Push(MML.mroot(arg,this.parseRoot(n)));
    },
    parseRoot: function (n) {
      var env = this.stack.env, inRoot = env.inRoot; env.inRoot = true;
      var parser = TEX.Parse(n,env); n = parser.mml(); var global = parser.stack.global;
      if (global.leftRoot || global.upRoot) {
        n = MML.mpadded(n);
        if (global.leftRoot) {n.width = global.leftRoot}
        if (global.upRoot) {n.voffset = global.upRoot; n.height = global.upRoot}
      }
      env.inRoot = inRoot;
      return n;
    },
    MoveRoot: function (name,id) {
      if (!this.stack.env.inRoot)
        {TEX.Error(["MisplacedMoveRoot","%1 can appear only within a root",name])}
      if (this.stack.global[id])
        {TEX.Error(["MultipleMoveRoot","Multiple use of %1",name])}
      var n = this.GetArgument(name);
      if (!n.match(/-?[0-9]+/))
        {TEX.Error(["IntegerArg","The argument to %1 must be an integer",name])}
      n = (n/15)+"em";
      if (n.substr(0,1) !== "-") {n = "+"+n}
      this.stack.global[id] = n;
    },
    
    Accent: function (name,accent,stretchy) {
      var c = this.ParseArg(name);
      var def = {accent: true}; if (this.stack.env.font) {def.mathvariant = this.stack.env.font}
      var mml = this.mmlToken(MML.mo(MML.entity("#x"+accent)).With(def));
      mml.stretchy = (stretchy ? true : false);
      var mo = (c.isEmbellished() ? c.CoreMO() : c);
      if (mo.isa(MML.mo)) mo.movablelimits = false;
      this.Push(MML.TeXAtom(MML.munderover(c,null,mml).With({accent: true})));
    },
    
    UnderOver: function (name,c,stack,noaccent) {
      var pos = {o: "over", u: "under"}[name.charAt(1)];
      var base = this.ParseArg(name);
      if (base.Get("movablelimits")) {base.movablelimits = false}
      if (base.isa(MML.munderover) && base.isEmbellished()) {
        base.Core().With({lspace:0,rspace:0}); // get spacing right for NativeMML
        base = MML.mrow(MML.mo().With({rspace:0}),base);  // add an empty <mi> so it's not embellished any more
      }
      var mml = MML.munderover(base,null,null);
      mml.SetData(
        mml[pos], 
        this.mmlToken(MML.mo(MML.entity("#x"+c)).With({stretchy:true, accent:!noaccent}))
      );
      if (stack) {mml = MML.TeXAtom(mml).With({texClass:MML.TEXCLASS.OP, movesupsub:true})}
      this.Push(mml.With({subsupOK:true}));
    },
    
    Overset: function (name) {
      var top = this.ParseArg(name), base = this.ParseArg(name);
      if (base.movablelimits) base.movablelimits = false;
      this.Push(MML.mover(base,top));
    },
    Underset: function (name) {
      var bot = this.ParseArg(name), base = this.ParseArg(name);
      if (base.movablelimits) base.movablelimits = false;
      this.Push(MML.munder(base,bot));
    },
    
    TeXAtom: function (name,mclass) {
      var def = {texClass: mclass}, mml;
      if (mclass == MML.TEXCLASS.OP) {
        def.movesupsub = def.movablelimits = true;
        var arg = this.GetArgument(name);
        var match = arg.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
        if (match) {
          def.mathvariant = MML.VARIANT.NORMAL;
          mml = STACKITEM.fn(this.mmlToken(MML.mi(match[1]).With(def)));
        } else {
          mml = STACKITEM.fn(MML.TeXAtom(TEX.Parse(arg,this.stack.env).mml()).With(def));
        }
      } else {mml = MML.TeXAtom(this.ParseArg(name)).With(def)}
      this.Push(mml);
    },
    
    MmlToken: function (name) {
      var type = this.GetArgument(name),
          attr = this.GetBrackets(name,"").replace(/^\s+/,""),
          data = this.GetArgument(name),
          def = {attrNames:[]}, match;
      if (!MML[type] || !MML[type].prototype.isToken)
        {TEX.Error(["NotMathMLToken","%1 is not a token element",type])}
      while (attr !== "") {
        match = attr.match(/^([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^ ,]*)\s*,?\s*/i);
        if (!match)
          {TEX.Error(["InvalidMathMLAttr","Invalid MathML attribute: %1",attr])}
        if (MML[type].prototype.defaults[match[1]] == null && !this.MmlTokenAllow[match[1]]) {
          TEX.Error(["UnknownAttrForElement",
                     "%1 is not a recognized attribute for %2",
                     match[1],type]);
        }
        var value = this.MmlFilterAttribute(match[1],match[2].replace(/^(['"])(.*)\1$/,"$2"));
        if (value) {
          if (value.toLowerCase() === "true") {value = true}
            else if (value.toLowerCase() === "false") {value = false}
          def[match[1]] = value;
          def.attrNames.push(match[1]);
        }
        attr = attr.substr(match[0].length);
      }
      this.Push(this.mmlToken(MML[type](data).With(def)));
    },
    MmlFilterAttribute: function (name,value) {return value},
    MmlTokenAllow: {
      fontfamily:1, fontsize:1, fontweight:1, fontstyle:1,
      color:1, background:1,
      id:1, "class":1, href:1, style:1
    },
    
    Strut: function (name) {
      this.Push(MML.mpadded(MML.mrow()).With({height: "8.6pt", depth: "3pt", width: 0}));
    },
    
    Phantom: function (name,v,h) {
      var box = MML.mphantom(this.ParseArg(name));
      if (v || h) {
        box = MML.mpadded(box);
        if (h) {box.height = box.depth = 0}
        if (v) {box.width = 0}
      }
      this.Push(MML.TeXAtom(box));
    },
    
    Smash: function (name) {
      var bt = this.trimSpaces(this.GetBrackets(name,""));
      var smash = MML.mpadded(this.ParseArg(name));
      switch (bt) {
        case "b": smash.depth = 0; break;
        case "t": smash.height = 0; break;
        default: smash.height = smash.depth = 0;
      }
      this.Push(MML.TeXAtom(smash));
    },
    
    Lap: function (name) {
      var mml = MML.mpadded(this.ParseArg(name)).With({width: 0});
      if (name === "\\llap") {mml.lspace = "-1width"}
      this.Push(MML.TeXAtom(mml));
    },
    
    RaiseLower: function (name) {
      var h = this.GetDimen(name);
      var item = STACKITEM.position().With({name: name, move: 'vertical'});
      if (h.charAt(0) === '-') {h = h.slice(1); name = {raise: "\\lower", lower: "\\raise"}[name.substr(1)]}
      if (name === "\\lower") {item.dh = '-'+h; item.dd = '+'+h} else {item.dh = '+'+h; item.dd = '-'+h}
      this.Push(item);
    },
    
    MoveLeftRight: function (name) {
      var h = this.GetDimen(name);
      var nh = (h.charAt(0) === '-' ? h.slice(1) : '-'+h);
      if (name === "\\moveleft") {var tmp = h; h = nh; nh = tmp}
      this.Push(STACKITEM.position().With({
        name: name, move: 'horizontal',
        left:  MML.mspace().With({width: h, mathsize: MML.SIZE.NORMAL}),
        right: MML.mspace().With({width: nh, mathsize: MML.SIZE.NORMAL})
      }));
    },
    
    Hskip: function (name) {
      this.Push(MML.mspace().With({width: this.GetDimen(name), mathsize: MML.SIZE.NORMAL}));
    },
    
    Rule: function (name,style) {
      var w = this.GetDimen(name),
          h = this.GetDimen(name),
          d = this.GetDimen(name);
      var def = {width:w, height:h, depth:d};
      if (style !== 'blank') {
        def.mathbackground = (this.stack.env.color || "black");
      }
      this.Push(MML.mspace().With(def));
    },
    rule: function (name) {
      var v = this.GetBrackets(name),
          w = this.GetDimen(name),
          h = this.GetDimen(name);
      var mml = MML.mspace().With({
        width: w, height:h,
        mathbackground: (this.stack.env.color || "black")
      });
      if (v) {
        mml = MML.mpadded(mml).With({voffset: v});
        if (v.match(/^\-/)) {
          mml.height = v;
          mml.depth = '+' + v.substr(1);
        } else {
          mml.height = '+' + v;
        }
      }
      this.Push(mml);
    },
    
    MakeBig: function (name,mclass,size) {
      size *= TEXDEF.p_height;
      size = String(size).replace(/(\.\d\d\d).+/,'$1')+"em";
      var delim = this.GetDelimiter(name,true);
      this.Push(MML.TeXAtom(MML.mo(delim).With({
        minsize: size, maxsize: size,
        fence: true, stretchy: true, symmetric: true
      })).With({texClass: mclass}));
    },
    
    BuildRel: function (name) {
      var top = this.ParseUpTo(name,"\\over");
      var bot = this.ParseArg(name);
      this.Push(MML.TeXAtom(MML.munderover(bot,null,top)).With({texClass: MML.TEXCLASS.REL}));
    },
    
    HBox: function (name,style) {
      this.Push.apply(this,this.InternalMath(this.GetArgument(name),style));
    },
    
    FBox: function (name) {
      this.Push(MML.menclose.apply(MML,this.InternalMath(this.GetArgument(name))).With({notation:"box"}));
    },
    
    Not: function (name) {
      this.Push(STACKITEM.not());
    },
    
    Dots: function (name) {
      this.Push(STACKITEM.dots().With({
        ldots: this.mmlToken(MML.mo(MML.entity("#x2026")).With({stretchy:false})),
        cdots: this.mmlToken(MML.mo(MML.entity("#x22EF")).With({stretchy:false}))
      }));
    },
    
    Require: function (name) {
      var file = this.GetArgument(name)
        .replace(/.*\//,"")            // remove any leading path
        .replace(/[^a-z0-9_.-]/ig,""); // remove illegal characters
      this.Extension(null,file);
    },
    
    Extension: function (name,file,array) {
      if (name && !typeof(name) === "string") {name = name.name}
      file = TEX.extensionDir+"/"+file;
      if (!file.match(/\.js$/)) {file += ".js"}
      if (!AJAX.loaded[AJAX.fileURL(file)]) {
        if (name != null) {delete TEXDEF[array || 'macros'][name.replace(/^\\/,"")]}
        HUB.RestartAfter(AJAX.Require(file));
      }
    },
    
    Macro: function (name,macro,argcount,def) {
      if (argcount) {
        var args = [];
        if (def != null) {
          var optional = this.GetBrackets(name);
          args.push(optional == null ? def : optional);
        }
        for (var i = args.length; i < argcount; i++) {args.push(this.GetArgument(name))}
        macro = this.SubstituteArgs(args,macro);
      }
      this.string = this.AddArgs(macro,this.string.slice(this.i));
      this.i = 0;
      if (++this.macroCount > TEX.config.MAXMACROS) {
        TEX.Error(["MaxMacroSub1",
                   "MathJax maximum macro substitution count exceeded; " +
                   "is there a recursive macro call?"]);
      }
    },
    
    Matrix: function (name,open,close,align,spacing,vspacing,style,cases,numbered) {
      var c = this.GetNext();
      if (c === "")
        {TEX.Error(["MissingArgFor","Missing argument for %1",name])}
      if (c === "{") {this.i++} else {this.string = c+"}"+this.string.slice(this.i+1); this.i = 0}
      var array = STACKITEM.array().With({
        requireClose: true,
        arraydef: {
          rowspacing: (vspacing||"4pt"),
          columnspacing: (spacing||"1em")
        }
      });
      if (cases)         {array.isCases = true}
      if (numbered)      {array.isNumbered = true; array.arraydef.side = numbered}
      if (open || close) {array.open = open; array.close = close}
      if (style === "D") {array.arraydef.displaystyle = true}
      if (align != null) {array.arraydef.columnalign = align}
      this.Push(array);
    },
    
    Entry: function (name) {
      this.Push(STACKITEM.cell().With({isEntry: true, name: name}));
      if (this.stack.Top().isCases) {
        //
        //  Make second column be in \text{...} (unless it is already
        //  in a \text{...}, for backward compatibility).
        //
        var string = this.string;
        var braces = 0, close = -1, i = this.i, m = string.length;
        //
        //  Look through the string character by character...
        //
        while (i < m) {
          var c = string.charAt(i);
          if (c === "{") {
            //
            //  Increase the nested brace count and go on
            //
            braces++;
            i++;
          } else if (c === "}") {
            //
            //  If there are too many close braces, just end (we will get an
            //    error message later when the rest of the string is parsed)
            //  Otherwise
            //    decrease the nested brace count,
            //    if it is now zero and we haven't already marked the end of the
            //      first brace group, record the position (use to check for \text{} later)
            //    go on to the next character.
            //
            if (braces === 0) {
              m = 0;
            } else {
              braces--;
              if (braces === 0 && close < 0) {
                close = i - this.i;
              }
              i++;
            }
          } else if (c === "&" && braces === 0) {
            //
            //  Extra alignment tabs are not allowed in cases
            //
            TEX.Error(["ExtraAlignTab","Extra alignment tab in \\cases text"]);
          } else if (c === "\\") {
            //
            //  If the macro is \cr or \\, end the search, otherwise skip the macro
            //  (multi-letter names don't matter, as we will skip the rest of the
            //   characters in the main loop)
            //
            if (string.substr(i).match(/^((\\cr)[^a-zA-Z]|\\\\)/)) {m = 0} else {i += 2}
          } else {
            //
            //  Go on to the next character
            //
            i++;
          }
        }
        //
        //  Check if the second column text is already in \text{},
        //  If not, process the second column as text and continue parsing from there,
        //    (otherwise process the second column as normal, since it is in \text{}
        //
        var text = string.substr(this.i,i-this.i);
        if (!text.match(/^\s*\\text[^a-zA-Z]/) || close !== text.replace(/\s+$/,'').length - 1) {
          this.Push.apply(this,this.InternalMath(text,0));
          this.i = i;
        }
      }
    },
    
    Cr: function (name) {
      this.Push(STACKITEM.cell().With({isCR: true, name: name}));
    },
    
    CrLaTeX: function (name) {
      var n;
      if (this.string.charAt(this.i) === "[") {
        n = this.GetBrackets(name,"").replace(/ /g,"").replace(/,/,".");
        if (n && !this.matchDimen(n)) {
          TEX.Error(["BracketMustBeDimension",
                     "Bracket argument to %1 must be a dimension",name]);
        }
      }
      this.Push(STACKITEM.cell().With({isCR: true, name: name, linebreak: true}));
      var top = this.stack.Top();
      if (top.isa(STACKITEM.array)) {
        if (n && top.arraydef.rowspacing) {
          var rows = top.arraydef.rowspacing.split(/ /);
          if (!top.rowspacing) {top.rowspacing = this.dimen2em(rows[0])}
          while (rows.length < top.table.length) {rows.push(this.Em(top.rowspacing))}
          rows[top.table.length-1] = this.Em(Math.max(0,top.rowspacing+this.dimen2em(n)));
          top.arraydef.rowspacing = rows.join(' ');
        }
      } else {
        if (n) {this.Push(MML.mspace().With({depth:n}))}
        this.Push(MML.mspace().With({linebreak:MML.LINEBREAK.NEWLINE}));
      }
    },
    emPerInch: 7.2,
    pxPerInch: 72,
    matchDimen: function (dim) {
      return dim.match(/^(-?(?:\.\d+|\d+(?:\.\d*)?))(px|pt|em|ex|mu|pc|in|mm|cm)$/);
    },
    dimen2em: function (dim) {
      var match = this.matchDimen(dim);
      var m = parseFloat(match[1]||"1"), unit = match[2];
      if (unit === "em") {return m}
      if (unit === "ex") {return m * .43}
      if (unit === "pt") {return m / 10}                    // 10 pt to an em
      if (unit === "pc") {return m * 1.2}                   // 12 pt to a pc
      if (unit === "px") {return m * this.emPerInch / this.pxPerInch}
      if (unit === "in") {return m * this.emPerInch}
      if (unit === "cm") {return m * this.emPerInch / 2.54} // 2.54 cm to an inch
      if (unit === "mm") {return m * this.emPerInch / 25.4} // 10 mm to a cm
      if (unit === "mu") {return m / 18}
      return 0;
    },
    Em: function (m) {
      if (Math.abs(m) < .0006) {return "0em"}
      return m.toFixed(3).replace(/\.?0+$/,"") + "em";
    },
    
    HLine: function (name,style) {
      if (style == null) {style = "solid"}
      var top = this.stack.Top();
      if (!top.isa(STACKITEM.array) || top.data.length)
        {TEX.Error(["Misplaced","Misplaced %1",name])}
      if (top.table.length == 0) {
        top.frame.push("top");
      } else {
        var lines = (top.arraydef.rowlines ? top.arraydef.rowlines.split(/ /) : []);
        while (lines.length < top.table.length) {lines.push("none")}
        lines[top.table.length-1] = style;
        top.arraydef.rowlines = lines.join(' ');
      }
    },
    
    HFill: function (name) {
      var top = this.stack.Top();
      if (top.isa(STACKITEM.array)) top.hfill.push(top.data.length);
        else TEX.Error(["UnsupportedHFill","Unsupported use of %1",name]);
    },
    

    
   /************************************************************************/
   /*
    *   LaTeX environments
    */

    BeginEnd: function (name) {
      var env = this.GetArgument(name), isEnd = false;
      if (env.match(/^\\end\\/)) {isEnd = true; env = env.substr(5)} // special \end{} for \newenvironment environments
      if (env.match(/\\/i)) {TEX.Error(["InvalidEnv","Invalid environment name '%1'",env])}
      var cmd = this.envFindName(env);
      if (!cmd) {TEX.Error(["UnknownEnv","Unknown environment '%1'",env])}
      if (!isArray(cmd)) {cmd = [cmd]}
      var end = (isArray(cmd[1]) ? cmd[1][0] : cmd[1]);
      var mml = STACKITEM.begin().With({name: env, end: end, parse:this});
      if (name === "\\end") {
        if (!isEnd && isArray(cmd[1]) && this[cmd[1][1]]) {
          mml = this[cmd[1][1]].apply(this,[mml].concat(cmd.slice(2)));
        } else {
          mml = STACKITEM.end().With({name: env});
        }
      } else {
        if (++this.macroCount > TEX.config.MAXMACROS) {
          TEX.Error(["MaxMacroSub2",
                     "MathJax maximum substitution count exceeded; " +
                     "is there a recursive latex environment?"]);
        }
        if (cmd[0] && this[cmd[0]]) {mml = this[cmd[0]].apply(this,[mml].concat(cmd.slice(2)))}
      }
      this.Push(mml);
    },
    envFindName: function (name) {return TEXDEF.environment[name]},
    
    Equation: function (begin,row) {return row},
    
    ExtensionEnv: function (begin,file) {this.Extension(begin.name,file,"environment")},
    
    Array: function (begin,open,close,align,spacing,vspacing,style,raggedHeight) {
      if (!align) {align = this.GetArgument("\\begin{"+begin.name+"}")}
      var lines = ("c"+align).replace(/[^clr|:]/g,'').replace(/[^|:]([|:])+/g,'$1');
      align = align.replace(/[^clr]/g,'').split('').join(' ');
      align = align.replace(/l/g,'left').replace(/r/g,'right').replace(/c/g,'center');
      var array = STACKITEM.array().With({
        arraydef: {
          columnalign: align,
          columnspacing: (spacing||"1em"),
          rowspacing: (vspacing||"4pt")
        }
      });
      if (lines.match(/[|:]/)) {
        if (lines.charAt(0).match(/[|:]/)) {array.frame.push("left"); array.frame.dashed = lines.charAt(0) === ":"}
        if (lines.charAt(lines.length-1).match(/[|:]/)) {array.frame.push("right")}
        lines = lines.substr(1,lines.length-2);
        array.arraydef.columnlines =
          lines.split('').join(' ').replace(/[^|: ]/g,'none').replace(/\|/g,'solid').replace(/:/g,'dashed');
      }
      if (open)  {array.open  = this.convertDelimiter(open)}
      if (close) {array.close = this.convertDelimiter(close)}
      if (style === "D") {array.arraydef.displaystyle = true}
         else if (style) {array.arraydef.displaystyle = false}
      if (style === "S") {array.arraydef.scriptlevel = 1} // FIXME: should use mstyle?
      if (raggedHeight)  {array.arraydef.useHeight = false}
      this.Push(begin);
      return array;
    },
    
    AlignedArray: function (begin) {
      var align = this.GetBrackets("\\begin{"+begin.name+"}");
      return this.setArrayAlign(this.Array.apply(this,arguments),align);
    },
    setArrayAlign: function (array,align) {
      align = this.trimSpaces(align||"");
      if (align === "t") {array.arraydef.align = "baseline 1"}
      else if (align === "b") {array.arraydef.align = "baseline -1"}
      else if (align === "c") {array.arraydef.align = "center"}
      else if (align) {array.arraydef.align = align} // FIXME: should be an error?
      return array;
    },
    
    /************************************************************************/
    /*
     *   String handling routines
     */

    /*
     *  Convert delimiter to character
     */
    convertDelimiter: function (c) {
      if (c) {c = TEXDEF.delimiter[c]}
      if (c == null) {return null}
      if (isArray(c)) {c = c[0]}
      if (c.length === 4) {c = String.fromCharCode(parseInt(c,16))}
      return c;
    },

    /*
     *  Trim spaces from a string
     */
    trimSpaces: function (text) {
      if (typeof(text) != 'string') {return text}
      var TEXT = text.replace(/^\s+|\s+$/g,'');
      if (TEXT.match(/\\$/) && text.match(/ $/)) TEXT += " ";
      return TEXT;
    },

    /*
     *   Check if the next character is a space
     */
    nextIsSpace: function () {
      return this.string.charAt(this.i).match(/\s/);
    },
    
    /*
     *  Get the next non-space character
     */
    GetNext: function () {
      while (this.nextIsSpace()) {this.i++}
      return this.string.charAt(this.i);
    },
  
    /*
     *  Get and return a control-sequence name
     */
    GetCS: function () {
      var CS = this.string.slice(this.i).match(/^([a-z]+|.) ?/i);
      if (CS) {this.i += CS[1].length; return CS[1]} else {this.i++; return " "}
    },

    /*
     *  Get and return a TeX argument (either a single character or control sequence,
     *  or the contents of the next set of braces).
     */
    GetArgument: function (name,noneOK) {
      switch (this.GetNext()) {
       case "":
        if (!noneOK) {TEX.Error(["MissingArgFor","Missing argument for %1",name])}
        return null;
       case '}':
        if (!noneOK) {
          TEX.Error(["ExtraCloseMissingOpen",
                     "Extra close brace or missing open brace"]);
        }
        return null;
       case '\\':
        this.i++; return "\\"+this.GetCS();
       case '{':
        var j = ++this.i, parens = 1;
        while (this.i < this.string.length) {
          switch (this.string.charAt(this.i++)) {
           case '\\':  this.i++; break;
           case '{':   parens++; break;
           case '}':
            if (--parens == 0) {return this.string.slice(j,this.i-1)}
            break;
          }
        }
        TEX.Error(["MissingCloseBrace","Missing close brace"]);
        break;
      }        
      return this.string.charAt(this.i++);
    },
    
    /*
     *  Get an optional LaTeX argument in brackets
     */
    GetBrackets: function (name,def) {
      if (this.GetNext() != '[') {return def};
      var j = ++this.i, parens = 0;
      while (this.i < this.string.length) {
        switch (this.string.charAt(this.i++)) {
         case '{':   parens++; break;
         case '\\':  this.i++; break;
         case '}':
          if (parens-- <= 0) {
            TEX.Error(["ExtraCloseLooking",
                       "Extra close brace while looking for %1","']'"]);
          }
          break;   
         case ']':
          if (parens == 0) {return this.string.slice(j,this.i-1)}
          break;
        }
      }
      TEX.Error(["MissingCloseBracket",
                 "Couldn't find closing ']' for argument to %1",name]);
    },
  
    /*
     *  Get the name of a delimiter (check it in the delimiter list).
     */
    GetDelimiter: function (name,braceOK) {
      while (this.nextIsSpace()) {this.i++}
      var c = this.string.charAt(this.i); this.i++;
      if (this.i <= this.string.length) {
        if (c == "\\") {c += this.GetCS(name)}
        else if (c === "{" && braceOK) {this.i--; c = this.GetArgument(name)}
        if (TEXDEF.delimiter[c] != null) {return this.convertDelimiter(c)}
      }
      TEX.Error(["MissingOrUnrecognizedDelim",
                 "Missing or unrecognized delimiter for %1",name]);
    },

    /*
     *  Get a dimension (including its units).
     */
    GetDimen: function (name) {
      var dimen;
      if (this.nextIsSpace()) {this.i++}
      if (this.string.charAt(this.i) == '{') {
        dimen = this.GetArgument(name);
        if (dimen.match(/^\s*([-+]?([.,]\d+|\d+([.,]\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)\s*$/))
          {return dimen.replace(/ /g,"").replace(/,/,".")}
      } else {
        dimen = this.string.slice(this.i);
        var match = dimen.match(/^\s*(([-+]?([.,]\d+|\d+([.,]\d*)?))\s*(pt|em|ex|mu|px|mm|cm|in|pc)) ?/);
        if (match) {
          this.i += match[0].length;
          return match[1].replace(/ /g,"").replace(/,/,".");
        }
      }
      TEX.Error(["MissingDimOrUnits",
                 "Missing dimension or its units for %1",name]);
    },
    
    /*
     *  Get everything up to the given control sequence (token)
     */
    GetUpTo: function (name,token) {
      while (this.nextIsSpace()) {this.i++}
      var j = this.i, k, c, parens = 0;
      while (this.i < this.string.length) {
        k = this.i; c = this.string.charAt(this.i++);
        switch (c) {
         case '\\':  c += this.GetCS(); break;
         case '{':   parens++; break;
         case '}':
          if (parens == 0) {
            TEX.Error(["ExtraCloseLooking",
                       "Extra close brace while looking for %1",token])
          }
          parens--;
          break;
        }
        if (parens == 0 && c == token) {return this.string.slice(j,k)}
      }
      TEX.Error(["TokenNotFoundForCommand",
                 "Couldn't find %1 for %2",token,name]);
    },

    /*
     *  Parse various substrings
     */
    ParseArg: function (name) {return TEX.Parse(this.GetArgument(name),this.stack.env).mml()},
    ParseUpTo: function (name,token) {return TEX.Parse(this.GetUpTo(name,token),this.stack.env).mml()},
    
    /*
     *  Break up a string into text and math blocks
     */
    InternalMath: function (text,level) {
      var def = (this.stack.env.font ? {mathvariant: this.stack.env.font} : {});
      var mml = [], i = 0, k = 0, c, match = '', braces = 0;
      if (text.match(/\\?[${}\\]|\\\(|\\(eq)?ref\s*\{/)) {
        while (i < text.length) {
          c = text.charAt(i++);
          if (c === '$') {
            if (match === '$' && braces === 0) {
              mml.push(MML.TeXAtom(TEX.Parse(text.slice(k,i-1),{}).mml()));
              match = ''; k = i;
            } else if (match === '') {
              if (k < i-1) mml.push(this.InternalText(text.slice(k,i-1),def));
              match = '$'; k = i;
            }
          } else if (c === '{' && match !== '') {
            braces++;
          } else if (c === '}') {
            if (match === '}' && braces === 0) {
              mml.push(MML.TeXAtom(TEX.Parse(text.slice(k,i),{}).mml().With(def)));
              match = ''; k = i;
            } else if (match !== '') {
              if (braces) braces--;
            }
          } else if (c === '\\') {
            if (match === '' && text.substr(i).match(/^(eq)?ref\s*\{/)) {
              var len = RegExp["$&"].length;
              if (k < i-1) mml.push(this.InternalText(text.slice(k,i-1),def));
              match = '}'; k = i-1; i += len;
            } else {
              c = text.charAt(i++);
              if (c === '(' && match === '') {
                if (k < i-2) mml.push(this.InternalText(text.slice(k,i-2),def));
                match = ')'; k = i;
              } else if (c === ')' && match === ')' && braces === 0) {
                mml.push(MML.TeXAtom(TEX.Parse(text.slice(k,i-2),{}).mml()));
                match = ''; k = i;
              } else if (c.match(/[${}\\]/) && match === '')  {
                i--; text = text.substr(0,i-1) + text.substr(i); // remove \ from \$, \{, \}, or \\
              }
            }
          }
        }
        if (match !== '') TEX.Error(["MathNotTerminated","Math not terminated in text box"]);
      }
      if (k < text.length) mml.push(this.InternalText(text.slice(k),def));
      if (level != null) {
        mml = [MML.mstyle.apply(MML,mml).With({displaystyle:false,scriptlevel:level})];
      } else if (mml.length > 1) {
        mml = [MML.mrow.apply(MML,mml)];
      }
      return mml;
    },
    InternalText: function (text,def) {
      text = text.replace(/^\s+/,NBSP).replace(/\s+$/,NBSP);
      return MML.mtext(MML.chars(text)).With(def);
    },

    /*
     *  Replace macro paramters with their values
     */
    SubstituteArgs: function (args,string) {
      var text = ''; var newstring = ''; var c; var i = 0;
      while (i < string.length) {
        c = string.charAt(i++);
        if (c === "\\") {text += c + string.charAt(i++)}
        else if (c === '#') {
          c = string.charAt(i++);
          if (c === '#') {text += c} else {
            if (!c.match(/[1-9]/) || c > args.length) {
              TEX.Error(["IllegalMacroParam",
                         "Illegal macro parameter reference"]);
            }
            newstring = this.AddArgs(this.AddArgs(newstring,text),args[c-1]);
            text = '';
          }
        } else {text += c}
      }
      return this.AddArgs(newstring,text);
    },
    
    /*
     *  Make sure that macros are followed by a space if their names
     *  could accidentally be continued into the following text.
     */
    AddArgs: function (s1,s2) {
      if (s2.match(/^[a-z]/i) && s1.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i)) {s1 += ' '}
      if (s1.length + s2.length > TEX.config.MAXBUFFER) {
        TEX.Error(["MaxBufferSize",
                   "MathJax internal buffer size exceeded; is there a recursive macro call?"]);
      }
      return s1+s2;
    }
    
  });
  
  /************************************************************************/

  TEX.Augment({
    Stack: STACK, Parse: PARSE, Definitions: TEXDEF, Startup: STARTUP,
    
    config: {
      MAXMACROS: 10000,    // maximum number of macro substitutions per equation
      MAXBUFFER: 5*1024    // maximum size of TeX string to process
    },
    
    sourceMenuTitle: /*_(MathMenu)*/ ["TeXCommands","TeX Commands"],
    annotationEncoding: "application/x-tex",

    prefilterHooks: MathJax.Callback.Hooks(true),    // hooks to run before processing TeX
    postfilterHooks: MathJax.Callback.Hooks(true),   // hooks to run after processing TeX
    
    //
    //  Check if AMSmath extension must be loaded and push
    //    it on the extensions array, if needed
    //
    Config: function () {
      this.SUPER(arguments).Config.apply(this,arguments);
      if (this.config.equationNumbers.autoNumber !== "none") {
        if (!this.config.extensions) {this.config.extensions = []}
        this.config.extensions.push("AMSmath.js");
      }
    },

    //
    //  Convert TeX to ElementJax
    //
    Translate: function (script) {
      var mml, isError = false, math = MathJax.HTML.getScript(script);
      var display = (script.type.replace(/\n/g," ").match(/(;|\s|\n)mode\s*=\s*display(;|\s|\n|$)/) != null);
      var data = {math:math, display:display, script:script};
      var callback = this.prefilterHooks.Execute(data); 
      if (callback) return callback;
      math = data.math;
      try {
        mml = TEX.Parse(math).mml();
      } catch(err) {
        if (!err.texError) {throw err;}
        mml = this.formatError(err,math,display,script);
        isError = true;
      }
      if (mml.isa(MML.mtable) && mml.displaystyle === "inherit") mml.displaystyle = display; // for tagged equations
      if (mml.inferred) {mml = MML.apply(MathJax.ElementJax,mml.data)} else {mml = MML(mml)}
      if (display) {mml.root.display = "block"}
      if (isError) {mml.texError = true}
      data.math = mml; 
      return this.postfilterHooks.Execute(data) || data.math;
    },
    prefilterMath: function (math,displaystyle,script) {
      return math;
    },
    postfilterMath: function (math,displaystyle,script) {
      this.combineRelations(math.root);
      return math;
    },
    formatError: function (err,math,display,script) {
      var message = err.message.replace(/\n.*/,"");
      HUB.signal.Post(["TeX Jax - parse error",message,math,display,script]);
      return MML.Error(message);
    },

    //
    //  Produce an error and stop processing this equation
    //
    Error: function (message) {
      //
      //  Translate message if it is ["id","message",args]
      //
      if (isArray(message)) {message = _.apply(_,message)}
      throw HUB.Insert(Error(message),{texError: true});
    },
    
    //
    //  Add a user-defined macro to the macro list
    //
    Macro: function (name,def,argn) {
      TEXDEF.macros[name] = ['Macro'].concat([].slice.call(arguments,1));
      TEXDEF.macros[name].isUser = true;
    },
    
    /*
     *  Create an mrow that has stretchy delimiters at either end, as needed
     */
    fenced: function (open,mml,close) {
      var mrow = MML.mrow().With({open:open, close:close, texClass:MML.TEXCLASS.INNER});
      mrow.Append(
        MML.mo(open).With({fence:true, stretchy:true, symmetric:true, texClass:MML.TEXCLASS.OPEN})
      );
      if (mml.type === "mrow" && mml.inferred) {
        mrow.Append.apply(mrow, mml.data);
      } else {
        mrow.Append(mml);
      }
      mrow.Append(
        MML.mo(close).With({fence:true, stretchy:true, symmetric:true, texClass:MML.TEXCLASS.CLOSE})
      );
      return mrow;
    },
    /*
     *  Create an mrow that has \mathchoice using \bigg and \big for the delimiters
     */
    fixedFence: function (open,mml,close) {
      var mrow = MML.mrow().With({open:open, close:close, texClass:MML.TEXCLASS.ORD});
      if (open) {mrow.Append(this.mathPalette(open,"l"))}
      if (mml.type === "mrow") {mrow.Append.apply(mrow,mml.data)} else {mrow.Append(mml)}
      if (close) {mrow.Append(this.mathPalette(close,"r"))}
      return mrow;
    },
    mathPalette: function (fence,side) {
      if (fence === '{' || fence === '}') {fence = "\\"+fence}
      var D = '{\\bigg'+side+' '+fence+'}', T = '{\\big'+side+' '+fence+'}';
      return TEX.Parse('\\mathchoice'+D+T+T+T,{}).mml();
    },
    
    //
    //  Combine adjacent <mo> elements that are relations
    //    (since MathML treats the spacing very differently)
    //
    combineRelations: function (mml) {
      var i, m, m1, m2;
      for (i = 0, m = mml.data.length; i < m; i++) {
        if (mml.data[i]) {
          if (mml.isa(MML.mrow)) {
            while (i+1 < m && (m1 = mml.data[i]) && (m2 = mml.data[i+1]) &&
                   m1.isa(MML.mo) && m2.isa(MML.mo) &&
                   m1.Get("texClass") === MML.TEXCLASS.REL &&
                   m2.Get("texClass") === MML.TEXCLASS.REL) {
              if (m1.variantForm == m2.variantForm &&
                  m1.Get("mathvariant") == m2.Get("mathvariant") && m1.style == m2.style &&
                  m1["class"] == m2["class"] && !m1.id && !m2.id) {
                m1.Append.apply(m1,m2.data);
                mml.data.splice(i+1,1); m--;
              } else {
                m1.rspace = m2.lspace = "0pt"; i++;
              }
            }
          }
          if (!mml.data[i].isToken) {this.combineRelations(mml.data[i])}
        }
      }
    }
  });

  //
  //  Add the default filters
  //
  TEX.prefilterHooks.Add(function (data) {
    data.math = TEX.prefilterMath(data.math,data.display,data.script);
  });
  TEX.postfilterHooks.Add(function (data) {
    data.math = TEX.postfilterMath(data.math,data.display,data.script);
  });

  TEX.loadComplete("jax.js");
  
})(MathJax.InputJax.TeX,MathJax.Hub,MathJax.Ajax);

/*************************************************************
 *
 *  MathJax/extensions/TeX/AMSmath.js
 *
 *  Implements AMS math environments and macros.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2017 The MathJax Consortium
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

MathJax.Extension["TeX/AMSmath"] = {
  version: "2.7.2",
  
  number: 0,        // current equation number
  startNumber: 0,   // current starting equation number (for when equation is restarted)
  IDs: {},          // IDs used in previous equations
  eqIDs: {},        // IDs used in this equation
  labels: {},       // the set of labels
  eqlabels: {},     // labels in the current equation
  refs: []          // array of jax with unresolved references
};

MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  
  var MML = MathJax.ElementJax.mml,
      TEX = MathJax.InputJax.TeX,
      AMS = MathJax.Extension["TeX/AMSmath"];

  var TEXDEF = TEX.Definitions,
      STACKITEM = TEX.Stack.Item,
      CONFIG = TEX.config.equationNumbers;
      
  var COLS = function (W) {
    var WW = [];
    for (var i = 0, m = W.length; i < m; i++) 
      {WW[i] = TEX.Parse.prototype.Em(W[i])}
    return WW.join(" ");
  };
  
  //
  //  Get the URL of the page (for use with formatURL) when there
  //  is a <base> element on the page.
  //  
  var baseURL = (document.getElementsByTagName("base").length === 0) ? "" :
                String(document.location).replace(/#.*$/,"");

  
  /******************************************************************************/
  
  TEXDEF.Add({
    mathchar0mo: {
      iiiint:     ['2A0C',{texClass: MML.TEXCLASS.OP}]
    },
    
    macros: {
      mathring:   ['Accent','2DA'],  // or 0x30A
      
      nobreakspace: 'Tilde',
      negmedspace:    ['Spacer',MML.LENGTH.NEGATIVEMEDIUMMATHSPACE],
      negthickspace:  ['Spacer',MML.LENGTH.NEGATIVETHICKMATHSPACE],
      
//    intI:       ['Macro','\\mathchoice{\\!}{}{}{}\\!\\!\\int'],
//    iint:       ['MultiIntegral','\\int\\intI'],          // now in core TeX input jax
//    iiint:      ['MultiIntegral','\\int\\intI\\intI'],    // now in core TeX input jax
//    iiiint:     ['MultiIntegral','\\int\\intI\\intI\\intI'], // now in mathchar0mo above
      idotsint:   ['MultiIntegral','\\int\\cdots\\int'],
      
//    dddot:      ['Macro','\\mathop{#1}\\limits^{\\textstyle \\mathord{.}\\mathord{.}\\mathord{.}}',1],
//    ddddot:     ['Macro','\\mathop{#1}\\limits^{\\textstyle \\mathord{.}\\mathord{.}\\mathord{.}\\mathord{.}}',1],
      dddot:      ['Accent','20DB'],
      ddddot:     ['Accent','20DC'],
      
      sideset:    ['Macro','\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1\\!\\mathop{#3}\\nolimits#2}',3],
      
      boxed:      ['Macro','\\fbox{$\\displaystyle{#1}$}',1],
      
      tag:         'HandleTag',
      notag:       'HandleNoTag',
      label:       'HandleLabel',
      ref:         'HandleRef',
      eqref:       ['HandleRef',true],
      
      substack:   ['Macro','\\begin{subarray}{c}#1\\end{subarray}',1],
      
      injlim:     ['NamedOp','inj&thinsp;lim'],
      projlim:    ['NamedOp','proj&thinsp;lim'],
      varliminf:  ['Macro','\\mathop{\\underline{\\mmlToken{mi}{lim}}}'],
      varlimsup:  ['Macro','\\mathop{\\overline{\\mmlToken{mi}{lim}}}'],
      varinjlim:  ['Macro','\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}}}'],
      varprojlim: ['Macro','\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}}}'],
      
      DeclareMathOperator: 'HandleDeclareOp',
      operatorname:        'HandleOperatorName',
      SkipLimits:          'SkipLimits',
      
      genfrac:     'Genfrac',
      frac:       ['Genfrac',"","","",""],
      tfrac:      ['Genfrac',"","","",1],
      dfrac:      ['Genfrac',"","","",0],
      binom:      ['Genfrac',"(",")","0",""],
      tbinom:     ['Genfrac',"(",")","0",1],
      dbinom:     ['Genfrac',"(",")","0",0],
      
      cfrac:       'CFrac',
      
      shoveleft:  ['HandleShove',MML.ALIGN.LEFT],
      shoveright: ['HandleShove',MML.ALIGN.RIGHT],
      
      xrightarrow: ['xArrow',0x2192,5,6],
      xleftarrow:  ['xArrow',0x2190,7,3]
    },
    
    environment: {
      align:         ['AMSarray',null,true,true,  'rlrlrlrlrlrl',COLS([0,2,0,2,0,2,0,2,0,2,0])],
      'align*':      ['AMSarray',null,false,true, 'rlrlrlrlrlrl',COLS([0,2,0,2,0,2,0,2,0,2,0])],
      multline:      ['Multline',null,true],
      'multline*':   ['Multline',null,false],
      split:         ['AMSarray',null,false,false,'rl',COLS([0])],
      gather:        ['AMSarray',null,true,true,  'c'],
      'gather*':     ['AMSarray',null,false,true, 'c'],
      
      alignat:       ['AlignAt',null,true,true],
      'alignat*':    ['AlignAt',null,false,true],
      alignedat:     ['AlignAt',null,false,false],

      aligned:       ['AlignedAMSArray',null,null,null,'rlrlrlrlrlrl',COLS([0,2,0,2,0,2,0,2,0,2,0]),".5em",'D'],
      gathered:      ['AlignedAMSArray',null,null,null,'c',null,".5em",'D'],

      subarray:      ['Array',null,null,null,null,COLS([0]),"0.1em",'S',1],
      smallmatrix:   ['Array',null,null,null,'c',COLS([1/3]),".2em",'S',1],
      
      equation:      ['EquationBegin','Equation',true],
      'equation*':   ['EquationBegin','EquationStar',false],

      eqnarray:      ['AMSarray',null,true,true, 'rcl',"0 "+MML.LENGTH.THICKMATHSPACE,".5em"],
      'eqnarray*':   ['AMSarray',null,false,true,'rcl',"0 "+MML.LENGTH.THICKMATHSPACE,".5em"]
    },
    
    delimiter: {
      '\\lvert':     ['007C',{texClass:MML.TEXCLASS.OPEN}],
      '\\rvert':     ['007C',{texClass:MML.TEXCLASS.CLOSE}],
      '\\lVert':     ['2016',{texClass:MML.TEXCLASS.OPEN}],
      '\\rVert':     ['2016',{texClass:MML.TEXCLASS.CLOSE}]
    }
  },null,true);
    

  /******************************************************************************/
  
  TEX.Parse.Augment({

    /*
     *  Add the tag to the environment (to be added to the table row later)
     */
    HandleTag: function (name) {
      var star = this.GetStar();
      var arg = this.trimSpaces(this.GetArgument(name));
      var tag = arg;
      if (!star) {
        arg = CONFIG.formatTag(arg);
      }
      var global = this.stack.global; 
      global.tagID = tag;
      if (global.notags) {
        TEX.Error(["CommandNotAllowedInEnv",
                   "%1 not allowed in %2 environment",
                   name,global.notags]
        );
      }
      if (global.tag) {TEX.Error(["MultipleCommand","Multiple %1",name])}
      global.tag = MML.mtd.apply(MML,this.InternalMath(arg)).With({id:CONFIG.formatID(tag)});
    },
    HandleNoTag: function (name) {
      if (this.stack.global.tag) {delete this.stack.global.tag}
      this.stack.global.notag = true;  // prevent auto-tagging
    },
    
    /*
     *  Record a label name for a tag
     */
    HandleLabel: function (name) {
      var global = this.stack.global, label = this.GetArgument(name);
      if (label === "") return;
      if (!AMS.refUpdate) {
        if (global.label) {TEX.Error(["MultipleCommand","Multiple %1",name])}
        global.label = label;
        if (AMS.labels[label] || AMS.eqlabels[label])
          {TEX.Error(["MultipleLabel","Label '%1' multiply defined",label])}
        AMS.eqlabels[label] = {tag:"???", id:""}; // will be replaced by tag value later
      }
    },
    
    /*
     *  Handle a label reference
     */
    HandleRef: function (name,eqref) {
      var label = this.GetArgument(name);
      var ref = AMS.labels[label] || AMS.eqlabels[label];
      if (!ref) {ref = {tag:"???",id:""}; AMS.badref = !AMS.refUpdate}
      var tag = ref.tag; if (eqref) {tag = CONFIG.formatTag(tag)}
      this.Push(MML.mrow.apply(MML,this.InternalMath(tag)).With({
        href:CONFIG.formatURL(ref.id,baseURL), 
        attr: CONFIG.outputLabels ? {"data-target": label} : {},
        attrNames: CONFIG.outputLabels ? ["data-target"] : [],
        "class":"MathJax_ref"
      }));
    },
    
    /*
     *  Handle \DeclareMathOperator
     */
    HandleDeclareOp: function (name) {
      var limits = (this.GetStar() ? "" : "\\nolimits\\SkipLimits");
      var cs = this.trimSpaces(this.GetArgument(name));
      if (cs.charAt(0) == "\\") {cs = cs.substr(1)}
      var op = this.GetArgument(name);
      op = op.replace(/\*/g,'\\text{*}').replace(/-/g,'\\text{-}');
      TEX.Definitions.macros[cs] = ['Macro','\\mathop{\\rm '+op+'}'+limits];
    },
    
    HandleOperatorName: function (name) {
      var limits = (this.GetStar() ? "" : "\\nolimits\\SkipLimits");
      var op = this.trimSpaces(this.GetArgument(name));
      op = op.replace(/\*/g,'\\text{*}').replace(/-/g,'\\text{-}');
      this.string = '\\mathop{\\rm '+op+'}'+limits+" "+this.string.slice(this.i);
      this.i = 0;
    },
    
    SkipLimits: function (name) {
      var c = this.GetNext(), i = this.i;
      if (c === "\\" && ++this.i && this.GetCS() !== "limits") this.i = i;
    },

    /*
     *  Record presence of \shoveleft and \shoveright
     */
    HandleShove: function (name,shove) {
      var top = this.stack.Top();
      if (top.type !== "multline") {
        TEX.Error(["CommandInMultline",
                   "%1 can only appear within the multline environment",name]);
      }
      if (top.data.length) {
        TEX.Error(["CommandAtTheBeginingOfLine",
                   "%1 must come at the beginning of the line",name]);
      }
      top.data.shove = shove;
    },
    
    /*
     *  Handle \cfrac
     */
    CFrac: function (name) {
      var lr  = this.trimSpaces(this.GetBrackets(name,"")),
          num = this.GetArgument(name),
          den = this.GetArgument(name);
      var frac = MML.mfrac(TEX.Parse('\\strut\\textstyle{'+num+'}',this.stack.env).mml(),
                           TEX.Parse('\\strut\\textstyle{'+den+'}',this.stack.env).mml());
      lr = ({l:MML.ALIGN.LEFT, r:MML.ALIGN.RIGHT,"":""})[lr];
      if (lr == null)
        {TEX.Error(["IllegalAlign","Illegal alignment specified in %1",name])}
      if (lr) {frac.numalign = frac.denomalign = lr}
      this.Push(frac);
    },
    
    /*
     *  Implement AMS generalized fraction
     */
    Genfrac: function (name,left,right,thick,style) {
      if (left  == null) {left  = this.GetDelimiterArg(name)}
      if (right == null) {right = this.GetDelimiterArg(name)}
      if (thick == null) {thick = this.GetArgument(name)}
      if (style == null) {style = this.trimSpaces(this.GetArgument(name))}
      var num = this.ParseArg(name);
      var den = this.ParseArg(name);
      var frac = MML.mfrac(num,den);
      if (thick !== "") {frac.linethickness = thick}
      if (left || right) {frac = TEX.fixedFence(left,frac.With({texWithDelims:true}),right)}
      if (style !== "") {
        var STYLE = (["D","T","S","SS"])[style];
        if (STYLE == null)
          {TEX.Error(["BadMathStyleFor","Bad math style for %1",name])}
        frac = MML.mstyle(frac);
        if (STYLE === "D") {frac.displaystyle = true; frac.scriptlevel = 0}
          else {frac.displaystyle = false; frac.scriptlevel = style - 1}
      }
      this.Push(frac);
    },

    /*
     *  Implements multline environment (mostly handled through STACKITEM below)
     */
    Multline: function (begin,numbered) {
      this.Push(begin); this.checkEqnEnv();
      return STACKITEM.multline(numbered,this.stack).With({
        arraydef: {
          displaystyle: true,
          rowspacing: ".5em",
          width: TEX.config.MultLineWidth, columnwidth:"100%",
          side: TEX.config.TagSide,
          minlabelspacing: TEX.config.TagIndent
        }
      });
    },

    /*
     *  Handle AMS aligned environments
     */
    AMSarray: function (begin,numbered,taggable,align,spacing) {
      this.Push(begin); if (taggable) {this.checkEqnEnv()}
      align = align.replace(/[^clr]/g,'').split('').join(' ');
      align = align.replace(/l/g,'left').replace(/r/g,'right').replace(/c/g,'center');
      return STACKITEM.AMSarray(begin.name,numbered,taggable,this.stack).With({
        arraydef: {
          displaystyle: true,
          rowspacing: ".5em",
          columnalign: align,
          columnspacing: (spacing||"1em"),
          rowspacing: "3pt",
          side: TEX.config.TagSide,
          minlabelspacing: TEX.config.TagIndent
        }
      });
    },
    
    AlignedAMSArray: function (begin) {
      var align = this.GetBrackets("\\begin{"+begin.name+"}");
      return this.setArrayAlign(this.AMSarray.apply(this,arguments),align);
    },

    /*
     *  Handle alignat environments
     */
    AlignAt: function (begin,numbered,taggable) {
      var n, valign, align = "", spacing = [];
      if (!taggable) {valign = this.GetBrackets("\\begin{"+begin.name+"}")}
      n = this.GetArgument("\\begin{"+begin.name+"}");
      if (n.match(/[^0-9]/)) {
        TEX.Error(["PositiveIntegerArg","Argument to %1 must me a positive integer",
                  "\\begin{"+begin.name+"}"]);
      }
      while (n > 0) {align += "rl"; spacing.push("0em 0em"); n--}
      spacing = spacing.join(" ");
      if (taggable) {return this.AMSarray(begin,numbered,taggable,align,spacing)}
      var array = this.AMSarray(begin,numbered,taggable,align,spacing);
      return this.setArrayAlign(array,valign);
    },
    
    /*
     *  Handle equation environment
     */
    EquationBegin: function (begin,force) {
      this.checkEqnEnv();
      this.stack.global.forcetag = (force && CONFIG.autoNumber !== "none");
      return begin;
    },
    EquationStar: function (begin,row) {
      this.stack.global.tagged = true; // prevent automatic tagging
      return row;
    },
    
    /*
     *  Check for bad nesting of equation environments
     */
    checkEqnEnv: function () {
      if (this.stack.global.eqnenv)
        {TEX.Error(["ErroneousNestingEq","Erroneous nesting of equation structures"])}
      this.stack.global.eqnenv = true;
    },
    
    /*
     *  Handle multiple integrals (make a mathop if followed by limits)
     */
    MultiIntegral: function (name,integral) {
      var next = this.GetNext();
      if (next === "\\") {
        var i = this.i; next = this.GetArgument(name); this.i = i;
        if (next === "\\limits") {
          if (name === "\\idotsint") {integral = "\\!\\!\\mathop{\\,\\,"+integral+"}"}
                           else {integral = "\\!\\!\\!\\mathop{\\,\\,\\,"+integral+"}"}
        }
      }
      this.string = integral + " " + this.string.slice(this.i);
      this.i = 0;
    },
    
    /*
     *  Handle stretchable arrows
     */
    xArrow: function (name,chr,l,r) {
      var def = {width: "+"+(l+r)+"mu", lspace: l+"mu"};
      var bot = this.GetBrackets(name),
          top = this.ParseArg(name);
      var arrow = MML.mo(MML.chars(String.fromCharCode(chr))).With({
        stretchy: true, texClass: MML.TEXCLASS.REL
      });
      var mml = MML.munderover(arrow);
      mml.SetData(mml.over,MML.mpadded(top).With(def).With({voffset:".15em"}));
      if (bot) {
        bot = TEX.Parse(bot,this.stack.env).mml()
        mml.SetData(mml.under,MML.mpadded(bot).With(def).With({voffset:"-.24em"}));
      }
      this.Push(mml.With({subsupOK:true}));
    },
    
    /*
     *  Get a delimiter or empty argument
     */
    GetDelimiterArg: function (name) {
      var c = this.trimSpaces(this.GetArgument(name));
      if (c == "") return null;
      if (c in TEXDEF.delimiter) return c;
      TEX.Error(["MissingOrUnrecognizedDelim","Missing or unrecognized delimiter for %1",name]);
    },
    
    /*
     *  Get a star following a control sequence name, if any
     */
    GetStar: function () {
      var star = (this.GetNext() === "*");
      if (star) {this.i++}
      return star;
    }
    
  });
  
  /******************************************************************************/
  
  STACKITEM.Augment({
    /*
     *  Increment equation number and form tag mtd element
     */
    autoTag: function () {
      var global = this.global;
      if (!global.notag) {
        AMS.number++; 
        global.tagID = CONFIG.formatNumber(AMS.number.toString());
        var mml = TEX.Parse("\\text{"+CONFIG.formatTag(global.tagID)+"}",{}).mml();
        global.tag = MML.mtd(mml).With({id:CONFIG.formatID(global.tagID), autonumber:true});
      }
    },
  
    /*
     *  Get the tag and record the label, if any
     */
    getTag: function () {
      var global = this.global;
      var tag = global.tag; 
      global.tagged = true;
      tag.attr = {};
      tag.attrNames = [];
      if (CONFIG.outputLabels) {
          tag.attr["data-autonumber"] = (tag.autonumber == true);
          tag.attrNames.push("data-autonumber");
      }
      if (global.label) {
        if (CONFIG.useLabelIds) {tag.id = CONFIG.formatID(global.label)}
        AMS.eqlabels[global.label] = {tag:global.tagID, id:tag.id};
        if (CONFIG.outputLabels) {
          tag.attr["data-label"] = global.label;
          tag.attrNames.push("data-label");
        }
      }
      //
      //  Check for repeated ID's (either in the document or as
      //  a previous tag) and find a unique related one. (#240)
      //
      if (document.getElementById(tag.id) || AMS.IDs[tag.id] || AMS.eqIDs[tag.id]) {
        var i = 0, ID;
        do {
          i++; 
          ID = tag.id+"_"+i;
        } while (document.getElementById(ID) || AMS.IDs[ID] || AMS.eqIDs[ID]);
        tag.id = ID; 
        if (global.label) {
          AMS.eqlabels[global.label].id = ID;
        }
      }
      AMS.eqIDs[tag.id] = 1;
      this.clearTag();
      return tag;
    },
    clearTag: function () {
      var global = this.global;
      delete global.tag; delete global.tagID; delete global.label;
    },

    /*
     *  If the initial child, skipping any initial space or
     *  empty braces (TeXAtom with child being an empty inferred row),
     *  is an <mo>, preceed it by an empty <mi> to force the <mo> to
     *  be infix.
     */
    fixInitialMO: function (data) {
      for (var i = 0, m = data.length; i < m; i++) {
        if (data[i] && (data[i].type !== "mspace" &&
           (data[i].type !== "texatom" || (data[i].data[0] && data[i].data[0].data.length)))) {
          if (data[i].isEmbellished()) data.unshift(MML.mi());
          break;
        }
      }
    }
  });
  
  /*
   *  Implement multline environment via a STACKITEM
   */
  STACKITEM.multline = STACKITEM.array.Subclass({
    type: "multline",
    Init: function (numbered,stack) {
      this.SUPER(arguments).Init.apply(this);
      this.numbered = (numbered && CONFIG.autoNumber !== "none");
      this.save = {notag: stack.global.notag};
      stack.global.tagged = !numbered && !stack.global.forcetag; // prevent automatic tagging in starred environments
    },
    EndEntry: function () {
      if (this.table.length) {this.fixInitialMO(this.data)}
      var mtd = MML.mtd.apply(MML,this.data);
      if (this.data.shove) {mtd.columnalign = this.data.shove}
      this.row.push(mtd);
      this.data = [];
    },
    EndRow: function () {
      if (this.row.length != 1) {
        TEX.Error(["MultlineRowsOneCol",
                   "The rows within the %1 environment must have exactly one column",
                   "multline"]);
      }
      this.table.push(this.row); this.row = [];
    },
    EndTable: function () {
      this.SUPER(arguments).EndTable.call(this);
      if (this.table.length) {
        var m = this.table.length-1, i, label = -1;
        if (!this.table[0][0].columnalign) {this.table[0][0].columnalign = MML.ALIGN.LEFT}
        if (!this.table[m][0].columnalign) {this.table[m][0].columnalign = MML.ALIGN.RIGHT}
        if (!this.global.tag && this.numbered) {this.autoTag()}
        if (this.global.tag && !this.global.notags) {
          label = (this.arraydef.side === "left" ? 0 : this.table.length - 1);
          this.table[label] = [this.getTag()].concat(this.table[label]);
        }
        for (i = 0, m = this.table.length; i < m; i++) {
          var mtr = (i === label ? MML.mlabeledtr : MML.mtr);
          this.table[i] = mtr.apply(MML,this.table[i]);
        }
      }
      this.global.notag  = this.save.notag;
    }
  });
  
  /*
   *  Save data about numbering and taging equations, and add
   *  tags at the ends of rows.
   */
  STACKITEM.AMSarray = STACKITEM.array.Subclass({
    type: "AMSarray",
    Init: function (name,numbered,taggable,stack) {
      this.SUPER(arguments).Init.apply(this);
      this.numbered = (numbered && CONFIG.autoNumber !== "none");
      this.save = {notags: stack.global.notags, notag: stack.global.notag};
      stack.global.notags = (taggable ? null : name);
      stack.global.tagged = !numbered && !stack.global.forcetag; // prevent automatic tagging in starred environments
    },
    EndEntry: function () {
      if (this.row.length % 2 === 1) {this.fixInitialMO(this.data)}
      this.row.push(MML.mtd.apply(MML,this.data));
      this.data = [];
    },
    EndRow: function () {
      var mtr = MML.mtr;
      if (!this.global.tag && this.numbered) {this.autoTag()}
      if (this.global.tag && !this.global.notags) {
        this.row = [this.getTag()].concat(this.row);
        mtr = MML.mlabeledtr;
      } else {this.clearTag()}
      if (this.numbered) {delete this.global.notag}
      this.table.push(mtr.apply(MML,this.row)); this.row = [];
    },
    EndTable: function () {
      this.SUPER(arguments).EndTable.call(this);
      this.global.notags = this.save.notags;
      this.global.notag  = this.save.notag;
    }
  });
  
  //
  //  Look for \tag on a formula and make an mtable to include it
  //
  STACKITEM.start.Augment({
    oldCheckItem: STACKITEM.start.prototype.checkItem,
    checkItem: function (item) {
      if (item.type === "stop") {
        var mml = this.mmlData(), global = this.global;
        if (AMS.display && !global.tag && !global.tagged && !global.isInner &&
            (CONFIG.autoNumber === "all" || global.forcetag)) {this.autoTag()}
        if (global.tag) {
          var row = [this.getTag(),MML.mtd(mml)];
          var def = {
            side: TEX.config.TagSide,
            minlabelspacing: TEX.config.TagIndent,
            displaystyle: "inherit"   // replaced by TeX input jax Translate() function with actual value
          };
          mml = MML.mtable(MML.mlabeledtr.apply(MML,row)).With(def);
        }
        return STACKITEM.mml(mml);
      }
      return this.oldCheckItem.call(this,item);
    }
  });
  
  /******************************************************************************/

  /*
   *  Add pre- and post-filters to handle the equation number maintainance.
   */
  TEX.prefilterHooks.Add(function (data) {
    AMS.display = data.display;
    AMS.number = AMS.startNumber;  // reset equation numbers (in case the equation restarted)
    AMS.eqlabels = {};
    AMS.eqIDs = {}; 
    AMS.badref = false;
    if (AMS.refUpdate) {AMS.number = data.script.MathJax.startNumber}
  });
  TEX.postfilterHooks.Add(function (data) {
    data.script.MathJax.startNumber = AMS.startNumber;
    AMS.startNumber = AMS.number;                // equation numbers for next equation
    MathJax.Hub.Insert(AMS.IDs,AMS.eqIDs);       // save IDs from this equation
    MathJax.Hub.Insert(AMS.labels,AMS.eqlabels); // save labels from this equation
    if (AMS.badref && !data.math.texError) {AMS.refs.push(data.script)}  // reprocess later
  },100);
  
  MathJax.Hub.Register.MessageHook("Begin Math Input",function () {
    AMS.refs = [];                 // array of jax with bad references
    AMS.refUpdate = false;
  });
  MathJax.Hub.Register.MessageHook("End Math Input",function (message) {
    if (AMS.refs.length) {
      AMS.refUpdate = true;
      for (var i = 0, m = AMS.refs.length; i < m; i++)
        {AMS.refs[i].MathJax.state = MathJax.ElementJax.STATE.UPDATE}
      return MathJax.Hub.processInput({
        scripts:AMS.refs,
        start: new Date().getTime(),
        i:0, j:0, jax:{}, jaxIDs:[]
      });
    }
    return null;
  });
  
  //
  //  Clear the equation numbers and labels
  //
  TEX.resetEquationNumbers = function (n,keepLabels) {
    AMS.startNumber = (n || 0);
    if (!keepLabels) {
      AMS.labels = {};
      AMS.IDs = {};
    }
  }

  /******************************************************************************/

  MathJax.Hub.Startup.signal.Post("TeX AMSmath Ready");
  
});

MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSmath.js");

/*************************************************************
 *
 *  MathJax/extensions/TeX/AMSsymbols.js
 *  
 *  Implements macros for accessing the AMS symbol fonts.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2017 The MathJax Consortium
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

MathJax.Extension["TeX/AMSsymbols"] = {
  version: "2.7.2"
};

MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
  var MML = MathJax.ElementJax.mml,
      TEXDEF = MathJax.InputJax.TeX.Definitions;
  
  TEXDEF.Add({

    mathchar0mi: {
      // Lowercase Greek letters
      digamma:                '03DD',
      varkappa:               '03F0',
      
      // Uppercase Greek letters
      varGamma:               ['0393',{mathvariant: MML.VARIANT.ITALIC}],
      varDelta:               ['0394',{mathvariant: MML.VARIANT.ITALIC}],
      varTheta:               ['0398',{mathvariant: MML.VARIANT.ITALIC}],
      varLambda:              ['039B',{mathvariant: MML.VARIANT.ITALIC}],
      varXi:                  ['039E',{mathvariant: MML.VARIANT.ITALIC}],
      varPi:                  ['03A0',{mathvariant: MML.VARIANT.ITALIC}],
      varSigma:               ['03A3',{mathvariant: MML.VARIANT.ITALIC}],
      varUpsilon:             ['03A5',{mathvariant: MML.VARIANT.ITALIC}],
      varPhi:                 ['03A6',{mathvariant: MML.VARIANT.ITALIC}],
      varPsi:                 ['03A8',{mathvariant: MML.VARIANT.ITALIC}],
      varOmega:               ['03A9',{mathvariant: MML.VARIANT.ITALIC}],

      // Hebrew letters
      beth:                   '2136',
      gimel:                  '2137',
      daleth:                 '2138',

      // Miscellaneous symbols
//    hbar:                   '0127',  // in TeX/jax.js
      backprime:              ['2035',{variantForm: true}],
      hslash:                 '210F',
      varnothing:             ['2205',{variantForm: true}],
      blacktriangle:          '25B4',
      triangledown:           ['25BD',{variantForm: true}],
      blacktriangledown:      '25BE',
      square:                 '25FB',
      Box:                    '25FB',
      blacksquare:            '25FC',
      lozenge:                '25CA',
      Diamond:                '25CA',
      blacklozenge:           '29EB',
      circledS:               ['24C8',{mathvariant: MML.VARIANT.NORMAL}],
      bigstar:                '2605',
//    angle:                  '2220',  // in TeX/jax.js
      sphericalangle:         '2222',
      measuredangle:          '2221',
      nexists:                '2204',
      complement:             '2201',
      mho:                    '2127',
      eth:                    ['00F0',{mathvariant: MML.VARIANT.NORMAL}],
      Finv:                   '2132',
      diagup:                 '2571',
      Game:                   '2141',
      diagdown:               '2572',
      Bbbk:                   ['006B',{mathvariant: MML.VARIANT.DOUBLESTRUCK}],
      
      yen:                    '00A5',
      circledR:               '00AE',
      checkmark:              '2713',
      maltese:                '2720'
    },

    mathchar0mo: {
      // Binary operators
      dotplus:                '2214',
      ltimes:                 '22C9',
      smallsetminus:          '2216',
      rtimes:                 '22CA',
      Cap:                    '22D2',
      doublecap:              '22D2',
      leftthreetimes:         '22CB',
      Cup:                    '22D3',
      doublecup:              '22D3',
      rightthreetimes:        '22CC',
      barwedge:               '22BC',
      curlywedge:             '22CF',
      veebar:                 '22BB',
      curlyvee:               '22CE',
      doublebarwedge:         '2A5E',
      boxminus:               '229F',
      circleddash:            '229D',
      boxtimes:               '22A0',
      circledast:             '229B',
      boxdot:                 '22A1',
      circledcirc:            '229A',
      boxplus:                '229E',
      centerdot:              ['22C5',{variantForm: true}],
      divideontimes:          '22C7',
      intercal:               '22BA',

      // Binary relations
      leqq:                   '2266',
      geqq:                   '2267',
      leqslant:               '2A7D',
      geqslant:               '2A7E',
      eqslantless:            '2A95',
      eqslantgtr:             '2A96',
      lesssim:                '2272',
      gtrsim:                 '2273',
      lessapprox:             '2A85',
      gtrapprox:              '2A86',
      approxeq:               '224A',
      lessdot:                '22D6',
      gtrdot:                 '22D7',
      lll:                    '22D8',
      llless:                 '22D8',
      ggg:                    '22D9',
      gggtr:                  '22D9',
      lessgtr:                '2276',
      gtrless:                '2277',
      lesseqgtr:              '22DA',
      gtreqless:              '22DB',
      lesseqqgtr:             '2A8B',
      gtreqqless:             '2A8C',
      doteqdot:               '2251',
      Doteq:                  '2251',
      eqcirc:                 '2256',
      risingdotseq:           '2253',
      circeq:                 '2257',
      fallingdotseq:          '2252',
      triangleq:              '225C',
      backsim:                '223D',
      thicksim:               ['223C',{variantForm: true}],
      backsimeq:              '22CD',
      thickapprox:            ['2248',{variantForm: true}],
      subseteqq:              '2AC5',
      supseteqq:              '2AC6',
      Subset:                 '22D0',
      Supset:                 '22D1',
      sqsubset:               '228F',
      sqsupset:               '2290',
      preccurlyeq:            '227C',
      succcurlyeq:            '227D',
      curlyeqprec:            '22DE',
      curlyeqsucc:            '22DF',
      precsim:                '227E',
      succsim:                '227F',
      precapprox:             '2AB7',
      succapprox:             '2AB8',
      vartriangleleft:        '22B2',
      lhd:                    '22B2',
      vartriangleright:       '22B3',
      rhd:                    '22B3',
      trianglelefteq:         '22B4',
      unlhd:                  '22B4',
      trianglerighteq:        '22B5',
      unrhd:                  '22B5',
      vDash:                  '22A8',
      Vdash:                  '22A9',
      Vvdash:                 '22AA',
      smallsmile:             ['2323',{variantForm: true}],
      shortmid:               ['2223',{variantForm: true}],
      smallfrown:             ['2322',{variantForm: true}],
      shortparallel:          ['2225',{variantForm: true}],
      bumpeq:                 '224F',
      between:                '226C',
      Bumpeq:                 '224E',
      pitchfork:              '22D4',
      varpropto:              '221D',
      backepsilon:            '220D',
      blacktriangleleft:      '25C2',
      blacktriangleright:     '25B8',
      therefore:              '2234',
      because:                '2235',
      eqsim:                  '2242',
      vartriangle:            ['25B3',{variantForm: true}],
      Join:                   '22C8',

      // Negated relations
      nless:                  '226E',
      ngtr:                   '226F',
      nleq:                   '2270',
      ngeq:                   '2271',
      nleqslant:              ['2A87',{variantForm: true}],
      ngeqslant:              ['2A88',{variantForm: true}],
      nleqq:                  ['2270',{variantForm: true}],
      ngeqq:                  ['2271',{variantForm: true}],
      lneq:                   '2A87',
      gneq:                   '2A88',
      lneqq:                  '2268',
      gneqq:                  '2269',
      lvertneqq:              ['2268',{variantForm: true}],
      gvertneqq:              ['2269',{variantForm: true}],
      lnsim:                  '22E6',
      gnsim:                  '22E7',
      lnapprox:               '2A89',
      gnapprox:               '2A8A',
      nprec:                  '2280',
      nsucc:                  '2281',
      npreceq:                ['22E0',{variantForm: true}],
      nsucceq:                ['22E1',{variantForm: true}],
      precneqq:               '2AB5',
      succneqq:               '2AB6',
      precnsim:               '22E8',
      succnsim:               '22E9',
      precnapprox:            '2AB9',
      succnapprox:            '2ABA',
      nsim:                   '2241',
      ncong:                  '2246',
      nshortmid:              ['2224',{variantForm: true}],
      nshortparallel:         ['2226',{variantForm: true}],
      nmid:                   '2224',
      nparallel:              '2226',
      nvdash:                 '22AC',
      nvDash:                 '22AD',
      nVdash:                 '22AE',
      nVDash:                 '22AF',
      ntriangleleft:          '22EA',
      ntriangleright:         '22EB',
      ntrianglelefteq:        '22EC',
      ntrianglerighteq:       '22ED',
      nsubseteq:              '2288',
      nsupseteq:              '2289',
      nsubseteqq:             ['2288',{variantForm: true}],
      nsupseteqq:             ['2289',{variantForm: true}],
      subsetneq:              '228A',
      supsetneq:              '228B',
      varsubsetneq:           ['228A',{variantForm: true}],
      varsupsetneq:           ['228B',{variantForm: true}],
      subsetneqq:             '2ACB',
      supsetneqq:             '2ACC',
      varsubsetneqq:          ['2ACB',{variantForm: true}],
      varsupsetneqq:          ['2ACC',{variantForm: true}],


      // Arrows
      leftleftarrows:         '21C7',
      rightrightarrows:       '21C9',
      leftrightarrows:        '21C6',
      rightleftarrows:        '21C4',
      Lleftarrow:             '21DA',
      Rrightarrow:            '21DB',
      twoheadleftarrow:       '219E',
      twoheadrightarrow:      '21A0',
      leftarrowtail:          '21A2',
      rightarrowtail:         '21A3',
      looparrowleft:          '21AB',
      looparrowright:         '21AC',
      leftrightharpoons:      '21CB',
      rightleftharpoons:      ['21CC',{variantForm: true}],
      curvearrowleft:         '21B6',
      curvearrowright:        '21B7',
      circlearrowleft:        '21BA',
      circlearrowright:       '21BB',
      Lsh:                    '21B0',
      Rsh:                    '21B1',
      upuparrows:             '21C8',
      downdownarrows:         '21CA',
      upharpoonleft:          '21BF',
      upharpoonright:         '21BE',
      downharpoonleft:        '21C3',
      restriction:            '21BE',
      multimap:               '22B8',
      downharpoonright:       '21C2',
      leftrightsquigarrow:    '21AD',
      rightsquigarrow:        '21DD',
      leadsto:                '21DD',
      dashrightarrow:         '21E2',
      dashleftarrow:          '21E0',

      // Negated arrows
      nleftarrow:             '219A',
      nrightarrow:            '219B',
      nLeftarrow:             '21CD',
      nRightarrow:            '21CF',
      nleftrightarrow:        '21AE',
      nLeftrightarrow:        '21CE'
    },
    
    delimiter: {
      // corners
      "\\ulcorner":           '231C',
      "\\urcorner":           '231D',
      "\\llcorner":           '231E',
      "\\lrcorner":           '231F'
    },
    
    macros: {
      implies:    ['Macro','\\;\\Longrightarrow\\;'],
      impliedby:  ['Macro','\\;\\Longleftarrow\\;']
    }
    
  },null,true);
  
  var REL = MML.mo.OPTYPES.REL;

  MathJax.Hub.Insert(MML.mo.prototype,{
    OPTABLE: {
      infix: {
        '\u2322': REL,  // smallfrown
        '\u2323': REL,  // smallsmile
        '\u25B3': REL,  // vartriangle
        '\uE006': REL,  // nshortmid
        '\uE007': REL,  // nshortparallel
        '\uE00C': REL,  // lvertneqq
        '\uE00D': REL,  // gvertneqq
        '\uE00E': REL,  // ngeqq
        '\uE00F': REL,  // ngeqslant
        '\uE010': REL,  // nleqslant
        '\uE011': REL,  // nleqq
        '\uE016': REL,  // nsubseteqq
        '\uE017': REL,  // varsubsetneqq
        '\uE018': REL,  // nsupseteqq
        '\uE019': REL,  // varsupsetneqq
        '\uE01A': REL,  // varsubsetneq
        '\uE01B': REL,  // varsupsetneq
        '\uE04B': REL,  // npreceq
        '\uE04F': REL   // nsucceq
      }
    }
  });

  MathJax.Hub.Startup.signal.Post("TeX AMSsymbols Ready");

});

MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSsymbols.js");

/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/jax.js
 *
 *  Implements the HTML-CSS OutputJax that displays mathematics
 *  using HTML and CSS to position the characters from math fonts
 *  in their proper locations.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2017 The MathJax Consortium
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

(function (AJAX,HUB,HTMLCSS) {
  var MML, isMobile = HUB.Browser.isMobile;
  var isArray = MathJax.Object.isArray;

  var MESSAGE = function () {
    var data = [].slice.call(arguments,0);
    data[0][0] = ["HTML-CSS",data[0][0]];
    return MathJax.Message.Set.apply(MathJax.Message,data);
  };
   
  var FONTTEST = MathJax.Object.Subclass({
    timeout:  (isMobile? 15:8)*1000,   // timeout for loading web fonts
    comparisonFont: ["sans-serif","monospace","script","Times","Courier","Arial","Helvetica"],
    testSize: ["40px","50px","60px","30px","20px"],
    //
    //  Fedora aliases STIXSizeOneSym to STIX Word, so MathJax thinks STIX is
    //  available, but the fonts aren't actually correct.  This is to test if
    //  STIXSizeOneSym has letters in it (so is actually STIX Word).
    //  
    FedoraSTIXcheck: {family:"STIXSizeOneSym", testString:"abcABC", noStyleChar:true},

    Init: function () {
      //
      //  Wrap the Font_Test DIV in a 0x0 DIV so that it takes no room
      //
      this.div = MathJax.HTML.addElement(document.body,"div",{style: {
          position:"absolute", width:0, height:0, overflow:"hidden",
          padding:0, border:0, margin:0
        }},[["div",{
          id: "MathJax_Font_Test",
          style: {position:"absolute", visibility:"hidden", top:0, left:0, width: "auto",
                  padding:0, border:0, margin:0, whiteSpace:"nowrap",
                  textAlign:"left", textIndent:0, textTransform:"none",
                  lineHeight:"normal", letterSpacing:"normal", wordSpacing:"normal",
                  fontSize:this.testSize[0], fontWeight:"normal", fontStyle:"normal",
                  fontSizeAdjust:"none"}
          },[""]]]
      ).firstChild;
      this.text = this.div.firstChild;
    },

    findFont: function (fonts,pref) {
      var found = null;
      if (pref && this.testCollection(pref)) {
        found = pref;
      } else {
        for (var i = 0, m = fonts.length; i < m; i++) {
          if (fonts[i] === pref) continue;
          if (this.testCollection(fonts[i])) {found = fonts[i]; break}
        }
      }
      if (found === "STIX" && this.testFont(this.FedoraSTIXcheck)) {found = null}
      return found;
    },

    testCollection: function (name) {
      var font = {testString: "() {} []"};
      font.family = {TeX:"MathJax_Size1", STIX:"STIXSizeOneSym"}[name] ||
                     name.replace(/-(Math)?/,"")+"MathJax_Size1";
      if (name === "STIX") {font.noStyleChar = true}
      return this.testFont(font);
    },

    testFont: function (font) {
      if (font.isWebFont && HTMLCSS.FontFaceBug) {
        this.div.style.fontWeight = this.div.style.fontStyle = "normal";
      } else {
        this.div.style.fontWeight = (font.weight||"normal");
        this.div.style.fontStyle  = (font.style||"normal");
      }
      //
      //  Hack:  Fix up web font names for local access.
      //  (The names for Windows and Mac are different, unlike in the STIX and
      //  TeX fonts, so we have to work out a list of names here.)
      //
      //  This should be removed when the web fonts are fixed.  FIXME
      //
      var family = font.familyFixed || font.family;
      if (!font.isWebFont && !family.match(/^(STIX|MathJax)|'/)) {
        family = family.replace(/_/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/ Jax/,"Jax")
               + "','" + family + "','" + family + "-";
        if (font.weight) {family += "Bold"}; if (font.style) {family += "Italic"}
        if (!font.weight && !font.style) {family += "Regular"}
        font.familyFixed = family = "'"+family+"'"
      }

      var W = this.getComparisonWidths(font.testString,font.noStyleChar);
      var found = null;
      if (W) {
        this.div.style.fontFamily = family+","+this.comparisonFont[0];
        if (this.div.offsetWidth == W[0]) {
          this.div.style.fontFamily = family+","+this.comparisonFont[W[2]];
          if (this.div.offsetWidth == W[1]) {found = false}
        }
        if (found === null && (this.div.offsetWidth != W[3] || this.div.offsetHeight != W[4])) {
          if (!font.noStyleChar && HTMLCSS.FONTDATA && HTMLCSS.FONTDATA.hasStyleChar) {
            for (var i = 0, m = this.testSize.length; i < m; i++)
              {if (this.testStyleChar(font,this.testSize[i])) {found = true; m = 0}}
          } else {found = true}
        }
      }
      if (HTMLCSS.safariTextNodeBug) {this.div.innerHTML = ""} else {this.text.nodeValue = ""}
      return found;
    },

    styleChar:   "\uEFFD", // width encodes style
    versionChar: "\uEFFE", // width encodes version
    compChar:    "\uEFFF", // "standard" width to compare to

    testStyleChar: function (font,size) {
      var n = 3 + (font.weight ? 2 : 0) + (font.style ? 4 : 0);
      var extra = "", dw = 0;
      var SIZE = this.div.style.fontSize; this.div.style.fontSize = size;
      if (HTMLCSS.msieItalicWidthBug && font.style === "italic") {
        this.text.nodeValue = extra = this.compChar;
        dw = this.div.offsetWidth;
      }
      if (HTMLCSS.safariTextNodeBug) {this.div.innerHTML = this.compChar+extra}
        else {this.text.nodeValue = this.compChar+extra}
      var W = this.div.offsetWidth-dw;
      if (HTMLCSS.safariTextNodeBug) {this.div.innerHTML = this.styleChar+extra}
        else {this.text.nodeValue = this.styleChar+extra}
      var N = Math.floor((this.div.offsetWidth-dw)/W+.5);
      if (N === n) {
        if (HTMLCSS.safariTextNodeBug) {this.div.innerHTML = this.versionChar+extra}
          else {this.text.nodeValue = this.versionChar+extra}
        font.version = Math.floor((this.div.offsetWidth-dw)/W+1.5)/2;
      }
      this.div.style.fontSize = SIZE;
      return (N === n);
    },

    getComparisonWidths: function (string,noStyleChar) {
      if (HTMLCSS.FONTDATA && HTMLCSS.FONTDATA.hasStyleChar && !noStyleChar)
        {string += this.styleChar + " " + this.compChar}
      if (HTMLCSS.safariTextNodeBug) {this.div.innerHTML = string}
        else {this.text.nodeValue = string}
      this.div.style.fontFamily = this.comparisonFont[0];
      var W = this.div.offsetWidth;
      this.div.style.fontFamily = HTMLCSS.webFontDefault;
      var sW = this.div.offsetWidth, sH = this.div.offsetHeight;
      for (var i = 1, m = this.comparisonFont.length; i < m; i++) {
        this.div.style.fontFamily = this.comparisonFont[i];
        if (this.div.offsetWidth != W) {return [W,this.div.offsetWidth,i,sW,sH]}
      }
      return null;
    },

    loadWebFont: function (font) {
      HUB.Startup.signal.Post("HTML-CSS Jax - Web-Font "+HTMLCSS.fontInUse+"/"+font.directory);
      var n = MESSAGE(["LoadWebFont","Loading web-font %1",HTMLCSS.fontInUse+"/"+font.directory]);
      var done = MathJax.Callback({}); // called when font is loaded
      var callback = MathJax.Callback(["loadComplete",this,font,n,done]);
      AJAX.timer.start(AJAX,[this.checkWebFont,font,callback],0,this.timeout);
      return done;
    },
    loadComplete: function (font,n,done,status) {
      MathJax.Message.Clear(n);
      if (status === AJAX.STATUS.OK) {this.webFontLoaded = true; done(); return}
      this.loadError(font);
      if (HUB.Browser.isFirefox && HTMLCSS.allowWebFonts) {
        var host = document.location.protocol + "//" + document.location.hostname;
        if (document.location.port != "") {host += ":" + document.location.port}
        host += "/";
        if (AJAX.fileURL(HTMLCSS.webfontDir).substr(0,host.length) !== host)
          {this.firefoxFontError(font)}
      }
      if (!this.webFontLoaded) {HTMLCSS.loadWebFontError(font,done)} else {done()}
    },
    loadError: function (font) {
      MESSAGE(["CantLoadWebFont","Can't load web font %1",HTMLCSS.fontInUse+"/"+font.directory],null,2000);
      HUB.Startup.signal.Post(["HTML-CSS Jax - web font error",HTMLCSS.fontInUse+"/"+font.directory,font]);
    },
    firefoxFontError: function (font) {
      MESSAGE(["FirefoxCantLoadWebFont","Firefox can't load web fonts from a remote host"],null,3000);
      HUB.Startup.signal.Post("HTML-CSS Jax - Firefox web fonts on remote host error");
    },

    checkWebFont: function (check,font,callback) {
      if (check.time(callback)) return;
      if (HTMLCSS.Font.testFont(font)) {
        callback(check.STATUS.OK);
      } else {
        setTimeout(check,check.delay);
      }
    },

    fontFace: function (name) {
      var type = HTMLCSS.allowWebFonts;
      var FONT = HTMLCSS.FONTDATA.FONTS[name];
      if (HTMLCSS.msieFontCSSBug && !FONT.family.match(/-Web$/)) {FONT.family += "-Web"}
      if (FONT.isWebFont) delete FONT.familyFixed;
      var webfonts = HTMLCSS.webfontDir+"/"+type;
      var dir = AJAX.fileURL(webfonts);
      var fullname = name.replace(/-b/,"-B").replace(/-i/,"-I").replace(/-Bold-/,"-Bold");
      if (!fullname.match(/-/)) {fullname += "-Regular"}
      if (type === "svg") {fullname += ".svg#"+fullname} else {fullname += "."+type}
      var rev = AJAX.fileRev(webfonts+"/"+fullname.replace(/#.*/,""));
      var def = {
        "font-family": FONT.family,
        src: "url('"+dir+"/"+fullname+rev+"')"
      };
      if (type === "otf") {
        fullname = fullname.replace(/otf$/,"woff");
        rev = AJAX.fileRev(webfonts+"/"+fullname);
        def.src += " format('opentype')";
        dir = AJAX.fileURL(HTMLCSS.webfontDir+"/woff");  // add woff fonts as well
        def.src = "url('"+dir+"/"+fullname+rev+"') format('woff'), "+def.src;
      } else if (type !== "eot") {def.src += " format('"+type+"')"}
      if (!(HTMLCSS.FontFaceBug && FONT.isWebFont)) {
        if (name.match(/-bold/)) {def["font-weight"] = "bold"}
        if (name.match(/-italic/)) {def["font-style"] = "italic"}
      }
      return def;
    }
  });
  
  var EVENT, TOUCH, HOVER; // filled in later

  var oldIE = MathJax.Hub.Browser.isMSIE && (document.documentMode||0) < 8;

  HTMLCSS.Augment({
    config: {
      styles: {
        ".MathJax": {
          "display":         "inline",
          "font-style":      "normal",
          "font-weight":     "normal",
          "line-height":     "normal",
          "font-size":       "100%",
          "font-size-adjust":"none",
          "text-indent":     0,
          "text-align":      "left",
          "text-transform":  "none",
          "letter-spacing":  "normal",
          "word-spacing":    "normal",
          "word-wrap":       "normal",
          "white-space":     "nowrap",
          "float":           "none",
          "direction":       "ltr",
          "max-width": "none", "max-height": "none",
          "min-width": 0, "min-height": 0,
          border: 0, padding: 0, margin: 0
        },

        // Focus elements for keyboard tabbing.
        ".MathJax:focus, body :focus .MathJax": {
          display:"inline-table" // see issues #1282 and #1338
        },

        ".MathJax_Display": {
          position: "relative",
          display: "block!important",
          "text-indent": 0,
          "max-width": "none", "max-height": "none",
          "min-width": 0, "min-height": 0,
          width: "100%"
        },
        
        ".MathJax.MathJax_FullWidth": {
          "text-align": "center",
          display: (oldIE ? "block" : "table-cell") + "!important",
          width: (oldIE ? "100%" : "10000em") + "!important"
        },

        ".MathJax img, .MathJax nobr, .MathJax a": {
          border: 0, padding: 0, margin: 0,
          "max-width": "none", "max-height": "none",
          "min-width": 0, "min-height": 0,
          "vertical-align": 0, "line-height": "normal",
          "text-decoration": "none"
        },
        "img.MathJax_strut": {
          border:"0!important", padding:"0!important", margin:"0!important",
          "vertical-align": "0!important"
        },
        
	".MathJax span": {
	  display: "inline", position: "static",
	  border: 0, padding: 0, margin: 0,
	  "vertical-align": 0, "line-height": "normal",
	  "text-decoration": "none"
	},

        ".MathJax nobr": {
          "white-space": "nowrap!important"
        },
        
        ".MathJax img": {
          display: "inline!important",
          "float": "none!important"
        },
        
        ".MathJax *": {
          transition: "none",
          "-webkit-transition": "none",
          "-moz-transition": "none",
          "-ms-transition": "none",
          "-o-transition": "none"
        },

        ".MathJax_Processing": {
          visibility: "hidden", position:"fixed",
          width: 0, height: 0, overflow:"hidden"
        },
        ".MathJax_Processed": {display:"none!important"},
        
        ".MathJax_ExBox": {
          display:"block!important", overflow:"hidden",
          width:"1px", height:"60ex",
          "min-height": 0, "max-height":"none"
        },
        ".MathJax .MathJax_EmBox": {
          display:"block!important", overflow:"hidden",
          width:"1px", height:"60em",
          "min-height": 0, "max-height":"none"
        },
        ".MathJax_LineBox": {
          display: (oldIE ? "block" : "table") + "!important"
        },
        ".MathJax_LineBox span": {
          display: (oldIE ? "block" : "table-cell") + "!important",
          width: (oldIE ? "100%" : "10000em") + "!important",
          "min-width":0, "max-width":"none",
          padding:0, border:0, margin:0
        },
        
        ".MathJax .MathJax_HitBox": {
          cursor: "text",
          background: "white",
          opacity:0, filter:"alpha(opacity=0)"
        },
        ".MathJax .MathJax_HitBox *": {
          filter: "none", opacity:1, background:"transparent" // for IE
        },

        "#MathJax_Tooltip": {
          position: "absolute", left: 0, top: 0,
          width: "auto", height: "auto",
          display: "none"
        },
        "#MathJax_Tooltip *": {
          filter: "none", opacity:1, background:"transparent" // for IE
        },

        //
        //  Used for testing web fonts against the default font used while
        //  web fonts are loading
        //
        "@font-face": {
          "font-family": "MathJax_Blank",
          "src": "url('about:blank')"
        }

      }
    },
    settings: HUB.config.menuSettings,

    Font: null,                        // created by Config() below
    webFontDefault: "MathJax_Blank",
    allowWebFonts: "otf",              // assume browser can use OTF web fonts

    maxStretchyParts: 1000,            // limit the number of parts allowed for
                                       // stretchy operators. See issue 366.

    fontName: {
      TeXLocal:       "TeX",
      TeXWeb:         ["","TeX"],
      TeXImage:       ["",""],
      STIXLocal:      ["STIX","STIX-Web"],
      STIXWeb:        "STIX-Web",
      AsanaMathWeb:   "Asana-Math",
      GyrePagellaWeb: "Gyre-Pagella",
      GyreTermesWeb:  "Gyre-Termes",
      LatinModernWeb: "Latin-Modern",
      NeoEulerWeb:    "Neo-Euler"
    },
    
    fontInUse: "generic",
    FONTDATA: {
      TeX_factor: 1, baselineskip: 1.2, lineH: .8, lineD: .2, ffLineH: .8,
      FONTS: {},
      VARIANT: {"normal": {fonts:[]}, "-generic-variant": {}, "-largeOp": {}, "-smallOp": {}},
      RANGES: [], DELIMITERS: {}, RULECHAR: 0x2D, REMAP: {}
    },

    Config: function () {
      if (!this.require) {this.require = []}
      this.Font = FONTTEST(); this.SUPER(arguments).Config.call(this);
      var settings = this.settings, config = this.config, font = settings.font;
      if (this.adjustAvailableFonts) {this.adjustAvailableFonts(config.availableFonts)}
      if (settings.scale) {config.scale = settings.scale}
      if (font && font !== "Auto" && this.fontName[font]) {
        config.availableFonts = []; delete config.fonts;
        if (isArray(this.fontName[font])) {
          config.preferredFont = this.fontName[font][0];
          config.webFont = this.fontName[font][1];
        } else {
          config.preferredFont = config.webFont = this.fontName[font];
        }
        if (config.preferredFont) {config.availableFonts[0] = config.preferredFont}
      }
      if (config.fonts) {
        config.availableFonts = config.fonts;
        config.preferredFont = config.webFont = config.fonts[0];
        if (config.webFont === "STIX") {config.webFont += "-Web"}
      }
      font = this.Font.findFont(config.availableFonts,config.preferredFont);
      if (!font && this.allowWebFonts) {font = config.webFont; if (font) {this.webFonts = true}}
      if (!font && this.config.imageFont) {font = config.imageFont; this.imgFonts = true}
      if (font) {
        this.fontInUse = font; this.fontDir += "/" + font; this.webfontDir += "/" + font;
        this.require.push(this.fontDir+"/fontdata.js");
        if (this.imgFonts) {
          this.require.push(this.directory+"/imageFonts.js");
          HUB.Startup.signal.Post("HTML-CSS Jax - using image fonts");
        }
      } else {
        MESSAGE(["CantFindFontUsing","Can't find a valid font using %1",
                "["+this.config.availableFonts.join(", ")+"]"],null,3000);
        HUB.Startup.signal.Post("HTML-CSS Jax - no valid font");
      }
      this.require.push(MathJax.OutputJax.extensionDir+"/MathEvents.js");
    },

    Startup: function () {
      //  Set up event handling
      EVENT = MathJax.Extension.MathEvents.Event;
      TOUCH = MathJax.Extension.MathEvents.Touch;
      HOVER = MathJax.Extension.MathEvents.Hover;
      this.ContextMenu = EVENT.ContextMenu;
      this.Mousedown   = EVENT.AltContextMenu;
      this.Mouseover   = HOVER.Mouseover;
      this.Mouseout    = HOVER.Mouseout;
      this.Mousemove   = HOVER.Mousemove;

      // Make hidden div for when math is in a display:none block
      this.hiddenDiv = this.Element("div",{
        style:{visibility:"hidden", overflow:"hidden", position:"absolute", top:0,
               height:"1px", width: "auto", padding:0, border:0, margin:0,
               textAlign:"left", textIndent:0, textTransform:"none",
               lineHeight:"normal", letterSpacing:"normal", wordSpacing:"normal"}
      });
      if (!document.body.firstChild) {document.body.appendChild(this.hiddenDiv)}
        else {document.body.insertBefore(this.hiddenDiv,document.body.firstChild)}
      this.hiddenDiv = this.addElement(this.hiddenDiv,"div",{id:"MathJax_Hidden"});

      // Determine pixels per inch
      var div = this.addElement(this.hiddenDiv,"div",{style:{width:"5in"}});
      this.pxPerInch = div.offsetWidth/5; this.hiddenDiv.removeChild(div);

      // Markers used by getW
      this.startMarker = this.createStrut(this.Element("span"),10,true);
      this.endMarker = this.addText(this.Element("span"),"x").parentNode;

      // Used in getHD
      this.HDspan = this.Element("span");
      if (this.operaHeightBug) {this.createStrut(this.HDspan,0)}
      if (this.msieInlineBlockAlignBug) {
        this.HDimg = this.addElement(this.HDspan,"img",{style:{height:"0px", width:"1px"}});
        try {this.HDimg.src = "about:blank"} catch(err) {}
      } else {
        this.HDimg = this.createStrut(this.HDspan,0);
      }

      // Used in preTranslate to get scaling factors
      this.EmExSpan = this.Element("span",
        {style:{position:"absolute","font-size-adjust":"none"}},
        [
          ["span",{className:"MathJax_ExBox"}],
          ["span",{className:"MathJax"},
            [["span",{className:"MathJax_EmBox"}]]
          ]
        ]
      );

      // Used in preTranslate to get linebreak width
      this.linebreakSpan = MathJax.HTML.Element("span",{className:"MathJax_LineBox"},[["span"]]);

      // Set up styles and preload web fonts
      return AJAX.Styles(this.config.styles,["InitializeHTML",this]);
    },
    
    removeSTIXfonts: function (fonts) {
      //
      //  Opera doesn't display large chunks of the STIX fonts, and
      //  Safari/Windows doesn't display Plane1,
      //  so disable STIX for these browsers.
      //
      //  ### FIXME ### Do we need to disable the other web fonts for these?
      //
      for (var i = 0, m = fonts.length; i < m; i++)
        {if (fonts[i] === "STIX") {fonts.splice(i,1); m--; i--;}}
      if (this.config.preferredFont === "STIX") {this.config.preferredFont = fonts[0]}
    },

    PreloadWebFonts: function () {
      if (!HTMLCSS.allowWebFonts || !HTMLCSS.config.preloadWebFonts) return;
      for (var i = 0, m = HTMLCSS.config.preloadWebFonts.length; i < m; i++) {
        var FONT = HTMLCSS.FONTDATA.FONTS[HTMLCSS.config.preloadWebFonts[i]];
        if (!FONT.available) {HTMLCSS.Font.testFont(FONT)}
      }
    },
    
    //
    //  Handle initialization that requires styles to be set up
    //
    InitializeHTML: function () {
      this.PreloadWebFonts();
      this.getDefaultExEm();
      //
      //  If the defaultEm size is zero, it might be that a web font hasn't
      //  arrived yet, so try to wait for it, but don't wait too long.
      //
      if (this.defaultEm) return;
      var ready = MathJax.Callback();
      AJAX.timer.start(AJAX,function (check) {
        if (check.time(ready)) {HUB.signal.Post(["HTML-CSS Jax - no default em size"]); return}
        HTMLCSS.getDefaultExEm();
        if (HTMLCSS.defaultEm) {
          ready();
        } else {
          setTimeout(check,check.delay);
        }
      },this.defaultEmDelay,this.defaultEmTimeout);
      return ready;
    },
    defaultEmDelay: 100,      // initial delay when checking for defaultEm
    defaultEmTimeout: 1000,   // when to stop looking for defaultEm
    getDefaultExEm: function () {
      //
      //  Get the default sizes (need styles in place to do this)
      //
      document.body.appendChild(this.EmExSpan);
      document.body.appendChild(this.linebreakSpan);
      this.defaultEx    = this.EmExSpan.firstChild.offsetHeight/60;
      this.defaultEm    = this.EmExSpan.lastChild.firstChild.offsetHeight/60;
      this.defaultWidth = this.linebreakSpan.firstChild.offsetWidth;
      document.body.removeChild(this.linebreakSpan);
      document.body.removeChild(this.EmExSpan);
    },
    
    preTranslate: function (state) {
      var scripts = state.jax[this.id], i, m = scripts.length, n,
          script, prev, span, div, test, jax, ex, em, scale, maxwidth, relwidth = false, cwidth,
          linebreak = this.config.linebreaks.automatic, width = this.config.linebreaks.width;
      if (linebreak) {
        relwidth = (width.match(/^\s*(\d+(\.\d*)?%\s*)?container\s*$/) != null);
        if (relwidth) {width = width.replace(/\s*container\s*/,"")}
          else {maxwidth = this.defaultWidth}
        if (width === "") {width = "100%"}
      } else {maxwidth = 100000} // a big width, so no implicit line breaks
      //
      //  Loop through the scripts
      //
      for (i = 0; i < m; i++) {
        script = scripts[i]; if (!script.parentNode) continue;
        //
        //  Remove any existing output
        //
        prev = script.previousSibling;
        if (prev && String(prev.className).match(/^MathJax(_Display)?( MathJax_Process(ing|ed))?$/))
          {prev.parentNode.removeChild(prev)}
        if (script.MathJax.preview) script.MathJax.preview.style.display = "none";
        //
        //  Add the span, and a div if in display mode,
        //  then mark it as being processed
        //
        jax = script.MathJax.elementJax; if (!jax) continue;
        jax.HTMLCSS = {display: (jax.root.Get("display") === "block")}
        span = div = this.Element("span",{
	  className:"MathJax", id:jax.inputID+"-Frame", isMathJax:true, jaxID:this.id,
          oncontextmenu:EVENT.Menu, onmousedown: EVENT.Mousedown,
          onmouseover:EVENT.Mouseover, onmouseout:EVENT.Mouseout,
          onmousemove:EVENT.Mousemove, onclick:EVENT.Click,
          ondblclick:EVENT.DblClick,
          // Added for keyboard accessible menu.
          onkeydown: EVENT.Keydown, tabIndex: HUB.getTabOrder(jax)
        });
	if (HUB.Browser.noContextMenu) {
	  span.ontouchstart = TOUCH.start;
	  span.ontouchend = TOUCH.end;
	}
        if (jax.HTMLCSS.display) {
          div = this.Element("div",{className:"MathJax_Display"});
          div.appendChild(span);
        } else if (this.msieDisappearingBug) {span.style.display = "inline-block"}
        div.className += " MathJax_Processing";
        script.parentNode.insertBefore(div,script);
        jax.HTMLCSS.span = span; jax.HTMLCSS.div = div;  // save for use in Translate()
        //
        //  Add the test span for determining scales and linebreak widths
        //
        script.parentNode.insertBefore(this.EmExSpan.cloneNode(true),script);
        div.parentNode.insertBefore(this.linebreakSpan.cloneNode(true),div)
      }
      //
      //  Determine the scaling factors for each script
      //  (this only requires one reflow rather than a reflow for each equation)
      //  Record any that need to be hidden (don't move them now, since that
      //  would cause reflows).
      //
      var hidden = [];
      for (i = 0; i < m; i++) {
        script = scripts[i]; if (!script.parentNode) continue;
        test = script.previousSibling; div = test.previousSibling;
        jax = script.MathJax.elementJax; if (!jax) continue;
        ex = test.firstChild.offsetHeight/60;
        em = test.lastChild.firstChild.offsetHeight/60;
        cwidth = Math.max(0,div.previousSibling.firstChild.offsetWidth - 2);
        if (ex === 0 || ex === "NaN") {
          // can't read width, so move to hidden div for processing
          hidden.push(div);
          jax.HTMLCSS.isHidden = true;
          ex = this.defaultEx; em = this.defaultEm; cwidth = this.defaultWidth;
        }
        if (relwidth) {maxwidth = cwidth}
        scale = (this.config.matchFontHeight ? ex/this.TeX.x_height/em : 1);
        scale = Math.floor(Math.max(this.config.minScaleAdjust/100,scale)*this.config.scale);
        jax.HTMLCSS.scale = scale/100; jax.HTMLCSS.fontSize = scale+"%";
        jax.HTMLCSS.em = jax.HTMLCSS.outerEm = em; this.em = em * scale/100; jax.HTMLCSS.ex = ex;
        jax.HTMLCSS.cwidth = cwidth/this.em;
        jax.HTMLCSS.lineWidth = (linebreak ? this.length2em(width,1,maxwidth/this.em) : 1000000);
      }
      for (i = 0, n = hidden.length; i < n; i++) {
        this.hiddenDiv.appendChild(hidden[i]);
        this.addElement(this.hiddenDiv,"br");
      }
      //
      //  Remove the test spans used for determining scales and linebreak widths
      //
      for (i = 0; i < m; i++) {
        script = scripts[i]; if (!script.parentNode) continue;
        test = scripts[i].previousSibling;
        jax = scripts[i].MathJax.elementJax; if (!jax) continue;
        span = test.previousSibling;
        if (!jax.HTMLCSS.isHidden) {span = span.previousSibling}
        span.parentNode.removeChild(span);
        test.parentNode.removeChild(test);
        if (script.MathJax.preview) script.MathJax.preview.style.display = "";
      }
      //
      //  Set state variables used for displaying equations in chunks
      //
      state.HTMLCSSeqn = state.HTMLCSSlast = 0; state.HTMLCSSi = -1;
      state.HTMLCSSchunk = this.config.EqnChunk;
      state.HTMLCSSdelay = false;
    },

    PHASE: {I: 1, II: 2, III: 3},  // processing phases
  
    Translate: function (script,state) {
      if (!script.parentNode) return;

      //
      //  If we are supposed to do a chunk delay, do it
      //  
      if (state.HTMLCSSdelay) {
        state.HTMLCSSdelay = false;
        HUB.RestartAfter(MathJax.Callback.Delay(this.config.EqnChunkDelay));
      }

      //
      //  Get the data about the math
      //
      var jax = script.MathJax.elementJax, math = jax.root,
          div = jax.HTMLCSS.div, span = jax.HTMLCSS.span;
      if (!document.getElementById(span.id)) return;
      //
      //  Set the font metrics
      //
      this.getMetrics(jax);
      if (this.scale !== 1) {span.style.fontSize = jax.HTMLCSS.fontSize}
      //
      //  Typeset the math
      //
      this.initImg(span);
      this.initHTML(math,span);
      this.savePreview(script);
      try {
        math.setTeXclass();
        math.toHTML(span,div,this.PHASE.I);
      } catch (err) {
        if (err.restart) {while (span.firstChild) {span.removeChild(span.firstChild)}}
        this.restorePreview(script);
        throw err;
      }
      this.restorePreview(script);
      //
      //  Remove the processing marker, and signal the new math pending
      //
      div.className = div.className.split(/ /)[0] + " MathJax_Processed";
      HUB.signal.Post(["New Math Pending",jax.inputID]); // FIXME: wait for this?  (i.e., restart if returns uncalled callback)
      //
      //  Check if we should show this chunk of equations
      //
      state.HTMLCSSeqn += (state.i - state.HTMLCSSi); state.HTMLCSSi = state.i;
      if (state.HTMLCSSeqn >= state.HTMLCSSlast + state.HTMLCSSchunk) {
        this.postTranslate(state,true);
        state.HTMLCSSchunk = Math.floor(state.HTMLCSSchunk*this.config.EqnChunkFactor);
        state.HTMLCSSdelay = true;  // delay if there are more scripts
      }
      return false;
    },
    //
    //  MathML previews can contain the same ID's as the HTML output,
    //  which confuses HTMLspanElement(), so remove the preview temporarily
    //  and restore it after typesetting the math.
    //
    savePreview: function (script) {
      var preview = script.MathJax.preview;
      if (preview) {
        script.MathJax.tmpPreview = document.createElement("span");
        preview.parentNode.replaceChild(script.MathJax.tmpPreview,preview);
      }
    },
    restorePreview: function (script) {
      var tmpPreview = script.MathJax.tmpPreview;
      if (tmpPreview) {
        tmpPreview.parentNode.replaceChild(script.MathJax.preview,tmpPreview);
        delete script.MathJax.tmpPreview;
      }
    },
    //
    //  Get the jax metric information
    //
    getMetrics: function(jax) {
      var data = jax.HTMLCSS;
      this.em = MML.mbase.prototype.em = data.em * data.scale; 
      this.outerEm = data.em;
      this.scale = data.scale;
      this.cwidth = data.cwidth;
      this.linebreakWidth = data.lineWidth;
    },

    postTranslate: function (state,partial) {
      var scripts = state.jax[this.id], script, jax, i, m;
      //
      //  Remove the processed markers so that measuring can occur,
      //  and remove the preview, if any, since the math will now be visible.
      //
      for (i = state.HTMLCSSlast, m = state.HTMLCSSeqn; i < m; i++) {
        script = scripts[i];
        if (script && script.parentNode && script.MathJax.elementJax) {
          var div = (script.MathJax.elementJax.HTMLCSS||{}).div;
          if (div) {div.className = div.className.split(/ /)[0]}
          if (script.MathJax.preview) {
            script.MathJax.preview.innerHTML = "";
            script.MathJax.preview.style.display = "none";
          }
        }
      }
      //
      //  Measure the math in this chunk (toHTML phase II)
      //
      for (i = state.HTMLCSSlast, m = state.HTMLCSSeqn; i < m; i++) {
        script = scripts[i];
        if (script && script.parentNode && script.MathJax.elementJax) {
          jax = script.MathJax.elementJax; this.getMetrics(jax);
          if (jax.HTMLCSS.span && jax.HTMLCSS.div) 
            jax.root.toHTML(jax.HTMLCSS.span,jax.HTMLCSS.div,this.PHASE.II);
        }
      }
      //
      //  Reveal this chunk of math
      //
      for (i = state.HTMLCSSlast, m = state.HTMLCSSeqn; i < m; i++) {
        script = scripts[i];
        if (script && script.parentNode && script.MathJax.elementJax) {
          //
          //  Finish the math with its measured size (toHTML phase III)
          //
          jax = script.MathJax.elementJax; this.getMetrics(jax);
          if (jax.HTMLCSS.span && jax.HTMLCSS.div) {
            jax.root.toHTML(jax.HTMLCSS.span,jax.HTMLCSS.div,this.PHASE.III);
            if (jax.HTMLCSS.isHidden) script.parentNode.insertBefore(jax.HTMLCSS.div,script);
            delete jax.HTMLCSS.span; delete jax.HTMLCSS.div;
            //
            //  The math is now fully processed
            //
            script.MathJax.state = jax.STATE.PROCESSED;
            HUB.signal.Post(["New Math",script.MathJax.elementJax.inputID]); // FIXME: wait for this?  (i.e., restart if returns uncalled callback)
          }
        }
      }
      if (this.forceReflow) {
        //  WebKit can misplace some elements that should wrap to the next line
        //  but gets them right on a reflow, so force reflow by toggling a stylesheet
        var sheet = (document.styleSheets||[])[0]||{};
        sheet.disabled = true; sheet.disabled = false;
      }
      //
      //  Save our place so we know what is revealed
      //
      state.HTMLCSSlast = state.HTMLCSSeqn;
    },
    
    getJaxFromMath: function (math) {
      if (math.parentNode.className.match(/MathJax_Display/)) {math = math.parentNode}
      do {math = math.nextSibling} while (math && math.nodeName.toLowerCase() !== "script");
      return HUB.getJaxFor(math);
    },
    getHoverSpan: function (jax,math) {return jax.root.HTMLspanElement()},
    getHoverBBox: function (jax,span,math) {
      var bbox = span.bbox, em = jax.HTMLCSS.outerEm;
      var BBOX = {w:bbox.w*em, h:bbox.h*em, d:bbox.d*em};
      if (bbox.width) {BBOX.width = bbox.width}
      return BBOX;
    },
    
    Zoom: function (jax,span,math,Mw,Mh) {
      //
      //  Re-render at larger size
      //
      span.className = "MathJax";
      span.style.fontSize = jax.HTMLCSS.fontSize;

      //
      //  get em sizes (taken from HTMLCSS.preTranslate)
      //
      var emex = span.appendChild(this.EmExSpan.cloneNode(true));
      var em = emex.lastChild.firstChild.offsetHeight/60;
      this.em = MML.mbase.prototype.em = em;
      this.outerEm = em / jax.HTMLCSS.scale;
      emex.parentNode.removeChild(emex);
      this.scale = jax.HTMLCSS.scale;
      this.linebreakWidth = jax.HTMLCSS.lineWidth;
      this.cwidth = jax.HTMLCSS.cwidth;

      this.zoomScale = parseInt(HUB.config.menuSettings.zscale) / 100;
      this.idPostfix = "-zoom"; jax.root.toHTML(span,span); this.idPostfix = "";
      this.zoomScale = 1;
      
      var bbox = jax.root.HTMLspanElement().bbox, width = bbox.width;
      if (width) {
        //  Handle full-width displayed equations
        if (bbox.tw) {Mw = bbox.tw*em}
        if (bbox.w*em < Mw) {Mw = bbox.w*em}
        span.style.width = Math.floor(Mw-1.5*HTMLCSS.em)+"px"; span.style.display="inline-block";
        var id = (jax.root.id||"MathJax-Span-"+jax.root.spanID)+"-zoom";
        var child = document.getElementById(id).firstChild;
        while (child && child.style.width !== width) {child = child.nextSibling}
        if (child) {
          var cwidth = child.offsetWidth; child.style.width = "100%";
          if (cwidth > Mw) {span.style.width = (cwidth+100)+"px"}
        }
      }
      //
      //  Adjust margins to prevent overlaps at the edges
      //
      child = span.firstChild.firstChild.style;
      if (bbox.H != null && bbox.H > bbox.h)
        {child.marginTop = HTMLCSS.Em(bbox.H-Math.max(bbox.h,HTMLCSS.FONTDATA.lineH))}
      if (bbox.D != null && bbox.D > bbox.d)
        {child.marginBottom = HTMLCSS.Em(bbox.D-Math.max(bbox.d,HTMLCSS.FONTDATA.lineD))}
      if (bbox.lw < 0) {child.paddingLeft = HTMLCSS.Em(-bbox.lw)}
      if (bbox.rw > bbox.w) {child.marginRight = HTMLCSS.Em(bbox.rw-bbox.w)}
      //
      //  Get height and width of zoomed math and original math
      //
      span.style.position = "absolute";
      if (!width) {math.style.position = "absolute"}
      var zW = span.offsetWidth, zH = span.offsetHeight,
          mH = math.offsetHeight, mW = math.offsetWidth;
      span.style.position = math.style.position = "";
      //
      return {Y:-EVENT.getBBox(span).h, mW:mW, mH:mH, zW:zW, zH:zH};
    },

    initImg: function (span) {},
    initHTML: function (math,span) {},
    initFont: function (name) {
      var FONTS = HTMLCSS.FONTDATA.FONTS, AVAIL = HTMLCSS.config.availableFonts;
      if (AVAIL && AVAIL.length && HTMLCSS.Font.testFont(FONTS[name])) {
        FONTS[name].available = true;
        if (FONTS[name].familyFixed) {
          FONTS[name].family = FONTS[name].familyFixed;
          delete FONTS[name].familyFixed;
        }
        return null;
      }
      if (!this.allowWebFonts) {return null}
      FONTS[name].isWebFont = true;
      if (HTMLCSS.FontFaceBug) {
        FONTS[name].family = name;
        if (HTMLCSS.msieFontCSSBug) {FONTS[name].family += "-Web"}
      }
      return AJAX.Styles({"@font-face":this.Font.fontFace(name)});
    },

    Remove: function (jax) {
      var span = document.getElementById(jax.inputID+"-Frame");
      if (span) {
        if (jax.HTMLCSS.display) {span = span.parentNode}
        span.parentNode.removeChild(span);
      }
      delete jax.HTMLCSS;
    },
    
    getHD: function (span,force) {
      if (span.bbox && this.config.noReflows && !force) {return {h:span.bbox.h, d:span.bbox.d}}
      var position = span.style.position;
      span.style.position = "absolute";
      this.HDimg.style.height = "0px";
      span.appendChild(this.HDspan);
      var HD = {h:span.offsetHeight};
      this.HDimg.style.height = HD.h+"px";
      HD.d = span.offsetHeight - HD.h; HD.h -= HD.d;
      HD.h /= this.em; HD.d /= this.em;
      span.removeChild(this.HDspan);
      span.style.position = position;
      return HD;
    },
    getW: function (span) {
      var W, H, w = (span.bbox||{}).w, start = span;
      if (span.bbox && this.config.noReflows && span.bbox.exactW !== false) {
        if (!span.bbox.exactW) {
          if (span.style.paddingLeft) w += this.unEm(span.style.paddingLeft)*(span.scale||1);
          if (span.style.paddingRight) w += this.unEm(span.style.paddingRight)*(span.scale||1);
        }
        return w;
      }
      if (span.bbox && span.bbox.exactW) {return w}
      if ((span.bbox && w >= 0 && !this.initialSkipBug && !this.msieItalicWidthBug) ||
           this.negativeBBoxes || !span.firstChild) {
        W = span.offsetWidth; H = span.parentNode.offsetHeight;
      } else if (span.bbox && w < 0 && this.msieNegativeBBoxBug) {
        W = -span.offsetWidth, H = span.parentNode.offsetHeight;
      } else {
        // IE can't deal with a space at the beginning, so put something else first
        var position = span.style.position; span.style.position = "absolute";
        start = this.startMarker; span.insertBefore(start,span.firstChild)
        span.appendChild(this.endMarker);
        W = this.endMarker.offsetLeft - start.offsetLeft;
        span.removeChild(this.endMarker);
        span.removeChild(start); span.style.position = position
      }
      if (H != null) {span.parentNode.HH = H/this.em}
      return W/this.em;
    },
    Measured: function (span,parent) {
      var bbox = span.bbox;
      if (bbox.width == null && bbox.w && !bbox.isMultiline) {
        var w = this.getW(span);
        bbox.rw += w - bbox.w;
        bbox.w = w; bbox.exactW = true;
      }
      if (!parent) {parent = span.parentNode}
      if (!parent.bbox) {parent.bbox = bbox}
      return span;
    },
    Remeasured: function (span,parent) {
      parent.bbox = this.Measured(span,parent).bbox;
    },
    MeasureSpans: function (SPANS) {
      var spans = [], span, i, m, bbox, start, end, W, parent;
      //
      //  Insert the needed markers
      // 
      for (i = 0, m = SPANS.length; i < m; i++) {
        span = SPANS[i]; if (!span) continue;
        bbox = span.bbox; parent = this.parentNode(span);
        if (bbox.exactW || bbox.width || bbox.w === 0 || bbox.isMultiline ||
            (this.config.noReflows && bbox.exactW !== false)) {
          if (!parent.bbox) {parent.bbox = bbox}
          continue;
        }
        if (this.negativeBBoxes || !span.firstChild || (bbox.w >= 0 && !this.initialSkipBug) ||
            (bbox.w < 0 && this.msieNegativeBBoxBug)) {
          spans.push([span]);
        } else if (this.initialSkipBug) {
          start = this.startMarker.cloneNode(true); end = this.endMarker.cloneNode(true);
          span.insertBefore(start,span.firstChild); span.appendChild(end);
          spans.push([span,start,end,span.style.position]); span.style.position = "absolute";
        } else {
          end = this.endMarker.cloneNode(true);
          span.appendChild(end); spans.push([span,null,end]);
        }
      }
      //
      //  Read the widths and heights
      //
      for (i = 0, m = spans.length; i < m; i++) {
        span = spans[i][0]; bbox = span.bbox; parent = this.parentNode(span);
        if ((bbox.w >= 0 && !this.initialSkipBug) || this.negativeBBoxes || !span.firstChild) {
          W = span.offsetWidth; parent.HH = parent.offsetHeight/this.em;
        } else if (bbox.w < 0 && this.msieNegativeBBoxBug) {
          W = -span.offsetWidth, parent.HH = parent.offsetHeight/this.em;
        } else {
          W = spans[i][2].offsetLeft - ((spans[i][1]||{}).offsetLeft||0);
        }
        W /= this.em;
        bbox.rw += W - bbox.w;
        bbox.w = W; bbox.exactW = true;
        if (!parent.bbox) {parent.bbox = bbox}
      }
      //
      //  Remove markers
      //
      for (i = 0, m = spans.length; i < m; i++) {
        span = spans[i];
        if (span[1]) {span[1].parentNode.removeChild(span[1]), span[0].style.position = span[3]}
        if (span[2]) {span[2].parentNode.removeChild(span[2])}
      }
    },

    Em: function (m) {
      if (Math.abs(m) < .0006) {return "0em"}
      return m.toFixed(3).replace(/\.?0+$/,"") + "em";
    },
    EmRounded: function (m) {
      if (Math.abs(m) < .0006) {return "0em"}
      m = (Math.round(m*HTMLCSS.em)+.05)/HTMLCSS.em;
      return m.toFixed(3).replace(/\.?0+$/,"") + "em";
    },
    unEm: function (m) {
      return parseFloat(m);
    },
    Px: function (m) {
      m *= this.em; var s = (m < 0? "-" : "");
      return s+Math.abs(m).toFixed(1).replace(/\.?0+$/,"") + "px";
    },
    unPx: function (m) {
      return parseFloat(m)/this.em;
    },
    Percent: function (m) {
      return (100*m).toFixed(1).replace(/\.?0+$/,"") + "%";
    },
    length2em: function (length,mu,size) {
      if (typeof(length) !== "string") {length = length.toString()}
      if (length === "") {return ""}
      if (length === MML.SIZE.NORMAL) {return 1}
      if (length === MML.SIZE.BIG)    {return 2}
      if (length === MML.SIZE.SMALL)  {return .71}
      if (length === "infinity")      {return HTMLCSS.BIGDIMEN}
      var factor = this.FONTDATA.TeX_factor, emFactor = (HTMLCSS.zoomScale||1) / HTMLCSS.em;
      if (length.match(/mathspace$/)) {return HTMLCSS.MATHSPACE[length]*factor}
      var match = length.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/);
      var m = parseFloat(match[1]||"1"), unit = match[2];
      if (size == null) {size = 1}; if (mu == null) {mu = 1}
      if (unit === "em") {return m * factor}
      if (unit === "ex") {return m * HTMLCSS.TeX.x_height * factor}
      if (unit === "%")  {return m / 100 * size}
      if (unit === "px") {return m * emFactor}
      if (unit === "pt") {return m / 10 * factor}                      // 10 pt to an em
      if (unit === "pc") {return m * 1.2 * factor}                     // 12 pt to a pc
      if (unit === "in") {return m * this.pxPerInch * emFactor}
      if (unit === "cm") {return m * this.pxPerInch * emFactor / 2.54} // 2.54 cm to an inch
      if (unit === "mm") {return m * this.pxPerInch * emFactor / 25.4} // 10 mm to a cm
      if (unit === "mu") {return m / 18 * factor * mu} // 18mu to an em for the scriptlevel
      return m*size;  // relative to given size (or 1em as default)
    },
    thickness2em: function (length,mu) {
      var thick = HTMLCSS.TeX.rule_thickness;
      if (length === MML.LINETHICKNESS.MEDIUM) {return thick}
      if (length === MML.LINETHICKNESS.THIN) {return .67*thick}
      if (length === MML.LINETHICKNESS.THICK) {return 1.67*thick}
      return this.length2em(length,mu,thick);
    },
    
    getPadding: function (span) {
      var padding = {top:0, right:0, bottom:0, left:0}, has = false;
      for (var id in padding) {if (padding.hasOwnProperty(id)) {
        var pad = span.style["padding"+id.charAt(0).toUpperCase()+id.substr(1)];
        if (pad) {padding[id] = this.length2em(pad); has = true;}
      }}
      return (has ? padding : false);
    },
    getBorders: function (span) {
      var border = {top:0, right:0, bottom:0, left:0}, css = {}, has = false;
      for (var id in border) {if (border.hasOwnProperty(id)) {
        var ID = "border"+id.charAt(0).toUpperCase()+id.substr(1);
        var style = span.style[ID+"Style"];
        if (style) {
          has = true;
          border[id] = this.length2em(span.style[ID+"Width"]);
          css[ID] = [span.style[ID+"Width"],span.style[ID+"Style"],span.style[ID+"Color"]].join(" ");
        }
      }}
      border.css = css;
      return (has ? border : false);
    },
    setBorders: function (span,borders) {
      if (borders) {
        for (var id in borders.css) {if (borders.css.hasOwnProperty(id)) {
          span.style[id] = borders.css[id];
        }}
      }
    },

    createStrut: function (span,h,before) {
      var strut = this.Element("span",{
        isMathJax: true,
        style:{display:"inline-block", overflow:"hidden", height:h+"px",
               width:"1px", marginRight:"-1px"}
      });
      if (before) {span.insertBefore(strut,span.firstChild)} else {span.appendChild(strut)}
      return strut;
    },
    createBlank: function (span,w,before) {
      var blank = this.Element("span",{
        isMathJax: true,
        style: {display:"inline-block", overflow:"hidden", height:"1px", width:this.Em(w)}
      });
      if (w < 0) {blank.style.marginRight = blank.style.width; blank.style.width = 0}
      if (before) {span.insertBefore(blank,span.firstChild)} else {span.appendChild(blank)}
      return blank;
    },
    createShift: function (span,w,before) {
      var space = this.Element("span",{style:{marginLeft:this.Em(w)}, isMathJax:true});
      if (before) {span.insertBefore(space,span.firstChild)} else {span.appendChild(space)}
      return space;
    },
    createSpace: function (span,h,d,w,color,isSpace) {
      if (h < -d) {d = -h} // make sure h is above d
      var H = this.Em(h+d), D = this.Em(-d);
      if (this.msieInlineBlockAlignBug) {D = this.Em(HTMLCSS.getHD(span.parentNode,true).d-d)}
      if (span.isBox || isSpace) {
	var scale = (span.scale == null ? 1 : span.scale);
	span.bbox = {exactW: true, h: h*scale, d: d*scale, w: w*scale, rw: w*scale, lw: 0};
        span.style.height = H; span.style.verticalAlign = D;
        span.HH = (h+d)*scale;
      } else {
        span = this.addElement(span,"span",{style: {height:H, verticalAlign:D}, isMathJax:true});
      }
      if (w >= 0) {
        span.style.width = this.Em(w);
        span.style.display = "inline-block";
        span.style.overflow = "hidden";       // for IE in quirks mode
      } else {
        if (this.msieNegativeSpaceBug) {span.style.height = ""}
        span.style.marginLeft = this.Em(w);
        if (HTMLCSS.safariNegativeSpaceBug && span.parentNode.firstChild == span)
          {this.createBlank(span,0,true)}
      }
      if (color && color !== MML.COLOR.TRANSPARENT) {
        span.style.backgroundColor = color;
        span.style.position = "relative"; // make sure it covers earlier items
      }
      return span;
    },
    createRule: function (span,h,d,w,color) {
      if (h < -d) {d = -h} // make sure h is above d
      var min = HTMLCSS.TeX.min_rule_thickness, f = 1;
      // If rule is very thin, make it at least min_rule_thickness so it doesn't disappear
      if (w > 0 && w*this.em < min) {w = min/this.em}
      if (h+d > 0 && (h+d)*this.em < min) {f = 1/(h+d)*(min/this.em); h *= f; d *= f}
      if (!color) {color = "solid"} else {color = "solid "+color}
      var style = {display: "inline-block", overflow:"hidden", verticalAlign:this.Em(-d)};
      if (w > h+d) {
        style.borderTop = this.Px(h+d)+" "+color;
        style.width = this.Em(w);
        style.height = (this.msieRuleBug && h+d > 0 ? this.Em(h+d) : 0);
      } else {
        style.borderLeft = this.Px(w)+" "+color;
        style.width = (this.msieRuleBug && w > 0 ? this.Em(w) : 0);
        style.height = this.Em(h+d);
      }
      var rule = this.addElement(span,"span",{
        style: style, noAdjust:true, HH:h+d, isMathJax:true,
        bbox: {h:h, d:d, w:w, rw:w, lw:0, exactW:true}
      });
      if (span.isBox || span.className == "mspace") {span.bbox = rule.bbox, span.HH = h+d}
      return rule;
    },
    createFrame: function (span,h,d,w,t,style) {
      if (h < -d) {d = -h} // make sure h is above d
      var T = 2*t;
      if (this.msieFrameSizeBug) {if (w < T) {w = T}; if (h+d < T) {h = T-d}}
      if (this.msieBorderWidthBug) {T = 0}
      var H = this.Em(h+d-T), D = this.Em(-d-t), W = this.Em(w-T);
      var B = this.Px(t)+" "+style;
      var frame = this.addElement(span,"span",{
        style: {border: B, display:"inline-block", overflow:"hidden", width:W, height:H},
        bbox: {h:h, d:d, w:w, rw:w, lw:0, exactW:true}, noAdjust: true, HH:h+d, isMathJax:true
      });
      if (D) {frame.style.verticalAlign = D}
      return frame;
    },
    
    //
    //  Find parent span (skipping over <a> tags)
    //
    parentNode: function (span) {
      var parent = span.parentNode;
      if (parent.nodeName.toLowerCase() === "a") {parent = parent.parentNode}
      return parent;
    },

    createStack: function (span,nobbox,w) {
      if (this.msiePaddingWidthBug) {this.createStrut(span,0)}
      var relativeW = String(w).match(/%$/);
      var W = (!relativeW && w != null ? w : 0);
      span = this.addElement(span,"span",{
        noAdjust: true, HH: 0, isMathJax: true,
        style: {display:"inline-block", position:"relative",
                width:(relativeW ? "100%" : this.Em(W)), height:0}
      });
      if (!nobbox) {
        span.parentNode.bbox = span.bbox = {
          exactW: true,
          h: -this.BIGDIMEN, d: -this.BIGDIMEN,
          w:W, lw: this.BIGDIMEN, rw: (!relativeW && w != null ? w : -this.BIGDIMEN)
        };
        if (relativeW) {span.bbox.width = w}
      }
      return span;
    },
    createBox: function (span,w) {
      var box = this.addElement(span,"span",{style:{position:"absolute"}, isBox: true, isMathJax:true});
      if (w != null) {box.style.width = w}
      return box;
    },
    addBox: function (span,box) {
      box.style.position = "absolute"; box.isBox = box.isMathJax = true;
      return span.appendChild(box);
    },
    placeBox: function (span,x,y,noclip) {
      span.isMathJax = true;
      var parent = HTMLCSS.parentNode(span), bbox = span.bbox, BBOX = parent.bbox;
      if (this.msiePlaceBoxBug) {this.addText(span,this.NBSP)}
      if (this.imgSpaceBug) {this.addText(span,this.imgSpace)}
      // Place the box
      var HH, dx = 0;
      if (span.HH != null) {
        HH = span.HH;
      } else if (bbox) {
        var child = span.firstChild;
        HH = Math.max(3,3*(child ? child.scale||1 : 1),bbox.h+bbox.d)
      } else {
        HH = span.offsetHeight/this.em;
      }
      if (!span.noAdjust) {
        HH += 1;
        HH = Math.round(HH*this.em)/this.em; // make this an integer number of pixels (for Chrome)
        if (this.msieInlineBlockAlignBug) {
          this.addElement(span,"img",{
            className:"MathJax_strut", border:0, src:"about:blank", isMathJax:true,
            style:{width:0,height:this.Em(HH)}
          });
        } else {
          this.addElement(span,"span",{
            isMathJax: true, style:{display:"inline-block",width:0,height:this.Em(HH)}
          });
          if (HTMLCSS.chromeHeightBug) 
            {HH -= (span.lastChild.offsetHeight - Math.round(HH*this.em))/this.em}
        }
      }
      // Clip so that bbox doesn't include extra height and depth
      if (bbox) {
        if (this.initialSkipBug) {
          if (bbox.lw < 0) {dx = bbox.lw; HTMLCSS.createBlank(span,-dx,true)}
          if (bbox.rw > bbox.w) {HTMLCSS.createBlank(span,bbox.rw-bbox.w+.1)}
        }
        if (!this.msieClipRectBug && !bbox.noclip && !noclip) {
          var dd = 3/this.em;
          var H = (bbox.H == null ? bbox.h : bbox.H), D = (bbox.D == null ? bbox.d : bbox.D);
          var t = HH - H - dd, b = HH + D + dd, l = -1000, r = bbox.rw+1000;
          span.style.clip = "rect("+this.Em(t)+" "+this.Em(r)+" "+this.Em(b)+" "+this.Em(l)+")";
        }
      }
      // Place the box
      span.style.top = this.Em(-y-HH);
      span.style.left = this.Em(x+dx);
      // Update the bounding box
      if (bbox && BBOX) {
        if (bbox.H != null && (BBOX.H == null || bbox.H + y > BBOX.H)) {BBOX.H = bbox.H + y}
        if (bbox.D != null && (BBOX.D == null || bbox.D - y > BBOX.D)) {BBOX.D = bbox.D - y}
        if (bbox.h + y > BBOX.h) {BBOX.h = bbox.h + y}
        if (bbox.d - y > BBOX.d) {BBOX.d = bbox.d - y}
        if (BBOX.H != null && BBOX.H <= BBOX.h) {delete BBOX.H}
        if (BBOX.D != null && BBOX.D <= BBOX.d) {delete BBOX.D}
        if (bbox.w + x > BBOX.w) {
          BBOX.w = bbox.w + x;
          if (BBOX.width == null) {parent.style.width = this.Em(BBOX.w)}
        }
        if (bbox.rw + x > BBOX.rw) {BBOX.rw = bbox.rw + x}
        if (bbox.lw + x < BBOX.lw) {BBOX.lw = bbox.lw + x}
        if (bbox.width != null && !bbox.isFixed) {
          if (BBOX.width == null) {
            parent.style.width = BBOX.width = "100%";
            if (bbox.minWidth) {parent.style.minWidth = BBOX.minWidth = bbox.minWidth}
          }
          span.style.width = bbox.width;
        }
        if (bbox.tw) {BBOX.tw = bbox.tw}
      }
    },
    alignBox: function (span,align,y,dx,noskip) {
      if (dx == null) {dx = 0}
      this.placeBox(span,dx,y); // set y position (and left aligned)
      if (this.msiePlaceBoxBug) {
        //
        //  placeBox() adds an extra &nbsp;, so remove it here.
        //
        var node = span.lastChild;
        while (node && node.nodeName !== "#text") {node = node.previousSibling}
        if (node) {span.removeChild(node)}
      }
      var bbox = span.bbox; if (bbox.isMultiline && !noskip) return;
      var isRelative = bbox.width != null && !bbox.isFixed;
      var r = 0, c = dx-bbox.w/2, l = "50%";
      if (this.initialSkipBug) {r = bbox.w-bbox.rw-.1; c += bbox.lw}
      if (this.msieMarginScaleBug) {c = (c*this.em) + "px"} else {c = this.Em(c)}
      if (isRelative) {
        c = (dx === 0 ? "" : this.Em(dx));
        l = (50 - parseFloat(bbox.width)/2) + "%";
      }
      HUB.Insert(span.style,({
        right:  {left:"", right: this.Em(r-dx)},
        center: {left:l, marginLeft: c}
      })[align]);
    },
    setStackWidth: function (span,w) {
      if (typeof(w) === "number") {
        span.style.width = this.Em(Math.max(0,w));
        var bbox = span.bbox; if (bbox) {bbox.w = w; bbox.exactW = true};
        bbox = span.parentNode.bbox; if (bbox) {bbox.w = w; bbox.exactW = true};
      } else {
        span.style.width = span.parentNode.style.width = "100%";
        if (span.bbox) {span.bbox.width = w}
        if (span.parentNode.bbox) {span.parentNode.bbox.width = w}
      }
    },

    createDelimiter: function (span,code,HW,scale,font) {
      if (!code) {
        span.bbox = {h:0, d:0, w:this.TeX.nulldelimiterspace, lw: 0};
        span.bbox.rw = span.bbox.w;
        this.createSpace(span,span.bbox.h,span.bbox.d,span.bbox.w);
        return;
      }
      if (!scale) {scale = 1};
      if (!(HW instanceof Array)) {HW = [HW,HW]}
      var hw = HW[1]; HW = HW[0];
      var delim = {alias: code};
      while (delim.alias) {
        code = delim.alias; delim = this.FONTDATA.DELIMITERS[code];
        if (!delim) {delim = {HW: [0,this.FONTDATA.VARIANT[MML.VARIANT.NORMAL]]}}
      }
      if (delim.load) {HUB.RestartAfter(AJAX.Require(this.fontDir+"/fontdata-"+delim.load+".js"))}
      for (var i = 0, m = delim.HW.length; i < m; i++) {
        if (delim.HW[i][0]*scale >= HW-.01 || (i == m-1 && !delim.stretch)) {
          if (delim.HW[i][2]) {scale *= delim.HW[i][2]}
          if (delim.HW[i][3]) {code = delim.HW[i][3]}
          var chr = this.addElement(span,"span");
          this.createChar(chr,[code,delim.HW[i][1]],scale,font);
          span.bbox = chr.bbox;
          span.offset = .65 * span.bbox.w;
          span.scale = scale;
          return;
        }
      }
      if (delim.stretch) {this["extendDelimiter"+delim.dir](span,hw,delim.stretch,scale,font)}
    },
    extendDelimiterV: function (span,H,delim,scale,font) {
      var stack = this.createStack(span,true);
      var top = this.createBox(stack), bot = this.createBox(stack);
      this.createChar(top,(delim.top||delim.ext),scale,font);
      this.createChar(bot,(delim.bot||delim.ext),scale,font);
      var ext = {bbox:{w:0,lw:0,rw:0}}, mid = ext, EXT;
      var h = top.bbox.h + top.bbox.d + bot.bbox.h + bot.bbox.d;
      var y = -top.bbox.h; this.placeBox(top,0,y,true); y -= top.bbox.d;
      if (delim.mid) {
        mid = this.createBox(stack); this.createChar(mid,delim.mid,scale,font);
        h += mid.bbox.h + mid.bbox.d;
      }
      if (delim.min && H < h*delim.min) {H = h*delim.min}
      if (H > h) {
        ext = this.Element("span"); this.createChar(ext,delim.ext,scale,font);
        var eH = ext.bbox.h + ext.bbox.d, eh = eH - .05, n, N, k = (delim.mid ? 2 : 1);
        N = n = Math.min(Math.ceil((H-h)/(k*eh)), this.maxStretchyParts);
        if (!delim.fullExtenders) {eh = (H-h)/(k*n)}
        var dy = (n/(n+1))*(eH - eh); eh = eH - dy; y += dy + eh - ext.bbox.h;
        while (k-- > 0) {
          while (n-- > 0) {
            if (!this.msieCloneNodeBug) {EXT = ext.cloneNode(true)}
              else {EXT = this.Element("span"); this.createChar(EXT,delim.ext,scale,font)}
            EXT.bbox = ext.bbox;
            y -= eh; this.placeBox(this.addBox(stack,EXT),0,y,true);
          }
          y += dy - ext.bbox.d;
          if (delim.mid && k) {
            this.placeBox(mid,0,y-mid.bbox.h,true); n = N;
            y += -(mid.bbox.h + mid.bbox.d) + dy + eh - ext.bbox.h;
          }
        }
      } else {
        y += (h - H)/2;
        if (delim.mid) {this.placeBox(mid,0,y-mid.bbox.h,true); y += -(mid.bbox.h + mid.bbox.d)}
        y += (h - H)/2;
      }
      this.placeBox(bot,0,y-bot.bbox.h,true); y -= bot.bbox.h + bot.bbox.d;
      span.bbox = {
        w:  Math.max(top.bbox.w,ext.bbox.w,bot.bbox.w,mid.bbox.w),
        lw: Math.min(top.bbox.lw,ext.bbox.lw,bot.bbox.lw,mid.bbox.lw),
        rw: Math.max(top.bbox.rw,ext.bbox.rw,bot.bbox.rw,mid.bbox.rw),
        h: 0, d: -y, exactW: true
      }
      span.scale = scale;
      span.offset = .55 * span.bbox.w;
      span.isMultiChar = true;
      this.setStackWidth(stack,span.bbox.w);
    },
    extendDelimiterH: function (span,W,delim,scale,font) {
      var stack = this.createStack(span,true);
      var left = this.createBox(stack), right = this.createBox(stack);
      this.createChar(left,(delim.left||delim.rep),scale,font);
      this.createChar(right,(delim.right||delim.rep),scale,font);
      var rep = this.Element("span"); this.createChar(rep,delim.rep,scale,font);
      var mid = {bbox: {h:-this.BIGDIMEN, d:-this.BIGDIMEN}}, REP;
      this.placeBox(left,-left.bbox.lw,0,true);
      var w = (left.bbox.rw - left.bbox.lw) + (right.bbox.rw - right.bbox.lw) - .05,
          x = left.bbox.rw - left.bbox.lw - .025, dx;
      if (delim.mid) {
        mid = this.createBox(stack); this.createChar(mid,delim.mid,scale,font);
        w += mid.bbox.w;
      }
      if (delim.min && W < w*delim.min) {W = w*delim.min}
      if (W > w) {
        var rW = rep.bbox.rw-rep.bbox.lw, rw = rW - .05, n, N, k = (delim.mid ? 2 : 1);
        N = n = Math.min(Math.ceil((W-w)/(k*rw)), this.maxStretchyParts);
        if (!delim.fillExtenders) {rw = (W-w)/(k*n)}
        dx = (n/(n+1))*(rW - rw); rw = rW - dx; x -= rep.bbox.lw + dx;
        while (k-- > 0) {
          while (n-- > 0) {
            if (!this.cloneNodeBug) {REP = rep.cloneNode(true)}
              else {REP = this.Element("span"); this.createChar(REP,delim.rep,scale,font)}
            REP.bbox = rep.bbox;
            this.placeBox(this.addBox(stack,REP),x,0,true); x += rw;
          }
          if (delim.mid && k) {this.placeBox(mid,x,0,true); x += mid.bbox.w - dx; n = N}
        }
      } else {
        x -= (w - W)/2;
        if (delim.mid) {this.placeBox(mid,x,0,true); x += mid.bbox.w};
        x -= (w - W)/2;
      }
      this.placeBox(right,x,0,true);
      span.bbox = {
        w: x+right.bbox.rw, lw: 0, rw: x+right.bbox.rw,
        h: Math.max(left.bbox.h,rep.bbox.h,right.bbox.h,mid.bbox.h),
        d: Math.max(left.bbox.d,rep.bbox.d,right.bbox.d,mid.bbox.d),
        exactW: true
      }
      span.scale = scale;
      span.isMultiChar = true;
      this.setStackWidth(stack,span.bbox.w);
    },
    createChar: function (span,data,scale,font) {
      span.isMathJax = true;
      var SPAN = span, text = "", variant = {fonts: [data[1]], noRemap:true};
      if (font && font === MML.VARIANT.BOLD) {variant.fonts = [data[1]+"-bold",data[1]]}
      if (typeof(data[1]) !== "string") {variant = data[1]}
      if (data[0] instanceof Array) {
        for (var i = 0, m = data[0].length; i < m; i++) {text += String.fromCharCode(data[0][i])}
      } else {text = String.fromCharCode(data[0])}
      if (data[4]) {scale *= data[4]}
      if (scale !== 1 || data[3]) {
	SPAN = this.addElement(span,"span",{style:{fontSize: this.Percent(scale)}, scale:scale, isMathJax:true});
        this.handleVariant(SPAN,variant,text);
        span.bbox = SPAN.bbox;
      } else {this.handleVariant(span,variant,text)}
      if (data[2]) {span.style.marginLeft = this.Em(data[2])}     // x offset
      if (data[3]) {                                              // y offset
        span.firstChild.style.verticalAlign = this.Em(data[3]);
        span.bbox.h += data[3]; if (span.bbox.h < 0) {span.bbox.h = 0}
      }
      if (data[5]) {span.bbox.h += data[5]}  // extra height
      if (data[6]) {span.bbox.d += data[6]}  // extra depth
      //  Handle combining characters by adding a non-breaking space so it shows up
      if (this.AccentBug && span.bbox.w === 0) {SPAN.firstChild.nodeValue += this.NBSP}
    },
    positionDelimiter: function (span,h) {
      h -= span.bbox.h; span.bbox.d -= h; span.bbox.h += h;
      if (h) {
        if (this.safariVerticalAlignBug || this.konquerorVerticalAlignBug ||
           (this.operaVerticalAlignBug && span.isMultiChar)) {
          if (span.firstChild.style.display === "" && span.style.top !== "")
            {span = span.firstChild; h -= HTMLCSS.unEm(span.style.top)}
          span.style.position = "relative";
          span.style.top = this.Em(-h);
        } else {
          span.style.verticalAlign = this.Em(h);
	  if (HTMLCSS.ffVerticalAlignBug) {
	    HTMLCSS.createRule(span.parentNode,span.bbox.h,0,0);
	    delete span.parentNode.bbox;
	  }
        }
      }
    },

    handleVariant: function (span,variant,text) {
      var newtext = "", n, c, font, VARIANT, SPAN = span, force = !!span.style.fontFamily;
      if (text.length === 0) return;
      if (!span.bbox) {
        span.bbox = {
          w: 0, h: -this.BIGDIMEN, d: -this.BIGDIMEN,
          rw: -this.BIGDIMEN, lw: this.BIGDIMEN
        };
      }
      if (!variant) {variant = this.FONTDATA.VARIANT[MML.VARIANT.NORMAL]}
      VARIANT = variant;
      for (var i = 0, m = text.length; i < m; i++) {
        variant = VARIANT;
        n = text.charCodeAt(i); c = text.charAt(i);
        if (n >= 0xD800 && n < 0xDBFF) {
          i++; n = (((n-0xD800)<<10)+(text.charCodeAt(i)-0xDC00))+0x10000;
          if (this.FONTDATA.RemapPlane1) {
            var nv = this.FONTDATA.RemapPlane1(n,variant);
            n = nv.n; variant = nv.variant;
          }
        } else {
          var id, M, RANGES = this.FONTDATA.RANGES;
          for (id = 0, M = RANGES.length; id < M; id++) {
            if (RANGES[id].name === "alpha" && variant.noLowerCase) continue;
            var N = variant["offset"+RANGES[id].offset];
            if (N && n >= RANGES[id].low && n <= RANGES[id].high) {
              if (RANGES[id].remap && RANGES[id].remap[n]) {
                n = N + RANGES[id].remap[n];
              } else {
                n = n - RANGES[id].low + N;
                if (RANGES[id].add) {n += RANGES[id].add}
              }
              if (variant["variant"+RANGES[id].offset])
                {variant = this.FONTDATA.VARIANT[variant["variant"+RANGES[id].offset]]}
              break;
            }
          }
        }
        if (variant.remap && variant.remap[n]) {
          n = variant.remap[n];
          if (variant.remap.variant) {variant = this.FONTDATA.VARIANT[variant.remap.variant]}
        } else if (this.FONTDATA.REMAP[n] && !variant.noRemap) {
          n = this.FONTDATA.REMAP[n];
        }
        if (isArray(n)) {variant = this.FONTDATA.VARIANT[n[1]]; n = n[0]} 
        if (typeof(n) === "string") {
          text = n+text.substr(i+1);
          m = text.length; i = -1;
          continue;
        }
        font = this.lookupChar(variant,n); c = font[n];
        if (force || (!this.checkFont(font,SPAN.style) && !c[5].img)) {
          if (newtext.length) {this.addText(SPAN,newtext); newtext = ""};
          var addSpan = !!SPAN.style.fontFamily || !!span.style.fontStyle ||
                        !!span.style.fontWeight || !font.directory || force; force = false;
          if (SPAN !== span) {addSpan = !this.checkFont(font,span.style); SPAN = span}
          if (addSpan) {SPAN = this.addElement(span,"span",{isMathJax:true, subSpan:true})}
          this.handleFont(SPAN,font,SPAN !== span);
        }
        newtext = this.handleChar(SPAN,font,c,n,newtext);
        if (!(c[5]||{}).space) {
          if (c[0]/1000 > span.bbox.h) {span.bbox.h = c[0]/1000}
          if (c[1]/1000 > span.bbox.d) {span.bbox.d = c[1]/1000}
        }
        if (span.bbox.w + c[3]/1000 < span.bbox.lw) {span.bbox.lw = span.bbox.w + c[3]/1000}
        if (span.bbox.w + c[4]/1000 > span.bbox.rw) {span.bbox.rw = span.bbox.w + c[4]/1000}
        span.bbox.w += c[2]/1000;
        if ((c[5]||{}).isUnknown) span.bbox.exactW = false;  // force measurement
      }
      if (newtext.length) {this.addText(SPAN,newtext)}
      if (span.scale && span.scale !== 1) {
        span.bbox.h *= span.scale; span.bbox.d *= span.scale;
        span.bbox.w *= span.scale; span.bbox.lw *= span.scale; span.bbox.rw *= span.scale;
      }
      if (text.length == 1 && font.skew && font.skew[n]) {span.bbox.skew = font.skew[n]}
    },
    checkFont: function (font,style) {
      var weight = (style.fontWeight||"normal");
      if (weight.match(/^\d+$/)) {weight = (parseInt(weight) >= 600 ? "bold" : "normal")}
      return (font.family.replace(/'/g,"") === style.fontFamily.replace(/'/g,"") &&
             (((font.style||"normal") === (style.fontStyle||"normal") &&
             (font.weight||"normal") === weight) ||
             (this.FontFaceBug && style.fontFamily !== '')));
    },

    handleFont: function (span,font,force) {
      span.style.fontFamily = font.family;
      if (!font.directory)
        {span.style.fontSize = Math.floor(HTMLCSS.config.scale/HTMLCSS.scale+.5) + "%"}
      if (!(HTMLCSS.FontFaceBug && font.isWebFont)) {
        var style  = font.style  || "normal", weight = font.weight || "normal";
        if (style !== "normal"  || force) {span.style.fontStyle  = style}
        if (weight !== "normal" || force) {span.style.fontWeight = weight}
      }
    },

    handleChar: function (span,font,c,n,text) {
      var C = c[5];
      if (C.space) {
        if (text.length) {this.addText(span,text)}
        HTMLCSS.createShift(span,c[2]/1000);
        return "";
      }
      if (C.img) {return this.handleImg(span,font,c,n,text)}
      if (C.isUnknown && this.FONTDATA.DELIMITERS[n]) {
        if (text.length) {this.addText(span,text)}
        var scale = span.scale;
        HTMLCSS.createDelimiter(span,n,0,1,font);
        if (this.FONTDATA.DELIMITERS[n].dir === "V") {
          span.style.verticalAlign = this.Em(span.bbox.d);
          span.bbox.h += span.bbox.d; span.bbox.d = 0;
        }
        span.scale = scale;
        c[0] = span.bbox.h*1000; c[1] = span.bbox.d*1000;
        c[2] = span.bbox.w*1000; c[3] = span.bbox.lw*1000; c[4] = span.bbox.rw*1000;
        return "";
      }
      if (C.c == null) {
        if (n <= 0xFFFF) {C.c = String.fromCharCode(n)} else {
          var N = n - 0x10000;
          C.c = String.fromCharCode((N>>10)+0xD800)
              + String.fromCharCode((N&0x3FF)+0xDC00);
        }
      }
      if (HTMLCSS.ffFontOptimizationBug && c[4] - c[2] > 125)
        {span.style.textRendering = "optimizeLegibility"}
      if (C.rfix) {this.addText(span,text+C.c); HTMLCSS.createShift(span,C.rfix/1000); return ""}
      if (c[2] || (!this.msieAccentBug && !this.combiningCharBug) || text.length) {return text + C.c}
      if (this.combiningCharBug) {
        HTMLCSS.addElement(span,"span",{style: {marginLeft:HTMLCSS.Em(c[3]/1000)}},[C.c]);
        return "";
      }
      //  Handle IE accent clipping bug
      HTMLCSS.createShift(span,c[3]/1000);
      HTMLCSS.createShift(span,(c[4]-c[3])/1000);
      this.addText(span,C.c);
      HTMLCSS.createShift(span,-c[4]/1000);
      return "";
    },
    handleImg: function (span,font,c,n,text) {return text}, // replaced by imageFont extension

    lookupChar: function (variant,n) {
      var i, m;
      if (!variant.FONTS) {
        var FONTS = this.FONTDATA.FONTS;
        var fonts = (variant.fonts || this.FONTDATA.VARIANT.normal.fonts);
        if (!(fonts instanceof Array)) {fonts = [fonts]}
        if (variant.fonts != fonts) {variant.fonts = fonts}
        variant.FONTS = [];
        for (i = 0, m = fonts.length; i < m; i++) {
          if (FONTS[fonts[i]]) {
            variant.FONTS.push(FONTS[fonts[i]]);
            FONTS[fonts[i]].name = fonts[i]; // FIXME: should really be in the font files
          }
        }
      }
      for (i = 0, m = variant.FONTS.length; i < m; i++) {
        var font = variant.FONTS[i];
        if (typeof(font) === "string") {
          delete variant.FONTS; this.loadFont(font);
        }
        if (font[n]) {
          if (font[n].length === 5) {font[n][5] = {}}
          if (HTMLCSS.allowWebFonts && !font.available)
            {this.loadWebFont(font)} else {return font}
        } else {this.findBlock(font,n)}
      }
      return this.unknownChar(variant,n);
    },
    
    unknownChar: function (variant,n) {
      var unknown = (variant.defaultFont || {family:HTMLCSS.config.undefinedFamily});
      if (variant.bold) {unknown.weight = "bold"}; if (variant.italic) {unknown.style = "italic"}
      if (!unknown[n]) {unknown[n] = [800,200,500,0,500,{isUnknown:true}]} // [h,d,w,lw,rw,{data}]
      HUB.signal.Post(["HTML-CSS Jax - unknown char",n,variant]);
      return unknown;
    },

    findBlock: function (font,c) {
      if (font.Ranges) {
        // FIXME:  do binary search?
        for (var i = 0, m = font.Ranges.length; i < m; i++) {
          if (c <  font.Ranges[i][0]) return;
          if (c <= font.Ranges[i][1]) {
            var file = font.Ranges[i][2];
            for (var j = font.Ranges.length-1; j >= 0; j--)
              {if (font.Ranges[j][2] == file) {font.Ranges.splice(j,1)}}
            this.loadFont(font.directory+"/"+file+".js");
          }
        }
      }
    },

    loadFont: function (file) {
      var queue = MathJax.Callback.Queue();
      queue.Push(["Require",AJAX,this.fontDir+"/"+file]);
      if (this.imgFonts) {
        if (!MathJax.isPacked) {file = file.replace(/\/([^\/]*)$/,HTMLCSS.imgPacked+"/$1")}
        queue.Push(["Require",AJAX,this.webfontDir+"/png/"+file]);
      }
      HUB.RestartAfter(queue.Push({}));
    },

    loadWebFont: function (font) {
      font.available = font.isWebFont = true;
      if (HTMLCSS.FontFaceBug) {
        font.family = font.name;
        if (HTMLCSS.msieFontCSSBug) {font.family += "-Web"}
      }
      HUB.RestartAfter(this.Font.loadWebFont(font));
    },
    loadWebFontError: function (font,done) {
      //
      //  After the first web font fails to load, switch to image fonts, if possible
      //  otherwise, give up on web fonts all together
      // 
      HUB.Startup.signal.Post("HTML-CSS Jax - disable web fonts");
      font.isWebFont = false;
      if (this.config.imageFont && this.config.imageFont === this.fontInUse) {
        this.imgFonts = true;
        HUB.Startup.signal.Post("HTML-CSS Jax - switch to image fonts");
        HUB.Startup.signal.Post("HTML-CSS Jax - using image fonts");
        MESSAGE(["WebFontNotAvailable","Web-Fonts not available -- using image fonts instead"],null,3000);
        AJAX.Require(this.directory+"/imageFonts.js",done);
      } else {
        this.allowWebFonts = false;
        done();
      }
    },

    Element: MathJax.HTML.Element,
    addElement: MathJax.HTML.addElement,
    TextNode: MathJax.HTML.TextNode,
    addText: MathJax.HTML.addText,
    ucMatch: MathJax.HTML.ucMatch,

    BIGDIMEN: 10000000,
    ID: 0, idPostfix: "",
    GetID: function () {this.ID++; return this.ID},

    MATHSPACE: {
      veryverythinmathspace:  1/18,
      verythinmathspace:      2/18,
      thinmathspace:          3/18,
      mediummathspace:        4/18,
      thickmathspace:         5/18,
      verythickmathspace:     6/18,
      veryverythickmathspace: 7/18,
      negativeveryverythinmathspace:  -1/18,
      negativeverythinmathspace:      -2/18,
      negativethinmathspace:          -3/18,
      negativemediummathspace:        -4/18,
      negativethickmathspace:         -5/18,
      negativeverythickmathspace:     -6/18,
      negativeveryverythickmathspace: -7/18
    },

    TeX: {
      x_height:         .430554,
      quad:             1,
      num1:             .676508,
      num2:             .393732,
      num3:             .44373,
      denom1:           .685951,
      denom2:           .344841,
      sup1:             .412892,
      sup2:             .362892,
      sup3:             .288888,
      sub1:             .15,
      sub2:             .247217,
      sup_drop:         .386108,
      sub_drop:         .05,
      delim1:          2.39,
      delim2:          1.0,
      axis_height:      .25,
      rule_thickness:   .06,
      big_op_spacing1:  .111111,
      big_op_spacing2:  .166666,
      big_op_spacing3:  .2,
      big_op_spacing4:  .6,
      big_op_spacing5:  .1,

      scriptspace:         .1,
      nulldelimiterspace:  .12,
      delimiterfactor:     901,
      delimitershortfall:   .3,

      min_rule_thickness:  1.25     // in pixels
    },

    NBSP: "\u00A0",

    rfuzz: 0         // adjustment to rule placements in roots
  });

  MathJax.Hub.Register.StartupHook("mml Jax Ready",function () {

    MML = MathJax.ElementJax.mml;

    MML.mbase.Augment({
      toHTML: function (span) {
	span = this.HTMLcreateSpan(span); if (this.type != "mrow") {span = this.HTMLhandleSize(span)}
	for (var i = 0, m = this.data.length; i < m; i++)
	  {if (this.data[i]) {this.data[i].toHTML(span)}}
	var stretchy = this.HTMLcomputeBBox(span);
	var h = span.bbox.h, d = span.bbox.d, stretched = false, bbox;
	for (i = 0, m = stretchy.length; i < m; i++) {
          bbox = stretchy[i].HTMLspanElement().bbox;
          if (stretchy[i].forceStretch || bbox.h !== h || bbox.d !== d)
            {stretchy[i].HTMLstretchV(span,h,d); stretched = true}
          else if (stretchy[i].needsBBox) stretched = true;
        }
	if (stretched) {this.HTMLcomputeBBox(span,true)}
        if (this.HTMLlineBreaks(span)) {span = this.HTMLmultiline(span)}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
        if (this.data.length === 1 && this.data[0]) {
          // copy skew data from accented character
          bbox = this.data[0].HTMLspanElement().bbox;
          if (bbox.skew) span.bbox.skew = bbox.skew;
        }
	return span;
      },
      HTMLlineBreaks: function () {return false},
      HTMLmultiline: function () {MML.mbase.HTMLautoloadFile("multiline")},
      HTMLcomputeBBox: function (span,full,i,m) {
	if (i == null) {i = 0}; if (m == null) {m = this.data.length}
	var BBOX = span.bbox = {exactW: true}, stretchy = [];
	while (i < m) {
	  var core = this.data[i]; if (!core) continue;
	  if (!full && core.HTMLcanStretch("Vertical")) {
            stretchy.push(core);
            core = (core.CoreMO()||core);
            stretchy[stretchy.length-1].needsBBox = (core !== this.data[i]);
          }
	  this.HTMLcombineBBoxes(core,BBOX); i++;
	}
	this.HTMLcleanBBox(BBOX);
	return stretchy;
      },
      HTMLcombineBBoxes: function (core,BBOX) {
	if (BBOX.w == null) {this.HTMLemptyBBox(BBOX)}
	var child = (core.bbox ? core : core.HTMLspanElement());
        if (!child || !child.bbox) return;
	var bbox = child.bbox;
	if (bbox.d > BBOX.d) {BBOX.d = bbox.d}
	if (bbox.h > BBOX.h) {BBOX.h = bbox.h}
	if (bbox.D != null && bbox.D > BBOX.D) {BBOX.D = bbox.D}
	if (bbox.H != null && bbox.H > BBOX.H) {BBOX.H = bbox.H}
	if (child.style.paddingLeft) {BBOX.w += HTMLCSS.unEm(child.style.paddingLeft)*(child.scale||1)}
	if (BBOX.w + bbox.lw < BBOX.lw) {BBOX.lw = BBOX.w + bbox.lw}
	if (BBOX.w + bbox.rw > BBOX.rw) {BBOX.rw = BBOX.w + bbox.rw}
	BBOX.w += bbox.w;
	if (child.style.paddingRight) {BBOX.w += HTMLCSS.unEm(child.style.paddingRight)*(child.scale||1)}
	if (bbox.width) {BBOX.width = bbox.width; BBOX.minWidth = bbox.minWidth}
        if (bbox.tw) {BBOX.tw = bbox.tw}
        if (bbox.ic) {BBOX.ic = bbox.ic} else {delete BBOX.ic}
        if (BBOX.exactW && !bbox.exactW) {BBOX.exactW = bbox.exactW}
      },
      HTMLemptyBBox: function (BBOX) {
	BBOX.h = BBOX.d = BBOX.H = BBOX.D = BBOX.rw = -HTMLCSS.BIGDIMEN;
	BBOX.w = 0; BBOX.lw = HTMLCSS.BIGDIMEN;
	return BBOX;
      },
      HTMLcleanBBox: function (BBOX) {
	if (BBOX.h === this.BIGDIMEN)
	  {BBOX.h = BBOX.d = BBOX.H = BBOX.D = BBOX.w = BBOX.rw = BBOX.lw = 0}
	if (BBOX.D <= BBOX.d) {delete BBOX.D}; if (BBOX.H <= BBOX.h) {delete BBOX.H}
      },
      HTMLzeroBBox: function () {return {h:0, d:0, w:0, lw: 0, rw:0}},
      HTMLcanStretch: function (direction) {
	if (this.isEmbellished()) {
          var core = this.Core();
          if (core && core !== this) {return core.HTMLcanStretch(direction)}
        }
	return false;
      },
      HTMLstretchH: function (box,W) {return this.HTMLspanElement()},
      HTMLstretchV: function (box,h,d) {return this.HTMLspanElement()},
      HTMLnotEmpty: function (data) {
	while (data) {
	  if ((data.type !== "mrow" && data.type !== "texatom") ||
	       data.data.length > 1) {return true}
	  data = data.data[0];
	}
	return false;
      },

      HTMLmeasureChild: function (n,box) {
	if (this.data[n]) {HTMLCSS.Measured(this.data[n].toHTML(box),box)}
	  else {box.bbox = this.HTMLzeroBBox()}
      },
      HTMLboxChild: function (n,box) {
        if (!this.data[n]) {this.SetData(n,MML.mrow())}
	return this.data[n].toHTML(box);
      },

      HTMLcreateSpan: function (span) {
	if (this.spanID) {
	  var SPAN = this.HTMLspanElement();
	  if (SPAN && (SPAN.parentNode === span || (SPAN.parentNode||{}).parentNode === span)) {
	    while (SPAN.firstChild) {SPAN.removeChild(SPAN.firstChild)}
	    SPAN.bbox = this.HTMLzeroBBox();
	    SPAN.scale = 1; SPAN.isMultChar = SPAN.HH = null;
	    SPAN.style.cssText = "";
	    return SPAN;
	  }
	}
	if (this.href) {span = HTMLCSS.addElement(span,"a",{href:this.href, isMathJax:true})}
	span = HTMLCSS.addElement(span,"span",{className: this.type, isMathJax:true});
	if (HTMLCSS.imgHeightBug) {span.style.display = "inline-block"}
	if (this["class"]) {span.className += " "+this["class"]}
	if (!this.spanID) {this.spanID = HTMLCSS.GetID()}
	span.id = (this.id || "MathJax-Span-"+this.spanID) + HTMLCSS.idPostfix;
	span.bbox = this.HTMLzeroBBox(); this.styles = {};
	if (this.style) {
	  span.style.cssText = this.style;
	  if (span.style.fontSize) {this.mathsize = span.style.fontSize; span.style.fontSize = ""}
          this.styles = {border:HTMLCSS.getBorders(span), padding:HTMLCSS.getPadding(span)}
          if (this.styles.border) {span.style.border = ""} // IE needs "0px none"?
          if (this.styles.padding) {span.style.padding = ""}
	}
	if (this.href) {span.parentNode.bbox = span.bbox}
        this.HTMLaddAttributes(span);
	return span;
      },
      HTMLaddAttributes: function(span) {
        //
        //  Copy RDFa, aria, and other tags from the MathML to the HTML-CSS
        //  output spans.  Don't copy those in the MML.nocopyAttributes list,
        //  the ignoreMMLattributes configuration list, or anything that
        //  already exists as a property of the span (e.g., no "onlick", etc.)
        //  If a name in the ignoreMMLattributes object is set to false, then
        //  the attribute WILL be copied.
        //
        if (this.attrNames) {
          var copy = this.attrNames, skip = MML.nocopyAttributes, ignore = HUB.config.ignoreMMLattributes;
          var defaults = (this.type === "mstyle" ? MML.math.prototype.defaults : this.defaults);
          for (var i = 0, m = copy.length; i < m; i++) {
            var id = copy[i];
            if (ignore[id] == false || (!skip[id] && !ignore[id] &&
                defaults[id] == null && typeof(span[id]) === "undefined")) {
              span.setAttribute(id,this.attr[id])
            }
          }
        }
      },
      HTMLspanElement: function () {
	if (!this.spanID) {return null}
	return document.getElementById((this.id||"MathJax-Span-"+this.spanID)+HTMLCSS.idPostfix);
      },

      HTMLhandleVariant: function (span,variant,text) {HTMLCSS.handleVariant(span,variant,text)},

      HTMLhandleSize: function (span) {
	if (!span.scale) {
	  span.scale = this.HTMLgetScale();
	  if (span.scale !== 1) {span.style.fontSize = HTMLCSS.Percent(span.scale)}
	}
	return span;
      },

      HTMLhandleDir: function (span) {
        var dir = this.Get("dir",true); // only get value if not the default
        if (dir) {span.dir = dir}
        return span;
      },

      HTMLhandleColor: function (span) {
	var values = this.getValues("mathcolor","color");
	if (this.mathbackground) {values.mathbackground = this.mathbackground}
	if (this.background) {values.background = this.background}
        if (this.style && span.style.backgroundColor) {
          values.mathbackground = span.style.backgroundColor;
          span.style.backgroundColor = "transparent";
        }
        var borders = (this.styles||{}).border, padding = (this.styles||{}).padding;
	if (values.color && !this.mathcolor) {values.mathcolor = values.color}
	if (values.background && !this.mathbackground) {values.mathbackground = values.background}
	if (values.mathcolor) {span.style.color = values.mathcolor}
	if ((values.mathbackground && values.mathbackground !== MML.COLOR.TRANSPARENT) || 
             borders || padding) {
	  var bbox = span.bbox, dd = (bbox.exact ? 0 : 1/HTMLCSS.em), lW = 0, rW = 0,
              lpad = span.style.paddingLeft, rpad = span.style.paddingRight;
	  if (this.isToken) {lW = bbox.lw; rW = bbox.rw - bbox.w}
	  if (lpad !== "") {lW += HTMLCSS.unEm(lpad)*(span.scale||1)}
	  if (rpad !== "") {rW -= HTMLCSS.unEm(rpad)*(span.scale||1)}
          var dw = (HTMLCSS.PaddingWidthBug || bbox.keepPadding || bbox.exactW ? 0 : rW - lW);
	  var W = Math.max(0,HTMLCSS.getW(span) + dw);
	  var H = bbox.h + bbox.d, D = -bbox.d, lp = 0, rp = 0;
	  if (W > 0) {W += 2*dd; lW -= dd}; if (H > 0) {H += 2*dd; D -= dd}; rW = -W-lW;
          if (borders) {
            rW -= borders.right; D -= borders.bottom; lp += borders.left; rp += borders.right;
            bbox.h += borders.top; bbox.d += borders.bottom;
            bbox.w += borders.left + borders.right;
            bbox.lw -= borders.left; bbox.rw += borders.right;
          }
          if (padding) {
            H += padding.top + padding.bottom; W += padding.left + padding.right;
            rW -= padding.right; D -= padding.bottom; lp += padding.left; rp += padding.right;
            bbox.h += padding.top; bbox.d += padding.bottom;
            bbox.w += padding.left + padding.right;
            bbox.lw -= padding.left; bbox.rw += padding.right;
          }
          if (rp) {span.style.paddingRight = HTMLCSS.Em(rp)}
	  var frame = HTMLCSS.Element("span",{
            id:"MathJax-Color-"+this.spanID+HTMLCSS.idPostfix, isMathJax: true,
	    style:{display:"inline-block", backgroundColor:values.mathbackground,
		   width: HTMLCSS.Em(W), height:HTMLCSS.Em(H), verticalAlign: HTMLCSS.Em(D),
		   marginLeft: HTMLCSS.Em(lW), marginRight: HTMLCSS.Em(rW)}
	  });
          HTMLCSS.setBorders(frame,borders);
          if (bbox.width) {frame.style.width = bbox.width; frame.style.marginRight = "-"+bbox.width}
	  if (HTMLCSS.msieInlineBlockAlignBug) {
            // FIXME:  handle variable width background
	    frame.style.position = "relative"; frame.style.width = frame.style.height = 0;
	    frame.style.verticalAlign = frame.style.marginLeft = frame.style.marginRight = "";
            frame.style.border = frame.style.padding = "";
            if (borders && HTMLCSS.msieBorderWidthBug)
              {H += borders.top + borders.bottom; W += borders.left + borders.right}
            frame.style.width = HTMLCSS.Em(lp+dd);
	    HTMLCSS.placeBox(HTMLCSS.addElement(frame,"span",{
	      noAdjust: true, isMathJax: true,
	      style: {display:"inline-block", position:"absolute", overflow:"hidden",
		      background:(values.mathbackground||"transparent"), 
                      width: HTMLCSS.Em(W), height: HTMLCSS.Em(H)}
	    }),lW,bbox.h+dd);
            HTMLCSS.setBorders(frame.firstChild,borders);
	  }
	  span.parentNode.insertBefore(frame,span);
          if (HTMLCSS.msieColorPositionBug) {span.style.position = "relative"}
	  return frame;
	}
	return null;
      },
      HTMLremoveColor: function () {
	var color = document.getElementById("MathJax-Color-"+this.spanID+HTMLCSS.idPostfix);
	if (color) {color.parentNode.removeChild(color)}
      },

      HTMLhandleSpace: function (span) {
	if (this.useMMLspacing) {
	  if (this.type !== "mo") return;
	  var values = this.getValues("scriptlevel","lspace","rspace");
          if (values.scriptlevel <= 0 || this.hasValue("lspace") || this.hasValue("rspace")) {
            var mu = this.HTMLgetMu(span);
	    values.lspace = Math.max(0,HTMLCSS.length2em(values.lspace,mu));
	    values.rspace = Math.max(0,HTMLCSS.length2em(values.rspace,mu));
	    var core = this, parent = this.Parent();
	    while (parent && parent.isEmbellished() && parent.Core() === core)
	      {core = parent; parent = parent.Parent(); span = core.HTMLspanElement()}
	    if (values.lspace) {span.style.paddingLeft =  HTMLCSS.Em(values.lspace)}
	    if (values.rspace) {span.style.paddingRight = HTMLCSS.Em(values.rspace)}
	  }
	} else {
	  var space = this.texSpacing();
	  if (space !== "") {
            this.HTMLgetScale();
	    space = HTMLCSS.length2em(space,this.scale)/(span.scale||1)*this.mscale;
	    if (span.style.paddingLeft) {space += HTMLCSS.unEm(span.style.paddingLeft)}
	    span.style.paddingLeft = HTMLCSS.Em(space);
	  }
	}
      },

      HTMLgetScale: function () {
        if (this.scale) {return this.scale * this.mscale}
	var scale = 1, values = this.getValues("scriptlevel","fontsize");
        values.mathsize = (this.isToken ? this : this.Parent()).Get("mathsize");
	if (this.style) {
	  var span = this.HTMLspanElement();
	  if (span.style.fontSize != "") {values.fontsize = span.style.fontSize}
	}
	if (values.fontsize && !this.mathsize) {values.mathsize = values.fontsize}
	if (values.scriptlevel !== 0) {
	  if (values.scriptlevel > 2) {values.scriptlevel = 2}
	  scale = Math.pow(this.Get("scriptsizemultiplier"),values.scriptlevel);
	  values.scriptminsize = HTMLCSS.length2em(this.Get("scriptminsize"));
	  if (scale < values.scriptminsize) {scale = values.scriptminsize}
	}
        this.scale = scale; this.mscale = HTMLCSS.length2em(values.mathsize);
	return scale * this.mscale;
      },
      HTMLgetMu: function (span) {
	var mu = 1, values = this.getValues("scriptlevel","scriptsizemultiplier");
        if (span.scale && span.scale !== 1) {mu = 1/span.scale}
	if (values.scriptlevel !== 0) {
	  if (values.scriptlevel > 2) {values.scriptlevel = 2}
	  mu = Math.sqrt(Math.pow(values.scriptsizemultiplier,values.scriptlevel));
	}
	return mu;
      },

      HTMLgetVariant: function () {
	var values = this.getValues("mathvariant","fontfamily","fontweight","fontstyle");
        values.hasVariant = this.Get("mathvariant",true);  // null if not explicitly specified
        if (!values.hasVariant) {
          values.family = values.fontfamily;
          values.weight = values.fontweight;
          values.style  = values.fontstyle;
        }
	if (this.style) {
          var span = this.HTMLspanElement();
	  if (!values.family && span.style.fontFamily) {values.family = span.style.fontFamily}
	  if (!values.weight && span.style.fontWeight) {values.weight = span.style.fontWeight}
	  if (!values.style  && span.style.fontStyle)  {values.style  = span.style.fontStyle}
	}
        if (values.weight && values.weight.match(/^\d+$/))
            {values.weight = (parseInt(values.weight) > 600 ? "bold" : "normal")}
	var variant = values.mathvariant; if (this.variantForm) {variant = "-"+HTMLCSS.fontInUse+"-variant"}
	if (values.family && !values.hasVariant) {
	  if (!values.weight && values.mathvariant.match(/bold/)) {values.weight = "bold"}
	  if (!values.style && values.mathvariant.match(/italic/)) {values.style = "italic"}
	  return {FONTS:[], fonts:[], noRemap:true,
		  defaultFont: {family:values.family, style:values.style, weight:values.weight}};
	}
        if (values.weight === "bold") {
          variant = {
            normal:MML.VARIANT.BOLD, italic:MML.VARIANT.BOLDITALIC,
            fraktur:MML.VARIANT.BOLDFRAKTUR, script:MML.VARIANT.BOLDSCRIPT,
            "sans-serif":MML.VARIANT.BOLDSANSSERIF,
            "sans-serif-italic":MML.VARIANT.SANSSERIFBOLDITALIC
          }[variant]||variant;
        } else if (values.weight === "normal") {
          variant = {
            bold:MML.VARIANT.normal, "bold-italic":MML.VARIANT.ITALIC,
            "bold-fraktur":MML.VARIANT.FRAKTUR, "bold-script":MML.VARIANT.SCRIPT,
            "bold-sans-serif":MML.VARIANT.SANSSERIF,
            "sans-serif-bold-italic":MML.VARIANT.SANSSERIFITALIC
          }[variant]||variant;
        }
        if (values.style === "italic") {
          variant = {
            normal:MML.VARIANT.ITALIC, bold:MML.VARIANT.BOLDITALIC,
            "sans-serif":MML.VARIANT.SANSSERIFITALIC,
            "bold-sans-serif":MML.VARIANT.SANSSERIFBOLDITALIC
          }[variant]||variant;
        } else if (values.style === "normal") {
          variant = {
            italic:MML.VARIANT.NORMAL, "bold-italic":MML.VARIANT.BOLD,
            "sans-serif-italic":MML.VARIANT.SANSSERIF,
            "sans-serif-bold-italic":MML.VARIANT.BOLDSANSSERIF
          }[variant]||variant;
        }
        if (!(variant in HTMLCSS.FONTDATA.VARIANT)) {
          // If the mathvariant value is invalid or not supported by this
          // font, fallback to normal. See issue 363.
          variant = "normal";
        }
        return HTMLCSS.FONTDATA.VARIANT[variant];
      },
      
      HTMLdrawBBox: function (span) {
        var bbox = span.bbox;
        var box = HTMLCSS.Element("span",
          {style:{"font-size":span.style.fontSize, display:"inline-block",
                  opacity:.25,"margin-left":HTMLCSS.Em(-bbox.w)}},[
          ["span",{style:{
            height:HTMLCSS.Em(bbox.h),width:HTMLCSS.Em(bbox.w),
            "background-color":"red", display:"inline-block"
          }}],
          ["span",{style:{
            height:HTMLCSS.Em(bbox.d),width:HTMLCSS.Em(bbox.w),
            "margin-left":HTMLCSS.Em(-bbox.w),"vertical-align":HTMLCSS.Em(-bbox.d),
            "background-color":"green", display:"inline-block"
          }}]
        ]);
        if (span.nextSibling) {span.parentNode.insertBefore(box,span.nextSibling)}
          else {span.parentNode.appendChild(box)}
      }

    },{
      HTMLautoload: function () {
	var file = HTMLCSS.autoloadDir+"/"+this.type+".js";
	HUB.RestartAfter(AJAX.Require(file));
      },
      HTMLautoloadFile: function (name) {
	var file = HTMLCSS.autoloadDir+"/"+name+".js";
	HUB.RestartAfter(AJAX.Require(file));
      },

      HTMLstretchH: function (box,w) {
	this.HTMLremoveColor();
	return this.toHTML(box,w);
      },

      HTMLstretchV: function (box,h,d) {
	this.HTMLremoveColor();
	return this.toHTML(box,h,d);
      }
    });

    MML.chars.Augment({
      toHTML: function (span,variant,remap,chars) {
        var text = this.data.join("").replace(/[\u2061-\u2064]/g,""); // remove invisibles
        if (remap) {text = remap(text,chars)}
        if (variant.fontInherit) {
          var scale = Math.floor(HTMLCSS.config.scale/HTMLCSS.scale+.5) + "%";
          HTMLCSS.addElement(span,"span",{style:{"font-size":scale}},[text]);
          if (variant.bold)   {span.lastChild.style.fontWeight = "bold"}
          if (variant.italic) {span.lastChild.style.fontStyle = "italic"}
          span.bbox = null;
          var HD = HTMLCSS.getHD(span), W = HTMLCSS.getW(span);
          span.bbox = {h:HD.h, d:HD.d, w:W, lw:0, rw:W, exactW: true};
        } else {
          this.HTMLhandleVariant(span,variant,text);
        }
      }
    });
    MML.entity.Augment({
      toHTML: function (span,variant,remap,chars) {
        var text = this.toString().replace(/[\u2061-\u2064]/g,""); // remove invisibles
        if (remap) {text = remap(text,chars)}
        if (variant.fontInherit) {
          var scale = Math.floor(HTMLCSS.config.scale/HTMLCSS.scale+.5) + "%";
          HTMLCSS.addElement(span,"span",{style:{"font-size":scale}},[text]);
          if (variant.bold)   {span.lastChild.style.fontWeight = "bold"}
          if (variant.italic) {span.lastChild.style.fontStyle = "italic"}
          delete span.bbox;
          var HD = HTMLCSS.getHD(span), W = HTMLCSS.getW(span);
          span.bbox = {h:HD.h, d:HD.d, w:W, lw:0, rw:W, exactW: true};
        } else {
          this.HTMLhandleVariant(span,variant,text);
        }
      }
    });

    MML.mi.Augment({
      toHTML: function (span) {
	span = this.HTMLhandleSize(this.HTMLcreateSpan(span)); span.bbox = null;
	var variant = this.HTMLgetVariant();
	for (var i = 0, m = this.data.length; i < m; i++)
	  {if (this.data[i]) {this.data[i].toHTML(span,variant)}}
	if (!span.bbox) {span.bbox = this.HTMLzeroBBox()}
        var text = this.data.join(""), bbox = span.bbox;
	if (bbox.skew && text.length !== 1) {delete bbox.skew}
        if (bbox.rw > bbox.w && text.length === 1 && !variant.noIC) {
          bbox.ic = bbox.rw - bbox.w;
          HTMLCSS.createBlank(span,bbox.ic/this.mscale);
          bbox.w = bbox.rw;
        }
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
        this.HTMLhandleDir(span);
	return span;
      }
    });

    MML.mn.Augment({
      HTMLremapMinus: function (text) {return text.replace(/^-/,"\u2212")},
      toHTML: function (span) {
	span = this.HTMLhandleSize(this.HTMLcreateSpan(span)); span.bbox = null;
	var variant = this.HTMLgetVariant();
        var remap = this.HTMLremapMinus;
	for (var i = 0, m = this.data.length; i < m; i++) {
          if (this.data[i]) {
            this.data[i].toHTML(span,variant,remap);
            remap = null;
          }
        }
	if (!span.bbox) {span.bbox = this.HTMLzeroBBox()}
	if (this.data.join("").length !== 1) {delete span.bbox.skew}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
        this.HTMLhandleDir(span);
	return span;
      }
    });

    MML.mo.Augment({
      toHTML: function (span) {
	span = this.HTMLhandleSize(this.HTMLcreateSpan(span));
	if (this.data.length == 0) {return span} else {span.bbox = null}
	var text = this.data.join("");
        //
        //  Get the variant, and check for operator size
        //
	var variant = this.HTMLgetVariant();
	var values = this.getValues("largeop","displaystyle");
	if (values.largeop)
	  {variant = HTMLCSS.FONTDATA.VARIANT[values.displaystyle ? "-largeOp" : "-smallOp"]}
        //
        //  Get character translation for superscript and accents
        //
        var parent = this.CoreParent(),
            isScript = (parent && parent.isa(MML.msubsup) && this !== parent.data[parent.base]),
            mapchars = (isScript?this.remapChars:null);
        if (text.length === 1 && parent && parent.isa(MML.munderover) &&
            this.CoreText(parent.data[parent.base]).length === 1) {
          var over = parent.data[parent.over], under = parent.data[parent.under];
          if (over && this === over.CoreMO() && parent.Get("accent")) {mapchars = HTMLCSS.FONTDATA.REMAPACCENT}
          else if (under && this === under.CoreMO() && parent.Get("accentunder")) {mapchars = HTMLCSS.FONTDATA.REMAPACCENTUNDER}
        }
        //
        //  STIX and TeX fonts need quotes from variant font
        //
        if (isScript && text.match(/['`"\u00B4\u2032-\u2037\u2057]/))
          {variant = HTMLCSS.FONTDATA.VARIANT["-"+HTMLCSS.fontInUse+"-variant"]}
        //
        //  Typeset contents
        //
	for (var i = 0, m = this.data.length; i < m; i++)
          {if (this.data[i]) {this.data[i].toHTML(span,variant,this.remap,mapchars)}}
	if (!span.bbox) {span.bbox = this.HTMLzeroBBox()}
	if (text.length !== 1) {delete span.bbox.skew}

        //
        //  Handle combining character bugs
        //
	if (HTMLCSS.AccentBug && span.bbox.w === 0 && text.length === 1 && span.firstChild) {
          //
          //  adding a non-breaking space and removing that width
          //
          span.firstChild.nodeValue += HTMLCSS.NBSP;
          HTMLCSS.createSpace(span,0,0,-span.offsetWidth/HTMLCSS.em);
	}
        //
        //  Handle large operator centering
        //
	if (values.largeop) {
          var a = HTMLCSS.TeX.axis_height * this.scale * this.mscale
	  var p = (span.bbox.h - span.bbox.d)/2 - a;
	  if (HTMLCSS.safariVerticalAlignBug && span.lastChild.nodeName === "IMG") {
	    span.lastChild.style.verticalAlign =
	      HTMLCSS.Em(HTMLCSS.unEm(span.lastChild.style.verticalAlign||0)/HTMLCSS.em-p/span.scale);
	  } else if (HTMLCSS.konquerorVerticalAlignBug && span.lastChild.nodeName === "IMG") {
	    span.style.position = "relative";
	    span.lastChild.style.position="relative";
	    span.lastChild.style.top = HTMLCSS.Em(p/span.scale);
	  } else {
	    span.style.verticalAlign = HTMLCSS.Em(-p/span.scale);
	  }
	  span.bbox.h -= p; span.bbox.d += p;
	  if (span.bbox.rw > span.bbox.w) {
	    span.bbox.ic = span.bbox.rw-span.bbox.w;
	    HTMLCSS.createBlank(span,span.bbox.ic/this.mscale);
	    span.bbox.w = span.bbox.rw;
	  }
	}
        //
        //  Finish up
        //
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
        this.HTMLhandleDir(span);
	return span;
      },
      HTMLcanStretch: function (direction) {
	if (!this.Get("stretchy")) {return false}
	var c = this.data.join("");
	if (c.length > 1) {return false}
        var parent = this.CoreParent();
        if (parent && parent.isa(MML.munderover) && 
            this.CoreText(parent.data[parent.base]).length === 1) {
          var over = parent.data[parent.over], under = parent.data[parent.under];
          if (over && this === over.CoreMO() && parent.Get("accent")) {c = HTMLCSS.FONTDATA.REMAPACCENT[c]||c}
          else if (under && this === under.CoreMO() && parent.Get("accentunder")) {c = HTMLCSS.FONTDATA.REMAPACCENTUNDER[c]||c}
        }
	c = HTMLCSS.FONTDATA.DELIMITERS[c.charCodeAt(0)];
        var stretch = (c && c.dir === direction.substr(0,1));
        this.forceStretch = (stretch && (this.Get("minsize",true) || this.Get("maxsize",true)));
	return stretch;
      },
      HTMLstretchV: function (box,h,d) {
	this.HTMLremoveColor();
	var values = this.getValues("symmetric","maxsize","minsize");
	var span = this.HTMLspanElement(), mu = this.HTMLgetMu(span), H;
	var scale = this.HTMLgetScale(), axis = HTMLCSS.TeX.axis_height * scale;
	if (values.symmetric) {H = 2*Math.max(h-axis,d+axis)} else {H = h + d}
	values.maxsize = HTMLCSS.length2em(values.maxsize,mu,span.bbox.h+span.bbox.d);
	values.minsize = HTMLCSS.length2em(values.minsize,mu,span.bbox.h+span.bbox.d);
	H = Math.max(values.minsize,Math.min(values.maxsize,H));
        if (H != values.minsize)
          {H = [Math.max(H*HTMLCSS.TeX.delimiterfactor/1000,H-HTMLCSS.TeX.delimitershortfall),H]}
	span = this.HTMLcreateSpan(box); // clear contents and attributes
	HTMLCSS.createDelimiter(span,this.data.join("").charCodeAt(0),H,scale);
	if (values.symmetric) {H = (span.bbox.h + span.bbox.d)/2 + axis}
	  else {H = (span.bbox.h + span.bbox.d) * h/(h + d)}
	HTMLCSS.positionDelimiter(span,H);
	this.HTMLhandleSpace(span); // add in lspace/rspace, if any
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchH: function (box,W) {
	this.HTMLremoveColor();
	var values = this.getValues("maxsize","minsize","mathvariant","fontweight");
        // FIXME:  should take style="font-weight:bold" into account as well
	if ((values.fontweight === "bold" || parseInt(values.fontweight) >= 600) &&
            !this.Get("mathvariant",true)) {values.mathvariant = MML.VARIANT.BOLD}
	var span = this.HTMLspanElement(), mu = this.HTMLgetMu(span), scale = span.scale;
	values.maxsize = HTMLCSS.length2em(values.maxsize,mu,span.bbox.w);
	values.minsize = HTMLCSS.length2em(values.minsize,mu,span.bbox.w);
	W = Math.max(values.minsize,Math.min(values.maxsize,W));
	span = this.HTMLcreateSpan(box); // clear contents and attributes
	HTMLCSS.createDelimiter(span,this.data.join("").charCodeAt(0),W,scale,values.mathvariant);
	this.HTMLhandleSpace(span); // add in lspace/rspace, if any
	this.HTMLhandleColor(span);
	return span;
      }
    });

    MML.mtext.Augment({
      toHTML: function (span) {
        span = this.HTMLhandleSize(this.HTMLcreateSpan(span)); 
        var variant = this.HTMLgetVariant();
        //  Avoid setting the font style for error text or if mtextFontInherit is set
        if (HTMLCSS.config.mtextFontInherit || this.Parent().type === "merror") {
          var vname = this.Get("mathvariant");
          if (vname === "monospace") {span.className += " MJX-monospace"}
            else if (vname.match(/sans-serif/)) {span.className += " MJX-sans-serif"}
          variant = {bold:variant.bold, italic:variant.italic, fontInherit: true};
        }
        for (var i = 0, m = this.data.length; i < m; i++)
          {if (this.data[i]) {this.data[i].toHTML(span,variant)}}
        if (!span.bbox) {span.bbox = this.HTMLzeroBBox()}
        if (this.data.join("").length !== 1) {delete span.bbox.skew}
        this.HTMLhandleSpace(span);
        this.HTMLhandleColor(span);
        this.HTMLhandleDir(span);
        return span;
      }
    });
    MML.merror.Augment({
      toHTML: function (span) {
        //
        //  Width doesn't include padding and border, so use an extra inline block
        //  element to capture it.
        //  
        var SPAN = MathJax.HTML.addElement(span,"span",{style:{display:"inline-block"}});
        span = this.SUPER(arguments).toHTML.call(this,SPAN);
        var HD = HTMLCSS.getHD(SPAN), W = HTMLCSS.getW(SPAN);
        SPAN.bbox = {h:HD.h, d:HD.d, w:W, lw:0, rw:W, exactW: true};
        SPAN.id = span.id; span.id = null;
        return SPAN;
      }
    });

    MML.ms.Augment({toHTML: MML.mbase.HTMLautoload});

    MML.mglyph.Augment({toHTML: MML.mbase.HTMLautoload});

    MML.mspace.Augment({
      toHTML: function (span) {
	span = this.HTMLcreateSpan(span);
	var values = this.getValues("height","depth","width");
        var mu = this.HTMLgetMu(span); this.HTMLgetScale();
	values.mathbackground = this.mathbackground;
	if (this.background && !this.mathbackground) {values.mathbackground = this.background}
	var h = HTMLCSS.length2em(values.height,mu) * this.mscale,
            d = HTMLCSS.length2em(values.depth,mu) * this.mscale,
	    w = HTMLCSS.length2em(values.width,mu) * this.mscale;
       HTMLCSS.createSpace(span,h,d,w,values.mathbackground,true);
       return span;
      }
    });

    MML.mphantom.Augment({
      toHTML: function (span,HW,D) {
	span = this.HTMLcreateSpan(span);
	if (this.data[0] != null) {
	  var box = this.data[0].toHTML(span);
	  if (D != null) {HTMLCSS.Remeasured(this.data[0].HTMLstretchV(span,HW,D),span)}
	  else if (HW != null) {HTMLCSS.Remeasured(this.data[0].HTMLstretchH(span,HW),span)}
          else {box = HTMLCSS.Measured(box,span)}
	  span.bbox = {w: box.bbox.w, h: box.bbox.h, d: box.bbox.d, lw: 0, rw: 0, exactW: true};
	  for (var i = 0, m = span.childNodes.length; i < m; i++)
	    {span.childNodes[i].style.visibility = "hidden"}
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });

    MML.mpadded.Augment({
      toHTML: function (span,HW,D) {
	span = this.HTMLcreateSpan(span);
	if (this.data[0] != null) {
	  var stack = HTMLCSS.createStack(span,true);
	  var box = HTMLCSS.createBox(stack);
          var child = this.data[0].toHTML(box);
	  if (D != null) {HTMLCSS.Remeasured(this.data[0].HTMLstretchV(box,HW,D),box)}
	  else if (HW != null) {HTMLCSS.Remeasured(this.data[0].HTMLstretchH(box,HW),box)}
          else {HTMLCSS.Measured(child,box)}
	  var values = this.getValues("height","depth","width","lspace","voffset"),
              x = 0, y = 0, mu = this.HTMLgetMu(span);
          this.HTMLgetScale();
	  if (values.lspace)  {x = this.HTMLlength2em(box,values.lspace,mu)}
	  if (values.voffset) {y = this.HTMLlength2em(box,values.voffset,mu)}
	  HTMLCSS.placeBox(box,x,y); x /= this.mscale; y /= this.mscale;
	  span.bbox = {
	    h: box.bbox.h, d: box.bbox.d, w: box.bbox.w, exactW: true,
            lw: box.bbox.lw+x, rw: box.bbox.rw+x,
            H: Math.max((box.bbox.H == null ? -HTMLCSS.BIGDIMEN : box.bbox.H+y),box.bbox.h+y),
            D: Math.max((box.bbox.D == null ? -HTMLCSS.BIGDIMEN : box.bbox.D-y),box.bbox.d-y)
	  };
	  if (values.height !== "") {span.bbox.h = this.HTMLlength2em(box,values.height,mu,"h",0)}
	  if (values.depth  !== "") {span.bbox.d = this.HTMLlength2em(box,values.depth,mu,"d",0)}
	  if (values.width  !== "") {span.bbox.w = this.HTMLlength2em(box,values.width,mu,"w",0)}
	  if (span.bbox.H <= span.bbox.h) {delete span.bbox.H}
	  if (span.bbox.D <= span.bbox.d) {delete span.bbox.D}
          var dimen = /^\s*(\d+(\.\d*)?|\.\d+)\s*(pt|em|ex|mu|px|pc|in|mm|cm)\s*$/
          span.bbox.exact = !!((this.data[0] && this.data[0].data.length == 0) ||
             dimen.exec(values.height) || dimen.exec(values.width) || dimen.exec(values.depth));
	  HTMLCSS.setStackWidth(stack,span.bbox.w);
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLlength2em: function (span,length,mu,d,m) {
	if (m == null) {m = -HTMLCSS.BIGDIMEN}
	var match = String(length).match(/width|height|depth/);
	var size = (match ? span.bbox[match[0].charAt(0)] : (d ? span.bbox[d] : 0));
	var v = HTMLCSS.length2em(length,mu,size/this.mscale) * this.mscale;
	if (d && String(length).match(/^\s*[-+]/))
	  {return Math.max(m,span.bbox[d]+v)} else {return v}
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });

    MML.mrow.Augment({
      HTMLlineBreaks: function (span) {
        if (!this.parent.linebreakContainer) {return false}
        return (HTMLCSS.config.linebreaks.automatic &&
                span.bbox.w > HTMLCSS.linebreakWidth) || this.hasNewline();
      },
      HTMLstretchH: function (box,w) {
	this.HTMLremoveColor();
	var span = this.HTMLspanElement();
	this.data[this.core].HTMLstretchH(span,w);
	this.HTMLcomputeBBox(span,true);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchV: function (box,h,d) {
	this.HTMLremoveColor();
	var span = this.HTMLspanElement();
	this.data[this.core].HTMLstretchV(span,h,d);
	this.HTMLcomputeBBox(span,true);
	this.HTMLhandleColor(span);
	return span;
      }
    });

    MML.mstyle.Augment({
      toHTML: function (span,HW,D) {
	span = this.HTMLcreateSpan(span);
	if (this.data[0] != null) {
	  var SPAN = this.data[0].toHTML(span);
	  if (D != null) {this.data[0].HTMLstretchV(span,HW,D)}
	  else if (HW != null) {this.data[0].HTMLstretchH(span,HW)}
          span.bbox = SPAN.bbox;
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });

    MML.mfrac.Augment({
      toHTML: function (span) {
	span = this.HTMLcreateSpan(span);
	var frac = HTMLCSS.createStack(span);
	var num = HTMLCSS.createBox(frac), den = HTMLCSS.createBox(frac);
        HTMLCSS.MeasureSpans([this.HTMLboxChild(0,num),this.HTMLboxChild(1,den)]);
        var values = this.getValues("displaystyle","linethickness","numalign","denomalign","bevelled");
	var scale = this.HTMLgetScale(), isDisplay = values.displaystyle;
	var a = HTMLCSS.TeX.axis_height * scale;
	if (values.bevelled) {
	  var delta = (isDisplay ? .4 : .15);
	  var H = Math.max(num.bbox.h+num.bbox.d,den.bbox.h+den.bbox.d)+2*delta;
	  var bevel = HTMLCSS.createBox(frac);
	  HTMLCSS.createDelimiter(bevel,0x2F,H);
	  HTMLCSS.placeBox(num,0,(num.bbox.d-num.bbox.h)/2+a+delta);
	  HTMLCSS.placeBox(bevel,num.bbox.w-delta/2,(bevel.bbox.d-bevel.bbox.h)/2+a);
	  HTMLCSS.placeBox(den,num.bbox.w+bevel.bbox.w-delta,(den.bbox.d-den.bbox.h)/2+a-delta);
	} else {
	  var W = Math.max(num.bbox.w,den.bbox.w);
	  var t = HTMLCSS.thickness2em(values.linethickness,this.scale)*this.mscale, p,q, u,v;
	  var mt = HTMLCSS.TeX.min_rule_thickness/this.em;
	  if (isDisplay) {u = HTMLCSS.TeX.num1; v = HTMLCSS.TeX.denom1}
	    else {u = (t === 0 ? HTMLCSS.TeX.num3 : HTMLCSS.TeX.num2); v = HTMLCSS.TeX.denom2}
	  u *= scale; v *= scale;
	  if (t === 0) {// \atop
	    p = Math.max((isDisplay ? 7 : 3) * HTMLCSS.TeX.rule_thickness, 2*mt); // force to at least 2 px
	    q = (u - num.bbox.d) - (den.bbox.h - v);
	    if (q < p) {u += (p - q)/2; v += (p - q)/2}
	  } else {// \over
	    p = Math.max((isDisplay ? 2 : 0) * mt + t, t/2 + 1.5*mt);  // force to be at least 1.5px
	    q = (u - num.bbox.d) - (a + t/2); if (q < p) {u += p - q}
	    q = (a - t/2) - (den.bbox.h - v); if (q < p) {v += p - q}
	    var rule = HTMLCSS.createBox(frac);
	    HTMLCSS.createRule(rule,t,0,W+2*t);
	    HTMLCSS.placeBox(rule,0,a-t/2);
	  }
	  HTMLCSS.alignBox(num,values.numalign,u,0,true);
	  HTMLCSS.alignBox(den,values.denomalign,-v,0,true);
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLcanStretch: function (direction) {return false},
      HTMLhandleSpace: function (span) {
	if (!this.texWithDelims) {
          //
          //  Add nulldelimiterspace around the fraction
          //  (TeXBook pg 150 and Appendix G rule 15e)
          //
          var space = HTMLCSS.TeX.nulldelimiterspace * this.mscale;
          var style = span.childNodes[HTMLCSS.msiePaddingWidthBug ? 1 : 0].style;
          style.marginLeft = style.marginRight = HTMLCSS.Em(space);
          span.bbox.w += 2*space; span.bbox.rw += 2*space;
	}
        this.SUPER(arguments).HTMLhandleSpace.call(this,span);
      }
    });

    MML.msqrt.Augment({
      toHTML: function (span) {
	span = this.HTMLcreateSpan(span);
	var sqrt = HTMLCSS.createStack(span);
	var base = HTMLCSS.createBox(sqrt),
	    rule = HTMLCSS.createBox(sqrt),
	    surd = HTMLCSS.createBox(sqrt);
	var scale = this.HTMLgetScale();
	var t = HTMLCSS.TeX.rule_thickness * scale, p,q, H, W;
	if (this.Get("displaystyle")) {p = HTMLCSS.TeX.x_height * scale} else {p = t}
	q = Math.max(t + p/4,1.5*HTMLCSS.TeX.min_rule_thickness/this.em); // force to be at least 1px
	var BASE = this.HTMLboxChild(0,base);
	H = BASE.bbox.h + BASE.bbox.d + q + t;
        HTMLCSS.createDelimiter(surd,0x221A,H,scale);
	HTMLCSS.MeasureSpans([BASE,surd]);
	W = BASE.bbox.w;
	var x = 0;
	if (surd.isMultiChar || (HTMLCSS.AdjustSurd && HTMLCSS.imgFonts)) {surd.bbox.w *= .95}
	if (surd.bbox.h + surd.bbox.d > H) {q = ((surd.bbox.h+surd.bbox.d) - (H-t))/2}
	var ruleC = HTMLCSS.FONTDATA.DELIMITERS[HTMLCSS.FONTDATA.RULECHAR];
	if (!ruleC || W < (ruleC.HW[0]||[0])[0]*scale || scale < .75) {
	  HTMLCSS.createRule(rule,0,t,W); rule.bbox.h = -t;
	} else {
	  HTMLCSS.createDelimiter(rule,HTMLCSS.FONTDATA.RULECHAR,W,scale);
	}
	H = BASE.bbox.h + q + t;
        q = H*HTMLCSS.rfuzz; if (surd.isMultiChar) {q = HTMLCSS.rfuzz}
	x = this.HTMLaddRoot(sqrt,surd,x,surd.bbox.h+surd.bbox.d-H,scale);
	HTMLCSS.placeBox(surd,x,H-surd.bbox.h);
	HTMLCSS.placeBox(rule,x+surd.bbox.w,H-rule.bbox.h+q);
	HTMLCSS.placeBox(base,x+surd.bbox.w,0);
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLaddRoot: function (sqrt,surd,x,d,scale) {return x}
    });

    MML.mroot.Augment({
      toHTML: MML.msqrt.prototype.toHTML,
      HTMLaddRoot: function (sqrt,surd,x,d,scale) {
	var box = HTMLCSS.createBox(sqrt);
	if (this.data[1]) {
	  var root = this.data[1].toHTML(box);
	  root.style.paddingRight = root.style.paddingLeft = ""; // remove extra padding, if any
	  HTMLCSS.Measured(root,box);
	} else {box.bbox = this.HTMLzeroBBox()}
	var h = this.HTMLrootHeight(surd.bbox.h+surd.bbox.d,scale,box)-d;
	var w = Math.min(box.bbox.w,box.bbox.rw); // remove extra right-hand padding, if any
	x = Math.max(w,surd.offset);
	HTMLCSS.placeBox(box,x-w,h);
	return x - surd.offset;
      },
      HTMLrootHeight: function (d,scale,root) {
	return .45*(d-.9*scale)+.6*scale + Math.max(0,root.bbox.d-.075);
      }
    });

    MML.mfenced.Augment({
      toHTML: function (span) {
	span = this.HTMLcreateSpan(span);
	if (this.data.open) {this.data.open.toHTML(span)}
	if (this.data[0] != null) {this.data[0].toHTML(span)}
	for (var i = 1, m = this.data.length; i < m; i++) {
	  if (this.data[i]) {
	    if (this.data["sep"+i]) {this.data["sep"+i].toHTML(span)}
	    this.data[i].toHTML(span);
	  }
	}
	if (this.data.close) {this.data.close.toHTML(span)}
	var stretchy = this.HTMLcomputeBBox(span);
	var h = span.bbox.h, d = span.bbox.d;
	for (i = 0, m = stretchy.length; i < m; i++) {stretchy[i].HTMLstretchV(span,h,d)}
	if (stretchy.length) {this.HTMLcomputeBBox(span,true)}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLcomputeBBox: function (span,full) {
	var BBOX = span.bbox = {}, stretchy = [];
	this.HTMLcheckStretchy(this.data.open,BBOX,stretchy,full);
	this.HTMLcheckStretchy(this.data[0],BBOX,stretchy,full);
	for (var i = 1, m = this.data.length; i < m; i++) {
	  if (this.data[i]) {
	    this.HTMLcheckStretchy(this.data["sep"+i],BBOX,stretchy,full);
	    this.HTMLcheckStretchy(this.data[i],BBOX,stretchy,full);
	  }
	}
	this.HTMLcheckStretchy(this.data.close,BBOX,stretchy,full);
	this.HTMLcleanBBox(BBOX);
	return stretchy;
      },
      HTMLcheckStretchy: function (core,BBOX,stretchy,full) {
	if (core) {
	  if (!full && core.HTMLcanStretch("Vertical"))
	    {stretchy.push(core); core = (core.CoreMO()||core)}
	  this.HTMLcombineBBoxes(core,BBOX);
	}
      }
    });

    MML.menclose.Augment({toHTML: MML.mbase.HTMLautoload});
    MML.maction.Augment({toHTML: MML.mbase.HTMLautoload});

    MML.semantics.Augment({
      toHTML: function (span,HW,D) {
	span = this.HTMLcreateSpan(span);
	if (this.data[0] != null) {
	  var SPAN = this.data[0].toHTML(span);
	  if (D != null) {this.data[0].HTMLstretchV(span,HW,D)}
	  else if (HW != null) {this.data[0].HTMLstretchH(span,HW)}
          span.bbox = SPAN.bbox;
	}
	this.HTMLhandleSpace(span);
	return span;
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });

    MML.munderover.Augment({
      toHTML: function (span,HW,D) {
	var values = this.getValues("displaystyle","accent","accentunder","align");
        var base = this.data[this.base];
	if (!values.displaystyle && base != null &&
	    (base.movablelimits || base.CoreMO().Get("movablelimits")))
	      {return MML.msubsup.prototype.toHTML.call(this,span)}
	span = this.HTMLcreateSpan(span); var scale = this.HTMLgetScale();
	var stack = HTMLCSS.createStack(span);
	var boxes = [], children = [], stretch = [], box, i, m;
	for (i = 0, m = this.data.length; i < m; i++) {
	  if (this.data[i] != null) {
	    box = boxes[i] = HTMLCSS.createBox(stack);
	    children[i] = this.data[i].toHTML(box);
	    if (i == this.base) {
	      if (D != null) {this.data[this.base].HTMLstretchV(box,HW,D)}
	      else if (HW != null) {this.data[this.base].HTMLstretchH(box,HW)}
	      stretch[i] = (D == null && HW != null ? false :
			   this.data[i].HTMLcanStretch("Horizontal"));
              if (this.data[this.over] && values.accent) {
                children[i].bbox.h = Math.max(children[i].bbox.h,HTMLCSS.TeX.x_height); // min height of 1ex (#1706)
              }
	    } else {
	      stretch[i] = this.data[i].HTMLcanStretch("Horizontal");
              children[i].style.paddingLeft = children[i].style.paddingRight = "";
	    }
          }
        }
        HTMLCSS.MeasureSpans(children);
        var W = -HTMLCSS.BIGDIMEN, WW = W;
	for (i = 0, m = this.data.length; i < m; i++) {
	  if (this.data[i]) {
	    if (boxes[i].bbox.w > WW) {WW = boxes[i].bbox.w}
	    if (!stretch[i] && WW > W) {W = WW}
	  }
	}
	if (D == null && HW != null) {W = HW} else if (W == -HTMLCSS.BIGDIMEN) {W = WW}
        for (i = WW = 0, m = this.data.length; i < m; i++) {if (this.data[i]) {
          box = boxes[i];
          if (stretch[i]) {
            box.bbox = this.data[i].HTMLstretchH(box,W).bbox;
            if (i !== this.base)
              {children[i].style.paddingLeft = children[i].style.paddingRight = ""}
          }
          if (box.bbox.w > WW) {WW = box.bbox.w}
        }}
	var t = HTMLCSS.TeX.rule_thickness * this.mscale, factor = HTMLCSS.FONTDATA.TeX_factor;
	var x, y, z1, z2, z3, dw, k, delta = 0;
	base = boxes[this.base] || {bbox: this.HTMLzeroBBox()};
        if (base.bbox.ic) {delta = 1.3*base.bbox.ic + .05} // adjust faked IC to be more in line with expeted results
	for (i = 0, m = this.data.length; i < m; i++) {
	  if (this.data[i] != null) {
	    box = boxes[i];
	    z3 = HTMLCSS.TeX.big_op_spacing5 * scale;
	    var accent = (i != this.base && values[this.ACCENTS[i]]);
	    if (accent && box.bbox.w <= 1/HTMLCSS.em+.0001) { // images can get the width off by 1px
	      box.bbox.w = box.bbox.rw - box.bbox.lw; box.bbox.noclip = true;
	      if (box.bbox.lw)
		{box.insertBefore(HTMLCSS.createSpace(box.parentNode,0,0,-box.bbox.lw),box.firstChild)}
	      HTMLCSS.createBlank(box,0,0,box.bbox.rw+.1);
	    }
	    dw = {left:0, center:(WW-box.bbox.w)/2, right:WW-box.bbox.w}[values.align];
	    x = dw; y = 0;
	    if (i == this.over) {
	      if (accent) {
		k = Math.max(t * scale * factor,2.5/this.em); z3 = 0;
		if (base.bbox.skew) {
                  x += base.bbox.skew; span.bbox.skew = base.bbox.skew;
                  if (x+box.bbox.w > WW) {span.bbox.skew += (WW-box.bbox.w-x)/2}
                }
	      } else {
		z1 = HTMLCSS.TeX.big_op_spacing1 * scale * factor;
		z2 = HTMLCSS.TeX.big_op_spacing3 * scale * factor;
		k = Math.max(z1,z2-Math.max(0,box.bbox.d));
	      }
	      k = Math.max(k,1.5/this.em); // force to be at least 1.5px
	      x += delta/2; y = base.bbox.h + box.bbox.d + k;
	      box.bbox.h += z3;
	    } else if (i == this.under) {
	      if (accent) {
		k = 3*t * scale * factor; z3 = 0;
	      } else {
		z1 = HTMLCSS.TeX.big_op_spacing2 * scale * factor;
		z2 = HTMLCSS.TeX.big_op_spacing4 * scale * factor;
		k = Math.max(z1,z2-box.bbox.h);
	      }
	      k = Math.max(k,1.5/this.em); // force to be at least 1.5px
	      x -= delta/2; y = -(base.bbox.d + box.bbox.h + k);
	      box.bbox.d += z3;
	    }
	    HTMLCSS.placeBox(box,x,y);
	  }
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });

    MML.msubsup.Augment({
      toHTML: function (span,HW,D) {
	span = this.HTMLcreateSpan(span);
        var scale = this.HTMLgetScale(), mu = this.HTMLgetMu(span);
	var stack = HTMLCSS.createStack(span), values, children = [];
	var base = HTMLCSS.createBox(stack);
	if (this.data[this.base]) {
          children.push(this.data[this.base].toHTML(base));
	  if (D != null) {this.data[this.base].HTMLstretchV(base,HW,D)}
	  else if (HW != null) {this.data[this.base].HTMLstretchH(base,HW)}
	} else {base.bbox = this.HTMLzeroBBox()}
	var x_height = HTMLCSS.TeX.x_height * scale,
	    s = HTMLCSS.TeX.scriptspace * scale * .75;  // FIXME: .75 can be removed when IC is right?
	var sup, sub;
	if (this.HTMLnotEmpty(this.data[this.sup]))
          {sup = HTMLCSS.createBox(stack); children.push(this.data[this.sup].toHTML(sup))}
	if (this.HTMLnotEmpty(this.data[this.sub]))
          {sub = HTMLCSS.createBox(stack); children.push(this.data[this.sub].toHTML(sub))}
        HTMLCSS.MeasureSpans(children);
	if (sup) {sup.bbox.w += s; sup.bbox.rw = Math.max(sup.bbox.w,sup.bbox.rw)}
	if (sub) {sub.bbox.w += s; sub.bbox.rw = Math.max(sub.bbox.w,sub.bbox.rw)}
	HTMLCSS.placeBox(base,0,0);
        var sscale = scale;
        if (sup) {
          sscale = this.data[this.sup].HTMLgetScale();
        } else if (sub) {
          sscale = this.data[this.sub].HTMLgetScale();
        }
	var q = HTMLCSS.TeX.sup_drop * sscale, r = HTMLCSS.TeX.sub_drop * sscale;
	var u = base.bbox.h - q, v = base.bbox.d + r, delta = 0, p;
	if (base.bbox.ic) {
          base.bbox.w -= base.bbox.ic;    // remove IC (added by mo and mi)
          delta = 1.3*base.bbox.ic + .05; // adjust faked IC to be more in line with expected results
        }
	if (this.data[this.base] && HW == null && D == null &&
	   (this.data[this.base].type === "mi" || this.data[this.base].type === "mo")) {
	  if (this.data[this.base].data.join("").length === 1 && children[0].scale === 1 &&
	      !this.data[this.base].Get("largeop")) {u = v = 0}
	}
	var min = this.getValues("subscriptshift","superscriptshift");
	min.subscriptshift   = (min.subscriptshift === ""   ? 0 : HTMLCSS.length2em(min.subscriptshift,mu));
	min.superscriptshift = (min.superscriptshift === "" ? 0 : HTMLCSS.length2em(min.superscriptshift,mu));
	if (!sup) {
	  if (sub) {
	    v = Math.max(v,HTMLCSS.TeX.sub1*scale,sub.bbox.h-(4/5)*x_height,min.subscriptshift);
	    HTMLCSS.placeBox(sub,base.bbox.w,-v,sub.bbox);
	  }
	} else {
	  if (!sub) {
	    values = this.getValues("displaystyle","texprimestyle");
	    p = HTMLCSS.TeX[(values.displaystyle ? "sup1" : (values.texprimestyle ? "sup3" : "sup2"))];
	    u = Math.max(u,p*scale,sup.bbox.d+(1/4)*x_height,min.superscriptshift);
	    HTMLCSS.placeBox(sup,base.bbox.w+delta,u,sup.bbox);
	  } else {
	    v = Math.max(v,HTMLCSS.TeX.sub2*scale);
	    var t = HTMLCSS.TeX.rule_thickness * scale;
	    if ((u - sup.bbox.d) - (sub.bbox.h - v) < 3*t) {
	      v = 3*t - u + sup.bbox.d + sub.bbox.h;
	      q = (4/5)*x_height - (u - sup.bbox.d);
	      if (q > 0) {u += q; v -= q}
	    }
	    HTMLCSS.placeBox(sup,base.bbox.w+delta,Math.max(u,min.superscriptshift));
	    HTMLCSS.placeBox(sub,base.bbox.w,-Math.max(v,min.subscriptshift));
	  }
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });

    MML.mmultiscripts.Augment({toHTML: MML.mbase.HTMLautoload});

    MML.mtable.Augment({toHTML: MML.mbase.HTMLautoload});
    
    MML["annotation-xml"].Augment({toHTML: MML.mbase.HTMLautoload});
    MML.annotation.Augment({toHTML: function (span) {return this.HTMLcreateSpan(span)}});
    
    MML.math.Augment({
      toHTML: function (span,node,phase) {
        var stack, box, html, math, SPAN = span;
        //
        //  Phase I lays out the math, but doesn't measure the final math yet
        //  (that is done for a chunk at a time, to avoid reflows)
        //
        if (!phase || phase === HTMLCSS.PHASE.I) {
          var nobr = HTMLCSS.addElement(span,"nobr",{isMathJax: true});
          span = this.HTMLcreateSpan(nobr);
          var alttext = this.Get("alttext");
          if (alttext && !span.getAttribute("aria-label")) span.setAttribute("aria-label",alttext);
	  stack = HTMLCSS.createStack(span); box = HTMLCSS.createBox(stack);
          // Move font-size from outer span to stack to avoid line separation 
          // problem in strict HTML mode
          stack.style.fontSize = nobr.parentNode.style.fontSize; nobr.parentNode.style.fontSize = "";
          if (this.data[0] != null) {
            MML.mbase.prototype.displayAlign = HUB.config.displayAlign;
            MML.mbase.prototype.displayIndent = HUB.config.displayIndent;
            if (String(HUB.config.displayIndent).match(/^0($|[a-z%])/i))
              MML.mbase.prototype.displayIndent = "0";
            html = this.data[0].toHTML(box); html.bbox.exactW = false; // force remeasure just to be sure
	  }
        } else {
          span = span.firstChild.firstChild;
          if (this.href) span = span.firstChild;
          stack = span.firstChild;
          if (stack.style.position !== "relative") stack = stack.nextSibling;
          box = stack.firstChild;
          html = box.firstChild;
        }
        //
        //  Phase II measures the math (this is done for each one in the chunk at once)
        //
        math = ((!phase || phase === HTMLCSS.PHASE.II) ? HTMLCSS.Measured(html,box) : html);
        //
        //  Phase III finishes the layout using the measured math
        //
        if (!phase || phase === HTMLCSS.PHASE.III) {
          HTMLCSS.placeBox(box,0,0);
          //
          //  Get width right if minimum font size is set:
          //    Round to nearest pixel (plus a small amount), and convert back to outer-em's.
          //    Add the width to the span (outside the MathJax class, so uses outer em size,
          //    which makes it work even when minimum font size is in effect).
          //
          var W = math.bbox.w;
          W = Math.abs(W) < .006 ? 0 : Math.max(0,Math.round(W*this.em)+.25);
          span.style.width = HTMLCSS.EmRounded(W/HTMLCSS.outerEm);
          span.style.display = "inline-block";
          //
          //  Adjust bbox to match outer em-size
          // 
          var p = 1/HTMLCSS.em, f = HTMLCSS.em / HTMLCSS.outerEm; HTMLCSS.em /= f;
          span.bbox.h *= f; span.bbox.d *= f; span.bbox.w *= f;
          span.bbox.lw *= f; span.bbox.rw *= f;
          if (span.bbox.H) {span.bbox.H *= f}
          if (span.bbox.D) {span.bbox.D *= f}
          if (math && math.bbox.width != null) {
            span.style.minWidth = (math.bbox.minWidth || span.style.width);
            span.style.width = math.bbox.width;
            box.style.width = stack.style.width = "100%";
            SPAN.className += " MathJax_FullWidth";
          }
          //
          //  Add color (if any)
          //
          var color = this.HTMLhandleColor(span);
          //
          //  Make math span be the correct height and depth
          //
          if (math) {HTMLCSS.createRule(span,(math.bbox.h+p)*f,(math.bbox.d+p)*f,0)}
          //
          //  Handle indentalign and indentshift for single-line display equations
          //
          if (!this.isMultiline && this.Get("display") === "block" && span.bbox.width == null) {
            var values = this.getValues("indentalignfirst","indentshiftfirst","indentalign","indentshift");
            if (values.indentalignfirst !== MML.INDENTALIGN.INDENTALIGN) {values.indentalign = values.indentalignfirst}
            if (values.indentalign === MML.INDENTALIGN.AUTO) {values.indentalign = this.displayAlign}
            if (values.indentshiftfirst !== MML.INDENTSHIFT.INDENTSHIFT) {values.indentshift = values.indentshiftfirst}
            if (values.indentshift === "auto") {values.indentshift = "0"}
            var shift = HTMLCSS.length2em(values.indentshift,1,HTMLCSS.scale*HTMLCSS.cwidth);
            if (this.displayIndent !== "0") {
              var indent = HTMLCSS.length2em(this.displayIndent,1,HTMLCSS.scale*HTMLCSS.cwidth);
              shift += (values.indentalign === MML.INDENTALIGN.RIGHT ? -indent : indent);
            }
            SPAN.style.textAlign = node.style.textAlign = values.indentalign;
            // ### FIXME: make percentage widths respond to changes in container
            if (shift) {
              HUB.Insert(span.style,({
                left: {marginLeft: HTMLCSS.Em(shift)},
                right: {marginRight: HTMLCSS.Em(-shift)},
                center: {marginLeft: HTMLCSS.Em(shift), marginRight: HTMLCSS.Em(-shift)}
              })[values.indentalign]);
              //
              //  Move the background color, of any
              //
	      if (color) {
                var L = parseFloat(color.style.marginLeft||"0")+shift,
                    R = parseFloat(color.style.marginRight||"0")-shift;
	        color.style.marginLeft = HTMLCSS.Em(L);
	        color.style.marginRight =
	          HTMLCSS.Em(R + (values.indentalign === "right" ?
                      span.bbox.w+shift - span.bbox.w : 0));
		if (HTMLCSS.msieColorBug && values.indentalign === "right") {
                  if (parseFloat(color.style.marginLeft) > 0) {
                    var padding = MathJax.HTML.addElement(color.parentNode,"span");
                    padding.style.marginLeft = HTMLCSS.Em(R+Math.min(0,span.bbox.w+shift));
                    color.nextSibling.style.marginRight = "0em";
                  }
		  color.nextSibling.style.marginLeft = "0em";
		  color.style.marginRight = color.style.marginLeft = "0em";
		}
	      }
            }
          }
        }
	return span;
      },
      HTMLspanElement: MML.mbase.prototype.HTMLspanElement
    });

    MML.TeXAtom.Augment({
      toHTML: function (span,HW,D) {
	span = this.HTMLcreateSpan(span);
	if (this.data[0] != null) {
	  if (this.texClass === MML.TEXCLASS.VCENTER) {
	    var stack = HTMLCSS.createStack(span);
	    var box = HTMLCSS.createBox(stack);
            var child = this.data[0].toHTML(box);
            if (D != null) {HTMLCSS.Remeasured(this.data[0].HTMLstretchV(box,HW,D),box)}
            else if (HW != null) {HTMLCSS.Remeasured(this.data[0].HTMLstretchH(box,HW),box)}
            else {HTMLCSS.Measured(child,box)}
            var a = HTMLCSS.TeX.axis_height * this.HTMLgetScale();
	    HTMLCSS.placeBox(box,0,a-(box.bbox.h+box.bbox.d)/2+box.bbox.d);
	  } else {
	    var html = this.data[0].toHTML(span,HW,D);
            if (D != null) {html = this.data[0].HTMLstretchV(box,HW,D)}
            else if (HW != null) {html = this.data[0].HTMLstretchH(box,HW)}
            span.bbox = html.bbox;
	  }
	}
	this.HTMLhandleSpace(span);
	this.HTMLhandleColor(span);
	return span;
      },
      HTMLstretchH: MML.mbase.HTMLstretchH,
      HTMLstretchV: MML.mbase.HTMLstretchV
    });
    
    //
    //  Loading isn't complete until the element jax is modified,
    //  but can't call loadComplete within the callback for "mml Jax Ready"
    //  (it would call HTMLCSS's Require routine, asking for the mml jax again)
    //  so wait until after the mml jax has finished processing.
    //  
    //  We also need to wait for the onload handler to run, since the loadComplete
    //  will call Config and Startup, which need to modify the body.
    //
    HUB.Register.StartupHook("onLoad",function () {
      setTimeout(MathJax.Callback(["loadComplete",HTMLCSS,"jax.js"]),0);
    });
  });

  HUB.Register.StartupHook("End Config",function () {
    
    //
    //  Handle browser-specific setup
    //
    HUB.Browser.Select({
      MSIE: function (browser) {
        var mode = (document.documentMode || 0);
        var isIE7 = browser.versionAtLeast("7.0");
        var isIE8 = browser.versionAtLeast("8.0") && mode > 7;
        var quirks = (document.compatMode === "BackCompat");
        if (mode < 9) {
          // IE doesn't do mouse events on trasparent objects,
          //   so give a background color, but opacity makes it transparent
          HTMLCSS.config.styles[".MathJax .MathJax_HitBox"]["background-color"] = "white";
          HTMLCSS.config.styles[".MathJax .MathJax_HitBox"].opacity = 0
          HTMLCSS.config.styles[".MathJax .MathJax_HitBox"].filter = "alpha(opacity=0)";
        }
        // FIXME:  work out tests for these?
        HTMLCSS.Augment({
          PaddingWidthBug: true,
          msieAccentBug: true,
          msieColorBug: (mode < 8),      // negative margin-right doesn't work to position color
          msieColorPositionBug: true,    // needs position:relative to put color behind text
          msieRelativeWidthBug: quirks,
          msieDisappearingBug: (mode >= 8), // inline math disappears
          msieMarginScaleBug: (mode < 8),   // relative margins are not scaled properly by font-size
          msiePaddingWidthBug: true,
          msieBorderWidthBug: quirks,
          msieFrameSizeBug: (mode <= 8),    // crashes if size of box isn't big enough for border
          msieInlineBlockAlignBug: (!isIE8 || quirks),
          msiePlaceBoxBug: (isIE8 && !quirks),
          msieClipRectBug: !isIE8,
          msieNegativeSpaceBug: quirks,
          msieRuleBug: (mode < 7),           // rules need to be measured
          cloneNodeBug: (isIE8 && browser.version === "8.0"),
          msieItalicWidthBug: true,          // can't measure boxes ending in italics correctly
          initialSkipBug: (mode < 8),        // confused by initial left-margin values
          msieNegativeBBoxBug: (mode >= 8),  // negative bboxes have positive widths
          msieIE6: !isIE7,
          msieItalicWidthBug: true,
          FontFaceBug: (mode < 9),
          msieFontCSSBug: browser.isIE9,
          allowWebFonts: (mode >= 9 ? "woff" : "eot")
        });
      },

      Firefox: function (browser) {
        var webFonts = false;
        if (browser.versionAtLeast("3.5")) {
          var root = String(document.location).replace(/[^\/]*$/,"");
          if (document.location.protocol !== "file:" || HUB.config.root.match(/^https?:\/\//) ||
              (HUB.config.root+"/").substr(0,root.length) === root) {webFonts = "otf"}
        }
        HTMLCSS.Augment({
          ffVerticalAlignBug: !browser.versionAtLeast("20.0"),  // not sure when this bug was fixed
          AccentBug: true,
          allowWebFonts: webFonts,
          ffFontOptimizationBug: true
        });
      },

      Safari: function (browser) {
        var v3p0 = browser.versionAtLeast("3.0");
        var v3p1 = browser.versionAtLeast("3.1");
        var trueSafari = navigator.appVersion.match(/ Safari\/\d/) &&
                         navigator.appVersion.match(/ Version\/\d/) &&
                         navigator.vendor.match(/Apple/);
        var android = (navigator.appVersion.match(/ Android (\d+)\.(\d+)/));
        var forceImages = (v3p1 && browser.isMobile && (
          (navigator.platform.match(/iPad|iPod|iPhone/) && !browser.versionAtLeast("5.0")) ||
          (android != null && (android[1] < 2 || (android[1] == 2 && android[2] < 2)))
        ));
        HTMLCSS.Augment({
          config: {
            styles: {
              ".MathJax img, .MathJax nobr, .MathJax a": {
                // "none" seems to work like "0px" when width is initially 0
                "max-width": "5000em", "max-height": "5000em"
              }
            }
          },
          Em: ((browser.webkit||0) >= 538 ? HTMLCSS.EmRounded : HTMLCSS.Em), // issue #931
          rfuzz: .011,
          AccentBug: true,
          AdjustSurd: true,
          negativeBBoxes: true,
          safariNegativeSpaceBug: true,
          safariVerticalAlignBug: !v3p1,
          safariTextNodeBug: !v3p0,
          forceReflow: true,
          FontFaceBug: true,
          combiningCharBug: parseInt(browser.webkit) >= 603,
          allowWebFonts: (v3p1 && !forceImages ? "otf" : false)
        });
        if (trueSafari) {
          HTMLCSS.Augment({
            webFontDefault: (browser.isMobile ? "sans-serif" : "serif")
          });
        }
        if (browser.isPC) {
          HTMLCSS.Augment({
            adjustAvailableFonts: HTMLCSS.removeSTIXfonts,  // can't access plane1
            checkWebFontsTwice: true  // bug in Safari/Win that doesn't update font test div properly
          });
        }
        if (forceImages) {
          //  Force image mode for iOS prior to 4.2 and Droid prior to 2.2
          var config = HUB.config["HTML-CSS"];
          if (config) {config.availableFonts = []; config.preferredFont = null}
            else {HUB.config["HTML-CSS"] = {availableFonts: [], preferredFont: null}}
        }
      },

      Chrome: function (browser) {
        HTMLCSS.Augment({
          Em: HTMLCSS.EmRounded,   // vertical alignment needs help (since around v20)
          cloneNodeBug: true,      // Chrome gets heights wrong with the cloned ones
          rfuzz: -.02,
          AccentBug: true,
          AdjustSurd: true,
          FontFaceBug: browser.versionAtLeast("32.0"), // Chrome 32 fails on bold-italic (#735)
          negativeBBoxes: true,
          safariNegativeSpaceBug: true,
          safariWebFontSerif: [""],
          forceReflow: true,
          allowWebFonts: (browser.versionAtLeast("4.0") ? "otf" : "svg")
        });
      },

      Opera: function (browser) {
        browser.isMini = (navigator.appVersion.match("Opera Mini") != null);
        HTMLCSS.config.styles[".MathJax .merror"]["vertical-align"] = null;
        HTMLCSS.config.styles[".MathJax span"]["z-index"] = 0;
        HTMLCSS.Augment({
          operaHeightBug: true,
          operaVerticalAlignBug: true,
          operaFontSizeBug: browser.versionAtLeast("10.61"),
          initialSkipBug: true,
          FontFaceBug: true,
          PaddingWidthBug: true,
          allowWebFonts: (browser.versionAtLeast("10.0") && !browser.isMini ? "otf" : false),
          adjustAvailableFonts: HTMLCSS.removeSTIXfonts
        });
      },

      Konqueror: function (browser) {
        HTMLCSS.Augment({
          konquerorVerticalAlignBug: true
        });
      }
    });
  
  });

  MathJax.Hub.Register.StartupHook("End Cookie", function () {  
    if (HUB.config.menuSettings.zoom !== "None")
      {AJAX.Require("[MathJax]/extensions/MathZoom.js")}
  });
    
})(MathJax.Ajax, MathJax.Hub, MathJax.OutputJax["HTML-CSS"]);

/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/autoload/mtable.js
 *  
 *  Implements the HTML-CSS output for <mtable> elements.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2010-2017 The MathJax Consortium
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

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function () {
  var VERSION = "2.7.2";
  var MML = MathJax.ElementJax.mml,
      HTMLCSS = MathJax.OutputJax["HTML-CSS"];
  
  MML.mtable.Augment({
    toHTML: function (span) {
      span = this.HTMLcreateSpan(span);
      if (this.data.length === 0) {return span}
      var values = this.getValues("columnalign","rowalign","columnspacing","rowspacing",
                                  "columnwidth","equalcolumns","equalrows",
                                  "columnlines","rowlines","frame","framespacing",
                                  "align","useHeight","width","side","minlabelspacing");
      var hasRelativeWidth = values.width.match(/%$/);
      var stack = HTMLCSS.createStack(span);
      var scale = this.HTMLgetScale(), mu = this.HTMLgetMu(span), LABEL = -1;

      var H = [], D = [], W = [], A = [], C = [], i, j, J = -1,
          m, M, s, row, cell, mo, entries = [], HD;
      var LH = HTMLCSS.FONTDATA.lineH * scale * values.useHeight,
          LD = HTMLCSS.FONTDATA.lineD * scale * values.useHeight;

      //
      //  Create cells and measure columns and rows
      //
      for (i = 0, m = this.data.length; i < m; i++) {
        row = this.data[i]; s = (row.type === "mlabeledtr" ? LABEL : 0);
        A[i] = []; H[i] = LH; D[i] = LD;
        for (j = s, M = row.data.length + s; j < M; j++) {
          if (W[j] == null) {
            if (j > J) {J = j}
            C[j] = HTMLCSS.createStack(HTMLCSS.createBox(stack));
            W[j] = -HTMLCSS.BIGDIMEN;
          }
          A[i][j] = HTMLCSS.createBox(C[j]);
          entries.push(row.data[j-s].toHTML(A[i][j]));
        }
      }
      HTMLCSS.MeasureSpans(entries);
      for (i = 0, m = this.data.length; i < m; i++) {
        row = this.data[i]; s = (row.type === "mlabeledtr" ? LABEL : 0);
        for (j = s, M = row.data.length + s; j < M; j++) {
          cell = row.data[j-s];
          if (cell.isMultiline) {A[i][j].style.width = "100%"}
          if (cell.isEmbellished()) {
            mo = cell.CoreMO();
            var min = mo.Get("minsize",true);
            if (min) {
              var bbox = mo.HTMLspanElement().bbox;
              if (mo.HTMLcanStretch("Vertical")) {
                HD = bbox.h + bbox.d;
                if (HD) {
                  min = HTMLCSS.length2em(min,mu,HD);
                  if (min*bbox.h/HD > H[i]) {H[i] = min*bbox.h/HD}
                  if (min*bbox.d/HD > D[i]) {D[i] = min*bbox.d/HD}
                }
              } else if (mo.HTMLcanStretch("Horizontal")) {
                min = HTMLCSS.length2em(min,mu,bbox.w);
                if (min > W[j]) {W[j] = min}
              }
            }
          }
          if (A[i][j].bbox.h > H[i]) {H[i] = A[i][j].bbox.h}
          if (A[i][j].bbox.d > D[i]) {D[i] = A[i][j].bbox.d}
          if (A[i][j].bbox.w > W[j]) {W[j] = A[i][j].bbox.w}
        }
      }

      //
      //  Determine spacing and alignment
      //
      var SPLIT = MathJax.Hub.SplitList;
      var CSPACE = SPLIT(values.columnspacing),
          RSPACE = SPLIT(values.rowspacing),
          CALIGN = SPLIT(values.columnalign),
          RALIGN = SPLIT(values.rowalign),
          CLINES = SPLIT(values.columnlines),
          RLINES = SPLIT(values.rowlines),
          CWIDTH = SPLIT(values.columnwidth),
          RCALIGN = [];
      for (i = 0, m = CSPACE.length; i < m; i++) {CSPACE[i] = HTMLCSS.length2em(CSPACE[i],mu)}
      for (i = 0, m = RSPACE.length; i < m; i++) {RSPACE[i] = HTMLCSS.length2em(RSPACE[i],mu)}
      while (CSPACE.length <  J) {CSPACE.push(CSPACE[CSPACE.length-1])}
      while (CALIGN.length <= J) {CALIGN.push(CALIGN[CALIGN.length-1])}
      while (CLINES.length <  J) {CLINES.push(CLINES[CLINES.length-1])}
      while (CWIDTH.length <= J) {CWIDTH.push(CWIDTH[CWIDTH.length-1])}
      while (RSPACE.length <  A.length) {RSPACE.push(RSPACE[RSPACE.length-1])}
      while (RALIGN.length <= A.length) {RALIGN.push(RALIGN[RALIGN.length-1])}
      while (RLINES.length <  A.length) {RLINES.push(RLINES[RLINES.length-1])}
      if (C[LABEL]) {
        CALIGN[LABEL] = (values.side.substr(0,1) === "l" ? "left" : "right");
        CSPACE[LABEL] = -W[LABEL];
      }
      //
      //  Override row data
      //
      for (i = 0, m = A.length; i < m; i++) {
        row = this.data[i]; RCALIGN[i] = [];
        if (row.rowalign) {RALIGN[i] = row.rowalign}
        if (row.columnalign) {
          RCALIGN[i] = SPLIT(row.columnalign);
          while (RCALIGN[i].length <= J) {RCALIGN[i].push(RCALIGN[i][RCALIGN[i].length-1])}
        }
      }

      //
      //  Handle equal heights
      //
      if (values.equalrows) {
        // FIXME:  should really be based on row align (below is for baseline)
        var Hm = Math.max.apply(Math,H), Dm = Math.max.apply(Math,D);
        for (i = 0, m = A.length; i < m; i++)
          {s = ((Hm + Dm) - (H[i] + D[i])) / 2;  H[i] += s; D[i] += s}
      }

      //  FIXME:  do background colors for entire cell (include half the intercolumn space?)
      
      //
      //  Determine array total height
      //
      HD = H[0] + D[A.length-1];
      for (i = 0, m = A.length-1; i < m; i++) {HD += Math.max(0,D[i]+H[i+1]+RSPACE[i])}
      //
      //  Determine frame and line sizes
      //
      var fx = 0, fy = 0, fW, fH = HD;
      if (values.frame !== "none" ||
         (values.columnlines+values.rowlines).match(/solid|dashed/)) {
        var frameSpacing = SPLIT(values.framespacing);
        if (frameSpacing.length != 2) {
          // invalid attribute value: use the default.
          frameSpacing = SPLIT(this.defaults.framespacing);
        }
        fx = HTMLCSS.length2em(frameSpacing[0],mu);
        fy = HTMLCSS.length2em(frameSpacing[1],mu);
        fH = HD + 2*fy; // fW waits until stack.bbox.w is determined
      }
      //
      //  Compute alignment
      //
      var Y, fY, n = "";
      if (typeof(values.align) !== "string") {values.align = String(values.align)}
      if (values.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/))
        {n = RegExp.$3||""; values.align = RegExp.$1} else {values.align = this.defaults.align}
      if (n !== "") {
        //
        //  Find the height of the given row
        //
        n = parseInt(n);
        if (n < 0) {n = A.length + 1 + n}
        if (n < 1) {n = 1} else if (n > A.length) {n = A.length}
        Y = 0; fY = -(HD + fy) + H[0];
        for (i = 0, m = n-1; i < m; i++) {
          // FIXME:  Should handle values.align for final row
          var dY = Math.max(0,D[i]+H[i+1]+RSPACE[i]);
          Y += dY; fY += dY;
        }
      } else {
        Y = ({
          top:    -(H[0] + fy),
          bottom:   HD + fy - H[0],
          center:   HD/2 - H[0],
          baseline: HD/2 - H[0],
          axis:     HD/2 + HTMLCSS.TeX.axis_height*scale - H[0]
        })[values.align];
        fY = ({
          top:      -(HD + 2*fy),
          bottom:   0,
          center:   -(HD/2 + fy),
          baseline: -(HD/2 + fy),
          axis:     HTMLCSS.TeX.axis_height*scale - HD/2 - fy
        })[values.align];
      }
            
      var WW, WP = 0, Wt = 0, Wp = 0, p = 0, f = 0, P = [], F = [], Wf = 1;
      //
      if (values.equalcolumns && values.width !== "auto") {
        //
        //  Handle equalcolumns for percent-width and fixed-width tables
        //
        if (hasRelativeWidth) {
          //  Set widths to percentages
          WW = (100/(J+1)).toFixed(2).replace(/\.?0+$/,"")+"%";
          for (i = 0, m = Math.min(J+1,CWIDTH.length); i < m; i++) {CWIDTH[i] = WW}
          //  Get total column spacing
          WW = 0; WP = 1; f = J+1;
          for (i = 0, m = Math.min(J+1,CSPACE.length); i < m; i++) {WW += CSPACE[i]}
        } else {
          //  Get total width minus column spacing
          WW = HTMLCSS.length2em(values.width,mu);
          for (i = 0, m = Math.min(J,CSPACE.length); i < m; i++) {WW -= CSPACE[i]}
          //  Determine individual column widths
          WW /= J;
          for (i = 0, m = Math.min(J+1,CWIDTH.length); i < m; i++) {W[i] = WW}
        }
      } else {
        //
        //  Get column widths for fit and percentage columns
        //
        //  Calculate the natural widths and percentage widths,
        //    while keeping track of the fit and percentage columns
        for(i = 0, m = Math.min(J+1,CWIDTH.length); i < m; i++) {
          if (CWIDTH[i] === "auto") {Wt += W[i]}
          else if (CWIDTH[i] === "fit") {F[f] = i; f++; Wt += W[i]}
          else if (CWIDTH[i].match(/%$/))
            {P[p] = i; p++; Wp += W[i]; WP += HTMLCSS.length2em(CWIDTH[i],mu,1)}
          else {W[i] = HTMLCSS.length2em(CWIDTH[i],mu); Wt += W[i]}
        }
        if (hasRelativeWidth) {
          // Get separation width and check percentages
          WW = 0; for (i = 0, m = Math.min(J,CSPACE.length); i < m; i++) {WW += CSPACE[i]}
          if (WP > .98) {Wf = .98/WP; WP = .98}
        } else {
          // Get the full width (excluding inter-column spacing)
          if (values.width === "auto") {
            if (WP > .98) {Wf = Wp/(Wt+Wp); WW = Wt + Wp} else {WW = Wt / (1-WP)}
          } else {
            WW = HTMLCSS.length2em(values.width,mu);
            for (i = 0, m = Math.min(J,CSPACE.length); i < m; i++) {WW -= CSPACE[i]}
          }
          //  Determine the relative column widths
          for (i = 0, m = P.length; i < m; i++) {
            W[P[i]] = HTMLCSS.length2em(CWIDTH[P[i]],mu,WW*Wf); Wt += W[P[i]];
          }
          //  Stretch fit columns, if any, otherwise stretch (or shrink) everything
          if (Math.abs(WW - Wt) > .01) {
            if (f && WW > Wt) {
              WW = (WW - Wt) / f; for (i = 0, m = F.length; i < m; i++) {W[F[i]] += WW}
            } else {WW = WW/Wt; for (j = 0; j <= J; j++) {W[j] *= WW}}
          }
          //
          //  Handle equal columns
          //
          if (values.equalcolumns) {
            var Wm = Math.max.apply(Math,W);
            for (j = 0; j <= J; j++) {W[j] = Wm}
          }
        }
      }
      
      //
      //  Lay out array columns
      //
      var y = Y, dy, line, align; s = (C[LABEL] ? LABEL : 0);
      for (j = s; j <= J; j++) {
        for (i = 0, m = A.length; i < m; i++) {
          if (A[i][j]) {
            s = (this.data[i].type === "mlabeledtr" ? LABEL : 0);
            cell = this.data[i].data[j-s];
            if (cell.HTMLcanStretch("Horizontal")) {
              A[i][j].bbox = cell.HTMLstretchH(C[j],W[j]).bbox;
            } else if (cell.HTMLcanStretch("Vertical")) {
              mo = cell.CoreMO();
              var symmetric = mo.symmetric; mo.symmetric = false;
              A[i][j].bbox = cell.HTMLstretchV(C[j],H[i],D[i]).bbox; A[i][j].HH = null;
              if (A[i][j].bbox.h > H[i]) {A[i][j].bbox.H = A[i][j].bbox.h; A[i][j].bbox.h = H[i]}
              if (A[i][j].bbox.d > D[i]) {A[i][j].bbox.D = A[i][j].bbox.d; A[i][j].bbox.d = D[i]}
              mo.symmetric = symmetric;
            }
            align = cell.rowalign||this.data[i].rowalign||RALIGN[i];
            dy = ({top:    H[i] - A[i][j].bbox.h,
                   bottom: A[i][j].bbox.d - D[i],
                   center: ((H[i]-D[i]) - (A[i][j].bbox.h-A[i][j].bbox.d))/2,
                   baseline: 0, axis: 0})[align] || 0; // FIXME:  handle axis better?
            align = (cell.columnalign||RCALIGN[i][j]||CALIGN[j]);
            HTMLCSS.alignBox(A[i][j],align,y+dy);
          }
          if (i < A.length-1) {y -= Math.max(0,D[i]+H[i+1]+RSPACE[i])}
        }
        y = Y;
      }

      //
      //  Set column widths and placement
      //
      if (hasRelativeWidth) {
        //
        //  Remove column spacing to get width available for columns
        //
        var box = HTMLCSS.createBox(stack); box.style.left = box.style.top = 0;
        box.style.right = HTMLCSS.Em(WW+2*fx); box.style.display = "inline-block";
        box.style.height = "0px";
        if (HTMLCSS.msieRelativeWidthBug) {
          box = HTMLCSS.createBox(box); box.style.position = "relative";
          box.style.height = "1em"; box.style.width = "100%"; box.bbox = stack.bbox;
        }
        //
        //  wp = remaining width (%) divided by the number of columns it is split over
        //  wm = remaining width (fixed) divided by the number of columns it is split over
        //
        var xp = 0, xf = fx, wp, wm;
        if (f) {wp = 100*(1-WP)/f, wm = Wt/f} else {wp = 100*(1-WP)/(J+1); wm = Wt/(J+1)}
        for (j = 0; j <= J; j++) {
          HTMLCSS.placeBox(C[j].parentNode,0,0); // sets the bbox
          //
          //  Convert original column to the innermost span in the mobile column
          //
          C[j].style.position = "relative";
          C[j].style.left = HTMLCSS.Em(xf);
          C[j].style.width = "100%";
          C[j].parentNode.parentNode.removeChild(C[j].parentNode);
          var Cj = HTMLCSS.createBox(box); HTMLCSS.addBox(Cj,C[j]); C[j] = Cj;
          var CjStyle = Cj.style; CjStyle.display = "inline-block"; CjStyle.left = xp + "%";
          //
          //  Set width/position based on the type of column
          //
          if (CWIDTH[j].match(/%$/)) {
            var pp = parseFloat(CWIDTH[j]) * Wf;
            if (f === 0) {
              CjStyle.width = (wp + pp) + "%"; xp += wp + pp;
              Cj = HTMLCSS.createBox(Cj); HTMLCSS.addBox(Cj,C[j].firstChild);
              Cj.style.left = 0; Cj.style.right = HTMLCSS.Em(wm); xf -= wm;
            } else {
              CjStyle.width = pp + "%"; xp += pp;
            }
          } else if (CWIDTH[j] === "fit" || f === 0) {
            CjStyle.width = wp + "%";
            Cj = HTMLCSS.createBox(Cj); HTMLCSS.addBox(Cj,C[j].firstChild);
            Cj.style.left = 0; Cj.style.right = HTMLCSS.Em(wm-W[j]);
            xf += W[j] - wm; xp += wp;
          } else {
            CjStyle.width = HTMLCSS.Em(W[j]); xf += W[j];
          }
	  if (HTMLCSS.msieRelativeWidthBug) {
            HTMLCSS.addText(Cj.firstChild,HTMLCSS.NBSP); // gets correct baseline
            Cj.firstChild.style.position = "relative";
          }
          xf += CSPACE[j];
          //
          //  Add column lines
          //
          if (CLINES[j] !== "none" && j < J && j !== LABEL) {
            line = HTMLCSS.createBox(box); line.style.left = xp+"%";
            line = HTMLCSS.createRule(line,fH,0,1.25/HTMLCSS.em); line.style.position = "absolute";
            line.bbox = {h:fH, d:0, w:0, rw:1.25/HTMLCSS.em, lw:0};
            line.parentNode.bbox = stack.bbox; // make sure stack size is updated
            HTMLCSS.placeBox(line,xf-CSPACE[j]/2,fY,true); line.style.borderStyle = CLINES[j];
          }
        }
      } else {
        //
        //  Set the column box widths and place them
        //
        var x = fx;
        for (j = 0; j <= J; j++) {
          if (!C[j].bbox.width) {HTMLCSS.setStackWidth(C[j],W[j])}
          if (CWIDTH[j] !== "auto" && CWIDTH[j] !== "fit")
            {C[j].bbox.width = W[j]; C[j].bbox.isFixed = true}
          HTMLCSS.placeBox(C[j].parentNode,x,0); x += W[j] + CSPACE[j];
          //
          //  Add column lines
          //
          if (CLINES[j] !== "none" && j < J && j !== LABEL) {
            line = HTMLCSS.createRule(stack,fH,0,1.25/HTMLCSS.em); HTMLCSS.addBox(stack,line);
            line.bbox = {h:fH, d:0, w:0, rw:1.25/HTMLCSS.em, lw:0};
            HTMLCSS.placeBox(line,x-CSPACE[j]/2,fY,true); line.style.borderStyle = CLINES[j];
          }
        }
      }
      stack.bbox.d = -fY; stack.bbox.h = fH+fY;
      HTMLCSS.setStackWidth(stack,stack.bbox.w + fx);

      //
      //  Add frame
      //
      fW = stack.bbox.w; var frame;
      if (values.frame !== "none") {
        frame = HTMLCSS.createFrame(stack,fH,0,fW,1.25/HTMLCSS.em,values.frame);
        HTMLCSS.addBox(stack,frame); HTMLCSS.placeBox(frame,0,fY,true);
        if (hasRelativeWidth) {frame.style.width = "100%"}
      }
      //
      //  Add row lines
      //
      y = Y;
      for (i = 0, m = A.length-1; i < m; i++) {
        dy = Math.max(0,D[i]+H[i+1]+RSPACE[i]);
        if (RLINES[i] !== MML.LINES.NONE && RLINES[i] !== "") {
          line = HTMLCSS.createRule(stack,1.25/HTMLCSS.em,0,fW); HTMLCSS.addBox(stack,line);
          line.bbox = {h:1.25/HTMLCSS.em, d:0, w:fW, rw:fW, lw:0};
          HTMLCSS.placeBox(line,0,y - D[i] - (dy-D[i]-H[i+1])/2,true);
          if (RLINES[i] === MML.LINES.DASHED) line.style.borderTopStyle = "dashed";
          if (hasRelativeWidth) line.style.width = "100%"
        }
        y -= dy;
      }
      //
      //  Set relative width
      //
      if (hasRelativeWidth) {span.bbox.width = values.width; stack.style.width = "100%"}
      //
      //  Place the labels, if any
      //
      if (C[LABEL]) {
        var mw = stack.bbox.w;
        var indent = this.getValues("indentalignfirst","indentshiftfirst","indentalign","indentshift");
        if (indent.indentalignfirst !== MML.INDENTALIGN.INDENTALIGN) {indent.indentalign = indent.indentalignfirst}
        if (indent.indentalign === MML.INDENTALIGN.AUTO) {indent.indentalign = this.displayAlign}
        if (indent.indentshiftfirst !== MML.INDENTSHIFT.INDENTSHIFT) {indent.indentshift = indent.indentshiftfirst}
        if (indent.indentshift === "auto") {indent.indentshift = "0"}
        var shift = HTMLCSS.length2em(indent.indentshift,mu,HTMLCSS.cwidth);
        var labelspace = HTMLCSS.length2em(values.minlabelspacing,mu,HTMLCSS.cwidth);
        var labelW = labelspace + C[LABEL].bbox.w, labelshift = 0, tw = mw;
        var dIndent = HTMLCSS.length2em(this.displayIndent,mu,HTMLCSS.cwidth);
        s = (CALIGN[LABEL] === MML.INDENTALIGN.RIGHT ? -1 : 1);
        if (indent.indentalign === MML.INDENTALIGN.CENTER) {
          tw += 2 * (labelW - s*(shift + dIndent));
          shift += dIndent;
        } else if (CALIGN[LABEL] === indent.indentalign) {
          if (dIndent < 0) {labelshift = s*dIndent; dIndent = 0}
          shift += s*dIndent; if (labelW > s*shift) shift = s*labelW; shift += labelshift;
          tw += s*shift;
        } else {
          tw += labelW - s*shift + dIndent;
          shift -= s*dIndent;
        }
        var eqn = HTMLCSS.createStack(span,false,"100%");
        HTMLCSS.addBox(eqn,stack); HTMLCSS.alignBox(stack,indent.indentalign,0,shift);
        C[LABEL].parentNode.parentNode.removeChild(C[LABEL].parentNode);
        HTMLCSS.addBox(eqn,C[LABEL]); HTMLCSS.alignBox(C[LABEL],CALIGN[LABEL],0);
        if (HTMLCSS.msieRelativeWidthBug) {stack.style.top = C[LABEL].style.top = ""}
        if (hasRelativeWidth) {stack.style.width = values.width; span.bbox.width = "100%"}
        C[LABEL].style[s === 1 ? "marginLeft" : "marginRight"] = HTMLCSS.Em(s*labelshift);
        span.bbox.tw = tw;
        span.style.minWidth = span.bbox.minWidth = HTMLCSS.Em(tw);
        eqn.style.minWidth = eqn.bbox.minWidth = HTMLCSS.Em(tw/scale);
      }
      //
      //  Finish the table
      //
      if (!hasRelativeWidth) {this.HTMLhandleSpace(span)}
      var color = this.HTMLhandleColor(span);
      //
      //  Handle relative-sized background color
      //
      if (color && hasRelativeWidth) {
        if (!frame) {
          frame = HTMLCSS.createFrame(stack,fH,0,fW,0,"none");
          HTMLCSS.addBox(stack,frame); HTMLCSS.placeBox(frame,0,fY,true);
          frame.style.width = "100%";
        }
        frame.style.backgroundColor = color.style.backgroundColor;
        frame.parentNode.insertBefore(frame,frame.parentNode.firstChild);
        color.parentNode.removeChild(color);
      }
      return span;
    },
    HTMLhandleSpace: function (span) {
      span.bbox.keepPadding = true; span.bbox.exact = true;
      if (!this.hasFrame && span.bbox.width == null)
        {span.style.paddingLeft = span.style.paddingRight = HTMLCSS.Em(1/6)}
      this.SUPER(arguments).HTMLhandleSpace.call(this,span);
    }
  });
  
  MML.mtd.Augment({
    toHTML: function (span,HW,D) {
      span = this.HTMLcreateSpan(span);
      if (this.data[0]) {
        var box = this.data[0].toHTML(span);
        if (D != null) {box = this.data[0].HTMLstretchV(span,HW,D)}
        else if (HW != null) {box = this.data[0].HTMLstretchH(span,HW)}
        span.bbox = box.bbox;
      }
      this.HTMLhandleSpace(span);
      this.HTMLhandleColor(span);
      return span;
    },
    HTMLstretchH: MML.mbase.HTMLstretchH,
    HTMLstretchV: MML.mbase.HTMLstretchV
  });

  MathJax.Hub.Startup.signal.Post("HTML-CSS mtable Ready");
  MathJax.Ajax.loadComplete(HTMLCSS.autoloadDir+"/mtable.js");
  
});


/*************************************************************
 *
 *  MathJax/jax/output/PreviewHTML/jax.js
 *
 *  Implements the PreviewHTML OutputJax that displays mathematics
 *  using HTML to position the characters from math fonts
 *  in their proper locations.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2013-2017 The MathJax Consortium
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


(function (AJAX,HUB,HTML,PHTML) {
  var MML;

  var EVENT, TOUCH, HOVER; // filled in later

  var FONTS = "'Times New Roman',Times,STIXGeneral,serif";
  var STYLES = {
    ".MJXp-script": {"font-size":".8em"},

    ".MJXp-right": {
      "-webkit-transform-origin":"right",
      "-moz-transform-origin":"right",
      "-ms-transform-origin":"right",
      "-o-transform-origin":"right",
      "transform-origin":"right"
    },

    ".MJXp-bold": {"font-weight":"bold"},
    ".MJXp-italic": {"font-style":"italic"},
    ".MJXp-scr": {"font-family":"MathJax_Script,"+FONTS},
    ".MJXp-frak": {"font-family":"MathJax_Fraktur,"+FONTS},
    ".MJXp-sf": {"font-family":"MathJax_SansSerif,"+FONTS},
    ".MJXp-cal": {"font-family":"MathJax_Caligraphic,"+FONTS},
    ".MJXp-mono": {"font-family":"MathJax_Typewriter,"+FONTS},
    ".MJXp-largeop": {"font-size":"150%"},
    ".MJXp-largeop.MJXp-int": {"vertical-align":"-.2em"},

    ".MJXp-math": {
      "display": "inline-block",
      "line-height": "1.2",
      "text-indent": "0",
      "font-family": FONTS,
      "white-space":"nowrap",
      "border-collapse":"collapse"
    },
    ".MJXp-display": {
      "display": "block",
      "text-align": "center",
      "margin": "1em 0"
    },
    ".MJXp-math span": {"display": "inline-block"},
    ".MJXp-box":  {"display":"block!important", "text-align": "center"},
    ".MJXp-box:after": {"content": '" "'},  // needed for when there is no DOCTYPE
    ".MJXp-rule": {"display":"block!important", "margin-top":".1em"},
    ".MJXp-char": {"display":"block!important"},

    ".MJXp-mo": {"margin": "0 .15em"},

    ".MJXp-mfrac": {"margin": "0 .125em", "vertical-align":".25em"},
    ".MJXp-denom": {"display": "inline-table!important", "width":"100%"},
    ".MJXp-denom > *": {"display": "table-row!important"},

    ".MJXp-surd": {"vertical-align":"top"},
    ".MJXp-surd > *": {"display":"block!important"},

    ".MJXp-script-box > * ": {"display":"table!important", "height":"50%"},
    ".MJXp-script-box > * > *": {"display":"table-cell!important","vertical-align":"top"},
    ".MJXp-script-box > *:last-child > *": {"vertical-align":"bottom"},
    ".MJXp-script-box > * > * > *": {"display":"block!important"},

    ".MJXp-mphantom": {"visibility": "hidden"},

    ".MJXp-munderover": {"display":"inline-table!important"},
    ".MJXp-over": {"display":"inline-block!important","text-align":"center"},
    ".MJXp-over > *": {"display":"block!important"},
    ".MJXp-munderover > *": {"display":"table-row!important"},

    ".MJXp-mtable": {"vertical-align":".25em", "margin":"0 .125em"},
    ".MJXp-mtable > *": {"display":"inline-table!important", "vertical-align":"middle"},
    ".MJXp-mtr": {"display":"table-row!important"},
    ".MJXp-mtd": {"display":"table-cell!important","text-align":"center","padding":".5em 0 0 .5em"},
    ".MJXp-mtr > .MJXp-mtd:first-child": {"padding-left":0},
    ".MJXp-mtr:first-child > .MJXp-mtd": {"padding-top":0},
    ".MJXp-mlabeledtr": {"display":"table-row!important"},
    ".MJXp-mlabeledtr > .MJXp-mtd:first-child": {"padding-left":0},
    ".MJXp-mlabeledtr:first-child > .MJXp-mtd": {"padding-top":0},
    
    ".MJXp-merror": {
      "background-color": "#FFFF88",
      color:   "#CC0000",
      border:  "1px solid #CC0000",
      padding: "1px 3px",
      "font-style": "normal",
      "font-size":  "90%"
    }
  };
  
  (function () {
    for (var i = 0; i < 10; i++) {
      var scale = "scaleX(."+i+")";
      STYLES[".MJXp-scale"+i] = {
        "-webkit-transform":scale,
        "-moz-transform":scale,
        "-ms-transform":scale,
        "-o-transform":scale,
        "transform":scale
      }
    }
  })();
  
  var BIGDIMEN = 1000000;
  var V = "V", H = "H";

  PHTML.Augment({
    settings: HUB.config.menuSettings,
    config: {styles: STYLES},

    hideProcessedMath: false,           // use display:none until all math is processed

    maxStretchyParts: 1000,            // limit the number of parts allowed for
                                       // stretchy operators. See issue 366.

    Config: function () {
      if (!this.require) {this.require = []}
      this.SUPER(arguments).Config.call(this); var settings = this.settings;
      if (settings.scale) {this.config.scale = settings.scale}
      this.require.push(MathJax.OutputJax.extensionDir+"/MathEvents.js");
    },

    Startup: function () {
      //
      //  Set up event handling
      //
      EVENT = MathJax.Extension.MathEvents.Event;
      TOUCH = MathJax.Extension.MathEvents.Touch;
      HOVER = MathJax.Extension.MathEvents.Hover;
      this.ContextMenu = EVENT.ContextMenu;
      this.Mousedown   = EVENT.AltContextMenu;
      this.Mouseover   = HOVER.Mouseover;
      this.Mouseout    = HOVER.Mouseout;
      this.Mousemove   = HOVER.Mousemove;

      //
      //  Determine pixels per inch
      //
      var div = HTML.addElement(document.body,"div",{style:{width:"5in"}});
      this.pxPerInch = div.offsetWidth/5; div.parentNode.removeChild(div);

      //
      //  Set up styles and preload web fonts
      //
      return AJAX.Styles(this.config.styles,["InitializePHTML",this]);
    },
    InitializePHTML: function () {
    },
    
    preTranslate: function (state) {
      var scripts = state.jax[this.id], i, m = scripts.length,
          script, prev, span, div, jax;
      //
      //  Loop through the scripts
      //
      for (i = 0; i < m; i++) {
        script = scripts[i]; if (!script.parentNode) continue;
        //
        //  Remove any existing output
        //
        prev = script.previousSibling;
        if (prev && String(prev.className).match(/^MathJax(_PHTML)?(_Display)?( MathJax_Process(ing|ed))?$/))
          {prev.parentNode.removeChild(prev)}
        //
        //  Add the span, and a div if in display mode,
        //  then mark it as being processed
        //
        jax = script.MathJax.elementJax; if (!jax) continue;
        jax.PHTML = {display: (jax.root.Get("display") === "block")}
        span = div = HTML.Element("span",{
	  className:"MathJax_PHTML", id:jax.inputID+"-Frame", isMathJax:true, jaxID:this.id,
          oncontextmenu:EVENT.Menu, onmousedown: EVENT.Mousedown,
          onmouseover:EVENT.Mouseover, onmouseout:EVENT.Mouseout, onmousemove:EVENT.Mousemove,
	  onclick:EVENT.Click, ondblclick:EVENT.DblClick,
          // Added for keyboard accessible menu.
          onkeydown: EVENT.Keydown, tabIndex: HUB.getTabOrder(jax)
        });
	if (HUB.Browser.noContextMenu) {
	  span.ontouchstart = TOUCH.start;
	  span.ontouchend = TOUCH.end;
	}
        if (jax.PHTML.display) {
          div = HTML.Element("div",{className:"MathJax_PHTML_Display"});
          div.appendChild(span);
        }
        //
        div.className += " MathJax_Processing";
        script.parentNode.insertBefore(div,script);
      }
    },

    Translate: function (script,state) {
      if (!script.parentNode) return;

      //
      //  Get the data about the math
      //
      var jax = script.MathJax.elementJax, math = jax.root,
          span = document.getElementById(jax.inputID+"-Frame"),
          div = (jax.PHTML.display ? span.parentNode : span);
      //
      //  Typeset the math
      //
      this.initPHTML(math,span);
//      math.setTeXclass();
      try {math.toPreviewHTML(span)} catch (err) {
        if (err.restart) {while (span.firstChild) {span.removeChild(span.firstChild)}}
        throw err;
      }
      //
      //  Put it in place, and remove the processing marker
      //
      div.className = div.className.split(/ /)[0];
      //
      //  Check if we are hiding the math until more is processed
      //
      if (this.hideProcessedMath) {
        //
        //  Hide the math and don't let its preview be removed
        //
        div.className += " MathJax_Processed";
        if (script.MathJax.preview) {
          jax.PHTML.preview = script.MathJax.preview;
          delete script.MathJax.preview;
        }
      }
    },

    postTranslate: function (state) {
      var scripts = state.jax[this.id];
      if (!this.hideProcessedMath) return;
      for (var i = 0, m = scripts.length; i < m; i++) {
        var script = scripts[i];
        if (script && script.MathJax.elementJax) {
          //
          //  Remove the processed marker
          //
          script.previousSibling.className = script.previousSibling.className.split(/ /)[0];
          var data = script.MathJax.elementJax.PHTML;
          //
          //  Remove the preview, if any
          //
          if (data.preview) {
            data.preview.innerHTML = "";
            data.preview.style.display = "none";
            script.MathJax.preview = data.preview;
            delete data.preview;
          }
        }
      }
    },

    getJaxFromMath: function (math) {
      if (math.parentNode.className.match(/MathJax_PHTML_Display/)) {math = math.parentNode}
      do {math = math.nextSibling} while (math && math.nodeName.toLowerCase() !== "script");
      return HUB.getJaxFor(math);
    },
    getHoverSpan: function (jax,math) {return jax.root.PHTMLspanElement()},
    getHoverBBox: function (jax,span,math) {
      var bbox = jax.root.PHTML, em = jax.PHTML.outerEm;
      var BBOX = {w:bbox.w*em, h:bbox.h*em, d:bbox.d*em};
      if (bbox.width) {BBOX.width = bbox.width}
      return BBOX;
    },
    
    Zoom: function (jax,span,math,Mw,Mh) {
      //
      //  Re-render at larger size
      //
      span.className = "MathJax";
      this.idPostfix = "-zoom"; jax.root.toPHTML(span,span); this.idPostfix = "";
      //
      //  Get height and width of zoomed math and original math
      //
      span.style.position = "absolute";
      if (!width) {math.style.position = "absolute"}
      var zW = span.offsetWidth, zH = span.offsetHeight,
          mH = math.offsetHeight, mW = math.offsetWidth;
      if (mW === 0) {mW = math.parentNode.offsetWidth}; // IE7 gets mW == 0?
      span.style.position = math.style.position = "";
      //
      return {Y:-EVENT.getBBox(span).h, mW:mW, mH:mH, zW:zW, zH:zH};
    },

    initPHTML: function (math,span) {},

    Remove: function (jax) {
      var span = document.getElementById(jax.inputID+"-Frame");
      if (span) {
        if (jax.PHTML.display) {span = span.parentNode}
        span.parentNode.removeChild(span);
      }
      delete jax.PHTML;
    },
    
    ID: 0, idPostfix: "",
    GetID: function () {this.ID++; return this.ID},

    VARIANT: {
      "bold": "MJXp-bold",
      "italic": "MJXp-italic",
      "bold-italic": "MJXp-bold MJXp-italic",
      "script": "MJXp-scr",
      "bold-script": "MJXp-scr MJXp-bold",
      "fraktur": "MJXp-frak",
      "bold-fraktur": "MJXp-frak MJXp-bold",
      "monospace": "MJXp-mono",
      "sans-serif": "MJXp-sf",
      "-tex-caligraphic": "MJXp-cal"
    },
    MATHSPACE: {
      veryverythinmathspace:  1/18,
      verythinmathspace:      2/18,
      thinmathspace:          3/18,
      mediummathspace:        4/18,
      thickmathspace:         5/18,
      verythickmathspace:     6/18,
      veryverythickmathspace: 7/18,
      negativeveryverythinmathspace:  -1/18,
      negativeverythinmathspace:      -2/18,
      negativethinmathspace:          -3/18,
      negativemediummathspace:        -4/18,
      negativethickmathspace:         -5/18,
      negativeverythickmathspace:     -6/18,
      negativeveryverythickmathspace: -7/18,

      thin: .08,
      medium: .1,
      thick: .15,

      infinity: BIGDIMEN
    },
    TeX: {
      x_height:         .430554
    },
    pxPerInch: 72,
    em: 16,

    // ### FIXME:  add more here

    DELIMITERS: {
      "(": {dir:V},
      "{": {dir:V, w:.58},
      "[": {dir:V},
      "|": {dir:V, w:.275},
      ")": {dir:V},
      "}": {dir:V, w:.58},
      "]": {dir:V},
      "/": {dir:V},
      "\\": {dir:V},
      "\u2223": {dir:V, w:.275},
      "\u2225": {dir:V, w:.55},
      "\u230A": {dir:V, w:.5},
      "\u230B": {dir:V, w:.5},
      "\u2308": {dir:V, w:.5},
      "\u2309": {dir:V, w:.5},
      "\u27E8": {dir:V, w:.5},
      "\u27E9": {dir:V, w:.5},
      "\u2191": {dir:V, w:.65},
      "\u2193": {dir:V, w:.65},
      "\u21D1": {dir:V, w:.75},
      "\u21D3": {dir:V, w:.75},
      "\u2195": {dir:V, w:.65},
      "\u21D5": {dir:V, w:.75},
      "\u27EE": {dir:V, w:.275},
      "\u27EF": {dir:V, w:.275},
      "\u23B0": {dir:V, w:.6},
      "\u23B1": {dir:V, w:.6}
    },

    REMAPACCENT: {
      "\u20D7":"\u2192",  // vector arrow
      "'": "\u02CB",
      "`": "\u02CA",
      ".": "\u02D9",
      "^": "\u02C6",
      "-": "\u02C9",
      "~": "\u02DC",
      "\u00AF": "\u02C9",  // macron
      "\u00B0": "\u02DA",  // degree sign
      "\u00B4": "\u02CA",  // acute accent
      "\u0300": "\u02CB",  // combining grave
      "\u0301": "\u02CA",  // combining acute
      "\u0302": "\u02C6",  // combining circumflex
      "\u0303": "\u02DC",  // combinig tilde
      "\u0304": "\u02C9",  // combining macron
      "\u0305": "\u02C9",  // combining overline
      "\u0306": "\u02D8",  // combining breve 
      "\u0307": "\u02D9",  // combining dot
      "\u0308": "\u00A8",  // combining double dot
      "\u030C": "\u02C7"   // combining caron
    },
    REMAPACCENTUNDER: {
    },
    
    length2em: function (length,size) {
      if (typeof(length) !== "string") {length = length.toString()}
      if (length === "") {return ""}
      if (length === MML.SIZE.NORMAL) {return 1}
      if (length === MML.SIZE.BIG)    {return 2}
      if (length === MML.SIZE.SMALL)  {return .71}
      if (this.MATHSPACE[length])     {return this.MATHSPACE[length]}
      var match = length.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/);
      var m = parseFloat(match[1]||"1"), unit = match[2];
      if (size == null) {size = 1}
      if (unit === "em") {return m}
      if (unit === "ex") {return m * this.TeX.x_height}
      if (unit === "%")  {return m / 100 * size}
      if (unit === "px") {return m / this.em}
      if (unit === "pt") {return m / 10}                      // 10 pt to an em
      if (unit === "pc") {return m * 1.2}                     // 12 pt to a pc
      if (unit === "in") {return m * this.pxPerInch / this.em}
      if (unit === "cm") {return m * this.pxPerInch / this.em / 2.54}  // 2.54 cm to an inch
      if (unit === "mm") {return m * this.pxPerInch / this.em / 25.4}  // 10 mm to a cm
      if (unit === "mu") {return m / 18}                     // 18mu to an em for the scriptlevel
      return m*size;  // relative to given size (or 1em as default)
    },

    Em: function (m) {
      if (Math.abs(m) < .001) return "0em";
      return (m.toFixed(3).replace(/\.?0+$/,""))+"em";
    },

    arrayEntry: function (a,i) {return a[Math.max(0,Math.min(i,a.length-1))]}

  });

  MathJax.Hub.Register.StartupHook("mml Jax Ready",function () {
    MML = MathJax.ElementJax.mml;

    MML.mbase.Augment({
      toPreviewHTML: function (span,options) {
        return this.PHTMLdefaultSpan(span,options);
      },

      PHTMLdefaultSpan: function (span,options) {
        if (!options) options = {};
        span = this.PHTMLcreateSpan(span);
        this.PHTMLhandleStyle(span);
        this.PHTMLhandleColor(span);
        if (this.isToken) this.PHTMLhandleToken(span);
        for (var i = 0, m = this.data.length; i < m; i++) this.PHTMLaddChild(span,i,options);
        return span;
      },
      PHTMLaddChild: function (span,i,options) {
        var child = this.data[i];
        if (child) {
          if (options.childSpans)
            span = HTML.addElement(span,"span",{className:options.className});
          child.toPreviewHTML(span);
          if (!options.noBBox) {
            this.PHTML.w += child.PHTML.w + child.PHTML.l + child.PHTML.r;
            if (child.PHTML.h > this.PHTML.h) this.PHTML.h = child.PHTML.h;
            if (child.PHTML.d > this.PHTML.d) this.PHTML.d = child.PHTML.d;
            if (child.PHTML.t > this.PHTML.t) this.PHTML.t = child.PHTML.t;
            if (child.PHTML.b > this.PHTML.b) this.PHTML.b = child.PHTML.b;
          }
        } else if (options.forceChild) {HTML.addElement(span,"span")}
      },
      PHTMLstretchChild: function (i,H,D) {
        var data = this.data[i];
        if (data && data.PHTMLcanStretch("Vertical",H,D)) {
          var bbox = this.PHTML, dbox = data.PHTML, w = dbox.w;
          data.PHTMLstretchV(H,D);
          bbox.w += dbox.w - w;
          if (dbox.h > bbox.h) bbox.h = dbox.h;
          if (dbox.d > bbox.d) bbox.d = dbox.d;
        }
      },

      PHTMLcreateSpan: function (span) {
        if (!this.PHTML) this.PHTML = {};
        this.PHTML = {w:0, h:0, d:0, l:0, r:0, t:0, b:0};
        if (this.inferred) return span;
        //  ### FIXME:  This is a hack to handle the different spacing of the
        //  ### integral sign in Times compared to CM fonts
        if (this.type === "mo" && this.data.join("") === "\u222B") {PHTML.lastIsInt = true}
        else if (this.type !== "mspace" || this.width !== "negativethinmathspace") {PHTML.lastIsInt = false}
        //  ###
        if (!this.PHTMLspanID) {this.PHTMLspanID = PHTML.GetID()};
        var id = (this.id || "MJXp-Span-"+this.PHTMLspanID);
        return HTML.addElement(span,"span",{className:"MJXp-"+this.type, id:id});
      },
      PHTMLspanElement: function () {
        if (!this.PHTMLspanID) {return null}
        return document.getElementById(this.id||"MJXp-Span-"+this.PHTMLspanID);
      },

      PHTMLhandleToken: function (span) {
        var values = this.getValues("mathvariant");
        if (values.mathvariant !== MML.VARIANT.NORMAL) {
          span.className += " "+PHTML.VARIANT[values.mathvariant];
        }
      },

      PHTMLhandleStyle: function (span) {
        if (this.style) span.style.cssText = this.style;
      },

      PHTMLhandleColor: function (span) {
        if (this.mathcolor) {span.style.color = this.mathcolor}
        if (this.mathbackground) {span.style.backgroundColor = this.mathbackground}
      },

      PHTMLhandleScriptlevel: function (span) {
        // ### FIXME:  Need to prevent getting too small
        // ### and should keep track of scaling so it can be compensated for
        var level = this.Get("scriptlevel");
        if (level) span.className += " MJXp-script";
      },

      PHTMLhandleText: function (span,text) {
        var c, n;
        var H = 0, D = 0, W = 0;
        for (var i = 0, m = text.length; i < m; i++) {
          n = text.charCodeAt(i); c = text.charAt(i);
          if (n >= 0xD800 && n < 0xDBFF) {
            i++; n = (((n-0xD800)<<10)+(text.charCodeAt(i)-0xDC00))+0x10000;
          }
          var h = .7, d = .22, w = .5;
          if (n < 127) {
            if (c.match(/[A-Za-ehik-or-xz0-9]/)) d = 0;
            if (c.match(/[A-HK-Z]/)) {w = .67} else if (c.match(/[IJ]/)) {w = .36}
            if (c.match(/[acegm-su-z]/)) {h = .45} else if (c.match(/[ij]/)) {h = .75}
            if (c.match(/[ijlt]/)) w = .28;
          }
          if (PHTML.DELIMITERS[c]) {w = PHTML.DELIMITERS[c].w || .4}
          // ### FIXME:  handle Greek
          // ### Combining diacriticals (all sets), spacing modifiers
          // ### arrows (all sets), widths of braces
          if (h > H) H = h; if (d > D) D = d; W += w;
        }
        if (!this.CHML) this.PHTML = {};
        this.PHTML = {h:.9, d:.3, w:W, l:0, r:0, t:H, b:D};
        HTML.addText(span,text);
      },

      PHTMLbboxFor: function (n) {
        if (this.data[n] && this.data[n].PHTML) return this.data[n].PHTML;
        return {w:0, h:0, d:0, l:0, r:0, t:0, b:0};
      },

      PHTMLcanStretch: function (direction,H,D) {
        if (this.isEmbellished()) {
          var core = this.Core();
          if (core && core !== this) {return core.PHTMLcanStretch(direction,H,D)}
        }
        return false;
      },
      PHTMLstretchV: function (h,d) {},
      PHTMLstretchH: function (w) {},

      CoreParent: function () {
        var parent = this;
        while (parent && parent.isEmbellished() &&
               parent.CoreMO() === this && !parent.isa(MML.math)) {parent = parent.Parent()}
        return parent;
      },
      CoreText: function (parent) {
        if (!parent) {return ""}
        if (parent.isEmbellished()) {return parent.CoreMO().data.join("")}
        while ((parent.isa(MML.mrow) || parent.isa(MML.TeXAtom) ||
                parent.isa(MML.mstyle) || parent.isa(MML.mphantom)) &&
                parent.data.length === 1 && parent.data[0]) {parent = parent.data[0]}
        if (!parent.isToken) {return ""} else {return parent.data.join("")}
      }

    });

    MML.chars.Augment({
      toPreviewHTML: function (span) {
        var text = this.toString().replace(/[\u2061-\u2064]/g,"");
        this.PHTMLhandleText(span,text);
      }
    });
    MML.entity.Augment({
      toPreviewHTML: function (span) {
        var text = this.toString().replace(/[\u2061-\u2064]/g,"");
        this.PHTMLhandleText(span,text);
      }
    });

    MML.math.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLdefaultSpan(span);
        if (this.Get("display") === "block") {span.className += " MJXp-display"}
        return span;
      }
    });

    MML.mo.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLdefaultSpan(span);
        this.PHTMLadjustAccent(span);
        var values = this.getValues("lspace","rspace","scriptlevel","displaystyle","largeop");
        if (values.scriptlevel === 0) {
          this.PHTML.l = PHTML.length2em(values.lspace);
          this.PHTML.r = PHTML.length2em(values.rspace);
          span.style.marginLeft = PHTML.Em(this.PHTML.l);
          span.style.marginRight = PHTML.Em(this.PHTML.r);
        } else {
          this.PHTML.l = .15;
          this.PHTML.r = .1;
        }
        if (values.displaystyle && values.largeop) {
          var box = HTML.Element("span",{className:"MJXp-largeop"});
          box.appendChild(span.firstChild); span.appendChild(box);
          this.PHTML.h *= 1.2; this.PHTML.d *= 1.2;
          if (this.data.join("") === "\u222B") box.className += " MJXp-int";
        }
        // ### FIXME:  Handle embellished op spacing
        // ### FIXME:  Remap minus signs
        return span;
      },
      PHTMLadjustAccent: function (span) {
        var parent = this.CoreParent();
        if (parent && parent.isa(MML.munderover) && 
            this.CoreText(parent.data[parent.base]).length === 1) {
          var over = parent.data[parent.over], under = parent.data[parent.under];
          var c = this.data.join(""), C;
          if (over && this === over.CoreMO() && parent.Get("accent")) {C = PHTML.REMAPACCENT[c]}
          else if (under && this === under.CoreMO() && parent.Get("accentunder")) {C = PHTML.REMAPACCENTUNDER[c]}
          if (C) c = span.innerHTML = C;
          if (c.match(/[\u02C6-\u02DC\u00A8]/)) {this.PHTML.acc = -.52}
          else if (c === "\u2192") {this.PHTML.acc = -.15; this.PHTML.vec = true}
        }
      },
      PHTMLcanStretch: function (direction,H,D) {
        if (!this.Get("stretchy")) {return false}
        var c = this.data.join("");
        if (c.length > 1) {return false}
        c = PHTML.DELIMITERS[c];
        var stretch = (c && c.dir === direction.substr(0,1));
        if (stretch) {
          stretch = (this.PHTML.h !== H || this.PHTML.d !== D ||
            (this.Get("minsize",true) || this.Get("maxsize",true)));
        }
        return stretch;
      },
      PHTMLstretchV: function (h,d) {
        var span = this.PHTMLspanElement(), bbox = this.PHTML; //bbox.w = .4; // ## adjust width
        var values = this.getValues("symmetric","maxsize","minsize");
        if (values.symmetric) {H = 2*Math.max(h-.25,d+.25)} else {H = h + d}
        values.maxsize = PHTML.length2em(values.maxsize,bbox.h+bbox.d);
        values.minsize = PHTML.length2em(values.minsize,bbox.h+bbox.d);
        H = Math.max(values.minsize,Math.min(values.maxsize,H));
        var scale = H/(bbox.h+bbox.d-.3);  // ### adjusted for extra tall bbox
        var box = HTML.Element("span",{style:{"font-size":PHTML.Em(scale)}});
        if (scale > 1.25) {
          var sX = Math.ceil(1.25/scale * 10);
          box.className = "MJXp-right MJXp-scale"+sX;
          box.style.marginLeft = PHTML.Em(bbox.w*(sX/10-1)+.07);
          bbox.w *= scale*sX/10;
        }
        box.appendChild(span.firstChild); span.appendChild(box);
        if (values.symmetric) span.style.verticalAlign = PHTML.Em(.25*(1-scale));
      }
    });

    MML.mspace.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLdefaultSpan(span);
        var values = this.getValues("height","depth","width");
        var w = PHTML.length2em(values.width),
            h = PHTML.length2em(values.height),
            d = PHTML.length2em(values.depth);
        var bbox = this.PHTML;
        bbox.w = w; bbox.h = h; bbox.d = d;
        if (w < 0) {
          //  ### FIXME:  lastIsInt hack
          if (!PHTML.lastIsInt) span.style.marginLeft = PHTML.Em(w);
          w = 0;
        }
        span.style.width = PHTML.Em(w);
        span.style.height = PHTML.Em(h+d);
        if (d) span.style.verticalAlign = PHTML.Em(-d);
        return span;
      }
    });

    MML.mpadded.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLdefaultSpan(span,{
          childSpans:true, className:"MJXp-box", forceChild:true
        });
        var child = span.firstChild;
        var values = this.getValues("width","height","depth","lspace","voffset");
        var dimen = this.PHTMLdimen(values.lspace);
        var T = 0, B = 0, L = dimen.len, R = -dimen.len, V = 0;
        if (values.width !== "") {
          dimen = this.PHTMLdimen(values.width,"w",0);
          if (dimen.pm) {R += dimen.len} else {span.style.width = PHTML.Em(dimen.len)}
        }
        if (values.height !== "") {
          dimen = this.PHTMLdimen(values.height,"h",0);
          if (!dimen.pm) T += -this.PHTMLbboxFor(0).h;
          T += dimen.len;
        }
        if (values.depth !== "")  {
          dimen = this.PHTMLdimen(values.depth,"d",0);
          if (!dimen.pm) {B += -this.PHTMLbboxFor(0).d; V += -dimen.len}
          B += dimen.len;
        }
        if (values.voffset !== "") {
          dimen = this.PHTMLdimen(values.voffset);
          T -= dimen.len; B += dimen.len;
          V += dimen.len;
        }
        if (T) child.style.marginTop = PHTML.Em(T);
        if (B) child.style.marginBottom = PHTML.Em(B);
        if (L) child.style.marginLeft = PHTML.Em(L);
        if (R) child.style.marginRight = PHTML.Em(R);
        if (V) span.style.verticalAlign = PHTML.Em(V);
        return span;
      },
      PHTMLdimen: function (length,d,m) {
        if (m == null) {m = -BIGDIMEN}
        length = String(length);
        var match = length.match(/width|height|depth/);
        var size = (match ? this.PHTML[match[0].charAt(0)] : (d ? this.PHTML[d] : 0));
        return {len: PHTML.length2em(length,size)||0, pm: !!length.match(/^[-+]/)};
      }
    });

    MML.munderover.Augment({
      toPreviewHTML: function (span) {
	var values = this.getValues("displaystyle","accent","accentunder","align");
        var base = this.data[this.base];
	if (!values.displaystyle && base != null &&
	    (base.movablelimits || base.CoreMO().Get("movablelimits"))) {
          span = MML.msubsup.prototype.toPreviewHTML.call(this,span);
          //
          //  Change class to msubsup for CSS rules.
          //  ### FIXME: should this be handled via adding another class instead?
          //
          span.className = span.className.replace(/munderover/,"msubsup");
          return span;
        }
        span = this.PHTMLdefaultSpan(span,{childSpans:true, className:"", noBBox:true});
        var obox = this.PHTMLbboxFor(this.over),
            ubox = this.PHTMLbboxFor(this.under),
            bbox = this.PHTMLbboxFor(this.base),
            BBOX = this.PHTML, acc = obox.acc;
        if (this.data[this.over]) {
          if (span.lastChild.firstChild){
            span.lastChild.firstChild.style.marginLeft = obox.l =
              span.lastChild.firstChild.style.marginRight = obox.r = 0;
          }
          var over = HTML.Element("span",{},[["span",{className:"MJXp-over"}]]);
          over.firstChild.appendChild(span.lastChild);
          if (span.childNodes.length > (this.data[this.under] ? 1 : 0))
            over.firstChild.appendChild(span.firstChild);
          this.data[this.over].PHTMLhandleScriptlevel(over.firstChild.firstChild);
          if (acc != null) {
            if (obox.vec) {
              over.firstChild.firstChild.firstChild.style.fontSize = "60%";
              obox.h *= .6; obox.d *= .6; obox.w *= .6;
            }
            acc = acc - obox.d + .1; if (bbox.t != null) {acc += bbox.t - bbox.h}
            over.firstChild.firstChild.style.marginBottom = PHTML.Em(acc);
          }
          if (span.firstChild) {span.insertBefore(over,span.firstChild)}
            else {span.appendChild(over)}
        }
        if (this.data[this.under]) {
          if (span.lastChild.firstChild) {
            span.lastChild.firstChild.style.marginLeft = ubox.l =
              span.lastChild.firstChild.marginRight = ubox.r = 0;
          }
          this.data[this.under].PHTMLhandleScriptlevel(span.lastChild);
        }
        BBOX.w = Math.max(.8*obox.w,.8*ubox.w,bbox.w);
        BBOX.h = .8*(obox.h+obox.d+(acc||0)) + bbox.h;
        BBOX.d = bbox.d + .8*(ubox.h+ubox.d);
        return span;
      }
    });

    MML.msubsup.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLdefaultSpan(span,{noBBox:true});
        if (!this.data[this.base]) {
          if (span.firstChild) {span.insertBefore(HTML.Element("span"),span.firstChild)}
            else {span.appendChild(HTML.Element("span"))}
        }
        var base = this.data[this.base], sub = this.data[this.sub], sup = this.data[this.sup];
        if (!base) base = {bbox: {h:.8, d:.2}};
        span.firstChild.style.marginRight = ".05em";
        var h = Math.max(.4,base.PHTML.h-.4),
            d = Math.max(.2,base.PHTML.d+.1);
        var bbox = this.PHTML;
        if (sup && sub) {
          var box = HTML.Element("span",{className:"MJXp-script-box", style:{
            height: PHTML.Em(h+sup.PHTML.h*.8 + d+sub.PHTML.d*.8),
            "vertical-align": PHTML.Em(-d-sub.PHTML.d*.8)
          }},[
            ["span",{},[["span",{},[["span",{
              style:{"margin-bottom":PHTML.Em(-(sup.PHTML.d-.05))}
            }]]]]],
            ["span",{},[["span",{},[["span",{
              style:{"margin-top":PHTML.Em(-(sup.PHTML.h-.05))}
            }]]]]]
          ]);
          sub.PHTMLhandleScriptlevel(box.firstChild);
          sup.PHTMLhandleScriptlevel(box.lastChild);
          box.firstChild.firstChild.firstChild.appendChild(span.lastChild);
          box.lastChild.firstChild.firstChild.appendChild(span.lastChild);
          span.appendChild(box);
          bbox.h = Math.max(base.PHTML.h,sup.PHTML.h*.8+h);
          bbox.d = Math.max(base.PHTML.d,sub.PHTML.d*.8+d);
          bbox.w = base.PHTML.w + Math.max(sup.PHTML.w,sub.PHTML.w) + .07;
        } else if (sup) {
          span.lastChild.style.verticalAlign = PHTML.Em(h);
          sup.PHTMLhandleScriptlevel(span.lastChild);
          bbox.h = Math.max(base.PHTML.h,sup.PHTML.h*.8+h);
          bbox.d = Math.max(base.PHTML.d,sup.PHTML.d*.8-h);
          bbox.w = base.PHTML.w + sup.PHTML.w + .07;
        } else if (sub) {
          span.lastChild.style.verticalAlign = PHTML.Em(-d);
          sub.PHTMLhandleScriptlevel(span.lastChild);
          bbox.h = Math.max(base.PHTML.h,sub.PHTML.h*.8-d);
          bbox.d = Math.max(base.PHTML.d,sub.PHTML.d*.8+d);
          bbox.w = base.PHTML.w + sub.PHTML.w + .07;
        }
        return span;
      }
    });

    MML.mfrac.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLdefaultSpan(span,{
          childSpans:true, className:"MJXp-box", forceChild:true, noBBox:true
        });
        var values = this.getValues("linethickness","displaystyle");
        if (!values.displaystyle) {
          if (this.data[0]) this.data[0].PHTMLhandleScriptlevel(span.firstChild);
          if (this.data[1]) this.data[1].PHTMLhandleScriptlevel(span.lastChild);
        }
        var denom = HTML.Element("span",{className:"MJXp-box"},[
          ["span",{className:"MJXp-denom"},[                        // inline-table
            ["span",{},[["span",{className:"MJXp-rule",style:{height:"1em"}}]]],
            ["span"]                                                // spans are table-row
          ]]
        ]);
        denom.firstChild.lastChild.appendChild(span.lastChild);
        span.appendChild(denom);
        var nbox = this.PHTMLbboxFor(0), dbox = this.PHTMLbboxFor(1), bbox = this.PHTML;
        bbox.w = Math.max(nbox.w,dbox.w) * .8;
        bbox.h = nbox.h+nbox.d + .1 + .25;
        bbox.d = dbox.h+dbox.d - .25;
        bbox.l = bbox.r = .125;
        values.linethickness = Math.max(0,PHTML.length2em(values.linethickness||"0",0));
        if (values.linethickness) {
          var rule = denom.firstChild.firstChild.firstChild;
          var t = PHTML.Em(values.linethickness);
          rule.style.borderTop = "none";
          rule.style.borderBottom = (values.linethickness < .15 ? "1px" : t)+" solid";
          rule.style.margin = t+" 0";
          t = values.linethickness;
          denom.style.marginTop = PHTML.Em(3*t-1.2);
          span.style.verticalAlign = PHTML.Em(1.5*t + .1);
          bbox.h += 1.5*t - .1; bbox.d += 1.5*t;
        } else {
          denom.style.marginTop = "-.7em";
        }
        return span;
      }
    });

    MML.msqrt.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLdefaultSpan(span,{
          childSpans:true, className:"MJXp-box", forceChild:true, noBBox:true
        });
        this.PHTMLlayoutRoot(span,span.firstChild);
        return span;
      },
      PHTMLlayoutRoot: function (span,base) {
        var bbox = this.PHTMLbboxFor(0);
        var scale = Math.ceil((bbox.h+bbox.d+.14)*100), t = PHTML.Em(14/scale);
        var surd = HTML.Element("span",{className:"MJXp-surd"},[
          ["span",{style:{"font-size":scale+"%","margin-top":t}},["\u221A"]]
        ]);
        var root = HTML.Element("span",{className:"MJXp-root"},[
          ["span",{className:"MJXp-rule",style:{"border-top":".08em solid"}}]
        ]);
        var W = (1.2/2.2)*scale/100; // width-of-surd = (height/H-to-W-ratio)
        if (scale > 150) {
          var sX = Math.ceil(150/scale * 10);
          surd.firstChild.className = "MJXp-right MJXp-scale"+sX;
          surd.firstChild.style.marginLeft = PHTML.Em(W*(sX/10-1)/scale*100);
          W = W*sX/10;
          root.firstChild.style.borderTopWidth = PHTML.Em(.08/Math.sqrt(sX/10));
        }
        root.appendChild(base);
        span.appendChild(surd);
        span.appendChild(root);
        this.PHTML.h = bbox.h + .18; this.PHTML.d = bbox.d;
        this.PHTML.w = bbox.w + W; 
        return span;
      }
    });

    MML.mroot.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLdefaultSpan(span,{
          childSpans:true, className:"MJXp-box", forceChild:true, noBBox:true
        });
        var rbox = this.PHTMLbboxFor(1), root = span.removeChild(span.lastChild);
        var sqrt = this.PHTMLlayoutRoot(HTML.Element("span"),span.firstChild);
        root.className = "MJXp-script";  // ### FIXME: should be scriptscript
        var scale = parseInt(sqrt.firstChild.firstChild.style.fontSize);
        var v = .55*(scale/120) + rbox.d*.8, r = -.6*(scale/120);
        if (scale > 150) {r *= .95*Math.ceil(150/scale*10)/10}
        root.style.marginRight = PHTML.Em(r); root.style.verticalAlign = PHTML.Em(v);
        if (-r > rbox.w*.8) root.style.marginLeft = PHTML.Em(-r-rbox.w*.8); // ### depends on rbox.w
        span.appendChild(root); span.appendChild(sqrt);
        this.PHTML.w += Math.max(0,rbox.w*.8+r);
        this.PHTML.h = Math.max(this.PHTML.h,rbox.h*.8+v);
        return span;
      },
      PHTMLlayoutRoot: MML.msqrt.prototype.PHTMLlayoutRoot
    });
    
    MML.mfenced.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLcreateSpan(span);
        this.PHTMLhandleStyle(span);
        this.PHTMLhandleColor(span);
        //
        //  Make row of open, data, sep, ... data, close
        //
        this.addFakeNodes();
        this.PHTMLaddChild(span,"open",{});
        for (var i = 0, m = this.data.length; i < m; i++) {
          this.PHTMLaddChild(span,"sep"+i,{});
          this.PHTMLaddChild(span,i,{});
        }
        this.PHTMLaddChild(span,"close",{});
        //
        //  Check for streching the elements
        //
        var H = this.PHTML.h, D = this.PHTML.d;
        this.PHTMLstretchChild("open",H,D);
        for (i = 0, m = this.data.length; i < m; i++) {
          this.PHTMLstretchChild("sep"+i,H,D);
          this.PHTMLstretchChild(i,H,D);
        }
        this.PHTMLstretchChild("close",H,D);
        return span;
      }
    });

    MML.mrow.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLdefaultSpan(span);
        var H = this.PHTML.h, D = this.PHTML.d;
        for (var i = 0, m = this.data.length; i < m; i++) this.PHTMLstretchChild(i,H,D);
        return span;
      }
    });

    MML.mstyle.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLdefaultSpan(span);
        this.PHTMLhandleScriptlevel(span);
        return span;
      }
    });

    MML.TeXAtom.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLdefaultSpan(span);
        // ### FIXME: handle TeX class?
        span.className = "MJXp-mrow";
        return span;
      }
    });

    MML.mtable.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLdefaultSpan(span,{noBBox:true});
        var values = this.getValues("columnalign","rowalign","columnspacing","rowspacing",
                                    "columnwidth","equalcolumns","equalrows",
                                    "columnlines","rowlines","frame","framespacing",
                                    "align","width");
        var SPLIT = MathJax.Hub.SplitList, i, m, j, n;
        var CSPACE = SPLIT(values.columnspacing),
            RSPACE = SPLIT(values.rowspacing),
            CALIGN = SPLIT(values.columnalign),
            RALIGN = SPLIT(values.rowalign);
        for (i = 0, m = CSPACE.length; i < m; i++) {CSPACE[i] = PHTML.length2em(CSPACE[i])}
        for (i = 0, m = RSPACE.length; i < m; i++) {RSPACE[i] = PHTML.length2em(RSPACE[i])}

        var table = HTML.Element("span");
        while (span.firstChild) table.appendChild(span.firstChild);
        span.appendChild(table);
        var H = 0, W = 0;
        for (i = 0, m = this.data.length; i < m; i++) {
          var row = this.data[i];
          if (row) {
            var rspace = PHTML.arrayEntry(RSPACE,i-1), ralign = PHTML.arrayEntry(RALIGN,i);
            var rbox = row.PHTML, rspan = row.PHTMLspanElement();
            rspan.style.verticalAlign = ralign;
            var k = (row.type === "mlabeledtr" ? 1 : 0);
            for (j = 0, n = row.data.length; j < n-k; j++) {
              var cell = row.data[j+k];
              if (cell) {
                var cspace = PHTML.arrayEntry(CSPACE,j-1), calign = PHTML.arrayEntry(CALIGN,j);
                var cspan = cell.PHTMLspanElement();
                if (j) {rbox.w += cspace; cspan.style.paddingLeft = PHTML.Em(cspace)}
                if (i) cspan.style.paddingTop = PHTML.Em(rspace);
                cspan.style.textAlign = calign;
              }
            }
            H += rbox.h + rbox.d; if (i) {H += rspace}
            if (rbox.w > W) W = rbox.w;
          }
        }
        var bbox = this.PHTML;
        bbox.w = W; bbox.h = H/2 + .25; bbox.d = H/2 - .25;
        bbox.l = bbox.r = .125;
        return span;
      }
    });
    MML.mlabeledtr.Augment({
      PHTMLdefaultSpan: function (span,options) {
        if (!options) options = {};
        span = this.PHTMLcreateSpan(span);
        this.PHTMLhandleStyle(span);
        this.PHTMLhandleColor(span);
        if (this.isToken) this.PHTMLhandleToken(span);
        // skip label for now
        for (var i = 1, m = this.data.length; i < m; i++) this.PHTMLaddChild(span,i,options);
        return span;
      }
    });

    MML.semantics.Augment({
      toPreviewHTML: function (span) {
        span = this.PHTMLcreateSpan(span);
        if (this.data[0]) {
          this.data[0].toPreviewHTML(span);
          MathJax.Hub.Insert(this.data[0].PHTML||{},this.PHTML);
        }
        return span;
      }
    });
    MML.annotation.Augment({toPreviewHTML: function(span) {}});
    MML["annotation-xml"].Augment({toPreviewHTML: function(span) {}});

    //
    //  Loading isn't complete until the element jax is modified,
    //  but can't call loadComplete within the callback for "mml Jax Ready"
    //  (it would call PreviewHTML's Require routine, asking for the mml jax again)
    //  so wait until after the mml jax has finished processing.
    //  
    //  We also need to wait for the onload handler to run, since the loadComplete
    //  will call Config and Startup, which need to modify the body.
    //
    MathJax.Hub.Register.StartupHook("onLoad",function () {
      setTimeout(MathJax.Callback(["loadComplete",PHTML,"jax.js"]),0);
    });
  });

  MathJax.Hub.Register.StartupHook("End Cookie", function () {  
    if (HUB.config.menuSettings.zoom !== "None")
      {AJAX.Require("[MathJax]/extensions/MathZoom.js")}
  });
    
})(MathJax.Ajax,MathJax.Hub,MathJax.HTML,MathJax.OutputJax.PreviewHTML);

/*************************************************************
 *
 *  MathJax/extensions/fast-preview.js
 *  
 *  Implements a fast preview using the PreviewHTML output jax
 *  and then a slower update to the more accurate HTML-CSS output
 *  (or whatever the user has selected).
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2014-2017 The MathJax Consortium
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

(function (HUB,HTML,BROWSER) {
  
  var SETTINGS = HUB.config.menuSettings;
  var JAX = MathJax.OutputJax;
  var msieColorBug = BROWSER.isMSIE && (document.documentMode||0) < 8;

  var FastPreview = MathJax.Extension["fast-preview"] = {
    version: "2.7.2",
    enabled: true,

    //
    //  Configuration for the chunking of the main output
    //  after the previews have been created, and other configuration.
    //
    config: HUB.CombineConfig("fast-preview",{
      Chunks: {EqnChunk: 10000, EqnChunkFactor: 1, EqnChunkDelay: 0},
      color: "inherit!important",
      updateTime: 30, updateDelay: 6,
      messageStyle: "none",
      disabled: BROWSER.isMSIE && !BROWSER.versionAtLeast("8.0")
    }),

    //
    //  Ajust the chunking of the output jax
    //
    Config: function () {
      if (HUB.config["CHTML-preview"])
        MathJax.Hub.Config({"fast-preview": HUB.config["CHTML-preview"]});
      var update, delay, style, done, saved;
      var config = this.config;

      if (!config.disabled && SETTINGS.FastPreview == null)
        HUB.Config({menuSettings:{FastPreview:true}});
      if (SETTINGS.FastPreview) {
        MathJax.Ajax.Styles({".MathJax_Preview .MJXf-math":{color:config.color}});
        HUB.Config({"HTML-CSS": config.Chunks, CommonHTML: config.Chunks, SVG: config.Chunks});
      }
      HUB.Register.MessageHook("Begin Math Output",function () {
        if (!done && FastPreview.Active()) {
          update = HUB.processUpdateTime; delay = HUB.processUpdateDelay;
          style = HUB.config.messageStyle;
          HUB.processUpdateTime = config.updateTime;
          HUB.processUpdateDelay = config.updateDelay;
          HUB.Config({messageStyle: config.messageStyle});
          MathJax.Message.Clear(0,0);
          saved = true;
        }
      });
      HUB.Register.MessageHook("End Math Output",function () {
        if (!done && saved) {
          HUB.processUpdateTime = update;
          HUB.processUpdateDelay = delay;
          HUB.Config({messageStyle: style});
          done = true;
        }
      });
    },
    
    //
    //  Allow page to override user settings (for things like editor previews)
    //
    Disable: function () {this.enabled = false},
    Enable: function () {this.enabled = true},
    
    Active: function () {
      return SETTINGS.FastPreview && this.enabled &&
             !(JAX[SETTINGS.renderer]||{}).noFastPreview;
    },

    //
    //  Insert a preview span, if there isn't one already,
    //  and call the PreviewHTML output jax to create the preview
    //
    Preview: function (data) {
      if (!this.Active() || !data.script.parentNode) return;
      var preview = data.script.MathJax.preview || data.script.previousSibling;
      if (!preview || preview.className !== MathJax.Hub.config.preRemoveClass) {
        preview = HTML.Element("span",{className:MathJax.Hub.config.preRemoveClass});
        data.script.parentNode.insertBefore(preview,data.script);
        data.script.MathJax.preview = preview;
      }
      preview.innerHTML = "";
      preview.style.color = (msieColorBug ? "black" : "inherit");
      return this.postFilter(preview,data);
    },
    postFilter: function (preview,data) {
      //
      //  Load the PreviewHTML jax if it is not already loaded
      //
      if (!data.math.root.toPreviewHTML) {
        var queue = MathJax.Callback.Queue();
        queue.Push(
          ["Require",MathJax.Ajax,"[MathJax]/jax/output/PreviewHTML/config.js"],
          ["Require",MathJax.Ajax,"[MathJax]/jax/output/PreviewHTML/jax.js"]
        );
        HUB.RestartAfter(queue.Push({}));
      }
      data.math.root.toPreviewHTML(preview);
    },

    //
    //  Hook into the input jax postFilter to create the previews as
    //  the input jax are processed.
    //
    Register: function (name) {
      HUB.Register.StartupHook(name+" Jax Require",function () {
        var jax = MathJax.InputJax[name];
        jax.postfilterHooks.Add(["Preview",MathJax.Extension["fast-preview"]],50);
      });
    }
  }

  //
  //  Hook into each input jax
  //
  FastPreview.Register("TeX");
  FastPreview.Register("MathML");
  FastPreview.Register("AsciiMath");
  
  HUB.Register.StartupHook("End Config",["Config",FastPreview]);
  
  HUB.Startup.signal.Post("fast-preview Ready");

})(MathJax.Hub,MathJax.HTML,MathJax.Hub.Browser);

MathJax.Ajax.loadComplete("[MathJax]/extensions/fast-preview.js");


/*************************************************************
 *
 *  MathJax/extensions/AssistiveMML.js
 *  
 *  Implements an extension that inserts hidden MathML into the
 *  page for screen readers or other asistive technology.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2015-2017 The MathJax Consortium
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

(function (AJAX,CALLBACK,HUB,HTML) {
  var SETTINGS = HUB.config.menuSettings;
  
  var AssistiveMML = MathJax.Extension["AssistiveMML"] = {
    version: "2.7.2",
    
    config: HUB.CombineConfig("AssistiveMML",{
      disabled: false,
      styles: {
        ".MJX_Assistive_MathML": {
          position:"absolute!important",
          top: 0, left: 0,
          clip: (HUB.Browser.isMSIE && (document.documentMode||0) < 8 ?
                 "rect(1px 1px 1px 1px)" : "rect(1px, 1px, 1px, 1px)"),
          padding: "1px 0 0 0!important",
          border: "0!important",
          height: "1px!important",
          width: "1px!important",
          overflow: "hidden!important",
          display:"block!important",
          //
          //  Don't allow the assistive MathML become part of the selection
          //
          "-webkit-touch-callout": "none",
          "-webkit-user-select": "none",
          "-khtml-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none"
        },
        ".MJX_Assistive_MathML.MJX_Assistive_MathML_Block": {
          width: "100%!important"
        }
      }
    }),
    
    Config: function () {
      if (!this.config.disabled && SETTINGS.assistiveMML == null)
        HUB.Config({menuSettings:{assistiveMML:true}});
      AJAX.Styles(this.config.styles);
      HUB.Register.MessageHook("End Math",function (msg) {
        if (SETTINGS.assistiveMML) return AssistiveMML.AddAssistiveMathML(msg[1])
      });
    },
    
    //
    //  This sets up a state object that lists the jax and index into the jax,
    //    and a dummy callback that is used to synchronizing with MathJax.
    //    It will be called when the jax are all processed, and that will
    //    let the MathJax queue continue (it will block until then).
    //
    AddAssistiveMathML: function (node) {
      var state = {
        jax: HUB.getAllJax(node), i: 0,
        callback: MathJax.Callback({})
      };
      this.HandleMML(state);
      return state.callback;
    },

    //
    //  This removes the data-mathml attribute and the assistive MathML from
    //  all the jax.
    //
    RemoveAssistiveMathML: function (node) {
      var jax = HUB.getAllJax(node), frame;
      for (var i = 0, m = jax.length; i < m; i++) {
        frame = document.getElementById(jax[i].inputID+"-Frame");
        if (frame && frame.getAttribute("data-mathml")) {
          frame.removeAttribute("data-mathml");
          if (frame.lastChild && frame.lastChild.className.match(/MJX_Assistive_MathML/))
            frame.removeChild(frame.lastChild);
        }
      }
    },

    //
    //  For each jax in the state, look up the frame.
    //  If the jax doesn't use NativeMML and hasn't already been handled:
    //    Get the MathML for the jax, taking resets into account.
    //    Add a data-mathml attribute to the frame, and
    //    Create a span that is not visible on screen and put the MathML in it,
    //      and add it to the frame.
    //  When all the jax are processed, call the callback.
    //
    HandleMML: function (state) {
      var m = state.jax.length, jax, mml, frame, span;
      while (state.i < m) {
        jax = state.jax[state.i];
        frame = document.getElementById(jax.inputID+"-Frame");
        if (jax.outputJax !== "NativeMML" && jax.outputJax !== "PlainSource" &&
            frame && !frame.getAttribute("data-mathml")) {
          try {
            mml = jax.root.toMathML("").replace(/\n */g,"").replace(/<!--.*?-->/g,"");
          } catch (err) {
            if (!err.restart) throw err; // an actual error
            return MathJax.Callback.After(["HandleMML",this,state],err.restart);
          }
          frame.setAttribute("data-mathml",mml);
          span = HTML.addElement(frame,"span",{
            isMathJax: true, unselectable: "on",
            className: "MJX_Assistive_MathML"
              + (jax.root.Get("display") === "block" ? " MJX_Assistive_MathML_Block" : "")
          });
          try {span.innerHTML = mml} catch (err) {}
          frame.style.position = "relative";
          frame.setAttribute("role","presentation");
          frame.firstChild.setAttribute("aria-hidden","true");
          span.setAttribute("role","presentation");
        }
        state.i++;
      }
      state.callback();
    }
    
  };

  HUB.Startup.signal.Post("AssistiveMML Ready");

})(MathJax.Ajax,MathJax.Callback,MathJax.Hub,MathJax.HTML);

//
//  Make sure the toMathML extension is loaded before we signal
//  the load complete for this extension.  Then wait for the end
//  of the user configuration before configuring this extension. 
//
MathJax.Callback.Queue(
  ["Require",MathJax.Ajax,"[MathJax]/extensions/toMathML.js"],
  ["loadComplete",MathJax.Ajax,"[MathJax]/extensions/AssistiveMML.js"],
  function () {
    MathJax.Hub.Register.StartupHook("End Config",["Config",MathJax.Extension.AssistiveMML]);
  }
);


/*************************************************************
 *
 *  [Contrib]/a11y/accessibility-menu.js
 *  
 *  A thin extension to add opt-in menu items for the accessibility
 *  extensions in the a11y contributed directory.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2016-2017 The MathJax Consortium
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

(function(HUB,EXTENSIONS) {
  var SETTINGS = HUB.config.menuSettings;
  var ITEM, MENU; // filled in when MathMenu extension loads
  
  var BIND = (Function.prototype.bind ? function (f,t) {return f.bind(t)} :
              function (f,t) {return function () {f.apply(t,arguments)}});
  var KEYS = Object.keys || function (obj) {
    var keys = [];
    for (var id in obj) {if (obj.hasOwnProperty(id)) keys.push(id)}
    return keys;
  };
  
  //
  //  Set up the a11y path,if it isn't already in place
  //
  var PATH = MathJax.Ajax.config.path;
  if (!PATH.a11y) PATH.a11y = HUB.config.root + "/extensions/a11y";

  var Accessibility = EXTENSIONS["accessibility-menu"] = {
    version: '1.2.3',
    prefix: '', //'Accessibility-',
    defaults: {},
    modules: [],
    MakeOption: function(name) {
      return Accessibility.prefix + name;
    },
    GetOption: function(option) {
      return SETTINGS[Accessibility.MakeOption(option)];
    },
    AddDefaults: function() {
      var keys = KEYS(Accessibility.defaults);
      for (var i = 0, key; key = keys[i]; i++) {
        var option = Accessibility.MakeOption(key);
        if (typeof(SETTINGS[option]) === 'undefined') {
          SETTINGS[option] = Accessibility.defaults[key];
        }
      }
    },
    // Attaches the menu items;
    AddMenu: function() {
      var items = Array(this.modules.length);
      for (var i = 0, module; module = this.modules[i]; i++) items[i] = module.placeHolder;
      var menu = MENU.FindId('Accessibility');
      if (menu) {
        items.unshift(ITEM.RULE());
        menu.submenu.items.push.apply(menu.submenu.items,items);
      } else {
        var renderer = (MENU.FindId("Settings","Renderer")||{}).submenu;
        if (renderer) {
          // move AssitiveMML and InTabOrder from Renderer to Accessibility menu
          items.unshift(ITEM.RULE());
          items.unshift(renderer.items.pop());
          items.unshift(renderer.items.pop());
        }
        items.unshift("Accessibility");
        var menu = ITEM.SUBMENU.apply(ITEM.SUBMENU,items);
        var locale = MENU.IndexOfId('Locale');
        if (locale) {
          MENU.items.splice(locale,0,menu);
        } else {
          MENU.items.push(ITEM.RULE(), menu);
        }
      }
    },
    Register: function(module) {
      Accessibility.defaults[module.option] = false;
      Accessibility.modules.push(module);
    },
    Startup: function() {
      ITEM = MathJax.Menu.ITEM;
      MENU = MathJax.Menu.menu;
      for (var i = 0, module; module = this.modules[i]; i++) module.CreateMenu();
      this.AddMenu();
    },
    LoadExtensions: function () {
      var extensions = [];
      for (var i = 0, module; module = this.modules[i]; i++) {
        if (SETTINGS[module.option]) extensions.push(module.module);
      }
      return (extensions.length ? HUB.Startup.loadArray(extensions) : null);
    }
  };

  var ModuleLoader = MathJax.Extension.ModuleLoader = MathJax.Object.Subclass({
    option: '',
    name: ['',''],
    module: '',
    placeHolder: null,
    submenu: false,
    extension: null,
    Init: function(option, name, module, extension, submenu) {
      this.option = option;
      this.name = [name.replace(/ /g,''),name];
      this.module = module;
      this.extension = extension;
      this.submenu = (submenu || false);
    },
    CreateMenu: function() {
      var load = BIND(this.Load,this);
      if (this.submenu) {
        this.placeHolder =
          ITEM.SUBMENU(this.name,
            ITEM.CHECKBOX(["Activate","Activate"],
                          Accessibility.MakeOption(this.option), {action: load}),
            ITEM.RULE(),
            ITEM.COMMAND(["OptionsWhenActive","(Options when Active)"],null,{disabled:true})
          );
      } else {
        this.placeHolder = ITEM.CHECKBOX(
          this.name, Accessibility.MakeOption(this.option), {action: load}
        );
      }
    },
    Load: function() {
      HUB.Queue(["Require",MathJax.Ajax,this.module,["Enable",this]]);
    },
    Enable: function(menu) {
      var extension = MathJax.Extension[this.extension];
      if (extension) {
        extension.Enable(true,true);
        MathJax.Menu.saveCookie();
      }
    }
  });

  Accessibility.Register(
    ModuleLoader(
      'collapsible', 'Collapsible Math', '[a11y]/collapsible.js', 'collapsible'
    )
  );
  Accessibility.Register(
    ModuleLoader(
      'autocollapse', 'Auto Collapse', '[a11y]/auto-collapse.js', 'auto-collapse'
    )
  );
  Accessibility.Register(
    ModuleLoader(
      'explorer', 'Explorer', '[a11y]/explorer.js', 'explorer', true
    )
  );

  Accessibility.AddDefaults();
  
  HUB.Register.StartupHook('End Extensions', function () {
    HUB.Register.StartupHook('MathMenu Ready', function () {
      Accessibility.Startup();
      HUB.Startup.signal.Post('Accessibility Menu Ready');
    },5);   // run before other extensions' menu hooks even if they are loaded first
  },5);
  
  MathJax.Hub.Register.StartupHook("End Cookie", function () {
    MathJax.Callback.Queue(
      ["LoadExtensions",Accessibility],
      ["loadComplete",MathJax.Ajax,"[a11y]/accessibility-menu.js"]
    );
  });

})(MathJax.Hub,MathJax.Extension);



MathJax.Ajax.loadComplete("[MathJax]/config/TeX-AMS_HTML-full.js");
