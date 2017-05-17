/* MODEL */
var Stoke = function (id, title, desc, price, lot, img, maxMoney, growthPotential) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.price = price;
    this.lot = lot;
    this.img = img;
    this.growthPotential = growthPotential;
    this.maxStoke = Math.floor(maxMoney/this.price/this.lot)*this.lot;
};

Stoke.prototype.getTitle = function () {
    return this.title;
};
Stoke.prototype.getId = function () {
    return this.id;
};
Stoke.prototype.getDesc = function () {
    return this.desc;
};

Stoke.prototype.getPrice = function () {
    return this.price;
};
Stoke.prototype.getLot = function () {
    return this.lot;
};
Stoke.prototype.getImg = function () {
    return this.img;
};
Stoke.prototype.getMaxStoke = function () {
    return this.maxStoke;
};
Stoke.prototype.getGrowthPotential = function () {
    return this.growthPotential;
};


/* MODEL */
var StokeList = function() {
    this.list = [];
};

StokeList.prototype.addItem = function(item) {
    this.list.push(item);
};

StokeList.prototype.getItemById = function(id) {
    for(var i = 0; i < this.list.length; i++) {
        if(this.list[i].getId() == id) {
            return this.list[i];
        }
    }
    return false;
};