var settings = {
  mainclass:[
    {
      'name': 'Group #1',
      'value': '1',
      'nested': true
    },
    {
      'name': 'Group #2',
      'value': '2',
      'nested': true
    },
    {
      'name': 'Group #3',
      'value': '3',
      'nested': false
    },
    {
      'name': 'Group #4',
      'value': '4',
      'nested': false
    },
    {
      'name': 'Group #5',
      'value': '5',
      'nested': false
    },
    {
      'name': 'Group #6',
      'value': '6',
      'nested': false
    },
    {
      'name': 'Group #7',
      'value': '7',
      'nested': false
    },
    {
      'name': 'Group #8',
      'value': '8',
      'nested': false
    },
  ],
  subclass:[
    {
      'name': 'Sub Class #1.1',
      'value': '11',
      'nestedUnder': '1',
      'nested': true
    },
    {
      'name': 'Sub Class #1.2',
      'value': '12',
      'nestedUnder': '1',
      'nested': false
    },
    {
      'name': 'Sub Class #2.1',
      'value': '21',
      'nestedUnder': '2',
      'nested': true
    },
    {
      'name': 'Sub Class #2.2',
      'value': '22',
      'nestedUnder': '2',
      'nested': false
    },
    {
      'name': 'Sub Class #2.3',
      'value': '23',
      'nestedUnder': '2',
      'nested': true
    }
  ],

  subclass2:[
    {
      'name': 'Sub Class #1.1.1',
      'value': '111',
      'nestedUnder': '11',
      'nested': false
    },
    {
      'name': 'Sub Class #1.1.2',
      'value': '112',
      'nestedUnder': '11',
      'nested': false
    },
    {
      'name': 'Sub Class #2.1.1',
      'value': '211',
      'nestedUnder': '21',
      'nested': false
    },
    {
      'name': 'Sub Class #2.3.1',
      'value': '231',
      'nestedUnder': '23',
      'nested': false
    },
    {
      'name': 'Sub Class #2.3.2',
      'value': '232',
      'nestedUnder': '23',
      'nested': false
    }
  ]
};

angular.module('app')
.constant('appSettings', settings);
