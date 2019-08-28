import { removeByKey } from './index.js';

describe('removeByKey', () => {
  it('should remove matching key from an object', () => {
    let animals = {
      dogs: ['shih tzu', 'chihuahua', 'golden retriver', 'pug'],
      cats: [
        'british shorthair',
        'persian cat',
        'maine coon',
        'ragdoll',
        'korean shorthair',
      ],
      fishes: [
        'koi',
        'comet',
        'fantail',
        'butterfly tail',
        'goldfish',
        'betta',
      ],
    };
    expect(removeByKey(animals, 'dogs')).toEqual({
      cats: [
        'british shorthair',
        'persian cat',
        'maine coon',
        'ragdoll',
        'korean shorthair',
      ],
      fishes: [
        'koi',
        'comet',
        'fantail',
        'butterfly tail',
        'goldfish',
        'betta',
      ],
    });
  });
});
