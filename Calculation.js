function Calculation() {
    var calculation = this;

    var total;
    this.totalfield;
    this.multiplyfields;
    this.sumfields;

    this.Calculate = function () {
        if (!this.totalfield.length)
            throw "Error.Calculation.NotFoundTotalField";

        this.Multiply();

        this.Summation();

        if (this.total === undefined)
            throw "Error.Calculation.TotalIsNull";

        this.totalfield.val(this.total.toFixed(2).toString().replace(".", ","));

        this.totalfield.trigger("change");
    }

    this.Multiply = function () {
        if (calculation.multiplyfields === undefined)
            return;

        if (!calculation.multiplyfields.length)
            return;

        calculation.multiplyfields.each(function () {
            var translatedValue = translateValue($(this).val());
            var required = $(this).is('.calc-required');

            if (!required) {
                if (translatedValue === 0) {
                    return true;
                }
                if (isNaN(translatedValue)) {
                    return true;
                }
            }

            if (calculation.total === undefined) {
                calculation.total = translatedValue;
            } else {
                calculation.total = calculation.total * translatedValue;
            }
        });
    }

    this.Summation = function () {
        if (calculation.sumfields === undefined)
            return;

        if (!calculation.sumfields.length)
            return;

        calculation.sumfields.each(function () {
            var translatedValue = translateValue($(this).val());

            if (calculation.total === undefined) {
                calculation.total = translatedValue;
            } else {
                calculation.total = calculation.total + translatedValue;
            }
        });
    }

    var translateValue = function TranslateValue(value) {
        var myRegexp = /[\.,]\d\d$/;
        var match = myRegexp.test(value);
        value = value.replace(/[\.,]/g, "");
        if (match) {
            value = value.substr(0, value.length - 2)
                + '.'
                + value.substr(-2);
        }
        value = parseFloat(value);
        return value;
    }
}