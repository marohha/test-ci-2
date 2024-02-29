import charactersCheck from '../index';

test('Check characters health', () => {
    const characters = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]

    const result = charactersCheck(characters);
    expect(result).toEqual(['healthy', 'healthy', 'critical']);
}); 