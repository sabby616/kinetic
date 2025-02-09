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
 * @interface QualtricsStage
 */
export interface QualtricsStage {
    /**
     * The type of this stage config
     * @type {string}
     * @memberof QualtricsStage
     */
    type: QualtricsStageTypeEnum;
    /**
     * The Qualtrics URL that this stage launches to
     * @type {string}
     * @memberof QualtricsStage
     */
    url: string;
    /**
     * The survey secret used to encrypt information we send to Qualtrics
     * @type {string}
     * @memberof QualtricsStage
     */
    secretKey: string;
}

/**
* @export
* @enum {string}
*/
export enum QualtricsStageTypeEnum {
    Qualtrics = 'qualtrics'
}

export function QualtricsStageFromJSON(json: any): QualtricsStage {
    return QualtricsStageFromJSONTyped(json, false);
}

export function QualtricsStageFromJSONTyped(json: any, ignoreDiscriminator: boolean): QualtricsStage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'url': json['url'],
        'secretKey': json['secret_key'],
    };
}

export function QualtricsStageToJSON(value?: QualtricsStage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'url': value.url,
        'secret_key': value.secretKey,
    };
}


