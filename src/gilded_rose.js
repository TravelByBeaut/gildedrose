class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  updateQuality() {
    if (this.name.quality <= 0) {
      return;
    }
    this.decreaseQuality(this.name);
    this.decreaseSellIn(this.name);
    if (this.name.sellIn < 0) {
      this.decreaseQuality(this.name);
    }
  }

  increaseQuality(item, num = 1) {
    const limit = 50
    if (item.quality + num < limit) {
      item.quality += num;
    }
    else {
      item.quality = limit
    }
  }

  decreaseQuality(item, num = 1) {
    item.quality -= num;
  }

  decreaseSellIn(item, num = 1) {
    item.sellIn -= num;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros":
          new Sulfuras(item).updateQuality()
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          new BackstagePass(item).updateQuality()
          break;
        case "Aged Brie":
          new Brie(item).updateQuality()
          break;
        case "Conjured Mana Cake":
          new Conjured(item).updateQuality()
          break;
        default:
          new Item(item).updateQuality()
          break;
      }
    });
    return this.items;
  }
}

class Sulfuras extends Item{ 
  constructor(item) {
    super(item)
    this.item = item
  } 
  updateQuality() {
    return this.item;
  } 
}

class BackstagePass extends Item { 
  constructor(item) {
    super(item)
    this.item = item
  } 
  updateQuality() {
    super.increaseQuality(this.item)
    if (this.item.sellIn < 11) {
      super.increaseQuality(this.item)
    }
    if (this.item.sellIn < 6) {
      super.increaseQuality(this.item)
    }
    super.decreaseSellIn(this.item);
    if (this.item.sellIn < 0) {
      this.item.quality = 0;
    }
  } 
}

class Brie extends Item {
  constructor(item) {
    super(item)
    this.item = item
  }
  updateQuality() {
    if (this.item.quality < 50) {
      super.increaseQuality(this.item);
    }
    super.decreaseSellIn(this.item);
    if (this.item.sellIn < 0 && this.item.quality > 0) {
      super.decreaseQuality(this.item);
    }
  }
}

class Conjured extends Item {
  constructor(item) {
    super(item)
    this.item = item
  }
  updateQuality() {
    if (this.item.quality > 0) {
      super.decreaseQuality(this.item, 2);
      super.decreaseSellIn(this.item);
    }
  }
}

module.exports = {
  Item,
  Shop,
};