var ModalForm = function () {
    // this.idSelectedStock = undefined;
    this.selectedStock = undefined;
    this.costOfSale = 0;
    this.userName = undefined;
    this.userPhone = undefined;
};

ModalForm.prototype.clickStockForm = function (id) {
    // this.idSelectedStock = id;

    var tempStoke = stokeList.getItemById(id);

    $('#costNumber').val(tempStoke.getLot());
    // $('.cost-range').slider('value', tempStoke.getLot());

    $('.userName').val('');
    $('.userPhone').val('');
    $('.stockButton').removeClass('active');

    this.costOfSale = 0;
    this.userName = undefined;
    this.userPhone = undefined;

    var tempThis = this;

    tempThis.recountModalSum( $('#costNumber').val(), tempStoke.getPrice());



    this.selectedStock = tempStoke;

    $(".imgModal").attr('src',tempStoke.getImg());
    $(".stock-data h3").html(tempStoke.getTitle());
    $(".stock-data span").html(tempStoke.getDesc());
    $(".price").html(tempStoke.getPrice()+' руб');
    $(".countStokeSpan").html('Акции '+tempStoke.getTitle()+' продаются пачками по '+tempStoke.getLot()+' акций');
    $("#costNumber").val(tempStoke.getLot());
    $("#maxRange").html(tempStoke.getMaxStoke());
    $(".stock-cost").html(tempStoke.getPrice()*tempStoke.getLot() + ' руб');


    $( ".cost-range" ).slider({
        range: "min",
        value: 0,
        min: 0,
        max: tempStoke.getMaxStoke(),
        step: tempStoke.getLot(),

        slide: function( event, ui ) {
            $('#costNumber').val(ui.value);

        },

        change: function(event, ui) {
            $('#costNumber').val(ui.value);
            tempThis.recountModalSum( $('#costNumber').val(), tempStoke.getPrice());;
        }

    });

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - tempStoke.getLot();
        count = count < tempStoke.getLot() ? tempStoke.getLot() : count;
        $input.val(count);
        $input.change();
        $('.cost-range').slider('value',$input.val());
        tempThis.recountModalSum( $('#costNumber').val(), tempStoke.getPrice());
    });
    $('.plus').click(function () {
        var tempVal = parseInt($("#costNumber").val());
        $('#costNumber').val(tempVal + tempStoke.getLot());
        $('#costNumber').change();

        $('.cost-range').slider('value',$('#costNumber').val());
        tempThis.recountModalSum( $('#costNumber').val(), tempStoke.getPrice());
    });

    console.log(this.selectedStock + '; ' + this.costOfSale + '; ' + this.userName + '; '+ this.userPhone);
};

ModalForm.prototype.recountModalSum = function (first, second) {
    var sum = first*second;
    $('.stock-cost').html(sum + ' руб');
    this.setCostOfSale(sum);
    this.checkButtonToActive();
};

ModalForm.prototype.setName = function (_this) {
    var name = $(_this).val();
    this.userName = name;
    this.checkButtonToActive();
};

ModalForm.prototype.setPhone = function (_this) {
    var phone = $(_this).val();
    this.userPhone = phone;
    this.checkButtonToActive();
};

ModalForm.prototype.setCostOfSale = function (cost) {
        this.costOfSale = cost;
};

ModalForm.prototype.checkButtonToActive = function () {
    if(
        this.costOfSale && this.userPhone && this.userName && this.selectedStock
    )
    {
        $('.stockButton').addClass('active');
    }
    else {
        $('.stockButton').removeClass('active');
    }
};

ModalForm.prototype.sendStockForm = function (_this) {
    if($(_this).hasClass('active')) {
        // alert('Cost = ' + this.costOfSale + '; ID = '+ this.selectedStock+ '; Name = '+this.userName+'; Phone = '+this.userPhone);
        // alert('AAA');
        $('.answerStockForm').html('Отправлено');
        // alert('отправлено');
    }
};

ModalForm.prototype.clickFeedBackForm = function () {
    this.userName = '';
    this.userPhone = '';
};

ModalForm.prototype.sendFeedBackForm = function () {
    if(this.userName && this.userPhone) {
        //LOGIC
        $('.answerSend').html('Сообщение отправлено');
        // alert(this.userName+'; '+this.userPhone);
    }
    else {
        $('.answerSend').html('Не все поля заполнены');
        // alert('NO');
    }
};