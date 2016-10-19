function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    item = items[i]
    checkItem(item.name);
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && items[i].name != 'Conjured') {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1;
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1;
        if (items[i].name == 'Conjured') {
          if (items[i].quality < 50) {
              items[i].quality = items[i].quality - 3;
            }
          }
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1;
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1;
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1;
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality;
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1;
        }
      }
    }
  }
}

function checkItem(item) {
  switch(item) {
    case "Aged Brie":
      console.log("brie");
      break;
    case "Sulfuras, Hand of Rangaros":
      console.log("sulfuras");
      break;
    case 'Backstage passes to a TAFKAL80ETC concert':
      console.log("backstage");
      break;
    case "Conjured":
      console.log("conjured");
    break;
    default:
      console.log("normal");
  }
}

function normalUpdate(item) {

}
