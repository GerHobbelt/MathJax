/*
 *  ../../../..//extensions/MathML/content-mathml.js
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

/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */
MathJax.Extension["MathML/content-mathml"]=(function(d){var c=d.Browser.isMSIE;if(c){try{document.namespaces.add("m","http://www.w3.org/1998/Math/MathML")}catch(e){}}var b=d.CombineConfig("MathML.content-mathml",{collapsePlusMinus:true,cistyles:{vector:"bold-italic",matrix:"bold-upright"},symbols:{gamma:"\u03B3"}});var a={version:"2.7.1",settings:b,transformElements:function(h){for(var g=0,f=h.length;g<f;g++){var j=a.transformElement(h[g]);h[g].parentNode.replaceChild(j,h[g])}},transformElement:function(h){if(h.nodeName.indexOf(":")>=0){h=a.cloneNode(h,true)}var i=a.cloneNode(h);for(var g=0,f=h.childNodes.length;g<f;g++){a.applyTransform(i,h.childNodes[g],0)}return i},getTextContent:function(f){return f.text!==undefined?f.text:f.innerText!==undefined?f.innerText:f.textContent},setTextContent:function(h,j){for(var g=0,f=h.childNodes.length;g<f;g++){if(h.childNodes[g].nodeType===3){h.removeChild(h.childNodes[g]);g--;f--}}h.appendChild(document.createTextNode(j))},cloneNode:function(j,g){var m,h,f;if(j.nodeType===1){m=a.createElement(j.nodeName);for(h=0,f=j.attributes.length;h<f;h++){m.setAttribute(j.attributes[h].nodeName,j.attributes[h].nodeValue)}if(g){for(h=0,f=j.childNodes.length;h<f;h++){var k=a.cloneNode(j.childNodes[h],true);m.appendChild(k)}}}else{if(j.nodeType===3){m=document.createTextNode(j.nodeValue)}}return m},createElement:function(f){f=f.replace(/^.*:/,"");return(document.createElementNS?document.createElementNS("http://www.w3.org/1998/Math/MathML",f):document.createElement("m:"+f))},getChildren:function(i){var h=[];for(var g=0,f=i.childNodes.length;g<f;g++){if(i.childNodes[g].nodeType===1){h.push(i.childNodes[g])}}return h},classifyChildren:function(m){var k=[],g=[],o=[];for(var i=0,f=m.childNodes.length;i<f;i++){if(m.childNodes[i].nodeType===1){var n=m.childNodes[i],h=n.nodeName;if(h==="bvar"){g.push(n)}else{if(h==="condition"||h==="degree"||h==="momentabout"||h==="logbase"||h==="lowlimit"||h==="uplimit"||(h==="interval"&&k.length<2)||h==="domainofapplication"){o.push(n)}else{k.push(n)}}}}return{args:k,bvars:g,qualifiers:o}},appendToken:function(f,h,j){var i=a.createElement(h);j=j.replace(/^\s+/,"").replace(/\s+$/,"");if(h==="mn"&&j.substr(0,1)==="-"){i.appendChild(document.createTextNode(j.substr(1)));var g=a.createElement("mrow");a.appendToken(g,"mo","\u2212");g.appendChild(i);i=g}else{i.appendChild(document.createTextNode(j))}f.appendChild(i);return i},applyTransform:function(g,m,f){if(!m){var n=a.createElement("merror");a.appendToken(n,"mtext","Missing child node");g.appendChild(n);return}if(m.nodeType===1){if(a.tokens[m.nodeName]){a.tokens[m.nodeName](g,m,f)}else{if(m.childNodes.length===0){var k=a.MML[m.nodeName];if(k&&k.isa&&k.isa(a.mbase)){g.appendChild(a.cloneNode(m))}else{a.appendToken(g,"mi",m.nodeName)}}else{var o=a.cloneNode(m);g.appendChild(o);for(var i=0,h=m.childNodes.length;i<h;i++){a.applyTransform(o,m.childNodes[i],f)}}}}else{if(m.nodeType===3){g.appendChild(a.cloneNode(m))}}},createmfenced:function(i,h,m){var k=a.createElement("mfenced");k.setAttribute("open",h);k.setAttribute("close",m);for(var g=0,f=i.length;g<f;g++){a.applyTransform(k,i[g],0)}return k},transforms:{identifier:function(f){return function(h,i,g){a.appendToken(h,"mi",f)}},set:function(g,h){var f=a.transforms.bind("",",","|");return function(j,n){var o=a.classifyChildren(n);var m=o.args,l=o.bvars,p=o.qualifiers;if(l.length){var i=o.args[0];m=m.slice(1);var k=a.createElement("mfenced");k.setAttribute("open",g);k.setAttribute("close",h);f(k,n,i,m,l,p,0);j.appendChild(k)}else{j.appendChild(a.createmfenced(m,g,h))}}},token:function(f){return function(g,m){if(m.childNodes.length===1&&m.childNodes[0].nodeType===3){a.appendToken(g,f,a.getTextContent(m))}else{var i=a.createElement("mrow");for(var k=0,h=m.childNodes.length;k<h;k++){if(m.childNodes[k].nodeType===3){a.appendToken(g,f,a.getTextContent(m.childNodes[k]))}else{a.applyTransform(i,m.childNodes[k],0)}}if(i.childNodes.length){g.appendChild(i)}}}},binary:function(f,g){return function(n,j,l,p,i,m,h){var o=a.createElement("mrow");var k=g<h||(g==h&&f==="-");if(k){a.appendToken(/*************************************************************
 *
 *  MathJax/extensions/MathML/content-mathml.js
 *
 *  This file provides methods to convert Content-MathML to
 *  Presentation MathML for processing by MathJax.  The transform is
 *  performed in a DOM filter for the MathML input jax, so that the
 *  Show Math As menu will still show the Original MathML as Content MathML,
 *  but the Presentation MathML can be obtained from the main MathML menu.
 *  
 *  To load it, include
 *  
 *      MathML: {
 *        extensions: ["content-mathml.js"]
 *      }
 *  
 *  in your configuration.
 *
 *  A portion of this file is taken from ctop.js which is
 *  Copyright (c) David Carlisle 2001, 2002, 2008, 2009, 2013,
 *  and is used by permission of David Carlisle, who has agreed to allow us
 *  to release it under the Apache2 license (see below).  That portion is
 *  indicated via comments.
 *  
 *  The remainder falls under the copyright that follows.
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
o,"mo","(")}if(p.length>1){a.applyTransform(o,p[0],g)}a.appendToken(o,"mo",f);if(p.length>0){var q=p[(p.length===1)?0:1];a.applyTransform(o,q,g)}if(k){a.appendToken(o,"mo",")")}n.appendChild(o)}},infix:function(f,g){return function(r,k,o,t,i,p,h){var s=a.createElement("mrow");var n=h>g;if(n){a.appendToken(s,"mo","(")}for(var q=0,m=t.length;q<m;q++){if(q>0){a.appendToken(s,"mo",f)}a.applyTransform(s,t[q],g)}if(n){a.appendToken(s,"mo",")")}r.appendChild(s)}},iteration:function(f,g){return function(q,y,C,l,h,u,m){var t=a.createElement("mrow");var x=a.createElement("mo");a.setTextContent(x,f);var o=a.createElement("munderover");o.appendChild(x);var k=a.createElement("mrow");var A,w,v,B,n,s,z,r;for(A=0,v=u.length;A<v;A++){if(u[A].nodeName==="lowlimit"||u[A].nodeName==="condition"||u[A].nodeName==="domainofapplication"){if(u[A].nodeName==="lowlimit"){for(w=0,B=h.length;w<B;w++){s=h[w];n=a.getChildren(s);if(n.length){a.applyTransform(k,n[0],0)}}if(h.length){a.appendToken(k,"mo",g)}}n=a.getChildren(u[A]);for(w=0;w<n.length;w++){a.applyTransform(k,n[w],0)}}else{n=a.getChildren(u[A]);if(u[A].nodeName==="interval"&&n.length===2){for(w=0,B=h.length;w<B;w++){s=h[w];n=a.getChildren(s);if(n.length){a.applyTransform(k,n[0],0)}}if(h.length){a.appendToken(k,"mo","=")}a.applyTransform(k,a.getChildren(u[A])[0],0)}}}o.appendChild(k);var p=a.createElement("mrow");for(A=0,v=u.length;A<v;A++){if(u[A].nodeName==="uplimit"||u[A].nodeName==="interval"){n=a.getChildren(u[A]);for(w=0,z=n.length;w<z;w++){a.applyTransform(p,n[w],0)}}}o.appendChild(p);t.appendChild(o);for(A=0,r=l.length;A<r;A++){a.applyTransform(t,l[A],m)}q.appendChild(t)}},bind:function(g,f,h){return function(w,o,r,z,m,s,k){var y=a.createElement("mrow");var n,v,u,q,p,B;if(g){a.appendToken(y,"mo",g)}for(u=0,q=m.length;u<q;u++){var t=m[u];if(u>0){a.appendToken(y,"mo",",")}n=a.getChildren(t);if(n.length){a.applyTransform(y,n[0],0)}}var x=a.createElement("mrow");var A=false;for(v=0,p=s.length;v<p;v++){if(s[v].nodeName==="condition"){A=true;n=a.getChildren(s[v]);for(u=0,B=n.length;u<B;u++){a.applyTransform(x,n[u],0)}}}if(A){a.appendToken(y,"mo",h)}y.appendChild(x);for(v=0,p=s.length;v<p;v++){if(s[v].nodeName!="condition"){a.appendToken(y,"mo","\u2208");n=a.getChildren(s[v]);for(u=0,B=n.length;u<B;u++){a.applyTransform(y,n[u],0)}}}if(z.length&&(m.length||n.length)){a.appendToken(y,"mo",f)}for(v=0,q=z.length;v<q;v++){a.applyTransform(y,z[v],0)}w.appendChild(y)}},fn:function(f){return function(i,m,h,l,k,n,g){var j=a.createElement("mrow");if(h.childNodes.length){a.applyTransform(j,h,1)}else{a.appendToken(j,"mi",f)}a.appendToken(j,"mo","\u2061");j.appendChild(a.createmfenced(l,"(",")"));i.appendChild(j)}},minmax:function(f){return function(q,j,m,s,h,o,g){var r=a.createElement("mrow");a.appendToken(r,"mi",f);var n=a.createElement("mrow");a.appendToken(n,"mo","{");for(var p=0,k=s.length;p<k;p++){if(p>0){a.appendToken(n,"mo",",")}a.applyTransform(n,s[p],0)}if(o.length){a.appendToken(n,"mo","|");for(p=0,k=o.length;p<k;p++){a.applyTransform(n,o[p],0)}}a.appendToken(n,"mo","}");r.appendChild(n);q.appendChild(r)}}}};a.tokens={ci:function(g,i,f){if(i.childNodes.length===1&&i.childNodes[0].nodeType===3){var h=a.appendToken(g,"mi",a.getTextContent(i));var j=i.getAttribute("type");if(j in a.settings.cistyles){h.setAttribute("mathvariant",a.settings.cistyles[j])}}else{a.transforms.token("mi")(g,i,f)}},cs:a.transforms.token("ms"),csymbol:function(g,h,f){var i=h.getAttribute("cd");if(i&&a.contentDictionaries[i]){a.contentDictionaries[i](g,h,f)}else{if(a.settings.symbols[name]){a.appendToken(g,"mi",a.settings.symbols[name])}else{a.tokens.ci(g,h)}}},fn:function(g,h,f){a.applyTransform(g,a.getChildren(h)[0],f)},naturalnumbers:a.transforms.identifier("\u2115"),integers:a.transforms.identifier("\u2124"),reals:a.transforms.identifier("\u211D"),rationals:a.transforms.identifier("\u211A"),complexes:a.transforms.identifier("\u2102"),primes:a.transforms.identifier("\u2119"),exponentiale:a.transforms.identifier("e"),imaginaryi:a.transforms.identifier("i"),notanumber:a.transforms.identifier("NaN"),eulergamma:a.transforms.identifier("\u03B3"),gamma:a.transforms.identifier("\u0263"),pi:a.transforms.identifier("\u03C0"),infinity:a.transforms.identifier("\u221E"),emptyset:a.transforms.identifier("\u2205"),"true":a.transforms.identifier("true"),"false":a.transforms.identifier("false"),set:a.transforms.set("{","}"),list:a.transforms.set("(",")"),interval:function(g,i,f){var k=i.getAttribute("closure");var h,j;switch(k){case"open":h="(";j=")";break;case"open-closed":h="(";j="]";break;case"closed-open":h="[";j=")";break;case"closed":default:h="[";j="]"}g.appendChild(a.createmfenced(a.getChildren(i),h,j))},apply:function(m,j,f){var i=a.classifyChildren(j);var k=i.args[0];var n=i.args.slice(1),h=i.bvars,l=i.qualifiers;if(k){var g=k.nodeName;g=(g==="csymbol")?a.getTextContent(k).toLowerCase():g;if(a.applyTokens[g]){a.applyTokens[g](m,j,k,n,h,l,f)}else{a.transforms.fn(g)(m,j,k,n,h,l,f)}}else{m.appendChild(a.createElement("mrow"))}},cn:function(m,h,f){var p=h.getAttribute("type");var g=h.getAttribute("base");if(p||g){if(g){p="based-integer"}switch(p){case"integer":case"real":case"double":case"constant":a.transforms.token("mn")(m,h);break;case"hexdouble":a.appendToken(m,"mn","0x"+a.getTextContent(h));break;default:var q=a.createElement("apply");var n=a.createElement("mrow");var o=a.createElement(p);q.appendChild(o);if(g){a.appendToken(q,"mn",g)}for(var k=0,i=h.childNodes.length;k<i;k++){if(h.childNodes[k].nodeType===3){a.appendToken(n,"cn",a.getTextContent(h.childNodes[k]))}else{if(h.childNodes[k].nodeName==="sep"){q.appendChild(n);n=a.createElement("mrow")}else{n.appendChild(a.cloneNode(h.childNodes[k],true))}}}q.appendChild(n);a.applyTransform(m,q,0)}}else{a.transforms.token("mn")(m,h)}},vector:function(o,h,f){var p=a.createElement("mrow");a.appendToken(p,"mo","(");var m=a.createElement("mtable");var g=a.getChildren(h);for(var n=0,j=g.length;n<j;n++){var k=a.createElement("mtr");var q=a.createElement("mtd");a.applyTransform(q,g[n],0);k.appendChild(q);m.appendChild(k)}p.appendChild(m);a.appendToken(p,"mo",")");o.appendChild(p)},piecewise:function(g,k,f){var j=a.createElement("mrow");a.appendToken(j,"mo","{");var o=a.createElement("mtable");j.appendChild(o);var n=a.getChildren(k);for(var m=0,h=n.length;m<h;m++){a.applyTransform(o,n[m],0)}g.appendChild(j)},piece:function(h,m,g){var f=a.createElement("mtr");var o=a.getChildren(m);for(var n=0,j=o.length;n<j;n++){var k=a.createElement("mtd");f.appendChild(k);a.applyTransform(k,o[n],0);if(n===0){k=a.createElement("mtd");a.appendToken(k,"mtext","\u00A0if\u00A0");f.appendChild(k)}}h.appendChild(f)},otherwise:function(h,j,g){var f=a.createElement("mtr");var k=a.getChildren(j);if(k.length){var i=a.createElement("mtd");f.appendChild(i);a.applyTransform(i,k[0],0);i=a.createElement("mtd");i.setAttribute("columnspan","2");a.appendToken(i,"mtext","\u00A0otherwise");f.appendChild(i)}h.appendChild(f)},matrix:function(q,j,f){var h=a.classifyChildren(j);var t=h.args,g=h.bvars,n=h.qualifiers;if(g.length||n.length){var r=a.createElement("mrow");a.appendToken(r,"mo","[");var s=a.createElement("msub");a.appendToken(s,"mi","m");var m=a.createElement("mrow");for(var p=0,k=g.length;p<k;p++){if(p!=0){a.appendToken(m,"mo",",")}a.applyTransform(m,g[p].childNodes[0],0)}s.appendChild(m);r.appendChild(s);var u=a.cloneNode(s,true);a.appendToken(r,"mo","|");r.appendChild(u);a.appendToken(r,"mo","=");for(p=0,k=t.length;p<k;p++){if(p!=0){a.appendToken(r,"mo",",")}a.applyTransform(r,t[p],0)}a.appendToken(r,"mo",";");for(p=0,k=n.length;p<k;p++){if(p!=0){a.appendToken(r,"mo",",")}a.applyTransform(r,n[p],0)}a.appendToken(r,"mo","]");q.appendChild(r)}else{var v=a.createElement("mfenced");var o=a.createElement("mtable");for(p=0,k=t.length;p<k;p++){a.applyTransform(o,t[p],0)}v.appendChild(o);q.appendChild(v)}},matrixrow:function(h,m,g){var f=a.createElement("mtr");var o=a.getChildren(m);for(var n=0,j=o.length;n<j;n++){var k=a.createElement("mtd");a.applyTransform(k,o[n],0);f.appendChild(k)}h.appendChild(f)},condition:function(g,k,f){var j=a.createElement("mrow");var n=a.getChildren(k);for(var m=0,h=n.length;m<h;m++){a.applyTransform(j,n[m],MathJax.Extension["MathML/content-mathml"] = (function(HUB) {
  /* 
   * Content MathML to Presentation MathML conversion
   *
   * based on David Carlisle's ctop.js - https://web-xslt.googlecode.com/svn/trunk/ctop/ctop.js
   *
   */
0)}g.appendChild(j)},lambda:function(t,k,f){var o=a.createElement("lambda");var h=a.classifyChildren(k);var w=h.args,g=h.bvars,q=h.qualifiers;var s,n,m;if(g.length){a.applyTokens.lambda(t,k,o,w,g,q,f)}else{var u=a.createElement("mrow");for(s=0,n=w.length;s<n;s++){a.applyTransform(u,w[s],0)}if(q.length){var v=a.createElement("msub");a.appendToken(v,"mo","|");var p=a.createElement("mrow");for(s=0,m=q.length;s<m;s++){h=a.getChildren(q[s]);for(var r=0,x=h.length;r<x;r++){a.applyTransform(p,h[r],0)}}v.appendChild(p);u.appendChild(v)}t.appendChild(u)}},ident:function(g,h,f){a.appendToken(g,"mi","id")},domainofapplication:function(g,h,f){var i=a.createElement("merror");a.appendToken(i,"mtext","unexpected domainofapplication");g.appendChild(i)},share:function(g,i,f){var h=a.createElement("mi");h.setAttribute("href",i.getAttribute("href"));a.setTextContent(h,"Share "+i.getAttribute("href"));g.appendChild(h)},cerror:function(g,j,f){var n=a.createElement("merror");var m=a.getChildren(j);for(var k=0,h=m.length;k<h;k++){a.applyTransform(n,m[k],0)}g.appendChild(n)},semantics:function(g,k,f){var j=a.createElement("mrow");var n=a.getChildren(k);if(n.length){var o=n[0];for(var m=0,h=n.length;m<h;m++){if(n[m].nodeName==="annotation-xml"&&n[m].getAttribute("encoding")==="MathML-Presentation"){o=n[m];break}}a.applyTransform(j,o,0)}g.appendChild(j)},"annotation-xml":function(g,k,f){var j=a.createElement("mrow");var n=a.getChildren(k);for(var m=0,h=n.length;m<h;m++){a.applyTransform(j,n[m],0)}g.appendChild(j)}};a.tokens.reln=a.tokens.bind=a.tokens.apply;a.contentDictionaries={setname1:function(g,i,f){var j={C:"\u2102",N:"\u2115",P:"\u2119",Q:"\u211A",R:"\u211D",Z:"\u2124"};var h=a.getTextContent(i);a.appendToken(g,"mi",j[h])},aritherror:function(g,i,f){var h=a.getTextContent(i);a.appendToken(g,"mi",h+":")}};a.applyTokens={rem:a.transforms.binary("mod",3),divide:a.transforms.binary("/",3),remainder:a.transforms.binary("mod",3),implies:a.transforms.binary("\u21D2",3),factorof:a.transforms.binary("|",3),"in":a.transforms.binary("\u2208",3),notin:a.transforms.binary("\u2209",3),notsubset:a.transforms.binary("\u2288",2),notprsubset:a.transforms.binary("\u2284",2),setdiff:a.transforms.binary("\u2216",2),eq:a.transforms.infix("=",1),compose:a.transforms.infix("\u2218",0),left_compose:a.transforms.infix("\u2218",1),xor:a.transforms.infix("xor",3),neq:a.transforms.infix("\u2260",1),gt:a.transforms.infix(">",1),lt:a.transforms.infix("<",1),geq:a.transforms.infix("\u2265",1),leq:a.transforms.infix("\u2264",1),equivalent:a.transforms.infix("\u2261",1),approx:a.transforms.infix("\u2248",1),subset:a.transforms.infix("\u2286",2),prsubset:a.transforms.infix("\u2282",2),cartesianproduct:a.transforms.infix("\u00D7",2),cartesian_product:a.transforms.infix("\u00D7",2),vectorproduct:a.transforms.infix("\u00D7",2),scalarproduct:a.transforms.infix(".",2),outerproduct:a.transforms.infix("\u2297",2),sum:a.transforms.iteration("\u2211","="),product:a.transforms.iteration("\u220F","="),forall:a.transforms.bind("\u2200",".",","),exists:a.transforms.bind("\u2203",".",","),lambda:a.transforms.bind("\u03BB",".",","),limit:a.transforms.iteration("lim","\u2192"),sdev:a.transforms.fn("\u03c3"),determinant:a.transforms.fn("det"),max:a.transforms.minmax("max"),min:a.transforms.minmax("min"),real:a.transforms.fn("\u211b"),imaginary:a.transforms.fn("\u2111"),set:a.transforms.set("{","}"),list:a.transforms.set("(",")"),exp:function(h,k,g,j,i,m,f){var l=a.createElement("msup");a.appendToken(l,"mi","e");a.applyTransform(l,j[0],0);h.appendChild(l)},union:function(h,k,g,j,i,l,f){if(i.length){a.transforms.iteration("\u22C3","=")(h,k,g,j,i,l,f)}else{a.transforms.infix("\u222A",2)(h,k,g,j,i,l,f)}},intersect:function(q,i,n,s,g,o,f){if(g.length){a.transforms.iteration("\u22C2","=")(q,i,n,s,g,o,f)}else{var r=a.createElement("mrow");var m=f>2;if(m){a.appendToken(r,"mo","(")}for(var p=0,k=s.length;p<k;p++){var t=false;if(p>0){a.appendToken(r,"mo","\u2229");if(s[p].nodeName==="apply"){var h=a.getChildren(s[p])[0];t=h.nodeName==="union"}}if(t){a.appendToken(r,"mo","(")}a.applyTransform(r,s[p],2);if(t){a.appendToken(r,"mo",")")}}if(m){a.appendToken(r,"mo",")")}q.appendChild(r)}},floor:function(h,l,g,k,j,m,f){var i=a.createElement("mrow");a.appendToken(i,"mo","\u230a");a.applyTransform(i,k[0],0);a.appendToken(i,"mo","\u230b");h.appendChild(i)},conjugate:function(h,l,g,k,j,m,f){var i=a.createElement("mover");a.applyTransform(i,k[0],0);a.appendToken(i,"mo","\u00af");h.appendChild(i)},abs:function(h,l,g,k,j,m,f){var i=a.createElement("mrow");a.appendToken(i,"mo","|");a.applyTransform(i,k[0],0);a.appendToken(i,"mo","|");h.appendChild(i)},and:function(h,k,g,j,i,l,f){if(i.length||l.length){a.transforms.iteration("\u22c0","=")(h,k,g,j,i,l,4)}else{a.transforms.infix("\u2227",2)(h,k,g,j,i,l,f)}},or:function(h,k,g,j,i,l,f){if(i.length||l.length){a.transforms.iteration("\u22c1","=")(h,k,g,j,i,l,4)}else{a.transforms.infix("\u2228",2)(h,k,g,j,i,l,f)}},xor:function(h,k,g,j,i,l,f){if(i.length||l.length){a.transforms.iteration("xor","=")(h,k,g,j,i,l,4)}else{a.transforms.infix("xor",2)(h,k,g,j,i,l,f)}},card:function(h,l,g,k,j,m,f){var i=a.createElement("mrow");a.appendToken(i,"mo","|");a.applyTransform(i,k[0],0);a.appendToken(i,"mo","|");h.appendChild(i)},mean:function(h,l,g,k,j,m,f){if(k.length===1){var i=a.createElement("mover");a.applyTransform(i,k[0],0);a.appendToken(i,"mo","\u00af");h.appendChild(i)}else{h.appendChild(a.createmfenced(k,"\u27e8","\u27e9"))}},moment:function(s,k,o,w,g,p,f){var n,v,h,r,q,m;for(r=0,m=p.length;r<m;r++){if(p[r].nodeName==="degree"){n=p[r]}else{if(p[r].nodeName==="momentabout"){v=p[r]}}}var t=a.createElement("mrow");a.appendToken(t,"mo","\u27e8");var y=a.createElement("mrow");if(w.length>1){y.appendChild(a.createmfenced(w,"(",")"))}else{a.applyTransform(y,w[0],0)}if(n){var x=a.createElement("msup");x.appendChild(y);h=a.getChildren(n);for(q=0,m=h.length;q<m;q++){a.applyTransform(x,h[q],0)}t.appendChild(x)}else{t.appendChild(y)}a.appendToken(t,"mo","\u27e9");if(v){var u=a.createElement("msub");u.appendChild(t);h=a.getChildren(v);for(q=0,m=h.length;q<m;q++){a.applyTransform(u,h[q],0)}s.appendChild(u)}else{s.appendChild(t)}},variance:function(k,h,i,m,g,j,f){var l=a.createElement("mrow");var n=a.createElement("msup");a.appendToken(n,"mo","\u03c3");a.appendToken(n,"mn","2");l.appendChild(n);a.appendToken(l,"mo","\u2061");l.appendChild(a.createmfenced(m,"(",")"));k.appendChild(l)},grad:function(h,l,g,k,j,m,f){var i=a.createElement("mrow");a.appendToken(i,"mo","\u2207");a.appendToken(i,"mo","\u2061");i.appendChild(a.createmfenced(k,"(",")"));h.appendChild(i)},laplacian:function(k,h,i,m,g,j,f){var l=a.createElement("mrow");var n=a.createElement("msup");a.appendToken(n,"mo","\u2207");a.appendToken(n,"mn","2");l.appendChild(n);a.appendToken(l,"mo","\u2061");l.appendChild(a.createmfenced(m,"(",")"));k.appendChild(l)},curl:function(l,h,j,n,g,k,f){var m=a.createElement("mrow");a.appendToken(m,"mo","\u2207");a.appendToken(m,"mo","\u00d7");var i=n[0].nodeName==="apply";if(i){m.appendChild(a.createmfenced(n,"(",")"))}else{a.applyTransform(m,n[0],f)}l.appendChild(m)},divergence:function(l,h,j,n,g,k,f){var m=a.createElement("mrow");a.appendToken(m,"mo","\u2207");a.appendToken(m,"mo","\u22c5");var i=n[0].nodeName==="apply";if(i){m.appendChild(a.createmfenced(n,"(",")"))}else{a.applyTransform(m,n[0],f)}l.appendChild(m)},not:function(l,h,j,n,g,k,f){var m=a.createElement("mrow");a.appendToken(m,"mo","\u00ac");var i=n[0].nodeName==="apply"||n[0].nodeName==="bind";if(i){a.appendToken(m,"mo","(")}a.applyTransform(m,n[0],f);if(i){a.appendToken(m,"mo",")")}l.appendChild(m)},divide:function(h,k,g,j,i,l,f){var m=a.createElement("mfrac");a.applyTransform(m,j[0],0);a.applyTransform(m,j[1],0);h.appendChild(m)},tendsto:function(l,i,j,m,h,k,f){var n;if(j.nodeName==="tendsto"){n=j.getAttribute("type")}else{n=a.getTextContent(m[0]);m=m.slice(1)}var g=(n==="above")?"\u2198":(n==="below")?"\u2197":"\u2192";a.transforms.binary(g,2)(l,i,j,m,h,k,f)},minus:function(m,i,k,o,g,l,f){var h=o.length===1?5:2;var n=a.createElement("mrow");var j=h<f;if(j){a.appendToken(n,"mo","(")}if(o.length===1){a.appendToken(n,"mo","-");a.applyTransform(n,o[0],  var isMSIE = HUB.Browser.isMSIE;
h)}else{a.applyTransform(n,o[0],h);a.appendToken(n,"mo","-");var p;if(o[1].nodeName==="apply"){var q=a.getChildren(o[1])[0];p=q.nodeName==="plus"||q.nodeName==="minus"}if(p){a.appendToken(n,"mo","(")}a.applyTransform(n,o[1],h);if(p){a.appendToken(n,"mo",")")}}if(j){a.appendToken(n,"mo",")")}m.appendChild(n)},"complex-cartesian":function(h,l,g,k,j,m,f){var i=a.createElement("mrow");a.applyTransform(i,k[0],0);a.appendToken(i,"mo","+");a.applyTransform(i,k[1],0);a.appendToken(i,"mo","\u2062");a.appendToken(i,"mi","i");h.appendChild(i)},"complex-polar":function(k,h,i,m,g,j,f){var l=a.createElement("mrow");a.applyTransform(l,m[0],0);a.appendToken(l,"mo","\u2062");var o=a.createElement("msup");a.appendToken(o,"mi","e");var n=a.createElement("mrow");a.applyTransform(n,m[1],0);a.appendToken(n,"mo","\u2062");a.appendToken(n,"mi","i");o.appendChild(n);l.appendChild(o);k.appendChild(l)},integer:function(h,k,g,j,i,l,f){a.applyTransform(h,j[0],0)},"based-integer":function(h,k,g,j,i,l,f){var m=a.createElement("msub");a.applyTransform(m,j[1],0);a.applyTransform(m,j[0],0);h.appendChild(m)},rational:function(h,k,g,j,i,l,f){var m=a.createElement("mfrac");a.applyTransform(m,j[0],0);a.applyTransform(m,j[1],0);h.appendChild(m)},times:function(p,h,m,r,g,n,f){var q=a.createElement("mrow");var k=f>3;if(k){a.appendToken(q,"mo","(")}for(var o=0,i=r.length;o<i;o++){if(o>0){a.appendToken(q,"mo",(r[o].nodeName==="cn")?"\u00D7":"\u2062")}a.applyTransform(q,r[o],3)}if(k){a.appendToken(q,"mo",")")}p.appendChild(q)},plus:function(s,k,p,u,g,q,f){var t=a.createElement("mrow");var o=f>2;if(o){a.appendToken(t,"mo","(")}for(var r=0,m=u.length;r<m;r++){var v=u[r];var h=a.getChildren(v);if(r>0){var i;if(a.settings.collapsePlusMinus){if(v.nodeName==="cn"&&!(h.length)&&(i=Number(a.getTextContent(v)))<0){a.appendToken(t,"mo","\u2212");a.appendToken(t,"mn",-i)}else{if(v.nodeName==="apply"&&h.length===2&&h[0].nodeName==="minus"){a.appendToken(t,"mo","\u2212");a.applyTransform(t,h[1],2)}else{if(v.nodeName==="apply"&&h.length>2&&h[0].nodeName==="times"&&h[1].nodeName==="cn"&&(i=Number(a.getTextContent(h[1])))<0){a.appendToken(t,"mo","\u2212");h[1].textContent=-i;a.applyTransform(t,v,2)}else{a.appendToken(t,"mo","+");a.applyTransform(t,v,2)}}}}else{a.appendToken(t,"mo","+");a.applyTransform(t,v,2)}}else{a.applyTransform(t,v,2)}}if(o){a.appendToken(t,"mo",")")}s.appendChild(t)},transpose:function(h,k,g,j,i,m,f){var l=a.createElement("msup");a.applyTransform(l,j[0],f);a.appendToken(l,"mi","T");h.appendChild(l)},power:function(h,k,g,j,i,m,f){var l=a.createElement("msup");a.applyTransform(l,j[0],3);a.applyTransform(l,j[1],f);h.appendChild(l)},selector:function(p,h,k,s,g,n,f){var r=a.createElement("msub");var q=s?s[0]:a.createElement("mrow");a.applyTransform(r,q,0);var m=a.createElement("mrow");for(var o=1,j=s.length;o<j;o++){if(o!=1){a.appendToken(m,"mo",",")}a.applyTransform(m,s[o],0)}r.appendChild(m);p.appendChild(r)},log:function(k,h,i,o,g,j,f){var m=a.createElement("mrow");var l=a.createElement("mi");a.setTextContent(l,"log");if(j.length&&j[0].nodeName==="logbase"){var n=a.createElement("msub");n.appendChild(l);a.applyTransform(n,a.getChildren(j[0])[0],0);m.appendChild(n)}else{m.appendChild(l)}a.applyTransform(m,o[0],7);k.appendChild(m)},"int":function(p,y,B,m,g,t,n){var s=a.createElement("mrow");var x=a.createElement("mo");a.setTextContent(x,"\u222B");var q=a.createElement("msubsup");q.appendChild(x);var k=a.createElement("mrow");var o,A,w,v,u,z;for(A=0,u=t.length;A<u;A++){if(t[A].nodeName==="lowlimit"||t[A].nodeName==="condition"||t[A].nodeName==="domainofapplication"){o=a.getChildren(t[A]);for(w=0,z=o.length;w<z;w++){a.applyTransform(k,o[w],0)}}else{o=a.getChildren(t[A]);if(t[A].nodeName==="interval"&&o.length===2){a.applyTransform(k,o[0],0)}}}q.appendChild(k);var h=a.createElement("mrow");for(A=0,u=t.length;A<u;A++){if(t[A].nodeName==="uplimit"){o=a.getChildren(t[A]);for(w=0,z=o.length;w<z;w++){a.applyTransform(h,o[w],0)}break}else{if(t[A].nodeName==="interval"){o=a.getChildren(t[A]);a.applyTransform(h,o[o.length-1],0);break}}}q.appendChild(h);s.appendChild(q);for  if (isMSIE) {
    try {document.namespaces.add("m","http://www.w3.org/1998/Math/MathML")} catch (err) {}
  }
(A=0,v=m.length;A<v;A++){a.applyTransform(s,m[A],0)}for(A=0,v=g.length;A<v;A++){var r=g[A];o=a.getChildren(r);if(o.length){var f=a.createElement("mrow");a.appendToken(f,"mi","d");a.applyTransform(f,o[0],0);s.appendChild(f)}}p.appendChild(s)},inverse:function(k,h,i,l,g,j,f){var o=a.createElement("msup");var m=(l.length)?l[0]:a.createElement("mrow");a.applyTransform(o,m,f);var n=a.createElement("mfenced");a.appendToken(n,"mn","-1");o.appendChild(n);k.appendChild(o)},quotient:function(h,l,g,k,j,m,f){var i=a.createElement("mrow");a.appendToken(i,"mo","\u230A");if(k.length){a.applyTransform(i,k[0],0);a.appendToken(i,"mo","/");if(k.length>1){a.applyTransform(i,k[1],0)}}a.appendToken(i,"mo","\u230B");h.appendChild(i)},factorial:function(h,l,g,k,j,m,f){var i=a.createElement("mrow");a.applyTransform(i,k[0],4);a.appendToken(i,"mo","!");h.appendChild(i)},root:function(p,j,m,q,h,n,f){var g;if(m.nodeName==="root"&&(n.length===0||(n[0].nodeName==="degree"&&a.getTextContent(n[0])==="2"))){g=a.createElement("msqrt");for(var o=0,k=q.length;o<k;o++){a.applyTransform(g,q[o],0)}}else{g=a.createElement("mroot");a.applyTransform(g,q[0],0);var r=(m.nodeName==="root")?n[0].childNodes[0]:q[1];a.applyTransform(g,r,0)}p.appendChild(g)},diff:function(p,y,B,g,f,t,m){if(f.length){var v;var q=a.createElement("mfrac");var x=a.createElement("mrow");var z=a.createElement("mrow");q.appendChild(x);q.appendChild(z);var r,k,o,s;var A=a.createElement("mi");a.setTextContent(A,"d");var n=a.getChildren(f[0]);for(var w=0,u=n.length;w<u;w++){if(n[w].nodeName==="degree"){var h=a.getChildren(n[w])[0];if(a.getTextContent(h)!="1"){k=h;o=a.createElement("msup");o.appendChild(A);A=o;a.applyTransform(A,k,0)}}else{r=n[w]}}x.appendChild(A);if(g.length){switch(g[0].nodeName){case"apply":case"bind":case"reln":s=a.createElement("mrow");s.appendChild(q);a.applyTransform(s,g[0],3);v=s;break;default:a.applyTransform(x,g[0],0);v=q}}a.appendToken(z,"mi","d");if(k){var i=a.createElement("msup");a.applyTransform(i,r,0);a.applyTransform(i,k,0);z.appendChild(i)}else{a.applyTransform(z,r,0)}p.appendChild(v)}else{o=a.createElement("msup");s=a.createElement("mrow");o.appendChild(s);a.applyTransform(s,g[0],0);a.appendToken(o,"mo","\u2032");p.appendChild(o)}},partialdiff:function(t,I,N,g,f,D,o){var q,B,A;var v=a.createElement("mfrac");var H=a.createElement("mrow");var M=a.createElement("mrow");v.appendChild(H);v.appendChild(M);var L,m,p;if(f.length===0&&g.length===2&&g[0].nodeName==="list"){if(g[1].nodeName==="lambda"){m=a.getChildren(g[0]).length;if(m!=1){q=a.createElement("msup");a.appendToken(q,"mo","\u2202");a.appendToken(q,"mn",m);H.appendChild(q)}else{a.appendToken(H,"mo","\u2202")}p=a.getChildren(g[1]);L=p[p.length-1];var h=[];var r=a.getChildren(g[1]);var z=a.getChildren(g[0]);for(var K=0,F=r.length;K<F;K++){if(r[K].nodeName==="bvar"){h.push(a.getChildren(r[K])[0])}}var y=null;m=0;function u(O,l){a.appendToken(M,"mo","\u2202");var j=h[O];if(l>1){var i=a.createElement("msup");a.applyTransform(i,j,0);a.appendToken(i,"mn",l);M.appendChild(i)}else{a.applyTransform(M,j,0)}}for(K=0,F=z.length;K<F;K++){var C=Number(a.getTextContent(z[K]))-1;if(y!==null&&C!=y){u(y,m);m=0}y=C;m+=1}if(y){u(y,m)}}else{A=a.createElement("mrow");B=a.createElement("msub");a.appendToken(B,"mi","D");var w=a.getChildren(g[0]);B.appendChild(a.createmfenced(w,"",""));A.appendChild(B);a.applyTransform(A,g[1],0);t.appendChild(A);return}}else{q=a.createElement("msup");H.appendChild(q);a.appendToken(q,"mo","\u2202");var s=a.createElement("mrow");q.appendChild(s);var J;if(D.length&&D[0].nodeName==="degree"&&a.getChildren(D[0]).length){J=a.getChildren(D[0])[0];a.applyTransform(s,J,0)}else{m=0;var x=false;for(K=0,F=f.length;K<F;K++){p=a.getChildren(f[K]);if(p.length===2){for(var G=0;G<2;G++){if(p[G].nodeName==="degree"){if(/^\s*\d+\s*$/.test(a.getTextContent(p[G]))){m+=Number(a.getTextContent(p[G]))}else{if(x){a.appendToken(s,"mo","+")}x=true;a.applyTransform(s,a.getChildren(p[G])[0],0)}}}}else{m++}}if(m>0){if(x){a.appendToken(s,"mo","+")}a.appendToken(s,"mn",m)}}if(g.length){L=g[0]}for(K=0,F=f.length;K<F;K++){a.appendToken  var CONFIG = HUB.CombineConfig("MathML.content-mathml",{
    // render `a+(-b)` as `a-b`?
    collapsePlusMinus: true,
(M,"mo","\u2202");p=a.getChildren(f[K]);if(p.length===2){for(G=0;G<2;G++){if(p[G].nodeName==="degree"){var k=a.createElement("msup");a.applyTransform(k,p[1-G],0);var E=a.getChildren(p[G])[0];a.applyTransform(k,E,0);M.appendChild(k)}}}else{if(p.length===1){a.applyTransform(M,p[0],0)}}}}if(L){switch(L.nodeName){case"apply":case"bind":case"reln":A=a.createElement("mrow");A.appendChild(v);a.applyTransform(A,L,3);outNode=A;break;default:a.applyTransform(H,L,0);outNode=v}}else{outNode=v}t.appendChild(outNode)}};a.applyTokens.size=a.applyTokens.card;return a})(MathJax.Hub);MathJax.Hub.Register.StartupHook("MathML Jax Ready",function(){var b=MathJax.InputJax.MathML;var a=MathJax.Extension["MathML/content-mathml"];a.mbase=MathJax.ElementJax.mml.mbase;a.MML=MathJax.ElementJax.mml;b.DOMfilterHooks.Add(function(c){c.math=a.transformElement(c.math)});MathJax.Hub.Startup.signal.Post("MathML/content-mathml Ready")});MathJax.Ajax.loadComplete("[MathJax]/extensions/MathML/content-mathml.js");
      /* mathvariant to use with corresponding <ci> type attribute */
      cistyles: {
        vector: 'bold-italic',
        matrix: 'bold-upright'
      },

      /* Symbol names to translate to characters
      */
      symbols: {
        gamma: '\u03B3'
      }

  });

  var CToP = {
    version: "2.7.2",
    settings: CONFIG,

    /* Transform the given <math> elements from Content MathML to Presentation MathML and replace the original elements
    */
    transformElements: function(elements) {
      for (var i = 0, l = elements.length; i<l; i++ ) {
        var mathNode = CToP.transformElement(elements[i]);
        elements[i].parentNode.replaceChild(mathNode,elements[i]); 
      }
    },

    /* Transform a Content MathML element into Presentation MathML, and return the new element
    */
    transformElement: function(element) {
      if (element.nodeName.indexOf(":") >= 0) element = CToP.cloneNode(element,true); // removes namespaces
      var mathNode = CToP.cloneNode(element);
      for (var j = 0, l = element.childNodes.length; j<l; j++ ) {
        CToP.applyTransform(mathNode,element.childNodes[j],0);
      }
      return mathNode;
    },

    getTextContent: function(element) {
      return element.text !== undefined ? element.text : element.innerText !== undefined ? element.innerText : element.textContent;
    },

    setTextContent: function(element,textContent) {
      for (var i = 0, l = element.childNodes.length; i<l; i++) {
        if (element.childNodes[i].nodeType === 3) {
          element.removeChild(element.childNodes[i]);
          i--;
          l--;
        }
      }
      element.appendChild(document.createTextNode(textContent));
    },

    cloneNode: function(element,deep) {
      var clone, i, l;
      if (element.nodeType === 1) {
        clone = CToP.createElement(element.nodeName);
        for (i = 0, l = element.attributes.length; i<l; i++ ) {
          clone.setAttribute(element.attributes[i].nodeName,element.attributes[i].nodeValue);
        }
        if (deep) {
          for (i = 0, l = element.childNodes.length; i<l; i++ ) {
            var clonedChild = CToP.cloneNode(element.childNodes[i],true);
            clone.appendChild(clonedChild);
          }
        }
      } else if (element.nodeType === 3) {
        clone = document.createTextNode(element.nodeValue);
      }
      return clone;
    },

    /* Create an element with given name, belonging to the MathML namespace
    */
    createElement: function(name) {
      name = name.replace(/^.*:/,"");  // remove namespace
      return (document.createElementNS ?
                 document.createElementNS("http://www.w3.org/1998/Math/MathML",name) :
                 document.createElement("m:"+name));
    },

    /* Get node's children
    */
    getChildren: function(node) {
      var children = [];
      for (var j = 0, l = node.childNodes.length; j<l; j++ ) {
        if (node.childNodes[j].nodeType === 1) {
          children.push(node.childNodes[j]);
        }
      }
      return children;
    },

    /* Classify node's children as argumentss, variable bindings, or qualifiers
    */
    classifyChildren: function(contentMMLNode) {
      var args = [], bvars = [], qualifiers = [];
      for (var j = 0, l = contentMMLNode.childNodes.length; j<l; j++ ) {
        if (contentMMLNode.childNodes[j].nodeType === 1) {
          var childNode = contentMMLNode.childNodes[j], name = childNode.nodeName;
          if (name === 'bvar') {
            bvars.push(childNode);
          } else if (name === 'condition'||
              name === 'degree'||
              name === 'momentabout'||
              name === 'logbase'||
              name === 'lowlimit'||
              name === 'uplimit'||
              (name === 'interval' && args.length<2)||
              name === 'domainofapplication') {
                qualifiers.push(childNode);
              } else {
                args.push(childNode);
              }
        }
      }
      return {
        args:args, 
          bvars:bvars, 
          qualifiers:qualifiers
      };
    },

    /* Add an element with given name and text content
    */
    appendToken: function(parentNode,name,textContent) {
      var element = CToP.createElement(name);
      textContent = textContent.replace(/^\s+/,"").replace(/\s+$/,"");
      if (name === 'mn' && textContent.substr(0,1) === "-") {
        //
        // use <mrow><mo>&#x2212;</mo><mn>n</mn></mrow> instead of <mn>-n</mn>
        //
        element.appendChild(document.createTextNode(textContent.substr(1)));
        var mrow = CToP.createElement('mrow');
        CToP.appendToken(mrow,'mo','\u2212');
        mrow.appendChild(element);
        element = mrow;
      } else {
        element.appendChild(document.createTextNode(textContent));
      }
      parentNode.appendChild(element);
      return element;
    },

    /* Transform a Content MathML node to Presentation MathML node(s), and attach it to the parent
    */
    applyTransform: function(parentNode,contentMMLNode,precedence) {
      if (!contentMMLNode) {
        var merror = CToP.createElement('merror');
        CToP.appendToken(merror,'mtext','Missing child node');
        parentNode.appendChild(merror);
        return;
      }
      var nodeName = contentMMLNode.nodeName.replace(/.*:/,'');
      if (contentMMLNode.nodeType === 1) {
        if (CToP.tokens[nodeName]) {
          CToP.tokens[nodeName](parentNode,contentMMLNode,precedence);
        } else if (contentMMLNode.childNodes.length === 0) {
          var mml = CToP.MML[nodeName];
          if (mml && mml.isa && mml.isa(CToP.mbase)) {
            parentNode.appendChild(CToP.cloneNode(contentMMLNode));
          } else {
            CToP.appendToken(parentNode,'mi',nodeName);
          }
        } else {
          var clonedChild = CToP.cloneNode(contentMMLNode);
          parentNode.appendChild(clonedChild);
          for (var j = 0, l = contentMMLNode.childNodes.length; j<l; j++ ) {
            CToP.applyTransform(clonedChild,contentMMLNode.childNodes[j],precedence);
          }
        }
      } else if (contentMMLNode.nodeType === 3) {
        parentNode.appendChild(CToP.cloneNode(contentMMLNode));
      }
    },

    /* Make an mfenced environment
    */
    createmfenced: function(children,open,close) {
      var mf = CToP.createElement('mfenced');
      mf.setAttribute('open',open);
      mf.setAttribute('close',close);
      for (var j = 0, l = children.length; j<l; j++ ) {
        CToP.applyTransform(mf,children[j],0);
      }
      return mf;
    },

    transforms: {

      /* Transform an identifier symbol
      */
      identifier: function(textContent) {
        return function(parentNode,contentMMLNode,precedence) {
          CToP.appendToken(parentNode,'mi',textContent);
        }
      },

      /* Transform a set or set-like notation
      */
      set: function(open,close) {
        var bindSet = CToP.transforms.bind('',',','|');
        return function(parentNode,contentMMLNode) {
          var children = CToP.classifyChildren(contentMMLNode);

          var args = children.args, bvars = children.bvars, qualifiers = children.qualifiers;
          if (bvars.length) {
            var firstArg = children.args[0];
            args = args.slice(1);
            var mfenced = CToP.createElement('mfenced');
            mfenced.setAttribute('open',open);
            mfenced.setAttribute('close',close);
            bindSet(mfenced,contentMMLNode,firstArg,args,bvars,qualifiers,0);
            parentNode.appendChild(mfenced);
          } else {
            parentNode.appendChild(CToP.createmfenced(args,open,close));
          }
        }
      },

      /* Transform a content token to a presentation token
       *
       * (function factory)
       * @param {string} name - name of the corresponding presentation MML tag
       */
      token: function(name) {
        return function(parentNode,contentMMLNode) {
          if (contentMMLNode.childNodes.length === 1 && contentMMLNode.childNodes[0].nodeType === 3) {
            CToP.appendToken(parentNode,name,CToP.getTextContent(contentMMLNode));
          } else {
            var mrow = CToP.createElement('mrow');
            for (var j = 0, l = contentMMLNode.childNodes.length; j<l; j++ ) {
              if (contentMMLNode.childNodes[j].nodeType === 3) {
                CToP.appendToken(parentNode,name,CToP.getTextContent(contentMMLNode.childNodes[j]));
              }else{
                CToP.applyTransform(mrow,contentMMLNode.childNodes[j],0);
              }
            }
            if (mrow.childNodes.length) {
              parentNode.appendChild(mrow);
            }
          }
        }
      },

      /* Transform a binary operation
       *
       * (function factory)
       */
      binary: function(name,tokenPrecedence) {
        return function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
          var mrow = CToP.createElement('mrow');
          var needsBrackets = tokenPrecedence<precedence || (tokenPrecedence == precedence && name === "-");
          if (needsBrackets) {
            CToP.appendToken(mrow,'mo','(');
          }
          if (args.length>1) {
            CToP.applyTransform(mrow,args[0],tokenPrecedence);
          }
          CToP.appendToken(mrow,'mo',name);
          if (args.length>0) {
            var z = args[(args.length === 1)?0:1];
            CToP.applyTransform(mrow,z,tokenPrecedence);
          }	
          if (needsBrackets) {
            CToP.appendToken(mrow,'mo',')');
          }
          parentNode.appendChild(mrow);
        }
      },

      /* Transform an infix operator
       *
       * (function factory)
       */
      infix: function(name,tokenPrecedence) {
        return function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
          var mrow = CToP.createElement('mrow');
          var needsBrackets = precedence>tokenPrecedence;
          if (needsBrackets) {
            CToP.appendToken(mrow,'mo','(');
          }
          for (var j = 0, l = args.length; j<l; j++ ) {
            if (j>0) {
              CToP.appendToken(mrow,'mo',name);
            }
            CToP.applyTransform(mrow,args[j],tokenPrecedence);
          }
          if (needsBrackets) {
            CToP.appendToken(mrow,'mo',')');
          }
          parentNode.appendChild(mrow);
        }
      },

      /* Transform an iterated operation, e.g. summation
       *
       * (function factory
       */
      iteration: function(name,limitSymbol) {
        return function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
          var mrow = CToP.createElement('mrow');
          var mo = CToP.createElement('mo');
          CToP.setTextContent(mo,name);
          var munderover = CToP.createElement('munderover');
          munderover.appendChild(mo);
          var mrow1 = CToP.createElement('mrow');
          var i, j, num_qualifiers, num_bvars, children, bvar, num_children, num_args;
          for (i = 0, num_qualifiers = qualifiers.length; i<num_qualifiers; i++ ) {
            if (qualifiers[i].nodeName === 'lowlimit'||
                qualifiers[i].nodeName === 'condition'||
                qualifiers[i].nodeName === 'domainofapplication')
            {
              if (qualifiers[i].nodeName === 'lowlimit') {
                for (j = 0, num_bvars = bvars.length; j<num_bvars; j++ ) {
                  bvar = bvars[j];
                  children = CToP.getChildren(bvar);
                  if (children.length) {
                    CToP.applyTransform(mrow1,children[0],0);
                  }
                }
                if (bvars.length) {
                  CToP.appendToken(mrow1,"mo",limitSymbol);
                }
              }
              children = CToP.getChildren(qualifiers[i]);
              for (j = 0;j<children.length;j++) {
                CToP.applyTransform(mrow1,children[j],0);
              }
            } else {
              children = CToP.getChildren(qualifiers[i]);
              if (qualifiers[i].nodeName === 'interval' && children.length === 2) {
                for (j = 0, num_bvars = bvars.length; j<num_bvars; j++ ) {
                  bvar = bvars[j];
                  children = CToP.getChildren(bvar);
                  if (children.length) {
                    CToP.applyTransform(mrow1,children[0],0);
                  }
                }
                if (bvars.length) {
                  CToP.appendToken(mrow1,"mo","=");
                }
                CToP.applyTransform(mrow1,CToP.getChildren(qualifiers[i])[0],0);
              }
            }
          }
          munderover.appendChild(mrow1);
          var mjrow = CToP.createElement('mrow');
          for (i = 0, num_qualifiers = qualifiers.length; i<num_qualifiers; i++ ) {
            if (qualifiers[i].nodeName === 'uplimit' ||qualifiers[i].nodeName === 'interval' )
            {
              children = CToP.getChildren(qualifiers[i]);
              for (j = 0, num_children = children.length; j<num_children; j++ ) {
                CToP.applyTransform(mjrow,children[j],0);
              }
            }
          }
          munderover.appendChild(mjrow);
          mrow.appendChild(munderover);

          for (i = 0, num_args = args.length; i<num_args; i++ ) {
            CToP.applyTransform(mrow,args[i],precedence);
          }

          parentNode.appendChild(mrow);
        }
      },

      /* Transform something which binds a variable, e.g. forall or lambda
       *
       * (function factory)
       */
      bind: function(name,argSeparator,conditionSeparator) {
        return function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
          var mrow = CToP.createElement('mrow');
          var children, i, j, l, num_qualifiers, num_children;
          if (name) {
            CToP.appendToken(mrow,'mo',name);
          }
          for (j = 0, l = bvars.length; j<l; j++ ) {
            var bvar = bvars[j];
            if (j>0) {
              CToP.appendToken(mrow,'mo',',');
            }
            children = CToP.getChildren(bvar);
            if (children.length) {
              CToP.applyTransform(mrow,children[0],0);
            }
          }

          var conditions_mrow = CToP.createElement('mrow');
          var conditions = false;
          for (i = 0, num_qualifiers = qualifiers.length; i<num_qualifiers; i++ ) {
            if (qualifiers[i].nodeName === 'condition')	{
              conditions = true;
              children = CToP.getChildren(qualifiers[i]);
              for (j = 0, num_children = children.length; j<num_children; j++ ) {
                CToP.applyTransform(conditions_mrow,children[j],0);
              }
            }
          }
          if (conditions) {
            CToP.appendToken(mrow,'mo',conditionSeparator);
          }
          mrow.appendChild(conditions_mrow);
          for (i = 0, num_qualifiers = qualifiers.length; i<num_qualifiers; i++ ) {
            if (qualifiers[i].nodeName != 'condition')	{
              CToP.appendToken(mrow,'mo','\u2208');
              children = CToP.getChildren(qualifiers[i]);
              for (j = 0, num_children = children.length; j<num_children; j++ ) {
                CToP.applyTransform(mrow,children[j],0);
              }
            }
          }
          if (args.length && (bvars.length||children.length)) {
            CToP.appendToken(mrow,'mo',argSeparator);
          }
          for (i = 0, l = args.length; i<l; i++ ) {
            CToP.applyTransform(mrow,args[i],0);
          }
          parentNode.appendChild(mrow);
        }
      },

      /** Transform a function application
       *
       * i.e. something which ends up looking like `f(x,y,z)`, where `f` is a string
       *
       * (function factory)
       */
      fn: function(name) {
        return function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
          var mrow = CToP.createElement('mrow');
          if (firstArg.childNodes.length) {
            CToP.applyTransform(mrow,firstArg,1);
          } else {
            CToP.appendToken(mrow,'mi',name);
          }
          CToP.appendToken(mrow,'mo','\u2061');
          mrow.appendChild(CToP.createmfenced(args,'(',')'));
          parentNode.appendChild(mrow);
        }
      },

      /** Transform a min/max operation
       *
       * (function factory)
       */
      minmax: function(name) {
        return function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
          var mrow = CToP.createElement('mrow');
          CToP.appendToken(mrow,'mi',name);
          var mrow2 = CToP.createElement('mrow');
          CToP.appendToken(mrow2,'mo','{');
          for (var i = 0, l = args.length; i<l; i++ ) {
            if (i>0) {
              CToP.appendToken(mrow2,'mo',',');
            }
            CToP.applyTransform(mrow2,args[i],0);
          }
          if (qualifiers.length) {
            CToP.appendToken(mrow2,'mo','|');
            for (i = 0, l = qualifiers.length; i<l; i++ ) {
              CToP.applyTransform(mrow2,qualifiers[i],0);
            }
          }
          CToP.appendToken(mrow2,'mo','}');
          mrow.appendChild(mrow2);
          parentNode.appendChild(mrow);
        }
      }
    }
  }

  /* Functions to transform variable/atom tokens
  */
  CToP.tokens = {
    ci: function(parentNode,contentMMLNode,precedence) {
      if (contentMMLNode.childNodes.length === 1 && contentMMLNode.childNodes[0].nodeType === 3) {
        var mi = CToP.appendToken(parentNode,'mi',CToP.getTextContent(contentMMLNode));
        var type = contentMMLNode.getAttribute('type');
        if (type in CToP.settings.cistyles) {
          mi.setAttribute('mathvariant',CToP.settings.cistyles[type]);
        }
      } else {
        CToP.transforms.token('mi')(parentNode,contentMMLNode,precedence);
      }
    },
    cs: CToP.transforms.token('ms'),

    csymbol: function(parentNode,contentMMLNode,precedence) {
      var cd = contentMMLNode.getAttribute('cd');
      if (cd && CToP.contentDictionaries[cd]) {
        CToP.contentDictionaries[cd](parentNode,contentMMLNode,precedence);
      } else if (CToP.settings.symbols[name]) {
        CToP.appendToken(parentNode,'mi',CToP.settings.symbols[name]);
      } else {
        CToP.tokens.ci(parentNode,contentMMLNode);
      }
    },
    fn: function(parentNode,contentMMLNode,precedence) {
      CToP.applyTransform(parentNode,CToP.getChildren(contentMMLNode)[0],precedence);
    },

    naturalnumbers: CToP.transforms.identifier('\u2115'),
    integers: CToP.transforms.identifier('\u2124'),
    reals: CToP.transforms.identifier('\u211D'),
    rationals: CToP.transforms.identifier('\u211A'),
    complexes: CToP.transforms.identifier('\u2102'),
    primes: CToP.transforms.identifier('\u2119'),
    exponentiale: CToP.transforms.identifier('e'),
    imaginaryi: CToP.transforms.identifier('i'),
    notanumber: CToP.transforms.identifier('NaN'),
    eulergamma: CToP.transforms.identifier('\u03B3'),
    gamma: CToP.transforms.identifier('\u0263'),
    pi: CToP.transforms.identifier('\u03C0'),
    infinity: CToP.transforms.identifier('\u221E'),
    emptyset: CToP.transforms.identifier('\u2205'),
    "true": CToP.transforms.identifier('true'),
    "false": CToP.transforms.identifier('false'),
    set: CToP.transforms.set('{','}'),
    list: CToP.transforms.set('(',')'),

    interval: function(parentNode,contentMMLNode,precedence) {
      var closure = contentMMLNode.getAttribute('closure');

      var open, close;
      switch(closure) {
        case 'open':
          open = '(';
          close = ')';
          break;
        case 'open-closed':
          open = '(';
          close = ']';
          break;
        case 'closed-open':
          open = '[';
          close = ')';
          break;
        case 'closed':
        default:
          open = '[';
          close = ']';
      }

      parentNode.appendChild(CToP.createmfenced(CToP.getChildren(contentMMLNode),open,close));
    },

    apply: function(parentNode,contentMMLNode,precedence) {
      var children = CToP.classifyChildren(contentMMLNode);

      var firstArg = children.args[0];
      var args = children.args.slice(1), bvars = children.bvars, qualifiers = children.qualifiers;

      if (firstArg) {
        var name = firstArg.nodeName;
        name = (name === "csymbol") ? CToP.getTextContent(firstArg).toLowerCase() : name;
        if (CToP.applyTokens[name]) {
          CToP.applyTokens[name](parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence);
        } else {
          CToP.transforms.fn(name)(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence);
        }
      } else {
        parentNode.appendChild(CToP.createElement('mrow'));
      }
    },

    cn: function(parentNode,contentMMLNode,precedence) {
      var type = contentMMLNode.getAttribute("type");
      var base = contentMMLNode.getAttribute("base");
      if (type || base) {
        if (base) {
          type = 'based-integer';
        }
        switch(type) {
          case 'integer':
          case 'real':
          case 'double':
          case 'constant':
            CToP.transforms.token('mn')(parentNode,contentMMLNode);
            break;
          case 'hexdouble':
            CToP.appendToken(parentNode,'mn','0x'+CToP.getTextContent(contentMMLNode));
            break;
          default:
            var apply = CToP.createElement('apply');
            var mrow = CToP.createElement('mrow');
            var c = CToP.createElement(type);
            apply.appendChild(c);
            if (base) {
              CToP.appendToken(apply,'mn',base);
            }
            for (var j = 0, l = contentMMLNode.childNodes.length; j<l; j++ ) {
              if (contentMMLNode.childNodes[j].nodeType === 3) {
                CToP.appendToken(mrow,'cn',CToP.getTextContent(contentMMLNode.childNodes[j]));
              }else if (contentMMLNode.childNodes[j].nodeName === 'sep') {
                apply.appendChild(mrow);
                mrow = CToP.createElement('mrow');
              } else {
                mrow.appendChild(CToP.cloneNode(contentMMLNode.childNodes[j],true));
              }
            }
            apply.appendChild(mrow);
            CToP.applyTransform(parentNode,apply,0);
        }
      } else {  
        CToP.transforms.token('mn')(parentNode,contentMMLNode);
      }
    },

    vector: function(parentNode,contentMMLNode,precedence) {
      var mrow = CToP.createElement('mrow');
      CToP.appendToken(mrow,'mo','(');

      var mtable = CToP.createElement('mtable');
      var children = CToP.getChildren(contentMMLNode);
      for (var i = 0, l = children.length; i<l; i++ ) {
        var mtr = CToP.createElement('mtr');
        var mtd = CToP.createElement('mtd');
        CToP.applyTransform(mtd,children[i],0);
        mtr.appendChild(mtd);
        mtable.appendChild(mtr);
      }

      mrow.appendChild(mtable);
      CToP.appendToken(mrow,'mo',')');
      parentNode.appendChild(mrow);
    },

    piecewise: function(parentNode,contentMMLNode,precedence) {
      var mrow = CToP.createElement('mrow');
      CToP.appendToken(mrow,'mo','{');
      var mtable = CToP.createElement('mtable');
      mrow.appendChild(mtable);
      var children = CToP.getChildren(contentMMLNode);
      for (var i = 0, l = children.length; i<l; i++ ) {
        CToP.applyTransform(mtable,children[i],0);
      }
      parentNode.appendChild(mrow);
    },

    piece: function(parentNode,contentMMLNode,precedence) {
      var mtr = CToP.createElement('mtr');
      var children = CToP.getChildren(contentMMLNode);
      for (var i = 0, l = children.length; i<l; i++ ) {
        var mtd = CToP.createElement('mtd');
        mtr.appendChild(mtd);
        CToP.applyTransform(mtd,children[i],0);
        if (i === 0) {
          mtd = CToP.createElement('mtd');
          CToP.appendToken(mtd,"mtext","\u00A0if\u00A0");
          mtr.appendChild(mtd);
        }
      }
      parentNode.appendChild(mtr);
    },

    otherwise: function(parentNode,contentMMLNode,precedence) {
      var mtr = CToP.createElement('mtr');
      var children = CToP.getChildren(contentMMLNode);
      if (children.length) {
        var mtd = CToP.createElement('mtd');
        mtr.appendChild(mtd);
        CToP.applyTransform(mtd,children[0],0);
        mtd = CToP.createElement('mtd');
        mtd.setAttribute('columnspan','2');
        CToP.appendToken(mtd,"mtext","\u00A0otherwise");
        mtr.appendChild(mtd);
      }
      parentNode.appendChild(mtr);
    },

    matrix: function(parentNode,contentMMLNode,precedence) {
      var children = CToP.classifyChildren(contentMMLNode);
      var args = children.args, bvars = children.bvars, qualifiers = children.qualifiers;

      if (bvars.length || qualifiers.length) {
        var mrow = CToP.createElement('mrow');
        CToP.appendToken(mrow,"mo","[");
        var msub = CToP.createElement('msub');
        CToP.appendToken(msub,'mi','m');
        var mrow2 = CToP.createElement('mrow');
        for (var i = 0, l = bvars.length; i<l; i++ ) {
          if (i != 0) {
            CToP.appendToken(mrow2,'mo',',');
          }	
          CToP.applyTransform(mrow2,bvars[i].childNodes[0],0);
        }
        msub.appendChild(mrow2);
        mrow.appendChild(msub);
        var msub2 = CToP.cloneNode(msub,true);
        CToP.appendToken(mrow,'mo','|');
        mrow.appendChild(msub2);
        CToP.appendToken(mrow,'mo','=');
        for (i = 0, l = args.length; i<l; i++ ) {
          if (i != 0) {
            CToP.appendToken(mrow,'mo',',');
          }	
          CToP.applyTransform(mrow,args[i],0);
        }
        CToP.appendToken(mrow,'mo',';');
        for (i = 0, l = qualifiers.length; i<l; i++) {
          if (i != 0) {
            CToP.appendToken(mrow,'mo',',');
          }	
          CToP.applyTransform(mrow,qualifiers[i],0);
        }
        CToP.appendToken(mrow,'mo',']');
        parentNode.appendChild(mrow);
      } else {
        var mfenced = CToP.createElement('mfenced');
        var mtable = CToP.createElement('mtable');
        for (i = 0, l = args.length; i<l; i++ ) {
          CToP.applyTransform(mtable,args[i],0);
        }
        mfenced.appendChild(mtable);
        parentNode.appendChild(mfenced);
      }
    },

    matrixrow: function(parentNode,contentMMLNode,precedence) {
      var mtr = CToP.createElement('mtr');
      var children = CToP.getChildren(contentMMLNode);
      for (var i = 0, l = children.length; i<l; i++ ) {
        var mtd = CToP.createElement('mtd');
        CToP.applyTransform(mtd,children[i],0);
        mtr.appendChild(mtd);
      }
      parentNode.appendChild(mtr);
    },

    condition: function(parentNode,contentMMLNode,precedence) {
      var mrow = CToP.createElement('mrow');
      var children = CToP.getChildren(contentMMLNode);
      for (var i = 0, l = children.length; i<l; i++ ) {
        CToP.applyTransform(mrow,children[i],0);
      }
      parentNode.appendChild(mrow);
    },

    lambda: function(parentNode,contentMMLNode,precedence) {
      var firstArg = CToP.createElement('lambda');
      var children = CToP.classifyChildren(contentMMLNode);
      var args = children.args, bvars = children.bvars, qualifiers = children.qualifiers;
      var i, l, num_qualifiers;
      
      if (bvars.length) {
        CToP.applyTokens.lambda(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence);
      } else {
        var mrow = CToP.createElement('mrow');
        for (i = 0, l = args.length; i<l; i++ ) {
          CToP.applyTransform(mrow,args[i],0);
        }
        if (qualifiers.length) {
          var msub = CToP.createElement('msub');
          CToP.appendToken(msub,'mo','|');
          var mrow2 = CToP.createElement('mrow');
          for (i = 0, num_qualifiers = qualifiers.length; i<num_qualifiers; i++ ) {
            children = CToP.getChildren(qualifiers[i]);
            for (var j = 0, num_children = children.length; j<num_children; j++ ) {
              CToP.applyTransform(mrow2,children[j],0);
            }
          }
          msub.appendChild(mrow2);
          mrow.appendChild(msub);
        }
        parentNode.appendChild(mrow);
      }
    },

    ident: function(parentNode,contentMMLNode,precedence) {
      CToP.appendToken(parentNode,"mi","id")
    },

    domainofapplication: function(parentNode,contentMMLNode,precedence) {
      var merror = CToP.createElement('merror');
      CToP.appendToken(merror,'mtext','unexpected domainofapplication');
      parentNode.appendChild(merror);
    },

    share: function(parentNode,contentMMLNode,precedence) {
      var mi = CToP.createElement('mi');
      mi.setAttribute('href',contentMMLNode.getAttribute('href'));
      CToP.setTextContent(mi,"Share " + contentMMLNode.getAttribute('href'));
      parentNode.appendChild(mi);
    },

    cerror: function(parentNode,contentMMLNode,precedence) {
      var merror = CToP.createElement('merror');
      var children = CToP.getChildren(contentMMLNode);
      for (var i = 0, l = children.length; i<l; i++ ) {
        CToP.applyTransform(merror,children[i],0);
      }
      parentNode.appendChild(merror);
    },

    semantics: function(parentNode,contentMMLNode,precedence)  {
      var mrow = CToP.createElement('mrow');
      var children = CToP.getChildren(contentMMLNode);
      if (children.length) {
        var z = children[0];
        for (var i = 0, l = children.length; i<l; i++ ) {
          if (children[i].nodeName === 'annotation-xml' && children[i].getAttribute('encoding') === 'MathML-Presentation') {
            z = children[i];
            break;
          }
        }
        CToP.applyTransform(mrow,z,0);
      }
      parentNode.appendChild(mrow);
    },

    "annotation-xml": function(parentNode,contentMMLNode,precedence)  {
      var mrow = CToP.createElement('mrow');
      var children = CToP.getChildren(contentMMLNode);
      for (var i = 0, l = children.length; i<l; i++ ) {
        CToP.applyTransform(mrow,children[i],0);
      }
      parentNode.appendChild(mrow);
    }
  };

  CToP.tokens.reln = CToP.tokens.bind = CToP.tokens.apply;

  CToP.contentDictionaries = {
    "setname1": function(parentNode,contentMMLNode,precedence) {
      var sets = {
        C: '\u2102',
        N: '\u2115',
        P: '\u2119',
        Q: '\u211A',
        R: '\u211D',
        Z: '\u2124'
      }
      var name = CToP.getTextContent(contentMMLNode);
      CToP.appendToken(parentNode,'mi',sets[name]);
    },
    aritherror: function(parentNode,contentMMLNode,precedence) {
      var name = CToP.getTextContent(contentMMLNode);
      CToP.appendToken(parentNode,'mi',name+':');
    }
  }

  /* Functions to transform function/operation application tokens
  */
  CToP.applyTokens = {
    rem: CToP.transforms.binary('mod',3),
    divide: CToP.transforms.binary('/',3),
    remainder: CToP.transforms.binary('mod',3),
    implies: CToP.transforms.binary('\u21D2',3),
    factorof: CToP.transforms.binary('|',3),
    "in": CToP.transforms.binary('\u2208',3),
    notin: CToP.transforms.binary('\u2209',3),
    notsubset: CToP.transforms.binary('\u2288',2),
    notprsubset: CToP.transforms.binary('\u2284',2),
    setdiff: CToP.transforms.binary('\u2216',2),
    eq: CToP.transforms.infix('=',1),
    compose: CToP.transforms.infix('\u2218',0),
    "left_compose": CToP.transforms.infix('\u2218',1),
    xor: CToP.transforms.infix('xor',3),
    neq: CToP.transforms.infix('\u2260',1),
    gt: CToP.transforms.infix('>',1),
    lt: CToP.transforms.infix('<',1),
    geq: CToP.transforms.infix('\u2265',1),
    leq: CToP.transforms.infix('\u2264',1),
    equivalent: CToP.transforms.infix('\u2261',1),
    approx: CToP.transforms.infix('\u2248',1),
    subset: CToP.transforms.infix('\u2286',2),
    prsubset: CToP.transforms.infix('\u2282',2),
    cartesianproduct: CToP.transforms.infix('\u00D7',2),
    "cartesian_product": CToP.transforms.infix('\u00D7',2),
    vectorproduct: CToP.transforms.infix('\u00D7',2),
    scalarproduct: CToP.transforms.infix('.',2),
    outerproduct: CToP.transforms.infix('\u2297',2),
    sum: CToP.transforms.iteration('\u2211','='),
    product: CToP.transforms.iteration('\u220F','='),
    forall: CToP.transforms.bind('\u2200','.',','),
    exists: CToP.transforms.bind('\u2203','.',','),
    lambda: CToP.transforms.bind('\u03BB','.',','),
    limit: CToP.transforms.iteration('lim','\u2192'),
    sdev: CToP.transforms.fn('\u03c3'),
    determinant: CToP.transforms.fn('det'),
    max: CToP.transforms.minmax('max'),
    min: CToP.transforms.minmax('min'),
    real: CToP.transforms.fn('\u211b'),
    imaginary: CToP.transforms.fn('\u2111'),
    set: CToP.transforms.set('{','}'),
    list: CToP.transforms.set('(',')'),

    exp: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var msup = CToP.createElement('msup');
      CToP.appendToken(msup,'mi','e');
      CToP.applyTransform(msup,args[0],0);
      parentNode.appendChild(msup);
    },

    union: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      if (bvars.length) {
        CToP.transforms.iteration('\u22C3','=')(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence);
      } else {
        CToP.transforms.infix('\u222A',2)(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence);
      }
    },

    intersect: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      if (bvars.length) {
        CToP.transforms.iteration('\u22C2','=')(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence);
      } else {
        var mrow = CToP.createElement('mrow');
        var needsBrackets = precedence>2;
        if (needsBrackets) {
          CToP.appendToken(mrow,'mo','(');
        }
        for (var j = 0, l = args.length; j<l; j++ ) {
          var argBrackets = false;
          if (j>0) {
            CToP.appendToken(mrow,'mo','\u2229');
            if (args[j].nodeName === 'apply') {
              var child = CToP.getChildren(args[j])[0];
              argBrackets = child.nodeName  ===  'union';
            }
          }
          if (argBrackets) {
            CToP.appendToken(mrow,'mo','(');
          }
          CToP.applyTransform(mrow,args[j],2);
          if (argBrackets) {
            CToP.appendToken(mrow,'mo',')');
          }
        }
        if (needsBrackets) {
          CToP.appendToken(mrow,'mo',')');
        }
        parentNode.appendChild(mrow);
      }
    },

    floor: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      CToP.appendToken(mrow,'mo','\u230a');
      CToP.applyTransform(mrow,args[0],0);
      CToP.appendToken(mrow,'mo','\u230b');
      parentNode.appendChild(mrow);
    },

    conjugate: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mover = CToP.createElement('mover');
      CToP.applyTransform(mover,args[0],0);
      CToP.appendToken(mover,'mo','\u00af');
      parentNode.appendChild(mover);
    },

    abs: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      CToP.appendToken(mrow,'mo','|');
      CToP.applyTransform(mrow,args[0],0);
      CToP.appendToken(mrow,'mo','|');
      parentNode.appendChild(mrow);
    },

    and: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      if (bvars.length || qualifiers.length) {
        CToP.transforms.iteration('\u22c0','=')(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,4);
      } else {
        CToP.transforms.infix('\u2227',2)(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence);
      }
    },

    or: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      if (bvars.length || qualifiers.length) {
        CToP.transforms.iteration('\u22c1','=')(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,4);
      } else {
        CToP.transforms.infix('\u2228',2)(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence);
      }
    },

    xor: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      if (bvars.length || qualifiers.length) {
        CToP.transforms.iteration('xor','=')(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,4);
      } else {
        CToP.transforms.infix('xor',2)(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence);
      }
    },

    card: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      CToP.appendToken(mrow,'mo','|');
      CToP.applyTransform(mrow,args[0],0);
      CToP.appendToken(mrow,'mo','|');
      parentNode.appendChild(mrow);
    },

    mean: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      if (args.length === 1) {
        var mover = CToP.createElement('mover');
        CToP.applyTransform(mover,args[0],0);
        CToP.appendToken(mover,'mo','\u00af');
        parentNode.appendChild(mover);
      } else {
        parentNode.appendChild(CToP.createmfenced(args,'\u27e8','\u27e9'));
      }
    },

    moment: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var degree, momentabout, children, i, j, l;

      for (i = 0, l = qualifiers.length; i<l; i++ ) {
        if (qualifiers[i].nodeName === 'degree') {
          degree = qualifiers[i];
        } else if (qualifiers[i].nodeName === 'momentabout') {
          momentabout = qualifiers[i];
        }
      }

      var mrow = CToP.createElement('mrow');
      CToP.appendToken(mrow,'mo','\u27e8');
      var argrow = CToP.createElement('mrow');
      if (args.length>1) {
        argrow.appendChild(CToP.createmfenced(args,'(',')'));
      } else {
        CToP.applyTransform(argrow,args[0],0);
      }
      if (degree) {
        var msup = CToP.createElement('msup');
        msup.appendChild(argrow);
        children = CToP.getChildren(degree);
        for (j = 0, l = children.length; j<l; j++ ) {
          CToP.applyTransform(msup,children[j],0);
        }
        mrow.appendChild(msup);
      } else {
        mrow.appendChild(argrow);
      }
      CToP.appendToken(mrow,'mo','\u27e9');

      if (momentabout) {
        var msub = CToP.createElement('msub');
        msub.appendChild(mrow);
        children = CToP.getChildren(momentabout);
        for (j = 0, l = children.length; j<l; j++ ) {
          CToP.applyTransform(msub,children[j],0);
        }
        parentNode.appendChild(msub);
      } else {
        parentNode.appendChild(mrow);
      }
    },

    variance: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      var msup = CToP.createElement('msup');
      CToP.appendToken(msup,'mo','\u03c3');
      CToP.appendToken(msup,'mn','2');
      mrow.appendChild(msup);
      CToP.appendToken(mrow,'mo','\u2061');
      mrow.appendChild(CToP.createmfenced(args,'(',')'));
      parentNode.appendChild(mrow);
    },

    grad: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      CToP.appendToken(mrow,'mo','\u2207');
      CToP.appendToken(mrow,'mo','\u2061');
      mrow.appendChild(CToP.createmfenced(args,'(',')'));
      parentNode.appendChild(mrow);
    },

    laplacian: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      var msup = CToP.createElement('msup');
      CToP.appendToken(msup,'mo','\u2207');
      CToP.appendToken(msup,'mn','2');
      mrow.appendChild(msup);
      CToP.appendToken(mrow,'mo','\u2061');
      mrow.appendChild(CToP.createmfenced(args,'(',')'));
      parentNode.appendChild(mrow);
    },

    curl: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      CToP.appendToken(mrow,'mo','\u2207');
      CToP.appendToken(mrow,'mo','\u00d7');
      var needsBrackets = args[0].nodeName === 'apply';
      if (needsBrackets) {
        mrow.appendChild(CToP.createmfenced(args,'(', ')'));
      }
      else {
        CToP.applyTransform(mrow,args[0],precedence);
      }
      parentNode.appendChild(mrow);
    },

    divergence: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      CToP.appendToken(mrow,'mo','\u2207');
      CToP.appendToken(mrow,'mo','\u22c5');
      var needsBrackets = args[0].nodeName === 'apply';
      if (needsBrackets) {
        mrow.appendChild(CToP.createmfenced(args,'(', ')'));
      }
      else {
        CToP.applyTransform(mrow,args[0],precedence);
      }
      parentNode.appendChild(mrow);
    },

    not: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      CToP.appendToken(mrow,'mo','\u00ac');
      var needsBrackets = args[0].nodeName === 'apply' || args[0].nodeName === 'bind';
      if (needsBrackets) {
        CToP.appendToken(mrow,'mo','(');
      }
      CToP.applyTransform(mrow,args[0],precedence);
      if (needsBrackets) {
        CToP.appendToken(mrow,'mo',')');
      }
      parentNode.appendChild(mrow)
    },

    divide: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mfrac = CToP.createElement('mfrac');
      CToP.applyTransform(mfrac,args[0],0);
      CToP.applyTransform(mfrac,args[1],0);
      parentNode.appendChild(mfrac);
    },

    tendsto: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var type;
      if (firstArg.nodeName === 'tendsto') {
        type = firstArg.getAttribute('type');
      } else {
        type = CToP.getTextContent(args[0]);
        args = args.slice(1);
      }
      var name = (type === 'above')? '\u2198' :
        (type === 'below') ? '\u2197' : '\u2192' ;
      CToP.transforms.binary(name,2)(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence);
    },

    minus: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var tokenPrecedence = args.length === 1 ? 5 : 2;

      var mrow = CToP.createElement('mrow');
      var needsBrackets = tokenPrecedence<precedence;
      if (needsBrackets) {
        CToP.appendToken(mrow,'mo','(');
      }

      if (args.length === 1) {
        CToP.appendToken(mrow,'mo','-');
        CToP.applyTransform(mrow,args[0],tokenPrecedence);
      } else {
        CToP.applyTransform(mrow,args[0],tokenPrecedence);
        CToP.appendToken(mrow,'mo','-');
        var bracketArg;
        if (args[1].nodeName === 'apply') {
          var argOp = CToP.getChildren(args[1])[0];
          bracketArg = argOp.nodeName === 'plus' || argOp.nodeName === 'minus';
        }
        if (bracketArg) {
          CToP.appendToken(mrow,'mo','(');
        }
        CToP.applyTransform(mrow,args[1],tokenPrecedence);
        if (bracketArg) {
          CToP.appendToken(mrow,'mo',')');
        }
      }

      if (needsBrackets) {
        CToP.appendToken(mrow,'mo',')');
      }
      parentNode.appendChild(mrow);
    },

    "complex-cartesian": function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      CToP.applyTransform(mrow,args[0],0);
      CToP.appendToken(mrow,'mo','+');
      CToP.applyTransform(mrow,args[1],0);
      CToP.appendToken(mrow,'mo','\u2062');
      CToP.appendToken(mrow,'mi','i');
      parentNode.appendChild(mrow);
    },

    "complex-polar": function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      CToP.applyTransform(mrow,args[0],0);
      CToP.appendToken(mrow,'mo','\u2062');
      var msup = CToP.createElement('msup');
      CToP.appendToken(msup,'mi','e');
      var exponent = CToP.createElement('mrow');
      CToP.applyTransform(exponent,args[1],0);
      CToP.appendToken(exponent,'mo','\u2062');
      CToP.appendToken(exponent,'mi','i');
      msup.appendChild(exponent);
      mrow.appendChild(msup);
      parentNode.appendChild(mrow);
    },

    integer: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      CToP.applyTransform(parentNode,args[0],0);
    },

    "based-integer": function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var msub = CToP.createElement('msub');
      CToP.applyTransform(msub,args[1],0);
      CToP.applyTransform(msub,args[0],0);
      parentNode.appendChild(msub);
    },

    rational: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mfrac = CToP.createElement('mfrac');
      CToP.applyTransform(mfrac,args[0],0);
      CToP.applyTransform(mfrac,args[1],0);
      parentNode.appendChild(mfrac);
    },

    times: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      var needsBrackets = precedence>3;
      if (needsBrackets) {
        CToP.appendToken(mrow,'mo','(');
      }
      for (var j = 0, l = args.length; j<l; j++ ) {
        if (j>0) {
          CToP.appendToken(mrow,'mo',(args[j].nodeName === 'cn') ? "\u00D7" :"\u2062");
        }
        CToP.applyTransform(mrow,args[j],3);
      }
      if (needsBrackets) {
        CToP.appendToken(mrow,'mo',')');
      }
      parentNode.appendChild(mrow);
    },

    plus: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var mrow = CToP.createElement('mrow');
      var needsBrackets = precedence>2;
      if (needsBrackets) {
        CToP.appendToken(mrow,'mo','(');
      }
      for (var j = 0, l = args.length; j<l; j++ ) {
        var arg = args[j];
        var children = CToP.getChildren(arg);
        if (j>0) {
          var n;
          if (CToP.settings.collapsePlusMinus) {
            if (arg.nodeName === 'cn' && !(children.length) && (n = Number(CToP.getTextContent(arg))) <0) {
              CToP.appendToken(mrow,'mo','\u2212');
              CToP.appendToken(mrow,'mn', -n);
            } else if (arg.nodeName === 'apply' && children.length === 2 && children[0].nodeName === 'minus') {
              CToP.appendToken(mrow,'mo','\u2212');
              CToP.applyTransform(mrow,children[1],2);
            } else if (arg.nodeName === 'apply' && children.length>2 && children[0].nodeName === 'times' && children[1].nodeName === 'cn' && (n = Number(CToP.getTextContent(children[1]))) < 0) {
              CToP.appendToken(mrow,'mo','\u2212');
              children[1].textContent = -n;     // OK to change MathML since it is being discarded afterward
              CToP.applyTransform(mrow,arg,2);
            } else{
              CToP.appendToken(mrow,'mo','+');
              CToP.applyTransform(mrow,arg,2);
            }
          } else {
            CToP.appendToken(mrow,'mo','+');
            CToP.applyTransform(mrow,arg,2);
          }
        } else {
          CToP.applyTransform(mrow,arg,2);	
        }
      }
      if (needsBrackets) {
        CToP.appendToken(mrow,'mo',')');
      }
      parentNode.appendChild(mrow);
    },

    transpose: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var msup = CToP.createElement('msup');
      CToP.applyTransform(msup,args[0],precedence);
      CToP.appendToken(msup,'mi','T');
      parentNode.appendChild(msup);
    },

    power: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var msup = CToP.createElement('msup');
      CToP.applyTransform(msup,args[0],3);
      CToP.applyTransform(msup,args[1],precedence);
      parentNode.appendChild(msup);
    },

    selector: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence) {
      var msub = CToP.createElement('msub');
      var mrow = args ? args[0]: CToP.createElement('mrow');
      CToP.applyTransform(msub,mrow,0);
      var mrow2 = CToP.createElement('mrow');
      for (var i = 1, l = args.length; i<l; i++ ) {
        if (i != 1) {
          CToP.appendToken(mrow2,'mo',',');
        }	
        CToP.applyTransform(mrow2,args[i],0);
      }
      msub.appendChild(mrow2);
      parentNode.appendChild(msub);
    },

    log: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence)  {
      var mrow = CToP.createElement('mrow');
      var mi = CToP.createElement('mi');
      CToP.setTextContent(mi,'log');
      if (qualifiers.length && qualifiers[0].nodeName === 'logbase') {
        var msub = CToP.createElement('msub');
        msub.appendChild(mi);
        CToP.applyTransform(msub,CToP.getChildren(qualifiers[0])[0],0);
        mrow.appendChild(msub);
      } else {
        mrow.appendChild(mi);
      }
      CToP.applyTransform(mrow,args[0],7);
      parentNode.appendChild(mrow);
    },

    "int": function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence)  {
      var mrow = CToP.createElement('mrow');
      var mo = CToP.createElement('mo');
      CToP.setTextContent(mo,'\u222B');
      var msubsup = CToP.createElement('msubsup');
      msubsup.appendChild(mo);
      var mrow1 = CToP.createElement('mrow');
      var children, i, j, l, num_qualifiers, num_children;
      for (i = 0, num_qualifiers = qualifiers.length; i<num_qualifiers; i++ ) {
        if (qualifiers[i].nodeName === 'lowlimit'||
            qualifiers[i].nodeName === 'condition'||
            qualifiers[i].nodeName === 'domainofapplication')
        {
          children = CToP.getChildren(qualifiers[i]);
          for (j = 0, num_children = children.length; j<num_children; j++ ) {
            CToP.applyTransform(mrow1,children[j],0);
          }
        } else {
          children = CToP.getChildren(qualifiers[i]);
          if (qualifiers[i].nodeName === 'interval' && children.length === 2) {
            CToP.applyTransform(mrow1,children[0],0);
          }
        }
      }
      msubsup.appendChild(mrow1);
      var mrow2 = CToP.createElement('mrow');
      for (i = 0, num_qualifiers = qualifiers.length; i<num_qualifiers; i++ ) {
        if (qualifiers[i].nodeName === 'uplimit') {
          children = CToP.getChildren(qualifiers[i]);
          for (j = 0, num_children = children.length; j<num_children; j++ ) {
            CToP.applyTransform(mrow2,children[j],0);
          }
          break;
        } else if (qualifiers[i].nodeName === 'interval' ) {
          children = CToP.getChildren(qualifiers[i]);
          CToP.applyTransform(mrow2,children[children.length-1],0);
          break;
        }
      }
      msubsup.appendChild(mrow2);
      mrow.appendChild(msubsup);
      for (i = 0, l = args.length; i<l; i++ ) {
        CToP.applyTransform(mrow,args[i],0);
      }
      for (i = 0, l = bvars.length; i<l; i++ ) {
        var bvar = bvars[i];
        children = CToP.getChildren(bvar);
        if (children.length) {
          var mrow3 = CToP.createElement("mrow");
          CToP.appendToken(mrow3,'mi','d');
          CToP.applyTransform(mrow3,children[0],0);
          mrow.appendChild(mrow3);
        }
      }
      parentNode.appendChild(mrow);
    },

    inverse: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence)  {
      var msup = CToP.createElement('msup');
      var arg = (args.length) ? args[0] : CToP.createElement('mrow');
      CToP.applyTransform(msup,arg,precedence);
      var mfenced = CToP.createElement('mfenced');
      CToP.appendToken(mfenced,'mn','-1');
      msup.appendChild(mfenced);
      parentNode.appendChild(msup);
    },

    quotient: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence)  {
      var mrow = CToP.createElement('mrow');
      CToP.appendToken(mrow,'mo','\u230A');
      if (args.length) {
        CToP.applyTransform(mrow,args[0],0);
        CToP.appendToken(mrow,'mo','/');
        if (args.length>1) {
          CToP.applyTransform(mrow,args[1],0);
        }
      }
      CToP.appendToken(mrow,'mo','\u230B');
      parentNode.appendChild(mrow);
    },

    factorial: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence)  {
      var mrow = CToP.createElement('mrow');
      CToP.applyTransform(mrow,args[0],4);
      CToP.appendToken(mrow,'mo','!');
      parentNode.appendChild(mrow);
    },

    root: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence)  {
      var mr;
      if (firstArg.nodeName === 'root' && (qualifiers.length === 0 || (qualifiers[0].nodeName === 'degree' && CToP.getTextContent(qualifiers[0]) === '2'))) {
        mr = CToP.createElement('msqrt');
        for (var i = 0, l = args.length; i<l; i++ ) {
          CToP.applyTransform(mr,args[i],0);
        }
      } else {
        mr = CToP.createElement('mroot');
        CToP.applyTransform(mr,args[0],0);
        var arg = (firstArg.nodeName === 'root') ? qualifiers[0].childNodes[0] : args[1];
        CToP.applyTransform(mr,arg,0);
      }
      parentNode.appendChild(mr);
    },

    diff: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence)  {
      if (bvars.length) {	// d/dx form
        var outNode;
        var mfrac = CToP.createElement('mfrac');
        var toprow = CToP.createElement('mrow');
        var bottomrow = CToP.createElement('mrow');
        mfrac.appendChild(toprow);
        mfrac.appendChild(bottomrow);

        var bvar, degreeNode, msup, mrow;

        var d = CToP.createElement('mi');
        CToP.setTextContent(d,'d');

        var children = CToP.getChildren(bvars[0]);
        for (var j = 0, l = children.length; j<l; j++ ) {
          if (children[j].nodeName === 'degree') {
            var childNode = CToP.getChildren(children[j])[0];
            if (CToP.getTextContent(childNode) != '1') {
              degreeNode = childNode;
              msup = CToP.createElement('msup');
              msup.appendChild(d);
              d = msup;
              CToP.applyTransform(d,degreeNode,0);
            }
          } else {
            bvar = children[j];
          }
        }
        toprow.appendChild(d);

        if (args.length) {
          switch(args[0].nodeName) {
            case 'apply':
            case 'bind':
            case 'reln':
              mrow = CToP.createElement('mrow');
              mrow.appendChild(mfrac);
              CToP.applyTransform(mrow,args[0],3);
              outNode = mrow;
              break;
            default:
              CToP.applyTransform(toprow,args[0],0);
              outNode = mfrac;
          }
        }

        CToP.appendToken(bottomrow,'mi','d');

        if (degreeNode) {
          var msup2 = CToP.createElement('msup');
          CToP.applyTransform(msup2,bvar,0);
          CToP.applyTransform(msup2,degreeNode,0);
          bottomrow.appendChild(msup2);
        } else {
          CToP.applyTransform(bottomrow,bvar,0);
        }


        parentNode.appendChild(outNode);
      } else {	// f' form
        msup = CToP.createElement('msup');
        mrow = CToP.createElement('mrow');
        msup.appendChild(mrow);
        CToP.applyTransform(mrow,args[0],0); 
        CToP.appendToken(msup,'mo','\u2032'); // tick
        parentNode.appendChild(msup);
      }
    },

    partialdiff: function(parentNode,contentMMLNode,firstArg,args,bvars,qualifiers,precedence)  {
      var msup, msub, mrow;

      var mfrac = CToP.createElement('mfrac');
      var toprow = CToP.createElement('mrow');
      var bottomrow = CToP.createElement('mrow');
      mfrac.appendChild(toprow);
      mfrac.appendChild(bottomrow);

      var differendNode, degree, children;

      if (bvars.length === 0 && args.length === 2 && args[0].nodeName === 'list') {
        if (args[1].nodeName === 'lambda') {	// `d^(n+m)/(dx^n dy^m) f` form, through a lambda
          degree = CToP.getChildren(args[0]).length;
          if (degree != 1) {
            msup = CToP.createElement('msup');
            CToP.appendToken(msup,'mo','\u2202');	// curly d
            CToP.appendToken(msup,'mn',degree);
            toprow.appendChild(msup);
          } else {
            CToP.appendToken(toprow,'mo','\u2202');
          }

          children = CToP.getChildren(args[1]);

          differendNode = children[children.length - 1];	// thing being differentiated

          var bvarNames = [];
          var lambdaChildren = CToP.getChildren(args[1]);	// names of bound variables
          var lambdaSequence = CToP.getChildren(args[0]);	// indices of bound variable names, in order
          for (var i = 0, l = lambdaChildren.length; i<l; i++ ) {
            if (lambdaChildren[i].nodeName === 'bvar') {
              bvarNames.push(CToP.getChildren(lambdaChildren[i])[0]);
            }
          }

          var lastN = null;
          degree = 0;
          function addDiff(n,degree) {
            CToP.appendToken(bottomrow,'mo','\u2202');
            var bvar = bvarNames[n];
            if (degree>1) {
              var msup = CToP.createElement('msup');
              CToP.applyTransform(msup,bvar,0);
              CToP.appendToken(msup,'mn',degree);
              bottomrow.appendChild(msup);
            } else {
              CToP.applyTransform(bottomrow,bvar,0);
            }
          }
          for (i = 0, l = lambdaSequence.length; i<l; i++ ) {
            var n = Number(CToP.getTextContent(lambdaSequence[i]))-1;
            if (lastN !== null && n != lastN) {
              addDiff(lastN,degree);
              degree = 0;
            }
            lastN = n;
            degree += 1;
          }
          if (lastN) {
            addDiff(lastN,degree);
          }
        } else {	// `D_i_j f` form
          mrow = CToP.createElement('mrow');
          msub = CToP.createElement('msub');
          CToP.appendToken(msub,'mi','D');
          var bvar = CToP.getChildren(args[0]);
          msub.appendChild(CToP.createmfenced(bvar,'',''));
          mrow.appendChild(msub);
          CToP.applyTransform(mrow,args[1],0);
          parentNode.appendChild(mrow);
          return;
        }
      } else {	// `d^(n+m)/(dx^n dy^m) f` form, with bvars
        msup = CToP.createElement('msup');
        toprow.appendChild(msup);
        CToP.appendToken(msup,'mo','\u2202');

        var degreeRow = CToP.createElement('mrow');
        msup.appendChild(degreeRow);

        var qualifier;

        if (qualifiers.length && qualifiers[0].nodeName === 'degree' && CToP.getChildren(qualifiers[0]).length) {
          qualifier = CToP.getChildren(qualifiers[0])[0];
          CToP.applyTransform(degreeRow,qualifier,0);
        } else {
          degree = 0;
          var hadFirst = false;
          for (i = 0, l = bvars.length; i<l; i++ ) {
            children = CToP.getChildren(bvars[i]);
            if (children.length === 2) {
              for (var j = 0;j<2;j++) {
                if (children[j].nodeName === 'degree') {
                  if (/^\s*\d+\s*$/.test(CToP.getTextContent(children[j]))) {
                    degree += Number(CToP.getTextContent(children[j]));
                  } else {
                    if (hadFirst) {
                      CToP.appendToken(degreeRow,'mo','+');
                    }
                    hadFirst = true;
                    CToP.applyTransform(degreeRow,CToP.getChildren(children[j])[0],0);
                  }
                }
              }
            } else {
              degree++;
            }
          }
          if (degree>0) {
            if (hadFirst) {
              CToP.appendToken(degreeRow,'mo','+');
            }   
            CToP.appendToken(degreeRow,'mn',degree);
          }
        }

        if (args.length) {
          differendNode = args[0];
        }

        for (i = 0, l = bvars.length; i<l; i++ ) {
          CToP.appendToken(bottomrow,'mo','\u2202');
          children = CToP.getChildren(bvars[i]);

          if (children.length === 2) {
            for (j = 0;j<2;j++) {
              if (children[j].nodeName === 'degree') {
                var msup2 = CToP.createElement('msup');
                CToP.applyTransform(msup2,children[1-j],0);
                var bvarDegreeNode = CToP.getChildren(children[j])[0];
                CToP.applyTransform(msup2,bvarDegreeNode,0);
                bottomrow.appendChild(msup2);
              }
            }
          } else if (children.length === 1) {
            CToP.applyTransform(bottomrow,children[0],0);
          }
        }
      }
      if (differendNode) {
        switch(differendNode.nodeName) {
          case 'apply':
          case 'bind':
          case 'reln':
            mrow = CToP.createElement('mrow');
            mrow.appendChild(mfrac);
            CToP.applyTransform(mrow,differendNode,3);
            outNode = mrow;
            break;
          default:
            CToP.applyTransform(toprow,differendNode,0);
            outNode = mfrac;
        }
      } else {
        outNode = mfrac;
      }
      parentNode.appendChild(outNode);
    }
  };
  CToP.applyTokens.size = CToP.applyTokens.card;

  return CToP;
})(MathJax.Hub);


MathJax.Hub.Register.StartupHook("MathML Jax Ready",function () {

  var MATHML = MathJax.InputJax.MathML;

  var CToP = MathJax.Extension["MathML/content-mathml"];
  CToP.mbase = MathJax.ElementJax.mml.mbase;
  CToP.MML = MathJax.ElementJax.mml;

  MATHML.DOMfilterHooks.Add(function (data) {
    data.math = CToP.transformElement(data.math);
  });

  MathJax.Hub.Startup.signal.Post("MathML/content-mathml Ready");
});

MathJax.Ajax.loadComplete("[MathJax]/extensions/MathML/content-mathml.js");

