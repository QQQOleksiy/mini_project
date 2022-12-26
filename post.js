let url = new URL(location.href)
let post_id = url.searchParams.get('post_id')

fetch(`//jsonplaceholder.typicode.com/posts/${post_id}`)
    .then(value => value.json())
    .then(value => {
        let div_spaceInfoPost = document.getElementById('space_user_post')
        let title_post = document.createElement('h2')
        title_post.classList.add('title_post')
        title_post.innerText = 'Post'
        div_spaceInfoPost.appendChild(title_post)

        function itin_obj (object, block){
            let infoPost = document.createElement('div')
            infoPost.classList.add('info_post')

            for (const key in object) {
                paramUser = document.createElement('div')
                if (typeof object[key] !== 'object'){
                    paramUser.innerText = (`${key}${':'} ${object[key]}`)
                    infoPost.appendChild(paramUser)
                }else if (typeof object[key] === 'object'){
                    itin_obj(object[key], infoPost)
                }
            }
            block.appendChild(infoPost)
        }
        itin_obj(value, div_spaceInfoPost)



        fetch(`//jsonplaceholder.typicode.com/posts/${post_id}/comments`)
            .then(value => value.json())
            .then(value => {
                console.log(value)
                let comments = document.createElement('div')
                comments.classList.add('comments')

                let h2_comment = document.createElement('h2')
                h2_comment.innerText = 'Comments'
                comments.appendChild(h2_comment)

                for (const comment of value) {
                    let div_comment = document.createElement('div')
                    div_comment.classList.add('comment')

                    let email_comment = document.createElement('div')
                    email_comment.classList.add('email')
                    email_comment.innerText = `${'Email:'} ${comment.email}`

                    let name_comment = document.createElement('div')
                    name_comment.classList.add('name_comment')
                    name_comment.innerHTML = `<b>${'Name:'}</b> ${comment.name}`

                    let body_comment = document.createElement('div')
                    body_comment.classList.add('body_comment')
                    body_comment.innerHTML = `<b>${'Body:'}</b> ${comment.body}`

                    div_comment.append(email_comment, name_comment, body_comment)
                    comments.appendChild(div_comment)
                }

                div_spaceInfoPost.appendChild(comments)
            })
    })