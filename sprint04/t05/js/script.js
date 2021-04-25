let menuElement = document.querySelector('.wrapper');

const menu = new Map();
const salads = new Map();
const dishes = new Map();
const deserts = new Map();
const drinks = new Map();

salads.set('Greek salad', 5.99);
salads.set('Caesar salad', 7.99);

dishes.set('Margherita Pizza', 12.50);
dishes.set('Tomato Soup', 6.99);
dishes.set('Burger', 10.00);

deserts.set('Cheesecake', 4.99);
deserts.set('Chocolate Ice-Cream', 2.50);
deserts.set('Fruit Salad', 3.99);

drinks.set('Lemonade', 3.20);
drinks.set('Green Tea', 1.50);
drinks.set('Coffee', 1.99);

menu.set('Salads', salads);
menu.set('Main Dishes', dishes);
menu.set('Deserts', deserts);
menu.set('Drinks', drinks);

menu.forEach(function(value, section) {
    menuElement.insertAdjacentHTML('beforeend', generateSection(section));
    value.forEach(function(price, dish) {
        const sections = document.querySelectorAll('.menu-list');
        const recentSection = sections[sections.length - 1];
        recentSection.insertAdjacentHTML('beforeend', generateMenuItems(price, dish));
    })
}) 

function generateSection(section) {
    const menuSection = `<h2>${section}</h2>
                     <hr />
                     <ul class="menu-list">
                     </ul>`;
    return menuSection;
}

function generateMenuItems(price, dish) {
    const menuItem = `<li class="el-item">
                        <div class="flex-grid" uk-grid="">
                            <div class="width-expand">
                                <span class="leader">
                                    <span class="leader-fill"
                                        data-fill=".....................................................................................................................................................................................................................................................................................">
                                        ${dish}
                                    </span>
                                </span>
                            </div>
                            <div class="width-auto">
                                <div class="price">
                                    ${price}
                                </div>
                            </div>
                        </div>
                    </li>`
    return menuItem;
}