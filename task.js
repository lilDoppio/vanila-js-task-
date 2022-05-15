const container = document.querySelector('#rec441519115 > div > div > div.t396__filter');

let div = document.createElement('div');
div.className = 'blocks-holder';
Object.assign(div.style, {
  display: 'flex',
});

container.insertBefore(div, container.firstChild);

const firstArray = [
  { title: 'Левый верхний угол', element: 'input', type: 'text', placeholder: 'Введите...' },
  { title: 'Правый верхний угол', element: 'input', type: 'text', placeholder: 'Введите...' },
  { title: 'Правый нижний угол', element: 'input', type: 'text', placeholder: 'Введите...' },
  { title: 'Левый нижний угол', element: 'input', type: 'text', placeholder: 'Введите...' },
];

const secondArray = [
  {
    title: 'Процент увеличения (без %)',
    element: 'input',
    type: 'text',
    placeholder: 'Введите...',
  },
];

let block = document.createElement('div');
block.className = 'first-block';
changingBlockStyle(block);

let input = document.createElement('input');
input.className = 'input';
input.type = 'text';
input.name = 'main';
input.placeholder = 'Введите...';
changingInputStyle(input);

let select = document.createElement('select');
let allOption = select.options;
allOption[allOption.length] = new Option('Скруглять', 'Скруглять', true);
allOption[allOption.length] = new Option('Менять размер', 'Менять размер', true);

let info = document.createElement('div');
info.textContent = 'Инструкция: Введите или выберите команду, заполните поля, нажмите на куб.';

block.append('По клику');
block.append(input);
block.append(select);
block.append(info);

div.insertBefore(block, div.firstChild);

let mainInput = document.getElementsByTagName('input')[0];
let mainSelect = document.getElementsByTagName('select')[0];

mainSelect.onchange = () => {
  mainInput.value = mainSelect.value;
  selector();
};

mainInput.onchange = () => {
  selector();
};

function selector() {
  let allBlocks = document.getElementsByClassName('block');

  if (mainInput.value.toLowerCase() === 'скруглять') {
    Object.values(allBlocks).forEach((e) => e.remove());

    changeBlocksHolder(firstArray);

    const elm = document.querySelector(
      '#rec441519115 > div > div > div.t396__elem.tn-elem.tn-elem__4415191151470210224069 > div',
    );
    let count = 0;
    elm.onclick = function () {
      elm.style.borderRadius = '';
      count++;
      let currentCase = count % 4;
      let fisrtAngle = document.getElementsByTagName('input')[1].value;
      let secondAngle = document.getElementsByTagName('input')[2].value;
      let thirdAngle = document.getElementsByTagName('input')[3].value;
      let fourthAngle = document.getElementsByTagName('input')[4].value;
      switch (currentCase) {
        case 0:
          elm.style.borderBottomLeftRadius = `${fisrtAngle}%`;
          break;
        case 1:
          elm.style.borderTopLeftRadius = `${secondAngle}%`;
          break;
        case 2:
          elm.style.borderTopRightRadius = `${thirdAngle}%`;
          break;
        case 3:
          elm.style.borderBottomRightRadius = `${fourthAngle}%`;
          break;
        default:
          alert('Что-то пошло не так');
      }
    };
  } else if (mainInput.value.toLowerCase() === 'менять размер') {
    Object.values(allBlocks).forEach((e) => e.remove());

    changeBlocksHolder(secondArray);

    const elm = document.querySelector(
      '#rec441519115 > div > div > div.t396__elem.tn-elem.tn-elem__4415191151470210224069 > div',
    );
    let computedStyle = getComputedStyle(elm);
    let width = parseInt(computedStyle.width);
    let height = parseInt(computedStyle.height);
    elm.onclick = function (event) {
      let size = parseInt(document.getElementsByTagName('input')[1].value);

      if (parseInt(elm.style.height) === height) {
        Object.assign(elm.style, {
          height: `${height + height * (size / 100)}px`,
          minWidth: `${width + width * (size / 100)}px`,
        });
      } else {
        Object.assign(elm.style, {
          height: `${height}px`,
          minWidth: `${width}px`,
        });
      }
    };
  }
}

function changeBlocksHolder(array) {
  array.map((elm) => {
    let block = document.createElement('div');

    block.className = 'block';
    changingBlockStyle(block);

    let input = document.createElement(elm.element);
    input.className = 'input';
    changingInputStyle(input);

    input.type = elm.type;
    input.name = elm.name;
    input.placeholder = elm.placeholder;

    block.append(elm.title);
    block.append(input);

    div.after(block);
  });
}

function changingBlockStyle(block) {
  Object.assign(block.style, {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    fontSize: '14px',
    margin: '10px 20px',
  });
}

function changingInputStyle(input) {
  Object.assign(input.style, {
    border: '2px solid #0048ff',
    borderRadius: '4px',
    width: '200px',
    fontSize: '16px',
    padding: '5px 10px',
  });
}
