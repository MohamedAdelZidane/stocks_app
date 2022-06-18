<template>
    <header>

        <nav class=" navbar navbar-dark navbar-expand-lg bg-light">
            <div class="container">
                <!-- <a class="navbar-brand" href="#">Stock Ticker</a> -->
                <router-link class="navbar-brand" to="/">Stocks Ticker</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <!-- <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li> -->
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="#">Features</a> -->
                            <router-link class="nav-link" to="/stocks">Stocks</router-link>
                        </li>
                        <li class="nav-item">
                            <!-- <a class="nav-link" href="#">Pricing</a> -->
                            <router-link class="nav-link" to="/currency_pairs">FX</router-link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>

        


        <!-- <nav>
            <h1>
                <router-link to="/">Stocks Ticker</router-link>
            </h1>
            <ul>
                <li>
                    <router-link to="/stocks">Stocks</router-link>
                </li>
                <li>
                    <router-link to="/currency_pairs">FX</router-link>
                </li>



            </ul>
        </nav> -->
    </header>
</template>

<style scoped>
.navbar-brand{
    color: #000 !important;
}
.nav-link{
    color: #000 !important;
}
.navbar-toggler-icon{
    background-color: #000;
}
.navbar-toggler{
   border-color: black !important;
}
</style>