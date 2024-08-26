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
    instance = new NexEventApi.EventProducerRecommendedStaffDto();
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

  describe('EventProducerRecommendedStaffDto', function() {
    it('should create an instance of EventProducerRecommendedStaffDto', function() {
      // uncomment below and update the code to test EventProducerRecommendedStaffDto
      //var instance = new NexEventApi.EventProducerRecommendedStaffDto();
      //expect(instance).to.be.a(NexEventApi.EventProducerRecommendedStaffDto);
    });

    it('should have the property staffId (base name: "staffId")', function() {
      // uncomment below and update the code to test the property staffId
      //var instance = new NexEventApi.EventProducerRecommendedStaffDto();
      //expect(instance).to.be();
    });

    it('should have the property staffName (base name: "staffName")', function() {
      // uncomment below and update the code to test the property staffName
      //var instance = new NexEventApi.EventProducerRecommendedStaffDto();
      //expect(instance).to.be();
    });

    it('should have the property staffEmail (base name: "staffEmail")', function() {
      // uncomment below and update the code to test the property staffEmail
      //var instance = new NexEventApi.EventProducerRecommendedStaffDto();
      //expect(instance).to.be();
    });

    it('should have the property eventCount (base name: "eventCount")', function() {
      // uncomment below and update the code to test the property eventCount
      //var instance = new NexEventApi.EventProducerRecommendedStaffDto();
      //expect(instance).to.be();
    });

    it('should have the property events (base name: "events")', function() {
      // uncomment below and update the code to test the property events
      //var instance = new NexEventApi.EventProducerRecommendedStaffDto();
      //expect(instance).to.be();
    });

  });

}));
