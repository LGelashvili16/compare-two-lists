let similarArr = [];

const input1 = document.querySelector('.input-1');
const btn1 = document.querySelector('.btn-1');
const list1 = document.querySelector('.list-1');

const listSimilar = document.querySelector('.list-similar');
const similarText = document.querySelector('.similar-text');

input1.addEventListener('keyup', e => {
  e.preventDefault();
  if (e.keyCode === 13) {
    btn1.click();
  }
});

if (input1.value == '') {
  btn1.setAttribute('disabled', '');
}

input1.addEventListener('input', () => {
  if (input1.value == '') {
    btn1.setAttribute('disabled', '');
  } else {
    btn1.disabled = false;
  }
});

btn1.addEventListener('click', () => {
  listSimilar.innerHTML = '';

  const removebtn = document.createElement('button');
  removebtn.classList.add('remove-1');
  removebtn.setAttribute('data-id-remove', `${list1.childElementCount + 1}`);
  removebtn.textContent = 'Remove';

  const p = document.createElement('p');
  p.classList.add('value-text-1');
  p.textContent = input1.value;

  const li = document.createElement('li');
  li.classList.add('li-1');
  li.setAttribute('data-id-li1', `${list1.childElementCount + 1}`);

  li.appendChild(p);
  li.appendChild(removebtn);
  list1.appendChild(li);

  similarArr = [];

  addSimilar();

  const getRemoveBtn = document.querySelectorAll('.remove-1');
  getRemoveBtn.forEach((elem, index) => {
    elem.onclick = () => {
      const removeElem = document.querySelectorAll('.li-1');
      removeElem.forEach(item => {
        if (item.getAttribute('data-id-li1') == index + 1) {
          item.remove();

          similarArr = [];
          listSimilar.innerHTML = '';
          addSimilar();

          if (similarArr.length > 0) {
            similarText.style.color = 'rgb(0, 255, 136)';
          } else {
            similarText.style.color = 'rgb(255, 0, 0)';
          }
        }
      });
    };
  });

  if (similarArr.length > 0) {
    similarText.style.color = 'rgb(0, 255, 136)';
  } else {
    similarText.style.color = 'rgb(255, 0, 0)';
  }
});

const input2 = document.querySelector('.input-2');
const btn2 = document.querySelector('.btn-2');
const list2 = document.querySelector('.list-2');

input2.addEventListener('keyup', e => {
  e.preventDefault();
  if (e.keyCode === 13) {
    btn2.click();
  }
});

if (input2.value == '') {
  btn2.setAttribute('disabled', '');
}

input2.addEventListener('input', () => {
  if (input2.value == '') {
    btn2.setAttribute('disabled', '');
  } else {
    btn2.disabled = false;
  }
});

btn2.addEventListener('click', () => {
  listSimilar.innerHTML = '';

  const removebtn = document.createElement('button');
  removebtn.classList.add('remove-2');
  removebtn.setAttribute('data-id-remove', `${list2.childElementCount + 1}`);
  removebtn.textContent = 'Remove';

  const p = document.createElement('p');
  p.classList.add('value-text-2');
  p.textContent = input2.value;

  const li = document.createElement('li');
  li.classList.add('li-2');
  li.setAttribute('data-id-li2', `${list2.childElementCount + 1}`);

  li.appendChild(p);
  li.appendChild(removebtn);
  list2.appendChild(li);

  similarArr = [];

  addSimilar2();

  const getRemoveBtn = document.querySelectorAll('.remove-2');
  getRemoveBtn.forEach((elem, index) => {
    elem.onclick = () => {
      const removeElem = document.querySelectorAll('.li-2');
      removeElem.forEach(item => {
        if (item.getAttribute('data-id-li2') == index + 1) {
          item.remove();
          similarArr = [];
          listSimilar.innerHTML = '';
          addSimilar2();

          if (similarArr.length > 0) {
            similarText.style.color = 'rgb(0, 255, 136)';
          } else {
            similarText.style.color = 'rgb(255, 0, 0)';
          }
        }
      });
    };
  });

  if (similarArr.length > 0) {
    similarText.style.color = 'rgb(0, 255, 136)';
  } else {
    similarText.style.color = 'rgb(255, 0, 0)';
  }
});

function addSimilar() {
  const getList1Items = document.querySelectorAll('.li-1');
  const getList2Items = document.querySelectorAll('.li-2');

  getList1Items.forEach(elem => {
    getList2Items.forEach(elem2 => {
      if (elem.textContent.slice(0, -6) == elem2.textContent.slice(0, -6)) {
        similarArr.push(elem);

        const similarLi = document.createElement('li');
        similarLi.classList.add('similar-li');
        similarLi.textContent = elem.textContent.slice(0, -6);

        listSimilar.appendChild(similarLi);
      }
    });
  });
}

function addSimilar2() {
  const getList1Items = document.querySelectorAll('.li-1');
  const getList2Items = document.querySelectorAll('.li-2');

  getList2Items.forEach(elem => {
    getList1Items.forEach(elem2 => {
      if (elem.textContent.slice(0, -6) == elem2.textContent.slice(0, -6)) {
        similarArr.push(elem);

        const similarLi = document.createElement('li');
        similarLi.classList.add('similar-li');
        similarLi.textContent = elem.textContent.slice(0, -6);

        listSimilar.appendChild(similarLi);
      }
    });
  });
}
