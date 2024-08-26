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
 * The EventCreateDtoEventScheduleInner model module.
 * @module model/EventCreateDtoEventScheduleInner
 * @version 1.0
 */
class EventCreateDtoEventScheduleInner {
    /**
     * Constructs a new <code>EventCreateDtoEventScheduleInner</code>.
     * @alias module:model/EventCreateDtoEventScheduleInner
     * @param date {String} Event schedule day
     * @param startHour {String} Event schedule start hour
     * @param endHour {String} Event schedule end hour
     * @param description {String} Event schedule description
     */
    constructor(date, startHour, endHour, description) { 
        
        EventCreateDtoEventScheduleInner.initialize(this, date, startHour, endHour, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, date, startHour, endHour, description) { 
        obj['date'] = date;
        obj['startHour'] = startHour;
        obj['endHour'] = endHour;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>EventCreateDtoEventScheduleInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventCreateDtoEventScheduleInner} obj Optional instance to populate.
     * @return {module:model/EventCreateDtoEventScheduleInner} The populated <code>EventCreateDtoEventScheduleInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventCreateDtoEventScheduleInner();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('startHour')) {
                obj['startHour'] = ApiClient.convertToType(data['startHour'], 'String');
            }
            if (data.hasOwnProperty('endHour')) {
                obj['endHour'] = ApiClient.convertToType(data['endHour'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventCreateDtoEventScheduleInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventCreateDtoEventScheduleInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EventCreateDtoEventScheduleInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['date'] && !(typeof data['date'] === 'string' || data['date'] instanceof String)) {
            throw new Error("Expected the field `date` to be a primitive type in the JSON string but got " + data['date']);
        }
        // ensure the json data is a string
        if (data['startHour'] && !(typeof data['startHour'] === 'string' || data['startHour'] instanceof String)) {
            throw new Error("Expected the field `startHour` to be a primitive type in the JSON string but got " + data['startHour']);
        }
        // ensure the json data is a string
        if (data['endHour'] && !(typeof data['endHour'] === 'string' || data['endHour'] instanceof String)) {
            throw new Error("Expected the field `endHour` to be a primitive type in the JSON string but got " + data['endHour']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

EventCreateDtoEventScheduleInner.RequiredProperties = ["date", "startHour", "endHour", "description"];

/**
 * Event schedule day
 * @member {String} date
 */
EventCreateDtoEventScheduleInner.prototype['date'] = undefined;

/**
 * Event schedule start hour
 * @member {String} startHour
 */
EventCreateDtoEventScheduleInner.prototype['startHour'] = undefined;

/**
 * Event schedule end hour
 * @member {String} endHour
 */
EventCreateDtoEventScheduleInner.prototype['endHour'] = undefined;

/**
 * Event schedule description
 * @member {String} description
 */
EventCreateDtoEventScheduleInner.prototype['description'] = undefined;






export default EventCreateDtoEventScheduleInner;

