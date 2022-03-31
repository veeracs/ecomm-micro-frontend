import faker from 'faker';

export const mount = (elm) => {
    const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`;

    if (elm) {
        elm.innerHTML = cartText;
    }
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');

    if (el) {
        mount(el);
    }
}
