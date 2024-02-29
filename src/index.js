export default function charactersCheck(characters) {
    
    let charactersSort = characters.sort(function(a, b) {
        return b.health - a.health;
    });

    let characterStatus = [];

    for (let i = 0; i < charactersSort.length; i++) {
        if (charactersSort[i].health >= 50) {
            characterStatus.push('healthy');
        };
        if (charactersSort[i].health >= 15 && charactersSort[i].health < 50) {
            characterStatus.push('wounded');
        };
        if (charactersSort[i].health < 15) {
            characterStatus.push('critical');
        };
    }

    return characterStatus;
};