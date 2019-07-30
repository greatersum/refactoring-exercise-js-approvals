const assert = require('assert');
const rental = require('../src/rental');
require('approvals').mocha();
var approvals = require('approvals');
approvals.configure({
  reporters: ['tortoisemerge']
});


describe('Rental', function () {
  it('should return the proper result', function () {
    var customer = {
      name: 'martin',
      rentals: [{ movieID: 'F001', days: 3 }, { movieID: 'F002', days: 1 }]
    };
    this.verify(new rental.Rental().statement(customer));
  });
});
