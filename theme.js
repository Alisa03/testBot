const btn = document.querySelector("#theme")
const wrapper = document.querySelector(".wrapper")

// ! images
const mockup = document.querySelector(".mockup")
const themeIcons = document.querySelector('#themeIcons')
const bots = document.querySelector(".icons__bots")

const imgList = [
    {
        el: mockup,
        dark: 'img/mockupDark.webp',
        light: 'img/mockup.webp'
    },
    {
        el: themeIcons,
        dark: 'img/dark.svg',
        light: 'img/light.svg'
    },
    {
        el: bots,
        dark: 'img/botsDark.webp',
        light: 'img/bots.webp'
    }
]

const Images = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].el.src = (wrapper.classList.contains('dark-theme')) ? arr[i].dark : arr[i].light
    }
}

const changeTheme = () => {
    wrapper.classList.toggle('dark-theme');

    Images(imgList)
}

btn.addEventListener('click', changeTheme)