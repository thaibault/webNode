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
// region imports
import type {PlainObject} from 'weboptimizer/type'
// endregion
// region exports
// / region model
export type AllowedModelRolesMapping = {[key:string]:Array<string>}
export type PropertySpecification = {
    type:string;
    default:any;
    onCreateEvaluation:?string;
    onCreateExpression:?string;
    onUpdateEvaluation:?string;
    onUpdateExpression:?string;
    nullable:boolean;
    writable:boolean;
    mutable:boolean;
    minimum:number;
    maximum:number;
    regularExpressionPattern:?string;
    constraintEvaluation:?string;
    constraintExpression:?string;
}
export type Model = {
    _extends:Array<string>;
    [key:string]:PropertySpecification;
}
export type Models = {[key:string]:Model}
export type SpecialPropertyNames = {
    allowedRoles:string;
    extend:string;
    type:string;
    typeNameRegularExpressionPattern:string;
    validatedDocumentsCache:string;
}
export type ModelConfiguration = {
    defaultPropertySpecification:PropertySpecification;
    models:Models;
    reservedPropertyNames:Array<string>;
    specialPropertyNames:SpecialPropertyNames;
    updateStrategy:?string;
}
export type SimpleModelConfiguration = {
    reservedPropertyNames:Array<string>;
    specialPropertyNames:SpecialPropertyNames;
    updateStrategy:?string;
}
// / endregion
// / region configuration
export type Configuration = {
    context:{
        path:string;
        type:string;
    };
    database:{
        url:string;
        path:string;
        configFilePath:string;
        port:number;
        user:{
            name:string;
            password:string;
        };
        'log/file':string;
        'log/level':string;
        'httpd/host':string;
    };
    debug:boolean;
    encoding:string;
    modelConfiguration:ModelConfiguration;
    name:string;
    package:PlainObject;
    plugin:{
        configurationPropertyNames:Array<string>;
        directories:{
            internal:{
                path:string;
                nameRegularExpressionPattern:string;
            };
            external:{
                path:string;
                nameRegularExpressionPattern:string;
            };
        };
    };
    server:{
        application:{
            rootPath:string;
            options:PlainObject;
            port:number;
            hostName:string;
        };
        proxy:{
            logFilePath:{
                access:string;
                error:string;
            };
        };
    };
}
// / endregion
// / region database error
export type DatabaseAuthorisationError = {
    unauthorized:string;
    toString:() => string;
}
export type DatabaseForbiddenError = {
    forbidden:string;
    toString:() => string;
}
export type DatabaseError = DatabaseAuthorisationError|DatabaseForbiddenError
// / endregion
export type Plugin = {
    api:?Function;
    apiFilePath:?string;
    apiFileLoadTimestamp:?number;
    configuration:?PlainObject;
    configurationFilePath:?string;
    configurationFileLoadTimestamp:?number;
    name:string;
    path:string;
    scope:Object;
}
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
