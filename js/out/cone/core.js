// Compiled by ClojureScript 1.10.520 {}
goog.provide('cone.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('taoensso.timbre');
cone.core.create_timer = (function cone$core$create_timer(){
return reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"time","time",1385887882),null,new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),null,new cljs.core.Keyword(null,"interval","interval",1708495417),null], null));
});
cone.core.reset_timer = (function cone$core$reset_timer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29321 = arguments.length;
var i__4731__auto___29322 = (0);
while(true){
if((i__4731__auto___29322 < len__4730__auto___29321)){
args__4736__auto__.push((arguments[i__4731__auto___29322]));

var G__29323 = (i__4731__auto___29322 + (1));
i__4731__auto___29322 = G__29323;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return cone.core.reset_timer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

cone.core.reset_timer.cljs$core$IFn$_invoke$arity$variadic = (function (d,t,p__29318){
var map__29319 = p__29318;
var map__29319__$1 = (((((!((map__29319 == null))))?(((((map__29319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29319):map__29319);
var interval = cljs.core.get.call(null,map__29319__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),(1000));
return cljs.core.swap_BANG_.call(null,d,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),t,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),(0),new cljs.core.Keyword(null,"interval","interval",1708495417),interval);
});

cone.core.reset_timer.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cone.core.reset_timer.cljs$lang$applyTo = (function (seq29315){
var G__29316 = cljs.core.first.call(null,seq29315);
var seq29315__$1 = cljs.core.next.call(null,seq29315);
var G__29317 = cljs.core.first.call(null,seq29315__$1);
var seq29315__$2 = cljs.core.next.call(null,seq29315__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29316,G__29317,seq29315__$2);
});

cone.core.start_timer = (function cone$core$start_timer(d){
var interval = new cljs.core.Keyword(null,"interval","interval",1708495417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d));
var id = setInterval(((function (interval){
return (function (){
if((new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d)) < new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d)))){
return cljs.core.swap_BANG_.call(null,d,cljs.core.update,new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),cljs.core.inc);
} else {
return null;
}
});})(interval))
,interval);
return cljs.core.swap_BANG_.call(null,d,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id);
});
cone.core.pause_timer = (function cone$core$pause_timer(d){
var temp__5718__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d));
if(cljs.core.truth_(temp__5718__auto__)){
var id = temp__5718__auto__;
return clearInterval(id);
} else {
return null;
}
});
cone.core.resume_timer = (function cone$core$resume_timer(d){
var interval = new cljs.core.Keyword(null,"interval","interval",1708495417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d));
if(cljs.core.truth_((function (){var and__4120__auto__ = interval;
if(cljs.core.truth_(and__4120__auto__)){
return id;
} else {
return and__4120__auto__;
}
})())){
return setInterval(((function (interval,id){
return (function (){
if((new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d)) < new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d)))){
return cljs.core.swap_BANG_.call(null,d,cljs.core.update,new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),cljs.core.inc);
} else {
return null;
}
});})(interval,id))
,interval);
} else {
return null;
}
});
cone.core.stop_timer = (function cone$core$stop_timer(d){
var temp__5718__auto___29324 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d));
if(cljs.core.truth_(temp__5718__auto___29324)){
var id_29325 = temp__5718__auto___29324;
clearInterval(id_29325);
} else {
}

return cone.core.reset_timer.call(null,d,null);
});
cone.core.clock = (function cone$core$clock(){
var timer = cone.core.create_timer.call(null);
cone.core.reset_timer.call(null,timer,(10),new cljs.core.Keyword(null,"interval","interval",1708495417),(1000));

cone.core.start_timer.call(null,timer);

return ((function (timer){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["timer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timer)))?new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timer)):null))].join('')], null);
});
;})(timer))
});
if((typeof cone !== 'undefined') && (typeof cone.core !== 'undefined') && (typeof cone.core.cones_diameter !== 'undefined')){
} else {
cone.core.cones_diameter = cljs.core.list(0.5,1.0,1.5,2.0,2.5,3.0);
}
if((typeof cone !== 'undefined') && (typeof cone.core !== 'undefined') && (typeof cone.core.status !== 'undefined')){
} else {
cone.core.status = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ready","ready",1086465795),null,new cljs.core.Keyword(null,"idle","idle",-2007156861),null,new cljs.core.Keyword(null,"on-position","on-position",-689902458),null,new cljs.core.Keyword(null,"switching","switching",-1085196306),null,new cljs.core.Keyword(null,"treating","treating",-1839811468),null], null), null);
}
if((typeof cone !== 'undefined') && (typeof cone.core !== 'undefined') && (typeof cone.core.raw_data !== 'undefined')){
} else {
cone.core.raw_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"patient-info","patient-info",1997982881),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"institution","institution",-70023072),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"sex","sex",-2056008571),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"treatment-unit","treatment-unit",-1697011511),new cljs.core.Keyword(null,"physician","physician",405865421),new cljs.core.Keyword(null,"cone-Sequence","cone-Sequence",701835503),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"study-description","study-description",-112319813)],["ZS Hospital",(65),"M","Zhang San","TrueBeam1","Wang","Cone#1/Cone#3/Cone#4","0001101","ABDOMEN"]),new cljs.core.Keyword(null,"cones","cones",-633449367),cljs.core.list((1),(3),(4)),new cljs.core.Keyword(null,"treatment-time","treatment-time",-1593570531),cljs.core.list((30),(20),(10))], null);
}
cone.core.init_model = (function cone$core$init_model(data){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"cone.core","/tmp/form-init13340897921046811348.clj",78,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["init-model [data] with data: ",data], null);
}),null)),null,783101536);

var no_of_cones = (function cone$core$init_model_$_no_of_cones(){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"cones","cones",-633449367).cljs$core$IFn$_invoke$arity$1(data));
});
var nth_cone = (function cone$core$init_model_$_nth_cone(n){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"cones","cones",-633449367).cljs$core$IFn$_invoke$arity$1(data),n);
});
var nth_treatment_time = (function cone$core$init_model_$_nth_treatment_time(n){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"treatment-time","treatment-time",-1593570531).cljs$core$IFn$_invoke$arity$1(data),n);
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"patient-info","patient-info",1997982881),new cljs.core.Keyword(null,"patient-info","patient-info",1997982881).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"just-load-in","just-load-in",-547258811),true,new cljs.core.Keyword(null,"cones","cones",-633449367),cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function cone$core$init_model_$_iter__29326(s__29327){
return (new cljs.core.LazySeq(null,(function (){
var s__29327__$1 = s__29327;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29327__$1);
if(temp__5720__auto__){
var s__29327__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29327__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__29327__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__29329 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__29328 = (0);
while(true){
if((i__29328 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__29328);
cljs.core.chunk_append.call(null,b__29329,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"n","n",562130025),i,new cljs.core.Keyword(null,"cone-pos","cone-pos",-995671372),nth_cone.call(null,i),new cljs.core.Keyword(null,"on?","on?",-74017086),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"time","time",1385887882),nth_treatment_time.call(null,i)], null));

var G__29330 = (i__29328 + (1));
i__29328 = G__29330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29329),cone$core$init_model_$_iter__29326.call(null,cljs.core.chunk_rest.call(null,s__29327__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29329),null);
}
} else {
var i = cljs.core.first.call(null,s__29327__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"n","n",562130025),i,new cljs.core.Keyword(null,"cone-pos","cone-pos",-995671372),nth_cone.call(null,i),new cljs.core.Keyword(null,"on?","on?",-74017086),false,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"time","time",1385887882),nth_treatment_time.call(null,i)], null),cone$core$init_model_$_iter__29326.call(null,cljs.core.rest.call(null,s__29327__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,no_of_cones.call(null)));
})())], null);
});
cone.core.db = reagent.core.atom.call(null,cone.core.init_model.call(null,cone.core.raw_data));
cone.core.no_of_cones = (function cone$core$no_of_cones(data){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"cones","cones",-633449367).cljs$core$IFn$_invoke$arity$1(data));
});
cone.core.nth_cone = (function cone$core$nth_cone(data,n){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"cones","cones",-633449367).cljs$core$IFn$_invoke$arity$1(data),n);
});
cone.core.nth_cone_pos = (function cone$core$nth_cone_pos(data,n){
return new cljs.core.Keyword(null,"cone-pos","cone-pos",-995671372).cljs$core$IFn$_invoke$arity$1(cone.core.nth_cone.call(null,data,n));
});
cone.core.nth_cone_on_QMARK_ = (function cone$core$nth_cone_on_QMARK_(data,n){
return new cljs.core.Keyword(null,"on?","on?",-74017086).cljs$core$IFn$_invoke$arity$1(cone.core.nth_cone.call(null,data,n));
});
cone.core.nth_cone_status = (function cone$core$nth_cone_status(data,n){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cone.core.nth_cone.call(null,data,n));
});
cone.core.nth_treatment_time = (function cone$core$nth_treatment_time(data,n){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(cone.core.nth_cone.call(null,data,n));
});
cone.core.current_cone_no = (function cone$core$current_cone_no(data){
var cones = new cljs.core.Keyword(null,"cones","cones",-633449367).cljs$core$IFn$_invoke$arity$1(data);
var cones_number = cone.core.no_of_cones.call(null,data);
var n = (0);
var cone__$1 = cljs.core.get.call(null,cones,(0));
while(true){
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"on?","on?",-74017086).cljs$core$IFn$_invoke$arity$1(cone__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (n >= cones_number);
}
})())){
return n;
} else {
var G__29331 = (n + (1));
var G__29332 = cljs.core.get.call(null,cones,(n + (1)));
n = G__29331;
cone__$1 = G__29332;
continue;
}
break;
}
});
cone.core.just_load_in_QMARK_ = (function cone$core$just_load_in_QMARK_(data){
return new cljs.core.Keyword(null,"just-load-in","just-load-in",-547258811).cljs$core$IFn$_invoke$arity$1(data);
});
cone.core.clear_just_load_in_BANG_ = (function cone$core$clear_just_load_in_BANG_(db){
return cljs.core.swap_BANG_.call(null,db,cljs.core.assoc,new cljs.core.Keyword(null,"just-load-in","just-load-in",-547258811),false);
});
cone.core.cone_treated_QMARK_ = (function cone$core$cone_treated_QMARK_(data,i){
var n = cone.core.no_of_cones.call(null,data);
var current = cone.core.current_cone_no.call(null,data);
if(cljs.core.truth_(cone.core.just_load_in_QMARK_.call(null,cljs.core.deref.call(null,cone.core.db)))){
return false;
} else {
if((i >= current)){
return false;
} else {
return true;
}
}
});
cone.core.patient_name = (function cone$core$patient_name(data){
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient-info","patient-info",1997982881),new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
cone.core.patient_sex = (function cone$core$patient_sex(data){
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient-info","patient-info",1997982881),new cljs.core.Keyword(null,"sex","sex",-2056008571)], null));
});
cone.core.patient_id = (function cone$core$patient_id(data){
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patient-info","patient-info",1997982881),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
});
cone.core.toggle_cone = (function cone$core$toggle_cone(data,n){
return cljs.core.update_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cones","cones",-633449367),n,new cljs.core.Keyword(null,"on?","on?",-74017086)], null),cljs.core.not);
});
cone.core.toggle_cone_BANG_ = (function cone$core$toggle_cone_BANG_(db,n){
return cljs.core.swap_BANG_.call(null,db,cone.core.toggle_cone,n);
});
cone.core.set_cone_status = (function cone$core$set_cone_status(data,n,status){
return cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cones","cones",-633449367),n,new cljs.core.Keyword(null,"status","status",-1997798413)], null),status);
});
cone.core.set_cone_status_BANG_ = (function cone$core$set_cone_status_BANG_(db,n,status){
return cljs.core.swap_BANG_.call(null,db,cone.core.set_cone_status,n,status);
});
cone.core.set_current_cone_BANG_ = (function cone$core$set_current_cone_BANG_(db,n){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"cone.core","/tmp/form-init13340897921046811348.clj",155,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["current cone#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cone.core.current_cone_no.call(null,cljs.core.deref.call(null,db)))," set cone#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," n cones: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cone.core.no_of_cones.call(null,cljs.core.deref.call(null,db))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))].join('')], null);
}),null)),null,-150608145);

var i = cone.core.current_cone_no.call(null,cljs.core.deref.call(null,db));
if((n === i)){
return null;
} else {
var update_all = ((function (i){
return (function cone$core$set_current_cone_BANG__$_update_all(db__$1,i__$1,n__$1){
cone.core.toggle_cone_BANG_.call(null,db__$1,i__$1);

cone.core.set_cone_status_BANG_.call(null,db__$1,i__$1,new cljs.core.Keyword(null,"idle","idle",-2007156861));

if((n__$1 < cone.core.no_of_cones.call(null,cljs.core.deref.call(null,db__$1)))){
cone.core.toggle_cone_BANG_.call(null,db__$1,n__$1);

return cone.core.set_cone_status_BANG_.call(null,db__$1,n__$1,new cljs.core.Keyword(null,"ready","ready",1086465795));
} else {
return null;
}
});})(i))
;
return update_all.call(null,db,i,n);
}
});
if((typeof cone !== 'undefined') && (typeof cone.core !== 'undefined') && (typeof cone.core.message !== 'undefined')){
} else {
cone.core.message = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open-patient","open-patient",-683492467),null,new cljs.core.Keyword(null,"toggle-on","toggle-on",-265263793),null,new cljs.core.Keyword(null,"start-treat","start-treat",-161776333),null,new cljs.core.Keyword(null,"finish-treat","finish-treat",-1328512230),null,new cljs.core.Keyword(null,"toggle-off","toggle-off",73565277),null], null), null);
}
cone.core.start_treat = (function cone$core$start_treat(){
window.alert("start-treat");

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"cone.core","/tmp/form-init13340897921046811348.clj",179,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["start-treat []"], null);
}),null)),null,745040137);

cone.core.toggle_cone_BANG_.call(null,cone.core.db,(0));

cone.core.set_cone_status_BANG_.call(null,cone.core.db,(0),new cljs.core.Keyword(null,"ready","ready",1086465795));

cljs.core.swap_BANG_.call(null,cone.core.db,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),(0));

return cone.core.clear_just_load_in_BANG_.call(null,cone.core.db);
});
cone.core.toggle_on = (function cone$core$toggle_on(n,clock){
cone.core.set_cone_status_BANG_.call(null,cone.core.db,n,new cljs.core.Keyword(null,"treating","treating",-1839811468));

return cone.core.start_timer.call(null,clock);
});
cone.core.toggle_off = (function cone$core$toggle_off(n,clock){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"cone.core","/tmp/form-init13340897921046811348.clj",192,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toggle-off cone#",n], null);
}),null)),null,-1242438064);

cone.core.stop_timer.call(null,clock);

return cone.core.set_current_cone_BANG_.call(null,cone.core.db,(n + (1)));
});
cone.core.finish_treat = (function cone$core$finish_treat(){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"cone.core","/tmp/form-init13340897921046811348.clj",197,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["finish-treat patient id: ",cone.core.patient_id.call(null,cljs.core.deref.call(null,cone.core.db))], null);
}),null)),null,301701049);

var n = cone.core.current_cone_no.call(null,cljs.core.deref.call(null,cone.core.db));
if(cljs.core._EQ_.call(null,cone.core.nth_cone_status.call(null,cljs.core.deref.call(null,cone.core.db),n),new cljs.core.Keyword(null,"treating","treating",-1839811468))){
return window.alert("Treating. Operation is invalid.");
} else {
return window.alert("Treatment finished");
}
});
cone.core.open_patient_electron = (function cone$core$open_patient_electron(){
var electron = require("electron");
var remote = electron.remote;
var dialog = remote.dialog;
return dialog.showOpenDialog(((function (electron,remote,dialog){
return (function (p1__29333_SHARP_){
return cljs.core.println.call(null,p1__29333_SHARP_);
});})(electron,remote,dialog))
);
});
cone.core.open_patient_html = (function cone$core$open_patient_html(){
return null;
});
cone.core.open_patient = (function cone$core$open_patient(){
try{return cone.core.open_patient_electron.call(null);
}catch (e29334){var e = e29334;
return window.alert("open patient");
}});
if((typeof cone !== 'undefined') && (typeof cone.core !== 'undefined') && (typeof cone.core.message_proc !== 'undefined')){
} else {
cone.core.message_proc = cljs.core.PersistentArrayMap.EMPTY;
}
cone.core.snd = (function cone$core$snd(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29340 = arguments.length;
var i__4731__auto___29341 = (0);
while(true){
if((i__4731__auto___29341 < len__4730__auto___29340)){
args__4736__auto__.push((arguments[i__4731__auto___29341]));

var G__29342 = (i__4731__auto___29341 + (1));
i__4731__auto___29341 = G__29342;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cone.core.snd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cone.core.snd.cljs$core$IFn$_invoke$arity$variadic = (function (msg,rst){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"cone.core","/tmp/form-init13340897921046811348.clj",222,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["message: ",msg," - ",rst], null);
}),null)),null,-1324567725);

var pred__29337 = cljs.core._EQ_;
var expr__29338 = msg;
if(cljs.core.truth_(pred__29337.call(null,new cljs.core.Keyword(null,"start-treat","start-treat",-161776333),expr__29338))){
return cone.core.start_treat.call(null);
} else {
if(cljs.core.truth_(pred__29337.call(null,new cljs.core.Keyword(null,"toggle-on","toggle-on",-265263793),expr__29338))){
return cljs.core.apply.call(null,cone.core.toggle_on,rst);
} else {
if(cljs.core.truth_(pred__29337.call(null,new cljs.core.Keyword(null,"toggle-off","toggle-off",73565277),expr__29338))){
return cljs.core.apply.call(null,cone.core.toggle_off,rst);
} else {
if(cljs.core.truth_(pred__29337.call(null,new cljs.core.Keyword(null,"finish-treat","finish-treat",-1328512230),expr__29338))){
return cone.core.finish_treat.call(null);
} else {
if(cljs.core.truth_(pred__29337.call(null,new cljs.core.Keyword(null,"open-patient","open-patient",-683492467),expr__29338))){
return cone.core.open_patient.call(null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29338)].join('')));
}
}
}
}
}
});

cone.core.snd.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cone.core.snd.cljs$lang$applyTo = (function (seq29335){
var G__29336 = cljs.core.first.call(null,seq29335);
var seq29335__$1 = cljs.core.next.call(null,seq29335);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29336,seq29335__$1);
});

cone.core.greyout_QMARK_ = (function cone$core$greyout_QMARK_(n){
var status = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle","idle",-2007156861),null,new cljs.core.Keyword(null,"switching","switching",-1085196306),null], null), null);
return ((cljs.core.contains_QMARK_.call(null,status,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cone.core.db)))) || (cljs.core.not_EQ_.call(null,n,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cone.core.db)))));
});
cone.core.greyout = (function cone$core$greyout(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#CCCCCC"], null)], null);
});
cone.core.simple_component = (function cone$core$simple_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.disabled","div.ui.disabled",525627242),cone.core.greyout.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I am a component!"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.someclass","p.someclass",-1904646929),"I have ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"bold"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null)," and red "], null),"text."], null)], null);
});
cone.core.open_button = (function cone$core$open_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cone.core.snd.call(null,new cljs.core.Keyword(null,"open-patient","open-patient",-683492467));
})], null),"Open"], null);
});
cone.core.start_treat_button = (function cone$core$start_treat_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.primary.button","button.ui.primary.button",-646259243),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cone.core.snd.call(null,new cljs.core.Keyword(null,"start-treat","start-treat",-161776333));
})], null),"Treat"], null);
});
cone.core.finish_treat_button = (function cone$core$finish_treat_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.ui.primary.button","button.ui.primary.button",-646259243),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cone.core.snd.call(null,new cljs.core.Keyword(null,"finish-treat","finish-treat",-1328512230));
})], null),"Finish"], null);
});
cone.core.cone_control = (function cone$core$cone_control(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.menu","nav.menu",712557538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(cljs.core.truth_(cone.core.just_load_in_QMARK_.call(null,cljs.core.deref.call(null,cone.core.db)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cone.core.start_treat_button], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cone.core.finish_treat_button], null))], null);
});
cone.core.patient_info = (function cone$core$patient_info(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.ui.large.label","h4.ui.large.label",2056934980),"Patient information:"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.list","div.ui.list",-92101773),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.angle.right.icon","i.angle.right.icon",195882815)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Institution: Zhong-Shan Hospital"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.angle.right.icon","i.angle.right.icon",195882815)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),["Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cone.core.patient_name.call(null,cljs.core.deref.call(null,cone.core.db)))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.angle.right.icon","i.angle.right.icon",195882815)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Patient ID: ",cone.core.patient_id.call(null,cljs.core.deref.call(null,cone.core.db))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.angle.right.icon","i.angle.right.icon",195882815)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Patient Sex: M"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.angle.right.icon","i.angle.right.icon",195882815)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Patient Age: 65"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.angle.right.icon","i.angle.right.icon",195882815)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Physician: Wang"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.angle.right.icon","i.angle.right.icon",195882815)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Study Description: ABDOMEN"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.angle.right.icon","i.angle.right.icon",195882815)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Treatment Unit: TrueBeam1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.angle.right.icon","i.angle.right.icon",195882815)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Cone Sequence: Cone#1/Cone#3/Cone#4"], null)], null)], null)], null);
});
cone.core.toggle = (function cone$core$toggle(label,id,enable_QMARK_,clock,start){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.toggle.checkbox.disabled","div.ui.toggle.checkbox.disabled",-663261129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"red"], null),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),"public",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not.call(null,enable_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (this$){
console.log(this$.target.checked);

cone.core.reset_timer.call(null,clock,start);

var id__$1 = parseInt(this$.target.id);
var checked = this$.target.checked;
if(cljs.core.truth_(checked)){
return cone.core.snd.call(null,new cljs.core.Keyword(null,"toggle-on","toggle-on",-265263793),id__$1,clock);
} else {
return cone.core.snd.call(null,new cljs.core.Keyword(null,"toggle-off","toggle-off",73565277),id__$1,clock);
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__4131__auto__ = label;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})()], null)], null);
});
cone.core.a_timer = (function cone$core$a_timer(i){
var clock = cone.core.create_timer.call(null);
return ((function (clock){
return (function (){
var elapsed = ((cljs.core._EQ_.call(null,cone.core.nth_cone_status.call(null,cljs.core.deref.call(null,cone.core.db),i),new cljs.core.Keyword(null,"treating","treating",-1839811468)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clock))),"/"].join(''):null);
var treatment_time = cone.core.nth_treatment_time.call(null,cljs.core.deref.call(null,cone.core.db),i);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.description","div.description",1049154676),"Treatment time: ",elapsed,treatment_time,"\""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cone.core.toggle,"On/Off",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cone.core.nth_cone_on_QMARK_.call(null,cljs.core.deref.call(null,cone.core.db),i),clock,treatment_time], null)], null);
});
;})(clock))
});
cone.core.cone_status = (function cone$core$cone_status(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.ordered.steps","div.ui.ordered.steps",-1422106567),(function (){var cones = new cljs.core.Keyword(null,"cones","cones",-633449367).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cone.core.db));
return cljs.core.doall.call(null,(function (){var iter__4523__auto__ = ((function (cones){
return (function cone$core$cone_status_$_iter__29343(s__29344){
return (new cljs.core.LazySeq(null,((function (cones){
return (function (){
var s__29344__$1 = s__29344;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__29344__$1);
if(temp__5720__auto__){
var s__29344__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29344__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__29344__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__29346 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__29345 = (0);
while(true){
if((i__29345 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__29345);
var n = cone.core.nth_cone_pos.call(null,cljs.core.deref.call(null,cone.core.db),i);
var treatment_time = cone.core.nth_treatment_time.call(null,cljs.core.deref.call(null,cone.core.db),i);
cljs.core.chunk_append.call(null,b__29346,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),((cone.core.cone_treated_QMARK_.call(null,cljs.core.deref.call(null,cone.core.db),i))?"completed step":"active step")], null),(cljs.core.truth_(cone.core.nth_cone_on_QMARK_.call(null,cljs.core.deref.call(null,cone.core.db),i))?null:cone.core.greyout.call(null))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),["Cone","#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.description","div.description",1049154676),["Diameter \u03D5",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cone.core.cones_diameter,n)),"mm"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.description","div.description",1049154676),["Status: ",cljs.core.name.call(null,cone.core.nth_cone_status.call(null,cljs.core.deref.call(null,cone.core.db),i))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cone.core.a_timer,i], null)], null)], null));

var G__29347 = (i__29345 + (1));
i__29345 = G__29347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29346),cone$core$cone_status_$_iter__29343.call(null,cljs.core.chunk_rest.call(null,s__29344__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29346),null);
}
} else {
var i = cljs.core.first.call(null,s__29344__$2);
var n = cone.core.nth_cone_pos.call(null,cljs.core.deref.call(null,cone.core.db),i);
var treatment_time = cone.core.nth_treatment_time.call(null,cljs.core.deref.call(null,cone.core.db),i);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"class","class",-2030961996),((cone.core.cone_treated_QMARK_.call(null,cljs.core.deref.call(null,cone.core.db),i))?"completed step":"active step")], null),(cljs.core.truth_(cone.core.nth_cone_on_QMARK_.call(null,cljs.core.deref.call(null,cone.core.db),i))?null:cone.core.greyout.call(null))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),["Cone","#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.description","div.description",1049154676),["Diameter \u03D5",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cone.core.cones_diameter,n)),"mm"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.description","div.description",1049154676),["Status: ",cljs.core.name.call(null,cone.core.nth_cone_status.call(null,cljs.core.deref.call(null,cone.core.db),i))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cone.core.a_timer,i], null)], null)], null),cone$core$cone_status_$_iter__29343.call(null,cljs.core.rest.call(null,s__29344__$2)));
}
} else {
return null;
}
break;
}
});})(cones))
,null,null));
});})(cones))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,cone.core.no_of_cones.call(null,cljs.core.deref.call(null,cone.core.db))));
})());
})()], null);
});
cone.core.tool_bar = (function cone$core$tool_bar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sixteen.wide.column","div.sixteen.wide.column",-2029321837),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.icon.menu","div.ui.icon.menu",-928056044),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.item","a.item",725358035),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cone.core.snd.call(null,new cljs.core.Keyword(null,"open-patient","open-patient",-683492467));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.folder.open.icon","i.folder.open.icon",439827062)], null)], null)], null)], null);
});
cone.core.home_page = (function cone$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.grid","div.ui.grid",271546981),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cone.core.tool_bar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sixteen.wide.column","div.sixteen.wide.column",-2029321837),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.huge.ui.label","div.huge.ui.label",1340793240),"Welcome to Cone Monitor"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.three.wide.column","div.three.wide.column",970740526),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cone.core.patient_info], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.centered.aligned.ten.wide.column","div.centered.aligned.ten.wide.column",1518632453),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cone.core.cone_status], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cone.core.cone_control], null)], null)], null);
});
cone.core.middleware_time_stamp = (function cone$core$middleware_time_stamp(data){
var time_stamp = (function cone$core$middleware_time_stamp_$_time_stamp(){
return (new Date()).toISOString();
});
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"vargs","vargs",-966597273),cljs.core.cons.call(null,time_stamp.call(null),new cljs.core.Keyword(null,"vargs","vargs",-966597273).cljs$core$IFn$_invoke$arity$1(data)));
});
cone.core.mount_root = (function cone$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cone.core.home_page], null),document.getElementById("app"));
});
cone.core.init_BANG_ = (function cone$core$init_BANG_(){
taoensso.timbre.merge_config_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cone.core.middleware_time_stamp], null)], null));

return cone.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map
