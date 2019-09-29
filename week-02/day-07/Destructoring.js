var car = {
    model: 'Benz',
    color: 'black',
    year: 1886,
    doors: 0,
    historical: true
};
var computer = {
    type: 'PC',
    monitor: {
        color: 'black',
        size: '16\"',
        HDMI: true,
        VGA: true
    },
    tower: {
        color: 'grey',
        CPU: 4.7,
        memory: 16,
        SSD: 128
    }
}

//without
// let [model, color, year, doors, historical] = [car.model, car.color, car.year, car.doors, car.historical];
// let [type, [color1, size, HDMI, VGA], [color2, CPU, memory, SSD]] = [computer.type, [computer.monitor.color,computer.monitor.size,computer.monitor.HDMI,computer.monitor.VGA], [computer.tower.color,computer.tower.CPU,computer.tower.memory,computer.tower.SSD]];

//with
let {type,monitor:{color1,size,HDMI,VGA},tower:{color2,CPU,memory, SSD}} = computer;
console.log(size);


