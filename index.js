// Code your solution in this file
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers,name) {
  const newDriver = [];
  for (const user of drivers){
    if(user.toLowerCase()===name.toLowerCase()) {
      newDriver.push(user);
    }
  }
  return newDriver;
}

function fuzzyMatch(drivers, name) {
  const secondDrivers = [];
  for (const user of drivers){
    if(user.slice(0,1) === name.slice(0,1)){
      secondDrivers.push(user);
    }
  }
  return secondDrivers;
}

function matchName(drivers, string){
  return drivers.filter(function(driver) {return driver.name.toLowerCase() === string.toLowerCase()})
}

newCollection;
/*describe('index.js', function () {
  describe('findMatching()', function () {
    it('returns all drivers that match the passed in name', function () {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

      expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'Bobby']);
      expect(findMatching(drivers, 'Sammy')).to.eql(['Sammy']);
    });

    it('returns matching drivers if case does not match but letters do', function () {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

      expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'bobby']);
    });

    it('returns an empty array if there is no match', function () {
      const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

      expect(findMatching(drivers, 'Susan')).to.eql([]);
    });
  });

  describe('fuzzyMatch()', function () {
    const drivers = [];

    beforeEach(function () {
      drivers.length = 0;

      drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
    });

    it('returns a driver if beginning provided letters match', function () {
      expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
    });

    it('does not return drivers if only middle or ending letters match', function () {
      expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
    });

    it('does not return drivers if only middle or ending letters match', function () {
      expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
    });
  });

  describe('matchName()', function () {
    it('accesses the data structure to check if name matches', function () {
      const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

      expect(matchName(drivers, 'Bobby')).to.eql([
        {
          name: 'Bobby',
          hometown: 'Pittsburgh'
        },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay'
        }
      ]);*/