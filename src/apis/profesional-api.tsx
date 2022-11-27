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
 
 import { BASE_PATH, RequestArgs, BaseAPI, RequiredError } from './base';
 import { ProfesionalListResponse } from './models';
 import { ProfesionalRequest } from './models';
 import { ProfesionalResponse } from './models';
 /**
  * ProfesionalApi - axios parameter creator
  * @export
  */
 export const ProfesionalApiAxiosParamCreator = function (configuration?: Configuration) {
     return {
         /**
          * Delete oprtation for a single profesional
          * @summary Delete operation
          * @param {string} id Id of the profesional
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         deleteProfesionalId: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
             // verify required parameter 'id' is not null or undefined
             if (id === null || id === undefined) {
                 throw new RequiredError('id','Required parameter id was null or undefined when calling deleteProfesionalId.');
             }
             const localVarPath = `/profesional/{id}`
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
          * Retrieve the information of all profesionals
          * @summary Get all profesional Info
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         getProfesionalAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
             const localVarPath = `/profesional`;
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
          * Retrieve the information of profesional by ID
          * @summary Get all profesional Info
          * @param {string} id Id of the profesional
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         getProfesionalId: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
             // verify required parameter 'id' is not null or undefined
             if (id === null || id === undefined) {
                 throw new RequiredError('id','Required parameter id was null or undefined when calling getProfesionalId.');
             }
             const localVarPath = `/profesional/{id}`
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
          * @param {ProfesionalRequest} [body] 
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         postProfesional: async (body?: ProfesionalRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
             const localVarPath = `/profesional`;
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
          * Upate profesional by Id
          * @summary Update operation
          * @param {string} id Id of the profesional
          * @param {ProfesionalRequest} [body] 
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         putProfesionalId: async (id: string, body?: ProfesionalRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
             // verify required parameter 'id' is not null or undefined
             if (id === null || id === undefined) {
                 throw new RequiredError('id','Required parameter id was null or undefined when calling putProfesionalId.');
             }
             const localVarPath = `/profesional/{id}`
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
             
             const needsSerialization = (typeof body !== "string") || localVarHeaderParameter['Content-Type'] === 'application/json';
             localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
 
             localVarHeaderParameter['Content-Length'] = localVarRequestOptions.data.len();
             localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
 
             return {
                 url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                 options: localVarRequestOptions,
             };
         },
     }
 };
 
 /**
  * ProfesionalApi - functional programming interface
  * @export
  */
 export const ProfesionalApiFp = function(configuration?: Configuration) {
     return {
         /**
          * Delete oprtation for a single profesional
          * @summary Delete operation
          * @param {string} id Id of the profesional
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         async deleteProfesionalId(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
             const localVarAxiosArgs = await ProfesionalApiAxiosParamCreator(configuration).deleteProfesionalId(id, options);
             return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                 const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                 return axios.request(axiosRequestArgs);
             };
         },
         /**
          * Retrieve the information of all profesionals
          * @summary Get all profesional Info
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         async getProfesionalAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProfesionalListResponse>>> {
             const localVarAxiosArgs = await ProfesionalApiAxiosParamCreator(configuration).getProfesionalAll(options);
             return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                 const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                 return axios.request(axiosRequestArgs);
             };
         },
         /**
          * Retrieve the information of profesional by ID
          * @summary Get all profesional Info
          * @param {string} id Id of the profesional
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         async getProfesionalId(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProfesionalResponse>>> {
             const localVarAxiosArgs = await ProfesionalApiAxiosParamCreator(configuration).getProfesionalId(id, options);
             return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                 const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                 return axios.request(axiosRequestArgs);
             };
         },
         /**
          * Create a new profesional
          * @param {ProfesionalRequest} [body] 
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         async postProfesional(body?: ProfesionalRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProfesionalResponse>>> {
             const localVarAxiosArgs = await ProfesionalApiAxiosParamCreator(configuration).postProfesional(body, options);
             return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                 const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                 return axios.request(axiosRequestArgs);
             };
         },
         /**
          * Upate profesional by Id
          * @summary Update operation
          * @param {string} id Id of the profesional
          * @param {ProfesionalRequest} [body] 
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         async putProfesionalId(id: string, body?: ProfesionalRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProfesionalResponse>>> {
             const localVarAxiosArgs = await ProfesionalApiAxiosParamCreator(configuration).putProfesionalId(id, body, options);
             return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                 const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                 return axios.request(axiosRequestArgs);
             };
         },
     }
 };
 
 /**
  * ProfesionalApi - factory interface
  * @export
  */
 export const ProfesionalApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
     return {
         /**
          * Delete oprtation for a single profesional
          * @summary Delete operation
          * @param {string} id Id of the profesional
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         async deleteProfesionalId(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
             return ProfesionalApiFp(configuration).deleteProfesionalId(id, options).then((request) => request(axios, basePath));
         },
         /**
          * Retrieve the information of all profesionals
          * @summary Get all profesional Info
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         async getProfesionalAll(options?: AxiosRequestConfig): Promise<AxiosResponse<ProfesionalListResponse>> {
             return ProfesionalApiFp(configuration).getProfesionalAll(options).then((request) => request(axios, basePath));
         },
         /**
          * Retrieve the information of profesional by ID
          * @summary Get all profesional Info
          * @param {string} id Id of the profesional
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         async getProfesionalId(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ProfesionalResponse>> {
             return ProfesionalApiFp(configuration).getProfesionalId(id, options).then((request) => request(axios, basePath));
         },
         /**
          * Create a new profesional
          * @param {ProfesionalRequest} [body] 
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         async postProfesional(body?: ProfesionalRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<ProfesionalResponse>> {
             return ProfesionalApiFp(configuration).postProfesional(body, options).then((request) => request(axios, basePath));
         },
         /**
          * Upate profesional by Id
          * @summary Update operation
          * @param {string} id Id of the profesional
          * @param {ProfesionalRequest} [body] 
          * @param {*} [options] Override http request option.
          * @throws {RequiredError}
          */
         async putProfesionalId(id: string, body?: ProfesionalRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<ProfesionalResponse>> {
             return ProfesionalApiFp(configuration).putProfesionalId(id, body, options).then((request) => request(axios, basePath));
         },
     };
 };
 
 /**
  * ProfesionalApi - object-oriented interface
  * @export
  * @class ProfesionalApi
  * @extends {BaseAPI}
  */
 export class ProfesionalApi extends BaseAPI {
     /**
      * Delete oprtation for a single profesional
      * @summary Delete operation
      * @param {string} id Id of the profesional
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof ProfesionalApi
      */
     public async deleteProfesionalId(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
         return ProfesionalApiFp(this.configuration).deleteProfesionalId(id, options).then((request) => request(this.axios, this.basePath));
     }
     /**
      * Retrieve the information of all profesionals
      * @summary Get all profesional Info
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof ProfesionalApi
      */
     public async getProfesionalAll(options?: AxiosRequestConfig) : Promise<AxiosResponse<ProfesionalListResponse>> {
         return ProfesionalApiFp(this.configuration).getProfesionalAll(options).then((request) => request(this.axios, this.basePath));
     }
     /**
      * Retrieve the information of profesional by ID
      * @summary Get all profesional Info
      * @param {string} id Id of the profesional
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof ProfesionalApi
      */
     public async getProfesionalId(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProfesionalResponse>> {
         return ProfesionalApiFp(this.configuration).getProfesionalId(id, options).then((request) => request(this.axios, this.basePath));
     }
     /**
      * Create a new profesional
      * @param {ProfesionalRequest} [body] 
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof ProfesionalApi
      */
     public async postProfesional(body?: ProfesionalRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProfesionalResponse>> {
         return ProfesionalApiFp(this.configuration).postProfesional(body, options).then((request) => request(this.axios, this.basePath));
     }
     /**
      * Upate profesional by Id
      * @summary Update operation
      * @param {string} id Id of the profesional
      * @param {ProfesionalRequest} [body] 
      * @param {*} [options] Override http request option.
      * @throws {RequiredError}
      * @memberof ProfesionalApi
      */
     public async putProfesionalId(id: string, body?: ProfesionalRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProfesionalResponse>> {
         return ProfesionalApiFp(this.configuration).putProfesionalId(id, body, options).then((request) => request(this.axios, this.basePath));
     }
 }
 