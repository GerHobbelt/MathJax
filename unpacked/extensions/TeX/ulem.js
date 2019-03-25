
MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {

  var TEX = MathJax.InputJax.TeX;
  var TEXDEF = TEX.Definitions;

  TEXDEF.Add({
    macros: {
      uwave:    'UWAVE_style',
      uline:   'ULINE_style',
      uuline:   'UULINE_attribute',
      dotuline: 'DOTULINE_attribute'
    }
  },null,true);

  TEX.Parse.Augment({

    //
    //  Implements \uwave{text}
    //
    UWAVE_style: function (name) {
      var text = this.ParseArg(name);
      var CLASS = "uwave";
      if (text["class"] != null) {
        CLASS = text["class"] + " " + CLASS;
      }
      this.Push(text.With({"class":CLASS}));
    },

    //
    //  Implements \uline{text}
    //
    ULINE_style: function (name) {
      var text = this.ParseArg(name);
      var CLASS = "uline";
      if (text["class"] != null) {
        CLASS = text["class"] + " " + CLASS;
      }
      this.Push(text.With({"class":CLASS}));
    },

    //
    //  Implements \uline{text}
    //
    UULINE_attribute: function (name) {
      var text = this.ParseArg(name);
      var CLASS = "uuline";
      if (text["class"] != null) {
        CLASS = text["class"] + " " + CLASS;
      }
      this.Push(text.With({"class":CLASS}));
    },

    //
    //  Implements \dotuline{text}
    //
    DOTULINE_attribute: function (name) {
      var text = this.ParseArg(name);
      var CLASS = "dotuline";
      if (text["class"] != null) {
        CLASS = text["class"] + " " + CLASS;
      }
      this.Push(text.With({"class":CLASS}));
    },

  });
  
  MathJax.Hub.Startup.signal.Post("TeX HTML Ready");
  
});

MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/ulem.js");
