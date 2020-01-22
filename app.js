function metricConverter([arg1,arg2,arg3]){
  let size = parseFloat(arg1);
  let sizeUpdate = 0;
  let metric = arg2;
  let toMetric = arg3;

  if (metric === 'km'){
    sizeUpdate = size / 0.001;
  } 
  else if (metric === 'cm'){
    sizeUpdate = size / 100;
  }
  else if (metric === 'mm'){
    sizeUpdate = size / 1000;
  }
  else if (metric === 'mi'){
    sizeUpdate = size / 0.000621371192;
  }
  else if (metric === 'in'){
    sizeUpdate = size / 39.3700787;
  }
  else if (metric === 'ft'){
    sizeUpdate = size / 3.2808399;
  }
  else if (metric === 'yd'){
    sizeUpdate = size / 1.0936133;
  }

  if (toMetric === 'cm'){
    sizeUpdate = sizeUpdate * 100;
  }
  else if (toMetric === 'km'){
    sizeUpdate = sizeUpdate * 0.001;
  }
  else if (toMetric === 'mm'){
    sizeUpdate = sizeUpdate * 1000;
  }
  else if (toMetric === 'mi'){
    sizeUpdate *= 0.000621371192;
  }
  else if (toMetric === 'yd'){
    sizeUpdate *= 1.0936133;
  }
  else if (toMetric === 'ft'){
    sizeUpdate *= 3.2808399;
  }
  else if (toMetric === 'in'){
    sizeUpdate *= 39.3700787;
  }

  console.log(size + "" + metric + " are " + sizeUpdate + "" + toMetric)
}

metricConverter([1,'km','m']);
