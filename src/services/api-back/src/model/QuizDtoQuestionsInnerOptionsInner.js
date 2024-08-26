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
 * The QuizDtoQuestionsInnerOptionsInner model module.
 * @module model/QuizDtoQuestionsInnerOptionsInner
 * @version 1.0
 */
class QuizDtoQuestionsInnerOptionsInner {
    /**
     * Constructs a new <code>QuizDtoQuestionsInnerOptionsInner</code>.
     * @alias module:model/QuizDtoQuestionsInnerOptionsInner
     * @param optionId {String} 
     * @param sequential {Number} 
     * @param description {String} 
     * @param isOther {Boolean} 
     */
    constructor(optionId, sequential, description, isOther) { 
        
        QuizDtoQuestionsInnerOptionsInner.initialize(this, optionId, sequential, description, isOther);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, optionId, sequential, description, isOther) { 
        obj['optionId'] = optionId;
        obj['sequential'] = sequential;
        obj['description'] = description;
        obj['isOther'] = isOther;
    }

    /**
     * Constructs a <code>QuizDtoQuestionsInnerOptionsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuizDtoQuestionsInnerOptionsInner} obj Optional instance to populate.
     * @return {module:model/QuizDtoQuestionsInnerOptionsInner} The populated <code>QuizDtoQuestionsInnerOptionsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuizDtoQuestionsInnerOptionsInner();

            if (data.hasOwnProperty('optionId')) {
                obj['optionId'] = ApiClient.convertToType(data['optionId'], 'String');
            }
            if (data.hasOwnProperty('sequential')) {
                obj['sequential'] = ApiClient.convertToType(data['sequential'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('isOther')) {
                obj['isOther'] = ApiClient.convertToType(data['isOther'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuizDtoQuestionsInnerOptionsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuizDtoQuestionsInnerOptionsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of QuizDtoQuestionsInnerOptionsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['optionId'] && !(typeof data['optionId'] === 'string' || data['optionId'] instanceof String)) {
            throw new Error("Expected the field `optionId` to be a primitive type in the JSON string but got " + data['optionId']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

QuizDtoQuestionsInnerOptionsInner.RequiredProperties = ["optionId", "sequential", "description", "isOther"];

/**
 * @member {String} optionId
 */
QuizDtoQuestionsInnerOptionsInner.prototype['optionId'] = undefined;

/**
 * @member {Number} sequential
 */
QuizDtoQuestionsInnerOptionsInner.prototype['sequential'] = undefined;

/**
 * @member {String} description
 */
QuizDtoQuestionsInnerOptionsInner.prototype['description'] = undefined;

/**
 * @member {Boolean} isOther
 */
QuizDtoQuestionsInnerOptionsInner.prototype['isOther'] = undefined;






export default QuizDtoQuestionsInnerOptionsInner;

