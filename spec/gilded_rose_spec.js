describe("Gilded Rose", function() {

  var bread = new Item("bread", 10, 10);
  var oldBread = new Item("bread", 0, 4);

  describe("For normal bread it ...", function (){

    it("should reduce quality and sell_in by 1", function() {
      items = [ bread ];
      update_quality();
      expect(items[0].sell_in).toEqual(9);
      expect(items[0].quality).toEqual(9);
    });

  });

  describe("For old bread it ...", function (){

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

});
