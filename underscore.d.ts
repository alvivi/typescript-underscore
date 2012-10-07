/*
   Typescipt Underscore 1.4.1-0.1
   (c) 2012 Álvaro Vilanova Vidal
   Typescipt-Underscore may be freely distributed under the MIT license.
 */

interface UnderscoreWrappedObject {
    each (iterator : (elementOrValue : any, indexOrKey : any, list? : any) => void, context? : any) : UnderscoreWrappedObject;
    forEach (iterator : (elementOrValue : any, indexOrKey : any, list? : any) => void, context? : any) : UnderscoreWrappedObject;

    map (iterator : (value : any, key? : any, list? : any) => any, context? : any) : UnderscoreWrappedObject;
    collect (iterator : (value : any, key? : any, list? : any) => any, context? : any) : UnderscoreWrappedObject;

    reduce (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : UnderscoreWrappedObject;
    inject (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : UnderscoreWrappedObject;
    foldl (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : UnderscoreWrappedObject;

    reduceRight (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : UnderscoreWrappedObject;
    foldr (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : UnderscoreWrappedObject;

    find (iterator : (value : any) => bool, context? : any) : UnderscoreWrappedObject;
    detect (iterator : (value : any) => bool, context? : any) : UnderscoreWrappedObject;

    filter (iterator : (value : any) => bool, context? : any) : UnderscoreWrappedObject;
    select (iterator : (value : any) => bool, context? : any) : UnderscoreWrappedObject;

    where (properties : any) : UnderscoreWrappedObject;

    reject (iterator : (value : any) => bool, context? : any) : UnderscoreWrappedObject;

    all (iterator : (value : any) => bool, context? : any) : UnderscoreWrappedObject;
    every (iterator : (value : any) => bool, context? : any) : UnderscoreWrappedObject;

    any (iterator? : (value : any) => bool, context? : any) : UnderscoreWrappedObject;
    some (iterator? : (value : any) => bool, context? : any) : UnderscoreWrappedObject;

    contains (value : any) : UnderscoreWrappedObject;
    include (value : any) : UnderscoreWrappedObject;

    invoke (methodName : string, ...arguments: any[]) : UnderscoreWrappedObject;

    pluck (propertyName : string) : UnderscoreWrappedObject;

    max (iterator? : (value : any) => any, context? : any) : UnderscoreWrappedObject;

    min (iterator? : (value : any) => any, context? : any) : UnderscoreWrappedObject;

    sortBy (iterator? : any, context? : any) : UnderscoreWrappedObject;

    groupBy (iterator : (value : any) => any) : UnderscoreWrappedObject;

    countBy (iterator : (value : any) => any) : UnderscoreWrappedObject;

    shuffle () : UnderscoreWrappedObject;

    toArray () : UnderscoreWrappedObject;

    size () : UnderscoreWrappedObject;

    // Array functions

    first (n? : number) : UnderscoreWrappedObject;
    head (n? : number) : UnderscoreWrappedObject;
    take (n? : number) : UnderscoreWrappedObject;

    initial (n? : number) : UnderscoreWrappedObject;

    last (n? : number) : UnderscoreWrappedObject;

    rest (index? : number) : UnderscoreWrappedObject;
    tail (index? : number) : UnderscoreWrappedObject;
    drop (index? : number) : UnderscoreWrappedObject;

    compact () : UnderscoreWrappedObject;

    flatten (shallow? : bool) : UnderscoreWrappedObject;

    without (...values : any[]) : UnderscoreWrappedObject;

    union (...arrays : any[][]) : UnderscoreWrappedObject;

    intersection (...arrays : any[][]) : UnderscoreWrappedObject;

    difference (...arrays : any[][]) : UnderscoreWrappedObject;

    uniq (isSorted? : bool, iterator? : (any) => any) : UnderscoreWrappedObject;
    unique (isSorted? : bool, iterator? : (any) => any) : UnderscoreWrappedObject;

    zip (...arrays : any[][]) : UnderscoreWrappedObject;

    object (value? : any) : UnderscoreWrappedObject;

    indexOf (value : any, isSorted? : bool) : UnderscoreWrappedObject;

    lastIndexOf (value : any, fromIndex? : number) : UnderscoreWrappedObject;

    sortedIndex (value : any, iterator? : (value : any) => any) : UnderscoreWrappedObject;

    // Not useful in a wrappedObject
    // range (startOrStop : number, stop? : number, step? : number) : number[];


    // Functions (uh, ahem) functions

    bind (object : any, ...arguments : any[]) : UnderscoreWrappedObject;

    // Not useful in a wrappedObject
    // bindAll (object : any, ...methodNames : string[]) : void;

    memoize (hash? : (value : any) => any) : UnderscoreWrappedObject;

    // delay (wait : number, ...arguments : any[]) : void;

    // Not useful in a wrappedObject
    // defer (...arguments : any[]) : void;

    throttle (wait : number) : UnderscoreWrappedObject;

    debounce (wait : number, immediate? : bool) : UnderscoreWrappedObject;

    once () : UnderscoreWrappedObject;

    // Not useful in a wrappedObject
    // after (count : number, fn : (...as : any[]) => any) : (...as : any[]) => any;

    wrap (wrapper : (...as : any[]) => any) : UnderscoreWrappedObject;

    compose (...fns : any[]) : UnderscoreWrappedObject;


    // Object functions

    keys () : UnderscoreWrappedObject;

    values () : UnderscoreWrappedObject;

    pairs () : UnderscoreWrappedObject;

    invert () : UnderscoreWrappedObject;

    functions () : UnderscoreWrappedObject;
    methods () : UnderscoreWrappedObject;

    extend (...sources : any[]) : UnderscoreWrappedObject;

    pick (...keys : string[]) : UnderscoreWrappedObject;

    omit (...keys : string[]) : UnderscoreWrappedObject;

    defaults (...defaults : any[]) : UnderscoreWrappedObject;

    clone () : UnderscoreWrappedObject;

    tap (interceptor : (...as : any[]) => any) : UnderscoreWrappedObject;

    has (key : any) : UnderscoreWrappedObject;

    isEmpty () : UnderscoreWrappedObject;

    isElement () : UnderscoreWrappedObject;

    isArray () : UnderscoreWrappedObject;

    isObject () : UnderscoreWrappedObject;

    isArguments () : UnderscoreWrappedObject;

    isFunction () : UnderscoreWrappedObject;

    isString () : UnderscoreWrappedObject;

    isNumber () : UnderscoreWrappedObject;

    isFinite () : UnderscoreWrappedObject;

    isBoolean () : UnderscoreWrappedObject;

    isDate () : UnderscoreWrappedObject;

    isRegExp () : UnderscoreWrappedObject;

    isNaN () : UnderscoreWrappedObject;

    isNull () : UnderscoreWrappedObject;

    isUndefined () : UnderscoreWrappedObject;


    // Utility functions

    // Not useful in a wrappedObject
    // noConflict () : any;

    identity () : UnderscoreWrappedObject;

    // Not useful in a wrappedObject
    // times (n : number, iterator : (index : number) => void, context? : any) : void;

    // random (min : number, max : number) : number;

    // mixin (object : any) : void;

    // uniqueId (prefix? : string) : any;

    escape () : UnderscoreWrappedObject;

    result (property : string) : UnderscoreWrappedObject;

    // Not useful in a wrappedObject
    // template (data? : any, settings? : any) : (...as : any[]) => string;

    // Not useful in a wrappedObject
    // chain () : UnderscoreWrappedObject;

    value () : any;
}

interface UnderscoreOOStatic extends Function {
    // OO-style
    (arg : any) : UnderscoreOOStatic;

    each (iterator : (elementOrValue : any, indexOrKey : any, list? : any) => void, context? : any) : void;
    forEach (iterator : (elementOrValue : any, indexOrKey : any, list? : any) => void, context? : any) : void;

    map (iterator : (value : any, key? : any, list? : any) => any, context? : any) : any[];
    collect (iterator : (value : any, key? : any, list? : any) => any, context? : any) : any[];

    reduce (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;
    inject (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;
    foldl (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;

    reduceRight (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;
    foldr (iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;

    find (iterator : (value : any) => bool, context? : any) : any;
    detect (iterator : (value : any) => bool, context? : any) : any;

    filter (iterator : (value : any) => bool, context? : any) : any;
    select (iterator : (value : any) => bool, context? : any) : any;

    where (properties : any) : any;

    reject (iterator : (value : any) => bool, context? : any) : any;

    all (iterator : (value : any) => bool, context? : any) : any;
    every (iterator : (value : any) => bool, context? : any) : any;

    any (iterator? : (value : any) => bool, context? : any) : any;
    some (iterator? : (value : any) => bool, context? : any) : any;

    contains (value : any) : bool;
    include (value : any) : bool;

    invoke (methodName : string, ...arguments: any[]) : any;

    pluck (propertyName : string) : any;

    max (iterator? : (value : any) => any, context? : any) : any;

    min (iterator? : (value : any) => any, context? : any) : any;

    sortBy (iterator? : any, context? : any) : any;

    groupBy (iterator : (value : any) => any) : any;

    countBy (iterator : (value : any) => any) : any;

    shuffle () : any;

    toArray () : any[];

    size () : number;

    // Array functions

    first (n? : number) : any;
    head (n? : number) : any;
    take (n? : number) : any;

    initial (n? : number) : any[];

    last (n? : number) : any;

    rest (index? : number) : any[];
    tail (index? : number) : any[];
    drop (index? : number) : any[];

    compact () : any[];

    flatten (shallow? : bool) : any[];

    without (...values : any[]) : any[];

    union (...arrays : any[][]) : any[];

    intersection (...arrays : any[][]) : any[];

    difference (...arrays : any[][]) : any[];

    uniq (isSorted? : bool, iterator? : (any) => any) : any[];
    unique (isSorted? : bool, iterator? : (any) => any) : any[];

    zip (...arrays : any[][]) : any[];

    object (value? : any) : any;

    indexOf (value : any, isSorted? : bool) : number;

    lastIndexOf (value : any, fromIndex? : number) : number;

    sortedIndex (value : any, iterator? : (value : any) => any) : any;

    // Not valid in OO-Style
    // range (startOrStop : number, stop? : number, step? : number) : number[];


    // Functions (uh, ahem) functions

    bind (object : any, ...arguments : any[]) : (...as : any[]) => any;

    // Not valid in OO-Style
    // bindAll (object : any, ...methodNames : string[]) : void;

    memoize (hash? : (value : any) => any) : (...as : any[]) => any;

    delay (wait : number, ...arguments : any[]) : void;

    defer (...arguments : any[]) : void;

    throttle (wait : number) : (...as : any[]) => any;

    debounce (wait : number, immediate? : bool) : (...as : any[]) => any;

    once () : (...as : any[]) => any;

    // Not valid in OO-Style
    // after (count : number, fn : (...as : any[]) => any) : (...as : any[]) => any;

    wrap (wrapper : (...as : any[]) => any) : (...as : any[]) => any;

    compose (...fns : any[]) : (...as : any[]) => any;


    // Object functions

    keys () : string[];

    values () : any[];

    pairs () : any[];

    invert () : any;

    functions () : string[];
    methods () : string[];

    extend (...sources : any[]) : any;

    pick (...keys : string[]) : any;

    omit (...keys : string[]) : any;

    defaults (...defaults : any[]) : any;

    clone () : any;

    tap (interceptor : (...as : any[]) => any) : any;

    has (key : any) : bool;

    isEmpty () : bool;

    isElement () : bool;

    isArray () : bool;

    isObject () : bool;

    isArguments () : bool;

    isFunction () : bool;

    isString () : bool;

    isNumber () : bool;

    isFinite () : bool;

    isBoolean () : bool;

    isDate () : bool;

    isRegExp () : bool;

    isNaN () : bool;

    isNull () : bool;

    isUndefined () : bool;


    // Utility functions

    // Not valid in OO-Style
    // noConflict () : any;

    identity () : any;

    // Not valid in OO-Style
    // times (n : number, iterator : (index : number) => void, context? : any) : void;

    // random (min : number, max : number) : number;

    // mixin (object : any) : void;

    // uniqueId (prefix? : string) : any;

    escape () : string;

    result (property : string) : any;

    template (data? : any, settings? : any) : (...as : any[]) => string;

    chain () : UnderscoreWrappedObject;
}

declare module "underscore" {
    // OO-style
    export function (arg : any) : UnderscoreOOStatic;

    // Collection Functions (Arrays or Objects)
    export function each (list : any, iterator : (elementOrValue : any, indexOrKey : any, list? : any) => void, context? : any) : void;
    export function forEach (list : any, iterator : (elementOrValue : any, indexOrKey : any, list? : any) => void, context? : any) : void;

    export function map (list : any, iterator : (value : any, key? : any, list? : any) => any, context? : any) : any[];
    export function collect (list : any, iterator : (value : any, key? : any, list? : any) => any, context? : any) : any[];

    export function reduce (list : any, iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;
    export function inject (list : any, iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;
    export function foldl (list : any, iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;

    export function reduceRight (list : any, iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;
    export function foldr (list : any, iterator : (memo : any, value : any, indexOrKey? : any, context? : any) => any, memo : any, context? : any) : any;

    export function find (list : any, iterator : (value : any) => bool, context? : any) : any;
    export function detect (list : any, iterator : (value : any) => bool, context? : any) : any;

    export function filter (list : any, iterator : (value : any) => bool, context? : any) : any;
    export function select (list : any, iterator : (value : any) => bool, context? : any) : any;

    export function where (list : any, properties : any) : any;

    export function reject (list : any, iterator : (value : any) => bool, context? : any) : any;

    export function all (list : any, iterator : (value : any) => bool, context? : any) : any;
    export function every (list : any, iterator : (value : any) => bool, context? : any) : any;

    export function any (list : any, iterator? : (value : any) => bool, context? : any) : any;
    export function some (list : any, iterator? : (value : any) => bool, context? : any) : any;

    export function contains (list : any, value : any) : bool;
    export function include (list : any, value : any) : bool;

    export function invoke (list : any, methodName : string, ...arguments: any[]) : any;

    export function pluck (list : any, propertyName : string) : any;

    export function max (list : any, iterator? : (value : any) => any, context? : any) : any;

    export function min (list : any, iterator? : (value : any) => any, context? : any) : any;

    export function sortBy (list : any, iterator? : any, context? : any) : any;

    export function groupBy (list : any, iterator : (value : any) => any) : any;

    export function countBy (list : any, iterator : (value : any) => any) : any;

    export function shuffle (list : any) : any;

    export function toArray (list : any) : any[];

    export function size (list : any) : number;


    // Array Functions

    export function first (array : any[], n? : number) : any;
    export function head (array : any[], n? : number) : any;
    export function take (array : any[], n? : number) : any;

    export function initial (array : any[], n? : number) : any[];

    export function last (array : any[], n? : number) : any;

    export function rest (array : any[], index? : number) : any[];
    export function tail (array : any[], index? : number) : any[];
    export function drop (array : any[], index? : number) : any[];

    export function compact (array : any[]) : any[];

    export function flatten (array : any[], shallow? : bool) : any[];

    export function without (array : any[], ...values : any[]) : any[];

    export function union (...arrays : any[][]) : any[];

    export function intersection (...arrays : any[][]) : any[];

    export function difference (...arrays : any[][]) : any[];

    export function uniq (array : any[], isSorted? : bool, iterator? : (any) => any) : any[];
    export function unique (array : any[], isSorted? : bool, iterator? : (any) => any) : any[];

    export function zip (...arrays : any[][]) : any[];

    export function object (list : any, value? : any) : any;

    export function indexOf (array : any[], value : any, isSorted? : bool) : number;

    export function lastIndexOf (array : any[], value : any, fromIndex? : number) : number;

    export function sortedIndex (list : any, value : any, iterator? : (value : any) => any) : any;

    export function range (startOrStop : number, stop? : number, step? : number) : number[];


    // Function (uh, ahem) Functions

    export function bind (fn : (...as : any[]) => any, object : any, ...arguments : any[]) : (...as : any[]) => any;

    export function bindAll (object : any, ...methodNames : string[]) : void;

    export function memoize (fn : (...as : any[]) => any, hashFunction? : (value : any) => any) : (...as : any[]) => any;

    export function delay (fn : (...as : any[]) => any, wait : number, ...arguments : any[]) : void;

    export function defer (fn : (...as : any[]) => any, ...arguments : any[]) : void;

    export function throttle (fn : (...as : any[]) => any, wait : number) : (...as : any[]) => any;

    export function debounce (fn : (...as : any[]) => any, wait : number, immediate? : bool) : (...as : any[]) => any;

    export function once (fn : (...as : any[]) => any) : (...as : any[]) => any;

    export function after (count : number, fn : (...as : any[]) => any) : (...as : any[]) => any;

    export function wrap (fn : (...as : any[]) => any, wrapper : (...as : any[]) => any) : (...as : any[]) => any;

    export function compose (...fns : any[]) : (...as : any[]) => any;


    // Object Functions

    export function keys (object : any) : string[];

    export function values (object : any) : any[];

    export function pairs (object : any) : any[];

    export function invert (object : any) : any;

    export function functions (object : any) : string[];
    export function methods (object : any) : string[];

    export function extend (destination : any, ...sources : any[]) : any;

    export function pick (object : any, ...keys : string[]) : any;

    export function omit (object : any, ...keys : string[]) : any;

    export function defaults (object : any, ...defaults : any[]) : any;

    export function clone (object : any) : any;

    export function tap (object : any, interceptor : (...as : any[]) => any) : any;

    export function has (object : any, key : any) : bool;

    export function isEmpty (object : any) : bool;

    export function isElement (object : any) : bool;

    export function isArray (object : any) : bool;

    export function isObject (value : any) : bool;

    export function isArguments (object : any) : bool;

    export function isFunction (object : any) : bool;

    export function isString (object : any) : bool;

    export function isNumber (object : any) : bool;

    export function isFinite (object : any) : bool;

    export function isBoolean (object : any) : bool;

    export function isDate (object : any) : bool;

    export function isRegExp (object : any) : bool;

    export function isNaN (object : any) : bool;

    export function isNull (object : any) : bool;

    export function isUndefined (object : any) : bool;


    // Utility Functions

    export function noConflict () : any;

    export function identity (value : any) : any;

    export function times (n : number, iterator : (index : number) => void, context? : any) : void;

    export function random (min : number, max : number) : number;

    export function mixin (object : any) : void;

    export function uniqueId (prefix? : string) : any;

    export function escape (str : string) : string;

    export function result (object : any, property : string) : any;

    export function template (templateString : string, data? : any, settings? : any) : (...as : any[]) => string;


    export function chain (object : any) : UnderscoreWrappedObject;

}
