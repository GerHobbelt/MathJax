/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

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
