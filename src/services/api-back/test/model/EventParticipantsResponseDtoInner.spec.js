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
    instance = new NexEventApi.EventParticipantsResponseDtoInner();
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

  describe('EventParticipantsResponseDtoInner', function() {
    it('should create an instance of EventParticipantsResponseDtoInner', function() {
      // uncomment below and update the code to test EventParticipantsResponseDtoInner
      //var instance = new NexEventApi.EventParticipantsResponseDtoInner();
      //expect(instance).to.be.a(NexEventApi.EventParticipantsResponseDtoInner);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new NexEventApi.EventParticipantsResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new NexEventApi.EventParticipantsResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new NexEventApi.EventParticipantsResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property ticketName (base name: "ticketName")', function() {
      // uncomment below and update the code to test the property ticketName
      //var instance = new NexEventApi.EventParticipantsResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property facial (base name: "facial")', function() {
      // uncomment below and update the code to test the property facial
      //var instance = new NexEventApi.EventParticipantsResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property checkInDate (base name: "checkInDate")', function() {
      // uncomment below and update the code to test the property checkInDate
      //var instance = new NexEventApi.EventParticipantsResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property payment (base name: "payment")', function() {
      // uncomment below and update the code to test the property payment
      //var instance = new NexEventApi.EventParticipantsResponseDtoInner();
      //expect(instance).to.be();
    });

    it('should have the property lastStatus (base name: "lastStatus")', function() {
      // uncomment below and update the code to test the property lastStatus
      //var instance = new NexEventApi.EventParticipantsResponseDtoInner();
      //expect(instance).to.be();
    });

  });

}));
