// @flow
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons naming
    3.0 unported license. see http://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region exports
export type PropertySpecification = {
    type:string;
    default:any;
    onCreate:?string;
    onUpdate:?string;
    nullable:boolean;
    writable:boolean;
    minimum:number;
    maximum:number;
    regularExpressionPattern:?string;
    validator:string;
}
export type ModelConfiguration = {
    typeNameRegularExpressionPattern:string;
    defaultPropertySpecification:PropertySpecification;
    type:{[key:string]:{[key:string]:PropertySpecification}};
}
export type Configuration = {
    debug:boolean;
    model:ModelConfiguration;
}
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
