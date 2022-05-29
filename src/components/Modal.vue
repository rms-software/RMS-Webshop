<template>
    <div id="modal-wrapper" v-if="isOpen">
        <div id="modal">
            <div id="header">
                <div id="title">{{ title }}</div>
                <div id="closer" @click="isOpen = false">x</div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Modal Title"
        }
    },

    data: () => ({
        isOpen: false
    })
}
</script>

<style scoped lang="scss">
#modal-wrapper {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;

    #modal {
        position: absolute;
        background: white;
        width: 280px;
        left: calc(50% - 150px);
        top: 40px;
        border-radius: 8px;
        padding: 20px;
        text-align: left;

        #header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;

            #title {
                font-weight: bold;
            }

            #closer {
                color: gray;

                &:hover {
                    cursor: pointer;
                    color: black;
                }
            }
        }
    }
}
</style>