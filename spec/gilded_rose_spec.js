describe("Gilded Rose update_quality", function() {

  var bread = new Item("bread", 10, 10);
  var oldBread = new Item("bread", 0, 4);
  var agedBrie = new Item("Aged Brie", 10, 20);
  var sulfuras = new Item("Sulfuras, Hand of Ragnaros", 10, 10);
  var backstage = new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10);

  describe("Normal bread ...", function (){

    it("should reduce quality and sell_in by 1", function() {
      items = [ bread ];
      update_quality();
      expect(items[0].sell_in).toEqual(9);
      expect(items[0].quality).toEqual(9);
    });

  });

  describe("Old bread ...", function (){

    beforeEach(function() {
      items = [ oldBread ];
      update_quality();
    });

    it("should reduce quality by 2", function() {
      expect(items[0].quality).toEqual(2);
    });

    it("should not let quality drop below 0", function() {
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

  });

  describe("Aged brie ...", function() {

    beforeEach(function(){
      items = [ agedBrie ];
      for (var i = 0; i < 5; i++) {
        update_quality();
      }
    });

    it("5 days should increase quality by 5", function() {
      expect(items[0].quality).toEqual(25);
    });

  });

  describe("Very old brie ...", function() {

    beforeEach(function(){
      items = [ agedBrie ];
      for (var i = 0; i < 35; i++) {
        update_quality();
      }
    });

    it("should be not allowed to have quality above 50", function() {
      expect(items[0].quality).toEqual(50);
    });
  });

  describe("Sulfuras ...", function() {

    it("quality should not change", function() {
      items = [ sulfuras ];
      update_quality();
      expect(items[0].quality).toEqual(10);
    });
  });

  describe("Backstage ...", function() {

    beforeEach(function(){
      items = [ backstage ];
      update_quality();
    });

    it("quality should +1 if sell_in > 10 days", function() {
      expect(items[0].quality).toEqual(11);
    });

    it("quality should +2 if sell_in < 10 days", function() {
      update_quality();
      update_quality();
      expect(items[0].quality).toEqual(17);
    });

    it("quality should +3 if sell_in < 5 days", function() {
      update_quality();
      update_quality();
      update_quality();
      update_quality();
      expect(items[0].quality).toEqual(30);
    });

    it("quality should = 0 if sell_in < 0 days", function() {
      update_quality();
      update_quality();
      console.log(items[0].sell_in);
      expect(items[0].quality).toEqual(0);
    });


  });


});
