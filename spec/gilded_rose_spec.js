describe("Gilded Rose update_quality", function() {

  var bread = new Item("bread", 10, 10);
  var oldBread = new Item("bread", 0, 4);
  var agedBrie = new Item("Aged Brie", 10, 20);

  describe("Normal bread ...", function (){

    it("should reduce quality and sell_in by 1", function() {
      items = [ bread ];
      update_quality();
      expect(items[0].sell_in).toEqual(9);
      expect(items[0].quality).toEqual(9);
    });

  });

  describe("Old bread ...", function (){

    it("should reduce quality by 2", function() {
      items = [ oldBread ];
      update_quality();
      expect(items[0].quality).toEqual(2);
    });

    it("should not let quality drop below 0", function() {
      items = [ oldBread ];
      update_quality();
      update_quality();
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


});
