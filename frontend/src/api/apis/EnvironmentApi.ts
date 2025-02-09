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


import * as runtime from '../runtime';
import {
    Environment,
    EnvironmentFromJSON,
    EnvironmentToJSON,
} from '../models';

/**
 * 
 */
export class EnvironmentApi extends runtime.BaseAPI {

    /**
     * Get info about the deployment environment 
     * Get info about the deployment environment
     */
    async getEnvironmentRaw(): Promise<runtime.ApiResponse<Environment>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/environment`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvironmentFromJSON(jsonValue));
    }

    /**
     * Get info about the deployment environment 
     * Get info about the deployment environment
     */
    async getEnvironment(): Promise<Environment> {
        const response = await this.getEnvironmentRaw();
        return await response.value();
    }

}
