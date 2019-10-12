const characterData = [
  {
    'name': 'Arnold Shortman',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333'
  },
  {
    'name': 'Arnie',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/4/42/Arnie.jpg/revision/latest/scale-to-width-down/310?cb=20110109195825'
  },
  {
    'name': 'Grandma Gertie',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/7/7b/DB87AC2A-C2C2-4DAB-AECF-B9F7273C746B.png/revision/latest/scale-to-width-down/306?cb=20190816101257'
  },
  {
    'name': 'Grandpa Phil',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/7/79/GrandpaPhil.png/revision/latest/scale-to-width-down/300?cb=20160924030436'
  },
  {
    'name': 'Mitzi',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/d/d9/Mitzi.png/revision/latest/scale-to-width-down/310?cb=20171212070331'
  },
  {
    'name': 'Miles Shortman',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/2/2e/Miles.jpg/revision/latest/scale-to-width-down/243?cb=20101115140639'
  },
  {
    'name': 'Oskar Kokoshka',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/c/c5/Oskar_Kokoshka.png/revision/latest/scale-to-width-down/310?cb=20180707032418'
  },
  {
    'name': 'Grandpa\'s father',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/e/e0/Grandpa%27s_father.png/revision/latest/scale-to-width-down/310?cb=20190228081112'
  },
  {
    'name': 'Stella Shortman',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/fa/Stella.jpg/revision/latest?cb=20101225143956'
  },
  {
    'name': 'Grandpa\'s grandfather',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f7/Grandpa%27s_grandfather.png/revision/latest/scale-to-width-down/310?cb=20190228081015'
  },
  {
    'name': 'Mai Hyunh',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/8/83/Mai_Hyunh.jpeg/revision/latest/scale-to-width-down/310?cb=20190118192457'
  },
  {
    'name': 'Ernie Potts',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/6/67/Ernie.jpeg/revision/latest/scale-to-width-down/310?cb=20181213181427'
  },
  {
    'name': 'Suzie Kokoshka',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/f/fe/Suzie.jpg/revision/latest/scale-to-width-down/310?cb=20110223003447'
  },
  {
    'name': 'Nancy',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/6/62/Nancy.jpg/revision/latest/scale-to-width-down/310?cb=20110423055923'
  },
  {
    'name': 'Mr. Hyunh',
    'image': 'https://vignette.wikia.nocookie.net/heyarnold/images/6/60/Mr._Hyunh.png/revision/latest/scale-to-width-down/310?cb=20180707031441'
  }];

const gifData = [
  {
    'gifLink': 'https://media.tenor.com/images/12661dbe02aab8bc2309328032d783b1/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/ec4a6fdf07c1449b1e502663c3a104c1/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/bf3f5888e5f47d1791101391c929e59a/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/3386b2c1d236837f5cbd2fc8e12a40f8/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/a574127cbeb08c089f9784f2063c5460/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/320ec39f86a22116f96a842d2d4aa1ff/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/051a5159dbe20dd4652df3bce5f336b3/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/0921b8ee07abca9fed307100e098d48f/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/468304141e7d56bba4ae95d960d1a2cf/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/ab5cbdc1ca1cee107660b2b852566c3d/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/369dabafda46a71e9fdea7ff6d89fc6d/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/706bff27cb611826050a9486b7302b08/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/4950cb1a40609d7068300127df2e2b0d/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/25de353346135a8f8fb44f67c9af00ff/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/3a66546a8abdb45084626a0f372cc5dd/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/92e6e86740bcc7e63c220967c5dd6a85/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/4f9f938f9733f1830678caf1502dd5a8/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/8f6432a3fae8f961b38c107fb46f6722/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/948b6241f73ddb1f44583913c101f98e/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/3aa00c6fd82ba192b5e5c8a8d5831bee/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/a33b7aead12bb93d93fb5f24f6b706b1/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/c033f66256e7433a21251622b9553494/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/02778bbe5f8da6dea67009d21859592e/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/36b64bdd81a07d496600d98a5b819f93/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/704f42d8fe5ba04123b0380d05956406/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/16f7138b0b2a94c37411622edba9e2fc/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/8e0bc9b4eb1b021f9aa30af0887d67ed/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/7fcefb7e78dff407c2324a830d1e584f/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/6aec75101264d093321f1b4fd4a42555/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/4393cee845d8464670817e40b0601e3b/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/21405654d2834a69a8f2d35566090525/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/29880f90fd083db134d48dc4b83ffa19/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/0584d0867087e8d78573c52412155900/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/cf5946d6c838a3e5f1e5708ab1f7d572/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/ea128fb2a558c469bc7a58a1b2c5fc0e/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/baa3cb2d401a7690b622a539d7f80e76/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/737f7e151678f7365954f0c4cbecbe9e/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/081ba9015807e5090c2555f0ea6f77d0/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/b15f80c63e5469eebc0af1c88882d4dd/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/e7623921965651fa6fba7e0c37892044/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/af16c045741781e6d668e1db7f983b18/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/fc08722ef63d4454822df23a48755860/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/39ebad814582ec664a59d6d3aea3c43b/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/72eb84fe59092e174b3b0c1829b87724/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/913029f3ff5787b2b63f1f6d613ab832/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/f608b179ec75c03a4147ed35c81e609d/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/b8e04f969929adeac0bafe753e9d2a89/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/999fb2b6052005af779b1a568f36f6e0/tenor.gif'
  },
  {
    'gifLink': 'https://media.tenor.com/images/9f6c3e01e64f0417d7814dfa9f351109/tenor.gif'
  }
];

module.exports = {
  characterData,
  gifData
};

