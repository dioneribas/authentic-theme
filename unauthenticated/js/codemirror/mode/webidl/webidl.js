(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(s){function q(y){return new RegExp("^(("+y.join(")|(")+"))\\b")}var u=["Clamp","Constructor","EnforceRange","Exposed","ImplicitThis","Global","PrimaryGlobal","LegacyArrayClass","LegacyUnenumerableNamedProperties","LenientThis","NamedConstructor","NewObject","NoInterfaceObject","OverrideBuiltins","PutForwards","Replaceable","SameObject","TreatNonObjectAsNull","TreatNullAs","EmptyString","Unforgeable","Unscopeable"];var c=q(u);var w=["unsigned","short","long","unrestricted","float","double","boolean","byte","octet","Promise","ArrayBuffer","DataView","Int8Array","Int16Array","Int32Array","Uint8Array","Uint16Array","Uint32Array","Uint8ClampedArray","Float32Array","Float64Array","ByteString","DOMString","USVString","sequence","object","RegExp","Error","DOMException","FrozenArray","any","void"];var o=q(w);var l=["attribute","callback","const","deleter","dictionary","enum","getter","implements","inherit","interface","iterable","legacycaller","maplike","partial","required","serializer","setlike","setter","static","stringifier","typedef","optional","readonly","or"];var k=q(l);var v=["true","false","Infinity","NaN","null"];var b=q(v);s.registerHelper("hintWords","webidl",u.concat(w).concat(l).concat(v));var m=["callback","dictionary","enum","interface"];var f=q(m);var r=["typedef"];var x=q(r);var p=/^[:<=>?]/;var n=/^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/;var h=/^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/;var e=/^_?[A-Za-z][0-9A-Z_a-z-]*/;var t=/^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/;var d=/^"[^"]*"/;var i=/^\/\*.*?\*\//;var j=/^\/\*.*/;var a=/^.*?\*\//;function g(B,A){if(B.eatSpace()){return null}if(A.inComment){if(B.match(a)){A.inComment=false;return"comment"}B.skipToEnd();return"comment"}if(B.match("//")){B.skipToEnd();return"comment"}if(B.match(i)){return"comment"}if(B.match(j)){A.inComment=true;return"comment"}if(B.match(/^-?[0-9\.]/,false)){if(B.match(n)||B.match(h)){return"number"}}if(B.match(d)){return"string"}if(A.startDef&&B.match(e)){return"def"}if(A.endDef&&B.match(t)){A.endDef=false;return"def"}if(B.match(k)){return"keyword"}if(B.match(o)){var y=A.lastToken;var z=(B.match(/^\s*(.+?)\b/,false)||[])[1];if(y===":"||y==="implements"||z==="implements"||z==="="){return"builtin"}else{return"variable-3"}}if(B.match(c)){return"builtin"}if(B.match(b)){return"atom"}if(B.match(e)){return"variable"}if(B.match(p)){return"operator"}B.next();return null}s.defineMode("webidl",function(){return{startState:function(){return{inComment:false,lastToken:"",startDef:false,endDef:false}},token:function(B,z){var y=g(B,z);if(y){var A=B.current();z.lastToken=A;if(y==="keyword"){z.startDef=f.test(A);z.endDef=z.endDef||x.test(A)}else{z.startDef=false}}return y}}});s.defineMIME("text/x-webidl","webidl")});