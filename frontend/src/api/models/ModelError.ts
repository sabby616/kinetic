/* tslint:disable */
/* eslint-disable */
/**
 * OpenStax Kinetic API
 * The Kinetic API for OpenStax.  Requests to this API should include `application/json` in the `Accept` header.  The desired API version is specified in the request URL, e.g. `[domain]/api/v0/researcher/studies`. While the API does support a default version, that version will change over time and therefore should not be used in production code! 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * The HTTP status code
     * @type {number}
     * @memberof ModelError
     */
    statusCode?: number;
    /**
     * The error messages, if any
     * @type {Array<string>}
     * @memberof ModelError
     */
    messages?: Array<string>;
}

export function ModelErrorFromJSON(json: any): ModelError {
    return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': !exists(json, 'status_code') ? undefined : json['status_code'],
        'messages': !exists(json, 'messages') ? undefined : json['messages'],
    };
}

export function ModelErrorToJSON(value?: ModelError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status_code': value.statusCode,
        'messages': value.messages,
    };
}


