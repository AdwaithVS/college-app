import React from 'react'

const TitleBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SBCE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/gallery">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contacts">Contacts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default TitleBar
