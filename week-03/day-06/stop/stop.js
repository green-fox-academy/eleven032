console.log('It is working');

//solution1
// const timer = setTimeout(() => alert('5 seconds passed!'), 5000);
// document.getElementById('cancelButton').onclick = () => clearTimeout(timer);



new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 5000);
    document.getElementById('cancelButton').onclick = () => reject();
}).then(alert('5 seconds passed!')).catch(() => { });
