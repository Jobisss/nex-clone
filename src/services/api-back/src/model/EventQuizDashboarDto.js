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
import EventQuizDashboarDtoMultipleChoiceInner from './EventQuizDashboarDtoMultipleChoiceInner';
import EventQuizDashboarDtoRatingInner from './EventQuizDashboarDtoRatingInner';

/**
 * The EventQuizDashboarDto model module.
 * @module model/EventQuizDashboarDto
 * @version 1.0
 */
class EventQuizDashboarDto {
    /**
     * Constructs a new <code>EventQuizDashboarDto</code>.
     * @alias module:model/EventQuizDashboarDto
     * @param id {String} 
     * @param title {String} 
     */
    constructor(id, title) { 
        
        EventQuizDashboarDto.initialize(this, id, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, title) { 
        obj['id'] = id;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>EventQuizDashboarDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventQuizDashboarDto} obj Optional instance to populate.
     * @return {module:model/EventQuizDashboarDto} The populated <code>EventQuizDashboarDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventQuizDashboarDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('multipleChoice')) {
                obj['multipleChoice'] = ApiClient.convertToType(data['multipleChoice'], [EventQuizDashboarDtoMultipleChoiceInner]);
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], [EventQuizDashboarDtoRatingInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventQuizDashboarDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventQuizDashboarDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EventQuizDashboarDto.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        if (data['multipleChoice']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['multipleChoice'])) {
                throw new Error("Expected the field `multipleChoice` to be an array in the JSON data but got " + data['multipleChoice']);
            }
            // validate the optional field `multipleChoice` (array)
            for (const item of data['multipleChoice']) {
                EventQuizDashboarDtoMultipleChoiceInner.validateJSON(item);
            };
        }
        if (data['rating']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rating'])) {
                throw new Error("Expected the field `rating` to be an array in the JSON data but got " + data['rating']);
            }
            // validate the optional field `rating` (array)
            for (const item of data['rating']) {
                EventQuizDashboarDtoRatingInner.validateJSON(item);
            };
        }

        return true;
    }


}

EventQuizDashboarDto.RequiredProperties = ["id", "title"];

/**
 * @member {String} id
 */
EventQuizDashboarDto.prototype['id'] = undefined;

/**
 * @member {String} title
 */
EventQuizDashboarDto.prototype['title'] = undefined;

/**
 * @member {Array.<module:model/EventQuizDashboarDtoMultipleChoiceInner>} multipleChoice
 */
EventQuizDashboarDto.prototype['multipleChoice'] = undefined;

/**
 * @member {Array.<module:model/EventQuizDashboarDtoRatingInner>} rating
 */
EventQuizDashboarDto.prototype['rating'] = undefined;






export default EventQuizDashboarDto;

