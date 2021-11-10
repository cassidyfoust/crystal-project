import './form.css';
import Person from './Person.png';
import Phone from './Phone.png';
import Email from './Email.png';

function Form() {
  return (
    <div class="form">
        <label for="name" class="label">YOUR NAME</label>
          <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <img src={Person}/>
          </span>
          <input type="text" class="form-control" placeholder="Enter your full name" id="name"/>
          </div>
          <label for="email" class="label">E-MAIL ADDRESS</label>
          <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <img src={Phone}/>
          </span>
          <input type="text" class="form-control" placeholder="Enter your E-mail address" id="email"/>
</div>
<label for="phone" class="label">PHONE NUMBER</label>
          <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <img src={Email}/>
          </span>
          <input type="text" class="form-control" placeholder="Enter your phone number" id="phone"/>
</div>
<div class="increment-button-wrapper">
<div class="input-group mb-3 increment-buttons">
  <button class="btn btn-left btn-outline-secondary" type="button">-</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons"/>
  <button class="btn btn-right btn-outline-secondary" type="button">+</button>
</div>
<div class="input-group mb-3 increment-buttons">
  <button class="btn btn-left btn-outline-secondary" type="button">-</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons"/>
  <button class="btn btn-right btn-outline-secondary" type="button">+</button>
</div>
<div class="input-group mb-3 increment-buttons">
  <button class="btn btn-left btn-outline-secondary" type="button">-</button>
  <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons"/>
  <button class="btn btn-right btn-outline-secondary" type="button">+</button>
</div>
</div>
    </div>
  );
}

export default Form;
