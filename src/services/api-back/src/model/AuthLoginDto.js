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
 * The AuthLoginDto model module.
 * @module model/AuthLoginDto
 * @version 1.0
 */
class AuthLoginDto {
    /**
     * Constructs a new <code>AuthLoginDto</code>.
     * @alias module:model/AuthLoginDto
     * @param email {String} 
     * @param password {String} 
     */
    constructor(email, password) { 
        
        AuthLoginDto.initialize(this, email, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password) { 
        obj['email'] = email;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>AuthLoginDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthLoginDto} obj Optional instance to populate.
     * @return {module:model/AuthLoginDto} The populated <code>AuthLoginDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthLoginDto();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthLoginDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthLoginDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AuthLoginDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}

AuthLoginDto.RequiredProperties = ["email", "password"];

/**
 * @member {String} email
 */
AuthLoginDto.prototype['email'] = undefined;

/**
 * @member {String} password
 */
AuthLoginDto.prototype['password'] = undefined;






export default AuthLoginDto;

