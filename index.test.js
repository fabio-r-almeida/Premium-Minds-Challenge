const { pokemon } = require('./index.js')



  test("Exercise Input example 1", async () => {
    const result = await pokemon('E', count_of_pokemon => {
      return count_of_pokemon;
    });
    expect(result).toBe(2);
  });
  
  test("Exercise Input example 2", async () => {
    const result = await pokemon('NESO', count_of_pokemon => {
      return count_of_pokemon;
    });
    expect(result).toBe(4);
  });
  
  test("Exercise Input example 3", async () => {
    const result = await pokemon('NSNSNSNSNS', count_of_pokemon => {
      return count_of_pokemon;
    });
    expect(result).toBe(2);
  });
  
  test("Tests 'NEOSNEOSNNNSOENSNSOENS'", async () => {
    const result = await pokemon('NEOSNEOSNNNSOENSNSOENS', count_of_pokemon => {
      return count_of_pokemon;
    });
    expect(result).toBe(6);
  });
  
  test("Tests 'SSSSSSNNSSNEEEOOOOSSSSNNSNSNSNSNSN'", async () => {
    const result = await pokemon('SSSSSSNNSSNEEEOOOOSSSSNNSNSNSNSNSN', count_of_pokemon => {
      return count_of_pokemon;
    });
    expect(result).toBe(15);
  });
  
  test("Tests 'NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN'", async () => {
    const result = await pokemon('NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN', count_of_pokemon => {
      return count_of_pokemon;
    });
    expect(result).toBe(37);
  });

  test("Tests with unkown direction: e.g. TKJGHADJFHIJG (should only catch one on spawn)", async () => {
    const result = await pokemon('TKJGHADJFHIJG', count_of_pokemon => {
      return count_of_pokemon;
    });
    expect(result).toBe(1);
  });

  test("Adding 'trash' directions eg. NOSEEESKKOT ", async () => {
    const result = await pokemon('NOSEEESKKOT', count_of_pokemon => {
      return count_of_pokemon;
    });
    expect(result).toBe(8);
  });