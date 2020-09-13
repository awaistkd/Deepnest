const fs = require('fs');
const dxf = require('dxf');
const Helper = dxf.Helper;


onmessage = function (oEvent) {

    var dxfPath = oEvent.data.dxfPath;
    const helper = new Helper(fs.readFileSync(dxfPath, 'utf-8'));
    const svg_str = helper.toSVG();
    postMessage({svg: svg_str});
};
