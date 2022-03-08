<template>
    <div class="Container_extende">
        <div class="container">
            <div style="display: flex;">
                <!-- Loguin -->
                <div class="Container-Login">
                    <div class="Box-Login">
                        <div class="A-Left">
                            <img src="../assets/Back.png" alt width="37" />
                        </div>
                        <div>
                            <img src="../assets/Facelogin.png" alt width="238" />
                        </div>
                        <div>
                            <img src="../assets/Letra-Login.png" alt width="238" />
                        </div>

                        <div class="Cursive">¡Hola, te extrañamos!</div>
                        <p></p>
                        <div class="message">
                            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                        </div>
                        <form @submit="checkForm">
                            <div class="form-group">
                                <div class="Title-label">Email</div>
                                <input
                                    type="email"
                                    v-model="email"
                                    name="email"
                                    placeholder="Email"
                                />
                            </div>
                            <p></p>
                            <div class="form-group">
                                <div class="Title-label">Contraseña</div>
                                <div style="text-align: right;">
                                    <input
                                        v-if="passawesome"
                                        type="text"
                                        v-model="password"
                                        name="password"
                                        placeholder="***********"
                                    />
                                    <input
                                        v-else
                                        type="password"
                                        v-model="password"
                                        name="password"
                                        placeholder="Contraseña"
                                    />
                                    <div
                                        class="absolute-right"
                                        style="display: inline-block; position: absolute;"
                                    >
                                        <img
                                            v-if="passawesome"
                                            src="../assets/Eye_Off.png"
                                            alt
                                            width="45"
                                            @click="passawesome = !passawesome"
                                        />
                                        <img
                                            v-else
                                            src="../assets/Eye.png"
                                            alt
                                            width="45"
                                            @click="passawesome = !passawesome"
                                        />
                                    </div>
                                </div>
                            </div>

                            <p></p>
                            <div class="Text-purple">¿Olvido la contraseña?</div>
                            <br />
                            <button type="submit" class="button-purple">Acceder</button>
                            <p></p>
                            <div style="display: flex;">
                                <div style="width: 25%;" class="A-Left">
                                    <img src="../assets/Linea-Horizontal.png" alt width="70" />
                                </div>
                                <div
                                    class="Text-White A-Center"
                                    style="width: 49%;"
                                >Logueate con RRSS</div>
                                <div style="width: 25%;" class="A-Righ">
                                    <img src="../assets/Linea-Horizontal.png" alt width="70" />
                                </div>
                            </div>
                            <p></p>
                            <div style="display: flex;">
                                <div style="width: 33%; text-align: center;">
                                    <img src="../assets/Button-Instagram.png" alt width="51" />
                                </div>
                                <div style="width: 33%; text-align: center;">
                                    <img src="../assets/Button-Twiter.png" alt width="51" />
                                </div>
                                <div style="width: 33%; text-align: center;">
                                    <img src="../assets/Button-Facebook.png" alt width="51" />
                                </div>
                            </div>
                            <br />
                            <div class="Text-White A-Center">
                                Quieres registrarte?
                                <router-link to="/Register">
                                    <span class="Text-purple">Registrate</span>
                                </router-link>
                            </div>
                            <br />
                            <div>{{ login }}</div>
                            <div>
                                <img src="../assets/Linea-Horizontal.png" alt width="134" />
                            </div>
                        </form>
                        <button @click="showAlert">Hello world</button>
                    </div>
                </div>

                <!-- Slider -->
                <div class="Container-Slider">
                    <div id="carousel-login" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                class="active"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../assets/Slider-1.png" class="d-block w-100" alt="..." />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>
                                        <span class="part1-title">anime</span>
                                        <span class="part2-title">yabu.</span>
                                    </h5>
                                    <p>Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora.¡Animeyabu, tu portal de anime en línea!</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/Slider-2.png" class="d-block w-100" alt="..." />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>
                                        <span class="part1-title">anime</span>
                                        <span class="part2-title">Kyojuro.</span>
                                    </h5>
                                    <p>Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora.¡Animeyabu, tu portal de anime en línea!</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/Slider-3.png" class="d-block w-100" alt="..." />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>
                                        <span class="part1-title">anime</span>
                                        <span class="part2-title">Inosuke.</span>
                                    </h5>
                                    <p>Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora.¡Animeyabu, tu portal de anime en línea!</p>
                                </div>
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import * as Bootstrap from 'bootstrap'
import axios from "axios";
import Swal from 'sweetalert2';
const $ = require('jquery');
window.$ = $;

/* $( document ).ready(function() { console.log( "ready!" ); });  */

export default {
    data() {

        return {

            errors: [],
            showPassword: false,
            password: null,
            email: null,
            passawesome: null,
            login: null

        }

    },
    name: 'HelloWorld',
    props: {

        msg: String

    },
    methods: {
        toggleShow() {

            this.StatePassword = !this.StatePassword
            alert(this.StatePassword)
        },

        checkForm: function (e) {

            e.preventDefault();
            this.errors = [];

            if (!this.password) {
                this.errors.push('El campo Password es obligatorio.');
            }
            if (!this.email) {
                this.errors.push('El correo electrónico es obligatorio.');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('El correo electrónico debe ser válido.');
            }
            if (!this.errors.length) {

                const article = {

                    email: this.email,
                    password: this.password,
                    device_name: "samsung"

                };

                const sendPostRequest = async () => {

                    try {

                        const resp = await axios.post("https://apifood.metricamstudio.com/api/auth/login", article);

                        if (resp.data === "?¡NoL09u+") {

                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Error en Email o Password'
                            })

                        } else {

                            Swal.fire({
                                icon: 'success',
                                title: 'Ok',
                                text: 'Se ha logueado con exito'
                            })

                        }
                    } catch (err) {

                        console.error(err);

                    }
                };

                sendPostRequest();
            }

        },
        validEmail: function (email) {

            var re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);

        }

        /* ,

        Login() {


            const article = { 

                email: this.email,
                password: this.password,
                device_name: "samsung"
            };
            axios.post("https://apifood.metricamstudio.com/api/auth/login", article)
            .then(response => this.login = response.data )
            //
            //console.log(this.login);

        },
        statuslog(){
            alert(this.login);
        } */


    },
    mounted() {

        var myCarousel = document.querySelector('#carousel-login')
        new Bootstrap.Carousel(myCarousel)

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Container_extende {
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    font-family: "cursive", "Lucida Sans Regular", "Lucida Grande",
        "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

.Container-Login {
    border-radius: 15px;
    border: 3px solid #ffffff;
    background-image: linear-gradient(#c939ec, #000000);
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;
    text-align: center;
    width: 100%;
}
.Box-Login {
    width: 400px;
    margin: 0px auto;
}
.Title-label {
    color: aliceblue;
    text-align: left;
    font-size: 14px;
    padding: 5px;
}
.Icon {
    width: 55px;
    height: 45px;
    background-color: rgba(255, 255, 255, 0);
    position: sticky;
    left: 380px;
    top: 50px;
}
.A-Left {
    text-align: left;
}
.A-Right {
    text-align: right;
}
.A-Center {
    text-align: center;
}
.Cursive {
    font-style: italic;
    color: rgb(255, 255, 255);
}
.Text-purple {
    color: #e388fa;
}
.Text-White {
    color: #ffffff;
    font-size: 14px;
}
.button-purple {
    width: 100%;
    height: 60px;
    border-radius: 10px;
    border: none;
    background-color: #e388fa;
    font-weight: 800;
    color: #3e1348;
}

input {
    border: 2px solid rgb(255, 255, 255);
    background-color: rgba(255, 255, 255, 0.5);
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    color: #ffffff;
}
::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(255, 255, 255, 0.582);
    opacity: 1; /* Firefox */
    font-size: 14px;
}

.absolute-right {
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
}
a {
    text-decoration: none;
}
.message {
    color: rgb(0, 255, 21);
}

.Container-Slider {
    width: 720px;
    background-color: #3e1348;
    padding: 20px;
}
.part1-title {
    color: #ffffff;
    font-size: 50px;
    font-weight: bold;
}

.part2-title {
    color: #c939ec;
    font-size: 50px;
    font-weight: bold;
}

@media only screen and (max-width: 993px) {
    .Vista {
        background-color: rgb(106, 218, 255);
        width: 200px;
        height: 250px;
    }
    .Container-Slider {
        display: none;
    }
}

@media only screen and (min-width: 992px) {
    .Container-Login {
        border-radius: 0px;
        border: none;
        background-image: linear-gradient(#000000, #000000);
        width: 50%;
    }
}
</style>