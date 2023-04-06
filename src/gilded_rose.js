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
      switch (item.name) {
        case "Sulfuras, Hand of Ragnaros":
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePasses(item);
          break;
        case "Aged Brie":
          this.updateBrie(item);
          break;
        case "Conjured Mana Cake":
          this.updateConjuredItem(item);
          break;
        default:
          this.updateNormalItem(item);
          break;
      }
    });
    return this.items;
  }

  increaseQuality(item, num = 1) {
    item.quality += num;
  }

  decreaseQuality(item, num = 1) {
    item.quality -= num;
  }

  decreaseSellIn(item, num = 1) {
    item.sellIn -= num;
  }

  updateBackstagePasses(item) {
    let quality = item.quality;
    quality++;

    if (item.sellIn < 11) {
      quality++;
    }
    if (item.sellIn < 6) {
      quality++;
    }
    item.quality = quality > 50 ? 50 : quality;

    this.decreaseSellIn(item);
    if (item.sellIn < 0) {
      item.quality -= item.quality;
    }
  }

  updateBrie(item) {
    if (item.quality < 50) {
      this.increaseQuality(item);
    }
    this.decreaseSellIn(item);
    if (item.sellIn < 0 && item.quality > 0) {
      this.decreaseQuality(item);
    }
  }

  updateNormalItem(item) {
    if (item.quality <= 0) {
      return;
    }
    this.decreaseQuality(item);
    this.decreaseSellIn(item);
    if (item.sellIn < 0) {
      this.decreaseQuality(item);
    }
  }

  updateConjuredItem(item) {
    if (item.quality > 0) {
      this.decreaseQuality(item, 2);
      this.decreaseSellIn(item);
    }
  }
}

module.exports = {
  Item,
  Shop,
};

// if (item.quality < 50) {
//   this.increaseQuality(item);

//   if (item.sellIn < 11 && item.quality < 50) {
//     this.increaseQuality(item);
//   }
//   if (item.sellIn < 6 && item.quality < 50) {
//     this.increaseQuality(item);
//   }
// }
