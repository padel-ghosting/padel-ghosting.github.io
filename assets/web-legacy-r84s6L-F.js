System.register(["./index-legacy-Bd2UdeOL.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.W}],execute:function(){e("KeepAwakeWeb",class extends r{constructor(){super(...arguments),this.wakeLock=null,this._isSupported="wakeLock"in navigator}async keepAwake(){this._isSupported||this.throwUnsupportedError(),this.wakeLock&&await this.allowSleep(),this.wakeLock=await navigator.wakeLock.request("screen")}async allowSleep(){var e;this._isSupported||this.throwUnsupportedError(),null===(e=this.wakeLock)||void 0===e||e.release(),this.wakeLock=null}async isSupported(){return{isSupported:this._isSupported}}async isKeptAwake(){return this._isSupported||this.throwUnsupportedError(),{isKeptAwake:!!this.wakeLock}}throwUnsupportedError(){throw this.unavailable("Screen Wake Lock API not available in this browser.")}})}}}));
