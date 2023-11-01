function xmlparser_mds() { "use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var r,n=_getPrototypeOf(t);if(e){var i=_getPrototypeOf(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ChipSoft=window.ChipSoft;!function(t){!function(t){function e(t){return"\t"===t||" "===t||"\r"===t||"\n"===t}!function(t){t[t.Comment=1]="Comment",t[t.CDATA=2]="CDATA",t[t.Element=3]="Element",t[t.Text=4]="Text"}(t.XmlNodeType||(t.XmlNodeType={}));var r=_createClass((function t(){_classCallCheck(this,t)}));t.XmlNode=r;var n=function(t){_inherits(r,t);var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),(t=e.apply(this,arguments)).text="",t}return _createClass(r,[{key:"nodeType",get:function(){return 1}}]),r}(r);t.XmlComment=n;var i=function(t){_inherits(r,t);var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),(t=e.apply(this,arguments)).text="",t}return _createClass(r,[{key:"nodeType",get:function(){return 2}}]),r}(r);t.XmlCData=i;var a=function(t){_inherits(r,t);var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),(t=e.apply(this,arguments)).name="",t.children=[],t.attributes=[],t.text="",t}return _createClass(r,[{key:"nodeType",get:function(){return 3}}]),r}(r);t.XmlElement=a;var o=function(t){_inherits(r,t);var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),(t=e.apply(this,arguments)).text="",t}return _createClass(r,[{key:"nodeType",get:function(){return 4}}]),r}(r);t.XmlText=o;var u=_createClass((function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];_classCallCheck(this,t),this.key="",this.value="",this.key=e,this.value=r,this.singleQuoted=n}));t.XmlAttribute=u;var l=_createClass((function t(){_classCallCheck(this,t),this.isFirst=!0,this.docType=null,this.currentPath=[],this.root=null}));function s(t){for(var e=t.root,r=1;r<t.currentPath.length;r++){for(var n=t.currentPath[r],i=null,o=e.children.length-1;o>=0;o--){var u=e.children[o];if(u instanceof a&&u.name===n){i=u;break}}if(!i)return!1;e=i}if(e&&e.attributes)for(var l=0;l<e.attributes.length;l++)if("xml:space"===e.attributes[l].key&&"preserve"===e.attributes[l].value)return!0;return!1}function f(t,e){for(var r=t.root,n=1;n<t.currentPath.length;n++){for(var i=t.currentPath[n],o=null,u=r.children.length-1;u>=0;u--){var l=r.children[u];if(l instanceof a&&l.name===i){o=l;break}}if(!o)return!1;r=o}return r.children.push(e),!0}function c(t,r){if("<"===t[0]&&"?"===t[1])return!!r.isFirst&&(r.docType=t,!0);if(t.length>=12&&"<"===t[0]&&"!"===t[1]&&"["===t[2]&&"C"===t[3]&&"D"===t[4]&&"A"===t[5]&&"T"===t[6]&&"A"===t[7]&&"["===t[8]&&"]"===t[t.length-3]&&"]"===t[t.length-2]&&">"===t[t.length-1]){if(!r.root)return!1;var o=new i;return o.text=t.substring(9,t.length-3),!!f(r,o)}if(t.length>=7&&"<"===t[0]&&"!"===t[1]&&"-"===t[2]&&"-"===t[3]&&"-"===t[t.length-3]&&"-"===t[t.length-2]&&">"===t[t.length-1]){if(!r.root)return!1;var l=new n;return l.text=t.substring(4,t.length-3),!!f(r,l)}var s,c=!1;"/"===t[1]?(c=!0,s=2):s=1;for(var h=null,p=s,v=-1,d=t.length;s<d;s++){var y=t.charAt(s);if(e(y)||">"===y||"/"===y){h=t.substring(p,s),v=s;break}}if(!h)return!1;if(c)return"/"!==t[t.length-2]&&(!!r.root&&(0!==r.currentPath.length&&(t.length===h.length+3&&(r.currentPath[r.currentPath.length-1]===h&&(r.currentPath.pop(),!0)))));var g=function(t,r,n){var i=new a;i.name=r;var o=t.length-1;"/"===t[o-1]&&o--;for(var l=-1,s=-1,f="",c=!1,h=!1,p=n;p<o;p++){var v=t.charAt(p);if(-1===l&&-1===s)e(v)||(l=p);else if(-1!==l&&-1===s)if(e(v)){f=t.substring(l,p);var d=new u(f,"");i.attributes.push(d),l=-1,f=""}else"="===v&&(s=p+1,f=t.substring(l,p),"'"===t[s]?(h=!0,s++,p++):'"'===t[s]&&(c=!0,s++,p++));else if(-1!==l&&-1!==s)if(h){if("'"===v){var y=new u(f,t.substring(s,p));i.attributes.push(y),l=-1,s=-1,f="",h=!1}}else if(c){if('"'===v){var g=new u(f,t.substring(s,p));i.attributes.push(g),l=-1,s=-1,f="",c=!1}}else if(e(v)){var b=new u(f,t.substring(s,p));i.attributes.push(b),l=-1,s=-1,f=""}}return-1===l&&-1===s&&i}(t,h,v);if(!g)return!1;if(r.root){if(!f(r,g))return!1}else r.root=g;return"/"===t[t.length-2]||r.currentPath.push(h),!0}var h=_createClass((function t(){_classCallCheck(this,t)}));t.XmlDocument=h,t.parseXml=function(t){if(!t){var e=new h;return e.isValid=!1,e}for(var r=new l,n=-1,i=0,a=t.length;i<a;i++){if("<"===t.charAt(i)){var u=-1;if(!(i+1<a)){var p=new h;return p.isValid=!1,p}if("!"===t.charAt(i+1))i+8<a&&"["===t.charAt(i+2)&&"C"===t.charAt(i+3)&&"D"===t.charAt(i+4)&&"A"===t.charAt(i+5)&&"T"===t.charAt(i+6)&&"A"===t.charAt(i+7)&&"["===t.charAt(i+8)?(u=t.indexOf("]]>",i+9))>=0&&(u+=2):i+3<a&&"-"===t.charAt(i+2)&&"-"===t.charAt(i+3)&&(u=t.indexOf("--\x3e",i+4))>=0&&(u+=2);else{u=-1;for(var v=!1,d=!1,y=i+1;y<a;y++){var g=t.charAt(y);if(v||d)v&&"'"===g?v=!1:d&&'"'===g&&(d=!1);else{if(">"===g){u=y;break}"'"===g?v=!0:'"'===g&&(d=!0)}}}if(u<0){var b=new h;return b.isValid=!1,b}if(n>=0){var m=t.substring(n,i);if(/\S/.test(m)||s(r)){if(!r.root){var _=new h;return _.isValid=!1,_}var C=new o;if(C.text=m,!f(r,C)){var w=new h;return w.isValid=!1,w}}}if(!c(t.substring(i,u+1),r)){var x=new h;return x.isValid=!1,x}r.isFirst=!1,i=u,n=u+1}}if(!r.root){var P=new h;return P.isValid=!1,P}if(0!==r.currentPath.length){var k=new h;return k.isValid=!1,k}var A=new h;return A.isValid=!0,A.xml=r.root,A.docType=r.docType,A};var p=_createClass((function t(){_classCallCheck(this,t),this.text="",this.depth=0}));function v(t,e,r){if(t instanceof o)e.text+=t.text;else{if(r)for(var u=0;u<e.depth;u++)for(var l=0;l<4;l++)e.text+=" ";if(t instanceof i)return e.text+="<![CDATA["+t.text+"]]>",void(r&&(e.text+="\r\n"));if(t instanceof n)return e.text+="\x3c!--"+t.text+"--\x3e",void(r&&(e.text+="\r\n"));if(!(t instanceof a))throw new Error("Unexpected element type");if(0===t.children.length){e.text+="<"+t.name;for(var s=0;s<t.attributes.length;s++){var f=t.attributes[s],c=f.singleQuoted?"'":'"';e.text+=" "+f.key+"="+c+f.value+c}e.text+=" />",r&&(e.text+="\r\n")}else{e.text+="<"+t.name;for(var h=0;h<t.attributes.length;h++){var p=t.attributes[h],d=p.singleQuoted?"'":'"';e.text+=" "+p.key+"="+d+p.value+d}e.text+=">";var y=function(t){for(var e=0;e<t.children.length;e++)if(t.children[e]instanceof o)return!0;return!1}(t);!y&&r&&(e.text+="\r\n"),e.depth++;for(var g=0;g<t.children.length;g++){v(t.children[g],e,!y&&r)}if(e.depth--,!y&&r)for(var b=0;b<e.depth;b++)for(var m=0;m<4;m++)e.text+=" ";e.text+="</"+t.name+">",r&&(e.text+="\r\n")}}}t.toXml=function(t){if(!t||!t.isValid)throw new Error("invalid xml");var e=new p;return t.docType&&(e.text+=t.docType+"\r\n"),v(t.xml,e,!0),e.text};var d=_createClass((function t(){_classCallCheck(this,t),this.items=[]}));function y(t,e,r){for(var n=r.parts[e],i=null,o=0;o<t.children.length;o++){var u=t.children[o];u instanceof a&&u.name===n&&(i=u,e===r.parts.length-1?r.items.push(i):y(i,e+1,r))}}t.getElements=function(t,e){if("/"===e)throw new Error("invalid path: "+e);if(!e||!("/"===e[0]||e.length>2&&"."===e[0]&&"/"===e[1]))throw new Error("invalid path: "+e);if("/"===e[e.length-1])throw new Error("invalid path: "+e);var r=new d;if("/"===e[0]){if(r.parts=e.substring(1).split("/"),t.name!==r.parts[0])return[];if(1===r.parts.length)return[t];y(t,1,r)}else r.parts=e.substring(2).split("/"),y(t,0,r);return r.items},t.getAttributeValueNS=function(t,e,r,n){if(!n)throw new Error("no namespace supplied");for(var i=[],a=0;a<t.attributes.length;a++){var o=t.attributes[a];if(o.value===n){var u=o.key.split(":");2===u.length&&i.push(u[1])}}for(var l=0;l<i.length;l++)for(var s=i[l]+":"+r,f=0;f<e.attributes.length;f++){var c=e.attributes[f];if(c.key===s)return c.value}return null},t.getAttributeValue=function(t,e){for(var r=0;r<t.attributes.length;r++){var n=t.attributes[r];if(n.key===e)return n.value}return null},t.updateXmlAttribute=function(t,e,r){for(var n=0;n<t.attributes.length;n++){var i=t.attributes[n];if(i.key===e)return void(i.value=r)}t.attributes.push(new u(e,r))},t.updateOrRemoveAttribute=function(t,e,r){for(var n=!r,i=0;i<t.attributes.length;i++){var a=t.attributes[i];if(a.key===e)return n?void t.attributes.splice(i,1):void(a.value=r)}n||t.attributes.push(new u(e,r))},t.getXmlChildElementIndexForLogicalIndex=function(t,e,r){for(var n=-1,i=0;i<t.children.length;i++){var o=t.children[i];if(o instanceof a&&o.name===e&&++n===r)return i}},t.getFirstXmlChildElementIndex=function(t,e){for(var r=0;r<t.children.length;r++){var n=t.children[r];if(n instanceof a&&n.name===e)return r}return-1},t.getLastXmlChildElementIndex=function(t,e){for(var r=t.children.length-1;r>=0;r--){var n=t.children[r];if(n instanceof a&&n.name===e)return r}return-1}}(t.XmlParser||(t.XmlParser={}))}(ChipSoft||(ChipSoft=window.ChipSoft={})); }xmlparser_mds();