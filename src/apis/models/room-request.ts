/* tslint:disable */
/* eslint-disable */
/**
 * Cronos-Med
 * All request used by Cronos Med app
 *
 * OpenAPI spec version: 1.0
 * Contact: mariocabral.dev@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface RoomRequest
 */
 export interface RoomRequest {
    /**
     * 
     * @type {string}
     * @memberof RoomRequest
     */
    roomId?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RoomRequest
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RoomRequest
     */
    enabled: boolean;
}
