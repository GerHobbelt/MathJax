/*
 *  /MathJax/config/AM_SVG-full.js
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
  "[MathJax]/jax/input/AsciiMath/config.js",
  "[MathJax]/jax/output/SVG/config.js",
  "[MathJax]/jax/output/PreviewHTML/config.js",
  "[MathJax]/extensions/asciimath2jax.js",
  "[MathJax]/extensions/MathEvents.js",
  "[MathJax]/extensions/MathZoom.js",
  "[MathJax]/extensions/MathMenu.js",
  "[MathJax]/jax/element/mml/jax.js",
  "[MathJax]/extensions/toMathML.js",
  "[MathJax]/jax/input/AsciiMath/jax.js",
  "[MathJax]/jax/output/SVG/jax.js",
  "[MathJax]/jax/output/SVG/autoload/mtable.js",
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
 *  MathJax/jax/input/AsciiMath/config.js
 *
 *  Initializes the AsciiMath InputJax (the main definition is in
 *  MathJax/jax/input/AsciiMath/jax.js, which is loaded when needed).
 *  
 *  Originally adapted for MathJax by David Lippman.
 *  Additional work done by Davide P. Cervone.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2012-2017 The MathJax Consortium
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

MathJax.InputJax.AsciiMath = MathJax.InputJax({
  id: "AsciiMath",
  version: "2.7.2",
  directory: MathJax.InputJax.directory + "/AsciiMath",
  extensionDir: MathJax.InputJax.extensionDir + "/AsciiMath",
  
  config: {
    fixphi: true,                     // switch phi and varphi unicode values
    useMathMLspacing: true,           // use MathML spacing rather than TeX spacing?
    displaystyle: true,               // put limits above and below operators
    decimalsign: "."                  // can change to "," but watch out for "(1,2)"
  }
});
MathJax.InputJax.AsciiMath.Register("math/asciimath");

MathJax.InputJax.AsciiMath.loadComplete("config.js");

/*************************************************************
 *
 *  MathJax/jax/output/SVG/config.js
 *  
 *  Initializes the SVG OutputJax (the main definition is in
 *  MathJax/jax/input/SVG/jax.js, which is loaded when needed).
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

MathJax.OutputJax.SVG = MathJax.OutputJax({
  id: "SVG",
  version: "2.7.2",
  directory: MathJax.OutputJax.directory + "/SVG",
  extensionDir: MathJax.OutputJax.extensionDir + "/SVG",
  autoloadDir: MathJax.OutputJax.directory + "/SVG/autoload",
  fontDir: MathJax.OutputJax.directory + "/SVG/fonts", // font name added later
  
  config: {
    scale: 100, minScaleAdjust: 50, // global math scaling factor, and minimum adjusted scale factor
    font: "TeX",                    // currently the only font available
    blacker: 1,                     // stroke-width to make fonts blacker
    mtextFontInherit: false,        // to make <mtext> be in page font rather than MathJax font
    undefinedFamily: "STIXGeneral,'Arial Unicode MS',serif",  // fonts to use for missing characters

    addMMLclasses: false,           // keep MathML structure and use CSS classes to mark elements
    useFontCache: true,             // use <use> elements to re-use font paths rather than repeat paths every time
    useGlobalCache: true,           // store fonts in a global <defs> for use in all equations, or one in each equation

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
    
    merrorStyle: {
      fontSize:"90%", color:"#C00", background:"#FF8",
      border: "1px solid #C00", padding:"3px"
    },
    
    styles: {
      ".MathJax_SVG_Display": {
        "text-align": "center",
        margin:       "1em 0em"
      },
      
      //
      //  For mtextFontInherit version of \texttt{}
      //
      ".MathJax_SVG .MJX-monospace": {
        "font-family": "monospace"
      },
      
      //
      //  For mtextFontInherit version of \textsf{}
      //
      ".MathJax_SVG .MJX-sans-serif": {
        "font-family": "sans-serif"
      },
      
      //
      //  For tooltips
      //
      "#MathJax_SVG_Tooltip": {
        "background-color": "InfoBackground", color: "InfoText",
        border: "1px solid black",
        "box-shadow": "2px 2px 5px #AAAAAA",         // Opera 10.5
        "-webkit-box-shadow": "2px 2px 5px #AAAAAA", // Safari 3 and Chrome
        "-moz-box-shadow": "2px 2px 5px #AAAAAA",    // Forefox 3.5
        "-khtml-box-shadow": "2px 2px 5px #AAAAAA",  // Konqueror
        padding: "3px 4px",
        "z-index": 401
      }
    }
  }
});

if (!MathJax.Hub.config.delayJaxRegistration) {MathJax.OutputJax.SVG.Register("jax/mml")}

MathJax.OutputJax.SVG.loadComplete("config.js");

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
 *  MathJax/extensions/asciimath2jax.js
 *  
 *  Implements the AsciiMath to Jax preprocessor that locates AsciiMath
 *  code within the text of a document and replaces it with SCRIPT tags for
 *  processing by MathJax.
 *
 *  Modified by David Lippman, based on tex2jax.js.
 *  Additional work by Davide P. Cervone.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2012-2017 The MathJax Consortium
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

MathJax.Extension.asciimath2jax = {
  version: "2.7.2",
  config: {
    delimiters: [['`','`']],   // The star/stop delimiter pairs for asciimath code

    skipTags: ["script","noscript","style","textarea","pre","code","annotation","annotation-xml"],
                               // The names of the tags whose contents will not be
                               // scanned for math delimiters

    ignoreClass: "asciimath2jax_ignore",   // the class name of elements whose contents should
                                           // NOT be processed by asciimath2jax.  Note that this
                                           // is a regular expression, so be sure to quote any
                                           // regexp special characters

    processClass: "asciimath2jax_process", // the class name of elements whose contents SHOULD
                                           // be processed when they appear inside ones that
                                           // are ignored.  Note that this is a regular expression,
                                           // so be sure to quote any regexp special characters

    preview: "AsciiMath"       // set to "none" to not insert MathJax_Preview spans
                               //   or set to an array specifying an HTML snippet
                               //   to use the same preview for every equation.

  },
  
  //
  //  Tags to ignore when searching for AsciiMath in the page
  //
  ignoreTags: {
    br: (MathJax.Hub.Browser.isMSIE && document.documentMode < 9 ? "\n" : " "),
    wbr: "",
    "#comment": ""
  },
  
  PreProcess: function (element) {
    if (!this.configured) {
      this.config = MathJax.Hub.CombineConfig("asciimath2jax",this.config);
      if (this.config.Augment) {MathJax.Hub.Insert(this,this.config.Augment)}
      this.configured = true;
    }
    if (typeof(element) === "string") {element = document.getElementById(element)}
    if (!element) {element = document.body}
    if (this.createPatterns()) {this.scanElement(element,element.nextSibling)}
  },
  
  createPatterns: function () {
    var starts = [], i, m, config = this.config; this.match = {};
    if (config.delimiters.length === 0) {return false}
    for (i = 0, m = config.delimiters.length; i < m; i++) {
      starts.push(this.patternQuote(config.delimiters[i][0]));
      this.match[config.delimiters[i][0]] = {
        mode: "",
        end: config.delimiters[i][1],
        pattern: this.endPattern(config.delimiters[i][1])
      };
    }
    this.start = new RegExp(starts.sort(this.sortLength).join("|"),"g");
    this.skipTags = new RegExp("^("+config.skipTags.join("|")+")$","i");
    var ignore = [];
    if (MathJax.Hub.config.preRemoveClass) {ignore.push(MathJax.Hub.config.preRemoveClass)}
    if (config.ignoreClass) {ignore.push(config.ignoreClass)}
    this.ignoreClass = (ignore.length ? new RegExp("(^| )("+ignore.join("|")+")( |$)") : /^$/);
    this.processClass = new RegExp("(^| )("+config.processClass+")( |$)");
    return true;
  },
  
  patternQuote: function (s) {return s.replace(/([\^$(){}+*?\-|\[\]\:\\])/g,'\\$1')},
  
  endPattern: function (end) {
    return new RegExp(this.patternQuote(end)+"|\\\\.","g");
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
        if (!element || element.nodeName !== '#text') {return prev}
      }
    }
    return element;
  },
  
  startMatch: function (match,element) {
    var delim = this.match[match[0]];
    if (delim != null) {
      this.search = {
        end: delim.end, mode: delim.mode,
        open: element, olen: match[0].length,
        opos: this.pattern.lastIndex - match[0].length
      };
      this.switchPattern(delim.pattern);
    }
    return element;
  },
  
  endMatch: function (match,element) {
    if (match[0] == this.search.end) {
      this.search.close = element;
      this.search.cpos = this.pattern.lastIndex;
      this.search.clen = (this.search.isBeginEnd ? 0 : match[0].length);
      this.search.matched = true;
      element = this.encloseMath(element);
      this.switchPattern(this.start);
    }
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
          math.nodeValue += math.nextSibling.nodeValue;
        }
      } else {
        var ignore = this.ignoreTags[next.nodeName.toLowerCase()];
        math.nodeValue += (ignore == null ? " " : ignore);
      }
      math.parentNode.removeChild(next);
    }
    var AM = math.nodeValue.substr(search.olen,math.nodeValue.length-search.olen-search.clen);
    math.parentNode.removeChild(math);
    if (this.config.preview !== "none") {this.createPreview(search.mode,AM)}
    math = this.createMathTag(search.mode,AM);
    this.search = {}; this.pattern.lastIndex = 0;
    if (CLOSE) {CLOSE.parentNode.removeChild(CLOSE)}
    return math;
  },
  
  insertNode: function (node) {
    var search = this.search;
    search.close.parentNode.insertBefore(node,search.close);
  },
  
  createPreview: function (mode,asciimath) {
    var previewClass = MathJax.Hub.config.preRemoveClass;
    var preview = this.config.preview;
    if (preview === "none") return;
    if ((this.search.close.previousSibling||{}).className === previewClass) return;
    if (preview === "AsciiMath") {preview = [this.filterPreview(asciimath)]}
    if (preview) {
      preview = MathJax.HTML.Element("span",{className:previewClass},preview);
      this.insertNode(preview);
    }
  },
  
  createMathTag: function (mode,asciimath) {
    var script = document.createElement("script");
    script.type = "math/asciimath" + mode;
    MathJax.HTML.setScript(script,asciimath);
    this.insertNode(script);
    return script;
  },
  
  filterPreview: function (asciimath) {return asciimath}
  
};

// We register the preprocessors with the following priorities:
// - mml2jax.js: 5
// - jsMath2jax.js: 8
// - asciimath2jax.js, tex2jax.js: 10 (default)
// See issues 18 and 484 and the other *2jax.js files.
MathJax.Hub.Register.PreProcessor(["PreProcess",MathJax.Extension.asciimath2jax]);
MathJax.Ajax.loadComplete("[MathJax]/extensions/asciimath2jax.js");

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
        return (mi.length === 1 ||
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
 *  MathJax/jax/input/AsciiMath/jax.js
 *  
 *  An Input Jax for AsciiMath notation 
 *  (see http://www1.chapman.edu/~jipsen/mathml/asciimath.html).
 *  
 *  Originally adapted for MathJax by David Lippman.
 *  Additional work done by Davide P. Cervone.
 *  
 *  The current development repository for AsciiMathML is
 *      https://github.com/mathjax/asciimathml
 *  
 *  A portion of this file is taken from
 *  ASCIIMathML.js Version 2.2 Mar 3, 2014, (c) Peter Jipsen http://www.chapman.edu/~jipsen
 *  and is used by permission of Peter Jipsen, who has agreed to allow us to
 *  release it under the Apache2 license (see below).  That portion is indicated
 *  via comments.
 *  
 *  The remainder falls under the copyright that follows.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2012-2017 The MathJax Consortium
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

(function (ASCIIMATH) {

  var MML;  // Filled in later

  //
  //  Make a documentFragment work-alike that uses MML objects
  //  rather than DOM objects.
  //
  var DOCFRAG = MathJax.Object.Subclass({
    firstChild: null,
    lastChild: null,
    Init: function () {
      this.childNodes = [];
    },
    appendChild: function (node) {
      if (node.parent) {node.parent.removeChild(node)}
      if (this.lastChild) {this.lastChild.nextSibling = node}
      if (!this.firstChild) {this.firstChild = node}
      this.childNodes.push(node); node.parent = this;
      this.lastChild = node;
      return node;
    },
    removeChild: function (node) {
      for (var i = 0, m = this.childNodes.length; i < m; i++)
        {if (this.childNodes[i] === node) break}
      if (i === m) return;
      this.childNodes.splice(i,1);
      if (node === this.firstChild) {this.firstChild = node.nextSibling}
      if (node === this.lastChild) {
        if (!this.childNodes.length) {this.lastChild = null}
          else {this.lastChild = this.childNodes[this.childNodes.length-1]}
      }
      if (i) {this.childNodes[i-1].nextSibling = node.nextSibling}
      node.nextSibling = node.parent = null;
      return node;
    },
    replaceChild: function (node,old) {
      for (var i = 0, m = this.childNodes.length; i < m; i++)
        {if (this.childNodes[i] === old) break}
      if (i) {this.childNodes[i-1].nextSibling = node} else {this.firstChild = node}
      if (i >= m-1) {this.lastChild = node}
      this.childNodes[i] = node; node.nextSibling = old.nextSibling;
      old.nextSibling = old.parent = null;
      return old;
    },
    hasChildNodes: function (node) {
      return (this.childNodes.length>0);	    
    },
    toString: function () {return "{"+this.childNodes.join("")+"}"}
  });
  
  var INITASCIIMATH = function () {
    MML = MathJax.ElementJax.mml;
    var MBASEINIT = MML.mbase.prototype.Init;
    
    //
    //  Make MML elements looks like DOM elements (add the
    //  methods that AsciiMath needs)
    //
    MML.mbase.Augment({
      firstChild: null,
      lastChild: null,
      nodeValue: null,
      nextSibling: null,
      Init: function () {
        var obj = MBASEINIT.apply(this,arguments) || this;
        obj.childNodes = obj.data;
        obj.nodeName = obj.type;
        return obj;
      },
      appendChild: function (node) {
        if (node.parent) {node.parent.removeChild(node)}
        var nodes = arguments;
        if (node.isa(DOCFRAG)) {
          nodes = node.childNodes;
          node.data = node.childNodes = [];
          node.firstChild = node.lastChild = null;
        }
        for (var i = 0, m = nodes.length; i < m; i++) {
          node = nodes[i];
          if (this.lastChild) {this.lastChild.nextSibling = node}
          if (!this.firstChild) {this.firstChild = node}
          this.Append(node);
          this.lastChild = node;
        }
        return node;
      },
      removeChild: function (node) {
        for (var i = 0, m = this.childNodes.length; i < m; i++)
          {if (this.childNodes[i] === node) break}
        if (i === m) return;
        this.childNodes.splice(i,1);
        if (node === this.firstChild) {this.firstChild = node.nextSibling}
        if (node === this.lastChild) {
          if (!this.childNodes.length) {this.lastChild = null}
            else {this.lastChild = this.childNodes[this.childNodes.length-1]}
        }
        if (i) {this.childNodes[i-1].nextSibling = node.nextSibling}
        node.nextSibling = node.parent = null;
        return node;
      },
      replaceChild: function (node,old) {
        for (var i = 0, m = this.childNodes.length; i < m; i++)
          {if (this.childNodes[i] === old) break}
        // FIXME:  make this work with DOCFRAG's?
        if (i) {this.childNodes[i-1].nextSibling = node} else {this.firstChild = node}
        if (i >= m-1) {this.lastChild = node}
        this.SetData(i,node); node.nextSibling = old.nextSibling;
        old.nextSibling = old.parent = null;
        return old;
      },
      hasChildNodes: function (node) {
        return (this.childNodes.length>0);	    
      },
      setAttribute: function (name,value) {this[name] = value}
    });
  };
  
  //
  //  Set up to isolate ASCIIMathML.js
  //
  
  var window = {};  // hide the true window
  
  //
  //  Hide the true document, and add functions that
  //  use and produce MML objects instead of DOM objects
  //
  var document = {
    getElementById: true,
    createElementNS: function (ns,type) {
      var node = MML[type]();
      if (type === "mo" && ASCIIMATH.config.useMathMLspacing) {node.useMMLspacing = 0x80}
      return node;
    },
    createTextNode: function (text) {return MML.chars(text).With({nodeValue:text})},
    createDocumentFragment: function () {return DOCFRAG()}
  };
  
  var navigator = {appName: "MathJax"};  // hide the true navigator object
  
/******************************************************************
 *
 *   The following section is ASCIIMathML.js Version 2.2
 *   (c) Peter Jipsen, used with permission.
 *   
 *   Some sections are commented out to save space in the
 *   minified version (but that is not strictly necessary).
 *   
 ******************************************************************/

/*
ASCIIMathML.js
==============
This file contains JavaScript functions to convert ASCII math notation
and (some) LaTeX to Presentation MathML. The conversion is done while the 
HTML page loads, and should work with Firefox and other browsers that can
render MathML.

Just add the next line to your HTML page with this file in the same folder:

<script type="text/javascript" src="ASCIIMathML.js"></script>

Version 2.2 Mar 3, 2014.
Latest version at https://github.com/mathjax/asciimathml
If you use it on a webpage, please send the URL to jipsen@chapman.edu

Copyright (c) 2014 Peter Jipsen and other ASCIIMathML.js contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
//var asciimath = {};

//(function(){
var mathcolor = "blue";        // change it to "" (to inherit) or another color
//var mathfontsize = "1em";      // change to e.g. 1.2em for larger math
var mathfontfamily = "serif";  // change to "" to inherit (works in IE) 
                               // or another family (e.g. "arial")
//var automathrecognize = false; // writing "amath" on page makes this true
//var checkForMathML = true;     // check if browser can display MathML
//var notifyIfNoMathML = true;   // display note at top if no MathML capability
//var alertIfNoMathML = false;   // show alert box if no MathML capability
//var translateOnLoad = true;    // set to false to do call translators from js 
//var translateASCIIMath = true; // false to preserve `..`
var displaystyle = true;      // puts limits above and below large operators
var showasciiformulaonhover = true; // helps students learn ASCIIMath
var decimalsign = ".";        // change to "," if you like, beware of `(1,2)`!
//var AMdelimiter1 = "`", AMescape1 = "\\\\`"; // can use other characters
//var AMdocumentId = "wikitext" // PmWiki element containing math (default=body)
var fixphi = true;  		//false to return to legacy phi/varphi mapping

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

var isIE = (navigator.appName.slice(0,9)=="Microsoft");
/*
var noMathML = false, translated = false;

if (isIE) { // add MathPlayer info to IE webpages
  document.write("<object id=\"mathplayer\"\
  classid=\"clsid:32F66A20-7614-11D4-BD11-00104BD3F987\"></object>");
  document.write("<?import namespace=\"m\" implementation=\"#mathplayer\"?>");
}

// Add a stylesheet, replacing any previous custom stylesheet (adapted from TW)
function setStylesheet(s) {
	var id = "AMMLcustomStyleSheet";
	var n = document.getElementById(id);
	if(document.createStyleSheet) {
		// Test for IE's non-standard createStyleSheet method
		if(n)
			n.parentNode.removeChild(n);
		// This failed without the &nbsp;
		document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeEnd","&nbsp;<style id='" + id + "'>" + s + "</style>");
	} else {
		if(n) {
			n.replaceChild(document.createTextNode(s),n.firstChild);
		} else {
			n = document.createElement("style");
			n.type = "text/css";
			n.id = id;
			n.appendChild(document.createTextNode(s));
			document.getElementsByTagName("head")[0].appendChild(n);
		}
	}
}

setStylesheet("#AMMLcloseDiv \{font-size:0.8em; padding-top:1em; color:#014\}\n#AMMLwarningBox \{position:absolute; width:100%; top:0; left:0; z-index:200; text-align:center; font-size:1em; font-weight:bold; padding:0.5em 0 0.5em 0; color:#ffc; background:#c30\}");

function init(){
	var msg, warnings = new Array();
	if (document.getElementById==null){
		alert("This webpage requires a recent browser such as Mozilla Firefox");
		return null;
	}
	if (checkForMathML && (msg = checkMathML())) warnings.push(msg);
	if (warnings.length>0) displayWarnings(warnings);
	if (!noMathML) initSymbols();
	return true;
}

function checkMathML(){
  if (navigator.appName.slice(0,8)=="Netscape") 
    if (navigator.appVersion.slice(0,1)>="5") noMathML = null;
    else noMathML = true;
  else if (navigator.appName.slice(0,9)=="Microsoft")
    try {
        var ActiveX = new ActiveXObject("MathPlayer.Factory.1");
        noMathML = null;
    } catch (e) {
        noMathML = true;
    }
  else if (navigator.appName.slice(0,5)=="Opera") 
    if (navigator.appVersion.slice(0,3)>="9.5") noMathML = null;
  else noMathML = true;
//noMathML = true; //uncomment to check
  if (noMathML && notifyIfNoMathML) {
    var msg = "To view the ASCIIMathML notation use Internet Explorer + MathPlayer or Mozilla Firefox 2.0 or later.";
    if (alertIfNoMathML)
       alert(msg);
    else return msg;
  }
}

function hideWarning(){
	var body = document.getElementsByTagName("body")[0];
	body.removeChild(document.getElementById('AMMLwarningBox'));
	body.onclick = null;
}

function displayWarnings(warnings) {
  var i, frag, nd = createElementXHTML("div");
  var body = document.getElementsByTagName("body")[0];
  body.onclick=hideWarning;
  nd.id = 'AMMLwarningBox';
  for (i=0; i<warnings.length; i++) {
	frag = createElementXHTML("div");
	frag.appendChild(document.createTextNode(warnings[i]));
	frag.style.paddingBottom = "1.0em";
	nd.appendChild(frag);
  }
  nd.appendChild(createElementXHTML("p"));
  nd.appendChild(document.createTextNode("For instructions see the "));
  var an = createElementXHTML("a");
  an.appendChild(document.createTextNode("ASCIIMathML"));
  an.setAttribute("href","http://www.chapman.edu/~jipsen/asciimath.html");
  nd.appendChild(an);
  nd.appendChild(document.createTextNode(" homepage"));
  an = createElementXHTML("div");
  an.id = 'AMMLcloseDiv';
  an.appendChild(document.createTextNode('(click anywhere to close this warning)'));
  nd.appendChild(an);
  var body = document.getElementsByTagName("body")[0];
  body.insertBefore(nd,body.childNodes[0]);
}

function translate(spanclassAM) {
  if (!translated) { // run this only once
    translated = true;
    var body = document.getElementsByTagName("body")[0];
    var processN = document.getElementById(AMdocumentId);
    if (translateASCIIMath) AMprocessNode((processN!=null?processN:body), false, spanclassAM);
  }
}
*/
function createElementXHTML(t) {
  if (isIE) return document.createElement(t);
  else return document.createElementNS("http://www.w3.org/1999/xhtml",t);
}

var AMmathml = "http://www.w3.org/1998/Math/MathML";

function AMcreateElementMathML(t) {
  if (isIE) return document.createElement("m:"+t);
  else return document.createElementNS(AMmathml,t);
}

function createMmlNode(t,frag) {
  var node;
  if (isIE) node = document.createElement("m:"+t);
  else node = document.createElementNS(AMmathml,t);
  if (frag) node.appendChild(frag);
  return node;
}

function newcommand(oldstr,newstr) {
  AMsymbols.push({input:oldstr, tag:"mo", output:newstr, tex:null, ttype:DEFINITION});
  refreshSymbols();
}

function newsymbol(symbolobj) {
  AMsymbols.push(symbolobj);
  refreshSymbols();
}

// character lists for Mozilla/Netscape fonts
var AMcal = ["\uD835\uDC9C","\u212C","\uD835\uDC9E","\uD835\uDC9F","\u2130","\u2131","\uD835\uDCA2","\u210B","\u2110","\uD835\uDCA5","\uD835\uDCA6","\u2112","\u2133","\uD835\uDCA9","\uD835\uDCAA","\uD835\uDCAB","\uD835\uDCAC","\u211B","\uD835\uDCAE","\uD835\uDCAF","\uD835\uDCB0","\uD835\uDCB1","\uD835\uDCB2","\uD835\uDCB3","\uD835\uDCB4","\uD835\uDCB5","\uD835\uDCB6","\uD835\uDCB7","\uD835\uDCB8","\uD835\uDCB9","\u212F","\uD835\uDCBB","\u210A","\uD835\uDCBD","\uD835\uDCBE","\uD835\uDCBF","\uD835\uDCC0","\uD835\uDCC1","\uD835\uDCC2","\uD835\uDCC3","\u2134","\uD835\uDCC5","\uD835\uDCC6","\uD835\uDCC7","\uD835\uDCC8","\uD835\uDCC9","\uD835\uDCCA","\uD835\uDCCB","\uD835\uDCCC","\uD835\uDCCD","\uD835\uDCCE","\uD835\uDCCF"]; 

var AMfrk = ["\uD835\uDD04","\uD835\uDD05","\u212D","\uD835\uDD07","\uD835\uDD08","\uD835\uDD09","\uD835\uDD0A","\u210C","\u2111","\uD835\uDD0D","\uD835\uDD0E","\uD835\uDD0F","\uD835\uDD10","\uD835\uDD11","\uD835\uDD12","\uD835\uDD13","\uD835\uDD14","\u211C","\uD835\uDD16","\uD835\uDD17","\uD835\uDD18","\uD835\uDD19","\uD835\uDD1A","\uD835\uDD1B","\uD835\uDD1C","\u2128","\uD835\uDD1E","\uD835\uDD1F","\uD835\uDD20","\uD835\uDD21","\uD835\uDD22","\uD835\uDD23","\uD835\uDD24","\uD835\uDD25","\uD835\uDD26","\uD835\uDD27","\uD835\uDD28","\uD835\uDD29","\uD835\uDD2A","\uD835\uDD2B","\uD835\uDD2C","\uD835\uDD2D","\uD835\uDD2E","\uD835\uDD2F","\uD835\uDD30","\uD835\uDD31","\uD835\uDD32","\uD835\uDD33","\uD835\uDD34","\uD835\uDD35","\uD835\uDD36","\uD835\uDD37"];

var AMbbb = ["\uD835\uDD38","\uD835\uDD39","\u2102","\uD835\uDD3B","\uD835\uDD3C","\uD835\uDD3D","\uD835\uDD3E","\u210D","\uD835\uDD40","\uD835\uDD41","\uD835\uDD42","\uD835\uDD43","\uD835\uDD44","\u2115","\uD835\uDD46","\u2119","\u211A","\u211D","\uD835\uDD4A","\uD835\uDD4B","\uD835\uDD4C","\uD835\uDD4D","\uD835\uDD4E","\uD835\uDD4F","\uD835\uDD50","\u2124","\uD835\uDD52","\uD835\uDD53","\uD835\uDD54","\uD835\uDD55","\uD835\uDD56","\uD835\uDD57","\uD835\uDD58","\uD835\uDD59","\uD835\uDD5A","\uD835\uDD5B","\uD835\uDD5C","\uD835\uDD5D","\uD835\uDD5E","\uD835\uDD5F","\uD835\uDD60","\uD835\uDD61","\uD835\uDD62","\uD835\uDD63","\uD835\uDD64","\uD835\uDD65","\uD835\uDD66","\uD835\uDD67","\uD835\uDD68","\uD835\uDD69","\uD835\uDD6A","\uD835\uDD6B"];
/*var AMcal = [0xEF35,0x212C,0xEF36,0xEF37,0x2130,0x2131,0xEF38,0x210B,0x2110,0xEF39,0xEF3A,0x2112,0x2133,0xEF3B,0xEF3C,0xEF3D,0xEF3E,0x211B,0xEF3F,0xEF40,0xEF41,0xEF42,0xEF43,0xEF44,0xEF45,0xEF46];
var AMfrk = [0xEF5D,0xEF5E,0x212D,0xEF5F,0xEF60,0xEF61,0xEF62,0x210C,0x2111,0xEF63,0xEF64,0xEF65,0xEF66,0xEF67,0xEF68,0xEF69,0xEF6A,0x211C,0xEF6B,0xEF6C,0xEF6D,0xEF6E,0xEF6F,0xEF70,0xEF71,0x2128];
var AMbbb = [0xEF8C,0xEF8D,0x2102,0xEF8E,0xEF8F,0xEF90,0xEF91,0x210D,0xEF92,0xEF93,0xEF94,0xEF95,0xEF96,0x2115,0xEF97,0x2119,0x211A,0x211D,0xEF98,0xEF99,0xEF9A,0xEF9B,0xEF9C,0xEF9D,0xEF9E,0x2124];*/

var CONST = 0, UNARY = 1, BINARY = 2, INFIX = 3, LEFTBRACKET = 4,
    RIGHTBRACKET = 5, SPACE = 6, UNDEROVER = 7, DEFINITION = 8,
    LEFTRIGHT = 9, TEXT = 10, /*BIG = 11, LONG = 12, STRETCHY = 13,
    MATRIX = 14,*/ UNARYUNDEROVER = 15; // token types

var AMquote = {input:"\"",   tag:"mtext", output:"mbox", tex:null, ttype:TEXT};

var AMsymbols = [
//some greek symbols
{input:"alpha",  tag:"mi", output:"\u03B1", tex:null, ttype:CONST},
{input:"beta",   tag:"mi", output:"\u03B2", tex:null, ttype:CONST},
{input:"chi",    tag:"mi", output:"\u03C7", tex:null, ttype:CONST},
{input:"delta",  tag:"mi", output:"\u03B4", tex:null, ttype:CONST},
{input:"Delta",  tag:"mo", output:"\u0394", tex:null, ttype:CONST},
{input:"epsi",   tag:"mi", output:"\u03B5", tex:"epsilon", ttype:CONST},
{input:"varepsilon", tag:"mi", output:"\u025B", tex:null, ttype:CONST},
{input:"eta",    tag:"mi", output:"\u03B7", tex:null, ttype:CONST},
{input:"gamma",  tag:"mi", output:"\u03B3", tex:null, ttype:CONST},
{input:"Gamma",  tag:"mo", output:"\u0393", tex:null, ttype:CONST},
{input:"iota",   tag:"mi", output:"\u03B9", tex:null, ttype:CONST},
{input:"kappa",  tag:"mi", output:"\u03BA", tex:null, ttype:CONST},
{input:"lambda", tag:"mi", output:"\u03BB", tex:null, ttype:CONST},
{input:"Lambda", tag:"mo", output:"\u039B", tex:null, ttype:CONST},
{input:"lamda", tag:"mi", output:"\u03BB", tex:null, ttype:CONST},
{input:"Lamda", tag:"mo", output:"\u039B", tex:null, ttype:CONST},
{input:"mu",     tag:"mi", output:"\u03BC", tex:null, ttype:CONST},
{input:"nu",     tag:"mi", output:"\u03BD", tex:null, ttype:CONST},
{input:"omega",  tag:"mi", output:"\u03C9", tex:null, ttype:CONST},
{input:"Omega",  tag:"mo", output:"\u03A9", tex:null, ttype:CONST},
{input:"phi",    tag:"mi", output:fixphi?"\u03D5":"\u03C6", tex:null, ttype:CONST},
{input:"varphi", tag:"mi", output:fixphi?"\u03C6":"\u03D5", tex:null, ttype:CONST},
{input:"Phi",    tag:"mo", output:"\u03A6", tex:null, ttype:CONST},
{input:"pi",     tag:"mi", output:"\u03C0", tex:null, ttype:CONST},
{input:"Pi",     tag:"mo", output:"\u03A0", tex:null, ttype:CONST},
{input:"psi",    tag:"mi", output:"\u03C8", tex:null, ttype:CONST},
{input:"Psi",    tag:"mi", output:"\u03A8", tex:null, ttype:CONST},
{input:"rho",    tag:"mi", output:"\u03C1", tex:null, ttype:CONST},
{input:"sigma",  tag:"mi", output:"\u03C3", tex:null, ttype:CONST},
{input:"Sigma",  tag:"mo", output:"\u03A3", tex:null, ttype:CONST},
{input:"tau",    tag:"mi", output:"\u03C4", tex:null, ttype:CONST},
{input:"theta",  tag:"mi", output:"\u03B8", tex:null, ttype:CONST},
{input:"vartheta", tag:"mi", output:"\u03D1", tex:null, ttype:CONST},
{input:"Theta",  tag:"mo", output:"\u0398", tex:null, ttype:CONST},
{input:"upsilon", tag:"mi", output:"\u03C5", tex:null, ttype:CONST},
{input:"xi",     tag:"mi", output:"\u03BE", tex:null, ttype:CONST},
{input:"Xi",     tag:"mo", output:"\u039E", tex:null, ttype:CONST},
{input:"zeta",   tag:"mi", output:"\u03B6", tex:null, ttype:CONST},

//binary operation symbols
//{input:"-",  tag:"mo", output:"\u0096", tex:null, ttype:CONST},
{input:"*",  tag:"mo", output:"\u22C5", tex:"cdot", ttype:CONST},
{input:"**", tag:"mo", output:"\u2217", tex:"ast", ttype:CONST},
{input:"***", tag:"mo", output:"\u22C6", tex:"star", ttype:CONST},
{input:"//", tag:"mo", output:"/",      tex:null, ttype:CONST},
{input:"\\\\", tag:"mo", output:"\\",   tex:"backslash", ttype:CONST},
{input:"setminus", tag:"mo", output:"\\", tex:null, ttype:CONST},
{input:"xx", tag:"mo", output:"\u00D7", tex:"times", ttype:CONST},
{input:"|><", tag:"mo", output:"\u22C9", tex:"ltimes", ttype:CONST},
{input:"><|", tag:"mo", output:"\u22CA", tex:"rtimes", ttype:CONST},
{input:"|><|", tag:"mo", output:"\u22C8", tex:"bowtie", ttype:CONST},
{input:"-:", tag:"mo", output:"\u00F7", tex:"div", ttype:CONST},
{input:"divide",   tag:"mo", output:"-:", tex:null, ttype:DEFINITION},
{input:"@",  tag:"mo", output:"\u2218", tex:"circ", ttype:CONST},
{input:"o+", tag:"mo", output:"\u2295", tex:"oplus", ttype:CONST},
{input:"ox", tag:"mo", output:"\u2297", tex:"otimes", ttype:CONST},
{input:"o.", tag:"mo", output:"\u2299", tex:"odot", ttype:CONST},
{input:"sum", tag:"mo", output:"\u2211", tex:null, ttype:UNDEROVER},
{input:"prod", tag:"mo", output:"\u220F", tex:null, ttype:UNDEROVER},
{input:"^^",  tag:"mo", output:"\u2227", tex:"wedge", ttype:CONST},
{input:"^^^", tag:"mo", output:"\u22C0", tex:"bigwedge", ttype:UNDEROVER},
{input:"vv",  tag:"mo", output:"\u2228", tex:"vee", ttype:CONST},
{input:"vvv", tag:"mo", output:"\u22C1", tex:"bigvee", ttype:UNDEROVER},
{input:"nn",  tag:"mo", output:"\u2229", tex:"cap", ttype:CONST},
{input:"nnn", tag:"mo", output:"\u22C2", tex:"bigcap", ttype:UNDEROVER},
{input:"uu",  tag:"mo", output:"\u222A", tex:"cup", ttype:CONST},
{input:"uuu", tag:"mo", output:"\u22C3", tex:"bigcup", ttype:UNDEROVER},

//binary relation symbols
{input:"!=",  tag:"mo", output:"\u2260", tex:"ne", ttype:CONST},
{input:":=",  tag:"mo", output:":=",     tex:null, ttype:CONST},
{input:"lt",  tag:"mo", output:"<",      tex:null, ttype:CONST},
{input:"<=",  tag:"mo", output:"\u2264", tex:"le", ttype:CONST},
{input:"lt=", tag:"mo", output:"\u2264", tex:"leq", ttype:CONST},
{input:"gt",  tag:"mo", output:">",      tex:null, ttype:CONST},
{input:">=",  tag:"mo", output:"\u2265", tex:"ge", ttype:CONST},
{input:"gt=", tag:"mo", output:"\u2265", tex:"geq", ttype:CONST},
{input:"-<",  tag:"mo", output:"\u227A", tex:"prec", ttype:CONST},
{input:"-lt", tag:"mo", output:"\u227A", tex:null, ttype:CONST},
{input:">-",  tag:"mo", output:"\u227B", tex:"succ", ttype:CONST},
{input:"-<=", tag:"mo", output:"\u2AAF", tex:"preceq", ttype:CONST},
{input:">-=", tag:"mo", output:"\u2AB0", tex:"succeq", ttype:CONST},
{input:"in",  tag:"mo", output:"\u2208", tex:null, ttype:CONST},
{input:"!in", tag:"mo", output:"\u2209", tex:"notin", ttype:CONST},
{input:"sub", tag:"mo", output:"\u2282", tex:"subset", ttype:CONST},
{input:"sup", tag:"mo", output:"\u2283", tex:"supset", ttype:CONST},
{input:"sube", tag:"mo", output:"\u2286", tex:"subseteq", ttype:CONST},
{input:"supe", tag:"mo", output:"\u2287", tex:"supseteq", ttype:CONST},
{input:"-=",  tag:"mo", output:"\u2261", tex:"equiv", ttype:CONST},
{input:"~=",  tag:"mo", output:"\u2245", tex:"cong", ttype:CONST},
{input:"~~",  tag:"mo", output:"\u2248", tex:"approx", ttype:CONST},
{input:"prop", tag:"mo", output:"\u221D", tex:"propto", ttype:CONST},

//logical symbols
{input:"and", tag:"mtext", output:"and", tex:null, ttype:SPACE},
{input:"or",  tag:"mtext", output:"or",  tex:null, ttype:SPACE},
{input:"not", tag:"mo", output:"\u00AC", tex:"neg", ttype:CONST},
{input:"=>",  tag:"mo", output:"\u21D2", tex:"implies", ttype:CONST},
{input:"if",  tag:"mo", output:"if",     tex:null, ttype:SPACE},
{input:"<=>", tag:"mo", output:"\u21D4", tex:"iff", ttype:CONST},
{input:"AA",  tag:"mo", output:"\u2200", tex:"forall", ttype:CONST},
{input:"EE",  tag:"mo", output:"\u2203", tex:"exists", ttype:CONST},
{input:"_|_", tag:"mo", output:"\u22A5", tex:"bot", ttype:CONST},
{input:"TT",  tag:"mo", output:"\u22A4", tex:"top", ttype:CONST},
{input:"|--",  tag:"mo", output:"\u22A2", tex:"vdash", ttype:CONST},
{input:"|==",  tag:"mo", output:"\u22A8", tex:"models", ttype:CONST},

//grouping brackets
{input:"(", tag:"mo", output:"(", tex:null, ttype:LEFTBRACKET},
{input:")", tag:"mo", output:")", tex:null, ttype:RIGHTBRACKET},
{input:"[", tag:"mo", output:"[", tex:null, ttype:LEFTBRACKET},
{input:"]", tag:"mo", output:"]", tex:null, ttype:RIGHTBRACKET},
{input:"{", tag:"mo", output:"{", tex:null, ttype:LEFTBRACKET},
{input:"}", tag:"mo", output:"}", tex:null, ttype:RIGHTBRACKET},
{input:"|", tag:"mo", output:"|", tex:null, ttype:LEFTRIGHT},
//{input:"||", tag:"mo", output:"||", tex:null, ttype:LEFTRIGHT},
{input:"(:", tag:"mo", output:"\u2329", tex:"langle", ttype:LEFTBRACKET},
{input:":)", tag:"mo", output:"\u232A", tex:"rangle", ttype:RIGHTBRACKET},
{input:"<<", tag:"mo", output:"\u2329", tex:null, ttype:LEFTBRACKET},
{input:">>", tag:"mo", output:"\u232A", tex:null, ttype:RIGHTBRACKET},
{input:"{:", tag:"mo", output:"{:", tex:null, ttype:LEFTBRACKET, invisible:true},
{input:":}", tag:"mo", output:":}", tex:null, ttype:RIGHTBRACKET, invisible:true},

//miscellaneous symbols
{input:"int",  tag:"mo", output:"\u222B", tex:null, ttype:CONST},
{input:"dx",   tag:"mi", output:"{:d x:}", tex:null, ttype:DEFINITION},
{input:"dy",   tag:"mi", output:"{:d y:}", tex:null, ttype:DEFINITION},
{input:"dz",   tag:"mi", output:"{:d z:}", tex:null, ttype:DEFINITION},
{input:"dt",   tag:"mi", output:"{:d t:}", tex:null, ttype:DEFINITION},
{input:"oint", tag:"mo", output:"\u222E", tex:null, ttype:CONST},
{input:"del",  tag:"mo", output:"\u2202", tex:"partial", ttype:CONST},
{input:"grad", tag:"mo", output:"\u2207", tex:"nabla", ttype:CONST},
{input:"+-",   tag:"mo", output:"\u00B1", tex:"pm", ttype:CONST},
{input:"O/",   tag:"mo", output:"\u2205", tex:"emptyset", ttype:CONST},
{input:"oo",   tag:"mo", output:"\u221E", tex:"infty", ttype:CONST},
{input:"aleph", tag:"mo", output:"\u2135", tex:null, ttype:CONST},
{input:"...",  tag:"mo", output:"...",    tex:"ldots", ttype:CONST},
{input:":.",  tag:"mo", output:"\u2234",  tex:"therefore", ttype:CONST},
{input:":'",  tag:"mo", output:"\u2235",  tex:"because", ttype:CONST},
{input:"/_",  tag:"mo", output:"\u2220",  tex:"angle", ttype:CONST},
{input:"/_\\",  tag:"mo", output:"\u25B3",  tex:"triangle", ttype:CONST},
{input:"'",   tag:"mo", output:"\u2032",  tex:"prime", ttype:CONST},
{input:"tilde", tag:"mover", output:"~", tex:null, ttype:UNARY, acc:true},
{input:"\\ ",  tag:"mo", output:"\u00A0", tex:null, ttype:CONST},
{input:"frown",  tag:"mo", output:"\u2322", tex:null, ttype:CONST},
{input:"quad", tag:"mo", output:"\u00A0\u00A0", tex:null, ttype:CONST},
{input:"qquad", tag:"mo", output:"\u00A0\u00A0\u00A0\u00A0", tex:null, ttype:CONST},
{input:"cdots", tag:"mo", output:"\u22EF", tex:null, ttype:CONST},
{input:"vdots", tag:"mo", output:"\u22EE", tex:null, ttype:CONST},
{input:"ddots", tag:"mo", output:"\u22F1", tex:null, ttype:CONST},
{input:"diamond", tag:"mo", output:"\u22C4", tex:null, ttype:CONST},
{input:"square", tag:"mo", output:"\u25A1", tex:null, ttype:CONST},
{input:"|__", tag:"mo", output:"\u230A",  tex:"lfloor", ttype:CONST},
{input:"__|", tag:"mo", output:"\u230B",  tex:"rfloor", ttype:CONST},
{input:"|~", tag:"mo", output:"\u2308",  tex:"lceiling", ttype:CONST},
{input:"~|", tag:"mo", output:"\u2309",  tex:"rceiling", ttype:CONST},
{input:"CC",  tag:"mo", output:"\u2102", tex:null, ttype:CONST},
{input:"NN",  tag:"mo", output:"\u2115", tex:null, ttype:CONST},
{input:"QQ",  tag:"mo", output:"\u211A", tex:null, ttype:CONST},
{input:"RR",  tag:"mo", output:"\u211D", tex:null, ttype:CONST},
{input:"ZZ",  tag:"mo", output:"\u2124", tex:null, ttype:CONST},
{input:"f",   tag:"mi", output:"f",      tex:null, ttype:UNARY, func:true},
{input:"g",   tag:"mi", output:"g",      tex:null, ttype:UNARY, func:true},

//standard functions
{input:"lim",  tag:"mo", output:"lim", tex:null, ttype:UNDEROVER},
{input:"Lim",  tag:"mo", output:"Lim", tex:null, ttype:UNDEROVER},
{input:"sin",  tag:"mo", output:"sin", tex:null, ttype:UNARY, func:true},
{input:"cos",  tag:"mo", output:"cos", tex:null, ttype:UNARY, func:true},
{input:"tan",  tag:"mo", output:"tan", tex:null, ttype:UNARY, func:true},
{input:"sinh", tag:"mo", output:"sinh", tex:null, ttype:UNARY, func:true},
{input:"cosh", tag:"mo", output:"cosh", tex:null, ttype:UNARY, func:true},
{input:"tanh", tag:"mo", output:"tanh", tex:null, ttype:UNARY, func:true},
{input:"cot",  tag:"mo", output:"cot", tex:null, ttype:UNARY, func:true},
{input:"sec",  tag:"mo", output:"sec", tex:null, ttype:UNARY, func:true},
{input:"csc",  tag:"mo", output:"csc", tex:null, ttype:UNARY, func:true},
{input:"arcsin",  tag:"mo", output:"arcsin", tex:null, ttype:UNARY, func:true},
{input:"arccos",  tag:"mo", output:"arccos", tex:null, ttype:UNARY, func:true},
{input:"arctan",  tag:"mo", output:"arctan", tex:null, ttype:UNARY, func:true},
{input:"coth",  tag:"mo", output:"coth", tex:null, ttype:UNARY, func:true},
{input:"sech",  tag:"mo", output:"sech", tex:null, ttype:UNARY, func:true},
{input:"csch",  tag:"mo", output:"csch", tex:null, ttype:UNARY, func:true},
{input:"exp",  tag:"mo", output:"exp", tex:null, ttype:UNARY, func:true},
{input:"abs",   tag:"mo", output:"abs",  tex:null, ttype:UNARY, rewriteleftright:["|","|"]},
{input:"norm",   tag:"mo", output:"norm",  tex:null, ttype:UNARY, rewriteleftright:["\u2225","\u2225"]},
{input:"floor",   tag:"mo", output:"floor",  tex:null, ttype:UNARY, rewriteleftright:["\u230A","\u230B"]},
{input:"ceil",   tag:"mo", output:"ceil",  tex:null, ttype:UNARY, rewriteleftright:["\u2308","\u2309"]},
{input:"log",  tag:"mo", output:"log", tex:null, ttype:UNARY, func:true},
{input:"ln",   tag:"mo", output:"ln",  tex:null, ttype:UNARY, func:true},
{input:"det",  tag:"mo", output:"det", tex:null, ttype:UNARY, func:true},
{input:"dim",  tag:"mo", output:"dim", tex:null, ttype:CONST},
{input:"mod",  tag:"mo", output:"mod", tex:null, ttype:CONST},
{input:"gcd",  tag:"mo", output:"gcd", tex:null, ttype:UNARY, func:true},
{input:"lcm",  tag:"mo", output:"lcm", tex:null, ttype:UNARY, func:true},
{input:"lub",  tag:"mo", output:"lub", tex:null, ttype:CONST},
{input:"glb",  tag:"mo", output:"glb", tex:null, ttype:CONST},
{input:"min",  tag:"mo", output:"min", tex:null, ttype:UNDEROVER},
{input:"max",  tag:"mo", output:"max", tex:null, ttype:UNDEROVER},

//arrows
{input:"uarr", tag:"mo", output:"\u2191", tex:"uparrow", ttype:CONST},
{input:"darr", tag:"mo", output:"\u2193", tex:"downarrow", ttype:CONST},
{input:"rarr", tag:"mo", output:"\u2192", tex:"rightarrow", ttype:CONST},
{input:"->",   tag:"mo", output:"\u2192", tex:"to", ttype:CONST},
{input:">->",   tag:"mo", output:"\u21A3", tex:"rightarrowtail", ttype:CONST},
{input:"->>",   tag:"mo", output:"\u21A0", tex:"twoheadrightarrow", ttype:CONST},
{input:">->>",   tag:"mo", output:"\u2916", tex:"twoheadrightarrowtail", ttype:CONST},
{input:"|->",  tag:"mo", output:"\u21A6", tex:"mapsto", ttype:CONST},
{input:"larr", tag:"mo", output:"\u2190", tex:"leftarrow", ttype:CONST},
{input:"harr", tag:"mo", output:"\u2194", tex:"leftrightarrow", ttype:CONST},
{input:"rArr", tag:"mo", output:"\u21D2", tex:"Rightarrow", ttype:CONST},
{input:"lArr", tag:"mo", output:"\u21D0", tex:"Leftarrow", ttype:CONST},
{input:"hArr", tag:"mo", output:"\u21D4", tex:"Leftrightarrow", ttype:CONST},
//commands with argument
{input:"sqrt", tag:"msqrt", output:"sqrt", tex:null, ttype:UNARY},
{input:"root", tag:"mroot", output:"root", tex:null, ttype:BINARY},
{input:"frac", tag:"mfrac", output:"/",    tex:null, ttype:BINARY},
{input:"/",    tag:"mfrac", output:"/",    tex:null, ttype:INFIX},
{input:"stackrel", tag:"mover", output:"stackrel", tex:null, ttype:BINARY},
{input:"overset", tag:"mover", output:"stackrel", tex:null, ttype:BINARY},
{input:"underset", tag:"munder", output:"stackrel", tex:null, ttype:BINARY},
{input:"_",    tag:"msub",  output:"_",    tex:null, ttype:INFIX},
{input:"^",    tag:"msup",  output:"^",    tex:null, ttype:INFIX},
{input:"hat", tag:"mover", output:"\u005E", tex:null, ttype:UNARY, acc:true},
{input:"bar", tag:"mover", output:"\u00AF", tex:"overline", ttype:UNARY, acc:true},
{input:"vec", tag:"mover", output:"\u2192", tex:null, ttype:UNARY, acc:true},
{input:"dot", tag:"mover", output:".",      tex:null, ttype:UNARY, acc:true},
{input:"ddot", tag:"mover", output:"..",    tex:null, ttype:UNARY, acc:true},
{input:"ul", tag:"munder", output:"\u0332", tex:"underline", ttype:UNARY, acc:true},
{input:"ubrace", tag:"munder", output:"\u23DF", tex:"underbrace", ttype:UNARYUNDEROVER, acc:true},
{input:"obrace", tag:"mover", output:"\u23DE", tex:"overbrace", ttype:UNARYUNDEROVER, acc:true},
{input:"text", tag:"mtext", output:"text", tex:null, ttype:TEXT},
{input:"mbox", tag:"mtext", output:"mbox", tex:null, ttype:TEXT},
{input:"color", tag:"mstyle", ttype:BINARY},
{input:"cancel", tag:"menclose", output:"cancel", tex:null, ttype:UNARY},
AMquote,
{input:"bb", tag:"mstyle", atname:"mathvariant", atval:"bold", output:"bb", tex:null, ttype:UNARY},
{input:"mathbf", tag:"mstyle", atname:"mathvariant", atval:"bold", output:"mathbf", tex:null, ttype:UNARY},
{input:"sf", tag:"mstyle", atname:"mathvariant", atval:"sans-serif", output:"sf", tex:null, ttype:UNARY},
{input:"mathsf", tag:"mstyle", atname:"mathvariant", atval:"sans-serif", output:"mathsf", tex:null, ttype:UNARY},
{input:"bbb", tag:"mstyle", atname:"mathvariant", atval:"double-struck", output:"bbb", tex:null, ttype:UNARY, codes:AMbbb},
{input:"mathbb", tag:"mstyle", atname:"mathvariant", atval:"double-struck", output:"mathbb", tex:null, ttype:UNARY, codes:AMbbb},
{input:"cc",  tag:"mstyle", atname:"mathvariant", atval:"script", output:"cc", tex:null, ttype:UNARY, codes:AMcal},
{input:"mathcal", tag:"mstyle", atname:"mathvariant", atval:"script", output:"mathcal", tex:null, ttype:UNARY, codes:AMcal},
{input:"tt",  tag:"mstyle", atname:"mathvariant", atval:"monospace", output:"tt", tex:null, ttype:UNARY},
{input:"mathtt", tag:"mstyle", atname:"mathvariant", atval:"monospace", output:"mathtt", tex:null, ttype:UNARY},
{input:"fr",  tag:"mstyle", atname:"mathvariant", atval:"fraktur", output:"fr", tex:null, ttype:UNARY, codes:AMfrk},
{input:"mathfrak",  tag:"mstyle", atname:"mathvariant", atval:"fraktur", output:"mathfrak", tex:null, ttype:UNARY, codes:AMfrk}
];

function compareNames(s1,s2) {
  if (s1.input > s2.input) return 1
  else return -1;
}

var AMnames = []; //list of input symbols

function initSymbols() {
  var i;
  var symlen = AMsymbols.length;
  for (i=0; i<symlen; i++) {
    if (AMsymbols[i].tex) {
      AMsymbols.push({input:AMsymbols[i].tex, 
        tag:AMsymbols[i].tag, output:AMsymbols[i].output, ttype:AMsymbols[i].ttype,
        acc:(AMsymbols[i].acc||false)});
    }
  }
  refreshSymbols();
}

function refreshSymbols(){
  var i;
  AMsymbols.sort(compareNames);
  for (i=0; i<AMsymbols.length; i++) AMnames[i] = AMsymbols[i].input;
}

function define(oldstr,newstr) {
  AMsymbols.push({input:oldstr, tag:"mo", output:newstr, tex:null, ttype:DEFINITION});
  refreshSymbols(); // this may be a problem if many symbols are defined!
}

function AMremoveCharsAndBlanks(str,n) {
//remove n characters and any following blanks
  var st;
  if (str.charAt(n)=="\\" && str.charAt(n+1)!="\\" && str.charAt(n+1)!=" ") 
    st = str.slice(n+1);
  else st = str.slice(n);
  for (var i=0; i<st.length && st.charCodeAt(i)<=32; i=i+1);
  return st.slice(i);
}

function position(arr, str, n) { 
// return position >=n where str appears or would be inserted
// assumes arr is sorted
  if (n==0) {
    var h,m;
    n = -1;
    h = arr.length;
    while (n+1<h) {
      m = (n+h) >> 1;
      if (arr[m]<str) n = m; else h = m;
    }
    return h;
  } else
    for (var i=n; i<arr.length && arr[i]<str; i++);
  return i; // i=arr.length || arr[i]>=str
}

function AMgetSymbol(str) {
//return maximal initial substring of str that appears in names
//return null if there is none
  var k = 0; //new pos
  var j = 0; //old pos
  var mk; //match pos
  var st;
  var tagst;
  var match = "";
  var more = true;
  for (var i=1; i<=str.length && more; i++) {
    st = str.slice(0,i); //initial substring of length i
    j = k;
    k = position(AMnames, st, j);
    if (k<AMnames.length && str.slice(0,AMnames[k].length)==AMnames[k]){
      match = AMnames[k];
      mk = k;
      i = match.length;
    }
    more = k<AMnames.length && str.slice(0,AMnames[k].length)>=AMnames[k];
  }
  AMpreviousSymbol=AMcurrentSymbol;
  if (match!=""){
    AMcurrentSymbol=AMsymbols[mk].ttype;
    return AMsymbols[mk]; 
  }
// if str[0] is a digit or - return maxsubstring of digits.digits
  AMcurrentSymbol=CONST;
  k = 1;
  st = str.slice(0,1);
  var integ = true;
  while ("0"<=st && st<="9" && k<=str.length) {
    st = str.slice(k,k+1);
    k++;
  }
  if (st == decimalsign) {
    st = str.slice(k,k+1);
    if ("0"<=st && st<="9") {
      integ = false;
      k++;
      while ("0"<=st && st<="9" && k<=str.length) {
        st = str.slice(k,k+1);
        k++;
      }
    }
  }
  if ((integ && k>1) || k>2) {
    st = str.slice(0,k-1);
    tagst = "mn";
  } else {
    k = 2;
    st = str.slice(0,1); //take 1 character
    tagst = (("A">st || st>"Z") && ("a">st || st>"z")?"mo":"mi");
  }
  if (st=="-" && AMpreviousSymbol==INFIX) {
    AMcurrentSymbol = INFIX;  //trick "/" into recognizing "-" on second parse
    return {input:st, tag:tagst, output:st, ttype:UNARY, func:true};
  }
  return {input:st, tag:tagst, output:st, ttype:CONST};
}

function AMremoveBrackets(node) {
  var st;
  if (!node.hasChildNodes()) { return; }
  if (node.firstChild.hasChildNodes() && (node.nodeName=="mrow" || node.nodeName=="M:MROW")) {
    st = node.firstChild.firstChild.nodeValue;
    if (st=="(" || st=="[" || st=="{") node.removeChild(node.firstChild);
  }
  if (node.lastChild.hasChildNodes() && (node.nodeName=="mrow" || node.nodeName=="M:MROW")) {
    st = node.lastChild.firstChild.nodeValue;
    if (st==")" || st=="]" || st=="}") node.removeChild(node.lastChild);
  }
}

/*Parsing ASCII math expressions with the following grammar
v ::= [A-Za-z] | greek letters | numbers | other constant symbols
u ::= sqrt | text | bb | other unary symbols for font commands
b ::= frac | root | stackrel         binary symbols
l ::= ( | [ | { | (: | {:            left brackets
r ::= ) | ] | } | :) | :}            right brackets
S ::= v | lEr | uS | bSS             Simple expression
I ::= S_S | S^S | S_S^S | S          Intermediate expression
E ::= IE | I/I                       Expression
Each terminal symbol is translated into a corresponding mathml node.*/

var AMnestingDepth,AMpreviousSymbol,AMcurrentSymbol;

function AMparseSexpr(str) { //parses str and returns [node,tailstr]
  var symbol, node, result, i, st,// rightvert = false,
    newFrag = document.createDocumentFragment();
  str = AMremoveCharsAndBlanks(str,0);
  symbol = AMgetSymbol(str);             //either a token or a bracket or empty
  if (symbol == null || symbol.ttype == RIGHTBRACKET && AMnestingDepth > 0) {
    return [null,str];
  }
  if (symbol.ttype == DEFINITION) {
    str = symbol.output+AMremoveCharsAndBlanks(str,symbol.input.length); 
    symbol = AMgetSymbol(str);
  }
  switch (symbol.ttype) {  case UNDEROVER:
  case CONST:
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    return [createMmlNode(symbol.tag,        //its a constant
                             document.createTextNode(symbol.output)),str];
  case LEFTBRACKET:   //read (expr+)
    AMnestingDepth++;
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    result = AMparseExpr(str,true);
    AMnestingDepth--;
    if (typeof symbol.invisible == "boolean" && symbol.invisible) 
      node = createMmlNode("mrow",result[0]);
    else {
      node = createMmlNode("mo",document.createTextNode(symbol.output));
      node = createMmlNode("mrow",node);
      node.appendChild(result[0]);
    }
    return [node,result[1]];
  case TEXT:
      if (symbol!=AMquote) str = AMremoveCharsAndBlanks(str,symbol.input.length);
      if (str.charAt(0)=="{") i=str.indexOf("}");
      else if (str.charAt(0)=="(") i=str.indexOf(")");
      else if (str.charAt(0)=="[") i=str.indexOf("]");
      else if (symbol==AMquote) i=str.slice(1).indexOf("\"")+1;
      else i = 0;
      if (i==-1) i = str.length;
      st = str.slice(1,i);
      if (st.charAt(0) == " ") {
        node = createMmlNode("mspace");
        node.setAttribute("width","1ex");
        newFrag.appendChild(node);
      }
      newFrag.appendChild(
        createMmlNode(symbol.tag,document.createTextNode(st)));
      if (st.charAt(st.length-1) == " ") {
        node = createMmlNode("mspace");
        node.setAttribute("width","1ex");
        newFrag.appendChild(node);
      }
      str = AMremoveCharsAndBlanks(str,i+1);
      return [createMmlNode("mrow",newFrag),str];
  case UNARYUNDEROVER:
  case UNARY:
      str = AMremoveCharsAndBlanks(str,symbol.input.length); 
      result = AMparseSexpr(str);
      if (result[0]==null) return [createMmlNode(symbol.tag,
                             document.createTextNode(symbol.output)),str];
      if (typeof symbol.func == "boolean" && symbol.func) { // functions hack
        st = str.charAt(0);
          if (st=="^" || st=="_" || st=="/" || st=="|" || st=="," ||
             (symbol.input.length==1 && symbol.input.match(/\w/) && st!="(")) {
          return [createMmlNode(symbol.tag,
                    document.createTextNode(symbol.output)),str];
        } else {
          node = createMmlNode("mrow",
           createMmlNode(symbol.tag,document.createTextNode(symbol.output)));
          node.appendChild(result[0]);
          return [node,result[1]];
        }
      }
      AMremoveBrackets(result[0]);
      if (symbol.input == "sqrt") {           // sqrt
        return [createMmlNode(symbol.tag,result[0]),result[1]];
      } else if (typeof symbol.rewriteleftright != "undefined") {    // abs, floor, ceil
          node = createMmlNode("mrow", createMmlNode("mo",document.createTextNode(symbol.rewriteleftright[0])));
          node.appendChild(result[0]);
          node.appendChild(createMmlNode("mo",document.createTextNode(symbol.rewriteleftright[1])));
          return [node,result[1]];
      } else if (symbol.input == "cancel") {   // cancel
        node = createMmlNode(symbol.tag,result[0]);
	node.setAttribute("notation","updiagonalstrike");
	return [node,result[1]];
      } else if (typeof symbol.acc == "boolean" && symbol.acc) {   // accent
        node = createMmlNode(symbol.tag,result[0]);
        node.appendChild(createMmlNode("mo",document.createTextNode(symbol.output)));
        return [node,result[1]];
      } else {                        // font change command
        if (!isIE && typeof symbol.codes != "undefined") {
          for (i=0; i<result[0].childNodes.length; i++)
            if (result[0].childNodes[i].nodeName=="mi" || result[0].nodeName=="mi") {
              st = (result[0].nodeName=="mi"?result[0].firstChild.nodeValue:
                              result[0].childNodes[i].firstChild.nodeValue);
              var newst = [];
              for (var j=0; j<st.length; j++)
		  if (st.charCodeAt(j)>64 && st.charCodeAt(j)<91) 
		  	newst = newst + symbol.codes[st.charCodeAt(j)-65];
                else if (st.charCodeAt(j)>96 && st.charCodeAt(j)<123) 
                	newst = newst + symbol.codes[st.charCodeAt(j)-71];
                else newst = newst + st.charAt(j);
              if (result[0].nodeName=="mi")
                result[0]=createMmlNode("mo").
                          appendChild(document.createTextNode(newst));
              else result[0].replaceChild(createMmlNode("mo").
                               appendChild(document.createTextNode(newst)),
                                           result[0].childNodes[i]);
            }
        }
        node = createMmlNode(symbol.tag,result[0]);
        node.setAttribute(symbol.atname,symbol.atval);
        return [node,result[1]];
      }
  case BINARY:
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    result = AMparseSexpr(str);
    if (result[0]==null) return [createMmlNode("mo",
                           document.createTextNode(symbol.input)),str];
    AMremoveBrackets(result[0]);
    var result2 = AMparseSexpr(result[1]);
    if (result2[0]==null) return [createMmlNode("mo",
                           document.createTextNode(symbol.input)),str];
    AMremoveBrackets(result2[0]);
    if (symbol.input=="color") {
	if (str.charAt(0)=="{") i=str.indexOf("}");
        else if (str.charAt(0)=="(") i=str.indexOf(")");
        else if (str.charAt(0)=="[") i=str.indexOf("]");
	st = str.slice(1,i);
	node = createMmlNode(symbol.tag,result2[0]);
	node.setAttribute("mathcolor",st);
	return [node,result2[1]];
    }
    if (symbol.input=="root" || symbol.output=="stackrel") 
      newFrag.appendChild(result2[0]);
    newFrag.appendChild(result[0]);
    if (symbol.input=="frac") newFrag.appendChild(result2[0]);
    return [createMmlNode(symbol.tag,newFrag),result2[1]];
  case INFIX:
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    return [createMmlNode("mo",document.createTextNode(symbol.output)),str];
  case SPACE:
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    node = createMmlNode("mspace");
    node.setAttribute("width","1ex");
    newFrag.appendChild(node);
    newFrag.appendChild(
      createMmlNode(symbol.tag,document.createTextNode(symbol.output)));
    node = createMmlNode("mspace");
    node.setAttribute("width","1ex");
    newFrag.appendChild(node);
    return [createMmlNode("mrow",newFrag),str];
  case LEFTRIGHT:
//    if (rightvert) return [null,str]; else rightvert = true;
    AMnestingDepth++;
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    result = AMparseExpr(str,false);
    AMnestingDepth--;
    st = "";
    if (result[0].lastChild!=null)
      st = result[0].lastChild.firstChild.nodeValue;
    if (st == "|") { // its an absolute value subterm
      node = createMmlNode("mo",document.createTextNode(symbol.output));
      node = createMmlNode("mrow",node);
      node.appendChild(result[0]);
      return [node,result[1]];
    } else { // the "|" is a \mid so use unicode 2223 (divides) for spacing
      node = createMmlNode("mo",document.createTextNode("\u2223"));
      node = createMmlNode("mrow",node);
      return [node,str];
    }
  default:
//alert("default");
    str = AMremoveCharsAndBlanks(str,symbol.input.length); 
    return [createMmlNode(symbol.tag,        //its a constant
                             document.createTextNode(symbol.output)),str];
  }
}

function AMparseIexpr(str) {
  var symbol, sym1, sym2, node, result, underover;
  str = AMremoveCharsAndBlanks(str,0);
  sym1 = AMgetSymbol(str);
  result = AMparseSexpr(str);
  node = result[0];
  str = result[1];
  symbol = AMgetSymbol(str);
  if (symbol.ttype == INFIX && symbol.input != "/") {
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
//    if (symbol.input == "/") result = AMparseIexpr(str); else ...
    result = AMparseSexpr(str);
    if (result[0] == null) // show box in place of missing argument
      result[0] = createMmlNode("mo",document.createTextNode("\u25A1"));
    else AMremoveBrackets(result[0]);
    str = result[1];
//    if (symbol.input == "/") AMremoveBrackets(node);
    underover = (sym1.ttype == UNDEROVER || sym1.ttype == UNARYUNDEROVER);
    if (symbol.input == "_") {
      sym2 = AMgetSymbol(str);
      if (sym2.input == "^") {
        str = AMremoveCharsAndBlanks(str,sym2.input.length);
        var res2 = AMparseSexpr(str);
        AMremoveBrackets(res2[0]);
        str = res2[1];
        node = createMmlNode((underover?"munderover":"msubsup"),node);
        node.appendChild(result[0]);
        node.appendChild(res2[0]);
        node = createMmlNode("mrow",node); // so sum does not stretch
      } else {
        node = createMmlNode((underover?"munder":"msub"),node);
        node.appendChild(result[0]);
      }
    } else if (symbol.input == "^" && underover) {
    	node = createMmlNode("mover",node);
        node.appendChild(result[0]);   
    } else {
      node = createMmlNode(symbol.tag,node);
      node.appendChild(result[0]);
    }
    if (typeof sym1.func != 'undefined' && sym1.func) {
    	sym2 = AMgetSymbol(str);
    	if (sym2.ttype != INFIX && sym2.ttype != RIGHTBRACKET) {
    		result = AMparseIexpr(str);
    		node = createMmlNode("mrow",node);
    		node.appendChild(result[0]);
    		str = result[1];
    	}
    }
  }
  return [node,str];
}

function AMparseExpr(str,rightbracket) {
  var symbol, node, result, i,
  newFrag = document.createDocumentFragment();
  do {
    str = AMremoveCharsAndBlanks(str,0);
    result = AMparseIexpr(str);
    node = result[0];
    str = result[1];
    symbol = AMgetSymbol(str);
    if (symbol.ttype == INFIX && symbol.input == "/") {
      str = AMremoveCharsAndBlanks(str,symbol.input.length);
      result = AMparseIexpr(str);
      if (result[0] == null) // show box in place of missing argument
        result[0] = createMmlNode("mo",document.createTextNode("\u25A1"));
      else AMremoveBrackets(result[0]);
      str = result[1];
      AMremoveBrackets(node);
      node = createMmlNode(symbol.tag,node);
      node.appendChild(result[0]);
      newFrag.appendChild(node);
      symbol = AMgetSymbol(str);
    } 
    else if (node!=undefined) newFrag.appendChild(node);
  } while ((symbol.ttype != RIGHTBRACKET && 
           (symbol.ttype != LEFTRIGHT || rightbracket)
           || AMnestingDepth == 0) && symbol!=null && symbol.output!="");
  if (symbol.ttype == RIGHTBRACKET || symbol.ttype == LEFTRIGHT) {
//    if (AMnestingDepth > 0) AMnestingDepth--;
    var len = newFrag.childNodes.length;
    if (len>0 && newFrag.childNodes[len-1].nodeName == "mrow" 
            && newFrag.childNodes[len-1].lastChild
            && newFrag.childNodes[len-1].lastChild.firstChild ) { //matrix
      	    //removed to allow row vectors: //&& len>1 && 
    	    //newFrag.childNodes[len-2].nodeName == "mo" &&
    	    //newFrag.childNodes[len-2].firstChild.nodeValue == ","
      var right = newFrag.childNodes[len-1].lastChild.firstChild.nodeValue;
      if (right==")" || right=="]") {
        var left = newFrag.childNodes[len-1].firstChild.firstChild.nodeValue;
        if (left=="(" && right==")" && symbol.output != "}" || 
            left=="[" && right=="]") {
        var pos = []; // positions of commas
        var matrix = true;
        var m = newFrag.childNodes.length;
        for (i=0; matrix && i<m; i=i+2) {
          pos[i] = [];
          node = newFrag.childNodes[i];
          if (matrix) matrix = node.nodeName=="mrow" && 
            (i==m-1 || node.nextSibling.nodeName=="mo" && 
            node.nextSibling.firstChild.nodeValue==",")&&
            node.firstChild.firstChild.nodeValue==left &&
            node.lastChild.firstChild.nodeValue==right;
          if (matrix) 
            for (var j=0; j<node.childNodes.length; j++)
              if (node.childNodes[j].firstChild.nodeValue==",")
                pos[i][pos[i].length]=j;
          if (matrix && i>1) matrix = pos[i].length == pos[i-2].length;
        }
        matrix = matrix && (pos.length>1 || pos[0].length>0);
        if (matrix) {
          var row, frag, n, k, table = document.createDocumentFragment();
          for (i=0; i<m; i=i+2) {
            row = document.createDocumentFragment();
            frag = document.createDocumentFragment();
            node = newFrag.firstChild; // <mrow>(-,-,...,-,-)</mrow>
            n = node.childNodes.length;
            k = 0;
            node.removeChild(node.firstChild); //remove (
            for (j=1; j<n-1; j++) {
              if (typeof pos[i][k] != "undefined" && j==pos[i][k]){
                node.removeChild(node.firstChild); //remove ,
                row.appendChild(createMmlNode("mtd",frag));
                k++;
              } else frag.appendChild(node.firstChild);
            }
            row.appendChild(createMmlNode("mtd",frag));
            if (newFrag.childNodes.length>2) {
              newFrag.removeChild(newFrag.firstChild); //remove <mrow>)</mrow>
              newFrag.removeChild(newFrag.firstChild); //remove <mo>,</mo>
            }
            table.appendChild(createMmlNode("mtr",row));
          }
          node = createMmlNode("mtable",table);
          if (typeof symbol.invisible == "boolean" && symbol.invisible) node.setAttribute("columnalign","left");
          newFrag.replaceChild(node,newFrag.firstChild);
        }
       }
      }
    }
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
    if (typeof symbol.invisible != "boolean" || !symbol.invisible) {
      node = createMmlNode("mo",document.createTextNode(symbol.output));
      newFrag.appendChild(node);
    }
  }
  return [newFrag,str];
}

function parseMath(str,latex) {
  var frag, node;
  AMnestingDepth = 0;
  //some basic cleanup for dealing with stuff editors like TinyMCE adds
  str = str.replace(/&nbsp;/g,"");
  str = str.replace(/&gt;/g,">");
  str = str.replace(/&lt;/g,"<");
  str = str.replace(/(Sin|Cos|Tan|Arcsin|Arccos|Arctan|Sinh|Cosh|Tanh|Cot|Sec|Csc|Log|Ln|Abs)/g, function(v) { return v.toLowerCase(); });
  frag = AMparseExpr(str.replace(/^\s+/g,""),false)[0];
  node = createMmlNode("mstyle",frag);
  if (mathcolor != "") node.setAttribute("mathcolor",mathcolor);
  if (mathfontfamily != "") node.setAttribute("fontfamily",mathfontfamily);
  if (displaystyle) node.setAttribute("displaystyle","true");
  node = createMmlNode("math",node);
  if (showasciiformulaonhover)                      //fixed by djhsu so newline
    node.setAttribute("title",str.replace(/\s+/g," "));//does not show in Gecko
  return node;
}

/*
function strarr2docFrag(arr, linebreaks, latex) {
  var newFrag=document.createDocumentFragment();
  var expr = false;
  for (var i=0; i<arr.length; i++) {
    if (expr) newFrag.appendChild(parseMath(arr[i],latex));
    else {
      var arri = (linebreaks ? arr[i].split("\n\n") : [arr[i]]);
      newFrag.appendChild(createElementXHTML("span").
      appendChild(document.createTextNode(arri[0])));
      for (var j=1; j<arri.length; j++) {
        newFrag.appendChild(createElementXHTML("p"));
        newFrag.appendChild(createElementXHTML("span").
        appendChild(document.createTextNode(arri[j])));
      }
    }
    expr = !expr;
  }
  return newFrag;
}

function AMautomathrec(str) {
//formula is a space (or start of str) followed by a maximal sequence of *two* or more tokens, possibly separated by runs of digits and/or space.
//tokens are single letters (except a, A, I) and ASCIIMathML tokens
  var texcommand = "\\\\[a-zA-Z]+|\\\\\\s|";
  var ambigAMtoken = "\\b(?:oo|lim|ln|int|oint|del|grad|aleph|prod|prop|sinh|cosh|tanh|cos|sec|pi|tt|fr|sf|sube|supe|sub|sup|det|mod|gcd|lcm|min|max|vec|ddot|ul|chi|eta|nu|mu)(?![a-z])|";
  var englishAMtoken = "\\b(?:sum|ox|log|sin|tan|dim|hat|bar|dot)(?![a-z])|";
  var secondenglishAMtoken = "|\\bI\\b|\\bin\\b|\\btext\\b"; // took if and or not out
  var simpleAMtoken = "NN|ZZ|QQ|RR|CC|TT|AA|EE|sqrt|dx|dy|dz|dt|xx|vv|uu|nn|bb|cc|csc|cot|alpha|beta|delta|Delta|epsilon|gamma|Gamma|kappa|lambda|Lambda|omega|phi|Phi|Pi|psi|Psi|rho|sigma|Sigma|tau|theta|Theta|xi|Xi|zeta"; // uuu nnn?
  var letter = "[a-zA-HJ-Z](?=(?:[^a-zA-Z]|$|"+ambigAMtoken+englishAMtoken+simpleAMtoken+"))|";
  var token = letter+texcommand+"\\d+|[-()[\\]{}+=*&^_%\\\@/<>,\\|!:;'~]|\\.(?!(?:\x20|$))|"+ambigAMtoken+englishAMtoken+simpleAMtoken;
  var re = new RegExp("(^|\\s)((("+token+")\\s?)(("+token+secondenglishAMtoken+")\\s?)+)([,.?]?(?=\\s|$))","g");
  str = str.replace(re," `$2`$7");
  var arr = str.split(AMdelimiter1);
  var re1 = new RegExp("(^|\\s)([b-zB-HJ-Z+*<>]|"+texcommand+ambigAMtoken+simpleAMtoken+")(\\s|\\n|$)","g");
  var re2 = new RegExp("(^|\\s)([a-z]|"+texcommand+ambigAMtoken+simpleAMtoken+")([,.])","g"); // removed |\d+ for now
  for (i=0; i<arr.length; i++)   //single nonenglish tokens
    if (i%2==0) {
      arr[i] = arr[i].replace(re1," `$2`$3");
      arr[i] = arr[i].replace(re2," `$2`$3");
      arr[i] = arr[i].replace(/([{}[\]])/,"`$1`");
    }
  str = arr.join(AMdelimiter1);
  str = str.replace(/((^|\s)\([a-zA-Z]{2,}.*?)\)`/g,"$1`)");  //fix parentheses
  str = str.replace(/`(\((a\s|in\s))(.*?[a-zA-Z]{2,}\))/g,"$1`$3");  //fix parentheses
  str = str.replace(/\sin`/g,"` in");
  str = str.replace(/`(\(\w\)[,.]?(\s|\n|$))/g,"$1`");
  str = str.replace(/`([0-9.]+|e.g|i.e)`(\.?)/gi,"$1$2");
  str = str.replace(/`([0-9.]+:)`/g,"$1");
  return str;
}

function processNodeR(n, linebreaks,latex) {
  var mtch, str, arr, frg, i;
  if (n.childNodes.length == 0) {
   if ((n.nodeType!=8 || linebreaks) &&
    n.parentNode.nodeName!="form" && n.parentNode.nodeName!="FORM" &&
    n.parentNode.nodeName!="textarea" && n.parentNode.nodeName!="TEXTAREA"
      //&&
      //n.parentNode.nodeName!="pre" && n.parentNode.nodeName!="PRE"
    ) {
    str = n.nodeValue;
    if (!(str == null)) {
      str = str.replace(/\r\n\r\n/g,"\n\n");
      str = str.replace(/\x20+/g," ");
      str = str.replace(/\s*\r\n/g," ");
      if(latex) {
// DELIMITERS:
        mtch = (str.indexOf("\$")==-1 ? false : true);
        str = str.replace(/([^\\])\$/g,"$1 \$");
        str = str.replace(/^\$/," \$");	// in case \$ at start of string
        arr = str.split(" \$");
        for (i=0; i<arr.length; i++)
	  arr[i]=arr[i].replace(/\\\$/g,"\$");
      } else {
      mtch = false;
      str = str.replace(new RegExp(AMescape1, "g"),
              function(){mtch = true; return "AMescape1"});
      str = str.replace(/\\?end{?a?math}?/i,
              function(){automathrecognize = false; mtch = true; return ""});
      str = str.replace(/amath\b|\\begin{a?math}/i,
              function(){automathrecognize = true; mtch = true; return ""});
      arr = str.split(AMdelimiter1);
      if (automathrecognize)
        for (i=0; i<arr.length; i++)
          if (i%2==0) arr[i] = AMautomathrec(arr[i]);
      str = arr.join(AMdelimiter1);
      arr = str.split(AMdelimiter1);
      for (i=0; i<arr.length; i++) // this is a problem ************
        arr[i]=arr[i].replace(/AMescape1/g,AMdelimiter1);
      }
      if (arr.length>1 || mtch) {
        if (!noMathML) {
          frg = strarr2docFrag(arr,n.nodeType==8,latex);
          var len = frg.childNodes.length;
          n.parentNode.replaceChild(frg,n);
          return len-1;
        } else return 0;
      }
    }
   } else return 0;
  } else if (n.nodeName!="math") {
    for (i=0; i<n.childNodes.length; i++)
      i += processNodeR(n.childNodes[i], linebreaks,latex);
  }
  return 0;
}

function AMprocessNode(n, linebreaks, spanclassAM) {
  var frag,st;
  if (spanclassAM!=null) {
    frag = document.getElementsByTagName("span")
    for (var i=0;i<frag.length;i++)
      if (frag[i].className == "AM") 
        processNodeR(frag[i],linebreaks,false);
  } else {
    try {
      st = n.innerHTML; // look for AMdelimiter on page
    } catch(err) {}
//alert(st)
    if (st==null || /amath\b|\\begin{a?math}/i.test(st) ||
      st.indexOf(AMdelimiter1+" ")!=-1 || st.slice(-1)==AMdelimiter1 ||
      st.indexOf(AMdelimiter1+"<")!=-1 || st.indexOf(AMdelimiter1+"\n")!=-1) {
      processNodeR(n,linebreaks,false);
    }
  }
}

function generic(){
  if(!init()) return;
  if (translateOnLoad) {
      translate();
  }
};
//setup onload function
if(typeof window.addEventListener != 'undefined'){
  //.. gecko, safari, konqueror and standard
  window.addEventListener('load', generic, false);
}
else if(typeof document.addEventListener != 'undefined'){
  //.. opera 7
  document.addEventListener('load', generic, false);
}
else if(typeof window.attachEvent != 'undefined'){
  //.. win/ie
  window.attachEvent('onload', generic);
}else{
  //.. mac/ie5 and anything else that gets this far
  //if there's an existing onload function
  if(typeof window.onload == 'function'){
    //store it
    var existing = onload;
    //add new onload handler
    window.onload = function(){
      //call existing onload function
      existing();
      //call generic onload function
      generic();
    };
  }else{
    window.onload = generic;
  }
}

//expose some functions to outside
asciimath.newcommand = newcommand;
asciimath.newsymbol = newsymbol;
asciimath.AMprocesssNode = AMprocessNode;
asciimath.parseMath = parseMath;
asciimath.translate = translate;
})();

*/

/******************************************************************
 *
 *   The previous section is ASCIIMathML.js Version 2.2
 *   (c) Peter Jipsen, used with permission.
 *
 ******************************************************************/

showasciiformulaonhover = false;
mathfontfamily = "";
mathcolor = "";

//
//  Remove remapping of mathvariants to plane1 (MathJax handles that)
//  Change functions to mi rather than mo (to get spacing right)
//
(function () {
  for (var i = 0, m = AMsymbols.length; i < m; i++) {
    if (AMsymbols[i].codes) {delete AMsymbols[i].codes}
    if (AMsymbols[i].func) {AMsymbols[i].tag = "mi"}
  }
})();

//
//  Access to AsciiMath functions and values
//
ASCIIMATH.Augment({
  AM: {
    Init: function () {
      displaystyle = ASCIIMATH.config.displaystyle;
      // Old versions use the "decimal" option, so take it into account if it
      // is defined by the user. See issue 384.
      decimalsign  = (ASCIIMATH.config.decimal || ASCIIMATH.config.decimalsign);
      // unfix phi and varphi, if requested
      if (!ASCIIMATH.config.fixphi) {
        for (var i = 0, m = AMsymbols.length; i < m; i++) {
          if (AMsymbols[i].input === "phi")    {AMsymbols[i].output = "\u03C6"}
          if (AMsymbols[i].input === "varphi") {AMsymbols[i].output = "\u03D5"; i = m}
        }
      }
   
      INITASCIIMATH();
      initSymbols();
    },
    Augment: function (def) {
      for (var id in def) {if (def.hasOwnProperty(id)) {
	switch (id) {
	 case "displaystyle": displaystyle = def[id]; break;
	 case "decimal": decimal = def[id]; break;
	 case "parseMath": parseMath = def[id]; break;
	 case "parseExpr": AMparseExpr = def[id]; break;
	 case "parseIexpr": AMparseIexpr = def[id]; break;
	 case "parseSexpr": AMparseSexpr = def[id]; break;
	 case "removeBrackets": AMremoveBrackets = def[id]; break;
	 case "getSymbol": AMgetSymbol = def[id]; break;
	 case "position": position = def[id]; break;
	 case "removeCharsAndBlanks": AMremoveCharsAndBlanks = def[id]; break;
	 case "createMmlNode": createMmlNode = def[id]; break;
	 case "createElementMathML": AMcreateElementMathML = def[id]; break;
	 case "createElementXHTML": createElementXHTML = def[id]; break;
	 case "initSymbols": initSymbols = def[id]; break;
	 case "refreshSymbols": refreshSymbols = def[id]; break;
	 case "compareNames": compareNames = def[id]; break;
	};
        this[id] = def[id];
      }};
    },
    parseMath:  parseMath,
    parseExpr:  AMparseExpr,
    parseIexpr: AMparseIexpr,
    parseSexr:  AMparseSexpr,
    removeBrackets: AMremoveBrackets,
    getSymbol:  AMgetSymbol,
    position:   position,
    removeCharsAndBlanks: AMremoveCharsAndBlanks,
    createMmlNode: createMmlNode,
    createElementMathML: AMcreateElementMathML,
    createElementXHTML:  createElementXHTML,
    initSymbols: initSymbols,
    refreshSymbols: refreshSymbols,
    compareNames: compareNames,
    
    createDocumentFragment: DOCFRAG,
    document: document,
    
    define: define,
    newcommand: newcommand,
    newsymbol: newsymbol,
    symbols: AMsymbols,
    names: AMnames,
        
    TOKEN: {
      CONST:CONST, UNARY:UNARY, BINARY:BINARY, INFIX:INFIX,
      LEFTBRACKET:LEFTBRACKET, RIGHTBRACKET:RIGHTBRACKET, SPACE:SPACE,
      UNDEROVER:UNDEROVER, DEFINITION:DEFINITION, LEFTRIGHT:LEFTRIGHT, TEXT:TEXT,
      UNARYUNDEROVER:UNARYUNDEROVER
    }
  }
});

//
//  Make minimizer think these have been used
//
var junk = [window, navigator]; junk = null;
  
})(MathJax.InputJax.AsciiMath);


/************************************************************************/

(function (ASCIIMATH) {
  var MML;
  
  ASCIIMATH.Augment({
    sourceMenuTitle: /*_(MathMenu)*/ ["AsciiMathInput","AsciiMath Input"],
    annotationEncoding: "text/x-asciimath",

    prefilterHooks:    MathJax.Callback.Hooks(true),   // hooks to run before processing AsciiMath
    postfilterHooks:   MathJax.Callback.Hooks(true),   // hooks to run after processing AsciiMath

    Translate: function (script) {
      var mml, math = MathJax.HTML.getScript(script);
      var data = {math:math, script:script};
      var callback = this.prefilterHooks.Execute(data); if (callback) return callback;
      math = data.math;
      try {
        mml = this.AM.parseMath(math);
      } catch(err) {
        if (!err.asciimathError) {throw err}
        mml = this.formatError(err,math);
      }
      data.math = MML(mml); this.postfilterHooks.Execute(data);
      return this.postfilterHooks.Execute(data) || data.math;
    },
    formatError: function (err,math,script) {
      var message = err.message.replace(/\n.*/,"");
      MathJax.Hub.signal.Post(["AsciiMath Jax - parse error",message,math,script]);
      return MML.Error(message);
    },
    Error: function (message) {
      throw MathJax.Hub.Insert(Error(message),{asciimathError: true});
    },
    //
    //  Initialize the MML variable and AsciiMath itself
    //
    Startup: function () {
      MML = MathJax.ElementJax.mml;
      this.AM.Init();
    }
  });

  ASCIIMATH.loadComplete("jax.js");
  
})(MathJax.InputJax.AsciiMath);




/*************************************************************
 *
 *  MathJax/jax/output/SVG/jax.js
 *
 *  Implements the SVG OutputJax that displays mathematics using
 *  SVG (or VML in IE) to position the characters from math fonts
 *  in their proper locations.
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


(function (AJAX,HUB,HTML,SVG) {
  var MML;
  var isArray = MathJax.Object.isArray;

  var SVGNS   = "http://www.w3.org/2000/svg";
  var XLINKNS = "http://www.w3.org/1999/xlink";

  var EVENT, TOUCH, HOVER; // filled in later

  //
  //  Get the URL of the page (for use with xlink:href) when there
  //  is a <base> element on the page.
  //  
  var SVGURL = (document.getElementsByTagName("base").length === 0) ? "" :
                String(document.location).replace(/#.*$/,"");

  SVG.Augment({
    HFUZZ: 2,     // adjustments for height and depth of final svg element
    DFUZZ: 2,     //   to get baselines right (fragile).
    
    config: {
      styles: {
        ".MathJax_SVG": {
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

        ".MathJax_SVG_Display": {
          position: "relative",
          display: "block!important",
          "text-indent": 0,
          "max-width": "none", "max-height": "none",
          "min-width": 0, "min-height": 0,
          width: "100%"
        },
        
        ".MathJax_SVG *": {
          transition: "none",
          "-webkit-transition": "none",
          "-moz-transition": "none",
          "-ms-transition": "none",
          "-o-transition": "none"
        },
        
        ".mjx-svg-href": {
          fill: "blue", stroke: "blue"
        },

        ".MathJax_SVG_Processing": {
          visibility: "hidden", position:"absolute", top:0, left:0,
          width:0, height: 0, overflow:"hidden", display:"block!important"
        },
        ".MathJax_SVG_Processed": {display:"none!important"},
        
        ".MathJax_SVG_ExBox": {
          display:"block!important", overflow:"hidden",
          width:"1px", height:"60ex",
          "min-height": 0, "max-height":"none",
          padding:0, border: 0, margin: 0
        },
        ".MathJax_SVG_LineBox": {display: "table!important"},
        ".MathJax_SVG_LineBox span": {
          display: "table-cell!important",
          width: "10000em!important",
          "min-width":0, "max-width":"none",
          padding:0, border:0, margin:0
        },
        
        "#MathJax_SVG_Tooltip": {
          position: "absolute", left: 0, top: 0,
          width: "auto", height: "auto",
          display: "none"
        }
      }
    },

    hideProcessedMath: true,           // use display:none until all math is processed

    fontNames: ["TeX","STIX","STIX-Web","Asana-Math",
                "Gyre-Termes","Gyre-Pagella","Latin-Modern","Neo-Euler"],


    Config: function () {
      this.SUPER(arguments).Config.apply(this,arguments);
      var settings = HUB.config.menuSettings, config = this.config, font = settings.font;
      if (settings.scale) {config.scale = settings.scale}
      if (font && font !== "Auto") {
        font = font.replace(/(Local|Web|Image)$/i,"");
        font = font.replace(/([a-z])([A-Z])/,"$1-$2");
        this.fontInUse = font;
      } else {
        this.fontInUse = config.font || "TeX";
      }
      if (this.fontNames.indexOf(this.fontInUse) < 0) {this.fontInUse = "TeX"}
      this.fontDir += "/" + this.fontInUse;
      if (!this.require) {this.require = []}
      this.require.push(this.fontDir+"/fontdata.js");
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

      // Make hidden div for doing tests and storing global SVG <defs>
      this.hiddenDiv = HTML.Element("div",{
        style:{visibility:"hidden", overflow:"hidden", position:"absolute", top:0,
               height:"1px", width: "auto", padding:0, border:0, margin:0,
               textAlign:"left", textIndent:0, textTransform:"none",
               lineHeight:"normal", letterSpacing:"normal", wordSpacing:"normal"}
      });
      if (!document.body.firstChild) {document.body.appendChild(this.hiddenDiv)}
        else {document.body.insertBefore(this.hiddenDiv,document.body.firstChild)}
      this.hiddenDiv = HTML.addElement(this.hiddenDiv,"div",{id:"MathJax_SVG_Hidden"});

      // Determine pixels-per-inch and em-size
      var div = HTML.addElement(this.hiddenDiv,"div",{style:{width:"5in"}});
      this.pxPerInch = div.offsetWidth/5; this.hiddenDiv.removeChild(div);
      
      // Used for measuring text sizes
      this.textSVG = this.Element("svg");
      
      // Global defs for font glyphs
      BBOX.GLYPH.defs = this.addElement(this.addElement(this.hiddenDiv.parentNode,"svg"),
                                          "defs",{id:"MathJax_SVG_glyphs"});

       // Used in preTranslate to get scaling factors
      this.ExSpan = HTML.Element("span",
        {style:{position:"absolute","font-size-adjust":"none"}},
        [["span",{className:"MathJax_SVG_ExBox"}]]
      );

      // Used in preTranslate to get linebreak width
      this.linebreakSpan = HTML.Element("span",{className:"MathJax_SVG_LineBox"},[["span"]]);

      // Set up styles
      return AJAX.Styles(this.config.styles,["InitializeSVG",this]);
    },
    
    //
    //  Handle initialization that requires styles to be set up
    //
    InitializeSVG: function () {
      //
      //  Get the default sizes (need styles in place to do this)
      //
      document.body.appendChild(this.ExSpan);
      document.body.appendChild(this.linebreakSpan);
      this.defaultEx    = this.ExSpan.firstChild.offsetHeight/60;
      this.defaultWidth = this.linebreakSpan.firstChild.offsetWidth;
      document.body.removeChild(this.linebreakSpan);
      document.body.removeChild(this.ExSpan);
    },

    preTranslate: function (state) {
      var scripts = state.jax[this.id], i, m = scripts.length, n,
          script, prev, span, div, test, jax, ex, em, maxwidth, relwidth = false, cwidth,
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
        if (prev && String(prev.className).match(/^MathJax(_SVG)?(_Display)?( MathJax(_SVG)?_Process(ing|ed))?$/))
          {prev.parentNode.removeChild(prev)}
        if (script.MathJax.preview) script.MathJax.preview.style.display = "none";
        //
        //  Add the span, and a div if in display mode,
        //  then set the role and mark it as being processed
        //
        jax = script.MathJax.elementJax; if (!jax) continue;
        jax.SVG = {
          display: (jax.root.Get("display") === "block"),
          preview: (jax.SVG||{}).preview            // in case typeset calls are interleaved
        };
        span = div = HTML.Element("span",{
          style: {"font-size": this.config.scale+"%", display:"inline-block"},
 	  className:"MathJax_SVG", id:jax.inputID+"-Frame", isMathJax:true, jaxID:this.id,
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
        if (jax.SVG.display) {
          div = HTML.Element("div",{className:"MathJax_SVG_Display"});
          div.appendChild(span);
        }
        div.className += " MathJax_SVG_Processing";
        script.parentNode.insertBefore(div,script);
        //
        //  Add the test span for determining scales and linebreak widths
        //
        script.parentNode.insertBefore(this.ExSpan.cloneNode(true),script);
        div.parentNode.insertBefore(this.linebreakSpan.cloneNode(true),div);
      }
      //
      //  Determine the scaling factors for each script
      //  (this only requires one reflow rather than a reflow for each equation)
      //
      var hidden = [];
      for (i = 0; i < m; i++) {
        script = scripts[i]; if (!script.parentNode) continue;
        test = script.previousSibling; div = test.previousSibling;
        jax = script.MathJax.elementJax; if (!jax) continue;
        ex = test.firstChild.offsetHeight/60;
        cwidth = Math.max(0,(div.previousSibling.firstChild.offsetWidth-2) / this.config.scale * 100);
        if (ex === 0 || ex === "NaN") {
          // can't read width, so move to hidden div for processing
          hidden.push(div);
          jax.SVG.isHidden = true;
          ex = this.defaultEx; cwidth = this.defaultWidth;
        }
        if (relwidth) {maxwidth = cwidth}
        jax.SVG.ex = ex;
        jax.SVG.em = em = ex / SVG.TeX.x_height * 1000; // scale ex to x_height
        jax.SVG.cwidth = cwidth/em * 1000;
        jax.SVG.lineWidth = (linebreak ? this.length2em(width,1,maxwidth/em*1000) : SVG.BIGDIMEN);
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
        test = scripts[i].previousSibling; span = test.previousSibling;
        jax = scripts[i].MathJax.elementJax; if (!jax) continue;
        if (!jax.SVG.isHidden) {span = span.previousSibling}
        span.parentNode.removeChild(span);
        test.parentNode.removeChild(test);
        if (script.MathJax.preview) script.MathJax.preview.style.display = "";
      }
      //
      //  Set state variables used for displaying equations in chunks
      //
      state.SVGeqn = state.SVGlast = 0; state.SVGi = -1;
      state.SVGchunk = this.config.EqnChunk;
      state.SVGdelay = false;
    },

    Translate: function (script,state) {
      if (!script.parentNode) return;

      //
      //  If we are supposed to do a chunk delay, do it
      //  
      if (state.SVGdelay) {
        state.SVGdelay = false;
        HUB.RestartAfter(MathJax.Callback.Delay(this.config.EqnChunkDelay));
      }

      //
      //  Get the data about the math
      //
      var jax = script.MathJax.elementJax, math = jax.root, div, span,
          localCache = (SVG.config.useFontCache && !SVG.config.useGlobalCache);
      if (jax.SVG.isHidden) {
        span = document.getElementById(jax.inputID+"-Frame");
        div = (jax.SVG.display ? span.parentElement : span);
      } else {
        div = script.previousSibling;
        span = (jax.SVG.display ? (div||{}).firstChild||div : div);
      }
      if (!div) return;
      //
      //  Set the font metrics
      //
      this.em = MML.mbase.prototype.em = jax.SVG.em; this.ex = jax.SVG.ex;
      this.linebreakWidth = jax.SVG.lineWidth; this.cwidth = jax.SVG.cwidth;
      //
      //  Typeset the math
      //
      this.mathDiv = div;
      span.appendChild(this.textSVG);
      if (localCache) {SVG.resetGlyphs()}
      this.initSVG(math,span);
      math.setTeXclass();
      try {math.toSVG(span,div)} catch (err) {
        if (err.restart) {while (span.firstChild) {span.removeChild(span.firstChild)}}
        if (localCache) {BBOX.GLYPH.n--}
        throw err;
      }
      span.removeChild(this.textSVG);
      //
      //  Put it in place, and remove the processing marker
      //
      if (jax.SVG.isHidden) {script.parentNode.insertBefore(div,script)}
      div.className = div.className.split(/ /)[0];
      //
      //  Check if we are hiding the math until more is processed
      //
      if (this.hideProcessedMath) {
        //
        //  Hide the math and don't let its preview be removed
        //
        div.className += " MathJax_SVG_Processed";
        if (script.MathJax.preview) {
          jax.SVG.preview = script.MathJax.preview;
          delete script.MathJax.preview;
        }
        //
        //  Check if we should show this chunk of equations
        //
        state.SVGeqn += (state.i - state.SVGi); state.SVGi = state.i;
        if (state.SVGeqn >= state.SVGlast + state.SVGchunk) {
          this.postTranslate(state,true);
          state.SVGchunk = Math.floor(state.SVGchunk*this.config.EqnChunkFactor);
          state.SVGdelay = true;  // delay if there are more scripts
        }
      }
    },

    postTranslate: function (state,partial) {
      var scripts = state.jax[this.id];
      if (!this.hideProcessedMath) return;
      //
      //  Reveal this chunk of math
      //
      for (var i = state.SVGlast, m = state.SVGeqn; i < m; i++) {
        var script = scripts[i];
        if (script && script.MathJax.elementJax) {
          //
          //  Remove the processed marker
          //
          script.previousSibling.className = script.previousSibling.className.split(/ /)[0];
          var data = script.MathJax.elementJax.SVG;
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
      //
      //  Save our place so we know what is revealed
      //
      state.SVGlast = state.SVGeqn;
    },
    
    resetGlyphs: function (reset) {
      if (this.config.useFontCache) {
        var GLYPH = BBOX.GLYPH;
        if (this.config.useGlobalCache) {
          GLYPH.defs = document.getElementById("MathJax_SVG_glyphs");
          GLYPH.defs.innerHTML = "";
        } else {
          GLYPH.defs = this.Element("defs");
          GLYPH.n++;
        }
        GLYPH.glyphs = {};
        if (reset) {GLYPH.n = 0}
      }
    },

    //
    //  Return the containing HTML element rather than the SVG element, since
    //  most browsers can't position to an SVG element properly.
    //
    hashCheck: function (target) {
      if (target && target.nodeName.toLowerCase() === "g")
        {do {target = target.parentNode} while (target && target.firstChild.nodeName !== "svg")}
      return target;
    },

    getJaxFromMath: function (math) {
      if (math.parentNode.className.match(/MathJax_SVG_Display/)) {math = math.parentNode}
      do {math = math.nextSibling} while (math && math.nodeName.toLowerCase() !== "script");
      return HUB.getJaxFor(math);
    },
    getHoverSpan: function (jax,math) {
      math.style.position = "relative"; // make sure inline containers have position set
      return math.firstChild;
    },
    getHoverBBox: function (jax,span,math) {
      var bbox = EVENT.getBBox(span.parentNode);
      bbox.h += 2; bbox.d -= 2; // bbox seems to be a bit off, so compensate (FIXME)
      return bbox;
    },
    
    Zoom: function (jax,span,math,Mw,Mh) {
      //
      //  Re-render at larger size
      //
      span.className = "MathJax_SVG";

      //
      //  get em size (taken from this.preTranslate)
      //
      var emex = span.appendChild(this.ExSpan.cloneNode(true));
      var ex = emex.firstChild.offsetHeight/60;
      this.em = MML.mbase.prototype.em = ex / SVG.TeX.x_height * 1000; this.ex = ex;
      this.linebreakWidth = jax.SVG.lineWidth; this.cwidth = jax.SVG.cwidth;
      emex.parentNode.removeChild(emex);

      span.appendChild(this.textSVG);
      this.mathDIV = span; this.zoomScale = parseInt(HUB.config.menuSettings.zscale) / 100;
      var tw = jax.root.data[0].SVGdata.tw; if (tw && tw < this.cwidth) this.cwidth = tw;
      this.idPostfix = "-zoom"; jax.root.toSVG(span,span); this.idPostfix = "";
      this.zoomScale = 1;
      span.removeChild(this.textSVG);
      
      //
      //  Don't allow overlaps on any edge
      //
      var svg = span.getElementsByTagName("svg")[0].style;
      svg.marginTop = svg.marginRight = svg.marginLeft = 0;
      if (svg.marginBottom.charAt(0) === "-")
        span.style.marginBottom = svg.marginBottom.substr(1);
      
      if (this.operaZoomRefresh) {
        setTimeout(function () {
          span.firstChild.style.border = "1px solid transparent";
        },1);
      }
      //
      // WebKit bug (issue #749)
      //  
      if (span.offsetWidth < span.firstChild.offsetWidth) {
        span.style.minWidth = span.firstChild.offsetWidth + "px";
        math.style.minWidth = math.firstChild.offsetWidth + "px";
      }
      //
      //  Get height and width of zoomed math and original math
      //
      span.style.position = math.style.position = "absolute";
      var zW = span.offsetWidth, zH = span.offsetHeight,
          mH = math.offsetHeight, mW = math.offsetWidth;
      span.style.position = math.style.position = "";
      //
      return {Y:-EVENT.getBBox(span).h, mW:mW, mH:mH, zW:zW, zH:zH};
    },

    initSVG: function (math,span) {},
    
    Remove: function (jax) {
      var span = document.getElementById(jax.inputID+"-Frame");
      if (span) {
        if (jax.SVG.display) {span = span.parentNode}
        span.parentNode.removeChild(span);
      }
      delete jax.SVG;
    },
    
    Em: function (m) {
      if (Math.abs(m) < .0006) return "0";
      return m.toFixed(3).replace(/\.?0+$/,"") + "em";
    },
    Ex: function (m) {
      m = m / this.TeX.x_height;
      if (Math.abs(m) < .0006) return "0";
      return m.toFixed(3).replace(/\.?0+$/,"") + "ex";
    },
    Percent: function (m) {
      return (100*m).toFixed(1).replace(/\.?0+$/,"") + "%";
    },
    Fixed: function (m,n) {
      if (Math.abs(m) < .0006) return "0";
      return m.toFixed(n||3).replace(/\.?0+$/,"");
    },
    length2em: function (length,mu,size) {
      if (typeof(length) !== "string") {length = length.toString()}
      if (length === "") {return ""}
      if (length === MML.SIZE.NORMAL) {return 1000}
      if (length === MML.SIZE.BIG)    {return 2000}
      if (length === MML.SIZE.SMALL)  {return  710}
      if (length === "infinity")      {return SVG.BIGDIMEN}
      if (length.match(/mathspace$/)) {return 1000*SVG.MATHSPACE[length]}
      var emFactor = (this.zoomScale || 1) / SVG.em;
      var match = length.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/);
      var m = parseFloat(match[1]||"1") * 1000, unit = match[2];
      if (size == null) {size = 1000};  if (mu == null) {mu = 1}
      if (unit === "em") {return m}
      if (unit === "ex") {return m * SVG.TeX.x_height/1000}
      if (unit === "%")  {return m / 100 * size / 1000}
      if (unit === "px") {return m * emFactor}
      if (unit === "pt") {return m / 10}                               // 10 pt to an em
      if (unit === "pc") {return m * 1.2}                              // 12 pt to a pc
      if (unit === "in") {return m * this.pxPerInch * emFactor}
      if (unit === "cm") {return m * this.pxPerInch * emFactor / 2.54} // 2.54 cm to an inch
      if (unit === "mm") {return m * this.pxPerInch * emFactor / 25.4} // 10 mm to a cm
      if (unit === "mu") {return m / 18 * mu}
      return m*size / 1000;  // relative to given size (or 1em as default)
    },
    thickness2em: function (length,mu) {
      var thick = SVG.TeX.rule_thickness;
      if (length === MML.LINETHICKNESS.MEDIUM) {return thick}
      if (length === MML.LINETHICKNESS.THIN)   {return .67*thick}
      if (length === MML.LINETHICKNESS.THICK)  {return 1.67*thick}
      return this.length2em(length,mu,thick);
    },

    getPadding: function (styles) {
      var padding = {top:0, right:0, bottom:0, left:0}, has = false;
      for (var id in padding) {if (padding.hasOwnProperty(id)) {
        var pad = styles["padding"+id.charAt(0).toUpperCase()+id.substr(1)];
        if (pad) {padding[id] = this.length2em(pad); has = true;}
      }}
      return (has ? padding : false);
    },
    getBorders: function (styles) {
      var border = {top:0, right:0, bottom:0, left:0}, has = false;
      for (var id in border) {if (border.hasOwnProperty(id)) {
        var ID = "border"+id.charAt(0).toUpperCase()+id.substr(1);
        var style = styles[ID+"Style"];
        if (style && style !== "none") {
          has = true;
          border[id] = this.length2em(styles[ID+"Width"]);
          border[id+"Style"] = styles[ID+"Style"];
          border[id+"Color"] = styles[ID+"Color"];
          if (border[id+"Color"] === "initial") {border[id+"Color"] = ""}
        } else {delete border[id]}
      }}
      return (has ? border : false);
    },

    Element: function (type,def) {
      var obj = (typeof(type) === "string" ? document.createElementNS(SVGNS,type) : type);
      obj.isMathJax = true;
      if (def) {for (var id in def) {if (def.hasOwnProperty(id)) {obj.setAttribute(id,def[id].toString())}}}
      return obj;
    },
    addElement: function (parent,type,def) {return parent.appendChild(this.Element(type,def))},
    TextNode: HTML.TextNode,
    addText: HTML.addText,
    ucMatch: HTML.ucMatch,

    HandleVariant: function (variant,scale,text) {
      var svg = BBOX.G();
      var n, N, c, font, VARIANT, i, m, id, M, RANGES;
      if (!variant) {variant = this.FONTDATA.VARIANT[MML.VARIANT.NORMAL]}
      if (variant.forceFamily) {
        text = BBOX.TEXT(scale,text,variant.font);
        if (variant.h != null) {text.h = variant.h}; if (variant.d != null) {text.d = variant.d}
        svg.Add(text); text = "";
      }
      VARIANT = variant;
      for (i = 0, m = text.length; i < m; i++) {
        variant = VARIANT;
        n = text.charCodeAt(i); c = text.charAt(i);
        if (n >= 0xD800 && n < 0xDBFF) {
          i++; n = (((n-0xD800)<<10)+(text.charCodeAt(i)-0xDC00))+0x10000;
          if (this.FONTDATA.RemapPlane1) {
            var nv = this.FONTDATA.RemapPlane1(n,variant);
            n = nv.n; variant = nv.variant;
          }
        } else {
          RANGES = this.FONTDATA.RANGES;
          for (id = 0, M = RANGES.length; id < M; id++) {
            if (RANGES[id].name === "alpha" && variant.noLowerCase) continue;
            N = variant["offset"+RANGES[id].offset];
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
        if (c) {
          if ((c[5] && c[5].space) || (c[5] === "" && c[0]+c[1] === 0)) {svg.w += c[2]} else {
            c = [scale,font.id+"-"+n.toString(16).toUpperCase()].concat(c);
            svg.Add(BBOX.GLYPH.apply(BBOX,c),svg.w,0);
          }
        } else if (this.FONTDATA.DELIMITERS[n]) {
          c = this.createDelimiter(n,0,1,font);
          svg.Add(c,svg.w,(this.FONTDATA.DELIMITERS[n].dir === "V" ? c.d: 0));
        } else {
          if (n <= 0xFFFF) {c = String.fromCharCode(n)} else {
            N = n - 0x10000;
            c = String.fromCharCode((N>>10)+0xD800)
              + String.fromCharCode((N&0x3FF)+0xDC00);
          }
          var box = BBOX.TEXT(scale*100/SVG.config.scale,c,{
            "font-family":variant.defaultFamily||SVG.config.undefinedFamily,
            "font-style":(variant.italic?"italic":""),
            "font-weight":(variant.bold?"bold":"")
          })
          if (variant.h != null) {box.h = variant.h}; if (variant.d != null) {box.d = variant.d}
          c = BBOX.G(); c.Add(box); svg.Add(c,svg.w,0);
          HUB.signal.Post(["SVG Jax - unknown char",n,variant]);
        }
      }
      if (text.length == 1 && font.skew && font.skew[n]) {svg.skew = font.skew[n]*1000}
      if (svg.element.childNodes.length === 1 && !svg.element.firstChild.getAttribute("x")) {
        svg.element = svg.element.firstChild;
        svg.removeable = false; svg.scale = scale;
      }
      return svg;
    },
        
    lookupChar: function (variant,n) {
      var i, m;
      if (!variant.FONTS) {
        var FONTS = this.FONTDATA.FONTS;
        var fonts = (variant.fonts || this.FONTDATA.VARIANT.normal.fonts);
        if (!(fonts instanceof Array)) {fonts = [fonts]}
        if (variant.fonts != fonts) {variant.fonts = fonts}
        variant.FONTS = [];
        for (i = 0, m = fonts.length; i < m; i++) {
          if (FONTS[fonts[i]]) {variant.FONTS.push(FONTS[fonts[i]])}
        }
      }
      for (i = 0, m = variant.FONTS.length; i < m; i++) {
        var font = variant.FONTS[i];
        if (typeof(font) === "string") {delete variant.FONTS; this.loadFont(font)}
        if (font[n]) {return font} else {this.findBlock(font,n)}
      }
      return {id:"unknown"};
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
      HUB.RestartAfter(AJAX.Require(this.fontDir+"/"+file));
    },

    createDelimiter: function (code,HW,scale,font) {
      if (!scale) {scale = 1};
      var svg = BBOX.G();
      if (!code) {
        svg.Clean(); delete svg.element;
        svg.w = svg.r = this.TeX.nulldelimiterspace * scale;
        return svg;
      }
      if (!(HW instanceof Array)) {HW = [HW,HW]}
      var hw = HW[1]; HW = HW[0];
      var delim = {alias: code};
      while (delim.alias) {
        code = delim.alias; delim = this.FONTDATA.DELIMITERS[code];
        if (!delim) {delim = {HW: [0,this.FONTDATA.VARIANT[MML.VARIANT.NORMAL]]}}
      }
      if (delim.load) {HUB.RestartAfter(AJAX.Require(this.fontDir+"/fontdata-"+delim.load+".js"))}
      for (var i = 0, m = delim.HW.length; i < m; i++) {
        if (delim.HW[i][0]*scale >= HW-10-SVG.config.blacker || (i == m-1 && !delim.stretch)) {
          if (delim.HW[i][2]) {scale *= delim.HW[i][2]}
          if (delim.HW[i][3]) {code = delim.HW[i][3]}
          return this.createChar(scale,[code,delim.HW[i][1]],font).With({stretched: true});
        }
      }
      if (delim.stretch) {this["extendDelimiter"+delim.dir](svg,hw,delim.stretch,scale,font)}
      return svg;
    },
    createChar: function (scale,data,font) {
      var text = "", variant = {fonts: [data[1]], noRemap:true};
      if (font && font === MML.VARIANT.BOLD) {variant.fonts = [data[1]+"-bold",data[1]]}
      if (typeof(data[1]) !== "string") {variant = data[1]}
      if (data[0] instanceof Array) {
        for (var i = 0, m = data[0].length; i < m; i++) {text += String.fromCharCode(data[0][i])}
      } else {text = String.fromCharCode(data[0])}
      if (data[4]) {scale = scale*data[4]}
      var svg = this.HandleVariant(variant,scale,text);
      if (data[2]) {svg.x = data[2]*1000}
      if (data[3]) {svg.y = data[3]*1000}
      if (data[5]) {svg.h += data[5]*1000}
      if (data[6]) {svg.d += data[6]*1000}
      return svg;
    },
    extendDelimiterV: function (svg,H,delim,scale,font) {
      var top = this.createChar(scale,(delim.top||delim.ext),font);
      var bot = this.createChar(scale,(delim.bot||delim.ext),font);
      var h = top.h + top.d + bot.h + bot.d;
      var y = -top.h; svg.Add(top,0,y); y -= top.d;
      if (delim.mid) {var mid = this.createChar(scale,delim.mid,font); h += mid.h + mid.d}
      if (delim.min && H < h*delim.min) {H = h*delim.min}
      if (H > h) {
        var ext = this.createChar(scale,delim.ext,font);
        var k = (delim.mid ? 2 : 1), eH = (H-h) / k, s = (eH+100) / (ext.h+ext.d);
        while (k-- > 0) {
          var g = SVG.Element("g",{transform:"translate("+ext.y+","+(y-s*ext.h+50+ext.y)+") scale(1,"+s+")"});
          g.appendChild(ext.element.cloneNode(false)); svg.element.appendChild(g); y -= eH;
          if (delim.mid && k) {svg.Add(mid,0,y-mid.h); y -= (mid.h+mid.d)}
        }
      } else if (delim.mid) {
        y += (h - H)/2; svg.Add(mid,0,y-mid.h); y += -(mid.h + mid.d) + (h - H)/2;
      } else {
        y += (h - H);
      }
      svg.Add(bot,0,y-bot.h); svg.Clean();
      svg.scale = scale;
      svg.isMultiChar = true;
    },
    extendDelimiterH: function (svg,W,delim,scale,font) {
      var left  = this.createChar(scale,(delim.left||delim.rep),font);
      var right = this.createChar(scale,(delim.right||delim.rep),font);
      svg.Add(left,-left.l,0);
      var w = (left.r - left.l) + (right.r - right.l), x = left.r - left.l;
      if (delim.mid) {var mid = this.createChar(scale,delim.mid,font); w += mid.w}
      if (delim.min && W < w*delim.min) {W = w*delim.min}
      if (W > w) {
        var rep = this.createChar(scale,delim.rep,font), fuzz = delim.fuzz || 0;
        var k = (delim.mid ? 2 : 1), rW = (W-w) / k, s = (rW+fuzz) / (rep.r-rep.l);
        while (k-- > 0) {
          var g = SVG.Element("g",{transform:"translate("+(x-fuzz/2-s*rep.l+rep.x)+","+rep.y+") scale("+s+",1)"});
          g.appendChild(rep.element.cloneNode(false)); svg.element.appendChild(g); x += rW;
          if (delim.mid && k) {svg.Add(mid,x,0); x += mid.w}
        }
      } else if (delim.mid) {
        x -= (w - W)/2; svg.Add(mid,x,0); x += mid.w - (w - W)/2;
      } else {
        x -= (w - W);
      }
      svg.Add(right,x-right.l,0); svg.Clean();
      svg.scale = scale;
      svg.isMultiChar = true;
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
      negativeveryverythickmathspace: -7/18
    },

    //
    //  Units are em/1000 so quad is 1em
    //
    TeX: {
      x_height:         430.554,
      quad:            1000,
      num1:             676.508,
      num2:             393.732,
      num3:             443.73,
      denom1:           685.951,
      denom2:           344.841,
      sup1:             412.892,
      sup2:             362.892,
      sup3:             288.888,
      sub1:             150,
      sub2:             247.217,
      sup_drop:         386.108,
      sub_drop:          50,
      delim1:          2390,
      delim2:          1000,
      axis_height:      250,
      rule_thickness:    60,
      big_op_spacing1:  111.111,
      big_op_spacing2:  166.666,
      big_op_spacing3:  200,
      big_op_spacing4:  600,
      big_op_spacing5:  100,

      scriptspace:         100,
      nulldelimiterspace:  120,
      delimiterfactor:     901,
      delimitershortfall:  300,

      min_rule_thickness:  1.25,   // in pixels
      min_root_space:      1.5     // in pixels
    },

    BIGDIMEN: 10000000,
    NBSP:   "\u00A0"
  });
  
  var BBOX = SVG.BBOX = MathJax.Object.Subclass({
    type: "g", removeable: true,
    Init: function (def) {
      this.h = this.d = -SVG.BIGDIMEN; this.H = this.D = 0;
      this.w = this.r = 0; this.l = SVG.BIGDIMEN;
      this.x = this.y = 0; this.scale = 1; this.n = 0;
      if (this.type) {this.element = SVG.Element(this.type,def)}
    },
    With: function (def) {return HUB.Insert(this,def)},
    Add: function (svg,dx,dy,forcew,infront) {
      if (dx) {svg.x += dx}; if (dy) {svg.y += dy};
      if (svg.element) {
        if (svg.removeable && svg.element.childNodes.length === 1 && svg.n === 1) {
          var child = svg.element.firstChild, nodeName = child.nodeName.toLowerCase();
          if (nodeName === "use" || nodeName === "rect") {
            svg.element = child; svg.scale = svg.childScale;
            var x = svg.childX, y = svg.childY;
            svg.x += x; svg.y += y;
            svg.h -= y; svg.d += y; svg.H -= y; svg.D +=y;
            svg.w -= x; svg.r -= x; svg.l += x;
            svg.removeable = false;
            child.setAttribute("x",Math.floor(svg.x/svg.scale));
            child.setAttribute("y",Math.floor(svg.y/svg.scale));
          }
        }
        if (Math.abs(svg.x) < 1 && Math.abs(svg.y) < 1) {
          svg.remove = svg.removeable;
        } else {
          nodeName = svg.element.nodeName.toLowerCase();
          if (nodeName === "g") {
            if (!svg.element.firstChild) {svg.remove = svg.removeable}
              else {svg.element.setAttribute("transform","translate("+Math.floor(svg.x)+","+Math.floor(svg.y)+")")}
          } else if (nodeName === "line" || nodeName === "polygon" ||
                     nodeName === "path" || nodeName === "a") {
            var transform = svg.element.getAttribute("transform") || "";
            if (transform) transform = " "+transform;
            transform = "translate("+Math.floor(svg.x)+","+Math.floor(svg.y)+")"+transform;
            svg.element.setAttribute("transform",transform);
          } else {
            svg.element.setAttribute("x",Math.floor(svg.x/svg.scale));
            svg.element.setAttribute("y",Math.floor(svg.y/svg.scale));
          }
        }
        if (svg.remove) {
          this.n += svg.n;
          while (svg.element.firstChild) {
            if (infront && this.element.firstChild) {
              this.element.insertBefore(svg.element.firstChild,this.element.firstChild);
            } else {
              this.element.appendChild(svg.element.firstChild);
            }
          }
        } else {
          if (infront) {this.element.insertBefore(svg.element,this.element.firstChild)}
                  else {this.element.appendChild(svg.element)}
        }
        delete svg.element;
      }
      if (svg.hasIndent) {this.hasIndent = svg.hasIndent}
      if (svg.tw != null) {this.tw = svg.tw}
      if (svg.d - svg.y > this.d) {this.d = svg.d - svg.y; if (this.d > this.D) {this.D = this.d}}
      if (svg.y + svg.h > this.h) {this.h = svg.y + svg.h; if (this.h > this.H) {this.H = this.h}}
      if (svg.D - svg.y > this.D) {this.D = svg.D - svg.y}
      if (svg.y + svg.H > this.H) {this.H = svg.y + svg.H}
      if (svg.x + svg.l < this.l) {this.l = svg.x + svg.l}
      if (svg.x + svg.r > this.r) {this.r = svg.x + svg.r}
      if (forcew || svg.x + svg.w + (svg.X||0) > this.w) {this.w = svg.x + svg.w + (svg.X||0)}
      this.childScale = svg.scale; this.childX = svg.x; this.childY = svg.y; this.n++;
      return svg;
    },
    Align: function (svg,align,dx,dy,shift) {
      dx = ({left: dx, center: (this.w - svg.w)/2, right: this.w - svg.w - dx})[align] || 0;
      var w = this.w; this.Add(svg,dx+(shift||0),dy); this.w = w;
    },
    Clean: function () {
      if (this.h === -SVG.BIGDIMEN) {this.h = this.d = this.l = 0}
      return this;
    }
  });
  
  BBOX.ROW = BBOX.Subclass({
    Init: function () {
      this.SUPER(arguments).Init.call(this);
      this.svg = []; this.sh = this.sd = 0;
    },
    Check: function (data) {
      var svg = data.toSVG(); this.svg.push(svg);
      if (data.SVGcanStretch("Vertical")) {svg.mml = data}
      if (svg.h > this.sh) {this.sh = svg.h}
      if (svg.d > this.sd) {this.sd = svg.d}
    },
    Stretch: function () {
      for (var i = 0, m = this.svg.length; i < m; i++)
      {
        var svg = this.svg[i], mml = svg.mml;
        if (mml) {
          if (mml.forceStretch || mml.SVGdata.h !== this.sh || mml.SVGdata.d !== this.sd) {
            svg = mml.SVGstretchV(this.sh,this.sd);
          }
          mml.SVGdata.HW = this.sh; mml.SVGdata.D = this.sd;
        }
        if (svg.ic) {this.ic = svg.ic} else {delete this.ic}
        this.Add(svg,this.w,0,true);
      }
      delete this.svg;
    }
  });
  
  BBOX.RECT = BBOX.Subclass({
    type: "rect", removeable: false,
    Init: function (h,d,w,def) {
      if (def == null) {def = {stroke:"none"}}
      def.width = Math.floor(w); def.height = Math.floor(h+d);
      this.SUPER(arguments).Init.call(this,def);
      this.w = this.r = w; this.h = this.H = h+d; this.d = this.D = this.l = 0; this.y = -d;
    }
  });
  
  BBOX.FRAME = BBOX.Subclass({
    type: "rect", removeable: false,
    Init: function (h,d,w,t,dash,color,def) {
      if (def == null) {def = {}}; def.fill = "none";
      def["stroke-width"] = SVG.Fixed(t,2);
      def.width = Math.floor(w-t); def.height = Math.floor(h+d-t);
      def.transform = "translate("+Math.floor(t/2)+","+Math.floor(-d+t/2)+")";
      if (dash === "dashed")
        {def["stroke-dasharray"] = [Math.floor(6*SVG.em),Math.floor(6*SVG.em)].join(" ")}
      this.SUPER(arguments).Init.call(this,def);
      this.w = this.r = w; this.h = this.H = h;
      this.d = this.D = d; this.l = 0;
    }
  });
  
  BBOX.HLINE = BBOX.Subclass({
    type: "line", removeable: false,
    Init: function (w,t,dash,color,def) {
      if (def == null) {def = {"stroke-linecap":"square"}}
      if (color && color !== "") {def.stroke = color}
      def["stroke-width"] = SVG.Fixed(t,2);
      def.x1 = def.y1 = def.y2 = Math.floor(t/2); def.x2 = Math.floor(w-t/2);
      if (dash === "dashed") {
        var n = Math.floor(Math.max(0,w-t)/(6*t)), m = Math.floor(Math.max(0,w-t)/(2*n+1));
        def["stroke-dasharray"] = m+" "+m;
      }
      if (dash === "dotted") {
        def["stroke-dasharray"] = [1,Math.max(150,Math.floor(2*t))].join(" ");
        def["stroke-linecap"] = "round";
      }
      this.SUPER(arguments).Init.call(this,def);
      this.w = this.r = w; this.l = 0; this.h = this.H = t; this.d = this.D = 0;
    }
  });

  BBOX.VLINE = BBOX.Subclass({
    type: "line", removeable: false,
    Init: function (h,t,dash,color,def) {
      if (def == null) {def = {"stroke-linecap":"square"}}
      if (color && color !== "") {def.stroke = color}
      def["stroke-width"] = SVG.Fixed(t,2);
      def.x1 = def.x2 = def.y1 = Math.floor(t/2); def.y2 = Math.floor(h-t/2);
      if (dash === "dashed") {
        var n = Math.floor(Math.max(0,h-t)/(6*t)), m = Math.floor(Math.max(0,h-t)/(2*n+1));
        def["stroke-dasharray"] = m+" "+m;
      }
      if (dash === "dotted") {
        def["stroke-dasharray"] = [1,Math.max(150,Math.floor(2*t))].join(" ");
        def["stroke-linecap"] = "round";
      }
      this.SUPER(arguments).Init.call(this,def);
      this.w = this.r = t; this.l = 0; this.h = this.H = h; this.d = this.D = 0;
    }
  });

  BBOX.TEXT = BBOX.Subclass({
    type: "text", removeable: false,
    Init: function (scale,text,def) {
      if (!def) {def = {}}; def.stroke = "none";
      if (def["font-style"] === "") delete def["font-style"];
      if (def["font-weight"] === "") delete def["font-weight"];
      this.SUPER(arguments).Init.call(this,def);
      SVG.addText(this.element,text);
      SVG.textSVG.appendChild(this.element);
      var bbox = this.element.getBBox();
      SVG.textSVG.removeChild(this.element);
      scale *= 1000/SVG.em;
      this.element.setAttribute("transform","scale("+SVG.Fixed(scale)+") matrix(1 0 0 -1 0 0)");
      this.w = this.r = bbox.width*scale; this.l = 0;
      this.h = this.H = -bbox.y*scale;
      this.d = this.D = (bbox.height + bbox.y)*scale;
    }
  });
  
  BBOX.G = BBOX;
  
  BBOX.NULL = BBOX.Subclass({
    Init: function () {
      this.SUPER(arguments).Init.apply(this,arguments);
      this.Clean();
    }
  });
  
  BBOX.GLYPH = BBOX.Subclass({
    type: "path", removeable: false,
    Init: function (scale,id,h,d,w,l,r,p) {
      var def, t = SVG.config.blacker, GLYPH = BBOX.GLYPH;
      var cache = SVG.config.useFontCache;
      var transform = (scale === 1 ? null : "scale("+SVG.Fixed(scale)+")");
      if (cache && !SVG.config.useGlobalCache) {id = "E"+GLYPH.n+"-"+id}
      if (!cache || !GLYPH.glyphs[id]) {
        def = {"stroke-width":t};
        if (cache) {def.id = id} else if (transform) {def.transform = transform}
        def.d = (p ? "M"+p+"Z" : "");
        this.SUPER(arguments).Init.call(this,def);
        if (cache) {GLYPH.defs.appendChild(this.element); GLYPH.glyphs[id] = true;}
      }
      if (cache) {
        def = {}; if (transform) {def.transform = transform}
        this.element = SVG.Element("use",def);
        this.element.setAttributeNS(XLINKNS,"href",SVGURL+"#"+id);
      }
      this.h = (h+t) * scale; this.d = (d+t) * scale; this.w = (w+t/2) *scale;
      this.l = (l+t/2) * scale; this.r = (r+t/2) * scale;
      this.H = Math.max(0,this.h); this.D = Math.max(0,this.d);
      this.x = this.y = 0; this.scale = scale;
    }
  },{
    glyphs: {},            // which glpyhs have been used
    defs: null,            // the SVG <defs> element where glyphs are stored
    n: 0                   // the ID for local <defs> for self-contained SVG elements
  });
  
  HUB.Register.StartupHook("mml Jax Ready",function () {

    MML = MathJax.ElementJax.mml;

    MML.mbase.Augment({
      SVG: BBOX,
      toSVG: function () {
        this.SVGgetStyles();
	var variant = this.SVGgetVariant();
        var svg = this.SVG(); this.SVGgetScale(svg);
        this.SVGhandleSpace(svg);
        for (var i = 0, m = this.data.length; i < m; i++) {
          if (this.data[i]) {
            var child = svg.Add(this.data[i].toSVG(variant,svg.scale),svg.w,0,true);
            if (child.skew) {svg.skew = child.skew}
          }
        }
        svg.Clean(); var text = this.data.join("");
        if (svg.skew && text.length !== 1) {delete svg.skew}
        if (svg.r > svg.w && text.length === 1 && !variant.noIC)
          {svg.ic = svg.r - svg.w; svg.w = svg.r}
	this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
	return svg;
      },
      
      SVGchildSVG: function (i) {
        return (this.data[i] ? this.data[i].toSVG() : BBOX());
      },
      
      SVGdataStretched: function (i,HW,D) {
        this.SVGdata = {HW:HW, D:D};
        if (!this.data[i]) {return BBOX()}
        if (D  != null) {return this.data[i].SVGstretchV(HW,D)}
        if (HW != null) {return this.data[i].SVGstretchH(HW)}
        return this.data[i].toSVG();
      },
      
      SVGsaveData: function (svg) {
        if (!this.SVGdata) {this.SVGdata = {}}
        this.SVGdata.w = svg.w, this.SVGdata.x = svg.x;
        this.SVGdata.h = svg.h, this.SVGdata.d = svg.d;
        if (svg.y) {this.SVGdata.h += svg.y; this.SVGdata.d -= svg.y}
        if (svg.X != null) {this.SVGdata.X = svg.X}
        if (svg.tw != null) {this.SVGdata.tw = svg.tw}
        if (svg.skew) {this.SVGdata.skew = svg.skew}
        if (svg.ic) {this.SVGdata.ic = svg.ic}
        if (this["class"]) {svg.removeable = false; SVG.Element(svg.element,{"class":this["class"]})}
        // FIXME:  if an element is split by linebreaking, the ID will be the same on both parts
        // FIXME:  if an element has an id, its zoomed copy will have the same ID
        if (this.id) {svg.removeable = false; SVG.Element(svg.element,{"id":this.id})}
        if (this.href) {this.SVGaddHref(svg)}
        if (SVG.config.addMMLclasses) {
          this.SVGaddClass(svg.element,"mjx-svg-"+this.type);
          svg.removeable = false;
        }
        var style = this.style;
        if (style && svg.element) {
          svg.element.style.cssText = style;
          if (svg.element.style.fontSize) {svg.element.style.fontSize = ""} // handled by scale
          svg.element.style.border = svg.element.style.padding = "";
          if (svg.removeable) {svg.removeable = (svg.element.style.cssText === "")}
        }
        this.SVGaddAttributes(svg);
      },
      SVGaddClass: function (node,name) {
        var classes = node.getAttribute("class");
        node.setAttribute("class",(classes ? classes+" " : "")+name);
      },
      SVGaddAttributes: function (svg) {
        //
        //  Copy RDFa, aria, and other tags from the MathML to the HTML-CSS
        //  output spans Don't copy those in the MML.nocopyAttributes list,
        //  the ignoreMMLattributes configuration list, or anything tha
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
                defaults[id] == null && typeof(svg.element[id]) === "undefined")) {
              svg.element.setAttribute(id,this.attr[id]);
              svg.removeable = false;
            }
          }
        }
      },
      SVGaddHref: function (svg) {
	var a = SVG.Element("a",{"class":"mjx-svg-href"});
        a.setAttributeNS(XLINKNS,"href",this.href);
        a.onclick = this.SVGlink;
        SVG.addElement(a,"rect",{width:svg.w, height:svg.h+svg.d, y:-svg.d,
                                 fill:"none", stroke:"none", "pointer-events":"all"});
        if (svg.type === "svg") {
          // for svg element, put <a> inside the main <g> element
          var g = svg.element.firstChild;
          while (g.firstChild) {a.appendChild(g.firstChild)}
          g.appendChild(a);
        } else {
          a.appendChild(svg.element); svg.element = a;
        }
        svg.removeable = false;
      },
      //
      //  WebKit currently scrolls to the BOTTOM of an svg element if it contains the
      //  target of the link, so implement link by hand, to the containing span element.
      //  
      SVGlink: function () {
        var href = this.href.animVal;
        if (href.charAt(0) === "#") {
          var target = SVG.hashCheck(document.getElementById(href.substr(1)));
          if (target && target.scrollIntoView) {
            setTimeout(function () {
              target.parentNode.scrollIntoView(true);
            },1);
          }
        }
        document.location = href;
      },
      
      SVGgetStyles: function () {
        if (this.style) {
          var span = HTML.Element("span");
          span.style.cssText = this.style;
          this.styles = this.SVGprocessStyles(span.style);
        }
      },
      SVGprocessStyles: function (style) {
        var styles = {border:SVG.getBorders(style), padding:SVG.getPadding(style)};
        if (!styles.border) {delete styles.border}
        if (!styles.padding) {delete styles.padding}
        if (style.fontSize) {styles.fontSize = style.fontSize}
        if (style.color) {styles.color = style.color}
        if (style.backgroundColor) {styles.background = style.backgroundColor}
        if (style.fontStyle)  {styles.fontStyle = style.fontStyle}
        if (style.fontWeight) {styles.fontWeight = style.fontWeight}
        if (style.fontFamily) {styles.fontFamily = style.fontFamily}
        if (styles.fontWeight && styles.fontWeight.match(/^\d+$/))
          {styles.fontWeight = (parseInt(styles.fontWeight) > 600 ? "bold" : "normal")}
        return styles;
      },
            
      SVGhandleSpace: function (svg) {
	if (this.useMMLspacing) {
	  if (this.type !== "mo") return;
	  var values = this.getValues("scriptlevel","lspace","rspace");
	  if (values.scriptlevel <= 0 || this.hasValue("lspace") || this.hasValue("rspace")) {
            var mu = this.SVGgetMu(svg);
	    values.lspace = Math.max(0,SVG.length2em(values.lspace,mu));
	    values.rspace = Math.max(0,SVG.length2em(values.rspace,mu));
	    var core = this, parent = this.Parent();
	    while (parent && parent.isEmbellished() && parent.Core() === core)
	      {core = parent; parent = parent.Parent()}
	    if (values.lspace) {svg.x += values.lspace}
	    if (values.rspace) {svg.X = values.rspace}
	  }
	} else {
	  var space = this.texSpacing();
          this.SVGgetScale();
	  if (space !== "") {svg.x += SVG.length2em(space,this.scale)*this.mscale}
        }
      },

      SVGhandleColor: function (svg) {
        var values = this.getValues("mathcolor","color");
        if (this.styles && this.styles.color && !values.color) {values.color = this.styles.color}
        if (values.color && !this.mathcolor) {values.mathcolor = values.color}
        if (values.mathcolor) {
          SVG.Element(svg.element,{fill:values.mathcolor,stroke:values.mathcolor})
          svg.removeable = false;
        }
        var borders = (this.styles||{}).border, padding = (this.styles||{}).padding,
            bleft = ((borders||{}).left||0), pleft = ((padding||{}).left||0), id;
	values.background = (this.mathbackground || this.background ||
                             (this.styles||{}).background || MML.COLOR.TRANSPARENT);
        if (bleft + pleft) {
          //
          //  Make a box and move the contents of svg to it,
          //    then add it back into svg, but offset by the left amount
          //
          var dup = BBOX(); for (id in svg) {if (svg.hasOwnProperty(id)) {dup[id] = svg[id]}}
          dup.x = 0; dup.y = 0;
          svg.element = SVG.Element("g"); svg.removeable = true;
          svg.Add(dup,bleft+pleft,0);
        }
        //
        //  Adjust size by padding and dashed borders (left is taken care of above)
        //
        if (padding) {svg.w += padding.right||0; svg.h += padding.top||0; svg.d += padding.bottom||0}
        if (borders) {svg.w += borders.right||0; svg.h += borders.top||0; svg.d += borders.bottom||0}
        //
        //  Add background color
        //
	if (values.background !== MML.COLOR.TRANSPARENT) {
          var nodeName = svg.element.nodeName.toLowerCase();
          if (nodeName !== "g" && nodeName !== "svg") {
            var g = SVG.Element("g"); g.appendChild(svg.element);
            svg.element = g; svg.removeable = true;
          }
          svg.Add(BBOX.RECT(svg.h,svg.d,svg.w,{fill:values.background,stroke:"none"}),0,0,false,true)
        }
        //
        //  Add borders
        //
        if (borders) {
          var dd = 5; // fuzz factor to avoid anti-alias problems at edges
          var sides = {
            left:  ["V",svg.h+svg.d,-dd,-svg.d],
            right: ["V",svg.h+svg.d,svg.w-borders.right+dd,-svg.d],
            top:   ["H",svg.w,0,svg.h-borders.top+dd],
            bottom:["H",svg.w,0,-svg.d-dd]
          }
          for (id in sides) {if (sides.hasOwnProperty(id)) {
            if (borders[id]) {
              var side = sides[id], box = BBOX[side[0]+"LINE"];
              svg.Add(box(side[1],borders[id],borders[id+"Style"],borders[id+"Color"]),side[2],side[3]);
            }
          }}
        }
      },
      
      SVGhandleVariant: function (variant,scale,text) {
        return SVG.HandleVariant(variant,scale,text);
      },

      SVGgetVariant: function () {
	var values = this.getValues("mathvariant","fontfamily","fontweight","fontstyle");
	var variant = values.mathvariant;
        if (this.variantForm) variant = "-"+SVG.fontInUse+"-variant";
        values.hasVariant = this.Get("mathvariant",true);  // null if not explicitly specified
        if (!values.hasVariant) {
          values.family = values.fontfamily;
          values.weight = values.fontweight;
          values.style  = values.fontstyle;
        }
        if (this.styles) {
          if (!values.style  && this.styles.fontStyle)  {values.style = this.styles.fontStyle}
          if (!values.weight && this.styles.fontWeight) {values.weight = this.styles.fontWeight}
          if (!values.family && this.styles.fontFamily) {values.family = this.styles.fontFamily}
        }
        if (values.family && !values.hasVariant) {
	  if (!values.weight && values.mathvariant.match(/bold/)) {values.weight = "bold"}
          if (!values.style && values.mathvariant.match(/italic/)) {values.style = "italic"}
          variant = {forceFamily: true, font: {"font-family":values.family}};
          if (values.style) {variant.font["font-style"] = values.style}
          if (values.weight) {variant.font["font-weight"] = values.weight}
	  return variant;
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
        if (!(variant in SVG.FONTDATA.VARIANT)) {
          // If the mathvariant value is invalid or not supported by this
          // font, fallback to normal. See issue 363.
          variant = "normal";
        }
	return SVG.FONTDATA.VARIANT[variant];
      },
      
      SVGgetScale: function (svg) {
        var scale = 1;
        if (this.mscale) {
          scale = this.scale;
        } else {
          var values = this.getValues("scriptlevel","fontsize");
          values.mathsize = (this.isToken ? this : this.Parent()).Get("mathsize");
          if ((this.styles||{}).fontSize && !values.fontsize) {values.fontsize = this.styles.fontSize}
          if (values.fontsize && !this.mathsize) {values.mathsize = values.fontsize}
          if (values.scriptlevel !== 0) {
            if (values.scriptlevel > 2) {values.scriptlevel = 2}
            scale = Math.pow(this.Get("scriptsizemultiplier"),values.scriptlevel);
            values.scriptminsize = SVG.length2em(this.Get("scriptminsize"))/1000;
            if (scale < values.scriptminsize) {scale = values.scriptminsize}
          }
          this.scale = scale; this.mscale = SVG.length2em(values.mathsize)/1000;
        }
        if (svg) {svg.scale = scale; if (this.isToken) {svg.scale *= this.mscale}}
	return scale * this.mscale;
      },
      SVGgetMu: function (svg) {
	var mu = 1, values = this.getValues("scriptlevel","scriptsizemultiplier");
        if (svg.scale && svg.scale !== 1) {mu = 1/svg.scale}
	if (values.scriptlevel !== 0) {
	  if (values.scriptlevel > 2) {values.scriptlevel = 2}
	  mu = Math.sqrt(Math.pow(values.scriptsizemultiplier,values.scriptlevel));
	}
	return mu;
      },

      SVGnotEmpty: function (data) {
	while (data) {
	  if ((data.type !== "mrow" && data.type !== "texatom") ||
	       data.data.length > 1) {return true}
	  data = data.data[0];
	}
	return false;
      },
      
      SVGcanStretch: function (direction) {
        var can = false;
	if (this.isEmbellished()) {
          var core = this.Core();
          if (core && core !== this) {
            can = core.SVGcanStretch(direction);
            if (can && core.forceStretch) {this.forceStretch = true}
          }
        }
        return can;
      },
      SVGstretchV: function (h,d) {return this.toSVG(h,d)},
      SVGstretchH: function (w) {return this.toSVG(w)},
      
      SVGlineBreaks: function () {return false}
      
    },{
      SVGemptySVG: function () {
        var svg = this.SVG();
        svg.Clean();
        this.SVGsaveData(svg);
	return svg;
      },
      SVGautoload: function () {
	var file = SVG.autoloadDir+"/"+this.type+".js";
	HUB.RestartAfter(AJAX.Require(file));
      },
      SVGautoloadFile: function (name) {
	var file = SVG.autoloadDir+"/"+name+".js";
	HUB.RestartAfter(AJAX.Require(file));
      }
    });

    MML.chars.Augment({
      toSVG: function (variant,scale,remap,chars) {
        var text = this.data.join("").replace(/[\u2061-\u2064]/g,""); // remove invisibles
        if (remap) {text = remap(text,chars)}
	return this.SVGhandleVariant(variant,scale,text);
      }
    });
    MML.entity.Augment({
      toSVG: function (variant,scale,remap,chars) {
        var text = this.toString().replace(/[\u2061-\u2064]/g,""); // remove invisibles
        if (remap) {text = remap(text,chars)}
	return this.SVGhandleVariant(variant,scale,text);
      }
    });

    MML.mo.Augment({
      toSVG: function (HW,D) {
        this.SVGgetStyles();
        var svg = this.svg = this.SVG();
        var scale = this.SVGgetScale(svg);
        this.SVGhandleSpace(svg);
        if (this.data.length == 0) {svg.Clean(); this.SVGsaveData(svg); return svg}
        //
        //  Stretch the operator, if that is requested
        //
        if (D != null) {return this.SVGstretchV(HW,D)}
        else if (HW != null) {return this.SVG.strechH(HW)}
        //
        //  Get the variant, and check for operator size
        //
        var variant = this.SVGgetVariant();
	var values = this.getValues("largeop","displaystyle");
	if (values.largeop)
	  {variant = SVG.FONTDATA.VARIANT[values.displaystyle ? "-largeOp" : "-smallOp"]}
        //
        //  Get character translation for superscript and accents
        //
        var parent = this.CoreParent(),
            isScript = (parent && parent.isa(MML.msubsup) && this !== parent.data[0]),
            mapchars = (isScript?this.remapChars:null);
        if (this.data.join("").length === 1 && parent && parent.isa(MML.munderover) &&
            this.CoreText(parent.data[parent.base]).length === 1) {
          var over = parent.data[parent.over], under = parent.data[parent.under];
          if (over && this === over.CoreMO() && parent.Get("accent")) {mapchars = SVG.FONTDATA.REMAPACCENT}
          else if (under && this === under.CoreMO() && parent.Get("accentunder")) {mapchars = SVG.FONTDATA.REMAPACCENTUNDER}
        }
        //
        //  Primes must come from another font
        //
        if (isScript && this.data.join("").match(/['`"\u00B4\u2032-\u2037\u2057]/))
          {variant = SVG.FONTDATA.VARIANT["-"+SVG.fontInUse+"-variant"]}
        //
        //  Typeset contents
        //
	for (var i = 0, m = this.data.length; i < m; i++) {
          if (this.data[i]) {
            var text = this.data[i].toSVG(variant,scale,this.remap,mapchars), x = svg.w;
            if (x === 0 && -text.l > 10*text.w) {x += -text.l} // initial combining character doesn't combine
            svg.Add(text,x,0,true);
            if (text.skew) {svg.skew = text.skew}
          }
        }
        svg.Clean();
	if (this.data.join("").length !== 1) {delete svg.skew}
        //
        //  Handle large operator centering
        //
	if (values.largeop) {
	  svg.y = SVG.TeX.axis_height - (svg.h - svg.d)/2/scale;
	  if (svg.r > svg.w) {svg.ic = svg.r - svg.w; svg.w = svg.r}
	}
        //
        //  Finish up
        //
	this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
	return svg;
      },
      SVGcanStretch: function (direction) {
	if (!this.Get("stretchy")) {return false}
	var c = this.data.join("");
	if (c.length > 1) {return false}
        var parent = this.CoreParent();
        if (parent && parent.isa(MML.munderover) && 
            this.CoreText(parent.data[parent.base]).length === 1) {
          var over = parent.data[parent.over], under = parent.data[parent.under];
          if (over && this === over.CoreMO() && parent.Get("accent")) {c = SVG.FONTDATA.REMAPACCENT[c]||c}
          else if (under && this === under.CoreMO() && parent.Get("accentunder")) {c = SVG.FONTDATA.REMAPACCENTUNDER[c]||c}
        }
	c = SVG.FONTDATA.DELIMITERS[c.charCodeAt(0)];
        var can = (c && c.dir == direction.substr(0,1));
        if (!can) {delete this.svg}
        this.forceStretch = can && (this.Get("minsize",true) || this.Get("maxsize",true));
        return can;
      },
      SVGstretchV: function (h,d) {
        var svg = this.svg || this.toSVG();
	var values = this.getValues("symmetric","maxsize","minsize");
	var axis = SVG.TeX.axis_height*svg.scale, mu = this.SVGgetMu(svg), H;
	if (values.symmetric) {H = 2*Math.max(h-axis,d+axis)} else {H = h + d}
	values.maxsize = SVG.length2em(values.maxsize,mu,svg.h+svg.d);
	values.minsize = SVG.length2em(values.minsize,mu,svg.h+svg.d);
	H = Math.max(values.minsize,Math.min(values.maxsize,H));
        if (H != values.minsize)
          {H = [Math.max(H*SVG.TeX.delimiterfactor/1000,H-SVG.TeX.delimitershortfall),H]}
	svg = SVG.createDelimiter(this.data.join("").charCodeAt(0),H,svg.scale);
	if (values.symmetric) {H = (svg.h + svg.d)/2 + axis}
	  else {H = (svg.h + svg.d) * h/(h + d)}
        svg.y = H - svg.h;
	this.SVGhandleSpace(svg);
	this.SVGhandleColor(svg);
        delete this.svg.element;
        this.SVGsaveData(svg);
        svg.stretched = true;
	return svg;
      },
      SVGstretchH: function (w) {
        var svg = this.svg || this.toSVG(), mu = this.SVGgetMu(svg);
	var values = this.getValues("maxsize","minsize","mathvariant","fontweight");
        // FIXME:  should take style="font-weight:bold" into account as well
	if ((values.fontweight === "bold" || parseInt(values.fontweight) >= 600) &&
            !this.Get("mathvariant",true)) {values.mathvariant = MML.VARIANT.BOLD}
	values.maxsize = SVG.length2em(values.maxsize,mu,svg.w);
	values.minsize = SVG.length2em(values.minsize,mu,svg.w);
	w = Math.max(values.minsize,Math.min(values.maxsize,w));
        svg = SVG.createDelimiter(this.data.join("").charCodeAt(0),w,svg.scale,values.mathvariant);
	this.SVGhandleSpace(svg);
	this.SVGhandleColor(svg);
        delete this.svg.element;
        this.SVGsaveData(svg);
        svg.stretched = true;
	return svg;
      }
    });
    
    MML.mn.Augment({
      SVGremapMinus: function (text) {return text.replace(/^-/,"\u2212")},
      toSVG: function () {
        this.SVGgetStyles();
	var variant = this.SVGgetVariant();
        var svg = this.SVG(); this.SVGgetScale(svg);
        this.SVGhandleSpace(svg);
        var remap = this.SVGremapMinus;
        for (var i = 0, m = this.data.length; i < m; i++) {
          if (this.data[i]) {
            var child = svg.Add(this.data[i].toSVG(variant,svg.scale,remap),svg.w,0,true);
            if (child.skew) {svg.skew = child.skew}
            remap = null;
          }
        }
        svg.Clean(); var text = this.data.join("");
        if (svg.skew && text.length !== 1) {delete svg.skew}
        if (svg.r > svg.w && text.length === 1 && !variant.noIC)
          {svg.ic = svg.r - svg.w; svg.w = svg.r}
	this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
	return svg;
      },
    }),

    MML.mtext.Augment({
      toSVG: function () {
        if (SVG.config.mtextFontInherit || this.Parent().type === "merror") {
          this.SVGgetStyles();
          var svg = this.SVG(), scale = this.SVGgetScale(svg);
          this.SVGhandleSpace(svg);
          var variant = this.SVGgetVariant(), def = {direction:this.Get("dir")};
          if (variant.bold)   {def["font-weight"] = "bold"}
          if (variant.italic) {def["font-style"] = "italic"}
          variant = this.Get("mathvariant");
          if (variant === "monospace") {def["class"] = "MJX-monospace"}
            else if (variant.match(/sans-serif/)) {def["class"] = "MJX-sans-serif"}
          svg.Add(BBOX.TEXT(scale*100/SVG.config.scale,this.data.join(""),def)); svg.Clean();
          this.SVGhandleColor(svg);
          this.SVGsaveData(svg);
          return svg;
        } else {
          return this.SUPER(arguments).toSVG.call(this);
        }
      }
    });
    
    MML.merror.Augment({
      toSVG: function (HW,D) {
        this.SVGgetStyles();
        var svg = this.SVG(), scale = SVG.length2em(this.styles.fontSize||1)/1000;
        this.SVGhandleSpace(svg);
        var def = (scale !== 1 ? {transform:"scale("+SVG.Fixed(scale)+")"} : {});
        var bbox = BBOX(def);
        bbox.Add(this.SVGchildSVG(0)); bbox.Clean();
        if (scale !== 1) {
          bbox.removeable = false;
          var adjust = ["w","h","d","l","r","D","H"];
          for (var i = 0, m = adjust.length; i < m; i++) {bbox[adjust[i]] *= scale}
        }
        svg.Add(bbox); svg.Clean();
        this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
        return svg;
      },
      SVGgetStyles: function () {
        var span = HTML.Element("span",{style: SVG.config.merrorStyle});
        this.styles = this.SVGprocessStyles(span.style);
        if (this.style) {
          span.style.cssText = this.style;
          HUB.Insert(this.styles,this.SVGprocessStyles(span.style));
        }
      }
    });

    MML.ms.Augment({toSVG: MML.mbase.SVGautoload});

    MML.mglyph.Augment({toSVG: MML.mbase.SVGautoload});

    MML.mspace.Augment({
      toSVG: function () {
        this.SVGgetStyles();
	var values = this.getValues("height","depth","width");
	values.mathbackground = this.mathbackground;
	if (this.background && !this.mathbackground) {values.mathbackground = this.background}
        var svg = this.SVG(); this.SVGgetScale(svg);
        var scale = this.mscale, mu = this.SVGgetMu(svg); 
	svg.h = SVG.length2em(values.height,mu) * scale;
        svg.d = SVG.length2em(values.depth,mu)  * scale;
	svg.w = svg.r = SVG.length2em(values.width,mu) * scale;
        if (svg.w < 0) {svg.x = svg.w; svg.w = svg.r = 0}
        if (svg.h < -svg.d) {svg.d = -svg.h}
        svg.l = 0; svg.Clean();
        this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
        return svg;
      }
    });

    MML.mphantom.Augment({
      toSVG: function (HW,D) {
        this.SVGgetStyles();
        var svg = this.SVG(); this.SVGgetScale(svg);
	if (this.data[0] != null) {
          this.SVGhandleSpace(svg); svg.Add(this.SVGdataStretched(0,HW,D)); svg.Clean();
          while (svg.element.firstChild) {svg.element.removeChild(svg.element.firstChild)}
	}
	this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
        if (svg.removeable && !svg.element.firstChild) {delete svg.element}
	return svg;
      }
    });

    MML.mpadded.Augment({
      toSVG: function (HW,D) {
        this.SVGgetStyles();
        var svg = this.SVG();
	if (this.data[0] != null) {
          this.SVGgetScale(svg); this.SVGhandleSpace(svg);
          var pad = this.SVGdataStretched(0,HW,D), mu = this.SVGgetMu(svg);
	  var values = this.getValues("height","depth","width","lspace","voffset"), X = 0, Y = 0;
	  if (values.lspace)  {X = this.SVGlength2em(pad,values.lspace,mu)}
	  if (values.voffset) {Y = this.SVGlength2em(pad,values.voffset,mu)}
          var h = pad.h, d = pad.d, w = pad.w, y = pad.y; // these can change durring the Add() 
          svg.Add(pad,X,Y); svg.Clean();
          svg.h = h+y; svg.d = d-y; svg.w = w; svg.removeable = false;
	  if (values.height !== "") {svg.h = this.SVGlength2em(svg,values.height,mu,"h",0)}
	  if (values.depth  !== "") {svg.d = this.SVGlength2em(svg,values.depth,mu,"d",0)}
	  if (values.width  !== "") {svg.w = this.SVGlength2em(svg,values.width,mu,"w",0)}
	  if (svg.h > svg.H) {svg.H = svg.h}; if (svg.d > svg.D) {svg.D = svg.d}
	}
	this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
	return svg;
      },
      SVGlength2em: function (svg,length,mu,d,m) {
	if (m == null) {m = -SVG.BIGDIMEN}
	var match = String(length).match(/width|height|depth/);
	var size = (match ? svg[match[0].charAt(0)] : (d ? svg[d] : 0));
	var v = SVG.length2em(length,mu,size/this.mscale)*this.mscale;
	if (d && String(length).match(/^\s*[-+]/))
	  {return Math.max(m,svg[d]+v)} else {return v}
      }
    });

    MML.mrow.Augment({
      SVG: BBOX.ROW,
      toSVG: function (h,d) {
        this.SVGgetStyles();
	var svg = this.SVG();
        this.SVGhandleSpace(svg);
        if (d != null) {svg.sh = h; svg.sd = d}
	for (var i = 0, m = this.data.length; i < m; i++)
          {if (this.data[i]) {svg.Check(this.data[i])}}
        svg.Stretch(); svg.Clean();
        if (this.data.length === 1 && this.data[0]) {
          var data = this.data[0].SVGdata;
          if (data.skew) {svg.skew = data.skew}
        }
        if (this.SVGlineBreaks(svg)) {svg = this.SVGmultiline(svg)}
	this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
	return svg;
      },
      SVGlineBreaks: function (svg) {
        if (!this.parent.linebreakContainer) {return false}
        return (SVG.config.linebreaks.automatic &&
                svg.w > SVG.linebreakWidth) || this.hasNewline();
      },
      SVGmultiline: function (span) {MML.mbase.SVGautoloadFile("multiline")},
      SVGstretchH: function (w) {
	var svg = this.SVG();
        this.SVGhandleSpace(svg);
	for (var i = 0, m = this.data.length; i < m; i++)
          {svg.Add(this.SVGdataStretched(i,w),svg.w,0)}
        svg.Clean();
        this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
        return svg;
      }
    });

    MML.mstyle.Augment({
      toSVG: function () {
        this.SVGgetStyles();
        var svg = this.SVG();
	if (this.data[0] != null) {
          this.SVGhandleSpace(svg);
          var math = svg.Add(this.data[0].toSVG()); svg.Clean();
          if (math.ic) {svg.ic = math.ic}
	  this.SVGhandleColor(svg);
	}
        this.SVGsaveData(svg);
	return svg;
      },
      SVGstretchH: function (w) {
	return (this.data[0] != null ? this.data[0].SVGstretchH(w) : BBOX.NULL());
      },
      SVGstretchV: function (h,d) {
	return (this.data[0] != null ? this.data[0].SVGstretchV(h,d) : BBOX.NULL());
      }
    });

    MML.mfrac.Augment({
      toSVG: function () {
        this.SVGgetStyles();
        var svg = this.SVG(), scale = this.SVGgetScale(svg);
        var frac = BBOX(); frac.scale = svg.scale; this.SVGhandleSpace(frac);
        var num = this.SVGchildSVG(0), den = this.SVGchildSVG(1);
	var values = this.getValues("displaystyle","linethickness","numalign","denomalign","bevelled");
	var isDisplay = values.displaystyle;
	var a = SVG.TeX.axis_height * scale;
	if (values.bevelled) {
	  var delta = (isDisplay ? 400 : 150);
	  var H = Math.max(num.h+num.d,den.h+den.d)+2*delta;
          var bevel = SVG.createDelimiter(0x2F,H);
          frac.Add(num,0,(num.d-num.h)/2+a+delta);
          frac.Add(bevel,num.w-delta/2,(bevel.d-bevel.h)/2+a);
	  frac.Add(den,num.w+bevel.w-delta,(den.d-den.h)/2+a-delta);
	} else {
	  var W = Math.max(num.w,den.w);
	  var t = SVG.thickness2em(values.linethickness,this.scale)*this.mscale, p,q, u,v;
	  var mt = SVG.TeX.min_rule_thickness/SVG.em * 1000;
	  if (isDisplay) {u = SVG.TeX.num1; v = SVG.TeX.denom1}
	    else {u = (t === 0 ? SVG.TeX.num3 : SVG.TeX.num2); v = SVG.TeX.denom2}
	  u *= scale; v *= scale;
	  if (t === 0) {// \atop
	    p = Math.max((isDisplay ? 7 : 3) * SVG.TeX.rule_thickness, 2*mt); // force to at least 2 px
	    q = (u - num.d) - (den.h - v);
	    if (q < p) {u += (p - q)/2; v += (p - q)/2}
            frac.w = W; t = 0;
	  } else {// \over
	    p = Math.max((isDisplay ? 2 : 0) * mt + t, t/2 + 1.5*mt);  // force to be at least 1.5px
	    q = (u - num.d) - (a + t/2); if (q < p) {u += p - q}
	    q = (a - t/2) - (den.h - v); if (q < p) {v += p - q}
	    frac.Add(BBOX.RECT(t/2,t/2,W+2*t),0,a);
	  }
          frac.Align(num,values.numalign,t,u);
          frac.Align(den,values.denomalign,t,-v);
	}
        frac.Clean(); svg.Add(frac,0,0); svg.Clean();
	this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
	return svg;
      },
      SVGcanStretch: function (direction) {return false},
      SVGhandleSpace: function (svg) {
      	if (!this.texWithDelims) {
          //
          //  Add nulldelimiterspace around the fraction
          //   (TeXBook pg 150 and Appendix G rule 15e)
          //
          svg.x = svg.X = SVG.TeX.nulldelimiterspace * this.mscale;
        }
        this.SUPER(arguments).SVGhandleSpace.call(this,svg);
      }
    });

    MML.msqrt.Augment({
      toSVG: function () {
        this.SVGgetStyles();
        var svg = this.SVG(), scale = this.SVGgetScale(svg); this.SVGhandleSpace(svg);
	var base = this.SVGchildSVG(0), rule, surd;
	var t = SVG.TeX.rule_thickness * scale, p,q, H, x = 0;
	if (this.Get("displaystyle")) {p = SVG.TeX.x_height * scale} else {p = t}
	q = Math.max(t + p/4,1000*SVG.TeX.min_root_space/SVG.em);
        H = base.h + base.d + q + t;
	surd = SVG.createDelimiter(0x221A,H,scale);
	if (surd.h + surd.d > H) {q = ((surd.h+surd.d) - (H-t)) / 2}
        rule = BBOX.RECT(t,0,base.w);
	H = base.h + q + t;
	x = this.SVGaddRoot(svg,surd,x,surd.h+surd.d-H,scale);
        svg.Add(surd,x,H-surd.h);
        svg.Add(rule,x+surd.w,H-rule.h);
	svg.Add(base,x+surd.w,0);
        svg.Clean();
        svg.h += t; svg.H += t;
	this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
	return svg;
      },
      SVGaddRoot: function (svg,surd,x,d,scale) {return x}
    });

    MML.mroot.Augment({
      toSVG: MML.msqrt.prototype.toSVG,
      SVGaddRoot: function (svg,surd,x,d,scale) {
        var dx = (surd.isMultiChar ? .55 : .65) * surd.w;
	if (this.data[1]) {
          var root = this.data[1].toSVG(); root.x = 0;
          var h = this.SVGrootHeight(surd.h+surd.d,scale,root)-d;
          var w = Math.min(root.w,root.r); // remove extra right-hand padding, if any
          x = Math.max(w,dx);
          svg.Add(root,x-w,h);
        } else {dx = x}
	return x - dx;
      },
      SVGrootHeight: function (d,scale,root) {
	return .45*(d-900*scale) + 600*scale + Math.max(0,root.d-75);
      }
    });

    MML.mfenced.Augment({
      SVG: BBOX.ROW,
      toSVG: function () {
        this.SVGgetStyles();
        var svg = this.SVG();
	this.SVGhandleSpace(svg);
	if (this.data.open) {svg.Check(this.data.open)}
	if (this.data[0] != null) {svg.Check(this.data[0])}
	for (var i = 1, m = this.data.length; i < m; i++) {
	  if (this.data[i]) {
	    if (this.data["sep"+i]) {svg.Check(this.data["sep"+i])}
	    svg.Check(this.data[i]);
	  }
	}
	if (this.data.close) {svg.Check(this.data.close)}
        svg.Stretch(); svg.Clean();
	this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
	return svg;
      }
    });

    MML.menclose.Augment({toSVG: MML.mbase.SVGautoload});
    MML.maction.Augment({toSVG: MML.mbase.SVGautoload});

    MML.semantics.Augment({
      toSVG: function () {
        this.SVGgetStyles();
        var svg = this.SVG();
	if (this.data[0] != null) {
          this.SVGhandleSpace(svg);
	  svg.Add(this.data[0].toSVG()); svg.Clean();
	} else {svg.Clean()}
        this.SVGsaveData(svg);
	return svg;
      },
      SVGstretchH: function (w) {
	return (this.data[0] != null ? this.data[0].SVGstretchH(w) : BBOX.NULL());
      },
      SVGstretchV: function (h,d) {
	return (this.data[0] != null ? this.data[0].SVGstretchV(h,d) : BBOX.NULL());
      }
    });

    MML.munderover.Augment({
      toSVG: function (HW,D) {
        this.SVGgetStyles();
	var values = this.getValues("displaystyle","accent","accentunder","align");
        var base = this.data[this.base];
	if (!values.displaystyle && base != null &&
	    (base.movablelimits || base.CoreMO().Get("movablelimits")))
	      {return MML.msubsup.prototype.toSVG.call(this)}
        var svg = this.SVG(), scale = this.SVGgetScale(svg); this.SVGhandleSpace(svg);
	var boxes = [], stretch = [], box, i, m, W = -SVG.BIGDIMEN, WW = W;
	for (i = 0, m = this.data.length; i < m; i++) {
	  if (this.data[i] != null) {
	    if (i == this.base) {
              boxes[i] = this.SVGdataStretched(i,HW,D);
	      stretch[i] = (D != null || HW == null) && this.data[i].SVGcanStretch("Horizontal");
              if (this.data[this.over] && values.accent) {
                boxes[i].h = Math.max(boxes[i].h,SVG.TeX.x_height); // min height of 1ex (#1706)
              }
            } else {
              boxes[i] = this.data[i].toSVG(); boxes[i].x = 0; delete boxes[i].X;
	      stretch[i] = this.data[i].SVGcanStretch("Horizontal");
	    }
	    if (boxes[i].w > WW) {WW = boxes[i].w}
	    if (!stretch[i] && WW > W) {W = WW}
	  }
	}
	if (D == null && HW != null) {W = HW} else if (W == -SVG.BIGDIMEN) {W = WW}
        for (i = WW = 0, m = this.data.length; i < m; i++) {if (this.data[i]) {
          if (stretch[i]) {
            boxes[i] = this.data[i].SVGstretchH(W);
            if (i !== this.base) {boxes[i].x = 0; delete boxes[i].X}
          }
          if (boxes[i].w > WW) {WW = boxes[i].w}
        }}
        var t = SVG.TeX.rule_thickness * this.mscale;
	var x, y, z1, z2, z3, dw, k, delta = 0;
	base = boxes[this.base] || {w:0, h:0, d:0, H:0, D:0, l:0, r:0, y:0, scale:scale};
        if (base.ic) {delta = 1.3*base.ic + .05} // adjust faked IC to be more in line with expeted results
	for (i = 0, m = this.data.length; i < m; i++) {
	  if (this.data[i] != null) {
	    box = boxes[i];
	    z3 = SVG.TeX.big_op_spacing5 * scale;
	    var accent = (i != this.base && values[this.ACCENTS[i]]);
	    if (accent && box.w <= 1) {
              box.x = -box.l;
              boxes[i] = BBOX.G().With({removeable: false});
              boxes[i].Add(box); boxes[i].Clean();
              boxes[i].w = -box.l; box = boxes[i];
            }
	    dw = {left:0, center:(WW-box.w)/2, right:WW-box.w}[values.align];
	    x = dw; y = 0;
	    if (i == this.over) {
	      if (accent) {
		k = t * scale; z3 = 0;
		if (base.skew) {
                  x += base.skew; svg.skew = base.skew;
                  if (x+box.w > WW) {svg.skew += (WW-box.w-x)/2}
                }
	      } else {
		z1 = SVG.TeX.big_op_spacing1 * scale;
		z2 = SVG.TeX.big_op_spacing3 * scale;
		k = Math.max(z1,z2-Math.max(0,box.d));
	      }
	      k = Math.max(k,1500/SVG.em);
	      x += delta/2; y = base.y + base.h + box.d + k;
	      box.h += z3; if (box.h > box.H) {box.H = box.h}
	    } else if (i == this.under) {
	      if (accent) {
		k = 3*t * scale; z3 = 0;
	      } else {
		z1 = SVG.TeX.big_op_spacing2 * scale;
		z2 = SVG.TeX.big_op_spacing4 * scale;
		k = Math.max(z1,z2-box.h);
	      }
	      k = Math.max(k,1500/SVG.em);
	      x -= delta/2; y = base.y -(base.d + box.h + k);
	      box.d += z3; if (box.d > box.D) {box.D = box.d}
	    }
	    svg.Add(box,x,y);
	  }
	}
        svg.Clean();
	this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
	return svg;
      }
    });

    MML.msubsup.Augment({
      toSVG: function (HW,D) {
        this.SVGgetStyles();
        var svg = this.SVG(), scale = this.SVGgetScale(svg); this.SVGhandleSpace(svg);
	var mu = this.SVGgetMu(svg);
        var base = svg.Add(this.SVGdataStretched(this.base,HW,D));
	var sscale = (this.data[this.sup] || this.data[this.sub] || this).SVGgetScale();
	var x_height = SVG.TeX.x_height * scale, s = SVG.TeX.scriptspace * scale;
	var sup, sub;
	if (this.SVGnotEmpty(this.data[this.sup])) {
	  sup = this.data[this.sup].toSVG();
	  sup.w += s; sup.r = Math.max(sup.w,sup.r);
	}
	if (this.SVGnotEmpty(this.data[this.sub])) {
	  sub = this.data[this.sub].toSVG();
	  sub.w += s; sub.r = Math.max(sub.w,sub.r);
	}
	var q = SVG.TeX.sup_drop * sscale, r = SVG.TeX.sub_drop * sscale;
	var u = base.h+(base.y||0) - q, v = base.d-(base.y||0) + r, delta = 0, p;
	if (base.ic) {
          base.w -= base.ic;       // remove IC (added by mo and mi)
          delta = 1.3*base.ic+.05; // adjust faked IC to be more in line with expeted results
        }
	if (this.data[this.base] &&
	   (this.data[this.base].type === "mi" || this.data[this.base].type === "mo")) {
	  if (this.data[this.base].data.join("").length === 1 && base.scale === 1 &&
	      !base.stretched && !this.data[this.base].Get("largeop")) {u = v = 0}
	}
	var min = this.getValues("subscriptshift","superscriptshift");
	min.subscriptshift   = (min.subscriptshift === ""   ? 0 : SVG.length2em(min.subscriptshift,mu));
	min.superscriptshift = (min.superscriptshift === "" ? 0 : SVG.length2em(min.superscriptshift,mu));
        var x = base.w + base.x;
	if (!sup) {
	  if (sub) {
	    v = Math.max(v,SVG.TeX.sub1*scale,sub.h-(4/5)*x_height,min.subscriptshift);
            svg.Add(sub,x,-v); this.data[this.sub].SVGdata.dy = -v;
	  }
	} else {
	  if (!sub) {
	    var values = this.getValues("displaystyle","texprimestyle");
	    p = SVG.TeX[(values.displaystyle ? "sup1" : (values.texprimestyle ? "sup3" : "sup2"))];
	    u = Math.max(u,p*scale,sup.d+(1/4)*x_height,min.superscriptshift);
            svg.Add(sup,x+delta,u);
            this.data[this.sup].SVGdata.dx = delta; 
            this.data[this.sup].SVGdata.dy = u;
	  } else {
	    v = Math.max(v,SVG.TeX.sub2*scale);
	    var t = SVG.TeX.rule_thickness * scale;
	    if ((u - sup.d) - (sub.h - v) < 3*t) {
	      v = 3*t - u + sup.d + sub.h;
	      q = (4/5)*x_height - (u - sup.d);
	      if (q > 0) {u += q; v -= q}
	    }
            svg.Add(sup,x+delta,Math.max(u,min.superscriptshift));
	    svg.Add(sub,x,-Math.max(v,min.subscriptshift));
            this.data[this.sup].SVGdata.dx = delta; 
            this.data[this.sup].SVGdata.dy = Math.max(u,min.superscriptshift);
            this.data[this.sub].SVGdata.dy = -Math.max(v,min.subscriptshift);
	  }
	}
        svg.Clean();
	this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
	return svg;
      }
    });

    MML.mmultiscripts.Augment({toSVG: MML.mbase.SVGautoload});
    MML.mtable.Augment({toSVG: MML.mbase.SVGautoload});
    MML["annotation-xml"].Augment({toSVG: MML.mbase.SVGautoload});

    MML.math.Augment({
      SVG: BBOX.Subclass({type:"svg", removeable: false}),
      toSVG: function (span,div) {
        var CONFIG = SVG.config;
        //
        //  All the data should be in an inferrerd row
        //
        if (this.data[0]) {
          this.SVGgetStyles();
	  MML.mbase.prototype.displayAlign = HUB.config.displayAlign;
	  MML.mbase.prototype.displayIndent = HUB.config.displayIndent;
          if (String(HUB.config.displayIndent).match(/^0($|[a-z%])/i))
            MML.mbase.prototype.displayIndent = "0";
          //
          //  Put content in a <g> with defaults and matrix that flips y axis.
          //  Put that in an <svg> with xlink defined.
          //
          var box = BBOX.G(); box.Add(this.data[0].toSVG(),0,0,true); box.Clean();
          this.SVGhandleColor(box);
          SVG.Element(box.element,{
            stroke:"currentColor", fill:"currentColor", "stroke-width":0,
            transform: "matrix(1 0 0 -1 0 0)"
          });
          box.removeable = false;
          var svg = this.SVG();
          svg.element.setAttribute("xmlns:xlink",XLINKNS);
          if (CONFIG.useFontCache && !CONFIG.useGlobalCache)
            {svg.element.appendChild(BBOX.GLYPH.defs)}
          svg.Add(box); svg.Clean();
          this.SVGsaveData(svg);
          //
          //  If this element is not the top-level math element
          //    remove the transform and return the svg object
          //    (issue #614).
          //
          if (!span) {
            svg.element = svg.element.firstChild;  // remove <svg> element
            svg.element.removeAttribute("transform");
            svg.removable = true;
            return svg;
          }
          //
          //  Style the <svg> to get the right size and placement
          //
          var l = Math.max(-svg.l,0), r = Math.max(svg.r-svg.w,0);
          var style = svg.element.style, px = SVG.TeX.x_height/SVG.ex;
          var H = (Math.ceil(svg.H/px)+1)*px+SVG.HFUZZ,  // round to pixels and add padding
              D = (Math.ceil(svg.D/px)+1)*px+SVG.DFUZZ;
          var w = l + svg.w + r;
          svg.element.setAttribute("width",SVG.Ex(w));
          svg.element.setAttribute("height",SVG.Ex(H+D));
          style.verticalAlign = SVG.Ex(-D);
          if (l) style.marginLeft = SVG.Ex(-l);
          if (r) style.marginRight = SVG.Ex(-r);
          svg.element.setAttribute("viewBox",SVG.Fixed(-l,1)+" "+SVG.Fixed(-H,1)+" "+
                                             SVG.Fixed(w,1)+" "+SVG.Fixed(H+D,1));
          //
          //  If there is extra height or depth, hide that
          //
	  if (svg.H > svg.h) style.marginTop = SVG.Ex(svg.h-H);
	  if (svg.D > svg.d) {
	    style.marginBottom = SVG.Ex(svg.d-D);
	    style.verticalAlign = SVG.Ex(-svg.d);
	  }
          //
          //  The approximate ex can cause full-width equations to be too wide,
          //    so if they are close to full width, make sure they aren't too big.
          //
          if (Math.abs(w-SVG.cwidth) < 10)
            style.maxWidth = SVG.Fixed(SVG.cwidth*SVG.em/1000);
          //
          //  Add it to the MathJax span
          //
          var alttext = this.Get("alttext");
          if (alttext && !svg.element.getAttribute("aria-label")) svg.element.setAttribute("aria-label",alttext);
          if (!svg.element.getAttribute("role")) svg.element.setAttribute("role","img");
          svg.element.setAttribute("focusable","false");
          span.appendChild(svg.element);
          svg.element = null;
          //
          //  Handle indentalign and indentshift for single-line displays
          //
          if (!this.isMultiline && this.Get("display") === "block" && !svg.hasIndent) {
            var values = this.getValues("indentalignfirst","indentshiftfirst","indentalign","indentshift");
            if (values.indentalignfirst !== MML.INDENTALIGN.INDENTALIGN) {values.indentalign = values.indentalignfirst}
            if (values.indentalign === MML.INDENTALIGN.AUTO) {values.indentalign = this.displayAlign}
            if (values.indentshiftfirst !== MML.INDENTSHIFT.INDENTSHIFT) {values.indentshift = values.indentshiftfirst}
            if (values.indentshift === "auto") {values.indentshift = "0"}
            var shift = SVG.length2em(values.indentshift,1,SVG.cwidth);
            if (this.displayIndent !== "0") {
              var indent = SVG.length2em(this.displayIndent,1,SVG.cwidth);
              shift += (values.indentalign === MML.INDENTALIGN.RIGHT ? -indent : indent);
            }
            div.style.textAlign = values.indentalign;
            if (shift) {
              HUB.Insert(style,({
                left: {marginLeft: SVG.Ex(shift)},
                right: {marginRight: SVG.Ex(-shift), marginLeft: SVG.Ex(Math.max(0,shift-w))},
                center: {marginLeft: SVG.Ex(shift), marginRight: SVG.Ex(-shift)}
              })[values.indentalign]);
            }
          }
        }
	return span;
      }
    });

    MML.TeXAtom.Augment({
      toSVG: function (HW,D) {
        this.SVGgetStyles();
        var svg = this.SVG();
        this.SVGhandleSpace(svg);
	if (this.data[0] != null) {
          var box = this.SVGdataStretched(0,HW,D), y = 0;
          if (this.texClass === MML.TEXCLASS.VCENTER)
            {y = SVG.TeX.axis_height - (box.h+box.d)/2 + box.d}
          svg.Add(box,0,y);
          svg.ic = box.ic; svg.skew = box.skew;
	}
	this.SVGhandleColor(svg);
        this.SVGsaveData(svg);
	return svg;
      }
    });

    //
    //  Make sure these don't generate output
    //
    MML.maligngroup.Augment({toSVG: MML.mbase.SVGemptySVG});
    MML.malignmark.Augment({toSVG: MML.mbase.SVGemptySVG});
    MML.mprescripts.Augment({toSVG: MML.mbase.SVGemptySVG});
    MML.none.Augment({toSVG: MML.mbase.SVGemptySVG});

    //
    //  Loading isn't complete until the element jax is modified,
    //  but can't call loadComplete within the callback for "mml Jax Ready"
    //  (it would call SVG's Require routine, asking for the mml jax again)
    //  so wait until after the mml jax has finished processing.
    //  
    //  We also need to wait for the onload handler to run, since the loadComplete
    //  will call Config and Startup, which need to modify the body.
    //
    HUB.Register.StartupHook("onLoad",function () {
      setTimeout(MathJax.Callback(["loadComplete",SVG,"jax.js"]),0);
    });
  });

  HUB.Browser.Select({
    Opera: function (browser) {
      SVG.Augment({
        operaZoomRefresh: true          // Opera needs a kick to redraw zoomed equations
      });
    }
  });
    
  HUB.Register.StartupHook("End Cookie", function () {
    if (HUB.config.menuSettings.zoom !== "None")
      {AJAX.Require("[MathJax]/extensions/MathZoom.js")}
  });
  
  if (!document.createElementNS) {
    //
    //  Try to handle SVG in IE8 and below, but fail
    //  (but don't crash on loading the file, so no delay for loadComplete)
    //
    if (!document.namespaces.svg) {document.namespaces.add("svg",SVGNS)}
    SVG.Augment({
      Element: function (type,def) {
        var obj = (typeof(type) === "string" ? document.createElement("svg:"+type) : type);
        obj.isMathJax = true;
        if (def) {for (var id in def) {if (def.hasOwnProperty(id)) {obj.setAttribute(id,def[id].toString())}}}
        return obj;
      }
    });
  }
  
})(MathJax.Ajax, MathJax.Hub, MathJax.HTML, MathJax.OutputJax.SVG);

/*************************************************************
 *
 *  MathJax/jax/output/SVG/autoload/mtable.js
 *  
 *  Implements the SVG output for <mtable> elements.
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

MathJax.Hub.Register.StartupHook("SVG Jax Ready",function () {
  var VERSION = "2.7.2";
  var MML = MathJax.ElementJax.mml,
      SVG = MathJax.OutputJax.SVG,
      BBOX = SVG.BBOX;
  
  MML.mtable.Augment({
    toSVG: function (span) {
      this.SVGgetStyles();
      var svg = this.SVG(), scale = this.SVGgetScale(svg);
      if (this.data.length === 0) {this.SVGsaveData(svg);return svg}
      var values = this.getValues("columnalign","rowalign","columnspacing","rowspacing",
                                  "columnwidth","equalcolumns","equalrows",
                                  "columnlines","rowlines","frame","framespacing",
                                  "align","useHeight","width","side","minlabelspacing");
      //  Handle relative width as fixed width in relation to container
      if (values.width.match(/%$/))
        {svg.width = values.width = SVG.Em((SVG.cwidth/1000)*(parseFloat(values.width)/100))}

      var mu = this.SVGgetMu(svg);
      var LABEL = -1;

      var H = [], D = [], W = [], A = [], C = [], i, j, J = -1,
          m, M, s, row, cell, mo, HD;
      var LH = SVG.FONTDATA.lineH * scale * values.useHeight,
          LD = SVG.FONTDATA.lineD * scale * values.useHeight;

      //
      //  Create cells and measure columns and rows
      //
      for (i = 0, m = this.data.length; i < m; i++) {
        row = this.data[i]; s = (row.type === "mlabeledtr" ? LABEL : 0);
        A[i] = []; H[i] = LH; D[i] = LD;
        for (j = s, M = row.data.length + s; j < M; j++) {
          if (W[j] == null) {
            if (j > J) {J = j}
            C[j] = BBOX.G();
            W[j] = -SVG.BIGDIMEN;
          }
          cell = row.data[j-s];
          A[i][j] = cell.toSVG();
//          if (row.data[j-s].isMultiline) {A[i][j].style.width = "100%"}
          if (cell.isEmbellished()) {
            mo = cell.CoreMO();
            var min = mo.Get("minsize",true);
            if (min) {
              if (mo.SVGcanStretch("Vertical")) {
                HD = mo.SVGdata.h + mo.SVGdata.d;
                if (HD) {
                  min = SVG.length2em(min,mu,HD);
                  if (min*mo.SVGdata.h/HD > H[i]) {H[i] = min*mo.SVGdata.h/HD}
                  if (min*mo.SVGdata.d/HD > D[i]) {D[i] = min*mo.SVGdata.d/HD}
                }
              } else if (mo.SVGcanStretch("Horizontal")) {
                min = SVG.length2em(min,mu,mo.SVGdata.w);
                if (min > W[j]) {W[j] = min}
              }
            }
          }
          if (A[i][j].h > H[i]) {H[i] = A[i][j].h}
          if (A[i][j].d > D[i]) {D[i] = A[i][j].d}
          if (A[i][j].w > W[j]) {W[j] = A[i][j].w}
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
      for (i = 0, m = CSPACE.length; i < m; i++) {CSPACE[i] = SVG.length2em(CSPACE[i],mu)}
      for (i = 0, m = RSPACE.length; i < m; i++) {RSPACE[i] = SVG.length2em(RSPACE[i],mu)}
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
      for (i = 0, m = A.length-1; i < m; i++)
        {HD += Math.max(0,D[i]+H[i+1]+RSPACE[i])}
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
        fx = SVG.length2em(frameSpacing[0],mu);
        fy = SVG.length2em(frameSpacing[1],mu);
        fH = HD + 2*fy; // fW waits until svg.w is determined
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
          axis:     HD/2 + SVG.TeX.axis_height*scale - H[0]
        })[values.align];
        fY = ({
          top:      -(HD + 2*fy),
          bottom:   0,
          center:   -(HD/2 + fy),
          baseline: -(HD/2 + fy),
          axis:     SVG.TeX.axis_height*scale - HD/2 - fy
        })[values.align];
      }
            
      var WW, WP = 0, Wt = 0, Wp = 0, p = 0, f = 0, P = [], F = [], Wf = 1;
      //
      if (values.equalcolumns && values.width !== "auto") {
        //
        //  Handle equalcolumns for percent-width and fixed-width tables
        //

        //  Get total width minus column spacing
        WW = SVG.length2em(values.width,mu);
        for (i = 0, m = Math.min(J,CSPACE.length); i < m; i++) {WW -= CSPACE[i]}
        //  Determine individual column widths
        WW /= J;
        for (i = 0, m = Math.min(J+1,CWIDTH.length); i < m; i++) {W[i] = WW}
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
            {P[p] = i; p++; Wp += W[i]; WP += SVG.length2em(CWIDTH[i],mu,1)}
          else {W[i] = SVG.length2em(CWIDTH[i],mu); Wt += W[i]}
        }
        // Get the full width (excluding inter-column spacing)
        if (values.width === "auto") {
          if (WP > .98) {Wf = Wp/(Wt+Wp); WW = Wt + Wp} else {WW = Wt / (1-WP)}
        } else {
          WW = SVG.length2em(values.width,mu);
          for (i = 0, m = Math.min(J,CSPACE.length); i < m; i++) {WW -= CSPACE[i]}
        }
        //  Determine the relative column widths
        for (i = 0, m = P.length; i < m; i++) {
          W[P[i]] = SVG.length2em(CWIDTH[P[i]],mu,WW*Wf); Wt += W[P[i]];
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
      
      //
      //  Lay out array columns
      //
      var y = Y, dy, align; s = (C[LABEL] ? LABEL : 0);
      for (j = s; j <= J; j++) {
        C[j].w = W[j];
        for (i = 0, m = A.length; i < m; i++) {
          if (A[i][j]) {
            s = (this.data[i].type === "mlabeledtr" ? LABEL : 0);
            cell = this.data[i].data[j-s];
	    if (cell.SVGcanStretch("Horizontal")) {
	      A[i][j] = cell.SVGstretchH(W[j]);
	    } else if (cell.SVGcanStretch("Vertical")) {
	      mo = cell.CoreMO();
	      var symmetric = mo.symmetric; mo.symmetric = false;
	      A[i][j] = cell.SVGstretchV(H[i],D[i]);
	      mo.symmetric = symmetric;
	    }
            align = cell.rowalign||this.data[i].rowalign||RALIGN[i];
            dy = ({top:    H[i] - A[i][j].h,
                   bottom: A[i][j].d - D[i],
                   center: ((H[i]-D[i]) - (A[i][j].h-A[i][j].d))/2,
                   baseline: 0, axis: 0})[align] || 0; // FIXME:  handle axis better?
            align = (cell.columnalign||RCALIGN[i][j]||CALIGN[j])
            C[j].Align(A[i][j],align,0,y+dy);
          }
          if (i < A.length-1) {y -= Math.max(0,D[i]+H[i+1]+RSPACE[i])}
        }
        y = Y;
      }

      //
      //  Place the columns and add column lines
      //
      var lw = 1.5*SVG.em;
      var x = fx - lw/2;
      for (j = 0; j <= J; j++) {
        svg.Add(C[j],x,0); x += W[j] + CSPACE[j];
        if (CLINES[j] !== "none" && j < J && j !== LABEL)
        {svg.Add(BBOX.VLINE(fH,lw,CLINES[j]),x-CSPACE[j]/2,fY)}
      }
      svg.w += fx; svg.d = -fY; svg.h = fH+fY;
      fW = svg.w;
      
      //
      //  Add frame
      //
      if (values.frame !== "none") {
        svg.Add(BBOX.HLINE(fW,lw,values.frame),0,fY+fH-lw);
        svg.Add(BBOX.HLINE(fW,lw,values.frame),0,fY);
        svg.Add(BBOX.VLINE(fH,lw,values.frame),0,fY);
        svg.Add(BBOX.VLINE(fH,lw,values.frame),fW-lw,fY);
      }

      //
      //  Add row lines
      //
      y = Y - lw/2;
      for (i = 0, m = A.length-1; i < m; i++) {
        dy = Math.max(0,D[i]+H[i+1]+RSPACE[i]);
        if (RLINES[i] !== MML.LINES.NONE && RLINES[i] !== "")
          {svg.Add(BBOX.HLINE(fW,lw,RLINES[i]),0,y-D[i]-(dy-D[i]-H[i+1])/2)}
        y -= dy;
      }
      
      //
      //  Finish the table
      //
      svg.Clean();
      this.SVGhandleSpace(svg);
      this.SVGhandleColor(svg);
      
      //
      //  Place the labels, if any
      //
      if (C[LABEL]) {
        svg.tw = Math.max(svg.w,svg.r) - Math.min(0,svg.l);
        var indent = this.getValues("indentalignfirst","indentshiftfirst","indentalign","indentshift");
        if (indent.indentalignfirst !== MML.INDENTALIGN.INDENTALIGN) {indent.indentalign = indent.indentalignfirst}
        if (indent.indentalign === MML.INDENTALIGN.AUTO) {indent.indentalign = this.displayAlign}
        if (indent.indentshiftfirst !== MML.INDENTSHIFT.INDENTSHIFT) {indent.indentshift = indent.indentshiftfirst}
        if (indent.indentshift === "auto" || indent.indentshift === "") {indent.indentshift = "0"}
        var shift = SVG.length2em(indent.indentshift,mu,SVG.cwidth);
        var labelspace = SVG.length2em(values.minlabelspacing,mu,SVG.cwidth);
        var labelW = labelspace + C[LABEL].w, labelshift = 0, tw = svg.w;
        var dIndent = SVG.length2em(this.displayIndent,mu,SVG.cwidth);
        s = (CALIGN[LABEL] === MML.INDENTALIGN.RIGHT ? -1 : 1);
        if (indent.indentalign === MML.INDENTALIGN.CENTER) {
          var dx = (SVG.cwidth-tw)/2; shift += dIndent;
          if (labelW + s*labelshift > dx + s*shift) {
            indent.indentalign = CALIGN[LABEL];
            shift = s*(labelW + s*labelshift); tw += labelW + Math.max(0,shift);
          }
        } else if (CALIGN[LABEL] === indent.indentalign) {
          if (dIndent < 0) {labelshift = s*dIndent; dIndent = 0}
          shift += s*dIndent; if (labelW > s*shift) shift = s*labelW; shift += labelshift;
          tw += s*shift;
        } else {
          shift -= s*dIndent;
          if (tw - s*shift + labelW > SVG.cwidth) {
            shift = s*(tw + labelW - SVG.cwidth);
            if (s*shift > 0) {tw = SVG.cwidth + s*shift; shift = 0}
          }
        }
        var eqn = svg; svg = this.SVG();
        svg.hasIndent = true;
        svg.w = svg.r = Math.max(tw,SVG.cwidth); 
        svg.Align(C[LABEL],CALIGN[LABEL],0,0,labelshift);
        svg.Align(eqn,indent.indentalign,0,0,shift);
        svg.tw = tw;
      }
      
      this.SVGsaveData(svg);
      return svg;
    },
    SVGhandleSpace: function (svg) {
      if (!this.hasFrame && !svg.width) {svg.x = svg.X = 167}
      this.SUPER(arguments).SVGhandleSpace.call(this,svg);
    }
  });
  
  MML.mtd.Augment({
    toSVG: function (HW,D) {
      var svg = this.svg = this.SVG();
      if (this.data[0]) {
        svg.Add(this.SVGdataStretched(0,HW,D));
        svg.Clean();
      }
      this.SVGhandleColor(svg);
      this.SVGsaveData(svg);
      return svg;
    }
  });

  MathJax.Hub.Startup.signal.Post("SVG mtable Ready");
  MathJax.Ajax.loadComplete(SVG.autoloadDir+"/mtable.js");
  
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



MathJax.Ajax.loadComplete("[MathJax]/config/AM_SVG-full.js");
