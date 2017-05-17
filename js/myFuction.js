var stockForm = new ModalForm();

var stokeList = new StokeList();

var messageForm = new ModalForm();

$('document').ready(function () {
    var tempData = getApiData();

    var maxMoney = 500000;

    for(var i = 0; i < tempData.length; i++) {
        var tempObj = new Stoke(tempData[i].id, tempData[i].title, tempData[i].desc, tempData[i].price, tempData[i].lot, tempData[i].img, maxMoney, tempData[i].growthPotential);
        stokeList.addItem(tempObj);
    }

    renderStokesHTML();
});

function clickMessageForm() {
    messageForm.clickFeedBackForm();
}

$('#consult-name').change(function () {
    messageForm.setName(this);
});

$('#consult-phone').change(function () {
    messageForm.setPhone(this);
});

$('.consult-send').click(function () {
    messageForm.sendFeedBackForm();
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
            // '<a href="#sell-modal" class="btn btn-large btn-stock  popup-with-form" onclick="clickModal('+stokeList.list[i].getId()+');">Купить</a>'+
            '<a href="#sell-modal" class="btn btn-large btn-stock  popup-with-form" onclick="stockForm.clickStockForm('+stokeList.list[i].getId()+');">Купить</a>'+
            '</div>'+
            '</div>'+
            '</div>';
    }

    $('.actual-stock-grid').html(HTML);
}

$('.userName').change(function () {
    stockForm.setName(this);
});

$('.userPhone').change(function () {
    stockForm.setPhone(this);
});

$('.stockButton').click(function () {
   stockForm.sendStockForm(this);
});

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