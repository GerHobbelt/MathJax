/*
 *  ../../../..//fonts/HTML-CSS/TeX/png/Main/Regular/MathOperators.js
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

/*************************************************************
 *
 *  MathJax/fonts/HTML-CSS/TeX/png/Main/Regular/MathOperators.js
 *  
 *  Defines the image size data needed for the HTML-CSS OutputJax
 *  to display mathematics using fallback images when the fonts
 *  are not available to the client browser.
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright (c) 2009-2013 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.OutputJax["HTML-CSS"].defineImageData({
  "MathJax_Main": {
    0x2200: [  // FOR ALL
      [4,6,1],[5,7,1],[6,8,1],[7,10,1],[8,11,1],[10,13,1],[11,15,1],[13,18,1],
      [16,20,1],[19,24,1],[22,29,1],[26,35,2],[31,41,2],[37,48,2]
    ],
    0x2202: [  // PARTIAL DIFFERENTIAL
      [4,5,0],[5,6,0],[6,7,0],[7,9,0],[8,11,1],[10,13,1],[11,15,1],[14,18,1],
      [16,21,1],[19,25,1],[23,30,1],[27,35,1],[32,42,2],[38,50,2]
    ],
    0x2203: [  // THERE EXISTS
      [4,5,0],[4,6,0],[5,7,0],[6,8,0],[7,10,0],[9,12,0],[10,14,0],[12,16,0],
      [14,20,0],[17,23,0],[20,28,0],[24,33,0],[28,39,0],[33,46,0]
    ],
    0x2205: [  // EMPTY SET
      [4,7,1],[4,8,1],[5,9,1],[6,12,2],[7,13,2],[8,15,2],[9,18,2],[11,22,3],
      [13,25,3],[16,29,3],[18,35,4],[22,40,4],[26,48,5],[31,57,6]
    ],
    0x2207: [  // NABLA
      [6,6,1],[7,7,1],[8,8,1],[10,10,1],[11,11,1],[14,13,1],[16,15,1],[19,17,1],
      [22,20,1],[26,24,1],[31,29,2],[37,34,2],[44,40,2],[52,48,3]
    ],
    0x2208: [  // ELEMENT OF
      [5,5,1],[5,6,1],[6,7,1],[7,8,1],[9,9,1],[10,10,1],[12,12,1],[14,14,1],
      [16,17,2],[20,20,2],[23,24,2],[27,28,2],[33,33,3],[39,39,3]
    ],
    0x2209: [  // stix-negated (vert) set membership, variant
      [4,7,2],[5,8,2],[6,11,3],[7,12,3],[8,13,3],[10,16,4],[12,20,5],[14,23,6],
      [16,27,7],[20,32,8],[23,37,9],[27,44,11],[33,52,13],[39,62,15]
    ],
    0x220B: [  // CONTAINS AS MEMBER
      [4,5,1],[5,6,1],[6,7,1],[7,8,1],[8,9,1],[10,10,1],[12,12,1],[14,14,1],
      [17,17,2],[20,20,2],[23,24,2],[28,28,2],[33,33,3],[39,39,3]
    ],
    0x2212: [  // MINUS SIGN
      [5,1,-1],[6,1,-2],[7,1,-2],[9,1,-2],[10,1,-3],[12,1,-4],[14,2,-4],[17,2,-5],
      [20,2,-6],[23,2,-7],[28,2,-9],[33,3,-10],[39,3,-12],[46,3,-15]
    ],
    0x2213: [  // MINUS-OR-PLUS SIGN
      [5,6,2],[6,6,2],[8,7,2],[9,8,2],[10,10,3],[12,12,3],[15,14,4],[17,16,4],
      [20,19,5],[24,23,6],[29,27,7],[34,32,8],[40,38,10],[48,44,11]
    ],
    0x2215: [  // DIVISION SLASH
      [4,8,2],[4,10,3],[5,11,3],[6,12,3],[7,15,4],[8,18,5],[9,20,5],[11,24,6],
      [13,28,7],[15,34,9],[18,40,10],[21,47,12],[25,56,14],[30,67,17]
    ],
    0x2216: [  // SET MINUS
      [4,8,2],[4,10,3],[5,11,3],[6,12,3],[7,15,4],[8,18,5],[9,20,5],[11,24,6],
      [13,28,7],[15,34,9],[18,40,10],[21,47,12],[25,56,14],[30,67,17]
    ],
    0x2217: [  // ASTERISK OPERATOR
      [3,4,0],[4,4,0],[5,5,0],[6,6,0],[6,7,0],[8,8,0],[9,10,0],[11,11,0],
      [12,13,0],[15,15,-1],[17,18,-1],[21,21,-1],[24,25,-1],[29,29,-2]
    ],
    0x2218: [  // RING OPERATOR
      [3,3,0],[4,4,0],[5,5,0],[5,5,0],[7,6,0],[8,7,-1],[9,8,-1],[11,10,-1],
      [13,12,-1],[15,14,-1],[18,16,-2],[21,19,-2],[25,22,-3],[30,27,-3]
    ],
    0x2219: [  // BULLET OPERATOR
      [4,4,0],[4,4,0],[5,5,0],[6,6,0],[7,7,0],[8,8,0],[9,8,-1],[11,10,-1],
      [13,12,-1],[15,14,-1],[18,16,-2],[21,19,-2],[25,22,-3],[30,27,-3]
    ],
    0x221A: [  // SQUARE ROOT
      [6,8,2],[8,9,2],[9,10,2],[11,13,3],[12,15,3],[15,18,4],[17,20,4],[20,24,5],
      [24,29,6],[29,34,7],[34,40,8],[40,48,10],[48,57,12],[57,67,14]
    ],
    0x221D: [  // PROPORTIONAL TO
      [5,3,0],[6,4,0],[8,5,0],[9,5,0],[11,6,0],[13,8,0],[15,9,0],[17,12,1],
      [21,14,1],[24,16,1],[29,19,1],[34,22,1],[40,26,1],[48,30,1]
    ],
    0x221E: [  // INFINITY
      [7,3,0],[8,4,0],[10,5,0],[11,5,0],[14,6,0],[16,9,1],[19,10,1],[22,12,1],
      [27,14,1],[32,16,1],[37,19,1],[44,22,1],[53,26,1],[63,31,1]
    ],
    0x2220: [  // ANGLE
      [5,5,0],[6,6,0],[7,7,0],[8,9,0],[10,10,0],[12,12,0],[13,14,0],[16,17,0],
      [19,20,0],[22,23,0],[27,28,0],[31,33,0],[37,39,0],[44,46,0]
    ],
    0x2223: [  // DIVIDES
      [1,8,2],[2,10,3],[2,11,3],[2,12,3],[2,15,4],[3,18,5],[3,20,5],[4,24,6],
      [5,28,7],[6,34,9],[7,40,10],[8,47,12],[9,56,14],[11,67,17]
    ],
    0x2225: [  // PARALLEL TO
      [3,8,2],[4,10,3],[4,11,3],[5,14,4],[6,16,5],[7,18,5],[8,22,6],[9,25,7],
      [11,30,8],[13,36,10],[15,42,11],[18,50,13],[21,59,16],[25,70,19]
    ],
    0x2227: [  // LOGICAL AND
      [5,6,1],[6,6,1],[6,7,1],[8,9,1],[9,10,1],[11,11,1],[12,13,1],[15,15,1],
      [17,18,1],[21,21,1],[24,25,1],[29,30,2],[34,36,2],[41,42,2]
    ],
    0x2228: [  // LOGICAL OR
      [5,6,1],[6,6,1],[6,7,1],[8,9,1],[9,10,1],[11,11,1],[12,13,1],[15,15,1],
      [17,18,1],[21,21,1],[24,25,1],[29,30,2],[34,36,2],[41,42,2]
    ],
    0x2229: [  // stix-intersection, serifs
      [5,5,1],[5,6,1],[6,7,1],[7,8,1],[9,10,1],[10,11,1],[12,13,1],[14,15,1],
      [17,18,1],[21,21,1],[24,25,1],[29,30,2],[34,36,2],[41,42,2]
    ],
    0x222A: [  // stix-union, serifs
      [5,5,1],[6,6,1],[6,7,1],[8,8,1],[9,10,1],[11,11,1],[12,13,1],[14,15,1],
      [18,18,1],[21,21,1],[24,25,1],[29,29,1],[34,36,2],[41,42,2]
    ],
    0x222B: [  // INTEGRAL
      [3,7,2],[4,8,2],[5,9,2],[6,12,3],[7,13,3],[8,16,4],[10,18,4],[11,23,6],
      [13,26,6],[16,32,8],[19,38,9],[22,45,11],[26,52,12],[31,63,15]
    ],
    0x223C: [  // TILDE OPERATOR
      [5,2,-1],[6,2,-1],[7,3,-1],[9,4,-1],[10,3,-2],[12,5,-2],[14,6,-2],[17,6,-3],
      [20,8,-3],[24,9,-4],[29,10,-5],[34,12,-6],[40,14,-7],[48,17,-8]
    ],
    0x2240: [  // WREATH PRODUCT
      [2,5,1],[2,6,1],[2,7,1],[3,8,1],[4,9,1],[4,12,2],[5,14,2],[6,16,2],
      [7,19,3],[8,23,3],[9,27,4],[11,32,4],[13,38,5],[15,45,6]
    ],
    0x2243: [  // ASYMPTOTICALLY EQUAL TO
      [5,4,0],[6,4,0],[8,5,0],[9,6,0],[10,7,0],[12,8,0],[15,10,0],[17,10,-1],
      [20,12,-1],[24,15,-1],[29,18,-1],[34,21,-1],[40,25,-1],[48,29,-2]
    ],
    0x2245: [  // APPROXIMATELY EQUAL TO
      [5,4,0],[6,5,0],[8,6,0],[9,7,0],[10,8,0],[12,10,0],[15,12,0],[17,14,0],
      [20,17,0],[24,20,0],[29,24,0],[34,27,-1],[40,32,-1],[48,38,-1]
    ],
    0x2248: [  // ALMOST EQUAL TO
      [5,4,0],[6,4,0],[7,5,0],[9,6,0],[10,6,-1],[12,9,0],[14,9,-1],[17,11,-1],
      [20,13,-1],[24,15,-1],[29,17,-2],[34,21,-2],[40,24,-3],[48,29,-3]
    ],
    0x224D: [  // EQUIVALENT TO
      [5,4,0],[6,5,0],[8,5,0],[9,6,0],[10,7,0],[12,9,0],[15,10,0],[17,12,0],
      [20,14,0],[24,16,0],[29,19,0],[34,23,0],[40,27,0],[48,31,-1]
    ],
    0x2250: [  // APPROACHES THE LIMIT
      [5,4,-1],[6,5,-1],[8,6,-1],[9,7,-1],[10,8,-2],[12,10,-2],[15,12,-2],[17,13,-3],
      [20,16,-3],[24,19,-4],[29,22,-5],[34,26,-6],[40,31,-7],[48,37,-8]
    ],
    0x2260: [  // stix-not (vert) equals
      [5,7,2],[6,8,2],[8,10,3],[9,12,3],[10,13,3],[12,16,4],[15,19,5],[17,23,6],
      [20,26,6],[24,32,8],[29,38,9],[34,45,11],[40,53,13],[48,62,15]
    ],
    0x2261: [  // IDENTICAL TO
      [5,4,0],[6,4,0],[8,5,0],[9,6,0],[10,7,0],[12,8,0],[15,9,0],[17,10,-1],
      [20,12,-1],[24,15,-1],[29,18,-1],[34,21,-1],[40,25,-1],[48,29,-2]
    ],
    0x2264: [  // LESS-THAN OR EQUAL TO
      [5,6,1],[6,7,1],[8,9,2],[9,10,2],[10,11,2],[12,14,3],[15,16,3],[17,18,3],
      [20,22,4],[24,26,5],[28,31,6],[34,37,7],[40,44,8],[48,52,10]
    ],
    0x2265: [  // GREATER-THAN OR EQUAL TO
      [5,6,1],[6,7,1],[7,9,2],[9,10,2],[10,11,2],[12,14,3],[14,16,3],[17,18,3],
      [20,22,4],[23,26,5],[28,31,6],[33,37,7],[39,44,8],[46,52,10]
    ],
    0x226A: [  // MUCH LESS-THAN
      [7,5,1],[8,6,1],[10,7,1],[12,8,1],[14,9,1],[16,12,2],[19,14,2],[22,16,2],
      [27,18,2],[31,22,3],[37,26,3],[44,31,4],[53,36,4],[62,43,5]
    ],
    0x226B: [  // MUCH GREATER-THAN
      [7,5,1],[8,6,1],[10,7,1],[12,8,1],[14,9,1],[16,12,2],[19,14,2],[23,16,2],
      [27,18,2],[32,22,3],[38,26,3],[45,31,4],[53,36,4],[63,43,5]
    ],
    0x227A: [  // PRECEDES
      [5,5,1],[6,6,1],[7,7,1],[9,8,1],[10,9,1],[12,10,1],[14,12,1],[17,14,1],
      [20,17,2],[23,20,2],[28,24,2],[33,28,2],[39,33,3],[46,39,3]
    ],
    0x227B: [  // SUCCEEDS
      [5,5,1],[6,6,1],[7,7,1],[9,8,1],[10,9,1],[12,10,1],[14,12,1],[17,14,1],
      [20,17,2],[23,20,2],[28,24,2],[33,27,2],[39,33,3],[46,39,3]
    ],
    0x2282: [  // SUBSET OF
      [5,5,1],[6,6,1],[7,7,1],[9,8,1],[10,9,1],[12,10,1],[14,12,1],[17,14,1],
      [19,17,2],[23,20,2],[27,23,2],[33,27,2],[39,33,3],[46,39,3]
    ],
    0x2283: [  // SUPERSET OF
      [5,5,1],[6,6,1],[7,7,1],[8,8,1],[10,9,1],[12,10,1],[14,12,1],[17,14,1],
      [20,17,2],[23,20,2],[28,24,2],[33,28,2],[39,33,3],[46,39,3]
    ],
    0x2286: [  // SUBSET OF OR EQUAL TO
      [5,6,1],[6,7,1],[7,9,2],[9,10,2],[10,11,2],[12,14,3],[14,16,3],[17,19,4],
      [19,22,4],[23,26,5],[27,31,6],[33,37,7],[39,44,8],[46,52,10]
    ],
    0x2287: [  // SUPERSET OF OR EQUAL TO
      [5,6,1],[6,7,1],[7,9,2],[8,10,2],[10,11,2],[12,14,3],[14,16,3],[17,18,3],
      [20,22,4],[23,26,5],[28,31,6],[33,37,7],[39,44,8],[46,51,9]
    ],
    0x228E: [  // MULTISET UNION
      [5,6,1],[6,6,1],[6,7,1],[8,9,1],[9,10,1],[11,11,1],[12,13,1],[14,16,1],
      [18,18,1],[21,21,1],[24,25,1],[29,29,1],[34,36,2],[41,42,2]
    ],
    0x2291: [  // SQUARE IMAGE OF OR EQUAL TO
      [5,6,1],[6,7,1],[7,9,2],[9,10,2],[10,11,2],[12,14,3],[14,16,3],[17,18,3],
      [20,22,4],[24,26,5],[28,31,6],[34,37,7],[40,44,8],[47,52,10]
    ],
    0x2292: [  // SQUARE ORIGINAL OF OR EQUAL TO
      [5,6,1],[6,7,1],[7,9,2],[9,10,2],[10,11,2],[12,14,3],[14,16,3],[17,18,3],
      [20,22,4],[23,26,5],[28,31,6],[33,37,7],[39,44,8],[46,52,10]
    ],
    0x2293: [  // stix-square intersection, serifs
      [5,5,1],[5,5,0],[6,6,0],[7,8,1],[9,10,1],[10,10,0],[12,12,0],[14,14,0],
      [17,18,1],[20,20,0],[24,24,0],[29,28,0],[34,34,0],[40,40,0]
    ],
    0x2294: [  // stix-square union, serifs
      [5,5,0],[5,5,0],[6,6,0],[7,8,0],[9,9,0],[10,10,0],[12,12,0],[14,14,0],
      [17,17,0],[20,20,0],[24,24,0],[29,28,0],[34,34,0],[40,40,0]
    ],
    0x2295: [  // stix-circled plus (with rim)
      [5,5,1],[6,6,1],[8,7,1],[9,8,1],[11,9,1],[13,12,2],[15,14,2],[17,16,2],
      [20,20,3],[24,23,3],[29,27,4],[34,32,4],[40,38,5],[48,45,6]
    ],
    0x2296: [  // CIRCLED MINUS
      [5,5,1],[6,6,1],[7,7,1],[9,8,1],[10,9,1],[12,12,2],[14,14,2],[17,16,2],
      [21,20,3],[24,23,3],[29,27,4],[34,32,4],[40,38,5],[48,45,6]
    ],
    0x2297: [  // stix-circled times (with rim)
      [5,5,1],[6,6,1],[7,7,1],[9,8,1],[10,9,1],[12,12,2],[15,14,2],[17,16,2],
      [21,20,3],[24,23,3],[29,27,4],[34,32,4],[40,38,5],[48,45,6]
    ],
    0x2298: [  // CIRCLED DIVISION SLASH
      [5,5,1],[6,6,1],[7,7,1],[9,8,1],[10,9,1],[12,12,2],[15,14,2],[17,16,2],
      [21,20,3],[24,23,3],[29,27,4],[34,32,4],[40,38,5],[48,45,6]
    ],
    0x2299: [  // CIRCLED DOT OPERATOR
      [5,5,1],[6,6,1],[7,7,1],[9,8,1],[10,9,1],[12,12,2],[15,14,2],[17,16,2],
      [21,20,3],[24,23,3],[29,27,4],[34,32,4],[40,38,5],[48,45,6]
    ],
    0x22A2: [  // RIGHT TACK
      [4,5,0],[5,6,0],[6,7,0],[7,9,0],[8,10,0],[10,12,0],[11,14,0],[13,17,0],
      [16,20,0],[19,23,0],[22,28,0],[26,33,0],[31,39,0],[37,46,0]
    ],
    0x22A3: [  // LEFT TACK
      [4,5,0],[5,6,0],[6,7,0],[7,9,0],[8,10,0],[9,12,0],[11,14,0],[13,17,0],
      [16,20,0],[19,23,0],[22,28,0],[26,33,0],[31,39,0],[37,46,0]
    ],
    0x22A4: [  // DOWN TACK
      [5,5,0],[6,6,0],[8,7,0],[9,8,0],[10,11,1],[12,12,1],[15,14,1],[17,16,0],
      [20,20,1],[24,22,0],[29,27,0],[34,32,0],[40,37,0],[48,44,0]
    ],
    0x22A5: [  // UP TACK
      [5,5,0],[6,6,0],[8,7,0],[9,8,0],[10,10,0],[12,12,0],[15,14,0],[17,16,0],
      [20,19,0],[24,22,0],[29,27,0],[34,32,0],[40,37,0],[48,44,0]
    ],
    0x22A8: [  // TRUE
      [6,8,2],[7,10,3],[8,11,3],[10,12,3],[12,15,4],[14,18,5],[16,20,5],[19,24,6],
      [23,28,7],[27,34,9],[32,40,10],[38,47,12],[45,56,14],[54,67,17]
    ],
    0x22C4: [  // DIAMOND OPERATOR
      [4,4,0],[5,5,0],[5,5,0],[6,6,0],[7,7,0],[9,9,0],[10,10,0],[12,12,0],
      [14,14,0],[17,17,0],[20,20,0],[23,23,0],[27,27,0],[33,33,0]
    ],
    0x22C5: [  // DOT OPERATOR
      [2,1,-1],[2,2,-1],[2,3,-1],[3,2,-2],[3,3,-2],[4,3,-3],[4,4,-3],[5,4,-4],
      [6,4,-5],[7,5,-6],[8,6,-7],[10,7,-8],[11,8,-10],[14,9,-12]
    ],
    0x22C6: [  // STAR OPERATOR
      [4,4,0],[5,5,0],[5,5,0],[6,6,0],[7,7,0],[9,9,0],[10,10,0],[12,12,0],
      [14,14,0],[17,16,0],[20,20,0],[24,23,0],[28,27,0],[33,31,-1]
    ],
    0x22C8: [  // BOWTIE
      [7,5,1],[8,6,1],[9,6,1],[11,7,1],[13,8,1],[15,10,1],[17,11,1],[21,13,1],
      [25,15,1],[29,18,1],[35,21,1],[41,25,1],[49,29,1],[58,35,1]
    ],
    0x22EE: [  // VERTICAL ELLIPSIS
      [2,6,0],[2,9,1],[2,10,1],[3,12,1],[3,14,1],[4,16,1],[4,19,1],[5,22,1],
      [6,26,1],[7,31,1],[8,38,2],[10,44,2],[11,52,2],[14,62,2]
    ],
    0x22EF: [  // MIDLINE HORIZONTAL ELLIPSIS
      [8,1,-1],[9,2,-1],[11,3,-1],[13,2,-2],[16,3,-2],[19,3,-3],[22,4,-3],[26,4,-4],
      [31,4,-5],[36,5,-6],[43,6,-7],[51,7,-8],[61,8,-10],[73,9,-12]
    ],
    0x22F1: [  // DOWN RIGHT DIAGONAL ELLIPSIS
      [8,6,0],[10,7,0],[12,9,0],[14,9,-1],[16,11,-1],[20,13,-1],[23,15,-1],[27,18,-2],
      [32,21,-2],[38,24,-3],[46,30,-3],[54,35,-4],[64,41,-5],[76,48,-6]
    ]
  }
});

MathJax.Ajax.loadComplete(MathJax.OutputJax["HTML-CSS"].imgDir+"/Main/Regular"+
                          MathJax.OutputJax["HTML-CSS"].imgPacked+"/MathOperators.js");

