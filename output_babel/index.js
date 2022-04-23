"use strict";

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.async-iterator.js");

require("core-js/modules/es.symbol.match.js");

require("core-js/modules/es.symbol.replace.js");

require("core-js/modules/es.symbol.search.js");

require("core-js/modules/es.symbol.split.js");

require("core-js/modules/es.array.flat.js");

require("core-js/modules/es.array.flat-map.js");

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.array.reduce-right.js");

require("core-js/modules/es.array.reverse.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.array.unscopables.flat.js");

require("core-js/modules/es.array.unscopables.flat-map.js");

require("core-js/modules/es.array-buffer.constructor.js");

require("core-js/modules/es.array-buffer.slice.js");

require("core-js/modules/es.math.hypot.js");

require("core-js/modules/es.number.parse-float.js");

require("core-js/modules/es.number.parse-int.js");

require("core-js/modules/es.number.to-fixed.js");

require("core-js/modules/es.object.assign.js");

require("core-js/modules/es.object.from-entries.js");

require("core-js/modules/es.parse-float.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

require("core-js/modules/es.reflect.set.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.flags.js");

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/es.string.ends-with.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.string.match.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.search.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.starts-with.js");

require("core-js/modules/es.string.trim.js");

require("core-js/modules/es.string.trim-end.js");

require("core-js/modules/es.string.trim-start.js");

require("core-js/modules/es.typed-array.float32-array.js");

require("core-js/modules/es.typed-array.float64-array.js");

require("core-js/modules/es.typed-array.int8-array.js");

require("core-js/modules/es.typed-array.int16-array.js");

require("core-js/modules/es.typed-array.int32-array.js");

require("core-js/modules/es.typed-array.uint8-array.js");

require("core-js/modules/es.typed-array.uint8-clamped-array.js");

require("core-js/modules/es.typed-array.uint16-array.js");

require("core-js/modules/es.typed-array.uint32-array.js");

require("core-js/modules/es.typed-array.from.js");

require("core-js/modules/es.typed-array.of.js");

require("core-js/modules/es.typed-array.set.js");

require("core-js/modules/es.typed-array.sort.js");

require("core-js/modules/es.typed-array.to-locale-string.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.immediate.js");

require("core-js/modules/web.queue-microtask.js");

require("core-js/modules/web.url.js");

require("core-js/modules/web.url.to-json.js");

require("core-js/modules/web.url-search-params.js");

var _home = require("./pages/Home/home");

require("../scss/styles.scss");

require("../scss/custom.scss");

require("../src/pages/AboutUs/aboutUs.scss");

require("../src/pages/Home/home.scss");

require("../src/pages/Instructions/instructions.scss");

require("../src/pages/ContactUs/contactUs.scss");

require("../src/pages/Llegada/llegada.scss");

require("../src/pages/CasaAmigo/casaAmigo.scss");

require("../src/pages/CasaAbierta/casaAbierta.scss");

require("../src/pages/PisoArriba/pisoArriba.scss");

require("../src/pages/PuertaPiso/puertaPiso.scss");

require("../src/pages/Intercepto/intercepto.scss");

require("../src/pages/SigueInvestigando/sigueInvestigando.scss");

require("../src/pages/Failed/failed.scss");

require("../src/pages/EntrarAgujero/entrarAgujero.scss");

require("../src/pages/Final/final.scss");

require("bootstrap");

// Import styles
(0, _home.home)();