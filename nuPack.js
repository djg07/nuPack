var nuPack = {
	categoryMap: {
		pharmaceuticals: .075,
		food: .13,
		electronics: .02
	},
	//Helper method to calculate baseMarkup using flat rate
	calculateBaseMarkup: function(price) {
		if (price <= 0) {
			return 0;
		} else {
			
			var flatMarkup = 0.05;
			return Number((price * (flatMarkup + 1)).toFixed(2));
		}
	},

	calculateTotalPrice: function(startPrice, workers, category) {
		var additionalMarkup = 0;
		var markupPrice = this.calculateBaseMarkup(startPrice);
		if (workers > 0) {
			additionalMarkup += (workers * 1.2)/100;
		}

		if (this.categoryMap[category] !== undefined) {
			additionalMarkup += this.categoryMap[category];
		}
		return Number((markupPrice * (additionalMarkup + 1)).toFixed(2));		
	},
}

if(typeof module != 'undefined') {
    module.exports = nuPack;
}





