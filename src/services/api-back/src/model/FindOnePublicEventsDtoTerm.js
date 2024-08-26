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

/**
 * The FindOnePublicEventsDtoTerm model module.
 * @module model/FindOnePublicEventsDtoTerm
 * @version 1.0
 */
class FindOnePublicEventsDtoTerm {
    /**
     * Constructs a new <code>FindOnePublicEventsDtoTerm</code>.
     * @alias module:model/FindOnePublicEventsDtoTerm
     * @param id {String} 
     * @param name {String} 
     * @param path {String} 
     */
    constructor(id, name, path) { 
        
        FindOnePublicEventsDtoTerm.initialize(this, id, name, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, path) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['path'] = path;
    }

    /**
     * Constructs a <code>FindOnePublicEventsDtoTerm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FindOnePublicEventsDtoTerm} obj Optional instance to populate.
     * @return {module:model/FindOnePublicEventsDtoTerm} The populated <code>FindOnePublicEventsDtoTerm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FindOnePublicEventsDtoTerm();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FindOnePublicEventsDtoTerm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FindOnePublicEventsDtoTerm</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FindOnePublicEventsDtoTerm.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }

        return true;
    }


}

FindOnePublicEventsDtoTerm.RequiredProperties = ["id", "name", "path"];

/**
 * @member {String} id
 */
FindOnePublicEventsDtoTerm.prototype['id'] = undefined;

/**
 * @member {String} name
 */
FindOnePublicEventsDtoTerm.prototype['name'] = undefined;

/**
 * @member {String} path
 */
FindOnePublicEventsDtoTerm.prototype['path'] = undefined;






export default FindOnePublicEventsDtoTerm;

