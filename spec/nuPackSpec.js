var nuPack = require('../nuPack.js');

describe("NuPack Module", function() {
	it ("should exist", function() {
		expect(nuPack).toBeDefined();

	})

	describe("calculateBaseMarkup function", function() {
		it ("should exist", function() {
			expect(nuPack.calculateBaseMarkup).toBeDefined();
		})

		it ("should should return a number gt or equal to 0", function() {
			expect(nuPack.calculateBaseMarkup(100,5) >= 0).toBeTruthy();
			expect(nuPack.calculateBaseMarkup(0,0) >= 0).toBeTruthy();
			expect(nuPack.calculateBaseMarkup(-1,5) >= 0).toBeTruthy();
		});

		it ("should calculate correct values", function() {
			expect(nuPack.calculateBaseMarkup(100)).toBe(105);
			expect(nuPack.calculateBaseMarkup(1299.99)).toBe(1364.99);
			expect(nuPack.calculateBaseMarkup(500)).toBe(525);
			expect(nuPack.calculateBaseMarkup(1)).toBe(1.05);
		});
	})

	describe("calculateTotalPrice function", function() {
		it ("should exist", function() {
			expect(nuPack.calculateTotalPrice).toBeDefined();
		});

			it("should return correct values", function() {
			expect(nuPack.calculateTotalPrice(100, 1, "food")).toBe(114.2);
			expect(nuPack.calculateTotalPrice(100, 3, "pharmaceuticals")).toBe(111.1);
			expect(nuPack.calculateTotalPrice(100, 5, "electronics")).toBe(108);
			expect(nuPack.calculateTotalPrice(100, -50, "book")).toBe(100);
		}) 

	})
});