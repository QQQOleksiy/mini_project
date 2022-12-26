// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        let div_users = document.getElementById('users')
        for (const user of value) {
            let div_spaceUser = document.createElement('div')
            div_spaceUser.classList.add('user_space')

            let div_infoUser = document.createElement('div')
            div_infoUser.classList.add('user')

            let div_imgUser = document.createElement('div')
            div_imgUser.classList.add('img_user')
            let img = document.createElement('img')
            img.setAttribute('src', 'image/homer.png')
            div_imgUser.appendChild(img)

            let div_nameUser = document.createElement('div')
            div_nameUser.classList.add('name_user')
            div_nameUser.innerText = `${user.id} ${user.name} `

            let div_moreInfo = document.createElement('div')
            div_moreInfo.classList.add('more_info')

            let a = document.createElement('a')
            a.innerText = 'more'
            div_moreInfo.appendChild(a)
            a.setAttribute('href', `user-details.html?id=${user.id}`)


            div_infoUser.append(div_imgUser, div_nameUser, div_moreInfo)
            div_spaceUser.appendChild(div_infoUser)
            div_users.appendChild(div_spaceUser)
        }
    })