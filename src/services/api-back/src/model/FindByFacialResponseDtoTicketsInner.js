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
 * The FindByFacialResponseDtoTicketsInner model module.
 * @module model/FindByFacialResponseDtoTicketsInner
 * @version 1.0
 */
class FindByFacialResponseDtoTicketsInner {
    /**
     * Constructs a new <code>FindByFacialResponseDtoTicketsInner</code>.
     * @alias module:model/FindByFacialResponseDtoTicketsInner
     * @param id {String} 
     * @param qrcode {String} 
     * @param ticketName {String} 
     * @param lastStatus {String} 
     */
    constructor(id, qrcode, ticketName, lastStatus) { 
        
        FindByFacialResponseDtoTicketsInner.initialize(this, id, qrcode, ticketName, lastStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, qrcode, ticketName, lastStatus) { 
        obj['id'] = id;
        obj['qrcode'] = qrcode;
        obj['ticketName'] = ticketName;
        obj['lastStatus'] = lastStatus;
    }

    /**
     * Constructs a <code>FindByFacialResponseDtoTicketsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FindByFacialResponseDtoTicketsInner} obj Optional instance to populate.
     * @return {module:model/FindByFacialResponseDtoTicketsInner} The populated <code>FindByFacialResponseDtoTicketsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FindByFacialResponseDtoTicketsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('qrcode')) {
                obj['qrcode'] = ApiClient.convertToType(data['qrcode'], 'String');
            }
            if (data.hasOwnProperty('ticketName')) {
                obj['ticketName'] = ApiClient.convertToType(data['ticketName'], 'String');
            }
            if (data.hasOwnProperty('lastStatus')) {
                obj['lastStatus'] = ApiClient.convertToType(data['lastStatus'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FindByFacialResponseDtoTicketsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FindByFacialResponseDtoTicketsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FindByFacialResponseDtoTicketsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['qrcode'] && !(typeof data['qrcode'] === 'string' || data['qrcode'] instanceof String)) {
            throw new Error("Expected the field `qrcode` to be a primitive type in the JSON string but got " + data['qrcode']);
        }
        // ensure the json data is a string
        if (data['ticketName'] && !(typeof data['ticketName'] === 'string' || data['ticketName'] instanceof String)) {
            throw new Error("Expected the field `ticketName` to be a primitive type in the JSON string but got " + data['ticketName']);
        }
        // ensure the json data is a string
        if (data['lastStatus'] && !(typeof data['lastStatus'] === 'string' || data['lastStatus'] instanceof String)) {
            throw new Error("Expected the field `lastStatus` to be a primitive type in the JSON string but got " + data['lastStatus']);
        }

        return true;
    }


}

FindByFacialResponseDtoTicketsInner.RequiredProperties = ["id", "qrcode", "ticketName", "lastStatus"];

/**
 * @member {String} id
 */
FindByFacialResponseDtoTicketsInner.prototype['id'] = undefined;

/**
 * @member {String} qrcode
 */
FindByFacialResponseDtoTicketsInner.prototype['qrcode'] = undefined;

/**
 * @member {String} ticketName
 */
FindByFacialResponseDtoTicketsInner.prototype['ticketName'] = undefined;

/**
 * @member {String} lastStatus
 */
FindByFacialResponseDtoTicketsInner.prototype['lastStatus'] = undefined;






export default FindByFacialResponseDtoTicketsInner;

