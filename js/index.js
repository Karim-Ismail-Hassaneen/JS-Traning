const theInput = document.querySelector(".get-repos input");
const getBtn = document.querySelector(".get-button");
const showData = document.querySelector(".show-data");

getBtn.onclick = function () {
    myData();
};

let myData = async () => {
    if (theInput.value === "") {
        showData.innerHTML = `<span>Please Enter Your Github E-Mail.</span>`
    } else {
        await fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then(
             (response) => response.json())
        .then((data) => {
                 showData.innerHTML = " ";
            data.forEach(repo => {
                let div = document.createElement("div");
                let divName = document.createTextNode(repo.name)
                div.appendChild(divName)
                showData.appendChild(div)

                let theUrl = document.createElement("a");
                let urltext = document.createTextNode("GO")
                theUrl.appendChild(urltext)
                // Adding The Href To The The URL
                theUrl.href = `https://github.com/${theInput.value}/${repo.name}`
                div.appendChild(theUrl)

                // Repositories Stars
                let repoStars = document.createElement("span")
                let repostarsText = document.createTextNode(`Stars ${repo.stargazers_count}`)
                repoStars.appendChild(repostarsText)
                div.appendChild(repoStars)
                div.className = "repositories-box"
            })
     })
}}