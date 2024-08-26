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
import EventQuizDashboarDtoRatingInnerRatingsInner from './EventQuizDashboarDtoRatingInnerRatingsInner';

/**
 * The EventQuizDashboarDtoRatingInner model module.
 * @module model/EventQuizDashboarDtoRatingInner
 * @version 1.0
 */
class EventQuizDashboarDtoRatingInner {
    /**
     * Constructs a new <code>EventQuizDashboarDtoRatingInner</code>.
     * @alias module:model/EventQuizDashboarDtoRatingInner
     * @param questionId {String} 
     * @param totalResponses {Number} 
     * @param ratings {Array.<module:model/EventQuizDashboarDtoRatingInnerRatingsInner>} 
     */
    constructor(questionId, totalResponses, ratings) { 
        
        EventQuizDashboarDtoRatingInner.initialize(this, questionId, totalResponses, ratings);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, questionId, totalResponses, ratings) { 
        obj['questionId'] = questionId;
        obj['totalResponses'] = totalResponses;
        obj['ratings'] = ratings;
    }

    /**
     * Constructs a <code>EventQuizDashboarDtoRatingInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventQuizDashboarDtoRatingInner} obj Optional instance to populate.
     * @return {module:model/EventQuizDashboarDtoRatingInner} The populated <code>EventQuizDashboarDtoRatingInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventQuizDashboarDtoRatingInner();

            if (data.hasOwnProperty('questionId')) {
                obj['questionId'] = ApiClient.convertToType(data['questionId'], 'String');
            }
            if (data.hasOwnProperty('totalResponses')) {
                obj['totalResponses'] = ApiClient.convertToType(data['totalResponses'], 'Number');
            }
            if (data.hasOwnProperty('ratings')) {
                obj['ratings'] = ApiClient.convertToType(data['ratings'], [EventQuizDashboarDtoRatingInnerRatingsInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventQuizDashboarDtoRatingInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventQuizDashboarDtoRatingInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EventQuizDashboarDtoRatingInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['questionId'] && !(typeof data['questionId'] === 'string' || data['questionId'] instanceof String)) {
            throw new Error("Expected the field `questionId` to be a primitive type in the JSON string but got " + data['questionId']);
        }
        if (data['ratings']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['ratings'])) {
                throw new Error("Expected the field `ratings` to be an array in the JSON data but got " + data['ratings']);
            }
            // validate the optional field `ratings` (array)
            for (const item of data['ratings']) {
                EventQuizDashboarDtoRatingInnerRatingsInner.validateJSON(item);
            };
        }

        return true;
    }


}

EventQuizDashboarDtoRatingInner.RequiredProperties = ["questionId", "totalResponses", "ratings"];

/**
 * @member {String} questionId
 */
EventQuizDashboarDtoRatingInner.prototype['questionId'] = undefined;

/**
 * @member {Number} totalResponses
 */
EventQuizDashboarDtoRatingInner.prototype['totalResponses'] = undefined;

/**
 * @member {Array.<module:model/EventQuizDashboarDtoRatingInnerRatingsInner>} ratings
 */
EventQuizDashboarDtoRatingInner.prototype['ratings'] = undefined;






export default EventQuizDashboarDtoRatingInner;

