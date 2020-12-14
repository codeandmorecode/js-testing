const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act

    // Assert
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
      const text = 'abcdefghijklmnopqrstuvwxyz';

    // Act
      const answer = isPangram(test);
    // Assert
      expect(answer).toBe(true);
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'the quick brown fo jumps over the lazy dog';
    // Act
    const answer = isPangram(test);

    // Assert
    expect(answer).toBe(false);

  });

  test('empty sentence', () => {
    // Arrange

    // Act

    // Assert

  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange

    // Act

    // Assert

  });

  test('pangram with numbers', () => {
    // Arrange

    // Act

    // Assert

  });

  // Write your own test case
});
