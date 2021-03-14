<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body, html, #app {
    background-color: rgb(212, 207, 250);
    height: 100%;
    display: grid;
}

.container-sm {
    width: 30%;
}

.container-md {
    width:60%;
}

.container-sm, .container-md {
    margin:auto;
    padding: 80px;
    border-radius: 60px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    background-color: white;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}

input {
    display: block;
    height: 40px;
    border-radius: 20px;
    border:0;
}

input[type=text], input[type=password], input[type=submit] {
    font-size: 15px;
}

input[type=text], input[type=password]  {
    width: 100%;
    margin-bottom: 10px;

    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #eee;
    color: rgb(86, 88, 90);

}

input[type=submit] {
    padding-left: 40px;
    padding-right: 40px;
    background-color: rgb(64, 47, 175);
    color: snow;
}

.login-button {
    margin-top: 20px;
}

@media screen and (max-width: 600px) {
    .container-sm {
        width: 80% !important;
        padding: 10px;
    }
}
</style>
