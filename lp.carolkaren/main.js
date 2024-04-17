function getProjects(){
    const urlGitHub = 'https://github.com/carollkaren/html_css'


fetch( urlGitHub, {
    method: 'GET'
})

    .then((response) => response.json())
    .then((response) => {
        showProjects(response)
    })
    .catch((e) => {
        console.log(e)
    })

}

function showProjects(data){

}

getProjects()