/*
 *  ../../../..//extensions/TeX/ulem.js
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

MathJax.Hub.Register.StartupHook("TeX Jax Ready", function() {
  var TEX = MathJax.InputJax.TeX;
  var TEXDEF = TEX.Definitions;

  TEXDEF.Add(
    {
      macros: {
        uwave: "UWAVE_style",
        uline: "ULINE_style",
        uuline: "UULINE_attribute",
        dotuline: "DOTULINE_attribute"
      }
    },
    null,
    true
  );

  TEX.Parse.Augment({
    //
    //  Implements \uwave{text}
    //
    UWAVE_style: function(name) {
      var text = this.ParseArg(name);
      var CLASS = "uwave";
      if (text["class"] != null) {
        CLASS = text["class"] + " " + CLASS;
      }
      this.Push(text.With({ class: CLASS }));
    },

    //
    //  Implements \uline{text}
    //
    ULINE_style: function(name) {
      var text = this.ParseArg(name);
      var CLASS = "uline";
      if (text["class"] != null) {
        CLASS = text["class"] + " " + CLASS;
      }
      this.Push(text.With({ class: CLASS }));
    },

    //
    //  Implements \uline{text}
    //
    UULINE_attribute: function(name) {
      var text = this.ParseArg(name);
      var CLASS = "uuline";
      if (text["class"] != null) {
        CLASS = text["class"] + " " + CLASS;
      }
      this.Push(text.With({ class: CLASS }));
    },

    //
    //  Implements \dotuline{text}
    //
    DOTULINE_attribute: function(name) {
      var text = this.ParseArg(name);
      var CLASS = "dotuline";
      if (text["class"] != null) {
        CLASS = text["class"] + " " + CLASS;
      }
      this.Push(text.With({ class: CLASS }));
    }
  });

  MathJax.Hub.Startup.signal.Post("TeX HTML Ready");
});

MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/ulem.js");
