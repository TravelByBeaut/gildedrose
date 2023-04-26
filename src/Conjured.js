class Conjured {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
    updateQuality() {
      if (this.quality > 0) {
        this.decreaseQuality(this.quality, 2);
        this.decreaseSellIn(this.sellIn);
      }
    }
  
    decreaseQuality(quality, num = 1) {
      this.quality -= num;
    }
  
    decreaseSellIn(sellIn, num = 1) {
      this.sellIn -= num;
    }
  }

  module.exports = {
    Conjured
  }