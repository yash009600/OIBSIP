function convert()
{
    var fUnit = document.getElementById('from-deg').value;
    var tUnit = document.getElementById('to-deg').value;
    var temp = parseFloat(document.getElementById('temp').value);

    var convertV;
    var res;
    switch (fUnit) {
        case 'C':
            if (tUnit === 'F') {
                convertV = (temp*9/5);
                res = 'F';
            }
            else if (tUnit === 'K') {
                convertV = temp + 273.15;
                res = 'K';
            } 
            else {
                convertV = temp;
                res = 'C';
            }
            break;
        case 'F':
            if (tUnit === 'C') {
                convertV = (temp-32)*5/9;
                res = 'C';
            }
            else if (tUnit === 'K') {
                convertV = (temp-32)*5/9+273.15;
                res = 'K';
            } 
            else {
                convertV = temp;
                res = 'F';
            }
            break;
        case 'K':
            if (tUnit === 'C') {
                convertV = (temp-273.15);
                res = 'C';
            }
            else if (tUnit === 'F') {
                convertV = (temp + 273.15)*9/5+32;
                res = 'F';
            } 
            else {
                convertV = temp;
                    res = 'K';
                }
            break;
        default:
            break;
    }
    document.getElementById('result').value=convertV.toFixed(2)+' '+res;
}