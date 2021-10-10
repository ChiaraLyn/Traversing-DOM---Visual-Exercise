
/*=============================================
=            GLOBALS            =
=============================================*/

/*----------  COLORS  ----------*/

let white = 'rgb(255, 255, 255)';
let black = 'rgb(0, 0, 0)';
let red = 'rgb(194, 4, 4)';
let blue = 'rgb(0, 0, 255)';
let green = 'rgb(0, 128, 0)';
let orange = 'rgb(255, 165, 0)';
let gray = 'rgb(218, 214, 214)';

/*----------  PARENT  ----------*/

const PARENT = document.getElementById('parent');
let PARENT_STYLE = PARENT.style;

// SPAN
const SPAN_PARENT = document.getElementById('code_parent');
let SPAN_PARENT_STYLE = SPAN_PARENT.style;
SPAN_PARENT_STYLE.display = 'none';

// BTN
const SEL_PARENT_BTN = document.getElementById('sel_parent');

/*---------- 01. Using Foreach  ----------*/

// Btns for foreach
const FIRST_FOREACH = document.getElementById('foreach_first');
const SECOND_FOREACH = document.getElementById('foreach_second');
const THIRD_FOREACH = document.getElementById('foreach_third');

// Span
const spanLoop = document.createElement('span');
const parentLoop = document.getElementById('foreach_wrapper');


/*----------  02. Children from Parent  ----------*/

// Wrappers
let firstWrapper = document.getElementById('first_wrapper');
let secondWrapper = document.getElementById('second_wrapper');
let thirdWrapper = document.getElementById('third_wrapper');

// BTNS
const BTN_FIRST_FROM_PARENT = document.getElementById('btn_first_from_parent');
const BTN_SECOND_FROM_PARENT = document.getElementById('btn_second_from_parent');
const BTN_THIRD_FROM_PARENT = document.getElementById('btn_third_from_parent');

// ELEMENTS

// FIRST CHILD --> See the different selections we can use:
//const FIRST_CHILD = document.querySelector('#first_child');
//const FIRST_CHILD = PARENT.firstElementChild;
const FIRST_CHILD = PARENT.children[0];

//Set First Child Style
let FIRST_CHILD_STYLE = FIRST_CHILD.style;


// SECOND CHILD --> See the different selections we can use:
//const SECOND_CHILD = document.querySelector('#second_child');
//const SECOND_CHILD = FIRST_CHILD.nextElementSibling;
const SECOND_CHILD = PARENT.children[1];

//Set Second Child Style
let SECOND_CHILD_STYLE = SECOND_CHILD.style;


// THIRD CHILD --> See the different selections we can use:
//const THIRD_CHILD = document.querySelector('#third_child');
//const THIRD_CHILD = SECOND_CHILD.nextElementSibling;
//const THIRD_CHILD = PARENT.lastElementChild;
const THIRD_CHILD = PARENT.children[2];

// Set Third Child Style
let THIRD_CHILD_STYLE = THIRD_CHILD.style;


/*----------  03. Parent from Children  ----------*/

// Wrappers
let firstWrapperFrom = document.getElementById('first_wrapper_from');
let secondWrapperFrom = document.getElementById('second_wrapper_from');
let thirdWrapperFrom = document.getElementById('third_wrapper_from');

// BTNS
const BTN_PARENT_FROM_FIRST = document.getElementById('btn_parent_from_first');
const BTN_PARENT_FROM_SECOND = document.getElementById('btn_parent_from_second');
const BTN_PARENT_FROM_THIRD = document.getElementById('btn_parent_from_third');

// ELEMENTS

// FROM FIRST --> See the different selections we can use:
//let PARENT_FROM_FIRST = FIRST_CHILD.parentElement;
//let PARENT_FROM_FIRST = FIRST_CHILD.parentNode;
let PARENT_FROM_FIRST = FIRST_CHILD.closest('#parent');

//Set Parent Style
let PARENT_FROM_FIRST_STYLE = PARENT_FROM_FIRST.style;


//FROM SECOND --> See the different selections we can use:
//let PARENT_FROM_SECOND = SECOND_CHILD.parentElement;
//let PARENT_FROM_SECOND = SECOND_CHILD.parentNode;
let PARENT_FROM_SECOND = SECOND_CHILD.closest('#parent');

//Set Parent Style
let PARENT_FROM_SECOND_STYLE = PARENT_FROM_SECOND.style;


//FROM THIRD --> See the different selections we can use:
//let PARENT_FROM_THIRD = THIRD_CHILD.parentElement;
//let PARENT_FROM_THIRD = THIRD_CHILD.parentNode;
let PARENT_FROM_THIRD = THIRD_CHILD.closest('#parent');

//Set Parent Style
let PARENT_FROM_THIRD_STYLE = PARENT_FROM_THIRD.style;

/* ################################################### */

// SELECT PARENT BTN LISTENER
selectParent();

/*=============================================
=       01. SELECT PARENT WITH FOREACH      =
=============================================*/

// FOREACH BTN ADD EVENT LISTENER
document.querySelectorAll('.btn_foreach').forEach(btn => {
  btn.addEventListener('click', () => {

    selectedParentBg(PARENT_STYLE, red);
    toggleBtn([SEL_PARENT_BTN, BTN_PARENT_FROM_FIRST, BTN_PARENT_FROM_SECOND, BTN_PARENT_FROM_THIRD]);

    // Attach span
    let appendedSpan = parentLoop.appendChild(spanLoop);
    if (appendedSpan.innerHTML === '') {
      appendedSpan.innerHTML = `document.querySelectorAll('.btn_foreach').forEach(btn => {
        btn.addEventListener('click', () => {`;
      spanLoop.style.marginTop = '1rem';
    } else {
      appendedSpan.innerHTML = '';
    }

    // Control btns text
    toggleBtnText(FIRST_FOREACH);
    toggleBtnText(SECOND_FOREACH);
    toggleBtnText(THIRD_FOREACH);

  }); // .eventListener
}); //.foreach

/*=============================================
=  02. CHILDREN FROM PARENT (or sibling)      =
=============================================*/

//Set default color for children
setDefaultClr(black, FIRST_CHILD, SECOND_CHILD, THIRD_CHILD);

// First Child from Parent
childFromParent(BTN_FIRST_FROM_PARENT, 'First', 'from_parent', firstWrapper, FIRST_CHILD_STYLE, 'document.querySelector(\'#first_child\')', 'PARENT.firstElementChild', 'PARENT.children[0]');

// Second Child from Parent
childFromParent(BTN_SECOND_FROM_PARENT, 'Second', 'from_parent', secondWrapper, SECOND_CHILD_STYLE, 'document.querySelector(\'#second_child\')', 'FIRST_CHILD.nextElementSibling', 'PARENT.children[1]');

// Third Child from Parent
childFromParent(BTN_THIRD_FROM_PARENT, 'Third', 'from_parent', thirdWrapper, THIRD_CHILD_STYLE, 'document.querySelector(\'#third_child\')', 'SECOND_CHILD.nextElementSibling', 'PARENT.lastElementChild', 'PARENT.children[2]');

/*=============================================
=          03. PARENT FROM CHILDREN           =
=============================================*/

//Set array of disabled btns when child btn is clicked:
let btnsToToggleFirst = [SEL_PARENT_BTN, BTN_PARENT_FROM_SECOND, BTN_PARENT_FROM_THIRD, FIRST_FOREACH, SECOND_FOREACH, THIRD_FOREACH];
let btnsToToggleSecond = [SEL_PARENT_BTN, BTN_PARENT_FROM_FIRST, BTN_PARENT_FROM_THIRD, FIRST_FOREACH, SECOND_FOREACH, THIRD_FOREACH];
let btnsToToggleThird = [SEL_PARENT_BTN, BTN_PARENT_FROM_FIRST, BTN_PARENT_FROM_SECOND, FIRST_FOREACH, SECOND_FOREACH, THIRD_FOREACH];

// Parent from First Child
parentFromChild(BTN_PARENT_FROM_FIRST, PARENT_FROM_FIRST_STYLE, blue, firstWrapperFrom, 'First', 'from_child', btnsToToggleFirst, 'FIRST_CHILD.parentElement', 'FIRST_CHILD.parentNode', 'FIRST_CHILD.closest(\'#parent\')');

// Parent from Second Child
parentFromChild(BTN_PARENT_FROM_SECOND, PARENT_FROM_SECOND_STYLE, green, secondWrapperFrom, 'Second', 'from_child', btnsToToggleSecond, 'SECOND_CHILD.parentElement', 'SECOND_CHILD.parentNode', 'SECOND_CHILD.closest(\'#parent\')');

// Parent from Third Child
parentFromChild(BTN_PARENT_FROM_THIRD, PARENT_FROM_THIRD_STYLE, orange, thirdWrapperFrom, 'Third', 'from_child', btnsToToggleThird, 'THIRD_CHILD.parentElement', 'THIRD_CHILD.parentNode', 'THIRD_CHILD.closest(\'#parent\')');

/*=============================================
=                FUNCTIONS                   =
=============================================*/

// SELECT PARENT
function selectParent() {
  SEL_PARENT_BTN.addEventListener('click', () => {

    // Toggle Btn Text  
    SEL_PARENT_BTN.innerHTML = SEL_PARENT_BTN.innerHTML == 'Select Parent' ? 'DeSelect Parent' : 'Select Parent';

    // Toggle Code visibility
    SPAN_PARENT_STYLE.display == 'none' ? SPAN_PARENT_STYLE.display = 'block' : SPAN_PARENT_STYLE.display = 'none';
    SPAN_PARENT_STYLE.marginTop = '1rem';

    selectedParentBg(PARENT_STYLE, red);

    toggleBtn([BTN_PARENT_FROM_FIRST, BTN_PARENT_FROM_SECOND, BTN_PARENT_FROM_THIRD, FIRST_FOREACH, SECOND_FOREACH, THIRD_FOREACH]);

  });
}

// SELECT CHILD FROM PARENT
function childFromParent(btn, textBtn, action, wrapper, btnStyle, ...stringsUl) {

  btn.addEventListener('click', () => {

    // Toggle Btn Text 
    toggleBtnText(btn, textBtn, action);

    // Toggle Code visibility creating ul
    manageUl(wrapper, ...stringsUl);

    // Toggle Color and BgColor
    setChildColors(btnStyle);

  });

}

// SELECT PARENT FROM CHILD
function parentFromChild(btn, parentFromStyle, color, wrapperFrom, btnText, action, btnsToToggle, ...stringsUl) {

  btn.addEventListener('click', () => {
    selectedParentBg(parentFromStyle, color);

    manageUl(wrapperFrom, ...stringsUl);

    toggleBtnText(btn, btnText, action);

    toggleBtn(btnsToToggle);
  });

}

/*----------  Utility Functions  ----------*/

// TOGGLE DISABLE BTN
function toggleBtn(btnType) {

  btnType.forEach(button => {
    if (button.disabled == true) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });

}

// TOGGLE BTNS TEXT
function toggleBtnText(btnType, childType, action) {

  if (!btnType.classList.contains('j_check')) {

    btnType.classList.add('j_check');

    if (action == 'from_parent') {
      btnType.innerHTML = `Select ${childType} Child from Parent`;

    } else if (action == 'from_child') {

      btnType.innerHTML = `Select Parent from ${childType} Child`;

    } else {
      // these are for foreach btns
      btnType.innerHTML = 'We all Select Parent using Foreach';
    }
  } else {
    btnType.classList.remove('j_check');

    if (action == 'from_parent') {
      btnType.innerHTML = `DeSelect ${childType} Child`;

    } else if (action == 'from_child') {
      btnType.innerHTML = `DeSelect Parent`;

    } else {
      // these are for foreach btns     
      btnType.innerHTML = 'We all Deselect Parent using Foreach';
    }
  }

}

// SET COLORS FOR PARENT WHEN SELECTED
function selectedParentBg(parentStyle, parentBackground) {
  // Toggle Parent Backround Color
  parentStyle.backgroundColor == parentBackground ? parentStyle.backgroundColor = white : parentStyle.backgroundColor = parentBackground;
}

// SET DEFAULT COLOR FOR CHILDREN
function setDefaultClr(color, ...childType) {

  childType.forEach(element => {
    element.style.color = color;
  });

}

// SET CHILDREN COLORS AND BACKGROUNDS
function setChildColors(childStyle) {

  if (childStyle === FIRST_CHILD_STYLE) {
    bgColor = blue;
  } else if (childStyle === SECOND_CHILD_STYLE) {
    bgColor = green;
  } else {
    bgColor = orange;
  }

  childStyle.backgroundColor == bgColor ? childStyle.backgroundColor = white : childStyle.backgroundColor = bgColor;
  childStyle.color == black ? childStyle.color = white : childStyle.color = black;
}

// CREATE UL TO SHOW TEXT
function manageUl(wrapper, ...selection) {

  //if there's not ul create it, if there is ul remove it
  if (wrapper.children.length == 1) {

    //create ul and li
    let ulTag = document.createElement('ul');

    //loop arguments (strings we need to insert in each li as text)
    selection.forEach(element => {
      //create li
      let liTag = document.createElement('li');
      //append li to ul
      ulTag.appendChild(liTag).appendChild(document.createTextNode(element))

    });

    //append ul to wrapper
    wrapper.appendChild(ulTag);

  } else {
    wrapper.children[1].remove();
  }

}


/*=============================================
=            TITLE/SIBLING            =
=============================================*/

//Elements
let title = document.getElementById('title');
let title_sib1 = title.nextElementSibling;
let title_sib2 = title.nextElementSibling.nextElementSibling;

//BTNS
let btn_title = document.getElementById('btn_title');
let btn_sib1 = document.getElementById('btn_sib1');
let btn_sib2 = document.getElementById('btn_sib2');

//Show text span
let span1 = document.getElementById('show_code1');
let span2 = document.getElementById('show_code2');
let span3 = document.getElementById('show_code3');


/*----------  EVENT LISTENERS  ----------*/

// click on title
renderTitle(btn_title, title, span1, btn_title, 'rgb(13, 202, 240)', `let title = document.getElementById('title')`, 'Select Title', 'Deselect Title');
// click on title direct sibling
renderTitle(btn_sib1, title_sib1, span2, btn_sib1, 'rgb(25, 135, 84)', `title.nextElementSibling`, 'Select Title Direct Sibling', 'Deselect Title Direct Sibling');
// click on title indirect sibling
renderTitle(btn_sib2, title_sib2, span3, btn_sib2, 'rgb(220, 53, 69)', `title.nextElementSibling.nextElementSibling`, 'Select Title Indirect Sibling', 'Deselect Title Indirect Sibling');


function renderTitle(mainBtn, title, span, btn, titleColor, spanText, btnTextSel, btnTextDes) {

  mainBtn.addEventListener('click', () => {
    //toggle title color
    title.style.color = title.style.color == titleColor ? title.style.color = black : title.style.color = titleColor;

    //show/hide text
    span.textContent = span.textContent == spanText ? span.textContent = '' : span.textContent = spanText;

    //toggle btn text
    btn.textContent = btn.textContent == btnTextSel ? btn.textContent = btnTextDes : btn.textContent = btnTextSel;
  })

}