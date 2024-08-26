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
    instance = new NexEventApi.FindOnePublicEventsDtoTicketInner();
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

  describe('FindOnePublicEventsDtoTicketInner', function() {
    it('should create an instance of FindOnePublicEventsDtoTicketInner', function() {
      // uncomment below and update the code to test FindOnePublicEventsDtoTicketInner
      //var instance = new NexEventApi.FindOnePublicEventsDtoTicketInner();
      //expect(instance).to.be.a(NexEventApi.FindOnePublicEventsDtoTicketInner);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NexEventApi.FindOnePublicEventsDtoTicketInner();
      //expect(instance).to.be();
    });

    it('should have the property batch (base name: "batch")', function() {
      // uncomment below and update the code to test the property batch
      //var instance = new NexEventApi.FindOnePublicEventsDtoTicketInner();
      //expect(instance).to.be();
    });

    it('should have the property avaible (base name: "avaible")', function() {
      // uncomment below and update the code to test the property avaible
      //var instance = new NexEventApi.FindOnePublicEventsDtoTicketInner();
      //expect(instance).to.be();
    });

    it('should have the property ticketName (base name: "ticketName")', function() {
      // uncomment below and update the code to test the property ticketName
      //var instance = new NexEventApi.FindOnePublicEventsDtoTicketInner();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new NexEventApi.FindOnePublicEventsDtoTicketInner();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new NexEventApi.FindOnePublicEventsDtoTicketInner();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new NexEventApi.FindOnePublicEventsDtoTicketInner();
      //expect(instance).to.be();
    });

    it('should have the property ticketDays (base name: "ticketDays")', function() {
      // uncomment below and update the code to test the property ticketDays
      //var instance = new NexEventApi.FindOnePublicEventsDtoTicketInner();
      //expect(instance).to.be();
    });

  });

}));
