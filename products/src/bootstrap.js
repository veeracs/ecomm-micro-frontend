import faker from 'faker';

export const mount = (elm) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    if (elm) {
        elm.innerHTML = products;
    }
}

if (process.env.NODE_ENV === 'development') {
    const elm = document.querySelector('#dev-products');

    mount(elm);
}
