const LinksSocialMedia = {
  github: 'lucashaugustogt',
  youtube: 'LucasHenriqueWorship',
  facebook: 'lucas.henrique.1291421',
  instagram: 'lucashaugusto',
  twitter: 'lucashaugusto'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      urlGit.href = data.html_url
      linkusernameGit.textContent = data.login
      avatarGit.src = data.avatar_url
      locationGit.textContent = data.location
    })
}

getGitHubProfileInfos()
