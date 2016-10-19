function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    checkItem(item);
    item.sell_in -= 1;
  }
}

function checkItem(item) {
  switch(item.name) {
    case "Aged Brie":
      brieUpdate(item);
      break;
    case "Sulfuras, Hand of Ragnaros":
      return item;
    case 'Backstage passes to a TAFKAL80ETC concert':
      backstageUpdate(item);
      break;
    case "Conjured":
      conjuredUpdate(item);
      break;
    default:
      normalUpdate(item);
  }
}

function normalUpdate(item) {
  if (item.quality > 0 && item.sell_in > 0) {
    item.quality -= 1;
  } else if (item.quality > 0 && item.sell_in < 1) {
    item.quality -= 2;
  }
}

function conjuredUpdate(item) {
  if (item.quality > 0 && item.quality < 50) item.quality -= 2;
}

function brieUpdate(item) {
  (item.quality < 50) ? item.quality += 1 : item.quality = 50;
}

function backstageUpdate(item) {
  if (item.sell_in > 10) {
    item.quality += 1;
  } else if (item.sell_in < 11 && item.sell_in > 5) {
    item.quality += 2;
  } else if (item.sell_in < 6 && item.sell_in > 0) {
    item.quality += 3;
  } else {
    item.quality = 0;
  }
}
