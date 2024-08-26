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
 * The EventTicketInfoDtoTicketsInnerTicketGiftsInner model module.
 * @module model/EventTicketInfoDtoTicketsInnerTicketGiftsInner
 * @version 1.0
 */
class EventTicketInfoDtoTicketsInnerTicketGiftsInner {
    /**
     * Constructs a new <code>EventTicketInfoDtoTicketsInnerTicketGiftsInner</code>.
     * @alias module:model/EventTicketInfoDtoTicketsInnerTicketGiftsInner
     * @param id {String} 
     * @param ticketName {String} 
     * @param guests {Number} 
     * @param limit {Number} 
     */
    constructor(id, ticketName, guests, limit) { 
        
        EventTicketInfoDtoTicketsInnerTicketGiftsInner.initialize(this, id, ticketName, guests, limit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, ticketName, guests, limit) { 
        obj['id'] = id;
        obj['ticketName'] = ticketName;
        obj['guests'] = guests;
        obj['limit'] = limit;
    }

    /**
     * Constructs a <code>EventTicketInfoDtoTicketsInnerTicketGiftsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventTicketInfoDtoTicketsInnerTicketGiftsInner} obj Optional instance to populate.
     * @return {module:model/EventTicketInfoDtoTicketsInnerTicketGiftsInner} The populated <code>EventTicketInfoDtoTicketsInnerTicketGiftsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventTicketInfoDtoTicketsInnerTicketGiftsInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('ticketName')) {
                obj['ticketName'] = ApiClient.convertToType(data['ticketName'], 'String');
            }
            if (data.hasOwnProperty('guests')) {
                obj['guests'] = ApiClient.convertToType(data['guests'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventTicketInfoDtoTicketsInnerTicketGiftsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventTicketInfoDtoTicketsInnerTicketGiftsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EventTicketInfoDtoTicketsInnerTicketGiftsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['ticketName'] && !(typeof data['ticketName'] === 'string' || data['ticketName'] instanceof String)) {
            throw new Error("Expected the field `ticketName` to be a primitive type in the JSON string but got " + data['ticketName']);
        }

        return true;
    }


}

EventTicketInfoDtoTicketsInnerTicketGiftsInner.RequiredProperties = ["id", "ticketName", "guests", "limit"];

/**
 * @member {String} id
 */
EventTicketInfoDtoTicketsInnerTicketGiftsInner.prototype['id'] = undefined;

/**
 * @member {String} ticketName
 */
EventTicketInfoDtoTicketsInnerTicketGiftsInner.prototype['ticketName'] = undefined;

/**
 * @member {Number} guests
 */
EventTicketInfoDtoTicketsInnerTicketGiftsInner.prototype['guests'] = undefined;

/**
 * @member {Number} limit
 */
EventTicketInfoDtoTicketsInnerTicketGiftsInner.prototype['limit'] = undefined;






export default EventTicketInfoDtoTicketsInnerTicketGiftsInner;

