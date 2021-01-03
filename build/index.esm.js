function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var react_production_min = createCommonjsModule(function (module, exports) {
var n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy");}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return "function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}var F=E.prototype=new D;F.constructor=E;objectAssign(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return {$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d);}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:objectAssign};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P(a,function(){b++;});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=objectAssign({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return {current:null}};exports.forwardRef=function(a){return {$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return {$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.1";
});

/** @license React v17.0.1
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var react_development = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

var _assign = objectAssign;

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}
});

var react = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = react_production_min;
} else {
  module.exports = react_development;
}
});

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

var classnames = createCommonjsModule(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var countries = {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia, Plurinational State of",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BR: "Brazil",
    IO: "British Indian Ocean Territory",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    CV: "Cape Verde",
    KY: "Cayman Islands",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CO: "Colombia",
    KM: "Comoros",
    CG: "Congo",
    CD: "Democratic Republic of the Congo",
    CK: "Cook Islands",
    CR: "Costa Rica",
    CI: "Côte d'Ivoire",
    HR: "Croatia",
    CU: "Cuba",
    CW: "Curaçao",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FK: "Falkland Islands (Malvinas)",
    FO: "Faroe Islands",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    PF: "French Polynesia",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    HT: "Haiti",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran, Islamic Republic of",
    IQ: "Iraq",
    IE: "Ireland",
    IM: "Isle of Man",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "North Korea",
    KR: "South Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Lao People's Democratic Republic",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao",
    MK: "Republic of Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    MX: "Mexico",
    FM: "Micronesia, Federated States of",
    MD: "Republic of Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    MP: "Northern Mariana Islands",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestinian Territory",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PN: "Pitcairn",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RO: "Romania",
    RU: "Russian",
    RW: "Rwanda",
    KN: "Saint Kitts and Nevis",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SX: "Sint Maarten",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syria",
    TW: "Taiwan, Province of China",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    US: "United States",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela, Bolivarian Republic of",
    VN: "Viet Nam",
    VI: "Virgin Islands",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
};

var countryCodeToPascalCase = function (countryCode) {
    return "" + countryCode.slice(0, 1) + countryCode.charAt(1).toLowerCase();
};

var getCountryCodes = function (countries$1, blacklistCountries) {
    var fullCountryCodes = Object.keys(countries);
    if (!countries$1) {
        return fullCountryCodes;
    }
    var validCountryCodes = countries$1.filter(function (code) { return countries[code]; });
    var filteredCountryCodes = blacklistCountries
        ? fullCountryCodes.filter(function (code) { return !validCountryCodes.includes(code); })
        : validCountryCodes;
    return filteredCountryCodes;
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function SvgAd(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h161.839v335.448z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.792a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M316.022 196.691a4.64 4.64 0 00-4.64-4.64c-.556 0-1.082.114-1.577.294-2.296-2.042-6.457-7.109-2.282-14.264a3.3 3.3 0 002.035.711 3.332 3.332 0 003.332-3.332 3.322 3.322 0 00-2.236-3.133c3.431-1.75 8.324-5.465 8.072-12.412-.359-9.852-8.429-15.29-13.38-13.116.018-.138.042-.274.042-.416a3.286 3.286 0 00-3.286-3.286 3.275 3.275 0 00-2.691 1.409c-.202-.985-.178-2.814 2.112-4.791 4.253-3.673 9.086-12.469.29-18.655-4.871-3.425-14.181-5.066-17.301-.386-1.353 2.029-.268 4.945 1.277 5.6-2.489 1.388-7.211 3.471-10.942 1.843-5.316-2.319-2.246-6.926-1.063-8.989 2.078-3.625.774-9.569-6.186-9.569-4.64 0-6.959 4.64-11.598 4.64-4.639 0-6.959-4.64-11.598-4.64-6.959 0-8.264 5.944-6.186 9.569 1.183 2.062 4.253 6.669-1.063 8.989-3.731 1.629-8.452-.455-10.942-1.843 1.544-.654 2.63-3.57 1.277-5.6-3.119-4.679-12.43-3.039-17.301.386-8.796 6.186-3.962 14.981.29 18.655 2.29 1.977 2.314 3.807 2.112 4.791a3.278 3.278 0 00-2.691-1.409 3.286 3.286 0 00-3.286 3.286c0 .142.024.279.042.416-4.951-2.175-13.022 3.264-13.38 13.116-.253 6.946 4.641 10.661 8.072 12.412a3.323 3.323 0 001.096 6.465c.77 0 1.47-.271 2.035-.711 4.175 7.155.015 12.222-2.282 14.264a4.59 4.59 0 00-1.577-.294 4.64 4.64 0 00-4.64 4.64c0 2.405 1.837 4.36 4.182 4.594-3.198 3.285-6.067 10.525.168 18.749 6.814 8.989 23.052 8.264 30.881 8.554 4.964.184 8.698 2.754 10.771 4.613-1.325.817-2.217 2.269-2.217 3.94 0 2.343 1.743 4.26 4 4.575a4.622 4.622 0 003.926 2.191c1.856 0 3.445-1.097 4.188-2.673 2.45 2.019 4.125 2.866 4.125 2.866s1.675-.846 4.125-2.866a4.63 4.63 0 004.188 2.673 4.622 4.622 0 003.926-2.191c2.257-.315 4-2.232 4-4.575a4.621 4.621 0 00-2.217-3.94c2.072-1.859 5.806-4.43 10.771-4.613 7.829-.29 24.067.435 30.881-8.554 6.234-8.224 3.366-15.465.168-18.749 2.341-.235 4.178-2.189 4.178-4.594z",
    fill: "#DCBE82"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M214.245 137.102v67.273c0 7.687 6.231 13.919 13.919 13.919h18.558c6.959 0 9.279 4.64 9.279 4.64s2.319-4.64 9.279-4.64h18.558c7.687 0 13.919-6.231 13.919-13.919v-67.273a2.319 2.319 0 00-2.319-2.319h-78.871a2.32 2.32 0 00-2.322 2.319z",
    fill: "#D2AA73"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M218.88 139.421h34.796v34.796H218.88zm34.8 74.233c-19.218 0-34.796-15.578-34.796-34.796h34.796v34.796z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.32 213.654v-34.796h34.796c-.001 19.216-15.58 34.796-34.796 34.796zm-.003-74.233h4.971v34.796h-4.971z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M263.293 139.421h4.971v34.796h-4.971z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M268.259 139.421h4.971v34.796h-4.971z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M273.235 139.421h4.971v34.796h-4.971z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M278.201 139.421h4.971v34.796h-4.971zm9.942 0h4.971v34.796h-4.971z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M283.177 139.421h4.971v34.796h-4.971zm-52.7 39.437h3.866v34.796h-3.866z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M234.35 178.858h3.866v34.796h-3.866zm7.735 0h3.866v34.796h-3.866z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M238.212 178.858h3.866v34.796h-3.866z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M249.809 178.858h3.866v34.796h-3.866z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M245.947 178.858h3.866v34.796h-3.866z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M222.75 211.884v-33.026h-3.866v25.517c0 3.097 1.533 5.823 3.866 7.509z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M226.617 213.498v-34.641h-3.866v33.026a9.185 9.185 0 003.866 1.615z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M226.617 178.858v34.641c.505.085 1.016.156 1.547.156h2.319v-34.796h-3.866v-.001z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M224.07 172.243a.913.913 0 01-.503-.151c-2.281-1.51-2.414-3.082-2.29-3.884.167-1.084.973-1.983 2.054-2.292 1.028-.289 2.053.014 2.746.819 1.44 1.674 2.927 2.333 4.179 1.87.991-.367 1.582-1.344 1.582-2.074a.913.913 0 111.828 0c0 1.598-1.166 3.191-2.774 3.787-1.175.434-3.538.702-6.2-2.391-.286-.33-.622-.32-.86-.254-.324.093-.683.381-.749.812-.097.63.447 1.388 1.492 2.081a.914.914 0 01-.505 1.677zm24.533 0a.915.915 0 01-.504-1.675c1.045-.693 1.589-1.451 1.492-2.081-.067-.431-.425-.719-.749-.812-.238-.066-.575-.077-.86.254-2.662 3.095-5.026 2.827-6.2 2.391-1.608-.596-2.774-2.19-2.774-3.787a.913.913 0 111.828 0c0 .73.591 1.706 1.582 2.074 1.252.465 2.74-.196 4.179-1.87.693-.809 1.719-1.11 2.746-.819 1.08.309 1.887 1.208 2.054 2.292.124.801-.009 2.374-2.29 3.884a.948.948 0 01-.504.149z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M223.567 173.327a.915.915 0 01-.727-1.466l19.864-26.119c.19-.343.262-.818.344-1.365.153-1.026.345-2.303 1.911-3.245 1.021-.612 2.232-.595 3.245.052 1.118.714 1.777 2.044 1.641 3.309-.082.769-.531 2.172-2.612 2.943a.914.914 0 01-.636-1.712c.607-.225 1.348-.655 1.43-1.425.063-.584-.269-1.229-.808-1.575-.301-.193-.774-.358-1.319-.025-.829.498-.911 1.044-1.047 1.949-.096.641-.205 1.367-.633 2.106l-19.927 26.213a.905.905 0 01-.726.36z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M236.408 144.599l-9.138 10.966 3.655 10.966h10.966l3.655-10.966z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M236.408 143.171l-10.166 12.199 4.024 12.074h12.282l4.024-12.074-10.164-12.199zm-8.111 12.588l7.197-8.636v18.493h-3.911l-3.286-9.857zm12.935 9.858h-3.911v-18.493l7.197 8.636-3.286 9.857z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M284.561 189.844l.138-2.027s1.798-1.29.921-2.488c-.875-1.198-1.889-1.429-4.009-1.152-2.12.277-5.438.231-6.866.322-1.429.093-2.166.875-4.424.231l.599-1.383s-1.059.093-1.705.415c-.352.177-1.198-.968-2.027-.783-.826.183-1.658 1.889-2.95 2.765l.691 1.383s.783-.369 1.383.046c.599.415.783.691 1.798.691l.646.277s-.231 1.474.737 2.166c0 0-1.106 1.429-.968 1.658.138.231 1.059 1.982 1.429 2.995l.83-1.567s-1.245-1.106-1.014-1.245c.231-.138 1.059-.322.921-.691-.138-.369.646.046 1.521.184 0 0 .046 1.383.231 1.567.185.184.461.921.415 1.705-.046.783-.737 1.014-.737 1.014l1.245.369s.322-.461.553-.415c0 0-.093-3.825.415-4.424 0 0 2.995.599 4.377-.138 0 0 .177.223.522.435-.138.321-.255.641-.203.735.116.209.486.185.578-.046.035-.087.089-.266.143-.451.167.055.35.098.559.119-.02.291-.022.559.045.621.174.161.519.024.535-.225.006-.081.002-.234-.002-.398.238-.02.492-.062.772-.145l-1.567 2.581-.783.322 1.014.507.921-.369s.875-2.212 2.304-2.857c0 0 .968 2.304-.231 3.549l1.059.599.507-1.06s-.184-2.073.507-3.41l-.83-1.982z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M267.208 183.258s-.462-.439-.578-1.017c-.116-.578-.255-.833-.764-.994 0 0 .323.37.278.948-.046.578 0 1.365.323 1.619l.741-.556zm4.025 1.631s-.629 2.138-2.477 3.25l-.644-.277s1.973-1.686 2.212-3.134l.909.161zm-3.146-1.122c-.066-.068.81-.323.601-1.017-.209-.694-.209-1.203.209-1.526 0 0 .046.578.37.948.323.37.509 1.295-.023 1.827 0 0-.533.416-1.157-.232zm.1 6.306a.224.224 0 01-.102-.299l.279-.568c.163-.333.055-.747-.266-.932a.696.696 0 00-.973.296l-.29.59a.224.224 0 01-.299.102l-.174.354.566.278-.007.013a.289.289 0 10.519.255l.007-.013.566.278.174-.354zm2.237 3.894l.693.139-.579 1.781-.584-.929zm1.696 1.959l-.424.748h1.665l.003-.379zm8.202-.553v.445h-1.89l.914-.914zm2.995.322l-.933.935h1.964l.029-.335z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M284.561 204.282l.138-2.027s1.798-1.29.921-2.488c-.875-1.198-1.889-1.429-4.009-1.152-2.12.277-5.438.231-6.866.322-1.429.093-2.166.875-4.424.231l.599-1.383s-1.059.093-1.705.415c-.352.177-1.198-.968-2.027-.783-.826.183-1.658 1.889-2.95 2.765l.691 1.383s.783-.369 1.383.046c.599.415.783.691 1.798.691l.646.277s-.231 1.474.737 2.166c0 0-1.106 1.429-.968 1.658.138.231 1.059 1.982 1.429 2.995l.83-1.567s-1.245-1.106-1.014-1.245c.231-.138 1.059-.322.921-.691-.138-.369.646.046 1.521.184 0 0 .046 1.383.231 1.567.185.184.461.921.415 1.705-.046.783-.737 1.014-.737 1.014l1.245.369s.322-.461.553-.415c0 0-.093-3.825.415-4.424 0 0 2.995.599 4.377-.138 0 0 .177.223.522.435-.138.321-.255.641-.203.735.116.209.486.185.578-.046.035-.087.089-.266.143-.451.167.055.35.098.559.119-.02.291-.022.559.045.621.174.161.519.024.535-.225.006-.081.002-.234-.002-.398.238-.02.492-.062.772-.145l-1.567 2.581-.783.322 1.014.507.921-.369s.875-2.212 2.304-2.857c0 0 .968 2.304-.231 3.549l1.059.599.507-1.06s-.184-2.073.507-3.41l-.83-1.982z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M267.208 197.697s-.462-.439-.578-1.017c-.116-.578-.255-.833-.764-.994 0 0 .323.37.278.948-.046.578 0 1.365.323 1.619l.741-.556zm4.025 1.631s-.629 2.138-2.477 3.25l-.646-.277s1.973-1.686 2.212-3.134l.911.161zm-3.146-1.122c-.066-.068.81-.323.601-1.017-.209-.694-.209-1.203.209-1.526 0 0 .046.578.37.948.323.37.509 1.295-.023 1.827 0 0-.533.415-1.157-.232zm.1 6.306a.224.224 0 01-.102-.299l.279-.568c.163-.333.055-.747-.266-.932a.696.696 0 00-.973.296l-.29.59a.224.224 0 01-.299.102l-.174.354.566.278-.007.013a.289.289 0 10.519.255l.007-.013.566.278.174-.354zm2.237 3.894l.693.139-.579 1.781-.584-.929zm1.696 1.959l-.424.748h1.665l.003-.38zm8.202-.553v.445h-1.89l.914-.914zm2.995.322l-.933.935h1.964l.029-.336z",
    fill: "#4173CD"
  })));
}

function SvgAe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H158.897V.276h344.276a8.829 8.829 0 018.828 8.828v102.988z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H158.897V223.908H512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M158.897 112.088H512V223.9H158.897z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M158.897 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h150.069v335.449z",
    fill: "#FF4B55"
  })));
}

function SvgAf(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h161.839v335.448z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.792a8.828 8.828 0 01-8.828 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M279.037 185.308h-46.075l2.56-5.12h40.955zm0-40.957h-46.075l2.56 5.12h40.955z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M268.798 146.911h-25.597l5.12-5.119h15.358zm-33.279 25.602h7.679v5.12h-7.679zm0-7.68h7.679v5.12h-7.679zm0-12.8h7.679v5.12h-7.679zm0 7.68h7.679v2.56h-7.679zm33.28 12.8h7.679v5.12h-7.679zm0-7.68h7.679v5.12h-7.679zm0-12.8h7.679v5.12h-7.679zm0 7.68h7.679v2.56h-7.679zm-30.72-28.16h5.12v10.239h-5.12zm5.122-2.56h-5.12v-2.56a2.56 2.56 0 115.12 0v2.56zm25.598 2.56h5.12v10.239h-5.12zm5.119-2.56h-5.12v-2.56a2.56 2.56 0 115.12 0v2.56zm-17.919 23.038c-5.655 0-10.239 4.584-10.239 10.239v15.359h20.478V162.27c0-5.655-4.583-10.239-10.239-10.239z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M239.053 168.157l-13.937-16.259c.09-.263.167-.533.167-.826a2.56 2.56 0 10-2.56 2.56c.154 0 .288-.062.434-.087l1.442 1.683-6.996 16.323 7.679 7.679 6.631-15.47 5.197 6.063 1.943-1.666zm-12.453 5.347l-6.127-6.127 2.764-6.451 6.127 6.127-2.764 6.451zm48.353-3.683l5.197-6.063 6.631 15.47 7.679-7.679-6.996-16.323 1.442-1.683c.147.026.28.087.434.087a2.56 2.56 0 10-2.56-2.56c0 .294.076.564.167.826l-13.937 16.259 1.943 1.666zm7.745-2.768l6.127-6.127 2.764 6.451-6.127 6.127-2.764-6.451zm-23.801-40.174c-.804-.237-1.522-.676-1.976-1.38a17.129 17.129 0 01-.921-1.625 17.129 17.129 0 01-.921 1.625c-.455.705-1.172 1.144-1.976 1.38-4.241 1.249-7.342 5.148-7.342 9.793 0 .889.149 1.737.362 2.56h19.754c.213-.823.362-1.671.362-2.56-.001-4.645-3.101-8.544-7.342-9.793zm-61.558 37.65a59.06 59.06 0 01-.214-4.819c0-3.288.298-6.522.826-9.695a47.353 47.353 0 012.314 1.704 56.462 56.462 0 00-.581 7.991c0 1.892.097 3.763.28 5.608l5.411 1.625c-.338-2.37-.572-4.772-.572-7.233 0-1.224.073-2.433.17-3.638 2.826 3.134 5.056 6.92 5.056 11.104 0 .107 8.213-12.159-6.719-25.704l-.107 5.759-8.6-.09a1.598 1.598 0 00-1.592 1.305 64.303 64.303 0 00-1.006 11.264c0 1.087.029 2.167.082 3.241l5.252 1.578z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M220.052 113.099a2.559 2.559 0 10-3.13-4.05c-11.585 8.947-19.535 21.239-22.978 35.008l5.276.068c3.321-12.186 10.505-23.049 20.832-31.026z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M216.623 119.484c-5.567 5.452-9.781 11.869-12.648 18.839a28.706 28.706 0 013.957 3.922c2.58-7.107 6.689-13.632 12.274-19.101a2.559 2.559 0 00.038-3.619 2.558 2.558 0 00-3.621-.041zm-8.896 73.786a58.983 58.983 0 01-8.498-18.116l2.976 1.094a56.543 56.543 0 008.292 16.516l5.65-1.034a51.606 51.606 0 01-7.727-13.198l3.34 1.227a48.827 48.827 0 007.255 11.447l5.879-1.077c-2.312-2.36-4.334-5.017-6.076-7.883l-3.406-6.812a8.525 8.525 0 00-5.178-4.355l-8.058-2.422-1.863-.559-2.682-.807-5.335-1.603-2.848-.856 1.762 5.288a5.206 5.206 0 002.188 2.766 63.69 63.69 0 008.8 21.399l5.529-1.015zm101.067-46.039l-.107-5.759c-14.932 13.545-6.719 25.811-6.719 25.704 0-4.184 2.23-7.97 5.056-11.104.097 1.205.17 2.415.17 3.638 0 2.462-.234 4.864-.572 7.233l5.411-1.625a56.79 56.79 0 00.28-5.608c0-2.701-.206-5.367-.582-7.991a48.52 48.52 0 012.314-1.704c.529 3.172.826 6.408.826 9.695a59.08 59.08 0 01-.214 4.819l5.251-1.578a64.52 64.52 0 00.082-3.241 64.4 64.4 0 00-1.006-11.264 1.598 1.598 0 00-1.592-1.305l-8.598.09z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M312.779 144.126l5.276-.068c-3.444-13.769-11.393-26.061-22.978-35.008a2.56 2.56 0 00-3.13 4.05c10.327 7.976 17.511 18.839 20.832 31.026z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M308.025 138.323c-2.868-6.97-7.081-13.387-12.648-18.839a2.556 2.556 0 00-3.619.04 2.558 2.558 0 00.038 3.619c5.585 5.469 9.694 11.993 12.274 19.101a28.569 28.569 0 013.955-3.921zm11.68 27.362l-5.335 1.603-2.682.807-1.863.559-8.058 2.422a8.528 8.528 0 00-5.178 4.355l-3.406 6.812c-1.741 2.866-3.764 5.523-6.076 7.883l5.879 1.077a48.774 48.774 0 007.255-11.447l3.34-1.227a51.647 51.647 0 01-7.727 13.198l5.65 1.034a56.506 56.506 0 008.292-16.516l2.976-1.094a58.972 58.972 0 01-8.498 18.116l5.529 1.012a63.736 63.736 0 008.8-21.399 5.214 5.214 0 002.188-2.766l1.762-5.288-2.848.859zm-37.028 28.301l-.132.117c-7.447 5.748-16.696 9.122-26.544 9.122-9.848 0-19.097-3.374-26.544-9.122l-.132-.117a4.082 4.082 0 00-3.828-1.255l-25.81 5.375 5.727 5.02a7.582 7.582 0 005.457 1.854 64.535 64.535 0 0015.723 11.522l-1.677 3.095a64.884 64.884 0 0031.084 7.887 64.887 64.887 0 0031.084-7.887l-1.677-3.095a64.561 64.561 0 0015.723-11.522 7.588 7.588 0 005.458-1.854l5.727-5.02-25.81-5.375a4.085 4.085 0 00-3.829 1.255zm-53.637 17.997c-4.64-2.414-8.888-5.463-12.711-8.97l2.485-1.185c3.471 3.072 7.289 5.762 11.438 7.915l-1.212 2.24zm66.629-8.968c-3.822 3.506-8.071 6.554-12.711 8.97l-1.213-2.239c4.149-2.153 7.966-4.843 11.438-7.915l2.486 1.184zm-39.67 7.889c-12.192 0-23.363-4.326-32.159-11.473l2.554-1.218c8.305 6.397 18.625 10.131 29.603 10.131 10.978 0 21.299-3.734 29.603-10.131l2.554 1.218c-8.79 7.149-19.963 11.473-32.155 11.473z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M227.911 190.358c1.099.93 2.239 1.81 3.427 2.628h49.322a43.733 43.733 0 003.427-2.628l-2.49-2.49h-51.194l-2.492 2.49z"
  }))));
}

function SvgAg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H8.828A8.829 8.829 0 000 9.104v317.792a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828V9.104a8.83 8.83 0 00-8.829-8.828z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M255.999 17.931l11.195 58.482 32.721-49.746-12.037 58.314 49.268-33.438-33.437 49.269 58.314-12.038-49.747 32.722 58.482 11.194-58.482 11.194 49.747 32.722-58.314-12.038 33.437 49.268-49.268-33.437 12.037 58.314-32.721-49.746-11.195 58.481-11.193-58.481-32.723 49.746 12.039-58.314-49.269 33.437 33.438-49.268-58.314 12.038 49.746-32.722-58.482-11.194 58.482-11.194-49.746-32.722 58.314 12.038-33.438-49.269 49.269 33.438-12.039-58.314 32.723 49.746z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 9.104v317.792a8.829 8.829 0 008.828 8.828H256L2.298 3.289C.91 4.848 0 6.852 0 9.104z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.999 335.724h247.172a8.829 8.829 0 008.828-8.828V9.104c0-2.252-.91-4.256-2.298-5.816L255.999 335.724z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#4173CD",
    d: "M154.947 203.31h202.105l53.894-70.62H101.052z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M154.947 203.31l101.052 132.414L357.052 203.31z"
  })));
}

function SvgAi(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.333l-81.77 53.573V.276h-44.138v53.573L24.161.276H8.828A8.829 8.829 0 000 9.104v7.002l70.155 45.963H0v44.138h70.155L0 152.171v7.001A8.829 8.829 0 008.828 168h15.333l81.77-53.573V168h44.138v-53.573L231.838 168h15.333a8.829 8.829 0 008.828-8.828v-7.002l-70.154-45.963h70.154V62.069h-70.155l70.155-45.963V9.104a8.827 8.827 0 00-8.827-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M255.999 70.897H141.241V.276h-26.483v70.621H0v26.482h114.758V168h26.483V97.379h114.758z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.333 0 5.961 0 9.104v.458l80.889 52.507h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.195-61.793H89.474zm166.385 53.66l-82.666-53.659H156.98l93.873 60.934c2.813-1.305 4.741-4.04 5.006-7.275z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M328.608 104.663c-1.184 15.778-6.08 116.046 57.536 138.712 63.639-22.672 58.722-122.936 57.536-138.712-7.708 3.021-35.609 12.179-57.536-3.427-21.925 15.604-49.823 6.452-57.536 3.427z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFA028"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M417.403 124.893c-3.488-2.712-9.945 2.325-17.18 1.809-6.709-.479-14.977-7.273-25.724-4.344-2.969-2.734-1.532-9.089-1.532-9.089-7.461 4.823-7.996 11.425-7.527 15.006-5.32 7.03-4.961 17.758-3.969 21.032 1.291 4.263 3.746 4.779 4.134 9.558.387 4.779 2.196 3.1 2.196 3.1 3.736-2.095 4.279-6.048 5.85-12.516 6.07.775 10.037-4.662 10.037-4.662-3.982 1.249-6.494-.946-7.863-2.879.214-.639.385-1.228.63-1.9 4.521-12.401 26.154-8.991 28.159-5.555 3.617 6.2 8.396 8.525 8.396 8.525 0-6.464-4.779-12.141-4.779-12.141 7.234-1.294 9.172-5.944 9.172-5.944zm-52.054 26.608a1.291 1.291 0 11-.002-2.582 1.291 1.291 0 01.002 2.582z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M396.102 204.24c4.212-1.333 3.729-9.509 8.258-15.172 4.201-5.252 14.486-8.206 18.172-18.718 3.936-.894 8.353 3.895 8.353 3.895.262-8.881-4.872-13.066-8.087-14.712-2.771-8.37-11.808-14.161-15.068-15.201-4.243-1.355-6.06.373-10.216-2.019-4.156-2.392-3.799.05-3.799.05-.394 4.266 2.552 6.955 6.988 11.919-4.082 4.558-1.855 10.911-1.855 10.911 1.23-3.989 4.463-4.811 6.833-4.842.405.538.793 1.014 1.207 1.597 7.647 10.757-7.434 26.638-11.402 26.339-7.158-.54-11.784 2.078-11.784 2.078 5.323 3.667 12.71 2.953 12.71 2.953-3.04 6.689-.31 10.922-.31 10.922zm7.621-57.962a1.291 1.291 0 112.127 1.465 1.291 1.291 0 01-2.127-1.465z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M339.154 146.826c-.564 4.382 7.058 7.383 10.289 13.876 2.997 6.02 1.348 16.595 9.333 24.361-.845 3.947-7.049 5.939-7.049 5.939 7.946 3.975 13.903 1.079 16.749-1.145 8.759 1.009 17.815-4.753 20.13-7.272 3.015-3.278 2.212-5.655 6.131-8.418 3.919-2.763 1.554-3.467 1.554-3.467-3.704-2.153-7.383-.611-13.753 1.323-2.418-5.621-9.117-6.274-9.117-6.274 3.101 2.795 2.486 6.073 1.517 8.235-.659.14-1.254.292-1.956.424-12.977 2.409-21.036-17.954-19.095-21.427 3.501-6.266 3.074-11.564 3.074-11.564-5.567 3.285-8.028 10.287-8.028 10.287-4.789-5.573-9.779-4.878-9.779-4.878zm49.373 31.305a1.29 1.29 0 11-2.225 1.313 1.29 1.29 0 112.225-1.313z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M386.144 246.66l-.509-.175c-71.634-24.918-60.058-143.037-59.934-144.23l.224-2.134 1.958.887c.338.154 33.572 14.894 57.331-2.931l.929-.696.929.696c23.794 17.849 56.999 3.082 57.33 2.931l1.959-.89.224 2.137c.126 1.193 11.701 119.312-59.934 144.23l-.507.175zm-57.536-141.997c-1.184 15.778-6.08 116.046 57.536 138.712 63.639-22.672 58.722-122.936 57.536-138.712-7.708 3.021-35.609 12.179-57.536-3.427-21.925 15.604-49.823 6.452-57.536 3.427z",
    fill: "#CDCE0C"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M346.246 207.819c8.689 15.757 21.374 28.957 39.898 35.556 18.529-6.601 31.218-19.8 39.907-35.556h-79.805z",
    fill: "#82AFFF"
  })));
}

function SvgAl(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M352.551 209.793c-4.828-3.034-7.724 1.793-7.724 1.793l-14.069 1.655 7.034-5.931c5.103.414 5.793-1.103 7.172-3.172 1.379-2.069 7.172-1.103 7.172-1.103-.828-6.345-8.828-2.759-8.828-2.759-6.483-.69-7.586 4.552-7.586 4.552l-10.069 7.724-22.159-6.566c2.298-2.532 4.103-5.027 4.366-6.538.441-2.537-16.367-6.805-21.517-12.138-5.149-5.334-6.988-13.793-4.597-16 2.39-2.207 4.414 4.045 6.988 9.195 2.574 5.15 7.357 9.195 10.483 6.621 3.126-2.574-3.31-6.436-6.253-11.954-2.942-5.517 2.207-7.541 4.598-6.989 2.391.552 3.862 11.955 9.564 17.839 5.7 5.885 10.85 4.781 11.402 1.103.552-3.678-9.409-8.21-11.433-11.337-2.023-3.126-2.545-9.261.766-9.444 3.31-.184 15.448 17.906 25.748 24.828 11.218 7.54 20.229-1.288 18.759-4.966-1.471-3.679-8.276-2.207-16.184-4.231-7.908-2.023-16-12.69-18.391-18.574-2.391-5.885-.414-5.885.966-5.333 1.379.552 6.621 8.276 16.69 14.207 10.069 5.931 17.103.276 17.931-1.103.828-1.379 4.009-7.571-6.345-6.115-11.769 1.655-18.483-5.333-23.31-9.057-4.828-3.724-6.759-8.828-4.552-10.897 2.207-2.069 9.471 7.264 20.505 10.207 10.136 2.702 14.253-1.655 13.976-5.655-.276-4-2.621-2.345-14.069-3.448-11.448-1.103-19.448-11.862-19.862-12.552-.414-.69-.276-4.552 5.517-.828 5.793 3.724 16.138 5.931 22.207 5.655 6.069-.276 7.31-8.414 4.414-9.793-2.896-1.379-3.586.69-10.207 2.069s-19.034-5.379-22.069-8.552.276-5.241 1.793-4.966c1.517.275 11.448 6.069 20.276 5.793 8.828-.276 12.552-8.414 12.276-10.897-.276-2.483-2.759-4.552-6.483-2.069-3.724 2.483-8.69 5.379-16.965 4-8.276-1.379-12.138-6.897-11.034-8.965 1.103-2.069 9.103 1.517 21.793.138s13.241-12.552 12-14.759c-1.241-2.207-4.276-1.517-8.552 2.483s-12.552 4.828-19.034 4.828c-6.483 0-6.621-3.172-5.655-5.379.966-2.207 7.862-1.655 17.517-4.69 9.655-3.034 15.172-10.759 16.69-15.586 1.518-4.827-2.207-8.552-3.724-8.552-1.517 0-.552-2.207-7.172 7.31-6.621 9.517-24 13.241-24 13.241-1.241-2.345-3.172-3.172-3.172-3.172-11.724 2.345-25.866 12.468-25.866 12.468s2.493 7.996-.622 14.228c-4.011 8.022-17.759 3.011-14.02-9.658 3.113-10.55 15.162-16.928 25.341-18.071 10.178-1.142 10.697-4.985 10.697-4.985s-10.688 3.48-10.879-1.297c2.207.448 5.46.643 10.983.154 8.205-.726 12.775-6.543 9.14-7.789-3.635-1.246-2.077 2.493-8.309 5.401-4.445 2.074-9.11 1.14-11.445.431 2.157-4.71 11.237-2.301 11.237-2.301.104-8.205-10.783-5.27-10.783-5.27-4.781-10.3-32.736 1.655-32.736 1.655l6.621 5.333c-16.184 9.011-19.495 26.114-19.495 26.114s-3.31-17.103-19.495-26.115l6.621-5.333s-27.955-11.955-32.736-1.655c0 0-10.888-2.934-10.783 5.27 0 0 9.08-2.409 11.238 2.301-2.335.71-7 1.643-11.445-.431-6.231-2.909-4.673-6.646-8.309-5.401-3.635 1.246.935 7.062 9.14 7.789 5.523.489 8.776.295 10.983-.154-.191 4.777-10.879 1.297-10.879 1.297s.52 3.842 10.697 4.985c10.178 1.143 22.228 7.521 25.341 18.071 3.738 12.67-10.009 17.679-14.02 9.658-3.116-6.231-.622-14.228-.622-14.228s-14.142-10.123-25.866-12.468c0 0-1.931.828-3.172 3.172 0 0-17.379-3.724-24-13.241-6.621-9.517-5.655-7.31-7.172-7.31-1.517 0-5.241 3.724-3.724 8.552 1.517 4.828 7.034 12.552 16.69 15.586 9.656 3.034 16.552 2.483 17.517 4.69.966 2.207.828 5.379-5.655 5.379-6.483 0-14.759-.828-19.034-4.828-4.276-4-7.31-4.69-8.552-2.483-1.241 2.207-.69 13.379 12 14.759 12.69 1.379 20.69-2.207 21.793-.138 1.103 2.069-2.759 7.586-11.034 8.965-8.276 1.379-13.241-1.517-16.965-4s-6.207-.414-6.483 2.069c-.276 2.483 3.448 10.621 12.276 10.897 8.828.276 18.759-5.517 20.276-5.793 1.517-.276 4.828 1.793 1.793 4.965-3.034 3.172-15.448 9.931-22.069 8.552-6.621-1.379-7.31-3.448-10.207-2.069-2.897 1.379-1.655 9.517 4.414 9.793 6.069.276 16.414-1.931 22.207-5.655 5.793-3.724 5.931.138 5.517.828-.414.69-8.414 11.448-19.862 12.552-11.448 1.103-13.793-.552-14.069 3.448-.276 4 3.841 8.358 13.977 5.655 11.034-2.943 18.3-12.276 20.506-10.207 2.207 2.069.276 7.172-4.552 10.897-4.828 3.724-11.541 10.712-23.31 9.057-10.354-1.455-7.172 4.736-6.345 6.115.827 1.379 7.862 7.034 17.931 1.103s15.31-13.655 16.69-14.207c1.379-.552 3.357-.552.966 5.333s-10.483 16.552-18.391 18.574c-7.908 2.024-14.713.552-16.184 4.231-1.471 3.678 7.54 12.505 18.759 4.965 10.3-6.922 22.437-25.012 25.748-24.828 3.31.183 2.788 6.318.766 9.444-2.024 3.127-11.985 7.659-11.433 11.337.552 3.678 5.7 4.781 11.402-1.103 5.701-5.885 7.172-17.288 9.564-17.839 2.39-.552 7.54 1.472 4.597 6.989-2.942 5.517-9.379 9.379-6.252 11.954 3.126 2.574 7.908-1.471 10.483-6.621 2.574-5.15 4.597-11.402 6.988-9.195 2.391 2.207.552 10.666-4.598 16-5.149 5.333-21.959 9.601-21.517 12.138.263 1.511 2.067 4.005 4.366 6.538l-22.159 6.565-10.069-7.724s-1.103-5.241-7.586-4.552c0 0-8-3.586-8.828 2.759 0 0 5.793-.966 7.172 1.103 1.379 2.069 2.069 3.586 7.172 3.172l7.033 5.932-14.069-1.655s-2.897-4.828-7.724-1.793c0 0-6.069-1.931-7.586 3.862 0 0 5.241-.966 6.621-.276 0 0 2.069 4.69 8.69 1.931l13.931.69-7.862 3.862s-9.931-3.172-9.517 5.103c0 0-2.897 3.31-.276 6.621 0 0 .552-3.586 3.172-5.103 0 0 5.103 2.069 8.414-4l10.069-6.069 9.931 4.828s-.276 5.379 7.034 3.172c0 0 2.483 1.655 3.172 3.862 0 0 3.172-3.448-1.931-7.448 0 0-1.241-4.69-7.31-2.897l-5.655-2.897 20.925-6.209c3.623 3.45 7.532 6.279 8.9 5.805 2.7-.935 4.778-3.738 6.646-7.685 1.869-3.947 10.282-17.655 14.436-17.55 4.154.104 6.024 3.426 4.985 9.347-1.038 5.919-9.134 17.259-14.376 19.604-5.241 2.345-6.069 3.448-10.897 3.034-4.828-.414-6.483 1.655-5.379 4.414 1.103 2.759 6.534 4.513 11.862 2.483 5.793-2.207 8-5.241 10.207-3.448 2.207 1.793-2.345 8.276-8.552 10.207-6.207 1.931-10.897.69-9.931 4.552.966 3.862 7.586 4.138 11.862 1.655 4.276-2.483 9.103-9.379 10.345-7.172 1.241 2.207.414 7.862-3.724 10.897-4.138 3.034-8.845 1.249-9.793 4-1.379 4 3.448 6.621 7.172 5.103 3.724-1.517 8-6.207 9.931-10.345 1.931-4.138 5.517-.552 4.414 3.31-1.103 3.862-.184 7.034-8.093 13.103l14.713 22.62 14.713-22.621c-7.908-6.069-6.988-9.241-8.093-13.103-1.103-3.862 2.483-7.448 4.414-3.31 1.931 4.138 6.207 8.828 9.931 10.345 3.724 1.517 8.552-1.103 7.172-5.103-.948-2.751-5.655-.966-9.793-4-4.138-3.034-4.966-8.69-3.724-10.897 1.241-2.207 6.069 4.69 10.345 7.172 4.276 2.483 10.897 2.207 11.862-1.655.965-3.862-3.724-2.621-9.931-4.552-6.207-1.931-10.759-8.414-8.552-10.207 2.207-1.793 4.414 1.241 10.207 3.448 5.329 2.03 10.759.276 11.862-2.483 1.103-2.759-.552-4.828-5.379-4.414-4.828.414-5.655-.69-10.897-3.034s-13.337-13.684-14.376-19.604c-1.039-5.92.831-9.244 4.985-9.347 4.154-.105 12.566 13.603 14.436 17.55 1.869 3.947 3.946 6.751 6.646 7.686 1.369.474 5.279-2.355 8.9-5.805l20.925 6.209-5.655 2.897c-6.069-1.793-7.31 2.897-7.31 2.897-5.103 4-1.931 7.448-1.931 7.448.69-2.207 3.172-3.862 3.172-3.862 7.31 2.207 7.034-3.172 7.034-3.172l9.931-4.828 10.069 6.069c3.31 6.069 8.414 4 8.414 4 2.621 1.517 3.172 5.103 3.172 5.103 2.621-3.31-.276-6.621-.276-6.621.414-8.275-9.517-5.102-9.517-5.102l-7.866-3.86 13.931-.69c6.621 2.759 8.69-1.931 8.69-1.931 1.379-.69 6.621.276 6.621.276-1.518-5.793-7.587-3.862-7.587-3.862z",
    fill: "#464655"
  })));
}

function SvgAm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#FFB400"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.104A8.829 8.829 0 018.828.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 112.088h511.999V223.9H0z"
  })));
}

function SvgAo(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.896a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V168z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M235.903 94.293l6.036 18.096 19.076.148c1.478.011 2.091 1.898.902 2.775l-15.346 11.332 5.754 18.188c.446 1.409-1.159 2.574-2.361 1.716l-15.52-11.093-15.52 11.093c-1.203.86-2.807-.307-2.361-1.716l5.754-18.188-15.346-11.332c-1.188-.878-.576-2.764.902-2.775l19.076-.148 6.036-18.096c.468-1.401 2.451-1.401 2.918 0zm81.584 153.651s-109.206-82.384-112.43-85.092c-4.983-4.185-8.828-11.586-9.012-20.598 0 0-11.777 12.064-9.471 24.552 2.667 14.436 10.943 19.586 21.61 26.574 7.496 4.911 67.087 42.495 101.875 64.419l7.428-9.855zm32.674 24.147c-1.423-1.016-12.861-9.47-28.73-21.227l-5.759 10.472a129919.21 129919.21 0 0019.409 12.227s1.103 14.345 12.69 11.954c4.176-.862 7.539-9.747 2.39-13.426zm-94.298-38.038c-8.256 2.905-17.097 4.567-26.346 4.567-23.442 0-44.445-10.212-58.987-26.36l-12.928 11.635c4.333 4.812 8.96 9.347 14.175 13.217l-2.574 4.459 19.112 11.034 2.53-4.383a96.412 96.412 0 0027.638 7.383v5.084h22.069v-5.084a96.412 96.412 0 0027.638-7.383l2.53 4.383 7.595-4.385c-7.417-4.677-15.015-9.47-22.452-14.167z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M325.95 148.138a96.397 96.397 0 00-7.383-27.637l4.383-2.53-11.034-19.113-4.459 2.574a97.507 97.507 0 00-20.201-20.2l2.574-4.459-19.112-11.034-2.53 4.383c-7.162-3.115-14.788-5.327-22.723-6.639l-2.9 17.404c37.656 6.237 66.4 38.862 66.4 78.286 0 21.228-8.377 40.464-21.942 54.717l13.953 10.535c2.23-2.442 4.504-4.847 6.482-7.511l4.459 2.574 11.034-19.112-4.383-2.53a96.414 96.414 0 007.383-27.637h5.082V148.14h-5.084v-.002h.001z"
  }))));
}

function SvgAr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989zm-8.829 223.632H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M300.138 165.793h-31.784c.593-.45 1.062-.893 1.486-1.311.776-.759 1.393-1.362 3.03-2.035 1.646-.69 2.508-.698 3.599-.715 1.314-.009 2.802-.034 5.233-1.035 2.427-1.009 3.487-2.044 4.423-2.957.776-.759 1.393-1.362 3.034-2.044 1.633-.681 2.492-.69 3.577-.698 1.311-.018 2.797-.034 5.228-1.043l-1.698-4.07c-1.633.681-2.492.69-3.577.698-1.311.018-2.797.034-5.224 1.035-2.426 1.009-3.487 2.044-4.423 2.957-.776.759-1.393 1.362-3.03 2.035-1.646.69-2.508.698-3.599.715-1.314.009-2.802.034-5.233 1.043-2.426 1-3.487 2.044-4.423 2.957-.764.743-1.395 1.338-2.966 2.002l24.98-24.977-3.121-3.121-22.485 22.483c.099-.735.126-1.389.132-1.982.013-1.095.022-1.949.703-3.595.681-1.646 1.284-2.259 2.044-3.034.922-.94 1.961-2.008 2.969-4.439 1.004-2.431 1.022-3.914 1.035-5.224.013-1.086.022-1.949.698-3.586.681-1.638 1.28-2.25 2.039-3.026.918-.94 1.956-2.001 2.962-4.423l-4.077-1.689c-.681 1.638-1.28 2.25-2.039 3.026-.918.94-1.956 2.001-2.962 4.423-1.004 2.431-1.022 3.914-1.035 5.224-.013 1.086-.022 1.949-.698 3.586-.681 1.646-1.284 2.259-2.044 3.034-.922.94-1.961 2.008-2.969 4.439-1.004 2.431-1.022 3.923-1.038 5.233-.009 1.063-.039 1.922-.676 3.5v-35.318h-4.414v31.783a15.79 15.79 0 00-1.306-1.481c-.762-.776-1.362-1.397-2.044-3.034-.681-1.646-.694-2.508-.707-3.604-.013-1.311-.03-2.802-1.038-5.233-1.004-2.422-2.044-3.482-2.962-4.423-.759-.776-1.357-1.388-2.039-3.026-.676-1.638-.685-2.5-.698-3.586-.013-1.311-.03-2.793-1.035-5.216l-4.077 1.689c.676 1.638.685 2.492.698 3.577.013 1.311.03 2.793 1.035 5.224 1.004 2.422 2.044 3.482 2.962 4.423.759.776 1.357 1.388 2.039 3.026.681 1.646.694 2.508.707 3.604.013 1.311.03 2.802 1.038 5.233 1.004 2.431 2.044 3.491 2.962 4.431.748.76 1.34 1.395 2.004 2.962l-24.982-24.979-3.121 3.121 24.943 24.94c-1.368-.621-2.028-1.192-2.745-1.888-.943-.922-2.008-1.965-4.448-2.974-2.431-1-3.918-1.026-5.233-1.043-1.095-.009-1.956-.025-3.616-.715-1.66-.681-2.28-1.284-3.069-2.051-.943-.914-2.013-1.956-4.457-2.974-2.44-1.009-3.932-1.026-5.25-1.043-1.099-.018-1.965-.034-3.625-.724l-1.689 4.086c2.44 1.009 3.932 1.026 5.25 1.043 1.099.018 1.965.034 3.625.724 1.664.681 2.284 1.284 3.073 2.051.943.922 2.013 1.956 4.452 2.966 2.44 1.017 3.932 1.035 5.246 1.052 1.095.018 1.956.025 3.608.715 1.651.681 2.268 1.284 3.048 2.044.401.393.849.809 1.391 1.233H211.86v4.414h35.254c-1.393.53-2.264.597-3.263.612-1.314.009-2.802.034-5.237 1.035-2.435 1.009-3.505 2.051-4.448 2.966-.785.767-1.401 1.37-3.052 2.051-1.66.69-2.526.707-3.625.724-1.319.018-2.81.034-5.25 1.043-2.444 1.017-3.513 2.051-4.457 2.974-.789.767-1.409 1.37-3.069 2.051l1.689 4.086c2.44-1.017 3.509-2.051 4.452-2.974.789-.767 1.409-1.37 3.073-2.051 1.66-.69 2.526-.707 3.625-.724 1.319-.018 2.81-.034 5.255-1.052 2.431-1.009 3.496-2.044 4.439-2.966.78-.759 1.401-1.362 3.057-2.044 1.646-.69 2.513-.698 3.604-.715.558-.003 1.187-.04 1.868-.124l-22.549 22.546 3.121 3.121 24.931-24.927c-.614 1.362-1.181 2.019-1.879 2.738-.918.94-1.956 2.008-2.966 4.439-1.01 2.431-1.031 3.932-1.043 5.241-.018 1.095-.025 1.956-.712 3.612-.685 1.664-1.293 2.284-2.056 3.069-.922.94-1.961 2.017-2.974 4.457-1.013 2.44-1.031 3.932-1.047 5.25-.018 1.095-.03 1.965-.715 3.62l4.077 1.689c1.013-2.44 1.031-3.932 1.047-5.25.018-1.095.03-1.965.715-3.62.685-1.664 1.293-2.284 2.056-3.069.922-.94 1.961-2.017 2.974-4.457 1.009-2.431 1.031-3.932 1.043-5.241.018-1.095.025-1.956.712-3.612.681-1.655 1.284-2.268 2.047-3.052a16.46 16.46 0 001.233-1.395v31.878h4.414v-35.252c.526 1.39.593 2.259.608 3.261.013 1.311.034 2.802 1.043 5.233 1.004 2.44 2.047 3.509 2.966 4.448.762.785 1.366 1.405 2.051 3.06s.698 2.526.715 3.62c.018 1.319.034 2.81 1.047 5.25s2.051 3.518 2.974 4.457c.762.785 1.37 1.405 2.056 3.069l4.077-1.689c-1.013-2.44-2.051-3.518-2.974-4.457-.762-.785-1.37-1.405-2.056-3.069-.685-1.655-.698-2.526-.715-3.62-.018-1.319-.034-2.81-1.047-5.25-1.009-2.44-2.047-3.509-2.966-4.448-.762-.785-1.366-1.405-2.051-3.06-.685-1.646-.694-2.508-.712-3.604a16.785 16.785 0 00-.126-1.868l22.552 22.55 3.121-3.121-22.482-22.478c.73.097 1.384.126 1.973.134 1.09.009 1.949.018 3.595.698 1.646.69 2.263 1.284 3.043 2.051.94.914 2.004 1.956 4.436 2.966 2.427 1 3.914 1.017 5.224 1.026 1.086.018 1.944.025 3.582.707 1.638.672 2.25 1.276 3.026 2.035.94.914 2.001 1.956 4.427 2.966l1.689-4.086c-1.638-.672-2.25-1.276-3.026-2.035-.94-.914-2.001-1.956-4.427-2.966-2.426-1-3.914-1.017-5.224-1.026-1.086-.018-1.944-.025-3.582-.707-1.646-.681-2.263-1.276-3.043-2.044-.94-.914-2.004-1.956-4.436-2.957-2.431-1.017-3.918-1.035-5.233-1.043-1.07-.018-1.937-.038-3.524-.681h35.35v-4.414h.003z",
    fill: "#F09146"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FFE15A",
    cx: 256,
    cy: 168,
    r: 22.069
  })));
}

function SvgAs(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 326.896v-9.751L56.713 168 512 18.855V9.104c0-3.192-1.783-5.861-4.321-7.412L0 168l507.679 166.308c2.538-1.55 4.321-4.22 4.321-7.412z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M56.713 168L512 317.145V18.855z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M458.102 124.556s30.229 1.281 33.047-1.025c2.818-2.305 3.33-17.676-6.66-19.981-9.99-2.305-37.145 12.553-37.145 12.553l10.758 8.453z",
    fill: "#FFF5DC"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#D27D69"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M398.925 148.381s-.342.854-.512 4.611c-.171 3.757.512 13.492 12.297 17.761l-2.732 11.443 12.467 7.514s9.223-13.663 9.735-25.106c.511-11.441-31.255-16.223-31.255-16.223zm-37.401-7.686l4.867-4.867s-9.964 6.079-13.748.598c-4.952-7.172 1.708-14.687 8.625-18.018 6.916-3.33 20.75-.768 20.75-.768l8.71 22.287-26.386 16.651-2.818-15.883zm81.72-42.524l23.569-2.818s-6.916 9.991-20.494 17.42c0 0 14.09 0 18.188 4.867 4.099 4.867-4.099 9.479-7.172 11.016-3.074 1.537-29.716 17.932-29.716 17.932l-23.824-2.818 39.449-45.599z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M460.749 80.068s5.123-11.955 4.952-20.323L448.452 71.7s3.928-1.878 2.562-8.71l-56.358 30.57-11.443 20.323 34.84 10.76 42.696-44.575z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M418.267 173.23l-5.892 9.351s-10.504-2.305-14.09.256c-3.586 2.562-3.97 12.169 2.305 12.937 0 0 4.355 2.69 6.916.512 0 0 5.251 2.049 6.148-1.281.897-3.33-.256-6.148-.256-6.148h3.714l6.532-11.656-5.377-3.971z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M365.623 152.992s16.395-8.197 16.395-20.494-15.2-12.98-27.496-8.881c0 0-7.343-5.806-1.195-11.614 8.428-7.96 45.087-24.592 45.087-24.592l-4.099 20.494s14.602 7.685 20.494 4.099c4.951-3.014 53.284-40.988 53.284-40.988s-4.099 20.494-32.79 40.988l-3.04 15.201a11.03 11.03 0 01-5.887 7.706l-11.567 5.783s32.79 4.099 32.79 8.197c0 4.098-8.197 24.593-24.592 32.79l-8.198-8.197 4.099-12.297s-12.297-4.099-20.494-8.198c0 0-12.297 4.099-20.494 4.099s-12.297-4.096-12.297-4.096z",
    fill: "#B95546"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M341.031 173.486v-8.516c0-2.42.961-4.742 2.673-6.453l17.822-17.822 4.099 8.197h16.395l-4.099 4.099v4.099l-20.494 12.297-16.396 4.099z",
    fill: "#FFF5DC"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M349.229 169.387h-8.198s-8.197 12.297 0 12.297c0 0 12.297-8.198 16.395-12.297 0 0 0-4.098-8.197 0zm99.981 18.183h-56.663a2.528 2.528 0 00-1.86-.828s-9.925-4.114-11.337-4.114h-1.163a2.556 2.556 0 00-2.556 2.556v2.386h-12.953v-2.386a2.556 2.556 0 00-2.556-2.556h-1.163a2.556 2.556 0 00-2.556 2.556v.043c-5.551-.226-17.42-.934-23.569-2.983l-32.79 8.198 32.79 8.197c6.147-2.049 18.016-2.758 23.569-2.984v.043a2.556 2.556 0 002.556 2.556h1.163a2.556 2.556 0 002.556-2.556v-2.386h12.953v2.386a2.556 2.556 0 002.556 2.556h1.163c1.411 0 11.337-4.114 11.337-4.114.74 0 1.394-.324 1.86-.828h56.663a2.872 2.872 0 000-5.742z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M446.746 198.591c-3.416-.683-42.525 6.148-42.525 6.148s-2.391-2.391 4.781-9.052l-3.415-.854s-7.514 5.294-10.589 5.977c-2.647.588-8.562 3.464-9.833 7.303l-23.812 3.969.512 2.049 23.357-2.738c1.114 3.588 4.786 4.32 7.384 3.25 0 0 3.416 1.366 6.49-1.025 0 0 6.148 1.025 6.489-4.611l42.867-6.49c.001.002 1.709-3.243-1.706-3.926z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M422.494 227.454s-3.245 4.269-11.272.512c-8.026-3.757-17.42.342-22.543-.854-5.123-1.196-12.809-4.269-19.981-1.537-7.172 2.732-11.101 2.562-9.564-.854 1.537-3.415 2.391-5.977 0-7.172l2.732-3.416-.512-2.049s-13.663-5.294-22.884 2.049c-9.223 7.343-6.489 24.081 8.881 25.276 0 0 4.782 5.977 16.566 4.269 0 0 7.685 5.294 20.835 2.903 0 0 .512 1.537 9.052.854 8.54-.683 18.103.342 16.395 6.148 0 0 6.319-1.195 2.562-7.002 0 0 7.514-.342 12.638 4.099 0 0 .342-5.123-4.611-7.857 0 0 8.369-2.903 12.98 0 0 0-3.074-6.489-11.272-5.636 0 0 5.977-4.782 8.71-3.586 0 0-2.562-3.074-10.077 0-.001.001 4.781-2.902 1.365-6.147z"
  }))));
}

function SvgAt(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989zm-8.829 223.632H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  })));
}

function SvgAu(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.334l-81.77 53.574V.276H105.93V53.85L24.16.276H8.828A8.828 8.828 0 000 9.103v7.002l70.155 45.963H0v44.138h70.155L0 152.17v7.002A8.829 8.829 0 008.828 168h15.334l81.77-53.574V168h44.138v-53.574L231.839 168h15.334a8.829 8.829 0 008.828-8.828v-7.002l-70.155-45.963H256V62.069h-70.155L256 16.106V9.104a8.828 8.828 0 00-8.828-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M256 70.897H141.241V.276h-26.482v70.621H0v26.482h114.759V168h26.482V97.379H256z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.332 0 5.961 0 9.103v.458l80.889 52.508h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.196-61.793H89.474zm166.386 53.658l-82.666-53.658H156.98l93.874 60.935c2.812-1.305 4.741-4.04 5.006-7.277z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M130.671 216.13l6.663 21.997 21.353-8.505c1.822-.726 3.478 1.352 2.366 2.966l-13.044 18.924 19.962 11.391c1.703.972 1.112 3.562-.844 3.699l-22.929 1.601 3.541 22.71c.302 1.938-2.092 3.091-3.418 1.646l-15.548-16.928-15.548 16.928c-1.326 1.444-3.72.291-3.418-1.646l3.541-22.71-22.929-1.601c-1.956-.137-2.547-2.727-.844-3.699l19.962-11.391-13.044-18.924c-1.112-1.614.544-3.692 2.366-2.966l21.353 8.505 6.663-21.997c.571-1.877 3.228-1.877 3.796 0zM393.279 59.729l3.255 10.745 10.43-4.154c.889-.354 1.699.66 1.155 1.449l-6.371 9.245 9.751 5.565c.832.474.543 1.74-.413 1.806l-11.2.782 1.729 11.093c.148.947-1.022 1.51-1.67.804l-7.595-8.269-7.595 8.269c-.648.705-1.817.142-1.67-.804l1.729-11.093-11.2-.782c-.956-.066-1.245-1.332-.413-1.806l9.751-5.565-6.371-9.245c-.544-.789.266-1.803 1.155-1.449l10.43 4.154 3.255-10.745c.282-.917 1.581-.917 1.858 0zm-72.577 82.476l3.255 10.745 10.43-4.154c.889-.354 1.699.66 1.155 1.449l-6.371 9.245 9.751 5.565c.832.474.543 1.74-.413 1.806l-11.2.782 1.729 11.093c.148.947-1.022 1.51-1.67.804l-7.595-8.269-7.595 8.269c-.648.705-1.817.142-1.67-.804l1.729-11.093-11.2-.782c-.956-.066-1.245-1.332-.413-1.806l9.751-5.565-6.371-9.245c-.544-.789.266-1.803 1.155-1.449l10.43 4.154 3.255-10.745c.282-.917 1.58-.917 1.858 0zm141.241-35.311l3.255 10.745 10.43-4.154c.889-.354 1.699.66 1.155 1.449l-6.371 9.245 9.751 5.565c.832.474.543 1.74-.413 1.806l-11.2.782 1.729 11.093c.148.947-1.022 1.51-1.669.804l-7.595-8.269-7.595 8.269c-.648.705-1.817.142-1.67-.804l1.729-11.093-11.2-.782c-.956-.066-1.245-1.332-.413-1.806l9.751-5.565-6.371-9.245c-.544-.789.266-1.803 1.155-1.449l10.43 4.154 3.255-10.745c.281-.917 1.579-.917 1.857 0zm-68.664 141.242l3.255 10.745 10.43-4.155c.889-.354 1.699.66 1.155 1.449l-6.371 9.245 9.751 5.565c.832.474.543 1.74-.413 1.806l-11.2.782 1.729 11.093c.148.947-1.022 1.51-1.67.804l-7.595-8.269-7.595 8.269c-.648.705-1.817.142-1.67-.804l1.729-11.093-11.2-.782c-.956-.066-1.245-1.332-.413-1.806l9.751-5.565-6.371-9.245c-.544-.789.266-1.803 1.155-1.449l10.43 4.155 3.255-10.745c.282-.917 1.581-.917 1.858 0zm25.182-86.623l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.015-1.774-1.015-2.112 0z",
    fill: "#F5F5F5"
  })));
}

function SvgAw(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 229.793h511.999v17.655H0zm0 35.31h511.999v17.655H0z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M65.232 87.942L32.384 76.725l32.848-11.216 11.217-32.844 11.216 32.844 32.848 11.216-32.848 11.217-11.216 32.845z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M76.449 38.567l9.714 28.445 28.445 9.714-28.445 9.714-9.714 28.445-9.714-28.445-28.445-9.714 28.445-9.714 9.714-28.445zm0-11.808l-3.612 10.574-9.108 26.673-26.672 9.108-10.574 3.612 10.574 3.61 26.672 9.108 9.108 26.672 3.612 10.574 3.612-10.574 9.108-26.672 26.672-9.108 10.574-3.61-10.574-3.61-26.672-9.108-9.108-26.672-3.612-10.577z",
    fill: "#F5F5F5"
  })));
}

function SvgAz(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.104A8.829 8.829 0 018.828.276z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 112.088h511.999V223.9H0z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M268.04 204.608c-19.81 0-35.881-16.071-35.881-35.898 0-19.792 16.071-35.898 35.881-35.898 7.371 0 14.168 2.266 19.832 6.103.867.588 1.857-.553 1.131-1.308-8.466-8.801-20.448-14.172-33.732-13.718-22.824.779-41.718 19.077-43.177 41.868-1.671 26.104 18.999 47.798 44.735 47.798 12.676 0 24.069-5.3 32.206-13.773.718-.748-.274-1.871-1.132-1.289-5.67 3.845-12.479 6.115-19.863 6.115z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M299.452 146.611l3.723 10.467 10.034-4.769c.756-.36 1.545.429 1.185 1.185l-4.769 10.034 10.467 3.723c.789.28.789 1.396 0 1.676l-10.467 3.723 4.769 10.034c.36.756-.429 1.545-1.185 1.185l-10.034-4.769-3.723 10.467c-.28.789-1.396.789-1.676 0l-3.723-10.467-10.034 4.769c-.756.36-1.545-.429-1.185-1.185l4.769-10.034-10.467-3.723c-.789-.28-.789-1.396 0-1.676l10.467-3.723-4.769-10.034c-.36-.756.429-1.545 1.185-1.185l10.034 4.769 3.723-10.467c.281-.788 1.396-.788 1.676 0z"
  }))));
}

function SvgBa(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M441.378.276v335.448L105.931.276z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M207.353 125.176l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.17-1.991 1.446l-13.082-9.351-13.082 9.351c-1.013.724-2.366-.258-1.991-1.446l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.396-1.181 2.067-1.181 2.462 0zm-36.782-36.781l5.088 15.254 16.079.125c1.246.01 1.762 1.6.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.17-1.991 1.446l-13.082-9.351-13.082 9.351c-1.013.725-2.366-.258-1.991-1.446l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.396-1.182 2.068-1.182 2.462 0zM133.79 51.613l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.17-1.991 1.446l-13.082-9.351-13.082 9.351c-1.013.725-2.366-.258-1.991-1.446l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.396-1.182 2.068-1.182 2.462 0zM97.008 14.832l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339L106 42.102l4.851 15.331c.376 1.187-.977 2.17-1.991 1.446l-13.082-9.351-13.082 9.351c-1.013.724-2.366-.258-1.991-1.446l4.851-15.331L72.62 32.55c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.395-1.182 2.066-1.182 2.461 0zm257.471 257.471l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.171-1.99 1.446L353.249 307l-13.082 9.351c-1.013.725-2.366-.258-1.991-1.446l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.395-1.182 2.067-1.182 2.461 0zm-36.781-36.782l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.171-1.99 1.446l-13.082-9.351-13.082 9.351c-1.013.724-2.366-.258-1.991-1.446l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.395-1.182 2.067-1.182 2.461 0zm-36.783-36.781l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.171-1.991 1.445l-13.082-9.351-13.082 9.351c-1.013.724-2.366-.258-1.991-1.445l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.397-1.182 2.068-1.182 2.462 0zm-36.781-36.782l5.088 15.254 16.079.125c1.246.01 1.762 1.599.76 2.339l-12.936 9.553 4.851 15.331c.376 1.187-.977 2.171-1.991 1.446l-13.082-9.351-13.082 9.351c-1.013.724-2.366-.258-1.991-1.446l4.851-15.331-12.936-9.553c-1.002-.74-.486-2.329.76-2.339l16.079-.125 5.088-15.254c.396-1.182 2.068-1.182 2.462 0zM41.944.276l6.83 5.044-4.851 15.331c-.375 1.187.977 2.17 1.991 1.447l13.081-9.351 13.082 9.351c1.013.724 2.366-.258 1.99-1.447L69.217 5.32 76.05.276H41.944zm370.483 324.187l-16.079-.125-5.087-15.254c-.394-1.182-2.066-1.182-2.46 0l-5.087 15.254-16.079.125c-1.246.01-1.762 1.6-.76 2.339l12.083 8.921h22.151l12.082-8.921c.998-.739.482-2.329-.764-2.339z",
    fill: "#F5F5F5"
  })));
}

function SvgBb(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h161.839v335.448z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.792a8.828 8.828 0 01-8.828 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M326.62 119.256s-24.564 0-42.987 18.423h12.281s-11.898 21.493-18.039 58.339l-12.665-2.068v-56.454l12.281 4.021-21.492-52.965-21.493 52.965 12.281-4.095v56.527l-12.665 2.068c-6.141-36.845-18.039-58.339-18.039-58.339h12.281c-18.422-18.422-42.986-18.422-42.986-18.422 30.704 36.845 30.704 98.255 30.704 98.255l30.704-5.117v41.963h18.423v-41.963l30.704 5.117c.002.001.002-61.408 30.707-98.255z",
    fill: "#464655"
  })));
}

function SvgBd(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FF4B55",
    cx: 220.689,
    cy: 168,
    r: 114.758
  })));
}

function SvgBe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h161.839v335.449z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.828 8.828 0 01-8.828 8.827z",
    fill: "#FF4B55"
  })));
}

function SvgBf(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.896a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V168z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.685 119.856l11.106 33.3 35.102.273c2.72.021 3.847 3.491 1.66 5.107l-28.238 20.853 10.589 33.469c.82 2.593-2.132 4.738-4.344 3.156l-28.559-20.413-28.558 20.413c-2.212 1.581-5.165-.564-4.344-3.156l10.589-33.469-28.238-20.853c-2.188-1.615-1.06-5.086 1.66-5.107l35.102-.273 11.106-33.3c.857-2.58 4.507-2.58 5.367 0z",
    fill: "#FFE15A"
  })));
}

function SvgBg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.104A8.829 8.829 0 018.828.276z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#73AF00",
    d: "M0 112.088h511.999V223.9H0z"
  })));
}

function SvgBh(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M211.862 335.723H8.828A8.829 8.829 0 010 326.895V9.103A8.829 8.829 0 018.828.275h203.034v335.448z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M141.241.275l70.621 20.966-70.621 20.965 70.621 20.965-70.621 20.965 70.621 20.965-70.621 20.965 70.621 20.965-70.621 20.965 70.621 20.965-70.621 20.965 70.621 20.965-70.621 20.965 70.621 20.965-70.621 20.965 70.621 20.965-70.621 20.965h361.93a8.829 8.829 0 008.828-8.828V9.103a8.829 8.829 0 00-8.828-8.828h-361.93z",
    fill: "#FF4B55"
  })));
}

function SvgBi(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172.225H8.828A8.829 8.829 0 000 9.053v317.792a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828V9.053a8.83 8.83 0 00-8.829-8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M40.266.225l215.733 141.343L471.733.225zm431.467 335.55L255.999 194.432 40.266 335.775z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 9.053a8.829 8.829 0 00-8.828-8.828h-31.438L307.696 107.698C293.796 95.761 275.76 88.502 256 88.502c-19.76 0-37.796 7.258-51.696 19.196L40.266.225H8.828A8.829 8.829 0 000 9.053v17.554l180.058 117.968a79.426 79.426 0 00-3.507 23.374 79.426 79.426 0 003.507 23.374L0 309.292v17.554a8.829 8.829 0 008.828 8.828h31.438l164.037-107.472c13.9 11.937 31.936 19.197 51.696 19.197 19.76 0 37.796-7.258 51.696-19.197l164.037 107.472h31.438a8.829 8.829 0 008.828-8.828v-17.554L331.941 191.324a79.426 79.426 0 003.507-23.374 79.426 79.426 0 00-3.507-23.374L511.999 26.608V9.053H512z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M250.28 142.545l-11.97.31 6.25-10.216-6.25-10.215 11.97.31 5.719-10.525 5.721 10.525 11.97-.31-6.251 10.215 6.251 10.216-11.97-.31-5.721 10.525z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.999 114.984l4.943 9.092 10.346-.265-5.402 8.828 5.402 8.828-10.346-.265-4.943 9.092-4.943-9.092-10.346.265 5.402-8.828-5.402-8.828 10.346.265 4.943-9.092zm0-5.544l-2.327 4.279-4.169 7.669-8.726-.224-4.869-.125 2.542 4.156 4.557 7.445-4.557 7.445-2.542 4.156 4.869-.125 8.726-.224 4.169 7.669 2.327 4.279 2.327-4.279 4.169-7.669 8.726.224 4.87.125-2.542-4.156-4.557-7.445 4.557-7.445 2.542-4.156-4.87.125-8.726.224-4.169-7.669-2.327-4.279z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M217.406 201.054l-11.97.311 6.25-10.216-6.25-10.215 11.97.31 5.72-10.526 5.72 10.526 11.969-.31-6.25 10.215 6.25 10.216-11.969-.311-5.72 10.525z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M223.126 173.494l4.943 9.092 10.346-.265-5.402 8.828 5.402 8.828-10.346-.265-4.943 9.092-4.943-9.092-10.346.265 5.402-8.828-5.402-8.828 10.346.265 4.943-9.092zm0-5.545l-2.327 4.279-4.169 7.669-8.726-.224-4.87-.125 2.542 4.156 4.557 7.445-4.557 7.445-2.542 4.156 4.87-.125 8.726-.224 4.169 7.669 2.327 4.279 2.327-4.279 4.169-7.669 8.726.224 4.87.125-2.542-4.156-4.557-7.445 4.557-7.445 2.542-4.156-4.87.125-8.726.224-4.169-7.669-2.327-4.279z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M283.154 201.054l-11.97.311 6.25-10.216-6.25-10.215 11.97.31 5.719-10.526 5.721 10.526 11.97-.31-6.25 10.215 6.25 10.216-11.97-.311-5.721 10.525z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M288.873 173.494l4.943 9.092 10.346-.265-5.402 8.828 5.402 8.828-10.346-.265-4.943 9.092-4.943-9.092-10.346.265 5.402-8.828-5.402-8.828 10.346.265 4.943-9.092zm0-5.545l-2.327 4.279-4.169 7.669-8.726-.224-4.87-.125 2.542 4.156 4.557 7.445-4.557 7.445-2.542 4.156 4.87-.125 8.726-.224 4.169 7.669 2.327 4.279 2.327-4.279 4.169-7.669 8.726.224 4.87.125-2.542-4.156-4.557-7.445 4.557-7.445 2.542-4.156-4.87.125-8.726.224-4.169-7.669-2.327-4.279z",
    fill: "#73AF00"
  })));
}

function SvgBj(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168.003H0V9.107A8.829 8.829 0 018.828.279h494.345a8.829 8.829 0 018.828 8.828v158.896z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 168.003h512v158.896a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.899V168.003z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.721H8.828A8.829 8.829 0 010 326.893V9.101A8.829 8.829 0 018.828.273h161.839v335.448z",
    fill: "#73AF00"
  })));
}

function SvgBm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172 168H8.828A8.829 8.829 0 010 159.172V9.104A8.829 8.829 0 018.828.276h238.344A8.829 8.829 0 01256 9.104v150.069a8.827 8.827 0 01-8.828 8.827z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.333l-81.77 53.573V.276h-44.138v53.573L24.161.276H8.828A8.829 8.829 0 000 9.104v7.002l70.155 45.963H0v44.138h70.155L0 152.171v7.001A8.829 8.829 0 008.828 168h15.333l81.77-53.573V168h44.138v-53.573L231.838 168h15.333a8.829 8.829 0 008.828-8.828v-7.002l-70.154-45.963h70.154V62.069h-70.155l70.155-45.963V9.104a8.827 8.827 0 00-8.827-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M255.999 70.897H141.241V.276h-26.483v70.621H0v26.482h114.758V168h26.483V97.379h114.758z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.333 0 5.961 0 9.104v.458l80.889 52.507h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.195-61.793H89.474zm166.385 53.66l-82.666-53.659H156.98l93.873 60.934c2.813-1.305 4.741-4.04 5.006-7.275z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M320.945 86.029a3.153 3.153 0 00-3.153 3.153v116.65c0 9.458 6.305 40.985 66.207 50.443 59.902-9.458 66.207-40.985 66.207-50.443V89.183a3.153 3.153 0 00-3.153-3.153H320.945v-.001z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M383.999 256.276c50.004-7.895 62.651-31.16 65.469-44.138H318.531c2.817 12.977 15.464 36.243 65.468 44.138z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M424.984 152.237s3.153-3.153 0-9.458l-40.985-1.834-40.985 1.834c-3.153 6.305 0 9.458 0 9.458-3.153 3.153-3.153 6.305-3.153 6.305h6.305l6.831 11.297 31.001 17.077L415 169.839l6.831-11.297h6.305c.001 0 .001-3.152-3.152-6.305z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M415.002 169.839s-1.971-4.335-7.225-3.809c0 0-2.89-3.809-7.751-2.759 0 0-5.649-3.284-8.932 2.759 0 0-10.444-1.062-11.002 6.891 0 0 16.256 24.504 16.651 24.767.394.263 19.442.131 19.442.131l8.802-9.711-8.671-12.489-1.314-5.78z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M384.394 177.59s-13.79-22.528-15.764-24.434c-1.905-1.839-5.649-3.546-9.459-.394 0 0-11.428-.919-9.853 7.751l3.284 13.137s-2.89 9.064-4.204 9.984c-1.313.919-6.174 3.415-6.174 3.415l2.759 10.903 36.781-1.839 2.63-18.523z",
    fill: "#F0C850"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M400.288 167.737l-.043.019-1.017-2.401a.784.784 0 00-1.043-.413l-6.842 3.017-8.138-13.322c.361-.31.518-.817.348-1.289a1.184 1.184 0 00-1.512-.717l-1.814.649-1.227-3.626a.793.793 0 00-.999-.495.79.79 0 00-.494 1.001l1.236 3.654-1.939.694a1.183 1.183 0 00.399 2.298c.068 0 .138-.023.207-.035l2.682 16.153-1.73.762a.787.787 0 00-.424.985l.981 2.732c.024.46.022 1.236-.135 2.218l-11.006-18.879c.462-.289.693-.851.502-1.383a1.18 1.18 0 00-1.512-.717l-1.814.649-1.227-3.626a.788.788 0 10-1.493.506l1.236 3.654-1.939.694a1.183 1.183 0 00-.714 1.512c.158.441.559.701.995.748l4.777 29.814c-.617.259-1.222.522-1.901.764 0 0-2.233 10.641-.525 11.166 1.708.525 19.31 5.911 19.31 5.911s24.302-11.56 24.828-11.822c.525-.263 1.577-7.882 1.577-7.882l-9.59-22.993zm-1.491.64l-2.035.874-.674-1.663 1.999-.882.71 1.671zm-12.3 3.441l1.673-.737.643 1.585-1.771.761-.545-1.609zm-.909 2.232l-1.978.85-.622-1.534 2.062-.909.538 1.593zm4.672-2.006l-.649-1.599 1.788-.788.655 1.618-1.794.769zm2.58-3.022l1.806-.797.669 1.649-1.814.779-.661-1.631zm-11.104-13.768l8.152 13.346-3.897 1.718-5.005-14.796.75-.268zm-2.814 1.008l.578-.207 5.042 14.904-2.963 1.306-2.657-16.003zm2.624 17.74l.617 1.521-1.945.835-.548-1.528 1.876-.828zm-15.251-12.678l11.938 20.479c-.601 1.737-1.735 3.753-3.723 5.732l-8.797-26.004.582-.207zm-2.947 1.056l.882-.316 9.009 26.632c-1.366 1.133-3.065 2.228-5.156 3.231l-4.735-29.547z",
    fill: "#965032"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M427.842 138.001c-.837-1.33-3.524-.76-3.524-.76s-.767-1.534-2.794-1.682c-2.027-.148-2.399 1.657-2.399 1.657s-.38-.282-2.613-.216c-2.233.066-1.773 3.744-1.773 3.744s-.854 0-3.744-.919c-2.89-.92-4.794-.263-4.794-.263-.131-1.511-.919-2.627-.919-2.627-2.43.985-4.335-.131-4.794-.985-.46-.854.723-2.167.723-3.284s-1.544-1.067-2.086-2.052c-.542-.985 0-1.527 1.429-2.167 1.429-.64 2.759-3.005 1.871-4.926-.888-1.921-3.448-1.577-3.448-1.577.887.148 1.625 1.823.198 2.167-1.428.344-2.709-4.877-2.709-4.877 3.3 2.217 5.715.887 6.404-1.035.69-1.922-1.133-3.251-1.133-3.251-1.429 2.315-3.892.296-2.561-1.182 1.33-1.478 1.444-3.957 1.444-3.957-2.956 1.446-4.794-.394-4.794-.394 3.875-2.692 2.759-6.503 2.759-6.503-1.444-.657-4.532-.131-4.532-.131.657-1.314.525-3.679.525-3.679-1.642-.263-3.481.788-3.481.788.525-1.838-.198-5.057-.198-5.057-1.182.198-3.415.854-3.415.854-.919-2.102-3.481-3.35-3.481-3.35s-2.561 1.248-3.481 3.35c0 0-2.233-.657-3.415-.854 0 0-.723 3.219-.198 5.057 0 0-1.839-1.05-3.481-.788 0 0-.131 2.365.525 3.679 0 0-3.087-.525-4.532.131 0 0-1.117 3.809 2.759 6.503 0 0-1.839 1.839-4.794.394 0 0 .115 2.479 1.444 3.957 1.33 1.478-1.133 3.498-2.561 1.182 0 0-1.823 1.33-1.133 3.251.69 1.921 3.104 3.251 6.404 1.035 0 0-1.281 5.222-2.709 4.877-1.428-.344-.69-2.019.198-2.167 0 0-2.561-.345-3.448 1.577-.887 1.921.444 4.286 1.871 4.926 1.429.64 1.971 1.182 1.429 2.167-.542.985-2.086.936-2.086 2.052 0 1.117 1.182 2.43.723 3.284-.46.854-2.365 1.971-4.794.985 0 0-.788 1.117-.919 2.627 0 0-1.905-.657-4.794.263-2.89.919-3.744.919-3.744.919s.46-3.678-1.773-3.744c-2.233-.066-2.613.216-2.613.216s-.371-1.805-2.399-1.657c-2.027.149-2.794 1.682-2.794 1.682s-2.687-.569-3.524.76c-.837 1.33-.936 3.35.64 4.188 1.577.838 5.763 4.335 5.763 4.335l5.911 2.561 20.69-9.163 10.837 2.857 10.837-2.857 20.69 9.163 5.911-2.561s4.188-3.498 5.763-4.335c1.572-.839 1.474-2.859.636-4.188z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M377.546 104.613s.223 2.782 4.34 2.04c-.001 0-.111-2.893-4.34-2.04z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M362.313 214.503s-2.956-.098-6.009 2.167c-3.054 2.266-4.401.657-7.455.657-3.054 0-3.777 3.186-3.777 3.186s-5.911 1.478-3.546 5.813c1.495 2.742 3.576 2.684 4.908 2.272-.067 1.842.352 3.866 2.481 4.231 4.04.69 5.813-1.478 4.926-4.828 0 0 .492 3.448 3.153 3.35 2.66-.098 4.434-1.577 4.138-5.123-.296-3.546 4.434-1.379 8.078-6.601l-6.897-5.124z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M345.039 227.179s-1.839 2.43-1.313 4.794c0 0-3.94-1.248-1.839-7.094-.001.001 2.693-.721 3.152 2.3zm6.19 3.186s-1.084 3.054.394 5.763c0 0-4.926-.148-3.94-6.207 0 0 1.576-1.625 3.546.444zm4.927-.296s.887 2.561 0 5.025c0 0 4.04-.246 3.35-6.059-.001 0-2.168-.788-3.35 1.034z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M352.56 171.153c-.373-3.038-19.409-4.828-18.227 11.166 0 0-2.112-.039-3.15 1.927-1.038 1.966-3.264 1.484-3.932.779 0 0 .148 3.561 4.562 3.412 0 0-1.397 1.1-1.199 2.708.198 1.608 1.359 3.635 1.286 5.02-.073 1.385-1.385 3.314-1.385 3.314s3.388-1.162 3.61-3.585c.223-2.423-.321-4.451.346-5.687 0 0-.321 1.706 1.187 3.858s1.582 4.772.964 6.404c0 0 3.758-1.855 3.041-5.44-.717-3.585-1.484-3.264-1.138-5.267 0 0 3.907 3.981 3.24 7.369 0 0 1.249-1.496 1.138-4.314-.111-2.819-2.068-4.715-2.068-4.715s13.005-6.505 11.725-16.949zm53.126 43.35s2.956-.098 6.009 2.167c3.054 2.266 4.401.657 7.455.657 3.054 0 3.777 3.186 3.777 3.186s5.911 1.478 3.546 5.813c-1.495 2.742-3.576 2.684-4.908 2.272.067 1.842-.352 3.866-2.481 4.231-4.04.69-5.813-1.478-4.926-4.828 0 0-.492 3.448-3.153 3.35-2.66-.098-4.434-1.577-4.138-5.123.296-3.546-4.434-1.379-8.078-6.601l6.897-5.124z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M422.961 227.179s1.839 2.43 1.313 4.794c0 0 3.94-1.248 1.839-7.094 0 .001-2.693-.721-3.152 2.3zm-6.192 3.186s1.084 3.054-.394 5.763c0 0 4.926-.148 3.94-6.207.002 0-1.575-1.625-3.546.444zm-4.925-.296s-.887 2.561 0 5.025c0 0-4.04-.246-3.35-6.059-.001 0 2.168-.788 3.35 1.034z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M415.44 171.153c.373-3.038 19.409-4.828 18.227 11.166 0 0 2.112-.039 3.15 1.927 1.038 1.966 3.264 1.484 3.932.779 0 0-.148 3.561-4.562 3.412 0 0 1.397 1.1 1.199 2.708-.198 1.608-1.361 3.635-1.286 5.02.074 1.385 1.385 3.314 1.385 3.314s-3.388-1.162-3.61-3.585c-.223-2.423.321-4.451-.346-5.687 0 0 .321 1.706-1.187 3.858s-1.582 4.772-.964 6.404c0 0-3.758-1.855-3.041-5.44.717-3.585 1.484-3.264 1.138-5.267 0 0-3.907 3.981-3.24 7.369 0 0-1.249-1.496-1.138-4.314.111-2.819 2.068-4.715 2.068-4.715s-13.006-6.505-11.725-16.949z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M423.227 143.893a1.568 1.568 0 00-2.185.447c-.997 1.505-2.311 2.386-4.014 2.691-5.641.979-13.773-4.575-16.135-6.312-3.423-2.516-7.651-2.953-10.458-1.224-1.12.371-4.544 1.45-6.434 1.45-1.89 0-5.314-1.08-6.434-1.45-2.807-1.729-7.036-1.292-10.458 1.224-2.361 1.737-10.494 7.29-16.135 6.312-1.704-.305-3.017-1.185-4.014-2.691a1.572 1.572 0 00-2.185-.447 1.576 1.576 0 00-.445 2.183c1.478 2.236 3.527 3.599 6.091 4.057.648.117 1.31.169 1.984.169 6.016 0 12.823-4.292 16.568-7.041 2.785-2.045 5.907-2.041 7.313-.856.355.301.759.776.662 1.333-.052.305-.253.579-.587.81a1.575 1.575 0 00-2.668-1.373c-.802.798-.889 2.093-.214 3.147.679 1.056 2.142 1.828 3.88 1.185.883-.329 1.589-.958 2.078-1.728 2.396-.697 4.565-.702 4.565-.702s2.169.004 4.565.702c.489.77 1.195 1.399 2.078 1.728 1.738.643 3.2-.129 3.88-1.185.675-1.053.588-2.349-.214-3.147a1.575 1.575 0 00-2.668 1.373c-.334-.231-.534-.505-.587-.81-.097-.557.307-1.032.662-1.333 1.406-1.185 4.527-1.188 7.313.856 3.745 2.75 10.552 7.041 16.568 7.041.674 0 1.336-.052 1.984-.169 2.564-.459 4.613-1.823 6.091-4.057a1.577 1.577 0 00-.447-2.183z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M343.83 145.634s-.259-3.523-.371-4.673c-.112-1.15-2.262-2.003-3.079-.853-.816 1.15-1.037 3.264 3.45 5.526zm.761-1.131s3.104-2.513 2.709-3.842c-.394-1.33-1.231-2.019-2.266-1.625-1.036.394-1.527 2.807-.443 5.467zm6.059-1.971c.446-.446.591-2.611-.64-2.857-1.231-.246-2.857 1.675-2.759 4.04 0-.001 2.561-.345 3.399-1.183zm-1.281 1.232c-1.429.457-2.808 1.675-2.808 1.675s2.561 1.871 4.335 1.281c1.774-.59.937-3.744-1.527-2.956z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M390.453 104.613s-.223 2.782-4.34 2.04c0 0 .112-2.893 4.34-2.04z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M424.169 145.634s.259-3.523.371-4.673c.111-1.15 2.262-2.003 3.079-.853.815 1.15 1.038 3.264-3.45 5.526zm-.76-1.131s-3.104-2.513-2.709-3.842c.394-1.33 1.231-2.019 2.266-1.625 1.035.394 1.526 2.807.443 5.467zm-6.059-1.971c-.446-.446-.591-2.611.64-2.857 1.231-.246 2.857 1.675 2.759 4.04-.001-.001-2.562-.345-3.399-1.183zm1.28 1.232c1.429.457 2.808 1.675 2.808 1.675s-2.561 1.871-4.335 1.281c-1.775-.59-.936-3.744 1.527-2.956z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#464655"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M382.369 111.168l1.25 1.25c.21.21.551.21.76 0l1.25-1.25a.538.538 0 00-.381-.918h-2.5a.538.538 0 00-.379.918z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M381.715 116.295c-.927 0-1.729-.332-2.274-.946-.564-.638-.803-1.515-.661-2.408.051-.299.351-.48.632-.456.301.05.505.332.457.634-.09.564.054 1.108.397 1.496.354.397.895.582 1.559.573 1.386-.055 1.618-1.41 1.628-1.465l-.007-2.473a.55.55 0 111.102 0v2.559c-.134.884-.856 2.408-2.68 2.482-.049.004-.102.004-.153.004z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M386.284 116.295c-.051 0-.103 0-.156-.003-1.824-.074-2.546-1.598-2.674-2.396l-.007-2.645a.55.55 0 111.102 0v2.559c.019.055.277 1.327 1.621 1.379.683.012 1.204-.169 1.559-.573.343-.388.488-.932.397-1.496a.554.554 0 01.457-.634c.288-.036.584.154.632.456.143.893-.097 1.77-.66 2.408-.543.613-1.344.945-2.271.945z"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M402.916 196.375s-3.94-6.305-8.538-2.102c-4.598 4.204-6.305 9.327-11.56 8.932-2.883-.216-4.356-1.533-5.121-2.684 1.396-1.149 2.386-2.894 1.312-5.461-2.365-5.649-11.034-3.94-13.399 2.233 0 0 2.759-9.064-6.831-6.042 0 0-1.182-6.305-6.699-4.598-3 .929-4.11 2.775-4.522 4.279-1.161-.27-2.652-.262-4.017.844l6.962 18.785 10.509.131 2.365 3.546 13.793 8.67 2.496 5.255h8.67s.657-5.386 5.255-6.962c4.598-1.577 12.085-4.861 12.874-7.751l.788-2.89 8.407.131c.919-.657 7.094-10.772 7.094-10.772l2.866-13.027c-1.583-.227-19.689-2.576-22.704 9.483z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M425.641 186.785l-.024.109.156.023-.132-.132z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M368.424 216.516c-3.406-1.373-4.622-3.297-5.043-4.322-.391-.948-.314-1.62-.207-1.866.217-.502.48-.822.725-.884.231-.055.523.077.576.11.11.126.169.526.063.625a1.578 1.578 0 002.162 2.296c.648-.609 1.02-1.462 1.045-2.401.03-1.006-.339-2.01-.982-2.688-.646-.683-1.971-1.305-3.383-1.053-.291.051-.619.17-.954.332.221-2.184-.621-3.302-1.239-3.753-1.039-.755-2.518-.772-3.763-.043-1.273.748-1.961 2.057-1.793 3.412.108.865.975 1.383 1.821 1.266.864-.105 1.543-.997 1.437-1.859.179-.163.414-.218.406-.256.003.003.211.348-.04 1.46-.393 1.742-1.314 2.814-2.74 3.19-1.775.49-4.049-.258-5.393-1.734-1.869-2.057-5.781-12.971-8.107-20.241 9.971-4.729 11.196-12.586 11.007-16.964-.288-6.669-4.278-13.492-8.715-14.899-1.746-.551-4.361-.665-6.259.314-1.075.561-1.821 1.419-2.157 2.487-.685 2.179.686 3.981 2.326 4.569 1.698.609 3.412-.124 4.071-1.746.327-.807-.03-1.73-.836-2.057-.811-.335-1.694.058-2.019.862-.066.036-.285-.046-.448-.231-.118-.136-.143-.268-.085-.449.052-.167.171-.413.605-.638 1.03-.538 2.752-.456 3.852-.108 2.539.803 6.246 5.77 6.516 12.029.161 3.741-.974 10.598-10.388 14.505a1.576 1.576 0 00-.9 1.928c.615 1.967 6.098 19.341 9.204 22.755 1.671 1.838 4.196 2.906 6.611 2.906.654 0 1.301-.077 1.92-.241 1.053-.279 1.932-.822 2.697-1.504.076.578.21 1.17.454 1.762.609 1.484 2.3 4.243 7.02 6.145 9.547 3.83 10.454 6.391 10.402 7.318-.029.508-.32.772-.557.905a1.162 1.162 0 01-.292.117 1.581 1.581 0 00.105-1.703 1.575 1.575 0 00-2.144-.607c-1.073.6-1.821 2.014-1.18 3.559.5 1.201 1.671 1.928 3.023 1.928a4.236 4.236 0 004.192-4.018c.27-4.779-6.937-8.236-12.616-10.515zm31.151 0c3.406-1.373 4.622-3.297 5.043-4.322.391-.948.314-1.62.207-1.866-.217-.502-.48-.822-.725-.884-.231-.055-.523.077-.576.11-.11.126-.169.526-.063.625a1.577 1.577 0 01-2.162 2.296c-.648-.609-1.02-1.462-1.045-2.401-.029-1.006.339-2.01.982-2.688.646-.683 1.971-1.305 3.383-1.053.291.051.619.17.954.332-.221-2.184.621-3.302 1.239-3.753 1.039-.755 2.518-.772 3.763-.043 1.273.748 1.961 2.057 1.793 3.412-.108.865-.975 1.383-1.821 1.266-.864-.105-1.543-.997-1.437-1.859-.179-.163-.414-.218-.406-.256-.003.003-.211.348.04 1.46.393 1.742 1.314 2.814 2.74 3.19 1.775.49 4.049-.258 5.393-1.734 1.869-2.057 5.781-12.971 8.107-20.241-9.971-4.729-11.196-12.586-11.007-16.964.288-6.669 4.278-13.492 8.715-14.899 1.746-.551 4.361-.665 6.259.314 1.075.561 1.821 1.419 2.157 2.487.685 2.179-.686 3.981-2.326 4.569-1.698.609-3.412-.124-4.071-1.746-.327-.807.03-1.73.836-2.057.811-.335 1.694.058 2.019.862.066.036.285-.046.448-.231.118-.136.143-.268.085-.449-.052-.167-.171-.413-.605-.638-1.03-.538-2.752-.456-3.852-.108-2.539.803-6.246 5.77-6.516 12.029-.161 3.741.974 10.598 10.388 14.505a1.576 1.576 0 01.9 1.928c-.615 1.967-6.098 19.341-9.204 22.755-1.671 1.838-4.196 2.906-6.611 2.906a7.501 7.501 0 01-1.92-.241c-1.053-.279-1.932-.822-2.697-1.504a6.959 6.959 0 01-.454 1.762c-.609 1.484-2.3 4.243-7.02 6.145-9.547 3.83-10.454 6.391-10.402 7.318.03.508.32.772.557.905.103.059.205.095.292.117a1.581 1.581 0 01-.105-1.703 1.575 1.575 0 012.144-.607c1.073.6 1.821 2.014 1.18 3.559-.5 1.201-1.671 1.928-3.023 1.928a4.236 4.236 0 01-4.192-4.018c-.271-4.779 6.937-8.236 12.616-10.515z",
    fill: "#FFE15A"
  })));
}

function SvgBo(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.104A8.829 8.829 0 018.828.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 112.088h511.999V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M244.598 117.957l-.653.817a26.011 26.011 0 00-1.47 2.254c-1.145 1.999-2.347 5.098-2.38 8.792-.012 1.801.36 3.988.974 5.727.666 1.92 1.771 3.756 3.168 5.396 1.399 1.655 3.268 2.931 5.267 3.873.991.503 2.079.792 3.158 1.058.535.163 1.105.171 1.654.279.276.052.562.029.841.051l.422.019.211.011.105.006.053.003.026.001c-.085.003.227-.004-.184.007.684-.04 1.514-.045 2.078-.114.492-.115.906-.095 1.47-.262 1.08-.266 2.167-.555 3.158-1.058 1.998-.942 3.868-2.218 5.267-3.873 1.397-1.64 2.502-3.476 3.168-5.396.638-1.953.979-3.822.974-5.736-.031-3.678-1.234-6.788-2.379-8.785a23.374 23.374 0 00-1.494-2.276l-.607-.776-.053-.067a1.116 1.116 0 011.482-1.629l.937.6c.578.434 1.474 1.047 2.439 2.039 1.937 1.918 4.451 5.334 5.358 10.298.449 2.376.498 5.25-.121 8.075-.6 2.854-1.817 5.805-3.782 8.387-1.93 2.594-4.523 4.888-7.606 6.435-1.521.811-3.176 1.4-4.874 1.81-.814.239-1.847.338-2.767.483-.862.095-1.475.097-2.226.15l-.292.001-.082-.004-.164-.008-.328-.017-.657-.035c-.437-.035-.876-.029-1.309-.104-.863-.152-1.741-.223-2.583-.466-1.698-.409-3.354-.999-4.874-1.81-3.083-1.547-5.676-3.842-7.606-6.435-1.964-2.583-3.181-5.534-3.782-8.387-.642-3.04-.562-5.596-.12-8.084.905-4.949 3.421-8.377 5.357-10.291.961-.988 1.86-1.607 2.463-2.061l.89-.559a1.124 1.124 0 011.473 1.661z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M253.782 205.866v13.971c0 1.394-1.685 2.092-2.67 1.107l-.769-.769a3.405 3.405 0 01-.998-2.408v-11.901h4.437z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.126 203.648v10.141c0 .609.242 1.194.673 1.625l1.545 1.545v-13.311h-2.218z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M244.908 203.648v5.442c0 .777.309 1.522.857 2.071l1.361 1.361v-8.874h-2.218z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.218 205.866v13.971c0 1.394 1.685 2.092 2.67 1.107l.769-.769a3.405 3.405 0 00.998-2.408v-11.901h-4.437z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M264.873 203.648v10.141c0 .609-.242 1.194-.673 1.625l-1.545 1.545v-13.311h2.218z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M267.092 203.648v5.442c0 .777-.309 1.522-.857 2.071l-1.361 1.361v-8.874h2.218z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M267.092 163.715l24.403-17.748v36.498c0 10.474-8.491 18.964-18.964 18.964-3.554 0-7.037-.999-10.051-2.882l-13.135-8.21v-26.93l17.747.308z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M282.621 152.422v25.607c0 10.474-8.491 18.964-18.964 18.964-1.575 0-3.127-.227-4.64-.61l-9.673-6.046v-26.93l17.748.308 15.529-11.293z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M275.966 157.261v16.531c0 10.474-8.491 18.964-18.964 18.964-1.575 0-3.128-.227-4.64-.61l-3.018-1.886v-26.853l17.748.308 8.874-6.454z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M292.826 141.974l9.762-4.88-7.1 8.873h-3.993z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M280.403 174.807l24.403-17.748v36.498c0 10.474-8.491 18.964-18.964 18.964-3.554 0-7.037-.999-10.051-2.882l-13.135-8.21v-26.93l17.747.308z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M289.277 168.354v16.531c0 10.474-8.491 18.964-18.964 18.964-1.575 0-3.127-.227-4.64-.61l-3.018-1.886V174.5l17.748.308 8.874-6.454z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M306.137 153.066l9.762-4.881-7.1 8.874h-3.993z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M273.747 170.37l24.403-17.748v36.498c0 10.474-8.491 18.964-18.964 18.964-3.554 0-7.037-.999-10.051-2.882L256 196.992v-26.93l17.747.308z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M289.277 159.076v25.607c0 10.474-8.491 18.964-18.964 18.964-1.575 0-3.127-.227-4.64-.61l-9.674-6.045v-26.93l17.748.308 15.53-11.294z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M282.621 163.917v16.531c0 10.474-8.491 18.964-18.964 18.964-1.575 0-3.127-.227-4.64-.61l-3.018-1.885v-26.853l17.748.308 8.874-6.455z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M299.482 148.629l9.761-4.881-7.1 8.874h-3.992z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M244.908 163.715l-24.403-17.748v36.498c0 10.474 8.491 18.964 18.964 18.964 3.554 0 7.037-.999 10.051-2.882l13.135-8.21v-26.93l-17.747.308z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M229.378 152.422v25.607c0 10.474 8.491 18.964 18.964 18.964 1.575 0 3.127-.227 4.64-.61l9.673-6.046v-26.93l-17.748.308-15.529-11.293z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M236.034 157.261v16.531c0 10.474 8.491 18.964 18.964 18.964 1.575 0 3.128-.227 4.64-.61l3.018-1.886v-26.853l-17.748.308-8.874-6.454z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M219.173 141.974l-9.761-4.88 7.1 8.873h3.992z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M231.597 174.807l-24.403-17.748v36.498c0 10.474 8.491 18.964 18.964 18.964 3.554 0 7.037-.999 10.051-2.882l13.135-8.21v-26.93l-17.747.308z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M222.723 168.354v16.531c0 10.474 8.491 18.964 18.964 18.964 1.575 0 3.127-.227 4.64-.61l3.018-1.886V174.5l-17.748.308-8.874-6.454z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M205.862 153.066l-9.761-4.881 7.1 8.874h3.992z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M238.252 170.37l-24.403-17.748v36.498c0 10.474 8.491 18.964 18.964 18.964 3.554 0 7.037-.999 10.051-2.882l13.135-8.21v-26.93l-17.747.308z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M222.723 159.076v25.607c0 10.474 8.491 18.964 18.964 18.964 1.575 0 3.127-.227 4.64-.61l9.673-6.046v-26.93l-17.748.308-15.529-11.293z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M229.378 163.917v16.531c0 10.474 8.491 18.964 18.964 18.964 1.575 0 3.127-.227 4.64-.61l3.018-1.886v-26.853l-17.748.308-8.874-6.454z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(222 148)",
    fill: "#FFBE5A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M4.947 55.354l-2.925-2.925a4.438 4.438 0 01.106-6.378L50.545.555 56.82 6.83 11.324 55.247a4.434 4.434 0 01-6.377.107z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 3.489,
    cy: 53.887,
    r: 2.218
  })), /*#__PURE__*/react.createElement("ellipse", {
    fill: "#F5F5F5",
    transform: "rotate(-45 275.687 151.69)",
    cx: 275.687,
    cy: 151.689,
    rx: 2.218,
    ry: 4.436
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(233 148)",
    fill: "#FFBE5A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M52.052 55.354l2.925-2.925a4.438 4.438 0 00-.106-6.378L6.454.555.179 6.83l45.496 48.417a4.434 4.434 0 006.377.107z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 53.51,
    cy: 53.887,
    r: 2.218
  })), /*#__PURE__*/react.createElement("ellipse", {
    fill: "#F5F5F5",
    transform: "rotate(45 236.326 151.694)",
    cx: 236.326,
    cy: 151.694,
    rx: 2.218,
    ry: 4.436
  }), /*#__PURE__*/react.createElement("ellipse", {
    fill: "#FFBE5A",
    cx: 255.999,
    cy: 178.141,
    rx: 19.616,
    ry: 23.294
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M255.999 157.059l1.042 4.52 2.387-3.977-.407 4.62 3.499-3.044-1.814 4.268 4.268-1.814-3.045 3.499 4.62-.407-3.976 2.387 4.519 1.041-4.519 1.041 3.976 2.387-4.62-.406 3.045 3.497-4.268-1.813 1.814 4.268-3.499-3.044.407 4.619-2.387-3.976-1.042 4.519-1.04-4.519-2.387 3.976.406-4.619-3.498 3.044 1.813-4.268-4.267 1.813 3.044-3.497-4.619.406 3.975-2.387-4.518-1.041 4.518-1.041-3.975-2.387 4.619.407-3.044-3.499 4.267 1.814-1.813-4.268 3.498 3.044-.406-4.62 2.387 3.977z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M280.541 177.719s-7.349 1.941-12.132-2.08c-5.316-4.469-9.302-6.579-11.01-7.371a2.154 2.154 0 00-1.825-.001c-1.224.565-3.476 1.736-5.468 3.49-2.912 2.566-11.855 7.626-13.657 7.626v11.029l14.073 12.196 16.639-.486 13.38-24.403z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.999 206.975c-14.068 0-25.513-12.938-25.513-28.84s11.444-28.84 25.513-28.84 25.513 12.938 25.513 28.84-11.445 28.84-25.513 28.84zm0-51.025c-10.398 0-18.857 9.953-18.857 22.185s8.459 22.185 18.857 22.185 18.857-9.953 18.857-22.185-8.459-22.185-18.857-22.185z",
    fill: "#3CC8FF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M252.177 200.946l.489 1.465 1.545.012c.2.001.282.257.122.375l-1.242.918.466 1.473a.208.208 0 01-.32.232l-1.257-.898-1.257.898a.209.209 0 01-.32-.232l.466-1.473-1.242-.918a.208.208 0 01.122-.375l1.545-.012.489-1.465a.207.207 0 01.394 0zm-6.935-2.981l.489 1.465 1.545.012c.2.001.282.257.122.375l-1.242.918.466 1.473a.208.208 0 01-.32.232l-1.257-.898-1.257.898a.209.209 0 01-.32-.232l.466-1.473-1.242-.918a.208.208 0 01.122-.375l1.545-.012.489-1.465a.207.207 0 01.394 0zm-5.569-5.061l.489 1.465 1.545.012c.2.001.282.257.122.375l-1.242.918.466 1.473a.208.208 0 01-.32.232l-1.257-.898-1.257.898a.209.209 0 01-.32-.232l.466-1.473-1.242-.918a.208.208 0 01.122-.375l1.545-.012.489-1.465a.207.207 0 01.394 0zm-3.798-6.737l.489 1.465 1.545.012c.2.001.282.257.122.375l-1.242.918.466 1.473a.208.208 0 01-.32.232l-1.257-.898-1.257.898a.209.209 0 01-.32-.232l.466-1.473-1.242-.918a.208.208 0 01.122-.375l1.545-.012.489-1.465a.207.207 0 01.394 0zm-1.676-7.833l.489 1.465 1.545.012c.2.001.282.257.122.375l-1.242.918.466 1.473a.208.208 0 01-.32.232l-1.257-.898-1.257.898a.209.209 0 01-.32-.232l.466-1.473-1.242-.918a.208.208 0 01.122-.375l1.545-.012.489-1.465c.062-.19.331-.19.394 0zm25.613 22.612l-.489 1.465-1.545.012a.208.208 0 00-.122.375l1.242.918-.466 1.473a.208.208 0 00.32.232l1.257-.898 1.257.898a.209.209 0 00.32-.232l-.466-1.473 1.242-.918a.208.208 0 00-.122-.375l-1.545-.012-.489-1.465a.207.207 0 00-.394 0zm6.935-2.981l-.489 1.465-1.545.012c-.2.001-.282.257-.122.375l1.242.918-.466 1.473a.208.208 0 00.32.232l1.257-.898 1.257.898a.209.209 0 00.32-.232l-.466-1.473 1.242-.918a.208.208 0 00-.122-.375l-1.545-.012-.489-1.465a.207.207 0 00-.394 0zm5.569-5.061l-.489 1.465-1.545.012c-.2.001-.282.257-.122.375l1.242.918-.466 1.473a.208.208 0 00.32.232l1.257-.898 1.257.898a.209.209 0 00.32-.232l-.466-1.473 1.242-.918a.208.208 0 00-.122-.375l-1.545-.012-.489-1.465c-.062-.19-.331-.19-.394 0zm3.798-6.737l-.489 1.465-1.545.012c-.2.001-.282.257-.122.375l1.242.918-.466 1.473a.208.208 0 00.32.232l1.257-.898 1.257.898a.209.209 0 00.32-.232l-.466-1.473 1.242-.918a.208.208 0 00-.122-.375l-1.545-.012-.489-1.465a.207.207 0 00-.394 0zm1.676-7.833l-.489 1.465-1.545.012c-.2.001-.282.257-.122.375l1.242.918-.466 1.473a.208.208 0 00.32.232l1.257-.898 1.257.898a.209.209 0 00.32-.232l-.466-1.473 1.242-.918a.208.208 0 00-.122-.375l-1.545-.012-.489-1.465c-.062-.19-.33-.19-.394 0z",
    fill: "#FFBE5A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M246.361 192.357l.737 3.526h.318v-2.406s.524 1.678 1.266 2.406h.6c-.287-.369-.803-1.134-.803-1.927 0-1.091.868-1.24.868-2.407h.744v4.333h.435l.806-3.861s.664 2.415 1.914 3.861h.556c-.401-.589-1.234-2.109-1.081-4.407 0 0 1.191-.596 1.191-2.208v-2.294c0-.429.349-.778.778-.778h.535s-.796-1.544-1.647-1.768v-.968l-.641.969c-.612.132-.973.698-.973 1.304v1.397a.778.778 0 01-.778.778h-2.781c-.823 0-2.142.823-2.142 1.878s.791 1.747.791 1.747l-.693.825z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.819 188.844h-.255c-2.016.11-3.142 1.436-3.142 1.436l2.045 2.045v3.848h2.447v-3.848l2.045-2.045c.001-.001-1.124-1.326-3.14-1.436z",
    fill: "#FFBE5A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M263.117 182.554h1v13.634h-1z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M263.511 182.445l-3.987 4.819s-.52-2.323 1.803-4.61l-5.13.936s1.56-2.912 5.65-2.6l-4.194-3.501s3.605-.207 5.442 2.496c0 0 1.039-3.119 3.951-3.258l-2.403 3.651s2.403-1.225 5.731-.15l-4.957 1.318s2.773.277 3.917 4.333l-4.298-2.946s1.318 1.56.832 4.61l-2.357-5.098zm-50.993-33.816l-9.762-4.881 7.1 8.874h3.993z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M262.94 142.978l26.337-8.104-13.981-5.242a22.157 22.157 0 00-7.789-1.412h-2.633a2.218 2.218 0 00-2.218 2.218v2.218h-13.312v-2.218a2.218 2.218 0 00-2.218-2.218h-2.633c-2.66 0-5.299.479-7.789 1.412l-13.981 5.242 26.337 8.104a2.22 2.22 0 011.332 3.113l-3.266 6.531h17.748l-3.266-6.531a2.219 2.219 0 011.332-3.113z",
    fill: "#825546"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#F5F5F5",
    cx: 255.999,
    cy: 134.875,
    r: 4.436
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.218 134.875a2.218 2.218 0 01-2.218 2.218h-8.874l3.787-3.787c.416-.416.98-.65 1.569-.65h3.517a2.22 2.22 0 012.219 2.219z",
    fill: "#FFBE5A"
  })));
}

function SvgBr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M251.41 47.208L65.354 160.459c-5.651 3.439-5.651 11.641 0 15.081L251.41 288.792a8.828 8.828 0 009.18 0l186.057-113.251c5.651-3.439 5.651-11.641 0-15.081L260.59 47.208a8.828 8.828 0 00-9.18 0z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#41479B",
    cx: 256,
    cy: 168,
    r: 70.621
  }), /*#__PURE__*/react.createElement("path", {
    d: "M195.401 131.873a70.117 70.117 0 00-7.605 18.077c39.149-2.946 97.062 8.006 133.922 43.773a70.114 70.114 0 004.59-19.522c-38.061-32.033-90.68-43.424-130.907-42.328zm63.524 60.226l1.88 5.638 5.943.046c.769.006 1.088.988.47 1.445l-4.781 3.531 1.793 5.666c.232.734-.604 1.341-1.229.893l-4.835-3.456-4.835 3.456c-.626.448-1.461-.159-1.229-.893l1.793-5.666-4.781-3.531c-.619-.457-.3-1.439.469-1.445l5.943-.046 1.88-5.638c.243-.73 1.275-.73 1.519 0zm23.099 14.585l.809 2.426 2.558.02a.345.345 0 01.202.622l-2.058 1.519.771 2.439a.344.344 0 01-.529.384l-2.081-1.487-2.081 1.487a.344.344 0 01-.529-.384l.771-2.439-2.058-1.519a.345.345 0 01.202-.622l2.558-.02.809-2.426a.346.346 0 01.656 0zm-33.086-25.295l.809 2.426 2.558.02a.345.345 0 01.202.622l-2.058 1.519.771 2.439a.344.344 0 01-.529.384l-2.081-1.487-2.081 1.487a.344.344 0 01-.529-.384l.771-2.439-2.058-1.519a.345.345 0 01.202-.622l2.558-.02.809-2.426a.346.346 0 01.656 0zm-44.808-2.942l.809 2.426 2.558.02a.345.345 0 01.202.622l-2.058 1.519.771 2.439a.344.344 0 01-.529.384l-2.081-1.487-2.081 1.487a.344.344 0 01-.529-.384l.771-2.439-2.058-1.519a.345.345 0 01.202-.622l2.558-.02.809-2.426c.107-.314.551-.314.656 0zm37.484 27.399l.809 2.426 2.558.02a.345.345 0 01.202.622l-2.058 1.519.771 2.439a.344.344 0 01-.529.384l-2.081-1.487-2.081 1.487a.344.344 0 01-.529-.384l.771-2.439-2.058-1.519a.345.345 0 01.202-.622l2.558-.02.809-2.426c.107-.313.552-.313.656 0zm-20.624-29.092l.662 1.984 2.092.017c.27.002.383.348.166.509l-1.683 1.242.631 1.994a.282.282 0 01-.433.314l-1.702-1.216-1.702 1.216a.282.282 0 01-.433-.314l.631-1.994-1.683-1.242a.282.282 0 01.166-.509l2.092-.017.662-1.984a.281.281 0 01.534 0zm62.829-40.961l.828 2.482 2.616.02a.352.352 0 01.206.636l-2.104 1.554.789 2.495a.352.352 0 01-.541.393l-2.129-1.522-2.129 1.522a.352.352 0 01-.541-.393l.789-2.495-2.104-1.554a.352.352 0 01.206-.636l2.616-.02.828-2.482a.353.353 0 01.67 0zm-76.807 28.823l.662 1.984 2.092.017c.27.002.383.348.166.509l-1.683 1.242.631 1.994a.282.282 0 01-.433.314l-1.702-1.216-1.702 1.216a.282.282 0 01-.433-.314l.631-1.994-1.683-1.242a.282.282 0 01.166-.509l2.092-.017.662-1.984a.281.281 0 01.534 0zm10.1 27.964l1.002 3.006 3.168.024c.41.003.58.526.25.77l-2.549 1.882.956 3.02a.427.427 0 01-.655.476l-2.578-1.842-2.578 1.842a.427.427 0 01-.655-.476l.956-3.02-2.549-1.882a.427.427 0 01.25-.77l3.168-.024 1.002-3.006c.133-.388.683-.388.812 0zm77.791 14.734l.63 1.891 1.993.015a.268.268 0 01.158.484l-1.603 1.184.601 1.9c.078.246-.202.449-.413.299l-1.621-1.159-1.622 1.159a.269.269 0 01-.413-.299l.601-1.9-1.603-1.184a.268.268 0 01.158-.484l1.993-.015.63-1.891c.083-.245.43-.245.511 0zm6.974-14.43l.809 2.426 2.558.02a.345.345 0 01.202.622l-2.058 1.519.771 2.439a.344.344 0 01-.529.384l-2.081-1.487-2.081 1.487a.344.344 0 01-.529-.384l.771-2.439-2.058-1.519a.345.345 0 01.202-.622l2.558-.02.809-2.426a.346.346 0 01.656 0z",
    fill: "#F5F5F5"
  })));
}

function SvgBs(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989zm-8.829 223.632H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59l202.841-161.015c2.946-2.338 2.946-6.812 0-9.151L3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z",
    fill: "#464655"
  })));
}

function SvgBt(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H8.828A8.829 8.829 0 000 9.104v317.792a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828V9.104a8.83 8.83 0 00-8.829-8.828z",
    fill: "#FF6E55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.591L508.743 2.41c-1.53-1.273-3.425-2.134-5.571-2.134H8.828A8.829 8.829 0 000 9.104v317.792c0 2.729 1.311 5.076 3.256 6.695z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(204 60)",
    fill: "#FFF5DC"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M77.52 30.026c-4.436.95-11.405-1.426-11.405-1.426 1.436 2.473 5.276 4.138 8.739 5.186a78.583 78.583 0 01-9.532.359c-14.257-.318-20.909 9.029-20.909 9.029 5.069-3.169 10.296-3.169 18.058-2.059 7.762 1.109 24.236-3.801 24.236-3.801l1.426-6.336c0-.001-6.177-1.902-10.613-.952z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M92.173.326s7.371 1.562 14.852 5.855c-.45.236-.881.525-1.291.864-2.418-1.202-5.339-2.175-9.127-2.561 0 0 3.921 1.02 7.688 3.97-.975 1.149-1.779 2.456-2.398 3.618-8.287-8.886-17.249-2.955-17.249-2.955 11.117-.845 13.74 6.298 14.366 9.748-2.153-1.439-4.181-2.625-6.083-3.59.279-.209.42-.397.747-.612 0 0-.696.028-1.662.172-14.188-6.819-21.149-1.44-21.149-1.44 6.301-.77 12.124.868 16.744 2.908-2.03 1.169-3.405 3.228-2.271 6.728-7.957-2.165-17.957-4.298-22.869-2.983-8.871 2.376-6.019 10.613-6.019 10.613s.159-5.544 6.178-6.812c4.506-.949 26.928 6.178 26.928 6.178l7.286-3.485-3.009-2.535s-5.784-2.322-3.304-6.312c4.147 2.211 6.788 4.41 6.788 4.41l1.783-2.605c.087.674.118 1.18.118 1.18l5.069-2.217 1.109-1.585c.444-2.404 1.178-4.114 2.023-5.394a16.61 16.61 0 013.284 6.937l4.594.476s-.746-5.31-5.886-9.533c.456-.324.906-.593 1.349-.772 3.385 2.429 6.542 5.466 8.734 9.276l8.474-.119c.002.002-13.938-15.522-35.797-17.423z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 173.036,
    cy: 75.172,
    r: 10.613
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 148.264,
    cy: 164.496,
    r: 14.238
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 39.718,
    cy: 157.6,
    r: 11.285
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 13.765,
    cy: 211.194,
    r: 13.028
  }), /*#__PURE__*/react.createElement("path", {
    d: "M137.872 47.452s24.402 8.696 30.294 11.642c8.317 4.158 21.385-7.96 30.532 1.426 0 0-1.585-6.257-9.187-6.732 0 0 .159-6.178-6.969-5.86 0 0 5.227 3.801 2.218 6.495 0 0-2.059-4.594-7.921-3.801 0 0 4.435 1.742 3.327 4.435 0 0-7.049 3.405-10.217 1.188-3.168-2.218-28.195-15.722-36.116-16.039l4.039 7.246z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M335.614 115.054s5.227 1.545 12.831 9.504c3.523 3.689 12.592 3.921 11.167-3.208-1.426-7.128-19.008-11.523-20.909-11.523-1.9 0-3.089 5.227-3.089 5.227z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M373.711 99.373l-9.98 3.327s1.109 6.772-4.594 9.742c-3.512 1.83-5.86 6.573-5.703 10.058 0 0 3.327-4.594 8.078-7.128 1.119-.597 2.151-1.12 3.091-1.651-.189 2.375-.239 4.868.078 7.037.95 6.494-1.109 8.712-1.109 8.712s5.545-4.277 4.91-11.246c-.244-2.678.195-4.575.877-6.015.491 4.853 3.082 7.125 3.082 7.125-1.901-3.801 2.059-7.921 3.644-11.247 1.586-3.329-2.374-8.714-2.374-8.714zm25.225-13.781c-3.929-1.336-7.722 1.069-9.98 3.089-.961.86-3.493 1.297-6.084 1.532 1.73-1.224 3.572-2.669 4.541-3.907 2.138-2.732 6.059-3.208 9.385-4.277 3.327-1.069 4.753-5.346 4.753-5.346s-1.782 2.614-6.772 2.376-6.653-.476-9.98 3.089c-1.023 1.096-2.455 1.943-3.94 2.624.032-1.557.167-3.538.613-4.881.832-2.495 4.633-4.514 4.871-9.504.237-4.99.476-4.514 3.327-7.485 2.851-2.97 3.683-8.554 2.851-6.772-.832 1.782-4.633 3.921-7.841 6.891s-.95 6.296-2.614 8.91c-1.663 2.614-5.583 3.208-5.822 8.078-.237 4.871-3.683 7.722-3.683 7.722s-8.435 4.633 1.663 8.317c10.099 3.683 18.268-6.563 23.285-6.296 11.167.594 14.137-3.089 14.137-3.089-1.899-.001-6.77.949-12.71-1.071zm-122.485 78.251c-.633-.476-11.563-12.514-15.207-14.257l.792 3.01s-2.376-.159-6.653-5.386c-4.277-5.227-7.445-6.653-7.445-6.653s3.01 4.753 2.851 7.762c0 0-6.495-.476-13.464 2.851 0 0-3.168-6.178-5.86-7.286 0 0 .95 6.495-1.267 8.078-2.218 1.585 20.909 12.514 24.077 12.831 3.168.317 22.176-.95 22.176-.95zm14.415-23.602c-.225-.056-1.394.766-2.902 1.843-.666-3.847-2.008-11.624-2.008-11.981 0-.476-10.772-15.523-11.089-16.157-.006-.011-.041-.012-.049-.022 1.046-2.53 2.173-6.838-4.228-3.463-8.713 4.595-12.197 15.207-12.197 15.207 1.986-2.072 5.452-3.654 8.218-4.682.057 1.292.067 2.826-1.724 5.474-3.644 5.385-1.585 7.445-1.585 7.445 2.851-4.91 9.187-5.386 9.187-5.386-.95 5.861 2.376 9.187 2.376 9.187l2.692-3.168c-.332 4.535 2.095 9.401 3.604 11.958-.596.288-1.14.509-1.544.555-2.694.318-6.969 2.376-6.969 2.376s3.466-.739 5.434.781c1.967 1.521 5.099 2.684 6.798 2.326 0 0-.806 4.115.089 5.635 0 0-2.237-.628-4.831-.537-2.594.09-4.482-1.71-4.482-1.71s4.753 6.81 8.237 8.236c3.484 1.426 9.504-3.801 9.504-3.801s-1.897-19.959-2.531-20.116zm-81.894 99.319s-3.01.317-5.86 4.594l-1.267-4.435s-3.485 2.535-7.286.95c0 0 3.485-.792 4.118-3.96.633-3.168 1.901-3.485 1.901-3.485s-2.376-2.535-4.91-2.376c0 0 6.969-3.644 10.772-.159 3.798 3.485 2.532 8.871 2.532 8.871zm83.794-35.007s-3.01.317-5.86 4.594l-1.267-4.436s-3.485 2.535-7.286.95c0 0 3.485-.792 4.118-3.96.633-3.168 1.901-3.485 1.901-3.485s-2.376-2.535-4.91-2.376c0 0 6.969-3.644 10.772-.159 3.8 3.486 2.532 8.872 2.532 8.872zm51.38-45.065s-1.47 2.646.394 7.436l-4.359-1.511s.073 4.309-3.407 6.51c0 0 1.353-3.307-.876-5.646s-1.761-3.558-1.761-3.558-3.439.489-4.766 2.655c0 0 1.021-7.798 6.057-8.908 5.037-1.109 8.718 3.022 8.718 3.022z",
    fill: "#FFF5DC"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M359.398 213.021l3.066 1.828c-.892-.767-1.951-1.342-3.066-1.828z",
    fill: "#FF6E55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M186.478 228.313s-14.098 19.8-30.255 24.077l5.703-7.286s-7.604 6.653-16.157 8.078l10.296-11.88s-22.968 21.385-52.431 25.82c0 0 22.81-14.414 27.404-19.484 0 0-11.089 4.436-21.068 4.594 0 0 28.671-11.089 33.423-15.523 0 0-11.405 2.535-18.533.159 0 0 24.711-7.128 28.195-6.178 0 0-14.257-5.703-22.81-5.069 0 0 14.573-3.485 31.522 0l-3.644-3.96s9.663-2.535 19.167-3.168c9.504-.633 4.753-1.426 4.753-1.426l1.109-3.168s-6.178.792-11.246 0c0 0 15.207-8.554 19.484-12.355 4.277-3.801 1.426-2.059 1.426-2.059s-7.921 2.692-10.772 3.168c0 0 7.128-8.237 9.346-13.623 0 0-6.495 2.535-12.039 0 0 0 6.653-1.901 9.98-5.227 3.327-3.327 8.237-11.603 8.237-11.603l-5.703 2.495s4.99-8.554 9.386-10.692c0 0-7.485.594-9.86-1.188 0 0 7.96-1.901 10.336-3.801 2.376-1.901 7.604-6.891 12.949-4.99 0 0 7.485-6.891 4.99-11.405 0 0 4.871.356 7.366 3.327 2.495 2.97 6.415 5.465 6.415 5.465l-20.355 15.919-15.523 50.372-11.091 10.611z",
    fill: "#FFF5DC"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M385.907 133.27c5.862 9.504-1.426 10.455-1.426 10.455-1.109-9.029-8.712-7.919-8.712-7.919l2.059 6.653c-12.672 1.585-11.722-11.089-11.722-11.089-1.901 1.585-5.069 8.078-5.069 8.078s-34.215 11.405-57.342-22.493c0 0-.633-6.02 1.268-8.872l-14.257-10.771-18.375 2.535s-7.286 16.473 1.585 26.612c8.871 10.137 19.325 24.394 17.424 31.047-1.127 3.944-4.48 5.549-9.135 5.214-3.199-.231-7.011-1.378-11.139-3.313-10.138-4.753-34.849-14.889-52.59-6.653-17.741 8.237-19.666 22.49-23.127 33.582-3.064 9.818-9.863 34.884-58.299 57.753-2.314 1.092-1.137 4.609 1.346 3.992 20.996-5.22 49.621-13.918 58.457-24.203l7.128.237-2.614 10.93s9.267 2.851 10.692 16.395c0 0-16.236 4.435-7.049 18.375 0 0 1.426-10.138 12.672-10.613 0 0 2.535 3.327 8.078 3.801 0 0 2.851 4.595 1.426 8.396 0 0 11.246-3.485 1.742-16.95 0 0 10.613-2.534 12.039 10.772 0 0 6.812-21.543-17.503-19.959 0 0 0-3.801-6.415-10.692 0 0-1.583-3.882 0-9.267a65.546 65.546 0 001.268-5.017 13.24 13.24 0 006.018 1.692s3.96 6.494 15.682 5.385c0 0-8.554-3.959-7.762-11.563.792-7.604 10.772-11.722 15.049-8.713 0 0-1.109-9.98-16.632-3.485 0 0 0-7.445 8.237-7.919 0 0-13.305-10.138-16.316 9.187l-5.506 1.376c-2.69-7.457-6.098-24.771 8.991-31.077 15.919-6.653 32.552 8.317 62.015 9.742 0 0-2.851 17.345 6.653 21.622 9.504 4.277 32.789 8.317 32.789 8.317-.237 25.027 17.978 21.7 17.978 21.7-8.841-5.298-8.841-15.406-3.384-21.31 7.437-8.046 20.333-.392 20.333-.392-.182-12.182-17.266-10.297-17.266-10.297 2.692-7.919 13.305-9.98 13.305-9.98-14.731-5.385-26.928 10.535-26.928 10.535l-24.949-7.128s-.95-4.99 4.99-11.642c5.94-6.652 10.93-17.821 9.267-29.7 0 0 6.891-4.832 15.444-.079 8.554 4.753 26.928-5.703 26.928-5.703 7.921 10.137 26.77 8.237 29.304-3.959 2.538-12.199-6.65-13.625-6.65-13.625z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M359.771 104.125c-4.712-2.749-13.148-5.069-15.999 1.267-2.851 6.336-6.019 12.672-15.84 12.355-9.821-.317-14.257 8.078-21.068 5.703 0 0 6.336-2.059 7.604-5.069 1.267-3.01 6.336-8.554 6.336-8.554l-.633-5.703s-11.722.632-15.207 3.959c-3.485 3.327-16.632-2.85-16.632-2.85l1.585-13.781s10.137-15.523 24.236-14.414c14.098 1.109 16.474-2.535 23.285-2.059 6.812.476 10.296 7.445 17.582 9.029 7.286 1.585 21.859-1.426 23.76 3.01 1.901 4.435-3.644 6.178-5.069 12.355-1.426 6.177-4.436 10.297-13.94 4.752z"
  })), /*#__PURE__*/react.createElement("g", {
    transform: "translate(289 76)",
    fill: "#FFF5DC"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M29.587 24.165s-6.812 4.594-12.514 2.692C11.37 24.956 6.301 25.59.441 27.49c0 0 10.772-1.267 15.207 2.851 4.435 4.118 15.682 1.426 16.474-.317l-2.535-5.859z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M33.072 34.777s-6.653 4.753-13.305 3.485c-6.653-1.267-12.672 1.426-12.672 1.426s4.91-5.386 11.563-4.435c6.653.95 9.028-5.544 9.028-5.544l4.436.317.95 4.751z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 38.459,
    cy: 28.916,
    r: 8.872
  }), /*#__PURE__*/react.createElement("path", {
    d: "M33.229 22.264s-3.485-4.435-12.197-2.692c-8.712 1.742-10.772-1.426-10.772-1.426s4.118 6.336 10.613 5.544c6.495-.792 9.187 3.644 9.187 3.644l3.169-5.07zm29.309-11.091c.783-1.079 1.768-2.108 3.114-2.891.794-.462 1.611-.754 2.42-.994.18-1.203.003-2.5-.683-3.678-1.497-2.57-4.61-3.546-6.954-2.18-2.343 1.365-3.029 4.555-1.532 7.125a5.501 5.501 0 003.635 2.618zm-7.781 10.204c.446-1.257 1.099-2.521 2.168-3.655.631-.668 1.332-1.178 2.039-1.638-.168-1.204-.704-2.399-1.696-3.335-2.163-2.041-5.426-2.097-7.287-.125-1.862 1.972-1.617 5.226.547 7.267a5.487 5.487 0 004.229 1.486z"
  }))));
}

function SvgBw(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M0 141.517h511.999v52.965H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 123.862h511.999v17.655H0zm0 70.621h511.999v17.655H0z",
    fill: "#F5F5F5"
  })));
}

function SvgBy(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896v-79.448h512v79.448a8.828 8.828 0 01-8.828 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H8.828A8.829 8.829 0 000 9.104v238.344h512V9.104a8.829 8.829 0 00-8.828-8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M70.621 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h61.793v335.448z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.833 321.063h3.122v-8.75H8.833v8.75zm24.918 0h3.123v-8.75h-3.123v8.75zm24.934 0h3.108v-8.75h-3.108v8.75zm-37.377-23.46h3.091v-7.292h-3.091v7.292zm24.933 0h3.108v-7.292h-3.108v7.292zM8.833 278.581h3.122v-8.75H8.833v8.75zm24.918 0h3.123v-8.75h-3.123v8.75zm24.934 0h3.108v-8.75h-3.108v8.75zm-43.591 11.73h3.091v-7.357h3.123v-7.292h3.091v7.292h3.139v7.357h3.091v7.292h-3.091v7.354h-3.139v7.354h-3.091v-7.354h-3.123v-7.354h-3.091v-7.292zm24.919 0h3.122v-7.357h3.107v-7.292h3.108v7.292h3.107v7.357h3.122v7.292h-3.122v7.354H49.35v7.354h-3.108v-7.354h-3.107v-7.354h-3.122v-7.292zm6.228-29.294v7.292h-3.137v7.354h-3.091v7.292h-3.139v7.357h-3.123v-7.357h-3.123v-7.292h-3.091v-7.354h-3.139v-7.292h-3.091v7.292h-3.123v7.354h-3.091v7.292h-3.139v7.357H8.833v7.292h3.122v7.354h3.139v7.354h3.091v7.292h3.123v7.293h3.123v-7.293h3.107v-7.292h3.091v-7.354h3.123v-7.354h3.123v7.354h3.139v7.354h3.122v7.292h3.107v7.293h3.108v-7.293h3.107v-7.292h3.122v-7.354h3.123v-7.354h3.091v-7.292h-3.108v-7.357H55.58v-7.292h-3.122v-7.354h-3.107v-7.292h-3.11zm7.72-7.29h1.554v-2.916h1.569v2.916h1.569v2.915h-1.569v2.98h-1.569v-2.98h-1.554v-2.915zm0-10.21v4.313h-1.537v4.438h-1.569v5.834h1.569v4.374h1.537v4.374h4.693v-4.374h1.554v-4.374h1.537v-5.834h-1.537v-4.438h-1.554v-4.313h-4.693zm-42.006 10.145h1.569v-2.915h1.569v2.915h1.521v2.98h-1.521v2.916h-1.569v-2.916h-1.569v-2.98zm0-10.209v4.376h-1.554v4.374H8.833v5.897h1.568v4.374h1.554v4.374h4.66v-4.374h1.569V258.1h1.523v-5.897h-1.523v-4.374h-1.569v-4.376h-4.66zm17.135 10.209h1.537v-2.915h1.586v2.915h1.537v2.98h-1.537v2.916h-1.586v-2.916H29.09v-2.98zm7.784 0h1.569v-2.915h1.569v2.915h1.537v2.98h-1.537v2.916h-1.569v-2.916h-1.569v-2.98zm0-10.209v4.376h-3.123v-4.376h-4.66v4.376h-1.554v4.374h-1.569v5.897h1.569v4.374h1.554v4.374h4.66v-4.374h3.123v4.374h4.676v-4.374h1.585V258.1h1.523v-5.897h-1.523v-4.374H41.55v-4.376h-4.676zm-28.041-2.98h3.122v-8.749H8.833v8.749zm24.918 0h3.123v-8.749h-3.123v8.749zm24.934 0h3.108v-8.749h-3.108v8.749zM8.833 203.887h3.122v-5.832H8.833v5.832zm49.852 0h3.108v-5.832h-3.108v5.832zm-24.934-20.48h3.123v-7.292h-3.123v7.292zM8.833 163.626v8.811h3.122v-8.811H8.833zm17.134 0v8.811h3.123v-8.811h-3.123zm15.583 0v8.811h3.107v-8.811H41.55zm17.135 0v8.811h3.108v-8.811h-3.108zm-20.242-5.135v2.916h-1.569v2.219h-3.123v-2.219h-1.537v-2.916h-3.123v4.374h1.537v2.219h1.586v5.833h-1.586v2.219h-1.537v4.374h3.123v-2.915h1.537v-2.157h3.123v2.157h1.569v2.915h3.107v-4.374h-1.537v-2.219h-1.569v-5.833h1.569v-2.219h1.537v-4.374h-3.107zm-4.692 1.456h3.123v-7.292h-3.123v7.292zM8.833 138.008h3.122v-5.832H8.833v5.832zm49.852 0h3.108v-5.832h-3.108v5.832zM8.833 104.34h3.122v-8.812H8.833v8.812zm24.918 0h3.123v-8.812h-3.123v8.812zm24.934 0h3.108v-8.812h-3.108v8.812zm-37.377 63.787v-3.044h3.091v-5.073h3.139v-5.897h4.676v-6.91h1.537v-3.361h3.123v3.297h1.569v6.975h4.691v5.896h3.107v5.073h3.108v5.833h-3.108v5.199h-3.107v5.832h-4.691v6.912h-1.569v3.297h-3.123v-3.297h-1.537v-6.912h-4.676v-5.834h-3.139v-5.199h-3.091v-2.787zm24.933-81.413v7.354h-3.137v7.292h-3.091v7.357h-3.139v7.291h-3.123v-7.292h-3.123v-7.357h-3.091v-7.292h-3.139v-7.354h-3.091v7.354h-3.123v7.292h-3.123v7.357h-3.107v7.291H8.833v7.354h3.122v7.354h3.107v7.292h3.123v7.293h3.123v-7.293h3.091v-7.292h3.139v-7.354h-3.139v-8.814h3.139v5.897h3.091v11.731h1.586v7.228l-4.676.063v5.834H24.4v4.374h-3.091v7.354h-3.123v-7.354h-3.123V145.3h-3.107v-4.376H8.833v13.188h3.122v5.897h3.107v5.073h3.123v5.835h-3.123v5.199h-3.107v5.834H8.833v13.188h3.122v-4.439h3.107v-4.374h3.123v-7.292h3.123v7.292h3.091v4.374h3.139v5.897l4.676.063v7.228h-1.586v11.731h-3.091v5.897h-3.139v-8.877h3.139v-7.292h-3.139v-7.292h-3.091v-7.357h-3.123v7.357h-3.123v7.292h-3.107v7.292H8.833v7.354h3.122v7.292h3.139v7.357h3.091v7.354h3.123v7.292h3.091v-7.292h3.139v-7.354h3.091v-7.357h3.123v-7.292h3.123v7.292h3.139v7.357h3.122v7.354h3.107v7.292h3.108v-7.292h3.107v-7.354h3.122v-7.357h3.106v-7.292h3.107v-7.354h-3.108v-7.292h-3.106v-7.292h-3.122v-7.357H49.35v7.357h-3.108v7.292h-3.137v7.292h3.137v8.877h-3.137v-5.897h-3.091v-11.731h-1.569v-7.292h4.691v-5.897h3.107v-4.374h3.108v-7.292h3.107v7.292h3.122v4.374h3.123v4.439h3.091v-13.188h-3.092v-5.834h-3.123v-5.199h-3.122v-5.832h3.122v-5.073h3.123v-5.897h3.092v-13.188h-3.092v4.376h-3.123v4.374h-3.122v7.354H49.35v-7.354h-3.108v-4.374h-3.107v-5.834h-4.691v-7.292h1.569v-11.731h3.091v-5.897h3.137v8.813h-3.137v7.354h3.137v7.292h3.108v7.293h3.107v-7.293h3.122v-7.292h3.106v-7.354h3.11v-7.354h-3.108v-7.292H55.58v-7.357h-3.122v-7.292h-3.107v-7.354h-3.11v.002zm-34.286-7.292h1.539v-2.916h1.6v2.916h1.521v2.916h-1.521v2.98h-1.6v-2.98h-1.539v-2.916zm0-5.897h-1.554v4.438H8.833v5.834h1.568v4.438h1.554v4.376h4.66v-4.376h1.569v-4.438h1.523v-5.834h-1.523v-4.438h-1.569v-4.311h-4.66v4.311zm17.135 5.897h1.537v-2.916h1.586v2.916h1.537v2.916h-1.537v2.98h-1.586v-2.98H29.09v-2.916zm7.784 0h1.569v-2.916h1.569v2.916h1.537v2.916h-1.537v2.98h-1.569v-2.98h-1.569v-2.916zm-7.784-5.897h-1.554v4.438h-1.569v5.834h1.569v4.438h1.554v4.376h4.66v-4.376h3.123v4.376h4.676v-4.376h1.585v-4.438h1.523v-5.834h-1.523v-4.438h-1.585v-4.311h-4.676v4.311H33.75v-4.311h-4.66v4.311zm24.871 5.834h1.554v-2.854h1.569v2.854h1.569v2.98h-1.569v2.915h-1.569v-2.915h-1.554v-2.98zm0-10.208v4.374h-1.537v4.438h-1.569v5.834h1.569v4.374h1.537v4.376h4.693v-4.376h1.554v-4.374h1.537v-5.834h-1.537v-4.438h-1.554v-4.374h-4.693zM8.833 66.234h3.122v-8.75H8.833v8.75zm24.918 0h3.123v-8.75h-3.123v8.75zm24.934 0h3.108v-8.75h-3.108v8.75zm-37.377-20.48h3.091v-7.357h-3.091v7.357zm24.933 0h3.108v-7.357h-3.108v7.357zM8.833 23.752h3.122v-8.75H8.833v8.75zm24.918 0h3.123v-8.75h-3.123v8.75zm24.934 0h3.108v-8.75h-3.108v8.75zM15.094 38.398h3.091v-7.292h3.123v-7.354h3.091v7.354h3.139v7.292h3.091v7.357h-3.091v7.292h-3.139v7.354h-3.091v-7.354h-3.123v-7.292h-3.091v-7.357zm24.919 0h3.122v-7.292h3.107v-7.354h3.108v7.354h3.107v7.292h3.122v7.357h-3.122v7.292H49.35v7.354h-3.108v-7.354h-3.107v-7.292h-3.122v-7.357zm6.228-29.294v7.357h-3.107v7.292h-3.122v7.354h-3.139v7.292H33.75v-7.292h-3.123v-7.354h-3.091v-7.292H24.43V9.104h-3.123v7.357h-3.123v7.292h-3.091v7.354h-3.139v7.292H8.833v7.357h3.122v7.292h3.139v7.354h3.091v7.354h3.123v7.292h3.091v-7.292h3.139v-7.354h3.091v-7.354h3.123v-7.292h3.123v7.292h3.139v7.354h3.091v7.354h3.137v7.292h3.108v-7.292h3.107v-7.354h3.122v-7.354h3.106v-7.292h3.108v-7.357h-3.092v-7.292h-3.123v-7.354h-3.122v-7.292h-3.107V9.104h-3.108z",
    fill: "#FF4B55"
  })));
}

function SvgBz(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 35.586H0V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v26.482zM0 300.414h512v26.483a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897v-26.483z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 35.586h511.999v264.827H0z"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#F5F5F5",
    cx: 255.999,
    cy: 168,
    r: 114.758
  }), /*#__PURE__*/react.createElement("path", {
    d: "M233.979 228.344l-17.704 2.951a3.661 3.661 0 01-4.263-3.612v-6.661h21.966l.001 7.322zm43.934 0l17.704 2.951a3.661 3.661 0 004.263-3.612v-6.661h-21.966v7.322h-.001z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#965032"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M252.285 109.248h-1.53a4.801 4.801 0 01-4.312-2.664l-2.708-5.417 2.456-1.23 2.708 5.417a2.065 2.065 0 001.856 1.148h1.53v2.746zm-26.275 4.655l-4.54-9.077 2.456-1.228 4.54 9.077z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M260.98 151.462l-7.502-7.501a8.818 8.818 0 01-2.566-6.193v-2.525c0-.926-.22-1.856-.634-2.685l-1.87-3.74a2.279 2.279 0 00-2.047-1.266h-6.457a5.006 5.006 0 01-4.503-2.782l-2.649-5.299 2.456-1.23 2.649 5.299a2.279 2.279 0 002.047 1.266h6.457a5.006 5.006 0 014.503 2.782l1.87 3.74a8.803 8.803 0 01.925 3.915v2.525c0 1.583.642 3.132 1.761 4.247l2.816 2.817V132.04a15.39 15.39 0 00-3.361-9.578 18.155 18.155 0 01-3.961-11.294v-10.615h2.745v10.615a15.39 15.39 0 003.361 9.578 18.15 18.15 0 013.961 11.294v19.422h-.001z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M254.448 144.361h-4.076a6.07 6.07 0 01-5.665-3.936l-1.032-2.782 2.574-.958 1.032 2.782a3.308 3.308 0 003.091 2.148h4.076v2.746zm-1.702-11.867l-2.513-1.108 15.452-35.041 2.514 1.108zm19.217-4.941h-13.271v-2.745h10.526v-13.271h2.745z"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#73AF00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M246.793 140.825H235.81a5.492 5.492 0 110-10.984h10.984a5.492 5.492 0 11-.001 10.984zm25.628 0h-10.984a5.492 5.492 0 110-10.984h10.984a5.492 5.492 0 110 10.984z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M283.404 129.842H268.76a5.492 5.492 0 110-10.984h14.644a5.492 5.492 0 110 10.984zm3.661-14.644h-25.628a5.492 5.492 0 110-10.984h25.628a5.492 5.492 0 110 10.984zm-14.644-14.645h-7.322a5.492 5.492 0 110-10.984h7.322a5.492 5.492 0 110 10.984zm-47.594 7.322h-3.661a5.492 5.492 0 110-10.984h3.661a5.492 5.492 0 110 10.984zm25.628-3.661h-10.984a5.492 5.492 0 110-10.984h10.984a5.492 5.492 0 110 10.984zm-3.662 18.305h-21.966a5.492 5.492 0 110-10.984h21.966a5.492 5.492 0 110 10.984zm64.069 76.536H201.029a7.322 7.322 0 100 14.644h29.289a7.322 7.322 0 007.322 7.322h36.611a7.322 7.322 0 007.322-7.322h29.289a7.322 7.322 0 100-14.644z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M328.938 134.071c-.274-.55-1.701.103-2.593-.228-11.06-4.111-25.91-11.601-35.616-16.707l-1.949-3.085-18.398-8.941a2.469 2.469 0 00-3.225 1l-.907 1.594a2.47 2.47 0 001.006 3.411l17.518 9.114 4.95-.366 19.241 9.892s13.073 6.687 13.768 7.178c.695.491 1.094 3.242 2.39 3.012.93-.165 4.999-3.495 3.815-5.874z",
    fill: "#BE7855"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M207.589 204.547s1.22 5.416.076 6.026c-1.144.61-7.246.61-7.093-.686.152-1.297.992-5.873.992-5.873l6.025.533zm10.144-2.899s-.992 4.042.992 4.195c1.983.152 13.195.076 13.501-.228.306-.304.686-1.068.686-1.068l-10.374-2.899h-4.805z",
    fill: "#FFBE3C"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M206.35 151.233s-2.727 6.483-3.719 28.946c-.264 5.976.458 4.576-2.517 23.797l3.53 1.843a3.317 3.317 0 003.254-.104l3.436-2.082s-1.678-21.508 3.814-33.865c0 0 2.899 5.34 2.899 9.305 0 3.966-.152 23.034-.152 23.034s6.407 1.068 9.305.763c0 0-1.831-41.378-3.661-51.122l-16.189-.515z",
    fill: "#EAF3F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M206.864 148.487s-1.087.801-.515 2.745c0 0 8.352 3.604 16.189.515 0 0 .858-1.259-.228-2.803l-15.446-.457zm-11.173-19.83c-4.753 1.767-11.975 6.178-11.517 9.687.458 3.509 2.944 2.653 3.72 1.791.776-.862 3.002-3.626 3.698-4.117.696-.491 11.937-6.263 11.937-6.263l29.765-15.304s.228-1.487-1.545-2.689c-.001 0-18.21 10.259-36.058 16.895z",
    fill: "#965032"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M209.724 111.419l-.172 1.259s-.458 8.066 2.174 10.24c0 0 .572 1.658-.343 2.46s-9.953 5.377-9.953 5.377-2.346 4.863-2.289 7.608c0 0-2.231-.858-2.002-1.945.228-1.087 1.545-3.947 1.144-5.32-.401-1.373-1.888-.972-1.888-.972s-.744.801.458 1.315l-.401 1.716-4.863 2.86 1.087 1.315s.057 10.068 6.006 11.383c0 0 3.146.228 6.865-6.865 0 0 2.002 3.546 1.315 6.636 0 0 6.521 3.546 15.445.458l.115-6.178s1.373 9.496 6.063 8.58c0 0 12.994-5.002 10.83-6.903-5.034-4.424-11.113-.685-11.113-.685-.295-6.426-.832-14.738-1.663-15.637-1.373-1.487-5.606-.686-6.445-2.593-.839-1.907-.61-5.262.305-9.153.915-3.89-3.737-6.636-3.737-6.636l-6.938 1.68z",
    fill: "#FFBE3C"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M209.553 112.677s4.672 1.182 8.333-.267l1.602 3.966h.915s2.206-7.34-.723-7.254c0 0-.011-2.383-5.126-2.283-4.393.086-5.916 2.94-5.001 5.838z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M304.906 204.547s-1.22 5.416-.076 6.026c1.144.61 7.246.61 7.093-.686-.153-1.296-.992-5.873-.992-5.873l-6.025.533zm-10.144-2.899s.992 4.042-.992 4.195c-1.983.152-13.195.076-13.501-.228-.306-.305-.686-1.068-.686-1.068l10.374-2.899h4.805z",
    fill: "#965032"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M306.146 151.233s2.727 6.483 3.719 28.946c.264 5.976-.458 4.576 2.517 23.797l-3.53 1.843a3.317 3.317 0 01-3.254-.104l-3.436-2.082s1.678-21.508-3.814-33.865c0 0-2.899 5.34-2.899 9.305 0 3.966.152 23.034.152 23.034s-6.407 1.068-9.305.763c0 0 1.831-41.378 3.661-51.122l16.189-.515z",
    fill: "#EAF3F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M305.631 148.487s1.087.801.515 2.745c0 0-8.352 3.604-16.189.515 0 0-.858-1.259.228-2.803l15.446-.457z",
    fill: "#BE7855"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M302.771 111.419l.172 1.259s.458 8.066-2.174 10.24c0 0-.572 1.658.343 2.46s9.953 5.377 9.953 5.377 2.345 4.863 2.289 7.608c0 0 2.231-.858 2.002-1.945-.228-1.087-1.545-3.947-1.144-5.32.401-1.373 1.888-.972 1.888-.972s.744.801-.458 1.315l.401 1.716 4.863 2.86-1.087 1.315s-.057 10.068-6.006 11.383c0 0-3.146.228-6.865-6.865 0 0-2.002 3.546-1.315 6.636 0 0-6.521 3.546-15.445.458l-.115-6.178s-1.373 9.496-6.063 8.58c0 0-12.994-5.002-10.83-6.903 5.034-4.424 11.113-.685 11.113-.685.295-6.426.832-14.738 1.663-15.637 1.373-1.487 5.605-.686 6.445-2.593.84-1.907.61-5.262-.305-9.153-.915-3.89 3.737-6.636 3.737-6.636l6.938 1.68z",
    fill: "#965032"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M302.942 112.677s-4.672 1.182-8.333-.267l-1.602 3.966h-.915s-2.206-7.34.723-7.254c0 0 .011-2.383 5.125-2.283 4.394.086 5.918 2.94 5.002 5.838z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M224.461 115.734c-.382-.929.258-1.184.258-1.184s4.63-2.541 5.169-2.498c.89.072 1.982 1.636 1.982 2.972 0 1.335 1.739 4.801 5.314 5.663 0 0-4.462 6.063-10.655 5.235 0-.002.415-4.15-2.068-10.188z",
    fill: "#EAF3F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M230.95 144.139c-1.372 0-2.484 1.186-2.484 2.649v30.3c0 7.322 3.433 32.95 27.458 40.271 24.025-7.322 27.458-32.95 27.458-40.271v-30.3c0-1.463-1.112-2.649-2.484-2.649H230.95z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M283.383 177.089v-30.3c0-1.463-1.112-2.649-2.484-2.649h-24.974v25.628l24.135 24.135c2.672-7.054 3.323-13.647 3.323-16.814z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M228.466 177.089v-30.3c0-1.463 1.112-2.649 2.484-2.649h24.974v25.628l-24.135 24.135c-2.672-7.054-3.323-13.647-3.323-16.814z",
    fill: "#EAF3F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#8C5A28",
    d: "M239.732 193.118l6.353 6.719h17.696l3.751-4.808-4.315 1.726h-14.301z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M246.575 184.448l-.97 9.78-4.414-1.685s2.031-4.714 5.384-8.095z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.282 180.568h1v16.651h-1zm6.036 1.413h1v15.245h-1zm-12.05 0h1v15.245h-1z",
    fill: "#8C5A28"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M257.814 195.646h-4.403a.542.542 0 01-.542-.542v-2.43c0-.299.243-.542.542-.542h4.403c.299 0 .542.243.542.542v2.43a.543.543 0 01-.542.542zm0-4.685h-4.403a.542.542 0 01-.542-.542v-2.43c0-.299.243-.542.542-.542h4.403c.299 0 .542.243.542.542v2.43a.543.543 0 01-.542.542zm0-4.315h-4.403a.542.542 0 01-.542-.542v-2.43c0-.299.243-.542.542-.542h4.403c.299 0 .542.243.542.542v2.43a.543.543 0 01-.542.542zm5.665 9h-3.662a.542.542 0 01-.542-.542v-2.43c0-.299.243-.542.542-.542h3.662c.299 0 .542.243.542.542v2.43a.543.543 0 01-.542.542zm0-4.314h-3.662a.542.542 0 01-.542-.542v-1.879c0-.299.243-.542.542-.542h3.662c.299 0 .542.243.542.542v1.879a.542.542 0 01-.542.542zm0-4.275h-3.662a.542.542 0 01-.542-.542v-1.404c0-.299.243-.542.542-.542h3.662c.299 0 .542.243.542.542v1.404a.542.542 0 01-.542.542zm-12.052 8.589h-3.662a.542.542 0 01-.542-.542v-2.43c0-.299.243-.542.542-.542h3.662c.299 0 .542.243.542.542v2.43a.542.542 0 01-.542.542zm0-4.314h-3.662a.542.542 0 01-.542-.542v-1.879c0-.299.243-.542.542-.542h3.662c.299 0 .542.243.542.542v1.879c0 .3-.243.542-.542.542zm0-4.275h-3.662a.542.542 0 01-.542-.542v-1.404c0-.299.243-.542.542-.542h3.662c.299 0 .542.243.542.542v1.404c0 .3-.243.542-.542.542z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M261.318 181.984v1.97l-2.9-1.003zm-12.044 0v1.97l-2.899-1.003zm6.034-1.416v1.97l-2.9-1.003z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M277.716 199.055h-43.584a41.813 41.813 0 002.159 3.661h39.264a41.201 41.201 0 002.161-3.661z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M275.557 202.717h-39.265a36.808 36.808 0 006.408 7.322h26.447a36.815 36.815 0 006.41-7.322z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M242.701 210.039c3.513 3.079 7.826 5.676 13.224 7.322 5.399-1.645 9.71-4.244 13.224-7.322h-26.448z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M251.222 171.918s-.268.094-.556.061c-.223-.096-.679-.11-.404-.956.134-.419.414-1.011.211-1.163l-.533-.617-1.278-1.48c-.962-1.06-2.102-2.279-3.432-3.48-.663-.602-1.348-1.225-2.046-1.857-.722-.608-1.388-1.29-2.174-1.856-.445-.234-1.01-.351-1.504-.534-.482-.194-.785-.561-1.138-.872l-2.028-1.874c-1.336-1.196-2.509-2.382-3.512-3.402a63.358 63.358 0 01-2.314-2.435 1.456 1.456 0 01.073-2.028l1.626-1.569a1.457 1.457 0 012.029-.001 63.231 63.231 0 012.35 2.4c.983 1.039 2.127 2.254 3.274 3.631.584.68 1.186 1.382 1.8 2.094.298.364.653.679.831 1.167.166.5.263 1.069.48 1.522.538.806 1.195 1.496 1.778 2.24l1.782 2.11c1.153 1.372 2.33 2.554 3.356 3.553l1.433 1.33.598.555c.146.209.747-.051 1.17-.169.855-.245.853.212.941.438.022.289-.081.554-.081.554l-2.732 2.638z",
    fill: "#BE7855"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M233.292 174.801a1.373 1.373 0 01-1.102-2.188l13.043-17.694a1.373 1.373 0 012.209 1.631l-13.043 17.694c-.27.363-.686.557-1.107.557z",
    fill: "#965032"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M243.742 153.75l6.789 4.5 2.897-4.043-6.33-5.11z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M261.781 152.01l17.396 21.452s2.445.111 2.112-1.834l-18.007-21.119-1.501 1.501z",
    fill: "#965032"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M257.891 154.955s4.891-.889 6.947-3.946l2.779 3.279s-4.557 3.223-5.002 6.724c0 .001-3.723-.999-4.724-6.057z",
    fill: "#EAF3F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M276.676 152.843a.888.888 0 01-.787-.476c-.495-.938-.58-1.785-.254-2.521.457-1.032 1.532-1.334 1.652-1.365a.901.901 0 011.084.639.888.888 0 01-.63 1.08c-.099.031-.391.16-.483.372-.087.209-.014.553.205.969a.89.89 0 01-.787 1.302zm-14.292 13.236a.888.888 0 00-.476-.787c-.938-.495-1.785-.58-2.521-.254-1.032.457-1.334 1.532-1.365 1.652a.901.901 0 00.639 1.084.888.888 0 001.08-.63c.031-.099.16-.391.372-.483.209-.087.553-.014.969.205a.889.889 0 001.302-.787z",
    fill: "#965032"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#EAF3F5",
    d: "M277.268 150.843l-16.376 16.08 3.853 4.298 16.006-16.154z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M194.088 127.665c1.097-.254 2.059 1.22 1.068 2.289-.992 1.068-3.857 2.997-4.729 2.823-1.525-.307-2.593-3.664 3.661-5.112z",
    fill: "#FFBE3C"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M318.343 129.209c-1.017-.254-1.909 1.22-.99 2.289.919 1.068 3.576 2.997 4.385 2.823 1.414-.307 2.405-3.663-3.395-5.112z",
    fill: "#965032"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M280.899 144.139c1.372 0 2.484 1.186 2.484 2.649v30.3c0 7.322-3.433 32.95-27.458 40.271-24.025-7.322-27.458-32.95-27.458-40.271v-30.3c0-1.463 1.112-2.649 2.484-2.649h49.948zm0-1.831h-49.947c-2.379 0-4.314 2.009-4.314 4.48v30.3c0 1.749.236 10.979 4.893 20.914 4.951 10.561 13.203 17.86 23.863 21.11l.534.162.534-.162c10.66-3.249 18.912-10.549 23.863-21.11 4.657-9.934 4.893-19.164 4.893-20.914v-30.3c-.005-2.469-1.94-4.48-4.319-4.48z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M299.879 217.79c-7.779-2.607-16.126-1.405-23.998 3.847-10.061 6.707-16.73 6.707-19.936 6.707-3.206 0-9.875 0-19.936-6.707-7.87-5.248-16.22-6.453-23.998-3.848v7.848c4.902-2.343 11.811-3.324 19.936 2.091 11.906 7.937 20.38 7.937 23.998 7.937 3.618 0 12.092 0 23.998-7.937 8.125-5.42 15.034-4.437 19.936-2.092v-7.846z",
    fill: "#EAF3F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.945 259.464c-51.477 0-93.357-41.881-93.357-93.357s41.881-93.357 93.357-93.357 93.357 41.881 93.357 93.357-41.88 93.357-93.357 93.357zm0-183.054c-49.459 0-89.697 40.236-89.697 89.697 0 49.461 40.238 89.697 89.697 89.697s89.697-40.236 89.697-89.697c0-49.461-40.238-89.697-89.697-89.697z",
    fill: "#965032"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#73AF00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M153.817 173.886s-.382-11.441 10.602-11.441c0 0 .228 4.5-3.737 6.483-3.207 1.603-6.865 4.958-6.865 4.958z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M175.023 173.886s.382-11.441-10.602-11.441c0 0-.228 4.5 3.737 6.483 3.208 1.603 6.865 4.958 6.865 4.958zm182.976-11.441s.382 11.441-10.602 11.441c0 0-.228-4.5 3.737-6.483 3.207-1.604 6.865-4.958 6.865-4.958z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M336.793 162.445s-.382 11.441 10.602 11.441c0 0 .228-4.5-3.737-6.483-3.209-1.604-6.865-4.958-6.865-4.958zm-75.165 107.811s-11.441.382-11.441-10.602c0 0 4.5-.228 6.483 3.737 1.604 3.207 4.958 6.865 4.958 6.865z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M261.628 249.05s-11.441-.382-11.441 10.602c0 0 4.5.228 6.483-3.737 1.604-3.208 4.958-6.865 4.958-6.865zm-11.44-182.975s11.441-.382 11.441 10.602c0 0-4.5.228-6.483-3.737-1.605-3.208-4.958-6.865-4.958-6.865z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M250.188 87.281s11.441.382 11.441-10.602c0 0-4.5-.228-6.483 3.737-1.605 3.207-4.958 6.865-4.958 6.865zm-62.425 157.118s-8.36-7.82-.594-15.586c0 0 3.343 3.02 1.942 7.226-1.132 3.402-1.348 8.36-1.348 8.36z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M202.759 229.405s-7.82-8.36-15.586-.594c0 0 3.02 3.343 7.226 1.942 3.401-1.134 8.36-1.348 8.36-1.348zM324.052 91.932s8.36 7.82.594 15.586c0 0-3.343-3.02-1.942-7.226 1.133-3.402 1.348-8.36 1.348-8.36z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M309.056 106.926s7.82 8.36 15.586.594c0 0-3.02-3.343-7.226-1.942-3.401 1.133-8.36 1.348-8.36 1.348zm23.086 129.383s-7.82 8.36-15.586.594c0 0 3.02-3.343 7.226-1.942 3.402 1.134 8.36 1.348 8.36 1.348z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M317.147 221.314s-8.36 7.82-.594 15.586c0 0 3.343-3.02 1.942-7.226-1.134-3.402-1.348-8.36-1.348-8.36zM179.674 100.021s7.82-8.36 15.586-.594c0 0-3.02 3.343-7.226 1.942-3.402-1.134-8.36-1.348-8.36-1.348z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M194.669 115.016s8.36-7.82.594-15.586c0 0-3.343 3.02-1.942 7.226 1.134 3.402 1.348 8.36 1.348 8.36zm-30.891 97.503s-4.73-10.424 5.417-14.627c0 0 1.933 4.069-.972 7.42-2.35 2.708-4.445 7.207-4.445 7.207z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M183.37 204.404s-4.025-10.716-14.173-6.513c0 0 1.511 4.245 5.934 4.559 3.575.254 8.239 1.954 8.239 1.954zm164.668-80.593s4.73 10.424-5.417 14.627c0 0-1.933-4.07.972-7.42 2.349-2.708 4.445-7.207 4.445-7.207z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M328.446 131.927s4.025 10.716 14.173 6.513c0 0-1.511-4.245-5.934-4.559-3.576-.254-8.239-1.954-8.239-1.954zm-28.185 128.369s-10.424 4.73-14.627-5.417c0 0 4.069-1.933 7.42.972 2.709 2.349 7.207 4.445 7.207 4.445z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M292.146 240.704s-10.716 4.025-6.513 14.173c0 0 4.245-1.511 4.559-5.934.255-3.577 1.954-8.239 1.954-8.239zm-80.591-164.67s10.424-4.73 14.627 5.417c0 0-4.07 1.933-7.42-.972-2.709-2.349-7.207-4.445-7.207-4.445z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M219.67 95.627s10.716-4.025 6.513-14.173c0 0-4.245 1.511-4.559 5.934-.255 3.576-1.954 8.239-1.954 8.239zm2.455 169.047s-10.716-4.025-6.513-14.173c0 0 4.245 1.511 4.559 5.934.254 3.576 1.954 8.239 1.954 8.239z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M230.24 245.082s-10.424-4.73-14.627 5.417c0 0 4.07 1.933 7.42-.972 2.708-2.349 7.207-4.445 7.207-4.445zm59.451-173.425s10.716 4.025 6.513 14.173c0 0-4.245-1.511-4.559-5.934-.255-3.577-1.954-8.239-1.954-8.239z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M281.576 91.249s10.424 4.73 14.627-5.417c0 0-4.069-1.933-7.42.972-2.708 2.349-7.207 4.445-7.207 4.445zm70.84 110.7s-4.025 10.716-14.173 6.513c0 0 1.511-4.245 5.934-4.559 3.577-.255 8.239-1.954 8.239-1.954z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M332.825 193.834s-4.73 10.424 5.417 14.627c0 0 1.933-4.069-.972-7.42-2.35-2.709-4.445-7.207-4.445-7.207zm-173.426-59.453s4.025-10.716 14.173-6.513c0 0-1.511 4.245-5.934 4.559-3.577.256-8.239 1.954-8.239 1.954z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M178.991 142.497s4.73-10.424-5.417-14.627c0 0-1.933 4.07.972 7.42 2.35 2.708 4.445 7.207 4.445 7.207zm-22.096 51.196s-2.606-11.147 8.167-13.29c0 0 1.102 4.369-2.401 7.087-2.833 2.199-5.766 6.203-5.766 6.203z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M177.693 189.556s-1.858-11.296-12.63-9.153c0 0 .653 4.458 4.93 5.63 3.459.946 7.7 3.523 7.7 3.523zm177.228-46.919s2.606 11.147-8.167 13.29c0 0-1.102-4.369 2.401-7.087 2.833-2.199 5.766-6.203 5.766-6.203z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M334.122 146.775s1.858 11.296 12.63 9.153c0 0-.653-4.458-4.93-5.63-3.458-.947-7.7-3.523-7.7-3.523zm-52.687 120.404s-11.147 2.606-13.29-8.167c0 0 4.369-1.102 7.087 2.401 2.2 2.833 6.203 5.766 6.203 5.766z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M277.298 246.38s-11.296 1.858-9.153 12.63c0 0 4.458-.653 5.63-4.93.947-3.458 3.523-7.7 3.523-7.7zM230.381 69.152s11.147-2.606 13.29 8.167c0 0-4.369 1.102-7.087-2.401-2.2-2.833-6.203-5.766-6.203-5.766z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M234.518 89.951s11.296-1.858 9.153-12.63c0 0-4.458.653-5.63 4.93-.947 3.458-3.523 7.7-3.523 7.7zm-30.573 166.277s-9.725-6.039-3.623-15.171c0 0 3.869 2.31 3.314 6.709-.447 3.559.309 8.462.309 8.462z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M215.727 238.596s-9.301-6.674-15.403 2.458c0 0 3.615 2.69 7.467.494 3.115-1.774 7.936-2.952 7.936-2.952zM307.87 80.102s9.725 6.039 3.623 15.171c0 0-3.869-2.31-3.314-6.709.448-3.557-.309-8.462-.309-8.462z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M296.089 97.734s9.301 6.674 15.403-2.458c0 0-3.615-2.69-7.467-.494-3.115 1.774-7.936 2.952-7.936 2.952zm47.883 122.394s-6.039 9.725-15.171 3.623c0 0 2.309-3.869 6.709-3.314 3.557.448 8.462-.309 8.462-.309z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M326.339 208.346s-6.674 9.301 2.458 15.403c0 0 2.69-3.615.494-7.467-1.775-3.116-2.952-7.936-2.952-7.936zm-158.495-92.143s6.039-9.725 15.171-3.623c0 0-2.31 3.869-6.709 3.314-3.557-.448-8.462.309-8.462.309z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M185.477 127.985s6.674-9.301-2.458-15.403c0 0-2.69 3.615-.494 7.467 1.774 3.115 2.952 7.936 2.952 7.936zm-11.276 101.656s-6.674-9.301 2.458-15.403c0 0 2.69 3.615.494 7.467-1.775 3.115-2.952 7.936-2.952 7.936z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M191.833 217.859s-6.039-9.725-15.171-3.623c0 0 2.31 3.869 6.709 3.314 3.557-.448 8.462.309 8.462.309zM337.615 106.69s6.674 9.301-2.458 15.403c0 0-2.69-3.615-.494-7.467 1.774-3.115 2.952-7.936 2.952-7.936z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M319.983 118.472s6.039 9.725 15.171 3.623c0 0-2.31-3.869-6.709-3.314-3.557.448-8.462-.309-8.462-.309zm-2.6 131.4s-9.301 6.674-15.403-2.458c0 0 3.615-2.69 7.467-.494 3.115 1.775 7.936 2.952 7.936 2.952z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M305.602 232.24s-9.725 6.039-3.623 15.171c0 0 3.869-2.31 3.315-6.709-.449-3.557.308-8.462.308-8.462zM194.433 86.458s9.301-6.674 15.403 2.458c0 0-3.615 2.69-7.467.494-3.115-1.774-7.936-2.952-7.936-2.952z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M206.214 104.091s9.725-6.039 3.623-15.171c0 0-3.869 2.31-3.314 6.709.448 3.557-.309 8.462-.309 8.462zm35.388 165.319s-11.296-1.858-9.153-12.63c0 0 4.458.653 5.63 4.93.946 3.458 3.523 7.7 3.523 7.7z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M245.739 248.611s-11.147-2.606-13.29 8.167c0 0 4.369 1.102 7.087-2.401 2.199-2.833 6.203-5.766 6.203-5.766zM270.214 66.92s11.296 1.858 9.153 12.63c0 0-4.458-.653-5.63-4.93-.946-3.458-3.523-7.7-3.523-7.7z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M266.077 87.719s11.147 2.606 13.29-8.167c0 0-4.369-1.102-7.087 2.401-2.199 2.833-6.203 5.766-6.203 5.766zm91.076 94.753s-1.858 11.296-12.63 9.153c0 0 .653-4.458 4.93-5.63 3.459-.947 7.7-3.523 7.7-3.523zm-20.798-4.137s-2.606 11.147 8.167 13.29c0 0 1.102-4.369-2.401-7.087-2.835-2.2-5.766-6.203-5.766-6.203zm-181.693-24.476s1.858-11.296 12.63-9.153c0 0-.653 4.458-4.93 5.63-3.458.947-7.7 3.523-7.7 3.523z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M175.461 157.996s2.606-11.147-8.167-13.29c0 0-1.102 4.369 2.401 7.087 2.833 2.2 5.766 6.203 5.766 6.203z"
  }))));
}

function SvgCa(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M114.759.276h282.483v335.448H114.759z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276A8.828 8.828 0 000 9.103v317.793a8.829 8.829 0 008.828 8.828h105.931V.276H8.828zm494.344 0H397.241v335.448h105.931a8.829 8.829 0 008.828-8.828V9.103a8.828 8.828 0 00-8.828-8.827zM309.569 206.76l52.383-29.932-12.02-6.01a8.827 8.827 0 01-4.802-9.063l3.911-29.322-22.177 6.452c-4.899 1.426-9.983-1.588-11.085-6.569l-2.124-9.6-20.823 24.37c-2.887 3.378-8.386.798-7.633-3.582l8.893-51.708-13.615 3.724a8.824 8.824 0 01-10.116-4.36l-14.337-26.871v-.04l-.01.02-.011-.02v.04L241.666 91.16a8.83 8.83 0 01-10.118 4.36l-13.616-3.724 8.893 51.708c.753 4.378-4.747 6.959-7.634 3.582l-20.823-24.37-2.124 9.6c-1.102 4.982-6.186 7.994-11.085 6.569l-22.177-6.452 3.911 29.322a8.828 8.828 0 01-4.802 9.063l-12.02 6.01 52.383 29.933a12.745 12.745 0 015.615 15.53l-4.478 11.977 44.885-3.832a4.172 4.172 0 014.525 4.279l-1.414 48.044h8.828L259 234.713a4.172 4.172 0 014.525-4.279l44.906 3.834-4.478-11.977a12.748 12.748 0 015.616-15.531z",
    fill: "#FF4B55"
  })));
}

function SvgCd(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276h-25.305L0 247.448v17.655L508.367 2.155c-1.474-1.103-3.212-1.879-5.195-1.879zM8.828 335.724h25.305L512 88.552V70.897L3.633 333.845c1.474 1.103 3.212 1.879 5.195 1.879z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M508.367 2.155L0 265.103v61.793c0 2.893 1.483 5.339 3.633 6.948L512 70.897V9.103c0-2.893-1.483-5.338-3.633-6.948z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M92.619 34.978l12.718 38.135 40.199.311c2.248.018 3.18 2.886 1.372 4.222l-32.339 23.881 12.126 38.328c.678 2.143-1.762 3.916-3.591 2.609l-32.705-23.377-32.705 23.377c-1.828 1.308-4.269-.466-3.591-2.609l12.126-38.328L33.89 77.646c-1.809-1.335-.876-4.204 1.372-4.222l40.199-.311 12.718-38.135c.713-2.132 3.728-2.132 4.44 0z",
    fill: "#FFE15A"
  })));
}

function SvgCf(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896v-75.034h512v75.034a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#73AF00",
    d: "M0 168h511.999v83.862H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 84.138h511.999V168H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512.001 84.138H0V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v75.034z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M214.068.276h83.862v335.448h-83.862z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M76.5 11.574l7.366 22.087 23.282.181c1.804.014 2.551 2.316 1.1 3.388l-18.73 13.83 7.022 22.198c.544 1.719-1.414 3.143-2.881 2.093L74.718 61.813 55.777 75.351c-1.468 1.049-3.425-.374-2.881-2.093l7.022-22.198-18.727-13.83c-1.451-1.071-.703-3.373 1.1-3.388l23.282-.181 7.366-22.087c.57-1.711 2.99-1.711 3.561 0z",
    fill: "#FFE15A"
  })));
}

function SvgCg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H361.931L2.703 333.218c1.589 1.539 3.737 2.506 6.124 2.506h141.241L509.297 2.782c-1.589-1.54-3.738-2.506-6.125-2.506z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M361.931.276H8.828A8.828 8.828 0 000 9.103v317.793c0 2.488 1.047 4.717 2.703 6.322L361.931.276z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M509.297 2.782L150.069 335.724h353.103a8.829 8.829 0 008.828-8.828V9.103c0-2.489-1.047-4.717-2.703-6.321z",
    fill: "#FF4B55"
  })));
}

function SvgCh(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M353.103 132.69H291.31V70.897a8.829 8.829 0 00-8.828-8.828h-52.966a8.829 8.829 0 00-8.828 8.828v61.793h-61.793a8.829 8.829 0 00-8.828 8.828v52.966a8.829 8.829 0 008.828 8.828h61.793v61.793a8.829 8.829 0 008.828 8.828h52.966a8.829 8.829 0 008.828-8.828V203.31h61.793a8.829 8.829 0 008.828-8.828v-52.966c0-4.874-3.953-8.826-8.828-8.826z",
    fill: "#F5F5F5"
  })));
}

function SvgCi(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M341.333.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.829 8.829 0 01-8.828 8.828H341.333V.276z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h161.839v335.448H8.828A8.829 8.829 0 010 326.896V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FF9B55"
  })));
}

function SvgCk(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.333l-81.77 53.573V.276h-44.138v53.573L24.161.276H8.828A8.829 8.829 0 000 9.104v7.002l70.155 45.963H0v44.138h70.155L0 152.171v7.001A8.829 8.829 0 008.828 168h15.333l81.77-53.573V168h44.138v-53.573L231.838 168h15.333a8.829 8.829 0 008.828-8.828v-7.002l-70.154-45.963h70.154V62.069h-70.155l70.155-45.963V9.104a8.827 8.827 0 00-8.827-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M255.999 70.897H141.241V.276h-26.483v70.621H0v26.482h114.758V168h26.483V97.379h114.758z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.333 0 5.961 0 9.104v.458l80.889 52.507h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.195-61.793H89.474zm166.385 53.66l-82.666-53.659H156.98l93.873 60.934c2.813-1.305 4.741-4.04 5.006-7.275z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M377.128 62.113l3.237 9.708 10.233.079c.792.007 1.121 1.017.483 1.489l-8.232 6.079 3.086 9.757c.239.756-.621 1.382-1.267.92l-8.326-5.951-8.326 5.951c-.646.461-1.505-.164-1.267-.92l3.086-9.757-8.232-6.079c-.638-.471-.309-1.483.483-1.489l10.233-.079 3.237-9.708c.258-.752 1.322-.752 1.572 0zm-43.512 11.941l6.906 7.552 9.38-4.089c.727-.317 1.439.473 1.047 1.163l-5.048 8.901 6.788 7.658c.526.594-.006 1.515-.782 1.356l-10.026-2.05-5.185 8.822c-.402.683-1.442.462-1.532-.326l-1.149-10.168-9.993-2.205c-.775-.171-.885-1.229-.163-1.557l9.316-4.235-.991-10.185c-.075-.79.897-1.223 1.432-.637zm-34.894 28.605l9.38 4.089 6.906-7.552c.535-.585 1.507-.152 1.43.637l-.991 10.185 9.316 4.235c.722.328.61 1.386-.163 1.557l-9.993 2.205-1.149 10.168c-.089.788-1.13 1.009-1.532.326l-5.185-8.822-10.026 2.05c-.777.159-1.309-.762-.782-1.356l6.788-7.658-5.048-8.901c-.39-.689.321-1.479 1.049-1.163zm-20.243 40.326l10.233-.079 3.238-9.708c.25-.753 1.314-.753 1.566 0l3.237 9.708 10.233.079c.792.007 1.121 1.017.483 1.489l-8.232 6.079 3.086 9.757c.239.756-.621 1.382-1.267.92l-8.326-5.951-8.326 5.951c-.646.461-1.505-.164-1.267-.92l3.086-9.757-8.232-6.079c-.633-.472-.304-1.484.488-1.489zm-2.09 45.072l9.316-4.235-.991-10.185c-.077-.789.895-1.221 1.43-.637l6.906 7.552 9.38-4.089c.727-.317 1.439.473 1.047 1.163l-5.048 8.902 6.788 7.658c.526.594-.006 1.515-.782 1.356l-10.026-2.05-5.185 8.822c-.402.683-1.442.462-1.532-.326l-1.149-10.168-9.993-2.205c-.772-.172-.883-1.23-.161-1.558zm16.422 42.026l6.788-7.658-5.048-8.901c-.391-.69.321-1.48 1.047-1.163l9.38 4.089 6.906-7.552c.535-.585 1.507-.152 1.43.637l-.991 10.185 9.316 4.235c.722.328.61 1.386-.163 1.557l-9.993 2.205-1.149 10.168c-.089.788-1.13 1.009-1.532.326l-5.185-8.822-10.026 2.05c-.774.158-1.306-.762-.78-1.356zm32.096 31.713l3.086-9.757-8.232-6.079c-.638-.471-.309-1.483.483-1.489l10.233-.079 3.238-9.708c.25-.753 1.314-.753 1.566 0l3.237 9.708 10.233.079c.792.007 1.121 1.017.483 1.489l-8.232 6.079 3.086 9.757c.239.756-.621 1.382-1.267.92l-8.326-5.951-8.326 5.951c-.639.461-1.5-.164-1.262-.92zm42.222 15.916l-1.149-10.168-9.993-2.205c-.775-.171-.885-1.229-.163-1.557l9.316-4.235-.991-10.185c-.077-.789.895-1.222 1.43-.637l6.906 7.552 9.38-4.089c.727-.317 1.439.473 1.047 1.163l-5.048 8.901 6.788 7.658c.526.594-.006 1.515-.782 1.356l-10.026-2.05-5.185 8.822c-.402.683-1.442.462-1.53-.326zm45.043-2.631l-5.185-8.822-10.026 2.05c-.777.159-1.309-.762-.782-1.356l6.788-7.658-5.048-8.901c-.391-.69.321-1.48 1.047-1.163l9.38 4.089 6.906-7.552c.535-.585 1.507-.152 1.43.637l-.991 10.185 9.316 4.235c.722.328.61 1.386-.163 1.557l-9.993 2.205-1.149 10.168c-.087.788-1.128 1.009-1.53.326zm40.08-20.726l-8.326-5.951-8.326 5.951c-.646.461-1.505-.164-1.267-.92l3.086-9.757-8.232-6.079c-.638-.471-.309-1.483.483-1.489l10.233-.079 3.238-9.708c.25-.753 1.314-.753 1.566 0l3.237 9.708 10.233.079c.792.007 1.121 1.017.483 1.489l-8.232 6.079 3.086 9.757c.243.755-.618 1.381-1.262.92zm28.184-35.237l-10.026-2.05-5.185 8.822c-.402.683-1.442.462-1.532-.326l-1.149-10.168-9.993-2.205c-.775-.171-.885-1.229-.163-1.557l9.316-4.235-.991-10.185c-.077-.789.895-1.221 1.43-.637l6.906 7.552 9.38-4.089c.727-.317 1.439.473 1.047 1.163l-5.048 8.901 6.788 7.658c.529.594-.003 1.515-.78 1.356zm11.416-43.652l-9.993 2.205-1.149 10.168c-.089.788-1.13 1.009-1.532.326l-5.185-8.822-10.026 2.05c-.777.159-1.309-.762-.782-1.356l6.788-7.658-5.048-8.902c-.391-.69.321-1.48 1.047-1.163l9.38 4.089 6.906-7.552c.535-.585 1.507-.152 1.43.637l-.991 10.185 9.316 4.235c.724.329.613 1.387-.161 1.558zm-7.327-44.522l-8.232 6.079 3.086 9.757c.239.756-.621 1.382-1.267.92l-8.326-5.951-8.326 5.951c-.646.461-1.505-.164-1.267-.92l3.086-9.757-8.232-6.079c-.638-.471-.309-1.483.483-1.489l10.233-.079 3.238-9.708c.25-.753 1.314-.753 1.566 0l3.237 9.708 10.233.079c.797.006 1.126 1.018.488 1.489zM459.724 93.25l-5.048 8.902 6.788 7.658c.526.594-.006 1.515-.782 1.356l-10.026-2.05-5.185 8.822c-.402.683-1.442.462-1.532-.326l-1.149-10.168-9.993-2.205c-.775-.171-.885-1.229-.163-1.557l9.316-4.235-.991-10.185c-.077-.789.895-1.222 1.43-.637l6.906 7.552 9.38-4.089c.728-.317 1.44.473 1.049 1.162zm-37.989-24.346l-.991 10.185 9.316 4.235c.722.328.61 1.386-.163 1.557l-9.993 2.205-1.149 10.168c-.089.788-1.13 1.009-1.532.326l-5.185-8.822-10.026 2.05c-.777.159-1.309-.762-.782-1.356l6.788-7.658-5.048-8.902c-.391-.69.321-1.48 1.047-1.163l9.38 4.089 6.906-7.552c.537-.584 1.509-.151 1.432.638z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M377.128 62.113l3.237 9.708 10.233.079c.792.007 1.121 1.017.483 1.489l-8.232 6.079 3.086 9.757c.239.756-.621 1.382-1.267.92l-8.326-5.951-8.326 5.951c-.646.461-1.505-.164-1.267-.92l3.086-9.757-8.232-6.079c-.638-.471-.309-1.483.483-1.489l10.233-.079 3.237-9.708c.258-.752 1.322-.752 1.572 0z",
    fill: "#F5F5F5"
  })));
}

function SvgCl(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M17.655 168v-8.828H0v167.725a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828V168H17.655z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M158.897 168H8.828A8.829 8.829 0 010 159.172V9.103A8.829 8.829 0 018.828.275h150.069a8.829 8.829 0 018.828 8.828v150.069a8.83 8.83 0 01-8.828 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M87.262 46.487l8.416 25.234 26.6.206c3.444.026 4.872 4.422 2.101 6.467l-21.398 15.801 8.023 25.362c1.038 3.284-2.7 5.999-5.502 3.997l-21.64-15.467-21.641 15.468c-2.802 2.003-6.54-.714-5.502-3.997l8.023-25.362-21.398-15.801c-2.771-2.046-1.343-6.441 2.101-6.467l26.6-.206 8.416-25.234c1.09-3.268 5.712-3.268 6.801-.001z",
    fill: "#F5F5F5"
  })));
}

function SvgCm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h161.839v335.448z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.792a8.828 8.828 0 01-8.828 8.828zm-245.339-200.08l7.584 22.741 23.971.185c1.857.014 2.627 2.385 1.133 3.488l-19.284 14.24 7.231 22.856c.561 1.771-1.455 3.235-2.967 2.155l-19.502-13.939-19.502 13.94c-1.511 1.08-3.527-.385-2.967-2.155l7.231-22.856-19.284-14.24c-1.494-1.103-.724-3.474 1.133-3.488l23.971-.185 7.584-22.741c.589-1.762 3.08-1.762 3.668-.001z",
    fill: "#FFE15A"
  })));
}

function SvgCn(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M85.007 52.732l8.416 25.234 26.6.206c3.444.026 4.872 4.422 2.101 6.467l-21.398 15.801 8.023 25.362c1.038 3.284-2.7 5.999-5.502 3.997l-21.64-15.469-21.64 15.468c-2.802 2.003-6.54-.714-5.502-3.997l8.023-25.362-21.398-15.8c-2.771-2.046-1.343-6.441 2.101-6.467l26.6-.206 8.416-25.234c1.09-3.268 5.711-3.268 6.8 0zm96.592 6.218l6.035 8.23 9.739-3.046c1.261-.394 2.298 1.044 1.526 2.115l-5.962 8.281 5.906 8.321c.765 1.077-.282 2.508-1.54 2.105l-9.719-3.111-6.089 8.189c-.788 1.06-2.473.506-2.478-.814l-.045-10.205-9.67-3.261c-1.251-.423-1.246-2.195.009-2.609l9.69-3.196.114-10.204c.014-1.319 1.703-1.86 2.484-.795zm-36.742-24.53l10.145 1.102 4.328-9.241c.561-1.196 2.321-.991 2.591.302l2.086 9.988 10.126 1.26c1.311.163 1.66 1.901.513 2.558l-8.855 5.07 1.931 10.02c.25 1.298-1.295 2.166-2.274 1.279l-7.559-6.855-8.932 4.932c-1.156.639-2.461-.563-1.919-1.768l4.183-9.308-7.452-6.972c-.964-.898-.225-2.509 1.088-2.367zm16.038 98.893l-6.035 8.23-9.739-3.046c-1.261-.394-2.298 1.044-1.526 2.115l5.962 8.281-5.906 8.321c-.765 1.077.282 2.508 1.54 2.105l9.719-3.111 6.089 8.189c.788 1.06 2.473.506 2.478-.814l.045-10.205 9.67-3.261c1.252-.423 1.246-2.195-.009-2.609l-9.69-3.196-.114-10.204c-.016-1.318-1.703-1.861-2.484-.795zm36.74-23.051l-10.145 1.102-4.328-9.241c-.561-1.196-2.321-.991-2.591.302l-2.087 9.988-10.126 1.26c-1.311.163-1.66 1.901-.513 2.558l8.855 5.07-1.931 10.02c-.25 1.298 1.295 2.166 2.274 1.279l7.559-6.855 8.932 4.932c1.156.639 2.461-.563 1.919-1.768l-4.183-9.308 7.452-6.972c.967-.898.228-2.509-1.087-2.367z",
    fill: "#FFE15A"
  })));
}

function SvgCo(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 251.862H0v75.034a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828v-75.034z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 168h512v83.862H0z"
  })));
}

function SvgCr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 115.035h511.999v105.931H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v48.552H0V9.104A8.829 8.829 0 018.828.276z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 57.655h511.999v57.379H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896v-48.552h512v48.552a8.828 8.828 0 01-8.828 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(0 123)",
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 97.965h511.999v57.379H0z"
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 138.394,
    cy: 45,
    rx: 41.29,
    ry: 44.138
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#3CC8FF",
    d: "M117.031 150.919h42.714v21.357h-42.714z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M122.732 163.059l.488 4.711 1.918-4.329-.992 4.631 3.164-3.526-2.376 4.098 4.099-2.374-3.525 3.163 4.631-.992-4.33 1.919 4.712.488-4.712.488 4.33 1.919-4.631-.992 3.525 3.163-4.099-2.376 2.376 4.099-3.164-3.525.992 4.631-1.918-4.329-.488 4.71-.488-4.71-1.919 4.329.992-4.631-3.163 3.525 2.374-4.099-4.098 2.376 3.526-3.163-4.632.992 4.33-1.919-4.711-.488 4.711-.488-4.33-1.919 4.632.992-3.526-3.163 4.098 2.374-2.374-4.098 3.163 3.526-.992-4.631 1.919 4.329z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M146.936 202.172h-17.085l-15.662-12.815v-18.509h49.833v18.509z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M155.479 165.153h-.001a.71.71 0 00-1.422 0h-.002c0 2.471-1.432 5.889-3.188 8.337-2.452-3.096-3.374-6.686-3.722-8.947a1.604 1.604 0 00-2.307-1.188c-.47.235-.787.694-.867 1.213-1.09 6.983-4.382 9.95-6.514 11.17-3.191-3.085-4.243-8.078-4.589-11.03a1.66 1.66 0 00-2.397-1.29 1.675 1.675 0 00-.832.981c-4.466 13.613-16.875 14.993-16.875 14.993v4.271h49.833v-7.115c-5.693-1.429-7.117-11.395-7.117-11.395z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F0AA00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M162.598 152.339c-5.695-2.848-5.695-5.695-5.695-5.695s-7.119-2.848-12.814-2.848c0 0 1.423-2.848-1.423-2.848h-8.542c-2.848 0-1.423 2.848-1.423 2.848-5.695 0-12.814 2.848-12.814 2.848s0 2.848-5.695 5.695c-5.695 2.848-5.695 9.255-5.695 9.255a2.135 2.135 0 004.27 0c0-.244-.05-.473-.125-.691l.125-.021 14.238-9.966h22.782l14.238 9.966.125.021a2.11 2.11 0 00-.125.691 2.135 2.135 0 004.27 0c-.002-.001-.002-6.408-5.697-9.255z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M166.87 169.425c-1.423 0-5.695 0-5.695-4.271s5.695-4.271 5.695-4.271l-8.543-2.848c-2.848 9.966 2.848 9.966 2.848 22.781 0 11.479-12.814 18.509-17.086 18.509-4.271 0-5.695 2.848-5.695 2.848s-1.423-2.848-5.695-2.848c-4.271 0-17.086-7.03-17.086-18.509 0-12.814 5.695-12.814 2.848-22.781l-8.543 2.848s5.695 0 5.695 4.271-4.271 4.271-5.695 4.271c-1.424 0-7.119 0-7.119 7.119s7.119 15.662 17.086 21.357c9.966 5.695 5.695 11.391 18.509 11.391s8.543-5.695 18.509-11.391c9.966-5.695 17.086-14.238 17.086-21.357s-5.696-7.119-7.119-7.119z"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#73AF00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M135.546 147.138l-3.444-1.548a2.843 2.843 0 00-1.816-.175c-2.22.513-7.727 2.2-11.826 6.923l4.271 1.423 12.815-6.623zm5.695 0l3.444-1.548a2.843 2.843 0 011.816-.175c2.22.513 7.727 2.2 11.826 6.923l-4.271 1.423-12.815-6.623z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M138.897 148.067l2.596-2.596a.355.355 0 10-.503-.503l-2.596 2.596-2.596-2.596a.355.355 0 10-.503.503l2.596 2.596-2.596 2.596a.355.355 0 10.504.503l2.596-2.596 2.596 2.596a.355.355 0 10.504-.503l-2.598-2.596z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M166.87 160.882c0-2.422-2.289-3.469-4.271-3.924v-1.128c-2.68-.252-4.177-1.258-6.775-3.029a76.777 76.777 0 00-3.507-2.289c-5.006-3.041-8.854-3.48-11.075-3.374v2.353h-5.695v-2.353c-2.221-.106-6.069.333-11.075 3.374a76.486 76.486 0 00-3.507 2.289c-2.599 1.77-4.094 2.777-6.775 3.029v1.128c-1.983.454-4.271 1.501-4.271 3.924l4.271-1.423v.649c4.041-.298 6.351-1.848 9.18-3.775.959-.653 2.045-1.394 3.319-2.167 3.252-1.976 5.779-2.588 7.434-2.732v2.33h8.543v-2.33c1.655.145 4.182.756 7.434 2.732a72.771 72.771 0 013.319 2.167c2.828 1.927 5.139 3.478 9.18 3.775v-.649l4.271 1.423z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M155.479 138.439v-1.762h-3.966c.693-.595 1.119-1.295 1.119-2.135 0-3.934-8.95-4.983-14.238-4.983s-14.238 1.049-14.238 4.983c0 .84.426 1.54 1.119 2.135h-3.966v1.762c-3.486.778-6.335 2.648-6.485 2.749l1.579 2.369c.039-.026 3.957-2.609 7.753-2.609v-1.423h28.476v1.423c3.797 0 7.714 2.582 7.753 2.609l1.579-2.369c-.149-.101-2.999-1.971-6.485-2.749zm-11.39-2.156v-1.081c0-.697-.655-1.208-1.331-1.039l-4.364 1.091-4.364-1.091a1.071 1.071 0 00-1.331 1.039v1.081c-3.199-.47-5.09-1.252-5.606-1.741.77-.732 4.543-2.135 11.3-2.135 6.757 0 10.53 1.405 11.3 2.135-.514.488-2.406 1.27-5.604 1.741z",
    fill: "#3CC8FF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M138.572 154.3l.361 1.081 1.14.009c.148.001.209.19.09.277l-.917.678.344 1.087a.154.154 0 01-.236.171l-.928-.663-.928.663c-.12.086-.28-.031-.236-.171l.344-1.087-.917-.678c-.119-.087-.057-.276.09-.277l1.14-.009.361-1.081a.154.154 0 01.292 0zm-5.582.365l.472 1.038 1.135-.11a.154.154 0 01.119.266l-.841.77.456 1.045a.153.153 0 01-.216.195l-.992-.562-.853.757c-.11.098-.282-.001-.253-.146l.228-1.118-.983-.577a.154.154 0 01.061-.285l1.133-.128.245-1.113a.153.153 0 01.289-.032zm-5.732 1.526l.686.911 1.084-.354a.153.153 0 01.173.234l-.654.934.672.921a.153.153 0 01-.169.237l-1.09-.334-.669.924c-.086.119-.276.06-.278-.087l-.02-1.14-1.085-.351c-.14-.045-.142-.244-.002-.291l1.078-.371-.002-1.14c-.001-.147.188-.211.276-.093zm-5.744 2.422l.8.812 1.027-.494a.154.154 0 01.203.21l-.525 1.012.788.824a.154.154 0 01-.136.258l-1.126-.186-.541 1.004a.154.154 0 01-.287-.05l-.17-1.128-1.122-.204c-.146-.026-.173-.223-.041-.289l1.02-.51-.152-1.13a.154.154 0 01.262-.129zm22.348-3.948l-.472 1.038-1.135-.11a.154.154 0 00-.119.266l.841.77-.456 1.045a.153.153 0 00.216.195l.992-.562.853.757c.11.098.282-.001.253-.146l-.228-1.118.983-.577a.154.154 0 00-.061-.285l-1.133-.128-.245-1.113c-.031-.146-.229-.167-.289-.032zm5.731 1.526l-.686.911-1.084-.354a.153.153 0 00-.173.234l.654.934-.672.921a.153.153 0 00.169.237l1.09-.334.669.924c.086.119.276.06.278-.087l.02-1.14 1.085-.351c.14-.045.142-.244.002-.291l-1.078-.371.002-1.14c.001-.147-.188-.211-.276-.093zm5.745 2.422l-.8.812-1.027-.494a.154.154 0 00-.203.21l.525 1.012-.788.824a.154.154 0 00.136.258l1.126-.186.541 1.004c.07.13.265.096.287-.05l.17-1.128 1.122-.204c.146-.026.173-.223.041-.289l-1.02-.51.152-1.13c.019-.147-.159-.234-.262-.129z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#8C5A28",
    d: "M128.56 188.468l7.253 4.849h8.765l4.05-3.47-3.115 1.246H135.19z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M133.499 182.209l-.7 7.06-3.186-1.216c0-.001 1.466-3.403 3.886-5.844z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M139.785 179.41h1v12.022h-1zm4.358 1.015h1v11.005h-1zm-8.695 0h1v11.005h-1z",
    fill: "#8C5A28"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M141.462 190.292h-2.877a.542.542 0 01-.542-.542v-1.453c0-.299.243-.542.542-.542h2.877c.299 0 .542.243.542.542v1.453a.542.542 0 01-.542.542zm0-3.382h-2.877a.542.542 0 01-.542-.542v-1.453c0-.299.243-.542.542-.542h2.877c.299 0 .542.243.542.542v1.453c0 .3-.243.542-.542.542zm0-3.114h-2.877a.542.542 0 01-.542-.542v-1.453c0-.299.243-.542.542-.542h2.877c.299 0 .542.243.542.542v1.453a.542.542 0 01-.542.542zm4.089 6.496h-2.343a.542.542 0 01-.542-.542v-1.453c0-.299.243-.542.542-.542h2.343c.299 0 .542.243.542.542v1.453a.542.542 0 01-.542.542zm0-3.113h-2.343a.542.542 0 01-.542-.542v-1.055c0-.299.243-.542.542-.542h2.343c.299 0 .542.243.542.542v1.055a.542.542 0 01-.542.542zm0-3.086h-2.343a.542.542 0 01-.542-.542v-.712c0-.299.243-.542.542-.542h2.343c.299 0 .542.243.542.542v.712a.542.542 0 01-.542.542zm-8.699 6.199h-2.343a.542.542 0 01-.542-.542v-1.453c0-.299.243-.542.542-.542h2.343c.299 0 .542.243.542.542v1.453a.543.543 0 01-.542.542zm0-3.113h-2.343a.542.542 0 01-.542-.542v-1.055c0-.299.243-.542.542-.542h2.343c.299 0 .542.243.542.542v1.055a.543.543 0 01-.542.542zm0-3.086h-2.343a.542.542 0 01-.542-.542v-.712c0-.299.243-.542.542-.542h2.343c.299 0 .542.243.542.542v.712a.543.543 0 01-.542.542zm-.937-3.663v1.423l2.093-.725zm8.694 0v1.423l2.093-.725zm-4.356-1.021v1.422l2.094-.725z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#8C5A28",
    d: "M134.693 169.801l2.519 1.685h3.046l1.407-1.206-1.083.432h-3.586z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M136.409 167.626l-.243 2.453-1.107-.423c-.001 0 .509-1.182 1.35-2.03z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M138.593 166.654h1v4.177h-1zm1.512.353h1v3.823h-1zm-3.024 0h1v3.823h-1z",
    fill: "#8C5A28"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M139.174 170.434h-1a.189.189 0 01-.189-.189v-.504c0-.104.084-.189.189-.189h1c.104 0 .189.084.189.189v.504a.188.188 0 01-.189.189zm0-1.174h-1a.189.189 0 01-.189-.189v-.504c0-.104.084-.189.189-.189h1c.104 0 .189.084.189.189v.504a.189.189 0 01-.189.189zm0-1.082h-1a.189.189 0 01-.189-.189v-.504c0-.104.084-.189.189-.189h1c.104 0 .189.084.189.189v.504a.188.188 0 01-.189.189zm1.422 2.256h-.814a.189.189 0 01-.189-.189v-.504c0-.104.084-.189.189-.189h.814c.104 0 .189.084.189.189v.504a.19.19 0 01-.189.189zm0-1.081h-.814a.189.189 0 01-.189-.189v-.366c0-.104.084-.189.189-.189h.814c.104 0 .189.084.189.189v.366a.19.19 0 01-.189.189zm0-1.073h-.814a.189.189 0 01-.189-.189v-.247c0-.104.084-.189.189-.189h.814c.104 0 .189.084.189.189v.247a.19.19 0 01-.189.189zm-3.023 2.154h-.814a.189.189 0 01-.189-.189v-.504c0-.104.084-.189.189-.189h.814c.104 0 .189.084.189.189v.504a.19.19 0 01-.189.189zm0-1.081h-.814a.189.189 0 01-.189-.189v-.366c0-.104.084-.189.189-.189h.814c.104 0 .189.084.189.189v.366a.19.19 0 01-.189.189zm0-1.073h-.814a.189.189 0 01-.189-.189v-.247c0-.104.084-.189.189-.189h.814c.104 0 .189.084.189.189v.247a.19.19 0 01-.189.189zm-.325-1.272v.494l.727-.251zm3.02 0v.494l.727-.251zm-1.513-.354v.493l.727-.252zm-5.845-4.349h-1.848a1.216 1.216 0 01-1.212-1.212c0-.666.545-1.212 1.212-1.212h1.848c.666 0 1.212.545 1.212 1.212a1.214 1.214 0 01-1.212 1.212zm14.055 0h-1.219a1.212 1.212 0 010-2.424h1.219a1.212 1.212 0 010 2.424zm8.656 1.824h-1.074a.693.693 0 01-.693-.693v-.115c0-.383.31-.693.693-.693h1.074c.383 0 .693.31.693.693v.115c0 .383-.31.693-.693.693z",
    fill: "#F5F5F5"
  })));
}

function SvgCu(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 67.366H0V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v58.262zm-8.829 268.358H8.828A8.829 8.829 0 010 326.896v-58.262h512v58.262a8.828 8.828 0 01-8.828 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 67.366h511.999v67.09H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 134.455h511.999v67.089H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 201.545h511.999v67.089H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.31 333.627l255.402-161.754c2.841-1.8 2.841-5.945 0-7.745L3.31 2.373C1.335 3.992 0 6.351 0 9.104v317.792c0 2.753 1.336 5.112 3.31 6.731z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M88.526 125.441l9.064 27.176 28.647.222c2.219.018 3.139 2.849 1.354 4.168l-23.045 17.018 8.641 27.313c.67 2.116-1.74 3.866-3.545 2.575l-23.306-16.658-23.306 16.659c-1.805 1.291-4.215-.46-3.545-2.575l8.641-27.312-23.046-17.018c-1.785-1.319-.865-4.151 1.354-4.168l28.647-.222 9.064-27.176c.701-2.107 3.679-2.107 4.381-.002z",
    fill: "#F5F5F5"
  })));
}

function SvgCv(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 194.483h511.999v23.54H0zm0 47.084h511.999v23.54H0z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 218.019h511.999v23.54H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M169.649 146.664l2.708 8.118 8.557.066c.663.006.938.851.405 1.245l-6.884 5.084 2.581 8.159c.2.632-.52 1.155-1.059.769l-6.963-4.977-6.963 4.977c-.54.385-1.259-.137-1.059-.769l2.581-8.159-6.884-5.084c-.533-.394-.258-1.24.405-1.245l8.557-.066 2.708-8.118c.21-.629 1.101-.629 1.31 0zm0 142.658l2.708 8.118 8.557.066c.663.006.938.851.405 1.245l-6.884 5.084 2.581 8.159c.2.632-.52 1.155-1.059.769l-6.963-4.977-6.963 4.977c-.54.385-1.259-.137-1.059-.769l2.581-8.159-6.884-5.084c-.533-.394-.258-1.24.405-1.245l8.557-.066 2.708-8.118c.21-.629 1.101-.629 1.31 0zm-46.307 7.971l6.881-5.088 7.041 4.864c.545.376 1.257-.158 1.047-.787l-2.712-8.117 6.802-5.194c.527-.403.238-1.244-.425-1.238l-8.557.071-2.838-8.074c-.22-.626-1.109-.611-1.309.021l-2.577 8.161-8.555.204c-.663.015-.924.866-.384 1.251l6.965 4.972-2.45 8.2c-.19.637.537 1.148 1.071.754zm13.762-115.971l-6.987-4.941-6.937 5.012c-.537.388-1.26-.131-1.063-.765l2.54-8.172-6.91-5.049c-.535-.391-.265-1.238.398-1.247l8.557-.109 2.667-8.131c.206-.63 1.096-.634 1.309-.007l2.749 8.105 8.558.023c.663.002.942.846.41 1.242l-6.859 5.118 2.623 8.147c.204.629-.513 1.156-1.055.774zm64.448.105l6.881-5.088 7.041 4.864c.545.376 1.257-.158 1.047-.787l-2.712-8.117 6.802-5.194c.527-.403.238-1.244-.425-1.238l-8.557.071-2.838-8.074c-.22-.626-1.109-.611-1.309.021l-2.577 8.161-8.555.204c-.663.015-.924.866-.384 1.251l6.965 4.972-2.45 8.2c-.19.636.538 1.148 1.071.754zm13.763 115.761l-6.987-4.941-6.937 5.012c-.537.388-1.26-.131-1.063-.765l2.54-8.172-6.91-5.049c-.535-.391-.265-1.238.398-1.247l8.557-.109 2.667-8.131c.206-.63 1.096-.634 1.309-.007l2.749 8.105 8.558.023c.663.002.942.846.41 1.242l-6.859 5.118 2.623 8.147c.203.631-.514 1.157-1.055.774zm-102.208-49.861l-8.557.056-2.824-8.078c-.218-.626-1.108-.613-1.309.019l-2.591 8.157-8.556.19c-.663.014-.926.865-.386 1.251l6.957 4.984-2.464 8.195c-.191.634.536 1.148 1.07.754l6.89-5.076 7.033 4.876c.545.377 1.257-.156 1.048-.785l-2.699-8.121 6.81-5.182c.528-.403.241-1.245-.422-1.24zm-23.836-43.985l8.556-.161 2.617-8.148c.203-.631 1.092-.641 1.309-.014l2.798 8.087 8.558-.029c.663-.002.948.841.418 1.24l-6.827 5.16 2.673 8.13c.207.63-.506 1.161-1.05.781l-7.017-4.898-6.906 5.054c-.535.392-1.26-.124-1.068-.758l2.49-8.188-6.941-5.006c-.538-.388-.272-1.238.39-1.25zm159.428-.315l-8.557.056-2.824-8.078c-.218-.626-1.108-.614-1.309.019l-2.591 8.157-8.556.19c-.663.014-.926.865-.386 1.251l6.957 4.984-2.464 8.195c-.191.634.536 1.148 1.07.755l6.89-5.076 7.033 4.876c.545.377 1.257-.156 1.048-.785l-2.698-8.121 6.81-5.182c.527-.404.24-1.246-.423-1.241zm-23.835 44.615l8.556-.161 2.617-8.148c.203-.631 1.092-.641 1.309-.014l2.798 8.087 8.558-.029c.663-.002.948.841.418 1.24l-6.827 5.16 2.673 8.13c.207.63-.506 1.161-1.05.781l-7.017-4.898-6.906 5.054c-.535.392-1.26-.124-1.068-.758l2.49-8.188-6.941-5.006c-.538-.388-.273-1.236.39-1.25z",
    fill: "#FFE15A"
  })));
}

function SvgCw(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 229.793h512v44.138H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M118.945 82.867l-8.683 26.034-27.443.213c-2.632.02-3.723 3.379-1.606 4.942l22.077 16.302-8.278 26.165c-.793 2.509 2.063 4.585 4.204 3.054l22.327-15.958 22.327 15.958c2.141 1.53 4.998-.545 4.204-3.054l-8.278-26.165 22.077-16.302c2.118-1.564 1.026-4.921-1.606-4.942l-27.443-.213-8.683-26.034c-.832-2.497-4.363-2.497-5.196 0zM56.393 34.825l-5.025 15.069-15.884.124c-1.523.012-2.155 1.955-.929 2.86l12.778 9.436-4.791 15.145c-.459 1.452 1.194 2.654 2.433 1.768l12.922-9.237 12.922 9.237c1.239.886 2.893-.316 2.433-1.768l-4.791-15.145 12.778-9.436c1.225-.905.594-2.849-.929-2.86l-15.884-.124-5.025-15.069c-.482-1.445-2.526-1.445-3.008 0z",
    fill: "#F5F5F5"
  })));
}

function SvgCy(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#73AF00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M244.426 272.546c4.884-3.648 9.128-4.841 15.694-6.034 6.569-1.193 13.506-3.228 17.144-4.21 3.67-1.016-12.328 4.841-16.403 5.999-4.007 1.227-16.435 4.245-16.435 4.245zm26.439-10.272c-1.314-8.252 1.952-16.941 9.429-20.41 1.752 5.996-3.604 16.166-9.429 20.41zm12.764-4.277c-4.008-6.904 2.728-15.763 7.746-20.074 2.324 4.143-1.752 16.503-7.746 20.074zm11.754-5.322c-4.244-5.895.809-16.201 6.198-20.276 2.088 5.828-.001 16.267-6.198 20.276zm11.788-7.409c-3.906-5.558-1.177-14.18 4.446-19.805 4.009 4.649.572 14.686-4.446 19.805zm9.466-7.41c-3.267-5.255.739-17.816 5.994-21.287 2.256 4.648.572 17.785-5.994 21.287zm7.509-1.986c-.943-7.511 12.192-15.83 17.548-15.594-.573 6.128-6.197 12.864-17.548 15.594zm-7.343 8.485c6.198-6.33 18.155-6.33 22.397-5.018-1.11 3.706-15.255 11.756-22.397 5.018z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M308.316 250.722c8.69-2.325 14.314-4.211 19.501 1.177-3.671 4.649-17.749 3.269-19.501-1.177zm-12.393 5.626c8.319-4.447 18.389 2.121 19.905 5.927-9.262 3.872-20.074-4.952-19.905-5.927zm-11.385 6.364c7.578-2.897 16.268.943 19.703 5.187-4.042 1.954-14.618 4.075-19.703-5.187zm-10.372 3.266c8.69-.977 17.007 5.625 18.827 9.364-11.049 1.077-15.325-2.256-18.827-9.364zm-2.796 6.568c-4.817-3.648-9.06-4.841-15.628-6.034-6.569-1.193-13.506-3.228-17.209-4.21-3.604-1.016 12.394 4.841 16.468 5.999 4.041 1.227 16.369 4.245 16.369 4.245zm-26.439-10.272c1.379-8.252-1.887-16.941-9.431-20.41-1.684 5.996 3.672 16.166 9.431 20.41zm-12.698-4.277c4.076-6.904-2.728-15.763-7.746-20.074-2.324 4.143 1.752 16.503 7.746 20.074zm-11.821-5.322c4.311-5.895-.742-16.201-6.131-20.276-2.12 5.828.001 16.267 6.131 20.276zm-11.755-7.409c3.873-5.558 1.18-14.18-4.412-19.805-4.007 4.649-.572 14.686 4.412 19.805zm-9.429-7.41c3.334-5.255-.742-17.816-5.996-21.287-2.324 4.648-.573 17.785 5.996 21.287zm-7.579-1.986c1.011-7.511-12.125-15.83-17.481-15.594.573 6.128 6.098 12.864 17.481 15.594zm7.41 8.485c-6.198-6.33-18.153-6.33-22.397-5.018 1.177 3.706 15.255 11.756 22.397 5.018z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M207.546 250.722c-8.69-2.325-14.314-4.211-19.501 1.177 3.604 4.649 17.749 3.269 19.501-1.177zm12.326 5.626c-8.284-4.447-18.322 2.121-19.838 5.927 9.263 3.872 20.007-4.952 19.838-5.927zm11.35 6.364c-7.544-2.897-16.2.943-19.635 5.187 4.076 1.954 14.652 4.075 19.635-5.187zm10.509 3.266c-8.757-.977-17.075 5.625-18.86 9.364 11.114 1.077 15.358-2.256 18.86-9.364z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M147.966 141.194s-2.412 3.146 1.685 11.114c4.097 7.968 1.154 17.164 5.568 20.106s.185 8.778 5.242 12.664c5.056 3.887 18.345 12.831 27.517 13.877 9.172 1.045 18.082-8.222 23.374-1.382 5.292 6.84 4.136 11.661 9.128 12.193s4.992-1.675 4.625-4.985c-.367-3.31 3.309-12.505 11.769-12.505s17.422-1.007 31.7-6.389c14.278-5.382 21.266-7.956 23.105-16.416 1.839-8.46 7.068-18.462 17.143-13.828 10.076 4.633 9.398 2.46 12.495.236 3.097-2.223 13.483 4.209 15.83.809 2.348-3.401-18.377-20.224-17.209-29.1 1.166-8.875 3.961-16.247 12.495-16.975 8.533-.728 6.326-10.291 15.154-15.073 8.828-4.781 12.894-5.329 19.872-12.412 6.978-7.083 25.329-21.421 25.329-21.421s-35.701 17.097-42.841 18.66c-7.14 1.564-10.084 11.863-29.947 17.38-19.863 5.517-20.966 7.724-36.046 11.034-13.581 2.982-44.26 1.981-62.408-3.843a3.649 3.649 0 00-4.768 3.793c.747 8.821.537 24.681-10.176 27.142 0 0-14.603-10.906-23.798-6.125-9.195 4.781-15.735 21.834-22.58 19.192-6.845-2.643-7.741-13.587-12.258-7.746z",
    fill: "#FFC850"
  })));
}

function SvgCz(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59L256 168 3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59c1.53 1.274 3.425 2.134 5.571 2.134h494.345a8.829 8.829 0 008.828-8.828V168H256L3.256 333.59z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 2.41C4.786 1.136 6.681.276 8.827.276h494.345A8.829 8.829 0 01512 9.104V168H256L3.256 2.41z",
    fill: "#F5F5F5"
  })));
}

function SvgDe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 112.088h512V223.9H0z"
  })));
}

function SvgDj(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59L256 168 3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59c1.53 1.274 3.425 2.134 5.571 2.134h494.345a8.829 8.829 0 008.828-8.828V168H256L3.256 333.59z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 2.41C4.786 1.136 6.681.276 8.827.276h494.345A8.829 8.829 0 01512 9.104V168H256L3.256 2.41z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M91.766 128.135l-8.94 26.806-28.257.22c-1.549.012-2.191 1.99-.946 2.91l22.732 16.787-8.523 26.942c-.467 1.478 1.215 2.699 2.475 1.798l22.989-16.431 22.989 16.431c1.26.9 2.942-.321 2.475-1.798l-8.523-26.942 22.729-16.788c1.246-.92.604-2.898-.946-2.91l-28.257-.22-8.94-26.806c-.488-1.469-2.567-1.469-3.057.001z",
    fill: "#FF4B55"
  })));
}

function SvgDk(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M512 141.517H211.862V.276h-52.965v141.241H0v52.966h158.897v141.241h52.965V194.483H512z"
  })));
}

function SvgDm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 132.69h511.999v23.54H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M0 156.226h511.999v23.54H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 179.774h511.999v23.54H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M220.689.276h23.54v335.448h-23.54z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M244.226.276h23.54v335.448h-23.54z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M267.773.276h23.54v335.448h-23.54z"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FF4B55",
    cx: 255.999,
    cy: 168,
    r: 88.276
  }), /*#__PURE__*/react.createElement("path", {
    d: "M248.421 183.185s-1.031 7.217 5.98 17.938h13.608l-3.093-12.989-16.495-4.949z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.459 134.871s-22.266 36.425 10.446 58.142l3.436-20.618 2.199-26.666-3.436-11.409-12.645.551z",
    fill: "#A561CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.459 134.87s-2.545 4.237-4.653 10.612c2.866 2.996 10.701 6.708 20.335 5.08l.399-4.834-3.437-11.409-12.644.551z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M243.197 129.648s.274-7.285 7.423-7.285c8.935 0 16.22 2.061 27.765 25.978 0 0-10.269 10.08-16.769-3.849-1.924-4.124-2.612-9.071-2.612-9.071s-7.972 2.749-13.47-.413l-2.337-5.36z",
    fill: "#A561CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M246.771 133.084l-1.65-4.398s-9.209-1.512-5.361 9.622c0 0 .275-2.199 2.612-1.924 2.338.274 4.811-1.513 4.399-3.3z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#73AF00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M262.165 174.869s-9.689 7.593-4.26 25.428c2.887 9.484 14.432 19.896 14.432 19.896s8.556-22.37 5.773-31.029c-1.638-5.097-15.945-14.295-15.945-14.295z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M280.584 203.596s-25.016-23.848-26.666-42.61c-1.65-18.762 9.169-15.784 11.134-14.57 4.673 2.887 16.494 14.983 15.532 57.18z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M277.48 209.06h-41.418a1.557 1.557 0 01-1.558-1.558v-3.07c0-.861.697-1.558 1.558-1.558h41.418c.861 0 1.558.697 1.558 1.558v3.07a1.56 1.56 0 01-1.558 1.558z",
    fill: "#B34900"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M267.389 203.183c-1.442.599-4.33 1.341-3.608 3.917.553 1.974 4.33 1.752 3.608 4.021-.488 1.533-8.159 1.674-11.134 1.237-1.822-.268-5.773-1.341-5.223-5.876.55-4.536 2.199-5.234 4.262-6.048 2.045-.808 10.99-.629 12.302.481.669.568.885 1.815-.207 2.268z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256.812 89.137l2.009 6.025 6.35.05c.822.007 1.163 1.056.502 1.544l-5.109 3.773 1.916 6.055c.248.783-.644 1.432-1.313.954L256 103.845l-5.166 3.693c-.669.478-1.561-.17-1.313-.954l1.916-6.055-5.109-3.773c-.661-.489-.32-1.538.502-1.544l6.35-.05 2.009-6.025c.259-.78 1.362-.78 1.623 0zm0 140.852l2.009 6.025 6.35.05c.822.007 1.163 1.056.502 1.544l-5.109 3.773 1.916 6.055c.248.783-.644 1.432-1.313.954L256 244.697l-5.166 3.693c-.669.478-1.561-.17-1.313-.954l1.916-6.055-5.109-3.773c-.661-.489-.32-1.538.502-1.544l6.35-.05 2.009-6.025c.259-.78 1.362-.78 1.623 0z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256.812 89.137l2.009 6.025 6.35.05c.822.007 1.163 1.056.502 1.544l-5.109 3.773 1.916 6.055c.248.783-.644 1.432-1.313.954L256 103.845l-5.166 3.693c-.669.478-1.561-.17-1.313-.954l1.916-6.055-5.109-3.773c-.661-.489-.32-1.538.502-1.544l6.35-.05 2.009-6.025c.259-.78 1.362-.78 1.623 0zm0 140.852l2.009 6.025 6.35.05c.822.007 1.163 1.056.502 1.544l-5.109 3.773 1.916 6.055c.248.783-.644 1.432-1.313.954L256 244.697l-5.166 3.693c-.669.478-1.561-.17-1.313-.954l1.916-6.055-5.109-3.773c-.661-.489-.32-1.538.502-1.544l6.35-.05 2.009-6.025c.259-.78 1.362-.78 1.623 0zm-49.078-126.397l1.76 6.102-5.204 3.64c-.674.471-.36 1.529.462 1.556l6.347.212 1.855 6.074c.241.787 1.343.814 1.623.042l2.163-5.971 6.35.114c.822.014 1.19-1.025.541-1.53l-5.011-3.902 2.069-6.006c.268-.777-.608-1.449-1.289-.988l-5.259 3.56-5.07-3.823c-.657-.496-1.566.13-1.337.92zm79.848 116.032l1.76 6.102-5.204 3.64c-.674.471-.36 1.529.462 1.556l6.347.212 1.855 6.074c.241.787 1.343.814 1.623.042l2.163-5.971 6.35.114c.822.014 1.19-1.025.541-1.53l-5.011-3.902 2.07-6.004c.268-.777-.608-1.449-1.289-.988l-5.259 3.56-5.07-3.823c-.656-.498-1.565.128-1.338.918zm-109.697-75.596l5.07 3.823-1.976 6.036c-.256.781.63 1.439 1.304.968l5.204-3.641 5.13 3.744c.664.484 1.564-.154 1.323-.941l-1.855-6.073 5.146-3.721c.666-.482.335-1.535-.487-1.549l-6.35-.113-1.949-6.045c-.253-.782-1.355-.793-1.623-.017l-2.069 6.004-6.35-.014c-.823-.003-1.174 1.043-.518 1.539zm133.516 44.861l5.07 3.823-1.976 6.036c-.256.781.63 1.439 1.304.968l5.204-3.641 5.13 3.744c.664.484 1.564-.155 1.323-.941l-1.855-6.073 5.146-3.721c.666-.482.335-1.535-.487-1.549l-6.35-.113-1.949-6.045c-.253-.782-1.355-.793-1.623-.017l-2.069 6.004-6.35-.014c-.822-.001-1.174 1.045-.518 1.539zm-10.489-85.297l-1.76 6.102 5.204 3.64c.674.471.36 1.529-.462 1.556l-6.347.212-1.855 6.074c-.241.787-1.343.814-1.623.042l-2.163-5.971-6.35.114c-.822.014-1.19-1.025-.541-1.53l5.011-3.902-2.07-6.004c-.268-.777.608-1.449 1.289-.988l5.259 3.56 5.07-3.823c.657-.498 1.566.128 1.338.918zm-79.849 116.032l-1.76 6.102 5.204 3.64c.674.471.36 1.529-.462 1.556l-6.347.212-1.855 6.074c-.241.787-1.343.814-1.623.042l-2.163-5.971-6.35.114c-.822.014-1.19-1.025-.541-1.53l5.011-3.902-2.07-6.004c-.268-.777.608-1.449 1.289-.988l5.259 3.56 5.07-3.823c.657-.498 1.566.128 1.338.918zm109.698-75.596l-5.07 3.823 1.976 6.036c.256.781-.63 1.439-1.304.968l-5.204-3.641-5.13 3.744c-.664.484-1.564-.154-1.323-.941l1.855-6.073-5.146-3.721c-.666-.482-.335-1.535.487-1.549l6.35-.113 1.949-6.045c.253-.782 1.355-.793 1.623-.017l2.069 6.004 6.35-.014c.823-.003 1.175 1.043.518 1.539zm-133.517 44.861l-5.07 3.823 1.976 6.036c.256.781-.63 1.439-1.304.968l-5.204-3.641-5.13 3.744c-.664.484-1.564-.155-1.323-.941l1.855-6.073-5.146-3.721c-.666-.482-.335-1.535.487-1.549l6.35-.113 1.949-6.045c.253-.782 1.355-.793 1.623-.017l2.069 6.004 6.35-.014c.824-.001 1.175 1.045.518 1.539z",
    fill: "#73AF00"
  })));
}

function SvgDo(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M211.862 132.69H8.828A8.829 8.829 0 010 123.862V9.103A8.829 8.829 0 018.828.275h203.034a8.829 8.829 0 018.828 8.828v114.759a8.829 8.829 0 01-8.828 8.828zm291.31 203.034H300.138a8.829 8.829 0 01-8.828-8.828V212.138a8.829 8.829 0 018.828-8.828h203.034a8.829 8.829 0 018.828 8.828v114.759a8.828 8.828 0 01-8.828 8.827z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 132.69H300.138a8.829 8.829 0 01-8.828-8.828V9.103a8.829 8.829 0 018.828-8.828h203.034A8.829 8.829 0 01512 9.103v114.759a8.829 8.829 0 01-8.828 8.828zm-291.31 203.034H8.828A8.829 8.829 0 010 326.896V212.138a8.829 8.829 0 018.828-8.828h203.034a8.829 8.829 0 018.828 8.828v114.759a8.828 8.828 0 01-8.828 8.827z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#64B496"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M250.932 193.171s5.274 1.931 4.586 8.552l2.132-.04s-1.345-7.651-2.457-8.568c-1.112-.917-4.261.056-4.261.056z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256.218 192.149c-2.237 0-6.147-.003-10.259-1.113.917-.954 2.184-2.876 2.184-6.227 0-5.248-3.616-1.9-3.616-1.9s-2.378 2.001-.94 7.35a20.733 20.733 0 01-4.119-2.109c.825-1.036 2.471-3.45 3.427-7.278 0 0-6.026-1.191-7.674 3.347a20.724 20.724 0 01-2.595-4.317c1.549.019 3.71-1.003 3.71-6.901 0 0-3.935.007-4.986 3.42a33.552 33.552 0 01-.961-4.572c1.571.456 5.633.783 5.633-8.032 0 0-4.877.009-6.006 4.329a52.456 52.456 0 01-.075-3.425c2.368-1.238 5.636-3.965 5.297-9.56 0 0-2.249.51-4.311 2.239.406-2.121.238-5.226-3.015-7.817 0 0-2.989 5.29 1.377 9.585a8.851 8.851 0 00-.984 1.817c-.981-1.494-2.554-2.883-5.088-3.727 0 0-1.166 7.085 5.449 10.049.157 4.138.804 7.794 1.916 10.973-1.895-1.669-3.428-3.967-3.428-3.967 0-7.872-6.453-8.071-6.453-8.071-1.205 8.985 5.439 9.348 5.439 9.348l3.638 3.97c-7.872-1.312-7.872 5.248-7.872 5.248 5.248 1.312 7.872-1.312 7.872-1.312l2.838 1.459c-5.034.147-6.774 5.101-6.774 5.101 6.327 1.055 10.953-.433 12.526-1.057 6.372 4.455 14.226 4.461 17.852 4.461v-1.311h-.002z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.772 192.149c2.237 0 6.147-.003 10.259-1.113-.917-.954-2.184-2.876-2.184-6.227 0-5.248 3.616-1.9 3.616-1.9s2.378 2.001.94 7.35a20.733 20.733 0 004.119-2.109c-.825-1.036-2.471-3.45-3.427-7.278 0 0 6.026-1.191 7.674 3.347a20.724 20.724 0 002.595-4.317c-1.549.019-3.71-1.003-3.71-6.901 0 0 3.935.007 4.988 3.42.414-1.427.729-2.956.961-4.572-1.571.456-5.633.783-5.633-8.032 0 0 4.877.009 6.006 4.329.062-1.105.086-2.247.075-3.425-2.368-1.238-5.636-3.965-5.297-9.56 0 0 2.249.51 4.311 2.239-.406-2.121-.238-5.226 3.015-7.817 0 0 2.989 5.29-1.377 9.585.38.534.711 1.142.984 1.817.981-1.494 2.554-2.883 5.088-3.727 0 0 1.166 7.085-5.449 10.049-.157 4.138-.804 7.794-1.916 10.973 1.895-1.669 3.428-3.967 3.428-3.967 0-7.872 6.453-8.071 6.453-8.071 1.205 8.985-5.439 9.348-5.439 9.348l-3.638 3.97c7.872-1.312 7.872 5.248 7.872 5.248-5.248 1.312-7.872-1.312-7.872-1.312l-2.838 1.459c5.034.147 6.774 5.101 6.774 5.101-6.327 1.055-10.953-.433-12.526-1.057-6.372 4.455-14.226 4.461-17.852 4.461v-1.311z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M233.863 134.955a44.99 44.99 0 00-11.958 11.167l4.224 3.115a39.747 39.747 0 0110.551-9.856l-2.817-4.426z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256.014 169.066h18.367v10.496a5.247 5.247 0 01-5.248 5.248h-7.872c-2.156 0-4.052 1.054-5.248 2.66v-18.404h.001z",
    fill: "#FF6B71"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F64B9",
    d: "M259.95 157.258v-14.432h19.68l-5.248 5.248v14.432H259.95z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M267.818 162.505h6.56v6.56h-6.56z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256.014 169.066h-18.367v10.496a5.247 5.247 0 005.248 5.248h7.872c2.156 0 4.052 1.054 5.248 2.66v-18.404h-.001z",
    fill: "#FF6B71"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M252.735 185.126a6.586 6.586 0 013.25 2.307h.061a6.59 6.59 0 013.25-2.307v-10.813h-6.56v10.813h-.001z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5F64B9",
    d: "M252.079 157.258v-14.432h-19.68l5.248 5.248v14.432h14.432z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M237.65 162.505h6.56v6.56h-6.56z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M244.207 149.386v3.936l3.936 2.624v-2.624z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M248.143 153.322v3.936l5.248 2.624v-1.312z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M267.822 149.386v3.936l-3.936 2.624v-2.624z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M263.886 153.322v3.936l-5.248 2.624v-1.312z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M263.932 178.249h-15.829c-3.598 0-6.515-2.937-6.515-6.56v-20.291l14.525 9.795 14.333-9.795v20.291c0 3.624-2.916 6.56-6.514 6.56z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M246.831 154.634l-5.248-3.936v14.432l5.248 2.624zm18.367 0l5.248-3.936v14.432l-5.248 2.624zm-17.055 13.123h15.744v6.56h-15.744z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M248.143 155.946l7.871 3.936 7.872-3.936v11.808h-15.743z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M261.919 157.186v13.192a1.97 1.97 0 01-1.967 1.967h-7.872a1.97 1.97 0 01-1.967-1.967V157.24l-3.936-2.636v15.774a5.91 5.91 0 005.903 5.903h7.872a5.91 5.91 0 005.903-5.903v-15.863l-3.936 2.671z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M263.293 166.35c-2.21.199-4.697.422-7.278 1.32-2.58-.898-5.068-1.121-7.278-1.32-3.698-.332-5.892-.655-7.148-2.886v3.787c1.929 1.254 4.372 1.484 6.913 1.713 2.281.205 4.639.416 7.049 1.329l.465.175.465-.175c2.409-.913 4.767-1.123 7.049-1.329 2.543-.228 4.99-.455 6.919-1.711v-3.798c-1.257 2.24-3.453 2.563-7.156 2.895z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M258.638 153.978h-1.967v-1.968h-1.312v1.968h-1.968v1.312h1.968v5.904h1.312v-5.904h1.967z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M255.335 159.555l-.72.72-11.528-11.529.72-.72z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M241.278 146.22l1.441 2.882 1.441-1.441z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M256.04 159.338l-.824.6-9.6-13.18.824-.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M244.227 143.983l.977 3.071 1.647-1.2z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M254.877 159.77l-.583.834-13.368-9.334.583-.835z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M238.71 149.108l1.923 2.585 1.167-1.67z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M268.227 148.014l.72.72-11.529 11.528-.72-.72z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M270.745 146.22l-1.441 2.882-1.441-1.441z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M265.585 146.146l.823.6-9.6 13.179-.823-.6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M267.796 143.983l-.977 3.071-1.646-1.2z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M270.532 150.443l.583.835-13.368 9.334-.582-.835z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M273.313 149.108l-1.923 2.585-1.167-1.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.349 184.436s-5.074-5.449-4.089-10.451c.791-4.023 3.192-8.458 5.071-9.537 0 0 2.657-.164 1.991 2.144-.666 2.308-1.478 2.903-1.24 5.178.409 3.938 1.044 8.604-1.733 12.666z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256.888 164.477c-.317-.042-.558-.028-.558-.028-1.879 1.079-4.28 5.514-5.071 9.537-.448 2.275.361 4.638 1.373 6.543-.641-8.248 1.767-11.174 4.256-16.052z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M257.08 171.772c-.237-2.275.574-2.87 1.24-5.178.467-1.615-.693-2.019-1.432-2.116 0 0-1.694 3.892-1.803 6.503-.096 2.297.492 11.644.264 13.458 2.777-4.065 2.142-8.731 1.731-12.667z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M253.639 166.423a4.608 4.608 0 013.999-1.242l-2.07-6.664a4.616 4.616 0 00-3.999 1.242c.689 2.222 1.38 4.443 2.07 6.664z",
    fill: "#F5F0F0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M257.638 165.181a4.608 4.608 0 013.999-1.242l-2.07-6.664a4.616 4.616 0 00-3.999 1.242l2.07 6.664z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M250.022 136.354a39.786 39.786 0 00-20.37 5.07l-2.567-4.577a45.017 45.017 0 0123.058-5.74c-.041 1.749-.082 3.498-.121 5.247z",
    fill: "#5F64B9"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M278.167 134.955a44.99 44.99 0 0111.958 11.167l-4.224 3.115a39.747 39.747 0 00-10.551-9.856l2.817-4.426z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M262.008 136.354a39.786 39.786 0 0120.37 5.07l2.567-4.577a45.017 45.017 0 00-23.058-5.74c.041 1.749.082 3.498.121 5.247z",
    fill: "#5F64B9"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M266.51 134.955a39.767 39.767 0 00-20.991 0l-1.385-5.062a45.037 45.037 0 0123.761 0l-1.385 5.062z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M238.432 193.757a95.255 95.255 0 00-16.529 5.985l2.237 4.747a89.835 89.835 0 0115.96-5.742l-1.668-4.99zm35.166 0a95.255 95.255 0 0116.529 5.985l-2.237 4.747a89.835 89.835 0 00-15.96-5.742l1.668-4.99z",
    fill: "#FF6B71"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M277.119 197.815a89.912 89.912 0 00-41.983 0l-1.225-5.102a95.168 95.168 0 0144.433 0c-.407 1.7-.816 3.402-1.225 5.102z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256.014 199.241l-3.618.905a1.312 1.312 0 01-1.63-1.272v-1.887c0-.853.802-1.48 1.63-1.272l3.618.905v2.621zm0-2.624l3.618-.905a1.312 1.312 0 011.63 1.272v1.887c0 .853-.802 1.48-1.63 1.272l-3.618-.905v-2.621z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M256.296 199.241h-.563a1.03 1.03 0 01-1.031-1.031v-.563a1.03 1.03 0 011.031-1.031h.563a1.03 1.03 0 011.031 1.031v.563a1.032 1.032 0 01-1.031 1.031z",
    fill: "#FF6B71"
  })));
}

function SvgDz(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M256 335.723H8.828A8.829 8.829 0 010 326.895V9.103A8.829 8.829 0 018.828.275H256v335.448z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.999.276h247.172a8.829 8.829 0 018.828 8.828v317.792a8.829 8.829 0 01-8.828 8.828H255.999V.276z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M298.608 135.906l-15.305 20.021-23.897-7.999c-1.336-.447-2.473 1.064-1.673 2.223l14.312 20.743-14.993 20.256c-.839 1.132.247 2.68 1.598 2.277l24.15-7.202 14.632 20.519c.818 1.148 2.626.593 2.66-.815l.613-25.194 24.035-7.575c1.344-.424 1.375-2.314.046-2.782l-23.77-8.369.223-25.201c.013-1.408-1.776-2.021-2.631-.902z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M271.866 228.629c-33.459 0-60.6-27.141-60.6-60.63 0-33.428 27.141-60.63 60.6-60.63 12.448 0 23.928 3.829 33.495 10.308 1.465.992 3.137-.932 1.91-2.208-14.298-14.866-34.535-23.934-56.971-23.168-38.548 1.315-70.459 32.222-72.922 70.713-2.822 44.089 32.089 80.728 75.554 80.728 21.41 0 40.652-8.951 54.393-23.262 1.214-1.265-.462-3.16-1.912-2.177-9.578 6.493-21.077 10.326-33.547 10.326z"
  }))));
}

function SvgEc(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 251.862H0v75.034a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828v-75.034z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 168h512v83.862H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M246.788 172.953l64.48-55.268v79.987c0 13.481-10.929 24.408-24.408 24.408a24.413 24.413 0 01-16.329-6.265l-23.743-21.368v-21.494z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M280.801 204.404l-18.66-16.794v-27.815l33.775-28.95v66.828c0 4.993-4.063 9.056-9.056 9.056a9.045 9.045 0 01-6.059-2.325z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M271.352 151.9v31.617l15.352 13.862v-58.637l9.212-7.896v66.828c0 4.993-4.063 9.056-9.056 9.056a9.04 9.04 0 01-6.059-2.325l-18.66-16.794v-27.815l9.211-7.896z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M265.212 172.953l-64.48-55.268v79.987c0 13.481 10.929 24.408 24.408 24.408 6.03 0 11.847-2.232 16.329-6.265l23.743-21.368v-21.494z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M231.199 204.404l18.66-16.794v-27.815l-33.775-28.95v66.828c0 4.993 4.063 9.056 9.056 9.056a9.045 9.045 0 006.059-2.325z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M240.648 151.9v31.617l-15.352 13.862v-58.637l-9.212-7.896v66.828c0 4.993 4.063 9.056 9.056 9.056a9.04 9.04 0 006.059-2.325l18.66-16.794v-27.815l-9.211-7.896zm68.395-33.941h4.414v26.449h-4.414zm-110.533 0h4.414v26.449h-4.414z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#5A4646"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M246.788 105.404s6.141-29.17-15.352-25.332c-21.493 3.838-21.493 9.978-46.057 22.261 0 0 27.634 6.141 39.916 3.071 0 0 9.212 12.281 18.423 15.352h9.212l-6.142-15.352zm18.424 0s-6.141-29.17 15.352-25.332c21.493 3.838 21.493 9.978 46.057 22.261 0 0-27.634 6.141-39.916 3.071 0 0-9.212 12.281-18.423 15.352h-9.212l6.142-15.352z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M265.212 120.756h-18.423V105.29a9.098 9.098 0 019.098-9.098h.227a9.098 9.098 0 019.098 9.098v15.466z"
  })), /*#__PURE__*/react.createElement("circle", {
    fill: "#E6E1CD",
    cx: 256,
    cy: 105.401,
    r: 6.141
  }), /*#__PURE__*/react.createElement("path", {
    d: "M242.823 101.438l11.546 6.166a2.494 2.494 0 002.937-3.964l-7.448-7.448h-1.791a5.245 5.245 0 00-5.244 5.246z",
    fill: "#FFD0AF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M246.827 102.333h-9.249l4.047-4.738a4.002 4.002 0 013.042-1.402h5.192v3.108a3.033 3.033 0 01-3.032 3.032z",
    fill: "#FFAF94"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M282.186 120.764c-2.072-2.458-2.514-5.717-1.504-8.541 2.954-.516 6.091.471 8.162 2.931 1.77 2.101 2.283 4.772 1.784 7.272a88.745 88.745 0 012.189 3.964c.041-.225.032-.448.096-.673.724-2.546 2.743-4.348 5.135-4.958 1.713 1.778 2.483 4.373 1.759 6.918-.622 2.19-2.228 3.777-4.18 4.581a86.865 86.865 0 012.247 5.69c.041-.118.044-.238.092-.355 1-2.451 3.206-4.019 5.65-4.362 1.506 1.955 1.986 4.619.987 7.07-.875 2.144-2.69 3.558-4.764 4.121 1.068 4.213 1.775 8.683 1.775 13.183h-3.071c0-3.922-.602-7.85-1.511-11.608-1.895.612-4.012.481-5.845-.641-2.236-1.37-3.416-3.778-3.361-6.223 2.154-1.16 4.835-1.203 7.071.168.081.049.135.121.213.173a83.574 83.574 0 00-2.077-5.365c-1.843.871-4.012 1.005-6.002.071-2.374-1.116-3.811-3.379-4.026-5.815 2.006-1.386 4.657-1.721 7.023-.62a88.6 88.6 0 00-2.206-4.002c-2.115-.244-4.152-1.218-5.636-2.979zm-52.372 0c2.072-2.458 2.514-5.717 1.504-8.541-2.954-.516-6.091.471-8.162 2.931-1.77 2.101-2.283 4.772-1.784 7.272a88.745 88.745 0 00-2.189 3.964c-.041-.225-.032-.448-.096-.673-.724-2.546-2.743-4.348-5.135-4.958-1.713 1.778-2.483 4.373-1.759 6.918.622 2.19 2.228 3.777 4.18 4.581a86.865 86.865 0 00-2.247 5.69c-.041-.118-.044-.238-.092-.355-1-2.451-3.206-4.019-5.65-4.362-1.506 1.955-1.986 4.619-.986 7.07.875 2.144 2.69 3.558 4.764 4.121-1.068 4.213-1.775 8.683-1.775 13.183h3.071c0-3.922.602-7.85 1.511-11.608 1.895.612 4.012.481 5.845-.641 2.237-1.37 3.416-3.778 3.361-6.223-2.154-1.16-4.835-1.203-7.071.168-.081.049-.135.121-.213.173a83.574 83.574 0 012.077-5.365c1.843.871 4.012 1.005 6.002.071 2.374-1.116 3.811-3.379 4.026-5.815-2.006-1.386-4.657-1.721-7.023-.62a88.6 88.6 0 012.206-4.002c2.114-.244 4.151-1.218 5.635-2.979z",
    fill: "#8CB400"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256 188.306l-64.48-55.268v79.987c0 13.481 10.929 24.408 24.408 24.408 6.03 0 11.847-2.232 16.329-6.265L256 209.8v-21.494z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M221.987 219.756l18.66-16.794v-27.815l-33.775-28.95v66.828c0 4.993 4.063 9.056 9.056 9.056a9.039 9.039 0 006.059-2.325z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M231.436 167.252v31.617l-15.352 13.862v-58.637l-9.212-7.896v66.828c0 4.993 4.063 9.056 9.056 9.056a9.04 9.04 0 006.059-2.325l18.66-16.794v-27.815l-9.211-7.896z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256 188.306l64.48-55.268v79.987c0 13.481-10.929 24.408-24.408 24.408a24.413 24.413 0 01-16.329-6.265L256 209.8v-21.494z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M290.013 219.756l-18.66-16.794v-27.815l33.775-28.95v66.828c0 4.993-4.063 9.056-9.056 9.056a9.037 9.037 0 01-6.059-2.325z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M280.564 167.252v31.617l15.352 13.862v-58.637l9.212-7.896v66.828c0 4.993-4.063 9.056-9.056 9.056a9.04 9.04 0 01-6.059-2.325l-18.66-16.794v-27.815l9.211-7.896z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("ellipse", {
    fill: "#69C3FF",
    cx: 256,
    cy: 166.808,
    rx: 30.705,
    ry: 46.057
  }), /*#__PURE__*/react.createElement("path", {
    d: "M228.366 179.095h55.268l3.071-12.281-13.993 2.333a9.617 9.617 0 01-7.839-2.184l-15.884-13.615a7.831 7.831 0 00-10.635.408l-9.988 9.988v15.351z",
    fill: "#009B64"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M253.087 164.75l5.274-3.37-9.374-8.034a7.831 7.831 0 00-10.635.408l-9.988 9.988v3.071l15.352-3.071 2.714 1.357a6.753 6.753 0 006.657-.349z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5AA0E6",
    d: "M228.366 179.095l3.07 18.422 15.352 15.353H256l12.281-3.07 12.283-12.283 3.07-18.422z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256 215.94c-18.624 0-33.775-22.039-33.775-49.128s15.151-49.128 33.775-49.128 33.775 22.039 33.775 49.128S274.624 215.94 256 215.94zm0-92.113c-15.236 0-27.634 19.284-27.634 42.987 0 23.703 12.397 42.987 27.634 42.987s27.634-19.284 27.634-42.987c0-23.703-12.398-42.987-27.634-42.987z",
    fill: "#FFC88C"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#E1E1E1"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M234.339 212.594c-2.574-3.554-6.406-5.865-10.746-5.865-4.34 0-8.172 2.311-10.746 5.865 4.39 1.217 7.982 4.781 9.683 9.479a18.053 18.053 0 011.064 6.15c-.001-7.596 4.588-13.922 10.745-15.629z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M226.031 222.281s-.239 4.094-2.339 6.013l-.088-.072c-2.099-1.919-2.339-6.013-2.339-6.013l4.766.072z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M294.4 223.616h-76.8a1.516 1.516 0 01-1.516-1.516v-.038c0-.838.679-1.516 1.516-1.516h76.8c.838 0 1.516.679 1.516 1.516v.038c0 .837-.678 1.516-1.516 1.516z",
    fill: "#966446"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M271.428 228.222h-30.856a6.066 6.066 0 01-6.066-6.066v-.151a6.066 6.066 0 016.066-6.066h30.856a6.066 6.066 0 016.066 6.066v.151a6.067 6.067 0 01-6.066 6.066z",
    fill: "#BE915A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M228.366 220.546H217.62a1.535 1.535 0 000 3.07h10.746v-3.07z",
    fill: "#B9B9B9"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M256 228.222v28.054l-12.281-3.49 6.14-24.564z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M252.929 228.222l-6.141 21.494-12.281-3.071 9.212-18.423z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M240.648 228.222l-9.212 12.282 9.212 3.07 6.14-15.352z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M256 228.222v28.054l12.281-3.49-6.14-24.564z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M259.071 228.222l6.141 21.494 12.281-3.071-9.212-18.423z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M271.352 228.222l9.212 12.282-9.212 3.07-6.14-15.352z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M193.728 159.482l-4.414-4.448v-21.999h4.414zm128.918-4.448l-4.414 4.448v-26.447h4.414z",
    fill: "#41479B"
  })));
}

function SvgEe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M0 112.088h512V223.9H0z"
  })));
}

function SvgEg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M284.186 150.57c0-4.377-4.289-7.469-8.441-6.084l-7.804 2.601-1.895-11.444a14.047 14.047 0 00-13.906-11.78h-7.299l-7.634 9.396h10.109l-2.829 13.972-8.233-2.744c-4.153-1.385-8.441 1.707-8.441 6.084v47.475l11.363-11.363-5.354 16.061h-6.008v9.396h56.373v-9.396h-6.008l-5.354-16.061 11.363 11.363V150.57h-.002zm-32.883 52.172h-7.574l5.208-13.909 2.366 3.021v10.888zm9.394 0v-10.888l2.366-3.021 5.208 13.909h-7.574zM256 185.713s-14.534-9.836-13.946-28.186c0 0 8.956-1.468 13.946-9.396 4.991 7.927 13.947 9.396 13.947 9.396.587 18.351-13.947 28.186-13.947 28.186z",
    fill: "#F0C727"
  })));
}

function SvgEr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 9.103v317.793c0 3.192 1.784 5.863 4.321 7.412L512 168 4.321 1.692C1.783 3.242 0 5.911 0 9.103z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M188.808 218.391s24.862-9.067 31.882-36.269c0 0-10.823 14.04-18.428 18.135 0 0 16.672-22.23 13.162-43.874 0 0-2.048 8.775-6.143 12.285 0 0 7.313-31.297-2.048-44.459 0 0 .292 11.115-3.802 22.23 0 0 1.56-35.198-14.43-44.167 0 0 6.24 11.115 3.607 20.474 0 0-4.387-19.89-24.765-27.787 0 0-1.268 1.462-.975 5.85 0 0-5.557-6.728-19.305-6.435 0 0 .292 4.972 3.802 9.652 0 0-5.557 2.925-9.067 2.048 0 0 5.557 6.143 25.154 5.557 0 0-2.633 2.34-7.897 2.925 0 0 8.006 3.677 15.892 4.387 10.823.974 15.113 7.313 17.16 15.21 0 0-8.482-4.972-11.7-9.945 0 0-.585 8.482 15.502 24.862l-8.19-3.51s5.265 15.21 11.7 32.467l-6.728-7.313s-1.462 12.285-2.633 35.1l-4.68-10.823s-8.19 26.91-20.767 31.297c-9.846 3.435-20.736 5.786-25.015 6.649-.401-15.055 6.003-18.349 6.003-18.349 11.407.585 14.04-11.992 14.04-11.992-2.34 2.34-6.728 2.34-6.728 2.34 6.728-7.02 6.728-16.964 6.728-16.964-4.095 7.897-10.53 9.067-10.53 9.067l.585-7.897c-11.897 8.652-11.048 18.785-10.851 20.27-.268-1.894-2.387-16.713-3.481-20.27-1.17-3.802 1.462-11.407 5.557-10.238 13.255 3.787 16.38-5.849 16.38-5.849-7.02 3.218-11.115.877-11.115.877 9.067-8.775 5.265-16.964 5.265-16.964-2.925 8.482-11.115 9.945-11.115 9.945l-.292-9.359c-3.802 2.048-7.313 11.115-7.313 11.115s-.877-7.313 1.754-13.748c2.633-6.435 9.359-3.218 9.359-3.218 11.992 2.34 15.795-9.067 15.795-9.067l-7.897 1.17c8.775-6.435 6.143-14.333 6.143-14.333-2.048 4.972-9.359 5.85-9.359 5.85l3.51-9.359c-7.605 0-11.992 9.945-11.992 9.945l-.585-9.652c3.51-12.577-4.68-18.135-4.68-18.135-1.754 2.34-.877 7.313-.877 7.313-7.313-6.435-12.87 1.17-12.87 1.17 5.557 5.85 10.823 5.265 10.823 5.265-1.754 1.17-8.19 1.754-8.19 1.754 7.313 6.143 11.407 4.972 11.407 4.972 3.51 14.918-5.85 21.645-5.85 21.645-1.754-11.115-8.482-16.38-8.482-16.38l.292 7.313c-4.387-2.633-7.897-10.53-7.897-10.53-2.925 11.115 4.972 20.767 4.972 20.767l-7.313-.585c6.435 14.918 16.672 10.238 16.672 10.238-.877 10.53 2.633 27.787 2.633 27.787-1.462-1.754-16.964-16.38-16.964-16.38-.585 5.849 4.972 13.454 4.972 13.454-2.925-.585-11.407-7.02-11.407-7.02.877 9.359 13.162 15.502 13.162 15.502-4.68.585-13.748-4.68-13.748-4.68 5.265 22.522 24.569 12.577 24.569 12.577l1.481 30.464c-4.078-.979-12.995-3.252-22.248-6.479-12.577-4.387-20.767-31.297-20.767-31.297l-4.68 10.823c-1.17-22.815-2.633-35.1-2.633-35.1l-6.728 7.313c6.435-17.257 11.7-32.467 11.7-32.467l-8.19 3.51c16.093-16.382 15.507-24.864 15.507-24.864-3.218 4.972-11.7 9.945-11.7 9.945 2.048-7.897 8.482-16.087 16.38-16.672 7.898-.585 16.672-2.925 16.672-2.925-5.265-.585-7.897-2.925-7.897-2.925 22.815-2.048 25.154-8.19 25.154-8.19-3.51.877-14.333-.292-14.333-.292 9.067-4.972 23.985-9.652 23.985-9.652-18.428-3.218-34.222 7.313-34.222 7.313 2.633-4.972 7.313-10.53 7.313-10.53-22.522 9.945-33.053 32.467-33.053 32.467-2.633-9.359 3.607-20.475 3.607-20.475-15.99 8.97-14.43 44.167-14.43 44.167-4.095-11.115-3.802-22.23-3.802-22.23-9.359 13.162-2.048 44.459-2.048 44.459-4.095-3.51-6.143-12.285-6.143-12.285-3.51 21.645 13.162 43.874 13.162 43.874-7.605-4.095-18.428-18.135-18.428-18.135 7.02 27.202 31.882 36.269 31.882 36.269-13.748-5.265-19.597-.877-19.597-.877 9.652 2.048 19.012 7.897 26.617 13.454s17.843 6.728 26.91 7.897a87.831 87.831 0 019.254 1.689c-4.956 2.425-8.376 7.502-8.376 13.391h29.835c0-5.667-3.16-10.596-7.815-13.121 2.996-.641 6.987-1.4 11.325-1.96 9.067-1.17 18.54-3.577 26.91-7.897 9.067-4.68 16.964-11.407 26.617-13.454.003.002-5.848-4.385-19.594.879z",
    fill: "#FFE15A"
  })));
}

function SvgEs(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M8.828 335.724h494.345a8.829 8.829 0 008.828-8.828V9.103a8.829 8.829 0 00-8.828-8.828H8.828A8.83 8.83 0 000 9.103v317.793a8.828 8.828 0 008.828 8.828z",
    fill: "#C8414B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFD250",
    d: "M0 70.897h512v194.207H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M216.276 168l7.485-33.681c.69-3.102-1.671-6.044-4.849-6.044h-5.272c-3.177 0-5.537 2.942-4.849 6.044L216.276 168z",
    fill: "#C8414B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M207.448 150.345h17.655v75.034h-17.655z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FAB446",
    d: "M203.034 141.517h26.483v8.828h-26.483z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M185.379 168h44.138v8.828h-44.138zm44.138 35.31l-26.483-8.827v-8.828l26.483 8.828zM83.862 168l7.485-33.681c.69-3.102-1.671-6.044-4.849-6.044h-5.272c-3.177 0-5.537 2.942-4.849 6.044L83.862 168z",
    fill: "#C8414B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M114.759 141.517a8.829 8.829 0 00-8.828 8.828v57.379c0 10.725 10.01 30.897 44.138 30.897s44.138-20.171 44.138-30.897v-57.379a8.829 8.829 0 00-8.828-8.828h-70.62z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M150.069 185.655h-44.138v-35.31a8.829 8.829 0 018.828-8.828h35.31v44.138zm0 0h44.138v22.069c0 12.189-9.88 22.069-22.069 22.069-12.189 0-22.069-9.88-22.069-22.069v-22.069z",
    fill: "#C8414B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M105.931 185.655h44.138v22.069c0 12.189-9.88 22.069-22.069 22.069-12.189 0-22.069-9.88-22.069-22.069v-22.069z",
    fill: "#FAB446"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M141.241 225.28v-39.625h-8.828v43.693c3.284-.666 6.251-2.12 8.828-4.068zm-17.655 4.068v-43.693h-8.828v39.625c2.578 1.948 5.545 3.402 8.828 4.068z",
    fill: "#C8414B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFB441",
    d: "M114.759 168h26.483v8.828h-26.483z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FAB446"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M114.759 150.345h26.483v8.828h-26.483z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M119.172 155.586h17.655v15.992h-17.655z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M75.034 150.345h17.655v75.034H75.034z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M70.621 220.966h26.483v8.828H70.621zm0-79.449h26.483v8.828H70.621z",
    fill: "#FAB446"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5064AA",
    d: "M66.207 229.793h35.31v8.828h-35.31z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FAB446",
    d: "M207.448 220.966h26.483v8.828h-26.483z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5064AA",
    d: "M198.621 229.793h35.31v8.828h-35.31z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FAB446",
    d: "M123.586 132.69h52.966v8.828h-52.966z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFB441",
    d: "M145.655 106.207h8.828v26.483h-8.828z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M141.241 119.448c-7.302 0-13.241-5.94-13.241-13.241 0-7.302 5.94-13.241 13.241-13.241 7.302 0 13.241 5.94 13.241 13.241.001 7.301-5.939 13.241-13.241 13.241zm0-17.655a4.417 4.417 0 00-4.414 4.414 4.417 4.417 0 004.414 4.414 4.416 4.416 0 004.414-4.414 4.417 4.417 0 00-4.414-4.414z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M158.897 119.448c-7.302 0-13.241-5.94-13.241-13.241 0-7.302 5.94-13.241 13.241-13.241 7.302 0 13.241 5.94 13.241 13.241 0 7.301-5.94 13.241-13.241 13.241zm0-17.655a4.417 4.417 0 00-4.414 4.414 4.417 4.417 0 004.414 4.414 4.417 4.417 0 004.414-4.414 4.418 4.418 0 00-4.414-4.414z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M176.552 128.276c-7.302 0-13.241-5.94-13.241-13.241 0-7.302 5.94-13.241 13.241-13.241 7.302 0 13.241 5.94 13.241 13.241 0 7.301-5.94 13.241-13.241 13.241zm0-17.655a4.417 4.417 0 00-4.414 4.414 4.417 4.417 0 004.414 4.414 4.417 4.417 0 004.414-4.414 4.417 4.417 0 00-4.414-4.414zm-52.966 17.655c-7.302 0-13.241-5.94-13.241-13.241 0-7.302 5.94-13.241 13.241-13.241 7.302 0 13.241 5.94 13.241 13.241.001 7.301-5.939 13.241-13.241 13.241zm0-17.655a4.417 4.417 0 00-4.414 4.414 4.417 4.417 0 004.414 4.414 4.417 4.417 0 004.414-4.415 4.416 4.416 0 00-4.414-4.413z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M176.552 203.31v4.414a4.419 4.419 0 01-4.414 4.414 4.419 4.419 0 01-4.414-4.414v-4.414h8.828zm8.827-8.827h-26.483v13.241c0 7.302 5.94 13.241 13.241 13.241 7.302 0 13.241-5.94 13.241-13.241v-13.241h.001z",
    fill: "#FAB446"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M172.138 176.828A8.829 8.829 0 01163.31 168v-8.828a8.829 8.829 0 0117.656 0V168a8.829 8.829 0 01-8.828 8.828z",
    fill: "#FFA0D2"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#5064AA",
    cx: 150.069,
    cy: 185.655,
    r: 13.241
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FAB446",
    d: "M145.655 88.552h8.828v26.483h-8.828z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M123.586 132.69l-8.828-8.828 5.171-5.171a42.625 42.625 0 0160.28 0l5.171 5.171-8.828 8.828h-52.966z",
    fill: "#C8414B"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(128 119)",
    fill: "#FFD250"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 22.069,
    cy: 4.862,
    r: 4.414
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 4.414,
    cy: 4.862,
    r: 4.414
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 39.724,
    cy: 4.862,
    r: 4.414
  })), /*#__PURE__*/react.createElement("path", {
    d: "M70.621 168h44.138v8.828H70.621zm0 35.31l26.482-8.827v-8.828l-26.482 8.828z",
    fill: "#C8414B"
  })));
}

function SvgEt(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M361.945 168.098c0 58.426-47.435 105.945-105.945 105.945-58.51 0-105.945-47.519-105.945-105.945 0-58.594 47.435-106.029 105.945-106.029 58.51 0 105.945 47.435 105.945 106.029z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F2DD30"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M175.42 141.463h61.556l13.929-42.867 3.699 11.498-20.228 62.316-6.026-4.396 6.301-19.362h-49.506l-9.725-7.189zm30.756 94.785l19.025-58.51-36.462-26.551h12.026l52.995 38.473-6.024 4.396-16.509-12.007-15.325 47.181-9.726 7.018zm99.646 0L256 200.061l-36.442 26.464 3.721-11.329 52.952-38.558 2.262 7.102-16.468 11.923 40.057 29.172 3.74 11.413zm30.756-94.785l-49.781 36.274 13.931 42.869-9.724-7.104-20.209-62.316h7.399l6.298 19.448 40.079-29.172h12.006v.001h.001zM256 82.953l19.025 58.51h45.088l-9.745 7.189h-65.487l2.305-7.189h20.418l-15.325-47.096L256 82.953z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M257.775 252.822h-3.53V206.91h3.53v45.912zm78.276-56.991l-43.651-14.12 1.1-3.297 43.672 14.12-1.121 3.297zm-160.123 0l-1.1-3.297 43.692-14.12 1.08 3.297-43.672 14.12zm104.361-58.173l-2.877-2.028 26.995-37.12 2.812 2.03-26.93 37.118zm-48.513 0l-27.038-37.118 2.855-2.03 26.973 37.12-2.79 2.028z"
  }))));
}

function SvgFi(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M512 141.517H211.862V.276h-52.965v141.241H0v52.966h158.897v141.241h52.965V194.483H512z"
  })));
}

function SvgFj(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172 168H8.828A8.829 8.829 0 010 159.172V9.103A8.829 8.829 0 018.828.275h238.345a8.829 8.829 0 018.828 8.828v150.069a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.334l-81.77 53.574V.276H105.93V53.85L24.16.276H8.828A8.828 8.828 0 000 9.103v7.002l70.155 45.963H0v44.138h70.155L0 152.17v7.002A8.829 8.829 0 008.828 168h15.334l81.77-53.574V168h44.138v-53.574L231.839 168h15.334a8.829 8.829 0 008.828-8.828v-7.002l-70.155-45.963H256V62.069h-70.155L256 16.106V9.104a8.828 8.828 0 00-8.828-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M256 70.897H141.241V.276h-26.482v70.621H0v26.482h114.759V168h26.482V97.379H256z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.332 0 5.961 0 9.103v.458l80.889 52.508h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.196-61.793H89.474zm166.386 53.658l-82.666-53.658H156.98l93.874 60.935c2.812-1.305 4.741-4.04 5.006-7.277z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M322.034 96.617v96.858c0 39.281 55.178 59.469 61.902 61.782 6.717-2.313 61.902-22.534 61.902-61.782V96.617H322.034z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M448.022 141.041V94.432H319.849v46.609h55.348v43.695h-55.348v17.479h55.348v52.433l8.739 2.913 8.738-2.913v-52.433h55.348v-17.479h-55.348v-43.695z"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#F5F5F5",
    cx: 334.223,
    cy: 122.858,
    r: 7.293
  }), /*#__PURE__*/react.createElement("path", {
    d: "M348.231 112.999c-2.334-1.283-6.535-4.726-8.226-4.142-1.692.584-2.07 1.78-4.437 1.962-2.306.178-5.948 2.428-4.43 4.922 1.973 3.246 8.149.722 8.557-.796 0 0 1.517.243 2.792-.061 0 0 2.537 3.54 5.687 3.307 3.15-.234 4.609-4.142 3.91-4.142-.699 0-3.853-1.05-3.853-1.05zm9.685 15.46c-.525.962-4.522 4.38-11.202 5.951-1.487.35-1.225 2.1-2.713 1.225-1.487-.875-5.601-1.576-9.277-1.75-3.676-.175-4.041-3.581-3.413-4.813.797-1.565 6.665-2.519 7.715-.594 1.05 1.926 1.837 1.524 4.45 2.081 1.619.346 1.663 1.138 1.663 1.138s2.976-2.976 5.514-3.851c2.538-.875 4.726-2.801 5.163-2.801.438 0 2.713.612 2.713.612l-.613 2.802zm9.714-10.327c3.851 1.4 15.228.962 27.392-2.976 12.164-3.938 15.666-4.638 21.617-2.451 5.951 2.187 8.527-4.725 4.619-5.894-6.138-1.837-25.124 9.194-38.871 3.004 0 0-.405 1.665.032 2.452 0 0-9.976.35-7.614-9.976 0 0 .68 3.77 5.397 3.337 8.921-.819 10.196 5.462 29.085-.362 10.487-3.233 18.635-1.646 18.707 3.456.087 6.143-8.381 7.571-8.381 7.571s3.296 6.739 9.948 3.763c6.652-2.976 7.001 2.158 7.585 3.91.584 1.751 1.692 3.443 3.15 3.617 0 0 1.05 3.15.642 3.559-.408.408-3.15 3.851-5.892 3.851h-8.693s-1.576-3.91 1.459-3.967c3.033-.058 6.71-.291 6.243-1.926-.467-1.633-2.859-2.392-2.801-4.201 0 0-7.06 5.134-11.435-.934l-.117 2.859s-5.31-.992-7.234-5.251c0 0 .525 4.785-4.025 4.084 0 0 .934 1.4 2.509 2.392 1.576.992-.059 3.15-3.092 4.959-3.033 1.809-12.369 7.06-16.628 1.692-4.259-5.367.934-8.46 2.217-8.11 1.283.35 4.959 6.009 7.468 5.251 2.509-.758 3.734-3.326 1.633-4.9-2.101-1.574-3.673-3.064-2.349-4.654 1.821-2.185 8.534-1.53 8.3-2.988-.233-1.459-6.476-1.05-10.56 3.033-4.084 4.084-21.821 13.478-28.881 7.527-7.059-5.951-1.43-11.727-1.43-11.727z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M365.355 115.507s5.338 5.251 14.353 6.914c0 0-1.663 2.538-6.476 1.838 0 0 1.926 1.663 3.239 4.463 0 0-3.063.7-5.777-.788 0 0 .35 2.275 1.663 4.114 0 0-3.588 0-6.652-2.713l-1.225 3.5s-2.1-1.4-3.413-4.114c0 0-2.451 1.926-4.9 1.926 0 0 .875-2.625.875-4.114 0 0-3.5 2.1-6.389 1.313 0 0 .087-3.676 1.05-4.726 0 0-2.275.263-3.763-.525 0 0 .875-2.013 1.313-3.326 0 0-2.451.087-3.938-1.313 0 0 4.726-1.838 5.777-3.588l14.263 1.139z",
    fill: "#FFD25A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M356.749 100.804c1.05.584 2.742 1.867 3.443 4.025 0 0 1.926-2.801 5.251-3.326 0 0 1.459 1.633 1.05 5.892 0 0 3.676-1.05 5.66.875 0 0-3.91.875-5.718 4.142 0 0-.702 3.338.524 5.322 0 0-1.365.182-2.741-.42 0 0-.7 3.326 0 4.376 0 0-1.926-.234-2.976-2.275 0 0-1.576 2.392-1.459 3.851 0 0-2.1-1.225-2.217-3.033 0 0-1.459 2.742-3.033 2.976 0 0-.175-3.851-.875-5.31 0 0-1.342 1.459-3.092 1.4 0 0 0-2.976 1.459-4.376 0 0-2.451.758-3.793-1.926 0 0 4.025 1.166 5.017-1.283.992-2.451 1.283-3.209 2.684-4.551 1.4-1.341.816-6.359.816-6.359z",
    fill: "#FFBE5A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M365.355 112.094s-4.989 9.539-9.539 6.652c-4.985-3.165 1.225-10.59 2.013-11.377-.001-.001 3.675.962 7.526 4.725z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M347.363 160.952s-.523-6.851-4.237-8.828c-3.492-1.858-5.555-2.787-5.955-5.169 0 0 3.034 1.394 6.241 2.265 2.898.787 5.726 5.692 4.867 11.209l-.916.523z",
    fill: "#5ABEA0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M335.639 166.585l.472.871.343 1.873-.687 2.221s2.729 1.085 3.35 4.791c.426 2.543 1.546 3.093 2.233 2.57.687-.523 1.103-1.141.386-3.921-.916-3.549-3.393-6.925-3.393-6.925l-1.932-2.962-.772 1.482z",
    fill: "#B46446"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#5ABEA0"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M338.345 168.066c-2.49-3.223-9.277-9.931-10.564-.785 0 0-2.66-7.706 2.319-7.405 5.754.35 8.245 8.19 8.245 8.19z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M336.111 167.457c-2.147-2.353-2.835-4.095-3.951-8.45-1.117-4.355-1.46-5.663-2.749-5.576-1.289.087-2.061 1.481-2.061 4.268 0 0-3.779-3.398-1.203-6.098 2.577-2.7 8.331-1.219 8.675 3.572.343 4.791.258 8.014 1.975 12.022l-.686.262z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M336.713 165.366s-4.552-10.018 8.246-15.42c0 0-11.338-3.049-9.963 13.067l1.717 2.353zm1.461 3.572s-9.62-3.659-8.761 5.227c0 0 1.632-4.182 6.356-2.613l2.405-2.614z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M349.081 165.423c0 2.599 1.022 10.14-.429 11.093-.73.479-2.792.087-2.62-1.742.172-1.829.988-10.716.988-12.893 0-2.178 2.061 3.542 2.061 3.542z",
    fill: "#B46446"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#5ABEA0"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M342.955 171.464c1.661-1.684 2.176-5.517 1.603-10.628 0 0 3.436 2.381 4.524 4.588 0 0 1.088-5.053-2.462-6.389-3.55-1.336-5.44-.58-6.07 1.045-.63 1.626 1.085 3.445 1.833 6.098.686 2.44.572 5.286.572 5.286z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M348.853 164.088s.573-2.671 2.462-3.775c0 0 3.894 2.73 3.607 6.389 0 0 1.031-4.994-1.088-6.969-2.119-1.974-4.524-2.497-5.726-.755-1.203 1.741.745 5.11.745 5.11z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M349.769 158.977s1.203-7.144 4.237-8.712c3.034-1.568 8.647-3.02 8.99-3.369 0 0-6.699.349-7.787.349s-7.101 4.355-7.101 10.803c0 6.446.573 2.033.745 1.974.171-.057.916-1.045.916-1.045z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M352.561 177.867c.687 1.438 2.319 1.785 2.663 1.045.343-.74 1.889-6.403 1.889-6.403l-2.19-1.045-2.362 6.403z",
    fill: "#B46446"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M365.401 154.099c2.691-1.568 4.467 3.079 4.467 3.079 0-5.471-1.718-7.201-6.013-5.111-1.293.63-2.24 1.949-2.936 3.479-2.174-6.247-6.969-6.151-6.969-6.151l-1.088.755c3.926.755 6.175 5.46 7.126 8.026a30.27 30.27 0 00-.867 4.728c-2.573 2.667-4.198 8.559-4.198 8.559s1.847 1.089 2.19 1.045c0 0 1.203-3.702 2.706-3.615 1.503.087 3.264 2.483 3.307 4.008 0 0 2.233-4.53-.429-6.272-1-.654-1.8-.903-2.446-.915l1.974-2.221c3.221.61 5.454 3.659 5.454 3.659.065-5.444-2.339-6.507-4.874-6.051.453-2.192 1.45-6.334 2.596-7.002z",
    fill: "#5ABEA0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M418.42 161.638v15.439c0 .747-3.27 3.652-3.27 3.652h8.693s-2.792-3.238-2.792-3.652c0-.414.638-14.278.638-14.278l-3.269-1.161z",
    fill: "#B46446"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M418.978 163.215c-2.073-.166-7.816 4.566-9.491 11.787 0 0-5.105-8.301 7.657-15.191 0 0-5.663-1.661-14.276 7.305-.465.484-.877-13.53 14.595-9.795 0 0-5.902-8.551-18.025-1.826 0 0 8.055-14.444 19.939-1.494 0 0 .079-11.207.16-10.045.081 1.162.957 6.308.957 6.308l2.313-4.067-1.834 8.301s10.607-14.112 19.62.582c0 0-11.645-4.814-17.227.581 0 0 11.964-3.238 11.006 10.625 0 0-4.705-8.218-12.362-7.139 0 0 9.013 4.15 6.141 15.357-.001.001-5.432-10.99-9.173-11.289zm-76.163 49.887a2.416 2.416 0 00-1.676-.966c.235-.81.392-1.18.329-1.77.186.046.364.13.555.153l.082-.666c-.708-.085-1.48-.403-2.273-.887a2.414 2.414 0 00.843-1.852c0-.857-.393-1.575-.952-1.982-.558.408-.952 1.126-.952 1.982 0 .643.264 1.159.61 1.572-.295-.204-.593-.44-.892-.694-.077-.527-.279-1.058-.747-1.484-.633-.577-1.428-.77-2.106-.632-.075.687.191 1.461.824 2.039.489.446 1.065.598 1.618.61.126.107.258.214.397.323a2.583 2.583 0 00-1.198.142c-.806.294-1.345.908-1.537 1.572.575.385 1.383.51 2.188.216a2.406 2.406 0 001.399-1.335c.471.301.988.552 1.523.753l-.085.011c-.018.483.014.682-.226 1.58a2.411 2.411 0 00-2.014-.286c-.822.242-1.399.822-1.633 1.473.55.42 1.348.596 2.171.353.618-.182 1.037-.579 1.336-1.03-.113.341-.255.693-.414 1.052-.483.223-.936.567-1.213 1.137-.375.77-.335 1.588-.011 2.199.681-.122 1.348-.596 1.724-1.366.289-.595.274-1.19.128-1.724.067-.151.132-.308.198-.472.063.377.216.759.474 1.109.509.69 1.25 1.034 1.942 1.031.206-.66.097-1.471-.412-2.161z",
    fill: "#5ABEA0"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M338.874 210.951c2.911 0 6.719-.111 6.606 2.799-.111 2.911-3.359 12.766 4.143 15.789 7.502 3.023 8.398 2.575 8.398 2.575l3.359 7.726 8.174-2.911-7.839-6.271s-.672-4.255-2.575-7.167c0 0 4.815-2.464 6.495-4.591l-3.359-.224s4.367-2.799 6.382-5.934l-2.351.224s2.687-2.688 3.359-5.823c0 0-4.367 4.367-8.846 4.927 0 0 1.903-4.927 2.351-6.83 0 0-3.359 2.127-5.71 3.023-2.351.896-6.047 1.007-4.367 8.622 0 0-2.016-1.679-3.247-5.263-1.231-3.583-1.679-4.927-3.359-4.927-2.743 0-3.807 2.464-3.807 2.464l-3.807 1.792z",
    fill: "#FFECDE"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M421.519 212.391c1.007-1.343 3.022-5.54 4.785-4.449 1.763 1.091 4.114 3.777 5.54 2.518 1.426-1.259 1.511-2.854-.672-3.609-2.183-.755-4.617-2.015-6.127-1.511-1.511.503-6.127 5.289-6.127 5.289l2.601 1.762z",
    fill: "#B46446"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M408.509 216c-.084-1.931 1.219-10.313 6.464-9.234 2.854.588 4.258 3.613 7.975 5.036 3.945 1.511 6.464 2.434 5.708 5.036-.756 2.602-2.183 5.708-5.457 6.464-3.274.757-14.69-7.302-14.69-7.302z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#5ABEA0"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M405.067 222.911c-1.119.224-5.26 6.268-.335 12.424 0 0 6.044 2.462 10.857-1.343s1.231-5.708 1.231-5.708l-11.753-5.373z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M405.486 224.226c-.503-.756-.419-1.315-.419-1.315s-.252-8.674 3.358-8.842c3.61-.168 16.62 8.394 16.62 9.821 0 1.427-4.198 5.54-7.723 6.379-3.524.84-11.836-6.043-11.836-6.043z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M396.589 245.212s11.466-5.151 9.311-9.342c-1.555-3.023-5.05-1.086-5.603 1.223-.691 2.881-2.932 6.896-3.708 8.119z",
    fill: "#B46446"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M383.936 259.854l-.663-.211c-.665-.213-16.494-5.311-32.583-15.916-21.605-14.238-33.026-31.617-33.026-50.252V92.247h132.543v101.228c0 18.636-11.421 36.014-33.026 50.252-16.088 10.605-31.917 15.703-32.583 15.916l-.662.211zM322.034 96.617v96.858c0 39.281 55.178 59.469 61.902 61.782 6.717-2.313 61.902-22.534 61.902-61.782V96.617H322.034z",
    fill: "#464655"
  })));
}

function SvgFk(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.333l-81.77 53.573V.276h-44.138v53.573L24.161.276H8.828A8.829 8.829 0 000 9.104v7.002l70.155 45.963H0v44.138h70.155L0 152.171v7.001A8.829 8.829 0 008.828 168h15.333l81.77-53.573V168h44.138v-53.573L231.838 168h15.333a8.829 8.829 0 008.828-8.828v-7.002l-70.154-45.963h70.154V62.069h-70.155l70.155-45.963V9.104a8.827 8.827 0 00-8.827-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M255.999 70.897H141.241V.276h-26.483v70.621H0v26.482h114.758V168h26.483V97.379h114.758z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.333 0 5.961 0 9.104v.458l80.889 52.507h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.195-61.793H89.474zm166.385 53.66l-82.666-53.659H156.98l93.873 60.934c2.813-1.305 4.741-4.04 5.006-7.275z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M330.706 264.392l-4.143-9.669 2.071 4.835-2.095-4.823c.873-.385 21.38-9.741 21.38-37.253h10.519c0 34.626-26.599 46.423-27.732 46.91z",
    fill: "#E67346"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M334.819 240.867l-7.437-7.437c14.219-14.219 21.608-18.119 22.404-18.518l4.705 9.409-2.353-4.705 2.393 4.684c-.067.036-6.727 3.582-19.712 16.567z",
    fill: "#EB7D4B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M438.795 264.392l4.143-9.669-2.071 4.835 2.095-4.823c-.873-.385-21.38-9.741-21.38-37.253h-10.519c0 34.626 26.599 46.423 27.732 46.91z",
    fill: "#E67346"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M434.683 240.867l7.437-7.437c-14.219-14.219-21.608-18.119-22.404-18.518l-4.705 9.409 2.353-4.705-2.393 4.684c.066.036 6.726 3.582 19.712 16.567z",
    fill: "#EB7D4B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M384.735 80.734h-56.101v84.152c0 17.531 3.507 63.114 56.101 80.645 52.595-17.532 56.101-63.114 56.101-80.645V80.734h-56.101z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M409.279 101.772h-30.144a14.026 14.026 0 01-8.761-3.073l-11.769-9.416a7.018 7.018 0 00-4.381-1.537h-1.046a7.012 7.012 0 00-7.012 7.012h-5.259a5.26 5.26 0 000 10.518h5.259a3.507 3.507 0 013.507 3.507v17.532c0 6.528 4.48 11.966 10.519 13.529v11.015h7.012l2.63-10.519h32.434l3.507 3.507v7.012h3.507V140.34h3.507v10.519h3.507v-11.491c2.088-1.215 3.507-3.45 3.507-6.04V112.29c-.005-5.808-4.714-10.518-10.524-10.518z",
    fill: "#C8C8C8"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#73AF00",
    d: "M346.165 147.355l7.014 21.037h63.114l7.012-21.037z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M422.091 161.379c-9.348 0-9.348 7.012-18.696 7.012-9.345 0-9.345-7.012-18.691-7.012-9.344 0-9.344 7.012-18.689 7.012-9.347 0-9.347-7.012-18.695-7.012-9.327 0-9.351 6.98-18.638 7.01.113 3.906.447 8.683 1.31 13.963 7.992-.653 8.466-6.947 17.329-6.947 9.347 0 9.347 7.012 18.695 7.012 9.344 0 9.344-7.012 18.689-7.012s9.345 7.012 18.691 7.012c9.348 0 9.348-7.012 18.696-7.012 8.887 0 9.354 6.307 17.385 6.948.862-5.279 1.197-10.057 1.31-13.963-9.331-.016-9.343-7.011-18.696-7.011z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M422.091 175.405c-9.348 0-9.348 7.012-18.696 7.012-9.345 0-9.345-7.012-18.691-7.012-9.344 0-9.344 7.012-18.689 7.012-9.347 0-9.347-7.012-18.695-7.012-8.863 0-9.336 6.294-17.329 6.947a90.688 90.688 0 003.225 13.367c5.114-1.786 6.607-6.29 14.103-6.29 9.347 0 9.347 7.012 18.695 7.012 9.344 0 9.344-7.012 18.689-7.012s9.345 7.012 18.691 7.012c9.348 0 9.348-7.012 18.696-7.012 7.523 0 9.01 4.522 14.156 6.301a90.868 90.868 0 003.229-13.377c-8.029-.642-8.496-6.948-17.384-6.948z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M422.091 189.43c-9.348 0-9.348 7.012-18.696 7.012-9.345 0-9.345-7.012-18.691-7.012-9.344 0-9.344 7.012-18.689 7.012-9.347 0-9.347-7.012-18.695-7.012-7.496 0-8.989 4.503-14.103 6.29a79.59 79.59 0 004.655 11.317c2.371-1.778 4.707-3.582 9.448-3.582 9.347 0 9.347 7.012 18.695 7.012 9.344 0 9.344-7.012 18.689-7.012s9.345 7.012 18.691 7.012c9.348 0 9.348-7.012 18.696-7.012 4.768 0 7.109 1.818 9.494 3.604a79.462 79.462 0 004.662-11.328c-5.146-1.779-6.632-6.301-14.156-6.301z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M422.091 203.456c-9.348 0-9.348 7.012-18.696 7.012-9.345 0-9.345-7.012-18.691-7.012-9.344 0-9.344 7.012-18.689 7.012-9.347 0-9.347-7.012-18.695-7.012-4.74 0-7.078 1.803-9.448 3.582a73.023 73.023 0 006.613 10.705c.847-.16 1.774-.26 2.835-.26 9.347 0 9.347 7.012 18.695 7.012 9.344 0 9.344-7.012 18.689-7.012s9.345 7.012 18.691 7.012c9.348 0 9.348-7.012 18.696-7.012 1.081 0 2.026.102 2.887.267a72.955 72.955 0 006.607-10.689c-2.384-1.787-4.725-3.605-9.494-3.605z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M424.978 217.748a15.159 15.159 0 00-2.887-.267c-9.348 0-9.348 7.012-18.696 7.012-9.345 0-9.345-7.012-18.691-7.012-9.344 0-9.344 7.012-18.689 7.012-9.347 0-9.347-7.012-18.695-7.012-1.06 0-1.987.1-2.835.26 5.683 7.628 13.391 14.781 23.823 20.6 7.104-1.048 7.894-6.835 16.394-6.835 8.52 0 9.294 5.812 16.442 6.841 10.438-5.817 18.149-12.97 23.834-20.599z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF965A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M382.984 161.379h3.507v59.608h-3.507z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M374.212 170.141h21.043v3.507h-21.043zm0 21.042h21.043v3.507h-21.043z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M374.212 173.639h21.043v13.87h-21.043z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M382.982 161.379v7.013l-10.519-3.506z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF965A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M406.355 161.379h3.507v41.203h-3.507z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M397.594 170.141h21.043v3.507h-21.043zm0 21.042h21.043v3.507h-21.043z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M397.594 173.639h21.043v13.87h-21.043z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M406.357 161.379v7.013l-10.519-3.506z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF965A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M359.459 161.379h3.507v40.905h-3.507z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M350.697 170.141h21.043v3.507h-21.043zm0 21.042h21.043v3.507h-21.043z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M350.697 173.639h21.043v13.87h-21.043z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M359.461 161.379v7.013l-10.519-3.506z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M402.267 199.949c0 9.666-7.865 17.532-17.532 17.532s-17.532-7.865-17.532-17.532h-6.985l-23.747-5.363-.773 3.421 10.467 2.364v3.084l7.717 3.086c3.042 14.244 15.714 24.963 30.852 24.963 14.987 0 27.543-10.513 30.744-24.544h11.331v-10.519l-24.542 3.508z",
    fill: "#FF965A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M440.837 80.734v84.152c0 17.531-3.507 63.114-56.102 80.645-52.595-17.532-56.101-63.114-56.101-80.645V80.734h112.203zm3.505-3.506H325.126v87.659c0 41.576 20.776 71.397 58.499 83.972l1.109.37 1.109-.37c37.724-12.575 58.499-42.397 58.499-83.972V77.228z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M384.735 263.063c-25.807 0-49.741-8.645-64.021-23.127l9.985-9.848c11.702 11.864 31.903 18.949 54.037 18.949s42.335-7.084 54.037-18.949l9.985 9.848c-14.282 14.481-38.215 23.127-64.023 23.127z",
    fill: "#FF965A"
  })));
}

function SvgFm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M254.837 48.569l-6.801 20.392-21.495.167c-1.178.009-1.667 1.513-.719 2.214l17.292 12.769-6.484 20.494c-.355 1.123.924 2.054 1.882 1.368l17.487-12.5 17.489 12.5c.959.685 2.238-.244 1.882-1.368l-6.484-20.494 17.292-12.769c.948-.7.459-2.204-.719-2.214l-21.495-.167-6.801-20.392c-.372-1.117-1.954-1.117-2.326 0zm0 182.063l-6.801 20.392-21.495.167c-1.178.009-1.667 1.513-.719 2.214l17.292 12.769-6.484 20.494c-.355 1.123.924 2.054 1.882 1.368l17.487-12.5 17.489 12.5c.959.685 2.238-.244 1.882-1.368l-6.484-20.494 17.292-12.769c.948-.7.459-2.204-.719-2.214l-21.495-.167-6.801-20.392c-.372-1.118-1.954-1.118-2.326 0zm120.594-63.795l-20.392-6.801-.167-21.495c-.009-1.178-1.513-1.667-2.214-.719l-12.769 17.292-20.494-6.484c-1.123-.355-2.053.924-1.368 1.882l12.5 17.487-12.5 17.489c-.685.959.244 2.238 1.368 1.882l20.494-6.484 12.769 17.292c.7.948 2.204.459 2.214-.719l.167-21.495 20.392-6.801c1.117-.372 1.117-1.954 0-2.326zm-238.862 0l20.392-6.801.167-21.495c.009-1.178 1.513-1.667 2.214-.719l12.769 17.292 20.494-6.484c1.123-.355 2.054.924 1.368 1.882L181.473 168l12.5 17.489c.685.959-.244 2.238-1.368 1.882l-20.494-6.484-12.769 17.292c-.7.948-2.204.459-2.214-.719l-.167-21.495-20.392-6.801c-1.117-.373-1.117-1.955 0-2.327z",
    fill: "#F5F5F5"
  })));
}

function SvgFo(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M512 123.862H229.517V.276h-88.276v123.586H0v88.276h141.241v123.586h88.276V212.138H512z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M512 141.517H211.862V.276h-52.965v141.241H0v52.966h158.897v141.241h52.965V194.483H512z"
  })));
}

function SvgFr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h161.839v335.449z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.828 8.828 0 01-8.828 8.827z",
    fill: "#FF4B55"
  })));
}

function SvgGa(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 112.088h512V223.9H0z"
  })));
}

function SvgGb(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.725H8.828A8.829 8.829 0 010 326.897V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 9.104a8.829 8.829 0 00-8.828-8.828h-39.495l-163.54 107.147V.276h-88.276v107.147L48.322.276H8.828A8.829 8.829 0 000 9.104v22.831l140.309 91.927H0v88.276h140.309L0 304.066v22.831a8.829 8.829 0 008.828 8.828h39.495l163.54-107.147v107.147h88.276V228.578l163.54 107.147h39.495a8.829 8.829 0 008.828-8.828v-22.831l-140.309-91.927H512v-88.276H371.691L512 31.935V9.104z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512 141.518H282.483V.276h-52.966v141.242H0v52.965h229.517v141.242h52.966V194.483H512z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M178.948 212.138L.25 328.135c.625 4.263 4.14 7.59 8.577 7.59h12.159l190.39-123.587-32.428.001v-.001zm167.44 0H313.96l190.113 123.404c4.431-.472 7.928-4.09 7.928-8.646v-7.258l-165.613-107.5zM0 18.849l161.779 105.014h32.428L5.143 1.137C2.123 2.54 0 5.555 0 9.104v9.745zm332.566 105.014L511.693 7.586c-.744-4.122-4.184-7.309-8.521-7.309h-12.647L300.138 123.863h32.428z"
  }))));
}

function SvgGd(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M459.033 53.242v229.517H52.965V53.242h406.068"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M52.965 53.242L255.999 168 52.965 282.758zm406.068 0L255.999 168l203.034 114.758z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FF4B55",
    cx: 255.999,
    cy: 168,
    r: 35.31
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.231 142.129l5.523 16.558 17.454.136c2.26.018 3.197 2.901 1.379 4.244l-14.041 10.369 5.266 16.642c.682 2.155-1.771 3.937-3.611 2.623L256 182.55l-14.2 10.151c-1.838 1.314-4.291-.468-3.61-2.623l5.266-16.642-14.041-10.369c-1.818-1.343-.881-4.226 1.379-4.244l17.454-.136 5.523-16.558c.712-2.144 3.745-2.144 4.46 0zm-.913-130.136l3.263 9.783 10.313.079c1.335.01 1.889 1.715.814 2.507l-8.297 6.126 3.111 9.833c.403 1.273-1.047 2.326-2.133 1.549L256 35.876l-8.391 5.997c-1.086.777-2.536-.277-2.133-1.549l3.111-9.833-8.297-6.126c-1.074-.793-.521-2.497.814-2.507l10.313-.079 3.263-9.783c.423-1.27 2.215-1.27 2.638-.003zm116.138 0l3.263 9.783 10.313.079c1.335.01 1.889 1.715.814 2.507l-8.297 6.126 3.111 9.833c.403 1.273-1.047 2.326-2.133 1.549l-8.391-5.997-8.391 5.997c-1.086.777-2.536-.277-2.133-1.549l3.111-9.833-8.297-6.126c-1.074-.793-.521-2.497.814-2.507l10.313-.079 3.263-9.783c.426-1.267 2.217-1.267 2.64 0zm-232.276 0l3.263 9.783 10.313.079c1.335.01 1.889 1.715.814 2.507l-8.297 6.126 3.111 9.833c.403 1.273-1.047 2.326-2.133 1.549l-8.391-5.997-8.391 5.997c-1.086.777-2.536-.277-2.133-1.549l3.111-9.833-8.297-6.126c-1.074-.793-.521-2.497.814-2.507l10.313-.079 3.263-9.783c.426-1.267 2.218-1.267 2.64 0zm116.138 282l3.263 9.783 10.313.079c1.335.01 1.889 1.715.814 2.507l-8.297 6.126 3.111 9.833c.403 1.273-1.047 2.326-2.133 1.549L256 317.875l-8.391 5.997c-1.086.777-2.536-.277-2.133-1.549l3.111-9.833-8.297-6.126c-1.074-.793-.521-2.497.814-2.507l10.313-.079 3.263-9.783c.423-1.269 2.215-1.269 2.638-.002zm116.138 0l3.263 9.783 10.313.079c1.335.01 1.889 1.715.814 2.507l-8.297 6.126 3.111 9.833c.403 1.273-1.047 2.326-2.133 1.549l-8.391-5.997-8.391 5.997c-1.086.777-2.536-.277-2.133-1.549l3.111-9.833-8.297-6.126c-1.074-.793-.521-2.497.814-2.507l10.313-.079 3.263-9.783c.426-1.267 2.217-1.267 2.64 0zm-232.276 0l3.263 9.783 10.313.079c1.335.01 1.889 1.715.814 2.507l-8.297 6.126 3.111 9.833c.403 1.273-1.047 2.326-2.133 1.549l-8.391-5.997-8.391 5.997c-1.086.777-2.536-.277-2.133-1.549l3.111-9.833-8.297-6.126c-1.074-.793-.521-2.497.814-2.507l10.313-.079 3.263-9.783c.426-1.267 2.218-1.267 2.64 0zm-23.111-148.062H96V168c0 12.189 9.88 22.069 22.069 22.069 12.189 0 22.069-9.88 22.069-22.069 0-12.189-9.881-22.069-22.069-22.069z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M140.138 190.069l-12.132-2.352L118.069 168l19.717 9.939z"
  })));
}

function SvgGe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512 141.517H282.483V.276h-52.966v141.241H0v52.966h229.517v141.241h52.966V194.483H512z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M150.069 58.833c-8.744.879-17.31 1.76-25.888 2.642.882-8.579 1.762-17.145 2.643-25.888a93.961 93.961 0 01-24.129 0c.879 8.743 1.76 17.31 2.643 25.888-8.579-.881-17.146-1.762-25.888-2.642a93.954 93.954 0 010 24.128c8.744-.879 17.31-1.76 25.888-2.642-.882 8.579-1.763 17.145-2.643 25.888a93.961 93.961 0 0124.129 0c-.879-8.743-1.761-17.31-2.643-25.888 8.579.881 17.145 1.762 25.888 2.642a94.044 94.044 0 010-24.128zm282.483 0c-8.744.879-17.31 1.76-25.888 2.642.882-8.579 1.762-17.145 2.643-25.888a93.961 93.961 0 01-24.129 0c.879 8.743 1.76 17.31 2.643 25.888-8.579-.881-17.146-1.762-25.888-2.642a93.954 93.954 0 010 24.128c8.744-.879 17.31-1.76 25.888-2.642-.882 8.579-1.763 17.145-2.643 25.888a93.961 93.961 0 0124.129 0c-.879-8.743-1.761-17.31-2.643-25.888 8.579.881 17.145 1.762 25.888 2.642a94.044 94.044 0 010-24.128zM150.069 253.039c-8.744.879-17.31 1.76-25.888 2.642.882-8.579 1.762-17.145 2.643-25.888a93.961 93.961 0 01-24.129 0c.879 8.743 1.76 17.31 2.643 25.888-8.579-.881-17.146-1.762-25.888-2.642a93.954 93.954 0 010 24.128c8.744-.879 17.31-1.76 25.888-2.642-.882 8.579-1.763 17.145-2.643 25.888a93.961 93.961 0 0124.129 0c-.879-8.743-1.761-17.31-2.643-25.888 8.579.881 17.145 1.762 25.888 2.642a94.044 94.044 0 010-24.128zm282.483 0c-8.744.879-17.31 1.76-25.888 2.642.882-8.579 1.762-17.145 2.643-25.888a93.961 93.961 0 01-24.129 0c.879 8.743 1.76 17.31 2.643 25.888-8.579-.881-17.146-1.762-25.888-2.642a93.954 93.954 0 010 24.128c8.744-.879 17.31-1.76 25.888-2.642-.882 8.579-1.763 17.145-2.643 25.888a93.961 93.961 0 0124.129 0c-.879-8.743-1.761-17.31-2.643-25.888 8.579.881 17.145 1.762 25.888 2.642a94.044 94.044 0 010-24.128z"
  }))));
}

function SvgGg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M512 132.69H291.31V.276h-70.621V132.69H0v70.62h220.689v132.414h70.621V203.31H512z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M361.93 194.483v-52.966l-13.241 13.242H163.31l-13.241-13.242v52.966l13.241-13.242h185.379z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M229.517 273.931h52.965l-13.241-13.242V75.311l13.241-13.242h-52.965l13.241 13.242v185.378z"
  }))));
}

function SvgGh(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M259.722 125.909l9.213 27.623 29.118.226c3.769.029 5.333 4.84 2.301 7.08l-23.424 17.298 8.783 27.763c1.138 3.594-2.955 6.568-6.023 4.375L256 193.34l-23.69 16.932c-3.066 2.193-7.159-.781-6.023-4.375l8.783-27.763-23.424-17.298c-3.032-2.24-1.47-7.05 2.301-7.08l29.118-.226 9.213-27.623c1.193-3.574 6.251-3.574 7.444.002z",
    fill: "#464655"
  })));
}

function SvgGi(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V220.965h512v105.931a8.828 8.828 0 01-8.828 8.828zM353.103 123.862v-17.655h-17.655V62.069h8.827V44.414H291.31v17.655h8.827v44.138h-26.482V44.414h8.827V26.759h-52.965v17.655h8.827v61.793h-26.482V62.069h8.827V44.414h-52.965v17.655h8.827v44.138h-17.655v17.655h8.828v70.621h-8.828v17.655h194.207v-17.655h-8.828v-70.621z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M273.655 203.31h-35.31V168c0-9.751 7.904-17.655 17.655-17.655 9.751 0 17.655 7.904 17.655 17.655v35.31zM255.999 79.724a8.829 8.829 0 00-8.828 8.828v26.483h17.655V88.552a8.827 8.827 0 00-8.827-8.828zm61.793 8.828a8.829 8.829 0 00-8.828 8.828v17.655h17.655V97.38a8.825 8.825 0 00-8.827-8.828zm-123.586 0a8.829 8.829 0 00-8.828 8.828v17.655h17.655V97.38a8.827 8.827 0 00-8.827-8.828zM326.62 203.31h-35.31v-26.483c0-9.751 7.904-17.655 17.655-17.655 9.751 0 17.655 7.904 17.655 17.655v26.483zm-105.931 0h-35.31v-26.483c0-9.751 7.904-17.655 17.655-17.655 9.751 0 17.655 7.904 17.655 17.655v26.483z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M280.275 234.207a4.414 4.414 0 00-1.965-3.672l-17.897-11.93v-3.737l15.215-7.608a4.413 4.413 0 001.974-5.922 4.41 4.41 0 00-5.922-1.974l-15.681 7.841-15.681-7.84a4.412 4.412 0 00-5.922 1.974 4.413 4.413 0 001.974 5.922l15.215 7.607v3.737l-17.897 11.932a4.412 4.412 0 000 7.343l17.897 11.932v37.362H233.93v6.759a4.411 4.411 0 004.414 4.414 4.413 4.413 0 003.901-2.345h9.341v8.828h-9.418a4.41 4.41 0 00-3.823-2.207 4.411 4.411 0 00-4.414 4.414v6.621h17.655v4.414a4.411 4.411 0 004.414 4.414 4.411 4.411 0 004.414-4.414v-68.259l17.897-11.932a4.423 4.423 0 001.964-3.674zm-24.276 7.936l-11.905-7.936 11.905-7.935 11.905 7.935-11.905 7.936z",
    fill: "#FFE15A"
  })));
}

function SvgGl(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168zM176.552 53.241c-63.38 0-114.759 51.38-114.759 114.759H291.31c0-63.379-51.378-114.759-114.758-114.759z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M176.552 282.759c63.38 0 114.759-51.38 114.759-114.759H61.793c0 63.38 51.38 114.759 114.759 114.759z",
    fill: "#F5F5F5"
  })));
}

function SvgGm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 220.966h512v105.931a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V220.966z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v105.931H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 115.034h512v105.931H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 115.034h512v17.655H0zm0 88.276h512v17.655H0z",
    fill: "#F5F5F5"
  })));
}

function SvgGn(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M341.333.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.829 8.829 0 01-8.828 8.828H341.333V.276z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h161.839v335.448H8.828A8.829 8.829 0 010 326.896V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FF4B55"
  })));
}

function SvgGq(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M128.095 173.47a8.828 8.828 0 000-10.94L2.335 3.233C.92 4.799 0 6.827 0 9.103v317.793c0 2.276.92 4.305 2.335 5.87l125.76-159.296z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M253.881 175.896c0 .216-.071 20.968-5.378 31.177h14.913c-5.308-10.208-5.378-30.961-5.378-31.177 0-7.15 7.411-12.832 7.486-12.888l-2.497-3.322c-.194.146-2.664 2.039-4.988 5.114v-5.53h-4.157v5.53c-2.324-3.075-4.793-4.969-4.988-5.114l-2.497 3.322c.075.056 7.484 5.737 7.484 12.888z",
    fill: "#B46446"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M276.745 150.955c-.127 0-.244.033-.37.041-.847-2.438-3.14-4.198-5.866-4.198-.983 0-1.9.248-2.727.653-.881-1.619-2.575-2.731-4.547-2.731-.567 0-1.102.114-1.613.281a7.275 7.275 0 00-6.7-4.438c-3.701 0-6.722 2.774-7.181 6.349a7.298 7.298 0 00-1.132-.114 7.275 7.275 0 00-7.275 7.275c0 .472.053.931.139 1.378a6.205 6.205 0 00-3.925 3.855c-.124-.011-.244-.038-.371-.038a4.157 4.157 0 000 8.314c1.06 0 2.018-.409 2.752-1.064a6.207 6.207 0 003.484 1.064 6.164 6.164 0 003.117-.865c.92.535 1.976.865 3.117.865a6.236 6.236 0 006.236-6.236c0-.264-.046-.514-.077-.769.968.477 2.042.769 3.196.769a7.218 7.218 0 003.916-1.161c1.063 1.922 3.085 3.239 5.437 3.239.505 0 .991-.076 1.461-.19 1.144 1.375 2.846 2.269 4.774 2.269 1.863 0 3.517-.833 4.659-2.129 3.204-.259 5.734-2.913 5.734-6.185a6.24 6.24 0 00-6.238-6.234z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M270.509 156.151c0-.216.045-.42.064-.631a6.196 6.196 0 01-4.221 1.671 6.223 6.223 0 01-5.196-2.796 6.225 6.225 0 01-5.196 2.796 6.201 6.201 0 01-4.297-1.734c-.648 3.354-3.592 5.89-7.135 5.89-.36 0-.704-.055-1.049-.106.001.036.011.07.011.106 0 2.718-1.749 5.005-4.175 5.859a6.2 6.2 0 002.097.376 6.164 6.164 0 003.117-.865c.92.535 1.976.865 3.117.865a6.236 6.236 0 006.236-6.236c0-.264-.046-.514-.077-.769.968.477 2.042.769 3.196.769a7.218 7.218 0 003.916-1.161c1.063 1.922 3.085 3.239 5.437 3.239.505 0 .991-.076 1.461-.19 1.144 1.375 2.846 2.269 4.773 2.269 1.863 0 3.517-.833 4.659-2.129l.013-.002c-3.769-.274-6.751-3.383-6.751-7.221z",
    fill: "#5FA000"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.96 220.321a.783.783 0 01-.739-.527c-.079-.234-2.036-5.706-9.653-5.706h-10.392c-6.161 0-11.171-5.012-11.171-11.171v-68.588a.78.78 0 01.779-.779h64.431a.78.78 0 01.779.779v68.588c0 6.161-5.012 11.171-11.171 11.171h-12.471c-7.663 0-9.634 5.644-9.652 5.702a.777.777 0 01-.738.532h-.002v-.001zm-30.398-85.215v67.809c0 5.3 4.312 9.613 9.613 9.613h10.392c6.169 0 9.155 3.313 10.392 5.303 1.237-1.992 4.223-5.303 10.392-5.303h12.471c5.301 0 9.613-4.313 9.613-9.613v-67.809h-62.873z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.983 115.795l1.976 3.161 3.725.129-1.751 3.291 1.751 3.291-3.725.129-1.976 3.162-1.974-3.162-3.725-.129 1.75-3.291-1.75-3.291 3.725-.129zm-17.558 2.867l2.659 2.612 3.652-.744-.934 3.608 2.471 2.792-3.592.995-1.181 3.535-2.659-2.613-3.652.745.933-3.609-2.47-2.791 3.592-.995zm-16.847 4.985l3.16 1.978 3.405-1.516-.132 3.725 3.015 2.192-3.292 1.748-.391 3.707-3.16-1.978-3.405 1.516.132-3.725-3.015-2.192 3.292-1.748zm50.439-7.852l-1.976 3.161-3.725.129 1.751 3.291-1.751 3.291 3.725.129 1.976 3.162 1.974-3.162 3.725-.129-1.75-3.291 1.75-3.291-3.725-.129zm17.558 2.867l-2.659 2.612-3.652-.744.934 3.608-2.471 2.792 3.592.995 1.181 3.535 2.659-2.613 3.652.745-.933-3.609 2.47-2.791-3.592-.995zm16.847 4.985l-3.16 1.978-3.405-1.516.132 3.725-3.015 2.192 3.292 1.748.391 3.707 3.16-1.978 3.405 1.516-.132-3.725 3.015-2.192-3.292-1.748z",
    fill: "#FFE15A"
  })));
}

function SvgGr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 37.55h512v37.272H0zm0 74.538h512v37.272H0zm0 74.549h512v37.272H0z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 223.912h512v37.272H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 261.175h512v37.272H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828 335.724h494.345a8.829 8.829 0 008.828-8.828v-28.445H0v28.445a8.828 8.828 0 008.828 8.828zM512 37.548V9.103a8.829 8.829 0 00-8.828-8.828H8.828A8.83 8.83 0 000 9.103v177.533h512v-37.272H176.552v-37.272H512V74.82H176.552V37.548H512z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M176.552 74.82h-69.64V.276H69.64V74.82H0v37.272h69.64v74.544h37.272v-74.544h69.64z"
  })));
}

function SvgGt(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h161.839v335.449z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.828 8.828 0 01-8.828 8.827z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFC855",
    d: "M253.773 124.11l-5.062 2.531 4.657 1.923z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#73AF00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M256 217.652c-28.135 0-51.023-22.89-51.023-51.023 0-17.478 8.797-33.548 23.531-42.989l1.31 2.046c-14.034 8.993-22.411 24.299-22.411 40.943 0 26.795 21.8 48.594 48.594 48.594l-.001 2.429z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M226.798 220.836c1.944.396 4.943-.117 8.023-1.551 3.081-1.436 5.402-3.402 6.349-5.145-1.944-.396-4.943.117-8.023 1.551-3.079 1.436-5.401 3.402-6.349 5.145zm14.374-6.696c.396-1.944-.117-4.943-1.551-8.023-1.436-3.081-3.402-5.402-5.145-6.349-.396 1.944.117 4.943 1.551 8.023 1.435 3.079 3.401 5.401 5.145 6.349zm-24.539.456c1.865.678 4.907.61 8.164-.356 3.257-.967 5.843-2.572 7.036-4.157-1.865-.678-4.907-.61-8.164.356-3.257.967-5.843 2.572-7.036 4.157zm15.201-4.514c.678-1.865.61-4.907-.356-8.164-.968-3.258-2.572-5.843-4.157-7.036-.678 1.865-.61 4.907.356 8.164.967 3.258 2.572 5.843 4.157 7.036zm-24.603-3.994c1.713 1.001 4.717 1.482 8.096 1.116 3.379-.366 6.21-1.481 7.668-2.826-1.713-1.001-4.717-1.482-8.096-1.116-3.379.367-6.21 1.481-7.668 2.826zm15.764-1.711c1.001-1.713 1.482-4.717 1.116-8.096-.366-3.379-1.481-6.21-2.826-7.668-1.001 1.713-1.482 4.717-1.116 8.096.366 3.379 1.481 6.211 2.826 7.668zm-23.537-10.038c1.508 1.289 4.38 2.294 7.77 2.531 3.39.237 6.375-.358 8.047-1.423-1.508-1.289-4.38-2.294-7.77-2.531-3.39-.237-6.374.357-8.047 1.423zm15.818 1.108c1.289-1.508 2.294-4.38 2.531-7.77.237-3.39-.358-6.375-1.423-8.047-1.289 1.508-2.294 4.38-2.531 7.77-.238 3.39.357 6.374 1.423 8.047zm-20.368-14.05c1.204 1.577 3.799 3.164 7.064 4.109 3.265.945 6.306.991 8.167.301-1.204-1.577-3.799-3.164-7.064-4.109-3.265-.945-6.307-.991-8.167-.301z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M210.138 185.807c1.577-1.204 3.164-3.799 4.109-7.064.946-3.265.991-6.306.301-8.167-1.577 1.204-3.164 3.799-4.109 7.064-.945 3.266-.99 6.307-.301 8.167zm-17.156-19.521c.758 1.834 2.858 4.034 5.77 5.788 2.912 1.753 5.839 2.58 7.815 2.391-.758-1.834-2.858-4.034-5.77-5.788-2.911-1.753-5.84-2.579-7.815-2.391zm13.585 8.179c1.834-.758 4.034-2.858 5.788-5.77 1.753-2.912 2.58-5.839 2.391-7.815-1.834.758-4.034 2.858-5.788 5.77-1.752 2.912-2.58 5.84-2.391 7.815zm-11.76-22.446c.356 1.952 1.949 4.544 4.428 6.869s5.17 3.746 7.139 3.977c-.356-1.952-1.949-4.544-4.428-6.869s-5.168-3.747-7.139-3.977zm11.569 10.846c1.952-.356 4.544-1.949 6.869-4.428s3.746-5.17 3.977-7.139c-1.952.356-4.544 1.949-6.869 4.428s-3.748 5.168-3.977 7.139zm-4.401-26.283c-.408 1.941.085 4.943 1.501 8.033s3.368 5.423 5.105 6.382c.408-1.941-.085-4.943-1.501-8.033-1.416-3.091-3.368-5.425-5.105-6.382z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M208.58 150.997c1.941.408 4.943-.085 8.033-1.501s5.423-3.368 6.382-5.105c-1.941-.408-4.943.085-8.033 1.501s-5.424 3.368-6.382 5.105zm1.966-25.848c-.915 1.76-1.247 4.785-.714 8.141.533 3.357 1.785 6.13 3.201 7.519.915-1.76 1.247-4.785.714-8.141-.533-3.357-1.786-6.129-3.201-7.519zm2.488 15.66c1.76.915 4.785 1.247 8.141.714 3.357-.533 6.13-1.785 7.519-3.201-1.76-.915-4.785-1.247-8.141-.714-3.357.533-6.13 1.785-7.519 3.201zm5.917-23.617c-1.164 1.607-1.938 4.548-1.905 7.947.033 3.399.864 6.325 2.059 7.908 1.164-1.607 1.938-4.548 1.905-7.947-.033-3.398-.863-6.326-2.059-7.908zm.154 15.855c1.607 1.164 4.548 1.938 7.947 1.905 3.399-.033 6.325-.864 7.908-2.059-1.607-1.164-4.548-1.938-7.947-1.905-3.398.033-6.324.864-7.908 2.059zm4.078-4.169c1.977.16 4.894-.707 7.78-2.502 2.887-1.794 4.956-4.024 5.688-5.868-1.977-.16-4.894.707-7.78 2.502-2.886 1.794-4.955 4.024-5.688 5.868zM256 217.652v-2.43c26.794 0 48.594-21.799 48.594-48.594 0-16.644-8.378-31.951-22.411-40.943l1.31-2.046c14.734 9.441 23.531 25.512 23.531 42.989-.001 28.134-22.889 51.024-51.024 51.024z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M285.202 220.836c-1.944.396-4.943-.117-8.023-1.551-3.081-1.436-5.402-3.402-6.349-5.145 1.944-.396 4.943.117 8.023 1.551 3.079 1.436 5.401 3.402 6.349 5.145zm-14.374-6.696c-.396-1.944.117-4.943 1.551-8.023 1.436-3.081 3.402-5.402 5.145-6.349.396 1.944-.117 4.943-1.551 8.023-1.435 3.079-3.401 5.401-5.145 6.349zm24.539.456c-1.865.678-4.907.61-8.164-.356-3.257-.967-5.843-2.572-7.036-4.157 1.865-.678 4.907-.61 8.164.356 3.257.967 5.843 2.572 7.036 4.157zm-15.202-4.514c-.677-1.865-.61-4.907.356-8.164.968-3.258 2.572-5.843 4.157-7.036.678 1.865.61 4.907-.356 8.164-.966 3.258-2.571 5.843-4.157 7.036zm24.604-3.994c-1.713 1.001-4.717 1.482-8.096 1.116-3.379-.366-6.21-1.481-7.668-2.826 1.713-1.001 4.717-1.482 8.096-1.116 3.379.367 6.21 1.481 7.668 2.826zm-15.764-1.711c-1.001-1.713-1.482-4.717-1.116-8.096.366-3.379 1.481-6.21 2.826-7.668 1.001 1.713 1.482 4.717 1.116 8.096-.366 3.379-1.481 6.211-2.826 7.668zm23.537-10.038c-1.508 1.289-4.38 2.294-7.77 2.531-3.39.237-6.374-.358-8.047-1.423 1.508-1.289 4.38-2.294 7.77-2.531 3.39-.237 6.374.357 8.047 1.423zm-15.818 1.108c-1.289-1.508-2.294-4.38-2.531-7.77-.237-3.39.358-6.375 1.423-8.047 1.289 1.508 2.294 4.38 2.531 7.77.238 3.391-.357 6.374-1.423 8.047zm20.368-14.05c-1.204 1.577-3.799 3.164-7.064 4.109-3.264.946-6.306.991-8.167.301 1.204-1.577 3.799-3.164 7.064-4.109 3.265-.945 6.307-.991 8.167-.301z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M301.862 185.807c-1.577-1.204-3.164-3.799-4.109-7.064-.946-3.265-.991-6.306-.301-8.167 1.577 1.204 3.164 3.799 4.109 7.064.945 3.266.99 6.307.301 8.167zm17.156-19.521c-.758 1.834-2.858 4.034-5.77 5.788-2.912 1.753-5.839 2.58-7.815 2.391.758-1.834 2.858-4.034 5.77-5.788 2.911-1.753 5.84-2.579 7.815-2.391zm-13.585 8.179c-1.834-.758-4.034-2.858-5.788-5.77-1.753-2.912-2.58-5.839-2.391-7.815 1.834.758 4.034 2.858 5.788 5.77 1.754 2.912 2.58 5.84 2.391 7.815zm11.76-22.446c-.356 1.952-1.949 4.544-4.428 6.869s-5.17 3.746-7.139 3.977c.356-1.952 1.949-4.544 4.428-6.869s5.168-3.747 7.139-3.977zm-11.569 10.846c-1.952-.356-4.544-1.949-6.869-4.428s-3.746-5.17-3.977-7.139c1.952.356 4.544 1.949 6.869 4.428s3.748 5.168 3.977 7.139zm4.401-26.283c.408 1.941-.085 4.943-1.501 8.033s-3.368 5.423-5.105 6.382c-.408-1.941.085-4.943 1.501-8.033 1.416-3.091 3.368-5.425 5.105-6.382z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M303.42 150.997c-1.941.408-4.943-.085-8.033-1.501s-5.423-3.368-6.382-5.105c1.941-.408 4.943.085 8.033 1.501s5.424 3.368 6.382 5.105zm-1.966-25.848c.915 1.76 1.247 4.785.714 8.141-.533 3.357-1.785 6.13-3.201 7.519-.915-1.76-1.247-4.785-.714-8.141.533-3.356 1.786-6.129 3.201-7.519zm-2.488 15.66c-1.76.915-4.785 1.247-8.141.714-3.357-.533-6.13-1.785-7.519-3.201 1.76-.915 4.785-1.247 8.141-.714 3.357.533 6.13 1.785 7.519 3.201zm-5.917-23.617c1.164 1.607 1.938 4.548 1.905 7.947-.033 3.399-.864 6.325-2.059 7.908-1.164-1.607-1.938-4.548-1.905-7.947.033-3.398.863-6.326 2.059-7.908z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M292.895 133.047c-1.607 1.164-4.548 1.938-7.947 1.905-3.399-.033-6.325-.864-7.908-2.059 1.607-1.164 4.548-1.938 7.947-1.905 3.399.033 6.324.864 7.908 2.059zm-4.078-4.169c-1.977.16-4.894-.707-7.78-2.502-2.887-1.794-4.956-4.024-5.688-5.868 1.977-.16 4.894.707 7.78 2.502 2.886 1.794 4.955 4.024 5.688 5.868z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M228.146 206.351l-8.844 8.844-4.361-8.723 13.084-13.084 4.361 4.361-1.26 3.779a12.33 12.33 0 01-2.98 4.823z",
    fill: "#966446"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M275.997 141.056l-47.972 47.972a3.084 3.084 0 000 4.361l2.18 2.18 8.723-8.723 34.889-39.251 4.361-4.361-2.181-2.178z",
    fill: "#B9B9B9"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M239.83 181.583a3.086 3.086 0 00-.904 2.18v3.084l34.889-39.251-33.985 33.987z",
    fill: "#966446"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#A0A0A0",
    d: "M278.177 143.236l-2.18-2.18-2.181 2.18 2.181 2.182 2.18 2.18 23.987-28.347z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M286.284 206.351l8.844 8.844 4.361-8.723-13.084-13.084-4.361 4.361 1.26 3.779a12.33 12.33 0 002.98 4.823z",
    fill: "#966446"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M238.433 141.056l47.972 47.972a3.084 3.084 0 010 4.361l-2.18 2.18-8.723-8.723-34.889-39.251-4.361-4.361 2.181-2.178z",
    fill: "#B9B9B9"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M274.6 181.583c.578.578.904 1.363.904 2.18v3.084l-34.889-39.251 33.985 33.987z",
    fill: "#966446"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#A0A0A0",
    d: "M236.253 143.236l2.18-2.18 2.181 2.18-2.181 2.182-2.18 2.18-23.987-28.347z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M239.315 204.537l2.167 1.976c7.906-8.668 21.741-23.837 43.673-43.529.001.001-18.169 11.216-45.84 41.553z",
    fill: "#B9B9B9"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M233.184 213.434a1.908 1.908 0 01-.124-2.694l4.644-5.092a1.908 1.908 0 012.818 2.57l-4.644 5.092a1.906 1.906 0 01-2.694.124z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M237.556 202.933l-1.258.561c-1.119.557-4.063 2.222-4.57 4.595-.242 1.124.099 2.219.972 3.255.083-.214.196-.422.361-.601l.585-.641c-.395-.574-.605-1.138-.486-1.704.318-1.484 2.298-2.809 3.542-3.466l5.564 5.075 1.384-1.517-6.094-5.557z",
    fill: "#FFC855"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M275.093 206.936l-2.167 1.976c-7.906-8.668-21.741-23.837-43.673-43.529-.001.001 18.169 11.216 45.84 41.553z",
    fill: "#B9B9B9"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M281.224 215.835c.778-.71.833-1.916.124-2.694l-4.644-5.092a1.908 1.908 0 00-2.818 2.57l4.644 5.092c.71.778 1.916.833 2.694.124z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M276.852 205.332l1.258.561c1.119.557 4.063 2.222 4.57 4.595.242 1.124-.099 2.219-.972 3.255a1.882 1.882 0 00-.361-.601l-.585-.641c.395-.574.605-1.138.486-1.704-.318-1.484-2.298-2.809-3.542-3.466l-5.564 5.075-1.384-1.517 6.094-5.557z",
    fill: "#FFC855"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.161 126.686a3.63 3.63 0 00.269-1.362 3.645 3.645 0 00-7.29 0 3.63 3.63 0 001.482 2.919c-1.318 10.585 9.119 11.394 13.096 12.874 6.034 2.244 13.603 6.787 13.127 19.484-.462 12.342-8.267 24.251-8.267 24.251l6.479-8.808c-2.369 10.02-7.901 22.784-21.057 37.963 0 0 8.995-8.799 16.501-20.146-5.523 12.993-11.642 25.005-11.642 25.005s10.833-14.072 19.59-38.419c10.616-29.517-11.716-47.251-22.288-53.761z",
    fill: "#69B469"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F4E08F",
    d: "M238.996 170.273h9.719v4.86h-9.719z"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(234 138)",
    fill: "#ECD077"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 4.996,
    cy: 37.128,
    r: 4.86
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 4.996,
    cy: 5.548,
    r: 4.86
  })), /*#__PURE__*/react.createElement("path", {
    d: "M268.148 148.406a4.86 4.86 0 000-9.72h-29.156a4.86 4.86 0 11-4.86 4.86c0 8.157 6.826 18.019 9.027 26.727 0 0 .692 2.176.692 4.86a4.86 4.86 0 01-4.86 4.86h29.156a4.86 4.86 0 004.86-4.86c0-8.157-6.826-18.019-9.027-26.727h4.168z",
    fill: "#FCF0A8"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M243.852 143.548a4.86 4.86 0 01-4.86 4.86h29.156a4.86 4.86 0 004.86-4.86h-29.156zm0 31.585a4.86 4.86 0 01-4.86 4.86h29.156a4.86 4.86 0 004.86-4.86h-29.156z",
    fill: "#F4E08F"
  })));
}

function SvgGu(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.999 79.724c-33.549 17.651-56.175 59.69-56.175 88.276s22.626 70.626 56.175 88.276c33.549-17.651 56.175-59.69 56.175-88.276s-22.625-70.625-56.175-88.276z",
    fill: "#3CC8FF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M263.244 137.773c5.42-2.857 14.674-6.001 25.189-2.142 0 0-10.127-11.281-24.181-2.09 3.781-4.585 9.459-10.261 15.608-11.842 0 0-12.237-4.57-19.641 11.749 1.434-8.231 1.173-21.191-12.094-28.714 0 0 7.418 15.919 8.147 29.129-.431-2.344-1.294-4.794-3.572-7.17-7.015-7.319-13.114-7.929-13.114-7.929s9.726 10.778 14.505 20.975c-2.753-3.294-7.605-7.512-15.42-7.252-18.3.61-22.264 11.589-22.264 11.589 7.586-3.194 19.625-4.785 28.958-3.996-12.049 2.123-16.33 17.134-16.33 17.134 9.675-12.064 20.235-14.024 24.451-14.311-7.702 6.371-7.233 18.104-7.233 18.104 1.79-6.605 8.724-14.133 12.103-17.507 9.098 9.843 10.175 20.907 10.175 20.907s1.991-3.329 1.073-10.104c-.868-6.396-4.882-10.595-7.945-13.062 16.064 2.214 26.546 13.866 26.546 13.866-5.255-15.332-18.408-17.329-24.961-17.334z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M494.344 17.931v300.137H17.655V17.931h476.689zM503.172.276H8.828A8.829 8.829 0 000 9.104v317.792a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828V9.104a8.83 8.83 0 00-8.829-8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF965A",
    d: "M238.068 189.334l8.093-13.977 66.483-1.471-4.414 18.39z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M202.249 185.655c6.664 26.153 26.631 56.353 53.75 70.621 27.119-14.268 47.086-44.468 53.75-70.621h-107.5z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M211.862 212.138s19.255-.953 30.823 3.797c2.89 1.186 3.264 5.09.654 6.807-5.635 3.708-13.822 10.09-13.822 15.879l-17.655-26.483zm33.839 35.31c-.736-7.357 5.773-12.707 14.712-16.184 11.586-4.505 5.241-11.678-.552-16.367-6.909-5.592 2.023-7.172 39.54-7.908l-18.391 28.69-25.011 20.598-10.298-8.829z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.999 261.268l-2.056-1.086c-35.012-18.414-58.535-62.534-58.535-92.181 0-29.646 23.521-73.768 58.535-92.181l2.056-1.086 2.056 1.086c35.013 18.414 58.534 62.534 58.534 92.181 0 29.646-23.521 73.768-58.534 92.181l-2.056 1.086zm0-176.517c-31.056 17.535-51.763 56.759-51.763 83.249 0 26.49 20.707 65.716 51.763 83.249 31.056-17.535 51.763-56.759 51.763-83.249 0-26.49-20.706-65.715-51.763-83.249z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(252 138)",
    fill: "#A54B37"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M22.758 80.389c-.405 0-.81-.108-1.173-.337C9.589 72.513 2.711 60.034 2.711 45.815V5.173a2.207 2.207 0 114.414 0v40.642c0 12.668 6.125 23.785 16.805 30.496a2.208 2.208 0 01-1.172 4.078z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 4.915,
    cy: 5.305,
    r: 4.828
  }))));
}

function SvgGw(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M167.724.275v335.449H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h158.896z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M82.197 123.959l-9.731 29.18-30.759.238c-1.686.013-2.386 2.165-1.028 3.167l24.744 18.272-9.278 29.326c-.509 1.608 1.322 2.937 2.694 1.958l25.024-17.886 25.024 17.887c1.372.981 3.202-.35 2.694-1.957l-9.278-29.326 24.744-18.272c1.356-1.002.658-3.154-1.028-3.167l-30.759-.238-9.731-29.18c-.536-1.601-2.798-1.601-3.332-.002z",
    fill: "#464655"
  })));
}

function SvgHk(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M224.477 180.922c-11.128.115-23.624-3.449-34.573-15.518-.755-.832-.649-2.143.209-2.87l.003-.003c.832-.705 2.062-.596 2.797.211 16.69 18.327 37.376 15.118 49.735 10.69-4.566.203-10.303-.14-13.993-2.565-15.415-10.133-8.433-20.913-18.671-33.944-10.173-12.948-19.327-12.631-33.741-10.446-14.27 2.162-18.816-8.305-20.231-14.114-.253-1.041-1.705-1.106-2.077-.103-17.786 48.054 35.694 107.514 90.601 64.761-5.418 1.995-12.396 3.823-20.059 3.901zm-40.067-16.307c-.312.858-1.537.824-1.802-.05l-2.048-6.749-7.049-.247c-.913-.032-1.259-1.207-.51-1.729l5.786-4.033-1.943-6.781c-.252-.877.759-1.57 1.487-1.02l5.624 4.256 5.848-3.944c.757-.511 1.729.236 1.429 1.099l-2.31 6.664 5.558 4.343c.719.563.309 1.717-.604 1.699l-7.052-.138-2.414 6.63zm79.459-15.62c8.836-6.765 20.972-11.407 36.972-8.317 1.103.213 1.805 1.325 1.555 2.421l-.001.004c-.243 1.064-1.293 1.714-2.365 1.508-24.346-4.657-38.976 10.317-46.209 21.272 3.532-2.901 8.329-6.067 12.736-6.338 18.412-1.137 19.289 11.678 35.298 15.965 15.905 4.259 23.04-1.483 33.266-11.876 10.122-10.289 20.038-4.639 24.653-.839.826.681 2.027-.137 1.723-1.163-14.586-49.12-93.042-64.627-111.339 2.513 3.137-4.843 7.626-10.491 13.711-15.15zm41.842-10.979c-.265-.874.736-1.582 1.472-1.042l5.686 4.172 5.789-4.03c.749-.522 1.731.211 1.446 1.078l-2.211 6.698 5.621 4.26c.728.552.334 1.713-.578 1.708l-7.053-.033-2.314 6.663c-.3.863-1.525.847-1.803-.022l-2.148-6.718-7.052-.142c-.913-.019-1.277-1.188-.535-1.721l5.726-4.119-2.046-6.752z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M234.399 153.626c-4.34-10.248-5.8-23.159 1.195-37.877.482-1.015 1.735-1.416 2.733-.899l.004.002c.969.501 1.335 1.681.87 2.667-10.599 22.408.241 40.318 9.038 50.061-1.926-4.146-3.79-9.581-2.952-13.917 3.505-18.111 16.131-15.756 24.286-30.184 8.103-14.335 4.327-22.679-3.178-35.178-7.43-12.374.521-20.561 5.355-24.079.865-.63.374-1.997-.695-1.959-51.207 1.837-85.845 73.92-25.416 108.428-3.905-4.25-8.251-10.008-11.24-17.065zm-.165-43.258c-.913.038-1.347-1.108-.64-1.685l5.462-4.462-2.454-6.613c-.318-.856.638-1.624 1.405-1.13l5.932 3.816 5.53-4.377c.716-.567 1.741.104 1.508.988l-1.796 6.82 5.871 3.907c.76.506.439 1.688-.472 1.74l-7.042.399-1.901 6.792c-.246.879-1.47.939-1.801.088l-2.556-6.573-7.046.29zm40.063 66.511c9.198 6.264 17.418 16.328 19.508 32.489.145 1.115-.692 2.13-1.811 2.237h-.006c-1.086.104-2.033-.69-2.175-1.771-3.225-24.577-22.037-33.763-34.71-37.19 3.863 2.442 8.375 6.002 10.018 10.101 6.862 17.123-5.028 21.982-4.071 38.527.951 16.438 8.646 21.408 21.724 27.852 12.947 6.379 10.698 17.566 8.538 23.143-.386.999.767 1.881 1.645 1.27 42.052-29.276 32.134-108.631-37.355-104.915 5.591 1.457 12.362 3.944 18.695 8.257zm23.567 36.276c.747-.526 1.732.202 1.451 1.07l-2.175 6.709 5.644 4.231c.73.547.344 1.71-.569 1.711l-7.053.004-2.279 6.675c-.295.864-1.521.855-1.803-.013l-2.184-6.707-7.052-.105c-.914-.013-1.283-1.182-.545-1.719l5.704-4.15-2.08-6.74c-.269-.873.727-1.586 1.466-1.049l5.709 4.142 5.766-4.059z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M251.292 196.822c-3.168 10.668-10.254 21.56-25.013 28.469-1.018.477-2.239-.011-2.681-1.044l-.002-.004c-.429-1.003.039-2.146 1.025-2.611 22.43-10.551 25.457-31.265 24.865-44.38-1.151 4.424-3.169 9.804-6.573 12.617-14.223 11.747-22.47 1.899-37.939 7.846-15.37 5.908-17.763 14.75-19.922 29.169-2.136 14.274-13.479 15.535-19.447 15.176-1.068-.064-1.559 1.303-.71 1.954 40.684 31.15 113.258-2.444 88.574-67.507.314 5.762.005 12.968-2.177 20.315zm-27.386 33.486c.728.552.335 1.711-.578 1.708l-7.052-.031-2.312 6.664c-.299.863-1.525.847-1.803-.022l-2.151-6.718-7.052-.14c-.913-.018-1.278-1.188-.536-1.721l5.724-4.121-2.046-6.75c-.265-.874.735-1.582 1.471-1.042l5.688 4.17 5.788-4.032c.749-.522 1.731.211 1.446 1.078l-2.208 6.698 5.621 4.259z"
  }))));
}

function SvgHn(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989zm-8.829 223.632H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M257.277 153.578l3.159 9.473 9.985.077c1.293.01 1.828 1.66.789 2.428l-8.033 5.932 3.012 9.521c.389 1.233-1.013 2.252-2.066 1.501L256 176.703l-8.124 5.806c-1.052.751-2.455-.268-2.066-1.501l3.012-9.521-8.033-5.932c-1.039-.768-.504-2.418.789-2.428l9.985-.077 3.159-9.473c.411-1.225 2.145-1.225 2.555.001zm-90.173 25.423l3.159 9.473 9.985.077c1.293.01 1.828 1.66.789 2.428l-8.033 5.932 3.012 9.521c.39 1.233-1.013 2.252-2.066 1.501l-8.124-5.806-8.124 5.806c-1.052.751-2.455-.268-2.066-1.501l3.012-9.521-8.033-5.932c-1.039-.768-.504-2.418.789-2.428l9.985-.077 3.159-9.473c.412-1.226 2.147-1.226 2.556 0zm0-50.847l3.159 9.473 9.985.077c1.293.01 1.828 1.66.789 2.428l-8.033 5.932 3.012 9.521c.39 1.233-1.013 2.252-2.066 1.501l-8.124-5.806-8.124 5.806c-1.052.751-2.455-.268-2.066-1.501l3.012-9.521-8.033-5.932c-1.039-.768-.504-2.418.789-2.428l9.985-.077 3.159-9.473c.412-1.225 2.147-1.225 2.556 0zm180.345 50.847l3.159 9.473 9.985.077c1.293.01 1.828 1.66.789 2.428l-8.033 5.932 3.012 9.521c.39 1.233-1.013 2.252-2.066 1.501l-8.124-5.806-8.124 5.806c-1.052.751-2.455-.268-2.066-1.501l3.012-9.521-8.033-5.932c-1.041-.768-.504-2.418.789-2.428l9.985-.077 3.159-9.473c.412-1.226 2.147-1.226 2.556 0zm0-50.847l3.159 9.473 9.985.077c1.293.01 1.828 1.66.789 2.428l-8.033 5.932 3.012 9.521c.39 1.233-1.013 2.252-2.066 1.501l-8.124-5.806-8.124 5.806c-1.052.751-2.455-.268-2.066-1.501l3.012-9.521-8.033-5.932c-1.041-.768-.504-2.418.789-2.428l9.985-.077 3.159-9.473c.412-1.225 2.147-1.225 2.556 0z",
    fill: "#4173CD"
  })));
}

function SvgHr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.104A8.829 8.829 0 018.828.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h511.999V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M194.206 115.035h24.717v28.248h-24.717zm49.435 0h24.717v28.248h-24.717zm-24.717 28.248h24.717v28.248h-24.717zm74.151-28.248h24.717v28.248h-24.717zm-24.717 28.248h24.717v28.248h-24.717z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M218.924 115.035h24.717v28.248h-24.717zm49.434 0h24.717v28.248h-24.717zm-74.152 28.248h24.717v28.248h-24.717zm49.435 0h24.717v28.248h-24.717zm49.434 0h24.717v28.248h-24.717z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M243.641 171.531h24.717v28.248h-24.717zm-24.717 28.248h24.717v28.248h-24.717zm49.434 0h24.717v28.248h-24.717z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M218.924 171.531h24.717v28.248h-24.717zm49.434 0h24.717v28.248h-24.717zm-24.717 28.248h24.717v28.248h-24.717z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M317.792 115.035v79.448c0 34.127-27.666 61.793-61.793 61.793-34.127 0-61.793-27.666-61.793-61.793v-79.448h123.586zm4.414-4.414H189.792v83.862c0 36.506 29.7 66.207 66.207 66.207 36.507 0 66.207-29.7 66.207-66.207v-83.862z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M218.924 199.779v-28.248h-24.717v22.952c0 1.789.118 3.546.267 5.297h24.45v-.001z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M317.525 199.779h-24.45v28.248h14.774a61.348 61.348 0 009.676-28.248zM204.15 228.027h14.774v-28.248h-24.45a61.36 61.36 0 009.676 28.248z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M293.075 199.779h24.45c.149-1.749.267-3.508.267-5.297V171.53h-24.717v28.249zm-74.151 44.054v-15.806H204.15c3.959 6.107 8.973 11.441 14.774 15.806zm88.925-15.806h-14.774v15.806c5.802-4.365 10.816-9.699 14.774-15.806z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M218.924 243.833c7.194 5.415 15.567 9.345 24.717 11.202v-27.008h-24.717v15.806zm49.434 11.202c9.15-1.857 17.523-5.788 24.717-11.202v-15.806h-24.717v27.008z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M268.358 228.027h-24.717v27.008A62.043 62.043 0 00256 256.276c4.233 0 8.365-.43 12.359-1.241v-27.008h-.001z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M211.27 68.292a180.927 180.927 0 00-16.489-1.779 189.969 189.969 0 00-12.398 11.15l11.823 28.545a161.456 161.456 0 0124.247-7.866l-7.183-30.05zm59.733-4.687a184.939 184.939 0 00-15.002-6.765 185.474 185.474 0 00-15.002 6.765l2.41 30.803a161.163 161.163 0 0125.186 0c.801-10.268 1.605-20.535 2.408-30.803zm58.613 14.058a190.81 190.81 0 00-12.398-11.15c-5.609.346-11.111.947-16.489 1.779l-7.183 30.049a161.57 161.57 0 0124.247 7.866l11.823-28.544z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M240.997 63.605a183.1 183.1 0 00-15.894-4.346 187.354 187.354 0 00-13.832 9.033c2.394 10.017 4.789 20.033 7.185 30.049a161.442 161.442 0 0124.952-3.933l-2.411-30.803zm59.732 4.687a187.242 187.242 0 00-13.832-9.033 183.718 183.718 0 00-15.894 4.346l-2.41 30.803a161.322 161.322 0 0124.952 3.933l7.184-30.049z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M241.96 75.926a179.702 179.702 0 00-27.817 4.385l-1.437-6.01a186.473 186.473 0 0128.771-4.535l.483 6.16zm.965 12.321a167.663 167.663 0 00-25.907 4.084l-1.437-6.009a173.602 173.602 0 0126.862-4.234l.482 6.159z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M285.326 90.321a167.55 167.55 0 00-6.482-1.022c-3.562-.492-6.215-3.516-5.906-6.915.308-3.398 3.713-5.863 7.59-5.327 2.325.32 4.645.685 6.959 1.097 3.859.682 6.357 4.082 5.604 7.406-.751 3.331-4.217 5.386-7.765 4.761z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M320.157 100.498a167.81 167.81 0 00-25.175-8.168l1.437-6.009a173.739 173.739 0 0126.103 8.468l-2.365 5.709z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M317.952 81.96c-.873 2.407-3.817 3.552-6.599 2.647-2.781-.906-4.483-3.55-3.779-6.012.704-2.462 3.686-3.765 6.636-2.806 2.953.957 4.615 3.764 3.742 6.171zm-113.527-3.364c.703 2.464-1 5.109-3.779 6.012-2.781.9-5.725-.245-6.599-2.647-.874-2.408.79-5.214 3.742-6.17 2.949-.957 5.934.344 6.636 2.805zm50.165-4.047c.006 2.047-1.834 3.714-4.114 3.784-2.279.073-4.222-1.481-4.342-3.52-.119-2.04 1.719-3.806 4.111-3.883 2.392-.075 4.335 1.572 4.345 3.619zm11.275.264c-.121 2.044-2.065 3.593-4.342 3.52-2.279-.07-4.119-1.737-4.114-3.784.009-2.045 1.953-3.697 4.344-3.619 2.393.072 4.23 1.842 4.112 3.883zm-5.858 9.267c-.057 2.047-1.85 3.657-4.008 3.657-2.156-.001-3.949-1.609-4.008-3.657-.056-2.041 1.737-3.755 4.008-3.749 2.271-.005 4.064 1.707 4.008 3.749z",
    fill: "#FFE15A"
  })));
}

function SvgHt(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168z",
    fill: "#FF4B55"
  })));
}

function SvgHu(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  })));
}

function SvgId(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#C8414B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168z",
    fill: "#F5F5F5"
  })));
}

function SvgIe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h161.839v335.449z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.828 8.828 0 01-8.828 8.827z",
    fill: "#FF9B46"
  })));
}

function SvgIl(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 62.069h512v211.862H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M301.869 168l22.933-39.721h-45.865L256 88.552l-22.936 39.727h-45.865L210.132 168l-22.933 39.721h45.865L256 247.448l22.936-39.727h45.865L301.869 168zm.433-26.73l-7.933 13.74-7.933-13.74h15.866zM286.869 168l-15.433 26.73h-30.873L225.131 168l15.433-26.73h30.873L286.869 168zM256 114.534l7.936 13.746h-15.872L256 114.534zm-46.302 26.736h15.865l-7.933 13.74-7.932-13.74zm0 53.46l7.933-13.74 7.933 13.74h-15.866zM256 221.466l-7.936-13.746h15.872L256 221.466zm38.369-40.476l7.933 13.74h-15.865l7.932-13.74z",
    fill: "#41479B"
  })));
}

function SvgIm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M257.266 168.381l-2.445 1.412c-4.236-6.1-4.004-21.02-4.004-21.19.044-.442-.221-.841-.619-1.017l-18.327-8.021.105-1.881c9.557 1.102 20.606 5.548 20.759 5.624.376.237.851.178 1.187-.099l15.208-12.68 3.273 2.925c-4.742 5.824-16.279 13.869-16.428 13.952-.408.177-.628.601-.589 1.035l1.88 19.94zm66.499-90.341c.373.191.822.154 1.16-.096l3.974-2.942-1.262 3.668c-.141.417-.019.883.309 1.185l1.871 1.672c-.556.939-.776 2.094-.798 3.299l-2.773 1.408c-.235.12-.42.32-.522.564l-2.068 5.007-1.133-4.152a1.096 1.096 0 00-1.216-.806l-4.99.682 4.051-4.588a1.11 1.11 0 00.264-.895l-.903-6.059 4.036 2.053zm-45.203 163.504a1.104 1.104 0 00-.48 1.06l.643 4.901-2.594-2.884a1.123 1.123 0 00-1.186-.305l-2.37.824c-.551-.941-1.454-1.695-2.497-2.298l.115-3.107a1.12 1.12 0 00-.239-.73l-3.374-4.238 4.18 1.024a1.096 1.096 0 001.294-.672l1.825-4.694 2.046 5.768c.11.309.35.551.654.665l5.736 2.152-3.753 2.534zM157.188 126.599a1.106 1.106 0 00-.735-.903l-4.673-1.614 3.74-1.032c.424-.119.739-.483.802-.925l.321-2.488c1.088-.072 2.166-.544 3.172-1.207l2.729 1.492c.232.126.501.166.76.111l5.3-1.124-2.784 3.282a1.094 1.094 0 00.023 1.458l3.384 3.731-6.074-.747a1.108 1.108 0 00-.888.288l-4.488 4.17-.589-4.492z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M254.399 276.642c-2.699 5.442-8.538 9.954-9.999 10.22-.266.044-.487-.044-.707-.266-.664-.753-.973-2.787-.088-5.486.088-.266.178-.619.31-1.017l10.484-3.451zm1.946-5.619a61.241 61.241 0 00-.885 2.92l-10.795 3.584c.31-.973.619-2.035.929-3.186l10.751-3.318z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.734 264.962a100.892 100.892 0 00-1.46 3.451l-10.973 3.362c.31-1.194.664-2.433.973-3.672l11.46-3.141z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M260.903 260.583c-.31.575-.619 1.151-.929 1.77l-12.078 3.274c.531-2.079.973-4.115 1.327-5.884l11.68.84zm3.406-4.602c-.707.664-1.372 1.504-2.035 2.477l-12.697-.929c.177-1.151.309-2.168.309-2.92 0-.575-.044-1.106-.088-1.682.487.044 1.017.044 1.46.044 3.186 0 5.442-.575 7.079-1.416 1.813 2.656 4.158 3.851 5.972 4.426zm2.567-1.814c-.797-.088-4.335-.442-6.726-3.893 1.195-1.017 1.77-2.123 2.035-2.876 1.327-3.716-7.919-9.512-13.582-12.609-2.655-1.46-4.734-4.335-6.592-7.654.221.044.398.044.619.044 2.831 0 5.088-1.327 6.282-2.345 1.062 1.77 2.035 3.406 2.92 4.822 4.026 6.814 5.885 9.91 10.176 12.919.132.088.309.177.487.177 2.079.266 8.096 1.592 8.45 4.247.488 3.628-.84 5.929-4.069 7.168z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M260.106 246.646c-.487 1.416-2.521 4.601-10.574 4.071-.708-4.601-2.743-7.875-5.973-9.379-4.203-1.991-19.91-13.228-27.076-19.91 1.416-4.513 5.132-8.184 10.397-10.132.753-.31 1.416-.575 1.991-.885 1.416 1.151 2.699 2.433 3.761 3.893 1.638 2.301 3.053 5.22 4.557 8.318 2.787 5.663 5.663 11.548 10.353 14.113 8.671 4.779 12.962 8.894 12.564 9.911z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.719 222.932c-.841.841-3.628 2.743-6.99 1.77-.531-1.017-1.017-2.035-1.548-3.052-1.548-3.186-3.008-6.194-4.778-8.628-1.017-1.46-2.301-2.743-3.672-3.893 1.991-1.726 2.301-3.584 2.389-5.176 3.495 3.008 6.77 6.769 9.778 11.414 1.9 2.875 3.449 5.352 4.821 7.565zm-16.68-20.617a9.408 9.408 0 00-.088 1.151c-.088 1.504-.221 2.965-1.991 4.291-3.716-2.655-8.008-4.469-11.68-5.663 1.682-1.726 2.787-3.451 3.318-5.132h.044c3.627 1.016 7.123 2.831 10.397 5.353zm-4.247 6.592c-.221.088-.398.221-.664.309-5.53 2.035-9.601 5.796-11.414 10.442-2.168-2.168-3.716-4.115-4.956-5.663-1.372-1.77-2.521-3.142-3.938-4.115 3.981-2.035 7.167-4.071 9.601-6.061h.088c3.452 1.062 7.655 2.654 11.283 5.088zm-13.45-6.283c-2.301 1.814-5.53 3.849-10.088 6.061a63.385 63.385 0 00-3.008-.663c-2.168-.398-3.584-.708-4.69-1.947-.664-.708-1.947-2.699-3.186-5.22.178.088.354.177.531.221 1.283.31 3.096-.266 5.353-1.062 2.787-.929 6.194-2.08 9.291-1.682 2.787.354 3.54 1.46 4.424 2.699.4.531.798 1.106 1.373 1.593z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M218.606 195.988c-.354 1.372-1.327 3.097-3.54 5.176-.531-.354-.885-.841-1.283-1.416-.973-1.372-2.212-3.097-5.929-3.584-3.584-.487-7.3.753-10.308 1.77-1.682.575-3.452 1.195-4.159 1.017-.753-.178-1.726-1.372-1.77-2.567-.044-1.372 1.195-1.991 2.212-2.301 2.301-.707 5.088-.177 7.831.31 2.787.531 5.442 1.017 7.565.177 1.46-.575 3.142-2.389 5.176-5 1.416.309 2.61.797 3.318 1.814 1.02 1.462 1.286 3.012.887 4.604z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M211.838 189.263c-1.372 1.682-2.567 2.92-3.45 3.274-1.504.619-3.849.177-6.327-.31-2.831-.531-6.061-1.106-8.849-.266-1.682.487-2.61 1.327-3.142 2.123-.487-2.433-.487-4.778.619-6.636 1.106-1.947 2.566-3.584 4.071-5.22 1.991.266 3.45.664 8.494 5.088 1.726 1.504 4.513 1.682 7.212 1.814.442.044.929.089 1.372.133zm41.101-18.273c-4.956 3.274-27.032 17.785-31.634 19.688-.221.088-.398.266-.531.442-.132.221-.221.398-.354.619-.221-.575-.531-1.106-.885-1.636-.885-1.283-2.212-1.991-3.672-2.433a85.839 85.839 0 002.035-2.699c3.186-4.38 6.858-9.291 11.061-13.671 7.212-7.521 16.856-12.477 20.086-13.981.488 4.69 1.549 10.221 3.894 13.671zm-4.115-16.015c-2.301 1.017-13.228 6.194-21.458 14.777-4.335 4.513-8.185 9.689-11.238 13.892-.929 1.239-1.814 2.433-2.655 3.54-.973-.088-1.946-.177-2.876-.221-2.433-.177-4.734-.31-5.885-1.327-4.247-3.716-6.239-4.822-8.141-5.309.178-.177.31-.354.487-.531 2.787-2.831 5.707-5.795 8.008-9.91 3.981-7.123 17.299-22.653 25.971-28.271l17.565 7.699c0 1.06.046 3.14.222 5.661zM136.587 89.297c-3.662-4.846-5.089-12.087-4.674-13.512.079-.257.257-.416.554-.514.97-.257 2.929.375 4.948 2.372.198.198.474.435.771.732l-1.599 10.922zm4.157 4.252a61.102 61.102 0 00-2.217-2.097l1.619-11.258a75.207 75.207 0 002.434 2.254l-1.836 11.101z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M145.098 98.396a101.34 101.34 0 00-2.434-2.848l1.896-11.318c.93.811 1.88 1.682 2.85 2.511l-2.312 11.655z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M148.047 102.292a69.434 69.434 0 00-1.167-1.622l2.468-12.268a116.53 116.53 0 004.671 3.817l-5.972 10.073zm2.595 5.103c-.277-.93-.733-1.899-1.308-2.927l6.505-10.944c.95.672 1.801 1.246 2.474 1.582.514.257 1.01.455 1.544.672-.257.416-.494.89-.692 1.287-1.423 2.85-1.918 5.126-1.897 6.966-3.185.435-5.301 1.999-6.626 3.364zm.476 3.107c.435-.673 2.333-3.681 6.488-4.276.376 1.524 1.109 2.532 1.663 3.106 2.731 2.848 12.049-2.834 17.35-6.516 2.493-1.722 5.994-2.297 9.793-2.477-.138.178-.217.337-.317.534-1.266 2.532-1.086 5.144-.71 6.668-2.058.159-3.957.298-5.619.457-7.894.557-11.496.835-16.105 3.33-.139.079-.297.198-.375.356-1.166 1.741-5.043 6.531-7.576 5.662-3.462-1.186-4.927-3.401-4.592-6.844z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M160.872 107.807c-1.049-1.068-2.989-4.312 1.084-11.278 4.433 1.422 8.27 1.065 11.06-1.152 3.659-2.87 20.732-11.9 29.91-15.326 3.404 3.283 5.028 8.249 4.417 13.828-.058.811-.118 1.524-.098 2.176-1.662.753-3.383 1.327-5.164 1.624-2.79.436-6.035.398-9.478.36-6.312-.038-12.861-.094-17.252 2.955-8.149 5.624-13.748 7.624-14.479 6.813z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M187.622 107.322c-.376-1.128-.833-4.471 1.54-7.044 1.148-.021 2.275-.001 3.423-.021 3.542.039 6.886.076 9.854-.419 1.761-.258 3.481-.832 5.124-1.545.654 2.552 2.178 3.659 3.563 4.45-4.254 1.782-9.08 3.031-14.581 3.646-3.423.417-6.331.695-8.923.933zm25.897-5.708a9.423 9.423 0 00-.99-.594c-1.306-.751-2.553-1.523-2.95-3.699 4.035-2.138 7.576-5.167 10.286-7.918.792 2.275 1.842 4.035 3.108 5.262l-.02.04c-2.529 2.791-5.715 5.107-9.434 6.909zm-3.998-6.745c.02-.237-.02-.455.02-.732.651-5.857-.895-11.179-4.241-14.878 2.909-.971 5.342-1.486 7.281-1.902 2.196-.436 3.937-.852 5.44-1.684.042 4.471.438 8.231 1.132 11.297l-.04.079c-2.492 2.614-5.794 5.662-9.592 7.82zm11.63-9.225c-.595-2.869-.972-6.667-.915-11.733a65.639 65.639 0 001.938-2.394c1.325-1.761 2.234-2.89 3.837-3.326.93-.277 3.284-.535 6.094-.516-.158.119-.317.237-.435.376-.851 1.01-1.146 2.889-1.442 5.263-.414 2.909-.908 6.471-2.648 9.063-1.562 2.335-2.888 2.514-4.392 2.752-.652.119-1.344.218-2.037.515z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M224.735 93.32c-1.069-.929-2.177-2.571-3.049-5.48.554-.317 1.148-.416 1.839-.515 1.662-.258 3.759-.595 5.855-3.702 2.037-2.988 2.59-6.867 3.023-10.013.237-1.761.473-3.622.948-4.175.494-.594 1.998-.931 3.086-.437 1.247.574 1.247 1.959 1.069 3.007-.395 2.375-2.115 4.631-3.777 6.867-1.72 2.257-3.342 4.414-3.539 6.689-.138 1.564.734 3.878 2.159 6.865-.909 1.128-1.879 1.98-3.105 2.158-1.758.258-3.262-.196-4.509-1.264z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M233.777 90.27c-.892-1.978-1.465-3.601-1.387-4.551.118-1.623 1.562-3.522 3.104-5.522 1.74-2.295 3.698-4.928 4.192-7.797.316-1.721-.021-2.929-.497-3.759 2.394.652 4.492 1.7 5.66 3.52 1.247 1.859 2.059 3.897 2.851 5.974-1.128 1.663-2.136 2.791-8.348 5.325-2.116.872-3.521 3.286-4.845 5.641-.236.377-.493.793-.73 1.169zm-2.022 44.934c-.714-5.896-3.831-32.131-3.477-37.097.02-.237-.06-.474-.159-.673-.139-.217-.257-.375-.396-.594.614.06 1.227.02 1.86-.06 1.544-.218 2.77-1.089 3.818-2.198.456.97.95 1.959 1.505 3.027 2.495 4.807 5.247 10.286 7.287 16.004 3.506 9.813 3.628 20.655 3.531 24.216-4.333-.951-9.352-2.023-13.969-2.625z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.922 138.68c.118-2.513.371-14.602-3.63-25.8-2.1-5.896-5.01-11.652-7.406-16.262-.693-1.385-1.366-2.71-1.98-3.957a68.777 68.777 0 001.483-2.474c1.246-2.098 2.392-4.097 3.817-4.671 5.223-2.138 7.102-3.426 8.387-4.91.079.237.179.435.257.673 1.288 3.758 2.634 7.695 5.287 11.593 4.594 6.745 12.534 25.598 13.686 35.866l-14.735 12.273a88.007 88.007 0 00-5.166-2.331zM366.18 82.133c6.068-.281 12.847 2.635 13.789 3.783.168.211.198.447.111.748-.335.946-1.964 2.204-4.754 2.74-.275.052-.628.146-1.039.223l-8.107-7.494zm-5.857 1.025c1.1-.205 2.179-.45 2.983-.643l8.373 7.7a73.92 73.92 0 00-3.236.734l-8.12-7.791z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M353.864 84.011c1.302-.116 2.543-.248 3.725-.398l8.265 7.961c-1.195.309-2.45.6-3.683.931l-8.307-8.494z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M348.982 84.242c.653-.009 1.306-.017 1.998-.046l8.724 8.971c-2.076.545-4.07 1.146-5.789 1.695l-4.933-10.62zm-5.676-.746c.924.297 1.981.469 3.154.577l5.351 11.553c-1.091.404-2.046.781-2.703 1.146-.503.279-.946.575-1.427.893a16.684 16.684 0 00-.67-1.298c-1.546-2.785-3.144-4.479-4.673-5.502 1.439-2.874 1.345-5.504.968-7.369zm-2.832-1.363c.309.739 1.717 4.006-.14 7.769-1.47-.551-2.716-.516-3.502-.384-3.893.643-4.473 11.541-4.433 17.995.012 3.029-1.493 6.243-3.492 9.479a2.83 2.83 0 00-.262-.563c-1.374-2.475-3.63-3.805-5.099-4.355 1.032-1.788 1.991-3.433 2.799-4.894 4.003-6.827 5.81-9.954 6.357-15.167.013-.159.004-.356-.082-.511-.777-1.946-2.537-7.852-.387-9.45 2.935-2.187 5.591-2.141 8.241.081z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M337.183 91.701c1.474-.262 5.247-.029 8.691 7.27-3.679 2.852-5.555 6.22-5.302 9.774.299 4.641-1.903 23.828-4.267 33.336-4.632.952-9.647-.515-13.905-4.173-.636-.508-1.19-.959-1.74-1.311.319-1.796.818-3.541 1.579-5.177 1.217-2.548 3.083-5.203 5.06-8.021 3.598-5.185 7.348-10.556 7.316-15.902-.03-9.901 1.485-15.65 2.568-15.796z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M322.462 114.041c1.143.327 4.159 1.841 4.94 5.252-.632.958-1.286 1.877-1.918 2.836-2.034 2.9-3.956 5.636-5.224 8.365-.782 1.598-1.282 3.342-1.622 5.1-2.475-.904-4.249-.273-5.685.424.935-4.516 2.633-9.204 5.235-14.089a289.507 289.507 0 014.274-7.888zm-9.932 24.59a9.443 9.443 0 001.048-.481c1.358-.652 2.699-1.246 4.718-.342-.518 4.537-.021 9.171.717 12.961-2.325-.632-4.37-.762-6.098-.41l-.021-.039c-.87-3.666-.98-7.602-.364-11.689zm7.825.514c.184.15.386.241.593.43 4.463 3.848 9.727 5.581 14.669 4.913-.843 2.947-1.794 5.247-2.547 7.081-.882 2.058-1.523 3.73-1.686 5.44-3.712-2.494-7.037-4.291-9.959-5.452l-.043-.077c-.746-3.534-1.394-7.982-1.027-12.335zm1.034 14.809c2.702 1.131 6.049 2.967 10.195 5.878.284 1.057.605 2.093.879 2.953.704 2.089 1.12 3.477.574 5.045-.297.924-1.415 3.011-3.019 5.319a2.83 2.83 0 00-.064-.572c-.352-1.272-1.735-2.579-3.527-4.165-2.165-1.986-4.824-4.406-5.98-7.308-1.043-2.609-.441-3.804.213-5.178.274-.606.582-1.234.729-1.972z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M313.032 152.572c1.371-.356 3.352-.342 6.244.583-.052.636-.306 1.182-.616 1.809-.727 1.516-1.634 3.437-.256 6.923 1.313 3.37 4.201 6.017 6.55 8.154 1.319 1.191 2.719 2.438 2.909 3.143.211.744-.362 2.174-1.385 2.793-1.177.704-2.321-.078-3.085-.818-1.736-1.668-2.624-4.363-3.53-6.997-.888-2.695-1.751-5.251-3.517-6.7-1.212-.998-3.614-1.587-6.883-2.1-.417-1.388-.57-2.668-.024-3.782.782-1.6 2.007-2.584 3.593-3.008z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M310.438 161.753c2.135.383 3.798.826 4.537 1.428 1.271 1.015 2.023 3.279 2.799 5.682.91 2.733 1.974 5.836 4.062 7.865 1.241 1.234 2.428 1.638 3.381 1.716-1.891 1.607-3.941 2.744-6.103 2.679-2.239-.022-4.378-.504-6.54-1.025-.734-1.869-1.095-3.339.327-9.897.478-2.239-.721-4.761-1.914-7.186-.177-.406-.374-.853-.549-1.262zm-35.924-27.068c5.268 2.743 28.67 15.004 32.566 18.103.184.15.425.22.644.249.258.009.456 0 .714.009-.395.472-.71 1.001-1.002 1.568-.693 1.397-.668 2.901-.345 4.392a86.638 86.638 0 00-3.348-.47c-5.376-.66-11.452-1.486-17.321-3.036-10.076-2.655-19.09-8.683-21.972-10.777 3.181-2.843 7.388-6.529 10.064-10.038z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M262.507 146.056c2.006 1.517 11.836 8.561 23.333 11.59 6.05 1.601 12.444 2.454 17.6 3.083 1.534.211 3.008.405 4.383.604.395.894.79 1.788 1.203 2.622 1.026 2.214 2.027 4.289 1.695 5.789-1.188 5.517-1.188 7.795-.691 9.695-.241-.07-.46-.099-.701-.168-3.829-1.063-7.838-2.177-12.552-2.193-8.161-.024-28.201-4.131-37.323-8.986l-1.793-19.093a86.513 86.513 0 004.846-2.943z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M381.988 84.996c-.107-.193-.193-.348-.318-.481-1.714-2.084-11.742-5.93-18.855-4.158-7.68 1.935-18.135 2.425-20.726.22-3.319-2.936-7.006-3.052-10.65-.567l-1.472-1.314 2.183-6.342a1.11 1.11 0 00-.394-1.252 1.107 1.107 0 00-1.313.002l-6.287 4.653-5.337-2.712a1.103 1.103 0 10-1.593 1.147l1.142 7.67-5.678 6.432a1.108 1.108 0 00-.146 1.255c.22.266.666.636 1.124.574l6.976-.954 1.73 6.344c.129.469.526.785.998.813.471.03.91-.243 1.092-.681l3.15-7.624 1.598-.811c.327 2.125.99 4.06 1.273 4.817-.534 4.598-2.306 7.605-6.008 14.062-2.158 3.678-4.794 8.227-8.235 14.793-5.728 10.921-7.571 21.002-5.482 29.963-.631.047-1.581.067-2.574.012-5.28-3.951-32.545-18.065-33.7-18.688-.064-.033-4.499-3.841-4.499-3.841-1.229-10.752-9.248-29.645-13.99-36.704-2.514-3.68-3.801-7.438-5.049-11.079-1.188-3.363-2.259-6.568-4.218-9.575-4.355-6.726-17.987-5.771-21.272-4.938-2.335.615-3.601 2.257-5.044 4.157a48.08 48.08 0 01-2.037 2.494c-1.345 1.504-3.224 1.901-6.252 2.516-2.374.495-5.362 1.13-9.259 2.496-9.14 3.247-27.339 12.95-31.217 15.959-3.818 2.989-9.378.953-12.346-.53-4.195-2.095-16.863-13.666-20.307-17.067-2.396-2.334-5.106-3.441-7.104-2.905a2.875 2.875 0 00-1.879 1.484c-.099.198-.178.356-.217.534-.751 2.592 1.746 13.038 7.229 17.903 5.938 5.241 12.253 13.588 11.897 16.972-.546 4.397 1.443 7.505 5.554 9.107l-.252 1.956-6.464 1.784a1.112 1.112 0 00-.81 1.032c-.015.486.286.922.745 1.081l7.392 2.556.78 5.937a1.103 1.103 0 101.848.666l5.682-5.278 8.515 1.047c.46.056.905-.179 1.118-.588.096-.332.148-.909-.162-1.252l-4.732-5.215 4.255-5.013c.314-.372.35-.878.107-1.282a1.105 1.105 0 00-1.178-.516l-8.071 1.711-1.571-.86c1.569-1.471 2.788-3.111 3.254-3.773 4.095-2.158 7.577-2.397 14.997-2.994 4.254-.298 9.497-.696 16.857-1.569 12.247-1.449 21.604-5.628 27.815-12.416.396.494.95 1.266 1.464 2.116-.275 6.589 3.497 37.057 3.636 38.364.009.068-.065 3.292-.065 3.292-9.067 5.931-22.324 21.457-26.511 28.838-2.168 3.893-4.956 6.724-7.655 9.468-2.477 2.567-4.866 4.956-6.68 8.052-4.071 6.902 2.876 18.67 5.088 21.237 1.592 1.814 3.628 2.212 5.973 2.655.929.177 1.947.398 3.142.707 1.946.531 3.142 2.035 5.044 4.469 1.504 1.902 3.406 4.291 6.371 7.167 6.99 6.726 23.802 18.67 28.227 20.794 4.38 2.08 5.044 7.964 5.044 11.282 0 4.69-4.69 21.193-6.194 25.793-1.017 3.186-.797 6.105.575 7.654a2.879 2.879 0 002.168 1.017c.221 0 .398 0 .575-.044 2.655-.487 10.883-7.389 12.787-14.467 2.035-7.654 6.68-17.033 9.866-18.228 4.178-1.476 6.069-4.644 5.665-9.037l1.863-.649 4.484 4.987a1.113 1.113 0 001.285.263c.44-.203.697-.668.636-1.15l-1.017-7.755 4.962-3.35a1.103 1.103 0 00-.228-1.951l-7.261-2.724-2.869-8.086a1.108 1.108 0 00-1.026-.737c-.339.063-.879.275-1.048.704l-2.553 6.566-6.386-1.566a1.109 1.109 0 00-1.13 1.764l5.138 6.455-.066 1.79c-2.017-.746-4.03-1.105-4.83-1.225-3.761-2.699-5.53-5.707-9.379-12.078-2.168-3.672-4.867-8.185-8.937-14.379-6.77-10.308-14.689-16.812-23.538-19.335.266-.575.708-1.416 1.239-2.257 6.017-2.699 31.59-19.688 32.695-20.396.015-.01.013-.035.028-.046l3.459-1.998c9.589 5.048 29.634 9.096 38.119 9.175 4.456.007 8.285 1.069 11.992 2.098 3.446.92 6.695 1.85 10.283 1.933 8.01.209 14.929-11.576 16.099-14.755.813-2.273.173-4.246-.578-6.51a48.46 48.46 0 01-.906-3.091c-.481-1.96.255-3.734 1.459-6.579.934-2.238 2.099-5.062 3.175-9.048 2.487-9.376 4.772-29.873 4.482-34.772-.308-4.839 4.515-8.275 7.416-9.885 4.1-2.276 20.806-6.185 25.558-7.103 3.279-.657 5.725-2.266 6.413-4.217.298-.827.222-1.695-.166-2.392zm-52.97-.168l-2.773 1.408c-.235.12-.42.32-.522.564l-2.068 5.007-1.133-4.152a1.095 1.095 0 00-1.215-.806l-4.991.682 4.051-4.588c.217-.246.312-.574.264-.895l-.903-6.059 4.036 2.051c.373.191.822.154 1.16-.095l3.974-2.942-1.262 3.668c-.141.417-.019.883.309 1.185l1.871 1.672c-.556.939-.775 2.095-.798 3.3zm-2.673 22.352c4.003-6.827 5.81-9.954 6.357-15.167.013-.159.004-.356-.082-.512-.777-1.947-2.537-7.852-.387-9.45 2.936-2.187 5.591-2.142 8.242.081.309.739 1.717 4.006-.14 7.769-1.47-.551-2.716-.516-3.502-.384-3.893.643-4.473 11.541-4.433 17.995.012 3.03-1.493 6.243-3.492 9.479a2.83 2.83 0 00-.262-.563c-1.374-2.475-3.63-3.805-5.099-4.355 1.03-1.787 1.989-3.432 2.798-4.893zm-8.158 14.75a293.795 293.795 0 014.275-7.889c1.143.327 4.159 1.841 4.94 5.254-.632.958-1.286 1.878-1.918 2.836-2.034 2.9-3.956 5.636-5.225 8.365-.782 1.598-1.282 3.342-1.622 5.1-2.475-.904-4.249-.273-5.685.424.934-4.518 2.633-9.205 5.235-14.09zm-5.657 16.701a9.092 9.092 0 001.048-.481c1.358-.652 2.699-1.246 4.718-.342-.518 4.537-.021 9.171.717 12.961-2.325-.632-4.37-.762-6.098-.41l-.022-.039c-.869-3.666-.979-7.602-.363-11.689zm-4.806 14.406c.258.009.456 0 .714.009-.396.472-.71 1.001-1.002 1.568-.692 1.396-.668 2.901-.345 4.392a86.638 86.638 0 00-3.348-.47c-5.376-.66-11.452-1.486-17.321-3.036-10.077-2.655-19.09-8.683-21.972-10.777 2.771-2.641 6.781-5.751 10.063-10.039 5.268 2.743 28.67 15.004 32.566 18.103.186.152.427.22.645.25zm-50.458 15.344l-2.445 1.412c-4.236-6.1-4.004-21.02-4.004-21.19.044-.442-.221-.841-.619-1.017l-18.327-8.021.105-1.881c9.557 1.102 20.606 5.548 20.759 5.624.376.237.851.178 1.187-.099l15.208-12.68 3.273 2.925c-4.742 5.824-16.279 13.869-16.428 13.952-.408.177-.628.601-.589 1.035l1.88 19.94zm-8.673-87.773c.079.237.179.436.257.672 1.288 3.759 2.634 7.697 5.287 11.593 4.593 6.745 12.534 25.598 13.685 35.866l-14.735 12.273a86.597 86.597 0 00-5.165-2.333c.118-2.513.371-14.602-3.63-25.8-2.1-5.896-5.011-11.652-7.406-16.262-.693-1.385-1.366-2.71-1.98-3.957a68.777 68.777 0 001.483-2.474c1.246-2.098 2.392-4.097 3.817-4.671 5.222-2.135 7.101-3.423 8.387-4.907zm-3.743-8.447c1.247 1.859 2.059 3.897 2.851 5.974-1.127 1.663-2.135 2.791-8.348 5.325-2.116.872-3.521 3.286-4.845 5.641-.237.376-.494.792-.732 1.167-.892-1.978-1.465-3.601-1.387-4.551.118-1.623 1.562-3.522 3.105-5.522 1.74-2.295 3.698-4.928 4.192-7.797.317-1.721-.021-2.929-.497-3.759 2.394.654 4.492 1.703 5.661 3.522zm-22.675-.644c1.325-1.761 2.234-2.89 3.837-3.326.93-.277 3.284-.535 6.094-.516-.158.119-.317.237-.435.376-.851 1.01-1.146 2.889-1.442 5.263-.415 2.909-.908 6.471-2.648 9.064-1.562 2.335-2.888 2.514-4.392 2.752-.653.119-1.345.217-2.038.515-.595-2.869-.972-6.667-.915-11.733a65.916 65.916 0 001.939-2.395zm-9.595 5.84c2.196-.436 3.937-.853 5.441-1.684.041 4.471.438 8.231 1.132 11.297l-.04.079c-2.492 2.613-5.795 5.661-9.593 7.819.02-.237-.02-.456.02-.732.651-5.857-.895-11.179-4.239-14.878 2.906-.969 5.341-1.485 7.279-1.901zm-39.565 18.02c3.659-2.87 20.732-11.9 29.91-15.326 3.404 3.283 5.028 8.248 4.417 13.828-.058.811-.118 1.524-.098 2.176-1.662.753-3.383 1.327-5.164 1.624-2.79.436-6.035.398-9.478.36-6.312-.038-12.861-.094-17.252 2.954-8.15 5.622-13.748 7.623-14.481 6.812-1.049-1.068-2.989-4.312 1.085-11.278 4.434 1.425 8.273 1.067 11.061-1.15zm-36.428-6.08c-3.662-4.846-5.089-12.087-4.674-13.512.079-.257.257-.415.554-.514.97-.257 2.929.375 4.948 2.372.198.198.474.435.771.732l-1.599 10.922zm4.157 4.252a61.943 61.943 0 00-2.217-2.097l1.619-11.258a74.171 74.171 0 002.434 2.254l-1.836 11.101zm1.92 1.997l1.896-11.318c.93.811 1.88 1.682 2.85 2.511l-2.311 11.655a102.522 102.522 0 00-2.435-2.848zm5.383 6.746a69.434 69.434 0 00-1.167-1.622l2.468-12.268a115.668 115.668 0 004.671 3.817l-5.972 10.073zm1.288 2.176l6.506-10.944c.95.672 1.801 1.246 2.474 1.582.514.257 1.01.455 1.544.672-.257.415-.494.89-.692 1.287-1.423 2.85-1.918 5.126-1.897 6.965-3.186.436-5.302 2.001-6.627 3.366-.278-.93-.734-1.9-1.308-2.928zm13.211 15.451c.232.126.502.167.76.111l5.3-1.124-2.784 3.282a1.094 1.094 0 00.023 1.458l3.384 3.731-6.074-.747a1.104 1.104 0 00-.887.288l-4.488 4.17-.59-4.489a1.106 1.106 0 00-.735-.903l-4.673-1.614 3.74-1.033c.424-.119.739-.483.802-.925l.321-2.488c1.088-.072 2.166-.544 3.172-1.207l2.729 1.49zm23.549-19.046c-1.266 2.532-1.086 5.144-.71 6.668-2.058.159-3.957.298-5.619.457-7.894.557-11.496.835-16.105 3.33-.139.078-.297.198-.375.356-1.166 1.741-5.043 6.531-7.576 5.662-3.464-1.186-4.928-3.402-4.593-6.845.435-.673 2.333-3.681 6.488-4.276.376 1.524 1.109 2.532 1.663 3.106 2.731 2.848 12.049-2.834 17.35-6.516 2.493-1.722 5.994-2.297 9.793-2.477-.137.178-.216.336-.316.535zm10.45 5.516c-3.423.417-6.332.695-8.924.934-.376-1.128-.832-4.471 1.54-7.044 1.148-.021 2.275-.001 3.423-.021 3.542.039 6.886.077 9.854-.419 1.761-.257 3.482-.832 5.124-1.545.654 2.552 2.178 3.659 3.563 4.45-4.253 1.781-9.08 3.029-14.58 3.645zm26.41-11.683c-2.531 2.791-5.716 5.107-9.436 6.909a9.423 9.423 0 00-.99-.594c-1.306-.751-2.553-1.523-2.95-3.699 4.035-2.138 7.576-5.166 10.285-7.918.792 2.275 1.842 4.035 3.108 5.262.003 0 .003 0-.017.04zm1.78-1.386c-1.068-.93-2.177-2.571-3.049-5.48.554-.317 1.148-.416 1.839-.515 1.662-.258 3.759-.595 5.855-3.702 2.037-2.988 2.59-6.867 3.023-10.013.237-1.761.473-3.622.948-4.175.494-.594 1.998-.931 3.086-.437 1.247.574 1.247 1.959 1.069 3.007-.395 2.375-2.115 4.631-3.776 6.867-1.72 2.257-3.342 4.414-3.539 6.689-.138 1.564.734 3.878 2.159 6.866-.909 1.128-1.879 1.98-3.105 2.158-1.759.257-3.263-.197-4.51-1.265zm3.543 4.786c.02-.237-.06-.474-.159-.673-.139-.217-.257-.375-.396-.594.614.06 1.227.02 1.859-.06 1.544-.218 2.77-1.089 3.818-2.198.456.97.95 1.959 1.505 3.027 2.495 4.808 5.247 10.286 7.287 16.004 3.506 9.813 3.628 20.655 3.531 24.217-4.289-.931-8.644-1.899-13.97-2.626-.712-5.895-3.828-32.13-3.475-37.097zm-31.218 81.689c2.787-2.831 5.707-5.795 8.008-9.91 3.981-7.123 17.299-22.653 25.971-28.271l17.565 7.699c0 1.062.044 3.142.221 5.663-2.301 1.017-13.228 6.194-21.458 14.777-4.335 4.513-8.185 9.689-11.238 13.892-.929 1.239-1.814 2.433-2.655 3.54-.973-.088-1.946-.177-2.876-.221-2.433-.177-4.734-.31-5.885-1.327-4.247-3.716-6.239-4.822-8.141-5.309.178-.179.311-.356.488-.533zm-6.99 14.291c-.487-2.433-.487-4.778.619-6.636 1.106-1.946 2.566-3.584 4.071-5.22 1.991.266 3.45.664 8.494 5.088 1.726 1.504 4.513 1.682 7.212 1.814.442.044.929.088 1.372.132-1.372 1.682-2.567 2.92-3.45 3.274-1.504.619-3.849.177-6.327-.31-2.831-.531-6.061-1.106-8.849-.266-1.682.486-2.611 1.327-3.142 2.124zm3.761 0c2.301-.707 5.088-.177 7.831.31 2.787.531 5.442 1.017 7.565.177 1.46-.575 3.142-2.389 5.176-5 1.416.309 2.61.797 3.318 1.814 1.017 1.46 1.283 3.008.885 4.601-.354 1.372-1.327 3.097-3.54 5.176-.531-.354-.885-.841-1.283-1.416-.973-1.372-2.212-3.097-5.929-3.584-3.584-.487-7.3.753-10.308 1.77-1.682.575-3.452 1.195-4.159 1.017-.753-.178-1.726-1.372-1.77-2.567-.043-1.369 1.196-1.988 2.214-2.298zm9.423 14.599a63.385 63.385 0 00-3.008-.663c-2.168-.398-3.584-.708-4.69-1.947-.664-.708-1.947-2.699-3.186-5.22.178.088.354.177.531.221 1.283.31 3.096-.266 5.353-1.062 2.787-.929 6.194-2.08 9.291-1.682 2.787.354 3.54 1.46 4.424 2.699.398.531.797 1.106 1.372 1.592-2.3 1.815-5.53 3.85-10.087 6.062zm6.504 5.31c-1.372-1.77-2.521-3.142-3.938-4.115 3.981-2.035 7.167-4.071 9.601-6.061h.088c3.45 1.062 7.654 2.655 11.282 5.088-.221.088-.398.221-.664.309-5.53 2.035-9.601 5.796-11.414 10.442-2.168-2.168-3.716-4.115-4.955-5.663zm33.802 27.341c-4.203-1.991-19.91-13.228-27.076-19.91 1.416-4.513 5.132-8.184 10.397-10.132.753-.31 1.416-.575 1.991-.885 1.416 1.151 2.699 2.433 3.761 3.893 1.638 2.301 3.053 5.22 4.557 8.318 2.787 5.663 5.663 11.548 10.353 14.113 8.672 4.778 12.963 8.893 12.565 9.91-.487 1.416-2.521 4.601-10.574 4.071-.71-4.599-2.744-7.873-5.974-9.378zm.839 45.526c-.266.044-.487-.044-.707-.266-.664-.753-.973-2.787-.088-5.486.088-.266.178-.619.31-1.017l10.486-3.451c-2.7 5.442-8.54 9.956-10.001 10.22zm11.061-12.919l-10.795 3.584c.31-.973.619-2.035.929-3.186l10.751-3.318a63.163 63.163 0 00-.885 2.92zm1.814-5.53l-10.973 3.362c.31-1.194.664-2.433.973-3.672l11.458-3.142a108.087 108.087 0 00-1.458 3.452zm2.7-6.062l-12.078 3.274c.531-2.079.973-4.115 1.327-5.884l11.68.841c-.31.576-.619 1.15-.929 1.769zm2.3-3.893l-12.697-.929c.177-1.151.309-2.168.309-2.92 0-.575-.044-1.106-.088-1.682.487.044 1.017.044 1.46.044 3.186 0 5.442-.575 7.079-1.416 1.814 2.655 4.159 3.849 5.973 4.424-.708.665-1.373 1.506-2.036 2.479zm4.306-23.692l4.18 1.024a1.096 1.096 0 001.294-.672l1.825-4.694 2.046 5.768c.11.309.35.551.654.665l5.736 2.152-3.753 2.534a1.104 1.104 0 00-.48 1.06l.643 4.902-2.594-2.884a1.123 1.123 0 00-1.186-.305l-2.37.824c-.551-.941-1.454-1.695-2.497-2.298l.115-3.107a1.12 1.12 0 00-.239-.73l-3.374-4.239zm-14.748-5.11c4.026 6.814 5.885 9.91 10.176 12.919.132.088.309.177.487.177 2.079.266 8.096 1.592 8.45 4.247.487 3.628-.841 5.929-4.071 7.167-.797-.088-4.335-.442-6.725-3.893 1.195-1.017 1.77-2.123 2.035-2.876 1.327-3.716-7.919-9.512-13.582-12.609-2.655-1.46-4.734-4.335-6.592-7.654.221.044.398.044.619.044 2.831 0 5.088-1.327 6.282-2.345 1.063 1.771 2.037 3.408 2.921 4.823zm-8.937-14.289a298.297 298.297 0 014.822 7.565c-.841.841-3.628 2.743-6.99 1.77-.531-1.017-1.017-2.035-1.548-3.052-1.548-3.186-3.008-6.194-4.778-8.628-1.017-1.46-2.301-2.743-3.672-3.893 1.991-1.726 2.301-3.584 2.389-5.176 3.496 3.008 6.769 6.768 9.777 11.414zm-11.856-13.052a9.408 9.408 0 00-.088 1.151c-.088 1.504-.221 2.965-1.991 4.291-3.716-2.655-8.008-4.469-11.68-5.663 1.682-1.726 2.787-3.451 3.318-5.132h.044c3.627 1.016 7.123 2.831 10.397 5.353zm-9.734-11.636c-.221.088-.398.266-.531.442-.132.221-.221.398-.354.619-.221-.575-.531-1.106-.885-1.636-.885-1.283-2.212-1.991-3.672-2.433a85.839 85.839 0 002.035-2.699c3.186-4.38 6.858-9.291 11.061-13.671 7.212-7.521 16.856-12.477 20.086-13.981.487 4.69 1.548 10.22 3.893 13.671-4.955 3.273-27.031 17.785-31.633 19.688zm89.417-20.937c-1.188 5.517-1.19 7.795-.691 9.694-.241-.068-.46-.099-.701-.168-3.829-1.063-7.838-2.177-12.552-2.193-8.16-.024-28.201-4.131-37.323-8.986l-1.793-19.093a86.723 86.723 0 004.844-2.942c2.006 1.517 11.836 8.561 23.334 11.59 6.05 1.601 12.444 2.454 17.6 3.083 1.534.212 3.008.405 4.383.604.395.894.79 1.788 1.203 2.622 1.027 2.213 2.027 4.29 1.696 5.789zm8.393 11.382c-2.239-.022-4.378-.504-6.54-1.025-.734-1.869-1.095-3.339.327-9.897.478-2.239-.721-4.761-1.914-7.186-.177-.408-.374-.855-.549-1.263 2.135.384 3.798.826 4.537 1.429 1.272 1.014 2.023 3.279 2.799 5.682.91 2.733 1.975 5.836 4.063 7.865 1.241 1.234 2.428 1.638 3.381 1.716-1.892 1.607-3.943 2.745-6.104 2.679zm7.362-5.149c-1.177.704-2.321-.078-3.085-.818-1.736-1.668-2.624-4.363-3.53-6.997-.888-2.695-1.751-5.252-3.517-6.7-1.212-.998-3.614-1.587-6.883-2.1-.417-1.388-.57-2.669-.024-3.782.782-1.598 2.007-2.582 3.593-3.007 1.37-.356 3.352-.342 6.244.583-.052.636-.306 1.182-.615 1.809-.727 1.516-1.634 3.437-.256 6.923 1.314 3.37 4.201 6.017 6.55 8.154 1.319 1.191 2.719 2.438 2.908 3.143.211.743-.361 2.174-1.385 2.792zm6.561-8.146c-.297.924-1.415 3.012-3.018 5.32-.009-.198-.017-.396-.064-.572-.352-1.272-1.735-2.579-3.527-4.165-2.165-1.986-4.824-4.406-5.98-7.308-1.043-2.609-.441-3.804.212-5.178.271-.606.58-1.234.727-1.972 2.702 1.131 6.049 2.967 10.195 5.878a64.93 64.93 0 00.881 2.953c.705 2.088 1.121 3.476.574 5.044zm.032-16.26c-.882 2.058-1.523 3.73-1.687 5.44-3.712-2.494-7.037-4.291-9.959-5.452l-.043-.077c-.746-3.532-1.394-7.98-1.026-12.333.184.15.386.241.593.43 4.463 3.848 9.727 5.581 14.669 4.913-.844 2.945-1.794 5.245-2.547 7.079zm7.502-42.823c.299 4.641-1.903 23.828-4.267 33.336-4.632.952-9.647-.515-13.905-4.173-.636-.508-1.19-.959-1.74-1.311.319-1.796.818-3.541 1.579-5.177 1.217-2.548 3.083-5.203 5.06-8.021 3.598-5.185 7.348-10.556 7.316-15.902-.031-9.901 1.484-15.65 2.567-15.796 1.474-.262 5.247-.029 8.691 7.27-3.678 2.851-5.553 6.22-5.301 9.774zm8.535-11.974c-.503.279-.946.575-1.427.893a16.684 16.684 0 00-.67-1.298c-1.546-2.785-3.144-4.479-4.673-5.502 1.441-2.874 1.347-5.504.97-7.369.924.297 1.981.469 3.154.577l5.351 11.553c-1.094.403-2.048.781-2.705 1.146zm4.809-1.911l-4.934-10.621c.653-.009 1.306-.017 1.998-.046l8.724 8.971a118.656 118.656 0 00-5.788 1.696zm8.256-2.356l-8.308-8.494a99.977 99.977 0 003.725-.398l8.265 7.961c-1.194.309-2.449.601-3.682.931zm6.269-1.557l-8.119-7.789c1.1-.205 2.179-.45 2.983-.643l8.373 7.7c-1.001.199-2.08.444-3.237.732zm6.885-1.544c-.275.051-.627.146-1.039.223l-8.106-7.494c6.068-.281 12.847 2.635 13.789 3.783.168.211.198.447.111.748-.336.945-1.966 2.203-4.755 2.74z",
    fill: "#464655"
  })));
}

function SvgIn(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#FAB446"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(208 120)",
    fill: "#41479B"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M48 95.448C21.836 95.448.552 74.164.552 48S21.836.552 48 .552 95.448 21.836 95.448 48 74.164 95.448 48 95.448zm0-86.069C26.702 9.379 9.379 26.702 9.379 48c0 21.298 17.323 38.621 38.621 38.621 21.298 0 38.621-17.323 38.621-38.621C86.621 26.702 69.298 9.379 48 9.379z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 48,
    cy: 48,
    r: 5.379
  }), /*#__PURE__*/react.createElement("path", {
    d: "M48 48.807l-13.67 1.38-29.364-1.38v-1.614l29.364-1.38L48 47.193zm0 0l13.67 1.38 29.364-1.38v-1.614l-29.364-1.38L48 47.193z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M47.193 48l-1.38-13.67 1.38-29.364h1.614l1.38 29.364L48.807 48zm0 0l-1.38 13.67 1.38 29.364h1.614l1.38-29.364L48.807 48z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M47.43 48.57l-10.642-8.689L17 18.141 18.141 17l21.74 19.788L48.57 47.43z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M47.43 48.57l8.689 10.642L77.859 79 79 77.859l-19.788-21.74L48.57 47.43z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M47.43 47.43l8.689-10.642L77.859 17 79 18.141l-19.788 21.74L48.57 48.57z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M47.43 47.43l-10.642 8.689L17 77.859 18.141 79l21.74-19.788L48.57 48.57z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M48.309 48.746l-12.102 6.506-27.656 9.962-.618-1.491 26.601-12.512 13.157-3.957zm0 0l13.157-3.957 26.601-12.512-.618-1.491-27.656 9.962-12.102 6.506z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M47.254 48.309l-6.506-12.102-9.962-27.656 1.491-.618 12.512 26.601 3.957 13.157zm0 0l3.957 13.157 12.512 26.601 1.491-.618-9.962-27.656-6.506-12.102z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M47.691 48.746l-13.157-3.957L7.933 32.277l.618-1.491 27.656 9.962 12.102 6.506zm0 0l12.102 6.506 27.656 9.962.618-1.491-26.601-12.512-13.157-3.957z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M47.254 47.691l3.957-13.157L63.723 7.933l1.491.618-9.962 27.656-6.506 12.102zm0 0l-6.506 12.102-9.962 27.656 1.491.618 12.512-26.601 3.957-13.157z"
  })), /*#__PURE__*/react.createElement("circle", {
    fill: "#F5F5F5",
    cx: 256,
    cy: 168,
    r: 7.256
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#41479B",
    cx: 256,
    cy: 168,
    r: 4.351
  })));
}

function SvgIo(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#41479B"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512 265.103c-25.629 0-25.629-8.828-51.256-8.828-25.629 0-25.629 8.828-51.256 8.828-25.611 0-25.611-8.828-51.221-8.828-25.589 0-25.589 8.828-51.177 8.828-25.602 0-25.602-8.828-51.204-8.828-25.596 0-25.596 8.828-51.191 8.828-25.595 0-25.596-8.828-51.19-8.828-25.594 0-25.596 8.828-51.191 8.828-25.585 0-25.585-8.828-51.168-8.828-25.571 0-25.571 8.828-51.143 8.828V238.62c25.571 0 25.571-8.828 51.143-8.828 25.584 0 25.584 8.828 51.168 8.828 25.596 0 25.596-8.828 51.191-8.828 25.595 0 25.596 8.828 51.19 8.828 25.596 0 25.596-8.828 51.191-8.828 25.602 0 25.602 8.828 51.204 8.828 25.589 0 25.589-8.828 51.177-8.828 25.611 0 25.611 8.828 51.221 8.828 25.629 0 25.629-8.828 51.256-8.828 25.629 0 25.629 8.828 51.256 8.828v26.483zm0-105.931c-25.629 0-25.629-8.828-51.256-8.828-25.629 0-25.629 8.828-51.256 8.828-25.611 0-25.611-8.828-51.221-8.828-25.589 0-25.589 8.828-51.177 8.828-25.602 0-25.602-8.828-51.204-8.828-25.596 0-25.596 8.828-51.191 8.828-25.595 0-25.596-8.828-51.19-8.828-25.594 0-25.596 8.828-51.191 8.828-25.585 0-25.585-8.828-51.168-8.828-25.571 0-25.571 8.828-51.143 8.828V132.69c25.571 0 25.571-8.828 51.143-8.828 25.584 0 25.584 8.828 51.168 8.828 25.596 0 25.596-8.828 51.191-8.828 25.595 0 25.596 8.828 51.19 8.828 25.596 0 25.596-8.828 51.191-8.828 25.602 0 25.602 8.828 51.204 8.828 25.589 0 25.589-8.828 51.177-8.828 25.611 0 25.611 8.828 51.221 8.828 25.629 0 25.629-8.828 51.256-8.828 25.629 0 25.629 8.828 51.256 8.828v26.482zm0-52.965c-25.629 0-25.629-8.828-51.256-8.828-25.629 0-25.629 8.828-51.256 8.828-25.611 0-25.611-8.828-51.221-8.828-25.589 0-25.589 8.828-51.177 8.828-25.602 0-25.602-8.828-51.204-8.828-25.596 0-25.596 8.828-51.191 8.828-25.595 0-25.596-8.828-51.19-8.828-25.594 0-25.596 8.828-51.191 8.828-25.585 0-25.585-8.828-51.168-8.828-25.571 0-25.571 8.828-51.143 8.828V79.724c25.571 0 25.571-8.828 51.143-8.828 25.584 0 25.584 8.828 51.168 8.828 25.596 0 25.596-8.828 51.191-8.828 25.595 0 25.596 8.828 51.19 8.828 25.596 0 25.596-8.828 51.191-8.828 25.602 0 25.602 8.828 51.204 8.828 25.589 0 25.589-8.828 51.177-8.828 25.611 0 25.611 8.828 51.221 8.828 25.629 0 25.629-8.828 51.256-8.828 25.629 0 25.629 8.828 51.256 8.828v26.483zm0-52.965c-25.629 0-25.629-8.828-51.256-8.828-25.629 0-25.629 8.828-51.256 8.828-25.611 0-25.611-8.828-51.221-8.828-25.589 0-25.589 8.828-51.177 8.828-25.602 0-25.602-8.828-51.204-8.828-25.596 0-25.596 8.828-51.191 8.828-25.595 0-25.596-8.828-51.19-8.828-25.594 0-25.596 8.828-51.191 8.828-25.585 0-25.585-8.828-51.168-8.828-25.571 0-25.571 8.828-51.143 8.828V26.759c25.571 0 25.571-8.828 51.143-8.828 25.584 0 25.584 8.828 51.168 8.828 25.596 0 25.596-8.828 51.191-8.828 25.595 0 25.596 8.828 51.19 8.828 25.596 0 25.596-8.828 51.191-8.828 25.602 0 25.602 8.828 51.204 8.828 25.589 0 25.589-8.828 51.177-8.828 25.611 0 25.611 8.828 51.221 8.828 25.629 0 25.629-8.828 51.256-8.828 25.629 0 25.629 8.828 51.256 8.828v26.483zm0 158.896c-25.629 0-25.629-8.828-51.256-8.828-25.629 0-25.629 8.828-51.256 8.828-25.611 0-25.611-8.828-51.221-8.828-25.589 0-25.589 8.828-51.177 8.828-25.602 0-25.602-8.828-51.204-8.828-25.596 0-25.596 8.828-51.191 8.828-25.595 0-25.596-8.828-51.19-8.828-25.594 0-25.596 8.828-51.191 8.828-25.585 0-25.585-8.828-51.168-8.828-25.571 0-25.571 8.828-51.143 8.828v-26.483c25.571 0 25.571-8.828 51.143-8.828 25.584 0 25.584 8.828 51.168 8.828 25.596 0 25.596-8.828 51.191-8.828 25.595 0 25.596 8.828 51.19 8.828 25.596 0 25.596-8.828 51.191-8.828 25.602 0 25.602 8.828 51.204 8.828 25.589 0 25.589-8.828 51.177-8.828 25.611 0 25.611 8.828 51.221 8.828 25.629 0 25.629-8.828 51.256-8.828 25.629 0 25.629 8.828 51.256 8.828v26.483zm0 105.931c-25.629 0-25.629-8.828-51.256-8.828-25.629 0-25.629 8.828-51.256 8.828-25.611 0-25.611-8.828-51.221-8.828-25.589 0-25.589 8.828-51.177 8.828-25.602 0-25.602-8.828-51.204-8.828-25.596 0-25.596 8.828-51.191 8.828-25.595 0-25.596-8.828-51.19-8.828-25.594 0-25.596 8.828-51.191 8.828-25.585 0-25.585-8.828-51.168-8.828-25.571 0-25.571 8.828-51.143 8.828v-26.483c25.571 0 25.571-8.828 51.143-8.828 25.584 0 25.584 8.828 51.168 8.828 25.596 0 25.596-8.828 51.191-8.828 25.595 0 25.596 8.828 51.19 8.828 25.596 0 25.596-8.828 51.191-8.828 25.602 0 25.602 8.828 51.204 8.828 25.589 0 25.589-8.828 51.177-8.828 25.611 0 25.611 8.828 51.221 8.828 25.629 0 25.629-8.828 51.256-8.828 25.629 0 25.629 8.828 51.256 8.828v26.483z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172 168H8.828A8.829 8.829 0 010 159.172V9.104A8.829 8.829 0 018.828.276h238.344A8.829 8.829 0 01256 9.104v150.069a8.827 8.827 0 01-8.828 8.827z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.333l-81.77 53.573V.276h-44.138v53.573L24.161.276H8.828A8.829 8.829 0 000 9.104v7.002l70.155 45.963H0v44.138h70.155L0 152.171v7.001A8.829 8.829 0 008.828 168h15.333l81.77-53.573V168h44.138v-53.573L231.838 168h15.333a8.829 8.829 0 008.828-8.828v-7.002l-70.154-45.963h70.154V62.069h-70.155l70.155-45.963V9.104a8.827 8.827 0 00-8.827-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M255.999 70.897H141.241V.276h-26.483v70.621H0v26.482h114.758V168h26.483V97.379h114.758z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.333 0 5.961 0 9.104v.458l80.889 52.507h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.195-61.793H89.474zm166.385 53.66l-82.666-53.659H156.98l93.873 60.934c2.813-1.305 4.741-4.04 5.006-7.275z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M388.413 299.387a6.112 6.112 0 01-6.111-6.111V97.724h12.222v195.553a6.11 6.11 0 01-6.111 6.11z",
    fill: "#965032"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#73AF00",
    d: "M473.968 122.167l-12.222-6.111-45-5.624 27.842-35.797 4.321-12.964-12.963 4.322-35.797 27.841-5.624-44.998-6.112-12.223-6.111 12.223-5.624 44.998-35.797-27.841-12.963-4.322 4.321 12.964 27.842 35.797-45 5.624-12.222 6.111 12.222 6.111 45 5.626-27.842 35.795-4.321 12.965 12.963-4.321 38.89-30.248 8.642-13.705 8.642 13.705 38.891 30.248 12.963 4.321-4.321-12.965-27.842-35.795 45-5.626z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M415.018 193.34c-5.492-5.482-17.252-3.467-23.549-1.877v-5.129a3.055 3.055 0 00-6.11 0v5.128c-6.296-1.594-18.055-3.609-23.549 1.878-5.238 5.235-1.443 17.858 2.161 26.634v8.126a4.065 4.065 0 004.066 4.066h40.756a4.066 4.066 0 004.066-4.066v-8.126c3.602-8.776 7.397-21.4 2.159-26.634zm-4.321 4.321c2.333 2.335-.28 12.567-4.49 22.284h-14.739v-22.17c6.861-1.943 16.259-3.091 19.229-.114zm-44.567 0c2.968-2.976 12.366-1.828 19.229.114v22.169H370.62c-4.21-9.716-6.823-19.948-4.49-22.283z",
    fill: "#FFE15A"
  })));
}

function SvgIq(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#73AF00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M308.065 145.525c-.928-.483-2.027-2.211-1.684-2.967.361-.793-.201-.725 1.696-.161 3.43.888 5.65.483 7.829-1.372l1.937-1.533 2.261 1.13c1.25.564 2.541.967 2.905.886 1.049-.242 3.069-2.825 3.027-3.713-.041-1.208.847-.886 1.291.405.928 2.422-.779 6.599-3.119 7.164-1.128.322-2.178.242-3.955-.322-2.098-.808-2.422-.808-3.55 0-2.342 1.856-5.692 2.019-8.638.483m8.835-9.343c-1.132-1.587-2.493-7.14-2.095-8.499.395-1.248.792-1.474 1.868-1.134 1.927.679 2.382 1.927 2.153 6.462-.339 3.397-.791 4.532-1.926 3.171m-75.895 24.548c-4.651 2.646-11.569 3.101-11.569 10.434-10.13.377-22.076.831-32.85.604 2.92-3.772 21.401-20.853 29.086-27.623 1.272-1.12 1.704-3.288.964-4.813l-.199-.41c-1.108-2.285-4.122-2.829-5.958-1.074-7.658 7.326-15.247 14.152-16.483 15.322-9.914 10.02-12.822 12.94-14.38 14.508a5.914 5.914 0 00-1.718 4.2v.103a5.943 5.943 0 005.942 5.911h43.381c2.458 0-.565-8.543 2.609-8.543 2.207 0 2.41 3.065 2.313 6.312-.074 2.47-2.109 4.424-4.579 4.427-18.755.026-38.279.205-56.651.222a2.737 2.737 0 01-2.735-2.748v-3.305c0-2.802-3.112-4.431-5.454-2.893-.086.056-.17.11-.254.162-1.224.765-1.85 2.263-1.372 3.624.31.884.445 1.96.474 3.085.04 1.487-1.171 2.713-2.658 2.759-6.076.186-12.679.241-14.554-3.342-1.058-2.02-3.309-2.974-5.35-1.954l-.271.136c-2.148 1.074-3.008 3.731-1.832 5.824 2.238 3.979 4.28 8.595 3.22 15.06-.864 2.037-2.492 3.313-4.256 4.461-1.96 1.276-.73 4.262 1.569 3.837 5.574-1.03 9.415-5.442 10.59-10.642h86.42a5.74 5.74 0 005.739-5.739V169.88c-.792-5.596-6.803-5.369-9.184-9.15zm109.615-24.783c1.275.82 2.552 1.641 3.975 2.319 1.556.743 2.151 2.643 1.241 4.107-.241.387-.441.82-.556 1.346v37.197c2.542.529 4.001.028 5.16-.771a2.263 2.263 0 013.489 1.288c.877 3.263 2.313 6.45 3.079 9.352a2.855 2.855 0 01-2.759 3.588h-14.572a2.336 2.336 0 01-2.336-2.336v-54.3c-.001-1.683 1.863-2.701 3.279-1.79zm-17.645 9.058c.011 10.271.131 21.335.148 32.345a2.58 2.58 0 01-2.582 2.583h-.167a2.58 2.58 0 01-2.58-2.58v-26.09c0-1.42-1.669-2.179-2.737-1.245l-3.42 2.955a3.172 3.172 0 00-1.105 2.397c-.011 4.244-.049 16.6-.064 21.994a2.578 2.578 0 01-2.58 2.569h-.234a2.576 2.576 0 01-2.58-2.557 5136.03 5136.03 0 01-.087-15.238c-.006-1.436-1.704-2.186-2.784-1.24-3.543 3.105-4.361 3.807-6.22 5.728.151.983.908 0 1.361.755v4.991c-12.908-2.43-13.871 7.882-13.388 18.946a3.11 3.11 0 003.102 2.978h40.526a2.72 2.72 0 002.721-2.721v-50.381c0-1.683-1.997-2.547-3.239-1.41-.99.906-2.047 1.813-2.955 2.634a3.487 3.487 0 00-1.136 2.587zm-29.825 34.551c-.793-2.269 3.668-3.101 4.196-1.058.189 2.494-3.212 2.57-4.196 1.058z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M169.295 198.38c1.55 0 2.797 1.286 2.797 2.797a2.767 2.767 0 01-2.797 2.798c-1.587 0-2.874-1.209-2.874-2.798.001-1.511 1.288-2.797 2.874-2.797m92.145-61.293c.757.455 1.535.89 2.364 1.281 1.496.707 2.086 2.566 1.171 3.945a4.43 4.43 0 00-.648 1.482v37.121c2.694.599 4.167.012 5.342-.857 1.17-.865 2.854-.267 3.229 1.138.673 2.52 1.685 5.012 2.466 7.378.956 2.893-1.19 5.874-4.237 5.874H259.76a3.333 3.333 0 01-3.333-3.334v-51.153c0-2.572 2.807-4.2 5.013-2.875z"
  }))));
}

function SvgIr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.094H0V9.106A8.829 8.829 0 018.828.278h494.345a8.829 8.829 0 018.828 8.828v102.988z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.727H8.828A8.829 8.829 0 010 326.899V223.911h512v102.988a8.829 8.829 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 112.091h512v111.812H0zm1.389-5.913h.077c.767 0 1.389-.621 1.389-1.389v-3.008c0-.767.621-1.389 1.389-1.389h5.827c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h11.502c.767 0 1.389-.621 1.389-1.389v-5.938c0-.767-.621-1.389-1.389-1.389h-5.79c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h2.935c.767 0 1.389.621 1.389 1.389v.151c0 .767-.621 1.389-1.389 1.389h-5.792a1.389 1.389 0 01-1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389H1.389c-.767 0-1.389.621-1.389 1.389v5.938a1.39 1.39 0 001.389 1.389zm5.748 0h.079c.767 0 1.389-.621 1.389-1.389v-.079c0-.767-.621-1.389-1.389-1.389h-.079c-.767 0-1.389.621-1.389 1.389v.079a1.39 1.39 0 001.389 1.389zM1.389 94.533h34.423c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389H1.389c-.767 0-1.389.621-1.389 1.389v.152c0 .768.621 1.389 1.389 1.389zm34.422 11.645h-5.79a1.389 1.389 0 01-1.389-1.389v-5.938c0-.767.621-1.389 1.389-1.389h8.648c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767.621-1.389 1.389-1.389h.077c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.079c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.077c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.115c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.042c.767 0 1.389.621 1.389 1.389v11.797c0 .767-.621 1.389-1.389 1.389H41.447a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-5.79c-.767 0-1.389.621-1.389 1.389v.151c0 .767.621 1.389 1.389 1.389h2.933c.767 0 1.389.621 1.389 1.389v.079a1.39 1.39 0 01-1.39 1.389zm22.807 0h.115c.767 0 1.389-.621 1.389-1.389v-3.008c0-.767.621-1.389 1.389-1.389h5.754c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h11.502c.767 0 1.389-.621 1.389-1.389v-5.938c0-.767-.621-1.389-1.389-1.389h-5.79c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h2.935c.767 0 1.389.621 1.389 1.389v.151c0 .767-.621 1.389-1.389 1.389H72.9a1.389 1.389 0 01-1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389H58.618c-.767 0-1.389.621-1.389 1.389v5.938a1.391 1.391 0 001.389 1.389zm5.713 0h.077c.767 0 1.389-.621 1.389-1.389v-.079c0-.767-.621-1.389-1.389-1.389h-.077c-.767 0-1.389.621-1.389 1.389v.079a1.39 1.39 0 001.389 1.389zm-5.713-11.645h34.388c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389H58.618c-.767 0-1.389.621-1.389 1.389v.152a1.39 1.39 0 001.389 1.389zm34.388 11.645h-5.827a1.389 1.389 0 01-1.389-1.389v-5.938c0-.767.621-1.389 1.389-1.389h8.648c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767.621-1.389 1.389-1.389h.115c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.115c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.042c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.115c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.077c.767 0 1.389.621 1.389 1.389v11.797c0 .767-.621 1.389-1.389 1.389H98.607a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-5.754c-.767 0-1.389.621-1.389 1.389v.151c0 .767.621 1.389 1.389 1.389h2.935c.767 0 1.389.621 1.389 1.389v.079a1.396 1.396 0 01-1.393 1.389zm22.808 0h.077c.767 0 1.389-.621 1.389-1.389v-3.008c0-.767.621-1.389 1.389-1.389h5.792c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h11.538c.767 0 1.389-.621 1.389-1.389v-5.938c0-.767-.621-1.389-1.389-1.389h-5.79c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h2.935c.767 0 1.389.621 1.389 1.389v.151c0 .767-.621 1.389-1.389 1.389h-5.827a1.389 1.389 0 01-1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-11.502c-.767 0-1.389.621-1.389 1.389v5.938a1.388 1.388 0 001.388 1.389zm5.712 0h.077c.767 0 1.389-.621 1.389-1.389v-.079c0-.767-.621-1.389-1.389-1.389h-.077c-.767 0-1.389.621-1.389 1.389v.079a1.39 1.39 0 001.389 1.389zm-5.712-11.645h34.424c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-34.424c-.767 0-1.389.621-1.389 1.389v.152a1.388 1.388 0 001.389 1.389zm34.424 11.645h-5.827a1.389 1.389 0 01-1.389-1.389v-5.938c0-.767.621-1.389 1.389-1.389h8.646c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767.621-1.389 1.389-1.389h.079c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.115c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.115c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.042c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.077c.767 0 1.389.621 1.389 1.389v11.797c0 .767-.621 1.389-1.389 1.389h-11.54a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-5.79c-.767 0-1.389.621-1.389 1.389v.151c0 .767.621 1.389 1.389 1.389h2.973c.767 0 1.389.621 1.389 1.389v.079a1.393 1.393 0 01-1.391 1.389zm22.769 0h.077c.767 0 1.389-.621 1.389-1.389v-3.008c0-.767.621-1.389 1.389-1.389h5.79c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h11.54c.767 0 1.389-.621 1.389-1.389v-5.938c0-.767-.621-1.389-1.389-1.389h-5.827c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h2.935c.767 0 1.389.621 1.389 1.389v.151c0 .767-.621 1.389-1.389 1.389h-5.79a1.389 1.389 0 01-1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-11.502c-.767 0-1.389.621-1.389 1.389v5.938a1.39 1.39 0 001.388 1.389zm5.713 0h.077c.767 0 1.389-.621 1.389-1.389v-.079c0-.767-.621-1.389-1.389-1.389h-.077c-.767 0-1.389.621-1.389 1.389v.079a1.39 1.39 0 001.389 1.389zm-5.713-11.645h34.388c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-34.388c-.767 0-1.389.621-1.389 1.389v.152a1.39 1.39 0 001.389 1.389zm34.388 11.645h-5.827a1.389 1.389 0 01-1.389-1.389v-5.938c0-.767.621-1.389 1.389-1.389h8.721c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767.621-1.389 1.389-1.389h.077c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.042c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.115c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.079c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.077c.767 0 1.389.621 1.389 1.389v11.797c0 .767-.621 1.389-1.389 1.389h-11.507a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-5.827c-.767 0-1.389.621-1.389 1.389v.151c0 .767.621 1.389 1.389 1.389h2.935c.767 0 1.389.621 1.389 1.389v.079a1.386 1.386 0 01-1.386 1.389zm22.805 0h.079c.767 0 1.389-.621 1.389-1.389v-3.008c0-.767.621-1.389 1.389-1.389h5.79c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h11.54c.767 0 1.389-.621 1.389-1.389v-5.938c0-.767-.621-1.389-1.389-1.389h-5.827c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h2.97c.767 0 1.389.621 1.389 1.389v.151c0 .767-.621 1.389-1.389 1.389h-5.79a1.389 1.389 0 01-1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389H230.2c-.767 0-1.389.621-1.389 1.389v5.938a1.39 1.39 0 001.389 1.389zm5.75 0h.042c.767 0 1.389-.621 1.389-1.389v-.079c0-.767-.621-1.389-1.389-1.389h-.042c-.767 0-1.389.621-1.389 1.389v.079a1.39 1.39 0 001.389 1.389zm-5.75-11.645h34.425c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389H230.2c-.767 0-1.389.621-1.389 1.389v.152a1.39 1.39 0 001.389 1.389zm34.426 11.645h-5.827a1.389 1.389 0 01-1.389-1.389v-5.938c0-.767.621-1.389 1.389-1.389h8.684c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767.621-1.389 1.389-1.389h.077c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.079c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.077c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.077c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.079c.767 0 1.389.621 1.389 1.389v11.797c0 .767-.621 1.389-1.389 1.389H270.26a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-5.827c-.767 0-1.389.621-1.389 1.389v.151c0 .767.621 1.389 1.389 1.389h2.97c.767 0 1.389.621 1.389 1.389v.079c0 .766-.621 1.389-1.388 1.389zm22.769 0h.079c.767 0 1.389-.621 1.389-1.389v-3.008c0-.767.621-1.389 1.389-1.389h5.79c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h11.54c.767 0 1.389-.621 1.389-1.389v-5.938c0-.767-.621-1.389-1.389-1.389h-5.792c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h2.899c.767 0 1.389.621 1.389 1.389v.151c0 .767-.621 1.389-1.389 1.389h-5.754a1.389 1.389 0 01-1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-11.54c-.767 0-1.389.621-1.389 1.389v5.938a1.39 1.39 0 001.389 1.389zm5.749 0h.042c.767 0 1.389-.621 1.389-1.389v-.079c0-.767-.621-1.389-1.389-1.389h-.042c-.767 0-1.389.621-1.389 1.389v.079a1.39 1.39 0 001.389 1.389zm-5.749-11.645h34.424c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-34.424c-.767 0-1.389.621-1.389 1.389v.152c0 .768.622 1.389 1.389 1.389zm34.425 11.645h-5.79a1.389 1.389 0 01-1.389-1.389v-5.938c0-.767.621-1.389 1.389-1.389h8.646c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767.621-1.389 1.389-1.389h.079c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.077c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.079c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.077c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.079c.767 0 1.389.621 1.389 1.389v11.797c0 .767-.621 1.389-1.389 1.389h-11.505a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-5.826c-.767 0-1.389.621-1.389 1.389v.151c0 .767.621 1.389 1.389 1.389h2.97c.767 0 1.389.621 1.389 1.389v.079a1.387 1.387 0 01-1.387 1.389zm22.769 0h.079c.767 0 1.389-.621 1.389-1.389v-3.008c0-.767.621-1.389 1.389-1.389h5.826c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h11.505c.767 0 1.389-.621 1.389-1.389v-5.938c0-.767-.621-1.389-1.389-1.389h-5.792c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h2.973c.767 0 1.389.621 1.389 1.389v.151c0 .767-.621 1.389-1.389 1.389h-5.865a1.389 1.389 0 01-1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-11.502c-.767 0-1.389.621-1.389 1.389v5.938a1.387 1.387 0 001.387 1.389zm5.713 0h.115c.767 0 1.389-.621 1.389-1.389v-.079c0-.767-.621-1.389-1.389-1.389h-.115c-.767 0-1.389.621-1.389 1.389v.079a1.39 1.39 0 001.389 1.389zm-5.713-11.645h34.424c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-34.424c-.767 0-1.389.621-1.389 1.389v.152a1.39 1.39 0 001.389 1.389zm34.426 11.645h-5.79a1.389 1.389 0 01-1.389-1.389v-5.938c0-.767.621-1.389 1.389-1.389h8.646c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767.621-1.389 1.389-1.389h.079c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.077c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.079c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.115c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.04c.767 0 1.389.621 1.389 1.389v11.797c0 .767-.621 1.389-1.389 1.389h-11.502a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-5.754c-.767 0-1.389.621-1.389 1.389v.151c0 .767.621 1.389 1.389 1.389h2.899c.767 0 1.389.621 1.389 1.389v.079a1.392 1.392 0 01-1.39 1.389zm22.805 0h.042c.767 0 1.389-.621 1.389-1.389v-3.008c0-.767.621-1.389 1.389-1.389h5.792c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h11.538c.767 0 1.389-.621 1.389-1.389v-5.938c0-.767-.621-1.389-1.389-1.389h-5.752c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h2.933c.767 0 1.389.621 1.389 1.389v.151c0 .767-.621 1.389-1.389 1.389h-5.826a1.389 1.389 0 01-1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389H401.82c-.767 0-1.389.621-1.389 1.389v5.938a1.39 1.39 0 001.389 1.389zm5.712 0h.079c.767 0 1.389-.621 1.389-1.389v-.079c0-.767-.621-1.389-1.389-1.389h-.079c-.767 0-1.389.621-1.389 1.389v.079a1.39 1.39 0 001.389 1.389zm-5.712-11.645h34.462c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389H401.82c-.767 0-1.389.621-1.389 1.389v.152a1.388 1.388 0 001.389 1.389zm34.461 11.645h-5.865a1.389 1.389 0 01-1.389-1.389v-5.938c0-.767.621-1.389 1.389-1.389h8.648c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767.621-1.389 1.389-1.389h.115c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.077c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.042c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.115c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.079c.767 0 1.389.621 1.389 1.389v11.797c0 .767-.621 1.389-1.389 1.389h-11.54a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-5.79c-.767 0-1.389.621-1.389 1.389v.151c0 .767.621 1.389 1.389 1.389h3.008c.767 0 1.389.621 1.389 1.389v.079a1.39 1.39 0 01-1.39 1.389zm22.732 0h.079c.767 0 1.389-.621 1.389-1.389v-3.008c0-.767.621-1.389 1.389-1.389h5.79c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h11.54c.767 0 1.389-.621 1.389-1.389v-5.938c0-.767-.621-1.389-1.389-1.389h-5.754c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h2.935c.767 0 1.389.621 1.389 1.389v.151c0 .767-.621 1.389-1.389 1.389h-5.865a1.389 1.389 0 01-1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-11.502c-.767 0-1.389.621-1.389 1.389v5.938a1.39 1.39 0 001.388 1.389zm5.713 0h.079c.767 0 1.389-.621 1.389-1.389v-.079c0-.767-.621-1.389-1.389-1.389h-.079c-.767 0-1.389.621-1.389 1.389v.079a1.39 1.39 0 001.389 1.389zm-5.713-11.645h34.388c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-34.388c-.767 0-1.389.621-1.389 1.389v.152a1.39 1.39 0 001.389 1.389zm34.388 11.645h-5.79a1.389 1.389 0 01-1.389-1.389v-5.938c0-.767.621-1.389 1.389-1.389h8.721c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767.621-1.389 1.389-1.389h.004c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.152c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.004c.767 0 1.389.621 1.389 1.389v8.94c0 .767.621 1.389 1.389 1.389h.079c.767 0 1.389-.621 1.389-1.389v-8.94c0-.767.621-1.389 1.389-1.389h.151c.767 0 1.389.621 1.389 1.389v11.797c0 .767-.621 1.389-1.389 1.389H499.11a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-5.864c-.767 0-1.389.621-1.389 1.389v.151c0 .767.621 1.389 1.389 1.389h2.933c.767 0 1.389.621 1.389 1.389v.079a1.39 1.39 0 01-1.389 1.389z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M1.389 115.037h22.963c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389H1.389c-.767 0-1.389.621-1.389 1.389v3.081c0 .768.621 1.389 1.389 1.389zm28.633 0h22.927c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389H30.022c-.767 0-1.389.621-1.389 1.389v3.081c0 .768.622 1.389 1.389 1.389zm28.596 0h22.927c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389H58.618c-.767 0-1.389.621-1.389 1.389v3.081a1.39 1.39 0 001.389 1.389zm28.561 0h23c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-23c-.767 0-1.389.621-1.389 1.389v3.081c0 .768.622 1.389 1.389 1.389zm28.635 0h22.963c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-22.963c-.767 0-1.389.621-1.389 1.389v3.081a1.388 1.388 0 001.389 1.389zm28.596 0h22.963c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389H144.41c-.767 0-1.389.621-1.389 1.389v3.081a1.39 1.39 0 001.389 1.389zm28.597 0h22.963c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-22.963c-.767 0-1.389.621-1.389 1.389v3.081a1.39 1.39 0 001.389 1.389zm28.561 0h23c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-23c-.767 0-1.389.621-1.389 1.389v3.081c0 .768.621 1.389 1.389 1.389zm28.632 0h22.965c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389H230.2c-.767 0-1.389.621-1.389 1.389v3.081a1.39 1.39 0 001.389 1.389zm28.597 0h22.965c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-22.965c-.767 0-1.389.621-1.389 1.389v3.081a1.39 1.39 0 001.389 1.389zm28.598 0h22.965c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-22.965c-.767 0-1.389.621-1.389 1.389v3.081c0 .768.622 1.389 1.389 1.389zm28.635 0h22.927c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389H316.03c-.767 0-1.389.621-1.389 1.389v3.081c0 .768.622 1.389 1.389 1.389zm28.559 0h22.965c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-22.965c-.767 0-1.389.621-1.389 1.389v3.081a1.39 1.39 0 001.389 1.389zm28.635 0h22.925c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-22.925c-.767 0-1.389.621-1.389 1.389v3.081a1.39 1.39 0 001.389 1.389zm28.596 0h22.927c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389H401.82c-.767 0-1.389.621-1.389 1.389v3.081a1.388 1.388 0 001.389 1.389zm28.597 0h22.965c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-22.965c-.767 0-1.389.621-1.389 1.389v3.081c0 .768.622 1.389 1.389 1.389zm28.596 0h22.965c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-22.965c-.767 0-1.389.621-1.389 1.389v3.081a1.39 1.39 0 001.389 1.389zm28.599 0h23c.767 0 1.389-.621 1.389-1.389v-3.081c0-.767-.621-1.389-1.389-1.389h-23c-.767 0-1.389.621-1.389 1.389v3.081a1.387 1.387 0 001.389 1.389zm22.999 114.791h-.077c-.767 0-1.389.621-1.389 1.389v3.008c0 .767-.621 1.389-1.389 1.389h-5.827a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-11.502c-.767 0-1.389.621-1.389 1.389v5.939c0 .767.621 1.389 1.389 1.389h5.79c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-2.935a1.389 1.389 0 01-1.389-1.389v-.151c0-.767.621-1.389 1.389-1.389h5.792c.767 0 1.389.621 1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h11.538c.767 0 1.389-.621 1.389-1.389v-5.939a1.39 1.39 0 00-1.39-1.389zm-5.748 0h-.079c-.767 0-1.389.621-1.389 1.389v.079c0 .767.621 1.389 1.389 1.389h.079c.767 0 1.389-.621 1.389-1.389v-.079a1.39 1.39 0 00-1.389-1.389zm5.748 11.645h-34.423c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h34.423c.767 0 1.389-.621 1.389-1.389v-.152c0-.768-.621-1.389-1.389-1.389zm-34.422-11.645h5.79c.767 0 1.389.621 1.389 1.389v5.939c0 .767-.621 1.389-1.389 1.389h-8.648c-.767 0-1.389.621-1.389 1.389v3.081c0 .767-.621 1.389-1.389 1.389h-.077a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.079c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.077a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.115c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.042a1.389 1.389 0 01-1.389-1.389v-11.797c0-.767.621-1.389 1.389-1.389h11.502c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h5.79c.767 0 1.389-.621 1.389-1.389v-.151c0-.767-.621-1.389-1.389-1.389h-2.933a1.389 1.389 0 01-1.389-1.389v-.079c0-.768.623-1.39 1.39-1.39zm-22.807 0h-.115c-.767 0-1.389.621-1.389 1.389v3.008c0 .767-.621 1.389-1.389 1.389h-5.754a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-11.502c-.767 0-1.389.621-1.389 1.389v5.939c0 .767.621 1.389 1.389 1.389h5.79c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-2.935a1.389 1.389 0 01-1.389-1.389v-.151c0-.767.621-1.389 1.389-1.389h5.792c.767 0 1.389.621 1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h11.502c.767 0 1.389-.621 1.389-1.389v-5.939a1.39 1.39 0 00-1.389-1.389zm-5.713 0h-.077c-.767 0-1.389.621-1.389 1.389v.079c0 .767.621 1.389 1.389 1.389h.077c.767 0 1.389-.621 1.389-1.389v-.079a1.39 1.39 0 00-1.389-1.389zm5.713 11.645h-34.388c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h34.388c.767 0 1.389-.621 1.389-1.389v-.152a1.39 1.39 0 00-1.389-1.389zm-34.388-11.645h5.827c.767 0 1.389.621 1.389 1.389v5.939c0 .767-.621 1.389-1.389 1.389h-8.648c-.767 0-1.389.621-1.389 1.389v3.081c0 .767-.621 1.389-1.389 1.389h-.115a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.115c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.042a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.115c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.077a1.389 1.389 0 01-1.389-1.389v-11.797c0-.767.621-1.389 1.389-1.389h11.575c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h5.754c.767 0 1.389-.621 1.389-1.389v-.151c0-.767-.621-1.389-1.389-1.389h-2.935a1.389 1.389 0 01-1.389-1.389v-.079a1.394 1.394 0 011.392-1.39zm-22.808 0h-.077c-.767 0-1.389.621-1.389 1.389v3.008c0 .767-.621 1.389-1.389 1.389h-5.792a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-11.538c-.767 0-1.389.621-1.389 1.389v5.939c0 .767.621 1.389 1.389 1.389h5.79c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-2.935a1.389 1.389 0 01-1.389-1.389v-.151c0-.767.621-1.389 1.389-1.389h5.827c.767 0 1.389.621 1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h11.502c.767 0 1.389-.621 1.389-1.389v-5.939a1.387 1.387 0 00-1.388-1.389zm-5.712 0h-.077c-.767 0-1.389.621-1.389 1.389v.079c0 .767.621 1.389 1.389 1.389h.077c.767 0 1.389-.621 1.389-1.389v-.079a1.39 1.39 0 00-1.389-1.389zm5.712 11.645h-34.425c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h34.425c.767 0 1.389-.621 1.389-1.389v-.152a1.388 1.388 0 00-1.389-1.389zm-34.424-11.645h5.827c.767 0 1.389.621 1.389 1.389v5.939c0 .767-.621 1.389-1.389 1.389h-8.646c-.767 0-1.389.621-1.389 1.389v3.081c0 .767-.621 1.389-1.389 1.389h-.079a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.115c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.115a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.042c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.077a1.389 1.389 0 01-1.389-1.389v-11.797c0-.767.621-1.389 1.389-1.389h11.54c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h5.79c.767 0 1.389-.621 1.389-1.389v-.151c0-.767-.621-1.389-1.389-1.389h-2.973a1.389 1.389 0 01-1.389-1.389v-.079a1.392 1.392 0 011.391-1.39zm-22.769 0h-.077c-.767 0-1.389.621-1.389 1.389v3.008c0 .767-.621 1.389-1.389 1.389h-5.79a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-11.54c-.767 0-1.389.621-1.389 1.389v5.939c0 .767.621 1.389 1.389 1.389h5.827c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-2.935a1.389 1.389 0 01-1.389-1.389v-.151c0-.767.621-1.389 1.389-1.389h5.79c.767 0 1.389.621 1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h11.502c.767 0 1.389-.621 1.389-1.389v-5.939c0-.767-.622-1.389-1.388-1.389zm-5.713 0h-.077c-.767 0-1.389.621-1.389 1.389v.079c0 .767.621 1.389 1.389 1.389h.077c.767 0 1.389-.621 1.389-1.389v-.079a1.39 1.39 0 00-1.389-1.389zm5.713 11.645h-34.388c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h34.388c.767 0 1.389-.621 1.389-1.389v-.152a1.39 1.39 0 00-1.389-1.389zm-34.388-11.645h5.827c.767 0 1.389.621 1.389 1.389v5.939c0 .767-.621 1.389-1.389 1.389h-8.721c-.767 0-1.389.621-1.389 1.389v3.081c0 .767-.621 1.389-1.389 1.389h-.077a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.042c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.115a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.079c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.077a1.389 1.389 0 01-1.389-1.389v-11.797c0-.767.621-1.389 1.389-1.389h11.502c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h5.827c.767 0 1.389-.621 1.389-1.389v-.151c0-.767-.621-1.389-1.389-1.389h-2.935a1.389 1.389 0 01-1.389-1.389v-.079a1.393 1.393 0 011.391-1.39zm-22.805 0h-.079c-.767 0-1.389.621-1.389 1.389v3.008c0 .767-.621 1.389-1.389 1.389h-5.79a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-11.54c-.767 0-1.389.621-1.389 1.389v5.939c0 .767.621 1.389 1.389 1.389h5.827c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-2.97a1.389 1.389 0 01-1.389-1.389v-.151c0-.767.621-1.389 1.389-1.389h5.79c.767 0 1.389.621 1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h11.54c.767 0 1.389-.621 1.389-1.389v-5.939a1.39 1.39 0 00-1.389-1.389zm-5.75 0h-.042c-.767 0-1.389.621-1.389 1.389v.079c0 .767.621 1.389 1.389 1.389h.042c.767 0 1.389-.621 1.389-1.389v-.079a1.39 1.39 0 00-1.389-1.389zm5.75 11.645h-34.425c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389H281.8c.767 0 1.389-.621 1.389-1.389v-.152a1.39 1.39 0 00-1.389-1.389zm-34.426-11.645h5.827c.767 0 1.389.621 1.389 1.389v5.939c0 .767-.621 1.389-1.389 1.389h-8.684c-.767 0-1.389.621-1.389 1.389v3.081c0 .767-.621 1.389-1.389 1.389h-.077a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.079c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.077a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.077c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.079a1.389 1.389 0 01-1.389-1.389v-11.797c0-.767.621-1.389 1.389-1.389h11.502c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h5.827c.767 0 1.389-.621 1.389-1.389v-.151c0-.767-.621-1.389-1.389-1.389h-2.97a1.389 1.389 0 01-1.389-1.389v-.079c0-.768.621-1.39 1.388-1.39zm-22.769 0h-.079c-.767 0-1.389.621-1.389 1.389v3.008c0 .767-.621 1.389-1.389 1.389h-5.79a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-11.54c-.767 0-1.389.621-1.389 1.389v5.939c0 .767.621 1.389 1.389 1.389h5.792c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-2.899a1.389 1.389 0 01-1.389-1.389v-.151c0-.767.621-1.389 1.389-1.389h5.754c.767 0 1.389.621 1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h11.54c.767 0 1.389-.621 1.389-1.389v-5.939a1.39 1.39 0 00-1.389-1.389zm-5.749 0h-.042c-.767 0-1.389.621-1.389 1.389v.079c0 .767.621 1.389 1.389 1.389h.042c.767 0 1.389-.621 1.389-1.389v-.079a1.39 1.39 0 00-1.389-1.389zm5.749 11.645H190.18c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h34.424c.767 0 1.389-.621 1.389-1.389v-.152a1.387 1.387 0 00-1.388-1.389zm-34.425-11.645h5.79c.767 0 1.389.621 1.389 1.389v5.939c0 .767-.621 1.389-1.389 1.389h-8.646c-.767 0-1.389.621-1.389 1.389v3.081c0 .767-.621 1.389-1.389 1.389h-.079a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.077c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.079a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.077c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.079a1.389 1.389 0 01-1.389-1.389v-11.797c0-.767.621-1.389 1.389-1.389h11.505c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h5.826c.767 0 1.389-.621 1.389-1.389v-.151c0-.767-.621-1.389-1.389-1.389h-2.97a1.389 1.389 0 01-1.389-1.389v-.079a1.387 1.387 0 011.387-1.39zm-22.769 0h-.079c-.767 0-1.389.621-1.389 1.389v3.008c0 .767-.621 1.389-1.389 1.389h-5.826a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389h-11.505c-.767 0-1.389.621-1.389 1.389v5.939c0 .767.621 1.389 1.389 1.389h5.792c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-2.973a1.389 1.389 0 01-1.389-1.389v-.151c0-.767.621-1.389 1.389-1.389h5.865c.767 0 1.389.621 1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h11.502c.767 0 1.389-.621 1.389-1.389v-5.939a1.387 1.387 0 00-1.387-1.389zm-5.713 0h-.115c-.767 0-1.389.621-1.389 1.389v.079c0 .767.621 1.389 1.389 1.389h.115c.767 0 1.389-.621 1.389-1.389v-.079a1.39 1.39 0 00-1.389-1.389zm5.713 11.645h-34.424c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h34.424c.767 0 1.389-.621 1.389-1.389v-.152a1.39 1.39 0 00-1.389-1.389zm-34.426-11.645h5.79c.767 0 1.389.621 1.389 1.389v5.939c0 .767-.621 1.389-1.389 1.389h-8.646c-.767 0-1.389.621-1.389 1.389v3.081c0 .767-.621 1.389-1.389 1.389h-.079a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.077c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.079a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.115c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.041a1.389 1.389 0 01-1.389-1.389v-11.797c0-.767.621-1.389 1.389-1.389h11.502c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h5.754c.767 0 1.389-.621 1.389-1.389v-.151c0-.767-.621-1.389-1.389-1.389h-2.899a1.389 1.389 0 01-1.389-1.389v-.079a1.393 1.393 0 011.391-1.39zm-22.805 0h-.042c-.767 0-1.389.621-1.389 1.389v3.008c0 .767-.621 1.389-1.389 1.389h-5.792a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389H87.254c-.767 0-1.389.621-1.389 1.389v5.939c0 .767.621 1.389 1.389 1.389h5.752c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-2.933a1.389 1.389 0 01-1.389-1.389v-.151c0-.767.621-1.389 1.389-1.389H95.9c.767 0 1.389.621 1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h11.505c.767 0 1.389-.621 1.389-1.389v-5.939a1.393 1.393 0 00-1.392-1.389zm-5.712 0h-.079c-.767 0-1.389.621-1.389 1.389v.079c0 .767.621 1.389 1.389 1.389h.079c.767 0 1.389-.621 1.389-1.389v-.079a1.39 1.39 0 00-1.389-1.389zm5.712 11.645H75.719c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h34.462c.767 0 1.389-.621 1.389-1.389v-.152a1.39 1.39 0 00-1.39-1.389zm-34.461-11.645h5.865c.767 0 1.389.621 1.389 1.389v5.939c0 .767-.621 1.389-1.389 1.389h-8.648c-.767 0-1.389.621-1.389 1.389v3.081c0 .767-.621 1.389-1.389 1.389h-.115a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.077c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.042a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.115c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.079a1.389 1.389 0 01-1.389-1.389v-11.797c0-.767.621-1.389 1.389-1.389h11.54c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h5.79c.767 0 1.389-.621 1.389-1.389v-.151c0-.767-.621-1.389-1.389-1.389h-3.005a1.389 1.389 0 01-1.389-1.389v-.079a1.386 1.386 0 011.387-1.39zm-22.733 0h-.079c-.767 0-1.389.621-1.389 1.389v3.008c0 .767-.621 1.389-1.389 1.389h-5.79a1.389 1.389 0 01-1.389-1.389v-3.008c0-.767-.621-1.389-1.389-1.389H30.022c-.767 0-1.389.621-1.389 1.389v5.939c0 .767.621 1.389 1.389 1.389h5.754c.767 0 1.389-.621 1.389-1.389v-.152c0-.767-.621-1.389-1.389-1.389h-2.935a1.389 1.389 0 01-1.389-1.389v-.151c0-.767.621-1.389 1.389-1.389h5.865c.767 0 1.389.621 1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h11.502c.767 0 1.389-.621 1.389-1.389v-5.939a1.39 1.39 0 00-1.389-1.389zm-5.712 0h-.079c-.767 0-1.389.621-1.389 1.389v.079c0 .767.621 1.389 1.389 1.389h.079c.767 0 1.389-.621 1.389-1.389v-.079a1.39 1.39 0 00-1.389-1.389zm5.712 11.645H18.599c-.767 0-1.389.621-1.389 1.389v.152c0 .767.621 1.389 1.389 1.389h34.388c.767 0 1.389-.621 1.389-1.389v-.152a1.39 1.39 0 00-1.39-1.389zm-34.387-11.645h5.79c.767 0 1.389.621 1.389 1.389v5.939c0 .767-.621 1.389-1.389 1.389H15.67c-.767 0-1.389.621-1.389 1.389v3.081c0 .767-.621 1.389-1.389 1.389h-.004a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.154c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.003a1.389 1.389 0 01-1.389-1.389v-8.94c0-.767-.621-1.389-1.389-1.389h-.08c-.767 0-1.389.621-1.389 1.389v8.94c0 .767-.621 1.389-1.389 1.389h-.15A1.389 1.389 0 010 243.015v-11.797c0-.767.621-1.389 1.389-1.389h11.502c.767 0 1.389.621 1.389 1.389v3.008c0 .767.621 1.389 1.389 1.389h5.864c.767 0 1.389-.621 1.389-1.389v-.151c0-.767-.621-1.389-1.389-1.389H18.6a1.389 1.389 0 01-1.389-1.389v-.079a1.388 1.388 0 011.388-1.39zm492.012-8.86h-22.963c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.963c.767 0 1.389-.621 1.389-1.389v-3.081c0-.768-.621-1.389-1.389-1.389zm-28.633 0h-22.927c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.927c.767 0 1.389-.621 1.389-1.389v-3.081c0-.768-.622-1.389-1.389-1.389zm-28.596 0h-22.927c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.927c.767 0 1.389-.621 1.389-1.389v-3.081a1.39 1.39 0 00-1.389-1.389zm-28.561 0h-23c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h23c.767 0 1.389-.621 1.389-1.389v-3.081c0-.768-.621-1.389-1.389-1.389zm-28.635 0h-22.963c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.963c.767 0 1.389-.621 1.389-1.389v-3.081a1.388 1.388 0 00-1.389-1.389zm-28.596 0h-22.963c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.963c.767 0 1.389-.621 1.389-1.389v-3.081a1.39 1.39 0 00-1.389-1.389zm-28.597 0H316.03c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.963c.767 0 1.389-.621 1.389-1.389v-3.081a1.39 1.39 0 00-1.389-1.389zm-28.561 0h-23c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h23c.767 0 1.389-.621 1.389-1.389v-3.081c0-.768-.621-1.389-1.389-1.389zm-28.632 0h-22.965c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389H281.8c.767 0 1.389-.621 1.389-1.389v-3.081a1.39 1.39 0 00-1.389-1.389zm-28.597 0h-22.965c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.965c.767 0 1.389-.621 1.389-1.389v-3.081a1.39 1.39 0 00-1.389-1.389zm-28.598 0H201.64c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.965c.767 0 1.389-.621 1.389-1.389v-3.081c0-.768-.622-1.389-1.389-1.389zm-28.635 0h-22.927c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.927c.767 0 1.389-.621 1.389-1.389v-3.081c0-.768-.622-1.389-1.389-1.389zm-28.559 0h-22.965c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.965c.767 0 1.389-.621 1.389-1.389v-3.081a1.39 1.39 0 00-1.389-1.389zm-28.635 0h-22.925c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.925c.767 0 1.389-.621 1.389-1.389v-3.081a1.39 1.39 0 00-1.389-1.389zm-28.596 0H87.254c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.927c.767 0 1.389-.621 1.389-1.389v-3.081a1.39 1.39 0 00-1.39-1.389zm-28.597 0H58.618c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.965c.767 0 1.389-.621 1.389-1.389v-3.081c0-.768-.622-1.389-1.389-1.389zm-28.597 0H30.022c-.767 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h22.965c.767 0 1.389-.621 1.389-1.389v-3.081a1.39 1.39 0 00-1.39-1.389zm-28.598 0H1.389c-.768 0-1.389.621-1.389 1.389v3.081c0 .767.621 1.389 1.389 1.389h23c.767 0 1.389-.621 1.389-1.389v-3.081c0-.768-.622-1.389-1.39-1.389z"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M248.698 126.276a7.55 7.55 0 007.334-2.026c2.898 2.934 7.647 3.004 10.651.141 1.956-1.886 2.759-4.75 2.06-7.334-2.548 4.121-7.925 5.448-12.046 2.863-.21-.141-.489-.28-.663-.42-3.875 2.863-9.357 2.095-12.291-1.745-.106-.211-.314-.49-.455-.698-1.049 4.053 1.395 8.241 5.41 9.219zm16.268 81.581c9.386-5.153 17.219-13.272 21.514-23.966 7.314-18.33 2.708-39.02-11.283-52.44-.481-.461-1.212.156-.863.724 13.799 22.503 8.363 52.074-12.99 68.278l1.021-65.367a2.894 2.894 0 00-1.071-2.291l-3.473-2.807a2.887 2.887 0 00-3.642.01l-3.422 2.797a2.885 2.885 0 00-1.059 2.28l.992 65.413c-21.356-16.196-26.804-45.794-13.026-68.312.348-.568-.383-1.185-.863-.723-13.964 13.42-18.599 34.109-11.286 52.438 4.295 10.692 12.127 18.812 21.516 23.965-5.975 2.048-12.255 3.134-18.605 2.952-.671-.019-.806.925-.163 1.119 8.068 2.449 16.366 2.617 24.168.868l3.063 5.943a.57.57 0 001.012.001l3.084-5.941c7.802 1.746 16.103 1.575 24.177-.874.642-.194.508-1.138-.163-1.119-6.358.185-12.653-.901-18.638-2.948z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M303.171 147.088a40.514 40.514 0 00-22.279-19.111c-.595-.209-1.059.577-.573.978 20.966 17.271 25.169 48.032 8.956 70.302-.839 1.118-1.747 2.305-2.62 3.281 19.905-10.685 27.272-35.546 16.516-55.45zm-80.416 52.169c-16.214-22.27-12.044-53.03 8.918-70.301.487-.402.022-1.186-.573-.978-9.485 3.334-17.408 10.135-22.243 19.11-10.824 19.904-3.386 44.765 16.552 55.449-.942-.976-1.85-2.162-2.654-3.28z"
  }))));
}

function SvgIs(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M512 123.862H229.517V.276h-88.276v123.586H0v88.276h141.241v123.586h88.276V212.138H512z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M512 141.517H211.862V.276h-52.965v141.241H0v52.966h158.897v141.241h52.965V194.483H512z"
  })));
}

function SvgIt(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h161.839v335.449z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.828 8.828 0 01-8.828 8.827z",
    fill: "#FF4B55"
  })));
}

function SvgJe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 9.103a8.829 8.829 0 00-8.828-8.828h-23.389L256 146.893 32.216.276H8.828A8.828 8.828 0 000 9.103v12.279L223.784 168 0 314.617v12.279a8.829 8.829 0 008.828 8.828h23.389L256 189.107l223.784 146.617h23.389a8.829 8.829 0 008.828-8.828v-12.279L288.216 168 512 21.383V9.103z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M282.557 38.86s-2.795-4.193-6.988-1.398c0 0 4.849 3.495 1.572 7.164-3.467 3.883-8.233.085-8.532-2.698a2.455 2.455 0 002.276-2.444 2.462 2.462 0 10-4.926 0c0 1.062.676 1.959 1.618 2.305-.601 2.382-6.849 4.205-8.65.26-2.028-4.441 1.18-8.212 5.504-7.688 0 0-.83-5.503-6.682-3.189 0 0 2.446-6.29-1.747-10.483-4.193 4.193-1.747 10.483-1.747 10.483-5.853-2.315-6.682 3.189-6.682 3.189 4.324-.524 7.531 3.245 5.504 7.688-1.801 3.945-8.049 2.122-8.65-.26a2.455 2.455 0 001.618-2.305 2.462 2.462 0 10-4.926 0 2.455 2.455 0 002.276 2.444c-.299 2.783-5.066 6.581-8.532 2.698-3.276-3.669 1.572-7.164 1.572-7.164-4.193-2.795-6.988 1.398-6.988 1.398-1.398-5.591-6.988-4.193-6.988-4.193 5.591 6.988 9.702 21.404 9.702 21.404h47.687s4.11-14.415 9.702-21.404c-.005 0-5.596-1.398-6.993 4.193z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M279.843 56.071A71.719 71.719 0 00256 51.993a71.719 71.719 0 00-23.843 4.078C219.65 110.87 256 125.517 256 125.517s36.35-14.647 23.843-69.446z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#82AFFF"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M238.561 75.567s-1.146-.216-2.143.582c0 0-.349-1.378 1.444-1.71 1.795-.334.699 1.128.699 1.128zm-1.38-1.743s-.908-.732-2.163-.5c0 0 .344-1.379 2.082-.824 1.738.554.081 1.324.081 1.324z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M237.932 74.538s-1.252-.216-2.342.582c0 0-.381-1.378 1.579-1.71 1.96-.333.763 1.128.763 1.128zm21.691 3.661s-1.165.055-1.95 1.062c0 0-.658-1.26 1.01-1.998 1.667-.739.94.936.94.936zm-1.709-1.502s-1.053-.502-2.22.014c0 0 .015-1.422 1.834-1.284 1.819.138.386 1.27.386 1.27z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.773 77.343s-1.269.079-2.144 1.107c0 0-.69-1.252 1.141-2.029 1.831-.777 1.003.922 1.003.922zm14.158 1.576s-.436 0-1.217.735c0 0-.559-1.25 1.087-1.864 1.648-.614.13 1.129.13 1.129zm-.836-1.717s-.983-.544-2.135-.116c0 0 .097-1.366 1.838-1.129 1.741.239.297 1.245.297 1.245z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M272.883 77.873s-1.225.003-2.125.94c0 0-.59-1.245 1.215-1.886 1.805-.64.91.946.91.946zm-36.239-10.954s-1.053-.7-2.387-.329c0 0 .238-1.519 2.17-1.091 1.933.428.217 1.42.217 1.42zm-.087-2.622s-.68-1.069-2.131-1.163c0 0 .939-1.441 2.588-.335 1.65 1.104-.457 1.498-.457 1.498z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M236.563 65.689s-1.11-.82-2.577-.518c0 0 .33-1.603 2.408-1.011 2.079.594.169 1.529.169 1.529z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M269.568 70.485c1.844.05 4.035-.681 4.384-2.591.401-2.195-1.479-3.305-4.002-3.206-1.842.073-6.507 1.131-9.848 1.013-3.305-.116-3.395-3.386 1.611-3.039 7.424.515 8.603-.448 8.603-.448-3.986.747-5.58-.648-9.815-.648-4.235 0-5.048 2.933-3.338 4.534 1.916 1.794 8.868.598 10.712.249 1.844-.349 4.182-.367 4.367.93.165 1.163-2.923 1.1-5.111 1.016-3.482-.134-8.55.811-13.058 1.044-3.756.194-4.279-.865-5.134-1.95.2-.361.314-.764.314-1.19 0-.215-.034-.423-.088-.625.284-.311.582-.809.718-1.618 0 0-.961-.169-1.687.198a3.56 3.56 0 00-2.206-.746c-.854 0-1.624.287-2.206.746-.726-.366-1.687-.198-1.687-.198.137.81.435 1.306.718 1.618a2.394 2.394 0 00-.088.625c0 .782.376 1.489.983 1.996.292.245.51.567.584.941l.105.531a.78.78 0 00.391.526c-3.096-.319-4.562-2.265-5.314-3.347-.849-1.22-1.378-3.919-2.674-4.218l-.764 4.07s1.637 3.786 4.683 5.331c3.438 1.743 4.086 1.794 5.215 2.292.132.598-2.126.963-4.418.499-1.6-.324-3.756-2.648-4.984-2.482l1.431 3.179c3.886 2.458 7.283 2.51 10.197 1.993 2.059-.365 2.842-2.042 2.978-2.76.841-.156 1.757-.33 4.595-1.027 1.188-.292 2.557-.446 3.919-.51.384.876 1.262 1.998 4.285 2.104 0 0 .73 1.163-1.76.93-2.492-.233-3.13-1.009-4.593-.843l1.304 3.102s3.189-1.096 7.108-.697c0 0 .73.2 1.163-.431.431-.631.233-.996-.167-1.561-.224-.318-.354-1.348-.424-2.191 1.436.361 5.841-.533 7.433-.399 1.594.132 1.827 1.993 1.461 2.624-.365.631-3.703.092-3.703.092l1.121 3.064s.337-.162 1.187-.963c.692-.651 3.521-.431 3.521-.93v-5.676a.461.461 0 00-.502-.456c-6.242.544-7.52-.497-7.52-.497z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M244.679 68.468c.094.183.163.382.201.593l.094.531c.033.186.18.321.35.321h1.448c.17 0 .317-.135.35-.321l.094-.531a2.13 2.13 0 01.201-.593h-2.738z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#82AFFF"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M246.047 69.517c-.334 0-.595.041-.559.505l.135 1.985c.023.303.206.534.424.534.217 0 .402-.231.424-.534l.135-1.985c.035-.464-.226-.505-.559-.505zm-4.311 25.654s-.935-.177-1.748.474c0 0-.285-1.124 1.178-1.396 1.465-.269.57.922.57.922zm-1.126-1.421s-.74-.597-1.764-.408c0 0 .28-1.126 1.698-.673 1.418.452.066 1.081.066 1.081z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M241.224 94.332s-1.022-.177-1.91.474c0 0-.311-1.124 1.288-1.396 1.598-.27.622.922.622.922zm17.692 2.987s-.95.045-1.59.865c0 0-.537-1.028.824-1.63 1.362-.601.766.765.766.765zm-1.393-1.225s-.858-.409-1.811.011c0 0 .012-1.16 1.496-1.047 1.484.112.315 1.036.315 1.036z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.222 96.62s-1.035.065-1.749.903c0 0-.563-1.022.93-1.655 1.495-.634.819.752.819.752zm11.549 1.285s-.355 0-.993.599c0 0-.457-1.02.887-1.519 1.344-.501.106.92.106.92zm-.681-1.4s-.802-.444-1.742-.094c0 0 .079-1.114 1.5-.92 1.42.193.242 1.014.242 1.014z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M269.732 97.052s-.999.002-1.734.767c0 0-.482-1.015.991-1.538 1.473-.523.743.771.743.771zm-29.56-8.935s-.858-.57-1.947-.268c0 0 .194-1.24 1.771-.89 1.576.35.176 1.158.176 1.158zm-.07-2.139s-.555-.873-1.738-.949c0 0 .766-1.175 2.111-.274 1.345.902-.373 1.223-.373 1.223z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M240.107 87.114s-.906-.669-2.102-.422c0 0 .269-1.308 1.964-.824 1.696.483.138 1.246.138 1.246z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M267.028 91.027c1.504.041 3.292-.555 3.576-2.113.327-1.79-1.206-2.696-3.265-2.614-1.503.06-5.308.922-8.033.826-2.696-.095-2.77-2.762 1.314-2.479 6.056.42 7.017-.365 7.017-.365-3.251.609-4.552-.529-8.007-.529s-4.117 2.392-2.723 3.699c1.563 1.463 7.234.488 8.738.203 1.504-.285 3.412-.3 3.563.759.136.948-2.385.897-4.169.829-2.841-.109-6.974.662-10.652.851-3.064.158-3.49-.706-4.188-1.59.163-.295.256-.622.256-.97 0-.175-.029-.344-.073-.509.232-.254.474-.66.586-1.32 0 0-.785-.138-1.376.161a2.903 2.903 0 00-1.8-.608c-.697 0-1.325.234-1.8.608-.591-.299-1.376-.161-1.376-.161.111.66.354 1.066.586 1.32a1.956 1.956 0 00-.073.509c0 .638.308 1.215.802 1.628.238.2.416.462.476.768l.086.434a.64.64 0 00.319.429c-2.526-.26-3.721-1.847-4.334-2.73-.692-.995-1.124-3.197-2.182-3.441l-.623 3.319s1.336 3.089 3.82 4.349c2.804 1.422 3.332 1.463 4.254 1.869.108.488-1.734.786-3.604.406-1.305-.265-3.063-2.159-4.066-2.025l1.167 2.593c3.17 2.005 5.941 2.047 8.318 1.625 1.679-.298 2.318-1.665 2.429-2.251.685-.127 1.432-.269 3.748-.838.97-.238 2.086-.364 3.198-.416.313.715 1.03 1.631 3.495 1.716 0 0 .596.948-1.436.758-2.033-.19-2.553-.823-3.746-.687l1.064 2.53s2.601-.894 5.799-.569c0 0 .596.162.948-.352.352-.515.19-.813-.136-1.273-.183-.259-.288-1.1-.346-1.788 1.171.295 4.765-.435 6.062-.327 1.301.108 1.49 1.625 1.192 2.141-.298.515-3.021.075-3.021.075l.915 2.499s.275-.132.969-.786c.564-.531 2.872-.352 2.872-.758v-4.63a.376.376 0 00-.409-.372c-5.088.445-6.131-.403-6.131-.403z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M246.727 89.38a1.7 1.7 0 01.163.483l.076.434c.026.152.147.262.285.262h1.181c.138 0 .258-.11.285-.262l.076-.434c.031-.171.087-.334.163-.483h-2.229z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#82AFFF"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M247.842 90.237c-.273 0-.484.033-.456.413l.11 1.619c.019.248.168.436.346.436.179 0 .328-.188.346-.436l.11-1.619c.029-.38-.183-.413-.456-.413zm-2.575 20.516s-.7-.132-1.309.355c0 0-.213-.842.883-1.045 1.096-.203.426.69.426.69zm-.843-1.065s-.555-.447-1.321-.306c0 0 .21-.843 1.271-.504 1.062.34.05.81.05.81z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M244.883 110.124s-.765-.132-1.43.355c0 0-.233-.842.964-1.045 1.197-.203.466.69.466.69zm13.247 2.237s-.712.033-1.191.648c0 0-.402-.77.617-1.22 1.019-.451.574.572.574.572zm-1.043-.917s-.643-.307-1.356.009c0 0 .01-.868 1.12-.785 1.112.084.236.776.236.776z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M257.611 111.838s-.775.049-1.309.676c0 0-.422-.765.696-1.239 1.118-.474.613.563.613.563zm8.648.962s-.266 0-.744.449c0 0-.342-.764.664-1.138 1.006-.375.08.689.08.689zm-.511-1.048s-.6-.332-1.304-.071c0 0 .06-.834 1.123-.69 1.064.145.181.761.181.761z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M266.229 112.161s-.748.002-1.299.575c0 0-.361-.76.742-1.152 1.103-.392.557.577.557.577zm-22.133-6.689s-.643-.427-1.458-.201c0 0 .146-.928 1.326-.666 1.18.261.132.867.132.867zm-.053-1.602s-.415-.653-1.301-.711c0 0 .574-.879 1.58-.205 1.008.675-.279.916-.279.916z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M244.046 104.721s-.679-.501-1.574-.316c0 0 .201-.979 1.471-.617 1.27.361.103.933.103.933z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M264.204 107.649c1.126.031 2.465-.416 2.678-1.582.245-1.341-.903-2.018-2.444-1.958-1.126.044-3.974.691-6.015.619-2.018-.071-2.073-2.068.984-1.856 4.534.314 5.255-.274 5.255-.274-2.434.457-3.409-.396-5.995-.396-2.586 0-3.083 1.791-2.039 2.77 1.17 1.096 5.417.365 6.542.152 1.126-.213 2.554-.224 2.668.568.102.71-1.785.672-3.122.62-2.127-.082-5.221.495-7.976.638-2.294.118-2.614-.529-3.136-1.191.122-.221.192-.466.192-.726 0-.131-.021-.258-.054-.381.173-.191.355-.494.439-.989 0 0-.587-.103-1.031.12a2.172 2.172 0 00-1.347-.456c-.522 0-.992.175-1.347.456-.444-.224-1.031-.12-1.031-.12.084.494.266.798.439.989a1.455 1.455 0 00-.054.381c0 .478.231.909.6 1.219.179.149.311.346.356.575l.064.324a.48.48 0 00.238.321c-1.891-.195-2.786-1.384-3.245-2.044-.519-.745-.842-2.393-1.633-2.577l-.467 2.485s1.001 2.313 2.86 3.256c2.1 1.065 2.495 1.096 3.185 1.4.082.365-1.299.588-2.698.305-.978-.199-2.294-1.618-3.044-1.516l.874 1.942c2.374 1.501 4.448 1.533 6.228 1.217 1.258-.223 1.736-1.247 1.818-1.685.513-.095 1.073-.202 2.806-.628.726-.179 1.561-.273 2.394-.311.235.535.771 1.22 2.616 1.284 0 0 .446.71-1.075.568-1.522-.142-1.912-.616-2.805-.515l.797 1.895s1.948-.67 4.341-.426c0 0 .446.121.71-.264.264-.385.142-.609-.102-.953-.137-.194-.216-.824-.259-1.338.877.221 3.567-.326 4.54-.244.973.082 1.116 1.217.893 1.602-.223.385-2.262.056-2.262.056l.684 1.871s.205-.099.725-.588c.423-.397 2.151-.264 2.151-.568v-3.467a.281.281 0 00-.307-.278c-3.809.335-4.589-.302-4.589-.302z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M249.003 106.418c.057.113.099.234.122.362l.057.324c.02.114.11.196.213.196h.884c.104 0 .193-.083.213-.196l.057-.324a1.31 1.31 0 01.122-.362h-1.668z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M249.838 107.059c-.204 0-.363.024-.342.309l.083 1.212c.014.185.126.327.259.327.134 0 .245-.141.259-.327l.083-1.212c.021-.285-.138-.309-.342-.309z",
    fill: "#82AFFF"
  })));
}

function SvgJm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H8.828A8.828 8.828 0 000 9.103v317.793a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828V9.103a8.83 8.83 0 00-8.829-8.827z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 9.103a8.829 8.829 0 00-8.828-8.828h-39.501L256 136.337 48.329.276H8.828A8.828 8.828 0 000 9.103v22.836L207.671 168 0 304.061v22.836a8.829 8.829 0 008.828 8.828h39.501L256 199.663l207.671 136.061h39.501a8.829 8.829 0 008.828-8.828V304.06L304.329 168 512 31.939V9.103z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 31.939v272.122L304.329 168zM0 304.061V31.939L207.671 168z",
    fill: "#464655"
  })));
}

function SvgJo(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59l299.112-162.017c2.838-1.537 2.838-5.61 0-7.147L3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M95.399 145.164l5.247 11.381 12.169-2.994a.917.917 0 011.038 1.302l-5.626 11.198 9.928 7.648a.916.916 0 01-.371 1.623l-12.263 2.583.211 12.531a.917.917 0 01-1.5.723l-9.665-7.977-9.665 7.977a.917.917 0 01-1.5-.723l.211-12.531-12.263-2.583a.917.917 0 01-.371-1.623l9.928-7.648-5.626-11.198a.917.917 0 011.038-1.302l12.169 2.994 5.247-11.381c.326-.71 1.336-.71 1.664 0z",
    fill: "#F5F5F5"
  })));
}

function SvgJp(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FF4B55",
    cx: 256,
    cy: 168,
    r: 97.103
  })));
}

function SvgKe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C8414B",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 106.207h512v17.655H0zm0 105.931h512v17.655H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M303.268 93.618c7.108-14.657 14.525-48.61 14.525-48.61s-22.072 26.845-29.182 41.501c-1.49 3.072-.858 6.605 1.294 8.995l-80.967 166.934 5.496 2.666L295.401 98.17c3.212.211 6.378-1.48 7.867-4.552z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M208.732 93.618c-7.108-14.657-14.525-48.61-14.525-48.61s22.072 26.845 29.182 41.501c1.49 3.072.858 6.605-1.294 8.995l80.967 166.934-5.496 2.666L216.599 98.17c-3.212.211-6.378-1.48-7.867-4.552z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M300.138 168c0 48.754-36.012 88.276-44.138 88.276-8.126 0-44.138-39.522-44.138-88.276S247.874 79.724 256 79.724c8.126 0 44.138 39.522 44.138 88.276z",
    fill: "#C8414B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M291.31 210.591c5.199-12.631 8.828-27.14 8.828-42.591s-3.628-29.959-8.828-42.591c-5.199 12.631-8.828 27.14-8.828 42.591s3.629 29.959 8.828 42.591zm-70.62-85.182c-5.199 12.631-8.828 27.14-8.828 42.591s3.628 29.959 8.828 42.591c5.199-12.631 8.828-27.14 8.828-42.591s-3.629-29.959-8.828-42.591z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(247 79)",
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: 9,
    cy: 89,
    rx: 8.828,
    ry: 13.241
  }), /*#__PURE__*/react.createElement("path", {
    d: "M10.324.724v75.034C12.731 70.748 17 55.943 17 38.241 17 20.538 12.731 5.734 10.324.724zm-2.648 0C5.269 5.734 1 20.538 1 38.241c0 17.703 4.269 32.508 6.676 37.517V.724zm2.648 101.517v75.034C12.731 172.265 17 157.46 17 139.758c0-17.703-4.269-32.507-6.676-37.517zm-2.648 0C5.269 107.251 1 122.055 1 139.758c0 17.703 4.269 32.508 6.676 37.517v-75.034z"
  }))));
}

function SvgKg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M349.373 194.327s-17.586-2.932-30.613-13.735c-3.843-3.187-9.42-5.622-14.852-7.422 4.367-.194 8.999-.072 13.376.813 18.132 3.666 35.713-5.135 35.713-5.135s-17.739 1.79-33.145-5.213c-4.167-1.894-9.571-2.786-14.846-3.162 3.794-1.091 7.82-1.945 11.795-2.165 18.471-1.024 33.265-13.973 33.265-13.973s-16.714 6.204-33.388 3.311c-4.856-.843-10.817-.212-16.364.903 3.649-2.292 7.667-4.434 11.836-5.813 17.562-5.811 28.462-22.174 28.462-22.174s-14.515 10.353-31.366 11.914c-5.004.463-10.703 2.71-15.846 5.297 2.967-3.253 6.354-6.473 10.104-8.961 15.413-10.229 21.622-28.884 21.622-28.884s-11.277 13.809-27.124 19.751c-4.32 1.62-8.797 4.864-12.818 8.36 1.922-3.494 4.181-6.989 6.865-9.991 12.329-13.791 13.622-33.409 13.622-33.409s-7.423 16.21-21.253 25.963c-4.032 2.844-7.8 7.512-10.934 12.23.958-4.206 2.281-8.568 4.254-12.499 8.299-16.533 4.424-35.808 4.424-35.808s-2.932 17.586-13.735 30.613c-3.187 3.843-5.622 9.42-7.422 14.854-.194-4.367-.072-8.999.813-13.376 3.666-18.132-5.135-35.713-5.135-35.713s1.79 17.739-5.214 33.145c-1.894 4.167-2.786 9.571-3.162 14.846-1.091-3.794-1.945-7.82-2.165-11.795-1.024-18.471-13.973-33.265-13.973-33.265s6.204 16.714 3.311 33.388c-.843 4.856-.212 10.817.903 16.365-2.292-3.649-4.434-7.667-5.813-11.837-5.811-17.562-22.174-28.462-22.174-28.462s10.353 14.515 11.914 31.366c.463 5.004 2.71 10.705 5.298 15.847-3.253-2.967-6.473-6.354-8.962-10.105-10.229-15.413-28.884-21.621-28.884-21.621s13.809 11.277 19.751 27.124c1.62 4.32 4.864 8.798 8.36 12.818-3.494-1.922-6.989-4.181-9.991-6.865-13.791-12.329-33.409-13.622-33.409-13.622s16.21 7.423 25.963 21.254c2.842 4.031 7.511 7.8 12.227 10.934-4.205-.958-8.567-2.281-12.497-4.254-16.533-8.299-35.808-4.424-35.808-4.424s17.586 2.932 30.613 13.735c3.843 3.187 9.42 5.622 14.854 7.422-4.367.194-8.999.072-13.376-.813-18.132-3.666-35.713 5.135-35.713 5.135s17.739-1.79 33.145 5.214c4.167 1.894 9.571 2.786 14.846 3.162-3.794 1.091-7.82 1.945-11.795 2.165-18.471 1.024-33.265 13.973-33.265 13.973s16.714-6.204 33.388-3.311c4.856.843 10.817.212 16.365-.903-3.649 2.292-7.667 4.434-11.837 5.813-17.562 5.811-28.462 22.174-28.462 22.174s14.515-10.353 31.366-11.914c5.004-.463 10.705-2.71 15.847-5.298-2.967 3.253-6.354 6.473-10.105 8.962-15.413 10.229-21.622 28.884-21.622 28.884s11.277-13.809 27.124-19.751c4.319-1.62 8.797-4.864 12.817-8.36-1.921 3.493-4.181 6.989-6.863 9.99-12.329 13.791-13.622 33.409-13.622 33.409s7.423-16.21 21.254-25.963c4.032-2.844 7.8-7.512 10.934-12.228-.958 4.206-2.281 8.567-4.254 12.498-8.299 16.533-4.424 35.808-4.424 35.808s2.932-17.586 13.735-30.613c3.187-3.843 5.622-9.42 7.422-14.854.194 4.369.072 9-.813 13.377-3.666 18.132 5.135 35.712 5.135 35.712s-1.79-17.738 5.214-33.144c1.894-4.167 2.786-9.572 3.162-14.846 1.091 3.794 1.945 7.82 2.165 11.795 1.024 18.471 13.973 33.265 13.973 33.265s-6.204-16.715-3.311-33.388c.843-4.856.212-10.817-.903-16.364 2.292 3.649 4.434 7.666 5.813 11.836 5.811 17.562 22.174 28.462 22.174 28.462s-10.353-14.515-11.914-31.367c-.463-5.004-2.71-10.705-5.298-15.847 3.253 2.967 6.473 6.354 8.962 10.105 10.229 15.413 28.884 21.622 28.884 21.622s-13.809-11.277-19.751-27.124c-1.62-4.319-4.864-8.797-8.36-12.817 3.493 1.921 6.988 4.181 9.99 6.863 13.791 12.329 33.409 13.622 33.409 13.622s-16.21-7.423-25.963-21.254c-2.844-4.032-7.512-7.801-12.23-10.934 4.206.958 8.567 2.281 12.498 4.254 16.532 8.298 35.807 4.423 35.807 4.423zm-93.394 18.497c-24.753 0-44.819-20.066-44.819-44.819 0-24.753 20.066-44.819 44.819-44.819 24.753 0 44.819 20.066 44.819 44.819 0 24.753-20.066 44.819-44.819 44.819z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M241.769 149.867c.956-.746 1.907-1.495 2.873-2.161-6.35-2.888-12.066-4.275-16.076-4.896-.638.694-1.214 1.439-1.799 2.179 3.938.765 9.229 2.225 15.002 4.878zm-11.275-9.035c4.309.487 10.547 1.77 17.468 4.747a60.092 60.092 0 013.47-1.895c-7.473-3.068-14.219-4.211-18.862-4.564-.698.566-1.422 1.098-2.076 1.712zm22.438 20.774a55.126 55.126 0 00-2.712-2.398c-8.391 7.986-15.732 19.633-19.046 36.532 1.205 1.078 2.401 2.168 3.738 3.085 2.435-17.187 9.572-29.05 18.02-37.219zm-3.254-7.423c.951-.765 1.901-1.533 2.865-2.217-1.174-.749-2.344-1.407-3.51-2.048-.999.684-1.999 1.346-2.986 2.115a63.966 63.966 0 013.631 2.15zm23.188-2.164c7.194 6.319 13.77 15.217 18.449 27.553 1.201-3.663 2.013-7.503 2.013-11.567a37.169 37.169 0 00-6.354-20.835c-3.71.738-8.691 2.18-14.108 4.849zm-19.664 4.565c.937.696 1.855 1.482 2.777 2.255.921-.774 1.839-1.559 2.777-2.255-.922-.768-1.842-1.524-2.777-2.214-.935.691-1.854 1.446-2.777 2.214zm2.777-10.815a62.75 62.75 0 00-3.527 1.964 60.658 60.658 0 013.527 2.004 62.193 62.193 0 013.527-2.004 62.124 62.124 0 00-3.527-1.964zm-28.875 45.657c3.951-16.135 11.399-27.189 19.734-34.793a55.57 55.57 0 00-3.49-2.276c-8.021 7.053-15.279 17.245-19.751 31.929a37.037 37.037 0 003.507 5.14zm11.988-39.407c-5.417-2.67-10.398-4.11-14.109-4.85a37.169 37.169 0 00-6.354 20.835c0 4.064.812 7.904 2.013 11.567 4.68-12.336 11.255-21.233 18.45-27.552zm16.887-10.441c7.946-3.283 15.276-4.449 20.489-4.757-5.887-3.876-12.914-6.165-20.489-6.165-7.575 0-14.602 2.29-20.489 6.165 5.213.308 12.543 1.473 20.489 4.757zm0 23.187c-7.449 8.255-13.597 20.107-15.592 37.081 4.758 2.198 10.007 3.508 15.592 3.508 5.586 0 10.834-1.31 15.592-3.508-1.995-16.973-8.143-28.826-15.592-37.081zm12.631-10.408a57.085 57.085 0 00-3.49 2.276c8.334 7.603 15.783 18.658 19.734 34.793a37.096 37.096 0 003.507-5.14c-4.471-14.683-11.73-24.876-19.751-31.929zm12.173 41.383c-3.314-16.899-10.655-28.545-19.046-36.532a54.67 54.67 0 00-2.712 2.398c8.448 8.169 15.585 20.032 18.019 37.218 1.338-.916 2.534-2.006 3.739-3.084zm-20.257-52.057a60.37 60.37 0 013.47 1.895c6.921-2.977 13.159-4.26 17.468-4.747-.654-.614-1.378-1.146-2.076-1.713-4.643.355-11.389 1.498-18.862 4.565zm1.754 10.5a64.564 64.564 0 013.631-2.15c-.986-.769-1.987-1.431-2.986-2.115-1.166.642-2.335 1.299-3.51 2.048.963.684 1.914 1.453 2.865 2.217zm7.909-4.316c5.773-2.653 11.064-4.113 15-4.877-.585-.74-1.16-1.486-1.799-2.179-4.01.621-9.726 2.007-16.076 4.896.968.664 1.92 1.414 2.875 2.16z"
  }))));
}

function SvgKh(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 79.724h511.999v176.551H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M372.816 234.933v-12.517h-4.172v-8.344h-4.173v-8.343h-4.172v-8.344h-12.516v-25.032h-.001l4.173-4.172v-12.516h-4.172v-8.344h-4.172v-12.516h-4.171v-8.344h-4.172v-8.344h-4.172v-4.172h-8.345v4.172h-4.172v8.344h-4.172v8.344h-4.171v12.516h-4.172v8.344h-25.033v-12.516h-4.171v-12.516h-4.172v-12.516h-4.172v-8.344h-4.172v-8.344h-4.172v-4.172h-2.086v-4.172h-4.172v4.172h-2.087v4.172h-4.171v8.344h-4.172v8.344h-4.172v12.516h-4.172v12.516h-4.172v12.516h-25.032v-8.344h-4.172v-12.516h-4.172v-8.344h-4.172v-8.344h-4.172v-4.172h-8.344v4.172h-4.172v8.344h-4.172v8.344h-4.172v12.516h-4.172v8.344h-4.172v12.516l4.17 4.172h.002v25.032h-12.515v8.344h-4.172v8.343h-4.173v8.344h-4.172v12.517h-4.172v12.515h241.975v-12.515z"
  })));
}

function SvgKi(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.829 8.829 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M305.466 170.78c-2.239-1.926-4.779-3.328-7.328-4.353 14.409-2.841 25.997-15.016 25.997-15.016-7.005 3.073-10.261 3.695-21.41.031-2.805-.922-5.688-1.246-8.435-1.217 12.224-8.14 18.272-23.82 18.272-23.82-5.295 5.519-8.066 7.341-19.768 8.222-2.945.222-5.732 1.026-8.26 2.104 8.18-12.197 7.766-29.001 7.766-29.001-2.78 7.126-4.642 9.869-15.117 15.16-2.636 1.332-4.904 3.143-6.826 5.105 2.888-14.399-3.924-29.763-3.924-29.763.159 7.647-.513 10.894-8.164 19.792-1.926 2.239-3.328 4.779-4.353 7.328-2.841-14.409-15.016-25.997-15.016-25.997 3.073 7.005 3.695 10.261.031 21.41-.922 2.805-1.246 5.688-1.217 8.435-8.14-12.224-23.82-18.272-23.82-18.272 5.519 5.295 7.341 8.066 8.222 19.768.222 2.945 1.026 5.732 2.103 8.259-12.199-8.179-29-7.765-29-7.765 7.126 2.78 9.869 4.642 15.16 15.117 1.332 2.636 3.143 4.903 5.106 6.826-14.4-2.889-29.765 3.924-29.765 3.924 7.648-.159 10.894.513 19.793 8.164 2.239 1.926 4.779 3.327 7.328 4.353-14.409 2.841-25.997 15.016-25.997 15.016 7.005-3.073 10.261-3.695 21.41-.031 2.806.922 5.689 1.246 8.436 1.217-12.224 8.139-18.273 23.821-18.273 23.821 5.295-5.519 8.066-7.341 19.768-8.222 2.945-.222 5.732-1.026 8.259-2.103-8.179 12.199-7.765 29-7.765 29 2.78-7.127 4.642-9.869 15.117-15.161 2.636-1.332 4.903-3.143 6.826-5.105-2.889 14.4 3.924 29.764 3.924 29.764-.159-7.648.513-10.894 8.164-19.793 1.926-2.239 3.328-4.779 4.353-7.328 2.841 14.408 15.016 25.997 15.016 25.997-3.073-7.005-3.695-10.262-.031-21.41.922-2.805 1.246-5.688 1.217-8.435 8.14 12.224 23.82 18.272 23.82 18.272-5.519-5.295-7.341-8.066-8.222-19.768-.222-2.944-1.026-5.732-2.103-8.259 12.197 8.179 29 7.765 29 7.765-7.126-2.781-9.869-4.642-15.161-15.117-1.332-2.636-3.143-4.904-5.105-6.826 14.4 2.888 29.764-3.924 29.764-3.924-7.647.159-10.894-.511-19.792-8.164z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFD25A",
    d: "M291.406 175.044l35.214-7.043-35.214-7.043 29.839-19.982-35.229 6.968 19.921-29.88-29.88 19.921 6.969-35.229-19.982 29.838L256 97.381l-7.042 35.214-19.982-29.838 6.969 35.229-29.88-19.921 19.921 29.88-35.229-6.968 29.839 19.982-35.216 7.042 35.214 7.043-29.839 19.982 35.229-6.969-19.921 29.88 29.88-19.921-6.969 35.229 19.982-29.838L256 238.621l7.043-35.214 19.982 29.838-6.969-35.229 29.88 19.921-19.921-29.88 35.229 6.969z"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FFE15A",
    cx: 255.999,
    cy: 168.001,
    r: 35.31
  }), /*#__PURE__*/react.createElement("path", {
    d: "M102.265 273.931c25.61 0 25.61 8.828 51.221 8.828 25.629 0 25.629-8.828 51.256-8.828s25.629 8.828 51.256 8.828c25.571 0 25.571-8.828 51.143-8.828 25.585 0 25.585 8.828 51.169 8.828 25.596 0 25.596-8.828 51.191-8.828 25.595 0 25.595 8.828 51.19 8.828 25.596 0 25.596-8.828 51.192-8.828l.116.002V247.45l-.116-.002c-25.596 0-25.596 8.828-51.192 8.828-25.594 0-25.594-8.828-51.19-8.828-25.596 0-25.596 8.828-51.191 8.828-25.585 0-25.585-8.828-51.169-8.828-25.571 0-25.571 8.828-51.143 8.828-25.629 0-25.629-8.828-51.256-8.828s-25.629 8.828-51.256 8.828c-25.611 0-25.611-8.828-51.221-8.828-25.588 0-25.588 8.828-51.177 8.828-25.561 0-25.609-8.797-51.088-8.825v26.483c25.48.029 25.527 8.825 51.088 8.825 25.589 0 25.589-8.828 51.177-8.828zM0 220.969c25.48.028 25.527 8.824 51.088 8.824 25.589 0 25.589-8.828 51.177-8.828 25.61 0 25.61 8.828 51.221 8.828 25.629 0 25.629-8.828 51.256-8.828s25.629 8.828 51.256 8.828c25.571 0 25.571-8.828 51.143-8.828 25.585 0 25.585 8.828 51.169 8.828 25.596 0 25.596-8.828 51.191-8.828 25.595 0 25.595 8.828 51.19 8.828 25.596 0 25.596-8.828 51.192-8.828l.116.002v-26.483l-.116-.002c-25.596 0-25.596 8.828-51.192 8.828-25.594 0-25.594-8.828-51.19-8.828-25.596 0-25.596 8.828-51.191 8.828-25.585 0-25.585-8.828-51.169-8.828-25.571 0-25.571 8.828-51.143 8.828-25.629 0-25.629-8.828-51.256-8.828s-25.629 8.828-51.256 8.828c-25.611 0-25.611-8.828-51.221-8.828-25.588 0-25.588 8.828-51.177 8.828-25.561 0-25.609-8.797-51.088-8.825v26.484z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 300.417c25.48.028 25.527 8.824 51.088 8.824 25.589 0 25.589-8.828 51.177-8.828 25.61 0 25.61 8.828 51.221 8.828 25.629 0 25.629-8.828 51.256-8.828s25.629 8.828 51.256 8.828c25.571 0 25.571-8.828 51.143-8.828 25.585 0 25.585 8.828 51.169 8.828 25.596 0 25.596-8.828 51.191-8.828 25.595 0 25.595 8.828 51.19 8.828 25.596 0 25.596-8.828 51.192-8.828l.116.002v-26.483l-.116-.002c-25.596 0-25.596 8.828-51.192 8.828-25.594 0-25.594-8.828-51.19-8.828-25.596 0-25.596 8.828-51.191 8.828-25.585 0-25.585-8.828-51.169-8.828-25.571 0-25.571 8.828-51.143 8.828-25.629 0-25.629-8.828-51.256-8.828s-25.629 8.828-51.256 8.828c-25.611 0-25.611-8.828-51.221-8.828-25.588 0-25.588 8.828-51.177 8.828-25.561 0-25.609-8.797-51.088-8.825v26.484zm0-52.965c25.48.028 25.527 8.824 51.088 8.824 25.589 0 25.589-8.828 51.177-8.828 25.61 0 25.61 8.828 51.221 8.828 25.629 0 25.629-8.828 51.256-8.828s25.629 8.828 51.256 8.828c25.571 0 25.571-8.828 51.143-8.828 25.585 0 25.585 8.828 51.169 8.828 25.596 0 25.596-8.828 51.191-8.828 25.595 0 25.595 8.828 51.19 8.828 25.596 0 25.596-8.828 51.192-8.828l.116.002v-26.483l-.116-.002c-25.596 0-25.596 8.828-51.192 8.828-25.594 0-25.594-8.828-51.19-8.828-25.596 0-25.596 8.828-51.191 8.828-25.585 0-25.585-8.828-51.169-8.828-25.571 0-25.571 8.828-51.143 8.828-25.629 0-25.629-8.828-51.256-8.828s-25.629 8.828-51.256 8.828c-25.611 0-25.611-8.828-51.221-8.828-25.588 0-25.588 8.828-51.177 8.828-25.561 0-25.609-8.797-51.088-8.825v26.484zm0-52.965c25.48.028 25.527 8.824 51.088 8.824 25.589 0 25.589-8.828 51.177-8.828 25.61 0 25.61 8.828 51.221 8.828 25.629 0 25.629-8.828 51.256-8.828s25.629 8.828 51.256 8.828c25.571 0 25.571-8.828 51.143-8.828 25.585 0 25.585 8.828 51.169 8.828 25.596 0 25.596-8.828 51.191-8.828 25.595 0 25.595 8.828 51.19 8.828 25.596 0 25.596-8.828 51.192-8.828l.116.002v-26.483l-.116-.002c-25.596 0-25.596 8.828-51.192 8.828-25.594 0-25.594-8.828-51.19-8.828-25.596 0-25.596 8.828-51.191 8.828-25.585 0-25.585-8.828-51.169-8.828-25.571 0-25.571 8.828-51.143 8.828-25.629 0-25.629-8.828-51.256-8.828s-25.629 8.828-51.256 8.828c-25.611 0-25.611-8.828-51.221-8.828-25.588 0-25.588 8.828-51.177 8.828-25.561 0-25.609-8.797-51.088-8.825v26.484z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M460.692 309.242c-25.594 0-25.594-8.828-51.19-8.828-25.596 0-25.596 8.828-51.191 8.828-25.585 0-25.585-8.828-51.169-8.828-25.571 0-25.571 8.828-51.142 8.828-25.629 0-25.629-8.828-51.256-8.828s-25.629 8.828-51.256 8.828c-25.611 0-25.611-8.828-51.221-8.828-25.588 0-25.588 8.828-51.177 8.828-25.561 0-25.609-8.797-51.088-8.825v26.48a8.829 8.829 0 008.828 8.828h494.345c4.813 0 8.693-3.863 8.792-8.652.011-15.532.023-26.655.035-26.655l-.116-.002c-25.598-.002-25.598 8.826-51.194 8.826z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M274.38 47.165c42.927-1.66 64.746-20.396 64.746-20.396-3.083 1.185-51.227 5.217-64.983 6.403-8.687.748-19.524 10.653-26.349 17.865-1.838-4.994-5.431-10.174-12.546-11.224-14.467-2.134-52.888-4.505-62.374-9.013 0 0 6.123 9.465 37.769 13.756 15.162 2.056 23.522 7.256 27.503 10.796l-3.609-.124-6.166-3.084c-6.166-3.083-12.333 2.134-12.333 2.134h-9.822c-1.23 0-1.932 1.405-1.194 2.388l.945 1.26a5.106 5.106 0 004.087 2.044h10.015c3.558 6.166 17.076 12.57 28.223 12.57 11.146 0 45.299-15.178 48.619-15.178l-30.894-1.057 8.363-9.14z",
    fill: "#FFE15A"
  })));
}

function SvgKm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v75.034H0V9.104A8.829 8.829 0 018.828.276z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 84.138h511.999V168H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 168h511.999v83.862H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 251.862h512v75.034a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896v-75.034z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.591l247.383-162.079c2.53-1.658 2.53-5.366 0-7.025L3.256 2.41C1.311 4.028 0 6.375 0 9.104v317.792c0 2.729 1.311 5.076 3.256 6.695z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M48.833 168c0-31.919 20.865-58.927 49.689-68.229 1.515-.489 1.304-2.701-.275-2.908a69.843 69.843 0 00-9.064-.598c-39.618 0-71.735 32.117-71.735 71.735s32.117 71.735 71.735 71.735c3.074 0 6.097-.21 9.064-.598 1.579-.207 1.79-2.419.275-2.908-28.824-9.301-49.689-36.308-49.689-68.229z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M98.89 113.208l1.975 5.921 6.241.049c.808.007 1.143 1.037.493 1.517l-5.021 3.708 1.882 5.951c.244.77-.633 1.408-1.291.938l-5.078-3.629-5.078 3.629c-.658.47-1.535-.168-1.291-.938l1.882-5.951-5.021-3.708c-.65-.48-.314-1.512.493-1.517l6.241-.049 1.975-5.921c.257-.767 1.342-.767 1.598 0zm0 30.006l1.975 5.921 6.241.049c.808.007 1.143 1.037.493 1.517l-5.021 3.708 1.882 5.951c.244.77-.633 1.408-1.291.938l-5.078-3.629-5.078 3.629c-.658.47-1.535-.168-1.291-.938l1.882-5.951-5.021-3.708c-.65-.48-.314-1.512.493-1.517l6.241-.049 1.975-5.921c.257-.766 1.342-.766 1.598 0zm0 30.006l1.975 5.921 6.241.049c.808.007 1.143 1.037.493 1.517l-5.021 3.708 1.882 5.951c.244.77-.633 1.408-1.291.938l-5.078-3.629-5.078 3.629c-.658.47-1.535-.168-1.291-.938l1.882-5.951-5.021-3.708c-.65-.48-.314-1.512.493-1.517l6.241-.049 1.975-5.921c.257-.767 1.342-.767 1.598 0zm0 30.006l1.975 5.921 6.241.049c.808.007 1.143 1.037.493 1.517l-5.021 3.708 1.882 5.951c.244.77-.633 1.408-1.291.938l-5.078-3.629-5.078 3.629c-.658.47-1.535-.168-1.291-.938l1.882-5.951-5.021-3.708c-.65-.48-.314-1.512.493-1.517l6.241-.049 1.975-5.921c.257-.766 1.342-.766 1.598 0z"
  }))));
}

function SvgKn(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M375.086.276L0 246.021v26.385L415.355.276zM512 89.979V63.594L96.644 335.724h40.269z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 63.594V9.104a8.829 8.829 0 00-8.828-8.828h-87.817L0 272.406v54.49a8.829 8.829 0 008.828 8.828h87.817L512 63.594z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M156.018 187.9l18.119 14.59 19.67-12.42c2.547-1.608 5.675.951 4.602 3.766l-8.277 21.74 17.89 14.869c2.316 1.926.849 5.69-2.159 5.542l-23.234-1.154-8.613 21.61c-1.116 2.797-5.15 2.567-5.938-.341l-6.082-22.454-23.213-1.514c-3.006-.196-4.032-4.105-1.511-5.752l19.475-12.724-5.734-22.546c-.74-2.918 2.66-5.102 5.005-3.212zM323.007 78.29l18.119 14.59 19.67-12.42c2.547-1.608 5.675.951 4.602 3.766l-8.277 21.74 17.89 14.869c2.316 1.926.849 5.69-2.159 5.542l-23.234-1.154-8.613 21.61c-1.116 2.797-5.15 2.566-5.938-.341l-6.082-22.454-23.213-1.514c-3.006-.196-4.032-4.105-1.511-5.752l19.475-12.724-5.734-22.546c-.741-2.916 2.659-5.101 5.005-3.212z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 326.896V89.979L136.913 335.724h366.258a8.828 8.828 0 008.829-8.828z",
    fill: "#FF4B55"
  })));
}

function SvgKp(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 44.414h512v17.655H0zm0 229.517h512v17.655H0z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 62.069h512v211.862H0z"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#F5F5F5",
    cx: 141.241,
    cy: 168,
    r: 70.621
  }), /*#__PURE__*/react.createElement("path", {
    d: "M143.122 103.705l14.167 42.478 44.777.348c1.905.014 2.695 2.445 1.162 3.577l-36.021 26.6 13.506 42.692c.575 1.816-1.493 3.318-3.043 2.211l-36.428-26.039-36.429 26.038c-1.549 1.108-3.617-.395-3.043-2.211l13.506-42.692-36.021-26.6c-1.533-1.131-.743-3.562 1.162-3.577l44.777-.348 14.167-42.478c.603-1.806 3.158-1.806 3.761.001z",
    fill: "#FF4B55"
  })));
}

function SvgKr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M305.009 94.532c-40.563-27.041-95.35-15.986-122.374 24.506-13.555 20.211-8.045 47.674 12.235 61.195 20.265 13.521 47.64 8.03 61.161-12.252 13.521-20.281 40.914-25.704 61.178-12.254 20.298 13.521 25.757 40.984 12.217 61.195 27.042-40.56 16.111-95.348-24.417-122.39",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M182.634 119.039c-13.555 20.211-8.045 47.674 12.235 61.195 20.265 13.521 47.64 8.03 61.161-12.252 13.521-20.281 40.914-25.704 61.178-12.254 20.298 13.521 25.757 40.984 12.217 61.195-27.006 40.632-81.775 51.549-122.338 24.507-40.526-27.04-51.494-81.828-24.453-122.391",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M349.92 61.19l16.035 24.102a4.414 4.414 0 01-1.219 6.112l-4.066 2.723a4.414 4.414 0 01-6.129-1.22l-16.055-24.096a4.415 4.415 0 011.223-6.119l4.086-2.728a4.413 4.413 0 016.125 1.226zm24.74 37.161l16.087 24.087a4.415 4.415 0 01-1.237 6.134l-4.084 2.699a4.413 4.413 0 01-6.103-1.23l-16.078-24.062a4.414 4.414 0 011.217-6.122l4.074-2.724a4.415 4.415 0 016.124 1.218zm-7.571-48.619l40.829 61.273a4.413 4.413 0 01-1.225 6.12l-4.102 2.734a4.413 4.413 0 01-6.121-1.224l-40.843-61.269a4.413 4.413 0 011.227-6.122l4.115-2.739a4.416 4.416 0 016.12 1.227zm17.122-11.44l16.07 24.149a4.412 4.412 0 01-1.241 6.127l-4.086 2.7a4.412 4.412 0 01-6.105-1.234l-16.082-24.117a4.413 4.413 0 011.224-6.121l4.099-2.732a4.411 4.411 0 016.121 1.228zm24.756 37.239l16.045 24.099a4.413 4.413 0 01-1.22 6.115l-4.075 2.724a4.413 4.413 0 01-6.127-1.223l-16.045-24.099a4.414 4.414 0 011.22-6.115l4.075-2.724a4.413 4.413 0 016.127 1.223zM132.721 205.982l40.824 61.207a4.413 4.413 0 01-1.222 6.12l-4.088 2.73a4.414 4.414 0 01-6.123-1.222l-40.824-61.207a4.413 4.413 0 011.222-6.12l4.088-2.73a4.415 4.415 0 016.123 1.222zm-17.139 11.449l16.028 24.041a4.413 4.413 0 01-1.217 6.116l-4.066 2.722a4.414 4.414 0 01-6.126-1.217l-16.047-24.035a4.413 4.413 0 011.22-6.122l4.086-2.728a4.414 4.414 0 016.122 1.223zm24.769 37.174l16.046 24.102a4.412 4.412 0 01-1.222 6.115l-4.078 2.726a4.414 4.414 0 01-6.126-1.221l-16.056-24.097a4.415 4.415 0 011.222-6.119l4.088-2.73a4.414 4.414 0 016.126 1.224zm-41.909-25.729l40.798 61.21a4.416 4.416 0 01-1.219 6.118l-4.077 2.726a4.413 4.413 0 01-6.125-1.22l-40.822-61.202a4.415 4.415 0 011.224-6.122l4.102-2.734a4.412 4.412 0 016.119 1.224zm22.852-106.434l40.818-61.257a4.414 4.414 0 016.124-1.224l4.087 2.729a4.415 4.415 0 011.222 6.12l-40.834 61.223a4.414 4.414 0 01-6.108 1.231l-4.071-2.695a4.413 4.413 0 01-1.238-6.127zm-17.147-11.433l40.825-61.269a4.414 4.414 0 016.126-1.222l4.077 2.726a4.413 4.413 0 011.22 6.116l-40.814 61.272a4.413 4.413 0 01-6.124 1.224l-4.088-2.729a4.413 4.413 0 01-1.222-6.118zM86.99 99.625l40.829-61.33a4.415 4.415 0 016.127-1.224l4.077 2.726a4.413 4.413 0 011.222 6.114L98.441 107.25a4.414 4.414 0 01-6.123 1.228l-4.102-2.734a4.416 4.416 0 01-1.226-6.119zm251.503 167.564l16.047-24.035a4.414 4.414 0 016.126-1.217l4.066 2.723a4.414 4.414 0 011.217 6.116l-16.028 24.04a4.414 4.414 0 01-6.123 1.223l-4.086-2.728a4.414 4.414 0 01-1.219-6.122zm24.75-37.048l16.073-24.154a4.415 4.415 0 016.123-1.227l4.096 2.73a4.415 4.415 0 011.223 6.124l-16.107 24.116a4.412 4.412 0 01-6.109 1.227l-4.062-2.692a4.414 4.414 0 01-1.237-6.124zm-7.617 48.557l16.057-24.098a4.414 4.414 0 016.122-1.225l4.104 2.737a4.415 4.415 0 011.225 6.119l-16.047 24.1a4.414 4.414 0 01-6.12 1.228l-4.115-2.739a4.416 4.416 0 01-1.226-6.122zm24.777-37.235l16.066-24.042a4.415 4.415 0 016.119-1.22l4.102 2.734a4.413 4.413 0 011.221 6.124l-16.065 24.042a4.414 4.414 0 01-6.118 1.22l-4.103-2.734a4.41 4.41 0 01-1.222-6.124zm-7.632 48.618l16.075-24.056a4.414 4.414 0 016.103-1.23l4.086 2.7a4.415 4.415 0 011.239 6.131l-16.063 24.088a4.415 4.415 0 01-6.121 1.224l-4.099-2.732a4.414 4.414 0 01-1.22-6.125zm24.783-37.112l16.035-24.085a4.414 4.414 0 016.127-1.223l4.072 2.722a4.414 4.414 0 011.218 6.119l-16.049 24.053a4.413 4.413 0 01-6.11 1.229l-4.06-2.69a4.414 4.414 0 01-1.233-6.125z",
    fill: "#464655"
  })));
}

function SvgKw(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59l137.985-109.532-.003-112.12L3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z",
    fill: "#464655"
  })));
}

function SvgKy(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.333l-81.77 53.573V.276h-44.138v53.573L24.161.276H8.828A8.829 8.829 0 000 9.104v7.002l70.155 45.963H0v44.138h70.155L0 152.171v7.001A8.829 8.829 0 008.828 168h15.333l81.77-53.573V168h44.138v-53.573L231.838 168h15.333a8.829 8.829 0 008.828-8.828v-7.002l-70.154-45.963h70.154V62.069h-70.155l70.155-45.963V9.104a8.827 8.827 0 00-8.827-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M255.999 70.897H141.241V.276h-26.483v70.621H0v26.482h114.758V168h26.483V97.379h114.758z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.333 0 5.961 0 9.104v.458l80.889 52.507h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.195-61.793H89.474zm166.385 53.66l-82.666-53.659H156.98l93.873 60.934c2.813-1.305 4.741-4.04 5.006-7.275z"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M383.827 84.219s-3.691-14.766-14.766-22.149c0 0 11.074 18.457 11.074 33.224l3.692-11.075z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M366.753 68.183s7.73 4.729 11.882 12.459l-3.346 7.73c.002 0-2.767-10.959-8.536-20.189z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M358.217 69.914s13.382 4.153 19.726 12.805l-3.807 5.768c.001 0-5.075-9.805-15.919-18.573z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M356.256 76.605s14.074 2.191 20.419 8.883l-1.615 6.345c0-.001-7.729-9.23-18.804-15.228z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M356.718 81.219s13.612 1.385 19.842 8.536c6.229 7.153-2.307 4.96-2.307 4.96s-7.153-8.189-17.535-13.496zm27.109 3s3.691-14.766 14.766-22.149c0 0-11.074 18.457-11.074 33.224l-3.692-11.075z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M400.901 68.183s-7.73 4.729-11.882 12.459l3.346 7.73c-.001 0 2.768-10.959 8.536-20.189z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M409.437 69.914s-13.382 4.153-19.726 12.805l3.807 5.768c-.001 0 5.075-9.805 15.919-18.573z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M411.399 76.605s-14.074 2.191-20.419 8.883l1.615 6.345c0-.001 7.729-9.23 18.804-15.228z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M410.936 81.219s-13.612 1.385-19.842 8.536c-6.229 7.153 2.307 4.96 2.307 4.96s7.153-8.189 17.535-13.496zm-27.109-19.15s-3.691 7.767 0 11.651c3.692-3.883 0-11.651 0-11.651z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M380.149 63.998s-.495 8.586 4.386 10.794c1.959-4.988-4.386-10.794-4.386-10.794z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M387.505 63.998s.495 8.586-4.386 10.794c-1.959-4.988 4.386-10.794 4.386-10.794z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M388.714 68.95s-3.221 7.975-8.578 7.884c.361-5.346 8.578-7.884 8.578-7.884z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M378.94 68.95s3.221 7.975 8.578 7.884c-.361-5.346-8.578-7.884-8.578-7.884z"
  })), /*#__PURE__*/react.createElement("ellipse", {
    fill: "#FFD255",
    cx: 383.823,
    cy: 87.912,
    rx: 11.079,
    ry: 14.766
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#73AF00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M358.525 102.984l-2.538-3.923s-7.383 1.769-9.152-3.768l-2.846-.231s.384-3.768 3.691-4.307c0 0 1.999-2.461 5.537-1.999 3.538.461 5.384 3.46 7.422 4.23 2.038.769 2.269 3.307 2.269 3.307l15.535 15.919s-4.46 5.692-8.46 7.537c-4 1.844-18.688-7.152-11.458-16.765zm50.451 2.922s6.461 4.384 6.691 16.497h-10.729s.116-8.191-1.961-12.574l5.999-3.923z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M407.592 106.368s8.075 2.654 13.036-3.691l-8.421-1.153-4.615 4.844z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M405.169 97.485l8.2 2.764c1.034.349 1.399 1.629.674 2.445-3.111 3.505-12.397 11.903-27.37 11.903-19.496 0-24.533-12.267-24.764-13.189-.231-.922-1.269-8.421-1.269-8.421l8.306-.922 36.223 5.42z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M325.439 210.429h21.473l-11.075 21.451-11.074-14.767zm116.776 0h-21.472l11.074 21.451 11.074-14.767z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M325.35 246.646c-10.593 0-18.699-5.685-19.117-5.981l8.536-12.052c.071.046 7.223 4.906 14.516 2.697 7.38-2.228 12.225-10.937 14.991-17.856l13.71 5.486c-5.816 14.542-14.112 23.479-24.651 26.569a28.253 28.253 0 01-7.985 1.137zm116.954 0c10.593 0 18.699-5.685 19.117-5.981l-8.536-12.052c-.071.046-7.223 4.906-14.516 2.697-7.38-2.228-12.225-10.937-14.991-17.856l-13.71 5.486c5.816 14.542 14.112 23.479 24.651 26.569a28.258 28.258 0 007.985 1.137z",
    fill: "#FFD25A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M431.817 169.123h-95.98v-35.47a8.829 8.829 0 018.828-8.828h78.325a8.829 8.829 0 018.828 8.828v35.47h-.001z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M362.024 150.666l-1.153-7.383c-5.422-.231-8.536-6.575-8.536-6.575l-4.384 2.422c4.613 11.075 14.073 11.536 14.073 11.536z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M419.819 143.052c1.615-1.23 5.153-1.692 5.153-1.692-2.538-2.615-5.306-.769-5.306-.769 2.307-2.153 1-5.229 1-5.229 0 1-1.615 1.692-1.615 1.692.077-1.999-1.999-3.923-1.999-3.923l-1.077 1.769c-.692-1.692-3.153-2.999-3.153-2.999l-1 4.153c-2.307-1.999-6.383-1.846-6.383-1.846l.769 1.923c-2.461.076-9.152 1.461-13.075 1.922-3.923.461-7.075-.615-7.075-2.383 0-1.482 3.428-1.665 4.911-1.687 1.049.234 2.368.612 4.222 1.169 3.46 1.038 5.487-.466 5.487-.466-1.212-.461-1.346-1-1.346-1 2.595-1.5 5.03-1.13 5.03-1.13-.865-1.903-4.615-1.788-4.615-1.788.981-.519 1.73-2.134 1.73-2.134-.231.231-2.362.754-5.272 1.144-2.19.295-4.247 1.96-5.097 2.73-2.309-.177-8.342-.25-7.281 3.933 1.308 5.153 11.69 3.307 18.073 2.307 6.383-1 9.69-.153 11.074.692 1.385.846-.589 3.712-7.075 2.538-5.605-1.014-8.692-1.043-10.387-.865-1.879.12-3.481.626-4.61.865-2.538.538-12.306 3.999-14.151-1-1.846-5-10.844 8.152-10.844 8.152l.703.836-2.395-.567c-3.23 4.326-12.92 5.653-12.92 5.653s-1.442-2.595-2.654-2.942c-1.212-.346-1.73 1.557-1.73 1.557s-1.442.057-1.557 1.385c-.116 1.326 1.038 1.442 1.038 1.442s-1.385 2.019.922 2.595c0 0-.173 2.826 3.23.865 10.11 1.274 17.482-3.917 20.674-6.749 2.087.134 5.339.067 7.839-1.23 3.999-2.077 8.613-4.692 11.305-3.691 0 0 2.154 6.614-6.306 6.767 0 0-1.251-1.582-2.51-1.582-.543 0-1.108.652-.934 1.238 0 0-1.476-.087-1.737.782-.213.708.303 1.519 1.389 1.389 0 0-.738 1.086 0 1.737s1.651 0 1.651 0-.391 1.346.521 1.476c.78.111 1.813-1.163 2.109-1.55 1.354.211 10.591 1.276 12.586-8.413 0 0 4.615 1.999 9.152 1.615 4.537-.384 8.999.308 8.614 2.538-.503 1.617-1.495 1.51-1.495 1.51-1.086-.435-2.91-.391-3.17 1.173-.26 1.564 1.867 1.607 1.867 1.607.608 1.433 2.345.825 2.345.825 1.519 1.086 2.519-.087 2.519-.087.652.565 1.324.67 1.954.13.608-.521.267-3.996.209-5.236-.096-2.063-.385-7.459-3.384-7.537-2.999-.077-6.845 1.692-12.151-2.769-.277-.233-.547-.381-.821-.579 2.511.233 4.31.914 6.051 1.194 2.385.386 9.384-.229 10.998-1.46zm-71.869-3.921s-1.471.04-2.191-.173c-1.235-.364-1.385-2.307-.057-2.654 0 0-1.597-1.085-.865-2.307.586-.978 2.079-.975 2.598-.398 0 0-.487-1.609.921-2.14 1.12-.423 2.019.865 2.019 2.538 0 0 1.674-1.362 2.538-.461.602.628.429 1.453-.577 3.172-1.028 1.754-4.386 2.423-4.386 2.423z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M346.13 138.419s-.781 1.346-3.04.521c0 0 1.954-.913 2.215-1.694l.825 1.173zm-.825-3.953s-1.216-.781-2.562-.738c0 0 1.997-1.476 3.691-.173l-1.129.911zm2.823-2.084s.391-1.433-.391-2.215c0 0 1.607.695 1.824 1.997l-1.433.218zm3.561 1.476s.781-1.737.087-2.562c0 0 2.084 1.216 1.216 3.214l-1.303-.652zm-4.069 19.303s-.836-1.711-1.914-1.705c0 0 2.268-.825 3.249 1.12l-1.335.585zm-1.828 2.179s-1.491-1.186-2.462-.716c0 0 1.693-1.72 3.414-.386l-.952 1.102zm1.048 3.077s-1.905-.021-2.383.946c0 0 .28-2.397 2.458-2.4l-.075 1.454zm1.741 1.978s-.781 1.346-3.04.521c0 0 1.954-.913 2.215-1.694l.825 1.173zm34.327-.684s-.64 1.102-2.49.427c0 0 1.502-.536 1.715-1.177l.775.75z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M363.371 135.9s-4.154 7.075-3.155 17.304c0 0 12.247-1.788 17.554-14.016 0 0 1.293-.523 1.798-1.779.429-1.068.394-2.827-1.663-2.817 0 0 .616-1.23 1.365-1.519 0 0-1.326-.519-2.884-.173 0 0 1.212-1.212 1.212-2.769 0 0-1.846 1.212-2.999 1.326 0 0-.116-1.903.346-2.134 0 0-2.422.231-3.634 1.5 0 0-.808-1.096-.75-2.25 0 0-2.25.981-3.115 2.422 0 0-.692-.75-.634-1.5 0 0-1.615 1.961-1.961 2.999 0 0-1.522-.418-2.191.808-.485.886-.374 1.859.711 2.598z",
    fill: "#FFD255"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M381.062 154.56s-.492-.927-1.969-1.129c0 0 1.882-.868 3.069.376l-1.1.753zm30.532 3.518s-1.079.341-1.585 1.867c0 0-.553-2.167 1.001-3.182l.584 1.315zm2.264.796s-1.022.993-.973 2.601c0 0-1.261-1.846-.149-3.332l1.122.731zm4.886-.087s-.309 1.052.625 2.174c0 0-1.933-.615-1.97-2.298l1.345.124zm-2.296.41s-.82.78-.602 2.374c0 0-1.525-1.34-.575-2.934l1.177.56zm-36.96-2.74s-.988-.354-2.216.49c0 0 .807-1.909 2.522-1.788l-.306 1.298zm1.35 2.101s-1.015-.266-2.165.682c0 0 .177-1.842 1.897-1.87l.268 1.188z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M431.817 175.073c-8.005 0-8.005 7.221-16.011 7.221-8.005 0-8.005-7.221-16.011-7.221-8 0-8 7.221-16 7.221-7.993 0-7.993-7.221-15.986-7.221s-7.992 7.221-15.983 7.221c-7.994 0-7.994-7.221-15.989-7.221v-13.332c7.994 0 7.994 7.221 15.989 7.221 7.992 0 7.992-7.221 15.983-7.221 7.993 0 7.993 7.221 15.986 7.221 8 0 8-7.221 16-7.221 8.006 0 8.006 7.221 16.011 7.221 8.006 0 8.006-7.221 16.011-7.221v13.332z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M415.806 182.294c-8.005 0-8.005-7.221-16.011-7.221-8 0-8 7.221-16 7.221-7.993 0-7.993-7.221-15.986-7.221s-7.992 7.221-15.983 7.221c-7.978 0-8-7.186-15.944-7.217.11 3.192.477 7.93 1.412 13.497 6.494.86 7.085 7.051 14.531 7.051 7.992 0 7.992-7.222 15.983-7.222 7.993 0 7.993 7.222 15.986 7.222 8 0 8-7.222 16-7.222 8.005 0 8.005 7.222 16.011 7.222 7.457 0 8.05-6.193 14.553-7.051.936-5.567 1.302-10.305 1.412-13.497-7.953.031-7.975 7.217-15.964 7.217z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M415.806 195.626c-8.005 0-8.005-7.222-16.011-7.222-8 0-8 7.222-16 7.222-7.993 0-7.993-7.222-15.986-7.222s-7.992 7.222-15.983 7.222c-7.446 0-8.038-6.191-14.531-7.051.742 4.412 1.848 9.331 3.479 14.418 3.599 2.066 5.166 5.965 11.052 5.965 7.992 0 7.992-7.221 15.983-7.221 7.993 0 7.993 7.221 15.986 7.221 8 0 8-7.221 16-7.221 8.005 0 8.005 7.221 16.011 7.221 5.899 0 7.465-3.907 11.076-5.971 1.63-5.085 2.735-10.003 3.478-14.412-6.504.858-7.097 7.051-14.554 7.051z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M415.806 208.958c-8.005 0-8.005-7.221-16.011-7.221-8 0-8 7.221-16 7.221-7.993 0-7.993-7.221-15.986-7.221s-7.992 7.221-15.983 7.221c-5.885 0-7.453-3.9-11.052-5.965 2.031 6.338 4.884 12.911 8.866 19.041.671.138 1.363.256 2.186.256 7.992 0 7.992-7.222 15.983-7.222 7.993 0 7.993 7.222 15.986 7.222 8 0 8-7.222 16-7.222 8.005 0 8.005 7.222 16.011 7.222.832 0 1.533-.118 2.21-.258 3.982-6.132 6.835-12.706 8.866-19.044-3.61 2.062-5.177 5.97-11.076 5.97z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M415.806 222.29c-8.005 0-8.005-7.222-16.011-7.222-8 0-8 7.222-16 7.222-7.993 0-7.993-7.222-15.986-7.222s-7.992 7.222-15.983 7.222c-.823 0-1.515-.118-2.186-.256 2.53 3.895 5.526 7.599 9.054 10.951 2.444-2.065 4.386-4.585 9.116-4.585 7.993 0 7.993 7.221 15.986 7.221 8 0 8-7.221 16-7.221 4.749 0 6.691 2.532 9.149 4.6 3.535-3.357 6.537-7.066 9.071-10.968-.677.139-1.378.258-2.21.258z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M408.944 233c-2.457-2.068-4.399-4.6-9.149-4.6-8 0-8 7.221-16 7.221-7.993 0-7.993-7.221-15.986-7.221-4.73 0-6.671 2.52-9.116 4.585 6.43 6.11 14.628 11.034 25.133 13.661 10.497-2.624 18.69-7.542 25.118-13.646z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M399.795 161.741c-8 0-8 7.221-16 7.221-7.993 0-7.993-7.221-15.986-7.221s-7.992 7.221-15.983 7.221c-7.994 0-7.994-7.221-15.989-7.221v11.074c0 .625.014 1.395.044 2.262 7.944.031 7.967 7.217 15.944 7.217 7.992 0 7.992-7.221 15.983-7.221 7.993 0 7.993 7.221 15.986 7.221 8 0 8-7.221 16-7.221 8.006 0 8.006 7.221 16.011 7.221 7.989 0 8.011-7.186 15.967-7.217.03-.868.044-1.638.044-2.262v-11.074c-8.006 0-8.006 7.221-16.011 7.221-8.004 0-8.004-7.221-16.01-7.221z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M428.126 124.825a3.691 3.691 0 013.691 3.691v44.298c0 .625-.014 1.395-.044 2.262-.11 3.192-.477 7.93-1.412 13.497-.742 4.409-1.848 9.327-3.478 14.412-2.031 6.339-4.884 12.914-8.866 19.044-2.535 3.903-5.537 7.613-9.071 10.968-6.428 6.103-14.621 11.022-25.117 13.646-10.505-2.626-18.703-7.551-25.133-13.661-3.528-3.352-6.524-7.055-9.054-10.951-3.982-6.131-6.835-12.703-8.866-19.041-1.631-5.087-2.738-10.007-3.479-14.418-.936-5.567-1.302-10.305-1.412-13.497a67.135 67.135 0 01-.044-2.262v-44.298a3.691 3.691 0 013.691-3.691h88.596l-.002.001zm0-2.768h-88.597a6.468 6.468 0 00-6.461 6.461v44.298c0 .651.014 1.453.046 2.358.105 3.013.441 7.863 1.449 13.86a106.495 106.495 0 003.573 14.804c2.34 7.299 5.429 13.929 9.181 19.704 2.763 4.253 5.949 8.106 9.468 11.45 7.342 6.977 16.214 11.801 26.369 14.34l.672.168.671-.168c10.147-2.537 19.013-7.357 26.353-14.325 3.528-3.349 6.72-7.208 9.487-11.468 3.753-5.777 6.841-12.407 9.181-19.709 1.512-4.714 2.713-9.693 3.572-14.797 1.009-5.997 1.345-10.848 1.449-13.86a70.74 70.74 0 00.046-2.358v-44.298a6.466 6.466 0 00-6.459-6.46z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#73AF00",
    d: "M383.827 224.322l-10.13 7.048 3.574-11.813-9.833-7.454 12.336-.251 4.053-11.658 4.053 11.658 12.336.251-9.832 7.454 3.574 11.813z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M383.827 202.473l3.517 10.115 10.708.218-8.535 6.471 3.102 10.251-8.791-6.118-8.791 6.118 3.102-10.251-8.534-6.47 10.708-.218 3.514-10.116zm0-4.555l-1.412 4.064-3.175 9.133-9.667.198-4.301.087 3.428 2.6 7.704 5.842-2.799 9.255-1.246 4.118 3.532-2.457 7.936-5.523 7.936 5.523 3.532 2.457-1.246-4.118-2.799-9.255 7.704-5.842 3.428-2.6-4.301-.087-9.667-.198-3.175-9.133-1.412-4.064z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#73AF00",
    d: "M361.58 195.528l-10.13 7.048 3.574-11.812-9.834-7.455 12.338-.251 4.052-11.657 4.052 11.657 12.338.251-9.834 7.455 3.574 11.812z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M361.58 173.678l3.517 10.115 10.708.218-8.534 6.47 3.102 10.251-8.791-6.118-8.791 6.118 3.102-10.251-8.534-6.47 10.708-.218 3.513-10.115zm0-4.555l-1.412 4.064-3.175 9.133-9.667.198-4.301.087 3.428 2.6 7.704 5.842-2.799 9.255-1.246 4.118 3.532-2.457 7.936-5.523 7.936 5.523 3.532 2.457-1.246-4.118-2.799-9.255 7.704-5.842 3.428-2.6-4.301-.087-9.667-.198-3.175-9.133-1.412-4.064z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#73AF00",
    d: "M405.878 195.528l-10.129 7.048 3.573-11.812-9.833-7.455 12.336-.251 4.053-11.657 4.053 11.657 12.337.251-9.833 7.455 3.573 11.812z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M405.878 173.678l3.517 10.115 10.707.218-8.534 6.47 3.102 10.251-8.791-6.118-8.791 6.118 3.102-10.251-8.534-6.47 10.708-.218 3.514-10.115zm0-4.555l-1.412 4.064-3.175 9.133-9.667.198-4.301.087 3.428 2.6 7.704 5.842-2.799 9.255-1.246 4.118 3.532-2.457 7.936-5.523 7.936 5.523 3.532 2.457-1.246-4.118-2.799-9.255 7.704-5.842 3.428-2.6-4.301-.087-9.667-.198-3.175-9.133-1.412-4.064zm36.337 41.306c-9.161 23.326-31.85 39.908-58.388 39.908-26.538 0-49.227-16.583-58.388-39.908l-13.738 5.375c11.317 28.814 39.344 49.3 72.126 49.3 32.782 0 60.809-20.485 72.126-49.3l-13.738-5.375z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M391.21 124.825h-11.074l-3.692-11.074h11.075zm18.458 0h-7.383l-2.461-7.383h3.37a5.568 5.568 0 015.282 3.807l1.192 3.576zm-40.607 0h-7.383l-.842-2.525c-.797-2.39.982-4.858 3.502-4.858h2.261l2.462 7.383z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M402.284 124.825H391.21l-3.691-11.074h8.414a3.69 3.69 0 013.502 2.525l2.849 8.549zm-22.148 0h-11.074l-2.494-7.48a2.73 2.73 0 012.591-3.594h7.286l3.691 11.074z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M410.936 99.216c-2.884 4.153-10.959 9.113-24.11 9.113-10.836 0-17.805-6.543-20.132-9.123a3.368 3.368 0 01-.863-2.278V94.41c0-1.084.562-2.07 1.498-2.614 2.344-1.364 7.762-3.54 18.458-3.54 13.268 0 25.149 10.96 25.149 10.96z",
    fill: "#509664"
  })));
}

function SvgKz(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H8.828A8.828 8.828 0 000 9.103v317.793a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828V9.103a8.83 8.83 0 00-8.829-8.827z",
    fill: "#82C3D2"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(26 24)",
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M33.516 16.447c-.799-3.383-.998-4.63.52-6.147a1.894 1.894 0 10-2.679-2.679c-3.072 3.073-2.339 6.262-1.544 9.639-2.422-.791-4.934-.204-6.28 1.494-.668.847-1.96 3.223.461 7.017a1.9 1.9 0 002.616.582 1.893 1.893 0 00.577-2.616c-.908-1.429-.935-2.31-.681-2.632.3-.381 1.23-.582 2.204-.237.629.218 2.091.973 2.091 3.253 0 1.821-.842 3.49-2.31 4.574-1.471 1.088-3.375 1.395-5.21.825-2.266-.692-3.849-3.079-3.849-5.806 0-1.951.418-3.923 1.186-5.651.122-.255 3.018-6.254 3.764-8.49 1.475-4.423-.024-6.647-1.047-7.576-1.369-1.247-3.37-1.558-5.092-.803-.262.116-.478.284-.705.44-.227-.157-.444-.324-.705-.44-1.721-.755-3.721-.444-5.092.803-1.023.929-2.522 3.154-1.047 7.576.746 2.236 3.641 8.235 3.737 8.435a14.153 14.153 0 011.212 5.707c0 2.728-1.582 5.114-3.849 5.806-1.842.569-3.74.266-5.21-.825a5.638 5.638 0 01-2.31-4.574c0-2.28 1.462-3.034 2.091-3.253.977-.344 1.902-.145 2.204.237.254.322.227 1.203-.681 2.632a1.893 1.893 0 103.193 2.034c2.42-3.794 1.129-6.169.461-7.017-1.347-1.698-3.858-2.285-6.28-1.494.796-3.375 1.528-6.566-1.544-9.639a1.894 1.894 0 10-2.679 2.679c1.517 1.517 1.32 2.764.52 6.147-.48 2.027-1.076 4.555-1.076 7.671 0 2.073.729 4.056 1.955 5.685h-.061a1.894 1.894 0 00-1.895 1.895c0 1.047.847 1.895 1.895 1.895h.061C1.212 35.223.483 37.205.483 39.278c0 3.116.596 5.644 1.075 7.672.799 3.383.998 4.63-.52 6.147a1.894 1.894 0 102.68 2.679c3.072-3.073 2.339-6.263 1.544-9.639 2.422.788 4.934.204 6.28-1.494.668-.847 1.96-3.223-.461-7.017a1.893 1.893 0 00-3.193 2.034c.908 1.429.935 2.31.681 2.632-.301.377-1.227.577-2.204.237-.629-.218-2.091-.973-2.091-3.253 0-1.821.842-3.49 2.31-4.574 1.471-1.088 3.373-1.399 5.21-.825 2.266.692 3.849 3.079 3.849 5.806 0 1.951-.418 3.923-1.212 5.707L2.02 73.311a17.73 17.73 0 00-1.538 7.246c0 3.233 1.47 6.185 3.784 7.987C1.953 90.346.482 93.298.482 96.531c0 2.513.519 4.952 1.538 7.246l12.409 27.919a14.153 14.153 0 011.212 5.707c0 2.728-1.582 5.114-3.849 5.806-1.842.574-3.74.266-5.21-.825a5.638 5.638 0 01-2.31-4.574c0-2.28 1.462-3.034 2.091-3.253.977-.341 1.902-.145 2.204.237.254.322.227 1.203-.681 2.632a1.893 1.893 0 103.193 2.034c2.42-3.794 1.129-6.169.461-7.017-1.347-1.698-3.858-2.283-6.28-1.494.796-3.375 1.528-6.566-1.544-9.639a1.894 1.894 0 10-2.679 2.679c1.517 1.517 1.32 2.764.52 6.147-.479 2.028-1.075 4.556-1.075 7.672 0 2.073.729 4.056 1.955 5.685h-.061a1.894 1.894 0 00-1.895 1.895c0 1.048.847 1.895 1.895 1.895h.061c-1.227 1.629-1.955 3.611-1.955 5.685 0 3.116.596 5.644 1.075 7.672.799 3.383.998 4.63-.52 6.147a1.894 1.894 0 102.68 2.679c3.072-3.073 2.339-6.263 1.544-9.639 2.422.788 4.934.204 6.28-1.494.668-.847 1.96-3.223-.461-7.017a1.893 1.893 0 00-3.193 2.034c.908 1.429.935 2.31.681 2.632-.301.381-1.227.582-2.204.237-.629-.218-2.091-.973-2.091-3.253 0-1.821.842-3.49 2.31-4.574 1.471-1.088 3.373-1.399 5.21-.825 2.266.692 3.849 3.079 3.849 5.806 0 1.951-.418 3.923-1.212 5.707L2.02 187.004a17.73 17.73 0 00-1.538 7.246c0 3.233 1.47 6.185 3.784 7.987-2.313 1.802-3.784 4.754-3.784 7.987 0 2.513.519 4.952 1.538 7.246l12.409 27.919a14.153 14.153 0 011.212 5.707c0 2.728-1.582 5.114-3.849 5.806-1.842.574-3.74.263-5.21-.825a5.638 5.638 0 01-2.31-4.574c0-2.28 1.462-3.034 2.091-3.253.977-.341 1.902-.145 2.204.237.254.322.227 1.203-.681 2.632a1.893 1.893 0 103.193 2.034c2.42-3.794 1.129-6.169.461-7.017-1.347-1.703-3.858-2.285-6.28-1.494.796-3.375 1.528-6.566-1.544-9.639a1.894 1.894 0 10-2.679 2.679c1.517 1.517 1.32 2.764.52 6.147-.479 2.028-1.075 4.555-1.075 7.671a9.513 9.513 0 003.802 7.58 9.513 9.513 0 00-3.802 7.58c0 3.116.596 5.644 1.075 7.672.799 3.382.998 4.63-.52 6.147a1.894 1.894 0 102.68 2.679c3.072-3.073 2.339-6.263 1.544-9.639 2.422.788 4.934.204 6.28-1.494.668-.847 1.96-3.223-.461-7.017a1.9 1.9 0 00-2.616-.582 1.893 1.893 0 00-.577 2.616c.908 1.429.935 2.31.681 2.632-.301.381-1.227.577-2.204.237-.629-.218-2.091-.973-2.091-3.253 0-1.821.842-3.49 2.31-4.574 1.471-1.088 3.373-1.395 5.21-.825 2.266.692 3.849 3.079 3.849 5.806 0 1.951-.418 3.923-1.186 5.651-.122.255-3.018 6.254-3.764 8.49-1.475 4.423.024 6.647 1.047 7.576a4.677 4.677 0 003.154 1.214c.653 0 1.315-.137 1.939-.41.262-.116.478-.284.705-.44.227.157.444.324.705.44.623.274 1.286.41 1.939.41a4.685 4.685 0 003.154-1.214c1.023-.929 2.522-3.154 1.047-7.576-.746-2.236-3.641-8.235-3.737-8.435a14.153 14.153 0 01-1.212-5.707c0-2.728 1.582-5.115 3.849-5.806 1.843-.57 3.74-.263 5.21.825a5.638 5.638 0 012.31 4.574c0 2.28-1.462 3.034-2.091 3.253-.973.341-1.905.145-2.204-.237-.254-.322-.227-1.203.681-2.632a1.893 1.893 0 00-.577-2.616 1.906 1.906 0 00-2.616.582c-2.42 3.794-1.129 6.169-.461 7.017 1.347 1.698 3.858 2.283 6.28 1.494-.796 3.375-1.528 6.566 1.544 9.639.37.37.855.555 1.34.555a1.894 1.894 0 001.34-3.234c-1.517-1.517-1.32-2.764-.52-6.147.479-2.028 1.075-4.556 1.075-7.672a9.513 9.513 0 00-3.802-7.58 9.512 9.512 0 003.802-7.58c0-3.116-.596-5.644-1.075-7.672-.799-3.382-.998-4.63.52-6.147a1.894 1.894 0 10-2.679-2.679c-3.072 3.073-2.339 6.262-1.544 9.639-2.422-.791-4.934-.209-6.28 1.494-.668.847-1.96 3.223.461 7.017a1.9 1.9 0 002.616.582 1.893 1.893 0 00.577-2.616c-.908-1.429-.935-2.31-.681-2.632.3-.381 1.23-.577 2.204-.237.629.218 2.091.973 2.091 3.253 0 1.821-.842 3.49-2.31 4.574-1.471 1.088-3.375 1.399-5.21.825-2.266-.692-3.849-3.079-3.849-5.806 0-1.951.418-3.923 1.212-5.707l12.409-27.919a17.73 17.73 0 001.538-7.246c0-3.233-1.47-6.185-3.784-7.987 2.313-1.802 3.784-4.754 3.784-7.987 0-2.513-.519-4.952-1.538-7.246l-12.408-27.917a14.153 14.153 0 01-1.212-5.707c0-2.728 1.582-5.114 3.849-5.806 1.843-.57 3.74-.263 5.21.825a5.638 5.638 0 012.31 4.574c0 2.28-1.462 3.034-2.091 3.253-.973.344-1.905.145-2.204-.237-.254-.322-.227-1.203.681-2.632a1.893 1.893 0 00-.577-2.616 1.906 1.906 0 00-2.616.582c-2.42 3.794-1.129 6.169-.461 7.017 1.347 1.698 3.858 2.283 6.28 1.494-.796 3.375-1.528 6.566 1.544 9.639.37.37.855.555 1.34.555a1.894 1.894 0 001.34-3.234c-1.517-1.517-1.32-2.764-.52-6.147.479-2.028 1.075-4.556 1.075-7.672 0-2.073-.729-4.056-1.955-5.685h.061a1.894 1.894 0 001.895-1.895 1.894 1.894 0 00-1.895-1.895h-.061c1.227-1.629 1.955-3.61 1.955-5.685 0-3.116-.596-5.644-1.075-7.672-.799-3.383-.998-4.63.52-6.147a1.894 1.894 0 10-2.679-2.679c-3.072 3.073-2.339 6.263-1.544 9.639-2.422-.788-4.934-.204-6.28 1.494-.668.847-1.96 3.223.461 7.017a1.902 1.902 0 002.616.582 1.893 1.893 0 00.577-2.616c-.908-1.429-.935-2.31-.681-2.632.3-.381 1.23-.577 2.204-.237.629.218 2.091.973 2.091 3.253 0 1.821-.842 3.49-2.31 4.574-1.471 1.088-3.375 1.395-5.21.825-2.266-.692-3.849-3.079-3.849-5.806 0-1.951.418-3.923 1.212-5.707l12.409-27.919a17.73 17.73 0 001.538-7.246c0-3.233-1.47-6.185-3.784-7.987 2.313-1.802 3.784-4.754 3.784-7.987 0-2.513-.519-4.952-1.538-7.246L20.648 45.397a14.153 14.153 0 01-1.212-5.707c0-2.728 1.582-5.114 3.849-5.806 1.843-.57 3.74-.263 5.21.825a5.638 5.638 0 012.31 4.574c0 2.28-1.462 3.034-2.091 3.253-.973.341-1.905.14-2.204-.237-.254-.322-.227-1.203.681-2.632a1.893 1.893 0 00-.577-2.616 1.903 1.903 0 00-2.616.581c-2.42 3.794-1.129 6.169-.461 7.017 1.347 1.698 3.858 2.283 6.28 1.494-.796 3.375-1.528 6.566 1.544 9.639.37.37.855.555 1.34.555a1.894 1.894 0 001.34-3.234c-1.517-1.517-1.32-2.764-.52-6.147.479-2.028 1.075-4.556 1.075-7.672 0-2.073-.729-4.056-1.955-5.685h.061a1.894 1.894 0 001.895-1.895 1.894 1.894 0 00-1.895-1.895h-.061c1.227-1.629 1.955-3.61 1.955-5.685-.006-3.121-.602-5.649-1.08-7.677zm-19.23-8.075c-.673-2.02-.438-3.171.006-3.575.29-.274.73-.263 1.009-.137.342.152.342.393.342.511 0 1.047.847 1.895 1.895 1.895a1.894 1.894 0 001.895-1.895c0-.118 0-.359.342-.511.274-.126.711-.137 1.009.137.444.404.679 1.555.006 3.575-.49 1.465-2.263 5.279-3.251 7.349-.968-2.022-2.76-5.874-3.253-7.349zm3.251 78.185c.544.739 1.159 1.427 1.907 1.987-.748.561-1.363 1.248-1.907 1.987-.544-.739-1.159-1.427-1.907-1.987.748-.561 1.363-1.247 1.907-1.987zm0 113.692c.544.739 1.159 1.427 1.907 1.987-.748.561-1.363 1.248-1.907 1.987-.544-.739-1.159-1.427-1.907-1.987.748-.561 1.363-1.247 1.907-1.987zm3.25 82.16c.673 2.02.438 3.171-.006 3.575-.298.27-.735.259-1.009.137-.342-.152-.342-.392-.342-.511a1.894 1.894 0 00-1.895-1.895 1.893 1.893 0 00-1.895 1.895c0 .118 0 .359-.342.511-.278.122-.718.134-1.009-.137-.444-.404-.679-1.555-.006-3.575.49-1.465 2.263-5.279 3.251-7.349.968 2.021 2.76 5.874 3.253 7.349zm-1.361-23.327a9.406 9.406 0 00-1.889 1.981 9.405 9.405 0 00-1.889-1.981 9.406 9.406 0 001.889-1.981 9.356 9.356 0 001.889 1.981zm10.162-43.153l-12.052 27.116-12.052-27.116a14.153 14.153 0 01-1.212-5.707c0-2.728 1.582-5.115 3.849-5.806 1.842-.57 3.742-.263 5.21.825a5.638 5.638 0 012.31 4.574c0 2.28-1.462 3.034-2.091 3.253-.977.341-1.906.145-2.204-.237-.254-.322-.227-1.203.681-2.632a1.893 1.893 0 00-.577-2.616 1.906 1.906 0 00-2.616.582c-2.42 3.794-1.129 6.169-.461 7.017 1.372 1.732 3.953 2.328 6.421 1.465.281-.097.566-.218.847-.361v4.792l-.003-.003a1.894 1.894 0 00-3.786.11c0 1.236.864 3.38 3.789 4.044v3.535c0 1.047.847 1.895 1.895 1.895a1.893 1.893 0 001.895-1.895v-3.535c2.925-.664 3.789-2.808 3.789-4.044 0-1.047-.845-1.957-1.891-1.957-1.047 0-1.891.785-1.891 1.832l-.008.011v-4.783c.281.143.566.264.847.361 2.468.862 5.048.266 6.421-1.465.668-.847 1.96-3.223-.461-7.017a1.9 1.9 0 00-2.616-.582 1.893 1.893 0 00-.577 2.616c.908 1.429.935 2.31.681 2.632-.3.381-1.229.577-2.204.237-.629-.218-2.091-.973-2.091-3.253 0-1.821.842-3.49 2.31-4.574 1.471-1.088 3.375-1.399 5.21-.825 2.266.692 3.849 3.079 3.849 5.806a14.08 14.08 0 01-1.211 5.705zm0-27.386a14.153 14.153 0 011.212 5.707c0 2.728-1.582 5.114-3.849 5.806-1.839.574-3.742.263-5.21-.825a5.638 5.638 0 01-2.31-4.574c0-2.28 1.462-3.034 2.091-3.253.975-.341 1.905-.145 2.204.237.254.322.227 1.203-.681 2.632a1.893 1.893 0 103.193 2.034c2.42-3.794 1.129-6.169.461-7.017-1.373-1.732-3.953-2.321-6.421-1.465a6.832 6.832 0 00-.847.361v-4.793l.003.006a1.895 1.895 0 003.786-.111c0-1.236-.864-3.38-3.789-4.044v-3.535a1.894 1.894 0 00-1.895-1.895 1.893 1.893 0 00-1.895 1.895v3.535c-2.925.664-3.789 2.808-3.789 4.044 0 1.047.845 1.957 1.891 1.957 1.047 0 1.891-.785 1.891-1.832.001-.003.007-.008.007-.008l.001 4.78a6.684 6.684 0 00-.847-.361c-2.468-.855-5.049-.266-6.421 1.465-.668.847-1.96 3.223.461 7.017a1.903 1.903 0 002.616.582 1.893 1.893 0 00.577-2.616c-.908-1.429-.935-2.31-.681-2.632.298-.381 1.227-.577 2.204-.237.629.218 2.091.973 2.091 3.253 0 1.821-.842 3.49-2.31 4.574-1.471 1.088-3.371 1.399-5.21.825-2.266-.692-3.849-3.079-3.849-5.806 0-1.951.418-3.923 1.212-5.707l12.052-27.116 12.051 27.117zM19.426 145.39a9.406 9.406 0 00-1.889 1.981 9.405 9.405 0 00-1.889-1.981 9.406 9.406 0 001.889-1.981 9.356 9.356 0 001.889 1.981zm10.162-43.152l-12.052 27.116-12.052-27.116a14.153 14.153 0 01-1.212-5.707c0-2.728 1.582-5.114 3.849-5.806 1.842-.57 3.742-.263 5.21.825a5.638 5.638 0 012.31 4.574c0 2.28-1.462 3.034-2.091 3.253-.977.344-1.906.145-2.204-.237-.254-.322-.227-1.203.681-2.632a1.893 1.893 0 00-.577-2.616 1.9 1.9 0 00-2.616.582c-2.42 3.794-1.129 6.169-.461 7.017 1.372 1.732 3.953 2.324 6.421 1.465.281-.097.566-.218.847-.361v4.792l-.003-.006a1.895 1.895 0 00-3.786.111c0 1.236.864 3.38 3.789 4.044v3.535c0 1.047.847 1.895 1.895 1.895a1.893 1.893 0 001.895-1.895v-3.535c2.925-.664 3.789-2.808 3.789-4.044 0-1.047-.845-1.958-1.891-1.958-1.047 0-1.891.785-1.891 1.832-.001.003-.007.008-.007.008l-.001-4.78c.281.143.566.264.847.361 2.468.858 5.048.266 6.421-1.465.668-.847 1.96-3.223-.461-7.017a1.894 1.894 0 10-3.193 2.034c.908 1.429.935 2.31.681 2.632-.3.381-1.229.582-2.204.237-.629-.218-2.091-.973-2.091-3.253 0-1.821.842-3.49 2.31-4.574 1.471-1.088 3.375-1.395 5.21-.825 2.266.692 3.849 3.079 3.849 5.806a14.087 14.087 0 01-1.211 5.708zm0-27.387a14.153 14.153 0 011.212 5.707c0 2.728-1.582 5.114-3.849 5.806-1.839.574-3.742.263-5.21-.825a5.638 5.638 0 01-2.31-4.574c0-2.28 1.462-3.034 2.091-3.253.975-.341 1.905-.145 2.204.237.254.322.227 1.203-.681 2.632a1.893 1.893 0 103.193 2.034c2.42-3.794 1.129-6.169.461-7.017-1.373-1.732-3.953-2.324-6.421-1.465a6.684 6.684 0 00-.847.361v-4.792l.003.003a1.894 1.894 0 003.786-.11c0-1.236-.864-3.38-3.789-4.044v-3.535a1.894 1.894 0 00-1.895-1.895 1.893 1.893 0 00-1.895 1.895v3.535c-2.925.664-3.789 2.808-3.789 4.044 0 1.047.845 1.958 1.891 1.958 1.047 0 1.891-.785 1.891-1.832l.008-.011v4.783a6.684 6.684 0 00-.847-.361c-2.468-.858-5.049-.266-6.421 1.465-.668.847-1.96 3.223.461 7.017a1.903 1.903 0 002.616.582 1.893 1.893 0 00.577-2.616c-.908-1.429-.935-2.31-.681-2.632.298-.381 1.227-.577 2.204-.237.629.218 2.091.973 2.091 3.253 0 1.821-.842 3.49-2.31 4.574-1.471 1.088-3.371 1.399-5.21.825-2.266-.692-3.849-3.079-3.849-5.806 0-1.951.418-3.923 1.212-5.707l12.052-27.116 12.051 27.117zM15.647 31.699a9.406 9.406 0 001.889-1.981 9.405 9.405 0 001.889 1.981 9.406 9.406 0 00-1.889 1.981 9.356 9.356 0 00-1.889-1.981z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 244.742,
    cy: 123.034,
    r: 45.606
  }), /*#__PURE__*/react.createElement("path", {
    d: "M248.167 64.883a3.421 3.421 0 01-6.842 0c0-1.889 3.421-10.262 3.421-10.262s3.421 8.373 3.421 10.262zm-6.841 116.303a3.421 3.421 0 016.842 0c0 1.889-3.421 10.262-3.421 10.262s-3.421-8.373-3.421-10.262zm61.572-54.731a3.421 3.421 0 010-6.842c1.889 0 10.262 3.421 10.262 3.421s-8.373 3.421-10.262 3.421zm-116.303-6.841a3.421 3.421 0 010 6.842c-1.889 0-10.262-3.421-10.262-3.421s8.373-3.421 10.262-3.421zm101.69-35.28a3.42 3.42 0 11-4.838-4.838c1.336-1.337 9.675-4.838 9.675-4.838s-3.5 8.34-4.837 9.676zm-87.076 77.401a3.42 3.42 0 114.838 4.838c-1.336 1.337-9.675 4.837-9.675 4.837s3.501-8.339 4.837-9.675zm82.239 4.838a3.42 3.42 0 114.838-4.838c1.337 1.336 4.838 9.675 4.838 9.675s-8.34-3.502-9.676-4.837zm-77.402-87.077a3.42 3.42 0 11-4.838 4.838c-1.337-1.336-4.838-9.675-4.838-9.675s8.34 3.502 9.676 4.837zM225.654 68a3.42 3.42 0 11-6.321 2.617c-.723-1.746-.767-10.79-.767-10.79s6.365 6.427 7.088 8.173zm38.187 110.069a3.42 3.42 0 116.321-2.617c.723 1.746.767 10.79.767 10.79s-6.366-6.427-7.088-8.173zm35.94-74.127a3.42 3.42 0 11-2.617-6.321c1.746-.723 10.789-.767 10.789-.767s-6.426 6.364-8.172 7.088zm-110.068 38.185a3.42 3.42 0 112.617 6.321c-1.746.723-10.79.767-10.79.767s6.427-6.364 8.173-7.088zm80.448-71.509a3.421 3.421 0 01-6.321-2.617c.723-1.745 7.087-8.172 7.087-8.172s-.043 9.044-.766 10.789zm-50.828 104.833a3.421 3.421 0 016.321 2.617c-.723 1.746-7.087 8.172-7.087 8.172s.043-9.044.766-10.789zm77.831-27.003a3.421 3.421 0 012.617-6.321c1.745.722 8.172 7.087 8.172 7.087s-9.045-.042-10.789-.766zM192.33 97.621a3.421 3.421 0 01-2.617 6.321c-1.745-.723-8.172-7.087-8.172-7.087s9.045.042 10.789.766zm44.428-32.288a3.42 3.42 0 01-2.688 4.022 3.42 3.42 0 01-4.022-2.688c-.369-1.853 1.353-10.732 1.353-10.732s4.988 7.545 5.357 9.398zm15.979 115.403a3.42 3.42 0 012.688-4.022 3.419 3.419 0 014.022 2.688c.369 1.853-1.353 10.732-1.353 10.732s-4.989-7.545-5.357-9.398zm49.712-65.692a3.42 3.42 0 01-4.022-2.688 3.419 3.419 0 012.688-4.022c1.853-.369 10.732 1.353 10.732 1.353s-7.545 4.989-9.398 5.357zm-115.404 15.981a3.42 3.42 0 014.022 2.688 3.419 3.419 0 01-2.688 4.022c-1.853.369-10.732-1.353-10.732-1.353s7.545-4.989 9.398-5.357zm92.854-54.441a3.42 3.42 0 11-5.688-3.802c1.049-1.571 8.545-6.632 8.545-6.632s-1.808 8.862-2.857 10.434zm-70.304 92.901a3.42 3.42 0 115.688 3.802c-1.049 1.571-8.545 6.632-8.545 6.632s1.808-8.862 2.857-10.434zm81.603-11.299a3.42 3.42 0 113.802-5.688c1.571 1.049 6.632 8.545 6.632 8.545s-8.863-1.808-10.434-2.857zm-92.902-70.303a3.42 3.42 0 11-3.802 5.688c-1.571-1.05-6.632-8.545-6.632-8.545s8.864 1.808 10.434 2.857zm16.987-15.101a3.422 3.422 0 01-5.688 3.802c-1.049-1.571-2.857-10.433-2.857-10.433s7.496 5.061 8.545 6.631zm58.927 100.505a3.422 3.422 0 01.943-4.745 3.422 3.422 0 014.745.943c1.049 1.571 2.857 10.433 2.857 10.433s-7.495-5.061-8.545-6.631zm20.789-79.716a3.422 3.422 0 01-4.745-.943 3.422 3.422 0 01.943-4.745c1.571-1.049 10.433-2.857 10.433-2.857s-5.06 7.496-6.631 8.545zm-100.504 58.927a3.422 3.422 0 014.745.943 3.422 3.422 0 01-.943 4.745c-1.571 1.049-10.433 2.857-10.433 2.857s5.06-7.496 6.631-8.545zm64.952-85.831a3.42 3.42 0 11-6.71-1.334c.369-1.853 5.357-9.398 5.357-9.398s1.721 8.879 1.353 10.732zm-29.4 112.735a3.42 3.42 0 116.71 1.334c-.369 1.853-5.357 9.398-5.357 9.398s-1.721-8.879-1.353-10.732zm71.067-41.667a3.42 3.42 0 111.334-6.71c1.853.369 9.398 5.357 9.398 5.357s-8.879 1.721-10.732 1.353zM188.38 108.334a3.42 3.42 0 11-1.334 6.71c-1.853-.369-9.398-5.357-9.398-5.357s8.879-1.721 10.732-1.353z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M352.027 135.034a2.615 2.615 0 00-3.42 1.41v.006l-.151.358c-1.977 4.618-6.067 11.367-10.197 17.716 3.847-12.383 7.364-25.609 7.609-26.539a2.615 2.615 0 00-5.048-1.374c-1.795 6.432-5.466 14.897-8.853 22.063.621-7.99.738-15.392.746-15.928a2.62 2.62 0 00-2.503-2.652c-1.331.041-2.615 1.012-2.72 2.426-3.349 46.068-47.678 66.676-51.994 68.572-2.258.225-12.777 1.41-22.324 4.725-1.082.376-2.004.753-2.922 1.127a2.642 2.642 0 00-1.092-.177c-29.302 2.12-52.666-9.9-69.458-35.652-12.687-19.458-16.666-39.882-16.705-40.086-.268-1.42-1.628-2.335-3.054-2.084a2.613 2.613 0 00-2.084 3.054c.106.564 1.852 9.479 6.66 21.212-6.433-10.155-10.916-22.457-12.494-28.864-.032-.128-.114-.225-.162-.343-.074-.181-.136-.363-.245-.52-.077-.111-.178-.192-.269-.289-.143-.151-.28-.299-.455-.412-.1-.065-.212-.097-.321-.148-.193-.09-.382-.179-.597-.22-.149-.029-.301-.01-.456-.013-.157-.002-.305-.042-.466-.014-.035.006-.062.03-.097.038-.034.007-.066-.004-.1.003-.14.034-.247.122-.375.177-.163.071-.33.124-.473.223-.141.097-.246.223-.363.344-.117.12-.239.226-.331.365-.093.141-.143.3-.209.457-.063.153-.136.297-.169.462-.034.169-.019.343-.018.52 0 .141-.039.276-.014.42.01.062.03.124.041.184v.01l.01.038c1.618 9.533 5.474 19.415 8.961 26.951-5.537-6.283-10.164-13.522-11.804-17.809-.047-.125-.142-.212-.206-.324-.097-.173-.182-.35-.313-.493-.093-.102-.206-.168-.312-.253-.159-.128-.31-.257-.494-.345-.118-.056-.246-.074-.371-.113-.193-.058-.38-.122-.585-.135-.161-.011-.321.03-.484.051-.151.019-.3 0-.45.047-.029.009-.049.032-.076.042-.028.009-.056.003-.084.014-.142.054-.243.159-.37.234-.149.088-.308.161-.435.275-.13.117-.22.262-.322.401-.097.131-.205.248-.277.394-.075.153-.103.319-.146.484-.043.161-.1.311-.111.48-.012.169.03.338.052.509.019.148-.001.295.045.441 2.846 9.18 9.69 20.102 15.052 27.796-4.468-3.443-7.752-7.167-8.705-8.291l-.307-.367a2.613 2.613 0 10-4.056 3.299c.049.062.245.307.573.69 3.924 4.669 8.199 9.026 12.072 12.705l-5.298-2.258a2.616 2.616 0 00-2.592 4.5c.516.383 9.898 7.392 18.02 11.535-.766.046-1.665-.01-2.671-.087-1.228-.118-2.436.761-2.735 2.007a2.615 2.615 0 001.548 3.019c.2.082 2.675 1.103 5.731 2.191a2.611 2.611 0 00-1.515 1.665 2.61 2.61 0 001.195 3.019c.274.159 3.971 2.279 8.546 4.158a2.619 2.619 0 00.707 3.581c.794.546 18.559 12.602 39.307 12.602 1.362 0 2.738-.051 4.122-.163a2.615 2.615 0 002.399-2.815c-.115-1.441-1.364-2.529-2.817-2.396-13.034 1.063-25.591-3.831-33.059-7.571.986-.241 1.553-.46 1.694-.516a2.617 2.617 0 10-.93-5.043c-3.032-.062-7.231-1.538-10.848-3.122 1.366-.684 2.164-1.339 2.234-1.395a2.626 2.626 0 00.851-2.702 2.617 2.617 0 00-2.104-1.89c-1.111-.184-2.496-.542-3.946-.981 1.41-.812 2.01-1.706 2.24-2.161a2.622 2.622 0 00.023-2.304 2.608 2.608 0 00-1.809-1.426c-.684-.148-1.459-.398-2.296-.725a2.622 2.622 0 00-.235-3.918c-.054-.041-2.084-1.634-5.158-4.286a2.59 2.59 0 001.231-.96 2.61 2.61 0 00-.11-3.122c-.058-.072-2.091-2.628-4.893-6.51.925.718 1.849 1.452 2.773 2.046.435.276.927.414 1.415.414.662 0 1.315-.25 1.818-.736.207-.2.369-.43.497-.675 1.587 1.695 3.254 3.234 5.005 4.547.228.171.505.168.761.254.742 1.244 1.514 2.49 2.324 3.736 15.883 24.438 38.278 37.528 65.138 38.314-2.473 1.502-5.158 3.054-9.409 4.71-.928.362-1.748.724-2.572 1.087-.398.078-.771.222-1.082.469-7.42 3.435-10.492 6.829-11.738 9.203-1.244 2.36-.171 4.781 1.348 6.038a2.643 2.643 0 001.675.587c.414 0 .828-.092 1.203-.281.925-.46 1.543-1.436 1.502-2.462.107-.117.562-.495 1.987-.542 1.039-.087 3.226.148 5.778.352 2.428.2 5.34.427 8.436.586-1.937 2.258-4.188 4.875-4.188 4.875a2.613 2.613 0 00-.375 2.835 2.629 2.629 0 002.447 1.486 333.16 333.16 0 014.393-.132 4.437 4.437 0 002.427 1.634c1.799.46 3.592-.26 4.942-1.113a6.461 6.461 0 002.854 1.165c1.826.25 3.517-.281 4.74-.884a6.303 6.303 0 003.454 1.027h.043c2.041-.01 3.827-.996 5.09-1.962a6.424 6.424 0 003.009.915c1.873.066 3.425-.654 4.457-1.329 3.686.74 6.863-.996 8.963-2.912.958.557 1.869.695 2.595.659 1.867-.066 3.289-1.201 4.202-2.217 4.179.505 7.178-.266 8.911-2.324.945-1.119 1.329-2.38 1.433-3.53 11.594-.066 12.643-6.396 12.728-7.178a2.61 2.61 0 00-.602-1.966 2.609 2.609 0 00-1.839-.925l-30.396-1.828a2.59 2.59 0 00-2.702 2.003c-.006.02-.524 1.951-2.145 3.495-2.182 2.083-5.695 3.183-9.516 3.766a2.62 2.62 0 00-.169-1.054c-.521-1.348-2.038-2.003-3.382-1.496-6.275 2.435-16.435 2.129-24.383 1.576 1.219-.996 2.687-1.983 3.86-2.627a2.619 2.619 0 001.313-2.778c-.152-.809-.737-1.372-1.443-1.734 2.21-1.116 4.022-2.194 5.741-3.242 2.984-1.828 5.803-3.551 10.937-5.333 9.91-3.443 21.379-4.49 21.494-4.501.26-.021.516-.087.758-.184.408-.169 32.758-13.721 47.999-44.991a29.64 29.64 0 01-.647 2.564 2.618 2.618 0 104.276 2.692c-.963 2.539-1.834 4.536-2.545 5.716a2.62 2.62 0 001.66 3.908 82.582 82.582 0 01-3.569 4.858 2.618 2.618 0 00.082 3.357c-2.048 2.145-3.864 3.913-5.244 5.037a2.615 2.615 0 00-.781 2.994c-1.331.761-2.424 1.298-3.182 1.527a2.613 2.613 0 00-.764 4.628 81.384 81.384 0 01-5.249 1.22 2.617 2.617 0 00-.787 4.837c.082.046.975.552 2.343 1.134-5.06 2.038-14.094 4.7-28.919 6.161a2.618 2.618 0 00-2.345 2.861c.14 1.436 1.382 2.432 2.861 2.35 28.142-2.784 36.832-9.828 37.187-10.13a2.612 2.612 0 00-.476-4.322c8.991-2.83 12.851-5.962 13.053-6.13a2.62 2.62 0 00.585-3.341c-.654-1.109-2.015-1.589-3.203-1.109-.334.128-.868.26-1.543.393 6.034-4.132 12.439-9.053 15.256-11.249a28.78 28.78 0 001.341-1.053 2.612 2.612 0 00.344-3.652 2.62 2.62 0 00-3.648-.404c-.408.322-.833.654-1.272.996-1.3.966-2.963 2.059-4.777 3.182 6.848-7.775 13.742-16.204 15.711-18.625l.534-.659a2.613 2.613 0 00-.396-3.673 2.607 2.607 0 00-3.676.388l-.006.006-.002.006c-.049.056-.27.332-.643.792a141.316 141.316 0 01-6.378 7.233c6.976-12.643 12.258-25.088 13.032-26.932l.082-.2a2.606 2.606 0 00-1.41-3.408zm-122.59 88.167l.714.093a12.307 12.307 0 00-2.155 2.685 98.12 98.12 0 00-3.252-.227c1.217-.795 2.783-1.658 4.693-2.551z"
  }))));
}

function SvgLa(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 70.897H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v61.794zm-8.829 264.827H8.828A8.829 8.829 0 010 326.896v-61.793h512v61.793a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 70.897h512v194.207H0z"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#F5F5F5",
    cx: 256,
    cy: 168,
    r: 70.621
  })));
}

function SvgLb(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 70.897H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v61.794zm-8.829 264.827H8.828A8.829 8.829 0 010 326.896v-61.793h512v61.793a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 70.897h512v194.207H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M274.862 227.379l81.581-16.317c5.888-1.177 8.516-8.107 4.89-12.894a8.136 8.136 0 00-5.233-3.127l-86.911-13.551a4.447 4.447 0 01-3.7-5.124c.391-2.414 2.838-3.953 5.262-3.633l60.259 7.929c4.898.644 7.902-5.208 4.523-8.812l-4.838-5.16a12.572 12.572 0 00-6.785-3.746l-50.339-9.749 42.921 3.092c3.29.237 5.196-3.652 2.993-6.108l-2.201-2.453a9.354 9.354 0 00-5.048-2.909l-42.613-8.905 30.284-.876c2.678-.077 4.04-3.253 2.25-5.246l-1.358-1.513a8.48 8.48 0 00-3.97-2.486l-27.01-7.755h21.226c2.1 0 3.512-2.152 2.677-4.078l-.716-1.652a7.656 7.656 0 00-4.559-4.204l-19.629-6.678 9.654-.031c2.869-.009 4.793-2.951 3.652-5.582a10.045 10.045 0 00-4.593-4.924L256 79.724l-21.534 11.165a10.049 10.049 0 00-4.593 4.924c-1.141 2.633.783 5.574 3.652 5.582l9.654.032-19.629 6.678a7.65 7.65 0 00-4.559 4.204l-.716 1.652c-.835 1.927.577 4.078 2.677 4.078h21.226l-27.01 7.755a8.48 8.48 0 00-3.97 2.486l-1.358 1.513c-1.789 1.994-.427 5.169 2.25 5.246l30.284.876-42.613 8.905a9.347 9.347 0 00-5.048 2.909l-2.201 2.453c-2.204 2.455-.298 6.345 2.993 6.108l42.921-3.092-50.339 9.749a12.572 12.572 0 00-6.785 3.746l-4.838 5.16c-3.379 3.604-.374 9.457 4.523 8.812l60.259-7.929c2.424-.319 4.872 1.219 5.262 3.633a4.446 4.446 0 01-3.7 5.124l-86.911 13.551a8.14 8.14 0 00-5.233 3.126c-3.626 4.786-.998 11.716 4.89 12.894l81.581 16.317v10.182a20.958 20.958 0 01-6.138 14.819l-12.721 12.723h75.449l-12.724-12.724a20.958 20.958 0 01-6.138-14.819v-10.183h-.001z",
    fill: "#73AF00"
  })));
}

function SvgLi(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M164.028 100.687a1.237 1.237 0 00-.708-.749 23.121 23.121 0 00-1.839-.59c.489-.662.834-1.438.834-2.322 0-.758-.269-1.427-.638-2.031 1.222-.683 2.083-1.94 2.083-3.435 0-1.185-.544-2.221-1.368-2.952.988-.726 1.672-1.841 1.672-3.157 0-1.469-.836-2.702-2.023-3.394.623-.704 1.033-1.604 1.033-2.616 0-1.761-1.167-3.212-2.755-3.738.362-.6.627-1.265.627-2.016 0-2.164-1.739-3.913-3.892-3.968.089-.332.205-.655.205-1.015a3.993 3.993 0 00-3.989-3.988c-.371 0-.705.117-1.046.212.006-.088.051-.163.051-.254a3.993 3.993 0 00-3.988-3.988c-.756 0-1.422.267-2.026.633-.465-1.686-1.947-2.954-3.778-2.954a3.973 3.973 0 00-2.817 1.169c-.675-1.246-1.95-2.125-3.464-2.125-1.382 0-2.541.749-3.257 1.818-.728-.774-1.743-1.271-2.887-1.271-1.476 0-2.716.843-3.405 2.037-.73-.818-1.763-1.356-2.944-1.356-1.46 0-2.684.826-3.379 1.998-.679-.534-1.496-.904-2.424-.904-1.676 0-3.101 1.046-3.69 2.515a3.965 3.965 0 00-2.763-1.132c-1.521 0-2.802.886-3.474 2.141a3.837 3.837 0 00-.931-.427 7.734 7.734 0 001.332-4.35c0-3.125-1.862-5.807-4.525-7.046l1.118-2.237a1.233 1.233 0 000-1.101l-1.346-2.692c.098-.089.191-.182.28-.28l2.695 1.346a1.227 1.227 0 001.096-.003l6.554-3.277a1.226 1.226 0 000-2.196l-6.554-3.277a1.226 1.226 0 00-1.098 0l-2.692 1.346a4.721 4.721 0 00-.282-.284l1.346-2.692a1.233 1.233 0 000-1.101l-3.277-6.554c-.416-.832-1.783-.832-2.199 0l-3.277 6.554a1.233 1.233 0 000 1.101l1.346 2.692a4.109 4.109 0 00-.28.28l-2.695-1.346a1.226 1.226 0 00-1.098.003l-6.554 3.277a1.226 1.226 0 000 2.196l6.554 3.277c.173.086.36.131.548.131.189 0 .376-.045.548-.131l2.692-1.346c.09.099.184.193.282.284l-1.346 2.692a1.233 1.233 0 000 1.101l1.118 2.237c-2.663 1.238-4.525 3.921-4.525 7.046 0 1.577.479 3.041 1.288 4.268a3.85 3.85 0 00-1.336.51c-.672-1.255-1.953-2.141-3.474-2.141a3.963 3.963 0 00-2.763 1.132 3.98 3.98 0 00-3.69-2.515c-.929 0-1.747.37-2.424.904-.695-1.172-1.92-1.998-3.379-1.998-1.181 0-2.214.538-2.944 1.356-.69-1.195-1.929-2.037-3.405-2.037-1.143 0-2.159.498-2.887 1.271-.716-1.069-1.876-1.818-3.257-1.818-1.514 0-2.788.879-3.464 2.125a3.973 3.973 0 00-2.817-1.169c-1.832 0-3.314 1.268-3.778 2.954-.602-.366-1.27-.633-2.026-.633a3.993 3.993 0 00-3.988 3.988c0 .089.045.166.051.254-.341-.095-.675-.212-1.046-.212a3.993 3.993 0 00-3.989 3.988c0 .36.116.683.205 1.015-2.153.055-3.892 1.804-3.892 3.968 0 .751.265 1.416.627 2.016-1.588.526-2.755 1.976-2.755 3.738 0 1.012.409 1.912 1.033 2.616-1.186.692-2.023 1.924-2.023 3.394 0 1.318.684 2.431 1.672 3.157-.824.732-1.368 1.767-1.368 2.952 0 1.495.862 2.752 2.083 3.435-.369.605-.638 1.273-.638 2.031 0 .931.371 1.751.907 2.43-.888.263-1.433.47-1.463.482a1.234 1.234 0 00-.598 1.776c.097.16 9.76 16.386 12.959 32.378.079.396.366.651.704.811 2.457 3.319 23.746 5.913 49.66 5.913 25.914 0 47.202-2.594 49.66-5.913.338-.161.626-.415.704-.811 3.196-15.98 12.861-32.218 12.959-32.378.185-.31.226-.685.111-1.028z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#464655"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M164.028 100.687a1.237 1.237 0 00-.708-.749 23.121 23.121 0 00-1.839-.59c.489-.662.834-1.438.834-2.322 0-.758-.269-1.427-.638-2.031 1.222-.683 2.083-1.94 2.083-3.435 0-1.185-.544-2.221-1.368-2.952.988-.726 1.672-1.841 1.672-3.157 0-1.469-.836-2.702-2.023-3.394.623-.704 1.033-1.604 1.033-2.616 0-1.761-1.167-3.212-2.755-3.738.362-.6.627-1.265.627-2.016 0-2.164-1.739-3.913-3.892-3.968.089-.332.205-.655.205-1.015a3.993 3.993 0 00-3.989-3.988c-.371 0-.705.117-1.046.212.006-.088.051-.163.051-.254a3.993 3.993 0 00-3.988-3.988c-.756 0-1.422.267-2.026.633-.465-1.686-1.947-2.954-3.778-2.954a3.973 3.973 0 00-2.817 1.169c-.675-1.246-1.95-2.125-3.464-2.125-1.382 0-2.541.749-3.257 1.818-.728-.774-1.743-1.271-2.887-1.271-1.476 0-2.716.843-3.405 2.037-.73-.818-1.763-1.356-2.944-1.356-1.46 0-2.684.826-3.379 1.998-.679-.534-1.496-.904-2.424-.904-1.676 0-3.101 1.046-3.69 2.515a3.965 3.965 0 00-2.763-1.132c-1.521 0-2.802.886-3.474 2.141a3.837 3.837 0 00-.931-.427 7.734 7.734 0 001.332-4.35c0-3.125-1.862-5.807-4.525-7.046l1.118-2.237a1.233 1.233 0 000-1.101l-1.346-2.692c.098-.089.191-.182.28-.28l2.695 1.346a1.227 1.227 0 001.096-.003l6.554-3.277a1.226 1.226 0 000-2.196l-6.554-3.277a1.226 1.226 0 00-1.098 0l-2.692 1.346a4.721 4.721 0 00-.282-.284l1.346-2.692a1.233 1.233 0 000-1.101l-3.277-6.554c-.416-.832-1.783-.832-2.199 0l-3.277 6.554a1.233 1.233 0 000 1.101l1.346 2.692a4.109 4.109 0 00-.28.28l-2.695-1.346a1.226 1.226 0 00-1.098.003l-6.554 3.277a1.226 1.226 0 000 2.196l6.554 3.277c.173.086.36.131.548.131.189 0 .376-.045.548-.131l2.692-1.346c.09.099.184.193.282.284l-1.346 2.692a1.233 1.233 0 000 1.101l1.118 2.237c-2.663 1.238-4.525 3.921-4.525 7.046 0 1.577.479 3.041 1.288 4.268a3.85 3.85 0 00-1.336.51c-.672-1.255-1.953-2.141-3.474-2.141a3.963 3.963 0 00-2.763 1.132 3.98 3.98 0 00-3.69-2.515c-.929 0-1.747.37-2.424.904-.695-1.172-1.92-1.998-3.379-1.998-1.181 0-2.214.538-2.944 1.356-.69-1.195-1.929-2.037-3.405-2.037-1.143 0-2.159.498-2.887 1.271-.716-1.069-1.876-1.818-3.257-1.818-1.514 0-2.788.879-3.464 2.125a3.973 3.973 0 00-2.817-1.169c-1.832 0-3.314 1.268-3.778 2.954-.602-.366-1.27-.633-2.026-.633a3.993 3.993 0 00-3.988 3.988c0 .089.045.166.051.254-.341-.095-.675-.212-1.046-.212a3.993 3.993 0 00-3.989 3.988c0 .36.116.683.205 1.015-2.153.055-3.892 1.804-3.892 3.968 0 .751.265 1.416.627 2.016-1.588.526-2.755 1.976-2.755 3.738 0 1.012.409 1.912 1.033 2.616-1.186.692-2.023 1.924-2.023 3.394 0 1.318.684 2.431 1.672 3.157-.824.732-1.368 1.767-1.368 2.952 0 1.495.862 2.752 2.083 3.435-.369.605-.638 1.273-.638 2.031 0 .931.371 1.751.907 2.43-.888.263-1.433.47-1.463.482a1.234 1.234 0 00-.598 1.776c.097.16 9.76 16.386 12.959 32.378.079.396.366.651.704.811 2.457 3.319 23.746 5.913 49.66 5.913 25.914 0 47.202-2.594 49.66-5.913.338-.161.626-.415.704-.811 3.196-15.98 12.861-32.218 12.959-32.378.185-.31.226-.685.111-1.028zm-34.742-7.916V73.538a37.46 37.46 0 014.533-.127v19.98c-1.356-.655-2.887-.846-4.533-.62zM115.14 66.575c.034.033.082.047.117.079l-.157.034c.017-.038.026-.076.04-.113zm43.186 28.921a1.53 1.53 0 010 3.058 1.53 1.53 0 010-3.058zm1.443-2.407a1.53 1.53 0 11.002-3.06 1.53 1.53 0 01-.002 3.06zm-1.223-7.639a1.53 1.53 0 113.06.001 1.53 1.53 0 01-3.06-.001zm-45.701 15.237c-1.468-5.581-3.373-13.982-4.177-22.38.845-.296 2.297-.781 4.177-1.35v23.73zm-20.486-22.28c-.865 8.937-2.976 17.889-4.463 23.4V76.955c2.108.638 3.689 1.177 4.463 1.452zm9.766-10.098a1.53 1.53 0 11-3.06-.001 1.53 1.53 0 013.06.001zm-16.523-1.726l-.01-.002s.006-.003.008-.006l.002.008zM40.665 83.921a1.53 1.53 0 010 3.058 1.53 1.53 0 010-3.058zM42.5 91.56a1.53 1.53 0 11-3.06-.001 1.53 1.53 0 013.06.001zm-.086 3.936a1.53 1.53 0 010 3.058 1.53 1.53 0 010-3.058zm6.311-20.706c2.406-3.892 7.102-8.53 15.82-8.53 8.512 0 20.522 2.601 28.214 4.513a72.939 72.939 0 01-.191 5.098c-5.248-1.827-26.121-8.508-34.999-2.432-10.047 6.89-6.872 20.033-4.995 25.476a19.754 19.754 0 00-4.761-.66c-3.629-7.281-3.265-16.706.912-23.465zm6.923 25.317c-.864-2.009-6.389-15.905 1.824-23.42v24.518a14.442 14.442 0 00-1.824-1.098zm4.282-25.151c1.298-.673 2.828-1.109 4.533-1.341v21.87c-2.465 2.499-3.561 5.938-4.044 8.524-.156-.196-.328-.354-.49-.537V74.956h.001zm6.992-1.547a37.46 37.46 0 014.533.127v19.213c-.268-.024-.548-.093-.81-.093-1.208 0-2.342.253-3.372.771-.127.063-.23.149-.352.216V73.408h.001v.001zm6.991.391c1.523.202 3.043.467 4.533.765v21.037c-1.56-1.076-3.078-1.854-4.533-2.329V73.8zm6.992 1.293c1.611.371 3.132.76 4.533 1.151v26.012a36.035 36.035 0 00-4.533-4.748V75.093zm14.301-3.699c1.848.48 3.306.879 4.161 1.12v20.844c-3.331.337-5.876 2.038-7.818 4.129 1.73-7.206 3.593-17.04 3.657-26.093zm6.618 1.12a217.02 217.02 0 014.009-1.08c.068 8.961 1.895 18.677 3.609 25.856-1.918-1.996-4.396-3.605-7.617-3.93V72.515h-.001v-.001zm13.479 3.732c1.402-.39 2.922-.78 4.533-1.151v22.606c0 .057.025.107.033.163a36.28 36.28 0 00-4.566 4.989V76.246zm6.991-1.679a70.472 70.472 0 014.533-.765v19.586c-1.458.535-2.979 1.384-4.533 2.507V74.567zm13.983-.95c1.706.232 3.235.666 4.533 1.34v28.788c0 .064.026.12.036.181-.024.031-.052.054-.076.084-.51-2.732-1.724-6.398-4.493-8.919V73.617zm6.991 3.072c8.799 8.056 1.79 23.505 1.714 23.669-.008.017-.006.034-.012.051-.584.332-1.149.722-1.702 1.151V76.689zm-.098-3.25c-8.702-5.96-28.974.36-34.709 2.332a71.948 71.948 0 01-.183-4.959c7.684-1.917 19.798-4.552 28.366-4.552 8.718 0 13.415 4.638 15.82 8.53 4.177 6.76 4.542 16.184.913 23.466-1.71.034-3.502.275-5.262.81 1.869-5.351 5.193-18.675-4.945-25.627zm15.915 7.531a1.53 1.53 0 11.002-3.06 1.53 1.53 0 01-.002 3.06zm-.597-7.285c0 .845-.686 1.533-1.532 1.533a1.534 1.534 0 01-1.529-1.533 1.53 1.53 0 013.061 0zm-3.686-4.983a1.53 1.53 0 11-3.06-.002 1.53 1.53 0 013.06.002zm-6.515-5.559a1.53 1.53 0 11-.002 3.06 1.53 1.53 0 01.002-3.06zm-5.804-2.321a1.53 1.53 0 010 3.058 1.53 1.53 0 010-3.058zm-6.281-.957a1.53 1.53 0 11-.002 3.06 1.53 1.53 0 01.002-3.06zm-6.145.548a1.53 1.53 0 11-.002 3.06 1.53 1.53 0 01.002-3.06zm-6.349.682a1.53 1.53 0 11-.002 3.06 1.53 1.53 0 01.002-3.06zm-5.805 1.094a1.53 1.53 0 010 3.058 1.53 1.53 0 010-3.058zm-6.451 1.383a1.53 1.53 0 010 3.058 1.53 1.53 0 010-3.058zm-5.531 4.544a1.53 1.53 0 010-3.058 1.53 1.53 0 010 3.058zM98.547 42.09a2.05 2.05 0 012.048-2.048 2.05 2.05 0 012.048 2.048 2.05 2.05 0 01-2.048 2.048 2.05 2.05 0 01-2.048-2.048zm8.602-1.904l3.807 1.905-3.807 1.905-2.133-1.067a4.46 4.46 0 00.085-.838 4.47 4.47 0 00-.085-.839l2.133-1.066zm-8.457-4.651l1.902-3.806 1.902 3.806-1.067 2.133a4.43 4.43 0 00-.836-.085c-.287 0-.565.033-.836.085l-1.065-2.133zm-4.652 8.459l-3.807-1.905 3.807-1.905 2.133 1.067a4.46 4.46 0 00-.085.838c0 .287.033.566.085.839l-2.133 1.066zm4.652 4.65l1.067-2.133c.271.052.55.085.836.085.286 0 .565-.033.836-.085l1.067 2.133-1.066 2.133c-.278-.03-.55-.085-.836-.085-.287 0-.558.054-.836.085l-1.068-2.133zm1.903 4.507a5.33 5.33 0 015.325 5.325 5.33 5.33 0 01-5.325 5.325 5.33 5.33 0 01-5.325-5.325 5.33 5.33 0 015.325-5.325zM94.82 65.057a1.53 1.53 0 010 3.058 1.53 1.53 0 010-3.058zm-5.53-1.485a1.53 1.53 0 010 3.058 1.53 1.53 0 010-3.058zm-6.453-1.383a1.53 1.53 0 010 3.058 1.53 1.53 0 010-3.058zm-5.803-1.094a1.531 1.531 0 110 3.062 1.534 1.534 0 01-1.529-1.533 1.528 1.528 0 011.529-1.529zm-6.35-.682c.845 0 1.532.685 1.532 1.529a1.53 1.53 0 01-3.061 0 1.53 1.53 0 011.529-1.529zm-6.146-.548a1.531 1.531 0 110 3.062 1.53 1.53 0 110-3.062zm-6.28.957a1.53 1.53 0 010 3.058 1.53 1.53 0 010-3.058zm-5.804 2.321a1.531 1.531 0 110 3.062 1.534 1.534 0 01-1.529-1.533 1.529 1.529 0 011.529-1.529zm-4.983 4.029a1.53 1.53 0 11-.002 3.06 1.53 1.53 0 01.002-3.06zm-3.687 4.984a1.53 1.53 0 11-.002 3.06 1.53 1.53 0 01.002-3.06zm-2.129 5.754a1.53 1.53 0 11-.002 3.06 1.53 1.53 0 01.002-3.06zm107.122 54.669c-5.667-2.803-25.06-4.871-48.181-4.871s-42.515 2.068-48.182 4.871c-2.931-13.569-9.939-26.697-12.275-30.823 3.892-1.194 15.034-3.562 20.03 6.43a1.23 1.23 0 002.33-.55c0-.089.067-9.106 5.875-12.011 5.751-2.861 15.055 6.637 18.015 12.562a1.212 1.212 0 00.449.466c.039.024.075.046.117.065.053.026.095.067.153.086.127.042.255.061.38.061.023 0 .042-.02.065-.021.024 0 .043.015.068.014.116-.013.201-.092.305-.135.11-.044.221-.065.314-.138.114-.089.174-.218.252-.343.051-.083.136-.132.168-.228.036-.113.189-.59.415-1.334 1.074-3.105 4.477-10.923 11.524-10.923 5.981 0 9.336 5.633 10.873 9.237.501 1.731.854 2.84.913 3.02a1.23 1.23 0 001.55.79c.022-.008.038-.025.06-.033.342-.087.651-.258.814-.584 2.962-5.928 12.274-15.404 18.015-12.562a7.77 7.77 0 011.079.66c.333.281.558.489.938.794 3.785 3.694 3.858 10.478 3.858 10.557.001.569.394 1.066.948 1.197a1.233 1.233 0 001.382-.647c4.986-9.97 16.13-7.617 20.029-6.426-2.344 4.129-9.35 17.254-12.281 30.819z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M105.443 105.561c-.159.131-.314.27-.468.414-1.192 1.122-3.153.241-3.153-1.397v-.221a1.23 1.23 0 00-2.458 0v.221c0 1.638-1.96 2.519-3.153 1.397a10.733 10.733 0 00-.468-.414 1.227 1.227 0 00-1.73.163 1.228 1.228 0 00.161 1.731c3.358 2.781 5.188 9.358 5.188 11.957v1.332a1.23 1.23 0 002.458 0v-1.332c0-2.599 1.831-9.175 5.188-11.957a1.229 1.229 0 00-1.565-1.894zm27.866 5.163c-.145-.011-.288-.015-.433-.011-1.151.079-2.275-1.555-1.717-2.823l.071-.161c.215-.49.051-1.292-.359-1.813-.409-.52-.94-.492-1.194.084-.026.062-.054.122-.082.185-.58 1.318-2.251.924-2.514-1.013a34.985 34.985 0 00-.106-.754c-.129-.819-.6-1.387-1.102-1.16-.499.218-.836 1.137-.716 1.969.711 5.494-.104 11.288-1.035 13.395l-.491 1.117c-.253.574.07 1.018.729.97.66-.05 1.377-.503 1.593-.992l.428-.974c.882-2.01 4.577-6.467 7.604-6.236.487-.003.694-.32.5-.796-.193-.472-.706-.947-1.176-.987zm18.233 3.824c-.12 0-.239.007-.36.021-.966.161-1.785-1.338-1.227-2.606l.071-.161c.215-.49.137-1.255-.167-1.728-.303-.473-.748-.408-1.002.169-.026.062-.054.122-.082.184-.58 1.318-1.945 1.058-2.024-.797-.009-.239-.02-.481-.033-.722-.047-.783-.399-1.299-.835-1.042-.433.248-.78 1.162-.74 1.958.192 5.267-.91 10.934-1.841 13.041l-.491 1.117c-.253.574-.015.98.538.886.555-.097 1.186-.587 1.401-1.077l.428-.974c.882-2.01 4.29-6.593 6.798-6.59.407-.039.602-.36.476-.807-.126-.445-.52-.869-.91-.872zm-74.493 4.076c-.931-2.106-1.746-7.901-1.035-13.395.12-.831-.217-1.749-.716-1.969-.502-.227-.974.341-1.102 1.16-.039.252-.073.503-.106.754-.264 1.937-1.934 2.329-2.514 1.013l-.082-.185c-.254-.577-.783-.604-1.194-.084-.409.521-.574 1.322-.359 1.813l.071.161c.558 1.268-.567 2.902-1.717 2.823-.145-.004-.288 0-.433.011-.47.04-.984.514-1.178.988-.194.476.013.792.5.796 3.027-.232 6.722 4.225 7.604 6.236l.428.974c.215.49.932.942 1.593.992.66.049.982-.395.729-.97a188.45 188.45 0 00-.489-1.118zm-19.18 4.239c-.93-2.106-2.033-7.774-1.841-13.041.04-.796-.309-1.709-.74-1.958-.436-.257-.788.259-.835 1.042-.014.241-.024.482-.033.722-.078 1.855-1.443 2.114-2.024.797-.028-.062-.054-.124-.082-.184-.254-.577-.698-.642-1.002-.169-.303.473-.383 1.238-.167 1.728l.071.161c.558 1.268-.262 2.767-1.227 2.606a3.13 3.13 0 00-.36-.021c-.39.003-.783.426-.911.871-.127.446.07.768.476.807 2.508-.003 5.917 4.579 6.798 6.59l.428.974c.215.49.847.98 1.401 1.077.554.095.791-.311.538-.886l-.49-1.116z"
  }))));
}

function SvgLk(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H8.828A8.828 8.828 0 000 9.103v317.793a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828V9.103a8.83 8.83 0 00-8.829-8.827z",
    fill: "#FFD250"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M185.379 35.586v264.828a8.829 8.829 0 008.828 8.828H476.69a8.829 8.829 0 008.828-8.828V35.586a8.829 8.829 0 00-8.828-8.828H194.207a8.83 8.83 0 00-8.828 8.828z",
    fill: "#963C3C"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M92.69 26.759H35.31a8.829 8.829 0 00-8.828 8.828v264.828a8.829 8.829 0 008.828 8.828h57.38V26.759z",
    fill: "#5AA587"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M150.069 26.759H92.69v282.483h57.379a8.829 8.829 0 008.828-8.828V35.586a8.828 8.828 0 00-8.828-8.827z",
    fill: "#FF7350"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFD250"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M393.553 238.735c-.296-1.973 1.441-4.521 4.125-8.182.971-1.323 2.374-3.24 2.752-4.158-.25-.018-.594.002-.85.015-1.485.072-3.732.174-5.695-2.005a4.14 4.14 0 01-1.066-3.089c.147-2.371 2.083-4.702 3.284-5.935-3.097-2.175-6.056-4.434-8.785-7.162-5.214-5.215-11.161-7.726-17.727-7.588-.608 6.531 2.758 10.826 6.35 15.347 1.059 1.331 2.114 2.66 3.073 4.049 4.725 6.841 3.737 20.049 3.138 21.448-.679 1.586-4.415 5.102-9.54 4.417-2.357-.31-5.07.483-6.78 1.977-.735.643-1.612 1.713-1.612 3.147 0 .072.006.435.118.502.689.416 3.262-.396 5.102-1.391a1.353 1.353 0 011.568.203c3.623 3.392 7.26.461 7.661.116a1.364 1.364 0 011.736-.032c3.708 2.988 7.573-.278 7.736-.419a1.359 1.359 0 011.628-.109c1.609 1.055 3.08 1.356 4.393.906 1.146-.398 1.754-1.26 1.825-1.468.033-.548-.703-3.375-1.191-5.247-.512-1.965-1.04-3.995-1.243-5.342z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M433.707 113.665c-1.117-.085-1.926.157-2.479.705-1.015 1.003-.932 2.81-.93 2.828.021.402-.138.794-.431 1.068a1.332 1.332 0 01-1.095.354c-2.008-.263-4.978-2.382-10.488-6.421-8.755-6.417-21.987-16.115-34.611-17.71-14.674-1.864-27.733 2.817-31.05 11.113-3.694 9.236 4.157 17.651 4.236 17.736.399.423.487 1.054.213 1.567-2.07 3.9-.502 6.778.911 8.355.443-1.302 1.105-2.191 2.017-2.738 2.202-1.316 5.078-.227 9.055 1.279 2.35.888 5.013 1.896 8.119 2.657 7.964 1.952 17.677.212 26.248-1.323 3.029-.543 5.95-1.064 8.666-1.411 6.835-.871 13.687 2.158 15.57 6.906.913 2.3 1.4 6.915-5.581 11.993-12.556 9.133-69.815 4.918-73.188 4.661a12.22 12.22 0 01-.307.024c1.252 1.406 2.721 2.777 3.361 2.948a1.353 1.353 0 01-.328 2.66l-5.866.089.54 5.645c.039.416-.116.828-.422 1.113a1.387 1.387 0 01-1.137.352c-.23-.038-5.293-.847-8.793-2.793l-6.625 4.179a1.351 1.351 0 01-1.158.135 1.353 1.353 0 01-.835-.814l-2.528-6.873-2.997 5.996a1.352 1.352 0 01-1.145.747c-.487.051-.951-.216-1.213-.632l-2.569-4.095c-1.175 1.468-3.059 3.605-4.986 4.939a1.353 1.353 0 01-2.06-.703l-1.346-4.249c-1.191 1.506-2.914 3.502-4.738 4.999a1.35 1.35 0 11-2.207-.959l-.434-6.831c-1.542.786-3.641 1.81-4.804 2.173a1.353 1.353 0 01-1.575-1.967c2.087-3.624 4.002-8.149 4.148-10.399-1.384 1.657-3.321 3.243-5.486 5.004-4.606 3.75-10.337 8.413-14.556 16.576-2.946 5.705-5.062 15.657-1.331 24.935 3.185 7.915 10.039 13.821 20.308 17.615-.343-1.498-.607-2.97-.634-4.353-.134-7.028 1.325-13.443 1.388-13.713a1.343 1.343 0 011.621-1.013 1.353 1.353 0 011.015 1.621c-.014.063-1.444 6.371-1.318 13.053.063 3.271 1.47 7.307 2.829 11.209 1.806 5.188 3.676 10.552 2.863 15.066-1.107 6.136-8.746 7.692-15.838 6.508-2.016-.339-3.85.159-5.167 1.388-1.337 1.247-2.023 3.159-1.834 5.115.089.921.434 1.107.546 1.169.853.461 2.86-.166 3.945-.733a1.353 1.353 0 011.639.298c2.844 3.186 6.674.007 6.835-.132a1.356 1.356 0 011.863.106c1.071 1.142 2.206 1.71 3.469 1.739 2.309.141 4.502-1.916 4.524-1.933.399-.389.999-.49 1.505-.26 4.463 2.043 6.805.856 6.901.8 3.873-3.302 1.635-11.137 1.612-11.217a1.343 1.343 0 01.13-1.064c.189-.322.502-.552.865-.636 5.425-1.244 8.457-4.725 9.923-7.033-2.68-.026-4.81-.966-6.065-2.926-2.02-3.165-1.05-7.93 2.474-12.141 6.029-7.204 9.715-21.784 9.162-27.722a1.356 1.356 0 011.223-1.473c.724-.074 1.402.479 1.473 1.223.483 5.201-1.862 15.988-6.142 24.122 5.422-1.5 10.371-3.695 15.534-6.051 5.132-2.342 10.441-4.762 16.82-6.761 10.781-3.375 20.29-1.036 28.274 6.951 3.868 3.868 8.09 6.7 12.98 9.983 2.147 1.441 4.382 2.941 6.7 4.611 6.285 4.524 6.174 8.302 6.056 12.301-.035 1.219-.074 2.479.063 3.844.649 6.495-4.515 7.522-6.998 8.015-.34.067-.659.13-.937.199-.351.088-.77.174-1.234.268-2.521.511-6.33 1.284-7.266 4.511-.169.578-.104.78-.104.78.398.181 2.462-.287 4.105-1.034a1.357 1.357 0 011.843.791c.479 1.405 1.226 1.644 1.471 1.724 1.704.532 4.491-1.036 5.332-1.633a1.354 1.354 0 011.7.103c1.397 1.276 2.689 1.837 3.85 1.681 1.554-.216 2.497-1.679 2.507-1.695a1.358 1.358 0 011.028-.636c.43-.023.842.129 1.128.442.003.006 1.187 1.255 3.61 2.02 1.589.497 1.99-.076 2.121-.266.671-.98.43-3.48-.879-5.115-1.716-2.146-2.513-5.409-2.029-8.312.444-2.673 1.886-4.852 4.165-6.304 4.178-2.659 5.132-5.524 4.865-6.07-.077-.038-.531-.097-.894-.145-1.864-.247-4.984-.659-8.193-6.584-2.834-5.229-.092-13.508 3.082-23.097 1.61-4.857 3.274-9.882 4.299-14.81 2.84-13.632-6.086-24.456-6.176-24.563a1.353 1.353 0 01.111-1.857c6.265-5.878 8.959-11.327 8.002-16.195-.995-5.076-5.911-8.625-9.817-10.121-4.868-1.866-13.75-.806-22.343.216-7.18.853-13.966 1.662-18.347.747-2.257-.474-3.91-1.544-4.913-3.179-.826-1.348-1.028-2.825-1.021-3.977-2.176.818-3.646 2.834-3.663 2.858a1.354 1.354 0 01-1.075.566c-.534-.021-.836-.186-1.096-.523-1.107-1.431-1.553-3.009-1.32-4.694.298-2.178 1.704-4.051 2.856-5.259-5.037-1.769-8.898 2.453-9.076 2.654a1.37 1.37 0 01-1.721.256c-2.43-1.494-3.936-4.426-3.841-7.469.092-2.873 1.574-5.282 4.065-6.605 1.707-.906 3.345-1.073 4.863-.5 1.444.544 2.457 1.668 3.095 2.622 1.843-2.102 1.998-5.73 1.998-5.772a1.35 1.35 0 01.43-.953c.265-.247.632-.402.98-.363 3.204.132 5.693 1.29 7.393 3.439 2.324 2.941 2.542 7.025 2.406 9.554 5.119-2.613 4.47-8.644 4.437-8.926a1.356 1.356 0 01.499-1.217 1.34 1.34 0 011.297-.218c5.432 1.917 7.409 6.761 7.874 10.366 1.538-1.468 1.561-3.351 1.561-3.375a1.353 1.353 0 012.541-.649c2.095 3.83 5.291 6.215 7.629 7.548l-1.61-3.903a1.353 1.353 0 011.892-1.707c2.68 1.443 4.803 3.076 7.05 4.807 2.71 2.087 5.513 4.243 9.461 6.098 3.855 1.813 6.455 1.468 7.951.862 1.55-.626 2.436-1.73 2.724-2.486.544-1.429.703-3.481-.171-4.842-.562-.879-1.512-1.365-2.824-1.452zM273.95 133.122l.004.003.014.002c.1.033 10.218 3.226 19.404 3.773.504.03.951.34 1.155.802a1.357 1.357 0 01-.181 1.397l-.321.399c1.822-.273 4.114-.526 6.362-.535a251.598 251.598 0 01-3.243-3.951c-2.457-.045-11.446-.436-18.762-3.961-1.777-.862-4.849-2.35-6.31-1.597-.252.13-.668.74-.599 1.489.091.95.968 1.725 2.477 2.179zm30.486-19.558c-.141 0-.269.015-.382.05-.59.177-.889.844-.969 1.364-.098.666.071 1.561.844 2.078 1.01.671 2.09.212 2.705-.395.194-.189 1.122-1.182.437-2.268l-.002-.003c-1.057-.487-1.984-.826-2.633-.826z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M291.157 146.186c.655 1.562 1.672 2.773 2.513 3.585.319-.691.806-1.408 1.544-1.946.722-.526 1.974-1.039 3.808-.657.029.002.054.008.083.011.053.012.094.007.148.02.047.011.077.049.124.062.065.023.134.025.196.06.047.025.076.068.118.098.69.294 1.266.766 1.571 1.48 1.025 2.392-.779 7.036-2.371 10.34a108.085 108.085 0 002.784-1.432 1.346 1.346 0 011.297.011c.404.224.664.638.693 1.096l.382 6.036a43.32 43.32 0 003.804-4.685 1.362 1.362 0 011.314-.575c.513.076.936.437 1.092.93l1.544 4.875c2.161-1.987 4.044-4.648 4.066-4.682.263-.37.691-.567 1.142-.575.452.012.871.25 1.112.634l2.327 3.711 3.321-6.641c.242-.484.697-.789 1.287-.747.54.03 1.007.377 1.195.885l3.03 8.241 5.914-3.732a1.345 1.345 0 011.464.014c1.929 1.263 4.893 2.078 6.761 2.497l-.505-5.297a1.355 1.355 0 011.327-1.482l3.384-.051a29.648 29.648 0 01-1.816-2.025 1.336 1.336 0 01-.294-.919c-2.493-.106-5.967-.551-9.441-2.05l-2.067 3.188a1.346 1.346 0 01-1.134.617c-.266 0-.529-.079-.754-.23l-7.816-5.244-1.436 3.91a1.351 1.351 0 01-1.025.863c-.47.092-.95-.081-1.265-.44-1.343-1.54-3.452-3.901-4.706-5.196-1.13 1.089-3.112 2.846-5.231 4.022a1.355 1.355 0 01-1.926-.711l-2.143-5.751a1.354 1.354 0 012.538-.944l1.562 4.195c2.268-1.575 4.16-3.603 4.183-3.628a1.352 1.352 0 011.837-.138c.788.631 2.926 2.986 4.419 4.66l1.246-3.393c.142-.39.458-.693.853-.819a1.322 1.322 0 011.172.162l8.105 5.438 1.96-3.02a1.347 1.347 0 011.739-.474c3.598 1.799 7.482 2.234 9.962 2.3-1.513-2.827-1.646-6.411-1.655-7.253a30.299 30.299 0 01-7.02-4.303l-.974 2.407a1.356 1.356 0 01-2.049.587l-3.91-2.837-.381 2.93a1.35 1.35 0 01-.758 1.045c-.41.198-.895.178-1.288-.063-.136-.081-3.353-2.047-5.27-4.204a1.352 1.352 0 01.113-1.91 1.35 1.35 0 011.91.113c.81.911 1.945 1.816 2.891 2.502l.393-3.018a1.354 1.354 0 012.138-.921l4.352 3.157 1.042-2.571a1.353 1.353 0 012.182-.475c3.374 3.175 7.025 4.889 9.295 5.73-.776-3.612-1.071-8.142-1.086-8.38-.002-.034.013-.063.013-.096-2.109-1.163-5.09-3.167-7.667-6.316-.012 1.668-.148 3.366-.557 4.438-.141.37-.435.659-.807.793a1.377 1.377 0 01-1.125-.097c-.163-.094-3.108-1.784-5.3-4.254-.378 1.361-.833 2.794-1.216 3.434a1.354 1.354 0 01-1.766.514c-.129-.063-2.203-1.113-4.051-2.719-.18 1.802-.458 3.838-.854 4.83-.142.36-.434.64-.798.771a1.388 1.388 0 01-1.107-.086c-.124-.067-2.472-1.355-4.665-2.988l-.594 2.257a1.36 1.36 0 01-.729.879 1.37 1.37 0 01-1.14.009c-.163-.074-4.033-1.854-6.237-4.547a1.348 1.348 0 01.19-1.902 1.348 1.348 0 011.902.19c1.054 1.287 2.666 2.363 3.829 3.038l.694-2.637c.121-.458.47-.819.924-.953a1.336 1.336 0 011.293.295c1.293 1.17 3.043 2.321 4.287 3.083.265-1.671.47-4.086.558-5.652a1.353 1.353 0 012.54-.569c.744 1.37 2.532 2.705 3.88 3.549.37-1.158.826-2.865 1.169-4.338a1.35 1.35 0 011.186-1.039 1.327 1.327 0 011.365.789c.845 1.873 2.893 3.585 4.355 4.633.159-1.973.012-4.777-.169-6.531a1.355 1.355 0 01.971-1.44c.643-.174 1.3.116 1.589.702 2.722 5.521 7.535 8.579 10.039 9.865 1.365-14.934-3.012-20.648-3.059-20.706a1.363 1.363 0 01.374-2.023c2.431-1.407 3.906-3.977 4.811-6.471-5.502 5.334-14.219 7.383-18.465 8.092l2.073 2.527a1.355 1.355 0 01-.913 2.204c-5.203.52-9-.169-11.556-1.031l.885 1.633c.233.428.216.95-.042 1.362-.257.414-.729.693-1.205.634-4.239-.181-7.948-1.928-10.996-3.471-.145.995-.636 1.964-1.453 2.763-1.001.977-2.274 1.482-3.537 1.482a4.589 4.589 0 01-2.56-.774c-1.529-1.021-2.303-2.834-2.019-4.73.263-1.742 1.362-3.104 2.87-3.555 2.017-.599 4.32.567 7.233 2.051 2.312 1.178 5.069 2.581 8.075 3.21l-1.675-3.094a1.354 1.354 0 01.343-1.702 1.36 1.36 0 011.736.038c.03.026 3.398 2.793 11.042 2.65l-1.928-2.35a1.355 1.355 0 01-.203-1.379 1.359 1.359 0 011.124-.826c.146-.013 11.251-1.14 18.083-6.645-2.225.651-3.947.548-4.079.546a1.352 1.352 0 01-.954-.508c-3.13-3.933-6.333-5.149-7.948-5.525-.907 2.858-3.103 5.171-3.21 5.282-.29.301-.705.449-1.117.408a1.36 1.36 0 01-1.01-.632c-2.414-3.891-5.894-4.914-7.916-5.167.248 2.876-1.762 5.238-3.1 6.221a1.36 1.36 0 01-1.704-.081c-5.807-5.191-10.292-3.655-12.106-2.618.573 1.423.303 2.586-.085 3.372-2.773 5.619-19.927 6.749-23.338 6.918a1.337 1.337 0 01-1.119-.5 1.354 1.354 0 01-.256-1.199c.25-.936.083-1.945-.469-2.847-.564-.921-1.468-1.592-2.415-1.795-.892-.189-2.593-.067-3.61 1.048-1.163 1.279-1.242 3.644-.23 6.841 1.816 5.739 7.411 11.393 10.894 14.492a14.52 14.52 0 01-.003-1.37c.03-.578.423-1.073.98-1.231a1.344 1.344 0 011.482.526 13.364 13.364 0 003.564 3.464l.679-4.329a1.355 1.355 0 011.178-1.134c.599-.051 1.178.268 1.409.83 1.226 2.978 8.988 12.301 11.875 15.642.37.426.435 1.037.163 1.533a1.375 1.375 0 01-1.379.691c-4.946-.705-12.212.941-12.284.957a1.353 1.353 0 01-1.358-2.166l1.001-1.246c-6.867-.714-13.553-2.519-16.256-3.309l-2.271 6.17 6.12-.611c.461-.058.936.156 1.217.537.286.381.349.881.169 1.322l-1.154 2.82 5.041-1.334a1.343 1.343 0 011.606.81c.668 1.692 1.487 2.803 2.141 3.492l1.42-3.139c.224-.49.712-.832 1.252-.794a1.34 1.34 0 011.224.826zm-17.525 69.197c5.337 3.564 9.651-.502 11.956-3.633-4.917-3.587-8.497-8-10.61-13.255-.691-1.717-1.14-3.453-1.491-5.186-.502-.394-7.927-6.275-14.146-13.15a7.925 7.925 0 01-1.073 1.932c.437 1.777.012 3.228-.535 4.158.377 1.267.074 2.524-.365 3.441.941 1.42 1.112 2.81.509 4.146a5.395 5.395 0 01-.518.865c.774.934 1.991 3.072 1.991 7.374 0 2.893 1.071 4.629 1.871 5.521.467-.404.978-.631 1.54-.691 1.707-.19 3.109 1.27 5.026 3.284 1.501 1.579 3.368 3.543 5.845 5.194zm-26.547-36.685l-.301-.002a29.758 29.758 0 01-5.364-.527c-.158.452.178 1.766.529 2.036.345.265.576.703.564 1.138-.012.434-.199.86-.558 1.105-.231.162-.918.776-.927 1.374-.009.584.68 1.187 1.092 1.497a1.351 1.351 0 01.206 1.974c-.174.206-.671.959-.585 1.591.018.134.074.543.779 1.022.305.207.513.532.575.897.06.365-.032.738-.254 1.034.002 0-.378.555-.233 1.107.162.611.924 1.081 1.532 1.367 1.139.536 2.778.881 4.487.948.052-.009.105-.001.158-.003 1.44.042 2.919-.098 4.182-.564 1.239-.457 2.061-1.119 2.444-1.969.12-.265.369-.815-.696-2.058a1.355 1.355 0 01-.047-1.704c.002-.003.904-1.244.348-2.234a1.353 1.353 0 01.222-1.621c.079-.088.919-1.077.254-2.852a1.352 1.352 0 01.34-1.461c.049-.049 1.273-1.323 1.246-3.26a45.25 45.25 0 01-.493-.608c-2.62 1.111-5.832 1.773-9.5 1.773zm12.378-94.323c-5.472 2.943-17.142 12.17-17.479 37.43l.301 42.568c.036.06.088.121.118.179.706 1.332.372 3.059-.024 4.255 3.381 1.208 7.597.712 9.404.265-.361-1.055-.646-2.76.577-4.69-.19-50.764 4.651-72.36 7.103-80.007z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M260.026 169.675c0-2.164-1.632-3.848-3.245-4.394-.334-.115-1.473-.431-1.995.254-.978 1.279-.631 2.183-.298 3.059.186.487.378.989.234 1.563-.183.733-.851 1.034-1.071 1.134-1.836.833-8.817 1.926-13.641-.564a1.358 1.358 0 01-.594-1.801c.509-1.043.879-2.574.596-3.106-.023-.044-.086-.165-.467-.216a7.793 7.793 0 00-1.073-.074c-1.647 0-3.175.518-4.001 1.402-.664.712-.872 1.618-.634 2.767.802 3.873 5.651 6.223 12.971 6.29 5.178-.018 9.632-1.24 11.855-3.445.906-.895 1.363-1.86 1.363-2.869zm-11.648 32.106c.313-.413.83-.611 1.34-.505.941.197 3.279.693 4.621-.348.469-.36.575-1.341.215-1.981-.124-.221-.499-.885-1.908-.345-1.334.514-3.249 1.071-4.452-.011a2.092 2.092 0 01-.509-.728c-.362-.031-.722-.051-1.077-.105a2.09 2.09 0 01-.546.833c-1.198 1.08-3.115.525-4.45.011-1.405-.534-1.786.125-1.908.345-.36.64-.256 1.621.212 1.978 1.344 1.036 3.684.546 4.452.384.499-.1 1.11.072 1.429.481.317.413.451.951.218 1.415-.305.609-1.63 3.2-2.925 4.818 1.692 2.474 3.157 6.883-.275 10.806-.28.317-.715.476-1.119.458a1.35 1.35 0 01-1.037-.618c-.195-.296-.883-1.117-1.642-1.265-.23-.044-.591-.062-1.116.296-.354.245-.553 1.055-.254 1.942.534 1.586 2.194 2.466 4.535 2.357.532-.053 1.108.313 1.323.851a1.354 1.354 0 01-.377 1.527l-2.206 1.892 3.602.877c.478.116.854.483.985.957.006.023.544 1.942 1.621 3.561 1.075-1.619 1.614-3.538 1.619-3.561.13-.474.508-.841.985-.957l3.602-.877-2.208-1.892a1.353 1.353 0 01-.377-1.527c.213-.537.75-.898 1.323-.851 2.314.103 4.001-.771 4.537-2.359.299-.885.1-1.695-.254-1.94-.532-.361-.898-.343-1.124-.295-.785.159-1.489 1.037-1.635 1.263-.23.358-.615.587-1.037.618a1.359 1.359 0 01-1.119-.458c-3.431-3.922-1.964-8.332-.273-10.806-1.295-1.618-2.62-4.207-2.925-4.818a1.347 1.347 0 01.134-1.423z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M438.807 113.65c-.723-1.126-2.164-2.504-4.925-2.684-1.919-.138-3.457.378-4.576 1.497-.9.897-1.334 2.008-1.54 2.947-1.846-.971-4.8-3.135-7.884-5.395-8.981-6.582-22.552-16.529-35.873-18.214-10.804-1.373-23.093.782-29.85 7.052.102-.829.132-1.384.136-1.479.001-.018-.014-.031-.014-.05a1.316 1.316 0 00-.196-.7c-.028-.045-.057-.079-.09-.121a1.323 1.323 0 00-.586-.455c-.004-.002-.007-.008-.012-.009h-.004a1.33 1.33 0 00-.757-.017c-.047.011-.088.019-.134.034a1.324 1.324 0 00-.604.422c-.011.013-.03.014-.04.028a10.548 10.548 0 01-8.078 4.311c-5.067-6.017-10.422-6.204-10.653-6.209-.776.051-1.269.481-1.369 1.154-.212 1.429-1.043 2.844-1.746 3.826-4.465-5.551-10.751-4.995-11.031-4.972a1.347 1.347 0 00-1.039.671 1.36 1.36 0 00-.059 1.235c.806 1.772-.171 3.316-.95 4.174-8.79-7.044-15.554-1.305-15.625-1.242a1.353 1.353 0 00-.222 1.786c.655.95.54 1.474.365 1.828-1.422 2.882-11.74 4.762-19.467 5.314a6.532 6.532 0 00-.978-3.161c-.959-1.565-2.474-2.667-4.157-3.029-1.871-.407-4.503.023-6.18 1.875-1.875 2.061-2.144 5.25-.806 9.479 2.092 6.607 8.372 12.823 12.035 16.022-.892-.33-1.777-.69-2.634-1.102-2.156-1.05-5.767-2.807-8.435-1.42-1.346.696-2.208 2.439-2.051 4.142.079.853.556 2.77 3.053 3.994l-3.004 8.16c-.16.437-.085.927.201 1.295.284.369.738.569 1.204.518l6.033-.602-1.331 3.254a1.354 1.354 0 00.236 1.406 1.33 1.33 0 001.364.414l6.549-1.734c1.692 3.475 3.948 4.691 4.054 4.745a1.353 1.353 0 001.861-.64l1.043-2.31a14.548 14.548 0 002.974 3.072c-.44.364-.874.722-1.351 1.11-4.547 3.7-10.774 8.769-15.25 17.434-2.248 4.351-3.999 10.989-3.476 18.049-3.26-2.74-9.406-8.175-13.931-13.738.545-.372 1.124-.723 1.562-1.155 1.415-1.4 2.162-3.059 2.162-4.791 0-3.598-2.636-6.13-5.084-6.958a5.268 5.268 0 00-2.586-.217c-.079-58.979 6.638-77.035 8.002-80.076a1.355 1.355 0 00-.215-1.443 1.354 1.354 0 00-1.4-.408c-.886.26-21.713 6.766-22.172 41.226l.29 41.112c-2.827-.298-5.511.506-7.074 2.175-.888.95-1.834 2.616-1.308 5.166.701 3.383 3.43 5.88 7.618 7.252a4.291 4.291 0 00-.098 1.508c.065.661.271 1.479.653 2.188-.511.609-1.013 1.48-1.039 2.553-.024 1.034.387 2.005 1.226 2.894-.331.668-.62 1.571-.493 2.572.077.596.328 1.387 1.034 2.152a3.906 3.906 0 00-.109 2.211c.217.877.762 1.631 1.571 2.275-2.072-.384-3.528.551-4.209 1.767-1.024 1.825-.609 4.271.924 5.45 1.249.96 2.734 1.267 4.087 1.196-.689 1.166-1.417 2.244-1.875 2.602a1.355 1.355 0 00-.173 1.977c.141.156 3.092 3.481 1.335 6.936-.543-.446-1.246-.863-2.082-1.033-1.087-.221-2.187.03-3.188.717-1.429.98-1.96 3.05-1.29 5.035.513 1.521 1.792 3.08 3.975 3.799l-1.899 1.628a1.353 1.353 0 00.56 2.342l5.429 1.323c.416 1.193 1.367 3.496 2.956 5.085.254.254.736.396 1.096.396.36 0 .703-.142.957-.396 1.589-1.589 2.541-3.892 2.956-5.085l5.429-1.323a1.35 1.35 0 00.995-.999 1.356 1.356 0 00-.435-1.343l-1.899-1.628c2.182-.721 3.463-2.279 3.975-3.799.67-1.986.139-4.057-1.29-5.035-1.003-.689-2.109-.936-3.189-.717-.835.169-1.536.585-2.081 1.031-1.728-3.436 1.198-6.782 1.34-6.938a1.357 1.357 0 00-.176-1.973c-.457-.356-1.182-1.432-1.871-2.598 1.352.012 2.829-.234 4.083-1.202.275-.211.47-.501.671-.782.096 5.939 3.86 8.289 4.023 8.388a1.35 1.35 0 001.85-.457c.319-.52.509-.62.505-.626.476.026 1.811 1.432 2.787 2.457 1.592 1.675 3.576 3.762 6.304 5.58 1.999 1.334 3.889 1.859 5.625 1.859 4.872 0 8.521-4.111 10.078-6.223 3.034 1.903 6.474 3.555 10.396 4.895.134.046.27.064.405.067a132.97 132.97 0 001.507 4.564c1.693 4.857 3.443 9.881 2.755 13.695-.889 4.943-8.71 4.993-12.729 4.317-2.86-.466-5.513.266-7.46 2.081-1.947 1.819-2.95 4.567-2.678 7.354.189 1.947 1.164 2.863 1.951 3.288 1.806.971 4.248.245 5.575-.298 3.047 2.654 6.691 1.54 8.896.138 1.356 1.133 2.868 1.727 4.505 1.763.054.002.107.002.162.002 2.474 0 4.555-1.302 5.596-2.099 5.241 2.121 8.238.54 8.763.215 4.255-3.59 3.555-10.041 3-12.846 8.745-2.648 11.563-10.248 11.685-10.585a1.359 1.359 0 00-.278-1.374 1.367 1.367 0 00-1.348-.389c-2.696.724-4.825.231-5.839-1.356-1.373-2.147-.483-5.661 2.268-8.947a26.837 26.837 0 001.657-2.248c6.758-1.511 12.53-4.139 18.641-6.926 5.058-2.306 10.29-4.692 16.508-6.641 1.743-.547 3.437-.868 5.107-1.085-.505 7.331 3.255 12.161 6.948 16.808 1.02 1.282 2.04 2.563 2.964 3.901 3.96 5.735 3.2 17.759 2.879 18.844-.281.617-2.935 3.319-6.697 2.803-3.126-.416-6.625.614-8.919 2.622-1.636 1.432-2.537 3.274-2.537 5.184 0 1.628.782 2.436 1.44 2.828 1.96 1.164 5.203-.081 6.941-.913 1.624 1.255 3.292 1.718 4.833 1.718 1.917 0 3.64-.714 4.849-1.506 3.628 2.292 7.428.95 9.546-.495 2.654 1.44 4.787 1.155 6.162.614a6.31 6.31 0 001.226-.647c.055.057.105.134.161.181 1.44 1.239 4.104.579 5.809-.039.776 1.284 1.802 1.863 2.613 2.121 2.506.798 5.383-.575 6.831-1.432 1.757 1.358 3.502 1.929 5.246 1.684 1.538-.213 2.698-1.039 3.445-1.763.797.573 2.007 1.279 3.641 1.795.721.23 1.355.322 1.911.322 1.886 0 2.87-1.075 3.256-1.636 1.565-2.285.749-6.154-.998-8.338-1.031-1.288-1.887-3.699-1.474-6.177.221-1.322.909-3.168 2.947-4.465 3.676-2.338 6.088-5.504 6.144-8.063.024-1.057-.377-1.929-1.133-2.457-.667-.467-1.414-.566-2.137-.661-1.61-.213-3.616-.478-6.168-5.191-2.274-4.201.419-12.339 3.274-20.957 1.632-4.931 3.321-10.03 4.378-15.108 2.618-12.569-3.693-22.696-5.978-25.849 6.355-6.251 9.02-12.25 7.922-17.842-1.208-6.162-6.953-10.383-11.503-12.126-5.501-2.108-14.719-1.012-23.633.056-6.951.832-13.523 1.621-17.47.785-1.492-.312-2.553-.96-3.153-1.928-1.043-1.683-.484-3.895-.479-3.918.109-.414.014-.86-.254-1.193-.269-.333-.714-.546-1.108-.505-2.593.104-4.659 1.549-5.935 2.742a3.314 3.314 0 01-.033-1.122c.351-2.601 3.346-4.874 3.375-4.896a1.357 1.357 0 00-.107-2.239c-5.512-3.357-10.658-.871-13.292 1.464-1.113-1.09-1.784-2.758-1.732-4.437.033-1.103.423-3.129 2.627-4.301.997-.531 1.854-.647 2.631-.361 1.3.484 2.164 2.082 2.388 2.659.142.369.443.659.815.789.374.136.789.095 1.13-.106 3.017-1.76 3.982-5.457 4.288-7.508 1.774.289 3.127 1.042 4.11 2.282 2.758 3.478 1.63 9.604 1.619 9.666-.088.458.067.928.407 1.246.34.317.821.435 1.272.317 6.124-1.641 8.084-6.614 8.386-10.29 4.683 2.916 4.364 8.947 4.346 9.23a1.354 1.354 0 001.858 1.345c2.241-.909 3.481-2.388 4.169-3.753 4.263 5.59 10.189 7.53 10.473 7.623a1.353 1.353 0 101.662-1.806l-1.323-3.207c1.077.759 2.114 1.558 3.18 2.379 2.826 2.174 5.746 4.423 9.96 6.403 4.738 2.226 8.114 1.727 10.119.924 1.999-.809 3.584-2.317 4.239-4.035.764-2.001 1.052-4.963-.425-7.262zm-2.105 6.304c-.287.756-1.173 1.86-2.724 2.486-1.496.606-4.096.951-7.951-.862-3.948-1.855-6.752-4.012-9.461-6.098-2.247-1.73-4.37-3.363-7.05-4.807a1.35 1.35 0 10-1.892 1.707l1.61 3.903c-2.338-1.334-5.534-3.718-7.629-7.548a1.353 1.353 0 10-2.541.649c0 .024-.023 1.908-1.561 3.375-.466-3.605-2.442-8.448-7.874-10.366a1.342 1.342 0 00-1.297.218 1.358 1.358 0 00-.499 1.217c.033.281.682 6.313-4.437 8.926.138-2.528-.081-6.613-2.406-9.554-1.7-2.15-4.188-3.307-7.393-3.439-.348-.039-.715.116-.98.363-.266.247-.419.59-.43.953 0 .042-.156 3.67-1.998 5.772-.638-.953-1.651-2.078-3.095-2.622-1.518-.573-3.156-.405-4.863.5-2.492 1.323-3.974 3.732-4.065 6.605-.095 3.043 1.411 5.975 3.841 7.469a1.366 1.366 0 001.721-.256c.178-.201 4.039-4.423 9.076-2.654-1.152 1.208-2.558 3.082-2.856 5.259-.233 1.684.213 3.263 1.32 4.694.259.337.562.502 1.096.523a1.353 1.353 0 001.075-.566c.018-.024 1.487-2.04 3.663-2.858-.009 1.152.194 2.628 1.021 3.977 1.003 1.635 2.655 2.705 4.913 3.179 4.381.915 11.167.106 18.347-.747 8.593-1.022 17.475-2.082 22.343-.216 3.906 1.496 8.822 5.044 9.817 10.121.957 4.868-1.737 10.318-8.002 16.195a1.352 1.352 0 00-.111 1.857c.089.107 9.016 10.931 6.176 24.563-1.025 4.928-2.689 9.953-4.299 14.81-3.174 9.588-5.914 17.868-3.082 23.097 3.209 5.926 6.329 6.337 8.193 6.584.363.047.815.107.894.145.268.546-.687 3.411-4.865 6.07-2.28 1.452-3.721 3.631-4.165 6.304-.483 2.903.313 6.167 2.029 8.312 1.309 1.635 1.55 4.136.879 5.114-.132.19-.532.763-2.121.266-2.423-.767-3.607-2.016-3.61-2.02a1.407 1.407 0 00-1.128-.443 1.351 1.351 0 00-1.028.636c-.011.015-.953 1.479-2.507 1.695-1.161.157-2.453-.405-3.85-1.681a1.36 1.36 0 00-1.7-.103c-.841.597-3.628 2.165-5.332 1.633-.245-.079-.992-.319-1.471-1.724a1.355 1.355 0 00-1.843-.791c-1.644.747-3.708 1.216-4.105 1.036 0 0-.065-.204.104-.782.936-3.227 4.745-4 7.266-4.511.463-.094.883-.18 1.234-.268.278-.068.597-.132.937-.199 2.483-.493 7.647-1.521 6.998-8.015-.138-1.365-.098-2.625-.063-3.844.118-4 .23-7.777-6.056-12.301-2.318-1.671-4.553-3.17-6.7-4.611-4.889-3.283-9.112-6.115-12.98-9.983-7.983-7.987-17.492-10.327-28.274-6.951-6.378 1.998-11.687 4.419-16.82 6.761-5.163 2.356-10.112 4.551-15.534 6.051 4.28-8.135 6.624-18.922 6.142-24.122-.071-.744-.749-1.297-1.473-1.223a1.356 1.356 0 00-1.223 1.473c.553 5.938-3.133 20.518-9.162 27.722-3.523 4.211-4.494 8.977-2.474 12.141 1.255 1.961 3.384 2.9 6.065 2.926-1.465 2.308-4.499 5.79-9.923 7.033a1.359 1.359 0 00-.865.636 1.344 1.344 0 00-.13 1.064c.023.079 2.261 7.915-1.612 11.217-.097.056-2.439 1.242-6.901-.8a1.356 1.356 0 00-1.505.26c-.023.018-2.215 2.073-4.524 1.933-1.263-.029-2.398-.597-3.469-1.739a1.357 1.357 0 00-1.863-.106c-.16.139-3.991 3.318-6.835.132a1.353 1.353 0 00-1.639-.298c-1.086.567-3.092 1.195-3.945.733-.113-.062-.457-.247-.546-1.169-.189-1.955.497-3.868 1.834-5.115 1.318-1.23 3.153-1.727 5.167-1.388 7.092 1.184 14.731-.372 15.838-6.508.812-4.514-1.057-9.877-2.863-15.066-1.361-3.903-2.766-7.939-2.829-11.209-.127-6.681 1.304-12.989 1.318-13.053a1.352 1.352 0 00-1.015-1.621 1.343 1.343 0 00-1.621 1.013c-.063.269-1.523 6.685-1.388 13.713.028 1.383.29 2.855.634 4.353-10.269-3.794-17.123-9.699-20.308-17.615-3.732-9.278-1.615-19.23 1.331-24.935 4.218-8.163 9.95-12.826 14.556-16.576 2.165-1.761 4.103-3.347 5.486-5.004-.146 2.25-2.06 6.775-4.148 10.399a1.351 1.351 0 001.575 1.967c1.163-.363 3.263-1.387 4.804-2.173l.434 6.831c.032.505.345.951.81 1.154a1.343 1.343 0 001.397-.195c1.824-1.496 3.546-3.492 4.738-4.999l1.346 4.249a1.355 1.355 0 002.06.703c1.928-1.334 3.811-3.471 4.987-4.939l2.569 4.095c.26.416.726.684 1.213.632a1.35 1.35 0 001.145-.747l2.997-5.996 2.528 6.873a1.353 1.353 0 001.993.679l6.625-4.179c3.501 1.945 8.565 2.755 8.793 2.793.408.054.832-.065 1.137-.352.305-.286.46-.697.422-1.113l-.54-5.645 5.866-.089a1.353 1.353 0 10.328-2.66c-.64-.171-2.108-1.543-3.361-2.948.159-.011.232-.018.307-.024 3.373.257 60.632 4.472 73.188-4.661 6.983-5.078 6.495-9.694 5.581-11.993-1.884-4.748-8.736-7.777-15.57-6.906-2.717.348-5.639.868-8.666 1.411-8.57 1.535-18.283 3.275-26.248 1.323-3.106-.761-5.769-1.769-8.119-2.657-3.977-1.506-6.852-2.595-9.055-1.279-.913.546-1.575 1.436-2.017 2.738-1.414-1.577-2.982-4.456-.911-8.355a1.357 1.357 0 00-.213-1.567c-.079-.085-7.931-8.5-4.236-17.736 3.318-8.295 16.377-12.977 31.05-11.113 12.625 1.597 25.856 11.294 34.611 17.71 5.512 4.039 8.48 6.158 10.488 6.421.402.058.798-.081 1.095-.354a1.36 1.36 0 00.431-1.068c-.002-.018-.085-1.825.93-2.828.553-.548 1.362-.789 2.479-.705 1.313.086 2.262.573 2.825 1.447.872 1.367.714 3.42.169 4.849zm-42.54 130.836c-1.313.451-2.784.15-4.393-.906a1.359 1.359 0 00-1.628.109c-.163.141-4.03 3.407-7.736.419a1.364 1.364 0 00-1.736.032c-.402.345-4.039 3.275-7.661-.116a1.355 1.355 0 00-1.568-.203c-1.842.995-4.414 1.807-5.102 1.391-.113-.067-.118-.43-.118-.502 0-1.434.877-2.504 1.612-3.147 1.709-1.494 4.423-2.287 6.78-1.977 5.126.685 8.863-2.831 9.54-4.417.599-1.399 1.588-14.606-3.138-21.448-.959-1.388-2.014-2.719-3.073-4.049-3.593-4.52-6.958-8.815-6.35-15.347 6.566-.138 12.513 2.374 17.727 7.588 2.729 2.729 5.687 4.989 8.785 7.162-1.201 1.234-3.137 3.564-3.284 5.935a4.143 4.143 0 001.066 3.089c1.963 2.179 4.21 2.078 5.695 2.005.256-.014.599-.033.85-.015-.378.918-1.781 2.835-2.752 4.158-2.684 3.661-4.42 6.209-4.125 8.182.203 1.346.732 3.375 1.244 5.339.488 1.871 1.225 4.7 1.191 5.247-.071.21-.679 1.072-1.826 1.471zm5.698-18.639c2.601-3.549 3.922-5.471 3.157-7-.785-1.571-2.389-1.503-3.563-1.443-1.26.06-2.454.113-3.558-1.113-.287-.319-.404-.661-.377-1.108.094-1.546 1.838-3.552 2.842-4.536.777.527 1.549 1.054 2.342 1.586 2.125 1.426 4.334 2.909 6.626 4.559 5.119 3.686 5.044 6.209 4.934 10.027-.038 1.244-.079 2.654.076 4.193.375 3.758-1.768 4.481-4.833 5.09-.387.077-.749.15-1.068.23-.317.079-.696.156-1.116.242-1.955.396-5.08 1.065-7.253 3.091a162.08 162.08 0 00-.657-2.574c-.493-1.896-1.004-3.855-1.186-5.058-.149-1.022 2.313-4.38 3.634-6.186zm-137.098-25.246c-.562.06-1.073.287-1.54.691-.8-.892-1.871-2.627-1.871-5.521 0-4.302-1.217-6.441-1.991-7.374.193-.277.38-.558.518-.865.602-1.335.431-2.726-.509-4.146.439-.918.742-2.174.365-3.441.548-.93.972-2.382.535-4.158a7.859 7.859 0 001.073-1.932c6.219 6.873 13.644 12.755 14.146 13.15.351 1.732.8 3.468 1.491 5.186 2.113 5.255 5.693 9.667 10.61 13.255-2.305 3.13-6.618 7.197-11.956 3.633-2.477-1.651-4.345-3.616-5.844-5.194-1.918-2.014-3.32-3.475-5.027-3.284zm-11.321 11.924a1.356 1.356 0 002.156-.16c.147-.225.851-1.105 1.635-1.263.225-.05.591-.067 1.124.295.354.245.553 1.055.254 1.94-.535 1.588-2.223 2.462-4.537 2.359-.573-.047-1.11.313-1.323.851a1.353 1.353 0 00.377 1.527l2.208 1.892-3.602.877a1.354 1.354 0 00-.985.957c-.006.023-.544 1.942-1.619 3.561-1.077-1.619-1.615-3.538-1.621-3.561a1.354 1.354 0 00-.985-.957l-3.602-.877 2.206-1.892c.439-.377.59-.99.377-1.527-.215-.537-.791-.904-1.323-.851-2.342.109-4.001-.771-4.535-2.357-.299-.886-.1-1.697.254-1.942.523-.358.886-.34 1.116-.296.759.148 1.447.969 1.642 1.265.23.358.615.587 1.037.618.404.018.839-.141 1.119-.458 3.432-3.922 1.966-8.332.275-10.806 1.295-1.618 2.62-4.207 2.925-4.818.233-.463.098-1.003-.218-1.415-.319-.408-.93-.582-1.429-.481-.768.162-3.108.652-4.452-.384-.467-.358-.57-1.34-.212-1.978.121-.221.504-.879 1.908-.345 1.335.514 3.253 1.069 4.45-.011.273-.245.431-.535.546-.833.355.054.715.073 1.077.105.116.26.268.512.509.728 1.204 1.081 3.118.525 4.452.011 1.409-.54 1.785.125 1.908.345.36.64.254 1.621-.215 1.981-1.343 1.039-3.681.544-4.621.348a1.341 1.341 0 00-1.34.505c-.313.41-.366.963-.136 1.426.305.609 1.63 3.2 2.925 4.818-1.69 2.471-3.155 6.882.275 10.803zm4.389-38.036c-.398.374-.532.95-.34 1.461.666 1.777-.174 2.764-.254 2.852-.43.428-.52 1.09-.222 1.621.557.99-.345 2.23-.348 2.234a1.356 1.356 0 00.047 1.704c1.064 1.242.815 1.793.696 2.058-.382.85-1.205 1.512-2.444 1.969-1.265.467-2.743.606-4.182.564-.053.002-.106-.006-.158.003-1.708-.068-3.348-.412-4.487-.948-.608-.286-1.369-.756-1.532-1.367-.147-.552.234-1.107.233-1.107.222-.296.313-.67.254-1.034a1.359 1.359 0 00-.575-.897c-.705-.479-.761-.888-.779-1.022-.086-.632.41-1.385.585-1.591a1.353 1.353 0 00-.206-1.974c-.413-.31-1.101-.915-1.092-1.497.009-.599.696-1.213.927-1.374.36-.245.546-.671.558-1.105.012-.435-.218-.874-.564-1.138-.352-.27-.686-1.583-.529-2.036 1.639.316 3.417.51 5.364.527l.301.002c3.668 0 6.879-.662 9.496-1.773.162.203.328.406.493.608.031 1.937-1.193 3.212-1.242 3.26zm-9.021-4.803c-7.32-.067-12.17-2.418-12.971-6.29-.238-1.151-.03-2.056.634-2.767.826-.885 2.354-1.402 4.001-1.402.354 0 .714.024 1.073.074.381.051.444.172.467.216.284.532-.086 2.063-.596 3.106a1.357 1.357 0 00.594 1.801c4.824 2.489 11.805 1.397 13.641.564.221-.1.888-.402 1.071-1.134.145-.575-.047-1.077-.234-1.562-.333-.876-.68-1.78.298-3.059.522-.685 1.66-.369 1.995-.254 1.614.546 3.245 2.23 3.245 4.394 0 1.007-.458 1.973-1.362 2.87-2.224 2.203-6.678 3.425-11.856 3.443zm4.974-6.919c-1.806.448-6.023.945-9.404-.265.396-1.196.732-2.923.024-4.255-.031-.057-.082-.119-.118-.179l-.301-42.568c.337-25.261 12.006-34.488 17.479-37.43-2.452 7.647-7.293 29.242-7.103 80.006-1.223 1.932-.937 3.637-.577 4.691zm36.892-22.92l-1.42 3.139c-.653-.689-1.473-1.801-2.141-3.492a1.341 1.341 0 00-1.605-.81l-5.041 1.334 1.154-2.82c.18-.44.116-.941-.169-1.322a1.328 1.328 0 00-1.217-.537l-6.12.611 2.271-6.17c2.702.789 9.389 2.595 16.256 3.309l-1.001 1.246a1.353 1.353 0 001.358 2.166c.072-.015 7.338-1.662 12.284-.957a1.374 1.374 0 001.379-.691 1.351 1.351 0 00-.163-1.533c-2.888-3.34-10.649-12.664-11.875-15.642-.231-.562-.811-.881-1.409-.83a1.355 1.355 0 00-1.178 1.134l-.679 4.329a13.348 13.348 0 01-3.564-3.464 1.34 1.34 0 00-1.482-.526c-.557.159-.95.653-.98 1.231-.007.132-.029.658.003 1.37-3.484-3.1-9.077-8.754-10.894-14.492-1.013-3.198-.934-5.562.229-6.841 1.016-1.116 2.719-1.237 3.611-1.048.948.203 1.852.874 2.415 1.795.552.903.718 1.911.469 2.847-.111.417-.018.863.256 1.199.271.337.696.531 1.119.5 3.411-.169 20.565-1.299 23.338-6.918.387-.786.658-1.949.085-3.372 1.815-1.036 6.298-2.572 12.106 2.618a1.358 1.358 0 001.704.081c1.337-.983 3.348-3.346 3.1-6.221 2.023.254 5.503 1.278 7.916 5.167a1.357 1.357 0 002.127.224c.107-.111 2.303-2.424 3.21-5.282 1.615.377 4.818 1.592 7.948 5.525.234.295.579.478.954.508.132.002 1.855.105 4.079-.546-6.833 5.505-17.938 6.631-18.083 6.645a1.353 1.353 0 10-.921 2.205l1.928 2.35c-7.645.142-11.012-2.624-11.042-2.65a1.364 1.364 0 00-1.736-.038 1.354 1.354 0 00-.343 1.702l1.675 3.094c-3.006-.629-5.763-2.031-8.075-3.21-2.912-1.483-5.215-2.65-7.233-2.051-1.508.451-2.607 1.813-2.87 3.555-.284 1.898.49 3.711 2.019 4.73.779.52 1.667.774 2.56.774 1.261 0 2.536-.505 3.537-1.482.818-.798 1.309-1.768 1.453-2.763 3.048 1.544 6.758 3.289 10.996 3.471.476.058.948-.221 1.205-.634a1.35 1.35 0 00.042-1.362l-.885-1.633c2.557.862 6.354 1.55 11.556 1.031a1.353 1.353 0 00.913-2.204l-2.073-2.527c4.247-.707 12.964-2.758 18.465-8.092-.905 2.494-2.38 5.064-4.811 6.471a1.364 1.364 0 00-.374 2.023c.046.058 4.424 5.772 3.059 20.706-2.504-1.287-7.317-4.345-10.039-9.865a1.358 1.358 0 00-1.589-.702 1.355 1.355 0 00-.971 1.44c.181 1.754.328 4.558.169 6.531-1.462-1.048-3.51-2.761-4.355-4.633a1.326 1.326 0 00-1.365-.789 1.351 1.351 0 00-1.186 1.039c-.342 1.473-.798 3.18-1.169 4.338-1.347-.844-3.136-2.178-3.88-3.549a1.352 1.352 0 10-2.54.569c-.088 1.566-.295 3.982-.558 5.652-1.244-.762-2.994-1.913-4.287-3.083a1.341 1.341 0 00-1.293-.295 1.357 1.357 0 00-.924.953l-.694 2.637c-1.163-.675-2.775-1.751-3.829-3.038a1.35 1.35 0 00-1.902-.19 1.35 1.35 0 00-.19 1.902c2.205 2.694 6.073 4.473 6.237 4.547a1.355 1.355 0 001.869-.888l.594-2.257c2.194 1.633 4.542 2.921 4.665 2.988.34.183.742.212 1.107.086.365-.132.655-.413.798-.771.396-.992.675-3.027.854-4.83 1.848 1.606 3.922 2.655 4.051 2.719a1.355 1.355 0 001.766-.514c.382-.64.836-2.073 1.216-3.434 2.191 2.468 5.137 4.16 5.3 4.254.34.192.753.225 1.126.097.372-.134.666-.423.807-.793.408-1.073.544-2.77.557-4.438 2.577 3.148 5.559 5.153 7.667 6.316 0 .033-.015.062-.013.096.014.238.31 4.768 1.086 8.38-2.271-.841-5.922-2.554-9.295-5.73a1.353 1.353 0 00-2.182.475l-1.042 2.571-4.352-3.157a1.356 1.356 0 00-2.138.921l-.393 3.018c-.946-.685-2.081-1.591-2.891-2.502a1.354 1.354 0 00-2.023 1.797c1.917 2.156 5.134 4.122 5.27 4.204a1.354 1.354 0 002.046-.982l.381-2.93 3.91 2.837a1.356 1.356 0 002.049-.587l.974-2.407a30.264 30.264 0 007.02 4.303c.01.842.142 4.426 1.655 7.253-2.479-.065-6.364-.5-9.962-2.3a1.35 1.35 0 00-1.739.474l-1.96 3.02-8.105-5.438a1.321 1.321 0 00-1.172-.162 1.35 1.35 0 00-.853.819l-1.246 3.393c-1.492-1.674-3.631-4.03-4.419-4.66a1.352 1.352 0 00-1.837.138c-.023.024-1.916 2.052-4.183 3.628l-1.562-4.195a1.359 1.359 0 00-1.741-.797 1.355 1.355 0 00-.797 1.741l2.143 5.751a1.352 1.352 0 001.926.711c2.12-1.177 4.102-2.934 5.231-4.022 1.255 1.295 3.363 3.656 4.706 5.196.316.36.794.532 1.265.44.47-.086.86-.414 1.025-.863l1.436-3.91 7.816 5.244a1.362 1.362 0 001.025.201c.356-.072.667-.284.863-.588l2.067-3.188c3.474 1.5 6.948 1.944 9.441 2.05-.014.322.073.65.294.919.33.404 1.003 1.199 1.816 2.025l-3.384.051a1.352 1.352 0 00-1.326 1.482l.505 5.297c-1.868-.419-4.831-1.234-6.761-2.497a1.347 1.347 0 00-1.464-.014l-5.914 3.732-3.03-8.241a1.352 1.352 0 00-1.195-.885c-.588-.042-1.045.263-1.287.747l-3.321 6.641-2.327-3.711a1.357 1.357 0 00-1.112-.634c-.451.007-.879.204-1.142.575-.023.033-1.907 2.693-4.066 4.682l-1.544-4.875a1.354 1.354 0 00-1.092-.93 1.362 1.362 0 00-1.314.575 43.43 43.43 0 01-3.804 4.685l-.382-6.036a1.35 1.35 0 00-.693-1.096 1.346 1.346 0 00-1.297-.011c-.582.312-1.658.876-2.784 1.432 1.592-3.305 3.398-7.948 2.371-10.34-.306-.714-.882-1.187-1.571-1.48-.043-.03-.072-.073-.118-.098-.063-.034-.131-.036-.196-.06-.046-.013-.076-.051-.124-.062-.054-.013-.095-.009-.148-.02-.028-.003-.054-.009-.083-.011-1.835-.382-3.086.13-3.808.657-.738.54-1.225 1.256-1.544 1.946-.841-.812-1.857-2.023-2.513-3.585a1.35 1.35 0 00-1.228-.83c-.539-.034-1.027.308-1.251.798zm-10.29-15.1c7.315 3.526 16.305 3.916 18.762 3.961a252.607 252.607 0 003.243 3.951c-2.248.009-4.541.263-6.362.535l.321-.399a1.355 1.355 0 00-.974-2.199c-9.186-.546-19.304-3.738-19.404-3.773l-.012-.001-.008-.004c-1.508-.455-2.386-1.23-2.474-2.179-.068-.749.348-1.358.599-1.489 1.46-.754 4.532.735 6.309 1.597zm12.784.763c.292-.21.508-.511.565-.871l.396-2.537c.811 1.18 1.794 2.486 2.808 3.802a55.996 55.996 0 01-3.769-.394zm-2.382-.383a48.04 48.04 0 01-2.026-.423c.061-.29.025-.6-.114-.879a3.63 3.63 0 01-.109-.243 15.879 15.879 0 002.249 1.545zm17.846-14.772c-.615.606-1.695 1.066-2.705.395-.774-.516-.942-1.411-.844-2.078.079-.52.378-1.187.969-1.364a1.37 1.37 0 01.382-.05c.649 0 1.575.34 2.633.824l.002.003c.686 1.088-.243 2.081-.437 2.27zm51.45 20.256a1.36 1.36 0 001.299.083c.417-.195.706-.593.767-1.05.225-1.702.641-2.746 1.238-3.104 1.078-.647 3.69.343 6.709 1.487 2.301.872 5.166 1.955 8.43 2.755 8.519 2.087 18.534.295 27.368-1.288 2.985-.534 5.86-1.048 8.533-1.39 5.589-.712 11.287 1.628 12.713 5.22 1.077 2.711-.578 5.839-4.659 8.807-11.313 8.226-65.482 4.573-71.005 4.178-1.469-1.399-2.044-4.263-2.215-6.15.893.285 1.492.427 1.569.444a1.364 1.364 0 001.302-.438c.321-.374.416-.889.247-1.352-.844-2.303-1.308-6.558-1.501-8.736a1.32 1.32 0 001.054-.134c.352-.216.585-.584.634-.994 1.6-13.594-1.191-20.682-2.654-23.337a11.47 11.47 0 001.004-.87c.098 6.425 3.825 11.592 5.349 13.437-2.721 6.162 1.23 10.791 3.818 12.432z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M222.355 67.24c-.525-10.901-3.113-28.531-11.385-28.935-4.662-.215-6.959 2.655-7.054 2.778a1.394 1.394 0 01-1.155.531l-3.161-.19.566 2.095a1.36 1.36 0 01-.435 1.387c-.192.162-4.662 4.044-1.942 8.988 2.072 3.767 8.769 5.55 13.658 6.85 2.183.582 4.07 1.084 5.294 1.683 2.182 1.067 4.093 2.867 5.614 4.813z",
    fill: "#FFD250"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M211.1 35.602c-4.757-.233-7.718 2.138-8.831 3.271l-4.385-.263a1.36 1.36 0 00-1.13.497 1.354 1.354 0 00-.259 1.207l.842 3.124c-2.15 2.194-4.678 6.75-1.922 11.759 2.628 4.782 9.973 6.735 15.334 8.163 2.047.544 3.815 1.015 4.803 1.497 3.17 1.55 5.716 5.076 7.041 7.86a1.351 1.351 0 001.514.739 1.353 1.353 0 001.06-1.308c.014-1.462.187-35.851-14.067-36.546zm.345 25.141c-4.889-1.3-11.586-3.083-13.658-6.85-2.72-4.943 1.75-8.825 1.942-8.988.399-.339.57-.881.435-1.387l-.566-2.095 3.161.19c.435.023.883-.177 1.155-.531.095-.124 2.392-2.994 7.054-2.778 8.273.404 10.86 18.034 11.385 28.935-1.521-1.945-3.432-3.746-5.615-4.813-1.222-.6-3.11-1.102-5.293-1.683z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M448.542 67.24c.525-10.901 3.113-28.531 11.385-28.935 4.662-.215 6.959 2.655 7.054 2.778.273.354.721.553 1.155.531l3.161-.19-.566 2.095a1.36 1.36 0 00.435 1.387c.192.162 4.662 4.044 1.942 8.988-2.072 3.767-8.769 5.55-13.658 6.85-2.183.582-4.07 1.084-5.294 1.683-2.182 1.067-4.094 2.867-5.614 4.813z",
    fill: "#FFD250"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M445.729 72.15a1.355 1.355 0 001.352 1.34 1.35 1.35 0 001.221-.771c1.325-2.784 3.871-6.31 7.041-7.86.989-.483 2.755-.953 4.803-1.497 5.362-1.427 12.705-3.381 15.334-8.163 2.755-5.01.227-9.566-1.922-11.759l.842-3.124a1.356 1.356 0 00-1.389-1.704l-4.385.263c-1.113-1.131-4.074-3.502-8.831-3.271-14.252.693-14.079 35.082-14.066 36.546zm8.428-9.725c-2.183 1.068-4.095 2.869-5.615 4.813.525-10.901 3.113-28.531 11.385-28.935 4.662-.215 6.959 2.655 7.054 2.778.273.354.721.553 1.155.531l3.161-.19-.566 2.095a1.36 1.36 0 00.435 1.387c.192.162 4.662 4.044 1.942 8.988-2.072 3.767-8.769 5.55-13.658 6.85-2.181.582-4.069 1.084-5.293 1.683z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M448.542 268.76c.525 10.901 3.113 28.531 11.385 28.935 4.662.215 6.959-2.655 7.054-2.779a1.394 1.394 0 011.155-.531l3.161.19-.566-2.095a1.36 1.36 0 01.435-1.387c.192-.162 4.662-4.044 1.942-8.988-2.072-3.767-8.769-5.55-13.658-6.85-2.183-.582-4.07-1.084-5.294-1.683-2.182-1.065-4.094-2.866-5.614-4.812z",
    fill: "#FFD250"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M459.797 300.398c4.757.233 7.717-2.138 8.831-3.271l4.385.263a1.36 1.36 0 001.13-.497c.275-.337.372-.786.259-1.207l-.842-3.124c2.15-2.194 4.678-6.75 1.922-11.759-2.628-4.782-9.973-6.735-15.334-8.163-2.047-.544-3.815-1.015-4.803-1.497-3.17-1.55-5.716-5.076-7.041-7.86a1.35 1.35 0 00-2.573.569c-.015 1.462-.188 35.851 14.066 36.546zm-.345-25.141c4.889 1.3 11.586 3.083 13.658 6.85 2.72 4.943-1.75 8.825-1.942 8.988-.399.339-.57.881-.435 1.387l.566 2.095-3.161-.19a1.389 1.389 0 00-1.155.531c-.095.124-2.392 2.994-7.054 2.778-8.273-.404-10.86-18.034-11.385-28.935 1.521 1.945 3.432 3.746 5.615 4.813 1.222.6 3.11 1.102 5.293 1.683z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M222.355 268.76c-.525 10.901-3.113 28.531-11.385 28.935-4.662.215-6.959-2.655-7.054-2.779a1.394 1.394 0 00-1.155-.531l-3.161.19.566-2.095a1.36 1.36 0 00-.435-1.387c-.192-.162-4.662-4.044-1.942-8.988 2.072-3.767 8.769-5.55 13.658-6.85 2.183-.582 4.07-1.084 5.294-1.683 2.182-1.065 4.093-2.866 5.614-4.812z",
    fill: "#FFD250"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M225.167 263.85a1.355 1.355 0 00-1.352-1.34c-.513 0-.994.292-1.222.771-1.325 2.784-3.871 6.31-7.041 7.86-.989.483-2.755.953-4.803 1.497-5.362 1.427-12.705 3.381-15.334 8.163-2.755 5.01-.227 9.566 1.922 11.759l-.842 3.124a1.356 1.356 0 001.389 1.704l4.385-.263c1.113 1.131 4.074 3.502 8.831 3.271 14.254-.693 14.081-35.082 14.067-36.546zm-8.428 9.725c2.183-1.068 4.095-2.869 5.615-4.813-.525 10.901-3.113 28.531-11.385 28.935-4.662.215-6.959-2.655-7.054-2.778a1.394 1.394 0 00-1.155-.531l-3.161.19.566-2.095a1.36 1.36 0 00-.435-1.387c-.192-.162-4.662-4.044-1.942-8.988 2.072-3.767 8.769-5.55 13.658-6.85 2.182-.582 4.07-1.084 5.293-1.683z",
    fill: "#464655"
  })));
}

function SvgLr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 30.771H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v21.668z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 30.775h512V61.27H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 61.263h512v30.495H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 91.763h512v30.495H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 152.753H8.828A8.829 8.829 0 010 143.925v-21.667h512v30.495z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M512 183.247H0v-41.73h8.826l.002 11.236H512z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 183.25h512v30.495H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 213.738h512v30.495H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 244.237h512v30.495H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 274.737h512v30.495H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896v-21.667h512v21.667a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M141.241 152.753H8.828A8.829 8.829 0 010 143.925V9.103A8.829 8.829 0 018.828.275h132.414a8.829 8.829 0 018.828 8.828v134.822a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M72.512 39.737l-8.428 25.27-26.638.206c-2.554.02-3.614 3.279-1.559 4.797l21.429 15.825-8.035 25.398c-.77 2.435 2.003 4.45 4.081 2.965l21.674-15.49 21.672 15.49c2.078 1.485 4.851-.53 4.081-2.965l-8.035-25.398 21.429-15.825c2.055-1.517.995-4.778-1.559-4.797l-26.638-.206-8.428-25.27c-.81-2.424-4.237-2.424-5.046 0z",
    fill: "#F5F5F5"
  })));
}

function SvgLs(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M286.477 187.913l-2.052 1.045c-.279.142-.58.265-.865.403l-18.127-22.898c3.726-8.099 5.934-19.153 5.934-24.178 0-8.257-5.418-15.136-12.547-16.591a3.068 3.068 0 00-2.805-1.831 3.068 3.068 0 00-2.805 1.831c-7.128 1.455-12.547 8.335-12.547 16.591 0 5.025 2.209 16.078 5.934 24.178l-18.126 22.898c-.282-.137-.583-.259-.861-.401l-2.052-1.045-7.658 15.054 2.052 1.044c10.451 5.316 22.921 8.126 36.063 8.126 13.143 0 25.617-2.812 36.07-8.127l2.052-1.044-7.66-15.055zm-18.181-45.628c0 3.735-1.387 11.586-3.957 18.783a55.305 55.305 0 01-1.042 2.699l-2.677-3.382v-11.959h4.606l-6.141-6.141v-13.363c5.288 1.54 9.211 6.938 9.211 13.363zm-20.606 18.782c-2.57-7.197-3.957-15.048-3.957-18.783 0-6.424 3.923-11.822 9.212-13.363v13.363l-6.141 6.141h4.606v11.959l-2.677 3.382a53.908 53.908 0 01-1.043-2.699zm-20.648 34.084l.627 2.579-2.251.614 1.624-3.193zm-2.679 5.869l3.851-1.05.707 2.91a65.819 65.819 0 01-4.558-1.86zm5.839-5.867a61.565 61.565 0 005.449 1.849l.554 1.698-4.849 1.196-1.154-4.743zm2.164 8.901l-.467-1.919 5.022-1.239 1.557 4.771a72.81 72.81 0 01-6.112-1.613zm6.816-6.127c1.927.449 3.889.836 5.892 1.129l.834 1.492-5.33 1.661-1.396-4.282zm2.742 8.405l-.631-1.933 5.763-1.796 2.612 4.671a82.299 82.299 0 01-7.744-.942zm6.923-6.823c2.366.224 4.759.348 7.167.348.513 0 1.023-.028 1.535-.039l.641.983-7.084 2.748-2.259-4.04zm7.167 8.023c-.913 0-1.814-.039-2.719-.067l-1.055-1.887 7.235-2.806 2.933 4.497a85.946 85.946 0 01-6.394.263zm5.098-7.869a74.54 74.54 0 007.199-.831l.691.883-5.608 3.446-2.282-3.498zm4.748 7.28l-1.208-1.853 5.778-3.55 3.212 4.107a78.92 78.92 0 01-7.782 1.296zm5.846-8.754a67.251 67.251 0 005.878-1.536l.715.926-4.077 3.827-2.516-3.217zm5.22 6.673l-1.28-1.636 4.067-3.817 2.835 3.671c-1.833.66-3.7 1.268-5.622 1.782zm3.726-9.26a57.885 57.885 0 003.786-1.54l.6 1.181-1.962 3.5-2.424-3.141zm4.886 6.327l-.931-1.206 1.688-3.011 1.628 3.2c-.779.36-1.585.685-2.385 1.017z",
    fill: "#464655"
  })));
}

function SvgLt(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#73AF00",
    d: "M0 112.088h512V223.9H0z"
  })));
}

function SvgLu(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  })));
}

function SvgLv(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#C8414B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 137.103h512v61.793H0z"
  })));
}

function SvgLy(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 247.448h512v79.448a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896v-79.448z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v79.448H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M0 88.552h512v158.897H0z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M306.058 139.432l13.286 17.379 20.745-6.944c1.16-.388 2.146.924 1.452 1.93l-12.424 18.006 13.014 17.583c.727.983-.215 2.327-1.387 1.977l-20.963-6.251-12.701 17.811c-.711.996-2.28.514-2.31-.708l-.533-21.869-20.864-6.575c-1.166-.367-1.194-2.008-.04-2.415l20.634-7.264-.193-21.875c-.011-1.224 1.541-1.757 2.284-.785z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M270.001 210.898c-23.672 0-42.876-19.203-42.876-42.898 0-23.65 19.203-42.897 42.876-42.897 8.808 0 16.93 2.709 23.699 7.294 1.036.702 2.22-.66 1.352-1.562-10.116-10.517-24.434-16.934-40.309-16.392-27.274.93-49.852 22.797-51.594 50.031-1.996 31.194 22.703 57.118 53.455 57.118 15.148 0 28.762-6.333 38.485-16.459.858-.895-.327-2.236-1.354-1.54-6.776 4.592-14.911 7.305-23.734 7.305z"
  }))));
}

function SvgMa(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M297.951 189.961l67.433-49.478h-83.509L256 60.845l-25.875 79.638h-83.509l67.433 49.478-25.675 79.022 67.56-48.289.066.047.066-.047 67.56 48.289-25.675-79.022zm13.527-31.823l-19.273 14.141-4.595-14.141h23.868zm-76.694 25.139l8.169-25.14h26.094l8.169 25.14L256 198.845l-21.216-15.568zM256 117.983l7.31 22.5h-14.622l7.312-22.5zm-55.478 40.155h23.868l-4.595 14.141-19.273-14.141zm21.215 65.293l7.302-22.472 11.911 8.739-19.213 13.733zm61.225-22.472l7.302 22.472-19.212-13.732 11.91-8.74z",
    fill: "#5A8250"
  })));
}

function SvgMc(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168z",
    fill: "#F5F5F5"
  })));
}

function SvgMd(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M341.333.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.829 8.829 0 01-8.828 8.828H341.333V.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h161.839v335.448H8.828A8.829 8.829 0 010 326.896V9.103A8.828 8.828 0 018.828.276z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M267.254 203.956l4.392-3.58 20.012 24.543-4.392 3.58z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFBE5A",
    d: "M265.062 205.753l8.784-7.156 8.802 10.805-8.783 7.156z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M227.177 228.52l-4.391-3.581 20.012-24.544 4.391 3.58z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFBE5A",
    d: "M240.573 216.555l-8.783-7.156 8.802-10.805 8.784 7.155z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M250.14 209.586l-14.163 28.327 19.828 14.163v-39.657z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M261.471 209.586l14.163 28.327-19.829 14.163v-39.657z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M216.148 209.586v-73.65h8.498v56.653c0 8.499-8.498 16.997-8.498 16.997z",
    fill: "#FFBE5A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M210.482 223.75v-87.814h8.498v70.817c-.001 8.498-8.498 16.997-8.498 16.997z",
    fill: "#FFCD5A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M204.817 235.081v-99.144h8.498v82.148c0 8.497-8.498 16.996-8.498 16.996z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M224.646 138.769v53.821c0 14.164 20.537 12.275 31.159 22.661 10.623-10.387 31.159-8.498 31.159-22.661v-53.821h-62.318z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M224.646 169.929v22.662c0 14.164 20.537 12.275 31.159 22.661 10.623-10.387 31.159-8.498 31.159-22.662v-22.662l-62.318.001z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M255.805 206.753l-8.498-5.665v-2.833l2.833-2.832v-16.997l-8.498-5.665 8.498-11.331h2.832l2.833 2.834 2.833-2.834h2.833l8.498 11.331-8.498 5.665v16.997l2.832 2.832v2.833z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M244.474 141.602s-11.33 2.833-11.33 14.164 11.33 16.996 11.33 16.996l5.665-8.498c-16.996-5.666-5.665-22.662-5.665-22.662zm22.662 0s11.33 2.833 11.33 14.164-11.33 16.996-11.33 16.996l-5.665-8.498c16.995-5.666 5.665-22.662 5.665-22.662z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M227.478 169.929l5.665 2.832 5.666-2.832-5.666-2.833zm45.323 0l5.665 2.832 5.666-2.832-5.666-2.833zm-16.996-26.911l2.06 2.11 2.947-.036-.034 2.948 2.109 2.06-2.109 2.059.034 2.948-2.947-.035-2.06 2.11-2.059-2.11-2.949.035.036-2.948-2.109-2.059 2.109-2.06-.036-2.948 2.949.036zM236.568 182.3l2.042 2.272 2.84-1.126c1.471-.583 2.851 1.016 2.059 2.386l-1.529 2.645 1.949 2.354c1.009 1.218-.086 3.026-1.633 2.696l-2.988-.638-1.636 2.581c-.847 1.336-2.904.853-3.069-.721l-.318-3.039-2.959-.758c-1.533-.393-1.709-2.498-.264-3.14l2.792-1.24-.193-3.049c-.097-1.582 1.85-2.4 2.907-1.223zm37.729 6.458c.625-3.222 3.283-5.503 6.382-5.847-.636-.342-1.312-.625-2.057-.769a7.318 7.318 0 00-2.786 14.368c.746.145 1.479.136 2.195.056-2.745-1.477-4.358-4.586-3.734-7.808zm-29.823-49.989l5.665-28.327-11.33-8.498 2.833-2.833h5.665s2.833-2.833 8.498-2.833c5.665 0 11.33 2.833 11.33 11.33s2.833 31.159 2.833 31.159h-25.494v.002z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M224.646 127.438c-6.258 0-11.33 5.073-11.33 11.33h22.662c-.001-6.257-5.075-11.33-11.332-11.33z",
    fill: "#FFAA5A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M221.813 138.769h-16.996v-18.855a6.64 6.64 0 016.639-6.639h3.718a6.64 6.64 0 016.639 6.639v18.855zm73.65 70.817v-73.65h-8.498v56.653c0 8.499 8.498 16.997 8.498 16.997z",
    fill: "#FFBE5A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M301.128 223.75v-87.814h-8.498v70.817c0 8.498 8.498 16.997 8.498 16.997z",
    fill: "#FFCD5A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M306.794 235.081v-99.144h-8.498v82.148c-.001 8.497 8.498 16.996 8.498 16.996z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M286.965 127.438c6.258 0 11.33 5.073 11.33 11.33h-22.662c.001-6.257 5.074-11.33 11.332-11.33z",
    fill: "#FFAA5A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M289.798 138.769h16.996v-18.855a6.64 6.64 0 00-6.639-6.639h-3.717a6.64 6.64 0 00-6.639 6.639v18.855h-.001z",
    fill: "#FFBE5A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFAA5A",
    d: "M282.934 236.176l-3.63-2.21 39.669-65.143 3.629 2.21z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M281.078 226.888l7.075-8.85 6.922 5.532-7.075 8.851z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M315.273 185.736l-6.05-3.682 8.497-13.961 6.05 3.682z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#73AF00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M231.864 235.445l-39.984-61.85 2.379-1.539 39.985 61.851z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M219.413 201.386c-1.016 1.152-1.69 2.899-1.86 4.913-1.397-1.41-3.001-2.308-4.495-2.549-.394 1.461-.234 3.293.479 5.145-1.907-.672-3.775-.775-5.242-.321.413 2.088 2.114 4.354 4.721 5.909 2.606 1.556 5.409 1.976 7.442 1.348l.582-.376c1.407-1.597 2.174-4.324 1.826-7.339-.351-3.015-1.72-5.496-3.453-6.73z"
  })), /*#__PURE__*/react.createElement("circle", {
    fill: "#FF4B55",
    cx: 220.745,
    cy: 215.647,
    r: 2.833
  }), /*#__PURE__*/react.createElement("path", {
    d: "M208.648 184.734c-1.016 1.152-1.69 2.899-1.86 4.913-1.397-1.41-3.001-2.308-4.495-2.549-.394 1.461-.234 3.293.479 5.145-1.907-.672-3.775-.775-5.242-.321.413 2.088 2.114 4.354 4.721 5.909 2.606 1.556 5.409 1.976 7.442 1.348l.582-.376c1.407-1.597 2.174-4.324 1.826-7.339-.35-3.016-1.719-5.497-3.453-6.73z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FF4B55",
    cx: 209.986,
    cy: 198.996,
    r: 2.833
  }), /*#__PURE__*/react.createElement("path", {
    d: "M197.884 168.082c-1.016 1.152-1.69 2.899-1.86 4.913-1.397-1.41-3.001-2.308-4.495-2.549-.394 1.461-.234 3.293.479 5.145-1.907-.672-3.775-.775-5.242-.321.413 2.088 2.114 4.354 4.721 5.909 2.606 1.556 5.409 1.976 7.442 1.348l.582-.376c1.407-1.597 2.174-4.324 1.826-7.339-.352-3.016-1.72-5.497-3.453-6.73z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FF4B55",
    cx: 199.217,
    cy: 182.345,
    r: 2.833
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M226.446 232.437l-7.075-8.85 6.921-5.534 7.075 8.851zm12.362-141.822h2.833v19.829h-2.833z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M235.972 93.451h8.498v2.833h-8.498z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#FF875A",
    d: "M238.809 101.944l8.498 6.374v-9.206h-5.665z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M241.642 90.613v2.833h2.833v2.833h-2.833v2.833h5.665s2.833-2.833 8.498-2.833c5.665 0 11.33 2.833 11.33 11.33 0 8.498 2.833 31.159 2.833 31.159h5.665c0-6.258 5.073-11.33 11.33-11.33.984 0 1.922.164 2.833.401v-6.066a8.498 8.498 0 0116.996 0v67.023l3.658-6.009-1.209-.736 8.498-13.962 1.209.736 1.815 1.106 3.025 1.841-8.498 13.962-1.21-.736-7.288 11.974v38.113s-6.764-6.783-8.212-14.287c-1.035-1.33-2.227-3.026-3.276-4.952l-3.242 5.326 3.014 2.409-7.075 8.851-1.879-1.502-3.202 5.261-3.629-2.21 3.485-5.726-1.692-1.353 2.409-3.015-7.433-9.116-2.197 1.79-6.609-8.11c-1.759.707-3.498 1.484-5.171 2.372l13.547 27.095-19.829 14.164-19.829-14.164 13.547-27.095a46.6 46.6 0 00-3.055-1.492l-5.891 7.23-2.197-1.79-7.433 9.116 2.409 3.015-2.406 1.923 3.288 5.086-2.379 1.538-3.133-4.846-2.287 1.828-7.075-8.851 3.179-2.541-1.685-2.607-.119.002c-.926 0-1.833-.413-2.372-1.248a2.77 2.77 0 01-.409-1.135 9.436 9.436 0 01-1.635-.242c-1.053 1.941-2.253 3.65-3.294 4.989-1.447 7.505-8.212 14.287-8.212 14.287V198.95c-.856-.269-1.719-.611-2.568-1.118-2.606-1.556-4.308-3.822-4.721-5.909a6.658 6.658 0 011.961-.276c1.03 0 2.15.199 3.282.597-.369-.96-.584-1.91-.655-2.81l-2.786-4.31-.119.002c-.926 0-1.833-.413-2.372-1.248a2.787 2.787 0 01-.41-1.135c-1.568-.094-3.286-.574-4.943-1.562-2.606-1.556-4.308-3.822-4.721-5.909a6.663 6.663 0 011.961-.276c1.03 0 2.15.198 3.282.597-.713-1.853-.873-3.684-.479-5.145 1.494.241 3.098 1.139 4.495 2.549.17-2.014.844-3.761 1.859-4.913 1.734 1.234 3.102 3.715 3.45 6.731.222 1.918-.046 3.681-.605 5.15.335.213.638.484.867.84.563.871.543 1.918.113 2.783l2.786 4.31c.108.06.214.132.322.199v-66.321a8.498 8.498 0 0116.996 0v6.066c.91-.236 1.848-.401 2.833-.401 6.258 0 11.33 5.073 11.33 11.33h8.498l5.665-28.327-2.833-2.124-5.665-4.249v6.374h-2.833V96.281h-2.833v-2.833h2.833v-2.833h2.844l-.005-.002zm45.472 128.743l1.046-1.309.557.445 4.566-7.501c-.398-1.387-.653-2.81-.653-4.237v-.498c-2.472-3.252-5.665-8.455-5.665-13.666 0 5.966-3.662 9.074-8.674 11.462l4.36 5.351-2.195 1.788 6.658 8.165zm-62.345-.1l1.514-1.21 1.046 1.309 6.658-8.167-2.195-1.788 3.605-4.424c-6.051-2.527-10.752-5.623-10.752-12.387 0 3.793-1.693 7.578-3.567 10.616.89 1.306 1.561 2.976 1.785 4.91.222 1.918-.046 3.681-.605 5.15.335.213.638.484.867.84.563.871.543 1.917.113 2.783l1.531 2.368zm16.873-130.767h-2.833a2.124 2.124 0 00-2.124 2.124v.708h-.708a2.124 2.124 0 00-2.124 2.124v2.833c0 1.173.951 2.124 2.124 2.124h.708v12.039c0 1.173.951 2.124 2.124 2.124h2.833a2.124 2.124 0 002.124-2.124v-2.124l2.266 1.699 1.761 1.321-5.062 25.306h-4.799c-1.022-6.413-6.591-11.33-13.288-11.33-.235 0-.47.008-.708.022v-3.563c0-5.857-4.766-10.623-10.623-10.623-5.857 0-10.623 4.766-10.623 10.623v49.575c-.767-2.115-2.014-3.885-3.577-4.998a2.121 2.121 0 00-2.824.325c-.654.743-1.192 1.647-1.593 2.667-.93-.504-1.887-.844-2.831-.996a2.125 2.125 0 00-2.388 1.543c-.249.922-.332 1.934-.254 2.989a10.407 10.407 0 00-.498-.012c-.92 0-1.791.125-2.588.371a2.126 2.126 0 00-1.458 2.442c.55 2.776 2.686 5.514 5.716 7.321a13.39 13.39 0 004.457 1.685 4.853 4.853 0 003.243 2.44l1.548 2.395-.154-.001c-.92 0-1.791.125-2.588.371a2.126 2.126 0 00-1.458 2.442c.55 2.776 2.686 5.514 5.716 7.321.484.289.988.545 1.532.776v34.648a2.124 2.124 0 003.629 1.499c.289-.289 6.952-7.042 8.689-14.879a40.301 40.301 0 001.974-2.834 4.887 4.887 0 002.643 1.565l.092.141-1.678 1.342a2.124 2.124 0 00-.333 2.987l7.075 8.851a2.124 2.124 0 002.986.333l.452-.361 1.857 2.873a2.124 2.124 0 002.937.63l1.374-.888-.311.623a2.125 2.125 0 00.665 2.679l19.829 14.164a2.122 2.122 0 002.47 0l19.829-14.164a2.123 2.123 0 00.665-2.679l-12.597-25.195a53.434 53.434 0 011.674-.753l5.609 6.883a2.122 2.122 0 002.99.304l.551-.448 5.006 6.14-1.338 1.674a2.126 2.126 0 00.333 2.987l.232.185-2.514 4.129a2.125 2.125 0 00.71 2.919l3.629 2.21a2.126 2.126 0 002.921-.711l1.947-3.199a2.125 2.125 0 002.979-.339l7.075-8.851c.26-.326.409-.705.452-1.09 2.308 6.903 7.838 12.506 8.1 12.769a2.127 2.127 0 002.316.464 2.125 2.125 0 001.313-1.963v-37.517l5.937-9.752a2.123 2.123 0 002.252-.976l8.498-13.962a2.116 2.116 0 00.249-1.607 2.131 2.131 0 00-.96-1.313l-3.025-1.841L320.06 167l-1.212-.737a2.12 2.12 0 00-2.917.712l-7.007 11.512V121.77c0-5.857-4.766-10.623-10.623-10.623-5.857 0-10.623 4.766-10.623 10.623v3.563a12.008 12.008 0 00-.708-.022c-6.697 0-12.266 4.917-13.288 11.33h-1.827c-.67-5.577-2.59-22.173-2.59-29.035 0-9.92-6.951-13.455-13.455-13.455-4.817 0-7.925 1.836-9.258 2.833h-.07c.078-.222.121-.46.121-.708v-2.833a2.124 2.124 0 00-2.124-2.124h-.708v-.708a2.131 2.131 0 00-2.129-2.122zM223.55 203.202a30.647 30.647 0 001.426-2.831c1.771 2.377 4.319 4.067 7.031 5.405l-1.86 2.283a2.126 2.126 0 00.304 2.989l.546.446-3.785 4.642a2.126 2.126 0 00-1.551-.122 4.82 4.82 0 00-.981-3.386c.378-1.519.48-3.138.294-4.756a13.364 13.364 0 00-1.424-4.67zm58.029 1.523c1.871-1.091 3.688-2.473 5.066-4.33 1.085 2.477 2.511 4.73 3.861 6.569.017 1.183.179 2.401.491 3.694l-3.225 5.299c-.186.034-.37.094-.543.179l-3.785-4.642.546-.446a2.123 2.123 0 00.304-2.989l-2.715-3.334zm-41.003 13.956c.617 0 1.228-.267 1.649-.782l3.583-4.396-9.697 19.394a1.97 1.97 0 00-.086-.145l-2.244-3.473.905-.724a2.124 2.124 0 00.333-2.986l-1.338-1.674 5.006-6.141.551.448c.391.324.866.479 1.338.479zm54.274 1.993l.462-.76c.406.598.836 1.194 1.288 1.788.04.179.082.356.127.534a2.126 2.126 0 00-.323-.32l-1.554-1.242z",
    fill: "#FFAA5A"
  })));
}

function SvgMe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C8414B",
    d: "M17.655 17.931h476.69v300.138H17.655z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H8.828A8.828 8.828 0 000 9.103v317.793a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828V9.103a8.83 8.83 0 00-8.829-8.827zm-8.827 317.793H17.655V17.931h476.69v300.138z",
    fill: "#E6B432"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#41479B",
    cx: 328.43,
    cy: 223.371,
    r: 13.433
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#E6B432"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M352.003 146.242c-9.886 8.311-16.535 8.661-16.535 8.661 17.586-7.174 15.748-20.822 15.748-20.822-8.311 10.936-16.798 13.998-16.798 13.998 17.673-11.986 14.873-28.084 14.873-28.084-5.774 12.774-13.079 17.76-13.079 17.76 14.698-19.554 7.48-32.152 7.48-32.152-5.774 18.11-10.63 23.36-10.63 23.36 11.286-30.184 1.619-38.889 1.619-38.889 0 16.185-6.037 25.459-6.037 25.459 6.3-21.347-3.587-33.596-3.587-33.596s-.093 17.404-3.445 26.52c-.804-1.222-1.28-1.06-1.28-1.06-1.704 11.179-7.712 19.049-10.306 22.01-.576-2.786-2.308-3.639-2.308-3.639s-.312 2.735-2.766 6.769c-1.608 2.643-9.204 8.806-10.429 14.23-.982 4.349 3.325 7.961 4.724 8.836 1.4.875 2.887 2.45 2.274 4.986-.612 2.537-5.162 2.274-8.399 2.187-3.237-.087-3.674 5.249-7.262 5.075l-.608 3.98-1.405.307s-14.698 29.289-15.949 39.255l-10.823 1.427-10.823-1.427c-1.251-9.966-15.949-39.255-15.949-39.255l-1.405-.307-.608-3.98c-3.587.175-4.024-5.162-7.262-5.075-3.238.087-7.787.35-8.399-2.187-.612-2.537.875-4.113 2.274-4.986 1.4-.875 5.707-4.488 4.724-8.836-1.225-5.425-8.821-11.587-10.429-14.23-2.454-4.033-2.766-6.769-2.766-6.769s-1.732.853-2.308 3.639c-2.593-2.963-8.601-10.831-10.305-22.01 0 0-.476-.161-1.28 1.06-3.352-9.117-3.445-26.52-3.445-26.52s-9.886 12.248-3.587 33.596c0 0-6.037-9.273-6.037-25.459 0 0-9.667 8.705 1.619 38.889 0 0-4.855-5.249-10.63-23.36 0 0-7.218 12.598 7.48 32.152 0 0-7.305-4.986-13.079-17.76 0 0-2.799 16.098 14.873 28.084 0 0-8.487-3.062-16.798-13.998 0 0-1.837 13.649 15.748 20.822 0 0-6.649-.35-16.535-8.661 0 0-1.75 12.074 21.172 18.285 0 0-9.362-.175-18.898-6.562 0 0-.263 11.898 19.335 14.261 0 0-6.474.962-13.736-1.662 0 0 .263 9.623 17.323 10.848 0 0-6.737.525-11.111-.525 0 0 .437 9.886 13.911 8.224 0 0-4.55 1.487-6.037 1.924 0 0 .263 8.071 14.304 5.184 0 0-2.494 1.553-5.906 2.078 0 0 2.887 6.737 14.611 3.762l-2.406 2.625s9.055 5.249 16.01-1.969l-2.494 4.462s5.906 2.231 9.58-3.543c0 0-1.006 8.661-13.255 10.237 0 0 .437 1.837.962 2.537 0 0-.788 1.487-7.874 2.712 0 0 1.487 2.274 3.062 2.975 0 0-3.062 2.625-4.724 3.149 0 0 2.625 1.312 4.287 1.575 0 0-3.674 3.587-8.224 3.674-4.55.087-12.685-.438-12.685-.438s-.087-4.374-2.187-8.137c-2.1-3.762-2.799-4.046-2.799-4.046s.459-3.018-.853-4.265c-1.312-1.247-2.034-1.837-2.034-1.837s.7-6.037-1.225-9.799c-1.924-3.762-8.749-11.986-9.099-18.11-.35-6.124-.087-8.399-.087-8.399l-2.1.525-1.4-2.887 2.362-.263-.962-4.374-3.238 1.225-.438-3.762-3.849 1.575 1.924 3.412-3.412.962 2.013 4.024 2.625-1.662.7 3.499s-1.575.35-2.45 1.75c0 0 4.329 2.873 5.599 6.3 2.013 5.425 1.4 17.673 4.287 21.347 2.887 3.674 5.162 6.211 5.162 6.211s-.809 2.494.109 3.871c.919 1.378 2.231 1.772 2.231 1.772s-.788 5.578 1.247 9.252c2.034 3.674 3.215 4.594 3.215 4.594s-7.415 4.527-2.165 9.777c0 0-.7 4.768 4.287 5.906 0 0 .263 3.762 4.55 3.325 0 0 2.1-.612 2.625.438.525 1.049 0 7.086 0 7.086s1.924-.175 3.149-1.049l3.849 1.924.087-4.287 4.812-1.924s-2.1.35-6.387-3.674c0 0 .7-.438 1.225-3.85 0 0 3.412-2.712 4.113-4.899.7-2.187 5.512-6.999 11.111-8.574l.766 3.412s8.006-7.086 11.351-7.48l2.756 3.63s10.324-15.31 14.873-18.023c-.35 1.225 2.187 1.4-3.456 7.699-5.643 6.3-2.144 11.286-2.144 11.286-3.499 2.887-2.799 5.512-3.238 8.487-.437 2.975-12.074 10.674-12.074 10.674 3.674 4.637 7.787 3.587 7.787 3.587-2.275 1.487-1.575 6.474-1.575 6.474 3.325.875 6.649-.612 6.649-.612-1.138 3.149.612 5.336.612 5.336 2.1-1.312 6.912-2.1 6.912-2.1-.612 5.425 2.887 8.311 2.887 8.311l3.062-3.325c.525 6.124 5.95 9.624 5.95 9.624s5.425-3.5 5.95-9.624l3.062 3.325s3.5-2.887 2.887-8.311c0 0 4.812.788 6.912 2.1 0 0 1.75-2.187.612-5.336 0 0 3.325 1.487 6.649.612 0 0 .7-4.987-1.575-6.474 0 0 4.113 1.049 7.787-3.587 0 0-11.636-7.699-12.074-10.674-.437-2.975.263-5.599-3.238-8.487 0 0 3.499-4.987-2.144-11.286-5.643-6.3-3.106-6.475-3.456-7.699 4.55 2.712 14.873 18.023 14.873 18.023l2.756-3.63c3.347.394 11.351 7.48 11.351 7.48l.766-3.412.145-.158c4.174 2.248 11.068 5.288 13.854 7.418 2.975 2.275 5.425 2.45 12.598 0 7.175-2.45 20.522-6.217 18.548-10.674-.108-.243-.23-.406-.348-.596.313-1.151.442-3.16-1.665-4.916 0 0 .025.489.008 1.117l-6.839-2.549c-.226-.605-.564-1.198-1.217-1.717 0 0 .01.525-.084 1.233l-1.754-.654 3.501-9.849c-.265-.148-.563-.231-.838-.361.071-.892.239-2.125.5-3.414.855.299 1.636.668 2.202 1.131l.988-3.606s-1.063-.07-2.464-.332c.354-1.088.774-2.065 1.273-2.696l-4.637-1.4s.12 1.405.038 3.158c-.885-.359-1.729-.815-2.411-1.399l-1.087 4.002c.373.022 1.639.131 3.106.393-.265 1.175-.732 2.217-1.401 2.999-.165-.022-.318-.082-.486-.098l-3.4 9.565-9.22-3.436c-.395.622-.7 1.3-.985 1.986.049-.1.093-.256.145-.319 0 0-3.567 1.866-3.518 4.607-.657.249-1.233.742-1.558 1.597-1.049 2.756 5.38 8.924 3.806 9.711-1.546.772-9.623-5.88-10.918-6.997 1.665-.323 4.094-1.533 4.094-1.533-1.663-.525-4.724-3.149-4.724-3.149 1.575-.7 3.062-2.975 3.062-2.975-7.086-1.225-7.874-2.712-7.874-2.712.525-.7.962-2.537.962-2.537-12.248-1.575-13.255-10.237-13.255-10.237 3.674 5.774 9.58 3.543 9.58 3.543l-2.494-4.462c6.955 7.218 16.01 1.969 16.01 1.969l-2.406-2.625c11.723 2.975 14.611-3.762 14.611-3.762-3.412-.525-5.906-2.078-5.906-2.078 14.042 2.887 14.304-5.184 14.304-5.184-1.487-.438-6.037-1.924-6.037-1.924 13.473 1.663 13.911-8.224 13.911-8.224-4.374 1.049-11.111.525-11.111.525 17.06-1.225 17.323-10.848 17.323-10.848-7.262 2.625-13.736 1.662-13.736 1.662 19.597-2.362 19.335-14.261 19.335-14.261-9.536 6.387-18.898 6.562-18.898 6.562 22.932-6.213 21.182-18.286 21.182-18.286zm-19.882 86.548c-.935-1.518 1.293-2.876 2.296-4.321l3.878 1.444c-1.317 1.571-5.21 4.442-6.174 2.877zm-2.591-6.142c-1.258 1.949-2.133 4.135-6.005 4.239-4.855.131-5.643-4.2-6.692-6.562-.306-.689-.834-1.209-1.44-1.566-.002-.424.02-.889.057-1.359l14.08 5.248z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.635 134.212s-6.233-5.315-8.071-8.202c0 0 2.1-.853 3.149-2.165 0 0-5.643-3.018-8.661-6.102 0 0 1.969-.328 3.478-1.575 0 0-5.068-.916-7.638-5.066 5.859-2.001 3.898-7.467 3.898-7.467-1.181 1.575-6.037 3.543-11.286 1.312s-11.023-.657-11.023 2.231c0 0-11.811-3.412-8.858 8.006 0 0 1.902-4.265 6.102-2.69 4.2 1.575 8.465 6.955 8.465 6.955s-2.625 1.443-7.48-.131c0 0 1.969 7.545 10.827 3.74 0 0 3.499 1.881 3.674 7.393 0 0 1.487-.788 2.45-2.537 0 0 1.4 5.336-.437 9.711 0 0 2.45-.437 3.238-1.225 0 0 .7 4.637-2.362 8.399 0 0 13.451 6.409 21.982-.612 0 0-3.215-3.674-4.265-7.086-.004-.002 1.767-.724 2.818-2.889z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M294.677 107.178c0-2.887-5.774-4.462-11.023-2.231s-10.105.263-11.286-1.312c0 0-1.962 5.466 3.898 7.467-2.57 4.15-7.638 5.066-7.638 5.066 1.51 1.247 3.478 1.575 3.478 1.575-3.018 3.084-8.661 6.102-8.661 6.102 1.049 1.312 3.149 2.165 3.149 2.165-1.837 2.887-8.071 8.202-8.071 8.202 1.049 2.165 2.822 2.887 2.822 2.887-1.049 3.412-4.265 7.086-4.265 7.086 8.53 7.021 21.982.612 21.982.612-3.062-3.762-2.362-8.399-2.362-8.399.788.788 3.238 1.225 3.238 1.225-1.837-4.374-.437-9.711-.437-9.711.962 1.75 2.45 2.537 2.45 2.537.175-5.512 3.674-7.393 3.674-7.393 8.858 3.806 10.827-3.74 10.827-3.74-4.855 1.575-7.48.131-7.48.131s4.265-5.38 8.465-6.955c4.2-1.575 6.102 2.69 6.102 2.69 2.948-11.416-8.862-8.004-8.862-8.004z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M289.329 176.884c-1.152-6.706-2.145-12.498.748-19.134l.54-1.239-11.457-13.156-1.354.451c-.117.04-12.092 3.955-19.769.115l-.958-.479-.958.479c-7.641 3.829-19.648-.075-19.772-.117l-1.354-.447-11.455 13.154.54 1.239c2.893 6.636 1.9 12.428.748 19.134-1.085 6.332-2.316 13.51-.15 22.263 2.351 9.502 10.268 12.879 17.25 15.863 5.383 2.297 10.466 4.467 13.34 9.022l1.81 2.87 1.81-2.87c2.874-4.555 7.957-6.724 13.34-9.022 6.984-2.983 14.899-6.36 17.25-15.863 2.167-8.754.935-15.932-.149-22.263zm-60.807-19.576l7.863-9.027c3.562.979 13.19 3.097 20.693-.088 7.502 3.186 17.13 1.066 20.693.088l7.863 9.027c-2.761 7.272-1.674 13.611-.526 20.3.859 5.012 1.714 10.175.996 16.121h-58.052c-.717-5.946.138-11.109.996-16.121 1.148-6.689 2.235-13.029-.526-20.3zm42.026 53.764c-4.866 2.078-9.873 4.214-13.47 8.269-3.597-4.055-8.604-6.191-13.47-8.269-6.828-2.915-12.719-5.463-14.662-12.618h56.262c-1.941 7.155-7.832 9.703-14.66 12.618z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M228.522 157.308l7.863-9.027c3.562.979 13.19 3.097 20.693-.088 7.502 3.186 17.13 1.066 20.693.088l7.863 9.027c-2.761 7.272-1.674 13.611-.526 20.3.859 5.012 1.714 10.175.996 16.121h-58.052c-.717-5.946.138-11.109.996-16.121 1.148-6.689 2.235-13.029-.526-20.3z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M228.646 197.205c.067.307.11.602.188.914 1.839 7.431 7.834 9.99 14.776 12.953 4.866 2.078 9.873 4.214 13.47 8.269 3.597-4.055 8.604-6.191 13.47-8.269 6.942-2.964 12.937-5.523 14.776-12.953.077-.311.12-.607.188-.914h-56.868z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M282.763 172.391c0-3.871-3.679-4.481-7.023-4.415-3.345.067-8.237-.544-8.361-3.144-.077-1.621 2.643-1.772 4.415-1.204 1.028.33 7.424 1.472 9.431-2.809 0 0-2.339.075-4.808-.479-1.902-.427-9.707.545-11.112 3.555-1.405 3.01 3.125 6.014 8.342 6.014 5.217 0 5.933 1.044 5.892 2.316-.054 1.672-4.191 2.145-6.569 2.123-3.743-1.359-12.477-.295-12.519-.46-.05-.202-2.015-3.575-2.015-3.575s3.576-.252 4.029-.907c.453-.654-2.713-3.169-2.713-3.169s2.663-1.062 2.764-1.817c.11-.831-2.162-2.798-2.162-2.798s.878-.865 1.538-2.342c.472-1.055-3.277-1.337-3.277-1.337.201-.802.124-1.581-.87-1.94-.768-.277-3.612.802-5.551.802s-2.676 1.405-2.676 1.405-3.411.402-3.88.802c-.468.402.134 3.01.134 3.01-1.739-.267-2.541-1.806-2.541-1.806-.87 3.946 3.211 4.348 3.211 4.348l.669 2.141 1.672.201c1.672.201.87 1.806-1.739 1.806s-3.716 3.112-3.716 3.112c-1.813.051-2.82-1.41-3.223-3.274-.444-2.051-.182-5.203.151-7.201.403-2.418-.806-3.123-.806-3.123l-.806 2.015c-.05-2.065-1.864-2.266-1.864-2.266l-.302 2.518c-.907-1.662-2.467-.907-2.467-.907s1.511 5.439 1.461 5.741c-.051.302-.554.554-1.259-.202-.705-.756-1.208-.252-1.208-.252.756 5.439 3.672 4.641 3.672 4.641s.13 1.704 1.011 5.163c.94 3.693 4.808 2.998 4.808 2.998 0 1.204.937 2.943 1.204 6.956.267 4.013-3.411 6.823-3.411 6.823-3.345-.067-3.01 3.211-3.01 3.211h9.23c0-8.535 3.669-9.998 3.669-9.998 5.439.252 10.677-2.015 10.677-2.015-.806 3.274.605 4.633.605 4.633 2.216-.302 1.108 4.079.453 4.079h-2.82c-.805 0-3.123 2.518-3.123 2.518h9.569s1.461-2.115 1.964-3.172c.503-1.058-1.108-2.518-1.208-3.626-.1-1.108 1.662-1.813 1.662-1.813 1.864 2.618 6.144 2.77 6.144 2.77l-.1-1.964s2.216.756 2.72 1.41c.503.654.403 3.677-2.266 4.029-2.669.352-2.871 2.266-2.871 2.266h7.303c1.209 0 2.165-2.266 2.165-3.123v-7.656c0-1.208-1.007-1.057-3.374-1.31-2.15-.228-1.944-2.581-2.83-5.312 3.108-.104 7.915-.784 7.915-3.99zm-.566-91.519c-.599-5.281-4.809-12.006-20.844-15.158a4.177 4.177 0 00-2.6-3.756v-2.943h2.625v-3.149h-2.625v-2.624h-3.149v2.625h-2.625v3.149h2.625v2.943a4.18 4.18 0 00-2.6 3.756c-16.035 3.153-20.245 9.877-20.844 15.158-.747 6.585 3.969 12.829 8.221 15.222v3.341h33.596v-3.341c4.251-2.393 8.966-8.638 8.22-15.223zm-17.588 10.165h-4.702V71.668c3.876 1.751 6.274 4.436 6.972 8.124.869 4.592-.967 9.274-2.27 11.245zm-17.132-11.248c.698-3.688 3.095-6.372 6.972-8.122v19.369h-4.703c-1.305-1.97-3.14-6.654-2.269-11.247zm-3.887-5.318a16.714 16.714 0 00-1.516 4.515c-.76 4.302.111 8.674 1.551 12.051h-1.103c-2.356-1.622-5.383-5.612-4.936-9.549.311-2.755 2.4-5.118 6.004-7.017zm28.245 16.566h-1.106c1.44-3.375 2.312-7.747 1.553-12.049a16.747 16.747 0 00-1.517-4.518c3.605 1.899 5.694 4.264 6.005 7.017.447 3.938-2.58 7.928-4.935 9.55z",
    fill: "#E6B432"
  })));
}

function SvgMg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512 168H167.724V.276h335.448A8.829 8.829 0 01512 9.104V168z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M167.724 168H512v158.897a8.829 8.829 0 01-8.828 8.828H167.724V168z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M167.724.275v335.449H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h158.896z",
    fill: "#F5F5F5"
  })));
}

function SvgMh(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.978 334.078L512 123.862V62.069L0 326.897c0 3.043 1.635 5.593 3.978 7.181z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M508.658 2.351L0 318.069v8.828L512 62.069V9.103c0-2.767-1.351-5.133-3.342-6.752z",
    fill: "#FF9B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M145.903 122.169l57.131-7.135-57.131-7.134 28.955-17.759-36.027 8.809 21.926-29.914-29.913 21.926 8.808-36.027-17.758 28.955-7.135-57.131-7.135 57.131-17.759-28.955 8.809 36.027L68.76 69.036 90.686 98.95l-36.027-8.809L83.614 107.9l-57.131 7.134 57.131 7.135-28.955 17.759 36.027-8.809-21.926 29.914 29.914-21.926-8.809 36.027 17.759-28.955 7.135 57.131 7.135-57.131 17.758 28.955-8.808-36.027 29.913 21.926-21.926-29.914 36.027 8.809z"
  })));
}

function SvgMk(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M225.728 136.015l-.017.013L97.103.276H8.828c-2.146 0-4.041.86-5.571 2.134l215.864 141.428c1.886-2.874 4.121-5.469 6.607-7.823zm-13.41 36.507c-.156-1.508-.456-2.973-.456-4.522 0-1.549.3-3.014.456-4.522v.002L0 141.517v52.966l212.318-21.964v.003zm36.821-47.969c2.251-.354 4.511-.691 6.861-.691 2.35 0 4.61.338 6.861.691h-.001L282.483.276h-52.966l19.622 124.277zm43.74 19.285L508.744 2.41c-1.531-1.274-3.425-2.134-5.571-2.134h-88.276L286.289 136.029l-.017-.013c2.486 2.353 4.721 4.948 6.607 7.822zm-6.607 56.147l.017-.013 128.608 135.753h88.276c2.146 0 4.041-.86 5.571-2.134L292.879 192.162c-1.886 2.874-4.121 5.469-6.607 7.823zm13.41-36.504v-.002c.156 1.507.456 2.973.456 4.522 0 1.549-.3 3.014-.456 4.522v-.002L512 194.483v-52.966l-212.318 21.964zm-36.821 47.966c-2.251.353-4.511.691-6.861.691-2.35 0-4.61-.338-6.861-.691h.001l-19.623 124.277h52.966l-19.622-124.277zm-43.74-19.285L3.256 333.59c1.53 1.274 3.425 2.134 5.571 2.134h88.276l128.608-135.753.017.013c-2.486-2.353-4.721-4.948-6.607-7.822z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 256,
    cy: 168,
    r: 35.31
  }))));
}

function SvgMl(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M341.333.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.829 8.829 0 01-8.828 8.828H341.333V.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h161.839v335.448H8.828A8.829 8.829 0 010 326.896V9.103A8.828 8.828 0 018.828.276z",
    fill: "#73AF00"
  })));
}

function SvgMm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#73AF00",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M261.032 56.959l26.435 79.263 83.552.648c5.097.04 7.21 6.543 3.111 9.571l-67.214 49.635 25.203 79.663c1.537 4.86-3.996 8.879-8.142 5.916L256 233.068l-67.976 48.587c-4.147 2.964-9.679-1.056-8.142-5.916l25.203-79.663-67.214-49.635c-4.1-3.028-1.987-9.533 3.111-9.571l83.552-.648 26.435-79.263c1.611-4.835 8.451-4.835 10.063 0z",
    fill: "#F5F5F5"
  })));
}

function SvgMn(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M341.333.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.829 8.829 0 01-8.828 8.828H341.333V.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h161.839v335.448H8.828A8.829 8.829 0 010 326.896V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(25 41)",
    fill: "#F9CF02"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M60.689 98.028c-13.341 0-24.776-8.038-29.814-19.519-.003.175-.052.338-.052.513 0 16.494 13.372 29.866 29.866 29.866s29.865-13.372 29.865-29.866c0-.175-.049-.338-.052-.512-5.038 11.48-16.473 19.518-29.813 19.518z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 60.694,
    cy: 70.879,
    r: 21.72
  }), /*#__PURE__*/react.createElement("path", {
    d: "M47.114 30.153c0 7.497 6.078 13.575 13.575 13.575 7.497 0 13.575-6.078 13.575-13.575 0-5.43-3.394-6.109-3.394-8.145 0-2.036 2.036-4.751-2.036-8.145 2.036 3.394-1.357 4.073-1.357 7.466s1.357 3.394 1.357 6.109a2.714 2.714 0 11-5.428 0c0-2.714 2.714-5.43 2.714-9.503s-.679-5.43-2.714-8.824c-2.036-3.394-5.43-6.109-2.714-8.824-4.073 1.357-2.036 6.787-2.036 10.182 0 3.394-2.714 5.43-2.714 9.503s2.036 4.751 2.036 7.466a2.714 2.714 0 11-5.428 0c0-2.714 1.357-2.714 1.357-6.109s-3.394-4.073-1.357-7.466c-4.073 3.394-2.036 6.109-2.036 8.145-.006 2.036-3.4 2.714-3.4 8.145zM.959 116.56v125.838a2.241 2.241 0 002.241 2.241h22.667a2.241 2.241 0 002.241-2.241V116.56a2.241 2.241 0 00-2.241-2.241H3.2a2.24 2.24 0 00-2.241 2.241zm92.311 0v125.838a2.241 2.241 0 002.241 2.241h22.667a2.241 2.241 0 002.241-2.241V116.56a2.241 2.241 0 00-2.241-2.241H95.511a2.24 2.24 0 00-2.241 2.241zm-59.731 21.719v6.377a2.241 2.241 0 002.241 2.241h49.817a2.241 2.241 0 002.241-2.241v-6.377a2.241 2.241 0 00-2.241-2.241H35.78a2.241 2.241 0 00-2.241 2.241zm0 76.021v6.377a2.241 2.241 0 002.241 2.241h49.817a2.241 2.241 0 002.241-2.241V214.3a2.241 2.241 0 00-2.241-2.241H35.78a2.24 2.24 0 00-2.241 2.241zm4.046-99.982h46.208c1.137 0 1.551 1.497.577 2.082l-21.95 13.171a3.36 3.36 0 01-3.459 0L37.009 116.4c-.975-.585-.56-2.082.576-2.082zm0 114.032h46.208c1.137 0 1.551 1.497.577 2.082l-21.952 13.17a3.36 3.36 0 01-3.459 0l-21.951-13.171c-.974-.585-.559-2.081.577-2.081zm25.756-75.81c-.856-.082-1.685-.259-2.562-.259-14.931 0-27.078 12.147-27.078 27.078 0 8.862 4.329 16.662 10.943 21.583.761.566 1.767-.252 1.397-1.127a15.656 15.656 0 01-1.239-6.106c0-8.825 7.193-16.002 16.026-15.975 4.643.014 9.094-2.279 11.149-6.443 4.251-8.611-.936-17.17-8.636-18.751zm-2.562 17.883a5.416 5.416 0 110-10.832 5.416 5.416 0 010 10.832z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M76.912 157.775c-.761-.566-1.767.253-1.397 1.127a15.637 15.637 0 011.239 6.105c0 8.826-7.194 16.003-16.026 15.976-4.643-.014-9.095 2.279-11.149 6.443-4.249 8.612.938 17.172 8.638 18.751.856.082 1.685.259 2.562.259 14.93 0 27.078-12.147 27.078-27.078-.002-8.861-4.331-16.661-10.945-21.583zm-16.133 41.35a5.416 5.416 0 110-10.832 5.416 5.416 0 010 10.832z"
  }))));
}

function SvgMo(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#5AA587"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M277.124 213.608c9.897 2.366 20.461 2.55 31.026-.073 18.612-4.621 33.334-16.756 41.889-32.337-14.85-9.77-33.538-13.609-52.15-8.988-10.006 2.485-18.784 7.249-26.183 13.45.07-.093.128-.184.198-.277 27.407-24.715 58.004-16.736 58.004-16.736l7.239-6.185s-30.862-10.663-58.506 12.204c17.109-33.124-1.353-61.538-1.353-61.538l-4.258 8.515s15.353 28.154-2.609 61.003l-.063.074c4.377-8.792 6.93-18.648 6.93-29.143 0-19.177-8.229-36.39-21.29-48.448-13.06 12.058-21.29 29.271-21.29 48.448 0 10.496 2.552 20.351 6.93 29.143-.021-.024-.042-.051-.063-.074-17.962-32.849-2.609-61.003-2.609-61.003l-4.258-8.515s-18.461 28.414-1.353 61.538c-27.644-22.866-58.506-12.204-58.506-12.204l7.239 6.185s30.596-7.98 58.004 16.736c.07.093.128.184.198.277-7.398-6.201-16.177-10.965-26.183-13.45-18.612-4.621-37.3-.782-52.15 8.988 8.555 15.581 23.277 27.715 41.89 32.337 10.564 2.623 21.129 2.439 31.026.073-36.875 10.31-60.993-11.901-60.993-11.901l-9.291 2.08s37.269 39.964 91.409.76c54.14 39.203 91.409-.76 91.409-.76l-9.291-2.08c.002 0-24.117 22.21-60.992 11.901zm-74.93 46.001a101.913 101.913 0 0012.036 6.387h83.539a101.678 101.678 0 0012.036-6.387H202.194zm19.521 9.406A101.97 101.97 0 00256 274.927c12.03 0 23.566-2.095 34.285-5.912h-68.57zm-42.173-28.507c1.29 1.453 2.609 2.88 3.978 4.258h144.96a103.28 103.28 0 003.978-4.258H179.542zm9.344 9.255a102.388 102.388 0 006.618 5.322h120.992a103.072 103.072 0 006.618-5.322H188.886z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M298.579 229.155c-23.847 0-40.163-15.938-40.326-16.1l-2.26-2.246-2.252 2.25c-.162.162-16.373 16.096-40.321 16.096h-42.617c1.454 2.193 3 4.318 4.616 6.387h38.003c21.422 0 36.975-11.206 42.579-15.929 5.603 4.724 21.156 15.929 42.579 15.929h38.003a102.357 102.357 0 004.616-6.387h-42.62z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M254.882 61.878l-3.736 11.203-11.809.092c-1.132.009-1.602 1.454-.691 2.126l9.501 7.016-3.562 11.26c-.342 1.08.888 1.973 1.81 1.314l9.608-6.867 9.608 6.867c.921.659 2.151-.235 1.81-1.314l-3.562-11.26 9.501-7.016c.911-.673.441-2.118-.691-2.126l-11.809-.092-3.736-11.203c-.364-1.075-1.884-1.075-2.242 0zm-55.888 22.931l2.163 7.854-6.731 4.589c-.646.44-.36 1.449.422 1.484l8.139.371 2.284 7.82c.22.75 1.267.789 1.542.058l2.867-7.626 8.143.244c.781.023 1.142-.961.532-1.448l-6.367-5.084 2.749-7.669c.264-.736-.561-1.383-1.213-.953l-6.802 4.484-6.444-4.984c-.621-.478-1.492.107-1.284.86zM166.41 124.37l5.891 5.628-3.417 7.395c-.328.71.436 1.428 1.123 1.057l7.172-3.863 5.977 5.536c.573.531 1.492.026 1.353-.742l-1.458-8.015 7.112-3.975c.682-.381.487-1.411-.288-1.515l-8.074-1.09-1.582-7.992c-.151-.767-1.192-.898-1.53-.194l-3.532 7.341-8.089-.966c-.776-.093-1.223.855-.658 1.395zm148.449-39.561l-2.163 7.854 6.731 4.589c.646.44.36 1.449-.422 1.484l-8.139.371-2.284 7.82c-.22.75-1.267.789-1.542.058l-2.867-7.626-8.143.244c-.781.023-1.142-.961-.532-1.448l6.367-5.084-2.749-7.669c-.264-.736.561-1.383 1.213-.953l6.802 4.484 6.444-4.984c.621-.478 1.491.107 1.284.86zm32.584 39.561l-5.891 5.628 3.417 7.395c.328.71-.436 1.428-1.123 1.057l-7.172-3.863-5.977 5.536c-.573.531-1.492.026-1.353-.742l1.458-8.015-7.112-3.975c-.682-.381-.487-1.411.288-1.515l8.074-1.09 1.582-7.992c.151-.767 1.192-.898 1.53-.194l3.532 7.341 8.089-.966c.776-.093 1.223.855.658 1.395z",
    fill: "#FFE15A"
  })));
}

function SvgMp(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.999 296c-70.577 0-128-57.422-128-128s57.422-128 128-128 128 57.422 128 128-57.422 128-128 128zm0-229.517c-55.979 0-101.517 45.539-101.517 101.517 0 55.978 45.539 101.517 101.517 101.517 55.978 0 101.517-45.539 101.517-101.517 0-55.978-45.538-101.517-101.517-101.517z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(132 44)",
    fill: "#FFDC00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M123.999 243.172C58.288 243.172 4.827 189.711 4.827 124S58.288 4.828 123.999 4.828 243.172 58.289 243.172 124s-53.461 119.172-119.173 119.172zm0-229.517C63.154 13.655 13.654 63.154 13.654 124s49.499 110.345 110.345 110.345S234.344 184.845 234.344 124 184.845 13.655 123.999 13.655z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 9.241,
    cy: 124,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 238.758,
    cy: 124,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 123.999,
    cy: 9.242,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 42.852,
    cy: 42.853,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 205.147,
    cy: 42.853,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 230.019,
    cy: 80.083,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 80.082,
    cy: 17.981,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 17.98,
    cy: 80.083,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 167.917,
    cy: 17.981,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 236.551,
    cy: 101.611,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 101.611,
    cy: 11.449,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 28.584,
    cy: 60.243,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 187.757,
    cy: 28.585,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 219.414,
    cy: 60.243,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 60.242,
    cy: 28.585,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 11.448,
    cy: 101.611,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 146.388,
    cy: 11.449,
    r: 8.828
  })), /*#__PURE__*/react.createElement("path", {
    d: "M370.758 172.414a4.411 4.411 0 01-4.414-4.414c0-60.845-49.499-110.345-110.345-110.345S145.655 107.156 145.655 168a4.411 4.411 0 01-4.414 4.414 4.411 4.411 0 01-4.414-4.414c0-65.711 53.461-119.172 119.172-119.172S375.172 102.289 375.172 168a4.411 4.411 0 01-4.414 4.414z",
    fill: "#FFA000"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M280.527 300.414h-49.054c-10.482 0-18.656-9.079-17.558-19.503l15.602-148.22h52.965l15.602 148.22c1.098 10.423-7.076 19.503-17.557 19.503z",
    fill: "#B4B4B4"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M282.232 132.69h-52.671a4.547 4.547 0 01-4.52-4.055l-3.29-30.302c-.567-5.221 3.523-9.781 8.776-9.781h50.945c5.252 0 9.343 4.558 8.776 9.781l-3.268 30.098a4.775 4.775 0 01-4.748 4.259z",
    fill: "#AAA"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.044 98.834l16.364 47.079 49.831 1.015c2.051.042 2.899 2.648 1.263 3.889l-39.717 30.111 14.433 47.705c.594 1.964-1.623 3.575-3.308 2.403L256 202.567l-40.911 28.468c-1.684 1.172-3.902-.439-3.308-2.403l14.433-47.705-39.717-30.111c-1.635-1.239-.788-3.847 1.263-3.889l49.831-1.015 16.364-47.079c.674-1.938 3.415-1.938 4.089.001z",
    fill: "#F5F5F5"
  })));
}

function SvgMq(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512 150.345H273.655V.276h-35.311v150.069H0v35.31h238.344v150.069h35.311V185.655H512z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M172.41 115.12c-.253-1.502-.823-3.281-1.543-4.426-1.431-1.978-3.087-3.363-4.691-4.225-12.639-5.806-23.22-4.668-33.317-4.708-9.973.257-19.303 1.977-26.877 3.635-2.056.414-3.837.723-5.742 1.081.942-1.946 4.395-4.381 9.045-5.857 11.336-3.872 24.276-5.427 36.994-7.905 3.212-.629 6.468-1.366 9.802-2.314 1.795-.615 3.306-1.095 5.42-2.077a21.997 21.997 0 003.833-2.763c1.216-1.094 1.123-1.4 1.749-2.138 2.888-5.497.154-9.411-2.138-11.455-2.209-1.813-4.07-2.521-5.841-3.25-3.438-1.206-6.623-1.962-9.697-2.603l-17.447-3.491c-2.708-.627-5.327-1.323-7.625-2.167-2.029-.541-4.896-2.546-4.47-1.999-5.239-.452 7.175-6.295 16.126-9.559 2.379-1.05 4.744-2.11 7.167-3.606 2.377-1.571 4.826-2.904 7.467-7.304.519-.913.497-1.135.769-1.732l.302-.759c.655-2.339.295-1.708.447-2.722.309-2.454-.654-5.077-2.178-7.262-3.111-3.362-6.205-4.324-8.503-4.968-9.504-2.252-16.342-1.636-22.283-1.613l-17.705.832-.435.02-.039.002a6.529 6.529 0 00-6.137 6.9c.02.352.185.647.258.98-5.102 1.406-13.175 2.844-21.162.961a2.158 2.158 0 00-2.62 1.615 2.174 2.174 0 001.615 2.62c3.138.74 6.251 1.03 9.219 1.03 6.305 0 11.691-1.283 15.369-2.41 1.186.881 2.628 1.436 4.218 1.343l17.892-1.047c5.331-.192 12.495-.473 18.407.916.489.076.751.228 1.075.365.046-.524-.954.952-2.517 1.711-1.517.979-3.491 1.917-5.545 2.849-4.2 1.903-9.006 3.539-14.334 6.406-2.572 1.518-5.752 3.06-8.394 7.571-1.235 2.09-1.821 5.469-1.172 7.851l.192.971.109.48.058.238c-.409-.849.622 1.434.541 1.228l.533.888c.473.676.399.956 1.535 2.136a25.09 25.09 0 003.001 2.754c.93.64 1.624.942 2.461 1.416 1.649.972 3.146 1.422 4.708 2.035 3.08 1.085 6.079 1.822 9.074 2.484l17.695 3.33a67.495 67.495 0 017.055 1.772c-2.791 1.006-6.697 2.02-10.066 2.669-12.255 2.586-25.25 4.15-38.467 8.792-3.308 1.259-6.697 2.764-10.02 5.309-3.129 2.371-6.418 7.1-5.997 12.295-1.121.157-2.409.386-3.445.501-11.212 1.484-15.924-.49-15.62-.547a3.076 3.076 0 00-4.215 1.085 3.076 3.076 0 001.084 4.215s1.922 1.305 5.353 2.057c3.414.772 8.217 1.126 14.067.665 1.611-.11 3.498-.351 5.27-.538 1.225 1.766 2.652 3.714 3.981 4.658 3.089 2.591 6.36 4.248 9.62 5.699 13.123 5.076 26.239 6.142 39.027 5.639 6.42-.482 12.738-1.231 19.226-4.126 3.025-1.411 7.177-3.633 8.459-10.06.004-.823.145-1.198.019-2.373zm-9.438 2.024c-.167-.95-.69 1.205-3.14 1.799-4.217 1.853-9.973 2.701-15.631 2.999-11.41.375-23.87-.957-34.554-5.29-1.679-.776-3.049-1.753-4.49-2.687.792-.121 1.479-.205 2.291-.333 7.939-1.265 16.214-2.754 25.719-2.911 9.053-.166 20.581-.041 28.236 3.767.889.479 1.278.978 1.572 1.279 0 0-.254-.305.029-.499.126.194-.032 1.278-.032 1.876zm283.094-2.024c-.253-1.502-.823-3.281-1.543-4.426-1.431-1.978-3.087-3.363-4.691-4.225-12.639-5.806-23.22-4.668-33.317-4.708-9.973.257-19.303 1.977-26.877 3.635-2.056.414-3.837.723-5.742 1.081.942-1.946 4.395-4.381 9.045-5.857 11.336-3.872 24.276-5.427 36.994-7.905 3.212-.629 6.468-1.366 9.802-2.314 1.795-.615 3.306-1.095 5.42-2.077a21.997 21.997 0 003.833-2.763c1.216-1.094 1.123-1.4 1.749-2.138 2.888-5.497.155-9.411-2.138-11.455-2.209-1.813-4.069-2.521-5.841-3.25-3.438-1.206-6.623-1.962-9.697-2.603l-17.447-3.491c-2.708-.627-5.327-1.323-7.625-2.167-2.029-.541-4.896-2.546-4.47-1.999-5.239-.452 7.175-6.295 16.126-9.559 2.379-1.05 4.744-2.11 7.167-3.606 2.377-1.571 4.826-2.904 7.467-7.304.519-.913.497-1.135.769-1.732l.302-.759c.655-2.339.295-1.708.447-2.722.309-2.454-.654-5.077-2.178-7.262-3.111-3.362-6.205-4.324-8.503-4.968-9.504-2.252-16.342-1.636-22.283-1.613l-17.705.832-.435.02-.039.002a6.529 6.529 0 00-6.137 6.9c.02.352.185.647.258.98-5.102 1.406-13.175 2.844-21.162.961a2.158 2.158 0 00-2.62 1.615 2.174 2.174 0 001.615 2.62c3.138.74 6.251 1.03 9.219 1.03 6.305 0 11.691-1.283 15.369-2.41 1.186.881 2.628 1.436 4.218 1.343l17.892-1.047c5.331-.192 12.495-.473 18.407.916.489.076.751.228 1.075.365.046-.524-.954.952-2.517 1.711-1.517.979-3.491 1.917-5.545 2.849-4.2 1.903-9.006 3.539-14.334 6.406-2.572 1.518-5.752 3.06-8.394 7.571-1.235 2.09-1.821 5.469-1.172 7.851l.192.971.109.48.059.238c-.409-.849.622 1.434.541 1.228l.533.888c.473.676.399.956 1.535 2.136a25.09 25.09 0 003.001 2.754c.93.64 1.624.942 2.461 1.416 1.649.972 3.146 1.422 4.708 2.035 3.08 1.085 6.079 1.822 9.074 2.484l17.695 3.33a67.495 67.495 0 017.055 1.772c-2.791 1.006-6.697 2.02-10.066 2.669-12.255 2.586-25.25 4.15-38.467 8.792-3.308 1.259-6.697 2.764-10.02 5.309-3.129 2.371-6.418 7.1-5.997 12.295-1.121.157-2.409.386-3.445.501-11.212 1.484-15.924-.49-15.62-.547a3.076 3.076 0 00-4.215 1.085 3.076 3.076 0 001.084 4.215s1.922 1.305 5.353 2.057c3.414.772 8.217 1.126 14.067.665 1.611-.11 3.498-.351 5.27-.538 1.225 1.766 2.652 3.714 3.981 4.658 3.089 2.591 6.36 4.248 9.62 5.699 13.123 5.076 26.24 6.142 39.027 5.639 6.42-.482 12.738-1.231 19.226-4.126 3.025-1.411 7.177-3.633 8.459-10.06.001-.823.142-1.198.018-2.373zm-9.439 2.024c-.167-.95-.69 1.205-3.14 1.799-4.217 1.853-9.973 2.701-15.631 2.999-11.41.375-23.87-.957-34.554-5.29-1.679-.776-3.049-1.753-4.49-2.687.792-.121 1.479-.205 2.291-.333 7.939-1.265 16.214-2.754 25.719-2.911 9.053-.166 20.581-.041 28.236 3.767.889.479 1.278.978 1.572 1.279 0 0-.254-.305.029-.499.126.194-.031 1.278-.032 1.876zM172.41 300.498c-.253-1.502-.823-3.281-1.543-4.426-1.431-1.978-3.087-3.363-4.691-4.225-12.639-5.806-23.22-4.668-33.317-4.708-9.973.257-19.303 1.977-26.877 3.635-2.056.414-3.837.723-5.742 1.081.942-1.946 4.395-4.381 9.045-5.857 11.336-3.872 24.276-5.427 36.994-7.905 3.212-.629 6.468-1.366 9.802-2.314 1.795-.615 3.306-1.095 5.42-2.077a21.997 21.997 0 003.833-2.763c1.216-1.094 1.123-1.4 1.749-2.138 2.888-5.497.154-9.411-2.138-11.455-2.209-1.813-4.07-2.521-5.841-3.25-3.438-1.206-6.623-1.962-9.697-2.603l-17.447-3.491c-2.708-.627-5.327-1.323-7.625-2.167-2.029-.541-4.896-2.546-4.47-1.999-5.239-.452 7.175-6.295 16.126-9.559 2.379-1.05 4.744-2.111 7.167-3.606 2.377-1.571 4.826-2.904 7.467-7.304.519-.913.497-1.135.769-1.732l.302-.759c.655-2.339.295-1.708.447-2.722.309-2.454-.654-5.077-2.178-7.262-3.111-3.362-6.205-4.324-8.503-4.968-9.504-2.252-16.342-1.636-22.283-1.613l-17.705.832-.435.02-.039.002a6.529 6.529 0 00-6.137 6.9c.02.352.185.647.258.98-5.102 1.406-13.175 2.844-21.162.961a2.158 2.158 0 00-2.62 1.615 2.174 2.174 0 001.615 2.62c3.138.74 6.251 1.03 9.219 1.03 6.305 0 11.691-1.283 15.369-2.41 1.186.881 2.628 1.436 4.218 1.343l17.892-1.047c5.331-.192 12.495-.473 18.407.916.489.076.751.228 1.075.365.046-.524-.954.952-2.517 1.711-1.517.979-3.491 1.917-5.545 2.849-4.2 1.903-9.006 3.539-14.334 6.405-2.572 1.518-5.752 3.06-8.394 7.571-1.235 2.09-1.821 5.469-1.172 7.851l.192.971.109.48.058.238c-.409-.849.622 1.434.541 1.228l.533.888c.473.676.399.956 1.535 2.136.911.987 1.94 1.93 3.001 2.754.93.64 1.624.942 2.461 1.416 1.649.972 3.146 1.422 4.708 2.035 3.08 1.085 6.079 1.822 9.074 2.484l17.695 3.33a67.495 67.495 0 017.055 1.772c-2.791 1.006-6.697 2.02-10.066 2.669-12.255 2.586-25.25 4.15-38.467 8.792-3.308 1.259-6.697 2.764-10.02 5.309-3.129 2.371-6.418 7.1-5.997 12.295-1.121.157-2.409.386-3.445.501-11.212 1.484-15.924-.49-15.62-.547a3.076 3.076 0 00-4.215 1.085 3.076 3.076 0 001.084 4.215s1.922 1.305 5.353 2.057c3.414.772 8.217 1.125 14.067.665 1.611-.11 3.498-.351 5.27-.538 1.225 1.766 2.652 3.714 3.981 4.658 3.089 2.591 6.36 4.248 9.62 5.699 13.123 5.076 26.239 6.142 39.027 5.639 6.42-.482 12.738-1.231 19.226-4.126 3.025-1.411 7.177-3.633 8.459-10.06.004-.821.145-1.196.019-2.372zm-9.438 2.025c-.167-.95-.69 1.205-3.14 1.799-4.217 1.853-9.973 2.701-15.631 2.999-11.41.375-23.87-.957-34.554-5.29-1.679-.776-3.049-1.753-4.49-2.687.792-.121 1.479-.205 2.291-.333 7.939-1.265 16.214-2.754 25.719-2.911 9.053-.165 20.581-.041 28.236 3.767.889.479 1.278.978 1.572 1.279 0 0-.254-.305.029-.499.126.194-.032 1.278-.032 1.876zm283.094-2.025c-.253-1.502-.823-3.281-1.543-4.426-1.431-1.978-3.087-3.363-4.691-4.225-12.639-5.806-23.22-4.668-33.317-4.708-9.973.257-19.303 1.977-26.877 3.635-2.056.414-3.837.723-5.742 1.081.942-1.946 4.395-4.381 9.045-5.857 11.336-3.872 24.276-5.427 36.994-7.905 3.212-.629 6.468-1.366 9.802-2.314 1.795-.615 3.306-1.095 5.42-2.077a21.997 21.997 0 003.833-2.763c1.216-1.094 1.123-1.4 1.749-2.138 2.888-5.497.155-9.411-2.138-11.455-2.209-1.813-4.069-2.521-5.841-3.25-3.438-1.206-6.623-1.962-9.697-2.603l-17.447-3.491c-2.708-.627-5.327-1.323-7.625-2.167-2.029-.541-4.896-2.546-4.47-1.999-5.239-.452 7.175-6.295 16.126-9.559 2.379-1.05 4.744-2.111 7.167-3.606 2.377-1.571 4.826-2.904 7.467-7.304.519-.913.497-1.135.769-1.732l.302-.759c.655-2.339.295-1.708.447-2.722.309-2.454-.654-5.077-2.178-7.262-3.111-3.362-6.205-4.324-8.503-4.968-9.504-2.252-16.342-1.636-22.283-1.613l-17.705.832-.435.02-.039.002a6.529 6.529 0 00-6.137 6.9c.02.352.185.647.258.98-5.102 1.406-13.175 2.844-21.162.961a2.158 2.158 0 00-2.62 1.615 2.174 2.174 0 001.615 2.62c3.138.74 6.251 1.03 9.219 1.03 6.305 0 11.691-1.283 15.369-2.41 1.186.881 2.628 1.436 4.218 1.343l17.892-1.047c5.331-.192 12.495-.473 18.407.916.489.076.751.228 1.075.365.046-.524-.954.952-2.517 1.711-1.517.979-3.491 1.917-5.545 2.849-4.2 1.903-9.006 3.539-14.334 6.405-2.572 1.518-5.752 3.06-8.394 7.571-1.235 2.09-1.821 5.469-1.172 7.851l.192.971.109.48.059.238c-.409-.849.622 1.434.541 1.228l.533.888c.473.676.399.956 1.535 2.136.911.987 1.94 1.93 3.001 2.754.93.64 1.624.942 2.461 1.416 1.649.972 3.146 1.422 4.708 2.035 3.08 1.085 6.079 1.822 9.074 2.484l17.695 3.33a67.495 67.495 0 017.055 1.772c-2.791 1.006-6.697 2.02-10.066 2.669-12.255 2.586-25.25 4.15-38.467 8.792-3.308 1.259-6.697 2.764-10.02 5.309-3.129 2.371-6.418 7.1-5.997 12.295-1.121.157-2.409.386-3.445.501-11.212 1.484-15.924-.49-15.62-.547a3.076 3.076 0 00-4.215 1.085 3.076 3.076 0 001.084 4.215s1.922 1.305 5.353 2.057c3.414.772 8.217 1.125 14.067.665 1.611-.11 3.498-.351 5.27-.538 1.225 1.766 2.652 3.714 3.981 4.658 3.089 2.591 6.36 4.248 9.62 5.699 13.123 5.076 26.24 6.142 39.027 5.639 6.42-.482 12.738-1.231 19.226-4.126 3.025-1.411 7.177-3.633 8.459-10.06.001-.821.142-1.196.018-2.372zm-9.439 2.025c-.167-.95-.69 1.205-3.14 1.799-4.217 1.853-9.973 2.701-15.631 2.999-11.41.375-23.87-.957-34.554-5.29-1.679-.776-3.049-1.753-4.49-2.687.792-.121 1.479-.205 2.291-.333 7.939-1.265 16.214-2.754 25.719-2.911 9.053-.165 20.581-.041 28.236 3.767.889.479 1.278.978 1.572 1.279 0 0-.254-.305.029-.499.126.194-.031 1.278-.032 1.876z"
  }))));
}

function SvgMr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M351.049 136.98c-.236-1.508-2.423-1.433-2.595.084-5.266 46.402-44.626 82.453-92.452 82.453-47.811 0-87.185-36.051-92.452-82.451-.172-1.517-2.359-1.593-2.595-.084a92.275 92.275 0 00-1.132 14.315c-.001 53.068 43.069 96.151 96.179 96.151 53.128 0 96.18-43.083 96.18-96.151a92.805 92.805 0 00-1.133-14.317z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M254.81 97.267l-6.955 20.854-21.983.17c-1.205.009-1.705 1.547-.735 2.263l17.685 13.059-6.631 20.96c-.363 1.149.945 2.1 1.926 1.399L256 143.189l17.885 12.783c.981.701 2.289-.249 1.926-1.399l-6.631-20.96 17.685-13.059c.97-.716.47-2.254-.735-2.263l-21.983-.17-6.955-20.854c-.383-1.143-2.001-1.143-2.382 0z"
  }))));
}

function SvgMs(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.334l-81.77 53.574V.276H105.93V53.85L24.16.276H8.828A8.828 8.828 0 000 9.103v7.002l70.155 45.963H0v44.138h70.155L0 152.17v7.002A8.829 8.829 0 008.828 168h15.334l81.77-53.574V168h44.138v-53.574L231.839 168h15.334a8.829 8.829 0 008.828-8.828v-7.002l-70.155-45.963H256V62.069h-70.155L256 16.106V9.104a8.828 8.828 0 00-8.828-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M256 70.897H141.241V.276h-26.482v70.621H0v26.482h114.759V168h26.482V97.379H256z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.332 0 5.961 0 9.103v.458l80.889 52.508h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.196-61.793H89.474zm166.386 53.658l-82.666-53.658H156.98l93.874 60.935c2.812-1.305 4.741-4.04 5.006-7.277z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#82AFFF",
    d: "M325.363 99.244h117.274v90.626H325.363z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M325.362 189.868c0 30.913 34.649 55.972 58.638 55.972 21.323 0 58.638-25.06 58.638-55.972H325.362z",
    fill: "#C86464"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M399.659 132.341c1.888.333 5.109.778 5.442 5.331.333 4.553-1.333 20.768-2.998 22.766 0 0 5.442 12.328 5.664 19.657.222 7.33-.777 29.263-.111 32.761.667 3.498 3.165 10.662 3.165 10.662s-7.663-4.498-10.661-1.666c-2.998 2.831-13.993 6.664-18.325 2.166 0 0 5.164-14.659 5.164-31.318v-57.805s2.166-1.721 4.997-1.777c2.832-.055 7.663-.777 7.663-.777z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M400.769 220.409c.333 2.11 1.221 3.665.777 4.442-.445.778-3.331 7.885-1.666 7.885s4.553-.888 5.331-2.443c.777-1.555 1.11-3.887 1.555-4.553.445-.666-.778-3.998-1.777-4.553-.999-.556-4.22-.778-4.22-.778zm-19.212-83.404l-6.108.778s.777-3.998.888-6.775c.111-2.776.333-7.885.333-7.885s4.331-2.665 4.442-3.11c.055-.222.569-1.61.167-2.332-.402-.722-1.721-.778-1.721-.778s-5.109 2.665-5.109 3.11c0 .445 0 3.11-.555 4.109-.555 1-3.665 9.329-3.887 11.55-.222 2.221-.555 6.886.333 7.108.888.222 10.106 1.222 11.106.777.999-.444.111-6.552.111-6.552z",
    fill: "#FFF5E1"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M409.229 115.071h-22.231v-10.495h-7.662v10.495h-22.231v7.663h22.231v100.785h7.662V122.734h22.231z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M396.105 128.675s7.441 2.143 8.44-.333c1.166-2.888-2.721-3.276-3.443-6.33-.081-.342-.777-4.442-3.776-5.219-2.998-.778-5.775 0-5.886 1.999-.11 1.999 4.665 9.883 4.665 9.883z",
    fill: "#963C3C"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M392.107 138.115c-.22.036-.555-2.221-.111-4.998.445-2.776 0-3.665 0-3.665s-3.109.333-3.109-.888.666-6.886 2.554-9.773c0 0 1.333 1.666 3.776 1.666 0 0-.111 1.999 1.222 3.331 0 0-1.666 1.443-.888 2.443.778 1 2.221 2.221 2.221 2.221s.111 2.333 1.888 3.887c-.001.002-2.222 4.888-7.553 5.776z",
    fill: "#FFF5E1"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M361.677 186.317h1v13.215h-1zm2.682-2.56h1v18.333h-1zm2.681-2.339h1v23.007h-1zm2.681-3.344h1v29.688h-1zm2.682-4.369h1v38.424h-1zm2.681 0h1v40.223h-1z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M387.109 194.754c-2.945-15.315-11.106-24.211-13.993-24.654-2.888-.444-4.997 1.888-5.219 3.554-.222 1.666-1.777 6.664-4.998 8.995-3.221 2.333-9.218 3.665-10.55 7.996-1.333 4.331 2.221 6.219 4.331 5.774.158-.033.313-.095.471-.147l22.703 27.927c.824 1.014 2.43.849 3.005-.327 2.333-4.768 6.762-16.06 4.25-29.118zm-28.052.31c.89-.956 1.266-2.273.289-3.641-1.666-2.333-3.554 1-3.554 1s-.555-2.888 3.776-4.331c4.331-1.443 9.218-3.886 11.439-9.107 2.221-5.219 2.11-4.221 2.11-4.221s8.885 4.998 10.106 20.657c1.222 15.659-3.109 21.99-3.109 21.99l-21.057-22.347z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M379.336 161.249c-1.02.652-1.939 1.214-2.582 1.549-2.082 1.082-4.582 2.166-4.831 3.165-.249 1-1.666 1.833-1.582 2.998.084 1.166 0 4.664 0 4.664 1.249-.249 3.748-.667 4.582-2.166.833-1.5 1.582-4.415 4.248-5.664.047-.022.117-.045.167-.067v-4.479h-.002zm22.072-21.273c-1.249.583-4.997 5.081-5.58 7.164-.583 2.082-2.415 6.997-2.415 6.997s-3.785.494-6.413 1.965v7.274c1.457-.422 2.745-.838 3.498-1.242 2.166-1.166 5.247-3.331 6.83-3.748 1.582-.416 2.915-3.082 3.498-4.664.583-1.582 2.415-6.247 2.665-9.412.25-3.168-.834-4.917-2.083-4.334z",
    fill: "#FFF5E1"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M384 247.731l-.291-.046c-59.529-9.399-60.213-60.958-60.213-63.146V97.38h121.009v87.158c0 2.189-.684 53.747-60.213 63.146l-.292.047zm-56.771-146.619v83.425c0 2.057.644 50.387 56.771 59.414 56.128-9.027 56.771-57.357 56.771-59.414v-83.425H327.229z",
    fill: "#F5F5F5"
  })));
}

function SvgMt(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H256v335.448h247.172a8.829 8.829 0 008.828-8.828V9.103a8.828 8.828 0 00-8.828-8.827z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828 335.724H256V.276H8.828A8.828 8.828 0 000 9.103v317.793a8.828 8.828 0 008.828 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M73.564 20.874v23.62c1.301.051 2.752.641 3.958 1.847 1.206 1.206 1.798 2.657 1.847 3.958h23.62v23.54H79.368c-.051 1.301-.641 2.752-1.847 3.958-1.206 1.206-2.657 1.796-3.958 1.847v23.62h-23.54v-23.62c-1.301-.051-2.752-.641-3.958-1.847-1.206-1.206-1.796-2.657-1.847-3.958h-23.62V50.3h23.62c.051-1.301.641-2.752 1.847-3.958 1.206-1.206 2.657-1.796 3.958-1.847v-23.62h23.541v-.001zm2.941-2.943H47.08v24.246a9.488 9.488 0 00-3.096 2.083 9.49 9.49 0 00-2.084 3.096H17.655v29.426h24.246a9.48 9.48 0 002.084 3.096 9.473 9.473 0 003.095 2.083v24.245h29.426V81.96a9.475 9.475 0 003.096-2.084 9.473 9.473 0 002.083-3.095h24.245V47.355H81.686a9.475 9.475 0 00-2.084-3.096 9.467 9.467 0 00-3.096-2.083V17.931h-.001z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#CDCDCD",
    d: "M102.988 50.298H73.564V20.874H50.023v29.424H20.598v23.541h29.425v29.425h23.541V73.839h29.424z"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(42 42)",
    fill: "#B4A08C"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 19.793,
    cy: 20.069,
    r: 11.77
  }), /*#__PURE__*/react.createElement("ellipse", {
    transform: "rotate(-45 6.649 33.204)",
    cx: 6.649,
    cy: 33.204,
    rx: 3.663,
    ry: 5.234
  }), /*#__PURE__*/react.createElement("ellipse", {
    transform: "rotate(45 32.932 33.197)",
    cx: 32.932,
    cy: 33.197,
    rx: 3.663,
    ry: 5.234
  }), /*#__PURE__*/react.createElement("ellipse", {
    transform: "rotate(135 32.922 6.938)",
    cx: 32.922,
    cy: 6.938,
    rx: 3.663,
    ry: 5.234
  }), /*#__PURE__*/react.createElement("ellipse", {
    transform: "rotate(-135 6.647 6.937)",
    cx: 6.647,
    cy: 6.937,
    rx: 3.663,
    ry: 5.234
  }), /*#__PURE__*/react.createElement("path", {
    d: "M19.793 36.182c-8.885 0-16.113-7.226-16.113-16.113S10.908 3.956 19.793 3.956s16.113 7.228 16.113 16.113-7.228 16.113-16.113 16.113zm0-30.754c-8.072 0-14.641 6.569-14.641 14.641S11.721 34.71 19.793 34.71s14.641-6.569 14.641-14.641S27.865 5.428 19.793 5.428z"
  }))));
}

function SvgMu(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 84.138H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v75.035z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 84.138h512V168H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 168h512v83.862H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896v-75.034h512v75.034a8.828 8.828 0 01-8.828 8.828z",
    fill: "#73AF00"
  })));
}

function SvgMv(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#73AF00",
    d: "M441.379 70.897v194.207H70.621V70.897h370.758"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M238.378 168.026c0-33.425 22.767-61.417 53.587-69.525 1.026-.27.952-1.754-.1-1.889a66.738 66.738 0 00-8.533-.566c-39.785 0-71.992 32.202-71.992 71.98 0 39.606 32.207 71.896 71.992 71.896 2.898 0 5.745-.209 8.544-.569 1.052-.136 1.125-1.619.1-1.889-30.826-8.121-53.598-36.154-53.598-69.438z",
    fill: "#F5F5F5"
  })));
}

function SvgMw(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 112.088h512V223.9H0zm324.584-10.54C310.806 77.961 285.288 62.069 256 62.069c-29.288 0-54.806 15.892-68.584 39.479h137.168zm-64.023-76.996c0 3.961-4.561 28.69-4.561 28.69s-4.561-24.728-4.561-28.69c0-3.961 2.042-7.172 4.561-7.172s4.561 3.21 4.561 7.172zm81.176 37.402c-2.801 2.801-23.511 17.062-23.511 17.062s14.261-20.711 17.062-23.511c2.801-2.801 6.516-3.628 8.297-1.846 1.78 1.779.953 5.495-1.848 8.295zm-165.024-6.449c2.801 2.801 17.062 23.511 17.062 23.511s-20.711-14.261-23.511-17.062c-2.801-2.801-3.628-6.516-1.846-8.297 1.779-1.781 5.494-.954 8.295 1.848zm38.846-23.816c1.516 3.66 6.765 28.252 6.765 28.252s-13.677-21.101-15.192-24.76c-1.515-3.659-.858-7.407 1.469-8.372 2.326-.965 5.441 1.22 6.958 4.88zm89.309 3.491c-1.516 3.66-15.192 24.76-15.192 24.76s5.249-24.591 6.765-28.252c1.516-3.66 4.631-5.845 6.958-4.881 2.327.964 2.986 4.713 1.469 8.373zm-67.594-9.206c.788 3.882 1.233 29.024 1.233 29.024s-9.385-23.328-10.173-27.211c-.788-3.882.576-7.435 3.044-7.936 2.47-.501 5.11 2.24 5.896 6.123zm86.992 20.52c-2.188 3.302-19.651 21.395-19.651 21.395s9.859-23.132 12.047-26.434c2.188-3.302 5.664-4.851 7.764-3.459 2.1 1.392 2.028 5.196-.16 8.498zM161.252 72.975c3.302 2.188 21.395 19.651 21.395 19.651s-23.132-9.859-26.434-12.047c-3.302-2.188-4.851-5.664-3.459-7.764 1.392-2.099 5.197-2.028 8.498.16zm33.337-31.062c2.214 3.285 12.246 26.343 12.246 26.343s-17.598-17.961-19.811-21.246c-2.214-3.285-2.314-7.09-.224-8.497 2.088-1.407 5.576.115 7.789 3.4zM355.328 79.83c-3.285 2.214-26.343 12.246-26.343 12.246s17.961-17.598 21.246-19.811c3.285-2.214 7.09-2.314 8.497-.224 1.408 2.089-.115 5.577-3.4 7.789zm-72.516-52.248c-.758 3.887-9.967 27.286-9.967 27.286s.256-25.144 1.015-29.032c.759-3.887 3.377-6.649 5.849-6.167 2.473.482 3.861 4.025 3.103 7.913zm2.717.676c-1.151 3.79-3.969 28.778-3.969 28.778s11.546-22.337 12.697-26.129c1.151-3.79.129-7.456-2.281-8.188-2.409-.732-5.296 1.749-6.447 5.539zm-88.54 12.212c1.867 3.494 17.543 23.155 17.543 23.155s-7.63-23.96-9.497-27.454c-1.867-3.494-5.181-5.364-7.403-4.177-2.223 1.188-2.51 4.981-.643 8.476zm159.782 41.76c-3.493 1.867-23.155 17.543-23.155 17.543s23.96-7.63 27.454-9.497c3.493-1.867 5.364-5.181 4.177-7.403-1.186-2.222-4.981-2.51-8.476-.643zm-30.253-34.071c-2.514 3.062-14.679 25.068-14.679 25.068s19.217-16.218 21.73-19.281c2.514-3.062 2.973-6.839 1.026-8.438-1.946-1.598-5.563-.411-8.077 2.651zm-163.6 22.564c3.062 2.514 25.068 14.679 25.068 14.679s-16.218-19.217-19.281-21.73c-3.063-2.513-6.839-2.973-8.438-1.026-1.598 1.948-.412 5.564 2.651 8.077zm77.126-45.165c.387 3.943 7.346 28.106 7.346 28.106s2.12-25.056 1.732-28.999c-.387-3.943-2.734-6.938-5.24-6.691-2.507.246-4.225 3.641-3.838 7.584zm23.017-.882c-.394 3.942 1.686 29.001 1.686 29.001s6.996-24.152 7.39-28.094c.394-3.942-1.319-7.34-3.826-7.591-2.506-.25-4.856 2.743-5.25 6.684zm-84.492 29.149c2.509 3.065 21.699 19.314 21.699 19.314s-12.131-22.026-14.639-25.091c-2.509-3.065-6.123-4.257-8.072-2.663-1.95 1.595-1.497 5.374 1.012 8.44zm164.847 9.985c-3.065 2.509-19.314 21.699-19.314 21.699s22.026-12.131 25.091-14.639c3.065-2.508 4.257-6.123 2.663-8.072-1.595-1.949-5.373-1.497-8.44 1.012zM307.13 36.252c-1.873 3.491-9.54 27.438-9.54 27.438s15.706-19.637 17.579-23.127c1.873-3.491 1.59-7.286-.629-8.477-2.22-1.191-5.537.674-7.41 4.166zM151.01 90.111c3.491 1.873 27.438 9.54 27.438 9.54s-19.637-15.706-23.127-17.579c-3.491-1.873-7.286-1.59-8.477.63-1.19 2.219.675 5.536 4.166 7.409zm66.906-59.264c1.144 3.793 12.657 26.148 12.657 26.148s-2.778-24.992-3.924-28.783c-1.144-3.793-4.028-6.276-6.439-5.548-2.411.727-3.439 4.391-2.294 8.183z",
    fill: "#FF4B55"
  })));
}

function SvgMx(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h161.839v335.449z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.828 8.828 0 01-8.828 8.827z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFD250",
    d: "M271.225 175.896L256 183.509v7.613h7.613z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#00C3A0"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M256 210.154a3.805 3.805 0 01-3.807-3.807v-15.225a3.805 3.805 0 013.807-3.807 3.805 3.805 0 013.807 3.807v15.225a3.805 3.805 0 01-3.807 3.807z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256 194.929c-14.951 0-29.388-5.769-40.654-16.244a3.807 3.807 0 01-.198-5.378c1.442-1.535 3.848-1.617 5.378-.198 9.854 9.163 22.452 14.207 35.473 14.207 13.021 0 25.619-5.044 35.473-14.207a3.805 3.805 0 115.18 5.576c-11.264 10.475-25.701 16.244-40.652 16.244z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M256 210.154a49.256 49.256 0 01-27.336-8.248l4.215-6.342c13.739 9.129 32.503 9.129 46.241 0l4.215 6.342A49.25 49.25 0 01256 210.154z",
    fill: "#00AADC"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#732D37",
    d: "M249.973 158.767l-8.405 13.006-1.428 4.282 21.887-5.076z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M232.704 180.238c-10.062 0-22.14-8.468-25.344-27.336l7.509-1.271c2.662 15.69 12.314 21.005 18.11 20.991 1.777-.049 3.631-.662 3.777-1.918.171-1.502.212-1.858-3.769-3.204-2.164-.733-4.617-1.561-6.338-3.531-6.963-7.951 2.464-16.366 6.993-20.41.799-.714 1.13-1.32 1.045-1.55-.249-.651-1.743-1.635-3.427-1.635-4.836 0-8.505-2.732-9.571-7.126-1.108-4.55.985-9.345 4.97-11.404l3.495 6.765c-.934.483-1.304 1.858-1.067 2.84.093.394.32 1.312 2.175 1.312 4.661 0 9.096 2.751 10.538 6.535.617 1.613 1.546 5.806-3.085 9.943-5 4.465-7.992 7.825-6.334 9.717.375.427 1.985.974 3.048 1.331 3.427 1.16 9.806 3.316 8.892 11.289-.573 5.014-5.048 8.493-11.129 8.658-.164 0-.328.004-.488.004z",
    fill: "#AAD264"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M263.613 137.833s7.613-15.225-7.613-22.838c0 0 53.289-7.613 45.676 60.902l-.003-.003c-4.996-3.997-12.414-11.302-15.063-17.126l-22.997-13.323v-7.612z",
    fill: "#874150"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256 153.058l38.063 22.838-15.225 7.613L256 160.671v-7.613z",
    fill: "#732D37"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M240.775 130.22a7.614 7.614 0 017.613 7.613l-.008.008a14.92 14.92 0 00-2.795 17.224l1.72 3.441a14.924 14.924 0 002.795 3.878l21.127 21.127V172.99a84.42 84.42 0 00-8.913-37.757 22.84 22.84 0 00-20.427-12.625h-1.111v7.614h-.001v-.002z",
    fill: "#783C46"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M240.775 122.607l-7.613 7.613v7.613s9.056-4.591 12.108-6.054c2.133-1.022 1.745-3.439.521-4.604-.953-.906-5.016-4.568-5.016-4.568z",
    fill: "#FFD250"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256 225.379c-35.681 0-64.708-29.027-64.708-64.708h7.613c0 31.485 25.611 57.096 57.096 57.096 31.485 0 57.096-25.611 57.096-57.096h7.613c-.002 35.681-29.029 64.708-64.71 64.708z",
    fill: "#AAD264"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(194 178)",
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 5.316,
    cy: 5.261,
    r: 5.166
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 16.737,
    cy: 23.501,
    r: 5.166
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 35.286,
    cy: 37.294,
    r: 5.166
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 119.225,
    cy: 5.261,
    r: 5.166
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 107.804,
    cy: 23.501,
    r: 5.166
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 89.255,
    cy: 37.294,
    r: 5.166
  })), /*#__PURE__*/react.createElement("path", {
    d: "M259.807 213.96h-7.613a7.614 7.614 0 010-15.226h7.613a7.614 7.614 0 010 15.226z",
    fill: "#FFB478"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M286.61 158.767c2.538 7.454 7.93 14.274 15.063 17.126l.003.003C309.289 107.382 256 114.995 256 114.995c38.063 0 30.61 43.772 30.61 43.772z",
    fill: "#9B4B5A"
  })));
}

function SvgMy(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 24.236H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v15.133z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 24.232h512v23.96H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 48.199h512v23.96H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 72.154h512v23.96H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 96.121h512v23.96H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 120.077h512v23.96H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 144.044h512v23.96H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 168h512v23.96H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M512 215.922H0v-39.094h8.828l.002 15.132H512z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 215.923h512v23.96H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 239.879h512v23.96H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 263.845h512v23.96H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 287.801h512v23.96H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896v-15.133h512v15.133a8.828 8.828 0 01-8.828 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M308.966 191.96H8.828A8.829 8.829 0 010 183.132V9.103A8.829 8.829 0 018.828.275h300.138a8.829 8.829 0 018.828 8.828v174.029a8.828 8.828 0 01-8.828 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M83.862 96.022c0-33.387 27.1-60.47 60.456-60.47a60.147 60.147 0 0123.641 4.814c.943.402 1.654-.911.807-1.489-12.025-8.186-26.731-12.671-42.505-11.851-34.679 1.803-63.036 29.736-65.278 64.39-2.607 40.308 29.289 73.699 68.959 73.699 14.336 0 27.662-4.417 38.729-11.906.852-.577.146-1.892-.801-1.491a60.142 60.142 0 01-23.55 4.776c-33.358-.001-60.458-27.084-60.458-60.472"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M222.061 96.022l25.558-9.889c1.263-.489.833-2.376-.518-2.268l-27.308 2.187 18.766-20.06c.926-.989-.28-2.5-1.45-1.818L213.391 78.01l8.186-26.176c.404-1.292-1.338-2.131-2.095-1.009L204.128 73.57l-3.939-27.148c-.194-1.341-2.13-1.342-2.326-.001l-2.516 17.178-1.044 7.27-.402 2.702-15.354-22.726c-.758-1.122-2.502-.282-2.095 1.01l8.216 26.154-23.716-13.836c-1.17-.683-2.376.829-1.45 1.818l18.765 20.06-27.315-2.187c-1.351-.108-1.782 1.779-.518 2.268l25.581 9.889-25.582 9.891c-1.265.489-.833 2.376.518 2.268l27.316-2.187-18.766 20.11c-.925.991.284 2.5 1.453 1.816l23.715-13.885-8.216 26.154c-.406 1.292 1.336 2.133 2.095 1.01l15.354-22.726.402 2.766 1.044 7.206 2.517 17.224c.196 1.342 2.132 1.34 2.326-.001l3.939-27.193 15.354 22.745c.758 1.122 2.5.285 2.095-1.009l-8.186-26.176 23.715 13.885c1.169.684 2.377-.825 1.453-1.816l-18.767-20.11 27.309 2.187c1.351.108 1.782-1.779.518-2.268l-25.56-9.89z"
  }))));
}

function SvgMz(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#5AA587"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 102.157h512v13.942H0zm0 117.738h512v13.942H0z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59l202.841-161.015c2.946-2.338 2.946-6.812 0-9.151L3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M81.814 110.577l12.905 38.695 40.789.317c2.281.018 3.226 2.929 1.391 4.284l-32.813 24.231 12.303 38.891c.687 2.175-1.788 3.974-3.644 2.647l-33.185-23.72-33.185 23.72c-1.856 1.326-4.332-.472-3.644-2.647l12.303-38.891-32.812-24.231c-1.835-1.355-.889-4.266 1.391-4.284l40.789-.317 12.905-38.695c.724-2.164 3.785-2.164 4.507 0z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M77.196 182.446l-3.19 3.21H47.328l7.281-26.717 2.975-1.487-4.776 23.82c-.04.294.02.587.215.822a.91.91 0 00.744.352h23.429zm6.4 4.444a6.753 6.753 0 01-4.032 1.351 6.746 6.746 0 01-4.032-1.351l4.032-4.032 4.032 4.032zm28.205-1.233H85.123l-3.19-3.21h23.428a.91.91 0 00.744-.352 1.04 1.04 0 00.215-.822l-4.776-23.82 2.975 1.487 7.282 26.717z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M104.168 180.49H80.543v-24.369c3.954-3.347 14.386-1.057 18.809.313l4.816 24.056zm-25.583-24.369v24.369H54.961l4.815-24.055c4.424-1.371 14.856-3.66 18.809-.314z"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#464655"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M114.033 186.381L106.301 158a.977.977 0 00-.509-.607l-5.167-2.583c-.02-.02-.04-.02-.078-.02-.02 0-.02-.02-.039-.04-.627-.215-14.934-4.874-20.943-.313-6.009-4.561-20.317.098-20.943.313l-.039.04c-.04 0-.058 0-.078.02l-5.167 2.583a.978.978 0 00-.509.607l-7.732 28.381a.984.984 0 00.157.842c.195.235.489.392.783.392h27.402c1.624 1.624 3.817 2.583 6.126 2.583 2.31 0 4.502-.959 6.126-2.583h27.402c.294 0 .587-.157.783-.392a.987.987 0 00.157-.842zm-33.49-30.26c3.954-3.347 14.386-1.057 18.809.313l4.815 24.055H80.543v-24.368zm-20.767.314c4.424-1.37 14.856-3.66 18.809-.313v24.369H54.961l4.815-24.056zm-12.448 29.222l7.281-26.717 2.975-1.487-4.776 23.82c-.04.294.02.587.215.822a.91.91 0 00.744.352h23.428l-3.19 3.21H47.328zm32.236 2.584a6.746 6.746 0 01-4.032-1.351l4.032-4.032 4.032 4.032a6.748 6.748 0 01-4.032 1.351zm5.559-2.584l-3.19-3.21h23.428a.91.91 0 00.744-.352 1.04 1.04 0 00.215-.822l-4.776-23.82 2.975 1.487 7.281 26.717H85.123z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M104.034 130.558a2.51 2.51 0 01-3.211-.285l-1.302-1.302v3.187l-7.967 7.967h-3.187l-12.746 12.747h-3.187L47.926 177.38a2.252 2.252 0 00-.544 2.306l1.153 3.459-4.78 4.78h-3.187l-9.743 9.743a1.994 1.994 0 000 2.819l6.43 6.43c.928.928 2.45.87 3.304-.127l14.35-17.272 1.593-4.78 3.187-3.187 6.374 9.56 4.78-4.78-5.099-7.648 1.27-1.27a3.16 3.16 0 000-4.471l-.951-.951.895-.895c6.801 5.828 14.967 7.335 22.742 4.002l-2.663-6.214c-6.424 2.753-11.67.45-15.319-2.549l13.464-13.464-.531-2.656 3.718-3.718h3.187l23.901-23.901-11.423 7.962z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M56.501 127.378l-3.187 3.187a2.255 2.255 0 000 3.187l.531.531-5.311 1.063-14.34 14.34 7.967 7.967 14.34-14.34 1.062-5.312 2.125 2.125 1.593-1.593 53 53 3.187-3.187-53-53 1.593-1.593-6.374-6.374a2.252 2.252 0 00-3.186-.001z"
  }))));
}

function SvgNa(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 256.276V9.103A8.829 8.829 0 018.828.275h379.586L0 256.276z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 79.724v247.172a8.829 8.829 0 01-8.828 8.828H123.586L512 79.724z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 84.702V9.103a8.829 8.829 0 00-8.828-8.828H383.139L0 251.298v75.598a8.829 8.829 0 008.828 8.828h120.033L512 84.702z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 53.047V9.103a8.829 8.829 0 00-8.828-8.828h-71.718L0 282.953v43.944a8.829 8.829 0 008.828 8.828h71.718L512 53.047z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(39 38)",
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M51.207 19.894c8.691 0 16.557 3.521 22.254 9.214l3.125-21.686-17.235 13.561L51.206.621l-8.145 20.362L25.826 7.422l3.125 21.686c5.699-5.694 13.565-9.214 22.256-9.214zm-22.272 53.74c-5.693-5.697-9.214-13.565-9.214-22.254 0-8.691 3.521-16.557 9.214-22.254L7.249 26 20.81 43.235.448 51.38l20.362 8.145L7.249 76.76l21.686-3.126zm73.031-22.255l-20.362-8.145L95.165 26l-21.686 3.125c5.693 5.697 9.214 13.565 9.214 22.254 0 8.69-3.521 16.557-9.214 22.254l21.686 3.125-13.561-17.235 20.362-8.144zM51.207 82.865c-8.691 0-16.557-3.521-22.254-9.214l-3.125 21.686 17.235-13.561 8.145 20.362 8.145-20.362 17.235 13.561-3.125-21.686c-5.699 5.694-13.565 9.214-22.256 9.214z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 51.207,
    cy: 51.379,
    r: 25.709
  }))));
}

function SvgNe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FF9B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FF9B55",
    cx: 256,
    cy: 168,
    r: 44.138
  })));
}

function SvgNf(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h161.839v335.448z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.792a8.828 8.828 0 01-8.828 8.828zm-188.213-81.126L287.563 94.786a49.976 49.976 0 00-6.402-17.266L256 35.586l-25.161 41.935a49.956 49.956 0 00-6.402 17.266L197.04 254.6a4.997 4.997 0 004.925 5.841h44.041v39.973h19.987V260.44h44.041a4.997 4.997 0 004.925-5.842z",
    fill: "#73AF00"
  })));
}

function SvgNg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h161.839v335.449z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.828 8.828 0 01-8.828 8.827z",
    fill: "#73AF00"
  })));
}

function SvgNi(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989zm-8.829 223.632H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#AFEBFF",
    d: "M256 135.677l-26.927 39.599h53.854z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#557DE6",
    d: "M229.073 175.276l-17.424 25.344h88.702l-17.424-25.344z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#73AF00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M262.891 173.063c.107-.221.22-.438.317-.664-.096.224-.21.443-.317.664zm.742-1.825c.066-.199.146-.392.203-.594-.058.201-.138.394-.203.594zm-1.658 3.486c.136-.217.27-.433.397-.655-.126.223-.262.439-.397.655zm4.116-7.377zm-1.261.418a1.58 1.58 0 00-.617 1.043v.002-.002c.053-.416.281-.782.617-1.043zm-.817 11.819c.377.358.751.698 1.127 1.024 2.01-1.74 4.108-3.951 5.58-6.538-.106.185-.22.365-.332.547-1.375-2.528-2.101-4.715-2.453-6.012-.201-.74-.967-1.256-1.842-1.257.337 2.954 1.061 8.383-2.08 12.236zm7.967-8.346c.066-.199.146-.392.203-.594-.057.201-.137.394-.203.594zm1.198-3.473a1.58 1.58 0 00-.617 1.043v.002-.002c.053-.416.281-.782.617-1.043zm-1.938 5.298c.107-.221.22-.438.317-.664-.098.224-.21.443-.317.664z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M288.339 181.612c-3.053 0-5.942-1.465-7.706-3.957-2.657-3.754-3.862-7.254-4.349-9.049-.201-.742-.969-1.258-1.845-1.258l.003.001c.402 3.526 1.358 10.575-4.371 14.264h-3.73c-.153-.121-.302-.237-.459-.365l.01.009c-1.044 1.363-3.132 1.745-4.751.91-6.778-3.492-5.726-11.109-5.303-14.818-.875.001-1.641.516-1.842 1.257-.352 1.297-1.078 3.484-2.453 6.012-.111-.182-.226-.361-.332-.547 1.656 2.91 4.113 5.366 6.333 7.186-1.044 1.363-3.132 1.745-4.751.91-6.778-3.492-5.726-11.11-5.303-14.818-.875.001-1.641.516-1.842 1.257-.352 1.297-1.078 3.484-2.453 6.012-.111-.182-.226-.361-.332-.547 1.656 2.91 4.113 5.366 6.333 7.186-1.044 1.363-3.132 1.745-4.751.91-6.778-3.492-5.726-11.109-5.303-14.818l.003-.001c-.876 0-1.644.515-1.845 1.258-.487 1.795-1.692 5.295-4.349 9.049-1.763 2.493-4.652 3.957-7.706 3.957h-2.508v3.168h66.526v-3.168h-.924z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.724 172.398c.097.226.21.444.317.664-.107-.22-.221-.439-.317-.664zm-.626-1.755c.056.202.137.395.203.594-.067-.199-.147-.392-.203-.594zm-.379-1.832v-.002.002zm1.841 5.259c.127.223.262.438.397.655-.135-.217-.27-.433-.397-.655zm1.455 2.196c-.017-.021-.031-.043-.047-.065.136-.181.266-.363.397-.548-.13.184-.264.366-.399.546a17.692 17.692 0 01.049.067zm.696.876c.154.185.308.37.466.548-.158-.178-.312-.363-.466-.548zm1.692 1.858c-.148-.148-.292-.303-.438-.456.147.154.29.308.438.456z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M274.442 167.348l-.003-.001c-.481 0-.925.157-1.261.418a1.58 1.58 0 00-.617 1.043v.002a12.651 12.651 0 01-.378 1.833c-.056.202-.137.395-.203.594-.129.392-.262.782-.424 1.161-.097.226-.21.444-.317.664-.164.34-.332.679-.519 1.007-1.472 2.586-3.57 4.798-5.58 6.538a32.356 32.356 0 01-1.127-1.024c3.14-3.853 2.417-9.282 2.081-12.236l-.003-.001c-.241 0-.472.04-.685.111a1.976 1.976 0 00-.576.307 1.58 1.58 0 00-.617 1.043v.002a12.521 12.521 0 01-.379 1.833c-.056.202-.137.395-.203.594-.129.392-.262.782-.424 1.161-.097.226-.21.444-.317.664-.164.34-.332.679-.519 1.007-.127.223-.262.438-.397.655a19.74 19.74 0 01-1.007 1.475 19.233 19.233 0 01-1.011-1.475c-.136-.217-.27-.433-.397-.655a17.1 17.1 0 01-.519-1.007c-.107-.221-.22-.438-.317-.664a14.231 14.231 0 01-.424-1.161c-.066-.199-.146-.392-.203-.594-.168-.598-.3-1.208-.378-1.833v-.002a1.573 1.573 0 00-.617-1.043 2.047 2.047 0 00-1.26-.418l-.003.001c-.422 3.709-1.475 11.326 5.303 14.818a4.013 4.013 0 003.591.024c.687-.346 1.425-.578 2.194-.578h3.146c5.728-3.688 4.772-10.738 4.37-14.263z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M249.749 170.643c.056.202.137.395.203.594-.066-.199-.146-.392-.203-.594zm-.379-1.832v-.002.002zm1.006 3.587c.097.226.21.444.317.664-.108-.22-.22-.439-.317-.664zm-2.882-5.051z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M252.793 182.166c1.62.834 3.708.452 4.751-.91-2.22-1.82-4.676-4.275-6.333-7.186a17.1 17.1 0 01-.519-1.007c-.107-.221-.22-.438-.317-.664a14.231 14.231 0 01-.424-1.161c-.066-.199-.146-.392-.203-.594-.168-.598-.3-1.208-.378-1.833v-.002a1.573 1.573 0 00-.617-1.043 1.976 1.976 0 00-.576-.307 2.138 2.138 0 00-.685-.111l-.003.001c-.421 3.708-1.474 11.324 5.304 14.817z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M241.401 170.643c.056.202.137.395.203.594-.066-.199-.146-.392-.203-.594zm.627 1.755c.097.226.21.444.317.664-.107-.22-.221-.439-.317-.664zm-1.005-3.587v-.002.002z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M244.446 182.166c1.62.834 3.708.452 4.751-.91-2.22-1.82-4.676-4.275-6.333-7.186a17.1 17.1 0 01-.519-1.007c-.107-.221-.22-.438-.317-.664a14.231 14.231 0 01-.424-1.161c-.066-.199-.146-.392-.203-.594-.168-.598-.3-1.208-.378-1.833v-.002a1.573 1.573 0 00-.617-1.043 2.048 2.048 0 00-1.261-.418l-.003.001c-.422 3.708-1.476 11.324 5.304 14.817z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M242.655 154.752l-.395 1.516a49.518 49.518 0 0114.274-2.076c5.178.003 9.95.776 14.274 2.076l-.395-1.516a55.262 55.262 0 00-13.879-1.746 55.32 55.32 0 00-13.879 1.746z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M242.827 154.093l-.395 1.516c4.276-1.3 8.99-2.08 14.102-2.082a48.34 48.34 0 0114.102 2.082l-.395-1.516a53.764 53.764 0 00-13.707-1.752 53.892 53.892 0 00-13.707 1.752z",
    fill: "#5AA0E6"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M242.986 153.484l-.395 1.516a47.119 47.119 0 0113.943-2.088c5.053 0 9.71.783 13.943 2.088l-.395-1.516a52.546 52.546 0 00-13.548-1.759 52.508 52.508 0 00-13.548 1.759z",
    fill: "#9BC800"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M243.167 152.788l-.395 1.516a45.895 45.895 0 0113.762-2.095c4.982.002 9.578.786 13.762 2.095l-.395-1.516a51.16 51.16 0 00-13.367-1.766c-4.758.001-9.21.644-13.367 1.766z",
    fill: "#FFE14E"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M243.346 152.104l-.395 1.516a44.735 44.735 0 0113.583-2.102 44.73 44.73 0 0113.583 2.102l-.395-1.516a49.713 49.713 0 00-13.188-1.772 49.678 49.678 0 00-13.188 1.772z",
    fill: "#FFB14E"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M243.421 151.812l-.277 1.062a43.45 43.45 0 0113.389-2.11 43.317 43.317 0 0113.389 2.11l-.277-1.062a49.106 49.106 0 00-13.113-1.775 48.907 48.907 0 00-13.111 1.775z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M300.352 202.157h-88.703a1.587 1.587 0 01-1.397-.835 1.589 1.589 0 01.079-1.628l44.352-66.527c.588-.878 2.048-.878 2.636 0l44.352 66.527a1.585 1.585 0 11-1.319 2.463zm-85.745-3.168h82.785L256 136.902l-41.393 62.087z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M259.029 160.932c0-1.394-1.412-3.512-3.673-3.512-1.321 0-2.392.808-2.392 1.803 0 .498.267.947.698 1.273l-.004.055c-.54.331-.892.829-.892 1.394 0 .95.979 1.72 2.216 1.79l1.018 2.036.919-1.838c1.207-.307 2.11-1.531 2.11-3.001z",
    fill: "#FF4B55"
  })));
}

function SvgNl(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  })));
}

function SvgNo(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M512 123.862H229.517V.276h-88.276v123.586H0v88.276h141.241v123.586h88.276V212.138H512z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M512 141.517H211.862V.276h-52.965v141.241H0v52.966h158.897v141.241h52.965V194.483H512z"
  })));
}

function SvgNp(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M11.476 22.876l182.888 133.649H53.442l17.156 19.137 133.217 148.587H11.476V22.876zM3.081 2.528C1.228 4.147 0 6.451 0 9.103v317.793a8.829 8.829 0 008.828 8.828h220.69L79.144 168h150.374L3.081 2.528z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M11.476 22.876l182.888 133.648H53.442L70.6 175.66l133.216 148.588H11.476V22.876"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M67.345 208.398l7.066 14.583 13.411-9.096a.856.856 0 011.334.77l-1.171 16.162 16.162-1.171a.856.856 0 01.77 1.334l-9.096 13.411 14.583 7.066a.856.856 0 010 1.54l-14.583 7.066 9.096 13.411a.856.856 0 01-.77 1.334l-16.162-1.171 1.171 16.162a.856.856 0 01-1.334.77l-13.411-9.096-7.066 14.583a.856.856 0 01-1.54 0l-7.066-14.583-13.411 9.096a.856.856 0 01-1.334-.77l1.171-16.162-16.162 1.171a.856.856 0 01-.77-1.334l9.096-13.411L22.743 253a.856.856 0 010-1.54l14.583-7.066-9.096-13.411a.856.856 0 01.77-1.334l16.162 1.171-1.171-16.162a.856.856 0 011.334-.77l13.411 9.096 7.066-14.583a.857.857 0 011.543-.003zm18.349-84.337l-6.135-4.191 5.401-5.661-7.697-1.405 2.632-7.367-7.603 1.847-.593-7.8-6.194 4.779-3.713-6.884-3.714 6.886-6.194-4.779-.593 7.8-7.603-1.847 2.632 7.367-7.697 1.405 5.401 5.661-6.135 4.191c-7.741-3.614-14.547-8.895-19.903-15.427 3.598 20.961 21.815 36.929 43.804 36.929s40.205-15.968 43.804-36.929c-5.353 6.531-12.16 11.811-19.9 15.425z",
    fill: "#F5F5F5"
  })));
}

function SvgNr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 150.345h511.999v35.31H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M119.172 220.965l5.141 20.54 14.721-15.218-5.817 20.358 20.357-5.818-15.216 14.723 20.538 5.139-20.538 5.141 15.216 14.721-20.357-5.817 5.817 20.358-14.721-15.217-5.141 20.539-5.141-20.539-14.721 15.217 5.818-20.358-20.358 5.817 15.217-14.721-20.539-5.141 20.539-5.139-15.217-14.723 20.358 5.818-5.818-20.358 14.721 15.218z"
  })));
}

function SvgNu(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172 168H8.828A8.829 8.829 0 010 159.172V9.104A8.829 8.829 0 018.828.276h238.344A8.829 8.829 0 01256 9.104v150.069a8.827 8.827 0 01-8.828 8.827z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.333l-81.77 53.573V.276h-44.138v53.573L24.161.276H8.828A8.829 8.829 0 000 9.104v7.002l70.155 45.963H0v44.138h70.155L0 152.171v7.001A8.829 8.829 0 008.828 168h15.333l81.77-53.573V168h44.138v-53.573L231.838 168h15.333a8.829 8.829 0 008.828-8.828v-7.002l-70.154-45.963h70.154V62.069h-70.155l70.155-45.963V9.104a8.827 8.827 0 00-8.827-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M255.999 70.897H141.241V.276h-26.483v70.621H0v26.482h114.758V168h26.483V97.379h114.758z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.333 0 5.961 0 9.104v.458l80.889 52.507h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.195-61.793H89.474zm166.385 53.66l-82.666-53.659H156.98l93.873 60.934c2.813-1.305 4.741-4.04 5.006-7.275z"
  })), /*#__PURE__*/react.createElement("circle", {
    fill: "#41479B",
    cx: 128,
    cy: 84.138,
    r: 26.483
  }), /*#__PURE__*/react.createElement("path", {
    d: "M129.787 62.668l4.425 13.266 13.984.108c1.811.014 2.561 2.325 1.105 3.4l-11.25 8.307 4.218 13.333c.546 1.726-1.419 3.154-2.892 2.101L128 95.052l-11.377 8.131c-1.473 1.053-3.438-.375-2.892-2.101l4.218-13.333-11.25-8.307c-1.457-1.076-.706-3.386 1.105-3.4l13.984-.108 4.425-13.266c.572-1.718 3.002-1.718 3.574 0zM56.501 73.474l2.379 7.133 7.519.058c.973.008 1.377 1.25.594 1.828l-6.048 4.467 2.268 7.168c.294.928-.764 1.696-1.555 1.13l-6.116-4.372-6.116 4.372c-.792.566-1.848-.202-1.555-1.13l2.268-7.168-6.048-4.467c-.783-.578-.38-1.821.594-1.828l7.519-.058 2.379-7.133c.305-.923 1.61-.923 1.918 0zm145.584 0l2.379 7.133 7.519.058c.973.008 1.377 1.25.594 1.828l-6.048 4.467 2.268 7.168c.294.928-.764 1.696-1.555 1.13l-6.116-4.372-6.116 4.372c-.792.566-1.848-.202-1.555-1.13l2.268-7.168-6.048-4.467c-.783-.578-.38-1.821.594-1.828l7.519-.058 2.379-7.133c.305-.923 1.61-.923 1.918 0zm-73.011-53.58l2.379 7.133 7.519.058c.973.008 1.377 1.25.594 1.828l-6.049 4.466 2.268 7.168c.294.928-.764 1.696-1.555 1.13l-6.116-4.372-6.116 4.372c-.792.566-1.848-.202-1.555-1.13l2.268-7.168-6.048-4.467c-.783-.578-.38-1.821.594-1.828l7.519-.058 2.379-7.133c.305-.922 1.612-.922 1.919.001zm0 108.422l2.379 7.133 7.519.058c.973.008 1.377 1.25.594 1.828l-6.049 4.466 2.268 7.168c.294.928-.764 1.696-1.555 1.13l-6.116-4.372-6.116 4.372c-.792.566-1.848-.202-1.555-1.13l2.268-7.168-6.048-4.467c-.783-.578-.38-1.821.594-1.828l7.519-.058 2.379-7.133c.305-.922 1.612-.922 1.919.001z",
    fill: "#FFE15A"
  })));
}

function SvgNz(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.334l-81.77 53.574V.276H105.93V53.85L24.16.276H8.828A8.828 8.828 0 000 9.103v7.002l70.155 45.963H0v44.138h70.155L0 152.17v7.002A8.829 8.829 0 008.828 168h15.334l81.77-53.574V168h44.138v-53.574L231.839 168h15.334a8.829 8.829 0 008.828-8.828v-7.002l-70.155-45.963H256V62.069h-70.155L256 16.106V9.104a8.828 8.828 0 00-8.828-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M256 70.897H141.241V.276h-26.482v70.621H0v26.482h114.759V168h26.482V97.379H256z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.332 0 5.961 0 9.103v.458l80.889 52.508h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.196-61.793H89.474zm166.386 53.658l-82.666-53.658H156.98l93.874 60.935c2.812-1.305 4.741-4.04 5.006-7.277zm139.614 120.248c-.358 0-.719-.113-1.026-.328L384 272.319l-10.449 7.466a1.767 1.767 0 01-2.711-1.974l3.875-12.242-10.327-7.62a1.77 1.77 0 01-.633-1.965 1.773 1.773 0 011.668-1.224l12.841-.104 4.061-12.181a1.778 1.778 0 011.677-1.207c.759 0 1.436.491 1.677 1.207l4.061 12.181 12.841.104c.763.009 1.431.5 1.668 1.224a1.77 1.77 0 01-.633 1.965l-10.327 7.62 3.875 12.242a1.778 1.778 0 01-.647 1.965c-.314.224-.68.337-1.043.337z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M384 243.034l4.461 13.378 14.102.109-11.345 8.377 4.254 13.445L384 270.144l-11.473 8.201 4.254-13.445-11.345-8.377 14.102-.109 4.462-13.38zm0-3.531a3.532 3.532 0 00-3.35 2.414l-3.663 10.984-11.578.09a3.53 3.53 0 00-2.071 6.372l9.314 6.878-3.492 11.039a3.532 3.532 0 005.421 3.937l9.42-6.733 9.42 6.733a3.536 3.536 0 004.129-.015 3.533 3.533 0 001.291-3.922l-3.492-11.039 9.314-6.878a3.53 3.53 0 10-2.071-6.372l-11.578-.09-3.663-10.984a3.535 3.535 0 00-3.351-2.414z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M395.474 137.793c-.362 0-.719-.113-1.026-.328L384 129.992l-10.449 7.474a1.794 1.794 0 01-1.026.328c-.362 0-.728-.113-1.038-.337a1.78 1.78 0 01-.647-1.965l3.875-12.242-10.327-7.629a1.774 1.774 0 01-.633-1.965 1.776 1.776 0 011.668-1.224l12.841-.095 4.061-12.181a1.778 1.778 0 011.677-1.207c.759 0 1.436.491 1.677 1.207l4.061 12.181 12.841.095c.759.009 1.431.5 1.668 1.224a1.775 1.775 0 01-.633 1.965l-10.327 7.629 3.875 12.242a1.778 1.778 0 01-.647 1.965c-.314.224-.68.336-1.043.336z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M384 100.713l4.461 13.378 14.102.109-11.345 8.377 4.254 13.446L384 127.822l-11.473 8.201 4.254-13.446-11.345-8.377 14.102-.109L384 100.713zm0-3.531a3.532 3.532 0 00-3.35 2.414l-3.663 10.984-11.578.09a3.53 3.53 0 00-2.071 6.372l9.314 6.878-3.492 11.039a3.532 3.532 0 005.421 3.937l9.42-6.733 9.42 6.733a3.536 3.536 0 004.129-.015 3.533 3.533 0 001.291-3.922l-3.492-11.039 9.314-6.878a3.53 3.53 0 001.26-3.932 3.53 3.53 0 00-3.331-2.44l-11.578-.09-3.663-10.984A3.534 3.534 0 00384 97.182z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M457.267 181.931c-.362 0-.719-.113-1.026-.328l-10.447-7.474-10.449 7.474a1.794 1.794 0 01-1.026.328c-.362 0-.728-.113-1.038-.337a1.78 1.78 0 01-.647-1.965l3.875-12.242-10.327-7.629a1.774 1.774 0 01-.633-1.965 1.776 1.776 0 011.668-1.224l12.841-.095 4.061-12.181a1.778 1.778 0 011.677-1.207c.759 0 1.436.491 1.677 1.207l4.061 12.181 12.841.095c.759.009 1.431.5 1.668 1.224a1.775 1.775 0 01-.633 1.965l-10.327 7.629 3.875 12.242a1.778 1.778 0 01-.647 1.965 1.802 1.802 0 01-1.044.337z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M445.793 144.851l4.461 13.378 14.102.109-11.345 8.377 4.254 13.446-11.473-8.201-11.473 8.201 4.254-13.445-11.345-8.377 14.102-.109 4.463-13.379zm0-3.531a3.532 3.532 0 00-3.35 2.414l-3.663 10.984-11.578.09a3.53 3.53 0 00-2.071 6.372l9.314 6.878-3.492 11.039a3.532 3.532 0 003.367 4.596c.719 0 1.439-.22 2.053-.659l9.42-6.733 9.42 6.733a3.537 3.537 0 004.13-.015 3.533 3.533 0 001.291-3.922l-3.492-11.039 9.314-6.878a3.53 3.53 0 001.26-3.932 3.53 3.53 0 00-3.331-2.44l-11.578-.09-3.663-10.984a3.533 3.533 0 00-3.351-2.414z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M333.681 199.586c-.362 0-.719-.113-1.026-.328l-10.447-7.474-10.449 7.474a1.794 1.794 0 01-1.026.328c-.362 0-.728-.113-1.038-.337a1.78 1.78 0 01-.647-1.965l3.875-12.242-10.327-7.629a1.774 1.774 0 01-.633-1.965 1.776 1.776 0 011.668-1.224l12.841-.095 4.061-12.181a1.778 1.778 0 011.677-1.207c.759 0 1.436.491 1.677 1.207l4.061 12.181 12.841.095c.759.009 1.431.5 1.668 1.224a1.775 1.775 0 01-.633 1.965l-10.327 7.629 3.875 12.242a1.778 1.778 0 01-.647 1.965 1.795 1.795 0 01-1.044.337z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M322.207 162.506l4.461 13.378 14.102.109-11.345 8.377 4.254 13.446-11.473-8.201-11.473 8.201 4.254-13.446-11.345-8.377 14.102-.109 4.463-13.378zm0-3.531a3.532 3.532 0 00-3.35 2.414l-3.663 10.984-11.578.09a3.53 3.53 0 00-2.071 6.372l9.314 6.878-3.492 11.039a3.532 3.532 0 003.367 4.596c.719 0 1.439-.22 2.053-.659l9.42-6.733 9.42 6.733a3.536 3.536 0 004.129-.015 3.533 3.533 0 001.291-3.922l-3.492-11.039 9.314-6.878a3.53 3.53 0 001.26-3.932 3.53 3.53 0 00-3.331-2.44l-11.578-.09-3.663-10.984a3.532 3.532 0 00-3.35-2.414z",
    fill: "#F5F5F5"
  })));
}

function SvgOm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M132.414 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h123.586v335.449z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M36.056 73.443c-.494.056-.971.116-1.436.178v6.287c.468.119.945.237 1.436.353v-6.818zm21.747 11.983a148.119 148.119 0 01-5.729-.6L36.995 98.237c1.953.298 4.294.694 5.271 1.005 3.875-3.39 9.069-8.009 15.537-13.816zm22.688-21.33v-1.291H53.739v1.923h26.752zm-19.806-38.26c0 1.884 2.839 3.475 6.2 3.475s6.2-1.591 6.2-3.475c0-1.884-2.839-3.475-6.2-3.475s-6.2 1.592-6.2 3.475zm-5.798 46.757c-6.039-.03-12.066.192-16.993.658v7.422c5.789 1.242 12.533 2.194 16.993 2.668V72.593zM23.776 109.22c2.387-.051 7.63-.994 11.18-3.767 1.1-.86 2.979-2.442 5.62-4.736-1.791-.367-4.796-.813-6.398-1.033l-10.402 9.536zm34.556-48.252v-3.374c-.452-.674-.919-1.369-1.396-2.076l-4.107 2.987a619.683 619.683 0 001.439 2.462h4.064v.001zM26.728 76.203c-.013.055-.045.183.161.448.762.977 2.967 1.91 5.895 2.759v-5.516c-3.515.583-5.817 1.353-6.056 2.309zm46.989-2.634v-7.004H60.169v17.108h3.445c5.57 0 10.103-4.534 10.103-10.104zM51.942 48.127C44.688 37.435 36.941 26.197 35.05 23.97c.271.995.925 2.865 2.453 6.366 1.971 4.518 6.755 13.177 10.716 20.149l3.723-2.358zm-2.813 3.957a966.353 966.353 0 002.774 4.824l4.007-2.914c-.953-1.415-1.934-2.866-2.935-4.344l-3.846 2.434zm9.203 31.556V72.636c-.535-.011-1.07-.022-1.608-.029V83.52c.619.054 1.158.095 1.608.12zm1.839-32.12H73.72v1.923H60.171zm32.376 9.333v.115h.689c.508 0 .918.41.918.918v3.761c0 .508-.41.918-.918.918h-.689v.115a.92.92 0 00.918.918h15.5a.92.92 0 00.918-.918v-5.827a.92.92 0 00-.918-.918H93.466a.918.918 0 00-.919.918zm17.343 48.316l-10.345-9.485c-1.602.221-4.606.665-6.398 1.033 2.689 2.333 4.567 3.915 5.62 4.738 3.495 2.728 8.631 3.685 11.123 3.714zM88.643 63.436v1.292h3.675v-1.923h-3.675zm2.811 35.808c.977-.313 3.321-.71 5.278-1.007L74.518 78.414a11.96 11.96 0 01-2.476 3.606l.585.522c8.047 7.204 14.338 12.782 18.827 16.702zM41.683 66.68v-.115h-.69a.917.917 0 01-.918-.918v-3.761c0-.508.41-.918.918-.918h.689v-.115a.92.92 0 00-.918-.918h-15.5a.92.92 0 00-.918.918v5.827a.92.92 0 00.918.918h15.5a.92.92 0 00.919-.918zm3.904-2.584v-1.291h-3.675v1.923h3.675zm35.308-5.591l-4.107-2.987-1.234 1.835v3.614h3.902c.097-.164.621-1.057 1.439-2.462zM61.398 45.898h11.095l-2.442-2.71H63.84zm-1.227 1.925H73.72v1.866H60.171zm6.715-16.675c-.893 0-1.73-.115-2.526-.285v10.383h5.109V30.852c-.812.178-1.67.296-2.583.296zm-6.717 26.059h13.49a.9.9 0 01.06-.338v-1.585h-13.55v1.923zm17.646-3.213l4.007 2.914a923.07 923.07 0 002.774-4.824L80.75 49.65a2034.304 2034.304 0 00-2.935 4.344zm-17.644 5.052H73.72v1.923H60.171zm25.335-8.561c3.96-6.97 8.744-15.631 10.716-20.149 1.532-3.509 2.185-5.38 2.455-6.372-1.857 2.179-9.623 13.443-16.895 24.163l3.724 2.358z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M112.449 109.023L100.47 98.038a.9.9 0 00-.744-.233l-.64.087c-.017-.017-.023-.04-.042-.055L75.167 76.53c.244-.949.386-1.938.386-2.961v-7.004h5.792c.746.971 1.906 1.608 3.221 1.608a4.054 4.054 0 003.221-1.608h2.922v.115a2.758 2.758 0 002.755 2.755h15.5a2.758 2.758 0 002.755-2.755v-5.827a2.758 2.758 0 00-2.755-2.755H93.466a2.758 2.758 0 00-2.755 2.755v.115h-2.922c-.746-.971-1.906-1.608-3.221-1.608-.998 0-1.9.374-2.609.97 3.096-5.3 12.823-22.1 15.947-29.259 3.351-7.682 3.081-8.674 2.289-9.311-.836-.669-1.894.1-2.293.393-1.537 1.117-16.44 23.134-22.348 31.91v-7.246c0-.02-.01-.038-.011-.057l-.001-.002a.898.898 0 00-.449-.719l-3.787-4.2V30.29c2.19-.94 3.617-2.564 3.617-4.454 0-2.978-3.531-5.312-8.038-5.312s-8.038 2.334-8.038 5.312c0 1.905 1.453 3.538 3.674 4.473v11.596l-3.715 4.121a.909.909 0 00-.476.789v7.486c-5.793-8.607-20.959-31.022-22.508-32.149-.401-.29-1.46-1.06-2.294-.393-.793.637-1.063 1.629 2.289 9.311 3.025 6.932 12.238 22.899 15.631 28.719a4.024 4.024 0 00-1.786-.43 4.054 4.054 0 00-3.221 1.608H43.52v-.115a2.758 2.758 0 00-2.755-2.755H25.263a2.758 2.758 0 00-2.755 2.755v5.827a2.758 2.758 0 002.755 2.755h15.5a2.758 2.758 0 002.755-2.755v-.115h2.922c.746.971 1.906 1.608 3.221 1.608a4.054 4.054 0 003.221-1.608h5.448v4.23c-8.516-.182-32.093-.21-33.385 4.963-.12.479-.132 1.222.495 2.024 2.485 3.183 15.079 5.506 24.214 6.734l-14.976 13.32c-.019.017-.025.04-.043.057a61.99 61.99 0 00-.64-.087.901.901 0 00-.744.233l-11.98 10.985a.917.917 0 00-.084 1.265c.397.477 1.406.711 2.755.711 3.32 0 8.707-1.416 12.141-4.097 2.83-2.21 10.67-9.084 23.304-20.43l1.069-.96h3.154a11.86 11.86 0 007.01-2.295l.778.695c14.546 13.02 23.372 20.754 26.237 22.99 3.434 2.684 8.819 4.097 12.139 4.097 1.35 0 2.358-.233 2.756-.711a.914.914 0 00-.081-1.265zm-52.28-25.35V66.565h13.549v7.004c0 5.57-4.533 10.104-10.104 10.104h-3.445zM32.785 79.41c-2.926-.85-5.132-1.782-5.895-2.759-.207-.266-.175-.393-.161-.448.239-.956 2.541-1.726 6.056-2.308v5.515zm2.265-55.44c1.89 2.227 9.638 13.463 16.892 24.157l-3.724 2.358c-3.96-6.972-8.744-15.631-10.716-20.149-1.527-3.5-2.182-5.369-2.452-6.366zm21.886 31.548c.476.706.942 1.4 1.396 2.076v3.374h-4.064c-.097-.164-.621-1.057-1.439-2.462l4.107-2.988zm-5.034 1.39a923.07 923.07 0 01-2.774-4.824l3.846-2.434c1.002 1.479 1.982 2.93 2.935 4.344l-4.007 2.914zm6.43 15.729v11.004a53.42 53.42 0 01-1.608-.12V72.608c.537.007 1.072.017 1.608.029zm-20.438.613c4.928-.466 10.954-.687 16.993-.658V83.34c-4.46-.473-11.204-1.426-16.993-2.668V73.25zm-3.273.371c.465-.062.941-.121 1.436-.178v6.817a70.447 70.447 0 01-1.436-.353v-6.286zm17.453 11.204c2.404.294 4.418.495 5.729.6-6.468 5.807-11.662 10.426-15.535 13.816-.978-.312-3.318-.707-5.271-1.005l15.077-13.411zm-11.498 15.891c-2.641 2.294-4.52 3.876-5.62 4.736-3.55 2.774-8.792 3.718-11.18 3.767l10.402-9.537c1.602.222 4.606.667 6.398 1.034zm13.163-35.988v-1.922h26.753v1.922H53.739zm19.347-38.892c0 1.884-2.839 3.475-6.2 3.475s-6.2-1.591-6.2-3.475c0-1.884 2.839-3.475 6.2-3.475s6.2 1.592 6.2 3.475zM60.169 53.447v-1.923h13.549v1.923H60.169zm13.548 1.837v1.585a.9.9 0 00-.06.338H60.169v-1.923h13.548zm-13.548-5.598V47.82h13.549v1.866H60.169zm9.882-6.498l2.442 2.709H61.398l2.442-2.709h6.211zm-5.691-1.941V30.864c.796.17 1.633.285 2.526.285.914 0 1.771-.118 2.583-.296v10.394H64.36zm-4.191 17.797h13.549v1.923H60.169v-1.923zm36.053-28.708c-1.971 4.518-6.755 13.177-10.716 20.149l-3.724-2.358c7.272-10.72 15.038-21.984 16.895-24.163-.27.992-.924 2.863-2.455 6.372zm-9.416 33.1v.66a2.241 2.241 0 01-2.239 2.239 2.241 2.241 0 01-2.239-2.239v-.66a2.241 2.241 0 012.239-2.239 2.241 2.241 0 012.239 2.239zm-4.984-6.528l-4.007-2.914a1718.14 1718.14 0 012.935-4.344l3.846 2.434a1052.106 1052.106 0 01-2.774 4.824zm-6.268.445l1.234-1.835 4.107 2.987a777.41 777.41 0 01-1.439 2.463h-3.902v-3.615zm-1.036 21.059l22.214 19.823c-1.955.299-4.301.695-5.278 1.007-4.49-3.921-10.78-9.497-18.828-16.703l-.585-.522a11.915 11.915 0 002.477-3.605zm25.028 21.271l10.345 9.485c-2.493-.029-7.628-.985-11.123-3.714-1.053-.823-2.931-2.406-5.62-4.738 1.792-.367 4.796-.812 6.398-1.033zm10.34-38.83v5.827a.92.92 0 01-.918.918H93.466a.92.92 0 01-.918-.918v-.115h.689c.508 0 .918-.41.918-.918v-3.761a.917.917 0 00-.918-.918h-.689v-.115a.92.92 0 01.918-.918h15.5a.92.92 0 01.92.918zm-17.568 3.875h-3.674v-1.922h3.674v1.922zM24.344 66.68v-5.827a.92.92 0 01.918-.918h15.5a.92.92 0 01.918.918v.115h-.687a.917.917 0 00-.918.918v3.761c0 .508.41.918.918.918h.689v.115a.92.92 0 01-.918.918h-15.5a.92.92 0 01-.92-.918zm17.568-3.875h3.674v1.922h-3.674v-1.922zm9.99 1.291a2.241 2.241 0 01-2.239 2.239 2.241 2.241 0 01-2.239-2.239v-.66a2.241 2.241 0 012.239-2.239 2.241 2.241 0 012.239 2.239v.66z",
    fill: "#D23741"
  })));
}

function SvgPa(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256 168h247.172a8.829 8.829 0 008.828-8.828V9.103a8.829 8.829 0 00-8.828-8.828H264.828A8.829 8.829 0 00256 9.103V168z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828 335.724h238.345a8.829 8.829 0 008.828-8.828V168H8.828A8.829 8.829 0 000 176.828v150.069a8.828 8.828 0 008.828 8.827zM131.4 46.487l8.416 25.234 26.6.206c3.444.026 4.872 4.422 2.101 6.467l-21.398 15.801 8.023 25.362c1.038 3.284-2.7 5.999-5.502 3.997L128 108.087l-21.641 15.468c-2.802 2.003-6.54-.714-5.502-3.997l8.023-25.362-21.398-15.801c-2.771-2.046-1.343-6.441 2.101-6.467l26.6-.206 8.416-25.234c1.09-3.268 5.712-3.268 6.801-.001z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M387.4 214.211l8.416 25.234 26.6.206c3.444.026 4.872 4.422 2.101 6.467l-21.398 15.801 8.023 25.362c1.038 3.284-2.7 5.999-5.502 3.997L384 275.811l-21.641 15.468c-2.802 2.003-6.54-.714-5.502-3.997l8.023-25.362-21.398-15.801c-2.771-2.046-1.343-6.441 2.101-6.467l26.6-.206 8.416-25.234c1.09-3.268 5.712-3.268 6.801-.001z",
    fill: "#FF4B55"
  })));
}

function SvgPe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h161.839v335.449z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.828 8.828 0 01-8.828 8.827z",
    fill: "#FF4B55"
  })));
}

function SvgPf(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 247.448h512v79.448a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896v-79.448zM8.828.276h494.345a8.829 8.829 0 018.828 8.828v79.448H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 88.552h512v158.897H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M314.196 145.458l-56.036 22.873c-.022-.057-.049-.108-.075-.162l54.118-27.103a62.956 62.956 0 00-7.755-11.919l-46.657 38.585c-.046-.058-.073-.132-.126-.186l42.77-42.813a63.05 63.05 0 00-10.048-8.153l-33.113 50.686c-.075-.051-.142-.109-.224-.151l27.055-54.151a62.373 62.373 0 00-13.825-4.988l-13.749 58.966c-.174-.042-.341-.107-.53-.107s-.354.065-.53.107l-13.749-58.966a62.305 62.305 0 00-13.825 4.988l27.055 54.151c-.081.042-.149.1-.224.151l-33.113-50.686a63.116 63.116 0 00-10.048 8.153l42.77 42.813c-.052.054-.078.127-.126.186l-46.657-38.585a62.925 62.925 0 00-7.755 11.919l54.118 27.103c-.026.055-.053.106-.075.162l-56.036-22.873a62.403 62.403 0 00-3.721 13.035l59.658 10.329c-.008.052-.026.099-.031.152l-60.218-6.273a63.588 63.588 0 00-.329 6.463c0 3.774.351 7.463.989 11.052L256 173.818l61.847 6.398c.638-3.591.989-7.279.989-11.052 0-2.183-.113-4.338-.329-6.463l-60.219 6.273c-.004-.053-.023-.1-.031-.152l59.657-10.329a62.31 62.31 0 00-3.718-13.035z",
    fill: "#FFB955"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M195.27 185.315a62.315 62.315 0 001.484 4.793h118.494a62.315 62.315 0 001.484-4.793c-5.805-.75-6.526-4.515-13.598-4.515-7.851 0-7.851 4.654-15.703 4.654-7.851 0-7.851-4.654-15.703-4.654-7.853 0-7.853 4.654-15.708 4.654-7.849 0-7.849-4.654-15.699-4.654-7.857 0-7.857 4.654-15.712 4.654-7.861 0-7.861-4.654-15.723-4.654-7.081 0-7.801 3.766-13.616 4.515zm106.012 11.775c-7.558-.001-7.559-4.654-15.118-4.654-7.561 0-7.561 4.654-15.122 4.654s-7.561-4.654-15.122-4.654c-7.563 0-7.563 4.654-15.125 4.654-7.559 0-7.559-4.654-15.117-4.654-7.565 0-7.565 4.654-15.13 4.654-6.712 0-7.484-3.652-12.846-4.482a62.576 62.576 0 004.558 9.137h107.481a62.628 62.628 0 004.567-9.16c-5.523.777-6.244 4.505-13.026 4.505zm6.01 8.35c-1.463-.767-3.196-1.367-5.903-1.367-7.561 0-7.561 4.654-15.122 4.654s-7.561-4.654-15.122-4.654c-7.563 0-7.563 4.654-15.125 4.654-7.559 0-7.559-4.654-15.117-4.654-7.565 0-7.565 4.654-15.13 4.654-7.571 0-7.571-4.654-15.14-4.654-2.717 0-4.454.602-5.92 1.372a63.246 63.246 0 006.653 7.938h89.271a63.308 63.308 0 006.655-7.943zm-12.571 13.193c-2.284-1.324-4.121-2.924-8.557-2.924-7.561 0-7.561 4.654-15.122 4.654s-7.561-4.654-15.122-4.654c-7.563 0-7.563 4.654-15.125 4.654-7.559 0-7.559-4.654-15.117-4.654-4.377 0-6.225 1.556-8.468 2.87a62.903 62.903 0 0010.014 6.44h57.551a62.968 62.968 0 009.946-6.386zm-53.818 8.713c-2.478 0-4.139.502-5.525 1.174A62.736 62.736 0 00256 232h.012c-7.551-.003-7.553-4.654-15.109-4.654zm15.153 4.653a62.704 62.704 0 0020.594-3.488c-1.382-.666-3.039-1.165-5.504-1.165-7.551 0-7.565 4.636-15.09 4.653z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M264.266 161.207l-19.912-5.754a2.63 2.63 0 01-1.906-2.494c-.092-7.373-.412-33.336-.412-37.323 0-4.654 4.654-11.636 13.964-11.636h7.34c.695 0 .905.946.266 1.219-3.362 1.441-7.605 4.444-7.605 10.417 0 7.092 6.753 10.132 9.971 11.178a2.395 2.395 0 011.666 2.282v29.578a2.64 2.64 0 01-3.372 2.533zm-17.564 26.048c.73-.442 1.596.296 1.267 1.084-1.949 4.679-6.726 13.407-15.243 13.407-11.636 0-13.964-9.309-13.964-16.291V136.09c0-1.014.822-1.835 1.835-1.835h3.311c1.014 0 1.835.822 1.835 1.835v47.038c.003 6.292 13.235 8.804 20.959 4.127zm17.619 0c-.73-.442-1.596.296-1.267 1.084 1.949 4.679 6.726 13.407 15.243 13.407 11.636 0 13.964-9.309 13.964-16.291V136.09a1.835 1.835 0 00-1.835-1.835h-3.311a1.835 1.835 0 00-1.835 1.835v47.038c-.002 6.292-13.235 8.804-20.959 4.127z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M280.477 179.636h-48.953c-.62 0-1.123-.503-1.123-1.123v-.081c0-.62.503-1.123 1.123-1.123h48.953c.62 0 1.123.503 1.123 1.123v.081c0 .621-.503 1.123-1.123 1.123zm-45.132-8.785l2.52-3.36a1.165 1.165 0 00-.233-1.63 1.168 1.168 0 00-1.629.234l-.981 1.308v-.903a1.164 1.164 0 10-2.328 0v.819l-.917-1.223a1.164 1.164 0 10-1.862 1.396l2.52 3.36-2.52 3.36a1.165 1.165 0 00.929 1.862c.354 0 .703-.161.931-.466l2.112-2.817 2.112 2.817a1.16 1.16 0 001.627.234 1.164 1.164 0 00.233-1.63l-2.514-3.361zm21.721 0l2.52-3.36a1.165 1.165 0 00-.233-1.63 1.168 1.168 0 00-1.629.234l-.981 1.308v-.903a1.164 1.164 0 10-2.328 0v.819l-.917-1.223a1.164 1.164 0 10-1.862 1.396l2.52 3.36-2.52 3.36a1.165 1.165 0 00.929 1.862c.354 0 .703-.161.931-.466l2.112-2.817 2.112 2.817a1.16 1.16 0 001.627.234 1.164 1.164 0 00.233-1.63l-2.514-3.361zm-10.86 0l2.52-3.36a1.165 1.165 0 00-.233-1.63 1.168 1.168 0 00-1.629.234l-.981 1.308v-.903a1.164 1.164 0 10-2.328 0v.819l-.917-1.223a1.164 1.164 0 10-1.862 1.396l2.52 3.36-2.52 3.36a1.165 1.165 0 00.929 1.862c.354 0 .703-.161.931-.466l2.112-2.817 2.112 2.817a1.16 1.16 0 001.627.234 1.164 1.164 0 00.233-1.63l-2.514-3.361zm21.721 0l2.52-3.36a1.165 1.165 0 00-.233-1.63 1.168 1.168 0 00-1.629.234l-.981 1.308v-.903a1.164 1.164 0 10-2.328 0v.819l-.917-1.223a1.164 1.164 0 10-1.862 1.396l2.52 3.36-2.52 3.36a1.165 1.165 0 00.929 1.862c.354 0 .703-.161.931-.466l2.112-2.817 2.112 2.817a1.16 1.16 0 001.627.234 1.164 1.164 0 00.233-1.63l-2.514-3.361zm10.86 0l2.52-3.36a1.165 1.165 0 00-.233-1.63 1.168 1.168 0 00-1.629.234l-.981 1.308v-.903a1.164 1.164 0 10-2.328 0v.819l-.917-1.223a1.164 1.164 0 10-1.862 1.396l2.52 3.36-2.52 3.36a1.165 1.165 0 00.929 1.862c.354 0 .703-.161.931-.466l2.112-2.817 2.112 2.817a1.16 1.16 0 001.627.234 1.164 1.164 0 00.233-1.63l-2.514-3.361zm-45.591 15.973c1.721.753 11.832.861 14.413-1.828 2.581-2.689 2.044-3.872 2.044-3.872l-12.263.107-4.194 5.593zm45.116 0c-1.721.753-11.832.861-14.413-1.828-2.581-2.689-2.044-3.872-2.044-3.872l12.263.107 4.194 5.593z",
    fill: "#AA4650"
  })));
}

function SvgPg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793a8.829 8.829 0 008.828 8.828h494.345c2.146 0 4.041-.86 5.571-2.134L3.256 2.41z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M51.499 162.287l-5.052 15.148-15.968.124c-1.532.012-2.166 1.966-.935 2.876l12.845 9.485-4.817 15.224c-.462 1.46 1.201 2.668 2.446 1.778l12.991-9.286L66 206.922c1.246.891 2.908-.318 2.446-1.778l-4.817-15.224 12.845-9.485c1.231-.909.597-2.863-.935-2.876l-15.968-.124-5.052-15.148c-.481-1.452-2.536-1.452-3.02 0zm108.783 0l-5.052 15.148-15.968.124c-1.532.012-2.166 1.966-.935 2.876l12.845 9.485-4.817 15.224c-.462 1.46 1.201 2.668 2.446 1.778l12.991-9.286 12.991 9.286c1.246.891 2.908-.318 2.446-1.778l-4.817-15.224 12.845-9.485c1.231-.909.597-2.863-.935-2.876l-15.968-.124-5.052-15.148c-.48-1.452-2.535-1.452-3.02 0zM105.89 96.351l-5.052 15.148-15.968.124c-1.532.012-2.166 1.966-.935 2.876l12.845 9.485-4.817 15.224c-.462 1.46 1.201 2.668 2.446 1.778L107.4 131.7l12.991 9.286c1.246.89 2.908-.318 2.446-1.778l-4.817-15.224 12.845-9.485c1.231-.909.597-2.863-.935-2.876l-15.968-.124-5.052-15.148c-.481-1.452-2.535-1.452-3.02 0zm0 162.148l-5.052 15.148-15.968.124c-1.532.012-2.166 1.966-.935 2.876l12.845 9.485-4.817 15.224c-.462 1.46 1.201 2.668 2.446 1.778l12.991-9.286 12.991 9.286c1.246.891 2.908-.318 2.446-1.778l-4.817-15.224 12.845-9.485c1.231-.909.597-2.863-.935-2.876l-15.968-.124-5.052-15.148c-.481-1.452-2.535-1.452-3.02 0zm25.339-39.508l-2.687 8.055-8.491.066c-.814.007-1.152 1.045-.497 1.529l6.83 5.044-2.561 8.096c-.246.777.638 1.419 1.301.945l6.909-4.938 6.909 4.938c.662.473 1.546-.169 1.301-.945l-2.561-8.096 6.83-5.044c.655-.483.318-1.523-.497-1.529l-8.491-.066-2.687-8.055c-.258-.772-1.351-.772-1.608 0z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M437.565 160.345c-1.292-10.004-5.566-19.89-8.671-25.995 1.533.767 3.917 2.148 3.917 2.148l-2.104-7.628c5.26 2.104 9.206 6.182 9.206 6.182-2.631-13.152-6.708-19.332-6.708-19.332l3.288 1.184c-6.182-15.256-15.388-19.596-15.388-19.596l5.26-1.315c-7.759-9.732-18.675-13.02-18.675-13.02l7.102-3.42c-18.807-10.653-36.956.526-36.956.526s6.313-6.575 8.68-9.337c2.367-2.762-3.288-3.682-3.288-3.682s5.524-3.814 5.26-6.05c-.264-2.237-5.26-1.052-5.26-1.052s4.34-4.471 4.34-6.97c0-2.499-4.471-.92-4.471-.92s1.447-3.025 1.842-5.393c.395-2.367-3.946-.395-3.946-.395s4.866-8.68 4.604-10.521c-.263-1.842-12.757 5.918-21.7 14.467-8.943 8.55-7.87 22.286-7.078 25.555.792 3.269 1.288 10.893-2.674 13.566-3.961 2.674-11.029-3.874-14.536-7.907-3.507-4.033-7.891-2.631-12.45-1.052-4.559 1.578-13.152-.526-15.782-.877-2.631-.351 2.98 2.631 7.715 4.384 4.735 1.753 6.839 5.962 13.503 8.417 5.836 2.151 10.51 7.61 5.918 10.126-3.578 1.961-3.551-1.184-19.332-5.26-15.782-4.076-34.72 36.035-34.72 36.035 10.138-1.254 15.32-7.327 15.32-7.327l-2.739 7.857c7.492-1.419 11.156-5.975 11.156-5.975l-1.981 7.923c5.743-1.783 9.705-7.923 9.705-7.923l-1.684 7.823c5.644-2.674 8.616-7.823 8.616-7.823.594 2.872 1.062 8.733 1.062 8.733 8.742-4.673 10.784-11.31 10.784-11.31 9.995 30.249 24.462 35.246 24.462 35.246l.789-7.891c4.471 6.313 10.784 9.469 10.784 9.469l-1.052-6.839c15.519 18.938 33.405 23.673 33.405 23.673l-4.58-10.482 5.632 1.143c-6.05-5.129-8.286-14.072-8.286-14.072l4.735.789c-7.628-6.97-11.442-14.993-11.442-14.993l4.604.789c-1.447-2.236-2.631-10.126-2.631-10.126 8.417 2.631 12.757 5.918 12.757 5.918l.499-2.865c7.221 5.203 19.079 14.889 27.297 27.066.011 3.972-.631 7.983-2.281 12.009-7.538 18.386-27.356 17.185-36.124 13.326 0 0 27.18 21.218 42.086-8.943.945-1.91 1.536-3.956 1.959-6.054 1.859 4.434 3.144 9.058 3.39 13.857 1.578 30.775-30.511 27.882-30.511 27.882s35.509 14.204 37.088-26.829c.348-9.124-3.515-18.246-9.715-26.919zm-32.264-30.719l.155-.888c5.393 1.578 11.048 5.393 11.048 5.393l1.249-3.748c5.335 6.411 9.596 13.31 11.968 20.452-7.202-7.738-15.833-14.924-24.42-21.209z",
    fill: "#FFE15A"
  })));
}

function SvgPh(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59L256 168 3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59c1.53 1.274 3.425 2.134 5.571 2.134h494.345a8.829 8.829 0 008.828-8.828V168H256L3.256 333.59z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 2.41C4.786 1.136 6.681.276 8.827.276h494.345A8.829 8.829 0 01512 9.104V168H256L3.256 2.41z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(13 41)",
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 79.69,
    cy: 127,
    r: 28.69
  }), /*#__PURE__*/react.createElement("path", {
    d: "M79.69 127L68.931 83.966 79.69 69.621l10.758 14.345zm0 0l10.758 43.034-10.758 14.345-10.759-14.345zm0 0l-43.035 10.759L22.31 127l14.345-10.759zm0 0l43.034-10.759L137.069 127l-14.345 10.759zm0 0l22.822-38.037 17.751-2.537-2.536 17.751zm0 0l-22.823 38.037-17.751 2.537 2.537-17.751zm0 0l-38.037-22.823-2.537-17.751 17.751 2.537zm0 0l38.037 22.823 2.536 17.751-17.751-2.537zM10.658 2.694l1.496 11.16-10.076 5.028c-1.304.651-1.03 2.588.405 2.85l11.076 2.026 1.668 11.136c.216 1.442 2.143 1.779 2.836.495l5.35-9.908 11.106 1.854c1.438.241 2.354-1.489 1.348-2.543l-7.77-8.15 5.195-9.99c.673-1.293-.689-2.699-2.003-2.068L21.137 9.456l-7.895-8.029c-1.02-1.038-2.777-.177-2.584 1.267zm4.444 217.212l-1.89 11.101-11.114 1.805c-1.439.234-1.752 2.165-.461 2.841l9.973 5.227-1.717 11.128c-.222 1.441 1.517 2.335 2.56 1.316l8.053-7.87 10.054 5.073c1.302.657 2.69-.722 2.044-2.028l-4.996-10.091 7.93-7.993c1.026-1.035.146-2.781-1.298-2.57l-11.142 1.633-5.152-10.013c-.667-1.295-2.601-.997-2.844.441zm174.632-109.351l-6.481 9.208-10.81-3.15c-1.399-.408-2.513 1.201-1.639 2.367l6.755 9.009-6.337 9.308c-.82 1.205.365 2.761 1.745 2.29l10.655-3.64 6.894 8.903c.893 1.153 2.739.505 2.717-.952l-.17-11.258 10.598-3.806c1.372-.493 1.327-2.449-.066-2.878l-10.761-3.318-.344-11.255c-.042-1.459-1.917-2.021-2.756-.828z"
  }))));
}

function SvgPk(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H132.414V.276h370.759a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.827z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M132.414 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h123.586v335.449zm279.639-121.536c-40.632 36.196-102.833 32.477-138.956-8.227-36.054-40.629-32.405-103.01 8.226-139.204l.178-.157c.96-.844.032-2.377-1.16-1.913-40.07 15.604-68.479 54.579-68.479 100.214 0 59.444 48.071 107.587 107.373 107.587 41.023 0 76.574-23.083 94.633-56.969.602-1.131-.81-2.231-1.766-1.377l-.049.046zM359.787 84.589l14.12 15.841 19.56-8.232c2.532-1.066 4.964 1.705 3.578 4.077L386.342 114.6l13.873 16.058c1.796 2.079-.088 5.248-2.772 4.663l-20.735-4.516-10.986 18.156c-1.422 2.35-5.018 1.538-5.292-1.196l-2.112-21.116-20.662-4.838c-2.675-.627-3.014-4.297-.498-5.402l19.43-8.533-1.784-21.145c-.231-2.737 3.156-4.192 4.983-2.142z",
    fill: "#F5F5F5"
  })));
}

function SvgPl(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#F5F5F5"
  })));
}

function SvgPn(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.333l-81.77 53.573V.276h-44.138v53.573L24.161.276H8.828A8.829 8.829 0 000 9.104v7.002l70.155 45.963H0v44.138h70.155L0 152.171v7.001A8.829 8.829 0 008.828 168h15.333l81.77-53.573V168h44.138v-53.573L231.838 168h15.333a8.829 8.829 0 008.828-8.828v-7.002l-70.154-45.963h70.154V62.069h-70.155l70.155-45.963V9.104a8.827 8.827 0 00-8.827-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M255.999 70.897H141.241V.276h-26.483v70.621H0v26.482h114.758V168h26.483V97.379h114.758z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.333 0 5.961 0 9.104v.458l80.889 52.507h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.195-61.793H89.474zm166.385 53.66l-82.666-53.659H156.98l93.873 60.934c2.813-1.305 4.741-4.04 5.006-7.275z"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#73AF00"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M387.206 89.365a.957.957 0 01-.575-.193c-.138-.106-13.838-10.783-5.769-28.879a.957.957 0 011.259-.482c.48.216.695.777.482 1.259-7.443 16.687 4.662 26.19 5.181 26.586a.95.95 0 01-.578 1.709z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M379.315 73.734a.953.953 0 01-.947-1.062c.396-3.422 1.683-5.81 3.828-7.096 3.449-2.073 7.76-.417 7.941-.344a.951.951 0 11-.694 1.772c-.038-.014-3.638-1.382-6.276.209-1.604.969-2.583 2.879-2.905 5.679a.956.956 0 01-.947.842zm2.587-12.274c-.082-.21-2.141-5.098-11.447-3.018-10.539 2.361-10.661 16.264-10.661 16.403a.953.953 0 001.872.242c3.928-14.962 18.557-12.449 19.178-12.34a.945.945 0 00.907-.331.948.948 0 00.151-.956z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M379.709 69.211s-6.348-4.046-8.967 1.111c-2.618 5.158-.634 10.712.397 12.933 0 0 3.784-4.183 7.38-4.761 4.444-.714 5.555-6.269 2.46-9.046-3.698-3.317-1.27-.237-1.27-.237zm6.935-9.48c-.09 5.554 3.005 6.282 3.005 6.282 2.001-5.099-3.005-6.282-3.005-6.282z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M385.675 71.397c.042-5.27 3.616-5.863 3.616-5.863 2.166 4.899-3.616 5.863-3.616 5.863z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M406.291 67.147s-5.054-.747-6.993-1.663c-1.613-.761-3.719-2.599-6.444-2.24a3.772 3.772 0 00-3.772 3.772c0 2.084 1.431 4.579 8.917 4.025 3.629-.269 6.721 1.389 6.721 1.389-.475-1.983 1.571-5.283 1.571-5.283z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M401.046 68.801s-7.752.537-9.454-.717c-1.571-1.158-1.161-3.002.448-3.181 2.42-.269 9.006 3.898 9.006 3.898z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M416.13 77.581l-17.14 10.712-1.964-1.905 9.402-9.106 2.201.893 2.143-2.857-5.118-2.678s-13.569 12.794-25.113 13.866c-3.884.361-7.842.107-10.929-1.164l-6.925 9.972 14.52 12.378 21.305-.833 17.615-23.924 3.094 1.428 2.618-3.094-5.709-3.688z",
    fill: "#B49B91"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M368.364 106.424c-4.768 0-8.648-3.88-8.648-8.646 0-4.768 3.88-8.648 8.648-8.648 4.767 0 8.645 3.88 8.645 8.648.002 4.767-3.878 8.646-8.645 8.646zm0-14.437a5.798 5.798 0 00-5.791 5.791 5.797 5.797 0 005.791 5.79 5.795 5.795 0 005.79-5.79 5.796 5.796 0 00-5.79-5.791z",
    fill: "#9B8278"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M404.386 114.439s1.587-1.032 3.174-5.871l-3.253.476s.634-2.698-.079-4.682l-3.65 2.857s-1.666-3.491-2.38-3.967c0 0-2.539 3.571-3.967 4.046 0 0-1.428-5.158-2.857-6.189l-2.46 3.491-3.65-2.857s0 2.46-.079 3.016c-.079.555-4.761-4.919-4.761-4.919s-2.063.873-4.84 5.316l-3.491-3.571-1.428 4.682-4.84-1.27.793 2.777-4.205-.318s.714 4.126 2.777 5.555l39.196 1.428zm-42.054 17.655s-13.092 16.663-37.849 14.759l26.899 3.69 13.806-13.092-2.856-5.357z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M319.603 144.353c2.618 1.905 18.806 6.547 30.469.952 0 0 .238 2.738-1.071 4.285 0 0 8.569-3.452 13.212-9.879 4.642-6.428-9.641 13.806-9.641 13.806l-21.9 4.046-8.927-7.38-2.142-5.83zm-1.721-60.004c-2.908.244-6.053 1.995-7.662 4.122-.876-.372-2.823-.537-4.436.537-2.148 1.432-6.118 6.604-9.45 5.236 0 0-.298 4.879 4.879 4.702 0 0-1.31 2.024-1.071 5.237.238 3.213-2.083 5.356-2.083 5.356s10.474 1.487 10.891-6.665c.051-.996.102-1.874.15-2.657 5.466 2.952 7.617-1.215 7.617-1.215s-3.285-3.103.058-7.52c3.343-4.418 12.533 5.996 12.533 5.996.18-4.167-.194-14.073-11.426-13.129z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M358.364 111.82s-3.015 2.063-12.378.159c0 0 2.063-4.602 1.111-7.3 0 0-2.539 2.38-8.728 4.761-6.189 2.381-13.806 9.998-16.029 14.917 0 0 13.92-32.088 2.738-35.35-3.836-1.119-7.135.695-8.302 2.474.564.666 1.106 1.615 1.161 2.882.119 2.738-2.618 21.186-6.665 33.921 0 0-1.191-4.404-3.094-6.547-1.903-2.143-3.332-5.594-3.332-5.594s-3.213 2.143-2.738 6.07c0 0-1.785-1.428-5.237-.476s-4.761-1.31-4.761-1.31-2.857 7.617 5.594 11.545c0 0-2.261 1.071-3.332 1.905-1.071.833-2.738.833-2.738.833s2.976 5.475 9.283 6.07c6.308.595 9.207 2.393 11.188 5.633 6.428 10.514 18.727 18.488 38.802 6.189 0 0-28.565 8.887-29.835-9.363-1.111-15.965 16.345-19.202 18.091-15.711 1.746 3.491-.159 6.507-.159 6.507s9.522-2.221 4.919-10.951c0 .004 9.363 1.433 14.441-11.264zm91.687 32.533c-2.618 1.905-19.162 9.046-30.589-2.38-11.426-11.426-15.882-28.581-15.235-26.661h-11.426l3.809 34.279 42.372 7.975 8.927-7.38 2.142-5.833zm1.722-60.004c2.908.244 6.053 1.995 7.662 4.122.876-.372 2.823-.537 4.436.537 2.148 1.432 6.117 6.604 9.45 5.236 0 0 .298 4.879-4.879 4.702 0 0 1.31 2.024 1.071 5.237-.238 3.213 2.083 5.356 2.083 5.356s-10.474 1.487-10.891-6.665c-.051-.996-.102-1.874-.15-2.657-5.466 2.952-7.617-1.215-7.617-1.215s3.284-3.103-.059-7.52c-3.343-4.418-12.533 5.996-12.533 5.996-.179-4.167.195-14.073 11.427-13.129z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M411.29 111.82s3.015 2.063 12.378.159c0 0-2.063-4.602-1.111-7.3 0 0 2.539 2.38 8.728 4.761 6.189 2.381 13.806 9.998 16.029 14.917 0 0-13.92-32.088-2.738-35.35 3.836-1.119 7.135.695 8.302 2.474-.564.666-1.106 1.615-1.161 2.882-.119 2.738 2.618 21.186 6.665 33.921 0 0 1.191-4.404 3.094-6.547 1.903-2.143 3.332-5.594 3.332-5.594s3.213 2.143 2.738 6.07c0 0 1.785-1.428 5.237-.476s4.761-1.31 4.761-1.31 2.857 7.617-5.594 11.545c0 0 2.261 1.071 3.332 1.905 1.071.833 2.738.833 2.738.833s-2.976 5.475-9.283 6.07c-6.308.595-9.207 2.393-11.188 5.633-6.428 10.514-18.727 18.488-38.802 6.189 0 0 28.565 8.887 29.835-9.363 1.111-15.965-16.345-19.202-18.091-15.711-1.746 3.491.159 6.507.159 6.507s-9.522-2.221-4.919-10.951c.001.004-9.363 1.433-14.441-11.264z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M403.196 138.482c4.682 6.824 11.188 13.013 30.073 18.884 18.885 5.871 23.933 6.744 33.829 14.749 0 0 1.88 1.985 2.6 5.167.845 3.738-4.919 14.52-4.919 14.52s.555-2.539-2.936-7.458c-3.491-4.919-24.122-13.806-34.913-16.504-10.792-2.698-29.439-15.215-24.28-24.598l.546-4.76zm63.885 33.604c.008.01.011.02.019.03l-.034-.039.015.009z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M466.604 195.295s.476 3.452-2.38 6.428c-2.857 2.976-4.879 5.118-4.761 7.617 0 0-4.285-3.094-3.571-9.998 0 0-5.594 4.642-14.045.119 0 0 .833-8.45 11.784-9.522 0 0-4.285-3.332 1.31-8.45 0 0 .65 2.289 5.713 3.452 4.404 1.012 12.239-4.511 6.445-12.824 9.979 11.276 4.861 19.012-.495 23.178zm-67.494-63.082s2.413 3.945 8.689 7.776c7.538 4.602 8.213 6.744 8.213 6.744l-5.118-.119s6.547 3.571 8.332 8.094c0 0-2.738.476-5.832-.358 0 0 2.499 2.261 1.31 9.522h-12.736l-2.858-31.659z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M373.758 164.825v-30.469s-10.342 17.693-19.275 30.469h19.275z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M364.862 133.72c-2.539 4.602-10.474 19.758-29.359 25.63-18.885 5.871-22.337 4.761-32.234 12.765 0 0-1.88 1.985-2.6 5.167-.845 3.738 4.919 14.52 4.919 14.52s-.555-2.539 2.936-7.458c3.491-4.919 24.005-14.324 34.913-16.504 15.085-3.016 28.733-19.202 26.511-29.676-2.22-10.474-5.086-4.444-5.086-4.444z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M303.288 172.086c-.008.01-.011.02-.019.03l.034-.039-.015.009zm.476 23.209s-.476 3.452 2.38 6.428c2.857 2.976 4.879 5.118 4.761 7.617 0 0 4.285-3.094 3.571-9.998 0 0 5.594 4.642 14.045.119 0 0-.833-8.45-11.784-9.522 0 0 4.285-3.332-1.309-8.45 0 0-.65 2.289-5.713 3.452-4.404 1.012-12.239-4.511-6.445-12.824-9.98 11.276-4.862 19.012.494 23.178z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M330.117 246.078s2.698 12.14 2.857 24.677c0 0 11.823.397 17.536-8.49 0 0-11.426-5.951-17.536-17.457l-2.857 1.27z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M327.578 219.258c-.476-5.713 2.063-20.154 13.647-30.628l.284-12.826s-3.451.359-6.511 3.038l-6.547 10.145-6.07 22.972 5.197 7.299z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M327.894 223.384s0 12.22 5.078 21.424l-2.857 1.269s-10.236-8.054-12.378-24.598c0 0-9.165 6.07-12.537-6.348 0 0 9.839 3.968 13.013-5.078 2.863-8.162 5.758-23.02 16.783-31.212-5.241 8.055-13.133 28.673-7.023 35.973 1.618 1.933 6.269 3.571 11.359 1.397-.331 4.061-2.268 10.266-11.438 7.173z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M329.377 248.245l-1.672-3.072a1.109 1.109 0 01.444-1.503l3.051-1.658a1.107 1.107 0 011.502.444l1.672 3.072c.292.537.094 1.21-.444 1.503l-3.051 1.658a1.108 1.108 0 01-1.502-.444z",
    fill: "#FFCE5A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M432.635 246.078s-2.698 12.14-2.857 24.677c0 0-11.823.397-17.536-8.49 0 0 11.426-5.951 17.536-17.457l2.857 1.27zm2.539-26.82c.476-5.713-2.063-20.154-13.647-30.628l-.284-12.826s3.451.359 6.511 3.038l6.547 10.145 6.07 22.972-5.197 7.299z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M423.419 216.212c5.09 2.174 9.741.536 11.359-1.397 6.11-7.3-1.782-27.918-7.023-35.973 11.026 8.192 13.919 23.05 16.783 31.212 3.174 9.046 13.013 5.078 13.013 5.078-3.372 12.418-12.537 6.348-12.537 6.348-2.143 16.544-12.378 24.598-12.378 24.598l-2.857-1.269c5.078-9.205 5.078-21.425 5.078-21.425-9.17 3.093-11.106-3.112-11.438-7.172z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M433.374 248.245l1.672-3.072a1.109 1.109 0 00-.444-1.503l-3.051-1.658a1.107 1.107 0 00-1.502.444l-1.672 3.072a1.109 1.109 0 00.444 1.503l3.051 1.658c.538.292 1.21.093 1.502-.444z",
    fill: "#FFCE5A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M343.289 161.016a3.81 3.81 0 00-3.809 3.809v41.896c0 11.426 3.809 53.322 41.896 68.557 38.088-15.235 41.896-57.131 41.896-68.557v-41.896a3.81 3.81 0 00-3.809-3.809h-76.174z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M379.067 161.016l-36.121 69.231a83.842 83.842 0 003.446 9.864l34.984-67.053 34.984 67.053a83.969 83.969 0 003.446-9.864l-36.121-69.231h-4.618z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M416.359 240.112l-34.984-67.053-34.984 67.053c5.762 13.639 16.188 27.649 34.984 35.167 18.796-7.519 29.223-21.529 34.984-35.167z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M395.539 244.451l2.304 1.105c-.966 1.428-2.977 3.738-6.823 5.831-2.905 1.581-5.713 3.452-7.741 4.885v-31.433l9.522-.979v-3.809l-9.522-.979v-4.734a1.905 1.905 0 00-1.905-1.905c-.897 0-1.614.633-1.816 1.469-.633-.454-1.367-.777-2.202-.777a3.871 3.871 0 00-3.866 3.866c0 1.003.407 1.9 1.037 2.589l-4.578.471v3.809l9.522.979v31.433c-2.027-1.433-4.835-3.305-7.741-4.885-3.847-2.092-5.857-4.403-6.823-5.831l2.304-1.105-8.689-11.069v15.235l2.929-1.405c1.159 1.867 3.608 4.881 8.46 7.519 4.059 2.209 7.998 5.079 9.559 6.254l1.905 1.476 1.905-1.476c1.561-1.175 5.501-4.045 9.559-6.254 4.852-2.638 7.301-5.652 8.46-7.519l2.929 1.405v-15.235l-8.689 11.069zm-18.183-25.496a1.963 1.963 0 01-1.962-1.962c0-1.082.879-1.962 1.962-1.962a1.963 1.963 0 010 3.924z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M384.318 210.53h-5.885a2.77 2.77 0 01-2.771-2.771v-9.694a2.77 2.77 0 012.771-2.771h5.885a2.77 2.77 0 012.771 2.771v9.694a2.77 2.77 0 01-2.771 2.771z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M408.037 161.016c-7.617-11.426-7.617-34.279-7.617-34.279s0-15.235-19.043-15.235c-9.647 0-14.398 3.91-16.746 7.767-9.14 3.672-13.724 11.276-13.724 11.276 3.896 1.949 7.339 2.877 10.463 3.115 6.209 7.389 8.275 14.524 8.824 19.656-3.576 3.652-5.559 12.46-.243 19.125 0 0 11.267-2.618 20.779-11.426h17.306v.001h.001z",
    fill: "#B49B91"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#9B8278"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M390.728 161.016h14.215c-.715-7.022-7.619-5.891-14.215 0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M404.588 153.826c-4.163-11.818-4.169-27.088-4.169-27.088s-.001-.248-.04-.675c-4.959-.673-10.035-.308-19.956 3.532-10.563 4.088-15.734 4.205-19.055 4.067 6.209 7.389 8.275 14.524 8.824 19.656l.153 8.096s5.951.873 19.043-6.666c6.532-3.76 12.068-4.082 15.2-.922zm-20.277-28.754c7.725-1.931 12.654-1.732 15.83-.605-.851-4.243-4.349-12.964-18.765-12.964-9.647 0-14.398 3.91-16.746 7.767l-5.789 8.103s7.24 2.256 25.47-2.301z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M368.789 109.837c.75.748 2.988 6.144 2.527 6.946-.297.515-6.257 1.997-7.223 1.241-.862-.674-1.87-6.486-1.293-7.157.523-.606 5.363-1.654 5.989-1.03z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M376.453 109.549c.692.793 2.26 6.068 1.639 6.741-.399.433-7.042.957-7.965.127-.822-.74-1.004-6.227-.278-6.761.656-.485 6.027-.769 6.604-.107z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M383.706 109.349c.717.747 2.353 5.707 1.711 6.337-.413.405-7.284.882-8.241.099-.853-.698-1.054-5.852-.305-6.353.681-.453 6.237-.706 6.835-.083z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M391.077 109.694c.635.815 1.831 6.019 1.165 6.623-.428.387-7.09.405-7.951-.465-.768-.776-.568-6.08.193-6.542.687-.418 6.063-.297 6.593.384zm15.212 3.154c.491.909.444 5.743-.313 6.228-.487.311-6.485-.758-7.191-1.758-.63-.892.444-6.09 1.271-6.421.746-.299 5.823 1.191 6.233 1.951z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M399.298 110.786c.601.828 1.059 5.681.334 6.194-.466.33-7.33-.234-8.162-1.131-.743-.801-.2-5.803.613-6.175.738-.338 6.713.422 7.215 1.112z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#9B8278",
    cx: 368.363,
    cy: 97.777,
    r: 2.59
  })));
}

function SvgPr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 67.366H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v58.263z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 67.366h512v67.09H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 134.455h512v67.09H0zm503.172 201.269H8.828A8.829 8.829 0 010 326.896v-58.262h512v58.262a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 201.545h512v67.09H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59l244.341-160.086c3.966-2.599 3.966-8.412 0-11.009L3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M90.183 127.026l9.213 27.623 29.118.226c3.769.029 5.333 4.84 2.301 7.08l-23.424 17.298 8.783 27.763c1.138 3.594-2.955 6.568-6.023 4.375l-23.69-16.932-23.69 16.932c-3.066 2.193-7.159-.781-6.023-4.375l8.783-27.763-23.424-17.298c-3.032-2.24-1.47-7.05 2.301-7.08l29.118-.226 9.213-27.623c1.193-3.577 6.251-3.577 7.444 0z",
    fill: "#F5F5F5"
  })));
}

function SvgPs(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59l202.841-161.015c2.946-2.338 2.946-6.812 0-9.151L3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z",
    fill: "#FF4B55"
  })));
}

function SvgPt(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M185.38.276H8.828A8.828 8.828 0 000 9.103v317.793a8.829 8.829 0 008.828 8.828H185.38V.276z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FFE15A",
    cx: 185.446,
    cy: 168,
    r: 79.38
  }), /*#__PURE__*/react.createElement("path", {
    d: "M211.932 141.517v35.31c0 14.603-11.88 26.483-26.483 26.483s-26.483-11.88-26.483-26.483v-35.31h52.966zm8.827-17.655h-70.621a8.829 8.829 0 00-8.828 8.828v44.138c0 24.376 19.762 44.138 44.138 44.138 24.376 0 44.138-19.762 44.138-44.138V132.69a8.827 8.827 0 00-8.827-8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M211.932 141.517v35.31c0 14.603-11.88 26.483-26.483 26.483s-26.483-11.88-26.483-26.483v-35.31h52.966",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(145 128)",
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 5.069,
    cy: 4.69,
    r: 4.414
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 75.69,
    cy: 4.69,
    r: 4.414
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 5.069,
    cy: 40,
    r: 4.414
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 75.69,
    cy: 40,
    r: 4.414
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 40.379,
    cy: 4.69,
    r: 4.414
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 66.884,
    cy: 72.552,
    r: 4.414
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 14.404,
    cy: 72.552,
    r: 4.414
  })), /*#__PURE__*/react.createElement("path", {
    d: "M191.149 165.762v7.602a5.709 5.709 0 01-5.702 5.702 5.709 5.709 0 01-5.702-5.702v-7.602h11.404m0-18.022v7.602a5.709 5.709 0 01-5.702 5.702 5.709 5.709 0 01-5.702-5.702v-7.602h11.404m0 36.229v7.602a5.709 5.709 0 01-5.702 5.702 5.709 5.709 0 01-5.702-5.702v-7.602h11.404m15.357-18.207v7.602a5.709 5.709 0 01-5.702 5.702 5.709 5.709 0 01-5.702-5.702v-7.602h11.404m-30.712 0v7.602a5.709 5.709 0 01-5.702 5.702 5.709 5.709 0 01-5.702-5.702v-7.602h11.404",
    fill: "#41479B"
  })));
}

function SvgPw(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#3CC8FF"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FFE15A",
    cx: 255.999,
    cy: 168,
    r: 105.931
  })));
}

function SvgPy(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256 123.862c-24.376 0-44.138 19.761-44.138 44.138s19.762 44.138 44.138 44.138c24.376 0 44.138-19.761 44.138-44.138S280.376 123.862 256 123.862zm0 77.426c-18.383 0-33.288-14.903-33.288-33.288 0-18.385 14.904-33.288 33.288-33.288 18.384 0 33.288 14.904 33.288 33.288 0 18.384-14.905 33.288-33.288 33.288z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#41479B",
    cx: 256,
    cy: 168,
    r: 15.31
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256.998 156.403l2.467 7.4 7.799.061c1.01.008 1.429 1.297.616 1.897l-6.274 4.633 2.353 7.436c.305.963-.791 1.759-1.613 1.172L256 174.467l-6.346 4.535c-.822.587-1.918-.21-1.613-1.172l2.353-7.436-6.274-4.633c-.812-.6-.394-1.889.616-1.897l7.799-.061 2.467-7.4c.32-.958 1.676-.958 1.996 0z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M284.96 168.356s.875-4.046-3.43.809c0 0 .063-1.382-.059-2.521.947-1.025 2.121-3.267 1.845-8.052 0 0-.675-4.084-2.891 2.013 0 0-.605-1.799-1.248-2.795.534-1.108.947-3.125-.334-6.947 0 0-1.497-3.27-1.963 2.348 0 0-1.229-1.838-2.028-2.29.154-.906.033-2.462-1.775-4.981 0 0-1.804-2.02-.893 2.126 0 0-1.651-1.337-2.179-1.18-.274-.792-1.067-2.131-3.73-3.893 0 0-2.307-1.263.34 2.034 0 0-2.34-.928-2.312-.396.028.532 1.159 1.513 2.088 1.951 0 0-3.432.356-2.023 1.121 0 0 3.481 1.201 5.572.045.168.609.509 1.292 1.015 1.783 0 0-4.084-.793-2.978.433 0 0 3.063 2.251 6.09 1.906-.014.834.238 1.911.681 2.718 0 0-4.87-2.603-3.947-.616 0 0 2.912 3.895 6.786 4.74-.159.866-.156 1.913.054 2.78 0 0-4.622-4.365-4.199-1.878 0 0 1.932 5.122 5.848 7.298-.319.65-.58 1.377-.676 2.056 0 0-2.692-5.761-3.213-3.292 0 0-.089 5.754 2.983 9.195-.654.544-1.295 1.305-1.688 2.052 0 0-.589-6.329-1.913-4.182 0 0-1.83 4.796-.591 8.929-.819.242-1.711.689-2.371 1.224 0 0 1.953-6.051-.11-4.599 0 0-3.674 3.975-3.955 8.447-.974-.02-2.293.331-3.249.902 0 0 2.795-5.709.545-4.567 0 0-4.008 3.274-5.043 7.523-.948.541-2.558 1.46-4.167 2.372a1018.27 1018.27 0 01-2.622-1.525l.026-.042-9.111-7.638.181 2.498-4.575-8.182-.565 2.784-1.498-9.045-1.329 1.335.514-8.438-1.732.934 3.146-6.276-1.478.417 3.887-3.726-2.055.175 4.914-2.231-1.796-.276 4.797-2.429-2.067-.1 6.219-2.152-1.139-.996 5.383-1.588-6.45-.492 1.837-2.261-4.921 2.518.706-3.404-4.305 4.433.748-3.104-4.029 4.009.26-3.026-3.983 6.746-.514-3.019-3.31 7.574-.911-3.3-1.478 9.393-1.233-1.398 1.621 9.06-2.056-1.542 3.769 8.138s-2.741-1.199-3.084-1.199c-.343 0 6.553 7.004 6.553 7.004l-3.598-.385 6.952 4.888-2.583.638 5.783 2.248-1.414 1.094 11.972.856s1.154.961 2.724 2.074c-.829.468-1.558.875-2.009 1.122a1.69 1.69 0 01-1.468.073 282.982 282.982 0 00-3.574-1.466s.077 3.403 3.62 3.488c1.455.033 3.439-.893 5.284-1.988 1.889 1.178 3.974 2.217 5.48 2.181 3.466-.085 3.542-3.488 3.542-3.488-.776.318-2.386.99-3.497 1.466a1.62 1.62 0 01-1.436-.073c-.491-.275-1.299-.736-2.225-1.271a47.747 47.747 0 002.296-1.652c.872.685 3.368 1.889 8.946-.205 0 0 3.7-1.858-2.781-2.163 0 0 1.203-.883 2.015-1.721 1.063.547 3.69 1.195 8.684-1.547 0 0 3.398-2.367-3.06-1.745 0 0 .862-.84 1.54-1.694 1.114.125 3.865-.173 7.513-4.839 0 0 2.19-3.513-3.5-.397 0 0 .736-1.754.909-2.927 1.262-.608 3.179-2.26 4.683-6.812z",
    fill: "#64C86E"
  })));
}

function SvgQa(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M238.345 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h229.517v335.449z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276h-335.8c.233 0 .465.034.689.104l53.386 16.312c2.223.679 2.222 3.828-.002 4.505L175.11 35.305c-2.225.678-2.226 3.826-.002 4.505l46.34 14.162c2.223.679 2.222 3.828-.002 4.504L175.11 72.585c-2.225.678-2.226 3.826-.002 4.505l46.34 14.162c2.223.679 2.222 3.828-.002 4.504l-46.322 14.103c-2.226.679-2.226 3.829 0 4.506l46.322 14.103c2.225.678 2.226 3.826.002 4.505l-46.34 14.162c-2.223.68-2.222 3.829.002 4.505l46.336 14.108c2.225.676 2.226 3.826.002 4.505l-46.34 14.162c-2.223.68-2.222 3.828.002 4.505l46.336 14.108c2.225.676 2.226 3.826.002 4.504l-46.34 14.162c-2.223.68-2.222 3.829.002 4.505l46.335 14.109c2.225.676 2.226 3.826.002 4.504l-46.339 14.161c-2.223.68-2.222 3.828.002 4.505l46.322 14.105c2.226.676 2.226 3.828 0 4.504l-46.322 14.105c-2.225.676-2.226 3.826-.002 4.504l46.34 14.162c2.223.679 2.222 3.828-.002 4.504l-53.386 16.255a2.35 2.35 0 01-.688.103h335.801a8.829 8.829 0 008.828-8.828V9.103a8.83 8.83 0 00-8.829-8.827z",
    fill: "#873250"
  })));
}

function SvgRo(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h161.839v335.449z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.828 8.828 0 01-8.828 8.827z",
    fill: "#FF4B55"
  })));
}

function SvgRs(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M173.021 112.07h-63.559l-2.648-15.89h68.855z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFD350",
    d: "M108.8 108.097l.662 3.973h63.559l.662-3.973z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M139.917 59.101h2.648v10.593h-2.648z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M137.269 61.749h7.945v2.648h-7.945zm35.959 39.727a2.648 2.648 0 01-2.49-3.551l5.61-15.481a2.807 2.807 0 00-.18-2.319c-.209-.375-.695-1.035-1.624-1.234-6.839-1.453-20.096-3.897-32.023-3.897h-2.558c-11.927 0-25.184 2.444-32.026 3.9-.926.196-1.414.856-1.622 1.231a2.803 2.803 0 00-.179 2.319l5.608 15.481a2.648 2.648 0 01-1.587 3.393 2.656 2.656 0 01-3.392-1.588l-5.61-15.481a8.104 8.104 0 01.526-6.694c1.097-1.978 2.973-3.38 5.149-3.843 7.047-1.5 20.718-4.017 33.131-4.017h2.558c12.413 0 26.084 2.516 33.128 4.013a7.757 7.757 0 015.152 3.846 8.107 8.107 0 01.527 6.694l-5.611 15.481a2.642 2.642 0 01-2.487 1.747z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M141.251 99.159a2.647 2.647 0 01-2.648-2.648V74.994a2.647 2.647 0 115.296 0v21.517a2.647 2.647 0 01-2.648 2.648z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M159.559 101.476a2.649 2.649 0 01-2.596-3.186l3.212-15.481c.418-2.017-.236-3.784-.608-4.094-3.672-1.347-11.039-3.722-17.594-3.722h-1.465c-6.554 0-13.921 2.375-17.73 3.791-.235.241-.889 2.007-.472 4.024l3.212 15.481a2.648 2.648 0 01-2.055 3.132c-1.434.277-2.836-.623-3.13-2.056l-3.212-15.481c-.8-3.859.428-8.801 3.808-10.063 5.063-1.882 12.565-4.125 19.578-4.125h1.465c7.014 0 14.516 2.242 19.576 4.122 3.383 1.265 4.611 6.207 3.811 10.066l-3.212 15.481a2.644 2.644 0 01-2.588 2.111z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#FFD350",
    d: "M107.476 100.152h67.531l.662-3.972h-68.855z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M90.924 112.07a2.649 2.649 0 00-2.648 2.648v92.486c0 29.365 23.713 53.17 52.966 53.17s52.966-23.805 52.966-53.17v-92.486a2.649 2.649 0 00-2.648-2.648H90.924z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M146.538 199.463l5.297-13.241-10.593 2.648-10.593-2.648 5.297 13.241-13.241 45.021s7.945 5.297 18.538 5.297 18.538-5.297 18.538-5.297l-13.243-45.021z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M122.061 210.135l-4.673 1.169 10.279-18.501-4.63-2.571-12.485 22.472H98.869v5.297h5.69l-7.344 5.875 3.308 4.138 6.239-4.992-2.461 7.381 5.025 1.676 4.837-14.511 9.183-2.296z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M122.703 138.552l-12.089-6.045a5.297 5.297 0 01-2.77-6.022l.684-2.735a3.007 3.007 0 00-5.266-2.607 44.22 44.22 0 00-9.69 27.625v55.991s11.059-2.211 21.048-16.742c1.834-2.668 4.853-4.247 8.072-4.412l-5.286 15.857L128 202.111l9.269-11.03-14.566-52.529z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M160.422 210.135l4.673 1.169-10.279-18.501 4.63-2.571 12.484 22.472h11.684v5.297h-5.691l7.345 5.875-3.308 4.138-6.239-4.992 2.461 7.381-5.026 1.676-4.836-14.511-9.183-2.296z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M159.779 138.552l12.089-6.045a5.297 5.297 0 002.77-6.022l-.684-2.735a3.007 3.007 0 015.266-2.607 44.22 44.22 0 019.69 27.625v55.991s-11.059-2.211-21.048-16.742c-1.834-2.668-4.853-4.247-8.072-4.412l5.286 15.857-10.593 2.648-9.269-11.03 14.565-52.528z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M125.352 120.014H112.11l3.973 5.297 9.269 2.648-5.297 2.648H128zm31.779 0h13.241l-3.972 5.297-9.269 2.648 5.297 2.648h-7.945z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M158.996 117.938l-12.458 2.076-5.297 10.593-5.297-10.593-12.458-2.076c-1.428-.238-2.524 1.245-1.876 2.54l6.39 12.778-5.297 5.297h37.076l-5.297-5.297 6.389-12.778c.648-1.296-.447-2.779-1.875-2.54z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FFBE50",
    cx: 141.241,
    cy: 97.335,
    r: 3.972
  }), /*#__PURE__*/react.createElement("ellipse", {
    fill: "#41479B",
    cx: 141.186,
    cy: 106.825,
    rx: 3.139,
    ry: 2.207
  }), /*#__PURE__*/react.createElement("ellipse", {
    fill: "#FF4B55",
    cx: 125.517,
    cy: 106.825,
    rx: 3.139,
    ry: 2.207
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(106 104)",
    fill: "#41479B"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: 3.848,
    cy: 2.825,
    rx: 3.139,
    ry: 2.207
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 66.524,
    cy: 2.825,
    rx: 3.139,
    ry: 2.207
  })), /*#__PURE__*/react.createElement("ellipse", {
    fill: "#FF4B55",
    cx: 156.855,
    cy: 106.825,
    rx: 3.139,
    ry: 2.207
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(104 93)",
    fill: "#FFBE50"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 55.647,
    cy: 4.335,
    r: 3.972
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 70.168,
    cy: 4.335,
    r: 3.972
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 18.858,
    cy: 4.335,
    r: 3.972
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 4.326,
    cy: 4.335,
    r: 3.972
  })), /*#__PURE__*/react.createElement("path", {
    d: "M145.803 74.994a5.239 5.239 0 00.735-2.648 5.297 5.297 0 10-10.594 0c0 .97.279 1.867.735 2.648h9.124z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M141.241 192.842c-10.953 0-19.862-8.909-19.862-19.862v-35.752h39.724v35.752c0 10.953-8.909 19.862-19.862 19.862z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M159.779 138.552v34.428c0 10.238-8.3 18.538-18.538 18.538s-18.538-8.3-18.538-18.538v-34.428h37.076zm2.649-2.648h-42.372v37.076c0 11.682 9.504 21.186 21.186 21.186s21.186-9.504 21.186-21.186v-37.076z",
    fill: "#A54B50"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M137.269 191.08c1.281.28 2.607.437 3.972.437 1.365 0 2.691-.158 3.972-.437v-52.529h-7.945l.001 52.529z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M122.703 160.397h37.076v7.945h-37.076z"
  }))));
}

function SvgRu(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 112.088h512V223.9H0z"
  })));
}

function SvgRw(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168zM0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 168h512v83.862H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828 335.724h494.345a8.829 8.829 0 008.828-8.828v-75.034H0v75.034a8.828 8.828 0 008.828 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(361 17)",
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M97.211 73.12l36.134-5.982-36.134-5.982 31.094-19.354-35.672 8.301 21.321-29.78-29.78 21.321 8.301-35.672-19.354 31.094L67.138.931l-5.982 36.134L41.802 5.971l8.301 35.672-29.78-21.321 21.321 29.78-35.672-8.301 31.094 19.354L.931 67.138l36.134 5.982L5.971 92.474l35.672-8.301-21.321 29.78 29.78-21.321-8.301 35.672L61.155 97.21l5.983 36.135 5.982-36.134 19.354 31.094-8.301-35.672 29.78 21.321-21.321-29.78 35.672 8.301L97.211 73.12zM67.138 89.207c-12.189 0-22.069-9.88-22.069-22.069 0-12.189 9.88-22.069 22.069-22.069 12.189 0 22.069 9.88 22.069 22.069 0 12.189-9.88 22.069-22.069 22.069z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 67.138,
    cy: 67.138,
    r: 16.552
  }))));
}

function SvgSa(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M105.94 114.278c.87 5.577 4.241 7.327 7.172 7.098 3.456-.268 6.487-3.428 6.487-6.766V95.472c0-.958.78-1.74 1.74-1.74s1.74.781 1.74 1.74v19.22a6.944 6.944 0 003.057 5.76 6.953 6.953 0 006.487.699l1.739-.695c.16 16.065-.817 30.184-.835 30.443a3.479 3.479 0 003.475 3.728 3.48 3.48 0 003.468-3.232c.081-1.131 1.153-16.594.832-33.715l1.052-.42a3.49 3.49 0 012.845.119 9.94 9.94 0 0011.474-1.863l.627-.626a10.388 10.388 0 002.52-10.684l-2.963-8.889a3.494 3.494 0 004.136-1.77 3.48 3.48 0 00-1.556-4.669l-6.959-3.48a3.48 3.48 0 00-4.858 4.213l5.599 16.798a3.464 3.464 0 01-.84 3.561l-.626.626a2.988 2.988 0 01-3.444.557c-2.255-1.127-4.823-1.338-7.232-.724-.489-11.169-1.692-22.291-4.254-29.98a3.476 3.476 0 00-4.403-2.199 3.476 3.476 0 00-2.2 4.401c2.507 7.519 3.599 18.978 3.987 30.372l-4.166 1.666v-19.22c0-4.798-3.903-8.7-8.7-8.7-4.797 0-8.7 3.901-8.7 8.7v16.845l-3.55-17.535a3.465 3.465 0 00-4.1-2.722 3.48 3.48 0 00-2.72 4.102l3.669 18.119zm6.7-29.245a3.479 3.479 0 003.48-3.48v-3.48a3.48 3.48 0 10-6.96 0v3.48a3.48 3.48 0 003.48 3.48zm34.797-3.48h3.48a3.48 3.48 0 100-6.96h-3.48a3.479 3.479 0 00-3.48 3.48 3.479 3.479 0 003.48 3.48z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M124.768 127.286l-17.399 10.44a3.48 3.48 0 103.582 5.967l17.399-10.44a3.48 3.48 0 10-3.582-5.967z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M171.682 133.441l.082-.055c.292 1.176.793 2.314 1.606 3.27 1.414 1.665 3.534 2.502 5.93 2.304 3.399-.248 5.709-1.801 7.239-3.806.233.16.478.306.734.435 1.881.948 4.056.877 6.127-.198 5.259-2.708 6.392-8.974 6.232-12.25-.094-1.91-1.718-3.258-3.623-3.296a3.492 3.492 0 00-3.33 3.613c.002.044.079 4.173-2.445 5.706-.412-.574-.9-1.866-1.084-2.933-.294-1.791-1.939-3.038-3.709-2.895a3.49 3.49 0 00-3.204 3.469c-.002.506-.114 4.971-3.561 5.345-.401-.547-.408-2.851-.013-4.554a3.478 3.478 0 00-5.343-3.683l-1.942 1.321c-.922-20.18-3.047-43.695-3.073-43.996a3.468 3.468 0 00-3.78-3.15 3.48 3.48 0 00-3.151 3.783c.03.322 2.487 27.529 3.245 48.306-.178.169-.361.354-.535.516-1.376-3.469-4.104-5.654-7.617-5.987-4.958-.438-10.33 2.936-12.256 7.755-1.66 4.146-.615 8.221 2.66 10.378 2.355 1.553 5.909 2.042 10.378.476-1.091 3.833-3.078 7.721-5.66 10.728-2.313 2.695-6.175 5.804-11.117 5.665-2.877-.113-5.087-1.054-6.758-2.882-4.029-4.401-3.682-12.366-3.679-12.451a3.48 3.48 0 00-3.283-3.657c-1.929-.204-3.561 1.363-3.667 3.283-.024.441-.529 10.909 5.464 17.491 2.95 3.245 6.869 4.982 11.649 5.169.233.01.466.013.7.013 5.821 0 11.469-2.855 15.968-8.098 4.232-4.928 7.106-11.622 7.968-17.836-.011 11.904-7.185 25.33-16.696 31.245-4.039 2.508-10.336 4.771-17.429 1.274-8.744-4.316-7.702-14.31-7.656-14.718a3.478 3.478 0 10-6.905-.863c-.078.622-1.75 15.292 11.482 21.82 3.399 1.678 6.953 2.511 10.535 2.511 4.601 0 9.245-1.376 13.647-4.115 11.58-7.198 19.985-22.836 19.985-37.183a272.016 272.016 0 00-.115-7.27zm-20.983 3.587c-.622-.412-.136-1.726-.031-1.988.733-1.835 3.025-3.422 4.856-3.422.094 0 .189.003.28.013.445.041 1.626.153 2.134 2.78.054.279.1.564.136.856-3.878 2.278-6.478 2.35-7.375 1.761zm-36.302 32.005a3.486 3.486 0 00-4.757 1.234c-.16.268-.372.561-.588.825a5.713 5.713 0 01-.113-.286c-1.451-3.871-.418-9.834.104-11.806a3.484 3.484 0 00-2.468-4.255c-1.852-.476-3.757.605-4.255 2.461-.253.941-2.392 9.389.102 16.043 1.597 4.255 4.049 5.329 5.826 5.474.158.013.314.02.469.02 3.746 0 6.239-3.775 6.932-4.971a3.473 3.473 0 00-1.252-4.739z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M178.612 105.911c.753 0 1.511-.242 2.147-.744l17.544-13.773c.242-.19.397-.439.574-.673 2.527-1.524 4.236-4.268 4.236-7.427 0-4.798-3.903-8.7-8.7-8.7-4.797 0-8.7 3.901-8.7 8.7 0 2.685 1.248 5.058 3.164 6.655l-12.417 9.748a3.478 3.478 0 002.152 6.214zm15.802-24.358c.96 0 1.74.781 1.74 1.74s-.78 1.74-1.74 1.74-1.74-.781-1.74-1.74.78-1.74 1.74-1.74zm-4.119 21.059a3.474 3.474 0 00-4.403 2.199c-.372 1.114-2.055 6.855 1.356 10.262 1.324 1.325 3.063 1.988 5.199 1.984 1.427 0 3.031-.292 4.807-.887a3.476 3.476 0 002.2-4.401 3.474 3.474 0 00-4.403-2.199c-1.944.646-2.766.541-2.841.608-.205-.516-.07-2.07.287-3.181a3.472 3.472 0 00-2.202-4.385zm39.826-14.386a3.48 3.48 0 004.316-2.366l2.03-6.959a3.481 3.481 0 00-2.365-4.316 3.482 3.482 0 00-4.316 2.365l-2.03 6.959a3.48 3.48 0 002.365 4.317zm-20.283-.407a3.475 3.475 0 004.76-1.246 3.48 3.48 0 00-1.247-4.761c-.7-.408-.605-1.56-.579-1.788.104-.914.649-2.029 1.597-2.324a3.479 3.479 0 002.289-4.356 3.487 3.487 0 00-4.359-2.291c-3.469 1.08-5.998 4.292-6.443 8.18-.412 3.618 1.114 6.908 3.982 8.586zm-27.604 56.37a3.479 3.479 0 00-.653 6.898c.183.268.652 1.19.652 3.541a3.48 3.48 0 106.96 0c.001-10.32-6.675-10.439-6.959-10.439zm59.036-14.409c.437.072.872.105 1.309.105 2.734 0 5.496-1.379 8.232-4.115a3.478 3.478 0 10-4.92-4.92c-2.081 2.083-3.201 2.127-3.488 2.062-.664-.095-1.266-.962-1.4-1.199a3.479 3.479 0 10-6.203 3.153c.215.432 2.224 4.224 6.47 4.914zm59.149-24.454c-.022-.054-.043-.105-.06-.153-.617-1.807-2.588-2.79-4.392-2.175a3.476 3.476 0 00-2.202 4.401c.271.815 1.822 4.907 5.662 5.423.257.034.512.051.765.051 2.411 0 4.672-1.56 6.73-4.646a3.48 3.48 0 00-.966-4.825 3.478 3.478 0 00-4.825.966c-.275.411-.513.724-.712.958z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M293.588 168.547c0-14.839-.652-28.76-1.558-40.958 4.941 8.569 9.386 17.228 12.218 24.782a3.48 3.48 0 006.516-2.446c-4.405-11.742-12.321-25.726-20.124-38.14-1.902-18.745-4.032-30.643-4.069-30.855-.343-1.892-2.151-3.17-4.045-2.801a3.479 3.479 0 00-2.802 4.044c.028.151 1.124 6.28 2.435 16.595a571.019 571.019 0 00-7.242-10.492l.17.054a3.475 3.475 0 004.403-2.199 3.477 3.477 0 00-2.2-4.401l-10.44-3.48a3.46 3.46 0 00-3.923 1.265c-.237.33-.399.692-.509 1.066-2.083-1.54-4.755-2.792-7.263-1.742-1.517.629-3.325 2.212-3.325 6.191 0 3.055 1.165 6.358 2.401 9.858 2.049 5.804 3.332 10.072 1.162 12.108-1.199 1.124-2.398 1.549-3.566 1.254-2.146-.544-4.27-3.402-5.685-7.646-.062-.184-.19-.318-.278-.483.732-5.39.413-11.884-1.062-19.253a3.469 3.469 0 00-4.095-2.729 3.478 3.478 0 00-2.729 4.095c2.272 11.363 1.59 20.633-1.823 24.797-1.32 1.611-2.974 2.358-5.204 2.358-.705 0-1.186-.224-1.665-.775-2.745-3.164-2.734-13.372-1.848-19.615a3.48 3.48 0 00-3.446-3.969c-5.987 0-8.257 6.81-10.261 12.818-.878 2.641-2.516 7.551-3.658 8.061-2.106 0-3.468-6.185-3.48-10.443a3.481 3.481 0 00-3.48-3.473h-.006a3.475 3.475 0 00-3.475 3.476c0 8.026 2.734 17.399 10.44 17.399 5.738 0 8.062-6.253 10.008-12.064.338 4.621 1.382 9.409 3.947 12.366 1.803 2.08 4.196 3.177 6.924 3.177 4.296 0 7.955-1.696 10.585-4.904.477-.58.887-1.247 1.292-1.92 2.02 2.872 4.499 4.767 7.292 5.472.819.207 1.643.312 2.458.312 2.686 0 5.311-1.108 7.578-3.239.471-.444.803-.927 1.162-1.404.851.243 1.714.387 2.571.387 2.819 0 5.533-1.135 7.217-2.216a3.472 3.472 0 001.054-4.785 3.49 3.49 0 00-4.791-1.084c-.03.014-2.354 1.35-3.939 1.036.004-3.815-1.376-7.866-2.636-11.435-.717-2.033-1.453-4.115-1.8-5.817.287.242.567.493.818.737a3.477 3.477 0 004.919 0c.225-.225.355-.498.505-.761 3.607 4.969 11.026 15.411 18.657 27.448 1.457 14.795 2.735 33.668 2.735 54.368a3.48 3.48 0 003.48 3.48 3.472 3.472 0 003.48-3.475zm3.479-76.555a3.48 3.48 0 106.96 0c0-4.095-3.204-10.711-3.847-11.996a3.479 3.479 0 10-6.225 3.113c1.255 2.511 3.112 7.068 3.112 8.883zm-15.833 76.935c-1.706-.87-3.802-.18-4.671 1.533a9.975 9.975 0 01-1.442 2.066c-.154-1.383.214-4.146.916-6.436a3.484 3.484 0 00-1.536-4.003 3.474 3.474 0 00-4.252.52l-6.959 6.959a3.478 3.478 0 104.92 4.92l.177-.177c.301 1.397.877 2.671 1.863 3.657 1.305 1.305 2.882 1.995 4.521 1.995.318 0 .637-.028.957-.078 3.942-.639 6.396-4.985 7.054-6.301a3.475 3.475 0 00-1.548-4.655z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M279.885 140.926H255.36c.217-.866.441-1.693.67-2.477 9.78-2.033 15.593-5.19 17.302-9.402.591-1.461 1.208-4.414-1.309-7.809-2.269-3.059-5.471-4.431-8.797-3.752-4.945 1.002-9.351 6.33-12.512 14.86-9.823 1.682-16.111 5.208-20.092 8.687-1.412-14.26-6.947-22.731-7.217-23.134a3.477 3.477 0 00-4.825-.966 3.481 3.481 0 00-.966 4.825c.063.095 6.375 9.749 6.375 25.908 0 15.883-12.665 27.838-20.878 27.838-3.907 0-5.618-4.644-6.369-8.572 8.042-5.636 15.138-12.158 16.705-18.424 2.121-8.479-.548-14.728-2.314-18.863a39.61 39.61 0 01-.258-.605c.075.068.146.139.217.207a3.478 3.478 0 104.919-4.92c-2.034-2.036-5.984-5.234-9.575-3.731-1.517.629-3.325 2.212-3.325 6.191 0 1.798.751 3.554 1.621 5.593 1.567 3.667 3.516 8.231 1.962 14.442-.919 3.676-5.433 8.135-11.39 12.563-.639-.764-1.561-1.277-2.633-1.277h-.006a3.477 3.477 0 00-3.475 3.476c0 .626.028 1.295.068 1.982-7.447 4.823-15.874 9.287-22.388 12.249a3.48 3.48 0 002.881 6.335c1.956-.889 11.243-5.216 20.783-11.128 1.757 5.965 5.48 11.442 12.576 11.442 8.348 0 17.818-6.826 23.283-17.017a20.2 20.2 0 002.323 3.322c8.759 10.1 25.867 10.215 26.591 10.215a3.48 3.48 0 00.249-6.949c-.028-.003-2.801-.309-4.343-2.11-.931-1.087-1.303-2.583-1.139-4.57.356-4.288 14.189-7.494 26.38-7.683a3.483 3.483 0 003.226-2.314l3.48-9.786a3.474 3.474 0 00-.437-3.17 3.46 3.46 0 00-2.838-1.476zm-15.274-16.617c.066-.013.154-.034.265-.034.333 0 .858.163 1.558 1.108.132.177.556.781.449 1.047-.399.985-2.802 2.613-7.807 4.088 2.201-4.296 4.354-5.971 5.535-6.209zm-21.015 45.743c-3.535-1.149-7.138-2.97-9.632-5.855-2.741-3.17-3.753-7.18-3.089-12.254.1-.267.328-.792.726-1.475 4.9-.449 17.991 1.482 18.898 5.231-4.038 2.061-7.012 4.959-7.356 9.079-.173 2.067.038 3.817.453 5.274zm74.172-79.161l-3.48-10.44c-.561-1.678-2.302-2.681-4.029-2.301a3.477 3.477 0 00-2.735 3.748c2.401 24.012 6.943 70.839 6.943 76.209 0 4.822-8.577 14.316-22.435 21.246a3.479 3.479 0 001.56 6.592c.522 0 1.054-.119 1.553-.367 12.659-6.33 26.282-17.626 26.282-27.471 0-5.141-3.556-42.134-5.593-62.914a3.483 3.483 0 001.934-4.302zm29.035 31.4a3.477 3.477 0 004.181.564 3.485 3.485 0 001.652-3.884c-.623-2.446-.831-5.505-.501-6.755 1.743.054 3.361-1.186 3.617-2.984a3.48 3.48 0 00-2.952-3.938c-2.301-.312-4.321.364-5.732 1.933-.914 1.02-1.458 2.328-1.753 3.735l-4.03-4.03a3.478 3.478 0 10-4.92 4.92l10.438 10.439zm7.828 3.629l-13.049 9.352a3.48 3.48 0 00-.802 4.856 3.476 3.476 0 002.833 1.451c.702 0 1.41-.211 2.024-.652l13.049-9.352a3.48 3.48 0 00.802-4.856c-1.122-1.564-3.3-1.928-4.857-.799zm-1.156 13.086a3.48 3.48 0 00.305 4.615c.149.252.828 1.583.705 5.009a3.48 3.48 0 003.48 3.605 3.48 3.48 0 003.476-3.354c.253-7.102-2.071-9.698-3.082-10.484a3.478 3.478 0 00-4.884.609z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M383.843 164.632a3.479 3.479 0 003.48-3.48c0-5.134-.264-10.866-.695-16.829 3.451 5.654 6.317 10.867 8.155 15.154a3.473 3.473 0 004.568 1.828 3.478 3.478 0 001.826-4.567c-3.186-7.435-9.14-17.283-15.921-27.45-1.365-12.772-3.148-25.287-4.534-34.264a3.36 3.36 0 002.173-.541c1.099-.704 1.614-1.927 1.54-3.144.089.342.185.685.385 1 .024.034 2.26 3.727 1.268 8.52a3.48 3.48 0 006.816 1.407c1.571-7.602-2.058-13.419-2.212-13.664a3.49 3.49 0 00-4.806-1.067c-1.103.703-1.625 1.927-1.554 3.147-.09-.344-.189-.69-.392-1.005l-5.873-9.134a3.48 3.48 0 00-6.355 2.484c.049.274 2.708 15.544 5.065 33.949a749.994 749.994 0 00-7.922-10.966c-.42-5.265-.842-10.132-1.207-14.157a3.479 3.479 0 002.122-4.893l-3.48-6.959a3.484 3.484 0 00-4.079-1.788 3.483 3.483 0 00-2.496 3.69c.415 4.153.847 8.75 1.271 13.579a975.178 975.178 0 00-5.98-7.806 3.48 3.48 0 00-.712-5.753l-6.959-3.48a3.487 3.487 0 00-4.263.925 3.482 3.482 0 00-.01 4.363c.188.234 8.756 10.974 19.005 24.836 1.778 22.991 2.962 46.908 1.29 51.922-.306.917-.84 1.998-1.341 2.036-2.103.292-7.123-4.41-9.644-9.45-1.453-2.902-3.543-3.204-4.661-3.154-3.74.231-5.199 4.346-7.851 11.816-1.901 5.352-4.263 12.006-6.915 14.728-1.437-1.756-3.295-7.647-4.327-13.7.484 1.338 1.737 2.306 3.243 2.306a3.479 3.479 0 003.48-3.48c0-5.19-3.629-44.711-5.656-66.37a3.478 3.478 0 001.998-4.326l-3.48-10.44a3.481 3.481 0 00-6.766 1.431c2.365 24.824 6.799 72.772 6.937 79.39-.009-.06-.021-.118-.029-.178-.27-1.903-2.046-3.208-3.937-2.953a3.483 3.483 0 00-2.952 3.938c1.016 7.113 3.613 19.342 9.593 21.334.472.16 1.108.302 1.854.302 1.372 0 3.114-.486 4.897-2.27 3.79-3.789 6.355-11.014 8.618-17.385.511-1.441 1.117-3.147 1.687-4.608 3.192 4.662 8.762 10.466 14.405 10.012 1.984-.142 5.593-1.209 7.449-6.776 1.85-5.551 1.119-24.91-.128-43.444a571.014 571.014 0 018.666 12.472c1.086 10.421 1.862 20.861 1.862 29.436a3.486 3.486 0 003.484 3.476z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M410.251 146.329c-2.465-18.364-5.899-39.637-8.074-52.693a3.423 3.423 0 002.915-.619 3.476 3.476 0 00.655-4.876l-6.307-8.265a3.482 3.482 0 00-6.195 2.709c.063.356 6.268 36.078 10.106 64.668 1.466 10.925-.674 20.689-5.729 26.112-3.249 3.484-7.554 5.06-12.764 4.757-1.913-.102-3.572 1.338-3.692 3.255a3.479 3.479 0 003.254 3.69 26.94 26.94 0 001.741.054c6.562 0 12.257-2.405 16.551-7.014 6.559-7.032 9.307-18.617 7.539-31.778zm-38.281 22.938c-1.279 1.39-1.181 3.578.172 4.891.189.183.415.544.416.721.002.098-.139.391-.526.778a3.478 3.478 0 002.461 5.94c.89 0 1.781-.34 2.461-1.02 2.207-2.206 2.612-4.445 2.562-5.937-.107-3.211-2.294-5.284-2.73-5.668-1.423-1.237-3.538-1.088-4.816.295zm-12.267 76.313h-24.358v-3.48a3.48 3.48 0 10-6.96 0v3.48H143.957c6.959 6.959 20.878 10.44 31.318 10.44h153.11v6.959a3.48 3.48 0 003.48 3.48h27.838c5.757 0 10.44-4.683 10.44-10.44s-4.683-10.439-10.44-10.439zm0 13.919h-24.359v-3.48h27.838l-.625-1.873c.362.548.625 1.167.625 1.873a3.482 3.482 0 01-3.479 3.48z"
  }))));
}

function SvgSb(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M508.744 2.41L3.256 333.59c1.53 1.274 3.425 2.134 5.571 2.134h494.345a8.829 8.829 0 008.828-8.828V9.103c0-2.728-1.311-5.075-3.256-6.693z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 9.103a8.829 8.829 0 00-8.828-8.828h-15.339L0 319.891v7.006a8.829 8.829 0 008.828 8.828h15.339L512 16.109V9.103z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M44.429 27.778l-4.726 14.169-14.936.116c-1.432.011-2.026 1.839-.874 2.69l12.015 8.873-4.505 14.241c-.433 1.366 1.123 2.495 2.289 1.663l12.152-8.685 12.152 8.685c1.165.833 2.72-.297 2.289-1.663L55.78 53.626l12.015-8.873c1.152-.851.558-2.679-.874-2.69l-14.936-.116-4.726-14.169c-.454-1.359-2.376-1.359-2.83 0zm113.781 0l-4.726 14.169-14.936.116c-1.432.011-2.026 1.839-.874 2.69l12.015 8.873-4.505 14.241c-.433 1.366 1.123 2.495 2.289 1.663l12.152-8.685 12.152 8.685c1.165.833 2.72-.297 2.289-1.663l-4.505-14.241 12.015-8.873c1.152-.851.558-2.679-.874-2.69l-14.936-.116-4.726-14.169c-.455-1.359-2.377-1.359-2.83 0zm-56.89 50.698l-4.726 14.169-14.936.116c-1.432.011-2.026 1.839-.874 2.69l12.015 8.873-4.505 14.241c-.433 1.366 1.123 2.495 2.289 1.663l12.152-8.685 12.152 8.685c1.165.833 2.72-.297 2.289-1.663l-4.505-14.241 12.015-8.873c1.152-.851.558-2.679-.874-2.69l-14.936-.116-4.726-14.169c-.456-1.359-2.377-1.359-2.83 0zm-56.891 50.698l-4.726 14.169-14.936.116c-1.432.011-2.026 1.839-.874 2.69l12.015 8.873-4.505 14.241c-.433 1.366 1.123 2.495 2.289 1.663l12.152-8.685 12.152 8.685c1.165.833 2.72-.297 2.289-1.663l-4.505-14.241 12.015-8.873c1.152-.851.558-2.679-.874-2.69l-14.936-.116-4.726-14.169c-.454-1.359-2.376-1.359-2.83 0zm113.781 0l-4.726 14.169-14.936.116c-1.432.011-2.026 1.839-.874 2.69l12.015 8.873-4.505 14.241c-.433 1.366 1.123 2.495 2.289 1.663l12.152-8.685 12.152 8.685c1.165.833 2.72-.297 2.289-1.663l-4.505-14.241 12.015-8.873c1.152-.851.558-2.679-.874-2.69l-14.936-.116-4.726-14.169c-.455-1.359-2.377-1.359-2.83 0z",
    fill: "#F5F5F5"
  })));
}

function SvgSc(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M8.828 335.724h494.345a8.829 8.829 0 008.828-8.828V223.907L4.85 334.664c1.209.624 2.523 1.06 3.978 1.06z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M170.667.276H8.828A8.829 8.829 0 000 9.104v317.792c0 1.972.769 3.699 1.862 5.169L170.667.276z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M2.613 333.157L341.333.276H170.667L1.862 332.065c.264.356.436.78.751 1.092z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H341.333L2.613 333.157c.367.364.858.569 1.284.865L512 112.092V9.104a8.829 8.829 0 00-8.828-8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M4.85 334.664l507.149-110.757V112.092L3.896 334.022c.317.22.609.466.954.642z",
    fill: "#F5F5F5"
  })));
}

function SvgSd(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59l202.841-161.015c2.946-2.338 2.946-6.812 0-9.151L3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z",
    fill: "#73AF00"
  })));
}

function SvgSe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M512 141.517H211.862V.276h-52.965v141.241H0v52.966h158.897v141.241h52.965V194.483H512z"
  })));
}

function SvgSg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168zm72.569-83.737c0-29.028 21.3-53.091 49.113-57.542 1.51-.242 1.578-2.319.088-2.663a60.413 60.413 0 00-21.793-1c-29.998 4.086-53.186 30.046-53.61 60.318-.483 34.566 27.383 62.712 61.785 62.712 4.683 0 9.23-.547 13.606-1.554 1.489-.342 1.414-2.424-.094-2.666-27.802-4.448-49.095-28.464-49.095-57.605z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M122.14 99.795l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.774-1.014-2.112 0zm40.827 0l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.773-1.014-2.112 0zM142.738 36.79l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.774-1.014-2.112 0zm-32.552 24.138l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.773-1.014-2.112 0zm64.828 0l-2.613 7.836-8.259.064c-1.069.009-1.513 1.373-.652 2.008l6.644 4.907-2.492 7.875c-.322 1.02.839 1.863 1.708 1.241l6.72-4.803 6.72 4.803c.87.622 2.03-.222 1.708-1.241l-2.492-7.875 6.644-4.907c.861-.636.417-1.999-.652-2.008l-8.259-.064-2.613-7.836c-.339-1.014-1.774-1.014-2.112 0z"
  }))));
}

function SvgSi(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#41479B"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M172.014 69.37s-1.778 56.628-9.724 72.53c-9.836 19.545-19.725 25.247-34.438 30.515-14.711-5.267-24.6-10.965-34.438-30.515-7.945-15.903-9.725-72.524-9.724-72.53a107.317 107.317 0 0188.324 0z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M140.64 147.897c-1.076-.69-1.852-1.184-3.618-1.184-1.761 0-2.537.493-3.608 1.184-1.227.781-2.753 1.759-5.59 1.759-2.839 0-4.365-.978-5.592-1.763-1.071-.685-1.845-1.178-3.606-1.178s-2.535.493-3.606 1.178c-1.159.743-2.624 1.628-5.171 1.727 5.362 6.538 10.983 9.64 17.998 12.333 7.012-2.694 12.632-5.793 17.994-12.331-2.565-.093-4.038-.984-5.201-1.725zm-34.808-10.46c1.071.685 1.843 1.178 3.598 1.178 1.761 0 2.535-.493 3.606-1.178 1.227-.786 2.753-1.763 5.59-1.763 2.837 0 4.363.978 5.59 1.759 1.071.69 1.847 1.184 3.608 1.184 1.761 0 2.535-.493 3.606-1.178 1.227-.786 2.753-1.763 5.592-1.763 2.841 0 4.37.978 5.597 1.759 1.076.69 1.849 1.184 3.616 1.184 1.767 0 2.542-.493 3.618-1.184 1.025-.653 2.312-1.409 4.35-1.651a41.937 41.937 0 001.536-4.9l-13.17-21.95-4.907 9.814-9.814-19.627-9.814 19.627-4.907-9.814-13.162 21.937a42.32 42.32 0 001.534 4.915c2.03.239 3.311.995 4.333 1.651zm45.999 3.1c-1.227.781-2.755 1.759-5.597 1.759-2.839 0-4.367-.978-5.594-1.759-1.076-.69-1.852-1.184-3.618-1.184-1.761 0-2.537.493-3.608 1.184-1.227.781-2.753 1.759-5.59 1.759-2.839 0-4.365-.978-5.592-1.763-1.071-.685-1.845-1.178-3.606-1.178s-2.535.493-3.606 1.178c-1.227.786-2.753 1.763-5.59 1.763-2.835 0-4.359-.978-5.582-1.763l-.017-.011a71.188 71.188 0 002.881 4.803c.716.393 1.465.651 2.718.651 1.761 0 2.535-.493 3.606-1.178 1.227-.786 2.753-1.763 5.59-1.763 2.837 0 4.363.978 5.59 1.759 1.071.69 1.847 1.184 3.608 1.184 1.761 0 2.535-.493 3.606-1.178 1.227-.786 2.753-1.763 5.592-1.763 2.841 0 4.37.978 5.597 1.759 1.076.69 1.849 1.184 3.616 1.184 1.272 0 2.027-.262 2.754-.663a71.067 71.067 0 002.879-4.799c-.013.005-.024.012-.037.019z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M128.046 82.222l.861 2.814 2.867-.661c.194-.045.33.19.194.335l-2.006 2.153 2.006 2.153c.136.146.001.381-.194.335l-2.867-.661-.861 2.814c-.058.191-.329.191-.387 0l-.861-2.814-2.867.661c-.194.045-.33-.19-.194-.335l2.006-2.153-2.006-2.153c-.136-.146-.001-.381.194-.335l2.867.661.861-2.814c.059-.191.329-.191.387 0zm-14.107-13.52l.861 2.814 2.867-.661c.194-.045.33.19.194.335l-2.006 2.153 2.006 2.153c.136.146.001.381-.194.335l-2.867-.661-.861 2.814c-.058.191-.329.191-.387 0l-.861-2.814-2.867.661c-.194.045-.33-.19-.194-.335l2.006-2.153-2.006-2.153c-.136-.146-.001-.381.194-.335l2.867.661.861-2.814c.058-.191.328-.191.387 0zm28.316 0l.861 2.814 2.867-.661c.194-.045.33.19.194.335l-2.006 2.153 2.006 2.153c.136.146.001.381-.194.335l-2.867-.661-.861 2.814c-.058.191-.329.191-.387 0l-.861-2.814-2.867.661c-.194.045-.33-.19-.194-.335l2.006-2.153-2.006-2.153c-.136-.146-.001-.381.194-.335l2.867.661.861-2.814c.059-.191.329-.191.387 0z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M166.934 67.238c.03 1.565.055 3.144.055 4.849-.708 17.704-3.342 56.258-9.082 67.87-8.463 16.996-16.277 22.614-30.055 27.791-13.778-5.176-21.591-10.793-30.048-27.778-5.761-11.656-8.414-50.866-9.091-67.882 0-1.707.028-3.268.052-4.846a107.812 107.812 0 00-5.058 2.123c.118 3.438.974 25.992 3.545 45.823 1.45 11.071 3.446 21.274 6.163 26.713 9.837 19.55 19.726 25.248 34.438 30.515 14.713-5.269 24.601-10.969 34.439-30.515 2.718-5.439 4.713-15.642 6.164-26.713 2.57-19.831 3.425-42.385 3.544-45.823a105.632 105.632 0 00-5.066-2.127z",
    fill: "#FF1722"
  })));
}

function SvgSk(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M130.225 251.285c-2.613-1.501-64.018-37.216-64.018-92.113V84.138h132.414v75.034c0 54.897-61.405 90.612-64.018 92.113l-2.189 1.249-2.189-1.249z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M167.094 145.931l-20.809 2.741h-6.935v-12.418h4.161l16.646 2.741-2.254-9.677 2.254-9.677-16.646 2.74h-4.161v-4.194l2.74-20.808-9.676 2.819-9.676-2.819 2.74 20.808v4.194h-4.163l-16.645-2.74 2.254 9.677-2.254 9.677 16.645-2.741h4.163v12.418h-6.936l-20.808-2.741 2.818 9.676-2.818 9.677 20.808-2.741h6.936v31.94h13.872v-31.94h6.935l20.809 2.741-2.818-9.677z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M132.414 181.241c-9.118 0-16.938 5.532-20.302 13.419-.594-.049-1.162-.178-1.767-.178-11.751 0-21.266 9.21-21.94 20.791 17.875 22.004 40.264 35.116 41.82 36.011l2.189 1.25 2.189-1.25c1.556-.895 23.945-14.006 41.82-36.011-.674-11.581-10.189-20.791-21.94-20.791-.605 0-1.173.129-1.767.178-3.364-7.887-11.184-13.419-20.302-13.419z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M194.207 88.552v70.621c0 52.966-61.793 88.276-61.793 88.276s-61.793-35.31-61.793-88.276V88.552h123.586zm8.828-8.828H61.793v79.449c0 57.428 63.537 94.394 66.241 95.94l4.38 2.503 4.38-2.503c2.705-1.546 66.241-38.513 66.241-95.94V79.724z",
    fill: "#F5F5F5"
  })));
}

function SvgSl(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  })));
}

function SvgSm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256.82 239.98c-1.495-.065-36.791-1.87-54.505-26.14-10.324-14.142-12.384-32.952-6.123-55.907l2.529.69c-6.038 22.143-4.12 40.195 5.704 53.662 16.958 23.249 52.154 25.06 52.51 25.075l-.115 2.62z",
    fill: "#B46446"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#41AA5A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M196.167 147.756c-1.74 4.533-1.343 9.28.672 12.878 3.906-1.325 7.377-4.587 9.118-9.12 1.74-4.533 1.343-9.28-.672-12.878-3.907 1.325-7.378 4.586-9.118 9.12zm22.108 62.668c-1.932 3.187-2.439 7.46-1.007 11.608 1.336 3.876 4.094 6.735 7.29 8.178-3.105-1.628-7.054-2.035-10.93-.698-4.148 1.43-7.2 4.463-8.52 7.948 3.187 1.931 7.459 2.439 11.608 1.007 4.148-1.43 7.2-4.463 8.52-7.948l-.004-.002c1.916-3.183 2.418-7.439.992-11.573-1.431-4.149-4.463-7.201-7.949-8.52zm-7.558-11.568c-2.98 2.237-5.044 6.013-5.263 10.395-.205 4.095 1.288 7.776 3.715 10.306-2.275-2.668-5.788-4.519-9.88-4.724-4.382-.22-8.345 1.457-10.869 4.199 2.237 2.98 6.013 5.044 10.394 5.263 4.382.22 8.345-1.457 10.869-4.199l-.002-.002c2.963-2.241 5.015-6.003 5.235-10.37.219-4.382-1.457-8.346-4.199-10.868zm-3.269-13.042c-3.604.947-6.941 3.665-8.797 7.639-1.736 3.715-1.742 7.687-.449 10.946-1.1-3.329-3.654-6.369-7.368-8.104-3.976-1.857-8.278-1.801-11.649-.214.947 3.604 3.665 6.941 7.639 8.797 3.976 1.857 8.278 1.801 11.649.214l-.002-.004c3.591-.956 6.911-3.665 8.761-7.626 1.859-3.973 1.804-8.277.216-11.648zm1.854-12.942c-3.709-.369-7.783 1.017-10.908 4.096-2.921 2.878-4.312 6.599-4.235 10.104.129-3.503-1.206-7.243-4.083-10.163-3.08-3.126-7.132-4.572-10.845-4.259-.369 3.709 1.016 7.781 4.096 10.908s7.132 4.572 10.845 4.259v-.006c3.699.355 7.755-1.026 10.87-4.095 3.127-3.078 4.573-7.131 4.26-10.844z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M211.924 160.554c-3.596-.978-7.843-.285-11.435 2.234-3.357 2.355-5.344 5.794-5.848 9.265.707-3.434.009-7.342-2.344-10.698-2.519-3.592-6.276-5.689-9.991-5.995-.978 3.596-.285 7.843 2.234 11.435 2.519 3.592 6.276 5.689 9.991 5.995v-.003c3.588.961 7.818.269 11.398-2.242 3.592-2.52 5.689-6.277 5.995-9.991z"
  })), /*#__PURE__*/react.createElement("g", {
    transform: "translate(185 156)",
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 27.966,
    cy: 72.513,
    r: 2.731
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 40.523,
    cy: 74.036,
    r: 2.731
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 20.76,
    cy: 51.868,
    r: 2.731
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 3.392,
    cy: 31.332,
    r: 2.731
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 15.519,
    cy: 17.429,
    r: 2.731
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 10.917,
    cy: 3.172,
    r: 2.731
  })), /*#__PURE__*/react.createElement("path", {
    d: "M256.932 239.98l-.115-2.622c.355-.013 35.552-1.826 52.51-25.075 9.824-13.465 11.742-31.519 5.704-53.662l2.529-.69c6.26 22.955 4.2 41.766-6.123 55.907-17.713 24.272-53.009 26.078-54.505 26.142z",
    fill: "#B46446"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#41AA5A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M317.586 147.756c1.74 4.533 1.343 9.28-.672 12.878-3.906-1.325-7.377-4.587-9.118-9.12-1.74-4.533-1.343-9.28.672-12.878 3.906 1.325 7.377 4.586 9.118 9.12zm-22.11 62.668c1.932 3.187 2.439 7.46 1.007 11.608-1.336 3.876-4.094 6.735-7.29 8.178 3.105-1.628 7.054-2.035 10.93-.698 4.148 1.43 7.2 4.463 8.52 7.948-3.187 1.931-7.459 2.439-11.608 1.007-4.148-1.43-7.2-4.463-8.52-7.948l.003-.001c-1.913-3.185-2.415-7.441-.99-11.574 1.43-4.149 4.463-7.201 7.948-8.52zm7.56-11.568c2.98 2.237 5.044 6.013 5.263 10.395.205 4.095-1.288 7.776-3.715 10.306 2.275-2.668 5.788-4.519 9.88-4.724 4.382-.22 8.345 1.457 10.869 4.199-2.237 2.98-6.013 5.044-10.395 5.263-4.382.22-8.345-1.457-10.869-4.199l.002-.002c-2.963-2.241-5.016-6.003-5.235-10.37-.219-4.382 1.458-8.346 4.2-10.868zm3.268-13.042c3.604.947 6.941 3.665 8.797 7.639 1.736 3.715 1.742 7.687.449 10.946 1.1-3.329 3.654-6.369 7.368-8.104 3.976-1.857 8.278-1.801 11.649-.214-.947 3.604-3.665 6.941-7.639 8.797-3.976 1.857-8.278 1.801-11.649.214l.002-.004c-3.591-.956-6.911-3.665-8.761-7.626-1.86-3.973-1.804-8.277-.216-11.648zm-1.854-12.942c3.709-.369 7.783 1.017 10.908 4.096 2.921 2.878 4.312 6.599 4.235 10.104-.129-3.503 1.206-7.243 4.083-10.163 3.08-3.126 7.132-4.572 10.845-4.259.369 3.709-1.016 7.781-4.096 10.908s-7.132 4.572-10.845 4.259v-.006c-3.699.355-7.755-1.026-10.87-4.095-3.127-3.078-4.573-7.131-4.26-10.844z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M301.828 160.554c3.596-.978 7.843-.285 11.435 2.234 3.357 2.355 5.344 5.794 5.848 9.265-.707-3.434-.009-7.342 2.344-10.698 2.519-3.592 6.276-5.689 9.991-5.995.978 3.596.285 7.843-2.234 11.435-2.519 3.592-6.276 5.689-9.991 5.995v-.003c-3.588.961-7.818.269-11.398-2.242-3.592-2.52-5.689-6.277-5.995-9.991z"
  })), /*#__PURE__*/react.createElement("g", {
    transform: "translate(285 156)",
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 15.789,
    cy: 72.513,
    r: 2.731
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 3.221,
    cy: 74.036,
    r: 2.731
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 22.994,
    cy: 51.868,
    r: 2.731
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 40.363,
    cy: 31.332,
    r: 2.731
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 28.236,
    cy: 17.429,
    r: 2.731
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 32.837,
    cy: 3.172,
    r: 2.731
  })), /*#__PURE__*/react.createElement("path", {
    d: "M272.247 148.244h-31.325c-9.751 0-17.655 7.904-17.655 17.655v27.595c0 9.752 7.904 17.655 17.655 17.655h31.325c9.75 0 17.655-7.903 17.655-17.655v-27.595c0-9.751-7.904-17.655-17.655-17.655z",
    fill: "#8CD7FF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M261.753 172.259v3.496h-3.494v-3.496h-2.692v3.496h-3.495v-3.496h-2.186v6.991l1.748 2.213v25.749h10.485v-25.749l1.747-2.213v-6.991zm-4.367-11.068c1.729-.838 2.185 2.695 2.185 2.695 3.641-1.821 2.691-4.776 1.821-6.189-1.165-1.894-5.825-2.622-7.791 1.311-1.966 3.933 3.35 11.724 3.35 11.724.289-2.404-1.823-8.448.435-9.541zm22.336 17.585v3.496h-3.496v-3.496h-2.691v3.496h-3.496v-3.496h-2.186v6.992l1.748 2.213v25.748h10.486v-25.748l1.747-2.213v-6.992zm-4.369-11.068c1.729-.838 2.185 2.695 2.185 2.695 3.641-1.821 2.691-4.776 1.821-6.189-1.165-1.894-5.825-2.622-7.791 1.311-1.966 3.933 3.35 11.724 3.35 11.724.29-2.404-1.821-8.448.435-9.541zm-31.567 11.068v3.496h-3.496v-3.496h-2.691v3.496h-3.495v-3.496h-2.187v6.992l1.748 2.213v25.748h10.486v-25.748l1.748-2.213v-6.992zm-4.369-11.068c1.729-.838 2.185 2.695 2.185 2.695 3.641-1.821 2.691-4.776 1.821-6.189-1.165-1.894-5.825-2.622-7.791 1.311-1.966 3.933 3.35 11.724 3.35 11.724.291-2.404-1.821-8.448.435-9.541z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M285.554 209.076c-2.334-1.154-4.926-1.864-7.706-1.864-2.979 0-5.741.815-8.196 2.13-3.191-3.439-7.713-5.625-12.776-5.625s-9.583 2.186-12.776 5.625c-2.455-1.315-5.217-2.13-8.196-2.13-2.781 0-5.373.71-7.706 1.864 4.99 9.152 14.546 23.941 28.678 29.593 14.132-5.652 23.688-20.441 28.678-29.593z",
    fill: "#6EC86E"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M256.718 91.947l.158-.078s-.053.013-.158.078z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256.876 91.869l.158.078a.662.662 0 00-.158-.078zm33.533 14.964c-.983-5.679-8.301-6.663-16.712-7.209-8.41-.546-12.015-5.352-12.015-5.352h-9.612s-3.605 4.806-12.015 5.352c-8.41.546-15.729 1.529-16.712 7.209-.983 5.679 6.226 14.636 6.226 14.636l6.335-5.133s-7.755-7.427-3.933-10.158c3.775-2.697 14.782-.829 19.684-7.303-.207 1.353-.135 3.023.704 5.081 1.602 3.933 1.02 8.884 1.02 8.884h6.992s-.583-4.952 1.02-8.884c.839-2.058.913-3.73.704-5.081 4.903 6.474 15.91 4.606 19.684 7.303 3.823 2.731-3.933 10.158-3.933 10.158l6.335 5.133c.002 0 7.211-8.957 6.228-14.636zm-29.965-32.222h-1.821v-1.966a1.747 1.747 0 10-3.496 0v1.966h-1.894a1.747 1.747 0 100 3.496h1.894v5.024a1.747 1.747 0 103.496 0v-5.024h1.821a1.747 1.747 0 100-3.496z"
  })), /*#__PURE__*/react.createElement("circle", {
    fill: "#FFF0E1",
    cx: 256.872,
    cy: 84.877,
    r: 3.496
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFC75A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M231.827 155.22c1.408.703 3.052 1.311 4.733 1.311 5.791 0 8.629-3.275 8.629-9.066s-3.494-10.158-9.284-10.158c0 0-.653.011-1.699.171-.225.036-.448.07-.668.12-5.567 1.062-19.325 6.191-22.1 31.166-3.879 34.912 24.467 66.41 45.439 73.4v-3.496c-.001.001-49.517-37.864-25.05-83.448z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M235.904 140.802l20.972 6.991-20.972 6.99z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M277.847 154.783l-20.971-6.99 20.971-6.991zm-62.936 14.368c2.504-22.538 14.317-27.172 19.406-28.145.111-.025.225-.042.417-.073.64-.098 1.081-.125 1.219-.131 3.832.026 6.359 2.913 6.359 6.408 0 3.854-2.258 5.315-4.514 5.388 0 0 1.821-3.787-1.894-4.806-2.506-.689-5.679 1.311-5.388 4.951.205 2.559 2.634 5.024 5.388 5.024 5.791 0 10.486-4.185 10.486-9.976 0-5.791-4.695-10.486-10.486-10.486 0 0-.653.011-1.699.171-.225.036-.448.07-.668.12-5.567 1.062-19.325 6.191-22.1 31.166-3.879 34.912 24.467 66.41 45.439 73.4v-3.496s-7.427-3.714-12.505-7.321c-15.689-11.143-32.292-36.704-29.46-62.194z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFC75A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M281.926 155.22c-1.408.703-3.052 1.311-4.733 1.311-5.791 0-8.629-3.275-8.629-9.066s3.494-10.158 9.284-10.158c0 0 .653.011 1.699.171.225.036.448.07.668.12 5.567 1.062 19.325 6.191 22.1 31.166 3.879 34.912-24.467 66.41-45.439 73.4v-3.496c0 .001 49.516-37.864 25.05-83.448z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M277.847 140.802l-20.971 6.991 20.971 6.99z"
  })), /*#__PURE__*/react.createElement("g", {
    transform: "translate(253 137)",
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M45.84 32.151C43.336 9.613 31.523 4.979 26.434 4.006c-.111-.025-.225-.042-.417-.073a11.968 11.968 0 00-1.219-.131c-3.832.026-6.359 2.913-6.359 6.408 0 3.854 2.258 5.315 4.514 5.388 0 0-1.821-3.787 1.894-4.806 2.506-.689 5.679 1.311 5.388 4.951-.205 2.559-2.634 5.024-5.388 5.024-5.791 0-10.486-4.185-10.486-9.976C14.361 5 19.056.305 24.847.305c0 0 .653.011 1.699.171.225.036.448.07.668.12 5.567 1.062 19.325 6.191 22.1 31.166 3.879 34.912-24.467 66.41-45.439 73.4v-3.496s7.427-3.714 12.505-7.321c15.69-11.143 32.293-36.704 29.46-62.194z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 3.872,
    cy: 10.796,
    r: 3.496
  })), /*#__PURE__*/react.createElement("path", {
    d: "M281.834 119.721c.928-2.403-.328-5.625-.328-5.625-3.222-.109-5.461 2.239-5.461 2.239.273-2.894-.983-5.516-.983-5.516-4.151.491-5.516 2.95-5.516 2.95-.218-4.533-2.95-6.39-2.95-6.39-3.605 1.092-4.696 5.024-4.696 5.024-.546-4.478-5.024-6.553-5.024-6.553s-4.478 2.076-5.024 6.553c0 0-1.092-3.933-4.696-5.024 0 0-2.731 1.857-2.95 6.39 0 0-1.365-2.457-5.516-2.95 0 0-1.256 2.622-.983 5.516 0 0-2.239-2.348-5.461-2.239 0 0-1.256 3.222-.328 5.625 0 0-3.659-1.146-6.663.6 0 0 5.506 2.13 7.341 4.751h48.561c1.834-2.622 7.341-4.751 7.341-4.751-3.004-1.747-6.664-.6-6.664-.6z",
    fill: "#FFC75A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M281.156 125.074c0 1.572-3.674 6.434-3.674 6.434s-11.914 1.658-20.606 1.658c-8.748 0-20.689-1.704-20.689-1.704s-3.592-4.835-3.592-6.39c0-4.47 10.871-8.094 24.28-8.094 13.41.001 24.281 3.626 24.281 8.096z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(235 87)",
    fill: "#FFC75A"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: 21.872,
    cy: 43.317,
    rx: 20.977,
    ry: 6.99
  }), /*#__PURE__*/react.createElement("path", {
    d: "M27.009 4.541c0-2.294-1.711-5.207-5.133-3.168-3.423-2.039-5.133.874-5.133 3.168s-2.622 2.622-2.95 2.403c0 0 2.185 2.84 4.696.983 0 0 1.347 1.966 3.386 1.966s3.387-1.966 3.387-1.966c2.513 1.857 4.696-.983 4.696-.983-.327.218-2.949-.11-2.949-2.403z"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#B46446"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M249.884 260.952a1.28 1.28 0 01-.584-.14 1.308 1.308 0 01-.587-1.758l6.99-13.981a1.311 1.311 0 012.345 1.174l-6.99 13.981a1.315 1.315 0 01-1.174.724z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M263.869 260.952c-.481 0-.943-.266-1.174-.724l-6.99-13.981a1.308 1.308 0 01.587-1.758 1.305 1.305 0 011.758.584l6.99 13.981a1.308 1.308 0 01-.587 1.758c-.189.096-.388.14-.584.14z"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M288.333 248.718a144.193 144.193 0 01-62.915 0v-13.533a144.193 144.193 0 0062.915 0v13.533z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M242.749 243.624c-13.377 2.581-27.086 3.289-40.727 2.015.23 1.802 11.017 7.158 11.017 7.158s-9.518 4.6-9.306 6.266a144.21 144.21 0 0039.016-1.677v-13.762zm28.305 0c13.377 2.581 27.086 3.289 40.727 2.015-.23 1.802-11.017 7.158-11.017 7.158s9.518 4.6 9.306 6.266a144.21 144.21 0 01-39.016-1.677v-13.762z"
  }))));
}

function SvgSn(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h161.839v335.449z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.793a8.828 8.828 0 01-8.828 8.827z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.04 117.78l11.693 35.062 36.959.287c2.067.017 2.924 2.654 1.261 3.881l-29.732 21.955 11.148 35.239c.623 1.971-1.62 3.601-3.302 2.399L256 195.109l-30.069 21.492c-1.682 1.202-3.925-.428-3.302-2.399l11.148-35.239-29.732-21.955c-1.663-1.228-.806-3.865 1.261-3.881l36.959-.287 11.693-35.062c.655-1.959 3.429-1.959 4.082.002z",
    fill: "#73AF00"
  })));
}

function SvgSo(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M253.466 105.442l-14.81 44.409-46.813.363c-2.567.02-3.63 3.295-1.566 4.82l37.658 27.809-14.121 44.632c-.775 2.447 2.012 4.471 4.099 2.978L256 203.233l38.086 27.222c2.088 1.492 4.874-.532 4.099-2.978l-14.121-44.633 37.658-27.809c2.065-1.525 1.001-4.8-1.566-4.82l-46.813-.363-14.81-44.409c-.812-2.435-4.254-2.435-5.067-.001z",
    fill: "#F5F5F5"
  })));
}

function SvgSr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 62.069h512v35.31H0zm0 176.552h512v35.31H0z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#C8414B",
    d: "M0 97.379h512V238.62H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M253.801 113.614l-12.854 38.541-40.627.314c-2.228.018-3.15 2.86-1.359 4.183l32.683 24.135-12.255 38.737c-.672 2.124 1.746 3.881 3.559 2.585L256 198.484l33.053 23.625c1.812 1.295 4.23-.461 3.559-2.585l-12.255-38.737 32.683-24.135c1.792-1.323.868-4.166-1.359-4.183l-40.627-.314-12.854-38.541c-.706-2.113-3.694-2.113-4.399 0z",
    fill: "#FFE15A"
  })));
}

function SvgSs(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.093H0V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 112.088h511.999V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M95.398 145.164l5.247 11.381 12.169-2.994a.917.917 0 011.038 1.302l-5.626 11.198 9.928 7.648a.916.916 0 01-.371 1.623l-12.263 2.583.211 12.531a.917.917 0 01-1.5.723l-9.665-7.977-9.665 7.977a.917.917 0 01-1.5-.723l.211-12.531-12.263-2.583a.917.917 0 01-.371-1.623l9.928-7.648-5.626-11.198a.917.917 0 011.038-1.302l12.169 2.994 5.247-11.381c.327-.71 1.338-.71 1.664 0zM0 106.207h511.999v15.007H0zm0 108.579h511.999v15.007H0z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M2.877 333.335L233.2 171.613c2.504-1.758 2.504-5.466 0-7.224L2.877 2.666C1.131 4.28 0 6.539 0 9.104v317.792c0 2.565 1.131 4.826 2.877 6.439z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M73.561 126.847l19.831 20.297 25.624-12.192c3.317-1.579 6.735 1.974 5.03 5.228l-13.175 25.132 19.513 20.602c2.527 2.667.204 7.016-3.418 6.399l-27.973-4.765-13.564 24.925c-1.756 3.227-6.61 2.361-7.142-1.273l-4.114-28.077-27.896-5.197c-3.612-.673-4.288-5.556-.995-7.186l25.432-12.588-3.678-28.138c-.477-3.643 3.957-5.794 6.525-3.167z",
    fill: "#FFE15A"
  })));
}

function SvgSt(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 79.724h511.999v176.551H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M2.666 333.192L176.551 168 2.666 2.809C1.027 4.411 0 6.631 0 9.104v317.792c0 2.473 1.027 4.693 2.666 6.296z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M278.298 127.767l9.047 27.126 28.594.222c3.702.029 5.237 4.753 2.259 6.953l-23.002 16.986 8.626 27.263c1.117 3.53-2.902 6.45-5.914 4.297l-23.263-16.628-23.263 16.628c-3.011 2.153-7.031-.767-5.914-4.297l8.626-27.263-23.002-16.986c-2.978-2.199-1.443-6.924 2.259-6.953l28.594-.222 9.047-27.126c1.167-3.512 6.135-3.512 7.306 0zm132.001 0l9.047 27.126 28.594.222c3.702.029 5.237 4.753 2.259 6.953l-23.002 16.986 8.626 27.263c1.117 3.53-2.902 6.45-5.914 4.297l-23.263-16.628-23.263 16.628c-3.011 2.153-7.031-.767-5.914-4.297l8.626-27.263-23.002-16.986c-2.978-2.199-1.443-6.924 2.259-6.953l28.594-.222 9.047-27.126c1.166-3.512 6.134-3.512 7.306 0z",
    fill: "#464655"
  })));
}

function SvgSv(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989zm-8.829 223.632H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#50AF69"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M255.789 205.562c-21.295 0-38.621-17.325-38.621-38.621a38.642 38.642 0 019.08-24.877l1.687 1.422a36.43 36.43 0 00-8.561 23.455c0 20.077 16.335 36.414 36.414 36.414l.001 2.207z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M241.662 194.159c-.482.823-.721 1.953-.825 3.1a9.612 9.612 0 00-1.4-.851s-.759 2.674-.166 4.599c0 0-2.013.249-3.861 2.103 0 0 .637.45 1.73.919-1.835 1.432-2.401 2.848-2.401 2.848 10.83 5.415 16.02-2.138 16.246-2.477-2.653-7.569-9.323-10.241-9.323-10.241zm9.323 10.243l.022.055v-.087l-.022.032zm-19.325-17.461c-.707.518-1.321 1.383-1.83 2.312a8.745 8.745 0 00-.87-1.229s-1.618 1.976-1.821 3.817c0 0-1.788-.525-4.023.362 0 0 .372.612 1.122 1.408-2.07.536-3.065 1.523-3.065 1.523 7.149 8.525 14.287 4.055 14.601 3.852.534-7.355-4.114-12.045-4.114-12.045zm4.115 12.043c-.001.019 0 .035-.002.054l.032-.073-.03.019zm-10.32-21.48c-.772.163-1.598.647-2.359 1.22a7.987 7.987 0 00-.259-1.332s-2.061 1.024-2.91 2.461c0 0-1.274-1.095-3.438-1.194 0 0 .078.641.401 1.572-1.899-.327-3.082.115-3.082.115 2.713 9.652 10.232 8.625 10.567 8.574 3.158-5.84 1.08-11.416 1.08-11.416zm-1.083 11.417c-.008.014-.013.029-.022.044l.053-.049a.22.22 0 01-.031.005zm-1.373-22.172c-.733.047-1.586.367-2.403.774.056-.39.087-.786.073-1.187 0 0-2.09.639-3.183 1.782 0 0-.896-1.103-2.822-1.452 0 0-.076.566 0 1.412-1.634-.513-2.801-.274-2.801-.274.228 8.702 7.231 8.721 7.543 8.717 4.185-4.684 3.593-9.772 3.593-9.772zm-3.594 9.774l-.03.035.058-.035h-.028zm4.409-18.681c-.627-.15-1.426-.103-2.217.028.148-.312.277-.637.367-.977 0 0-1.919-.004-3.132.672 0 0-.466-1.158-1.991-1.948 0 0-.211.455-.366 1.185-1.238-.853-2.279-.953-2.279-.953-2.06 7.358 3.809 9.186 4.072 9.263 4.725-2.849 5.546-7.27 5.546-7.27zm-5.544 7.269l-.034.022.058-.014-.024-.008zm.898-18.101s-2.001 5.241 1.103 8.276c0 0 4.046-1.195 6.046-5.402l-1.702-.322-.874-2.621-2.897 1.288-1.676-1.219zm5.634-8.425s-3.135 4.652-.8 8.311c0 0 4.212-.248 7.113-3.893l-1.585-.698-.257-2.751-3.113.598-1.358-1.567zm31.409 66.977v-2.207c20.078 0 36.414-16.337 36.414-36.414 0-8.577-3.04-16.907-8.561-23.455l1.687-1.422a38.642 38.642 0 019.08 24.877c0 21.296-17.325 38.621-38.62 38.621z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M270.338 194.159c.482.823.721 1.953.825 3.1a9.612 9.612 0 011.4-.851s.759 2.674.165 4.599c0 0 2.013.249 3.861 2.103 0 0-.637.45-1.73.919 1.835 1.432 2.401 2.848 2.401 2.848-10.83 5.415-16.02-2.138-16.246-2.477 2.654-7.569 9.324-10.241 9.324-10.241zm-9.323 10.243l-.022.055v-.087l.022.032zm19.325-17.461c.707.518 1.321 1.383 1.829 2.312.253-.424.535-.839.87-1.229 0 0 1.618 1.976 1.821 3.817 0 0 1.788-.525 4.023.362 0 0-.372.612-1.122 1.408 2.07.536 3.065 1.523 3.065 1.523-7.149 8.525-14.287 4.055-14.601 3.852-.533-7.355 4.115-12.045 4.115-12.045z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M276.225 198.984c.001.019 0 .035.002.054l-.032-.073.03.019zm10.32-21.48c.772.163 1.598.647 2.359 1.22.051-.442.129-.887.259-1.332 0 0 2.061 1.024 2.91 2.461 0 0 1.274-1.095 3.438-1.194 0 0-.078.641-.401 1.572 1.899-.327 3.082.115 3.082.115-2.713 9.652-10.232 8.625-10.567 8.574-3.158-5.84-1.08-11.416-1.08-11.416zm1.083 11.417c.008.014.013.029.022.044l-.053-.049a.22.22 0 00.031.005zm1.373-22.172c.733.047 1.586.367 2.403.774a6.696 6.696 0 01-.073-1.187s2.09.639 3.183 1.782c0 0 .896-1.103 2.822-1.452a7 7 0 000 1.412c1.634-.513 2.801-.274 2.801-.274-.228 8.702-7.231 8.721-7.543 8.717-4.185-4.684-3.593-9.772-3.593-9.772zm3.594 9.774l.03.035-.059-.035h.029zm-4.409-18.681c.627-.15 1.426-.103 2.217.028a5.672 5.672 0 01-.367-.977s1.919-.004 3.132.672c0 0 .466-1.158 1.991-1.948 0 0 .211.455.366 1.185 1.238-.853 2.279-.953 2.279-.953 2.06 7.358-3.809 9.186-4.072 9.263-4.725-2.849-5.546-7.27-5.546-7.27zm5.544 7.269l.034.022-.058-.014.024-.008zm-.898-18.101s2.001 5.241-1.103 8.276c0 0-4.046-1.195-6.046-5.402l1.702-.322.874-2.621 2.897 1.288 1.676-1.219zm-5.634-8.425s3.135 4.652.8 8.311c0 0-4.212-.248-7.113-3.893l1.585-.698.257-2.751 3.113.598 1.358-1.567z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M256 182.345l-3.412 5.118a2.202 2.202 0 00.276 2.781L256 193.38l3.136-3.136a2.205 2.205 0 00.276-2.781L256 182.345z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M257.454 187.463L256 182.345l-1.454 5.118c-.248.874-.199 2.038.117 2.781L256 193.38l1.336-3.136c.317-.744.367-1.907.118-2.781z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256 136.552v-13.793s-5.241 7.54-4.414 18.574m-19.092-4.734c-7.582 16.456.195 29.996 1.827 32.545.043.068 10.827-17.376 10.827-17.376l-12.654-15.169",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M240.477 159.314c-1.196-3.725-1.369-8.075.067-13.066l-4.692-5.624c-3.855 10.388-2.26 18.058 1.599 23.562l3.026-4.872z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M244.967 152.687c-.329 0-.654-.147-.872-.427l-13.837-17.791a1.102 1.102 0 111.741-1.353l13.837 17.791a1.1 1.1 0 01-.869 1.78z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M222.897 153.698c-4.414 44.138 30.897 33.103 33.103 28.69l-22.069-11.034 4.414-8.828-15.448-8.828",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M233.567 158.777l-6.151-3.69c-1.384 26.228 12.622 30.596 22.953 29.294-8.375-1.124-16.743-7.308-16.802-25.604z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M238.343 163.627c-.2 0-.402-.054-.584-.168l-17.654-11.032a1.102 1.102 0 01-.35-1.519 1.099 1.099 0 011.521-.351l17.654 11.032a1.102 1.102 0 01-.587 2.038z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M279.506 136.555c7.582 16.456-.195 29.996-1.827 32.545-.043.068-10.827-17.376-10.827-17.376l12.654-15.169",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M271.523 159.27c1.196-3.725 1.369-8.075-.067-13.066l4.692-5.624c3.855 10.388 2.26 18.058-1.599 23.562a4950.18 4950.18 0 01-3.026-4.872z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M267.033 152.644a1.1 1.1 0 01-.869-1.78l13.837-17.791a1.104 1.104 0 011.548-.194 1.1 1.1 0 01.193 1.547l-13.837 17.791a1.098 1.098 0 01-.872.427z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M289.103 153.655c4.414 44.138-30.897 33.103-33.103 28.69l22.069-11.034-4.414-8.828 15.448-8.828",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M278.433 158.733l6.151-3.69c1.384 26.228-12.622 30.596-22.953 29.294 8.375-1.124 16.743-7.307 16.802-25.604z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M273.657 163.584a1.103 1.103 0 01-.587-2.039l17.654-11.032a1.099 1.099 0 011.521.351 1.102 1.102 0 01-.35 1.519l-17.654 11.032a1.088 1.088 0 01-.584.169z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FFE6E6",
    cx: 256,
    cy: 155.862,
    r: 8.828
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#F5F5F5",
    cx: 256,
    cy: 155.862,
    r: 4.414
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256 170.207c-.61 0-1.103-.493-1.103-1.103v-13.241a1.102 1.102 0 112.206 0v13.241c0 .61-.493 1.103-1.103 1.103z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#5AA0E6",
    d: "M286.161 182.161h-59.127l6.897-13.124h44.322z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M257.795 171.495h15.377l-4.783-4.783a2.048 2.048 0 00-.801-.495l-1.665-.555c-.6-.2-1.259-.111-1.785.239l-5.316 3.544-1.027 2.05z",
    fill: "#FFB750"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M252.567 172.322h18.353l-5.709-5.709a2.445 2.445 0 00-.957-.591l-1.987-.662a2.446 2.446 0 00-2.131.286l-6.345 4.231-1.224 2.445z",
    fill: "#FFC455"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M246.183 173.241h22.163l-6.894-6.894a2.962 2.962 0 00-1.155-.714l-2.4-.8a2.957 2.957 0 00-2.573.344l-7.662 5.108-1.479 2.956z",
    fill: "#FFCD55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M239.865 174.069h25.376l-7.894-7.894a3.39 3.39 0 00-1.323-.818l-2.748-.916a3.385 3.385 0 00-2.947.395l-8.774 5.849-1.69 3.384z",
    fill: "#FFD25A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M229.517 175.724h33.103l-10.297-10.297a4.404 4.404 0 00-1.726-1.066l-3.584-1.195a4.414 4.414 0 00-3.844.515l-11.445 7.629-2.207 4.414z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M258.382 157.842h-4.771l1.099-4.607h1.658c.537 0 1.004.369 1.129.892l.885 3.715z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.108 158.582h-4.284a.634.634 0 01-.634-.634v-.212c0-.351.285-.634.634-.634h4.284c.351 0 .634.285.634.634v.212a.635.635 0 01-.634.634zm-2.832-3.25l-1.071-.271a.474.474 0 01-.27-.734l.775-1.092.566 2.097z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M250.495 144.526l-.157 1.216c1.715-1.041 3.607-1.665 5.662-1.665 2.053.002 3.946.622 5.662 1.665l-.157-1.216c-1.706-.89-3.542-1.402-5.505-1.4-1.962-.002-3.798.509-5.505 1.4z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M250.563 143.998l-.157 1.216c1.696-1.043 3.565-1.668 5.593-1.671 2.028.002 3.897.627 5.593 1.671l-.157-1.216c-1.687-.897-3.499-1.405-5.437-1.406-1.936 0-3.748.511-5.435 1.406z",
    fill: "#5AA0E6"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M250.626 143.509l-.157 1.216c1.679-1.046 3.527-1.676 5.53-1.675 2.004 0 3.851.629 5.53 1.675l-.157-1.216c-1.668-.896-3.459-1.41-5.374-1.411-1.911-.001-3.702.514-5.372 1.411z",
    fill: "#9BC800"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M250.699 142.95l-.157 1.216c1.66-1.049 3.482-1.681 5.459-1.681 1.976.002 3.799.63 5.459 1.681l-.157-1.216c-1.649-.9-3.414-1.416-5.301-1.417-1.889.002-3.654.517-5.303 1.417z",
    fill: "#FFE14E"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M250.77 142.401l-.157 1.216c1.641-1.053 3.437-1.685 5.387-1.686 1.95.002 3.747.632 5.387 1.686l-.157-1.216c-1.629-.903-3.37-1.421-5.23-1.422-1.86.002-3.602.518-5.23 1.422z",
    fill: "#FFB14E"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M250.799 142.167l-.109.852c1.619-1.054 3.391-1.693 5.311-1.693 1.92-.001 3.691.637 5.311 1.693l-.109-.852c-1.62-.904-3.351-1.423-5.201-1.425-1.851-.002-3.583.52-5.203 1.425z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M286.897 183.448h-61.793a1.104 1.104 0 01-.918-1.715l30.897-46.345c.409-.612 1.427-.612 1.836 0l30.897 46.345c.225.339.247.774.055 1.133a1.107 1.107 0 01-.974.582zm-59.732-2.207h57.671L256 137.99l-28.835 43.251zM256 126.069c-.61 0-1.103-.493-1.103-1.103v-4.414a1.102 1.102 0 112.206 0v4.414c0 .61-.493 1.103-1.103 1.103z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M258.207 126.069h-4.414a1.102 1.102 0 110-2.206h4.414a1.102 1.102 0 110 2.206z"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#41479B"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M256 205.517c-.079 0-.161-.009-.239-.025-1.08-.242-4.684-1.106-5.747-2.159a3.456 3.456 0 01-.019-4.879 3.424 3.424 0 012.435-1.017h.012c.917 0 1.779.355 2.43 1.002 1.063 1.056 1.954 4.651 2.202 5.728.085.369-.025.757-.292 1.026a1.104 1.104 0 01-.782.324zm-3.558-5.875c-.294.097-.647.131-.882.366a1.244 1.244 0 00.008 1.757c.267.26 1.46.712 2.89 1.119-.418-1.425-.877-2.614-1.141-2.881l.777-.782-.778.782a1.226 1.226 0 00-.874-.361z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M256 205.517a1.102 1.102 0 01-1.075-1.352c.248-1.078 1.14-4.672 2.202-5.728.654-.649 1.433-.943 2.442-1.002a3.42 3.42 0 012.434 1.017 3.452 3.452 0 01-.017 4.877c-1.064 1.056-4.668 1.92-5.748 2.162a1.12 1.12 0 01-.238.026zm1.906-6.297l.777.782c-.264.267-.723 1.457-1.141 2.881 1.43-.407 2.623-.857 2.891-1.121a1.243 1.243 0 00.006-1.754 1.226 1.226 0 00-.876-.366h-.004c-.33 0-.64.127-.874.36l-.779-.782zm0 0h.022-.022z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M251.586 212.138c-.61 0-1.103-.493-1.103-1.103 0-5.038 4.819-7.505 5.024-7.608a1.105 1.105 0 01.991 1.972c-.039.02-3.807 1.976-3.807 5.635a1.104 1.104 0 01-1.105 1.104z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M260.414 212.138c-.61 0-1.103-.493-1.103-1.103 0-3.659-3.768-5.617-3.807-5.635a1.105 1.105 0 01-.487-1.481 1.102 1.102 0 011.478-.491c.205.104 5.024 2.569 5.024 7.608a1.105 1.105 0 01-1.105 1.102z"
  }))));
}

function SvgSx(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828V168H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V168h512v158.897a8.828 8.828 0 01-8.828 8.827z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.256 333.59l244.341-160.086c3.966-2.599 3.966-8.412 0-11.009L3.256 2.41C1.311 4.029 0 6.375 0 9.103v317.793c0 2.729 1.311 5.075 3.256 6.694z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FFE15A",
    cx: 90.505,
    cy: 133.926,
    r: 27.719
  }), /*#__PURE__*/react.createElement("path", {
    d: "M124.39 159.606c.11 3.363.476 6.833.829 10.187 1.385 13.163 2.582 24.533-10.06 28.943-2.988 1.042-7.06 1.626-10.996 2.19-5.651.81-10.711 1.534-13.654 3.585-2.943-2.05-8.002-2.775-13.654-3.585-3.936-.564-8.009-1.149-10.996-2.19-12.642-4.41-11.445-15.78-10.06-28.943.353-3.354.718-6.824.829-10.187.393-11.918-2.12-23.596-3.885-30.197 2.941 1.207 7.018 2.296 12.017 2.208 2.154-.043 4.573-.35 7.133-.674 5.844-.745 12.467-1.583 17.768.512l.85.378.85-.378c5.3-2.095 11.924-1.257 17.768-.512 2.56.324 4.979.631 7.133.674 4.999.088 9.077-1.002 12.017-2.208-1.77 6.6-4.282 18.279-3.889 30.197z",
    fill: "#8CD7FF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M129.007 159.453c-.557-16.894 5.207-33.843 5.266-34.012l-3.633-2.551c-.047.039-5.511 4.277-14.291 4.108-1.908-.036-4.207-.329-6.642-.639-6.113-.774-13.009-1.651-19.199.486-6.19-2.136-13.085-1.259-19.199-.486-2.434.309-4.734.602-6.642.639-8.78.169-14.243-4.07-14.291-4.108l-3.633 2.551c.057.169 5.823 17.118 5.266 34.012-.105 3.199-.461 6.583-.807 9.856-1.389 13.206-2.964 28.175 13.133 33.791 3.411 1.188 7.721 1.714 11.862 2.4 12.433 2.06 14.31 5.236 14.31 5.236s1.877-3.177 14.31-5.236c4.141-.686 8.451-1.212 11.862-2.4 16.098-5.615 14.524-20.585 13.133-33.791-.343-3.274-.7-6.657-.805-9.856zm-4.617.153c.11 3.363.476 6.833.829 10.187 1.385 13.163 2.582 24.533-10.06 28.943-2.988 1.042-7.06 1.626-10.996 2.19-5.651.81-10.711 1.534-13.654 3.585-2.943-2.05-8.002-2.775-13.654-3.585-3.936-.564-8.009-1.149-10.996-2.19-12.642-4.41-11.445-15.78-10.06-28.943.353-3.354.718-6.824.829-10.187.393-11.918-2.12-23.596-3.885-30.197 2.941 1.207 7.018 2.296 12.017 2.208 2.154-.043 4.573-.35 7.133-.674 5.844-.745 12.467-1.583 17.768.512l.85.378.85-.378c5.3-2.095 11.924-1.257 17.768-.512 2.56.324 4.979.631 7.133.674 4.999.088 9.077-1.002 12.017-2.208-1.77 6.6-4.282 18.279-3.889 30.197z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M114.33 188.004v-10.183h1.745v-3.003h-4.268v-10.457h4.268l-19.518-13.827v-5.201h2.715l-8.764-6.208-8.762 6.208h2.713v5.201l-19.518 13.827h4.269v10.457h-4.269v3.003h1.746v10.183h-2.55v4.395h52.744v-4.395z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#41AA5A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M65.193 146.33c-.622 1.474-.516 3.036.145 4.185 1.286-.328 2.478-1.341 3.101-2.814.622-1.474.516-3.036-.145-4.185-1.285.328-2.478 1.341-3.101 2.814z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M68.216 146.794c.407 1.547 1.446 2.719 2.671 3.225.818-1.044 1.143-2.575.736-4.122-.407-1.547-1.446-2.719-2.671-3.225-.817 1.043-1.143 2.575-.736 4.122zm4.698-2.572c1.5.557 3.055.384 4.175-.328-.383-1.27-1.448-2.418-2.947-2.975-1.5-.557-3.055-.384-4.175.328.383 1.269 1.447 2.416 2.947 2.975z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M74.321 141.582c1.464-.644 2.461-1.852 2.769-3.142-1.16-.644-2.722-.727-4.186-.084-1.464.644-2.46 1.852-2.769 3.142 1.158.645 2.721.728 4.186.084zm-9.842 1.334c1.305-.926 2.038-2.308 2.081-3.635-1.265-.398-2.813-.165-4.118.76-1.305.925-2.038 2.308-2.081 3.635 1.265.399 2.814.166 4.118-.76z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M63.389 140.983c2.008 1.15 4.159 1.462 5.759 1-.412-1.614-1.769-3.311-3.777-4.461-2.008-1.15-4.159-1.462-5.759-1 .412 1.614 1.77 3.311 3.777 4.461z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M71.86 143.341c0-.78-.621-1.408-1.395-1.437a1.44 1.44 0 00-1.437-1.395 1.44 1.44 0 00-1.437 1.395 1.44 1.44 0 00-1.395 1.437c0 .78.621 1.407 1.395 1.437a1.44 1.44 0 001.437 1.395 1.44 1.44 0 001.437-1.395 1.443 1.443 0 001.395-1.437z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#F5F5F5",
    cx: 69.032,
    cy: 143.338,
    r: 1
  }), /*#__PURE__*/react.createElement("path", {
    d: "M67.34 141.909c0-.642-.511-1.158-1.146-1.181a1.185 1.185 0 00-1.181-1.146c-.642 0-1.158.511-1.181 1.146a1.185 1.185 0 00-1.146 1.181c0 .642.511 1.158 1.146 1.181.024.636.54 1.146 1.181 1.146.642 0 1.158-.511 1.181-1.146a1.185 1.185 0 001.146-1.181z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#F5F5F5",
    cx: 65.013,
    cy: 141.903,
    r: 1
  }), /*#__PURE__*/react.createElement("path", {
    d: "M71.676 139.906a.855.855 0 00-.826-.851.854.854 0 00-.851-.826.854.854 0 00-.851.826.854.854 0 00-.826.851c0 .462.369.834.826.851a.854.854 0 00.851.826.854.854 0 00.851-.826.853.853 0 00.826-.851z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#F5F5F5",
    cx: 70.003,
    cy: 139.906,
    r: 1
  }), /*#__PURE__*/react.createElement("path", {
    d: "M68.494 138.46a.855.855 0 00-.826-.851.854.854 0 00-.851-.826.855.855 0 00-.851.826.854.854 0 00-.826.851c0 .463.369.834.826.851a.854.854 0 00.851.826.855.855 0 00.851-.826.854.854 0 00.826-.851z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(66 133)",
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 0.814,
    cy: 5.461,
    r: 1
  }), /*#__PURE__*/react.createElement("path", {
    d: "M39.406 18.156h16.021a8.778 8.778 0 00-5.535-4.907c.182-1.166.294-2.461.294-3.85 0-4.839-1.239-8.761-2.769-8.761s-2.769 3.923-2.769 8.761c0 1.388.111 2.684.294 3.85a8.775 8.775 0 00-5.536 4.907z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M90.508 229.793c-33.754 0-61.216-27.46-61.216-61.216h11.55c0 27.386 22.28 49.665 49.665 49.665 27.385 0 49.665-22.279 49.665-49.665h11.552c0 33.756-27.46 61.216-61.216 61.216z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M113.196 113.879h-9.983a1.815 1.815 0 100-3.63H90.508a1.815 1.815 0 100 3.63H67.821a2.722 2.722 0 100 5.444h8.167a1.814 1.814 0 10.001 3.63h16.335a1.815 1.815 0 00.001-3.63h20.872a2.722 2.722 0 10-.001-5.444z",
    fill: "#C87878"
  })));
}

function SvgSy(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M150.03 135.314l7.36 22.068 23.262.18c3.011.023 4.26 3.866 1.837 5.656l-18.713 13.82 7.017 22.179c.908 2.871-2.361 5.247-4.811 3.496l-18.925-13.527-18.925 13.527c-2.451 1.751-5.719-.625-4.811-3.496l7.017-22.179-18.713-13.82c-2.423-1.789-1.174-5.633 1.837-5.656l23.262-.18 7.36-22.068c.952-2.857 4.993-2.857 5.946 0zm217.887 0l7.36 22.068 23.262.18c3.011.023 4.26 3.866 1.837 5.656l-18.713 13.82 7.017 22.179c.908 2.871-2.361 5.247-4.811 3.496l-18.925-13.527-18.925 13.527c-2.451 1.751-5.72-.625-4.811-3.496l7.017-22.179-18.713-13.82c-2.423-1.789-1.174-5.633 1.837-5.656l23.262-.18 7.36-22.068c.952-2.857 4.993-2.857 5.946 0z",
    fill: "#73AF00"
  })));
}

function SvgSz(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 273.931h512v52.966a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897v-52.966zM8.828.276h494.345a8.829 8.829 0 018.828 8.828V62.07H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 62.069h512v211.862H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 53.241h512v17.655H0zm0 211.862h512v17.655H0zm448.897-88.584H62.734a4.744 4.744 0 01-4.745-4.745v-1.501a4.744 4.744 0 014.745-4.745h386.163a4.744 4.744 0 014.745 4.745v1.501a4.745 4.745 0 01-4.745 4.745z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M373.962 154.538l19.233-8.243 19.233 8.243-19.233 8.243z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M378.695 151.027H96.456a3.51 3.51 0 100 7.022h282.238a3.511 3.511 0 00.001-7.022z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M393.959 135.305l19.233-8.243 19.233 8.243-19.233 8.243z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M398.69 131.794H116.452a3.51 3.51 0 100 7.022H398.69a3.511 3.511 0 000-7.022z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.816 99.586c-48.808 0-91.39 27.639-114.197 68.69 22.806 41.05 65.389 68.69 114.197 68.69 48.808 0 91.39-27.639 114.197-68.69-22.806-41.051-65.39-68.69-114.197-68.69z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M141.62 168.276c22.806 41.05 65.389 68.69 114.197 68.69 8.15 0 16.106-.836 23.846-2.312-5.909-12.971-26.691-12.949-27.967-17.837-1.374-5.266 16.943-4.121 20.149-8.472 3.206-4.35-17.401-6.182-18.317-10.532-.916-4.351 8.243-7.327 9.846-14.196 1.603-6.869 5.266-8.929 8.013-13.05 2.748-4.121-4.579-5.495-6.411-19.233-1.832-13.738-12.594-15.57-17.859-26.788-5.267-11.219 3.206-19.462 8.701-24.957-48.809-.003-91.392 27.636-114.198 68.687z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M184.375 143.548h5.495v21.981h-5.495zm10.991 0h5.495v21.981h-5.495zm10.99 0h5.495v21.981h-5.495zm10.99 0h5.495v21.981h-5.495zm10.991 0h5.495v21.981h-5.495zm10.99 0h5.495v21.981h-5.495zm-54.952 32.971h5.495V198.5h-5.495zm10.991 0h5.495V198.5h-5.495zm10.99 0h5.495V198.5h-5.495zm10.99 0h5.495V198.5h-5.495zm10.991 0h5.495V198.5h-5.495zm10.99 0h5.495V198.5h-5.495z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M266.803 143.548h5.495v21.981h-5.495zm10.99 0h5.495v21.981h-5.495zm10.99 0h5.495v21.981h-5.495zm10.991 0h5.495v21.981h-5.495zm10.99 0h5.495v21.981h-5.495zm10.99 0h5.495v21.981h-5.495zm-54.951 32.971h5.495V198.5h-5.495zm10.99 0h5.495V198.5h-5.495zm10.99 0h5.495V198.5h-5.495zm10.991 0h5.495V198.5h-5.495zm10.99 0h5.495V198.5h-5.495zm10.99 0h5.495V198.5h-5.495z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M425.386 164.67c-4.401 10.223-16.925 11.426-9.985 37.486l3.554-3.608s3.723 9.823 12.693 16.438c0 0 11-9.222 11.847-23.854l4.569 2.005c0-.003-2.2-26.663-22.678-28.467z",
    fill: "#245DBD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M441.633 185.618c-.352 0-.701-.163-.966-.482-4.31-5.199-9.8-6.866-9.853-6.884-.725-.213-1.169-1.084-.989-1.942.18-.852.915-1.385 1.636-1.172.254.075 6.27 1.886 11.136 7.755.524.627.515 1.647-.015 2.268a1.244 1.244 0 01-.949.457zm-3.102 12.128c-.405 0-.807-.213-1.074-.627-3.197-4.924-6.823-7.605-6.86-7.63-.638-.463-.833-1.453-.441-2.211.394-.751 1.227-.983 1.865-.52.167.119 4.088 3.026 7.584 8.407.455.702.344 1.71-.248 2.249a1.218 1.218 0 01-.826.332zm-7.105 13.499a1.05 1.05 0 01-.233-.025c-.735-.15-1.233-.978-1.106-1.848.534-3.671.087-9.691-.646-12.798-.201-.852.22-1.736.939-1.98.727-.232 1.468.263 1.668 1.116.828 3.508 1.312 10.055.708 14.201-.112.783-.685 1.334-1.33 1.334zm-9.523-14.809c-.386 0-.769-.194-1.036-.57-.481-.676-.409-1.692.161-2.261.034-.031 3.49-3.54 4.393-8.394.161-.864.878-1.409 1.613-1.221.729.188 1.193 1.046 1.032 1.911-1.106 5.939-5.122 9.992-5.294 10.161a1.242 1.242 0 01-.869.374zm-3.76-10.261c-.455 0-.899-.269-1.155-.765-.392-.751-.193-1.741.445-2.205.051-.038 4.961-3.652 6.484-7.598.309-.814 1.119-1.172 1.795-.796.68.37.979 1.322.669 2.124-1.869 4.842-7.302 8.833-7.531 9.002a1.19 1.19 0 01-.707.238z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M82.285 168.11c-3.679 8.548-14.152 9.555-8.35 31.345l2.972-3.017s3.113 8.213 10.614 13.745c0 0 9.198-7.711 9.906-19.947l3.821 1.676c0 .001-1.839-22.292-18.963-23.802z",
    fill: "#245DBD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M95.871 185.628c-.295 0-.586-.136-.807-.404-3.604-4.348-8.194-5.741-8.239-5.757-.606-.178-.978-.906-.826-1.624.15-.713.765-1.158 1.368-.98.212.063 5.242 1.577 9.311 6.485.438.524.431 1.377-.013 1.896a1.04 1.04 0 01-.794.384zm-2.594 10.14c-.339 0-.674-.178-.898-.524-2.674-4.117-5.705-6.359-5.736-6.38-.533-.387-.696-1.215-.37-1.849.33-.629 1.026-.822 1.559-.435.139.099 3.418 2.53 6.342 7.03.381.587.288 1.43-.207 1.88-.206.189-.45.278-.69.278zm-5.942 11.289a.866.866 0 01-.194-.021c-.615-.126-1.031-.818-.925-1.545.447-3.07.073-8.104-.54-10.701-.168-.713.183-1.451.785-1.655.608-.194 1.227.22 1.395.932.692 2.933 1.097 8.407.593 11.875-.095.653-.575 1.115-1.114 1.115zm-7.963-12.383c-.323 0-.643-.162-.867-.477-.403-.566-.343-1.415.135-1.891.029-.026 2.919-2.959 3.672-7.019.135-.723.734-1.178 1.348-1.022.61.157.998.875.863 1.598-.925 4.966-4.284 8.355-4.427 8.497a1.026 1.026 0 01-.724.314zm-3.144-8.581c-.381 0-.751-.225-.967-.639-.328-.629-.161-1.457.372-1.844.042-.031 4.148-3.054 5.422-6.354.258-.681.936-.98 1.502-.665.568.309.818 1.106.559 1.775-1.564 4.049-6.105 7.385-6.297 7.527a.988.988 0 01-.591.2z",
    fill: "#FF4B55"
  })));
}

function SvgTc(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.333l-81.77 53.573V.276h-44.138v53.573L24.161.276H8.828A8.829 8.829 0 000 9.104v7.002l70.155 45.963H0v44.138h70.155L0 152.171v7.001A8.829 8.829 0 008.828 168h15.333l81.77-53.573V168h44.138v-53.573L231.838 168h15.333a8.829 8.829 0 008.828-8.828v-7.002l-70.154-45.963h70.154V62.069h-70.155l70.155-45.963V9.104a8.827 8.827 0 00-8.827-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M255.999 70.897H141.241V.276h-26.483v70.621H0v26.482h114.758V168h26.483V97.379h114.758z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.333 0 5.961 0 9.104v.458l80.889 52.507h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.195-61.793H89.474zm166.385 53.66l-82.666-53.659H156.98l93.873 60.934c2.813-1.305 4.741-4.04 5.006-7.275z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M344.072 117.977a1.928 1.928 0 00-1.928 1.928v32.773c0 65.548 46.269 77.114 46.269 77.114s46.269-11.567 46.269-77.114v-32.773a1.928 1.928 0 00-1.928-1.928h-88.682z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M429.863 122.797v29.881c0 55.751-34.461 69.813-41.448 72.089-7.026-2.291-41.451-16.369-41.451-72.089v-29.881h82.899zm2.891-4.82h-88.682a1.928 1.928 0 00-1.928 1.928v32.773c0 65.548 46.269 77.114 46.269 77.114s46.269-11.567 46.269-77.114v-32.773a1.928 1.928 0 00-1.928-1.928z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M393.588 179.04h-9.863s-7.954 7.954-9.778 25.426a1.654 1.654 0 00.608 1.468c1.673 1.311 6.372 4.339 14.101 4.339 7.729 0 12.428-3.028 14.101-4.339.441-.345.665-.91.608-1.468-1.823-17.472-9.777-25.426-9.777-25.426z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M393.588 177.396h-9.863v-8.218a4.946 4.946 0 014.931-4.931 4.946 4.946 0 014.931 4.931v8.218h.001zm0 3.288h-9.863a1.644 1.644 0 110-3.288h9.863a1.644 1.644 0 110 3.288z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M426.463 144.339c-.291 0-4.579.02-9.041.787v-2.57a46.509 46.509 0 017.517-2.622.822.822 0 00-.376-1.6c-.248.057-3.561.854-7.171 2.425a4.883 4.883 0 00-.956-2.635c2.946-2.28 5.455-3.729 5.502-3.755a.823.823 0 00-.813-1.429c-.199.114-2.831 1.632-5.887 4.019a4.897 4.897 0 00-5.584.07c.843-4.23 2.575-6.061 2.599-6.084a.821.821 0 00-1.165-1.159c-.098.098-1.695 1.747-2.707 5.452-1.012-3.706-2.609-5.355-2.707-5.452a.821.821 0 00-1.166 1.16c.023.023 1.756 1.855 2.599 6.084a4.895 4.895 0 00-5.584-.07c-3.055-2.388-5.687-3.905-5.887-4.019a.821.821 0 10-.813 1.429c.046.026 2.556 1.474 5.503 3.754a4.89 4.89 0 00-.957 2.636c-3.609-1.572-6.923-2.368-7.171-2.425a.822.822 0 00-.376 1.6c.063.014 3.752.903 7.517 2.622v2.57c-4.461-.768-8.749-.787-9.041-.787a.821.821 0 100 1.644c.071 0 4.564.018 9.041.812v2.659c-2.466-.074-5.217.271-7.765 1.547a.82.82 0 10.735 1.47c2.269-1.133 4.769-1.429 7.029-1.353v10.17a19.09 19.09 0 01-.366 3.708l-1.261 6.304a.822.822 0 001.612.323l1.261-6.304c.265-1.325.399-2.68.399-4.03v-10.048c1.233.138 2.34.36 3.231.583l.627 8.14a3.528 3.528 0 001.327 2.486l-2.666 3.998c-1.428 2.143.107 5.012 2.682 5.012h4.391c2.574 0 4.11-2.87 2.682-5.012l-2.666-3.998a3.526 3.526 0 001.327-2.486l.626-8.14c.89-.223 1.998-.445 3.231-.583v10.047c0 1.35.134 2.705.399 4.03l1.261 6.304a.822.822 0 101.612-.323l-1.261-6.304a18.99 18.99 0 01-.366-3.708v-10.172c2.26-.076 4.761.22 7.029 1.353a.824.824 0 001.102-.368.82.82 0 00-.367-1.102c-2.547-1.273-5.298-1.619-7.765-1.546v-2.66c4.477-.794 8.97-.812 9.041-.812a.822.822 0 00.003-1.642zm-10.685 1.102c-.982.213-1.949.466-2.86.769a4.58 4.58 0 00-.145-.942 20.931 20.931 0 013.006-1.909v2.082h-.001zm0-4.39v.455c-1.302.647-2.584 1.397-3.732 2.248a4.503 4.503 0 00-.829-.871c1.229-1.362 2.596-2.624 3.941-3.737a3.24 3.24 0 01.62 1.905zm-3.287-3.288c.49 0 .951.115 1.369.308-1.42 1.193-2.86 2.55-4.149 4.022a4.327 4.327 0 00-.509-.135v-.087c0-.374.013-.729.026-1.082.137-1.688 1.539-3.026 3.263-3.026zm-8.219 0c1.724 0 3.126 1.337 3.261 3.027.013.353.026.707.026 1.082v.087a4.38 4.38 0 00-.509.135c-1.289-1.472-2.729-2.829-4.149-4.022.42-.194.881-.309 1.371-.309zm-3.287 3.288c0-.713.233-1.368.62-1.907 1.345 1.113 2.711 2.376 3.94 3.737-.316.252-.59.546-.829.872-1.148-.851-2.429-1.601-3.732-2.248l.001-.454zm0 2.309a21.043 21.043 0 013.006 1.909 4.458 4.458 0 00-.145.941 27.906 27.906 0 00-2.86-.769v-2.081h-.001zm0 6.209v-2.441c1.03.233 2.024.515 2.935.854l.162 2.105a25.315 25.315 0 00-3.097-.518zm14.793.001c-1.153.12-2.204.31-3.097.518l.162-2.105c.911-.339 1.906-.62 2.935-.854v2.441z",
    fill: "#D35A10"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M374.534 166.529h-3.692l-14.109-12.541a5.536 5.536 0 01-1.694-5.483l3.934-15.737c.348-1.393 2.082-1.873 3.096-.857l6.385 6.385c.346.346.815.541 1.305.541h4.773v27.693h.002v-.001z",
    fill: "#FFA033"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M371.888 135.051l-2.265 10.197a11.09 11.09 0 00.203 5.586l4.708 15.695h3.692l4.708-15.695c.544-1.814.615-3.737.203-5.586l-2.265-10.197a4.597 4.597 0 00-4.488-3.599h-.01a4.593 4.593 0 00-4.486 3.599z",
    fill: "#FF9480"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M376.38 135.144c-1.02 0-1.846.826-1.846 1.846v29.539h3.692V136.99c0-1.02-.827-1.846-1.846-1.846z",
    fill: "#FFA0E4"
  })));
}

function SvgTd(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M170.667 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h161.839v335.448z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M170.67.276h170.67v335.448H170.67z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H341.333V.276h161.839A8.829 8.829 0 01512 9.104v317.792a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  })));
}

function SvgTg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 67.366H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v58.263zM0 134.455h512v67.09H0z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 67.366h512v67.09H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896v-58.262h512v58.262a8.828 8.828 0 01-8.828 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 201.545h512v67.09H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M194.207 201.545H8.828A8.829 8.829 0 010 192.717V9.103A8.829 8.829 0 018.828.275h185.379a8.829 8.829 0 018.828 8.828v183.614a8.83 8.83 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M99.335 47.637L86.577 85.889l-40.322.312c-2.21.018-3.127 2.838-1.348 4.151l32.438 23.954-12.163 38.446c-.666 2.108 1.734 3.851 3.531 2.566l32.806-23.448 32.806 23.448c1.799 1.286 4.199-.458 3.531-2.566l-12.163-38.445 32.438-23.954c1.779-1.313.862-4.135-1.348-4.151l-40.322-.312L103.7 47.638c-.7-2.099-3.666-2.099-4.365-.001z",
    fill: "#F5F5F5"
  })));
}

function SvgTh(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 514 334",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    stroke: "#000",
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#A51931",
    d: "M1 1h512v57H1z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F4F5F8",
    d: "M1 58h512v57H1z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#2D2A4A",
    d: "M1 115h512v104H1z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F4F5F8",
    d: "M1 219h512v57H1z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#A51931",
    d: "M1 276h512v57H1z"
  })));
}

function SvgTj(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFCD5A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M227.069 199.535c3.67-1.849 5.817-4.897 6.966-7.097 6.575 4.296 12.209 2.837 15.145 1.463 2.865-1.342 5.224-3.531 6.798-5.762 1.575 2.231 3.934 4.42 6.798 5.762 2.935 1.374 8.569 2.83 15.145-1.463 1.148 2.2 3.295 5.247 6.966 7.097 2.116 1.066 4.448 1.601 6.979 1.601 2.6 0 5.408-.563 8.408-1.687l-1.457-3.886c-4.771 1.789-8.819 1.886-12.025.286-4.488-2.237-5.986-7.17-5.998-7.211l-.875-3.063-2.447 2.038c-4.318 3.596-8.789 4.478-12.936 2.53-4.211-1.972-6.484-5.963-6.484-7.16v-17.907c.898-1.975 2.879-3.358 5.186-3.358.793 0 1.577.172 2.329.511l2.568 1.159-.388-2.792c-.814-5.866-5.875-10.289-11.77-10.289-5.896 0-10.956 4.423-11.77 10.289l-.388 2.792 2.568-1.159a5.635 5.635 0 012.329-.511c2.307 0 4.289 1.383 5.186 3.358v17.907c0 1.197-2.272 5.188-6.484 7.16-4.145 1.947-8.618 1.068-12.936-2.53l-2.429-2.012-.893 3.029c-.014.049-1.513 4.982-6.001 7.219-3.209 1.601-7.255 1.505-12.025-.286l-1.457 3.886c2.999 1.124 5.809 1.687 8.408 1.687 2.535-.001 4.867-.535 6.984-1.601zm21.647-40.93c-.248 0-.495.01-.742.032 1.389-3.096 4.495-5.219 8.003-5.219 3.507 0 6.614 2.123 8.003 5.219-3.226-.284-6.278 1.292-8.003 3.789a8.81 8.81 0 00-7.261-3.821zm-28.665 54.122l1.315 3.935c8.821-2.944 21.438-4.633 34.612-4.633 13.174 0 25.791 1.689 34.612 4.633l1.315-3.935c-9.228-3.082-22.324-4.849-35.927-4.849-13.603.001-26.699 1.767-35.927 4.849z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.978 203.73c2.163.007 4.068-1.279 5.359-3.01-.858-.53-2.004-.84-3.302-1.001.001-.047.017-.09.017-.138 0-1.779-.84-3.315-2.074-4.149-1.235.834-2.074 2.37-2.074 4.149 0 .047.015.09.017.138-1.297.161-2.443.47-3.302 1.001 1.289 1.731 3.195 3.015 5.359 3.01zm-19.043 1.96c2.12-.426 3.731-2.067 4.649-4.021-.947-.348-2.132-.422-3.434-.32-.009-.046-.002-.092-.012-.139-.355-1.742-1.485-3.08-2.862-3.65-1.043 1.065-1.559 2.738-1.203 4.48.01.047.033.086.043.132-1.238.417-2.3.949-3.034 1.641 1.611 1.438 3.734 2.316 5.853 1.877zm39.745-8.131c-1.377.57-2.507 1.908-2.862 3.65-.01.047-.003.092-.012.139-1.302-.102-2.487-.028-3.434.32.918 1.955 2.529 3.595 4.649 4.021 2.119.439 4.242-.439 5.854-1.878-.735-.691-1.796-1.224-3.034-1.641.011-.046.034-.085.043-.132.355-1.741-.162-3.414-1.204-4.479zm-21.256-76.409l-1.398 4.191-4.417.034c-.572.004-.809.734-.349 1.074l3.553 2.624-1.332 4.212c-.172.545.448.996.914.664l3.594-2.569 3.594 2.569a.595.595 0 00.914-.664l-1.333-4.212 3.553-2.624c.46-.34.223-1.069-.349-1.074l-4.417-.034-1.398-4.191a.595.595 0 00-1.129 0zm-25.286 6.915l-1.398 4.191-4.417.034c-.572.004-.809.734-.349 1.074l3.553 2.624-1.333 4.212c-.172.545.448.996.914.664l3.594-2.569 3.594 2.569a.595.595 0 00.914-.664l-1.333-4.212 3.553-2.624c.46-.34.223-1.069-.349-1.074l-4.417-.034-1.398-4.191c-.18-.543-.947-.543-1.128 0zm-18.585 18.672l-1.398 4.191-4.417.034c-.572.004-.809.734-.349 1.074l3.553 2.624-1.332 4.212c-.172.545.448.996.914.664l3.594-2.569 3.594 2.569a.595.595 0 00.914-.664l-1.332-4.212 3.553-2.624c.46-.34.223-1.069-.349-1.074l-4.417-.034-1.398-4.191c-.182-.542-.949-.542-1.13 0zm-6.829 25.242l-1.398 4.191-4.417.034c-.572.004-.809.734-.349 1.074l3.553 2.624-1.333 4.212c-.172.545.448.996.914.664l3.594-2.569 3.594 2.569a.595.595 0 00.914-.664l-1.333-4.212 3.553-2.624c.46-.34.223-1.069-.349-1.074l-4.417-.034-1.398-4.191c-.18-.543-.947-.543-1.128 0zm77.138-43.914l1.398 4.191 4.417.034c.572.004.809.734.349 1.074l-3.553 2.624 1.333 4.212c.172.545-.448.996-.914.664l-3.594-2.569-3.594 2.569a.595.595 0 01-.914-.664l1.333-4.212-3.553-2.624c-.46-.34-.223-1.069.349-1.074l4.417-.034 1.398-4.191c.18-.543.947-.543 1.128 0zm18.585 18.672l1.398 4.191 4.417.034c.572.004.809.734.349 1.074l-3.553 2.624 1.333 4.212c.172.545-.448.996-.914.664l-3.594-2.569-3.594 2.569a.595.595 0 01-.914-.664l1.333-4.212-3.553-2.624c-.46-.34-.223-1.069.349-1.074l4.417-.034 1.398-4.191c.18-.542.947-.542 1.128 0zm6.829 25.242l1.398 4.191 4.417.034c.572.004.809.734.349 1.074l-3.553 2.624 1.332 4.212c.172.545-.448.996-.914.664l-3.594-2.569-3.594 2.569a.595.595 0 01-.914-.664l1.332-4.212-3.553-2.624c-.46-.34-.223-1.069.349-1.074l4.417-.034 1.398-4.191c.182-.543.949-.543 1.13 0z"
  }))));
}

function SvgTk(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M476.689 282.758H123.586a8.829 8.829 0 010-17.656h353.103l8.828 8.828-8.828 8.828zm4.413-26.482H123.586S264.827 97.38 397.241 62.07c0 0-44.138 114.758 61.793 185.379h22.069a4.414 4.414 0 11-.001 8.827z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M108.162 205.173l3.425 10.271 10.826.084c1.401.011 1.983 1.8.855 2.632l-8.709 6.431 3.266 10.323c.423 1.336-1.099 2.442-2.239 1.626l-8.808-6.295-8.808 6.295c-1.14.815-2.662-.29-2.239-1.626l3.266-10.323-8.709-6.431c-1.128-.833-.546-2.622.855-2.632l10.826-.084 3.425-10.271c.443-1.33 2.324-1.33 2.768 0zM107.9 63.97l2.778 8.332 8.783.068c1.138.009 1.609 1.46.694 2.135l-7.065 5.218 2.649 8.374c.343 1.085-.892 1.981-1.816 1.32l-7.146-5.108-7.146 5.108c-.925.661-2.159-.236-1.816-1.32l2.649-8.374-7.065-5.218c-.915-.675-.444-2.126.694-2.135l8.783-.068 2.778-8.332c.361-1.078 1.887-1.078 2.246 0zm-66.541 51.56l2.778 8.332 8.783.068c1.138.009 1.609 1.46.694 2.135l-7.065 5.218 2.649 8.374c.343 1.085-.892 1.981-1.816 1.32l-7.146-5.108-7.146 5.108c-.925.661-2.159-.236-1.816-1.32l2.649-8.374-7.065-5.218c-.915-.675-.444-2.126.694-2.135l8.783-.068 2.778-8.332c.361-1.079 1.887-1.079 2.246 0zm114.13-3.514l2.138 6.412 6.759.052c.875.007 1.238 1.123.534 1.643l-5.438 4.015 2.039 6.444c.264.834-.686 1.525-1.398 1.015l-5.498-3.93-5.498 3.93c-.712.509-1.662-.181-1.398-1.015l2.039-6.444-5.438-4.015c-.704-.52-.341-1.636.534-1.643l6.759-.052 2.138-6.412c.277-.831 1.451-.831 1.728 0z",
    fill: "#F5F5F5"
  })));
}

function SvgTm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M70.621.276h88.276v335.448H70.621z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M150.069 38.529l-17.655 14.713H97.103L79.448 38.529V23.816L97.103 9.104h35.311l17.655 14.712z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M150.069 162.115l-17.655 14.713H97.103l-17.655-14.713v-14.712l17.655-14.713h35.311l17.655 14.713zm0-61.793l-17.655 14.713H97.103l-17.655-14.713V85.61l17.655-14.713h35.311l17.655 14.713zm0 123.586l-17.655 14.713H97.103l-17.655-14.713v-14.712l17.655-14.713h35.311l17.655 14.713z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M70.621 44.414l17.655 17.655-17.655 17.655zm88.275 35.31l-17.655-17.655 17.655-17.655zm-88.275 26.483l17.655 17.655-17.655 17.655zm88.275 35.31l-17.655-17.655 17.655-17.655zM70.621 168l17.655 17.655-17.655 17.655zm88.275 35.31l-17.655-17.655L158.896 168zm-88.275 26.483l17.655 17.655-17.655 17.655zm88.275 35.31l-17.655-17.655 17.655-17.655zM70.621.276h17.655L70.621 17.931zm88.275 17.655L141.241.276h17.655zm-48.551 52.966h8.828v44.138h-8.828z",
    fill: "#FFB400"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M97.103 88.552h35.31v8.828h-35.31z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFB400"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M141.241 78.253l-8.827-7.356v44.138l8.827-7.357zm-52.965 29.425l8.827 7.357V70.898l-8.827 7.355zm26.482-98.574H97.104L79.448 23.816v7.357h35.31z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M114.758 53.242h17.656l17.655-14.713v-7.356h-35.311z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M114.758 44.414L97.103 31.225l17.655-13.294 17.656 13.294z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M114.758 44.414l17.656-13.189-.069-.052h-17.587zm0-13.241V17.931L97.173 31.173z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M97.103 141.517h35.31V168h-35.31z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFB400",
    d: "M132.414 150.345h8.828v8.828h-8.828z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M110.345 150.345h8.828v8.828h-8.828z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M110.345 203.31h8.828v8.828h-8.828z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M123.586 212.138h8.828v8.828h-8.828zm-26.483 0h8.828v8.828h-8.828z",
    fill: "#FFB400"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M110.345 220.965h8.828v8.828h-8.828z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFB400",
    d: "M88.276 150.345h8.828v8.828h-8.828z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M150.069 285.701l-17.655 14.713H97.103l-17.655-14.713v-14.712l17.655-14.713h35.311l17.655 14.713z"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFB400"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M114.758 256.276H97.104l-17.656 14.712v7.357h35.31z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M114.758 300.414h17.656l17.655-14.713v-7.356h-35.311z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M132.414 282.758l-17.656 8.828-17.655-8.828v-8.827l17.655-8.828 17.656 8.828z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M280.01 48.343c-.94-.462-1.791.761-1.028 1.48 9.99 9.427 16.303 22.666 16.303 37.433 0 29.007-23.316 52.279-51.986 52.279a50.825 50.825 0 01-15.197-2.328c-.996-.311-1.641 1.025-.783 1.621 8.382 5.827 18.485 9.31 29.514 9.31 29.049 0 52.787-23.275 52.787-52.703-.001-20.682-12.14-38.503-29.61-47.092zm-71.837 34.06l-2.159 6.109 5.08 4.021c.658.521.275 1.579-.564 1.557l-6.477-.167-2.254 6.074c-.292.787-1.417.749-1.655-.055l-1.843-6.211-6.474-.267c-.839-.034-1.15-1.116-.459-1.591l5.338-3.672-1.747-6.24c-.226-.808.706-1.439 1.372-.928l5.142 3.942 5.395-3.59c.696-.465 1.584.227 1.305 1.018zm26.234 13.25l-2.159 6.109 5.08 4.021c.658.521.275 1.579-.564 1.557l-6.477-.167-2.254 6.074c-.292.787-1.417.749-1.655-.055l-1.843-6.211-6.474-.267c-.839-.034-1.15-1.116-.459-1.591l5.338-3.672-1.747-6.24c-.226-.808.706-1.439 1.372-.928l5.142 3.942 5.395-3.59c.697-.464 1.584.228 1.305 1.018zm-.265-27.295l-2.159 6.109 5.08 4.021c.658.521.275 1.579-.564 1.557l-6.477-.167-2.254 6.074c-.292.787-1.417.749-1.655-.055l-1.843-6.211-6.474-.267c-.839-.034-1.15-1.116-.459-1.591l5.338-3.672-1.747-6.24c-.226-.808.706-1.439 1.372-.928l5.142 3.942 5.395-3.59c.697-.464 1.585.228 1.305 1.018zm.894-26.345l-2.159 6.109 5.08 4.021c.658.521.275 1.579-.564 1.557l-6.477-.167-2.254 6.074c-.292.787-1.417.749-1.655-.055l-1.843-6.211-6.474-.267c-.839-.034-1.15-1.116-.459-1.591l5.338-3.672-1.747-6.24c-.226-.808.706-1.439 1.372-.928l5.142 3.942 5.395-3.59c.696-.465 1.584.227 1.305 1.018zm25.705 13.25l-2.159 6.109 5.08 4.021c.658.521.275 1.579-.564 1.557l-6.477-.167-2.254 6.074c-.292.787-1.417.749-1.655-.055l-1.843-6.211-6.474-.267c-.839-.034-1.15-1.116-.459-1.591l5.338-3.672-1.747-6.24c-.226-.808.706-1.439 1.372-.928l5.142 3.942 5.395-3.59c.696-.465 1.584.227 1.305 1.018z",
    fill: "#F5F5F5"
  })));
}

function SvgTn(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M257.002 79.724c48.718 0 88.205 39.594 88.205 88.276 0 48.823-39.487 88.276-88.205 88.276-48.823 0-88.346-39.453-88.346-88.276-.001-48.682 39.523-88.276 88.346-88.276",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M273.043 217.466c-27.327 0-49.493-22.165-49.493-49.461 0-27.23 22.166-49.395 49.493-49.395a48.86 48.86 0 0125.405 7.102c1.112.674 2.282-.782 1.355-1.695-11.138-10.974-26.389-17.771-43.235-17.771-34.2 0-61.892 27.692-61.892 61.761 0 34.135 27.691 61.825 61.892 61.825 16.838 0 32.083-6.792 43.219-17.763.927-.913-.243-2.369-1.355-1.696a48.85 48.85 0 01-25.389 7.093z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M268.52 133.387l13.644 18.526 21.945-6.912c2.841-.895 5.186 2.342 3.452 4.762l-13.402 18.701 13.355 18.735c1.729 2.425-.625 5.656-3.464 4.754l-21.928-6.968-13.692 18.49c-1.772 2.395-5.572 1.154-5.591-1.825l-.149-23.007-21.816-7.307c-2.825-.946-2.819-4.943.008-5.881l21.835-7.252.207-23.007c.027-2.978 3.83-4.208 5.596-1.809z"
  }))));
}

function SvgTo(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M194.206 168H8.828A8.829 8.829 0 010 159.172V9.104A8.829 8.829 0 018.828.276h185.379a8.829 8.829 0 018.828 8.828v150.069a8.829 8.829 0 01-8.829 8.827z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M167.724 62.069h-44.138V17.931H79.448v44.138H35.31v44.138h44.138v44.138h44.138v-44.138h44.138z"
  })));
}

function SvgTr(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M253.474 137.752l13.837 18.101 21.606-7.232c1.208-.404 2.236.962 1.512 2.01l-12.939 18.753 13.555 18.314c.758 1.024-.224 2.423-1.444 2.059l-21.834-6.511-13.228 18.55c-.739 1.037-2.375.536-2.406-.737l-.555-22.777-21.73-6.849c-1.215-.383-1.244-2.092-.042-2.515l21.491-7.566-.202-22.783c-.012-1.274 1.606-1.829 2.379-.817zm-76.518 100.909c-38.995 0-70.627-31.633-70.627-70.663 0-38.958 31.633-70.662 70.627-70.662 14.508 0 27.887 4.462 39.037 12.014 1.707 1.156 3.656-1.087 2.227-2.573-16.664-17.325-40.248-27.894-66.398-27.001-44.926 1.533-82.118 37.553-84.989 82.413-3.287 51.383 37.399 94.086 88.055 94.086 24.953 0 47.379-10.432 63.393-27.112 1.415-1.473-.538-3.683-2.229-2.537-11.162 7.569-24.563 12.035-39.096 12.035z",
    fill: "#F5F5F5"
  })));
}

function SvgTt(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276c-2.387 0-4.535.967-6.124 2.506l359.228 332.942h26.483L26.483.276H8.828zm141.241 0h-26.483l361.931 335.448h17.655c2.387 0 4.535-.967 6.124-2.506L150.069.276z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M26.483.276l361.931 335.448h97.103L123.586.276z"
  })));
}

function SvgTv(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#3CC8FF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172 168H8.828A8.829 8.829 0 010 159.172V9.104A8.829 8.829 0 018.828.276h238.344A8.829 8.829 0 01256 9.104v150.069a8.827 8.827 0 01-8.828 8.827z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.172.276h-15.333l-81.77 53.573V.276h-44.138v53.573L24.161.276H8.828A8.829 8.829 0 000 9.104v7.002l70.155 45.963H0v44.138h70.155L0 152.171v7.001A8.829 8.829 0 008.828 168h15.333l81.77-53.573V168h44.138v-53.573L231.838 168h15.333a8.829 8.829 0 008.828-8.828v-7.002l-70.154-45.963h70.154V62.069h-70.155l70.155-45.963V9.104a8.827 8.827 0 00-8.827-8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FF4B55"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M255.999 70.897H141.241V.276h-26.483v70.621H0v26.482h114.758V168h26.483V97.379h114.758z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M97.103 62.069L4.207 1.768C1.735 3.333 0 5.961 0 9.104v.458l80.889 52.507h16.214zm69.18 0l88.374-57.366c-1.536-2.599-4.246-4.427-7.485-4.427h-1.909l-95.194 61.793h16.214zm-76.809 44.138L1.269 163.463C2.79 166.125 5.542 168 8.828 168h1.665l95.195-61.793H89.474zm166.385 53.66l-82.666-53.659H156.98l93.873 60.934c2.813-1.305 4.741-4.04 5.006-7.275z"
  })), /*#__PURE__*/react.createElement("path", {
    d: "M284.332 274.782l4.297 12.884 13.581.105c1.758.013 2.487 2.258 1.073 3.302l-10.925 8.067 4.097 12.949c.531 1.676-1.378 3.063-2.809 2.04l-11.049-7.897-11.049 7.897c-1.43 1.023-3.339-.364-2.809-2.04l4.097-12.949-10.925-8.067c-1.415-1.045-.685-3.288 1.073-3.302l13.581-.105 4.297-12.884c.553-1.668 2.913-1.668 3.47 0zm124.998-97.21l4.297 12.884 13.581.105c1.758.013 2.487 2.258 1.073 3.302l-10.925 8.067 4.097 12.949c.531 1.676-1.378 3.063-2.809 2.04l-11.049-7.897-11.049 7.897c-1.43 1.023-3.339-.364-2.809-2.04l4.097-12.949-10.925-8.067c-1.415-1.045-.685-3.288 1.073-3.302l13.581-.105 4.297-12.884c.555-1.668 2.914-1.668 3.47 0zm58.94-36.125l4.297 12.884 13.581.105c1.758.013 2.487 2.258 1.073 3.302l-10.925 8.067 4.097 12.949c.531 1.676-1.378 3.063-2.809 2.04l-11.049-7.897-11.049 7.897c-1.43 1.023-3.339-.364-2.809-2.04l4.097-12.949-10.925-8.067c-1.415-1.045-.685-3.288 1.073-3.302l13.581-.105 4.297-12.884c.554-1.669 2.914-1.669 3.47 0zM454.209 17.498l4.297 12.884 13.581.105c1.758.013 2.487 2.258 1.073 3.302l-10.925 8.067 4.097 12.949c.531 1.676-1.378 3.063-2.809 2.04l-11.049-7.897-11.049 7.897c-1.43 1.023-3.339-.364-2.809-2.04l4.097-12.949-10.925-8.067c-1.415-1.045-.685-3.288 1.073-3.302l13.581-.105 4.297-12.884c.554-1.668 2.913-1.668 3.47 0zM336.584 306.979l-4.297-12.884-13.581-.105c-1.758-.013-2.487-2.258-1.073-3.302l10.925-8.067-4.097-12.949c-.531-1.676 1.378-3.063 2.809-2.04l11.049 7.897 11.049-7.897c1.43-1.023 3.339.364 2.809 2.04l-4.097 12.949 10.925 8.067c1.415 1.045.685 3.288-1.073 3.302l-13.581.105-4.297 12.884c-.555 1.668-2.914 1.668-3.47 0zm40.621-36.456l-4.297-12.884-13.581-.105c-1.758-.013-2.487-2.258-1.073-3.302l10.925-8.067-4.097-12.949c-.531-1.676 1.378-3.063 2.809-2.04l11.049 7.897 11.049-7.897c1.43-1.023 3.339.364 2.809 2.04l-4.097 12.949 10.925 8.067c1.415 1.045.685 3.288-1.073 3.302l-13.581.105-4.297 12.884c-.554 1.669-2.914 1.669-3.47 0zm36.555-158.998l-4.297-12.884-13.581-.105c-1.758-.013-2.487-2.258-1.073-3.302l10.925-8.067-4.097-12.949c-.531-1.676 1.378-3.063 2.809-2.04l11.049 7.897 11.049-7.897c1.43-1.023 3.339.364 2.809 2.04l-4.097 12.949 10.925 8.067c1.415 1.045.685 3.288-1.073 3.302l-13.581.105-4.297 12.884c-.553 1.667-2.913 1.667-3.47 0zm-42.183 13.54l-4.297-12.884-13.581-.105c-1.758-.013-2.487-2.258-1.073-3.302l10.925-8.067-4.097-12.949c-.531-1.676 1.378-3.063 2.809-2.04l11.049 7.897 11.049-7.897c1.43-1.023 3.339.364 2.809 2.04l-4.097 12.949 10.925 8.067c1.415 1.045.685 3.288-1.073 3.302l-13.581.105-4.297 12.884c-.555 1.668-2.914 1.668-3.47 0zm-27.008 105.184l-4.297-12.884-13.581-.105c-1.758-.013-2.487-2.258-1.073-3.302l10.925-8.067-4.097-12.949c-.531-1.676 1.378-3.063 2.809-2.04l11.049 7.897 11.049-7.897c1.43-1.023 3.339.364 2.809 2.04l-4.097 12.949 10.925 8.067c1.415 1.045.685 3.288-1.073 3.302l-13.581.105-4.297 12.884c-.554 1.668-2.913 1.668-3.47 0z",
    fill: "#FFE15A"
  })));
}

function SvgTw(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h238.345a8.829 8.829 0 018.828 8.828v150.069a8.829 8.829 0 01-8.828 8.828H8.828A8.83 8.83 0 010 159.172V9.103A8.828 8.828 0 018.828.276z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("g", {
    transform: "translate(69 25)",
    fill: "#F5F5F5"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M27.403 59.138c0-8.722 3.534-16.618 9.248-22.335L10.177 29.23c-1.537-.439-2.638 1.469-1.49 2.58l19.811 19.155-26.734 6.684c-1.55.387-1.55 2.591 0 2.979l26.734 6.684L8.687 86.467c-1.149 1.111-.047 3.019 1.49 2.58l26.474-7.573c-5.714-5.718-9.248-13.614-9.248-22.336zm9.262-22.349c5.717-5.714 13.613-9.248 22.335-9.248 8.722 0 16.618 3.534 22.335 9.248l7.573-26.474c.439-1.537-1.469-2.638-2.58-1.49l-19.155 19.81-6.684-26.734c-.387-1.55-2.591-1.55-2.979 0l-6.684 26.734-19.155-19.81c-1.111-1.149-3.019-.047-2.58 1.49l7.574 26.474zm44.67 44.698C75.618 87.201 67.722 90.735 59 90.735c-8.722 0-16.618-3.534-22.335-9.248l-7.573 26.474c-.439 1.537 1.469 2.638 2.58 1.49l19.155-19.81 6.684 26.734c.387 1.55 2.591 1.55 2.979 0l6.684-26.734 19.155 19.81c1.111 1.149 3.019.047 2.58-1.49l-7.574-26.474zm34.901-23.839l-26.734-6.684 19.81-19.155c1.149-1.111.047-3.019-1.49-2.58l-26.474 7.573c5.714 5.717 9.248 13.613 9.248 22.335 0 8.722-3.534 16.618-9.248 22.335l26.474 7.573c1.537.439 2.638-1.469 1.49-2.58L89.502 67.31l26.734-6.684c1.551-.386 1.551-2.589 0-2.978z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 59,
    cy: 59.138,
    r: 25.159
  }))));
}

function SvgTz(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 256.276V9.103A8.829 8.829 0 018.828.275h379.586L0 256.276z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 79.724v247.172a8.829 8.829 0 01-8.828 8.828H123.586L512 79.724z",
    fill: "#4173CD"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 84.702V9.103a8.829 8.829 0 00-8.828-8.828H383.139L0 251.298v75.598a8.829 8.829 0 008.828 8.828h120.033L512 84.702z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 53.047V9.103a8.829 8.829 0 00-8.828-8.828h-71.718L0 282.953v43.944a8.829 8.829 0 008.828 8.828h71.718L512 53.047z",
    fill: "#464655"
  })));
}

function SvgUa(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 168h512v158.897a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.897V168z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512.001 168H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V168z",
    fill: "#4173CD"
  })));
}

function SvgUg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 56.184H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v47.081z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 56.188h512v55.908H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 112.088h512v55.908H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M0 168h512v55.908H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 223.912h512v55.908H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896v-47.081h512v47.081a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#F5F5F5",
    cx: 256,
    cy: 168,
    r: 52.966
  }), /*#__PURE__*/react.createElement("path", {
    d: "M259.194 135.753l5.217-2.087c.756-.302 1.122-1.17.787-1.911-1.17-2.594-4.305-7.962-10.263-8.124-3.773-.102-6.594.748-8.186 1.405a1.439 1.439 0 00-.696 2.062l3.148 5.378 9.993 3.277z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M254.935 123.63c-.434-.012-.825.013-1.234.025l-.568 8.329 3.03 1.678 6.554-5.93c-1.725-2.087-4.255-4.007-7.782-4.102z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M277.377 184.732l-23.588-27.52c0-5.696 2.058-10.347 3.196-12.486 3.247-1.45 5.341-5.021 4.469-8.962-.633-2.867-2.947-5.206-5.809-5.86-5.15-1.177-9.719 2.702-9.719 7.65 0 .186.042.361.055.544-5.088 1.342-6.034 2.978-6.034 2.978s3.335-.887 6.229-1.645c.058.236.136.463.214.691l-5.707 1.938 6.232-.758a7.974 7.974 0 002.957 3.046c-4.658 3.752-11.81 10.803-11.81 18.763 0 7.278 5.391 12.128 12.181 15.352 2.374 1.128 4.555 2.615 6.349 4.535l.067.072.59 9.035h-13.29c-4.915 0-6.265 3.194-6.265 8.477l2.334-3.317 1.965 3.686.246-4.178 2.089 2.702s-.021-3.53 2.642-3.993c1.412-.246 6.307-.553 10.465-.553l.881 13.464c-5.639-.026-12.021 2.63-12.021 2.63 1.965-.369 6.758.369 6.758.369l-.799 2.334c5.528-3.01 15.665-3.072 15.665-3.072s-2.211-1.508-7.371-2.098l.119-13.628h8.111l1.228-3.194s-4.185-5.553-4.185-8.493c6.489 1.232 11.556 1.491 11.556 1.491zm-16.686 7.372l.041-4.674 4.361 4.674h-4.402z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M277.377 188.663c-1.965-7.863-10.58-10.28-19.657-15.726-9.828-5.897-3.932-15.726-3.932-15.726s32.926 9.665 35.383 23.588c1.913 10.844-5.897 17.692-9.828 19.657l1.412-3.932h-7.31s7.74-6.02 7.863-11.795l-3.931 3.934z",
    fill: "#696E7D"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M289.172 180.8c-1.643-9.309-16.893-16.707-26.829-20.594-3.18-.354-5.974 4.991 2.749 10.765 11.735 7.768 12.286 17.692 12.286 17.692l3.932-3.932c-.122 5.774-7.863 11.795-7.863 11.795h7.31l-1.412 3.932c3.93-1.966 11.74-8.813 9.827-19.658z",
    fill: "#FFFCFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M289.172 180.8c-1.089-6.169-8.158-11.492-15.693-15.517-3.629-1.085-6.79-.946-6.79-.946 2.211 1.352 3.194 4.791 3.194 4.791-1.597-.983-5.16-.491-5.16-.491.991.85 1.93 2.582 2.558 3.911 9.609 7.469 10.097 16.116 10.097 16.116l3.932-3.932c-.122 5.774-7.863 11.795-7.863 11.795h7.31l-1.412 3.932c3.93-1.967 11.74-8.814 9.827-19.659z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#F5F5F5",
    cx: 250.593,
    cy: 136.817,
    r: 1.311
  }), /*#__PURE__*/react.createElement("path", {
    d: "M247.155 141.813s-2.867 3.358-.983 4.341c1.884.983 3.701-1.809 3.701-1.809l-2.718-2.532z",
    fill: "#FF4B55"
  })));
}

function SvgUs(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512.001 26.08H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828V26.08zM0 103.492h512v25.804H0zm0-51.608h512v25.804H0zm512 129.018H8.828A8.829 8.829 0 010 172.074v-16.977h512v25.805zM0 258.317h512v25.804H0zm503.172 77.407H8.828A8.829 8.829 0 010 326.896V309.92h512v16.977a8.828 8.828 0 01-8.828 8.827zM0 206.709h512v25.804H0z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M229.517.276H8.828A8.828 8.828 0 000 9.103v162.97a8.829 8.829 0 008.828 8.828h220.69a8.829 8.829 0 008.828-8.828V9.103a8.83 8.83 0 00-8.829-8.827z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M24.789 20.537l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928L24 34.842l-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.76 1.324-.76 1.578-.001zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928L24 65.496l-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.759 1.324-.759 1.578-.001zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928L24 96.15l-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.759 1.324-.759 1.578-.001zm0 30.655l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928L24 126.805l-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.76 1.324-.76 1.578-.001zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928L24 157.459l-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.761 1.324-.761 1.578-.001zM48.582 35.566l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.758 1.325-.758 1.578 0zm0 30.655l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.165-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.759 1.325-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.759 1.325-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.758 1.325-.758 1.578 0zM72.375 20.537l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.759 1.325-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.758 1.325-.758 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.758 1.325-.758 1.578 0zm0 30.655l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.759 1.325-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.76 1.325-.76 1.578 0zM96.169 35.566l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928L95.38 49.87l-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.758 1.325-.758 1.578 0zm0 30.655l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.165-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.759 1.325-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.759 1.325-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.758 1.325-.758 1.578 0zm23.793-106.992l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.026-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.253-.759 1.326-.759 1.579 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.026-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.253-.758 1.326-.758 1.579 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.026-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.253-.758 1.326-.758 1.579 0zm0 30.655l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.026-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.253-.759 1.326-.759 1.579 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.026-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.253-.76 1.326-.76 1.579 0zm23.793-107.588l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.253-.758 1.325-.758 1.578 0zm0 30.655l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.165-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.253-.759 1.325-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.253-.759 1.325-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.253-.758 1.325-.758 1.578 0zm23.794-106.992l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.759 1.325-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.758 1.325-.758 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.758 1.325-.758 1.578 0zm0 30.655l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.759 1.325-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.251-.76 1.325-.76 1.578 0zm23.793-107.588l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.758 1.326-.758 1.578 0zm0 30.655l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.165-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.759 1.326-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.759 1.326-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.758 1.326-.758 1.578 0zm23.794-106.992l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.759 1.324-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.758 1.324-.758 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.758 1.324-.758 1.578 0zm0 30.655l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.759 1.324-.759 1.578 0zm0 30.654l1.954 5.86 6.177.047c.8.007 1.131 1.027.488 1.502l-4.969 3.67 1.864 5.889c.242.762-.627 1.394-1.278.928l-5.025-3.592-5.025 3.592c-.651.465-1.518-.166-1.278-.928l1.864-5.889-4.969-3.67c-.643-.476-.312-1.495.488-1.502l6.177-.047 1.954-5.86c.252-.76 1.324-.76 1.578 0z",
    fill: "#F5F5F5"
  })));
}

function SvgUy(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H8.828A8.828 8.828 0 000 9.103v317.793a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828V9.103a8.83 8.83 0 00-8.829-8.827z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#4173CD",
    d: "M185.379 37.55H512v37.272H185.379z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 74.825h512v37.272H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#4173CD",
    d: "M185.379 112.088H512v37.272H185.379z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 149.363h512v37.272H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#4173CD",
    d: "M0 186.637h512v37.272H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 223.912h512v37.272H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#4173CD",
    d: "M0 261.175h512v37.272H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M63.976 23.642l14.767 68.333 23.107-9.572z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M63.976 23.642l26.32 63.547-11.553 4.786z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M121.404 162.289l-14.768-68.333-23.107 9.572z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M121.404 162.289L95.083 98.742l11.553-4.786z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M162.013 64.252L93.681 79.019l9.571 23.107z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M162.013 64.252l-63.547 26.32-4.785-11.553z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M23.367 121.679l68.332-14.767-9.572-23.107z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M23.367 121.679l63.546-26.32 4.786 11.553z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M121.404 23.642L83.529 82.403l23.107 9.572z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M121.404 23.642L95.083 87.189l-11.554-4.786z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M63.976 162.289l37.874-58.761-23.107-9.572z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M63.976 162.289l26.32-63.547 11.554 4.786z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M162.013 121.679l-58.761-37.874-9.571 23.107z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M162.013 121.679l-63.547-26.32 4.786-11.554z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M23.367 64.252l58.76 37.874 9.572-23.107z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M23.367 64.252l63.546 26.32-4.786 11.554z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M92.69 17.931L80.184 86.712h25.011z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M92.69 17.931v68.781H80.184z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M92.69 168l12.505-68.781H80.184z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M92.69 168V99.219h12.505z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M167.724 92.966L98.943 80.46v25.011z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M167.724 92.966H98.943V80.46z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M17.655 92.966l68.781 12.505V80.46z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M17.655 92.966h68.781v12.505z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M145.747 39.908L88.268 79.701l17.686 17.686z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M145.747 39.908L97.111 88.544l-8.843-8.843z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M39.633 146.023l57.478-39.793-17.686-17.686z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M39.633 146.023l48.635-48.636 8.843 8.843z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M145.747 146.023l-39.793-57.479-17.686 17.686z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M145.747 146.023L97.111 97.387l8.843-8.843z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M39.633 39.908l39.792 57.479 17.686-17.686z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFCD5A",
    d: "M39.633 39.908l48.635 48.636-8.843 8.843z"
  }), /*#__PURE__*/react.createElement("circle", {
    fill: "#FFE15A",
    cx: 92.69,
    cy: 92.966,
    r: 25.012
  })));
}

function SvgUz(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#82AFFF"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 102.157h512v13.942H0zm0 117.738h512v13.942H0z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M113.491 84.071c-18.072 0-32.721-14.614-32.721-32.621 0-18.073 14.648-32.753 32.721-32.753l.206.001c1.064.014 1.437-1.399.499-1.902a38.783 38.783 0 00-18.668-4.622c-21.624.154-39.189 18.073-38.959 39.697.226 21.401 17.722 38.724 39.242 38.724a38.898 38.898 0 0018.417-4.627c.935-.501.557-1.914-.503-1.899-.08.002-.157.002-.234.002zm25.622-9.021l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.716 2.744-1.394 4.404c-.18.57.469 1.042.956.694l3.758-2.686 3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.715-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.189-.567-.991-.567-1.181 0zm32.543 0l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.715 2.744-1.394 4.404c-.18.57.469 1.042.956.694l3.758-2.686 3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.715-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.189-.567-.992-.567-1.18 0zm32.542 0l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.716 2.744-1.394 4.404c-.18.57.469 1.042.956.694l3.758-2.686 3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.715-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.189-.567-.992-.567-1.181 0zm32.542 0l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.715 2.744-1.394 4.404c-.18.57.469 1.042.956.694l3.758-2.686 3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.715-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.188-.567-.991-.567-1.18 0zm32.543 0l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.716 2.744-1.394 4.404c-.18.57.469 1.042.956.694l3.758-2.686 3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.716-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.191-.567-.993-.567-1.182 0zm-97.627-30.372l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.715 2.744-1.394 4.404c-.18.57.469 1.042.956.694l3.758-2.686 3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.715-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.189-.569-.992-.569-1.18 0zm32.542 0l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.716 2.744-1.394 4.404c-.18.57.469 1.042.956.694l3.758-2.686 3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.715-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.189-.569-.992-.569-1.181 0zm32.542 0l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.715 2.744-1.394 4.404c-.18.57.469 1.042.956.694l3.758-2.686 3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.715-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.188-.569-.991-.569-1.18 0zm32.543 0l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.716 2.744-1.394 4.404c-.18.57.469 1.042.956.694l3.758-2.686 3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.716-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.191-.569-.993-.569-1.182 0z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M204.198 75.05l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.716 2.744-1.394 4.404c-.18.57.469 1.042.956.694l3.758-2.686 3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.715-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.189-.567-.992-.567-1.181 0zm0-60.746l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.716 2.744-1.394 4.404c-.18.57.469 1.042.956.694L204.789 25l3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.715-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.189-.567-.992-.567-1.181 0zM236.74 75.05l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.715 2.744-1.394 4.404c-.18.57.469 1.042.956.694l3.758-2.686 3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.715-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.188-.567-.991-.567-1.18 0zm32.543 0l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.716 2.744-1.394 4.404c-.18.57.469 1.042.956.694l3.758-2.686 3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.716-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.191-.567-.993-.567-1.182 0zM236.74 14.304l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.715 2.744-1.394 4.404c-.18.57.469 1.042.956.694L237.33 25l3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.715-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.188-.567-.991-.567-1.18 0zm32.543 0l-1.461 4.382-4.619.035c-.598.004-.846.768-.365 1.123l3.716 2.744-1.394 4.404c-.18.57.469 1.042.956.694L269.874 25l3.758 2.686c.487.348 1.135-.124.956-.694l-1.394-4.404 3.716-2.744c.481-.355.233-1.119-.365-1.123l-4.619-.035-1.461-4.382c-.191-.567-.993-.567-1.182 0z",
    fill: "#F5F5F5"
  })));
}

function SvgVe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 112.092H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v102.989z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V223.908h512v102.988a8.828 8.828 0 01-8.828 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#41479B",
    d: "M0 112.088h512V223.9H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M178.14 189.497l2.212 6.633 6.991.054c.905.007 1.281 1.162.553 1.7l-5.624 4.153 2.109 6.667c.273.863-.71 1.577-1.447 1.05l-5.688-4.066-5.688 4.066c-.736.526-1.719-.188-1.447-1.05l2.109-6.667-5.624-4.153c-.728-.537-.353-1.693.553-1.7l6.991-.054 2.212-6.633c.287-.858 1.502-.858 1.788 0zm13.583-21.115l-1.185 6.891 6.136 3.352c.794.434.579 1.63-.317 1.759l-6.92 1.002-1.292 6.871c-.168.889-1.37 1.055-1.771.243l-3.091-6.272-6.935.895c-.898.116-1.427-.978-.778-1.61l5.01-4.878-2.994-6.318c-.387-.818.489-1.659 1.29-1.237l6.187 3.257 5.085-4.8c.658-.621 1.728-.047 1.575.845zm17.19-18.48l-3.282 6.174 4.779 5.103c.619.661.041 1.729-.851 1.571l-6.887-1.213-3.377 6.123c-.437.792-1.632.573-1.758-.323l-.974-6.924-6.867-1.32c-.889-.171-1.049-1.375-.235-1.772l6.284-3.066-.867-6.938c-.113-.898.983-1.422 1.612-.771l4.858 5.028 6.33-2.968c.822-.384 1.659.496 1.235 1.296zm20.685-11.466l-4.824 5.062 3.228 6.202c.418.803-.427 1.676-1.244 1.284l-6.304-3.025-4.903 4.986c-.634.646-1.726.111-1.606-.786l.928-6.931-6.257-3.122c-.81-.404-.64-1.607.25-1.77l6.878-1.259 1.035-6.915c.134-.895 1.331-1.105 1.761-.308l3.322 6.152 6.897-1.152c.895-.147 1.463.927.839 1.582zm23.776-5.313l-6.004 3.584 1.448 6.84c.188.886-.861 1.501-1.542.905l-5.263-4.602-6.059 3.49c-.785.452-1.693-.354-1.336-1.187l2.751-6.429-5.192-4.683c-.672-.606-.185-1.719.716-1.637l6.964.629 2.85-6.385c.369-.826 1.578-.708 1.779.174l1.554 6.817 6.953.737c.897.097 1.159 1.283.381 1.747zm80.486 56.374l-2.212 6.633-6.991.054c-.905.007-1.281 1.162-.553 1.7l5.624 4.153-2.109 6.667c-.273.863.71 1.577 1.447 1.05l5.688-4.066 5.688 4.066c.736.526 1.719-.188 1.447-1.05l-2.109-6.667 5.624-4.153c.728-.537.353-1.693-.553-1.7l-6.991-.054-2.212-6.633c-.287-.858-1.502-.858-1.788 0zm-13.583-21.115l1.185 6.891-6.136 3.352c-.794.434-.579 1.63.317 1.759l6.92 1.002 1.292 6.871c.168.889 1.371 1.055 1.771.243l3.091-6.272 6.935.895c.898.116 1.427-.978.778-1.61l-5.01-4.878 2.994-6.318c.387-.818-.489-1.659-1.29-1.237l-6.187 3.257-5.085-4.8c-.658-.621-1.728-.047-1.575.845zm-17.19-18.48l3.282 6.174-4.779 5.103c-.619.661-.041 1.729.851 1.571l6.887-1.213 3.377 6.123c.437.792 1.632.573 1.758-.323l.974-6.924 6.867-1.32c.889-.171 1.049-1.375.235-1.772l-6.284-3.066.867-6.938c.113-.898-.983-1.422-1.612-.771l-4.858 5.028-6.33-2.968c-.822-.384-1.659.496-1.235 1.296zm-20.685-11.466l4.824 5.062-3.228 6.202c-.418.803.427 1.676 1.244 1.284l6.304-3.025 4.903 4.986c.634.646 1.726.111 1.605-.786l-.928-6.931 6.257-3.122c.81-.404.64-1.607-.25-1.77l-6.878-1.259-1.035-6.915c-.134-.895-1.331-1.105-1.761-.308l-3.322 6.152-6.897-1.152c-.894-.147-1.462.927-.838 1.582zm-23.776-5.313l6.004 3.584-1.448 6.84c-.188.886.861 1.501 1.542.905l5.263-4.602 6.059 3.49c.785.452 1.693-.354 1.336-1.187l-2.751-6.429 5.192-4.683c.672-.606.185-1.719-.716-1.637l-6.964.629-2.85-6.385c-.369-.826-1.578-.708-1.779.174l-1.554 6.817-6.953.737c-.897.097-1.159 1.283-.381 1.747z",
    fill: "#F5F5F5"
  })));
}

function SvgVi(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#4173CD",
    d: "M399.057 202.006l3.222 11.303 11.197-33.276-31.057 16.374 11.673 1.374-37.274 43.797-.323-.928 29.77-61.643 5.97 10.124 2.436-35.024-25.918 23.683 11.641-1.618-29.77 61.643-.929.323 11.13-56.424 8.332 8.289-6.485-34.505-19.1 29.459 10.856-4.505-12 60.84-3.917 8.113-4.221 2.83-1.737 8.802-14.761 17.345 11.524-.928-2.091 10.6 4.076-2.733.394 4.891 7.002-8.227 6.438 9.601 4.407-22.345 5.815-6.832-.408-5.066 3.918-8.112z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M130.918 168.929c1.266-5.692.481-11.025-1.687-14.308-3.357 2.056-6.327 6.553-7.593 12.245a23.775 23.775 0 00-.463 7.486l-6.969-10.391c2.838-2.314 5.281-6.276 6.39-11.261 1.266-5.692.481-11.025-1.687-14.308-3.357 2.056-6.327 6.553-7.593 12.245-.674 3.031-.732 5.932-.343 8.505l-4.712-7.025c.236-3.567-.86-7.906-3.489-12.041-3.129-4.92-7.455-8.136-11.31-8.925-.919 3.827.16 9.108 3.289 14.027 2.659 4.181 6.172 7.027 9.537 8.303l4.318 7.168c-2.166-1.443-4.818-2.621-7.85-3.295-5.692-1.266-11.025-.481-14.308 1.687 2.056 3.356 6.553 6.327 12.245 7.593 4.985 1.109 9.61.576 12.909-1.014l6.457 10.718a23.814 23.814 0 00-6.978-2.754c-5.692-1.266-11.025-.481-14.308 1.687 2.056 3.356 6.553 6.327 12.245 7.593 4.771 1.062 9.214.618 12.485-.811l5.945 9.868c-1.838-.992-3.884-1.843-6.202-2.358-5.692-1.266-11.025-.481-14.308 1.687 2.056 3.356 6.553 6.327 12.245 7.593 4.562 1.014 8.838.667 12.068-.61l5.734 9.517c-1.647-.806-3.421-1.513-5.415-1.956-5.692-1.266-11.025-.481-14.308 1.687 2.056 3.356 6.553 6.327 12.245 7.593 4.348.967 8.469.723 11.645-.407l5.223 8.668c-1.437-.634-2.964-1.188-4.639-1.561-5.692-1.266-11.025-.481-14.308 1.687 2.056 3.356 6.553 6.327 12.245 7.593 4.147.922 8.082.733 11.193-.265l16.588 27.533 7.045-4.482-17.907-26.695c2.222-2.397 4.062-5.879 4.984-10.026 1.266-5.692.481-11.025-1.687-14.308-3.357 2.056-6.327 6.553-7.593 12.244-.373 1.675-.518 3.293-.553 4.862l-5.636-8.403c2.369-2.398 4.338-6.027 5.304-10.375 1.266-5.692.481-11.025-1.687-14.308-3.357 2.056-6.327 6.553-7.593 12.245-.444 1.994-.554 3.9-.523 5.732l-6.188-9.226c2.526-2.386 4.653-6.111 5.668-10.671 1.266-5.692.481-11.025-1.687-14.308-3.357 2.056-6.327 6.553-7.593 12.245-.515 2.317-.612 4.531-.493 6.615l-6.418-9.567c2.676-2.361 4.96-6.197 6.021-10.967z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M203.034 168l-8.828-52.965h-1.366c-8.013 0-13.673-7.851-11.138-15.454l.029-.085c2.025-6.076-1.192-12.653-7.231-14.784L53.293 41.934c-6.87-2.425-13.341 4.484-10.471 11.181l13.144 30.669a44.146 44.146 0 0018.67 20.936l33.623 19.213a66.474 66.474 0 0032.979 8.758h.002l3.016 6.031A52.97 52.97 0 00191.631 168h11.403zm105.931 0l8.828-52.965h1.366c8.013 0 13.673-7.851 11.138-15.454l-.029-.085c-2.025-6.076 1.192-12.653 7.231-14.784L458.657 41.95c6.889-2.432 13.377 4.497 10.499 11.212l-13.123 30.621a44.146 44.146 0 01-18.67 20.936l-33.623 19.213a66.474 66.474 0 01-32.979 8.758h-.003l-3.016 6.031A52.964 52.964 0 01320.369 168h-11.404zm-17.655-61.793l-21.897-51.093a17.654 17.654 0 00-16.227-10.7h-6.014l-8.828 8.828h-8.828l-8.828 8.828h12.319c3.123 0 5.229 3.193 3.999 6.065l-16.318 38.073h70.622v-.001zm-61.793 88.276L211.862 168l-16.168 16.168a61.79 61.79 0 00-14.927 24.153l-4.215 12.644-8.828 8.828H156.25a10.004 10.004 0 00-8.946 5.528l-2.489 4.979c-1.642 3.284.746 7.147 4.417 7.147h18.492l5.886-11.77 28.143-14.072a8.837 8.837 0 002.294-1.654l25.47-25.468zm52.965 0L300.137 168l16.168 16.168a61.79 61.79 0 0114.927 24.153l4.215 12.644 8.828 8.828h11.474c3.788 0 7.252 2.141 8.946 5.528l2.489 4.979c1.642 3.284-.746 7.147-4.417 7.147h-18.492l-5.885-11.77-28.143-14.072a8.837 8.837 0 01-2.294-1.654l-25.471-25.468zm-52.965 8.827l-21.454 35.756a11.412 11.412 0 002.479 14.638l32.579 27.149a20.112 20.112 0 0025.754 0l32.579-27.149a11.41 11.41 0 002.479-14.638l-21.452-35.756h-52.964z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.999 97.379s-26.483 8.828-61.793 0v35.31c0 17.655 8.828 70.621 61.793 88.276 52.965-17.655 61.793-70.621 61.793-88.276v-35.31c-35.31 8.828-61.793 0-61.793 0z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M255.999 97.379s-26.483 8.828-61.793 0v35.31h123.586v-35.31c-35.31 8.828-61.793 0-61.793 0z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M212.664 189.163V132.69h-9.63v39.294c2.502 5.748 5.645 11.568 9.63 17.179zm19.26-56.473h-9.63v67.758a82.648 82.648 0 009.63 8.199V132.69zm67.411 56.473c3.985-5.612 7.128-11.432 9.63-17.18V132.69h-9.63v56.473zm-48.151-56.473h-9.63v81.932c3.016 1.626 6.23 3.105 9.63 4.449V132.69zm38.521 0h-9.63v75.958a82.731 82.731 0 009.63-8.199V132.69zm-19.26 81.932V132.69h-9.63v86.381c3.4-1.344 6.614-2.823 9.63-4.449z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#73AF00",
    d: "M163.184 236.98l-6.268 3.857 10.532 17.483 7.045-4.482z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M358.641 249.697l-5.538-11.076h-10.148l-.526 2.671-3.918 8.113-4.221 2.83-1.737 8.802-14.761 17.345 11.524-.928-2.091 10.6 4.076-2.733.394 4.891 7.002-8.227 6.438 9.601 4.407-22.345 5.815-6.832-.408-5.066zM84.493 132.69h-22.7l2.037 6.112-13.387 46.853-13.387-46.853 2.038-6.112h-22.7l6.112 8.149 18.625 65.188-2.037 6.111h22.699l-2.037-6.111 18.625-65.188zm384.629 5.675l3.784-5.675h-22.7l3.784 5.675v68.098l-3.784 5.675h22.7l-3.784-5.675z",
    fill: "#4173CD"
  })));
}

function SvgVn(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M260.119 67.969l23.609 70.79 74.621.578c4.172.032 5.902 5.357 2.546 7.836l-60.029 44.329 22.509 71.147c1.259 3.978-3.271 7.27-6.666 4.843L256 224.099l-60.71 43.393c-3.394 2.426-7.924-.865-6.666-4.843l22.509-71.147-60.029-44.329c-3.357-2.478-1.626-7.804 2.546-7.836l74.621-.578 23.609-70.79c1.321-3.958 6.919-3.958 8.239 0z",
    fill: "#FFE15A"
  })));
}

function SvgVu(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.104A8.829 8.829 0 018.828.276h494.345a8.829 8.829 0 018.828 8.828v317.792a8.83 8.83 0 01-8.829 8.828z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M512 159.172H249.444L0 21.545v20.169L228.897 168 0 294.286v20.17l249.444-137.628H512z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M3.531 333.776c1.491 1.149 3.27 1.948 5.297 1.948h494.345a8.829 8.829 0 008.828-8.828V194.483H255.999L3.531 333.776z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H8.828c-2.027 0-3.807.8-5.297 1.949l252.468 139.292h255.999V9.104a8.826 8.826 0 00-8.826-8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#FFE15A"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M76.452 118.487c-25.205-7.929-44.234 10.386-48.583 19.812-3.683 7.987-10.525 44.167 23.581 49.936 34.104 5.77 33.72-26.412 33.72-26.412-1.538 5.129-4.296 19.745-28.914 19.745-9.234 0-22.501-13.719-20.001-28.848 2.353-14.236 15.07-21.518 24.682-21.924 9.102-.384 30.322 5.898 30.322 31.734 0 29.039-29.93 32.31-29.93 32.31v17.535c26.053-2.554 40.797-16.986 44.699-40.103 3.888-23.013-3.948-45.722-29.576-53.785z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M48.544 161.549a4.405 4.405 0 00-.927 2.655l-.074 4.716-.918 1.601a1.214 1.214 0 102.107 1.206l.941-1.646 3.766-1.364a4.462 4.462 0 002.554-2.378c.984-2.197 3.097-6.231 6.521-10.44 3.424 4.209 5.537 8.243 6.521 10.44a4.46 4.46 0 002.553 2.378l3.767 1.364.941 1.646a1.214 1.214 0 002.107-1.206l-.918-1.601-.074-4.716a4.398 4.398 0 00-.927-2.655c-3.155-4.007-6.511-7.158-9.818-9.945 2.643-2.484 5.631-4.855 9.394-6.686a2.07 2.07 0 001.101-2.343 2.082 2.082 0 00-2.911-1.401c-2.522 1.175-6.859 3.49-11.737 7.047-4.879-3.556-9.215-5.87-11.737-7.047a2.084 2.084 0 00-2.911 1.401 2.073 2.073 0 001.1 2.343c3.764 1.831 6.752 4.203 9.395 6.686-3.305 2.787-6.661 5.939-9.816 9.945z"
  }))));
}

function SvgWs(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172 335.724H8.828A8.829 8.829 0 010 326.896V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v317.793a8.83 8.83 0 01-8.829 8.828z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h238.345a8.829 8.829 0 018.828 8.828v150.069a8.829 8.829 0 01-8.828 8.828H8.828A8.83 8.83 0 010 159.172V9.103A8.828 8.828 0 018.828.276z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M125.766 109.596l-4.053 12.151-12.809.099c-1.658.013-2.346 2.13-1.012 3.114l10.304 7.609-3.863 12.212c-.5 1.581 1.3 2.889 2.649 1.924l10.421-7.448 10.421 7.448c1.35.964 3.149-.343 2.649-1.924l-3.863-12.212 10.304-7.609c1.334-.985.647-3.102-1.012-3.114l-12.809-.099-4.053-12.151c-.525-1.574-2.749-1.574-3.274 0zm.313-94.744l-3.278 9.83-10.361.081c-1.342.01-1.898 1.722-.819 2.519l8.335 6.155-3.125 9.879c-.405 1.279 1.052 2.337 2.143 1.557l8.429-6.025 8.429 6.025c1.091.78 2.548-.278 2.143-1.557l-3.125-9.879 8.335-6.155c1.079-.797.523-2.509-.819-2.519l-10.361-.081-3.278-9.83c-.424-1.273-2.223-1.273-2.648 0zm52.414 29.242l-3.278 9.83-10.361.081c-1.342.01-1.898 1.722-.819 2.519l8.335 6.155-3.125 9.879c-.405 1.279 1.052 2.337 2.143 1.557l8.429-6.025 8.429 6.025c1.091.78 2.548-.278 2.143-1.557l-3.125-9.879 8.335-6.155c1.079-.797.523-2.509-.819-2.519l-10.361-.081-3.278-9.83c-.424-1.274-2.223-1.274-2.648 0zM74.769 55.68l-3.278 9.83-10.361.081c-1.342.01-1.898 1.722-.819 2.519l8.335 6.155-3.125 9.879c-.405 1.279 1.052 2.337 2.143 1.557l8.429-6.025 8.429 6.025c1.091.78 2.548-.278 2.143-1.557l-3.125-9.879 8.335-6.155c1.079-.797.523-2.509-.819-2.519l-10.361-.081-3.278-9.83c-.424-1.273-2.224-1.273-2.648 0zm81.132 32.088l-1.841 5.518-5.816.045c-.753.006-1.065.967-.459 1.415l4.679 3.455-1.754 5.546c-.227.718.59 1.312 1.203.874l4.732-3.382 4.732 3.382c.612.438 1.43-.156 1.203-.874l-1.754-5.546 4.679-3.455c.606-.447.294-1.408-.459-1.415l-5.816-.045-1.841-5.518c-.239-.715-1.25-.715-1.488 0z",
    fill: "#F5F5F5"
  })));
}

function SvgYe(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M0 223.908h512v102.988a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896V223.908z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M8.828.276h494.345a8.829 8.829 0 018.828 8.828v102.988H0V9.103A8.828 8.828 0 018.828.276z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M0 112.088h512V223.9H0z"
  })));
}

function SvgZa(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M0 62.069v211.862L141.241 168z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M70.621.275l158.897 123.587H512V9.103a8.829 8.829 0 00-8.828-8.828H70.621z",
    fill: "#FF4B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M70.621 335.725l158.897-123.587H512v114.759a8.829 8.829 0 01-8.828 8.828H70.621z",
    fill: "#41479B"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M56.889.276H8.828A8.828 8.828 0 000 9.103v36.21L154.974 168 0 290.69v36.206a8.829 8.829 0 008.828 8.828h48.056L224.147 203.31H512v-70.62H224.148L56.889.276z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M85.333.276H56.889L224.148 132.69H512v-17.656H230.291z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 45.313v22.518L126.53 168 0 268.173v22.517L154.974 168z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    d: "M224.147 203.31L56.884 335.724h28.445l144.96-114.758H512V203.31z"
  })));
}

function SvgZm(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M503.172.276H8.828A8.828 8.828 0 000 9.103v317.793a8.829 8.829 0 008.828 8.828h494.345a8.829 8.829 0 008.828-8.828V9.103a8.83 8.83 0 00-8.829-8.827z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M326.621 115.034h61.793v220.69h-61.793z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#464655",
    d: "M388.414 115.034h61.793v220.69h-61.793z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M450.207 115.034H512v220.69h-61.793zm46.745-74.176a.956.956 0 00-1.385-1.22 73.624 73.624 0 01-5.37 3.239c5.746-4.749 6.551-8.873 6.603-9.173a.956.956 0 00-1.478-.952c-6.207 4.21-12.419 7.215-17.775 9.33 7.193-4.545 10.044-9.182 10.218-9.475a.955.955 0 00-1.313-1.308c-5.743 3.462-12.545 6.191-19.046 8.294.863-1.332 1.478-2.828.926-3.669-.513-.779-1.449-.779-2.786.003-2.706 1.586-23.211 6.813-31.157 8.76-8.098-1.463-14.808.612-16.899 1.379-.557-.663-.811-1.305-.918-1.807-.174-.817-.047-1.647.339-2.222.63-.937 1.932-1.027 3.081-1.106.5-.034.946-.065 1.336-.163.25.074.556.218.551.33a.954.954 0 001.765.554c.058-.094 1.409-2.305.363-4.188-.761-1.369-2.508-2.089-5.194-2.141-1.102-.769-5.267-3.273-10.399-1.338-5.198 1.961-7.505 7.299-8.268 9.555-4.045-.562-22.617-3.396-32.714-9.323-.491-.223-2.166-.881-3.102.011-.575.545-.642 1.391-.202 2.516.234.596.593 1.178 1.069 1.75-5.405-2.481-12.691-5.946-18.198-9.027-.862-.399-2.425-.941-3.232-.096-.505.532-.498 1.304.023 2.298.11.21.219.444.337.701.536 1.155 1.267 2.73 3.053 4.548-1.335-.729-2.538-1.479-3.502-2.229-4.834-3.761-5.489-4.129-6.355-3.545-.746.502-.505 1.351-.25 2.25l.067.237c.21.747.553 1.951 1.492 3.403-.749-.51-1.393-.614-1.9-.26-.302.209-.757.729-.407 1.875.841 2.741 6.65 9.958 17.702 12.083a27.91 27.91 0 01-3.407.305.955.955 0 00-.457 1.782c.202.116 4.108 2.302 11.27 2.118-1.071.27-2.286.478-3.63.558a.956.956 0 00-.437 1.771c.213.129 4.369 2.573 10.804 2.212l-.561.345a.953.953 0 00.238 1.732c.201.057 3.828 1.067 8.346.589l-.794.565a.953.953 0 00.422 1.724c.082.012.666.087 1.602.087.617 0 1.387-.034 2.265-.141-.02.228.007.455.082.681.452 1.361 2.456 1.69 3.123 1.699l.121.001c.807 0 1.66-.114 2.529-.287 1.393 1.301 3.936 1.182 6.403.608a2.735 2.735 0 00-.327.663c-.142.451-.034.911.289 1.233.314.311 1.071 1.064 7.967-.876l-.086.066c-.917.71-.859 1.443-.742 1.817.423 1.356 3.465 2.225 8.985 2.595.122 3.07-.73 6.404-.74 6.441a.955.955 0 001.377 1.082c.319-.172.637-.394.937-.633l-.026 1.015a.952.952 0 00.955.98c.038 0 .073-.013.11-.018-.103.865-.454 1.898-1.562 2.141-.503.11-1.037.164-1.553.217-2.35.241-5.013.514-5.434 5.899a.956.956 0 001.648.731l1.023-1.088c.602.148 1.561.3 2.588.134-.258 1.246-.182 2.78 1.065 4.081a.957.957 0 001.645-.661v-.69a5.38 5.38 0 002.124-1.018c.436.941 1.268 2.045 2.852 2.977a.957.957 0 001.381-1.152l-.499-1.372c.348-.343.8-.834 1.195-1.358a.945.945 0 00.873.413.956.956 0 00.803-.616l.351-.935c.207-.057.405-.126.594-.203.235 2.069 1.826 3.791 1.922 3.893a.958.958 0 001.62-.407l.532-1.986c1.41-.715 1.548-2.008 1.634-2.814.017-.158.041-.377.045-.488.551.271 1.719 1.583 2.6 2.944.175.27.476.436.798.437.328-.023.623-.159.802-.428 0 0 .746-1.13 1.109-1.789 1.54-2.795-.793-4.469-1.914-5.273-.275-.198-.652-.468-.713-.543-.211-.512-.137-.989.002-1.359.935.644 1.997 1.187 3.175 1.464a.955.955 0 001.017-1.454c-.021-.033-1.778-2.735-2.91-6.058 1.828 1.073 4.303 2.368 5.587 2.368.881 0 1.217-.548 1.322-.783.061-.138.171-.388.084-.856 1.699.918 3.616 1.63 5.073 1.254.43-.11 1.439-.371 1.592-1.276.077-.458-.077-.829-.415-1.194 1.578.383 3.279.574 4.948.353 1.391-.183 1.802-.858 1.9-1.393.063-.342.175-.999-1.066-2.241 2.397-.131 4.537-.655 4.713-2.101.015-.13-.009-.248-.02-.37 7.704-.84 13.566-5.658 13.825-5.875a.93.93 0 00.177-.22c4.664-.583 9.962-1.636 14.251-3.564 8.094-3.639 12.193-8.552 11.459-10.335-.213-.519-.825-.894-1.58-.612-.212.079-.641.253-1.203.481 4.793-3.893 6.668-7.503 6.847-7.863z",
    fill: "#FF9B55"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M496.952 40.858a.956.956 0 00-1.385-1.22 73.484 73.484 0 01-5.37 3.239c5.746-4.749 6.552-8.873 6.603-9.173a.955.955 0 00-1.478-.952c-6.207 4.21-12.419 7.215-17.775 9.33 7.194-4.545 10.044-9.181 10.218-9.474a.956.956 0 00-1.313-1.308c-5.743 3.462-12.545 6.191-19.046 8.295.863-1.332 1.478-2.828.926-3.669-.513-.78-1.449-.78-2.786.003-2.706 1.586-23.211 6.813-31.156 8.76-8.098-1.463-14.808.612-16.899 1.379-.556-.663-.811-1.305-.919-1.806-.174-.817-.047-1.647.339-2.222.63-.937 1.932-1.026 3.081-1.106.499-.034.945-.065 1.336-.162.25.073.556.218.552.329a.954.954 0 001.766.554c.059-.093 1.408-2.305.363-4.188-.761-1.369-2.507-2.089-5.195-2.141-1.103-.769-5.267-3.273-10.399-1.338-5.197 1.96-7.505 7.299-8.268 9.555-4.045-.562-22.617-3.396-32.714-9.323-.49-.223-2.165-.879-3.102.011-.575.545-.642 1.391-.202 2.516.234.596.593 1.178 1.069 1.75-5.405-2.481-12.69-5.946-18.199-9.027-.861-.399-2.425-.942-3.231-.096-.505.532-.499 1.305.023 2.298.11.21.218.444.337.701.536 1.155 1.266 2.73 3.053 4.55-1.334-.729-2.538-1.479-3.502-2.229-4.834-3.761-5.49-4.129-6.355-3.545-.746.503-.505 1.351-.25 2.25l.067.237c.21.747.552 1.951 1.492 3.403-.749-.51-1.393-.614-1.9-.26-.302.207-.757.729-.406 1.875.84 2.741 6.65 9.956 17.702 12.083a27.892 27.892 0 01-3.407.305.955.955 0 00-.457 1.782c.202.116 4.108 2.302 11.27 2.116a19.52 19.52 0 01-3.631.558.955.955 0 00-.436 1.771c.213.129 4.369 2.574 10.804 2.212l-.561.345a.955.955 0 00.238 1.732c.201.057 3.828 1.066 8.346.589l-.794.565a.954.954 0 00.422 1.724c.082.012.667.088 1.603.088.617 0 1.387-.034 2.265-.141-.02.228.007.456.082.681.452 1.361 2.456 1.69 3.123 1.699h.121c.807 0 1.658-.114 2.529-.287 1.393 1.301 3.936 1.182 6.403.608a2.764 2.764 0 00-.328.664c-.142.451-.034.911.289 1.233.315.311 1.071 1.063 7.968-.876l-.086.067c-.917.71-.859 1.443-.742 1.817.423 1.356 3.465 2.225 8.985 2.595.122 3.07-.732 6.404-.74 6.441a.955.955 0 001.377 1.082 6.4 6.4 0 00.937-.633l-.026 1.014a.951.951 0 00.956.98c.038 0 .073-.014.11-.019-.103.865-.454 1.898-1.564 2.141-.503.11-1.036.164-1.553.217-2.35.241-5.013.514-5.434 5.9a.957.957 0 001.647.73l1.023-1.088c.601.148 1.562.299 2.588.134-.258 1.246-.182 2.78 1.065 4.081a.955.955 0 001.644-.661v-.69a5.38 5.38 0 002.124-1.018c.436.941 1.268 2.046 2.852 2.977a.958.958 0 001.095-.089.953.953 0 00.287-1.06l-.499-1.373c.348-.343.801-.833 1.195-1.357a.945.945 0 00.873.413.957.957 0 00.804-.616l.351-.935c.207-.057.405-.126.594-.203.235 2.069 1.826 3.791 1.922 3.893a.953.953 0 001.618-.407l.532-1.986c1.41-.714 1.548-2.008 1.634-2.814.017-.158.041-.377.045-.488.551.271 1.719 1.583 2.6 2.944.175.27.476.436.798.437.328-.023.623-.16.802-.429 0 0 .746-1.129 1.109-1.789 1.54-2.795-.793-4.469-1.914-5.273-.275-.198-.652-.468-.713-.543-.21-.512-.137-.989.001-1.359.935.644 1.998 1.187 3.175 1.464a.955.955 0 001.017-1.454c-.021-.033-1.778-2.735-2.91-6.058 1.83 1.071 4.303 2.368 5.587 2.368.881 0 1.217-.548 1.321-.783.062-.138.171-.388.084-.856 1.7.919 3.616 1.63 5.073 1.254.43-.111 1.439-.372 1.592-1.276.077-.459-.077-.828-.415-1.194 1.578.383 3.279.574 4.947.353 1.391-.184 1.802-.858 1.901-1.393.063-.342.175-.999-1.066-2.241 2.397-.131 4.537-.655 4.713-2.101.017-.13-.008-.248-.02-.37 7.704-.84 13.566-5.658 13.825-5.875a.93.93 0 00.177-.22c4.664-.582 9.962-1.635 14.251-3.563 8.094-3.639 12.193-8.552 11.459-10.335-.213-.519-.825-.895-1.58-.612a59.38 59.38 0 00-1.202.482c4.794-3.9 6.669-7.51 6.848-7.87zm-14.069-5.423c-3.518 3.442-10.146 8.392-21.077 11.264a.92.92 0 00-.256.124c-2.298-.179-5.204-.598-7.752-1.55 8.078-1.832 19.427-4.988 29.085-9.838zm-48.64 11.167a.977.977 0 00.403-.011c1.137-.278 27.449-6.731 31.673-8.91-.491.968-1.434 2.324-2.206 2.89-.022.015-.032.04-.052.057-11.33 3.363-20.945 4.781-21.103 4.803a.955.955 0 00.271 1.891c.087-.013 3.007-.442 7.49-1.378 2.321 1.331 5.174 2.065 7.772 2.462-3.881.328-7.473.14-7.532.137-.452-.017-.893.298-.988.761a.954.954 0 00.607 1.089l3.613 1.324c-5.08 1.081-9.978.066-10.036.054a.955.955 0 10-.965 1.506c.69.92 2.636 1.887 4.334 2.6-6.984 1.322-11.79-2.959-12.017-3.165a.954.954 0 00-1.298 1.402c5.517 5.163 15.799 7.362 20.414 8.119-.683.404-1.507.785-2.37.939-3.542.629-11.72-3.261-17.474-6.408l-4.608-2.659a.955.955 0 00-.978 1.641c.221.136 2.028 1.242 4.596 2.653l11.215 6.473c-3.441.425-7.071-.345-7.116-.355-.028-.006-.054.002-.082-.001-2.625-1.846-6.861-4.954-13.221-10.228-1.024-3.654-2.942-5.259-5.343-6.784 2.715-.833 8.439-2.132 15.001-.902zm6.932 20.255c-.006.002-.01.007-.017.009l-.013-.01.03.001zm-62.221-4.332l2.185-1.555a.955.955 0 00-.875-1.678c-3.609 1.289-7.264 1.158-9.551.864l2.53-1.557a.955.955 0 00-.744-1.738c-4.605 1.209-8.44.707-10.951.014 3.991-.932 6.308-2.698 6.431-2.792a.956.956 0 00.286-1.148.961.961 0 00-1.048-.546c-5.261.991-9.323.664-12.051.1a45.841 45.841 0 005.197-1.188c.017-.004.028-.018.043-.023.065-.023.119-.06.177-.095.049-.031.098-.056.14-.094.046-.042.078-.092.116-.142.036-.049.074-.093.1-.147.024-.052.035-.109.051-.164.018-.065.036-.126.041-.194 0-.015.009-.029.009-.045 0-.05-.02-.094-.028-.142-.007-.047.001-.095-.013-.143-.004-.015-.017-.025-.022-.04-.023-.064-.059-.118-.094-.175-.031-.05-.056-.102-.095-.145-.041-.045-.09-.077-.139-.114-.05-.038-.095-.077-.151-.104-.051-.024-.108-.035-.163-.05-.065-.019-.127-.038-.195-.042-.017-.001-.029-.01-.045-.01-12.271-.115-19.043-6.57-21.212-9.864 3.823 2.664 8.846 4.925 12.504 6.223h.003c4.865 1.879 10.929 3.076 11.186 3.126a.956.956 0 00.367-1.875c-.062-.012-6.177-1.218-10.891-3.043-10.166-3.934-12.226-8.195-12.913-10.347 1.099.781 2.575 1.93 3.366 2.545 5.951 4.628 19.797 9.005 20.384 9.19a.957.957 0 00.594-1.817c-14.317-4.877-16.467-9.514-17.622-12.004-.1-.216-.194-.418-.287-.606a5.2 5.2 0 01.557.207c7.937 4.441 19.602 9.7 24.011 11.652-.793.382-1.625.701-2.176.732a.954.954 0 00-.654 1.597c.059.064.994 1.067 2.812 1.46l-1.29.841a.956.956 0 00.195 1.698 16.47 16.47 0 003.51.756l-1.074.783a.954.954 0 00.158 1.637c.125.058 1.593.725 3.949.614l-.081.056a.956.956 0 00.347 1.716c.146.031 1.95.402 4.538.108l-.588.392a.956.956 0 00.287 1.719c.278.072 4.458 1.112 9.944-.628-1.15.757-2.222 1.306-3.108 1.505a.956.956 0 00-.164 1.812c.025.011.119.047.244.092-2.931 1.94-5.928 2.614-8.037 2.816zm-4.622-17.33a.951.951 0 00-1.103-.548c-1.106.27-2.001.243-2.691.097a19.312 19.312 0 002.271-1.214.945.945 0 00.183-.154c1.7.684 3.629 1.341 5.793 1.969l-3.667 2.676c-1.228.13-2.446.013-3.417-.161l2.276-1.484a.958.958 0 00.355-1.181zm8.583 19.656c-.363-.004-1.033-.19-1.282-.367.063-.1.222-.297.575-.577a18.99 18.99 0 007.327-3.699c2.604.189 6.699-.43 10.872-4.623.154.279.316.562.503.85-.452.341-11.236 8.476-17.995 8.416zm7.452-6.523c3.089-1.859 6.545-5.092 8.701-7.253.033.79.186 1.697.529 2.692-.074.044-.151.084-.214.15-3.424 3.611-6.755 4.407-9.016 4.411zm17.944 12.366c-3.145-.215-6.073-.704-7.143-1.176 2.602-2.031 3.348-2.927 3.426-3.026a.956.956 0 00-1.04-1.505c-3.428 1.108-7.433 2.189-9.411 2.467.908-.815 2.524-1.845 3.982-2.575a.956.956 0 00-.833-1.719c-2.6 1.223-6.322 2.455-8.651 2.436 6.34-2.283 12.804-7.166 13.419-7.637a19.307 19.307 0 001.674 1.773c5.705 5.304 5.08 9.465 4.577 10.962zm1.574 5.824a6.842 6.842 0 01-.209.242c.207-1.414.355-3.188.22-4.875.525-1.155 1.589-4.579-1.165-9.121 1.816.264 5.985 1.138 7.789 3.762.239.348.477.734.712 1.134l-.002.003c-.089.211-1.896 4.586-1.319 10.055a6.269 6.269 0 01-1.097-1.823.953.953 0 00-.789-.61.963.963 0 00-.903.425 43.003 43.003 0 01-1.565 2.212l.02-.772a.954.954 0 00-1.692-.632zm6.159 11.892c-.19.569-1.209 1.668-1.871 2.265a1.059 1.059 0 00-.067.067c-.499-.825-.481-1.478-.48-1.514a.957.957 0 00-1.787-.538 3.388 3.388 0 01-2.689 1.738c.049-1.151.713-2.197.756-2.261a.954.954 0 00-1.44-1.233c-1.402 1.269-3.629.448-3.649.441a.993.993 0 00-.281-.063c.617-1.342 1.696-1.452 3.187-1.604.569-.058 1.158-.119 1.767-.253 2.94-.643 3.287-3.893 3.059-5.522-.007-.045-.031-.082-.044-.124.46-.566.919-1.186 1.3-1.721.186.285.386.542.587.785.006.697.045 2.846.287 3.977.192.898.849 1.503 1.479 1.891a2.925 2.925 0 00-.248.649c-.225.925-.034 1.942.252 2.814-.044.069-.093.129-.118.206zm.503-5.958c-.092-.426-.149-1.096-.186-1.77.267.184.455.295.482.309a.955.955 0 001.391-1.066c-1.009-4.035-.333-7.81.227-9.878 1.645 3.615 2.825 8.076 2.417 11.018a.956.956 0 00.629 1.033.944.944 0 00.271.045c-.01.1-.02.206-.032.299-.967-.03-2.559.118-4.102.921-.442-.186-1.014-.524-1.097-.911zm12.58 4.938c-.076.138-.17.297-.27.461-1.14-1.51-2.706-3.063-4.046-2.557-1.08.412-1.191 1.451-1.265 2.14-.088.831-.151 1.177-.844 1.415a.958.958 0 00-.614.655l-.107.397c-.364-.802-.557-1.77-.014-2.595a.953.953 0 00-.23-1.29.958.958 0 00-1.304.156c-.009.01-.874 1.028-2.132 1.207a.97.97 0 00-.362.13c-.183-.584-.288-1.195-.173-1.668a.936.936 0 01.451-.621c1.913-1.158 4.146-.829 4.165-.825a.945.945 0 001.082-.724c.052-.218.461-2.081.162-3.641l1.236-2.076a17.006 17.006 0 001.781 1.951c-.406.744-.802 1.946-.237 3.317.227.552.755.93 1.366 1.367 1.558 1.119 1.971 1.681 1.355 2.801zm-3.517-11.681c-.175-.287-.523-.442-.821-.459a.957.957 0 00-.817.466l-1.241 2.086c-.524-4.224-2.514-9.27-4.637-12.359-2.76-4.015-9.585-4.776-10.872-4.771a23.662 23.662 0 00-2.188-2.339c-5.665-5.266-3.802-9.475-3.712-9.671.008-.017.006-.034.013-.051a.892.892 0 00.047-.188c.011-.058.025-.115.025-.174 0-.061-.014-.117-.024-.177-.012-.061-.021-.12-.043-.179-.022-.053-.054-.098-.086-.148-.035-.057-.069-.113-.118-.161-.013-.013-.018-.031-.032-.044-.034-.031-.076-.043-.114-.068-.039-.026-.066-.063-.109-.084-.018-.009-.036-.007-.054-.014a.958.958 0 00-.189-.05c-.06-.011-.116-.025-.174-.025-.061 0-.117.013-.177.024-.062.011-.121.02-.179.043-.053.021-.099.054-.149.085-.057.036-.113.07-.161.118-.013.013-.031.019-.043.032l-.001.001c-6.482 7.081-13.266 7.923-16.781 7.775l4.077-2.719c.801-.448 1.61-.981 2.414-1.612a.955.955 0 00-1.119-1.545l-2.239 1.492a16.082 16.082 0 01-7.293 2.002l2.124-1.489c1.632-.789 3.413-1.974 5.289-3.72a.955.955 0 00-1.199-1.482l-5.064 3.55c-2.406 1.133-4.376 1.272-5.699 1.151l7.241-5.286a.956.956 0 00-.318-1.695c-11.804-3.142-14.641-6.349-15.281-7.982a2.819 2.819 0 01-.115-.348c.238.036.557.126.763.213 11.565 6.796 33.231 9.518 34.147 9.632a.963.963 0 001.036-.693c.327-1.176 2.216-7.14 7.349-9.077 4.841-1.823 8.653 1.126 8.811 1.249.17.136.38.21.597.21 2.057 0 3.421.41 3.839 1.156.134.239.173.513.159.787a3.51 3.51 0 00-1.065-.338.949.949 0 00-.486.054c-.188.073-.663.106-1.081.135-1.347.093-3.383.233-4.535 1.946-.68 1.011-.906 2.355-.621 3.687.178.831.623 1.917 1.638 2.977.1.198.259.342.448.43.348.309.736.614 1.199.904 2.254 1.409 3.908 2.71 4.787 5.899.007.113.036.22.082.323.36 1.44.575 3.241.623 5.585a.956.956 0 00.954.936h.021a.957.957 0 00.936-.975 34.534 34.534 0 00-.243-3.511c7.115 5.812 11.316 8.7 13.423 10.145.297.204.579.397.825.57-2.144.195-5.539-1.762-8.194-3.786a35.513 35.513 0 00-2.145-1.781.954.954 0 00-1.225 1.464c.242.221 1.012.91 2.094 1.747 1.251 1.137 2.217 2.21 2.52 2.828-1.487-.313-5.566-2.739-8.883-5.107a.956.956 0 00-1.214 1.47c2.29 2.174 3.7 4.16 4.597 8.416.511 2.428 1.501 4.732 2.346 6.402-2.227-1.521-3.663-3.85-3.683-3.882zm21.786-2.65c-5.056.664-10.777-3.19-10.834-3.229a.952.952 0 00-1.273.18.952.952 0 00.06 1.284c1.656 1.656 3.345 2.781 4.577 3.601.179.119.371.247.555.373-1.838-.092-5.032-2.164-6.793-3.606a.956.956 0 00-1.311 1.383c.713.781 1.389 1.654 1.799 2.292-1.396-.51-3.751-1.85-5.452-2.938-.393-1.743-.877-3.161-1.473-4.363 5.549 3.305 6.483 2.19 6.834 1.77.204-.245.433-.666.363-1.286v-.007c2.265 1.146 4.693 1.822 6.556.951.195-.092.476-.237.701-.468 3.438 1.921 5.237 3.359 5.784 4.049l-.093.014zm-1.298-3.629c-1.055-.716-2.406-1.54-4.182-2.504-.036-.02-.077-.021-.115-.035.313.012.633.021.962.021.918 0 1.885-.063 2.845-.203.073.047.143.099.231.127 2.959.93 4.74 1.637 5.31 2.11-.761.33-2.945.545-5.051.484zm5.629-2.38s-.011.003-.017.003c-.768-.447-1.86-.886-3.25-1.365.05-.1.088-.207.099-.323a.963.963 0 00-.175-.652c1.623.388 3.074.541 4.206.34 1.425-.254 2.716-.956 3.651-1.587h.001c.959 0 3.682-.034 7.171-.321-2.519 1.557-6.815 3.692-11.686 3.905zm38.528-16.323c-1.3 1.635-4.252 4.311-9.613 6.721-7.321 3.292-18.133 3.948-22.639 4.075a.87.87 0 00-.04-.213.958.958 0 00-.8-.643c-.085-.009-4.922-.572-10.302-2.194 3.225.305 6.269.456 9.117.456 8.043 0 14.613-1.121 19.956-2.801.028-.004.055.002.083-.004 2.944-.771 9.96-3.645 13.728-5.188l.51-.209zm-5.095-.912c-6.215 3.847-17.053 7.957-34.197 7.039a.948.948 0 00-.105-1.758 40.059 40.059 0 01-2.564-.973c2.624.077 6.04-.168 9.287-1.419a.954.954 0 00-.016-1.788l-1.248-.457c3.167-.132 7.05-.547 9.758-1.687a.955.955 0 00.561-1.09c-.006-.023-.02-.042-.026-.065 5.721-1.433 16.255-4.74 27.129-11.553-2.342 3.892-9.145 11.129-28.403 15.68a.953.953 0 00.363 1.873c.143-.022 13.235-2.078 26.752-9.815-1.602 1.781-3.968 3.956-7.291 6.013z",
    fill: "#464655"
  })));
}

function SvgZw(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    viewBox: "0 0 512 336",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/react.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M512.001 48.198H0V9.103A8.829 8.829 0 018.828.275h494.345a8.829 8.829 0 018.828 8.828v39.095z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 48.199h512v47.923H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 96.121h512v47.923H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M0 287.802h512v39.094a8.829 8.829 0 01-8.828 8.828H8.828A8.829 8.829 0 010 326.896v-39.094z",
    fill: "#73AF00"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FFE15A",
    d: "M0 239.879h512v47.923H0z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M0 191.956h512v47.923H0z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M512 144.04H195.818L14.222.276H8.828c-2.278 0-4.309.92-5.875 2.338v330.773c1.566 1.417 3.597 2.337 5.875 2.337h5.395L195.818 191.96H512v-47.92z",
    fill: "#464655"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M2.953 333.386L211.862 168 2.953 2.614C1.167 4.23 0 6.506 0 9.103v317.793c0 2.598 1.167 4.874 2.953 6.49z",
    fill: "#F5F5F5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FF4B55",
    d: "M86.065 103.448l18.603 37.693 41.596 6.045-30.1 29.339 7.106 41.428-37.205-19.56-37.205 19.56 7.106-41.428-30.1-29.339 41.597-6.045z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M134.328 172.803l-49.436-38.27c-5.784-13.554-14.005-22.296-20.984-22.296-5.929 0-8.828 5.495-9.658 8.797-4.27 1.977-5.272 5.912-5.314 6.083a.95.95 0 00.92 1.172l.885-.017c3.972-.092 10.59-.266 12.282 12.352 1.056 7.879-.512 21.992-5.497 32.629-3.484 7.432-2.333 13.442-2.282 13.694.095.474.536.786 1.028.756.076-.008.26-.015.494-.023l4 22.614a.947.947 0 00.932.782h59.683a.947.947 0 00.92-.723l6.667-27.384c.002-.008.011-.012.013-.02.004-.015-.001-.03.002-.045l2.118-8.698c1.567.185 2.499.282 2.551.288.452.059.82-.199.975-.59a.95.95 0 00-.299-1.101z",
    fill: "#FFE15A"
  }), /*#__PURE__*/react.createElement("g", {
    fill: "#464655"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M134.328 172.803l-49.436-38.27c-5.784-13.554-14.005-22.296-20.984-22.296-5.929 0-8.828 5.495-9.658 8.797-4.27 1.977-5.272 5.912-5.314 6.083a.95.95 0 00.92 1.172l.885-.017c3.972-.092 10.59-.266 12.282 12.352 1.056 7.879-.512 21.992-5.497 32.629-3.484 7.432-2.333 13.442-2.282 13.694.095.474.536.786 1.028.756.076-.008.26-.015.494-.023l4 22.614a.947.947 0 00.932.782h59.683a.947.947 0 00.92-.723l6.667-27.384c.002-.008.011-.012.013-.02.004-.015-.001-.03.002-.045l2.118-8.698c1.567.185 2.499.282 2.551.288.452.059.82-.199.975-.59a.95.95 0 00-.299-1.101zm-75.089 1.256c4.512-9.624 6.945-24.106 5.661-33.685-1.832-13.662-9.5-14.091-13.641-14.008a8.027 8.027 0 014.164-3.778.946.946 0 00.569-.687c.066-.317 1.678-7.768 7.914-7.768 6.159 0 13.93 8.588 19.338 21.368.063.15.164.281.292.38l46.95 36.345c-8.275-1.004-29.898-3.983-42.706-9.03-6.695-2.637-8.221-6.65-9.567-10.191a.949.949 0 00-1.771.675c1.338 3.518 3.171 8.338 10.644 11.282 1.523.6 3.167 1.171 4.896 1.713-.301.913-2.217 5.566-10.712 8.618-6.884 2.474-11.783 6.644-12.452 10.411-2.516-.01-4.761-.006-6.647.006v-2.735c0-2.078 2.002-5.087 4.121-8.274 2.953-4.44 6.3-9.473 6.3-14.621a.949.949 0 00-1.896 0c0 4.575-3.179 9.355-5.983 13.571-2.382 3.581-4.438 6.674-4.438 9.323v2.751c-1.43.015-2.551.034-3.282.055-.169-1.783-.266-6.363 2.246-11.721zm37.571-6.001c-1.096 3.046-4.34 4.077-6.745 4.407 2.607-2.317 3.487-4.46 3.734-5.244.982.29 1.99.567 3.011.837zm1.826.471c1.043.262 2.095.514 3.158.758-.967 1.967-3.551 2.932-6.375 3.336 1.4-.888 2.586-2.198 3.217-4.094zm26.783 21.01c-9.604-2.959-37.32-3.716-54.69-3.827.588-2.152 3.314-4.978 7.93-7.243.047.008.09.029.139.029 25.93.092 43.979 3.938 48.114 4.907l-1.493 6.134zm-1.223 5.021l-3.788-4.226c1.806.314 3.345.664 4.562 1.053l-.774 3.173zm-49.004.668l1.842 1.734c-.567-.004-1.126-.01-1.706-.013-.05-.556-.092-1.145-.136-1.721zm47.871 3.985l-4.813-5.274a.941.941 0 00-1.226-.148l-5.652 3.784-4.253-4.661a.95.95 0 00-1.276-.113l-5.109 3.917-4.636-4.577a.948.948 0 00-1.276-.051l-4.991 4.198-4.676-4.339a.953.953 0 00-1.269-.018l-4.878 4.287-4.011-3.774c-.07-1.126-.132-2.286-.186-3.479l3.591 3.526a.95.95 0 001.281.042l5.023-4.324 4.589 4.519a.951.951 0 001.272.053l5.039-4.199 4.835 4.555a.944.944 0 001.226.062l5.057-3.879 4.231 4.855a.95.95 0 001.265.148l5.625-4.008 5.592 6.238c.067.074.151.12.233.168l-.607 2.492zm-2.843-.305a146.152 146.152 0 00-6.466-.647l3.648-2.442 2.818 3.089zm-11.087-.977c-1.902-.12-4.035-.236-6.417-.345l3.59-2.752 2.827 3.097zm-10.384-.511a584.532 584.532 0 00-7.057-.221l3.69-3.104 3.367 3.325zm-10.813-.308a799.533 799.533 0 00-6.946-.111l3.507-3.08 3.439 3.191zm-11.741-9.442c1.966.025 4.014.061 6.109.105l-3.198 2.753-2.911-2.858zm10.889.22c2.036.056 4.093.125 6.146.202l-3.218 2.681-2.928-2.883zm10.988.411c2.174.105 4.32.222 6.401.356l-3.319 2.546-3.082-2.902zm10.877.685c2.338.19 4.55.405 6.586.648l-3.715 2.647-2.871-3.295zm-50.268-1.345c2.847-.042 7.95-.065 14.175-.009.355 9.004 1.142 16.237 2.337 21.55H62.492l-3.811-21.541zm61.956 21.542H77.132c-.665-2.849-1.204-6.31-1.617-10.338 31.69.209 43.729 1.782 46.738 2.274a.92.92 0 00.298.202l-1.914 7.862zm6.723-27.618c-4.006-.937-20.542-4.446-44.395-4.904 1.681-.67 3.114-1.395 4.321-2.145.564.071 2.225.254 4.307.254 4.323 0 10.396-.818 12.073-5.064 9.846 2.155 19.938 3.57 25.542 4.27l-1.848 7.589z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M66.592 120.606a3.161 3.161 0 00-3.158-3.158 3.161 3.161 0 00-3.158 3.158 3.161 3.161 0 003.158 3.158 3.162 3.162 0 003.158-3.158zm-3.158 1.263a1.264 1.264 0 11.001-2.527 1.264 1.264 0 01-.001 2.527zm26.473 57.452a3.108 3.108 0 00-3.105 3.105 3.109 3.109 0 003.105 3.105 3.11 3.11 0 003.106-3.105 3.11 3.11 0 00-3.106-3.105zm0 4.316a1.211 1.211 0 11.002-2.422 1.211 1.211 0 01-.002 2.422zm9.283-3.786a3.11 3.11 0 00-3.106 3.106 3.11 3.11 0 003.106 3.105 3.108 3.108 0 003.105-3.105 3.109 3.109 0 00-3.105-3.106zm0 4.316a1.213 1.213 0 01-1.212-1.21 1.212 1.212 0 111.212 1.21z"
  }))));
}

var flags = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Ad: SvgAd,
	Ae: SvgAe,
	Af: SvgAf,
	Ag: SvgAg,
	Ai: SvgAi,
	Al: SvgAl,
	Am: SvgAm,
	Ao: SvgAo,
	Ar: SvgAr,
	As: SvgAs,
	At: SvgAt,
	Au: SvgAu,
	Aw: SvgAw,
	Az: SvgAz,
	Ba: SvgBa,
	Bb: SvgBb,
	Bd: SvgBd,
	Be: SvgBe,
	Bf: SvgBf,
	Bg: SvgBg,
	Bh: SvgBh,
	Bi: SvgBi,
	Bj: SvgBj,
	Bm: SvgBm,
	Bo: SvgBo,
	Br: SvgBr,
	Bs: SvgBs,
	Bt: SvgBt,
	Bw: SvgBw,
	By: SvgBy,
	Bz: SvgBz,
	Ca: SvgCa,
	Cd: SvgCd,
	Cf: SvgCf,
	Cg: SvgCg,
	Ch: SvgCh,
	Ci: SvgCi,
	Ck: SvgCk,
	Cl: SvgCl,
	Cm: SvgCm,
	Cn: SvgCn,
	Co: SvgCo,
	Cr: SvgCr,
	Cu: SvgCu,
	Cv: SvgCv,
	Cw: SvgCw,
	Cy: SvgCy,
	Cz: SvgCz,
	De: SvgDe,
	Dj: SvgDj,
	Dk: SvgDk,
	Dm: SvgDm,
	Do: SvgDo,
	Dz: SvgDz,
	Ec: SvgEc,
	Ee: SvgEe,
	Eg: SvgEg,
	Er: SvgEr,
	Es: SvgEs,
	Et: SvgEt,
	Fi: SvgFi,
	Fj: SvgFj,
	Fk: SvgFk,
	Fm: SvgFm,
	Fo: SvgFo,
	Fr: SvgFr,
	Ga: SvgGa,
	Gb: SvgGb,
	Gd: SvgGd,
	Ge: SvgGe,
	Gg: SvgGg,
	Gh: SvgGh,
	Gi: SvgGi,
	Gl: SvgGl,
	Gm: SvgGm,
	Gn: SvgGn,
	Gq: SvgGq,
	Gr: SvgGr,
	Gt: SvgGt,
	Gu: SvgGu,
	Gw: SvgGw,
	Hk: SvgHk,
	Hn: SvgHn,
	Hr: SvgHr,
	Ht: SvgHt,
	Hu: SvgHu,
	Id: SvgId,
	Ie: SvgIe,
	Il: SvgIl,
	Im: SvgIm,
	In: SvgIn,
	Io: SvgIo,
	Iq: SvgIq,
	Ir: SvgIr,
	Is: SvgIs,
	It: SvgIt,
	Je: SvgJe,
	Jm: SvgJm,
	Jo: SvgJo,
	Jp: SvgJp,
	Ke: SvgKe,
	Kg: SvgKg,
	Kh: SvgKh,
	Ki: SvgKi,
	Km: SvgKm,
	Kn: SvgKn,
	Kp: SvgKp,
	Kr: SvgKr,
	Kw: SvgKw,
	Ky: SvgKy,
	Kz: SvgKz,
	La: SvgLa,
	Lb: SvgLb,
	Li: SvgLi,
	Lk: SvgLk,
	Lr: SvgLr,
	Ls: SvgLs,
	Lt: SvgLt,
	Lu: SvgLu,
	Lv: SvgLv,
	Ly: SvgLy,
	Ma: SvgMa,
	Mc: SvgMc,
	Md: SvgMd,
	Me: SvgMe,
	Mg: SvgMg,
	Mh: SvgMh,
	Mk: SvgMk,
	Ml: SvgMl,
	Mm: SvgMm,
	Mn: SvgMn,
	Mo: SvgMo,
	Mp: SvgMp,
	Mq: SvgMq,
	Mr: SvgMr,
	Ms: SvgMs,
	Mt: SvgMt,
	Mu: SvgMu,
	Mv: SvgMv,
	Mw: SvgMw,
	Mx: SvgMx,
	My: SvgMy,
	Mz: SvgMz,
	Na: SvgNa,
	Ne: SvgNe,
	Nf: SvgNf,
	Ng: SvgNg,
	Ni: SvgNi,
	Nl: SvgNl,
	No: SvgNo,
	Np: SvgNp,
	Nr: SvgNr,
	Nu: SvgNu,
	Nz: SvgNz,
	Om: SvgOm,
	Pa: SvgPa,
	Pe: SvgPe,
	Pf: SvgPf,
	Pg: SvgPg,
	Ph: SvgPh,
	Pk: SvgPk,
	Pl: SvgPl,
	Pn: SvgPn,
	Pr: SvgPr,
	Ps: SvgPs,
	Pt: SvgPt,
	Pw: SvgPw,
	Py: SvgPy,
	Qa: SvgQa,
	Ro: SvgRo,
	Rs: SvgRs,
	Ru: SvgRu,
	Rw: SvgRw,
	Sa: SvgSa,
	Sb: SvgSb,
	Sc: SvgSc,
	Sd: SvgSd,
	Se: SvgSe,
	Sg: SvgSg,
	Si: SvgSi,
	Sk: SvgSk,
	Sl: SvgSl,
	Sm: SvgSm,
	Sn: SvgSn,
	So: SvgSo,
	Sr: SvgSr,
	Ss: SvgSs,
	St: SvgSt,
	Sv: SvgSv,
	Sx: SvgSx,
	Sy: SvgSy,
	Sz: SvgSz,
	Tc: SvgTc,
	Td: SvgTd,
	Tg: SvgTg,
	Th: SvgTh,
	Tj: SvgTj,
	Tk: SvgTk,
	Tm: SvgTm,
	Tn: SvgTn,
	To: SvgTo,
	Tr: SvgTr,
	Tt: SvgTt,
	Tv: SvgTv,
	Tw: SvgTw,
	Tz: SvgTz,
	Ua: SvgUa,
	Ug: SvgUg,
	Us: SvgUs,
	Uy: SvgUy,
	Uz: SvgUz,
	Ve: SvgVe,
	Vi: SvgVi,
	Vn: SvgVn,
	Vu: SvgVu,
	Ws: SvgWs,
	Ye: SvgYe,
	Za: SvgZa,
	Zm: SvgZm,
	Zw: SvgZw
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".ReactFlagsSelect-module_flagsSelect__2pfa2 {\n  position: relative;\n  vertical-align: inherit;\n  padding-bottom: 5px;\n  text-align: left; }\n  .ReactFlagsSelect-module_flagsSelect__2pfa2 svg {\n    width: 1.2em;\n    height: 1.2em;\n    flex-shrink: 0; }\n\n.ReactFlagsSelect-module_flagsSelectInline__cUnnz {\n  display: inline-block; }\n\n.ReactFlagsSelect-module_selectBtn__19wW7 {\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 10px;\n  font-family: inherit;\n  color: #4d4d4d;\n  border: thin solid rgba(77, 77, 77, 0.3);\n  border-radius: 4px;\n  background: transparent; }\n  .ReactFlagsSelect-module_selectBtn__19wW7:after, .ReactFlagsSelect-module_selectBtn__19wW7[aria-expanded=\"true\"]:after {\n    content: \" \";\n    width: 0;\n    height: 0;\n    display: inline-block;\n    margin-left: 5px; }\n  .ReactFlagsSelect-module_selectBtn__19wW7:after {\n    border-top: 5px solid #4d4d4d;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 0; }\n  .ReactFlagsSelect-module_selectBtn__19wW7[aria-expanded=\"true\"]:after {\n    border-top: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #4d4d4d; }\n\n.ReactFlagsSelect-module_label__27pw9 {\n  font-size: 1em;\n  padding-left: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.ReactFlagsSelect-module_selectValue__152eS,\n.ReactFlagsSelect-module_selectOption__3pcgW {\n  cursor: pointer;\n  padding: 0 8px;\n  margin: 4px 0;\n  white-space: nowrap; }\n\n.ReactFlagsSelect-module_selectValue__152eS {\n  pointer-events: none;\n  display: flex;\n  align-items: center; }\n\n.ReactFlagsSelect-module_selectOption__3pcgW {\n  padding: 2px 18px; }\n  .ReactFlagsSelect-module_selectOption__3pcgW:hover, .ReactFlagsSelect-module_selectOption__3pcgW:focus {\n    outline: none;\n    background: #eaeaea; }\n\n.ReactFlagsSelect-module_selectOptionValue__vS99- {\n  display: flex;\n  align-items: center; }\n\n.ReactFlagsSelect-module_selectOptionWithlabel__2GpmM {\n  padding: 4px 10px; }\n\n.ReactFlagsSelect-module_selectOptions__3LNBJ {\n  position: absolute;\n  z-index: 999999;\n  border: 1px solid #bdbbbb;\n  border-radius: 3px;\n  background: #ffffff;\n  margin-top: 8px;\n  padding: 8px 0;\n  max-height: 160px;\n  overflow: auto; }\n\n.ReactFlagsSelect-module_selectOptionsWithSearch__1W03w {\n  padding: 0 0 8px 0; }\n\n.ReactFlagsSelect-module_fullWidthOptions__1XeR6 {\n  right: 0;\n  left: 0; }\n\n.ReactFlagsSelect-module_alignOptionsToLeft__UJj_D {\n  right: 0; }\n\n.ReactFlagsSelect-module_filterBox__3m8EU {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  padding-top: 8px;\n  background: #ffffff; }\n  .ReactFlagsSelect-module_filterBox__3m8EU input {\n    width: calc(100% - 20px);\n    margin: 0 10px;\n    padding: 8px;\n    box-sizing: border-box; }\n    .ReactFlagsSelect-module_filterBox__3m8EU input:focus {\n      outline: none; }\n";
var styles = {"flagsSelect":"ReactFlagsSelect-module_flagsSelect__2pfa2","flagsSelectInline":"ReactFlagsSelect-module_flagsSelectInline__cUnnz","selectBtn":"ReactFlagsSelect-module_selectBtn__19wW7","label":"ReactFlagsSelect-module_label__27pw9","selectValue":"ReactFlagsSelect-module_selectValue__152eS","selectOption":"ReactFlagsSelect-module_selectOption__3pcgW","selectOptionValue":"ReactFlagsSelect-module_selectOptionValue__vS99-","selectOptionWithlabel":"ReactFlagsSelect-module_selectOptionWithlabel__2GpmM","selectOptions":"ReactFlagsSelect-module_selectOptions__3LNBJ","selectOptionsWithSearch":"ReactFlagsSelect-module_selectOptionsWithSearch__1W03w","fullWidthOptions":"ReactFlagsSelect-module_fullWidthOptions__1XeR6","alignOptionsToLeft":"ReactFlagsSelect-module_alignOptionsToLeft__UJj_D","filterBox":"ReactFlagsSelect-module_filterBox__3m8EU"};
styleInject(css_248z);

var ReactFlagsSelect = function (_a) {
    var _b, _c;
    var className = _a.className, _d = _a.selected, selected = _d === void 0 ? "" : _d, onSelect = _a.onSelect, selectButtonClassName = _a.selectButtonClassName, _e = _a.showSelectedLabel, showSelectedLabel = _e === void 0 ? true : _e, _f = _a.showOptionLabel, showOptionLabel = _f === void 0 ? true : _f, _g = _a.selectedSize, selectedSize = _g === void 0 ? 16 : _g, _h = _a.optionsSize, optionsSize = _h === void 0 ? 14 : _h, _j = _a.customLabels, customLabels = _j === void 0 ? {} : _j, _k = _a.placeholder, placeholder = _k === void 0 ? "Select a country" : _k, _l = _a.searchable, searchable = _l === void 0 ? false : _l, _m = _a.searchPlaceholder, searchPlaceholder = _m === void 0 ? "Search" : _m, _o = _a.alignOptionsToLeft, alignOptionsToLeft = _o === void 0 ? false : _o, countries$1 = _a.countries, _p = _a.blacklistCountries, blacklistCountries = _p === void 0 ? false : _p, _q = _a.fullWidth, fullWidth = _q === void 0 ? true : _q, _r = _a.disabled, disabled = _r === void 0 ? false : _r, id = _a.id;
    var _s = react.useState(false), isDropdownOpen = _s[0], setIsDropdownOpen = _s[1];
    var _t = react.useState([]), countriesOptions = _t[0], setCountriesOptions = _t[1];
    var _u = react.useState([]), filteredCountriesOptions = _u[0], setFilteredCountriesOptions = _u[1];
    var _v = react.useState(""), filterValue = _v[0], setFilterValue = _v[1];
    var selectedFlagRef = react.useRef(null);
    var optionsRef = react.useRef(null);
    var filterTextRef = react.useRef(null);
    var options = filterValue ? filteredCountriesOptions : countriesOptions;
    var getFlag = function (key) { return flags[key]; };
    var getSelectedFlag = function () {
        var selectedFlagName = countryCodeToPascalCase(selected);
        var SelectedFlag = getFlag(selectedFlagName);
        return react.createElement(SelectedFlag, null);
    };
    var toggleDropdown = function () { return setIsDropdownOpen(!isDropdownOpen); };
    var onOptionSelect = function (countryCode) {
        setFilterValue("");
        onSelect(countryCode);
    };
    var filterSearch = function (e) {
        var value = e.target.value || "";
        setFilterValue(value);
        if (!value) {
            setFilteredCountriesOptions([]);
            return;
        }
        var filteredCountriesOptions = countriesOptions.filter(function (key) {
            var label = customLabels[key] || countries[key];
            return label && label.match(new RegExp(value, "i"));
        });
        setFilteredCountriesOptions(filteredCountriesOptions);
    };
    var closeDropdown = function (e) {
        if (e.target !== selectedFlagRef.current &&
            e.target !== optionsRef.current &&
            e.target !== filterTextRef.current) {
            setIsDropdownOpen(false);
        }
    };
    var closeDropdwownWithKeyboard = function (e) {
        e.preventDefault();
        if (e.keyCode === 27) {
            //esc key: close dropdown
            setIsDropdownOpen(false);
        }
    };
    var onSelectWithKeyboard = function (e, countryCode) {
        e.preventDefault();
        if (e.keyCode === 13) {
            //enter key: select option
            onOptionSelect(countryCode);
            setIsDropdownOpen(false);
        }
        else if (e.keyCode === 27) {
            //esc key: close dropdown
            setIsDropdownOpen(false);
        }
    };
    react.useEffect(function () {
        setCountriesOptions(getCountryCodes(countries$1, blacklistCountries));
        window.addEventListener("click", closeDropdown);
        return function () {
            window.removeEventListener("click", closeDropdown);
        };
    }, []);
    return (react.createElement("div", { className: classnames(styles.flagsSelect, className, (_b = {},
            _b[styles.flagsSelectInline] = !fullWidth,
            _b)), id: id },
        react.createElement("button", { ref: selectedFlagRef, type: "button", className: classnames(styles.selectBtn, selectButtonClassName), style: { fontSize: selectedSize }, onClick: toggleDropdown, onKeyUp: function (e) { return closeDropdwownWithKeyboard(e); }, disabled: disabled, "aria-haspopup": "listbox", "aria-expanded": isDropdownOpen },
            react.createElement("span", { className: styles.selectValue }, selected ? (react.createElement(react.Fragment, null,
                getSelectedFlag(),
                showSelectedLabel && (react.createElement("span", { className: styles.label }, customLabels[selected] || countries[selected])))) : (react.createElement(react.Fragment, null, placeholder)))),
        isDropdownOpen && (react.createElement("ul", { tabIndex: -1, role: "listbox", ref: optionsRef, style: { fontSize: optionsSize }, className: classnames(styles.selectOptions, (_c = {},
                _c[styles.selectOptionsWithSearch] = searchable,
                _c[styles.alignOptionsToLeft] = alignOptionsToLeft,
                _c[styles.fullWidthOptions] = fullWidth,
                _c)) },
            searchable && (react.createElement("div", { className: styles.filterBox },
                react.createElement("input", { type: "text", value: filterValue, placeholder: searchPlaceholder, ref: filterTextRef, onChange: filterSearch }))),
            options.map(function (countryCode) {
                var _a;
                var countryFlagName = countryCodeToPascalCase(countryCode);
                var CountryFlag = getFlag(countryFlagName);
                return (react.createElement("li", { key: countryCode, role: "option", tabIndex: 0, className: classnames(styles.selectOption, (_a = {},
                        _a[styles.selectOptionWithlabel] = showOptionLabel,
                        _a)), onClick: function () { return onOptionSelect(countryCode); }, onKeyUp: function (e) { return onSelectWithKeyboard(e, countryCode); } },
                    react.createElement("span", { className: styles.selectOptionValue },
                        react.createElement(CountryFlag, null),
                        showOptionLabel && (react.createElement("span", { className: styles.label }, customLabels[countryCode] || countries[countryCode])))));
            })))));
};

export default ReactFlagsSelect;
//# sourceMappingURL=index.esm.js.map
