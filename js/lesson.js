// REG EXP
const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('#phoneCheck')
const phoneResult = document.querySelector('.phoneResult')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

// TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block')
const tabsParent = document.querySelector('.tab_content_items')
const tabs = document.querySelectorAll('.tab_content_item')

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tab_content_item_active')
}

let currentIndex = 0
let intervalId

const switchTab = () => {
    hideTabContent();
    currentIndex = currentIndex + 1
    if (currentIndex === tabContent.length) {
        currentIndex = 0
    }
    showTabContent(currentIndex)
}

intervalId = setInterval(switchTab, 3000)

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

// MODAL
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''

}

const openEndScroll = () => {
    const scrollPosition = document.documentElement.scrollTop
    const windowHeight = window.innerHeight
    const fullHeight = document.documentElement.scrollHeight

    if (scrollPosition + windowHeight >= fullHeight) {
        openModal()
    }
}

window.addEventListener('scroll', openEndScroll)
setTimeout(openModal, 10000)
modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal()