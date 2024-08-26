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
 * The EventDashboardResponseDtoEventTicketPercentualSellInner model module.
 * @module model/EventDashboardResponseDtoEventTicketPercentualSellInner
 * @version 1.0
 */
class EventDashboardResponseDtoEventTicketPercentualSellInner {
    /**
     * Constructs a new <code>EventDashboardResponseDtoEventTicketPercentualSellInner</code>.
     * @alias module:model/EventDashboardResponseDtoEventTicketPercentualSellInner
     * @param title {String} 
     * @param percentual {Number} 
     */
    constructor(title, percentual) { 
        
        EventDashboardResponseDtoEventTicketPercentualSellInner.initialize(this, title, percentual);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, percentual) { 
        obj['title'] = title;
        obj['percentual'] = percentual;
    }

    /**
     * Constructs a <code>EventDashboardResponseDtoEventTicketPercentualSellInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventDashboardResponseDtoEventTicketPercentualSellInner} obj Optional instance to populate.
     * @return {module:model/EventDashboardResponseDtoEventTicketPercentualSellInner} The populated <code>EventDashboardResponseDtoEventTicketPercentualSellInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventDashboardResponseDtoEventTicketPercentualSellInner();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('percentual')) {
                obj['percentual'] = ApiClient.convertToType(data['percentual'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventDashboardResponseDtoEventTicketPercentualSellInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventDashboardResponseDtoEventTicketPercentualSellInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EventDashboardResponseDtoEventTicketPercentualSellInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}

EventDashboardResponseDtoEventTicketPercentualSellInner.RequiredProperties = ["title", "percentual"];

/**
 * @member {String} title
 */
EventDashboardResponseDtoEventTicketPercentualSellInner.prototype['title'] = undefined;

/**
 * @member {Number} percentual
 */
EventDashboardResponseDtoEventTicketPercentualSellInner.prototype['percentual'] = undefined;






export default EventDashboardResponseDtoEventTicketPercentualSellInner;

