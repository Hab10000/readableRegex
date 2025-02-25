const ValidationFunctions = require('../../validationFunctions');

describe('ValidationFunctions.isAscii', () => {
    test('should return true for ASCII characters', () => {
        expect(ValidationFunctions.isAscii('Hello123')).toBe(true);
    });

    test('should return false for non-ASCII characters', () => {
        expect(ValidationFunctions.isAscii('Hello世界')).toBe(false);
    });
});
