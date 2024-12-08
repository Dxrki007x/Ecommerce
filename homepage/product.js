var product = [{
    id: 1,
    img: 'https://img2.pic.in.th/pic/522288f55a0ea9fef.png',
    name: 'SHIRT',
    price: 990,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis perspiciatis officia commodi perferendis dignissimos.',
    type: 'SHIRT'
}, {
    id: 2,
    img: 'https://img2.pic.in.th/pic/522288f55a0ea9fef.png',
    name: 'SHIRT',
    price: 500,
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis perspiciatis officia commodi perferendis dignissimos.',
    type: 'SHIRT'
}, {
    id: 3,
    img: 'https://img2.pic.in.th/pic/522288f55a0ea9fef.png',
    name: 'SHIRT',
    price: 199,
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis perspiciatis officia commodi perferendis dignissimos.',
    type: 'SHIRT'
}, {
    id: 4,
    img: 'https://img2.pic.in.th/pic/522288f55a0ea9fef.png',
    name: 'SHIRT',
    price: 199,
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis perspiciatis officia commodi perferendis dignissimos.',
    type: 'SHIRT'
}, {
    id: 5,
    img: 'https://img2.pic.in.th/pic/522288f55a0ea9fef.png',
    name: 'SHIRT',
    price: 199,
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis perspiciatis officia commodi perferendis dignissimos.',
    type: 'SHIRT'
}, {
    id: 6,
    img: 'https://img2.pic.in.th/pic/522288f55a0ea9fef.png',
    name: 'SHIRT',
    price: 199,
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis perspiciatis officia commodi perferendis dignissimos.',
    type: 'SHIRT'
}, {
    id: 7,
    img: 'https://img2.pic.in.th/pic/522288f55a0ea9fef.png',
    name: 'SHIRT',
    price: 199,
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis perspiciatis officia commodi perferendis dignissimos.',
    type: 'SHIRT'
}, {
    id: 8,
    img: 'https://img2.pic.in.th/pic/6e41ea8e27639100d.png',
    name: 'SHIRT',
    price: 199,
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis perspiciatis officia commodi perferendis dignissimos.',
    type: 'SHIRT'
}];

$(document).ready(() => {
    displayProducts(product);
});

function displayProducts(products) {
    var html ='';
    for (let i =0; i < products.length; i++) {
        html += `<div class="product-items ${products[i].type}">
              <img class="product-img" src="${products[i].img}" alt="">
              <p style="font-size: 1.2vw;">${products[i].name}</p>
              <p style="font-size: 1vw;">${numberWithCommas(products[i].price)} THB</p>
            </div>`;
    }
    $("#productlist").html(html);
}

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsomething(elem) {
    var value = $('#'+elem.id).val().toLowerCase();
    var filteredProducts = product.filter(p => p.name.toLowerCase().includes(value));
    if (filteredProducts.length > 0) {
        displayProducts(filteredProducts);
    } else {
        $("#productlist").html(`<p>Not found product</p>`);
    }
}

function searchproduct(param) {
    if (param == 'all') {
        displayProducts(product);
    } else {
        var filteredProducts = product.filter(p => p.type == param);
        displayProducts(filteredProducts);
    }
}