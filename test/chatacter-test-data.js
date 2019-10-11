const Character = require('../lib/models/Character');

const testData = [
  {
    '_id': '5d9e9e139cd4f680f3ec6693',
    'name': 'Arnold Shortman',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec6697',
    'name': 'Arnie',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/4/42/Arnie.jpg/revision/latest/scale-to-width-down/310?cb=20110109195825'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec6695',
    'name': 'Grandma Gertie',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/7/7b/DB87AC2A-C2C2-4DAB-AECF-B9F7273C746B.png/revision/latest/scale-to-width-down/306?cb=20190816101257'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec6694',
    'name': 'Grandpa Phil',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/7/79/GrandpaPhil.png/revision/latest/scale-to-width-down/300?cb=20160924030436'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec6696',
    'name': 'Mitzi',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/d/d9/Mitzi.png/revision/latest/scale-to-width-down/310?cb=20171212070331'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec6698',
    'name': 'Miles Shortman',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec669c',
    'name': 'Oskar Kokoshka',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/c/c5/Oskar_Kokoshka.png/revision/latest/scale-to-width-down/310?cb=20180707032418'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec669a',
    'name': 'Grandpa\'s father',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/e/e0/Grandpa%27s_father.png/revision/latest/scale-to-width-down/310?cb=20190228081112'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec6699',
    'name': 'Stella Shortman',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/fa/Stella.jpg/revision/latest?cb=20101225143956'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec669b',
    'name': 'Grandpa\'s grandfather',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f7/Grandpa%27s_grandfather.png/revision/latest/scale-to-width-down/310?cb=20190228081015'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec66a1',
    'name': 'Mai Hyunh',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/8/83/Mai_Hyunh.jpeg/revision/latest/scale-to-width-down/310?cb=20190118192457'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec669f',
    'name': 'Ernie Potts',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/6/67/Ernie.jpeg/revision/latest/scale-to-width-down/310?cb=20181213181427'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec669d',
    'name': 'Suzie Kokoshka',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/fe/Suzie.jpg/revision/latest/scale-to-width-down/310?cb=20110223003447'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec669e',
    'name': 'Nancy',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/6/62/Nancy.jpg/revision/latest/scale-to-width-down/310?cb=20110423055923'
  },
  {
    '_id': '5d9e9e139cd4f680f3ec66a0',
    'name': 'Mr. Hyunh',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/6/60/Mr._Hyunh.png/revision/latest/scale-to-width-down/310?cb=20180707031441'
  }];

module.exports = async() => {
  const seedTestData = await testData.map(data => {
    return Character.create(data);
  });
  return seedTestData;
};
