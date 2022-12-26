let url = new URL(location.href)
let id_user = url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${id_user}`)
    .then(value => value.json())
    .then(value => {
        let div_spaceInfoUser = document.getElementById('space_user_info')
        function itin_obj (object, block){
            let infoUser = document.createElement('div')
            infoUser.classList.add('info_user')

            for (const key in object) {
                paramUser = document.createElement('div')
                if (typeof object[key] !== 'object'){
                    paramUser.innerText = (`${key}${':'} ${object[key]}`)
                    infoUser.appendChild(paramUser)
                }else if (typeof object[key] === 'object'){
                    itin_obj(object[key], infoUser)
                }
            }
            block.appendChild(infoUser)
        }

        let info_img_user = document.createElement('div')
        info_img_user.classList.add('info_img_user')

        let spaceImgUser = document.createElement('div')
        spaceImgUser.classList.add('img_user')

        let imgUser = document.createElement('img')
        imgUser.setAttribute('src','image/homer.png')

        itin_obj(value, info_img_user)

        let div_posts_button = document.createElement('div')
        div_posts_button.classList.add('posts_button')

        let post_href = document.createElement('a')
        post_href.innerText = 'posts'
        div_posts_button.appendChild(post_href)

        info_img_user.appendChild(spaceImgUser)
        spaceImgUser.appendChild(imgUser)
        div_spaceInfoUser.append(info_img_user, div_posts_button)

        fetch(`https://jsonplaceholder.typicode.com/users/${id_user}/posts`)
            .then(value => value.json())
            .then(value => {
                let div_spaceInfoUser = document.getElementById('space_user_info')

                let posts = document.createElement('div')
                posts.classList.add('posts')
                function add_post(block) {

                    for (const valuePost of value) {
                        let post = document.createElement('div')
                        post.classList.add('post')

                        let post_title = document.createElement('div')
                        post_title.classList.add('post_title')
                        post_title.innerText = `${valuePost.title}`

                        let post_body = document.createElement('div')
                        post_body.classList.add('post_body')
                        post_body.innerText = `${valuePost.body}`

                        let post_button_more = document.createElement('div')
                        post_button_more.classList.add('posts_button')

                        let post_text = document.createElement('a')
                        post_text.setAttribute('href', `post-details.html?post_id=${valuePost.id}`)
                        post_text.innerText = 'more'
                        post_button_more.appendChild(post_text)


                        post.append(post_title, post_body, post_button_more)

                        posts.appendChild(post)
                    }
                    block.appendChild(posts)
                }
                add_post(div_spaceInfoUser)
                let display_post = posts.style.display = 'none'
                div_posts_button.onclick = () =>{
                    if (display_post === 'none'){
                        display_post = posts.style.display = 'block'
                    }else if (display_post === 'block'){
                        display_post = posts.style.display = 'none'
                    }
                }
            })
    })

