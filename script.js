// открытие формы поиска
function search() {
    let elem = document.getElementById('search_form__txt');
    let style = getComputedStyle(elem);
    if (style.display === 'none') {
        document.getElementById('search_form__txt').style.display = 'block';
    } else if (style.display !== 'none') {
        document.getElementById('search_form__txt').style.display = 'none';
    }
}

// открытие скрытого меню
function btn_stock() {
    const mediaQuery = window.matchMedia('(max-width: 1920px)')
    const hover = document.querySelector('.btn_stock');
    let elem = document.getElementById('sub-nav');
    let style = getComputedStyle(elem);
    if (mediaQuery.matches) {
        if (style.display === 'none') {
            document.getElementById('sub-nav').style.display = 'block';
            document.getElementById('btn_sub-nav').style.background = 'url(./IMAGES/btn-close.svg)';
            hover.addEventListener('mouseover', () => { hover.style.background = 'url(./IMAGES/btn-close-hover.svg)'; });
            hover.addEventListener('mouseout', () => { hover.style.background = 'url(./IMAGES/btn-close.svg)'; });
        } else if (style.display !== 'none') {
            document.getElementById('sub-nav').style.display = 'none';
            document.getElementById('btn_sub-nav').style.background = 'url(./IMAGES/btn-stock.svg)';
            hover.addEventListener('mouseover', () => { hover.style.background = 'url(./IMAGES/btn-stock-hover.svg)'; });
            hover.addEventListener('mouseout', () => { hover.style.background = 'url(./IMAGES/btn-stock.svg)'; });
        }
    }


}
// открытие адаптивного меню
function btn_stock_adaptive() {
    const mediaQuery = window.matchMedia('(max-width: 992px)')
    let elem = document.getElementById('sub_nav_adaptive');
    let style = getComputedStyle(elem);
    if (mediaQuery.matches) {
        if (style.display === 'none') {
            document.getElementById('sub-nav').style.display = 'none';
            document.getElementById('sub_nav_adaptive').style.display = 'block';
            document.getElementById('btn_sub-nav').style.background = 'url(./IMAGES/btn-close.svg)';

        } else if (style.display !== 'none') {
            document.getElementById('sub-nav').style.display = 'none';
            document.getElementById('sub_nav_adaptive').style.display = 'none';
            document.getElementById('btn_sub-nav').style.background = 'url(./IMAGES/btn-stock.svg)';
        }
    }
}
// разворачивает подменю в адаптиве
function adaptive_arrow() {
    let elem = document.getElementById('sub_nav_adaptive_multiitem');
    let style = getComputedStyle(elem);
    if (style.display === 'none') {
        document.getElementById('sub_nav_adaptive_multiitem').style.display = 'block';
    } else if (style.display !== 'none') {
        document.getElementById('sub_nav_adaptive_multiitem').style.display = 'none';
    }
}
