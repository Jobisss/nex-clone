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
    instance = new NexEventApi.UserIsParticipantInEventByLinkIdResponseDto();
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

  describe('UserIsParticipantInEventByLinkIdResponseDto', function() {
    it('should create an instance of UserIsParticipantInEventByLinkIdResponseDto', function() {
      // uncomment below and update the code to test UserIsParticipantInEventByLinkIdResponseDto
      //var instance = new NexEventApi.UserIsParticipantInEventByLinkIdResponseDto();
      //expect(instance).to.be.a(NexEventApi.UserIsParticipantInEventByLinkIdResponseDto);
    });

    it('should have the property isParticipant (base name: "isParticipant")', function() {
      // uncomment below and update the code to test the property isParticipant
      //var instance = new NexEventApi.UserIsParticipantInEventByLinkIdResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property participantId (base name: "participantId")', function() {
      // uncomment below and update the code to test the property participantId
      //var instance = new NexEventApi.UserIsParticipantInEventByLinkIdResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property haveFacial (base name: "haveFacial")', function() {
      // uncomment below and update the code to test the property haveFacial
      //var instance = new NexEventApi.UserIsParticipantInEventByLinkIdResponseDto();
      //expect(instance).to.be();
    });

  });

}));
