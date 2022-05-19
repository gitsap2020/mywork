const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('emailId');
const password=document.getElementById('password');
const phonenumber=document.getElementById('phone');
form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    checkInputs();
});
function checkInputs()
{
const usernamevalue=username.value.trim();
const emailvalue=email.value.trim();
const passwordvalue=password.value.trim();
const confirmpasswordvalue=confirmpassword.value.trim();

if(usernamevalue=='')
{
    setErrorFor(username,'username cannot be blank');
}
else
{
    setSuccessFor(username);
}
if(emailvalue=='')
{
    setErrorFor(email,'email cannot be blank');
}
else if(!isEmail(emailvalue))
{
    setErrorFor(email,'email is not valid');
}
else
{
    setSuccessFor(email);
}
if(passwordvalue=='')
{
    setErrorFor(password,'Password cannot be blank');
}
else if(!isEmail(passwordvalue))
{
    setErrorFor(password,'Must contain atleast one number,one uppercase,one lowercase and 8 or more characters');
}
else
{
    setSuccessFor(password);
}
if(confirmpasswordvalue=='')
{
    setErrorFor(confirmpassword,'This field is Required');
}
else if(passwordvalue!=confirmpasswordvalue)
{
    setErrorFor(confirmpassword,'Password does not match');
}
else
{
    setSuccessFor(confirmpassword);
}
}
function setErrorFor(input,message)
{
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    small.innerText=message;
    formControl.className='form-control error';
}
function setSuccessFor(input)
{
    const formControl=input.parentElement;
    formControl.className='form-control success';
}
function isEmail(email)
{
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPassword(password)
{
    return /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}/.test(email);
}
