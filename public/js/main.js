var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
var formSearch = $('.item')
var boderInput = $('.input')
var contentInput = $('.input-item')
var textInput = $('.text__input')
var iconError = $('.list__error-icon')
var formSb = document.getElementById('register-form')
var inputEF = $('.item__content-input')
var errorEmail = $('.item__content-text.email')
var youName = $('.item__content-sub')

const from = {
    handleEvent: function(){
        const createNewAccount = $('.item__content-text.end')
        const getPassword = $('.item__content-text.email.hiden')
        const listFormAccount = $('.list__form')
        const onhineMenu = $('.item__content.end')      

        // click quên mật khẩu
        getPassword.onclick = (e) => {
            formSearch.classList.remove('next__login')
            inputEF.value = ''
            errorEmail.click()
        }

        // Ẩn menu
        listFormAccount.onclick = (e) => {
            onhineMenu.classList.toggle('active');
        }

        // click vào input
        boderInput.onclick = () => {
            inputEF.placeholder = ' ';
            inputEF.focus()
            inputEF.click()
            boderInput.classList.add('boder')
        }
        
        // click ra ngoài input
        inputEF.onblur = (e) => {
            from.blur(e)
        }

        // khi click submit
        formSb.onsubmit = (e) => {
            from.submit(e)
        }

        // Khi oninput
        inputEF.oninput = (e) => {
            iconError.style.display = 'none'
            boderInput.classList.add('boder')
            boderInput.classList.remove('boder-error')
            contentInput.innerHTML = ''
        }

        // Click quên email
        errorEmail.onclick = (e) => {
            this.headlerGetUser()
        }

        // XL hiể thi MK
        check__password.onclick = function(e){ 
            if(inputEF.getAttribute('type') == 'password'){
                inputEF.setAttribute('type', 'text')
                inputEF.focus()
                inputEF.click()
            }else{
                inputEF.focus()
                inputEF.click()
                inputEF.setAttribute('type', 'password')
            }
        }
    },
    
    // Xl blur ra ngoài input
    blur: function(e) {
        const valueInput = inputEF.value
        if(valueInput.trim() == ''){
            boderInput.classList.remove('boder')
            boderInput.classList.remove('boder-error')
            contentInput.innerHTML = ''
            iconError.style.display = 'none'
        }
    },

    // XL submit from
    submit: function(e) {
        e.preventDefault()
        const createAccount = $('.item__content-text.email')
        const formHeading = $('.item__content-heading')
        const formSearchUser = $('.item.search')
        var formNext = $('.item.next__login')
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regNumber = /^(0[234][0-9]{8}|1[89]00[0-9]{4})$/;
        const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;   
        const valueInput = inputEF.value
        if(formNext == null){
            if(valueInput.trim() == ''){
                this.focusInput(e)
                this.createError()
                contentInput.innerHTML = 'Không được để trống trường này !!!'
            }else if(!regNumber.test(valueInput.trim()) && !regex.test(valueInput.trim())) {
                this.createError()
                contentInput.innerHTML = 'Vui lòng nhập số điện thoại hoặc email !!!'
            }else if(formSearchUser == null){   
                formSearch.classList.add('next__login')  
                textInput.innerHTML = 'Nhập mật khẩu của bạn'
                formHeading.innerHTML = 'Xin Chào'
                youName.innerHTML = inputEF.value  
                inputEF.value = ''
                createAccount.innerHTML = 'Bạn quên mật khẩu ?'  
                inputEF.setAttribute('type', 'password')
                this.focusInput(e)
            }
            if(formSearchUser != null){
                if(valueInput.trim() == ''){
                    this.createError()
                    contentInput.innerHTML = 'Vui lòng nhập mật khẩu của bạn !!!'
                }else if(!regNumber.test(valueInput.trim()) && !regex.test(valueInput.trim())){
                    this.createError()
                    contentInput.innerHTML = 'Vui lòng nhập số điện thoại hoặc email  !!!'
                    this.focusInput(e)
                }else{
                    formSb.submit()
                }    
            }
        }
        if(formNext != null) {
            if(inputEF.getAttribute('type') == 'password' || inputEF.getAttribute('type') == 'text'){
                if(valueInput.trim() == ''){
                    this.createError()
                    contentInput.innerHTML = 'Vui lòng nhập mật khẩu của bạn !!!'
                }else if(!regExp.test(valueInput.trim())){
                    this.createError()
                    contentInput.innerHTML = 'Mật khẩu không chính xác !!!'
                    this.focusInput(e)
                }else{
                    formSb.submit()
                }    
                blur(e)
            }  
        }
    },

    // xl báo lỗi phải 
    createError: function(){
        boderInput.classList.remove('boder')
        boderInput.classList.add('boder-error')
        const createError = $('.input.boder-error')
        if(createError != null){
            iconError.style.display = 'block'
        }
    },

    // XL quên Mk or Quên Email
    headlerGetUser: function() {
        inputEF.value = ''
        const formHeading = $('.item__content-heading')
        formSearch.classList.add('search')
        inputEF.setAttribute('type', 'text')
        inputEF.focus()
        inputEF.click()
        boderInput.classList.remove('boder-error')
        contentInput.innerHTML = ' '
        formHeading.innerHTML = 'Tìm Email của bạn'
        youName.innerHTML = 'Nhập Email hoặc số điện thoại khôi phục'
        textInput.innerHTML = 'Số điện thoại hoặc email'
    },

    // XL focus input
    focusInput: function(e) {
        e.preventDefault()
        inputEF.focus()
        inputEF.click()
    },

    start: function() {
        this.handleEvent()
    }
}
from.start()