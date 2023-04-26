class Brie {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
    updateQuality() {
      this.increaseQuality(this.quality);
      this.decreaseSellIn(this.sellIn);
      if (this.sellIn < 0) {
        this.increaseQuality(this.quality);
      }
    }
  
    increaseQuality(quality, num = 1) {
      const limit = 50
      
      this.quality += num
      
      this.quality < limit ? this.quality : this.quality = limit
    }
  
    decreaseSellIn(sellIn, num = 1) {
      this.sellIn -= num;
    }
  }

  module.exports = {
    Brie
  }