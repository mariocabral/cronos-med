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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';
import { RoomListResponse } from './models';
import { RoomRequest } from './models';
import { RoomResponse } from './models';
/**
 * RoomsApi - axios parameter creator
 * @export
 */
export const RoomsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete opertation for a single room
         * @summary Delete operation
         * @param {string} id Id of the rooms
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRoomsId: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteRoomsId.');
            }
            const localVarPath = `/rooms/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve the information of all rooms
         * @summary Get all rooms Info
         * @param {string} [search] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoomsAll: async (search?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/rooms`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve the information of room by ID
         * @summary Get all room Info
         * @param {string} id Id of the rooms
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRoomsId: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getRoomsId.');
            }
            const localVarPath = `/rooms/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a new profesional
         * @param {RoomRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postRooms: async (body?: RoomRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/rooms`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarHeaderParameter['Content-Type'] === 'application/json';
             localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
             
             localVarHeaderParameter['Content-Length'] = localVarRequestOptions.data.length;
             localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Upate room by Id
         * @summary Update operation
         * @param {string} id Id of the rooms
         * @param {RoomRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putRoomsId: async (id: string, body?: RoomRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling putRoomsId.');
            }
            const localVarPath = `/rooms/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarHeaderParameter['Content-Type'] === 'application/json';
             localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
 
             localVarHeaderParameter['Content-Length'] = localVarRequestOptions.data.length;
             localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
 

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RoomsApi - functional programming interface
 * @export
 */
export const RoomsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Delete opertation for a single room
         * @summary Delete operation
         * @param {string} id Id of the rooms
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRoomsId(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await RoomsApiAxiosParamCreator(configuration).deleteRoomsId(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve the information of all rooms
         * @summary Get all rooms Info
         * @param {string} [search] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoomsAll(search?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RoomListResponse>>> {
            const localVarAxiosArgs = await RoomsApiAxiosParamCreator(configuration).getRoomsAll(search, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve the information of room by ID
         * @summary Get all room Info
         * @param {string} id Id of the rooms
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoomsId(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RoomResponse>>> {
            const localVarAxiosArgs = await RoomsApiAxiosParamCreator(configuration).getRoomsId(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create a new profesional
         * @param {RoomRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postRooms(body?: RoomRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RoomResponse>>> {
            const localVarAxiosArgs = await RoomsApiAxiosParamCreator(configuration).postRooms(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Upate room by Id
         * @summary Update operation
         * @param {string} id Id of the rooms
         * @param {RoomRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putRoomsId(id: string, body?: RoomRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RoomResponse>>> {
            const localVarAxiosArgs = await RoomsApiAxiosParamCreator(configuration).putRoomsId(id, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RoomsApi - factory interface
 * @export
 */
export const RoomsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Delete opertation for a single room
         * @summary Delete operation
         * @param {string} id Id of the rooms
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRoomsId(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return RoomsApiFp(configuration).deleteRoomsId(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve the information of all rooms
         * @summary Get all rooms Info
         * @param {string} [search] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoomsAll(search?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<RoomListResponse>> {
            return RoomsApiFp(configuration).getRoomsAll(search, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve the information of room by ID
         * @summary Get all room Info
         * @param {string} id Id of the rooms
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRoomsId(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<RoomResponse>> {
            return RoomsApiFp(configuration).getRoomsId(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a new profesional
         * @param {RoomRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postRooms(body?: RoomRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<RoomResponse>> {
            return RoomsApiFp(configuration).postRooms(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Upate room by Id
         * @summary Update operation
         * @param {string} id Id of the rooms
         * @param {RoomRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putRoomsId(id: string, body?: RoomRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<RoomResponse>> {
            return RoomsApiFp(configuration).putRoomsId(id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RoomsApi - object-oriented interface
 * @export
 * @class RoomsApi
 * @extends {BaseAPI}
 */
export class RoomsApi extends BaseAPI {
    /**
     * Delete opertation for a single room
     * @summary Delete operation
     * @param {string} id Id of the rooms
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public async deleteRoomsId(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return RoomsApiFp(this.configuration).deleteRoomsId(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve the information of all rooms
     * @summary Get all rooms Info
     * @param {string} [search] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public async getRoomsAll(search?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<RoomListResponse>> {
        return RoomsApiFp(this.configuration).getRoomsAll(search, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve the information of room by ID
     * @summary Get all room Info
     * @param {string} id Id of the rooms
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public async getRoomsId(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<RoomResponse>> {
        return RoomsApiFp(this.configuration).getRoomsId(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a new profesional
     * @param {RoomRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public async postRooms(body?: RoomRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<RoomResponse>> {
        return RoomsApiFp(this.configuration).postRooms(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Upate room by Id
     * @summary Update operation
     * @param {string} id Id of the rooms
     * @param {RoomRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomsApi
     */
    public async putRoomsId(id: string, body?: RoomRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<RoomResponse>> {
        return RoomsApiFp(this.configuration).putRoomsId(id, body, options).then((request) => request(this.axios, this.basePath));
    }
}
