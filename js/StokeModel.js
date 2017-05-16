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

var stokeList = new StokeList();

$('document').ready(function () {
    var tempData = getApiData();

    var maxMoney = 500000;

    for(var i = 0; i < tempData.length; i++) {
        var tempObj = new Stoke(tempData[i].id, tempData[i].title, tempData[i].desc, tempData[i].price, tempData[i].lot, tempData[i].img, maxMoney, tempData[i].growthPotential);
        stokeList.addItem(tempObj);
    }

    renderStokesHTML();
});

function renderStokesHTML() {
    var HTML = '';
    for(var i = 0; i < stokeList.list.length; i++) {

    HTML += '<div class="actual-stock col-md-3 col-sm-4 col-xs-12">'+
                '<div class="stock">'+
                    '<div class="stock-img">'+
                        '<img src="'+stokeList.list[i].getImg()+'" class="img-responsive" alt=""/>'+
                    '</div>'+
                    '<div class="stock-values">'+
                        '<h5>Потенциал роста</h5>'+
                        '<h3 class="text-center">'+stokeList.list[i].getGrowthPotential()+'%</h3>'+
                        '<p class="stock-price">'+
                        '<span>'+stokeList.list[i].getPrice()+'</span>за 1 акцию</p>'+
                        '<p class="text-center">'+stokeList.list[i].getDesc()+'</p>'+
                    '</div>'+
                    '<div class="btn-container">'+
                        '<a href="#sell-modal" class="btn btn-large btn-stock  popup-with-form" onclick="clickModal('+stokeList.list[i].getId()+');">Купить</a>'+
                    '</div>'+
                '</div>'+
            '</div>';
    }

    $('.actual-stock-grid').html(HTML);
}

function clickModal(id) {

    var tempStoke = stokeList.getItemById(id);
    $(".imgModal").attr('src',tempStoke.getImg());
    $(".stock-data h3").html(tempStoke.getTitle());
    $(".stock-data span").html(tempStoke.getDesc());
    $(".price").html(tempStoke.getPrice()+' руб');
    $(".countStokeSpan").html('Акции '+tempStoke.getTitle()+' продаются пачками по '+tempStoke.getLot()+' акций');
    $("#costNumber").val(tempStoke.getLot());
    $("#maxRange").html(tempStoke.getMaxStoke());
    $(".stock-cost").html(tempStoke.getPrice()*tempStoke.getLot());


    $( ".cost-range" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: tempStoke.getMaxStoke(),
        step: tempStoke.getLot(),

        slide: function( event, ui ) {
            $( "#maxRange" ).html(ui.value);
        },

        change: function(event, ui) {
            $('#costNumber').val(ui.value);
            $( "#maxRange" ).html(ui.value);
            recountModalSum();
        }

    });

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - tempStoke.getLot();
        count = count < tempStoke.getLot() ? tempStoke.getLot() : count;
        $input.val(count);
        $input.change();
        $('.cost-range').slider('value',$input.val());
        $( "#maxRange" ).html($input.val());
        recountModalSum();
    });
    $('.plus').click(function () {
        // var $input = $(this).parent().find('input');
        // $input.val(parseInt($input.val()) + tempStoke.getLot());
        // $input.change();
        var tempVal = parseInt($("#costNumber").val());
        $('#costNumber').val(tempVal + tempStoke.getLot());
        $('#costNumber').change();

        $('.cost-range').slider('value',$('#costNumber').val());
        // $( "#maxRange" ).html($input.val());
        $( "#maxRange" ).html($('#costNumber').val());
        recountModalSum();
    });

    function recountModalSum() {
        var sum = $('#costNumber').val()*tempStoke.getPrice();
        $('.stock-cost').html(sum + ' руб');
    }
}



// $('.plus').blur(function () {
//     alert('F');
// });

// $('.cost-range').mouseup(function(){
//     alert($('.cost-range').val());
// });

function getApiData() {
    return [
        {
            id: 1,
            title: 'Газпром',
            desc: 'Национальное достояние и 15% всего газа мира',
            price: 136.12,
            lot: 100,
            img: 'img/gaz.jpg',
            growthPotential: 18
        },
        {
            id: 2,
            title: 'Роснефть',
            desc: 'Пока в России есть нефть, добывать ее будет Роснефть',
            price: 125.12,
            lot: 100,
            img: 'img/rosnef.jpg',
            growthPotential: 35
        },
        {
            id: 3,
            title: 'Лукойл',
            desc: 'Любимая российская «фишка» у зарубежных инвесторов',
            price: 122.12,
            lot: 100,
            img: 'img/lukoil.jpg',
            growthPotential: 27
        },
        {
            id: 4,
            title: 'Башнефть',
            desc: 'Все хотят кусочек «Башнефти»',
            price: 136.12,
            lot: 100,
            img: 'img/bash.jpg',
            growthPotential: 20
        },
        {
            id: 5,
            title: 'Novatek',
            desc: 'Газовая компания, которой владеют Тимченко, Газпром и TOTAL',
            price: 120.12,
            lot: 100,
            img: 'img/novatek.jpg',
            growthPotential: 8
        },
        {
            id: 6,
            title: 'Tatneft',
            desc: 'Нефтяники из Татарстана умеют добывать много нефти',
            price: 140.12,
            lot: 100,
            img: 'img/tat.jpg',
            growthPotential: 13
        },
        {
            id: 7,
            title: 'Сбербанк',
            desc: 'Это Греф, господдержка и крупнейшая доля рынка',
            price: 136.12,
            lot: 100,
            img: 'img/sberbank.jpg',
            growthPotential: 22
        },
        {
            id: 8,
            title: 'МТС',
            desc: 'Оператор №1 в центральной и восточной Европе',
            price: 120.12,
            lot: 100,
            img: 'img/mts.jpg',
            growthPotential: 22
        }
    ]
}

// var a = new Stoke(1, 'Andrey', 'MyDesc', 150, 100, 'aww', 500000);
//
// alert(a.getMaxStoke());