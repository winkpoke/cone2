// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__24540__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24541__i = 0, G__24541__a = new Array(arguments.length -  0);
while (G__24541__i < G__24541__a.length) {G__24541__a[G__24541__i] = arguments[G__24541__i + 0]; ++G__24541__i;}
  args = new cljs.core.IndexedSeq(G__24541__a,0,null);
} 
return G__24540__delegate.call(this,args);};
G__24540.cljs$lang$maxFixedArity = 0;
G__24540.cljs$lang$applyTo = (function (arglist__24542){
var args = cljs.core.seq(arglist__24542);
return G__24540__delegate(args);
});
G__24540.cljs$core$IFn$_invoke$arity$variadic = G__24540__delegate;
return G__24540;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24543__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24544__i = 0, G__24544__a = new Array(arguments.length -  0);
while (G__24544__i < G__24544__a.length) {G__24544__a[G__24544__i] = arguments[G__24544__i + 0]; ++G__24544__i;}
  args = new cljs.core.IndexedSeq(G__24544__a,0,null);
} 
return G__24543__delegate.call(this,args);};
G__24543.cljs$lang$maxFixedArity = 0;
G__24543.cljs$lang$applyTo = (function (arglist__24545){
var args = cljs.core.seq(arglist__24545);
return G__24543__delegate(args);
});
G__24543.cljs$core$IFn$_invoke$arity$variadic = G__24543__delegate;
return G__24543;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
