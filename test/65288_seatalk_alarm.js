var chai = require("chai");
chai.Should();
chai.use(require('chai-things'));
chai.use(require('signalk-schema').chaiModule);


describe('65288 Seatalk Alarm', function () {
  it('complet alarm sentence converts waypoing advance alarm with sound', function () {
    var tree = require("../n2kMapper.js").toNested(
      JSON.parse('{"timestamp":"2016-10-18T15:52:48.152Z","prio":7,"src":204,"dst":255,"pgn":65288,"description":"Seatalk: Alarm","fields":{"Manufacturer Code":"Raymarine","Industry Code":"Marine Industry","Alarm Status":"Alarm condition met and not silenced","Alarm ID":"Pilot Way Point Advance","Alarm Group":"Autopilot","Alarm Priority":"0"}}'));
    tree.should.have.deep.property('notifications.autopilotPilotWayPointAdvance.state', 'alarm');
    tree.should.have.deep.property('notifications.autopilotPilotWayPointAdvance.method', [ 'visual', 'sound']);
    tree.should.be.validSignalKVesselIgnoringIdentity;
  });

  it('complet alarm sentence converts waypoing advance normal', function () {
    var tree = require("../n2kMapper.js").toNested(
      JSON.parse('{"timestamp":"2016-10-18T15:52:49.063Z","prio":7,"src":204,"dst":255,"pgn":65288,"description":"Seatalk: Alarm","fields":{"Manufacturer Code":"Raymarine","Industry Code":"Marine Industry","Alarm Status":"Alarm condition not met","Alarm ID":"Pilot Way Point Advance","Alarm Group":"Autopilot","Alarm Priority":"0"}}'));
    tree.should.have.deep.property('notifications.autopilotPilotWayPointAdvance.state', 'normal');
    tree.should.be.validSignalKVesselIgnoringIdentity;
  });

  it('complet alarm sentence converts waypoing advance alarm silenced', function () {
    var tree = require("../n2kMapper.js").toNested(
      JSON.parse('{"timestamp":"2016-10-18T15:54:16.750Z","prio":7,"src":204,"dst":255,"pgn":65288,"description":"Seatalk: Alarm","fields":{"Manufacturer Code":"Raymarine","Industry Code":"Marine Industry","Alarm Status":"Alarm condition met and silenced","Alarm ID":"Pilot Way Point Advance","Alarm Group":"Autopilot","Alarm Priority":"0"}}'));
    tree.should.have.deep.property('notifications.autopilotPilotWayPointAdvance.state', 'alarm');
    tree.should.have.deep.property('notifications.autopilotPilotWayPointAdvance.method', [ 'visual' ]);
    tree.should.be.validSignalKVesselIgnoringIdentity;
  });  
});
