const { Shop } = require("../src/gilded_rose");
const {Sulfuras} = require("../src/Sulfuras")
const {BackstagePass} = require("../src/BackstagePass")
const {Normal} = require("../src/Normal")
const {Brie} = require("../src/Brie")
const {Conjured} = require("../src/Conjured")


describe("Quality check", function () {
  it("Quality of Sulfuras doesn't change", function () {
    const gildedRose = new Shop([
      new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });
  it("Item quality is never more than 50 (except Sulfuras)", function () {
    const gildedRose = new Shop([
      new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 50),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });
  it("Aged Brie increases in quality with age", function () {
    const gildedRose = new Shop([new Brie("Aged Brie", 2, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });
  it("A normal item's quality degrades twice as fast when SellIn is 0", function () {
    const gildedRose = new Shop([new Normal("Elixir of the Mongoose", 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });
  it("An item's quality is never negative", function () {
    const gildedRose = new Shop([new Normal("Elixir of the Mongoose", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("Conjured items degrade in quality twice as fast", function () {
    const shop = new Shop([new Conjured("Conjured Mana Cake", 3, 6)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(4);
  });
  it("Brie items increase in quality twice as fast after sellIn", function () {
    const shop = new Shop([new Brie("Aged Brie", -1, 1)]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(3);
  });
});
describe("Backstage passes", function () {
  it("Backstage passes quality drops to 0 when SellIn is 0", function () {
    const gildedRose = new Shop([
      new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 0, 49),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
  it("Backstage passes quality increases by 2 when SellIn is <= 10 and > 5", function () {
    const gildedRose = new Shop([
      new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 7, 39),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(41);
  });
  it("Backstage passes quality increases by 3 when SellIn is < 5", function () {
    const gildedRose = new Shop([
      new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 4, 39),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(42);
  });
});
describe("Product check", function () {
  it("Aged Brie increases in quality and normal product decreases", function () {
    const shop = new Shop([
      new Brie("Aged Brie", 2, 1),
      new Normal("Elixir of the Mongoose", 5, 7),
    ]);

    const items = shop.updateQuality();

    expect(items[0].quality).toBe(2);
    expect(items[1].quality).toBe(6);
  });
  it("Item quality not over 50 but Sulfuras is", function () {
    const shop = new Shop([
      new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 50),
      new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(50);
    expect(items[1].quality).toBe(80);
  });
  it("Conjured items degrade in quality twice as fast as a normal item", function () {
    const shop = new Shop([
      new Conjured("Conjured Mana Cake", 3, 6),
      new Normal("Elixir of the Mongoose", 3, 6),
    ]);
    const items = shop.updateQuality();
    expect(items[0].quality).toBe(4);
    expect(items[1].quality).toBe(5);
  });
});
