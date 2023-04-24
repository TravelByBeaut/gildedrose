class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.updateQuality()
    });
    return this.items;
  }
}

class Sulfuras{ 
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  } 
  updateQuality() {
    return;
  } 
}

class BackstagePass { 
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {
    this.increaseQuality(this.quality)
    if (this.sellIn < 11) {
      this.increaseQuality(this.quality)
    }
    if (this.sellIn < 6) {
      this.increaseQuality(this.quality)
    }
    this.decreaseSellIn(this.sellIn);
    if (this.sellIn < 0) {
      this.quality = 0;
    }
  }
  increaseQuality(quality, num = 1) {
    const limit = 50
    if (this.quality + num < limit) {
     this.quality += num;
    }
    else {
      this.quality = limit
    }
  } 
  decreaseSellIn(sellIn, num = 1) {
    this.sellIn -= num;
  }
}

class Brie {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {
    if (this.quality < 50) {
      this.increaseQuality(this.quality);
    }
    this.decreaseSellIn(this.sellIn);
    if (this.sellIn < 0 && this.quality > 0) {
      this.decreaseQuality(this.quality);
    }
  }

  increaseQuality(quality, num = 1) {
    this.quality += num;
  }

  decreaseQuality(quality, num = 1) {
    this.quality -= num;
  }

  decreaseSellIn(sellIn, num = 1) {
    this.sellIn -= num;
  }
}

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

  increaseQuality(quality, num = 1) {
    this.quality += num;
  }

  decreaseQuality(quality, num = 1) {
    this.quality -= num;
  }

  decreaseSellIn(sellIn, num = 1) {
    this.sellIn -= num;
  }
}

module.exports = {
  Item,
  Shop,
  Sulfuras,
  BackstagePass,
  Brie,
  Conjured,
  Normal
};