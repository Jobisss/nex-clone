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
import EventCreateDtoEventConfig from './EventCreateDtoEventConfig';
import EventCreateDtoEventScheduleInner from './EventCreateDtoEventScheduleInner';
import EventCreateDtoEventTicketsInner from './EventCreateDtoEventTicketsInner';

/**
 * The EventCreateDto model module.
 * @module model/EventCreateDto
 * @version 1.0
 */
class EventCreateDto {
    /**
     * Constructs a new <code>EventCreateDto</code>.
     * @alias module:model/EventCreateDto
     * @param title {String} Event name
     * @param description {String} Event description
     * @param category {String} Event category
     * @param location {module:model/EventCreateDto.LocationEnum} Event location type
     * @param sellOnThePlatform {Boolean} 
     * @param eventSchedule {Array.<module:model/EventCreateDtoEventScheduleInner>} 
     * @param eventConfig {module:model/EventCreateDtoEventConfig} 
     * @param eventTickets {Array.<module:model/EventCreateDtoEventTicketsInner>} 
     */
    constructor(title, description, category, location, sellOnThePlatform, eventSchedule, eventConfig, eventTickets) { 
        
        EventCreateDto.initialize(this, title, description, category, location, sellOnThePlatform, eventSchedule, eventConfig, eventTickets);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, description, category, location, sellOnThePlatform, eventSchedule, eventConfig, eventTickets) { 
        obj['title'] = title;
        obj['description'] = description;
        obj['category'] = category;
        obj['location'] = location;
        obj['sellOnThePlatform'] = sellOnThePlatform;
        obj['eventSchedule'] = eventSchedule;
        obj['eventConfig'] = eventConfig;
        obj['eventTickets'] = eventTickets;
    }

    /**
     * Constructs a <code>EventCreateDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventCreateDto} obj Optional instance to populate.
     * @return {module:model/EventCreateDto} The populated <code>EventCreateDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventCreateDto();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('eventPublic')) {
                obj['eventPublic'] = ApiClient.convertToType(data['eventPublic'], 'Boolean');
            }
            if (data.hasOwnProperty('startAt')) {
                obj['startAt'] = ApiClient.convertToType(data['startAt'], 'String');
            }
            if (data.hasOwnProperty('endAt')) {
                obj['endAt'] = ApiClient.convertToType(data['endAt'], 'String');
            }
            if (data.hasOwnProperty('startPublishAt')) {
                obj['startPublishAt'] = ApiClient.convertToType(data['startPublishAt'], 'String');
            }
            if (data.hasOwnProperty('endPublishAt')) {
                obj['endPublishAt'] = ApiClient.convertToType(data['endPublishAt'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'String');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('complement')) {
                obj['complement'] = ApiClient.convertToType(data['complement'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('district')) {
                obj['district'] = ApiClient.convertToType(data['district'], 'String');
            }
            if (data.hasOwnProperty('sellOnThePlatform')) {
                obj['sellOnThePlatform'] = ApiClient.convertToType(data['sellOnThePlatform'], 'Boolean');
            }
            if (data.hasOwnProperty('eventSchedule')) {
                obj['eventSchedule'] = ApiClient.convertToType(data['eventSchedule'], [EventCreateDtoEventScheduleInner]);
            }
            if (data.hasOwnProperty('eventConfig')) {
                obj['eventConfig'] = EventCreateDtoEventConfig.constructFromObject(data['eventConfig']);
            }
            if (data.hasOwnProperty('eventTickets')) {
                obj['eventTickets'] = ApiClient.convertToType(data['eventTickets'], [EventCreateDtoEventTicketsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventCreateDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventCreateDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EventCreateDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['startAt'] && !(typeof data['startAt'] === 'string' || data['startAt'] instanceof String)) {
            throw new Error("Expected the field `startAt` to be a primitive type in the JSON string but got " + data['startAt']);
        }
        // ensure the json data is a string
        if (data['endAt'] && !(typeof data['endAt'] === 'string' || data['endAt'] instanceof String)) {
            throw new Error("Expected the field `endAt` to be a primitive type in the JSON string but got " + data['endAt']);
        }
        // ensure the json data is a string
        if (data['startPublishAt'] && !(typeof data['startPublishAt'] === 'string' || data['startPublishAt'] instanceof String)) {
            throw new Error("Expected the field `startPublishAt` to be a primitive type in the JSON string but got " + data['startPublishAt']);
        }
        // ensure the json data is a string
        if (data['endPublishAt'] && !(typeof data['endPublishAt'] === 'string' || data['endPublishAt'] instanceof String)) {
            throw new Error("Expected the field `endPublishAt` to be a primitive type in the JSON string but got " + data['endPublishAt']);
        }
        // ensure the json data is a string
        if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
            throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['location'] && !(typeof data['location'] === 'string' || data['location'] instanceof String)) {
            throw new Error("Expected the field `location` to be a primitive type in the JSON string but got " + data['location']);
        }
        // ensure the json data is a string
        if (data['latitude'] && !(typeof data['latitude'] === 'string' || data['latitude'] instanceof String)) {
            throw new Error("Expected the field `latitude` to be a primitive type in the JSON string but got " + data['latitude']);
        }
        // ensure the json data is a string
        if (data['longitude'] && !(typeof data['longitude'] === 'string' || data['longitude'] instanceof String)) {
            throw new Error("Expected the field `longitude` to be a primitive type in the JSON string but got " + data['longitude']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['complement'] && !(typeof data['complement'] === 'string' || data['complement'] instanceof String)) {
            throw new Error("Expected the field `complement` to be a primitive type in the JSON string but got " + data['complement']);
        }
        // ensure the json data is a string
        if (data['number'] && !(typeof data['number'] === 'string' || data['number'] instanceof String)) {
            throw new Error("Expected the field `number` to be a primitive type in the JSON string but got " + data['number']);
        }
        // ensure the json data is a string
        if (data['district'] && !(typeof data['district'] === 'string' || data['district'] instanceof String)) {
            throw new Error("Expected the field `district` to be a primitive type in the JSON string but got " + data['district']);
        }
        if (data['eventSchedule']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['eventSchedule'])) {
                throw new Error("Expected the field `eventSchedule` to be an array in the JSON data but got " + data['eventSchedule']);
            }
            // validate the optional field `eventSchedule` (array)
            for (const item of data['eventSchedule']) {
                EventCreateDtoEventScheduleInner.validateJSON(item);
            };
        }
        // validate the optional field `eventConfig`
        if (data['eventConfig']) { // data not null
          EventCreateDtoEventConfig.validateJSON(data['eventConfig']);
        }
        if (data['eventTickets']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['eventTickets'])) {
                throw new Error("Expected the field `eventTickets` to be an array in the JSON data but got " + data['eventTickets']);
            }
            // validate the optional field `eventTickets` (array)
            for (const item of data['eventTickets']) {
                EventCreateDtoEventTicketsInner.validateJSON(item);
            };
        }

        return true;
    }


}

EventCreateDto.RequiredProperties = ["title", "description", "category", "location", "sellOnThePlatform", "eventSchedule", "eventConfig", "eventTickets"];

/**
 * Event name
 * @member {String} title
 */
EventCreateDto.prototype['title'] = undefined;

/**
 * Event description
 * @member {String} description
 */
EventCreateDto.prototype['description'] = undefined;

/**
 * Event public
 * @member {Boolean} eventPublic
 * @default true
 */
EventCreateDto.prototype['eventPublic'] = true;

/**
 * Event start date
 * @member {String} startAt
 * @default 'Wed Aug 21 2024'
 */
EventCreateDto.prototype['startAt'] = 'Wed Aug 21 2024';

/**
 * Event end date
 * @member {String} endAt
 * @default 'Wed Aug 21 2024'
 */
EventCreateDto.prototype['endAt'] = 'Wed Aug 21 2024';

/**
 * Event publish start date
 * @member {String} startPublishAt
 * @default 'Wed Aug 21 2024'
 */
EventCreateDto.prototype['startPublishAt'] = 'Wed Aug 21 2024';

/**
 * Event publish end date
 * @member {String} endPublishAt
 * @default 'Wed Aug 21 2024'
 */
EventCreateDto.prototype['endPublishAt'] = 'Wed Aug 21 2024';

/**
 * Event category
 * @member {String} category
 */
EventCreateDto.prototype['category'] = undefined;

/**
 * Event location type
 * @member {module:model/EventCreateDto.LocationEnum} location
 */
EventCreateDto.prototype['location'] = undefined;

/**
 * @member {String} latitude
 */
EventCreateDto.prototype['latitude'] = undefined;

/**
 * @member {String} longitude
 */
EventCreateDto.prototype['longitude'] = undefined;

/**
 * @member {String} address
 */
EventCreateDto.prototype['address'] = undefined;

/**
 * @member {String} country
 */
EventCreateDto.prototype['country'] = undefined;

/**
 * @member {String} city
 */
EventCreateDto.prototype['city'] = undefined;

/**
 * @member {String} state
 */
EventCreateDto.prototype['state'] = undefined;

/**
 * @member {String} complement
 */
EventCreateDto.prototype['complement'] = undefined;

/**
 * @member {String} number
 */
EventCreateDto.prototype['number'] = undefined;

/**
 * @member {String} district
 */
EventCreateDto.prototype['district'] = undefined;

/**
 * @member {Boolean} sellOnThePlatform
 */
EventCreateDto.prototype['sellOnThePlatform'] = undefined;

/**
 * @member {Array.<module:model/EventCreateDtoEventScheduleInner>} eventSchedule
 */
EventCreateDto.prototype['eventSchedule'] = undefined;

/**
 * @member {module:model/EventCreateDtoEventConfig} eventConfig
 */
EventCreateDto.prototype['eventConfig'] = undefined;

/**
 * @member {Array.<module:model/EventCreateDtoEventTicketsInner>} eventTickets
 */
EventCreateDto.prototype['eventTickets'] = undefined;





/**
 * Allowed values for the <code>location</code> property.
 * @enum {String}
 * @readonly
 */
EventCreateDto['LocationEnum'] = {

    /**
     * value: "ONLINE"
     * @const
     */
    "ONLINE": "ONLINE",

    /**
     * value: "UNDEFINED"
     * @const
     */
    "UNDEFINED": "UNDEFINED",

    /**
     * value: "DEFINED"
     * @const
     */
    "DEFINED": "DEFINED"
};



export default EventCreateDto;

