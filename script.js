/* =====================================================
   AURELIA JEWELS - COMPLETE SCRIPT.JS
   ===================================================== */


/* =========================
   1. PRODUCT DATA
   ========================= */

const products = [

    {
        id: 1,
        name: "Celeste Pearl Necklace",
        category: "Necklaces",
        price: 12999,
        oldPrice: 15999,
        discount: "19% OFF",
        rating: 4.8,
        metal: "Gold",
        polish: "Gold Polish",
        image:
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 2,
        name: "Luna Drop Earrings",
        category: "Earrings",
        price: 6499,
        oldPrice: 7999,
        discount: "19% OFF",
        rating: 4.7,
        metal: "Gold",
        polish: "Rose Gold",
        image:
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 3,
        name: "Amara Statement Ring",
        category: "Rings",
        price: 3999,
        oldPrice: 4999,
        discount: "20% OFF",
        rating: 4.6,
        metal: "Silver",
        polish: "Gold Polish",
        image:
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 4,
        name: "Serena Gold Bangles",
        category: "Bangles",
        price: 8999,
        oldPrice: 10999,
        discount: "18% OFF",
        rating: 4.9,
        metal: "Gold",
        polish: "Gold Polish",
        image:
            "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 5,
        name: "Royal Mangalsutra",
        category: "Mangalsutra",
        price: 14999,
        oldPrice: 17999,
        discount: "17% OFF",
        rating: 4.9,
        metal: "Gold",
        polish: "Gold Polish",
        image:
            "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 6,
        name: "Aurora Pendant",
        category: "Necklaces",
        price: 7499,
        oldPrice: 8999,
        discount: "17% OFF",
        rating: 4.5,
        metal: "Silver",
        polish: "Rose Gold",
        image:
            "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 7,
        name: "Classic Gold Hoops",
        category: "Earrings",
        price: 2999,
        oldPrice: 3999,
        discount: "25% OFF",
        rating: 4.4,
        metal: "Gold",
        polish: "Gold Polish",
        image:
            "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 8,
        name: "Elegant Rose Ring",
        category: "Rings",
        price: 5499,
        oldPrice: 6499,
        discount: "15% OFF",
        rating: 4.7,
        metal: "Silver",
        polish: "Rose Gold",
        image:
            "https://images.unsplash.com/photo-1598560912005-59a7a5c2c4c9?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 9,
        name: "Luxury Mini Handbag",
        category: "Handbags",
        price: 6999,
        oldPrice: 8499,
        discount: "18% OFF",
        rating: 4.5,
        metal: "Gold",
        polish: "Gold Polish",
        image:
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85"
    }

];


/* =========================
   2. CART
   ========================= */

let cart = [];


/* =========================
   3. WISHLIST
   ========================= */

let wishlist = [];


/* =========================
   4. HERO CAROUSEL
   ========================= */

let currentSlide = 0;

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");


function setSlide(number) {

    if (slides.length === 0) {
        return;
    }

    slides.forEach(function(slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function(dot) {

        dot.classList.remove("active");

    });


    currentSlide = number;


    slides[currentSlide]
        .classList.add("active");


    if (dots[currentSlide]) {

        dots[currentSlide]
            .classList.add("active");

    }

}


function changeSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    setSlide(currentSlide);

}


/* Change banner every 5 seconds */

setInterval(changeSlide, 5000);


/* =========================
   5. DISPLAY PRODUCTS
   ========================= */

function renderProducts() {

    const grid =
        document.getElementById("productGrid");


    if (!grid) {
        return;
    }


    /* Category */

    const categoryElement =
        document.getElementById(
            "categoryFilter"
        );


    const category =
        categoryElement
            ? categoryElement.value
            : "All";


    /* Price */

    const priceElement =
        document.getElementById(
            "priceRange"
        );


    const maxPrice =
        priceElement
            ? Number(priceElement.value)
            : 50000;


    /* Sort */

    const sortElement =
        document.getElementById("sort");


    const sort =
        sortElement
            ? sortElement.value
            : "latest";


    /* Get selected metals */

    const metalCheckboxes =
        document.querySelectorAll(
            '.checks input[value="Gold"], .checks input[value="Silver"]'
        );


    const selectedMetals = [];


    metalCheckboxes.forEach(function(box) {

        if (box.checked) {

            selectedMetals.push(box.value);

        }

    });


    /* Get selected polish */

    const polishCheckboxes =
        document.querySelectorAll(
            '.checks input[value="Gold Polish"], .checks input[value="Rose Gold"]'
        );


    const selectedPolish = [];


    polishCheckboxes.forEach(function(box) {

        if (box.checked) {

            selectedPolish.push(box.value);

        }

    });


    /* Filter products */

    let filteredProducts =
        products.filter(function(product) {


            /* Category */

            if (
                category !== "All" &&
                product.category !== category
            ) {

                return false;

            }


            /* Price */

            if (product.price > maxPrice) {

                return false;

            }


            /* Metal */

            if (
                selectedMetals.length > 0 &&
                !selectedMetals.includes(
                    product.metal
                )
            ) {

                return false;

            }


            /* Polish */

            if (
                selectedPolish.length > 0 &&
                !selectedPolish.includes(
                    product.polish
                )
            ) {

                return false;

            }


            return true;

        });


    /* =========================
       SORT PRODUCTS
       ========================= */

    if (sort === "priceLow") {

        filteredProducts.sort(
            function(a, b) {

                return a.price - b.price;

            }
        );

    }


    if (sort === "priceHigh") {

        filteredProducts.sort(
            function(a, b) {

                return b.price - a.price;

            }
        );

    }


    if (sort === "popular") {

        filteredProducts.sort(
            function(a, b) {

                return b.rating - a.rating;

            }
        );

    }


    /* =========================
       CLEAR GRID
       ========================= */

    grid.innerHTML = "";


    /* No products */

    if (filteredProducts.length === 0) {

        grid.innerHTML = `

            <div class="no-products">

                <h3>
                    No jewellery found
                </h3>

                <p>
                    Try changing your filters.
                </p>

            </div>

        `;

        return;

    }


    /* =========================
       CREATE PRODUCT CARDS
       ========================= */

    filteredProducts.forEach(
        function(product) {


            const card =
                document.createElement("div");


            card.className = "product";


            card.innerHTML = `

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}">

                    <span class="discount">
                        ${product.discount}
                    </span>

                    <button
                        class="product-wish"
                        onclick="toggleWishlist(${product.id})">

                        ♡

                    </button>

                </div>


                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="product-category">
                        ${product.category}
                    </p>

                    <p class="product-rating">
                        ⭐ ${product.rating}
                    </p>

                    <p class="price">

                        ₹${product.price.toLocaleString("en-IN")}

                        <span class="old-price">
                            ₹${product.oldPrice.toLocaleString("en-IN")}
                        </span>

                    </p>


                    <button
                        class="add-button"
                        onclick="addToCart(${product.id})">

                        ADD TO BAG

                    </button>

                </div>

            `;


            grid.appendChild(card);

        }
    );

}


/* =========================
   6. SHOW PRODUCTS
   ========================= */

function showProducts(category = "All") {

    const filter =
        document.getElementById(
            "categoryFilter"
        );


    if (filter) {

        filter.value = category;

    }


    renderProducts();


    const section =
        document.getElementById(
            "products"
        );


    if (section) {

        section.scrollIntoView({

            behavior: "smooth"

        });

    }

}


/* =========================
   7. SEARCH PRODUCTS
   ========================= */

function searchProducts() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input) {
        return;
    }


    const text =
        input.value
            .toLowerCase()
            .trim();


    const grid =
        document.getElementById(
            "productGrid"
        );


    if (!grid) {
        return;
    }


    if (text === "") {

        renderProducts();

        return;

    }


    const results =
        products.filter(
            function(product) {

                return (
                    product.name
                        .toLowerCase()
                        .includes(text)

                    ||

                    product.category
                        .toLowerCase()
                        .includes(text)
                );

            }
        );


    grid.innerHTML = "";


    if (results.length === 0) {

        grid.innerHTML = `

            <div class="no-products">

                <h3>
                    No results found
                </h3>

                <p>
                    Try searching for rings,
                    earrings or necklaces.
                </p>

            </div>

        `;

        return;

    }


    results.forEach(
        function(product) {

            const card =
                document.createElement("div");


            card.className = "product";


            card.innerHTML = `

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}">

                    <span class="discount">
                        ${product.discount}
                    </span>

                    <button
                        class="product-wish"
                        onclick="toggleWishlist(${product.id})">

                        ♡

                    </button>

                </div>


                <div class="product-info">

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="product-category">
                        ${product.category}
                    </p>

                    <p class="product-rating">
                        ⭐ ${product.rating}
                    </p>

                    <p class="price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </p>

                    <button
                        class="add-button"
                        onclick="addToCart(${product.id})">

                        ADD TO BAG

                    </button>

                </div>

            `;


            grid.appendChild(card);

        }
    );

}


/* =========================
   8. PRICE RANGE
   ========================= */

function updatePrice() {

    const range =
        document.getElementById(
            "priceRange"
        );


    const display =
        document.getElementById(
            "priceValue"
        );


    if (!range || !display) {
        return;
    }


    const value =
        Number(range.value);


    display.textContent =
        "₹" +
        value.toLocaleString("en-IN");

}


/* =========================
   9. ADD TO CART
   ========================= */

function addToCart(productId) {

    const product =
        products.find(
            function(item) {

                return item.id === productId;

            }
        );


    if (!product) {
        return;
    }


    cart.push(product);


    updateCartCount();


    alert(
        product.name +
        " has been added to your bag!"
    );

}


/* =========================
   10. CART COUNT
   ========================= */

function updateCartCount() {

    const count =
        document.getElementById(
            "cartCount"
        );


    if (count) {

        count.textContent =
            cart.length;

    }

}


/* =========================
   11. OPEN CART
   ========================= */

function openCart() {

    const modal =
        document.getElementById(
            "cartModal"
        );


    if (!modal) {
        return;
    }


    displayCart();


    modal.classList.add("show");

}


/* =========================
   12. CLOSE CART
   ========================= */

function closeCart() {

    const modal =
        document.getElementById(
            "cartModal"
        );


    if (modal) {

        modal.classList.remove(
            "show"
        );

    }

}


/* =========================
   13. DISPLAY CART
   ========================= */

function displayCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );


    if (!cartItems) {
        return;
    }


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p>
                Your bag is empty.
            </p>

        `;

        return;

    }


    cart.forEach(
        function(product, index) {


            cartItems.innerHTML += `

                <div class="cart-item">

                    <div class="cart-item-info">

                        <h4>
                            ${product.name}
                        </h4>

                        <p>
                            ₹${product.price.toLocaleString("en-IN")}
                        </p>

                    </div>


                    <button
                        class="remove-item"
                        onclick="removeFromCart(${index})">

                        REMOVE

                    </button>

                </div>

            `;

        }
    );

}


/* =========================
   14. REMOVE FROM CART
   ========================= */

function removeFromCart(index) {

    cart.splice(index, 1);


    updateCartCount();


    displayCart();

}


/* =========================
   15. WISHLIST
   ========================= */

function toggleWishlist(productId) {

    const product =
        products.find(
            function(item) {

                return item.id === productId;

            }
        );


    if (!product) {
        return;
    }


    const exists =
        wishlist.some(
            function(item) {

                return item.id === productId;

            }
        );


    if (exists) {

        wishlist =
            wishlist.filter(
                function(item) {

                    return item.id !== productId;

                }
            );


        alert(
            product.name +
            " removed from wishlist."
        );

    } else {

        wishlist.push(product);


        alert(
            product.name +
            " added to wishlist!"
        );

    }

}


/* =========================
   16. HEADER WISHLIST
   ========================= */

function addWish() {

    if (wishlist.length === 0) {

        alert(
            "Your wishlist is empty."
        );

    } else {

        alert(
            "You have " +
            wishlist.length +
            " item(s) in your wishlist."
        );

    }

}


/* =========================
   17. ACCOUNT
   ========================= */

function openAccount() {

    alert(
        "Account section coming soon!"
    );

}


/* =========================
   18. NEWSLETTER
   ========================= */

function subscribe() {

    const email =
        document.getElementById(
            "email"
        );


    if (!email) {
        return;
    }


    const value =
        email.value.trim();


    if (value === "") {

        alert(
            "Please enter your email address."
        );

        return;

    }


    if (!value.includes("@")) {

        alert(
            "Please enter a valid email address."
        );

        return;

    }


    alert(
        "Thank you for joining Aurelia Jewels!"
    );


    email.value = "";

}


/* =========================
   19. CLOSE CART WHEN
       CLICKING OUTSIDE
   ========================= */

const cartModal =
    document.getElementById(
        "cartModal"
    );


if (cartModal) {

    cartModal.addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                cartModal
            ) {

                closeCart();

            }

        }
    );

}


/* =========================
   20. INITIALIZE WEBSITE
   ========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updatePrice();

        renderProducts();

        updateCartCount();

    }
);