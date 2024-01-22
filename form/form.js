// <?php include ('contact_form-templates.php')?>

const firstTemp = (container = '', data = []) => {
  const dataForm = data;

  const namePattern = '^[а-яА-ЯёЁa-zA-Z0-9]+$';
  const emailMinLength = 8;
  const emailMaxLength = 30;
  const phonePattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
  const phoneMinLength = 12;
  const phoneMaxLength = 12;

  container.innerHTML = `
              <div id="personal_info_wrapper" class="personal_info_wrapper">
                  <h2 class="title">Personal info</h2>
                  <p class="description">Please provide your name, email address, and phone number.</p>
                  <label>Name <input required placeholder="e.g your name" pattern="${namePattern}" minlength="4" maxlength="30" type="text" class="text" name="name" id="name" value="${
    dataForm.name ? dataForm.name : ''
  }" /></label>
                  <label>Email Address<input placeholder="e.g yourmail@lorem.com" required type="email" class="text" name="email" minlength="${emailMinLength}" maxlength="${emailMaxLength}" id="email" value="${
    dataForm.email ? dataForm.email : ''
  }"/></label>
                  <label>Phone Number<input placeholder="e.g 123-456-7890" pattern="${phonePattern}" minlength="${phoneMinLength}" maxlength="${phoneMaxLength}" type="tel" class="text" name="phone" id="phone" value="${
    dataForm.phone ? dataForm.phone : ''
  }" required /></label>
                  <p aria-live="polite" id="errorContainer"></p>
                  <div class="btn_wrapper">
                      <button class="unActive" id="btn_next_step" onclick="onCLickBtnNext(num = 1)" type="submit">Next Step</button>
                  </div>
              </div>
          `;
};

const secondTemp = (container = '', firstPrice = '', secondPrice = '', thirdPrice = '') => {
  container.innerHTML = `
               <div class="select_plan_wrapper">
                  <h2 class="title">Select your plan</h2>
                  <p class="description">You have the option of monthly or yearly billing.</p>
                  <fieldset class="plan_wrapper" id="plane">
                  <label>
                      <div class="svg"></div>
                      <p>Arcade</p>
                      <p>$${firstPrice}/yr</p>
                      <p>2 mounth free</p>
                      <input price='${firstPrice}' type="radio" id="arcade" name="plane" value="arcade" />
                      <span class="checkmark"></span>
                  </label>
  
                  <label>
                      <div class="svg"></div>
                      <p>Advanced</p>
                      <p>$${secondPrice}/yr</p>
                      <p>2 mounth free</p>
                      <input price='${secondPrice}'  type="radio" id="advanced" name="plane" value="advanced" />
                      <span class="checkmark"></span>
                  </label>
  
                  <label>
                      <div class="svg"></div><p>Pro</p>
                      <p>$${thirdPrice}/yr</p>
                      <p>2 mounth free</p>
                      <input price='${thirdPrice}' type="radio" id="pro" name="plane" value="pro" />
                      <span class="checkmark"></span>
                  </label>
  
                  <div class="btn_wrapper">
                  <button id="btn_prev_step" onclick="onCLickBtnPrev(num = 2)" type="submit">Go back</button>
                  <button id="btn_next_step" class="unActive" onclick="onCLickBtnNext(num = 2)" type="submit">Next Step</button>
                  </div>
                  </fieldset>
               </div> `;
};

const thirdTemp = (container = '', firstPrice = '', secondPrice = '', thirdPrice = '') => {
  container.innerHTML = `
  
                  <h2 class="title">Pick add-ons</h2>
                  <p class="description">Add-ons help enhance your gaming experience.</p>
                  <fieldset class="pick_add" id="pick_add">
                      <label>
                          <div class="desc_wrap">
                              <p>Online service</p>
                              <p>Acess to multiplayer games</p>
                          </div>
                          <input type="radio" id="arcade" name="addOns" value="acess" />
                              <span class="checkmark"></span>
                          <p>$${firstPrice}/yr</p>
                      </label>
  
                      <label>
                          <div class="desc_wrap">
                              <p>Larger storage</p>
                              <p>Extra 1TP of cloud save</p>
                          </div>
                          <input type="radio" id="advanced" name="addOns" value="extra" />
                          <span class="checkmark"></span>
                          <p>$${secondPrice}/yr</p>
                      </label>
  
                      <label>
                          <div class="desc_wrap">
                              <p>Customizable profile</p>
                              <p>Custom theme on your profile</p>
                          </div>
                          <input type="radio" id="pro" name="addOns" value="custom" />
                          <span class="checkmark"></span>
                          <p>$${thirdPrice}/yr</p>
                      </label>
  
                      <div class="btn_wrapper">
                          <button id="btn_prev_step" onclick="onCLickBtnPrev(num = 3)" type="submit">Go Back</button>
                          <button id="btn_next_step" class="unActive" onclick="onCLickBtnNext(num = 3)" type="submit">Next Step</button>
                      </div>
                  </fieldset>`;
};

const fourthTemp = (container = '', data = []) => {
  const dataForm = data;

  container.innerHTML = `
              <h2 class="title">Finish up</h2>
              <p class="description">Double-check everything looks OK before confirming.</p>
              <div class="finish_wrapper">
                  <div class="container_price">
                      <div class="price_wrapper">
                          <p>${dataForm.plane.name}</p>
                          <p>$${dataForm.plane.price}/yr</p>
                      </div>
                      <div class="price_wrapper">
                          <p>${dataForm.addOns.name}</p>
                          <p>$${dataForm.addOns.price}/yr</p>
                      </div>
                  </div>
                  <div class="price_wrapper">
                      <p>total(per year)</p>
                      <p>$${dataForm.plane.price + dataForm.addOns.price}/yr</p>
                  </div>
              </div>
              <div class="btn_wrapper">
                  <button id="btn_prev_step" onclick="onCLickBtnPrev(num = 4)" type="submit">Go back</button>
                  <button id="btn_next_step" onclick="onCLickBtnNext(num = 4)" type="submit">Confirm</button>
              </div>`;
};

const contactForm = document.getElementById('contact_form'); // извлекаем элемент формы
const test = document.querySelectorAll('.step');

let dataForm = [];

const renderForm = (id = '') => {
  const checkState = () => {
    const check = document.querySelector('input:checked');
    if (check) {
      document.getElementById('btn_next_step').classList.remove('unActive');
    }
  };

  if (id === 'contact_form_num_1') {
    firstTemp(contactForm, dataForm); // firstTemplate in contact_form-templates.php

    // const dataForm = data;

    // const namePattern = '^[а-яА-ЯёЁa-zA-Z0-9]+$';
    // const emailMinLength = 8;
    // const emailMaxLength = 30;
    // const phonePattern = '[0-9]{3}-[0-9]{3}-[0-9]{4}';
    // const phoneMinLength = 12;
    // const phoneMaxLength = 12;

    // contactForm.innerHTML = `
    //         <div id="personal_info_wrapper" class="personal_info_wrapper">
    //             <h2 class="title">Personal info</h2>
    //             <p class="description">Please provide your name, email address, and phone number.</p>
    //             <label>Name <input required placeholder="e.g your name" pattern="${namePattern}" minlength="4" maxlength="30" type="text" class="text" name="name" id="name" value="${
    //   dataForm.name ? dataForm.name : ''
    // }" /></label>
    //             <label>Email Address<input placeholder="e.g yourmail@lorem.com" required type="email" class="text" name="email" minlength="${emailMinLength}" maxlength="${emailMaxLength}" id="email" value="${
    //   dataForm.email ? dataForm.email : ''
    // }"/></label>
    //             <label>Phone Number<input placeholder="e.g 123-456-7890" pattern="${phonePattern}" minlength="${phoneMinLength}" maxlength="${phoneMaxLength}" type="tel" class="text" name="phone" id="phone" value="${
    //   dataForm.phone ? dataForm.phone : ''
    // }" required /></label>
    //             <p aria-live="polite" id="errorContainer"></p>
    //             <div class="btn_wrapper">
    //                 <button class="unActive" id="btn_next_step" onclick="onCLickBtnNext(num = 1)" type="submit">Next Step</button>
    //             </div>
    //         </div>
    //     `;

    const wrapper = document.getElementById('personal_info_wrapper');
    const error = document.getElementById('errorContainer');

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    const btnActive = () => {
      if (name.validity.valid && email.validity.valid && phone.validity.valid) {
        document.getElementById('btn_next_step').classList.remove('unActive');
      } else {
        document.getElementById('btn_next_step').classList.add('unActive');
      }
    };

    wrapper.addEventListener('input', e => {
      // try {
      //     if (!name.validity.valid || !email.validity.valid || !phone.validity.valid) {
      //         if (!name.validity.valid) {
      //             if (name.validity.valueMissing) {
      //                 error.textContent = "You need to enter an name.";
      //                 error.className = "error warning";
      //                 e.preventDefault();
      //             } else if (name.validity.tooShort) {
      //                 error.textContent = `Name should be at least ${name.minLength} characters; you entered ${name.value.length}.`;
      //                 error.className = "error active";
      //                 e.preventDefault();
      //             } else if (name.validity.patternMismatch) {
      //                 error.textContent = `only letters and numbers`;
      //                 error.className = "error active";
      //
      //             } else {
      //                 error.textContent = "";
      //                 error.className = "error";
      //             }
      //         }
      //
      //         if (!email.validity.valid) {
      //             if (email.validity.valueMissing) {
      //                 error.textContent = "You need to enter an email.";
      //                 error.className = "error warning";
      //                 e.preventDefault();
      //             } else if (email.validity.typeMismatch) {
      //                 error.textContent = "Entered value needs to be an email address.";
      //                 error.className = "error active";
      //                 e.preventDefault();
      //             } else if (email.validity.tooShort) {
      //                 error.textContent = `email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
      //                 error.className = "error active";
      //                 e.preventDefault();
      //             } else {
      //                 error.textContent = "";
      //                 error.className = "error";
      //             }
      //         }
      //
      //         if (!phone.validity.valid) {
      //             if (phone.validity.valueMissing) {
      //                 error.textContent = "You need to enter an phone.";
      //                 error.className = "error warning";
      //                 e.preventDefault();
      //             } else if (phone.validity.patternMismatch) {
      //                 error.textContent = `patternMismatch 123-456-7890!`;
      //                 error.className = "error active";
      //                 e.preventDefault();
      //             } else {
      //                 error.textContent = "";
      //                 error.className = "error";
      //             }
      //         }
      //     }
      //     btnActive();
      // } catch (error) {
      //     console.log('error in "piw.addEventListener" :', error.message);
      // }
      try {
        switch (!name.validity.valid || !email.validity.valid || !phone.validity.valid) {
          case !name.validity.valid:
            if (name.validity.valueMissing) {
              error.textContent = 'You need to enter an name.';
              error.className = 'error warning';
              e.preventDefault();
            } else if (name.validity.tooShort) {
              error.textContent = `Name should be at least ${name.minLength} characters; you entered ${name.value.length}.`;
              error.className = 'error active';
              e.preventDefault();
            } else if (name.validity.patternMismatch) {
              error.textContent = `only letters and numbers`;
              error.className = 'error active';
            } else {
              error.textContent = '';
              error.className = 'error';
            }
            break;

          case !email.validity.valid:
            if (email.validity.valueMissing) {
              error.textContent = 'You need to enter an email.';
              error.className = 'error warning';
              e.preventDefault();
            } else if (email.validity.typeMismatch) {
              error.textContent = 'Entered value needs to be an email address.';
              error.className = 'error active';
              e.preventDefault();
            } else if (email.validity.tooShort) {
              error.textContent = `email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
              error.className = 'error active';
              e.preventDefault();
            } else {
              error.textContent = '';
              error.className = 'error';
            }
            break;

          case !phone.validity.valid:
            if (phone.validity.valueMissing) {
              error.textContent = 'You need to enter an phone.';
              error.className = 'error warning';
              e.preventDefault();
            } else if (phone.validity.patternMismatch) {
              error.textContent = `patternMismatch 123-456-7890!`;
              error.className = 'error active';
              e.preventDefault();
            } else {
              error.textContent = '';
              error.className = 'error';
            }
            break;

          default:
            break;
        }
        btnActive();
      } catch (error) {
        console.log('error in "piw.addEventListener" :', error.message);
      }
    });

    btnActive();

    const btnNextStep = document.getElementById('btn_next_step');

    btnNextStep.addEventListener('click', e => {
      e.preventDefault();
      const formData = new FormData(contactForm); // создаём объект FormData, передаём в него элемент формы
      const inputValid = document.querySelector('input:valid');

      if (inputValid) {
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');

        dataForm = {
          name: dataForm.name ? dataForm.name : name,
          email: dataForm.email ? dataForm.email : email,
          phone: dataForm.phone ? dataForm.phone : phone,
          plane: dataForm.plane ? dataForm.plane : '',
          addOns: dataForm.addOns ? dataForm.addOns : '',
        };

        console.log('dataForm :', dataForm);
        renderForm('contact_form_num_2');
      } else {
      }
    });
  }
  if (id === 'contact_form_num_2') {
    const arcadePrice = 90;
    const advancedPrice = 120;
    const proPrice = 150;

    secondTemp(contactForm, arcadePrice, advancedPrice, proPrice); // secondTemplate in contact_form-templates.php

    const planeActive = dataForm.plane ? dataForm.plane.name : '';

    switch (planeActive) {
      case 'pro':
        document.getElementById('pro').setAttribute('checked', 'checked');
        break;
      case 'advanced':
        document.getElementById('advanced').setAttribute('checked', 'checked');
        break;
      case 'arcade':
        document.getElementById('arcade').setAttribute('checked', 'checked');
        break;
      default:
        break;
    }

    checkState(); //check input required

    const btnNextStep = document.getElementById('btn_next_step');
    const planContainer = document.getElementById('plane');
    planContainer.addEventListener('change', e => {
      e.preventDefault();
      checkState();
    });

    btnNextStep.addEventListener('click', e => {
      const inputInvalid = document.querySelector('input:invalid');

      if (!inputInvalid) {
        const formData = new FormData(contactForm); // создаём объект FormData, передаём в него элемент формы

        let planePrice;
        switch (formData.get('plane')) {
          case 'arcade':
            planePrice = arcadePrice;
            break;
          case 'advanced':
            planePrice = advancedPrice;
            break;
          case 'pro':
            planePrice = proPrice;
            break;

          default:
            break;
        }

        const newDataForm = {
          name: dataForm.name,
          email: dataForm.email,
          phone: dataForm.phone,
          plane: {
            name: formData.get('plane'),
            price: planePrice,
          },
        };

        dataForm = newDataForm;
        console.log('data', dataForm);
        renderForm('contact_form_num_3');
      }
    });
  }
  if (id === 'contact_form_num_3') {
    const onlineServicePrice = 10;
    const lagerStoragePrice = 20;
    const customizeProfilePrice = 20;

    thirdTemp(contactForm, onlineServicePrice, lagerStoragePrice, customizeProfilePrice); //thirdTemplate in contact_form-templates.php

    const dataAdds = dataForm.addOns ? dataForm.addOns.name : '';

    switch (dataAdds) {
      case 'acess':
        document.getElementById('arcade').setAttribute('checked', 'checked');
        break;
      case 'extra':
        document.getElementById('advanced').setAttribute('checked', 'checked');
        break;
      case 'custom':
        document.getElementById('pro').setAttribute('checked', 'checked');
        break;
      default:
        break;
    }

    checkState();

    const btnNextStep = document.getElementById('btn_next_step');

    const pick_addContainer = document.getElementById('pick_add');
    pick_addContainer.addEventListener('change', e => {
      e.preventDefault();
      checkState();
    });

    btnNextStep.addEventListener('click', e => {
      const inputInvalid = document.querySelector('input:invalid');
      // e.preventDefault();

      if (!inputInvalid) {
        const formData = new FormData(contactForm); // создаём объект FormData, передаём в него элемент формы
        let price;

        switch (formData.get('addOns')) {
          case 'acess':
            price = onlineServicePrice;
            break;
          case 'extra':
            price = lagerStoragePrice;
            break;
          case 'custom':
            price = customizeProfilePrice;
            break;
          default:
            break;
        }

        const newDataForm = {
          name: dataForm.name,
          email: dataForm.email,
          phone: dataForm.phone,
          plane: dataForm.plane,
          addOns: {
            name: formData.get('addOns'),
            price: price,
          },
        };

        dataForm = newDataForm;
        console.log('dataForm', dataForm);
        renderForm('contact_form_num_4');
      }
    });
  }
  if (id === 'contact_form_num_4') {
    fourthTemp(contactForm, dataForm);

    const btnNextStep = document.getElementById('btn_next_step');

    btnNextStep.addEventListener('click', e => {
      contactForm.innerHTML =
        `<div style="text-align: center">` +
        '<h2 class="title">Thank you!</h2>' +
        '<p class="description">Thancks for confirming your subscription! We hope you have fun using our platform. If you ever need support,please fell free to email us at sopport@liremgaming.com.</p>' +
        `</div>`;
      console.table('data', dataForm);
    });
  }
};

const onCLickBtnNext = (num = '') => {
  const inputValid = document.querySelector('input:valid');
  if (inputValid) {
    const firstItem = document.getElementById(`contact_form_num_${num}`);
    const secondItem = document.getElementById(`contact_form_num_${num + 1}`);

    firstItem.removeAttribute('active');
    firstItem.children[0].classList.toggle('active');

    secondItem.setAttribute('active', 'true');
    secondItem.children[0].classList.toggle('active');
  }
};

const onCLickBtnPrev = (num = '') => {
  const firstItem = document.getElementById(`contact_form_num_${num}`);
  const secondItem = document.getElementById(`contact_form_num_${num - 1}`);

  secondItem.setAttribute('active', 'true');
  secondItem.children[0].classList.toggle('active');

  firstItem.removeAttribute('active');
  firstItem.children[0].classList.toggle('active');

  renderForm(`contact_form_num_${num - 1}`);
};

renderForm();

test.forEach(item => {
  const active = item.getAttribute('active');
  if (active) {
    const id = item.getAttribute('id');
    renderForm(id);
  }
});
