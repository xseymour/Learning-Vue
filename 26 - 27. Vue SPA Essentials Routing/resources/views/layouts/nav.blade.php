<nav class="tabs is-boxed align-self-center">
    <div class="container">
        <ul>
            <router-link tag="li" to="/" exact>
                <a>Home</a>
            </router-link> {{-- Add exact attribute to home page, as vue inclusive patter matching assumes any url that starts with '/' is active --}}
            <router-link tag="li" to="/about">
                <a>About</a>
            </router-link>
            <router-link tag="li" to="/contact">
                <a>Contact</a>
            </router-link>
        </ul>
    </div>
</nav>