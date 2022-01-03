/**
 * @param {*} probes 
 */
function macsByRadio(probes){
    if (!probes) {
        return [];
    } else {    
        
        const radioCount = [...new Set(probes.map(function({radio}) {return radio}))];
        const macsByRadioList = [];

        for (let i = 1; i < radioCount.length + 1; i++) {

            let macsList = probes.filter((element) => element.radio == `Rd ${i}`).map(function({mac}) {return mac});
            let radioString = `Rd ${i}`.toString();

            let macsByRadioObj = {
                radio: radioString,
                macs:  macsList
            };
        
        
        macsByRadioList.push(macsByRadioObj);

    }

    return macsByRadioList;

    
  }
}

module.exports = { macsByRadio };