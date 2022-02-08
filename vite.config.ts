import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteSSR from 'vite-ssr/plugin'

export default defineConfig({
    envPrefix: 'VUE_APP_',
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/styles/01-settings/variables";@import "./src/styles/04-vendors/include-media";@import "./src/styles/01-settings/mixins";@import "./src/styles/01-settings/base";@import "./src/styles/01-settings/helpers";@import "./src/styles/01-settings/debug";'
            }
        }
    },
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`
        }
    },
    plugins: [
        viteSSR(),

        Vue({
            include: [/\.vue$/]
        }),

        // https://github.com/hannoeru/vite-plugin-pages
        Pages({
            extensions: ['vue']
        }),

        // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
        Layouts(),

        // https://github.com/antfu/unplugin-vue-components
        Components({
            resolvers: [
                ElementPlusResolver()
            ],
            dts: true,
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
        })
    ],
    optimizeDeps: {
        include: [
            'vue',
            'vue-router',
            '@vueuse/core'
        ],
        exclude: [
            'vue-demi'
        ]
    }
})
