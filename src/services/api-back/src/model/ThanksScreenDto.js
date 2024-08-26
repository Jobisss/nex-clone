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
 * The ThanksScreenDto model module.
 * @module model/ThanksScreenDto
 * @version 1.0
 */
class ThanksScreenDto {
    /**
     * Constructs a new <code>ThanksScreenDto</code>.
     * @alias module:model/ThanksScreenDto
     * @param eventTitle {String} 
     * @param eventCity {String} 
     * @param evenState {String} 
     * @param eventPhoto {String} 
     * @param eventSlug {String} 
     * @param eventParticipantTicketTitle {String} 
     * @param eventParticipantName {String} 
     * @param eventParticipantQrcode {String} 
     * @param eventParticipantDocument {String} 
     */
    constructor(eventTitle, eventCity, evenState, eventPhoto, eventSlug, eventParticipantTicketTitle, eventParticipantName, eventParticipantQrcode, eventParticipantDocument) { 
        
        ThanksScreenDto.initialize(this, eventTitle, eventCity, evenState, eventPhoto, eventSlug, eventParticipantTicketTitle, eventParticipantName, eventParticipantQrcode, eventParticipantDocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eventTitle, eventCity, evenState, eventPhoto, eventSlug, eventParticipantTicketTitle, eventParticipantName, eventParticipantQrcode, eventParticipantDocument) { 
        obj['eventTitle'] = eventTitle;
        obj['eventCity'] = eventCity;
        obj['evenState'] = evenState;
        obj['eventPhoto'] = eventPhoto;
        obj['eventSlug'] = eventSlug;
        obj['eventParticipantTicketTitle'] = eventParticipantTicketTitle;
        obj['eventParticipantName'] = eventParticipantName;
        obj['eventParticipantQrcode'] = eventParticipantQrcode;
        obj['eventParticipantDocument'] = eventParticipantDocument;
    }

    /**
     * Constructs a <code>ThanksScreenDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThanksScreenDto} obj Optional instance to populate.
     * @return {module:model/ThanksScreenDto} The populated <code>ThanksScreenDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ThanksScreenDto();

            if (data.hasOwnProperty('eventTitle')) {
                obj['eventTitle'] = ApiClient.convertToType(data['eventTitle'], 'String');
            }
            if (data.hasOwnProperty('eventCity')) {
                obj['eventCity'] = ApiClient.convertToType(data['eventCity'], 'String');
            }
            if (data.hasOwnProperty('evenState')) {
                obj['evenState'] = ApiClient.convertToType(data['evenState'], 'String');
            }
            if (data.hasOwnProperty('eventPhoto')) {
                obj['eventPhoto'] = ApiClient.convertToType(data['eventPhoto'], 'String');
            }
            if (data.hasOwnProperty('eventStartAt')) {
                obj['eventStartAt'] = ApiClient.convertToType(data['eventStartAt'], Object);
            }
            if (data.hasOwnProperty('eventEndAt')) {
                obj['eventEndAt'] = ApiClient.convertToType(data['eventEndAt'], Object);
            }
            if (data.hasOwnProperty('eventSlug')) {
                obj['eventSlug'] = ApiClient.convertToType(data['eventSlug'], 'String');
            }
            if (data.hasOwnProperty('eventParticipantTicketTitle')) {
                obj['eventParticipantTicketTitle'] = ApiClient.convertToType(data['eventParticipantTicketTitle'], 'String');
            }
            if (data.hasOwnProperty('eventParticipantName')) {
                obj['eventParticipantName'] = ApiClient.convertToType(data['eventParticipantName'], 'String');
            }
            if (data.hasOwnProperty('eventParticipantQrcode')) {
                obj['eventParticipantQrcode'] = ApiClient.convertToType(data['eventParticipantQrcode'], 'String');
            }
            if (data.hasOwnProperty('eventParticipantDocument')) {
                obj['eventParticipantDocument'] = ApiClient.convertToType(data['eventParticipantDocument'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ThanksScreenDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ThanksScreenDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ThanksScreenDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['eventTitle'] && !(typeof data['eventTitle'] === 'string' || data['eventTitle'] instanceof String)) {
            throw new Error("Expected the field `eventTitle` to be a primitive type in the JSON string but got " + data['eventTitle']);
        }
        // ensure the json data is a string
        if (data['eventCity'] && !(typeof data['eventCity'] === 'string' || data['eventCity'] instanceof String)) {
            throw new Error("Expected the field `eventCity` to be a primitive type in the JSON string but got " + data['eventCity']);
        }
        // ensure the json data is a string
        if (data['evenState'] && !(typeof data['evenState'] === 'string' || data['evenState'] instanceof String)) {
            throw new Error("Expected the field `evenState` to be a primitive type in the JSON string but got " + data['evenState']);
        }
        // ensure the json data is a string
        if (data['eventPhoto'] && !(typeof data['eventPhoto'] === 'string' || data['eventPhoto'] instanceof String)) {
            throw new Error("Expected the field `eventPhoto` to be a primitive type in the JSON string but got " + data['eventPhoto']);
        }
        // ensure the json data is a string
        if (data['eventSlug'] && !(typeof data['eventSlug'] === 'string' || data['eventSlug'] instanceof String)) {
            throw new Error("Expected the field `eventSlug` to be a primitive type in the JSON string but got " + data['eventSlug']);
        }
        // ensure the json data is a string
        if (data['eventParticipantTicketTitle'] && !(typeof data['eventParticipantTicketTitle'] === 'string' || data['eventParticipantTicketTitle'] instanceof String)) {
            throw new Error("Expected the field `eventParticipantTicketTitle` to be a primitive type in the JSON string but got " + data['eventParticipantTicketTitle']);
        }
        // ensure the json data is a string
        if (data['eventParticipantName'] && !(typeof data['eventParticipantName'] === 'string' || data['eventParticipantName'] instanceof String)) {
            throw new Error("Expected the field `eventParticipantName` to be a primitive type in the JSON string but got " + data['eventParticipantName']);
        }
        // ensure the json data is a string
        if (data['eventParticipantQrcode'] && !(typeof data['eventParticipantQrcode'] === 'string' || data['eventParticipantQrcode'] instanceof String)) {
            throw new Error("Expected the field `eventParticipantQrcode` to be a primitive type in the JSON string but got " + data['eventParticipantQrcode']);
        }
        // ensure the json data is a string
        if (data['eventParticipantDocument'] && !(typeof data['eventParticipantDocument'] === 'string' || data['eventParticipantDocument'] instanceof String)) {
            throw new Error("Expected the field `eventParticipantDocument` to be a primitive type in the JSON string but got " + data['eventParticipantDocument']);
        }

        return true;
    }


}

ThanksScreenDto.RequiredProperties = ["eventTitle", "eventCity", "evenState", "eventPhoto", "eventSlug", "eventParticipantTicketTitle", "eventParticipantName", "eventParticipantQrcode", "eventParticipantDocument"];

/**
 * @member {String} eventTitle
 */
ThanksScreenDto.prototype['eventTitle'] = undefined;

/**
 * @member {String} eventCity
 */
ThanksScreenDto.prototype['eventCity'] = undefined;

/**
 * @member {String} evenState
 */
ThanksScreenDto.prototype['evenState'] = undefined;

/**
 * @member {String} eventPhoto
 */
ThanksScreenDto.prototype['eventPhoto'] = undefined;

/**
 * @member {Object} eventStartAt
 */
ThanksScreenDto.prototype['eventStartAt'] = undefined;

/**
 * @member {Object} eventEndAt
 */
ThanksScreenDto.prototype['eventEndAt'] = undefined;

/**
 * @member {String} eventSlug
 */
ThanksScreenDto.prototype['eventSlug'] = undefined;

/**
 * @member {String} eventParticipantTicketTitle
 */
ThanksScreenDto.prototype['eventParticipantTicketTitle'] = undefined;

/**
 * @member {String} eventParticipantName
 */
ThanksScreenDto.prototype['eventParticipantName'] = undefined;

/**
 * @member {String} eventParticipantQrcode
 */
ThanksScreenDto.prototype['eventParticipantQrcode'] = undefined;

/**
 * @member {String} eventParticipantDocument
 */
ThanksScreenDto.prototype['eventParticipantDocument'] = undefined;






export default ThanksScreenDto;

