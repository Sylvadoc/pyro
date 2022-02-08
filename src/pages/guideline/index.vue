<template>
    <div class="container-global">
        <h1>Guideline</h1>

        <h2>Couleurs</h2>
        <table class="colors">
            <tr>
                <th>Couleur</th>
                <th>Code hexadécimal</th>
                <th>Variable</th>
            </tr>
            <tr>
                <td>rouge primaire</td>
                <td></td>
                <td></td>
            </tr>
          <tr>
            <td>rouge secondaire</td>
            <td></td>
            <td></td>
          </tr>
            <tr>
                <td>vert primaire</td>
                <td>#097c75</td>
                <td>$green-primary</td>
            </tr>
            <tr>
                <td>vert secondaire</td>
                <td>#0BA89D</td>
                <td>$green-secondary</td>
            </tr>
        </table>

    </div>
</template>

<style lang="scss">
@import '../../styles/01-settings/variables';
.colors {
    border-collapse: collapse;
    width: 40rem;
    th, td {
        padding: .5rem;
        text-align: left;
    }
}
.container-global {
    max-width: 100rem;
    margin: 0 auto;
}
.container {
    display: grid;
    grid-template-columns: 5rem 1fr 1fr;
    grid-column-gap: 2rem;

    h2 {
        grid-column: 1/4;
    }
}
</style>