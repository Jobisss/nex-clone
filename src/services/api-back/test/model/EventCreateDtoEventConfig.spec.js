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
    instance = new NexEventApi.EventCreateDtoEventConfig();
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

  describe('EventCreateDtoEventConfig', function() {
    it('should create an instance of EventCreateDtoEventConfig', function() {
      // uncomment below and update the code to test EventCreateDtoEventConfig
      //var instance = new NexEventApi.EventCreateDtoEventConfig();
      //expect(instance).to.be.a(NexEventApi.EventCreateDtoEventConfig);
    });

    it('should have the property printAutomatic (base name: "printAutomatic")', function() {
      // uncomment below and update the code to test the property printAutomatic
      //var instance = new NexEventApi.EventCreateDtoEventConfig();
      //expect(instance).to.be();
    });

    it('should have the property credentialType (base name: "credentialType")', function() {
      // uncomment below and update the code to test the property credentialType
      //var instance = new NexEventApi.EventCreateDtoEventConfig();
      //expect(instance).to.be();
    });

  });

}));
