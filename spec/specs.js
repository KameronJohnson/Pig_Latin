describe('pigLatin', function() {
  it("will add 'ay' to the end of a word that starts with a vowel", function() {
    expect(pigLatin("order")).to.equal("orderay");
  });

  it("will return the pig latin for a word that begins with a single consonant", function() {
    expect(pigLatin("carrot")).to.equal("arrotcay");
  });

  it("will return the pig latin for a word that begins with multiple consonants", function() {
    expect(pigLatin("skate")).to.equal("ateskay");
  });
});
