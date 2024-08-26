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
    instance = new NexEventApi.EventProducerCredentialApi();
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

  describe('EventProducerCredentialApi', function() {
    describe('eventProducerAccreditationControllerAccreditParticipant', function() {
      it('should call eventProducerAccreditationControllerAccreditParticipant successfully', function(done) {
        //uncomment below and update the code to test eventProducerAccreditationControllerAccreditParticipant
        //instance.eventProducerAccreditationControllerAccreditParticipant(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventProducerAccreditationControllerCheckOutInAllParticipants', function() {
      it('should call eventProducerAccreditationControllerCheckOutInAllParticipants successfully', function(done) {
        //uncomment below and update the code to test eventProducerAccreditationControllerCheckOutInAllParticipants
        //instance.eventProducerAccreditationControllerCheckOutInAllParticipants(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventProducerAccreditationControllerFindByFacial', function() {
      it('should call eventProducerAccreditationControllerFindByFacial successfully', function(done) {
        //uncomment below and update the code to test eventProducerAccreditationControllerFindByFacial
        //instance.eventProducerAccreditationControllerFindByFacial(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventProducerAccreditationControllerFindByQrCode', function() {
      it('should call eventProducerAccreditationControllerFindByQrCode successfully', function(done) {
        //uncomment below and update the code to test eventProducerAccreditationControllerFindByQrCode
        //instance.eventProducerAccreditationControllerFindByQrCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventProducerAccreditationControllerGetEventConfig', function() {
      it('should call eventProducerAccreditationControllerGetEventConfig successfully', function(done) {
        //uncomment below and update the code to test eventProducerAccreditationControllerGetEventConfig
        //instance.eventProducerAccreditationControllerGetEventConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventProducerAccreditationControllerLastAccreditedParticipants', function() {
      it('should call eventProducerAccreditationControllerLastAccreditedParticipants successfully', function(done) {
        //uncomment below and update the code to test eventProducerAccreditationControllerLastAccreditedParticipants
        //instance.eventProducerAccreditationControllerLastAccreditedParticipants(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventProducerAccreditationControllerRePrintParticipant', function() {
      it('should call eventProducerAccreditationControllerRePrintParticipant successfully', function(done) {
        //uncomment below and update the code to test eventProducerAccreditationControllerRePrintParticipant
        //instance.eventProducerAccreditationControllerRePrintParticipant(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
