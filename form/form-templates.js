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
