/**
 * Nex Event API
 * Utilize essa documentação para realizar a integração com o nosso sistema
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import GetEventsPrintAutomaticDtoInner from './GetEventsPrintAutomaticDtoInner';
import PaginationResponse from './PaginationResponse';

/**
 * The GetEventsPrintAutomatic model module.
 * @module model/GetEventsPrintAutomatic
 * @version 1.0
 */
class GetEventsPrintAutomatic {
    /**
     * Constructs a new <code>GetEventsPrintAutomatic</code>.
     * @alias module:model/GetEventsPrintAutomatic
     * @param data {Array.<module:model/GetEventsPrintAutomaticDtoInner>} 
     * @param pageInfo {module:model/PaginationResponse} 
     */
    constructor(data, pageInfo) { 
        
        GetEventsPrintAutomatic.initialize(this, data, pageInfo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data, pageInfo) { 
        obj['data'] = data;
        obj['pageInfo'] = pageInfo;
    }

    /**
     * Constructs a <code>GetEventsPrintAutomatic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetEventsPrintAutomatic} obj Optional instance to populate.
     * @return {module:model/GetEventsPrintAutomatic} The populated <code>GetEventsPrintAutomatic</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEventsPrintAutomatic();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [GetEventsPrintAutomaticDtoInner]);
            }
            if (data.hasOwnProperty('pageInfo')) {
                obj['pageInfo'] = ApiClient.convertToType(data['pageInfo'], PaginationResponse);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetEventsPrintAutomatic</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetEventsPrintAutomatic</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetEventsPrintAutomatic.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                GetEventsPrintAutomaticDtoInner.validateJSON(item);
            };
        }
        // validate the optional field `pageInfo`
        if (data['pageInfo']) { // data not null
          PaginationResponse.validateJSON(data['pageInfo']);
        }

        return true;
    }


}

GetEventsPrintAutomatic.RequiredProperties = ["data", "pageInfo"];

/**
 * @member {Array.<module:model/GetEventsPrintAutomaticDtoInner>} data
 */
GetEventsPrintAutomatic.prototype['data'] = undefined;

/**
 * @member {module:model/PaginationResponse} pageInfo
 */
GetEventsPrintAutomatic.prototype['pageInfo'] = undefined;






export default GetEventsPrintAutomatic;

