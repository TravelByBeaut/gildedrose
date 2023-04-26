class Normal {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
    updateQuality() {
      if (this.quality <= 0) {
        return;
      }
      this.decreaseQuality(this.quality);
      this.decreaseSellIn(this.sellIn);
      if (this.sellIn < 0) {
        this.decreaseQuality(this.quality);
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
    Normal
  }