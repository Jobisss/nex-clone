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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NexEventApi);
  }
}(this, function(expect, NexEventApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NexEventApi.EventTicketDashboardResponseDtoInner();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EventTicketDashboardResponseDtoInner', function() {
    it('should create an instance of EventTicketDashboardResponseDtoInner', function() {
      // uncomment below and update the code to test EventTicketDashboardResponseDtoInner
      //var instance = new NexEventApi.EventTicketDashboardResponseDtoInner();
      //expect(instance).to.be.a(NexEventApi.EventTicketDashboardResponseDtoInner);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NexEventApi.EventTicketDashboardResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new NexEventApi.EventTicketDashboardResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new NexEventApi.EventTicketDashboardResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new NexEventApi.EventTicketDashboardResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property priceLiquid (base name: "priceLiquid")', function() {
      // uncomment below and update the code to test the property priceLiquid
      //var instance = new NexEventApi.EventTicketDashboardResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property participantsCount (base name: "participantsCount")', function() {
      // uncomment below and update the code to test the property participantsCount
      //var instance = new NexEventApi.EventTicketDashboardResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property ticketLimit (base name: "ticketLimit")', function() {
      // uncomment below and update the code to test the property ticketLimit
      //var instance = new NexEventApi.EventTicketDashboardResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property ticketPercentualSell (base name: "ticketPercentualSell")', function() {
      // uncomment below and update the code to test the property ticketPercentualSell
      //var instance = new NexEventApi.EventTicketDashboardResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property isBonus (base name: "isBonus")', function() {
      // uncomment below and update the code to test the property isBonus
      //var instance = new NexEventApi.EventTicketDashboardResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property ticketBatch (base name: "ticketBatch")', function() {
      // uncomment below and update the code to test the property ticketBatch
      //var instance = new NexEventApi.EventTicketDashboardResponseDtoInner();
      //expect(instance).to.be();
    });

  });

}));
