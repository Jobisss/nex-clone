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
 * The UserProducerFinishSignUpDto model module.
 * @module model/UserProducerFinishSignUpDto
 * @version 1.0
 */
class UserProducerFinishSignUpDto {
    /**
     * Constructs a new <code>UserProducerFinishSignUpDto</code>.
     * @alias module:model/UserProducerFinishSignUpDto
     */
    constructor() { 
        
        UserProducerFinishSignUpDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserProducerFinishSignUpDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserProducerFinishSignUpDto} obj Optional instance to populate.
     * @return {module:model/UserProducerFinishSignUpDto} The populated <code>UserProducerFinishSignUpDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserProducerFinishSignUpDto();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('dateBirth')) {
                obj['dateBirth'] = ApiClient.convertToType(data['dateBirth'], 'String');
            }
            if (data.hasOwnProperty('document')) {
                obj['document'] = ApiClient.convertToType(data['document'], 'String');
            }
            if (data.hasOwnProperty('phoneCountry')) {
                obj['phoneCountry'] = ApiClient.convertToType(data['phoneCountry'], 'String');
            }
            if (data.hasOwnProperty('phoneNumber')) {
                obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('district')) {
                obj['district'] = ApiClient.convertToType(data['district'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('complement')) {
                obj['complement'] = ApiClient.convertToType(data['complement'], 'String');
            }
            if (data.hasOwnProperty('cep')) {
                obj['cep'] = ApiClient.convertToType(data['cep'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserProducerFinishSignUpDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserProducerFinishSignUpDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['dateBirth'] && !(typeof data['dateBirth'] === 'string' || data['dateBirth'] instanceof String)) {
            throw new Error("Expected the field `dateBirth` to be a primitive type in the JSON string but got " + data['dateBirth']);
        }
        // ensure the json data is a string
        if (data['document'] && !(typeof data['document'] === 'string' || data['document'] instanceof String)) {
            throw new Error("Expected the field `document` to be a primitive type in the JSON string but got " + data['document']);
        }
        // ensure the json data is a string
        if (data['phoneCountry'] && !(typeof data['phoneCountry'] === 'string' || data['phoneCountry'] instanceof String)) {
            throw new Error("Expected the field `phoneCountry` to be a primitive type in the JSON string but got " + data['phoneCountry']);
        }
        // ensure the json data is a string
        if (data['phoneNumber'] && !(typeof data['phoneNumber'] === 'string' || data['phoneNumber'] instanceof String)) {
            throw new Error("Expected the field `phoneNumber` to be a primitive type in the JSON string but got " + data['phoneNumber']);
        }
        // ensure the json data is a string
        if (data['street'] && !(typeof data['street'] === 'string' || data['street'] instanceof String)) {
            throw new Error("Expected the field `street` to be a primitive type in the JSON string but got " + data['street']);
        }
        // ensure the json data is a string
        if (data['district'] && !(typeof data['district'] === 'string' || data['district'] instanceof String)) {
            throw new Error("Expected the field `district` to be a primitive type in the JSON string but got " + data['district']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['number'] && !(typeof data['number'] === 'string' || data['number'] instanceof String)) {
            throw new Error("Expected the field `number` to be a primitive type in the JSON string but got " + data['number']);
        }
        // ensure the json data is a string
        if (data['complement'] && !(typeof data['complement'] === 'string' || data['complement'] instanceof String)) {
            throw new Error("Expected the field `complement` to be a primitive type in the JSON string but got " + data['complement']);
        }
        // ensure the json data is a string
        if (data['cep'] && !(typeof data['cep'] === 'string' || data['cep'] instanceof String)) {
            throw new Error("Expected the field `cep` to be a primitive type in the JSON string but got " + data['cep']);
        }

        return true;
    }


}



/**
 * User name
 * @member {String} name
 */
UserProducerFinishSignUpDto.prototype['name'] = undefined;

/**
 * User birth date
 * @member {String} dateBirth
 */
UserProducerFinishSignUpDto.prototype['dateBirth'] = undefined;

/**
 * User document
 * @member {String} document
 */
UserProducerFinishSignUpDto.prototype['document'] = undefined;

/**
 * User phone country
 * @member {String} phoneCountry
 */
UserProducerFinishSignUpDto.prototype['phoneCountry'] = undefined;

/**
 * User phone number
 * @member {String} phoneNumber
 */
UserProducerFinishSignUpDto.prototype['phoneNumber'] = undefined;

/**
 * User street
 * @member {String} street
 */
UserProducerFinishSignUpDto.prototype['street'] = undefined;

/**
 * User district
 * @member {String} district
 */
UserProducerFinishSignUpDto.prototype['district'] = undefined;

/**
 * User state
 * @member {String} state
 */
UserProducerFinishSignUpDto.prototype['state'] = undefined;

/**
 * User city
 * @member {String} city
 */
UserProducerFinishSignUpDto.prototype['city'] = undefined;

/**
 * User country
 * @member {String} country
 */
UserProducerFinishSignUpDto.prototype['country'] = undefined;

/**
 * User number
 * @member {String} number
 */
UserProducerFinishSignUpDto.prototype['number'] = undefined;

/**
 * User complement
 * @member {String} complement
 */
UserProducerFinishSignUpDto.prototype['complement'] = undefined;

/**
 * User cep
 * @member {String} cep
 */
UserProducerFinishSignUpDto.prototype['cep'] = undefined;






export default UserProducerFinishSignUpDto;

