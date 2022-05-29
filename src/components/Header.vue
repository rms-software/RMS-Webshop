<template>
    <span>
        <div class="header">
            <span id="logo" v-if="logo">
                <img :src="logo" alt="logo" />
            </span>
            
            <span v-if="title" id="title">
                {{ title }}
            </span>

            <span id="navbar">
                <router-link v-for="link in navLinks"
                             class="router-link"
                            :key="link.to"
                            :style="`width: ${linkWidth}px;`"
                            :to="link.to">
                    {{ link.name }}
                </router-link>
            </span>
        </div>

        <div class="navigator">
            <router-link v-for="link in navLinks"
                         class="router-link"
                        :key="link.to"
                        :style="`width: ${linkWidth}px;`"
                        :to="link.to">
                {{ link.name }}
            </router-link>
        </div>

        <div class="mobile-navigator" v-if="navLinks.length > 0">
            <button class="btn" @click="toggleBurger">
                <unicon name="bars" fill="black"></unicon>
            </button>

            <div class="link-list" v-if="burgerOpen">
                <router-link v-for="link in navLinks"
                             class="router-link"
                             @click.native="burgerOpen = false"
                             :key="link.to"
                             :to="link.to">
                    {{ link.name }}
                </router-link>
            </div>
        </div>
    </span>
    
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: null
        },

        logo: {
            type: String,
            default: null
        },

        navLinks: {
            type: Array,
            default: () => []
        },

        linkWidth: {
            type: Number,
            default: 40
        }
    },

    data: () => ({
        burgerOpen: false
    }),

    methods: {
        toggleBurger() {
            this.burgerOpen = !this.burgerOpen
        }
    }
}
</script>


<style scoped lang="scss">
@import "./style.scss";

.header {
    background: $color-bg-standard;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

    @media only screen and (max-width: $size-tablet) {
        & {
            justify-content: space-around;
        }
    }

    #logo > img {
        height: 100px;
        padding-right: 20px;
        margin-left: 40px;
    }

    #title {
        font-size: 20px;
        font-weight: 20px;
        color: $color-fg-standard;
    }

    #navbar {
        margin-right: 40px;
        display: none;

        @media only screen and (min-width: $size-tablet) {
            & {
                display: inline;
            }
        }

        .router-link {
            color: $color-fg-standard;
            text-decoration: none;
            padding: 20px 5px;
            display: inline-block;
            text-align: center;

            &:hover {
                background: rgba(0,0,0,0.1);
            }

            &.router-link-exact-active {
                background: rgba(0,0,0,0.05);
            }
        }
    }
}

.navigator {
    background: $color-bg-standard;
    padding-left: 40px;
    display: flex;
    align-items: center;
    display: none;

    @media only screen and (max-width: $size-tablet) and (min-width: $size-mobile) {
        & {
            display: block;
        }
    }

    .router-link {
        color: $color-fg-standard;
        text-decoration: none;
        padding: 20px 5px;
        display: inline-block;
        text-align: center;

        &:hover {
            background: rgba(0,0,0,0.1);
        }

        &.router-link-exact-active {
            background: rgba(0,0,0,0.05);
        }
    }
}

.mobile-navigator {
    background: $color-bg-standard;
    padding-left: 40px;
    display: flex;
    align-items: center;
    display: block;

    @media only screen and (min-width: $size-mobile) {
        display: none;
    }

    .btn {
        width: calc(100% - 30px);
        text-align: center;
    }

    .link-list {
        display: grid;

        .router-link {
            color: $color-fg-standard;
            text-decoration: none;
            padding: 20px 5px;
            display: block;
            text-align: center;
            width: calc(100% - 40px);

            &:hover {
                background: rgba(0,0,0,0.1);
            }

            &.router-link-exact-active {
                background: rgba(0,0,0,0.05);
            }
        }
    }
}
</style>