(function (options,name) {
		if (typeof SCRIMBA_LOADER == 'undefined') {
			window.SCRIMBA_LOADER = new (window.SCRIMBA_PackageLoader)(options);
		};
		return window.SCRIMBA_LOADER.loadVerbose(("/" + name));
	})({"files":{"index.js":"\"use strict\";\n\nvar _react = require(\"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = require(\"react-dom\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _App = require(\"./App\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById(\"root\"));","App.js":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// function App() {\n//     return (\n//         <div>\n//             <h1>Code goes here</h1>\n//         </div>\n//     )\n// }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App(props) {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n        _this.state = {\n            greeting: \"Hello World\"\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                \"div\",\n                null,\n                _react2.default.createElement(\n                    \"h1\",\n                    null,\n                    this.stategreeting\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\nexports.default = App;"},"sourceMapping":{"index.js":{"version":3,"sources":["/index.js"],"names":["render","document","getElementById"],"mappings":";;AAAA;;;;AACA;;;;AAEA;;;;;;AAEA,mBAASA,MAAT,CAAgB,kDAAhB,EAAyBC,SAASC,cAAT,CAAwB,MAAxB,CAAzB","file":"unknown","sourcesContent":[]},"App.js":{"version":3,"sources":["/App.js"],"names":["App","props","state","greeting","stategreeting","Component"],"mappings":";;;;;;;;AAAA;;;;;;;;;;;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;;IAEMA,G;;;AACF,iBAAaC,KAAb,EAAoB;AAAA;;AAAA;;AAEhB,cAAKC,KAAL,GAAa;AACTC,sBAAU;AADD,SAAb;AAFgB;AAKnB;;;;iCACS;AACN,mBACI;AAAA;AAAA;AAAK;AAAA;AAAA;AAAK,yBAAKC;AAAV;AAAL,aADJ;AAGH;;;;EAXa,gBAAMC,S;;kBAcTL,G","file":"unknown","sourcesContent":[]}},"structure":[{"path":"/node_modules/react","spec":"react@16.4.0"},{"path":"/node_modules/react-dom","spec":"react-dom@16.4.0"},{"path":"/node_modules/fbjs","spec":"fbjs@0.8.16"},{"path":"/node_modules/loose-envify","spec":"loose-envify@1.3.1"},{"path":"/node_modules/object-assign","spec":"object-assign@4.1.1"},{"path":"/node_modules/prop-types","spec":"prop-types@15.6.1"},{"path":"/node_modules/core-js","spec":"core-js@1.2.7"},{"path":"/node_modules/isomorphic-fetch","spec":"isomorphic-fetch@2.2.1"},{"path":"/node_modules/js-tokens","spec":"js-tokens@3.0.2"},{"path":"/node_modules/promise","spec":"promise@7.3.1"},{"path":"/node_modules/setimmediate","spec":"setimmediate@1.0.5"},{"path":"/node_modules/ua-parser-js","spec":"ua-parser-js@0.7.18"},{"path":"/node_modules/asap","spec":"asap@2.0.6"},{"path":"/node_modules/node-fetch","spec":"node-fetch@1.7.3"},{"path":"/node_modules/whatwg-fetch","spec":"whatwg-fetch@2.0.4"},{"path":"/node_modules/encoding","spec":"encoding@0.1.12"},{"path":"/node_modules/is-stream","spec":"is-stream@1.1.0"},{"path":"/node_modules/iconv-lite","spec":"iconv-lite@0.4.23"},{"path":"/node_modules/safer-buffer","spec":"safer-buffer@2.1.2"}],"id":"coc53-22cd7d0d3319"}, "/index")