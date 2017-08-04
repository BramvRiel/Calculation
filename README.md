# Calculation

Multiply fields in a row.
```
var calculation = new Calculation();
calculation.multiplyfields = $(this).closest(".calc-container").find(".calc-multiply");
calculation.totalfield = $(this).closest(".calc-container").find(".calc-total");
calculation.Calculate();
```

Sum total of all rows
```
var calculation = new Calculation();
calculation.totalfield = $(".calc-specificgroupname-total");
calculation.sumfields = $(".calc-specificgroupname.calc-container .calc-total");
calculation.Calculate();
```

Sum total of all total fields
```
var calculation = new Calculation();
calculation.totalfield = $(".calc-all-total");
calculation.sumfields = $(".calc-specificgroup1-total,.calc-specificgroup2-total,.calc-specificgroup3-total");
calculation.Calculate();
```
