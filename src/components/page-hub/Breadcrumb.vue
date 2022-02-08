<template>
    <nav class="breadcrumb-nav" aria-label="Fil d'Ariane des pages immobilier">
        <ol>
            <li>
                <router-link to="/">
                    Accueil
                </router-link>
            </li>
            <li>
                <router-link to="/immobilier">
                    Immobilier
                </router-link>
            </li>
            <li aria-current="location">
                page courante
            </li>
        </ol>
    </nav>
</template>
