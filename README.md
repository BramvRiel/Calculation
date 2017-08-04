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
calculation.totalfield = $(".calc-specificgroup1-total");
calculation.sumfields = $(".calc-specificgroup1.calc-container .calc-total");
calculation.Calculate();
```

Sum total of all total fields
```
var calculation = new Calculation();
calculation.totalfield = $(".calc-all-total");
calculation.sumfields = $(".calc-specificgroup1-total,.calc-specificgroup2-total,.calc-specificgroup3-total");
calculation.Calculate();
```

# Todo
- Required shizzle ook toevoegen bij sommatie
- Het triggeren van change event op totaal veld delegeren, misschien zelfs configuratie maken?
- Required class laten customizen door gebruiker. Configuratie maken dus.
- Meer foutmeldingen verzinnen, altijd beter dan NaN
- Error css class toevoegen op veld met NaN
